// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//Загрузка API
const axios = require("axios");

//Типограф
const Typograf = require("typograf");
const tp = new Typograf({ locale: ["ru", "en-US"] });
tp.enableRule("common/nbsp/*");

//Работа с файлами
const fs = require("fs");

//Обработка текста и ссылок
function renderURL(data) {
  //Публичный домен
  if (!!data) {
    return data.split("wp.carrotquest.io").join("www.carrotquest.io");
  }
}
function renderText(data) {
  let pageHTML = renderURL(data);
  //Lazyload
  pageHTML = pageHTML.split("<img src").join('<img loading="lazy" src');
  //Видео
  pageHTML = pageHTML
    .split("<video ")
    .join("<video autoplay loop muted playsinline ");
  pageHTML = pageHTML.split("controls").join("");
  //Типографируем
  pageHTML = tp.execute(pageHTML);
  //Carrot-quest
  pageHTML = pageHTML.split("Carrot quest").join("Carrot&nbsp;quest");
  return pageHTML;
}

//Сохранение скриптов
function saveScript(name, data) {
  fs.writeFile("./static/" + name, data, "utf8", function (err) {
    if (err) return console.log(err);
  });
}

module.exports = function (api) {
  if (process.env.GRIDSOME_SITE == "carrotquest.io") {
    // API from Tilda
    api.loadSource(async () => {
      // Files
      let tildaFiles = [];
      await axios
        .get(
          // 'https://api.tildacdn.info/v1/getproject/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329',
          "https://tilda.carrotquest.io/files_list.json"
        )
        .then((response) => {
          tildaFiles = response.data.result;
        });
      // Список страниц
      const { data } = await axios.get(
        // 'https://api.tildacdn.info/v1/getpageslist/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329',
        "https://tilda.carrotquest.io/pages_list.json"
      );
      api.createManagedPages(async ({ createPage }) => {
        for (const item of data.result) {
          if (
            item.id != "309741" &&
            !!item.published &&
            item.alias.indexOf("vacancy") == -1 &&
            item.title.indexOf("Вакансия") == -1 &&
            item.title.indexOf("cases") == -1 &&
            item.title.indexOf("Кейс") == -1
          ) {
            await axios
              .get(
                // 'https://api.tildacdn.info/v1/getpage/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&pageid=' + item.id,
                "https://tilda.carrotquest.io/page_" + item.id + ".json"
              )
              .then((response) => {
                let tildaPath = "";
                if (item.alias) {
                  tildaPath = "/" + item.alias;
                } else {
                  tildaPath = "/" + item.filename;
                }
                createPage({
                  path: tildaPath,
                  component: "./src/templates/Tilda.vue",
                  context: {
                    id: item.id,
                    title: item.title,
                    description: item.descr,
                    cover: item.img,
                    slug: item.alias,
                    html: renderText(response.data.result.html),
                    date: item.date,
                    files: {
                      js: tildaFiles.js,
                      css: tildaFiles.css,
                    },
                  },
                });
                // console.log('Tilda - ' + item.title + ' - ' + item.id + ' - готова!')
              })
              .catch(function (error) {
                console.log("Ошибка в тильде: " + item.id + " - " + error);
              });
          }
        }
      });
    });

    // API Wordpress - создаём Посты
    api.loadSource(async (actions) => {
      const { data } = await axios.get(
        // 'https://wp.carrotquest.io/blog/wp-json/wp/v2/posts?&per_page=999&_embed'
        "https://wp.carrotquest.io/blog/wp-json/wp/v2/posts?&per_page=29&_fields=id,slug,modified"
      );
      // Данные для вывода статей
      let pageContext = [];
      const collection = actions.addCollection("post");
      for (const item of data) {
        await axios
          .get("https://wp.carrotquest.io/blog/wp-json/wp/v2/posts/" + item.id)
          .then((response) => {
            collection.addNode({
              id: item.id,
              slug: item.slug,
              title: tp.execute(response.data.title.rendered),
              meta: JSON.stringify(response.data.yoast_meta),
              date: response.data.date,
              modified: response.data.modified,
              categories: response.data.categories,
              authors: response.data.acf.post__authors,
              author: response.data.author,
              featured_media_medium: renderURL(
                response.data.featured_media_medium
              ),
              featured_media_large: response.data.featured_media_large[0],
              // featuredmedia: response.data._embedded['wp:featuredmedia'][0].media_details,
              content: tp.execute(response.data.content.rendered),
              sticky: response.data.sticky,
              page_views: response.data.meta.wpb_post_views_count,
              tags: response.data.tags,
            });
            pageContext[item.id] = {
              id: item.id,
              slug: item.slug,

              //SEO
              breadcrumb: {
                title: "",
                url: "",
              },
              seo: {
                title: response.data.yoast_title,
                meta: response.data.yoast_meta,
                json_ld: response.data.yoast_json_ld,
              },

              //Информация
              author: response.data.author,
              date: response.data.formatted_date,
              category: response.data.categories,
              modified: response.data.modified,

              //Тело статьи
              featured_media_medium: renderURL(
                response.data.featured_media_medium
              ),
              featured_media_large: response.data.featured_media_large,
              // featuredmedia: response.data._embedded['wp:featuredmedia'][0].media_details,
              title: renderText(response.data.title.rendered),
              description: renderText(response.data.excerpt.rendered),
              content: renderText(response.data.content.rendered),
            };
          });
      }
      // Делаем страницы статей
      api.createManagedPages(async ({ createPage }) => {
        for (const item of data) {
          createPage({
            path: `/blog/${item.slug}/`,
            component: "./src/templates/Post.vue",
            context: pageContext[item.id],
          });
          // console.log('Пост - ' + item.id + ' - готов!')

          // Сило для Лид-бота
          if (
            item.id == "26546" ||
            item.id == "23996" ||
            item.id == "25965" ||
            item.id == "22648" ||
            item.id == "24191" ||
            item.id == "25798" ||
            item.id == "24623" ||
            item.id == "23719" ||
            item.id == "24292" ||
            item.id == "23543" ||
            item.id == "25761" ||
            item.id == "25194" ||
            item.id == "22882" ||
            item.id == "24730"
          ) {
            pageContext[item.id].breadcrumb.title = "Лид-бот";
            pageContext[item.id].breadcrumb.url = "/chatbot/";
            createPage({
              path: `/chatbot/${item.slug}/`,
              component: "./src/templates/Post.vue",
              context: pageContext[item.id],
            });
          }

          //Делаем AMP
          fs.readFile(
            "./static/blog/" + item.slug + "/amp/modified.json",
            "utf8",
            function (err, contents) {
              let ampModified = JSON.stringify({ date: "" });
              if (contents) {
                ampModified = JSON.parse(contents);
              }
              if (ampModified.date != item.modified) {
                fs.mkdirSync("./static/blog/" + item.slug, { recursive: true });
                fs.mkdirSync("./static/blog/" + item.slug + "/amp/", {
                  recursive: true,
                });
                axios
                  .get("https://wp.carrotquest.io/blog/" + item.slug + "/amp/")
                  .then((response) => {
                    fs.writeFile(
                      "./static/blog/" + item.slug + "/amp/index.html",
                      renderText(response.data),
                      "utf8",
                      function (err) {
                        if (err) return console.log(err);
                      }
                    );
                    fs.writeFile(
                      "./static/blog/" + item.slug + "/amp/modified.json",
                      JSON.stringify({ date: item.modified }),
                      "utf8",
                      function (err) {
                        if (err) return console.log(err);
                      }
                    );
                    // console.log('AMP - ' + item.id + ' - готов!')
                  });
              }
            }
          );
        }
      });
    });

    // API Wordpress - создаём Категории
    api.loadSource(async (actions) => {
      const { data } = await axios.get(
        "https://wp.carrotquest.io/blog/wp-json/wp/v2/categories?_fields=id,name,slug,description&per_page=50"
      );
      // Данные для вывода категорий
      const collection = actions.addCollection("categories");
      for (const item of data) {
        collection.addNode({
          id: item.id,
          slug: item.slug,
          title: tp.execute(item.name),
          description: tp.execute(item.description),
        });
      }
      // Делаем страницы категорий
      api.createManagedPages(async ({ createPage }) => {
        for (const item of data) {
          createPage({
            path: `/blog/${item.slug}/`,
            component: "./src/templates/Category.vue",
            context: {
              id: item.id,
              ids: [item.id],
              slug: item.slug,
              title: tp.execute(item.name),
              description: tp.execute(item.description),
            },
          });
          // console.log('Категория - ' + item.name + ' - готова!')
        }
      });
    });

    // API Wordpress - создаём Авторов
    api.loadSource(async (actions) => {
      const { data } = await axios.get(
        "https://wp.carrotquest.io/blog/wp-json/wp/v2/users?_fields=id,name,description,slug,avatar_urls&per_page=50"
      );
      // Данные для вывода автора
      const collection = actions.addCollection("authors");
      for (const item of data) {
        collection.addNode({
          id: item.id,
          name: tp.execute(item.name),
          description: tp.execute(item.description),
          avatar: item.avatar_urls,
        });
      }
      // Делаем страницы авторов
      api.createManagedPages(async ({ createPage }) => {
        const { data } = await axios.get(
          "https://wp.carrotquest.io/blog/wp-json/wp/v2/pages?_parent=28678"
        );
        for (const item of data) {
          let pageHTML = item.content.rendered;

          if (item.parent == 28678) {
            createPage({
              path: `/blog/authors/${item.slug}/`,
              component: "./src/templates/Author.vue",
              context: {
                id: item.acf.user.ID,
                title: tp.execute(item.title.rendered),
                modified: item.modified,
                featured_media: item.featured_media_large,
                content: tp.execute(pageHTML),
                another_publications: item.acf.another_publications,

                //SEO
                seo: {
                  title: item.yoast_title,
                  meta: item.yoast_meta,
                  json_ld: item.yoast_json_ld,
                },
              },
            });
            // console.log('Автор - ' + item.title.rendered + ' - готов!')
          }
        }
      });
    });

    //Забираем sitemaps из блога, скрипты аналитики и пикселей
    api.loadSource(async (actions) => {
      // Sitemaps
      let blogSitemaps = [
        "post-sitemap.xml",
        "page-sitemap.xml",
        "author-sitemap.xml",
      ];
      blogSitemaps.forEach(async (element) => {
        const { data } = await axios.get(
          "https://wp.carrotquest.io/blog/" + element
        );
        fs.writeFile(
          "./static/blog/" + element,
          data.split("wp.carrotquest.io").join("www.carrotquest.io"),
          "utf8",
          function (err) {
            if (err) return console.log(err);
          }
        );
      });
      // Яндекс.турбо
      const { data } = await axios.get(
        "https://wp.carrotquest.io/blog/feed/turbo/"
      );
      fs.writeFile(
        "./static/blog/turbo.xml",
        data.split("wp.carrotquest.io").join("www.carrotquest.io"),
        "utf8",
        function (err) {
          if (err) return console.log(err);
        }
      );
      // Скрипты
      let scripts = [
        {
          name: "renta-analytics.js",
          url: "https://cdn.renta.im/analytics/carrot_quest/analytics.js",
        },
        {
          name: "yandex-metrika.js",
          url: "https://mc.yandex.ru/metrika/tag.js",
        },
        {
          name: "fbevents.js",
          url: "https://connect.facebook.net/en_US/fbevents.js",
        },
        {
          name: "openapi.js",
          url: "https://vk.com/js/api/openapi.js?154",
        },
      ];
      scripts.forEach(async (element) => {
        await axios
          .get(element.url)
          .then((response) => saveScript(element.name, response.data));
      });
    });

    // Ресурсы библиотеки
    api.loadSource(async (actions) => {
      const collection = actions.addCollection("library");
      let refs = "";
      await axios
        .get("https://carrotquest.cdn.prismic.io/api/v2")
        .then((response) => {
          refs = response.data.refs[0].ref;
        });
      const { data } = await axios.get(
        "https://carrotquest.cdn.prismic.io/api/v2/documents/search?ref=" +
          refs +
          "&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X0ZSlRIAAPalRttu%22%29+%5D%5D"
      );
      // Данные для вывода ресурсов
      for (const item of data.results[0].data.body[0].items.reverse()) {
        collection.addNode({
          title: item.title,
          type: item.type,
          event: item.event,
          pic: item.pic.url,
        });
      }
    });
  }
};

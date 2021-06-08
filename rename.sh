# Этот файл переименовывает папки страниц для Carrot и Dashly
if [ ! -d "./src/carrotquest-pages/" ]; then
  mv ./src/pages/ ./src/carrotquest-pages/
fi
if [ ! -d "./src/dashly-pages/" ]; then
  mv ./src/pages/ ./src/dashly-pages/
fi

if [ $SITE = "carrotquest.io" ]; then
  echo "CQ"
  mv ./src/carrotquest-pages/ ./src/pages/
fi

if [ $SITE = "dashly.io" ]; then
  echo "Dashly"
  mv ./src/dashly-pages/ ./src/pages/
fi
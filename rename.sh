#!/bin/bash
# Этот файл переименовывает папки страниц для Carrot и Dashly
if [ ! -d "./src/.cq-pages/" ]; then
  mv ./src/pages/                           ./src/.cq-pages/
  mv ./static/*                             ./static/.cq-static/
  mv ./static/.cq-static/.dashly-static/    ./static/
  mv ./static/.cq-static/assets/            ./static/
fi
if [ ! -d "./src/.dashly-pages/" ]; then
  mv ./src/pages/                           ./src/.dashly-pages/
  mv ./static/*                             ./static/.dashly-static/
  mv ./static/.dashly-static/.cq-static/    ./static/
  mv ./static/.dashly-static/assets/        ./static/
fi

if [ $SITE = "carrotquest.io" ]; then
  echo "CQ"
  mv ./src/.cq-pages/                       ./src/pages/
  mv ./static/.cq-static/*                  ./static/
fi

if [ $SITE = "dashly.io" ]; then
  echo "Dashly"
  mv ./src/.dashly-pages/                   ./src/pages/
  mv ./static/.dashly-static/*              ./static/
fi
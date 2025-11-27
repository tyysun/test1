#!/usr/bin/env bash
rm -rf dist
pnpm run build
cd dist
git init
git add .
git commit -m deploy
git remote add origin git@github.com:tyysun/test1-preview.git
git push -f origin main:main
cd -
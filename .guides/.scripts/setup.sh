#!/usr/bin/env bash

#rm ./package-lock.json || true
cp .guides/.scripts/package.json ./
npm i
npm run setup
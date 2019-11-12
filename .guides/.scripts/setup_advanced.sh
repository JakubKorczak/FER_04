#!/usr/bin/env bash

DIR=./.guides/exercises/advanced;
SRC="${DIR}/*";
DEST=./repo_adv

test -d ${DEST} || mkdir ${DEST}
cp -r ${SRC} ${DEST}

cp "${DIR}/.gitignore" "${DEST}/.gitignore"


for file in ${DEST}/*; do
    if test -d ${file}; then
        if test -d "${file}/bootstrap"; then
            cp -r -n ${file}/bootstrap/* ${file}/  #copy without overwriting
            cp -r ${file}/bootstrap/*.md ${file}/  #copy with overwriting for instructions
            rm -r ${file}/bootstrap || true
        fi;

        if test -d "${file}/solution/test"; then
            cp -r ${file}/solution/test ${file}
        fi;

        if test -d "${file}/solution"; then
            rm -r ${file}/solution
        fi;
    fi;
done;


#!/usr/bin/env bash

DIR=./.guides/exercises/basics/*;
DEST=./repo

test -d ${DEST} || mkdir ${DEST}
cp -r ${DIR} ${DEST}


for file in ${DEST}/*; do
    if test -d ${file}; then
        if test -d "${file}/bootstrap"; then
            cp -r -n ${file}/bootstrap/* ${file}/  #copy without overwriting
            cp -r ${file}/bootstrap/*.md ${file}/  #copy with overwriting for instructions
#            rm -r ${file}/bootstrap || true
        fi;

        if test -d "${file}/solution/tests"; then
            cp -r ${file}/solution/tests ${file}
        fi;

        if test -d "${file}/solution"; then
            rm -r ${file}/solution
        fi;
    fi;
done;


#!/bin/sh
declare -a files=("package.json" "LICENSE" "README.md" "yarn.lock")

npm run build

for i in "${files[@]}"
do
    cp $i lib/$i
done

cd lib
ls
npm publish
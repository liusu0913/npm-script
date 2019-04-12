# 循环将less文件编译成css文件并利用cssmin压缩
mkdir dist/css
for file in src/less/*.less
do
    filename=${file##*/}
    lessc $file|cssmin > dist/css/${filename%%.*}.css
done

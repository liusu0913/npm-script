# 打包css
# 没有文件加会报错所以先创建对应的文件夹
mkdir dist/css
# 循环将less文件编译成css文件并利用cssmin压缩
for file in src/less/*.less
do
    filename=${file##*/}
    lessc $file|cssmin > dist/css/${filename%%.*}.css
done

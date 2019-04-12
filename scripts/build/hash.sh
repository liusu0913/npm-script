# 现将js，css打上版本号，在拷贝html文件进行版本替换
hashmark -c dist -r -l 6 '**/*.{css,js}' '{dir}/{name}-{hash}{ext}' | replaceinfiles -S -s 'src/index.html' -d 'dist/index.html'

# 再将图片打上版本号进行替换，这样可以替换条所有的js，css，html中对图片的引用
hashmark -c dist -r -l 6 '**/*.{png,jpg}' '{dir}/{name}-{hash}{ext}' | replaceinfiles -S -s 'dist/{**/*.css,**/*.js,*.html}' -d '{dir}/{base}'
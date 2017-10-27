let mix = require('laravel-mix')

mix.js('src/client/app/app.jsx', 'dist')
   .sass('src/client/style/app.sass', 'dist')
   .setPublicPath('dist')

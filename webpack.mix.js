let mix = require('laravel-mix')

mix.react('src/client/app/app.jsx', './dist/client')
   .extract(['react', 'react-dom', 'react-router', 'react-router-dom'])
   .sass('src/client/style/app.sass', './dist/client')
   .sourceMaps()
   .setPublicPath(path.normalize('./dist/client'))

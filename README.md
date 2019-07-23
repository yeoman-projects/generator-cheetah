## Installation
- npm install -g yo
- npm install webpack-style-bundler
- yo webpack-style-bundler

##Webpack Style Bundler
TLDR: Takes a folder of scss or sass files and transforms into a single optimised .css file.
- npm run build
- npm run start
- npm run release

###Get Started
To get this template working with your project you must first sync your **src directory** with this project, such that all of your existing files are contained within **/src**. Please note that webpack is expecting *index.js* and *index.html* as your main files. Webpack will handle the rest. This project supports React version 16.8.*, but you will need to merge your package.json dependencies with ours to ensure you have the required node modules to run your project.  

###npm run build (production build)
 - creates 'contenthashed' file for caching
 - uses optimisation, such as minification, removal of whitespace, attribute quotes, etc. for js and css.
- uses MiniCssExtractPlugin for styling
- uses webpack dev-tool 'source-map' for production.

###npm run start
- creates standard bundled js file 
- transforms scss into css and css into js, and injects into dom
- uses webpack dev-tool 'inline-source-map' for development

###npm run release
- unoptimised build. Merges all styling into the release folder under one .css file 'zebra.css'. This is used for further development and comes with the npm release of this package.

## License

MIT © [Marc Adlington](marcadlington.com)


[npm-image]: https://badge.fury.io/js/generator-webpack-stlye-bundler.svg
[npm-url]: https://npmjs.org/package/generator-webpack-stlye-bundler
[travis-image]: https://travis-ci.org//generator-webpack-stlye-bundler.svg?branch=master
[travis-url]: https://travis-ci.org//generator-webpack-stlye-bundler
[daviddm-image]: https://david-dm.org//generator-webpack-stlye-bundler.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-webpack-stlye-bundler

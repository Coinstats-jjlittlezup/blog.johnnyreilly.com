(window.webpackJsonp=window.webpackJsonp||[]).push([[1009],{1089:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(8),r=(t(0),t(1166)),i={title:"Using ts-loader with webpack 2",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["ts-loader","webpack 2"],hide_table_of_contents:!1},s={permalink:"/2016/12/19/using-ts-loader-with-webpack-2",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-12-19-using-ts-loader-with-webpack-2.md",source:"@site/blog/2016-12-19-using-ts-loader-with-webpack-2.md",description:"Hands up, despite being one of the maintainers of ts-loader (a TypeScript loader for webpack) I have not been tracking webpack v2. My reasons? Well, I'm keen on cutting edge but bleeding edge is often not a ton of fun as dealing with regularly breaking changes is frustrating. I'm generally happy to wait for things to settle down a bit before leaping aboard. However, webpack 2 RC'd last week and so it's time to take a look!",date:"2016-12-19T00:00:00.000Z",formattedDate:"December 19, 2016",tags:[{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"webpack 2",permalink:"/tags/webpack-2"}],title:"Using ts-loader with webpack 2",readingTime:7.905,truncated:!1,prevItem:{title:"webpack: configuring a loader with query / options",permalink:"/2017/01/01/webpack-configuring-loader-with-query"},nextItem:{title:"webpack: syncing the enhanced-resolve",permalink:"/2016/12/11/webpack-syncing-enhanced-resolve"}},l=[{value:"Porting our example",id:"porting-our-example",children:[]},{value:"<code>webpack.config.js</code>",id:"webpackconfigjs",children:[]},{value:"<code>plugins</code>",id:"plugins",children:[]},{value:"<code>LoaderOptionsPlugin</code> we hardly new ya",id:"loaderoptionsplugin-we-hardly-new-ya",children:[]},{value:"<code>karma.conf.js</code>",id:"karmaconfjs",children:[]},{value:"Compare and contrast",id:"compare-and-contrast",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Hands up, despite being one of the maintainers of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader")," (a TypeScript loader for webpack) I have not been tracking webpack v2. My reasons? Well, I'm keen on cutting edge but bleeding edge is often not a ton of fun as dealing with regularly breaking changes is frustrating. I'm generally happy to wait for things to settle down a bit before leaping aboard. However, ",Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack/webpack/releases/tag/v2.2.0-rc.0"},"webpack 2 RC'd last week")," and so it's time to take a look!"),Object(r.b)("h2",{id:"porting-our-example"},"Porting our example"),Object(r.b)("p",null,"Let's take ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/webpack1-gulp-react-flux-babel-karma"},"ts-loader's webpack 1 example")," and try and port it to webpack 2. Will it work? Probably; I'm aware of other people using ts-loader with webpack 2. It'll be a voyage of discovery. Like Darwin on the Beagle, I shall document our voyage for a couple of reasons:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"I'm probably going to get some stuff wrong. That's fine; one of the best ways to learn is to make mistakes. So do let me know where I go wrong."),Object(r.b)("li",{parentName:"ul"},"I'm doing this based on what I've read in the new docs; they're very much a work in progress and the mistakes I make here may lead to those docs improving even more. That matters; ",Object(r.b)("strong",{parentName:"li"},"documentation matters"),". I'll be leaning heavily on the ",Object(r.b)("a",{parentName:"li",href:"https://webpack.js.org/guides/migrating/"},"Migrating from v1 to v2")," guide.")),Object(r.b)("p",null,"So here we go. Our example is one which uses TypeScript for static typing and uses Babel to transpile from ES-super-modern (yes - it's a thing) to ES-older-than-that. Our example also uses React; but that's somewhat incidental. It only uses webpack for typescript / javascript and karma. It uses gulp to perform various other tasks; so if you're reliant on webpack for less / sass compilation etc then I have no idea whether that works."),Object(r.b)("p",null,"First of all, let's install the latest RC of webpack:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"npm install webpack@2.2.0-rc.1 --save-dev\n")),Object(r.b)("h2",{id:"webpackconfigjs"},Object(r.b)("inlineCode",{parentName:"h2"},"webpack.config.js")),Object(r.b)("p",null,"Let's look at our existing ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nvar path = require('path');\n\nmodule.exports = {\n  cache: true,\n  entry: {\n    main: './src/main.tsx',\n    vendor: [\n      'babel-polyfill',\n      'fbemitter',\n      'flux',\n      'react',\n      'react-dom'\n    ]\n  },\n  output: {\n    path: path.resolve(__dirname, './dist/scripts'),\n    filename: '[name].js',\n    chunkFilename: '[chunkhash].js'\n  },\n  module: {\n    loaders: [{\n      test: /\\.ts(x?)$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader?presets[]=es2016&presets[]=es2015&presets[]=react!ts-loader'\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel',\n      query: {\n        presets: ['es2016', 'es2015', 'react']\n      }\n    }]\n  },\n  plugins: [\n  ],\n  resolve: {\n    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']\n  },\n};\n")),Object(r.b)("p",null,"There's a number of things we need to do here. First of all, we can get rid of the empty extension under resolve; I understand that's unnecessary now. Also, I'm going to get rid of ",Object(r.b)("inlineCode",{parentName:"p"},"'.webpack.js'")," and ",Object(r.b)("inlineCode",{parentName:"p"},"'.web.js'"),"; I never used them anyway. Also, just having ",Object(r.b)("inlineCode",{parentName:"p"},"'babel'")," as a loader won't fly anymore. We need that suffix as well."),Object(r.b)("p",null,"Now I could start renaming ",Object(r.b)("inlineCode",{parentName:"p"},"loaders")," to ",Object(r.b)("inlineCode",{parentName:"p"},"rules")," as the terminology is changing. But I'd like to deal with that later since I know the old school names are still supported at present. More interestingly, I seem to remember hearing that one of the super exciting things about webpack is that it supports modules directly now. (I think that's supposed to be good for tree-shaking but I'm not totally certain.)"),Object(r.b)("p",null,"Initially I thought I was supposed to switch to a custom babel preset called ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="https://www.npmjs.com/package/babel-preset-es2015-webpack">babel-preset-es2015-webpack</a>'),'. However it has a big "DEPRECATED" mark at the top and it says I should just use ',Object(r.b)("inlineCode",{parentName:"p"},"babel-preset-es2015")," (which I already am) with the following option specified:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'{\n    "presets": [\n        [\n            "es2015",\n            {\n                "modules": false\n            }\n        ]\n    ]\n}\n')),Object(r.b)("p",null,"Looking at our existing config you'll note that for ",Object(r.b)("inlineCode",{parentName:"p"},"js")," files we're using ",Object(r.b)("inlineCode",{parentName:"p"},"query")," (",Object(r.b)("inlineCode",{parentName:"p"},"options")," in the new world I understand) to configure babel usage. We're using ",Object(r.b)("a",{parentName:"p",href:"https://webpack.github.io/docs/using-loaders.html#query-parameters"},"query parameters")," for ",Object(r.b)("inlineCode",{parentName:"p"},"ts")," files. I have ",Object(r.b)("em",{parentName:"p"},"zero")," idea how to configure preset options using query parameters. Fiddling with ",Object(r.b)("inlineCode",{parentName:"p"},"query")," / ",Object(r.b)("inlineCode",{parentName:"p"},"options")," didn't seem to work. So, I've decided to abandon using query entirely and drop in a ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="http://babeljs.io/docs/usage/babelrc/">.babelrc</a>')," file using our presets combined with the ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="https://babeljs.io/docs/plugins/#plugin-preset-options">modules</a>')," setting:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'{\n   "presets": [\n      "react", \n      [\n         "es2015",\n         {\n            "modules": false\n         }\n      ],\n      "es2016"\n   ]\n}\n')),Object(r.b)("p",null,"As an aside; apparently these are applied in reverse order. So ",Object(r.b)("inlineCode",{parentName:"p"},"es2016")," is applied first, ",Object(r.b)("inlineCode",{parentName:"p"},"es2015")," second and ",Object(r.b)("inlineCode",{parentName:"p"},"react")," third. I'm not totally certain this is correct; the ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="http://babeljs.io/docs/usage/babelrc/">.babelrc</a> docs')," are a little unclear."),Object(r.b)("p",null,"With our query options extracted we're down to a simpler ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nvar path = require('path');\n\nmodule.exports = {\n  cache: true,\n  entry: {\n    main: './src/main.tsx',\n    vendor: [\n      'babel-polyfill',\n      'fbemitter',\n      'flux',\n      'react',\n      'react-dom'\n    ]\n  },\n  output: {\n    path: path.resolve(__dirname, './dist/scripts'),\n    filename: '[name].js',\n    chunkFilename: '[chunkhash].js'\n  },\n  module: {\n    loaders: [{\n      test: /\\.ts(x?)$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader!ts-loader'\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader'\n    }]\n  },\n  plugins: [\n  ],\n  resolve: {\n    extensions: ['.ts', '.tsx', '.js']\n  },\n};\n")),Object(r.b)("h2",{id:"plugins"},Object(r.b)("inlineCode",{parentName:"h2"},"plugins")),Object(r.b)("p",null,"In our example the ",Object(r.b)("inlineCode",{parentName:"p"},"plugins")," section of our ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js")," is extended in a separate process. Whilst we're developing we also set the ",Object(r.b)("inlineCode",{parentName:"p"},"debug")," flag to be ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/guides/migrating/#debug"},"It seems we need to introduce a ",Object(r.b)("inlineCode",{parentName:"a"},"LoaderOptionsPlugin")," to do this for us.")),Object(r.b)("p",null,"As we introduce our ",Object(r.b)("inlineCode",{parentName:"p"},"LoaderOptionsPlugin")," we also need to make sure that we provide it with ",Object(r.b)("inlineCode",{parentName:"p"},"options"),". How do I know this? Well ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/issues/283"},"someone raised an issue against ts-loader"),". I don't think this is actually an issue with ts-loader; I think it's just a webpack 2 thing. I could be wrong; answers on a postcard please."),Object(r.b)("p",null,"Either way, to get up and running we just need the ",Object(r.b)("inlineCode",{parentName:"p"},"LoaderOptionsPlugin")," in play. Consequently, most of what follows in our ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.js")," file is unchanged:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// .....\n\nvar webpackConfig = require('../webpack.config.js');\nvar packageJson = require('../package.json');\n\n// .....\n\nfunction buildProduction(done) {\n\n   // .....\n\n   myProdConfig.plugins = myProdConfig.plugins.concat(\n      // .....\n\n      // new webpack.optimize.DedupePlugin(), Not a thing anymore apparently\n      new webpack.optimize.UglifyJsPlugin(),\n\n      // I understand this here matters...\n      // but it doesn't seem to make any difference; perhaps I'm missing something?\n      new webpack.LoaderOptionsPlugin({\n        minimize: true,\n        debug: false\n      }),\n\n      failPlugin\n   );\n\n   // .....\n}\n\nfunction createDevCompiler() {\n   var myDevConfig = webpackConfig;\n   myDevConfig.devtool = 'inline-source-map';\n   // myDevConfig.debug = true; - not allowed in webpack 2\n\n   myDevConfig.plugins = myDevConfig.plugins.concat(\n      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),\n      new WebpackNotifierPlugin({ title: 'Webpack build', excludeWarnings: true }),\n\n      // this is the Webpack 2 hotness!\n      new webpack.LoaderOptionsPlugin({\n         debug: true,\n         options: myDevConfig\n      })\n      // it ends here - there wasn't much really....\n\n   );\n\n   // create a single instance of the compiler to allow caching\n   return webpack(myDevConfig);\n}\n\n// .....\n")),Object(r.b)("h2",{id:"loaderoptionsplugin-we-hardly-new-ya"},Object(r.b)("inlineCode",{parentName:"h2"},"LoaderOptionsPlugin")," we hardly new ya"),Object(r.b)("p",null,"After a little more experimentation it seems that the ",Object(r.b)("inlineCode",{parentName:"p"},"LoaderOptionsPlugin")," is not necessary at all for our own use case. In fact it's probably not best practice to get used to using it as it's only intended to live a short while whilst people move from webpack 1 to webpack 2. In that vein let's tweak our ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.js")," file once more:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function buildProduction(done) {\n\n   // .....\n\n   myProdConfig.plugins = myProdConfig.plugins.concat(\n      // .....\n\n      new webpack.optimize.UglifyJsPlugin({\n         compress: {\n            warnings: true\n         }\n      }),\n\n      failPlugin\n   );\n\n   // .....\n}\n\nfunction createDevCompiler() {\n   var myDevConfig = webpackConfig;\n   myDevConfig.devtool = 'inline-source-map';\n\n   myDevConfig.plugins = myDevConfig.plugins.concat(\n      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),\n      new WebpackNotifierPlugin({ title: 'Webpack build', excludeWarnings: true }),\n   );\n\n   // create a single instance of the compiler to allow caching\n   return webpack(myDevConfig);\n}\n\n// .....\n")),Object(r.b)("h2",{id:"karmaconfjs"},Object(r.b)("inlineCode",{parentName:"h2"},"karma.conf.js")),Object(r.b)("p",null,"Finally Karma. Our ",Object(r.b)("inlineCode",{parentName:"p"},"karma.conf.js")," with webpack 1 looked like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable no-var, strict */\n'use strict';\n\nvar webpackConfig = require('./webpack.config.js');\n\nmodule.exports = function(config) {\n  // Documentation: https://karma-runner.github.io/0.13/config/configuration-file.html\n  config.set({\n    browsers: [ 'PhantomJS' ],\n\n    files: [\n      // This ensures we have the es6 shims in place and then loads all the tests\n      'test/main.js'\n    ],\n\n    port: 9876,\n\n    frameworks: [ 'jasmine' ],\n\n    logLevel: config.LOG_INFO, //config.LOG_DEBUG\n\n    preprocessors: {\n      'test/main.js': [ 'webpack', 'sourcemap' ]\n    },\n\n    webpack: {\n      devtool: 'inline-source-map',\n      debug: true,\n      module: webpackConfig.module,\n      resolve: webpackConfig.resolve\n    },\n\n    webpackMiddleware: {\n      quiet: true,\n      stats: {\n        colors: true\n      }\n    },\n\n    // reporter options\n    mochaReporter: {\n      colors: {\n        success: 'bgGreen',\n        info: 'cyan',\n        warning: 'bgBlue',\n        error: 'bgRed'\n      }\n    }\n  });\n};\n")),Object(r.b)("p",null,"We just need to chop out the ",Object(r.b)("inlineCode",{parentName:"p"},"debug")," statement from the ",Object(r.b)("inlineCode",{parentName:"p"},"webpack")," section like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"module.exports = function(config) {\n\n  // .....\n\n    webpack: {\n      devtool: 'inline-source-map',\n      module: webpackConfig.module,\n      resolve: webpackConfig.resolve\n    },\n\n  // .....\n\n  });\n};\n")),Object(r.b)("h2",{id:"compare-and-contrast"},"Compare and contrast"),Object(r.b)("p",null,"We now have a repo that works with webpack 2 rc 1. Yay! If you'd like to see it then take a look ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/webpack2-gulp-react-flux-babel-karma"},"here"),"."),Object(r.b)("p",null,"I thought I'd compare performance / output size of compiling with webpack 1 to webpack 2. First of all in debug / development mode:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"// webpack 1\n\nVersion: webpack 1.14.0\nTime: 5063ms\n    Asset     Size  Chunks             Chunk Names\n  main.js  37.2 kB       0  [emitted]  main\nvendor.js  2.65 MB       1  [emitted]  vendor\n\n// webpack 2\n\nVersion: webpack 2.2.0-rc.1\nTime: 5820ms\n    Asset     Size  Chunks                    Chunk Names\n  main.js  38.7 kB       0  [emitted]         main\nvendor.js  2.63 MB       1  [emitted]  [big]  vendor\n")),Object(r.b)("p",null,"Size and compilation time is not massively different from webpack 1 to webpack 2. It's all about the same. I'm not sure if that's to be expected or not.... Though I've a feeling in production mode I'm supposed to feel the benefits of tree shaking so let's have a go:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"// webpack 1\n\nVersion: webpack 1.14.0\nTime: 5788ms\n                         Asset     Size  Chunks             Chunk Names\n  main.269c66e1bc13b7426cee.js  10.5 kB       0  [emitted]  main\nvendor.269c66e1bc13b7426cee.js   231 kB       1  [emitted]  vendor\n\n// webpack 2\n\nVersion: webpack 2.2.0-rc.1\nTime: 5659ms\n                         Asset     Size  Chunks             Chunk Names\n  main.33e0d70eeec29206e9b6.js  9.22 kB       0  [emitted]  main\nvendor.33e0d70eeec29206e9b6.js   233 kB       1  [emitted]  vendor\n")),Object(r.b)("p",null,"To my surprise this looks pretty much unchanged before and after as well. This may be a sign I have missed something crucial out. Or maybe that's to be expected. Do give me a heads up if I've missed something..."))}p.isMDXComponent=!0},1166:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return t?o.a.createElement(m,s(s({ref:n},c),{},{components:t})):o.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
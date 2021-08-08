"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[79715],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"ES6 + TypeScript + Babel + React + Flux + Karma: The Secret Recipe",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["ES6","Karma","React","ts-loader","Webpack"],hide_table_of_contents:!1},s=void 0,c={permalink:"/2015/12/16/es6-typescript-babel-react-flux-karma",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-12-16-es6-typescript-babel-react-flux-karma.md",source:"@site/blog/2015-12-16-es6-typescript-babel-react-flux-karma.md",title:"ES6 + TypeScript + Babel + React + Flux + Karma: The Secret Recipe",description:"I wrote a while ago about how I was using some different tools in a current project:",date:"2015-12-16T00:00:00.000Z",formattedDate:"December 16, 2015",tags:[{label:"ES6",permalink:"/tags/es-6"},{label:"Karma",permalink:"/tags/karma"},{label:"React",permalink:"/tags/react"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:13.445,truncated:!1,prevItem:{title:"Live Reload Considered Harmful",permalink:"/2015/12/20/live-reload-considered-harmful"},nextItem:{title:"IQueryable... IEnumerable... Hmmm...",permalink:"/2015/11/30/iqueryable-ienumerable-hmmm"}},u=[{value:"What a Guy Wants",id:"what-a-guy-wants",children:[]},{value:"gulpfile.js",id:"gulpfilejs",children:[]},{value:"WebPack",id:"webpack",children:[]},{value:"Inject",id:"inject",children:[]},{value:"Static Files",id:"static-files",children:[]},{value:"Karma",id:"karma",children:[]},{value:"Babel 5 -&gt; Babel 6",id:"babel-5---babel-6",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I wrote ",(0,r.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2015/09/things-done-changed.html"},"a while ago")," about how I was using some different tools in a current project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React with JSX"),(0,r.kt)("li",{parentName:"ul"},"Flux"),(0,r.kt)("li",{parentName:"ul"},"ES6 with Babel"),(0,r.kt)("li",{parentName:"ul"},"Karma for unit testing")),(0,r.kt)("p",null,"I have fully come to love and appreciate all of the above. I really like working with them. However. There was still an ache in my soul and a thorn in my side. Whilst I love the syntax of ES6 and even though I've come to appreciate the clarity of JSX, I have been missing something. Perhaps you can guess? It's static typing."),(0,r.kt)("p",null,"It's actually been really good to have the chance to work without it because it's made me realise what a productivity boost having static typing actually is. The number of silly mistakes burning time that a compiler could have told me.... Sigh."),(0,r.kt)("p",null,"But the pain is over. The dark days are gone. It's possible to have strong typing, courtesy of TypeScript, plugged into this workflow. It's yours for the taking. Take it. Take it now!"),(0,r.kt)("h2",{id:"what-a-guy-wants"},"What a Guy Wants"),(0,r.kt)("p",null,"I decided a couple of months ago what I wanted to have in my setup:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"I want to be able to write React / JSX in TypeScript. Naturally I couldn't achieve that by myself but handily the TypeScript team decided to add support for JSX with ",(0,r.kt)("a",{parentName:"li",href:"http://blogs.msdn.com/b/typescript/archive/2015/09/16/announcing-typescript-1-6.aspx"},"TypeScript 1.6"),". Ooh yeah."),(0,r.kt)("li",{parentName:"ol"},"I wanted to be able to write ES6. When I realised ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/issues/3956"},"the approach for writing ES6 and having the transpilation handled by TypeScript wasn't clear")," I had another idea. I thought ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/issues/4765"},'"what if I write ES6 and hand off the transpilation to Babel?"')," i.e. Use TypeScript for type checking, not for transpilation. I realised that ",(0,r.kt)("a",{parentName:"li",href:"http://www.jbrantly.com/es6-modules-with-typescript-and-webpack/#configuringwebpack"},"James Brantly had my back")," here already. Enter ",(0,r.kt)("a",{parentName:"li",href:"https://webpack.github.io/"},"Webpack")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader"),"."),(0,r.kt)("li",{parentName:"ol"},"Debugging. Being able to debug my code is non-negotiable for me. If I can't debug it I'm less productive. (I'm also bitter and twisted inside.) I should say that I wanted to be able to debug my ",(0,r.kt)("em",{parentName:"li"},"original")," source code. Thanks to the magic of ",(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?usp=sharing"},"sourcemaps"),", that mad thing is possible."),(0,r.kt)("li",{parentName:"ol"},"Karma for unit testing. I've become accustomed to writing my tests in ES6 and running them on a continual basis with ",(0,r.kt)("a",{parentName:"li",href:"https://karma-runner.github.io/0.13/index.html"},"Karma"),". This allows for a rather good debugging story as well. I didn't want to lose this when I moved to TypeScript. I didn't.")),(0,r.kt)("p",null,"So I've talked about what I want and I've alluded to some of the solutions that there are. The question now is how to bring them all together. This post is, for the most part, going to be about correctly orchestrating a number of ",(0,r.kt)("a",{parentName:"p",href:"http://gulpjs.com/"},"gulp tasks")," to achieve the goals listed above. If you're after the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Blue_Peter"},'Blue Peter "here\'s one I made earlier"')," moment then take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScriptSamples/tree/master/es6-babel-react-flux-karma"},"the es6-babel-react-flux-karma repo")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScriptSamples"},"Microsoft/TypeScriptSamples repo on Github"),"."),(0,r.kt)("h2",{id:"gulpfilejs"},"gulpfile.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable no-var, strict, prefer-arrow-callback */\n'use strict';\n\nvar gulp = require('gulp');\nvar gutil = require('gulp-util');\nvar connect = require('gulp-connect');\nvar eslint = require('gulp-eslint');\nvar webpack = require('./gulp/webpack');\nvar staticFiles = require('./gulp/staticFiles');\nvar tests = require('./gulp/tests');\nvar clean = require('./gulp/clean');\nvar inject = require('./gulp/inject');\n\nvar lintSrcs = ['./gulp/**/*.js'];\n\ngulp.task('delete-dist', function (done) {\n  clean.run(done);\n});\n\ngulp.task('build-process.env.NODE_ENV', function () {\n  process.env.NODE_ENV = 'production';\n});\n\ngulp.task('build-js', ['delete-dist', 'build-process.env.NODE_ENV'], function(done) {\n  webpack.build().then(function() { done(); });\n});\n\ngulp.task('build-other', ['delete-dist', 'build-process.env.NODE_ENV'], function() {\n  staticFiles.build();\n});\n\ngulp.task('build', ['build-js', 'build-other', 'lint'], function () {\n  inject.build();\n});\n\ngulp.task('lint', function () {\n  return gulp.src(lintSrcs)\n    .pipe(eslint())\n    .pipe(eslint.format());\n});\n\ngulp.task('watch', ['delete-dist'], function() {\n  process.env.NODE_ENV = 'development';\n  Promise.all([\n    webpack.watch()//,\n    //less.watch()\n  ]).then(function() {\n    gutil.log('Now that initial assets (js and css) are generated inject will start...');\n    inject.watch(postInjectCb);\n  }).catch(function(error) {\n    gutil.log('Problem generating initial assets (js and css)', error);\n  });\n\n  gulp.watch(lintSrcs, ['lint']);\n  staticFiles.watch();\n  tests.watch();\n});\n\ngulp.task('watch-and-serve', ['watch'], function() {\n  postInjectCb = stopAndStartServer;\n});\n\nvar postInjectCb = null;\nvar serverStarted = false;\nfunction stopAndStartServer() {\n  if (serverStarted) {\n    gutil.log('Stopping server');\n    connect.serverClose();\n    serverStarted = false;\n  }\n  startServer();\n}\n\nfunction startServer() {\n  gutil.log('Starting server');\n  connect.server({\n    root: './dist',\n    port: 8080\n  });\n  serverStarted = true;\n}\n")),(0,r.kt)("p",null,"Let's start picking this apart; what do we actually have here? Well, we have 2 gulp tasks that I want you to notice:"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"build"),(0,r.kt)("dd",null,(0,r.kt)("p",null,"This is likely the task you would use when deploying. It takes all of your source code, builds it, provides cache-busting filenames (eg ",(0,r.kt)("code",null,"main.dd2fa20cd9eac9d1fb2f.js"),"), injects your shell SPA page with references to the files and deploys everything to the ",(0,r.kt)("code",null,"./dist/")," directory. So that's TypeScript, static assets like images and CSS all made ready for Production."),(0,r.kt)("p",null,"The build task also implements ",(0,r.kt)("a",{href:"https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html"},"this advice"),":"),(0,r.kt)("blockquote",{cite:"https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html"},"When deploying your app, set the ",(0,r.kt)("code",null,"NODE_ENV")," environment variable to ",(0,r.kt)("code",null,"production")," to use the production build of React which does not include the development warnings and runs significantly faster. ")),(0,r.kt)("dt",null,"watch-and-serve"),(0,r.kt)("dd",null,(0,r.kt)("p",null,'This task represents "development mode" or "debug mode". It\'s what you\'ll likely be running as you develop your app. It does the same as the build task but with some important distinctions.'),(0,r.kt)("ul",null,(0,r.kt)("li",null,"As well as building your source it also runs your tests using Karma"),(0,r.kt)("li",null,"This task is not triggered on a once-only basis, rather your files are watched and each tweak of a file will result in a new build and a fresh run of your tests. Nice eh?"),(0,r.kt)("li",null,"It spins up a simple web server and serves up the contents of ",(0,r.kt)("code",null,"./dist")," (i.e. your built code) in order that you can easily test out your app."),(0,r.kt)("li",null,"In addition, whilst it builds your source it does ",(0,r.kt)("em",null,"not")," minify your code and it emits sourcemaps. For why? For debugging! You can go to ",(0,r.kt)("code",null,(0,r.kt)("a",{href:"http://localhost:8080/"},"http://localhost:8080/"))," in your browser of choice, fire up the dev tools and you're off to the races; debugging like gangbusters. It also doesn't bother to provide cache-busting filenames as Chrome dev tools are smart enough to not cache localhost."),(0,r.kt)("li",null,"Oh and Karma.... If you've got problems with a failing test then head to ",(0,r.kt)("code",null,(0,r.kt)("a",{href:"http://localhost:9876/"},"http://localhost:9876/"))," and you can debug the tests in your dev tools."),(0,r.kt)("li",null,'Finally, it runs ESLint in the console. Not all of my files are TypeScript; essentially the build process (aka "gulp-y") files are all vanilla JS. So they\'re easily breakable. ESLint is there to provide a little reassurance on that front.')))),(0,r.kt)("p",null,"Now let's dig into each of these in a little more detail"),(0,r.kt)("h2",{id:"webpack"},"WebPack"),(0,r.kt)("p",null,"Let's take a look at what's happening under the covers of ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.build()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.watch()"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"WebPack")," with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-loader"},"babel-loader")," is what we're using to compile our ES6 TypeScript. ts-loader uses the TypeScript compiler to, um, compile TypeScript and emit ES6 code. This is then passed on to the babel-loader which transpiles it from ES6 down to ES-old-school. It all gets brought together in 2 files; ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," which contains the compiled result of the code written by us and ",(0,r.kt)("inlineCode",{parentName:"p"},"vendor.js")," which contains the compiled result of 3rd party / vendor files. The reason for this separation is that vendor files are likely to change fairly rarely whilst our own code will constantly be changing. This separation allows for quicker compile times upon file changes as, for the most part, the vendor files will not need to included in this process."),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"gulpfile.js")," above uses the following task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nvar gulp = require('gulp');\nvar gutil = require('gulp-util');\nvar webpack = require('webpack');\nvar WebpackNotifierPlugin = require('webpack-notifier');\nvar webpackConfig = require('../webpack.config.js');\n\nfunction buildProduction(done) {\n  // modify some webpack config options\n  var myProdConfig = Object.create(webpackConfig);\n  myProdConfig.output.filename = '[name].[hash].js';\n\n  myProdConfig.plugins = myProdConfig.plugins.concat(\n    // make the vendor.js file with cachebusting filename\n    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.[hash].js' }),\n    new webpack.optimize.DedupePlugin(),\n    new webpack.optimize.UglifyJsPlugin()\n  );\n\n  // run webpack\n  webpack(myProdConfig, function(err, stats) {\n    if(err) { throw new gutil.PluginError('webpack:build', err); }\n    gutil.log('[webpack:build]', stats.toString({\n      colors: true\n    }));\n\n    if (done) { done(); }\n  });\n}\n\nfunction createDevCompiler() {\n  // show me some sourcemap love people\n  var myDevConfig = Object.create(webpackConfig);\n  myDevConfig.devtool = 'inline-source-map';\n  myDevConfig.debug = true;\n\n  myDevConfig.plugins = myDevConfig.plugins.concat(\n    // Make the vendor.js file\n    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }), \n    new WebpackNotifierPlugin({ title: 'Webpack build', excludeWarnings: true })\n  );\n\n  // create a single instance of the compiler to allow caching\n  return webpack(myDevConfig);\n}\n\nfunction buildDevelopment(done, devCompiler) {\n  // run webpack\n  devCompiler.run(function(err, stats) {\n    if(err) { throw new gutil.PluginError('webpack:build-dev', err); }\n    gutil.log('[webpack:build-dev]', stats.toString({\n      chunks: false, // dial down the output from webpack (it can be noisy)\n      colors: true\n    }));\n\n    if (done) { done(); }\n  });\n}\n\n\nfunction bundle(options) {\n  var devCompiler;\n\n  function build(done) {\n    if (options.shouldWatch) {\n      buildDevelopment(done, devCompiler);\n    } else {\n      buildProduction(done);\n    }\n  }\n\n  if (options.shouldWatch) {\n    devCompiler = createDevCompiler();\n\n    gulp.watch('src/**/*', function() { build(); });\n  }\n\n  return new Promise(function(resolve, reject) {\n    build(function (err) {\n      if (err) {\n        reject(err);\n      } else {\n        resolve('webpack built');\n      }\n    });\n  });\n}\n\nmodule.exports = {\n  build: function() { return bundle({ shouldWatch: false }); },\n  watch: function() { return bundle({ shouldWatch: true  }); }\n};\n")),(0,r.kt)("p",null,"Hopefully this is fairly self-explanatory; essentially ",(0,r.kt)("inlineCode",{parentName:"p"},"buildDevelopment")," performs the development build (providing sourcemap support) and ",(0,r.kt)("inlineCode",{parentName:"p"},"buildProduction")," builds for Production (providing minification support). Both are driven by this ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable no-var, strict, prefer-arrow-callback */\n'use strict';\n\nvar path = require('path');\n\nmodule.exports = {\n  cache: true,\n  entry: {\n    // The entry point of our application; the script that imports all other scripts in our SPA\n    main: './src/main.tsx', \n\n    // The packages that are to be included in vendor.js\n    vendor: [\n      'babel-polyfill',\n      'events',\n      'flux',\n      'react'\n    ]\n  },\n\n  // Where the output of our compilation ends up\n  output: {\n    path: path.resolve(__dirname, './dist/scripts'),\n    filename: '[name].js',\n    chunkFilename: '[chunkhash].js'\n  },\n\n  module: {\n    loaders: [{\n      // The loader that handles ts and tsx files.  These are compiled\n      // with the ts-loader and the output is then passed through to the\n      // babel-loader.  The babel-loader uses the es2015 and react presets\n      // in order that jsx and es6 are processed.\n      test: /\\.ts(x?)$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader'\n    }, {\n      // The loader that handles any js files presented alone.\n      // It passes these to the babel-loader which (again) uses the es2015\n      // and react presets.\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel',\n      query: {\n        presets: ['es2015', 'react']\n      }\n    }]\n  },\n  plugins: [\n  ],\n  resolve: {\n    // Files with the following extensions are fair game for webpack to process\n    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']\n  },\n};\n")),(0,r.kt)("h2",{id:"inject"},"Inject"),(0,r.kt)("p",null,"Your compiled output needs to be referenced from some kind of HTML page. So we've got this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charSet="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n\n    <title>ES6 + Babel + React + Flux + Karma: The Secret Recipe</title>\n\n    \x3c!-- inject:css --\x3e\n    \x3c!-- endinject --\x3e\n    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">\n    </head>\n  <body>\n    <div id="content"></div>\n    \x3c!-- inject:js --\x3e\n    \x3c!-- endinject --\x3e\n  </body>\n</html>\n')),(0,r.kt)("p",null,"Which is no more than a boilerplate HTML page with a couple of key features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a single ",(0,r.kt)("inlineCode",{parentName:"li"},"&lt;div /&gt;")," element in the ",(0,r.kt)("inlineCode",{parentName:"li"},"&lt;body /&gt;")," which is where our React app is going to be rendered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&lt;!-- inject:css --&gt;")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"&lt;!-- inject:js --&gt;")," placeholders where css and js is going to be injected by ",(0,r.kt)("inlineCode",{parentName:"li"},"gulp-inject"),"."),(0,r.kt)("li",{parentName:"ul"},"a single ",(0,r.kt)("inlineCode",{parentName:"li"},"&lt;link /&gt;")," to the Bootstrap CDN. This sample app doesn't actually serve up any css generated as part of the project. It could but it doesn't. When it comes to injection time no css will actually be injected. This has been left in place as, more typically, a project would have some styling served up.")),(0,r.kt)("p",null,"This is fed into our inject task in ",(0,r.kt)("inlineCode",{parentName:"p"},"inject.build()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"inject.watch()"),". They take css and javascript and, using our shell template, create a new page which has the css and javascript dropped into their respective placeholders:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nvar gulp = require('gulp');\nvar inject = require('gulp-inject');\nvar glob = require('glob');\n\nfunction injectIndex(options) {\n  var postInjectCb = options.postInjectCb;\n  var postInjectCbTriggerId = null;\n  function run() {\n    var target = gulp.src('./src/index.html');\n    var sources = gulp.src([\n      //'./dist/styles/main*.css',\n      './dist/scripts/vendor*.js',\n      './dist/scripts/main*.js'\n    ], { read: false });\n\n    return target\n      .on('end', function() { // invoke postInjectCb after 1s\n        if (postInjectCbTriggerId || !postInjectCb) { return; }\n\n        postInjectCbTriggerId = setTimeout(function() {\n          postInjectCb();\n          postInjectCbTriggerId = null;\n        }, 1000);\n      })\n      .pipe(inject(sources, { ignorePath: '/dist/', addRootSlash: false, removeTags: true }))\n      .pipe(gulp.dest('./dist'));\n  }\n\n  var jsCssGlob = 'dist/**/*.{js,css}';\n\n  function checkForInitialFilesThenRun() {\n    glob(jsCssGlob, function (er, files) {\n      var filesWeNeed = ['dist/scripts/main', 'dist/scripts/vendor'/*, 'dist/styles/main'*/];\n\n      function fileIsPresent(fileWeNeed) {\n        return files.some(function(file) {\n          return file.indexOf(fileWeNeed) !== -1;\n        });\n      }\n\n      if (filesWeNeed.every(fileIsPresent)) {\n        run('initial build');\n      } else {\n        checkForInitialFilesThenRun();\n      }\n    });\n  }\n\n  checkForInitialFilesThenRun();\n\n  if (options.shouldWatch) {\n    gulp.watch(jsCssGlob, function(evt) {\n      if (evt.path && evt.type === 'changed') {\n        run(evt.path);\n      }\n    });\n  }\n}\n\nmodule.exports = {\n  build: function() { return injectIndex({ shouldWatch: false }); },\n  watch: function(postInjectCb) { return injectIndex({ shouldWatch: true, postInjectCb: postInjectCb }); }\n};\n")),(0,r.kt)("p",null,"This also triggers the server to serve up the new content."),(0,r.kt)("h2",{id:"static-files"},"Static Files"),(0,r.kt)("p",null,"Your app will likely rely on a number of static assets; images, fonts and whatnot. This script picks up the static assets you've defined and places them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," folder ready for use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nvar gulp = require('gulp');\nvar cache = require('gulp-cached');\n\nvar targets = [\n  // In my own example I don't use any of the targets below, they\n  // are included to give you more of a feel of how you might use this\n  { description: 'FONTS',   src: './fonts/*',     dest: './dist/fonts' },  \n  { description: 'STYLES',  src: './styles/*',    dest: './dist/styles' },\n  { description: 'FAVICON', src: './favicon.ico', dest: './dist' },  \n  { description: 'IMAGES',  src: './images/*',    dest: './dist/images' }\n];\n\nfunction copy(options) {\n  // Copy files from their source to their destination\n  function run(target) {\n    gulp.src(target.src)\n      .pipe(cache(target.description))\n      .pipe(gulp.dest(target.dest));\n  }\n\n  function watch(target) {\n    gulp.watch(target.src, function() { run(target); });\n  }\n\n  targets.forEach(run);\n\n  if (options.shouldWatch) {\n    targets.forEach(watch);\n  }\n}\n\nmodule.exports = {\n  build: function() { return copy({ shouldWatch: false }); },\n  watch: function() { return copy({ shouldWatch: true }); }\n};\n")),(0,r.kt)("h2",{id:"karma"},"Karma"),(0,r.kt)("p",null,"Finally, we're ready to get our tests set up to run continually with Karma. ",(0,r.kt)("inlineCode",{parentName:"p"},"tests.watch()")," triggers the following task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nvar Server = require('karma').Server;\nvar path = require('path');\nvar gutil = require('gulp-util');\n\nmodule.exports = {\n  watch: function() {\n    // Documentation: https://karma-runner.github.io/0.13/dev/public-api.html\n    var karmaConfig = {\n      configFile: path.join(__dirname, '../karma.conf.js'),\n      singleRun: false,\n\n      plugins: ['karma-webpack', 'karma-jasmine', 'karma-mocha-reporter', 'karma-sourcemap-loader', 'karma-phantomjs-launcher', 'karma-phantomjs-shim'], // karma-phantomjs-shim only in place until PhantomJS hits 2.0 and has function.bind\n      reporters: ['mocha']\n    };\n\n    new Server(karmaConfig, karmaCompleted).start();\n\n    function karmaCompleted(exitCode) {\n      gutil.log('Karma has exited with:', exitCode);\n      process.exit(exitCode);\n    }\n  }\n};\n")),(0,r.kt)("p",null,"When running in watch mode it's possible to debug the tests by going to: ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="http://localhost:9876/">http://localhost:9876/</a>'),". It's also possible to run the tests standalone with a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run test"),". Running them like this also outputs the results to an ",(0,r.kt)("a",{parentName:"p",href:"http://stackoverflow.com/q/442556/761388"},"XML file in JUnit format"),"; this can be useful for integrating into CI solutions that don't natively pick up test results."),(0,r.kt)("p",null,"Whichever approach we use for running tests, we use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"karma.conf.js")," file to configure Karma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable no-var, strict */\n'use strict';\n\nvar webpackConfig = require('./webpack.config.js');\n\nmodule.exports = function(config) {\n  // Documentation: https://karma-runner.github.io/0.13/config/configuration-file.html\n  config.set({\n    browsers: [ 'PhantomJS' ],\n\n    files: [\n      'test/import-babel-polyfill.js', // This ensures we have the es6 shims in place from babel\n      'test/**/*.tests.ts',\n      'test/**/*.tests.tsx'\n    ],\n\n    port: 9876,\n\n    frameworks: [ 'jasmine', 'phantomjs-shim' ],\n\n    logLevel: config.LOG_INFO, //config.LOG_DEBUG\n\n    preprocessors: {\n      'test/import-babel-polyfill.js': [ 'webpack', 'sourcemap' ],\n      'src/**/*.{ts,tsx}': [ 'webpack', 'sourcemap' ],\n      'test/**/*.tests.{ts,tsx}': [ 'webpack', 'sourcemap' ]\n    },\n\n    webpack: {\n      devtool: 'eval-source-map', //'inline-source-map', - inline-source-map doesn't work at present\n      debug: true,\n      module: webpackConfig.module,\n      resolve: webpackConfig.resolve\n    },\n\n    webpackMiddleware: {\n      quiet: true,\n      stats: {\n        colors: true\n      }\n    },\n\n    // reporter options\n    mochaReporter: {\n      colors: {\n        success: 'bgGreen',\n        info: 'cyan',\n        warning: 'bgBlue',\n        error: 'bgRed'\n      }\n    },\n\n    junitReporter: {\n      outputDir: 'test-results', // results will be saved as $outputDir/$browserName.xml\n      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile\n      suite: ''\n    }\n  });\n};\n")),(0,r.kt)("p",null,"As you can see, we're still using our webpack configuration from earlier to configure much of how the transpilation takes place."),(0,r.kt)("p",null,"And that's it; we have a workflow for developing in TypeScript using React with tests running in an automated fashion. I appreciated this has been a rather long blog post but I hope I've clarified somewhat how this all plugs together and works. Do leave a comment if you think I've missed something."),(0,r.kt)("h2",{id:"babel-5---babel-6"},"Babel 5 -> Babel 6"),(0,r.kt)("p",null,'This post has actually been sat waiting to be published for some time. I\'d got this solution up and running with Babel 5. Then they shipped Babel 6 and (as is the way with "breaking changes") ',(0,r.kt)("a",{parentName:"p",href:"https://phabricator.babeljs.io/T2864"},"broke sourcemap support")," and thus torpedoed this workflow. Happily that's now ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/pull/3108"},"been resolved"),". But if you should experience any wonkiness - it's worth checking that you're using the latest and greatest of Babel 6."))}d.isMDXComponent=!0}}]);
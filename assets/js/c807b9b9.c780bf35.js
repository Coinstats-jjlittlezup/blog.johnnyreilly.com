(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[52569],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,k=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11025:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i={title:"TypeScript + Webpack: Super Pursuit Mode",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["HappyPack","TypeScript","cache-loader","thread-loader","fork-ts-checker-webpack-plugin","Webpack"],hide_table_of_contents:!1},p={permalink:"/2017/09/07/typescript-webpack-super-pursuit-mode",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-09-07-typescript-webpack-super-pursuit-mode.md",source:"@site/blog/2017-09-07-typescript-webpack-super-pursuit-mode.md",title:"TypeScript + Webpack: Super Pursuit Mode",description:"This post also featured as a webpack Medium publication.",date:"2017-09-07T00:00:00.000Z",formattedDate:"September 7, 2017",tags:[{label:"HappyPack",permalink:"/tags/happy-pack"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"cache-loader",permalink:"/tags/cache-loader"},{label:"thread-loader",permalink:"/tags/thread-loader"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:6.69,truncated:!1,prevItem:{title:"fork-ts-checker-webpack-plugin code clickability",permalink:"/2017/09/12/fork-ts-checker-webpack-plugin-code"},nextItem:{title:"Oh the Glamour of Open Source",permalink:"/2017/08/30/oh-glamour-of-open-source"}},l=[{value:"fork-ts-checker-webpack-plugin",id:"fork-ts-checker-webpack-plugin",children:[]},{value:"HappyPack",id:"happypack",children:[]},{value:"<code>thread-loader</code> + <code>cache-loader</code>",id:"thread-loader--cache-loader",children:[]},{value:"All This Could Be Yours...",id:"all-this-could-be-yours",children:[]}],s={toc:l};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://medium.com/webpack/typescript-webpack-super-pursuit-mode-83cc568dea79"},"This post also featured as a webpack Medium publication"),".")),(0,o.kt)("p",null," If you're like me then you'll like TypeScript and you'll like module bundling with webpack. You may also like speedy builds. That's completely understandable. The fact of the matter is, you sacrifice a bit of build speed to have webpack in the mix. Wouldn't it be great if we could even up the difference?"),(0,o.kt)("p",null,"I'm the primary maintainer of ts-loader, a TypeScript loader for webpack. Just recently a couple of PRs were submitted that said, in other words: ts-loader is like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-31rZcGTrXpk/WThjLBJlBfI/AAAAAAAAFQY/13XSYUVr27IPgtQr80KhQpdDVVKmwaxIgCPcB/s400/KITT.jpg",alt:null})),(0,o.kt)("p",null,"But it could be like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-Mktfora8HfA/WThj-Z-mm0I/AAAAAAAAFQc/stDPTjNiQmUlDIUaCfaN9qjqEUostR_YACLcB/s400/webkitt.jpg",alt:null})),(0,o.kt)("p",null,"Apologies for the image quality above; there appear to be no high quality pictures out there of KITT in Super Pursuit Mode for me to defame with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/plemont"},"Garan Jenkin"),"'s atrocious puns."),(0,o.kt)("h2",{id:"fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/issues/537"},'"Faster type checking with forked process"')," read the enticing name of the issue. It turned out to be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/piotr-oles"},"Piotr Ole\u015b")," (",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/OlesDev"},"@OlesDev"),") telling the world about his beautiful creation. He'd put together a mighty fine plugin that can be used alongside ts-loader called the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin"),". The name is a bit of a mouthful but the purpose is mouth-watering. To quote the README, it is a:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Webpack plugin that runs typescript type checker on a separate process.")),(0,o.kt)("p",null,"What does this mean and how does this fit with ts-loader? Well, ts-loader does 2 jobs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It transpiles your TypeScript into JavaScript and hands it off to webpack"),(0,o.kt)("li",{parentName:"ol"},"It collects any TypeScript compilation errors and reports them to webpack")),(0,o.kt)("p",null,'What this plugin does is say, "forget about #2 - we\'ve got this." It removes the responsibility for type checking from ts-loader, so the only work ts-loader does is transpilation. In the meantime, the all important type checking is still happening. To be honest, there would be little reason to recommend this approach otherwise. The difference is ',(0,o.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," is doing the heavy lifting ",(0,o.kt)("strong",{parentName:"p"},"in a separate process"),". This provides a nice performance boost to your workflow. ts-loader is doing ",(0,o.kt)("strong",{parentName:"p"},"less")," and that's a ",(0,o.kt)("u",null,"good thing")),(0,o.kt)("p",null,"."),(0,o.kt)("p",null,"The approach used here is similar to that employed by awesome-typescript-loader. ATL is another TypeScript loader for webpack by the excellent ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/s-panferov"},"Stanislav Panferov"),". ATL also has a technique for performing typechecking in a forked process. fork-ts-checker-webpack-plugin was an effort by Piotr to implement something similar but with improved incremental build performance."),(0,o.kt)("p",null,"How do we use it? Add fork-ts-checker-webpack-plugin as a ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependency")," of your project and then amend the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," to set ts-loader into ",(0,o.kt)("inlineCode",{parentName:"p"},"transpileOnly")," mode and drop the plugin into the mix:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');\n\nvar webpackConfig = {\n  // other config...\n  context: __dirname, // to automatically find tsconfig.json\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        loader: 'ts-loader',\n        options: {\n          // disable type checker - we will use it in fork plugin\n          transpileOnly: true \n        }\n      }\n    ]\n  },\n  plugins: [\n    new ForkTsCheckerWebpackPlugin()\n  ]\n};\n")),(0,o.kt)("p",null,"If you'd like to see an example of how to use the plugin then take a look at a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/fork-ts-checker"},"simple example")," and a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-karma-gulp-fork-ts-checker"},"more involved one"),"."),(0,o.kt)("h2",{id:"happypack"},"HappyPack"),(0,o.kt)("p",null,"Not so long ago I didn't know what ",(0,o.kt)("strike",null,"happyness")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/amireh/happypack"},"HappyPack"),' was. "Happiness in the form of faster webpack build times." That\'s what it is.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HappyPack makes webpack builds faster by allowing you to transform multiple files in parallel.")),(0,o.kt)("p",null,"It does this by spinning up multiple threads, each with their own loaders inside. We wanted to do this with ts-loader; to have multiple instances of ts-loader running. Work can then be divided up across these separate loaders. Isn't multi-threading great?"),(0,o.kt)("p",null,"ts-loader did not initially play nicely with HappyPack; essentially this is because ts-loader touches parts of webpack's API that HappyPack replaces. The entirely wonderful ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aindlq"},"Artem Kozlov")," submitted a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/547"},"PR which added HappyPack support to ts-loader"),". Support essentially amounts to switching ts-loader to run in ",(0,o.kt)("inlineCode",{parentName:"p"},"transpileOnly")," mode and ensuring that there is no attempt to talk to parts of the webpack API that HappyPack removes."),(0,o.kt)("p",null,"It would be hard to recommend using HappyPack as is because, as with ",(0,o.kt)("inlineCode",{parentName:"p"},"transpileOnly")," mode you lose all typechecking. Where it becomes worthwhile is where it is combined with the fork-ts-checker-webpack-plugin so you keep the typechecking."),(0,o.kt)("p",null,"Enough with the chitter chatter; how can we achieve this? Add HappyPack as a ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependency")," of your project and then amend the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var HappyPack = require('happypack');\nvar ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');\n\nmodule.exports = {\n    // other config...\n    context: __dirname, // to automatically find tsconfig.json\n    module: {\n        rules: [\n            {\n                test: /\\.tsx?$/,\n                exclude: /node_modules/,\n                loader: 'happypack/loader?id=ts'\n            }\n        ]\n    },\n    plugins: [\n        new HappyPack({\n            id: 'ts',\n            threads: 2,\n            loaders: [\n                {\n                    path: 'ts-loader',\n                    query: { happyPackMode: true }\n                }\n            ]\n        }),\n        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })\n    ]\n};\n")),(0,o.kt)("p",null,"Note that the ts-loader options are now configured via the HappyPack ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," and that we're setting ts-loader with the ",(0,o.kt)("inlineCode",{parentName:"p"},"happyPackMode")," option set."),(0,o.kt)("p",null,"There's one other thing to note which is important; we're now passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"checkSyntacticErrors")," option to the fork plugin. This ensures that the plugin checks for both syntactic errors (eg ",(0,o.kt)("inlineCode",{parentName:"p"},"const array = [{} {}];"),") and semantic errors (eg ",(0,o.kt)("inlineCode",{parentName:"p"},"const x: number = '1';"),"). By default the plugin only checks for semantic errors. This is because when ts-loader is used with ",(0,o.kt)("inlineCode",{parentName:"p"},"transpileOnly")," set, ts-loader will still report syntactic errors. But when used in ",(0,o.kt)("inlineCode",{parentName:"p"},"happyPackMode")," it does not."),(0,o.kt)("p",null,"If you'd like to see an example of how to use HappyPack then once again we have a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/happypack"},"simple example")," and a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-karma-gulp-happypack"},"more involved one"),"."),(0,o.kt)("h2",{id:"thread-loader--cache-loader"},(0,o.kt)("inlineCode",{parentName:"h2"},"thread-loader")," ","+"," ",(0,o.kt)("inlineCode",{parentName:"h2"},"cache-loader")),(0,o.kt)("p",null,"You might have some reservations about using HappyPack. First of all the quirky configuration required makes your webpack config rather less comprehensible. Also, HappyPack is not officially blessed by webpack. It is a side project developed externally from webpack and there's no guarantees that new versions of webpack won't break it. Neither of these are reasons not to use HappyPack but they are things to bear in mind."),(0,o.kt)("p",null,"What if there were a way to parallelise our builds which dealt with these issues? Well, there is! By using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/thread-loader"},"thread-loader")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/cache-loader"},"cache-loader")," in combination you can both feel happy that you're using an official webpack workflow and you can have a config that's less confusing."),(0,o.kt)("p",null,"What would that config look like? This:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');\n\nmodule.exports = {\n    // other config...\n    context: __dirname, // to automatically find tsconfig.json\n    module: {\n        rules: {\n            test: /\\.tsx?$/,\n            use: [\n                { loader: 'cache-loader' },\n                {\n                    loader: 'thread-loader',\n                    options: {\n                        // there should be 1 cpu for the fork-ts-checker-webpack-plugin\n                        workers: require('os').cpus().length - 1,\n                    },\n                },\n                {\n                    loader: 'ts-loader',\n                    options: {\n                        happyPackMode: true // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack\n                    }\n                }\n            ]\n        }\n    },\n    plugins: [\n        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })\n    ]\n};\n")),(0,o.kt)("p",null,'As you can see the configuration is much cleaner than with HappyPack. Interestingly ts-loader still needs to run in "',(0,o.kt)("inlineCode",{parentName:"p"},"happyPackMode"),'" and that\'s because thread-loader is essentially behaving in the same fashion as with HappyPack and so ts-loader needs to behave in the same way. Probably ts-loader should have a more generic flag name than "',(0,o.kt)("inlineCode",{parentName:"p"},"happyPackMode"),"\". (Famously, naming things is hard; so if you've a good idea, tell me!)"),(0,o.kt)("p",null,"These loaders are new and so tread carefully. My own experiences have been pretty positive but your mileage may vary. Do note that, as with HappyPack, the thread-loader is highly configurable."),(0,o.kt)("p",null,"If you'd like to see an example of how to use thread-loader and cache-loader then once again we have a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/thread-loader"},"simple example")," and a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-karma-gulp-thread-loader"},"more involved one"),"."),(0,o.kt)("h2",{id:"all-this-could-be-yours"},"All This Could Be Yours..."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Wow! It looks like we can cut our build time by 4 minutes! ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/hashtag/webpack?src=hash"},"#","webpack"),(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/typescriptlang"},"@typescriptlang")," // cc ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly"},"@johnny","_","reilly"),(0,o.kt)("a",{parentName:"p",href:"https://t.co/gjvy9SLBAT"},"pic.twitter.com/gjvy9SLBAT")),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Donald Pipowitch (@PipoPeperoni) ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/PipoPeperoni/status/878148978356834304"},"June 23, 2017"))),(0,o.kt)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,o.kt)("p",null,"In this post we're improving build speeds with TypeScript and webpack in 3 ways:"),(0,o.kt)("dl",null,(0,o.kt)("dt",null,"fork-ts-checker-webpack-plugin"),(0,o.kt)("dd",null,"With this plugin in play ts-loader only performs transpilation. ts-loader is doing less so the build is faster."),(0,o.kt)("dt",null,"HappyPack"),(0,o.kt)("dd",null,"With HappyPack in the mix, the build is parallelised. That parallelisation means the build is faster."),(0,o.kt)("dt",null,"thread-loader / cache-loader"),(0,o.kt)("dd",null,"With thread-loader and cache-loader, again the build is parallelised and the build is faster.")),(0,o.kt)("iframe",{src:"https://giphy.com/embed/Bo2WsocASVBm0",width:"240",height:"180",frameBorder:"0",allowFullScreen:""}))}c.isMDXComponent=!0}}]);
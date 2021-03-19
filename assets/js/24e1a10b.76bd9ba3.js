(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||h[m]||l;return n?r.a.createElement(b,o(o({ref:t},p),{},{components:n})):r.a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),l=(n(0),n(1170)),i={title:"Inlining Angular Templates with WebPack and TypeScript",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["raw-loader","Angular","templatecache","Webpack"],hide_table_of_contents:!1},o={permalink:"/2016/05/13/inlining-angular-templates-with-webpack",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-05-13-inlining-angular-templates-with-webpack.md",source:"@site/blog/2016-05-13-inlining-angular-templates-with-webpack.md",description:"This technique actually applies to pretty much any web stack where you have to supply templates; it just so happens that I'm using Angular 1.x in this case. Also I have an extra technique which is useful to handle the ng-include scenario.",date:"2016-05-13T00:00:00.000Z",formattedDate:"May 13, 2016",tags:[{label:"raw-loader",permalink:"/tags/raw-loader"},{label:"Angular",permalink:"/tags/angular"},{label:"templatecache",permalink:"/tags/templatecache"},{label:"Webpack",permalink:"/tags/webpack"}],title:"Inlining Angular Templates with WebPack and TypeScript",readingTime:2.885,truncated:!1,prevItem:{title:"The Mysterious Case of Webpack, Angular and jQuery",permalink:"/2016/05/24/the-mysterious-case-of-webpack-angular-and-jquery"},nextItem:{title:"Instant Stubs with JSON.Net (just add hot water)",permalink:"/2016/04/25/instant-stubs-with-jsonnet"}},s=[{value:"Preamble",id:"preamble",children:[]},{value:"raw-loader!",id:"raw-loader",children:[]},{value:"ng-include",id:"ng-include",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This technique actually applies to pretty much any web stack where you have to supply templates; it just so happens that I'm using Angular 1.x in this case. Also I have an extra technique which is useful to handle the ",Object(l.b)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/directive/ngInclude"},"ng-include")," scenario."),Object(l.b)("h2",{id:"preamble"},"Preamble"),Object(l.b)("p",null,"For some time I've been using webpack to bundle my front end. I write ES6 TypeScript; import statements and all. This is all sewn together using the glorious ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-loader"},"ts-loader")," to compile and emit ES6 code which is handed off to the wonderful ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-loader"},"babel-loader")," which transpiles it to ESold code. All with full source map support. It's wonderful."),Object(l.b)("p",null,"However, up until now I've been leaving Angular to perform the relevant http requests at runtime when it needs to pull in templates. That works absolutely fine but my preference is to preload those templates. In fact I've ",Object(l.b)("a",{parentName:"p",href:"http://blog.johnnyreilly.com/2015/02/using-gulp-in-asp-net-instead-of-web-optimization.html"},"written before")," about using the ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/gulp-angular-templatecache"},"gulp angular template cache")," to achieve just that aim."),Object(l.b)("p",null,"So I was wondering; in this modular world what would be the equivalent approach? Sure I could still use the gulp angular template cache approach but I would like something a little more deliberate and a little less magic. Also, I've discovered (to my cost) that when using the existing approach, it's possible to break the existing implementation without realising it; only finding out there's a problem in Production when unexpected http requests start happening. Finding these problems out at compile time rather than runtime is always to be strived for. So how?"),Object(l.b)("h2",{id:"raw-loader"},Object(l.b)("a",{parentName:"h2",href:"https://www.npmjs.com/package/raw-loader"},"raw-loader"),"!"),Object(l.b)("p",null,"raw-loader allows you load file content using ",Object(l.b)("inlineCode",{parentName:"p"},"require")," statements. This works well with the use case of inlining html. So I drop it into my ",Object(l.b)("inlineCode",{parentName:"p"},"webpack.config.js")," like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"var path = require('path');\n\nmodule.exports = {\n    cache: true,\n    entry: {\n        main: './src/main.ts',\n\n        vendor: [\n          'babel-polyfill',\n          'angular',\n          'angular-animate',\n          'angular-sanitize',\n          'angular-ui-bootstrap',\n          'angular-ui-router'\n        ]\n    },\n    output: {\n        path: path.resolve(__dirname, './dist/scripts'),\n        filename: '[name].js',\n        chunkFilename: '[chunkhash].js'\n    },\n    module: {\n        loaders: [{\n            test: /\\.ts(x?)$/,\n            exclude: /node_modules/,\n            loader: 'babel-loader?presets[]=es2015!ts-loader'\n        }, {\n            test: /\\.js$/,\n            exclude: /node_modules/,\n            loader: 'babel',\n            query: {\n                presets: ['es2015']\n            }\n        }, { // THIS IS THE MAGIC!\n            test: /\\.html$/,\n            exclude: /node_modules/,\n            loader: 'raw'\n        }]  // THAT WAS THE MAGIC!\n    },\n    plugins: [\n      // ....\n    ],\n    resolve: {\n        extensions: ['', '.ts', '.tsx', '.js']\n    }\n};\n")),Object(l.b)("p",null,"With this in place, if someone requires a file with the ",Object(l.b)("inlineCode",{parentName:"p"},"html")," suffix then raw-loader comes in. So now we can swap this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'$stateProvider\n    .state(\'state1\', {\n      url: "/state1",\n      templateUrl: "partials/state1.html"\n    })\n')),Object(l.b)("p",null,"For this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'$stateProvider\n    .state(\'state1\', {\n      url: "/state1",\n      template: require("./partials/state1.html")\n    })\n')),Object(l.b)("p",null,"Now initially TypeScript is going to complain about your ",Object(l.b)("inlineCode",{parentName:"p"},"require")," statement. That's fair; outside of node-land it doesn't know what ",Object(l.b)("inlineCode",{parentName:"p"},"require")," is. No bother, you just need to drop in a one line simple definition file to sort this out; let me present ",Object(l.b)("inlineCode",{parentName:"p"},"webpack-require.d.ts"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"declare var require: (filename: string) => any;\n")),Object(l.b)("p",null,"You've now inlined your template. And for bonus points, if you were to make a mistake in your path then webpack would shout at you at compile time; which is a ",Object(l.b)("em",{parentName:"p"},"good, good")," thing."),Object(l.b)("h2",{id:"ng-include"},"ng-include"),Object(l.b)("p",null,"The one use case that this doesn't cover is where your templates import other templates through use of the ",Object(l.b)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/directive/ngInclude"},"ng-include")," directive. They will still trigger http requests as the templates are served. The simple way to prevent that is by priming the angular ",Object(l.b)("inlineCode",{parentName:"p"},'<a href="https://docs.angularjs.org/api/ng/service/$templateCache">$templateCache</a>')," like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'app.run(["$templateCache",\n    ($templateCache: ng.ITemplateCacheService) => {\n        $templateCache.put("justSome.html", require("./justSome.html"));\n        // Other templates go here...\n    }]);\n')),Object(l.b)("p",null,"Now when the app spins up it already has everything it needs pre-cached."))}c.isMDXComponent=!0}}]);
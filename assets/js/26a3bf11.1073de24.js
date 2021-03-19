(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(n),h=r,d=b["".concat(i,".").concat(h)]||b[h]||u[h]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},420:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(8),a=(n(0),n(1170)),i={title:"The TypeScript webpack PWA",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["workbox","TypeScript","PWA","Service Worker","Webpack"],hide_table_of_contents:!1},l={permalink:"/2017/11/19/the-typescript-webpack-pwa",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-11-19-the-typescript-webpack-pwa.md",source:"@site/blog/2017-11-19-the-typescript-webpack-pwa.md",description:"So, there you sit, conflicted. You've got a lovely build setup; it's a thing of beauty. Precious, polished like a diamond, sharpened like a circular saw. There at the core of your carefully crafted setup sits webpack. Heaving, mysterious... powerful.",date:"2017-11-19T00:00:00.000Z",formattedDate:"November 19, 2017",tags:[{label:"workbox",permalink:"/tags/workbox"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"PWA",permalink:"/tags/pwa"},{label:"Service Worker",permalink:"/tags/service-worker"},{label:"Webpack",permalink:"/tags/webpack"}],title:"The TypeScript webpack PWA",readingTime:3.315,truncated:!1,prevItem:{title:"ts-loader 2017 retrospective",permalink:"/2017/12/24/ts-loader-2017-retrospective"},nextItem:{title:"TypeScript Definitions, webpack and Module Types",permalink:"/2017/10/20/typescript-definitions-webpack-and-module-types"}},p=[{value:"Let's Do It Tonight",id:"lets-do-it-tonight",children:[]},{value:"Work(box) It",id:"workbox-it",children:[]},{value:"What Have We Got?",id:"what-have-we-got",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So, there you sit, conflicted. You've got a lovely build setup; it's a thing of beauty. Precious, polished like a diamond, sharpened like a circular saw. There at the core of your carefully crafted setup sits webpack. Heaving, mysterious... powerful."),Object(a.b)("p",null," There's more. Not only are you sold on webpack, you're all in TypeScript too. But now you've heard tell of \"Progressive Web Applications\" and \"Service Workers\".... And you want to be dealt in. You want to build web apps that work offline. It can't work can it? Your build setup's going to be like the creature in the episode where they've taken one too many jumps and it's gone into the foetal position."),Object(a.b)("p",null,"So this is the plan kids. Let's take a simple TypeScript, webpack setup and make it a PWA. Like Victoria Wood said..."),Object(a.b)("h2",{id:"lets-do-it-tonight"},Object(a.b)("a",{parentName:"h2",href:"https://youtu.be/lNU5KVa_Tu8"},"Let's Do It Tonight")),Object(a.b)("p",null,"How to begin? Well first comes the plagiarism; ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/core-js"},"here's a simple TypeScript webpack setup"),". Rob it. Stick a gun to its head and order it onto your hard drive. ",Object(a.b)("inlineCode",{parentName:"p"},"yarn install")," to pick up your dependencies and then ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start")," to see what you've got. Something like this:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-Myu9uP3Vy3M/WhHN8AoAKLI/AAAAAAAAHOo/VtxOTu4S3bEhVIzkPvzt-BfV5c6anSidgCPcBGAYYCw/s320/Screenshot%2B2017-11-19%2B18.29.15.png",alt:null})),Object(a.b)("p",null,"Beautiful right? And if we ",Object(a.b)("inlineCode",{parentName:"p"},"yarn build")," we end up with a simple output:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-EVLkO9g-zSE/WhHPJYhCXJI/AAAAAAAAHO0/rBnRHqsjCE8cHvEPtuPyQqd5DtZDUCgdgCPcBGAYYCw/s320/Screenshot%2B2017-11-19%2B18.34.12.png",alt:null})),Object(a.b)("p",null,"To test what we've built out we want to use a simple web server to serve up the ",Object(a.b)("inlineCode",{parentName:"p"},"dist")," folder. I've got the npm package ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/http-server"},"http-server")," installed globally for just such an eventuality. So let's ",Object(a.b)("inlineCode",{parentName:"p"},"http-server ./dist")," and I'm once again looking at our simple app; it looks exactly the same as when I ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start"),". Smashing. What would we see if we were offline? Well thanks to the magic of Chrome DevTools we can find out. Offline and refresh our browser..."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-6AXev3DTAr8/WhHkJjtRHqI/AAAAAAAAHPI/aTaWZXWQPmIdXSIjoYjBXysWkSJ3wDUJACLcBGAs/s320/Screenshot%2B2017-11-19%2B20.05.19.png",alt:null})),Object(a.b)("p",null,"Not very user friendly. Once we're done, we should be able to refresh and still see our app."),Object(a.b)("h2",{id:"workbox-it"},Object(a.b)("a",{parentName:"h2",href:"https://youtu.be/UODX_pYpVxk"},"Work(box) It")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/"},"Workbox")," is a project that makes the setting up of Service Workers (aka the magic that powers PWAs) easier. It supports webpack use cases through the ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/workbox-webpack-plugin"},"workbox-webpack-plugin"),"; so let's give it a whirl. Incidentally, there's a ",Object(a.b)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/get-started/webpack"},"cracking example")," on the Workbox site."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn add workbox-webpack-plugin --dev")," adds the plugin to our project. To make use of it, punt your way over to the ",Object(a.b)("inlineCode",{parentName:"p"},"webpack.production.config.js")," and add an entry for the plugin. We also need to set the ",Object(a.b)("inlineCode",{parentName:"p"},"hash")," parameter of the html-webpack-plugin to be false; if it's true it'll cause problems for the ServiceWorker."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const WorkboxPlugin = require('workbox-webpack-plugin');\n\n//...\n\nmodule.exports = {\n\n    //...\n\n    plugins: [\n\n        //...\n\n        new HtmlWebpackPlugin({\n            hash: false,\n            inject: true,\n            template: 'src/index.html',\n            minify: {\n                removeComments: true,\n                collapseWhitespace: true,\n                removeRedundantAttributes: true,\n                useShortDoctype: true,\n                removeEmptyAttributes: true,\n                removeStyleLinkTypeAttributes: true,\n                keepClosingSlash: true,\n                minifyJS: true,\n                minifyCSS: true,\n                minifyURLs: true,\n            },\n        }),\n\n        new WorkboxPlugin({\n            // we want our service worker to cache the dist directory\n            globDirectory: 'dist',\n            // these are the sorts of files we want to cache\n            globPatterns: ['**/*.{html,js,css,png,svg,jpg,gif,json}'],\n            // this is where we want our ServiceWorker to be created\n            swDest: path.resolve('dist', 'sw.js'),\n            // these options encourage the ServiceWorkers to get in there fast \n            // and not allow any straggling \"old\" SWs to hang around\n            clientsClaim: true,\n            skipWaiting: true,\n        }),\n    ]\n\n    //...\n};\n")),Object(a.b)("p",null,"With this in place, ",Object(a.b)("inlineCode",{parentName:"p"},"yarn build")," will generate a ServiceWorker. Now to alter our code to register it. Open up ",Object(a.b)("inlineCode",{parentName:"p"},"index.tsx")," and add this to the end of the file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"if ('serviceWorker' in navigator) {\n  window.addEventListener('load', () => {\n    navigator.serviceWorker.register('/sw.js').then(registration => {\n      // tslint:disable:no-console\n      console.log('SW registered: ', registration);\n    }).catch(registrationError => {\n      console.log('SW registration failed: ', registrationError);\n    });\n  });\n}\n")),Object(a.b)("p",null,"Put it together and..."),Object(a.b)("h2",{id:"what-have-we-got"},"What Have We Got?"),Object(a.b)("p",null,"Let's ",Object(a.b)("inlineCode",{parentName:"p"},"yarn build")," again."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-qnRIwI47480/WhH97gl3IcI/AAAAAAAAHQE/cGiYHu46Fy4TpKkoy-DBzRnqIJuocFUdQCLcBGAs/s640/Screenshot%2B2017-11-19%2B21.55.18.png",alt:null})),Object(a.b)("p",null,"Oooohh look! A service worker is with us. Does it work? Let's find out... ",Object(a.b)("inlineCode",{parentName:"p"},"http-server ./dist")," Browse to ",Object(a.b)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," and let's have a look at the console."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-PuY_60KBBag/WhH5V7BSFEI/AAAAAAAAHP4/jeFJYz9TPXMYpQCiblVVIW1M1xJcS9WiwCLcBGAs/s640/Screenshot%2B2017-11-19%2B21.34.54.png",alt:null})),Object(a.b)("p",null,"Looks very exciting. So now the test; let's go offline and refresh:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-uYJ4yOIuJro/WhH_Yj2xRGI/AAAAAAAAHQQ/hqMmJC-HwwkR6sMGbMJyxCpRms0wXccrgCLcBGAs/s640/Screenshot%2B2017-11-19%2B22.01.37.png",alt:null})),Object(a.b)("p",null,"You are looking at the 200s of success. You're now running with webpack and TypeScript and you have built a Progressive Web Application. Feel good about life."))}c.isMDXComponent=!0}}]);
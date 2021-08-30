"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[22297],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,k=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24921:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"The TypeScript webpack PWA",authors:"johnnyreilly",tags:["workbox","TypeScript","PWA","Service Worker","Webpack"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2017/11/19/the-typescript-webpack-pwa",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-11-19-the-typescript-webpack-pwa.md",source:"@site/blog/2017-11-19-the-typescript-webpack-pwa.md",title:"The TypeScript webpack PWA",description:"So, there you sit, conflicted. You've got a lovely build setup; it's a thing of beauty. Precious, polished like a diamond, sharpened like a circular saw. There at the core of your carefully crafted setup sits webpack. Heaving, mysterious... powerful.",date:"2017-11-19T00:00:00.000Z",formattedDate:"November 19, 2017",tags:[{label:"workbox",permalink:"/tags/workbox"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"PWA",permalink:"/tags/pwa"},{label:"Service Worker",permalink:"/tags/service-worker"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:3.315,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"ts-loader 2017 retrospective",permalink:"/2017/12/24/ts-loader-2017-retrospective"},nextItem:{title:"TypeScript Definitions, webpack and Module Types",permalink:"/2017/10/20/typescript-definitions-webpack-and-module-types"}},c={authorsImageUrls:[void 0]},u=[{value:"Let's Do It Tonight",id:"lets-do-it-tonight",children:[]},{value:"Work(box) It",id:"workbox-it",children:[]},{value:"What Have We Got?",id:"what-have-we-got",children:[]}],h={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So, there you sit, conflicted. You've got a lovely build setup; it's a thing of beauty. Precious, polished like a diamond, sharpened like a circular saw. There at the core of your carefully crafted setup sits webpack. Heaving, mysterious... powerful."),(0,a.kt)("p",null," There's more. Not only are you sold on webpack, you're all in TypeScript too. But now you've heard tell of \"Progressive Web Applications\" and \"Service Workers\".... And you want to be dealt in. You want to build web apps that work offline. It can't work can it? Your build setup's going to be like the creature in the episode where they've taken one too many jumps and it's gone into the foetal position."),(0,a.kt)("p",null,"So this is the plan kids. Let's take a simple TypeScript, webpack setup and make it a PWA. Like Victoria Wood said..."),(0,a.kt)("h2",{id:"lets-do-it-tonight"},(0,a.kt)("a",{parentName:"h2",href:"https://youtu.be/lNU5KVa_Tu8"},"Let's Do It Tonight")),(0,a.kt)("p",null,"How to begin? Well first comes the plagiarism; ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/core-js"},"here's a simple TypeScript webpack setup"),". Rob it. Stick a gun to its head and order it onto your hard drive. ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn install")," to pick up your dependencies and then ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start")," to see what you've got. Something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69256).Z})),(0,a.kt)("p",null,"Beautiful right? And if we ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," we end up with a simple output:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(11484).Z})),(0,a.kt)("p",null,"To test what we've built out we want to use a simple web server to serve up the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder. I've got the npm package ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/http-server"},"http-server")," installed globally for just such an eventuality. So let's ",(0,a.kt)("inlineCode",{parentName:"p"},"http-server ./dist")," and I'm once again looking at our simple app; it looks exactly the same as when I ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start"),". Smashing. What would we see if we were offline? Well thanks to the magic of Chrome DevTools we can find out. Offline and refresh our browser..."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(88245).Z})),(0,a.kt)("p",null,"Not very user friendly. Once we're done, we should be able to refresh and still see our app."),(0,a.kt)("h2",{id:"workbox-it"},(0,a.kt)("a",{parentName:"h2",href:"https://youtu.be/UODX_pYpVxk"},"Work(box) It")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/"},"Workbox")," is a project that makes the setting up of Service Workers (aka the magic that powers PWAs) easier. It supports webpack use cases through the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/workbox-webpack-plugin"},"workbox-webpack-plugin"),"; so let's give it a whirl. Incidentally, there's a ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/get-started/webpack"},"cracking example")," on the Workbox site."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yarn add workbox-webpack-plugin --dev")," adds the plugin to our project. To make use of it, punt your way over to the ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.production.config.js")," and add an entry for the plugin. We also need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"hash")," parameter of the html-webpack-plugin to be false; if it's true it'll cause problems for the ServiceWorker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const WorkboxPlugin = require('workbox-webpack-plugin');\n\n//...\n\nmodule.exports = {\n\n    //...\n\n    plugins: [\n\n        //...\n\n        new HtmlWebpackPlugin({\n            hash: false,\n            inject: true,\n            template: 'src/index.html',\n            minify: {\n                removeComments: true,\n                collapseWhitespace: true,\n                removeRedundantAttributes: true,\n                useShortDoctype: true,\n                removeEmptyAttributes: true,\n                removeStyleLinkTypeAttributes: true,\n                keepClosingSlash: true,\n                minifyJS: true,\n                minifyCSS: true,\n                minifyURLs: true,\n            },\n        }),\n\n        new WorkboxPlugin({\n            // we want our service worker to cache the dist directory\n            globDirectory: 'dist',\n            // these are the sorts of files we want to cache\n            globPatterns: ['**/*.{html,js,css,png,svg,jpg,gif,json}'],\n            // this is where we want our ServiceWorker to be created\n            swDest: path.resolve('dist', 'sw.js'),\n            // these options encourage the ServiceWorkers to get in there fast \n            // and not allow any straggling \"old\" SWs to hang around\n            clientsClaim: true,\n            skipWaiting: true,\n        }),\n    ]\n\n    //...\n};\n")),(0,a.kt)("p",null,"With this in place, ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," will generate a ServiceWorker. Now to alter our code to register it. Open up ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")," and add this to the end of the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if ('serviceWorker' in navigator) {\n  window.addEventListener('load', () => {\n    navigator.serviceWorker.register('/sw.js').then(registration => {\n      // tslint:disable:no-console\n      console.log('SW registered: ', registration);\n    }).catch(registrationError => {\n      console.log('SW registration failed: ', registrationError);\n    });\n  });\n}\n")),(0,a.kt)("p",null,"Put it together and..."),(0,a.kt)("h2",{id:"what-have-we-got"},"What Have We Got?"),(0,a.kt)("p",null,"Let's ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," again."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69239).Z})),(0,a.kt)("p",null,"Oooohh look! A service worker is with us. Does it work? Let's find out... ",(0,a.kt)("inlineCode",{parentName:"p"},"http-server ./dist")," Browse to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," and let's have a look at the console."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(85710).Z})),(0,a.kt)("p",null,"Looks very exciting. So now the test; let's go offline and refresh:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7395).Z})),(0,a.kt)("p",null,"You are looking at the 200s of success. You're now running with webpack and TypeScript and you have built a Progressive Web Application. Feel good about life."))}d.isMDXComponent=!0},69256:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2017-11-19%2B18.29.15-54567460b77a979a9e4dba8feb457265.png"},11484:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2017-11-19%2B18.34.12-d5bbd3c74bf9d4a82d8f251c089ea555.png"},88245:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2017-11-19%2B20.05.19-6b5581d686fa7797d005f7246adb7d13.png"},85710:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2017-11-19%2B21.34.54-ae84b1617ac72bdea16c28bd009d8c19.png"},69239:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2017-11-19%2B21.55.18-9973076af7f002918277bc5efdbf4620.png"},7395:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2017-11-19%2B22.01.37-197c043030b680dab4bc607862233093.png"}}]);
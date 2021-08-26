"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[54178],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=c(n),k=a,m=h["".concat(p,".").concat(k)]||h[k]||u[k]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35010:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return k}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},p=void 0,c={permalink:"/2018/01/28/webpack-4-ts-loader-fork-ts-checker",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-01-28-webpack-4-ts-loader-fork-ts-checker.md",source:"@site/blog/2018-01-28-webpack-4-ts-loader-fork-ts-checker.md",title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",description:"The first webpack 4 beta dropped on Friday. Very exciting! Following hot on the heels of those announcements, I've some news to share too. Can you guess what it is?",date:"2018-01-28T00:00:00.000Z",formattedDate:"January 28, 2018",tags:[{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:.99,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"Finding webpack 4 (use a Map)",permalink:"/2018/01/29/finding-webpack-4-use-map"},nextItem:{title:"Auth0, TypeScript and ASP.NET Core",permalink:"/2018/01/14/auth0-typescript-and-aspnet-core"}},s={authorsImageUrls:[void 0]},u=[{value:"<code>ts-loader</code>",id:"ts-loader",children:[]},{value:"<code>fork-ts-checker-webpack-plugin</code>",id:"fork-ts-checker-webpack-plugin",children:[]},{value:"PRs",id:"prs",children:[]}],h={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2"},"The first webpack 4 beta dropped on Friday"),". Very exciting! Following hot on the heels of those announcements, I've some news to share too. Can you guess what it is?"),(0,o.kt)("h2",{id:"ts-loader"},(0,o.kt)("inlineCode",{parentName:"h2"},"ts-loader")),(0,o.kt)("p",null,"Yes! The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"ts-loader"))," beta to work with webpack 4 is available. To get hold of the beta:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn add ts-loader@4.0.0-beta.0 -D")),(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install ts-loader@4.0.0-beta.0 -D"))),(0,o.kt)("p",null,"Remember to use this in concert with the webpack 4 beta. To see a working example take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/vanilla"},'the "vanilla" example'),"."),(0,o.kt)("h2",{id:"fork-ts-checker-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")),(0,o.kt)("p",null,"There's more! You may like to use the ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href="https://github.com/Realytics/fork-ts-checker-webpack-plugin">fork-ts-checker-webpack-plugin</a>'),", (which goes lovely with ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," and a biscuit). There is a beta available for that too:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn add johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D")),(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D"))),(0,o.kt)("p",null,"To see a working example take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/fork-ts-checker"},'the "fork-ts-checker" example'),"."),(0,o.kt)("h2",{id:"prs"},"PRs"),(0,o.kt)("p",null,"If you would like to track the progress of these betas then I encourage you to take a look at the PRs they were built from. The ts-loader PR can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/710"},"here"),". The fork-ts-checker-webpack-plugin PR can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/93"},"here"),"."),(0,o.kt)("p",null,"These are betas so things may change further; though hopefully not significantly."))}k.isMDXComponent=!0}}]);
(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[53983],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=c(r),h=a,m=k["".concat(p,".").concat(h)]||k[h]||u[h]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},37818:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l={title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},i={permalink:"/2018/01/28/webpack-4-ts-loader-fork-ts-checker",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-01-28-webpack-4-ts-loader-fork-ts-checker.md",source:"@site/blog/2018-01-28-webpack-4-ts-loader-fork-ts-checker.md",title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",description:"The first webpack 4 beta dropped on Friday. Very exciting! Following hot on the heels of those announcements, I've some news to share too. Can you guess what it is?",date:"2018-01-28T00:00:00.000Z",formattedDate:"January 28, 2018",tags:[{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:1.01,truncated:!1,prevItem:{title:"Finding webpack 4 (use a Map)",permalink:"/2018/01/29/finding-webpack-4-use-map"},nextItem:{title:"Auth0, TypeScript and ASP.NET Core",permalink:"/2018/01/14/auth0-typescript-and-aspnet-core"}},p=[{value:"<code>ts-loader</code>",id:"ts-loader",children:[]},{value:"<code>fork-ts-checker-webpack-plugin</code>",id:"fork-ts-checker-webpack-plugin",children:[]},{value:"PRs",id:"prs",children:[]}],c={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2"},"The first webpack 4 beta dropped on Friday"),". Very exciting! Following hot on the heels of those announcements, I've some news to share too. Can you guess what it is?"),(0,o.kt)("h2",{id:"ts-loader"},(0,o.kt)("inlineCode",{parentName:"h2"},"ts-loader")),(0,o.kt)("p",null,"Yes! The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"ts-loader"))," beta to work with webpack 4 is available. To get hold of the beta:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn add ts-loader@4.0.0-beta.0 -D")),(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install ts-loader@4.0.0-beta.0 -D"))),(0,o.kt)("p",null,"Remember to use this in concert with the webpack 4 beta. To see a working example take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/vanilla"},'the "vanilla" example'),"."),(0,o.kt)("h2",{id:"fork-ts-checker-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")),(0,o.kt)("p",null,"There's more! You may like to use the ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href="https://github.com/Realytics/fork-ts-checker-webpack-plugin">fork-ts-checker-webpack-plugin</a>'),", (which goes lovely with ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," and a biscuit). There is a beta available for that too:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn add johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D")),(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D"))),(0,o.kt)("p",null,"To see a working example take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/fork-ts-checker"},'the "fork-ts-checker" example'),"."),(0,o.kt)("h2",{id:"prs"},"PRs"),(0,o.kt)("p",null,"If you would like to track the progress of these betas then I encourage you to take a look at the PRs they were built from. The ts-loader PR can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/710"},"here"),". The fork-ts-checker-webpack-plugin PR can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/93"},"here"),"."),(0,o.kt)("p",null,"These are betas so things may change further; though hopefully not significantly."))}s.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(n),h=r,d=s["".concat(c,".").concat(h)]||s[h]||u[h]||o;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},610:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(1170)),c={title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},l={permalink:"/2018/01/28/webpack-4-ts-loader-fork-ts-checker",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-01-28-webpack-4-ts-loader-fork-ts-checker.md",source:"@site/blog/2018-01-28-webpack-4-ts-loader-fork-ts-checker.md",description:"The first webpack 4 beta dropped on Friday. Very exciting! Following hot on the heels of those announcements, I've some news to share too. Can you guess what it is?",date:"2018-01-28T00:00:00.000Z",formattedDate:"January 28, 2018",tags:[{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",readingTime:1.01,truncated:!1,prevItem:{title:"Finding webpack 4 (use a Map)",permalink:"/2018/01/29/finding-webpack-4-use-map"},nextItem:{title:"Auth0, TypeScript and ASP.NET Core",permalink:"/2018/01/14/auth0-typescript-and-aspnet-core"}},i=[{value:"<code>ts-loader</code>",id:"ts-loader",children:[]},{value:"<code>fork-ts-checker-webpack-plugin</code>",id:"fork-ts-checker-webpack-plugin",children:[]},{value:"PRs",id:"prs",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2"},"The first webpack 4 beta dropped on Friday"),". Very exciting! Following hot on the heels of those announcements, I've some news to share too. Can you guess what it is?"),Object(o.b)("h2",{id:"ts-loader"},Object(o.b)("inlineCode",{parentName:"h2"},"ts-loader")),Object(o.b)("p",null,"Yes! The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},Object(o.b)("inlineCode",{parentName:"a"},"ts-loader"))," beta to work with webpack 4 is available. To get hold of the beta:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When using ",Object(o.b)("inlineCode",{parentName:"li"},"yarn"),": ",Object(o.b)("inlineCode",{parentName:"li"},"yarn add ts-loader@4.0.0-beta.0 -D")),Object(o.b)("li",{parentName:"ul"},"When using ",Object(o.b)("inlineCode",{parentName:"li"},"npm"),": ",Object(o.b)("inlineCode",{parentName:"li"},"npm install ts-loader@4.0.0-beta.0 -D"))),Object(o.b)("p",null,"Remember to use this in concert with the webpack 4 beta. To see a working example take a look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/vanilla"},'the "vanilla" example'),"."),Object(o.b)("h2",{id:"fork-ts-checker-webpack-plugin"},Object(o.b)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")),Object(o.b)("p",null,"There's more! You may like to use the ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/Realytics/fork-ts-checker-webpack-plugin">fork-ts-checker-webpack-plugin</a>'),", (which goes lovely with ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," and a biscuit). There is a beta available for that too:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When using ",Object(o.b)("inlineCode",{parentName:"li"},"yarn"),": ",Object(o.b)("inlineCode",{parentName:"li"},"yarn add johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D")),Object(o.b)("li",{parentName:"ul"},"When using ",Object(o.b)("inlineCode",{parentName:"li"},"npm"),": ",Object(o.b)("inlineCode",{parentName:"li"},"npm install johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D"))),Object(o.b)("p",null,"To see a working example take a look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/fork-ts-checker"},'the "fork-ts-checker" example'),"."),Object(o.b)("h2",{id:"prs"},"PRs"),Object(o.b)("p",null,"If you would like to track the progress of these betas then I encourage you to take a look at the PRs they were built from. The ts-loader PR can be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/710"},"here"),". The fork-ts-checker-webpack-plugin PR can be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/93"},"here"),"."),Object(o.b)("p",null,"These are betas so things may change further; though hopefully not significantly."))}b.isMDXComponent=!0}}]);
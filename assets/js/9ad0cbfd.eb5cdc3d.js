(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{1166:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},822:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),o=(r(0),r(1166)),c={title:"ts-loader 4 / fork-ts-checker-webpack-plugin 0.4",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["webpack 4","fork-ts-checker-webpack-plugin","ts-loader"],hide_table_of_contents:!1},l={permalink:"/2018/02/25/ts-loader-400-fork-ts-checker-webpack",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-02-25-ts-loader-400-fork-ts-checker-webpack.md",source:"@site/blog/2018-02-25-ts-loader-400-fork-ts-checker-webpack.md",description:"webpack 4 has shipped!",date:"2018-02-25T00:00:00.000Z",formattedDate:"February 25, 2018",tags:[{label:"webpack 4",permalink:"/tags/webpack-4"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"}],title:"ts-loader 4 / fork-ts-checker-webpack-plugin 0.4",readingTime:.6,truncated:!1,prevItem:{title:"It's Not Dead: webpack and dead code elimination limitations",permalink:"/2018/03/07/its-not-dead-webpack-and-dead-code"},nextItem:{title:"Finding webpack 4 (use a Map)",permalink:"/2018/01/29/finding-webpack-4-use-map"}},i=[{value:"<code>ts-loader</code>",id:"ts-loader",children:[]},{value:"<code>fork-ts-checker-webpack-plugin</code>",id:"fork-ts-checker-webpack-plugin",children:[]}],p={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"webpack 4 has shipped!"),Object(o.b)("h2",{id:"ts-loader"},Object(o.b)("inlineCode",{parentName:"h2"},"ts-loader")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},Object(o.b)("inlineCode",{parentName:"a"},"ts-loader"))," 4 is available too. For details see our release ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/releases/tag/v4.0.0"},"here"),". To start using ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," 4:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When using ",Object(o.b)("inlineCode",{parentName:"li"},"yarn"),": ",Object(o.b)("inlineCode",{parentName:"li"},"yarn add ts-loader@4.1.0 -D")),Object(o.b)("li",{parentName:"ul"},"When using ",Object(o.b)("inlineCode",{parentName:"li"},"npm"),": ",Object(o.b)("inlineCode",{parentName:"li"},"npm install ts-loader@4.1.0 -D"))),Object(o.b)("p",null,"Remember to use this in concert with the webpack 4. To see a working example take a look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/vanilla"},'the "vanilla" example'),"."),Object(o.b)("h2",{id:"fork-ts-checker-webpack-plugin"},Object(o.b)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")),Object(o.b)("p",null,"There's more! You may like to use the ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/Realytics/fork-ts-checker-webpack-plugin">fork-ts-checker-webpack-plugin</a>'),", (aka the ts-loader turbo-booster). The webpack compatible version has been ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v0.4.1"},"released to npm as 0.4.1"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When using ",Object(o.b)("inlineCode",{parentName:"li"},"yarn"),": ",Object(o.b)("inlineCode",{parentName:"li"},"yarn add fork-ts-checker-webpack-plugin@0.4.1 -D")),Object(o.b)("li",{parentName:"ul"},"When using ",Object(o.b)("inlineCode",{parentName:"li"},"npm"),": ",Object(o.b)("inlineCode",{parentName:"li"},"npm install fork-ts-checker-webpack-plugin@0.4.1 -D"))),Object(o.b)("p",null,"To see a working example take a look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/fork-ts-checker"},'the "fork-ts-checker" example'),"."))}b.isMDXComponent=!0}}]);
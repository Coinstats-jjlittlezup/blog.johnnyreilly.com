"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[72372],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=c(r),m=a,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},31675:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return k}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"ts-loader 4 / fork-ts-checker-webpack-plugin 0.4",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["webpack 4","fork-ts-checker-webpack-plugin","ts-loader"],hide_table_of_contents:!1},p=void 0,c={permalink:"/2018/02/25/ts-loader-400-fork-ts-checker-webpack",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-02-25-ts-loader-400-fork-ts-checker-webpack.md",source:"@site/blog/2018-02-25-ts-loader-400-fork-ts-checker-webpack.md",title:"ts-loader 4 / fork-ts-checker-webpack-plugin 0.4",description:"webpack 4 has shipped!",date:"2018-02-25T00:00:00.000Z",formattedDate:"February 25, 2018",tags:[{label:"webpack 4",permalink:"/tags/webpack-4"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"}],readingTime:.58,truncated:!1,prevItem:{title:"It's Not Dead: webpack and dead code elimination limitations",permalink:"/2018/03/07/its-not-dead-webpack-and-dead-code"},nextItem:{title:"Finding webpack 4 (use a Map)",permalink:"/2018/01/29/finding-webpack-4-use-map"}},s=[{value:"<code>ts-loader</code>",id:"ts-loader",children:[]},{value:"<code>fork-ts-checker-webpack-plugin</code>",id:"fork-ts-checker-webpack-plugin",children:[]}],u={toc:s};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"webpack 4 has shipped!"),(0,o.kt)("h2",{id:"ts-loader"},(0,o.kt)("inlineCode",{parentName:"h2"},"ts-loader")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"ts-loader"))," 4 is available too. For details see our release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/releases/tag/v4.0.0"},"here"),". To start using ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," 4:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn add ts-loader@4.1.0 -D")),(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install ts-loader@4.1.0 -D"))),(0,o.kt)("p",null,"Remember to use this in concert with the webpack 4. To see a working example take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/vanilla"},'the "vanilla" example'),"."),(0,o.kt)("h2",{id:"fork-ts-checker-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")),(0,o.kt)("p",null,"There's more! You may like to use the ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href="https://github.com/Realytics/fork-ts-checker-webpack-plugin">fork-ts-checker-webpack-plugin</a>'),", (aka the ts-loader turbo-booster). The webpack compatible version has been ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v0.4.1"},"released to npm as 0.4.1"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn add fork-ts-checker-webpack-plugin@0.4.1 -D")),(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install fork-ts-checker-webpack-plugin@0.4.1 -D"))),(0,o.kt)("p",null,"To see a working example take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/fork-ts-checker"},'the "fork-ts-checker" example'),"."))}k.isMDXComponent=!0}}]);
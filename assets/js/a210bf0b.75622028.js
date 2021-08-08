"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[73667],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),k=a,m=h["".concat(p,".").concat(k)]||h[k]||u[k]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17388:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"fork-ts-checker-webpack-plugin v1.0",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["TypeScript","fork-ts-checker-webpack-plugin","ts-loader","tslint","1.0.0","Webpack"],hide_table_of_contents:!1},p=void 0,c={permalink:"/2019/03/06/fork-ts-checker-webpack-plugin-v1",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-03-06-fork-ts-checker-webpack-plugin-v1.md",source:"@site/blog/2019-03-06-fork-ts-checker-webpack-plugin-v1.md",title:"fork-ts-checker-webpack-plugin v1.0",description:"It's time for the first major version of fork-ts-checker-webpack-plugin. It's been a long time coming :-)",date:"2019-03-06T00:00:00.000Z",formattedDate:"March 6, 2019",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"tslint",permalink:"/tags/tslint"},{label:"1.0.0",permalink:"/tags/1-0-0"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:1.89,truncated:!1,prevItem:{title:"Google Analytics API and ASP.Net Core",permalink:"/2019/03/22/google-analytics-api-and-aspnet-core"},nextItem:{title:"AllowList Proxying with ASP.Net Core",permalink:"/2019/02/22/allowlist-proxying-with-aspnet-core"}},s=[{value:"A Little History",id:"a-little-history",children:[]},{value:"One Point Oh",id:"one-point-oh",children:[]},{value:"Incremental Watch API on by Default",id:"incremental-watch-api-on-by-default",children:[]},{value:"Compatibility",id:"compatibility",children:[]}],u={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v1.0.0"},"It's time for the first major version of ",(0,i.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),". It's been a long time coming :-)"),(0,i.kt)("h2",{id:"a-little-history"},"A Little History"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," was originally the handiwork of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/piotr-oles"},"Piotr Ole\u015b"),". He raised an issue with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/issues/537"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-loader"))," suggesting it could be the McCartney to ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),"'s Lennon:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hi everyone!"),(0,i.kt)("p",{parentName:"blockquote"},"I've created webpack plugin: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin")," that plays nicely with ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),". The idea is to compile project with ",(0,i.kt)("inlineCode",{parentName:"p"},"transpileOnly: true")," and check types on separate process (async). With this approach, webpack build is not blocked by type checker and we have semantic check with fast incremental build. More info on github repo :)"),(0,i.kt)("p",{parentName:"blockquote"},"So if you like it and you think it would be good to add some info in README.md about this plugin, I would be greatful."),(0,i.kt)("p",{parentName:"blockquote"},"Thanks :)")),(0,i.kt)("p",null,"We did like it. We did think it would be good. We took him up on his kind offer."),(0,i.kt)("p",null,"Since that time many people have had their paws on the ",(0,i.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," codebase. We love them all."),(0,i.kt)("h2",{id:"one-point-oh"},"One Point Oh"),(0,i.kt)("p",null,'We could have had our first major release a long time ago. The idea first occurred when webpack 5 alpha appeared. "Huh, look at that, a major version number.... Maybe we should do that?" "',(0,i.kt)("em",{parentName:"p"},"Great"),' idea chap - do it!" So here it is; fresh out the box: v1.0.0'),(0,i.kt)("p",null,"There are actually no breaking changes that we're aware of; users of 0.x ",(0,i.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," should be be able to upgrade without any drama."),(0,i.kt)("h2",{id:"incremental-watch-api-on-by-default"},"Incremental Watch API on by Default"),(0,i.kt)("p",null,"Users of TypeScript 3+ may notice a performance improvement as by default the plugin now uses the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/pull/20234"},"incremental watch API")," in TypeScript."),(0,i.kt)("p",null,"Should this prove problematic you can opt out of using it by supplying ",(0,i.kt)("inlineCode",{parentName:"p"},"useTypescriptIncrementalApi: false"),". We are aware of an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/219"},"issue with Vue and the incremental API"),". We hope it will be fixed soon - a generous member of the community is taking a look. In the meantime, we will ",(0,i.kt)("em",{parentName:"p"},"not")," default to using the incremental watch API when in Vue mode."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"As it stands, the plugin supports webpack 2, 3, 4 and 5 alpha. It is compatible with TypeScript 2.1+ and TSLint 4+."),(0,i.kt)("p",null,"Right that's it - enjoy it! And thanks everyone for contributing - we really dig your help. Much love."))}h.isMDXComponent=!0}}]);
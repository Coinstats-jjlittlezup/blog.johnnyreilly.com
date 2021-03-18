(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),h=a,m=s["".concat(o,".").concat(h)]||s[h]||u[h]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},399:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(1170)),o={title:"The Big One Point Oh",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["TypeScript","fork-ts-checker-webpack-plugin","ts-loader","tslint","1.0.0","Webpack"],hide_table_of_contents:!1},c={permalink:"/2019/03/06/the-big-one-point-oh",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-03-06-the-big-one-point-oh.md",source:"@site/blog/2019-03-06-the-big-one-point-oh.md",description:"It's time for the first major version of fork-ts-checker-webpack-plugin. It's been a long time coming :-)",date:"2019-03-06T00:00:00.000Z",formattedDate:"March 6, 2019",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"tslint",permalink:"/tags/tslint"},{label:"1.0.0",permalink:"/tags/1-0-0"},{label:"Webpack",permalink:"/tags/webpack"}],title:"The Big One Point Oh",readingTime:1.89,truncated:!1,prevItem:{title:"Google Analytics API and ASP.Net Core",permalink:"/2019/03/22/google-analytics-api-and-aspnet-core"},nextItem:{title:"WhiteList Proxying with ASP.Net Core",permalink:"/2019/02/22/whitelist-proxying-with-aspnet-core"}},l=[{value:"A Little History",id:"a-little-history",children:[]},{value:"One Point Oh",id:"one-point-oh",children:[]},{value:"Incremental Watch API on by Default",id:"incremental-watch-api-on-by-default",children:[]},{value:"Compatibility",id:"compatibility",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v1.0.0"},"It's time for the first major version of ",Object(i.b)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),". It's been a long time coming :-)"),Object(i.b)("h2",{id:"a-little-history"},"A Little History"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," was originally the handiwork of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/piotr-oles"},"Piotr Ole\u015b"),". He raised an issue with ",Object(i.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/issues/537"},Object(i.b)("inlineCode",{parentName:"a"},"ts-loader"))," suggesting it could be the McCartney to ",Object(i.b)("inlineCode",{parentName:"p"},"ts-loader"),"'s Lennon:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Hi everyone!"),Object(i.b)("p",{parentName:"blockquote"},"I've created webpack plugin: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin")," that plays nicely with ",Object(i.b)("inlineCode",{parentName:"p"},"ts-loader"),". The idea is to compile project with ",Object(i.b)("inlineCode",{parentName:"p"},"transpileOnly: true")," and check types on separate process (async). With this approach, webpack build is not blocked by type checker and we have semantic check with fast incremental build. More info on github repo :)"),Object(i.b)("p",{parentName:"blockquote"},"So if you like it and you think it would be good to add some info in README.md about this plugin, I would be greatful."),Object(i.b)("p",{parentName:"blockquote"},"Thanks :)")),Object(i.b)("p",null,"We did like it. We did think it would be good. We took him up on his kind offer."),Object(i.b)("p",null,"Since that time many people have had their paws on the ",Object(i.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," codebase. We love them all."),Object(i.b)("h2",{id:"one-point-oh"},"One Point Oh"),Object(i.b)("p",null,'We could have had our first major release a long time ago. The idea first occurred when webpack 5 alpha appeared. "Huh, look at that, a major version number.... Maybe we should do that?" "',Object(i.b)("em",{parentName:"p"},"Great"),' idea chap - do it!" So here it is; fresh out the box: v1.0.0'),Object(i.b)("p",null,"There are actually no breaking changes that we're aware of; users of 0.x ",Object(i.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," should be be able to upgrade without any drama."),Object(i.b)("h2",{id:"incremental-watch-api-on-by-default"},"Incremental Watch API on by Default"),Object(i.b)("p",null,"Users of TypeScript 3+ may notice a performance improvement as by default the plugin now uses the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/pull/20234"},"incremental watch API")," in TypeScript."),Object(i.b)("p",null,"Should this prove problematic you can opt out of using it by supplying ",Object(i.b)("inlineCode",{parentName:"p"},"useTypescriptIncrementalApi: false"),". We are aware of an ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/219"},"issue with Vue and the incremental API"),". We hope it will be fixed soon - a generous member of the community is taking a look. In the meantime, we will ",Object(i.b)("em",{parentName:"p"},"not")," default to using the incremental watch API when in Vue mode."),Object(i.b)("h2",{id:"compatibility"},"Compatibility"),Object(i.b)("p",null,"As it stands, the plugin supports webpack 2, 3, 4 and 5 alpha. It is compatible with TypeScript 2.1+ and TSLint 4+."),Object(i.b)("p",null,"Right that's it - enjoy it! And thanks everyone for contributing - we really dig your help. Much love."))}b.isMDXComponent=!0}}]);
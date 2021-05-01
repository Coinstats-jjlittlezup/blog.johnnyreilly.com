(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[20049],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70369:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"webpack: configuring a loader with query / options",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["webpack 2","Webpack","query","options"],hide_table_of_contents:!1},s={permalink:"/2017/01/01/webpack-configuring-loader-with-query",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-01-01-webpack-configuring-loader-with-query.md",source:"@site/blog/2017-01-01-webpack-configuring-loader-with-query.md",title:"webpack: configuring a loader with query / options",description:"webpack 2 is on it's way. As one of the maintainers of ts-loader I've been checking out that ts-loader works with webpack 2. It does: phew!",date:"2017-01-01T00:00:00.000Z",formattedDate:"January 1, 2017",tags:[{label:"webpack 2",permalink:"/tags/webpack-2"},{label:"Webpack",permalink:"/tags/webpack"},{label:"query",permalink:"/tags/query"},{label:"options",permalink:"/tags/options"}],readingTime:2.805,truncated:!1,prevItem:{title:"webpack: resolveLoader / alias with query / options",permalink:"/2017/01/06/webpack-resolveloader-alias-with-query"},nextItem:{title:"Using ts-loader with webpack 2",permalink:"/2016/12/19/using-ts-loader-with-webpack-2"}},l=[{value:"What exactly is <code>query</code> / <code>options</code>?",id:"what-exactly-is-query--options",children:[]},{value:"webpack 2 is coming - look busy!",id:"webpack-2-is-coming---look-busy",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-2-2-the-release-candidate-2e614d05d75f#.ntniu44u6"},"webpack 2 is on it's way"),". As one of the maintainers of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/"},"ts-loader")," I've been checking out that ts-loader works with webpack 2. It does: phew!"),(0,o.kt)("p",null," ts-loader has a continuous integration build that runs against webpack 1. When webpack 2 ships we're planning to move to running CI against webpack 2. However, webpack 2 has some breaking changes. The one that's particularly of relevance to our test packs is that a strict schema is now enforced for ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," with webpack 2. This has been the case since webpack 2 hit beta 23. Check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/pull/2974"},"PR that added it"),". You can see some of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/3018"},"frankly tortured discussion that this generated as well"),"."),(0,o.kt)("p",null,"Let's all take a moment and realise that working on open source is sometimes a rather painful experience. Take a breath. Breathe out. Ready to carry on? Great."),(0,o.kt)("p",null,"There are 2 ways to configure loader options for ts-loader (and in fact this stands for most loaders). Loader options can be set either using a ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," when specifying the loader or through the ",(0,o.kt)("inlineCode",{parentName:"p"},"ts")," (insert the name of alternative loaders here) property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"."),(0,o.kt)("p",null,"The implicatations of the breaking change are: with webpack 2 you can ",(0,o.kt)("strong",{parentName:"p"},"no longer")," configure ts-loader (or any other loader) with a ",(0,o.kt)("inlineCode",{parentName:"p"},"ts")," (insert the name of alternative loaders here) property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". It ",(0,o.kt)("strong",{parentName:"p"},"must")," be done through the ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),". The following code is no longer valid with webpack 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  ...\n  module: {\n    loaders: [{\n      test: /\\.tsx?$/,\n      loader: 'ts-loader' \n    }]\n  },\n  // specify option using `ts` property - **only do this if you are using webpack 1**\n  ts: {\n    transpileOnly: false\n  }\n}\n")),(0,o.kt)("p",null,"This change means that we have needed to adjust how our test pack works. We can no longer make use of ",(0,o.kt)("inlineCode",{parentName:"p"},"ts")," for configuration. Since I wasn't terribly aware of ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," I thought it made sense to share my learnings."),(0,o.kt)("h2",{id:"what-exactly-is-query--options"},"What exactly is ",(0,o.kt)("inlineCode",{parentName:"h2"},"query")," / ",(0,o.kt)("inlineCode",{parentName:"h2"},"options"),"?"),(0,o.kt)("p",null,"Good question. Well, strictly speaking it's 2 possible things; both ways to configure a webpack loader. Classically ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," was a string which could be appended to the name of the loader much like a ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href="https://en.wikipedia.org/wiki/Query_string">query string</a>')," but actually with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack/loader-utils#parsequery"},"greater powers"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  ...\n  module: {\n    loaders: [{ \n      test: /\\.tsx?$/,\n      loader: 'ts-loader?' + JSON.stringify({\n        transpileOnly: false\n      })\n    }]\n  }\n}\n")),(0,o.kt)("p",null,"But it can also be a separately specified object that's supplied alongside a loader (I understand this is relatively new behaviour):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  ...\n  module: {\n    loaders: [{ \n      test: /\\.tsx?$/,\n      loader: 'ts-loader'\n      query: {\n        transpileOnly: false\n      }\n    }]\n  }\n}\n")),(0,o.kt)("h2",{id:"webpack-2-is-coming---look-busy"},"webpack 2 is coming - look busy!"),(0,o.kt)("p",null,"So if you're planning to move to webpack 2, be aware of this breaking change. You can start moving to using configuration via query right now with webpack 1. You don't need to be using webpack 2 to make the jump. So jump!"),(0,o.kt)("p",null,"Finally, and by way of a PS, ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," is renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," in webpack 2; a much better name to my mind. There's actually a bunch of other renames on the way as well - check out the ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules"},"migration guide")," for more on this. The important thing to note is that ",(0,o.kt)("strong",{parentName:"p"},"the old names work in webpack 2"),". But you should plan to move to the new naming at some point as they'll likely disappear when webpack 3 ships."))}c.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[789],{853:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(958)),l={title:"webpack: syncing the enhanced-resolve",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["enhanced-resolve","mild trolling","resolver","Webpack","sync"],hide_table_of_contents:!1},c={permalink:"/blog.johnnyreilly.com/2016/12/11/webpack-syncing-enhanced-resolve",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-12-11-webpack-syncing-enhanced-resolve.md",source:"@site/blog/2016-12-11-webpack-syncing-enhanced-resolve.md",description:"Like Captain Ahab I resolve to sync the white whale that is webpack's enhanced-resolve... English you say? Let me start again:",date:"2016-12-11T00:00:00.000Z",tags:[{label:"enhanced-resolve",permalink:"/blog.johnnyreilly.com/tags/enhanced-resolve"},{label:"mild trolling",permalink:"/blog.johnnyreilly.com/tags/mild-trolling"},{label:"resolver",permalink:"/blog.johnnyreilly.com/tags/resolver"},{label:"Webpack",permalink:"/blog.johnnyreilly.com/tags/webpack"},{label:"sync",permalink:"/blog.johnnyreilly.com/tags/sync"}],title:"webpack: syncing the enhanced-resolve",readingTime:2.38,truncated:!1,prevItem:{title:"Using ts-loader with webpack 2",permalink:"/blog.johnnyreilly.com/2016/12/19/using-ts-loader-with-webpack-2"},nextItem:{title:"My Subconscious is a Better Developer Than I Am",permalink:"/blog.johnnyreilly.com/2016/11/12/my-subconscious-is-better-developer"}},s=[{value:"Sync, for lack of a better word, is good",id:"sync-for-lack-of-a-better-word-is-good",children:[]}],i={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Like Captain Ahab I resolve to sync the white whale that is webpack's ",Object(a.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/webpack/enhanced-resolve">enhanced-resolve</a>'),"... English you say? Let me start again:"),Object(a.b)("p",null," So, you're working on a webpack loader. (In my case the typescript loader; ",Object(a.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/TypeStrong/ts-loader">ts-loader</a>'),") You have need of webpack's resolve capabilities. You dig around and you discover that that superpower is lodged in the very heart of the enhanced-resolve package. Fantastic. But wait, there's more: your needs are custom. You need a sync, not an async resolver. (Try saying that quickly.) You regard the description of ",Object(a.b)("inlineCode",{parentName:"p"},"enhanced-resolve")," with some concern:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"Offers an async require.resolve function. It\'s highly configurable."')),Object(a.b)("p",null,"Well that doesn't sound too promising. Let's have a look at the docs. Ah. Hmmm. You know how it goes with webpack. Why document anything clearly when people could just guess wildly until they near insanity and gibber? Right? It's well established that webpack's attitude to docs has been traditionally akin to Gordon Gecko's view on lunch."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-b3dUlC6AJjI/WE2U_wcJvrI/AAAAAAAAA_4/lciulxFqwrUAZxLol9FVybHCpCdgXSufgCLcB/s1600/documentation-is-for-wimps.png"},Object(a.b)("img",{parentName:"a",src:"https://3.bp.blogspot.com/-b3dUlC6AJjI/WE2U_wcJvrI/AAAAAAAAA_4/lciulxFqwrUAZxLol9FVybHCpCdgXSufgCLcB/s1600/documentation-is-for-wimps.png",alt:"null"})),"In all fairness, things are beginning to change on that front. In fact the ",Object(a.b)("a",{parentName:"p",href:"https://webpack.js.org/"},"new docs")," look very promising. But regrettably, the docs on the enhanced-resolve repo are old school. Which is to say: opaque. However, I'm here to tell you that if a sync resolver is your baby then, contrary to appearances, ",Object(a.b)("inlineCode",{parentName:"p"},"enhanced-resolve")," has your back."),Object(a.b)("h2",{id:"sync-for-lack-of-a-better-word-is-good"},"Sync, for lack of a better word, is good"),Object(a.b)("p",null,"Nestled inside enhanced-resolve is the ",Object(a.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/webpack/enhanced-resolve/blob/3f3f4cd1fcbafa1e98c3c6470fed1277817ed607/lib/ResolverFactory.js">ResolverFactory.js</a>')," which can be used to make a resolver. However, you can supply it with a million options and that's just like giving someone a gun with a predilection for feet."),Object(a.b)("p",null,"What you want is an example of how you could make a sync resolver. Well, surprise surprise it's right in front of your nose. Tucked away in ",Object(a.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/webpack/enhanced-resolve/blob/3f3f4cd1fcbafa1e98c3c6470fed1277817ed607/lib/node.js">node.js</a>')," (I do ","*",Object(a.b)("strong",{parentName:"p"},"not"),"*"," get the name) is exactly what you're after. It contains a number of factory functions which will construct a ready-made resolver for you; sync or async. Perfect! So here's how I'm rolling:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const node = require("enhanced-resolve/lib/node");\n\nfunction makeSyncResolver(options) {\n    return node.create.sync(options.resolve);\n}\n\nconst resolveSync = makeSyncResolver(loader.options);\n')),Object(a.b)("p",null,"The loader options used above you'll be familiar with as the ",Object(a.b)("inlineCode",{parentName:"p"},"resolve")," section of your ",Object(a.b)("inlineCode",{parentName:"p"},"webpack.config.js"),". You can read more about them ",Object(a.b)("a",{parentName:"p",href:"https://github.com/webpack/enhanced-resolve/blob/master/README.md"},"here")," and ",Object(a.b)("a",{parentName:"p",href:"https://webpack.js.org/configuration/resolve/"},"here"),"."),Object(a.b)("p",null,"What you're left with at this point is a function; a ",Object(a.b)("inlineCode",{parentName:"p"},"resolveSync")," function if you will that takes 3 arguments:"),Object(a.b)("dl",null,Object(a.b)("dt",null,"context"),Object(a.b)("dd",null,"I don't know what this is. So when using the function I just supply ",Object(a.b)("code",null,"undefined"),"; and that seems to be OK. Weird, right?"),Object(a.b)("dt",null,"path"),Object(a.b)("dd",null,"This is the path to your code (I think). So, a valid value to supply - handily lifted from the ts-loader test pack - would be: ",Object(a.b)("code",null,"C:\\source\\ts-loader\\.test\\babel-issue92")),Object(a.b)("dt",null,"request"),Object(a.b)("dd",null,"The actual module you're interested in; so using the same test the relevant value would be ",Object(a.b)("code",null,"./submodule/submodule"))),Object(a.b)("p",null,"Put it all together and what have you got?"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const resolvedFileName = resolveSync(\n    undefined,\n    'C:\\source\\ts-loader\\.test\\babel-issue92',\n    './submodule/submodule'\n);\n\n// resolvedFileName: C:\\source\\ts-loader\\.test\\babel-issue92\\submodule\\submodule.tsx\n")),Object(a.b)("p",null,"Boom."))}b.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?r.a.createElement(h,c(c({ref:t},i),{},{components:n})):r.a.createElement(h,c({ref:t},i))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
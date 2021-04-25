(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(i,".").concat(d)]||c[d]||b[d]||a;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(4),o=n(10),a=(n(0),n(1219)),i={title:"webpack: resolveLoader / alias with query / options",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["enhanced-resolve","Webpack","query","options"],hide_table_of_contents:!1},l={permalink:"/2017/01/06/webpack-resolveloader-alias-with-query",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-01-06-webpack-resolveloader-alias-with-query.md",source:"@site/blog/2017-01-06-webpack-resolveloader-alias-with-query.md",title:"webpack: resolveLoader / alias with query / options",description:'Sometimes you write a post for the ages. Sometimes you write one you hope is out of date before you hit "publish". This is one of those.',date:"2017-01-06T00:00:00.000Z",formattedDate:"January 6, 2017",tags:[{label:"enhanced-resolve",permalink:"/tags/enhanced-resolve"},{label:"Webpack",permalink:"/tags/webpack"},{label:"query",permalink:"/tags/query"},{label:"options",permalink:"/tags/options"}],readingTime:1.36,truncated:!1,prevItem:{title:"Hands-free HTTPS",permalink:"/2017/02/01/hands-free-https"},nextItem:{title:"webpack: configuring a loader with query / options",permalink:"/2017/01/01/webpack-configuring-loader-with-query"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Sometimes you write a post for the ages. Sometimes you write one you hope is out of date before you hit "publish". This is one of those.'),Object(a.b)("p",null," There's a ",Object(a.b)("a",{parentName:"p",href:"https://github.com/webpack/enhanced-resolve/issues/41"},"bug")," in webpack's enhanced-resolve. It means that you cannot configure an aliased loader using the ",Object(a.b)("inlineCode",{parentName:"p"},"query")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"options")," in the webpack 2 nomenclature). Let me illustrate; consider the following code:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // ...\n  module: {\n    loaders: [\n      {\n        test: /\\.ts$/,\n        loader: 'ts-loader',\n        query: {\n            entryFileIsJs: true\n        }\n      }\n    ]\n  }\n}\n\nmodule.exports.resolveLoader = { alias: { 'ts-loader': require('path').join(__dirname, \"../../index.js\")\n")),Object(a.b)("p",null,"At the time of writing, if you alias a loader as above, then the ",Object(a.b)("inlineCode",{parentName:"p"},"query")," / ",Object(a.b)("inlineCode",{parentName:"p"},"options")," will ","*",Object(a.b)("em",{parentName:"p"},"not"),"*"," be passed along. This is bad, particularly given the requirement in webpack 2 that configuration is no longer possible through extending the ",Object(a.b)("a",{parentName:"p",href:"https://webpack.js.org/guides/migrating/#loader-configuration-is-through-options"},Object(a.b)("inlineCode",{parentName:"a"},"webpack.config.js")),". So what to do? Well, when this was a problem previously the marvellous ",Object(a.b)("a",{parentName:"p",href:"https://www.twitter.com/jbrantly"},"James Brantly")," had a ",Object(a.b)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/1289#issuecomment-125767499"},"workaround"),". I've taken that and run with it:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"var config = {\n  // ...\n  module: {\n    loaders: [\n      {\n        test: /\\.ts$/,\n        loader: 'ts-loader',\n        query: {\n          entryFileIsJs: true\n        }\n      }\n    ]\n  }\n}\n\nmodule.exports = config;\n\nvar loaderAliasPath = require('path').join(__dirname, \"../../../index.js\");\nvar rules = config.module.loaders || config.module.rules;\nrules.forEach(function(rule) {\n  var options = rule.query || rule.options;\n  rule.loader = rule.loader.replace('ts-loader', loaderAliasPath + (options ? '?' + JSON.stringify(options) : ''));\n});\n")),Object(a.b)("p",null,"This approach stringifies the ",Object(a.b)("inlineCode",{parentName:"p"},"query")," / ",Object(a.b)("inlineCode",{parentName:"p"},"options")," and suffixes it to the aliased path. This works as long as the options you're passing are JSON-able (yes it's a word)."),Object(a.b)("p",null,"As I said earlier; hopefully by the time you read this the workaround will no longer be necessary again. But just in case...."))}u.isMDXComponent=!0}}]);
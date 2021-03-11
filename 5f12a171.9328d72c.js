(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{406:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(3),a=n(7),i=(n(0),n(966)),r={title:"TypeScript Definitions, webpack and Module Types",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["AMD","DefinitelyTyped","TypeScript","CommonJS"],hide_table_of_contents:!1},l={permalink:"/2017/10/20/typescript-definitions-webpack-and-module-types",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-10-20-typescript-definitions-webpack-and-module-types.md",source:"@site/blog/2017-10-20-typescript-definitions-webpack-and-module-types.md",description:"A funny thing happened on the way to the registry the other day. Something changed in an npm package I was using and confusion arose. You can read my unfiltered confusion here but here's the slightly clearer explanation.",date:"2017-10-20T00:00:00.000Z",tags:[{label:"AMD",permalink:"/tags/amd"},{label:"DefinitelyTyped",permalink:"/tags/definitely-typed"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"CommonJS",permalink:"/tags/common-js"}],title:"TypeScript Definitions, webpack and Module Types",readingTime:3.595,truncated:!1,prevItem:{title:"The TypeScript webpack PWA",permalink:"/2017/11/19/the-typescript-webpack-pwa"},nextItem:{title:"Working with Extrahop on webpack and ts-loader",permalink:"/2017/10/19/working-with-extrahop-on-webpack-and-ts"}},s=[{value:"The TL;DR",id:"the-tldr",children:[]},{value:"UMD / CommonJS **and** Global exports oh my!",id:"umd--commonjs-and-global-exports-oh-my",children:[]},{value:"One Definition to Rule Them All",id:"one-definition-to-rule-them-all",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A funny thing happened on the way to the registry the other day. Something changed in an npm package I was using and confusion arose. You can read my unfiltered confusion ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/18791"},"here")," but here's the slightly clearer explanation."),Object(i.b)("h2",{id:"the-tldr"},"The TL;DR"),Object(i.b)("p",null,'When modules are imported, your loader will decide which module format it wants to use. CommonJS / AMD etc. The loader decides. It\'s important that the export is of the same "shape" regardless of the module format. For 2 reasons:'),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You want to be able to reliably use the module regardless of the choice that your loader has made for which export to use."),Object(i.b)("li",{parentName:"ol"},"Because when it comes to writing type definition files for modules, there is support for a ",Object(i.b)("em",{parentName:"li"},"single")," external definition. Not one for each module format.")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://2.bp.blogspot.com/-3yKFfse82vg/Wen3PsVsN6I/AAAAAAAAG1Q/OudrhuBvVs0BdzXt67OyMtxRB8peLwbeACPcBGAYYCw/s1600/one-definition-to-rule-them-all.jpg"},Object(i.b)("img",{parentName:"a",src:"https://2.bp.blogspot.com/-3yKFfse82vg/Wen3PsVsN6I/AAAAAAAAG1Q/OudrhuBvVs0BdzXt67OyMtxRB8peLwbeACPcBGAYYCw/s1600/one-definition-to-rule-them-all.jpg",alt:"null"})),"## The DR"),Object(i.b)("p",null,"Once upon a time we decided to use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MikeMcl/big.js/"},"big.js")," in our project. It's popular and my old friend ",Object(i.b)("a",{parentName:"p",href:"https://twitter.com/nycdotnet"},"Steve Ognibene")," apparently originally wrote the type definitions which can be found ",Object(i.b)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js"},"here"),". Then the definitions were updated by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/googol"},"Miika H\xe4nninen"),". And then there was pain."),Object(i.b)("h2",{id:"umd--commonjs-and-global-exports-oh-my"},"UMD / CommonJS ","*","*","and","*","*"," Global exports oh my!"),Object(i.b)("p",null,"My usage code was as simple as this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as BigJs from 'big.js';\nconst lookABigJs = new BigJs(1);\n")),Object(i.b)("p",null,"If you execute it in a browser it works. It makes me a ",Object(i.b)("inlineCode",{parentName:"p"},"Big"),". However the TypeScript compiler is ","*","*","not","*","*"," happy. No siree. Nope. It's bellowing at me:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"[ts] Cannot use 'new' with an expression whose type lacks a call or construct signature.\n")),Object(i.b)("p",null,'So I think: "Huh! I guess Miika just missed something off when he updated the definition files. No bother. I\'ll fix it." I take a look at how ',Object(i.b)("inlineCode",{parentName:"p"},"big.js")," exposes itself to the outside world. At the time, thusly:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"//AMD.\n    if (typeof define === 'function' && define.amd) {\n        define(function () {\n            return Big;\n        });\n        \n    // Node and other CommonJS-like environments that support module.exports.\n    } else if (typeof module !== 'undefined' && module.exports) {\n        module.exports = Big;\n        module.exports.Big = Big;\n    //Browser.\n    } else {\n        global.Big = Big;\n    }\n")),Object(i.b)("p",null,"Now, we were using webpack as our script bundler / loader. webpack is supersmart; it can take all kinds of module formats. So although it's more famous for supporting CommonJS, it can roll with AMD. That's exactly what's happening here. When webpack encounters the above code, it goes with the AMD export. So at runtime, ",Object(i.b)("inlineCode",{parentName:"p"},"import * as BigJs from 'big.js';")," lands up resolving to the ",Object(i.b)("inlineCode",{parentName:"p"},"return Big;")," above."),Object(i.b)("p",null,"Now this turns out to be super-relevant. I took a look at the relevant portion of the definition file and found this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"export const Big: BigConstructor;\n")),Object(i.b)("p",null,"Which tells me that ",Object(i.b)("inlineCode",{parentName:"p"},"Big")," is being exported as a subproperty of the module. That makes sense; that lines up with the ",Object(i.b)("inlineCode",{parentName:"p"},"module.exports.Big = Big;"),' statement in the the big.js source code. There\'s a "gotcha" coming; can you guess what it is?'),Object(i.b)("p",null,"The problem is that our type definition is not exposing ",Object(i.b)("inlineCode",{parentName:"p"},"Big")," as a default export. So even though it's there; TypeScript won't let us use it. What's killing us further is that webpack is loading the AMD export which ",Object(i.b)("em",{parentName:"p"},"doesn't")," have ",Object(i.b)("inlineCode",{parentName:"p"},"Big")," as a subproperty of the module. It only has it as a default."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://twitter.com/kitsonk"},"Kitson Kelly")," expressed the problem well when he said:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"there is a different shape depending on which loader is being used and I am not sure that makes a huge amount of sense. The AMD shape is different than the CommonJS shape. While that is technically possible, that feels like that is an issue.")),Object(i.b)("h2",{id:"one-definition-to-rule-them-all"},"One Definition to Rule Them All"),Object(i.b)("p",null,'He\'s right; it is an issue. From a TypeScript perspective there is no way to write a definition file that allows for different module "shapes" depending upon the module type. If you really wanted to do that you\'re reduced to writing multiple definition files. That\'s blind alley anyway; what you want is a module to expose itself with the same "shape" regardless of the module type. What you want is this:'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AMD === CommonJS === Global")),Object(i.b)("p",null,"And that's what we now have! Thanks to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikemcl"},"Michael McLaughlin"),", author of big.js, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MikeMcl/big.js/pull/87#issuecomment-332663587"},"version 4.0 unified the export shape of the package"),". Miika H\xe4nninen submitted another ",Object(i.b)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/20096"},"PR")," which fixed up the type definitions. And once again the world is a beautiful place!"))}c.isMDXComponent=!0},966:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=o,d=u["".concat(r,".").concat(b)]||u[b]||h[b]||i;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
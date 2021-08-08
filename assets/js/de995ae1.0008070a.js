"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[91226],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,m=d["".concat(s,".").concat(c)]||d[c]||u[c]||a;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return h},default:function(){return d}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],l={title:"TypeScript Definitions, webpack and Module Types",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["AMD","DefinitelyTyped","TypeScript","CommonJS"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2017/10/20/typescript-definitions-webpack-and-module-types",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-10-20-typescript-definitions-webpack-and-module-types.md",source:"@site/blog/2017-10-20-typescript-definitions-webpack-and-module-types.md",title:"TypeScript Definitions, webpack and Module Types",description:"A funny thing happened on the way to the registry the other day. Something changed in an npm package I was using and confusion arose. You can read my unfiltered confusion here but here's the slightly clearer explanation.",date:"2017-10-20T00:00:00.000Z",formattedDate:"October 20, 2017",tags:[{label:"AMD",permalink:"/tags/amd"},{label:"DefinitelyTyped",permalink:"/tags/definitely-typed"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"CommonJS",permalink:"/tags/common-js"}],readingTime:3.59,truncated:!1,prevItem:{title:"The TypeScript webpack PWA",permalink:"/2017/11/19/the-typescript-webpack-pwa"},nextItem:{title:"Working with Extrahop on webpack and ts-loader",permalink:"/2017/10/19/working-with-extrahop-on-webpack-and-ts"}},h=[{value:"The TL;DR",id:"the-tldr",children:[]},{value:"The DR",id:"the-dr",children:[]},{value:"UMD / CommonJS **and** Global exports oh my!",id:"umd--commonjs-and-global-exports-oh-my",children:[]},{value:"One Definition to Rule Them All",id:"one-definition-to-rule-them-all",children:[]}],u={toc:h};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A funny thing happened on the way to the registry the other day. Something changed in an npm package I was using and confusion arose. You can read my unfiltered confusion ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/18791"},"here")," but here's the slightly clearer explanation."),(0,a.kt)("h2",{id:"the-tldr"},"The TL;DR"),(0,a.kt)("p",null,'When modules are imported, your loader will decide which module format it wants to use. CommonJS / AMD etc. The loader decides. It\'s important that the export is of the same "shape" regardless of the module format. For 2 reasons:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You want to be able to reliably use the module regardless of the choice that your loader has made for which export to use."),(0,a.kt)("li",{parentName:"ol"},"Because when it comes to writing type definition files for modules, there is support for a ",(0,a.kt)("em",{parentName:"li"},"single")," external definition. Not one for each module format.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(13087).Z})),(0,a.kt)("h2",{id:"the-dr"},"The DR"),(0,a.kt)("p",null,"Once upon a time we decided to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/big.js/"},"big.js")," in our project. It's popular and my old friend ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/nycdotnet"},"Steve Ognibene")," apparently originally wrote the type definitions which can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js"},"here"),". Then the definitions were updated by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/googol"},"Miika H\xe4nninen"),". And then there was pain."),(0,a.kt)("h2",{id:"umd--commonjs-and-global-exports-oh-my"},"UMD / CommonJS ","*","*","and","*","*"," Global exports oh my!"),(0,a.kt)("p",null,"My usage code was as simple as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as BigJs from 'big.js';\nconst lookABigJs = new BigJs(1);\n")),(0,a.kt)("p",null,"If you execute it in a browser it works. It makes me a ",(0,a.kt)("inlineCode",{parentName:"p"},"Big"),". However the TypeScript compiler is ","*","*","not","*","*"," happy. No siree. Nope. It's bellowing at me:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"[ts] Cannot use 'new' with an expression whose type lacks a call or construct signature.\n")),(0,a.kt)("p",null,'So I think: "Huh! I guess Miika just missed something off when he updated the definition files. No bother. I\'ll fix it." I take a look at how ',(0,a.kt)("inlineCode",{parentName:"p"},"big.js")," exposes itself to the outside world. At the time, thusly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//AMD.\n    if (typeof define === 'function' && define.amd) {\n        define(function () {\n            return Big;\n        });\n        \n    // Node and other CommonJS-like environments that support module.exports.\n    } else if (typeof module !== 'undefined' && module.exports) {\n        module.exports = Big;\n        module.exports.Big = Big;\n    //Browser.\n    } else {\n        global.Big = Big;\n    }\n")),(0,a.kt)("p",null,"Now, we were using webpack as our script bundler / loader. webpack is supersmart; it can take all kinds of module formats. So although it's more famous for supporting CommonJS, it can roll with AMD. That's exactly what's happening here. When webpack encounters the above code, it goes with the AMD export. So at runtime, ",(0,a.kt)("inlineCode",{parentName:"p"},"import * as BigJs from 'big.js';")," lands up resolving to the ",(0,a.kt)("inlineCode",{parentName:"p"},"return Big;")," above."),(0,a.kt)("p",null,"Now this turns out to be super-relevant. I took a look at the relevant portion of the definition file and found this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const Big: BigConstructor;\n")),(0,a.kt)("p",null,"Which tells me that ",(0,a.kt)("inlineCode",{parentName:"p"},"Big")," is being exported as a subproperty of the module. That makes sense; that lines up with the ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports.Big = Big;"),' statement in the the big.js source code. There\'s a "gotcha" coming; can you guess what it is?'),(0,a.kt)("p",null,"The problem is that our type definition is not exposing ",(0,a.kt)("inlineCode",{parentName:"p"},"Big")," as a default export. So even though it's there; TypeScript won't let us use it. What's killing us further is that webpack is loading the AMD export which ",(0,a.kt)("em",{parentName:"p"},"doesn't")," have ",(0,a.kt)("inlineCode",{parentName:"p"},"Big")," as a subproperty of the module. It only has it as a default."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/kitsonk"},"Kitson Kelly")," expressed the problem well when he said:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"there is a different shape depending on which loader is being used and I am not sure that makes a huge amount of sense. The AMD shape is different than the CommonJS shape. While that is technically possible, that feels like that is an issue.")),(0,a.kt)("h2",{id:"one-definition-to-rule-them-all"},"One Definition to Rule Them All"),(0,a.kt)("p",null,'He\'s right; it is an issue. From a TypeScript perspective there is no way to write a definition file that allows for different module "shapes" depending upon the module type. If you really wanted to do that you\'re reduced to writing multiple definition files. That\'s blind alley anyway; what you want is a module to expose itself with the same "shape" regardless of the module type. What you want is this:'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AMD === CommonJS === Global")),(0,a.kt)("p",null,"And that's what we now have! Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikemcl"},"Michael McLaughlin"),", author of big.js, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/big.js/pull/87#issuecomment-332663587"},"version 4.0 unified the export shape of the package"),". Miika H\xe4nninen submitted another ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/20096"},"PR")," which fixed up the type definitions. And once again the world is a beautiful place!"))}d.isMDXComponent=!0},13087:function(e,t,n){t.Z=n.p+"assets/images/one-definition-to-rule-them-all-4e3bf991d7b9ed2afbd996028353c075.jpg"}}]);
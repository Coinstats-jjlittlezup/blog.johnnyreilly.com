"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[35375],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,g=m["".concat(s,".").concat(y)]||m[y]||c[y]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54397:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return y}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Creating an ES2015 Map from an Array in TypeScript",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["TypeScript","ES6","Array","ES2015","Map"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2016/06/02/create-es2015-map-from-array-in-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-06-02-create-es2015-map-from-array-in-typescript.md",source:"@site/blog/2016-06-02-create-es2015-map-from-array-in-typescript.md",title:"Creating an ES2015 Map from an Array in TypeScript",description:"I'm a great lover of ES2015's Map. However, just recently I tumbled over something I find a touch inconvenient about how you initialise a new Map from the contents of an Array in TypeScript.",date:"2016-06-02T00:00:00.000Z",formattedDate:"June 2, 2016",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"ES6",permalink:"/tags/es-6"},{label:"Array",permalink:"/tags/array"},{label:"ES2015",permalink:"/tags/es-2015"},{label:"Map",permalink:"/tags/map"}],readingTime:2.095,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"Understanding Webpack's DefinePlugin (and using with TypeScript)",permalink:"/2016/07/23/using-webpacks-defineplugin-with-typescript"},nextItem:{title:"The Mysterious Case of Webpack, Angular and jQuery",permalink:"/2016/05/24/the-mysterious-case-of-webpack-angular-and-jquery"}},u={authorsImageUrls:[void 0]},c=[{value:"This Doesn&#39;t Work",id:"this-doesnt-work",children:[]},{value:"This Does",id:"this-does",children:[]}],m={toc:c};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I'm a great lover of ES2015's ",(0,i.kt)("inlineCode",{parentName:"p"},'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">Map</a>'),". However, just recently I tumbled over something I find a touch inconvenient about how you initialise a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," from the contents of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," in TypeScript."),(0,i.kt)("h2",{id:"this-doesnt-work"},"This Doesn't Work"),(0,i.kt)("p",null,"We're going try to something like this: (pilfered from the MDN docs)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'var kvArray = [["key1", "value1"], ["key2", "value2"]];\n\n// Use the regular Map constructor to transform a 2D key-value Array into a map\nvar myMap = new Map(kvArray);\n')),(0,i.kt)("p",null,"Simple enough right? Well I'd rather assumed that I should be able to do something like this in TypeScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const iAmAnArray [\n  { value: "value1", text: "hello" }\n  { value: "value2", text: "map" }\n];\n\nconst iAmAMap = new Map<string, string>(\n  iAmAnArray.map(x => [x.value, x.text])\n);\n')),(0,i.kt)("p",null,"However, to my surprise this errored out with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[ts] Argument of type 'string[][]' is not assignable to parameter of type 'Iterable<[string, string]>'.\n  Types of property '[Symbol.iterator]' are incompatible.\n    Type '() => IterableIterator<string[]>' is not assignable to type '() => Iterator<[string, string]>'.\n      Type 'IterableIterator<string[]>' is not assignable to type 'Iterator<[string, string]>'.\n        Types of property 'next' are incompatible.\n          Type '(value?: any) => IteratorResult<string[]>' is not assignable to type '(value?: any) => IteratorResult<[string, string]>'.\n            Type 'IteratorResult<string[]>' is not assignable to type 'IteratorResult<[string, string]>'.\n              Type 'string[]' is not assignable to type '[string, string]'.\n                Property '0' is missing in type 'string[]'.\n")),(0,i.kt)("p",null,"Disappointing right? It's expecting ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterable&lt;[string, string]&gt;")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," with 2 elements that are strings is ",(0,i.kt)("em",{parentName:"p"},"not")," inferred to be that."),(0,i.kt)("h2",{id:"this-does"},"This Does"),(0,i.kt)("p",null,"It emerges that there is a way to do this though; you just need to give the compiler a clue. You need to include a type assertion of ",(0,i.kt)("inlineCode",{parentName:"p"}," as [string, string]")," which tells the compiler that what you've just declared is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". (Please note that ",(0,i.kt)("inlineCode",{parentName:"p"},"[string, string]")," corresponds to the types of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," and should be set accordingly.)"),(0,i.kt)("p",null,"So a working version of the code looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const iAmAnArray [\n  { value: "value1", text: "hello" }\n  { value: "value2", text: "map" }\n];\n\nconst iAmAMap = new Map<string, string>(\n  iAmAnArray.map(x => [x.value, x.text] as [string, string])\n);\n')),(0,i.kt)("p",null,"Or, to be terser, this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const iAmAnArray [\n  { value: "value1", text: "hello" }\n  { value: "value2", text: "map" }\n];\n\nconst iAmAMap = new Map( // Look Ma!  No type annotations\n  iAmAnArray.map(x => [x.value, x.text] as [string, string])\n);\n')),(0,i.kt)("p",null,"I've raised this as an issue with the TypeScript team; you can find details ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/8936"},"here"),"."))}y.isMDXComponent=!0}}]);
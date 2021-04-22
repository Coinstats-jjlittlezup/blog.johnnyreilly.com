(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(n),u=r,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?a.a.createElement(d,p(p({ref:t},l),{},{components:n})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(4),a=n(10),o=(n(0),n(1211)),i={title:"TypeScript 2.0, ES2016 and Babel",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["TypeScript","Babel","ES2016"],hide_table_of_contents:!1},p={permalink:"/2016/09/22/typescript-20-es2016-and-babel",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-09-22-typescript-20-es2016-and-babel.md",source:"@site/blog/2016-09-22-typescript-20-es2016-and-babel.md",title:"TypeScript 2.0, ES2016 and Babel",description:"TypeScript 2.0 has shipped! Naturally I'm excited. For some time I've been using TypeScript to emit ES2015 code which I pass onto Babel to transpile to ES \"old school\". You can see how here.",date:"2016-09-22T00:00:00.000Z",formattedDate:"September 22, 2016",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"Babel",permalink:"/tags/babel"},{label:"ES2016",permalink:"/tags/es-2016"}],readingTime:2.315,truncated:!1,prevItem:{title:"React Component Curry",permalink:"/2016/10/05/react-component-curry"},nextItem:{title:"Integration Tests with SQL Server Database Snapshots",permalink:"/2016/09/12/integration-tests-with-sql-server"}},s=[{value:"<code>tsconfig.json</code> changes",id:"tsconfigjson-changes",children:[]},{value:"Babel changes",id:"babel-changes",children:[]},{value:"Webpack changes",id:"webpack-changes",children:[]},{value:"Wake Up and Smell the Jasmine",id:"wake-up-and-smell-the-jasmine",children:[]}],l={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2016/09/22/announcing-typescript-2-0/"},"TypeScript 2.0 has shipped!")," Naturally I'm excited. For some time I've been using TypeScript to emit ES2015 code which I pass onto Babel to transpile to ES \"old school\". You can see how ",Object(o.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2015/12/es6-typescript-babel-react-flux-karma.html"},"here"),"."),Object(o.b)("p",null," Merely upgrading my ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," to use ",Object(o.b)("inlineCode",{parentName:"p"},'"typescript": "^2.0.3"')," from ",Object(o.b)("inlineCode",{parentName:"p"},'"typescript": "^1.8.10"')," was painless. TypeScript now supports ES2016 (the previous major release 1.8 supported ES2015). I wanted to move on from writing ES2015 to writing ES2016 using my chosen build process. Fortunately, it's supported. Phew. However, due to some advances in ecmascript feature modularisation within the TypeScript compiler the upgrade path is slightly different. I figured that I'd just be able to update the ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html">target</a>')," in my ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," to ",Object(o.b)("inlineCode",{parentName:"p"},'"es2016"')," from ",Object(o.b)("inlineCode",{parentName:"p"},'"es2015"'),", add in the ES2016 preset for Babel and jobs a good 'un. Not so. There were a few more steps to follow. Here's the recipe:"),Object(o.b)("h2",{id:"tsconfigjson-changes"},Object(o.b)("inlineCode",{parentName:"h2"},"tsconfig.json")," changes"),Object(o.b)("p",null,"Well, there's no ",Object(o.b)("inlineCode",{parentName:"p"},'"es2016"')," target for TypeScript. You carry on with a target of ",Object(o.b)("inlineCode",{parentName:"p"},'"es2015"'),". What I need is a new entry: ",Object(o.b)("inlineCode",{parentName:"p"},'"lib": ["dom", "es2015", "es2016"]'),". This tells the compiler that we're expecting to be emitting to an environment which supports a browser (",Object(o.b)("inlineCode",{parentName:"p"},'"dom"'),'), and both ES2016 and ES2015. Our "environment" is Babel and it\'s going to pick up the baton from this point. My complete ',Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "compileOnSave": false,\n  "compilerOptions": {\n    "allowSyntheticDefaultImports": true,\n    "lib": ["dom", "es2015", "es2016"],\n    "jsx": "preserve",\n    "module": "es2015",\n    "moduleResolution": "node",\n    "noEmitOnError": false,\n    "noImplicitAny": true,\n    "preserveConstEnums": true,\n    "removeComments": false,\n    "suppressImplicitAnyIndexErrors": true,\n    "target": "es2015"\n  }\n}\n')),Object(o.b)("h2",{id:"babel-changes"},"Babel changes"),Object(o.b)("p",null,"I needed the Babel preset for ES2016; with a quick ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://www.npmjs.com/package/babel-preset-es2016">npm install --save-dev babel-preset-es2016</a>')," that was sorted. Now just to kick Webpack into gear..."),Object(o.b)("h2",{id:"webpack-changes"},"Webpack changes"),Object(o.b)("p",null,"My webpack config plugs together TypeScript and Babel with the help of ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-loader"},"ts-loader")," and ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-loader"},"babel-loader"),". It allows the transpilation of my (few) JavaScript files so I can write ES2015. However, mainly it allows the transpilation of my (many) TypeScript files so I can write ES2015-flavoured TypeScript. I'll now tweak the ",Object(o.b)("inlineCode",{parentName:"p"},"loaders")," so they cater for ES2016 as well."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"var webpack = require('webpack');\n\nmodule.exports = {\n  // ....\n\n  module: {\n    loaders: [{\n      // Now transpiling ES2016 TS\n      test: /\\.ts(x?)$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader?presets[]=es2016&presets[]=es2015&presets[]=react!ts-loader'\n    }, {\n      // Now transpiling ES2016 JS\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel',\n      query: {\n        presets: ['es2016', 'es2015', 'react']\n      }\n    }]\n  },\n\n  // ....\n};\n")),Object(o.b)("h2",{id:"wake-up-and-smell-the-jasmine"},"Wake Up and Smell the Jasmine"),Object(o.b)("p",null,"And we're there; it works. How do I know? Well; here's the proof:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'it("Array.prototype.includes works", () => {\n    const result = [1, 2, 3].includes(2);\n    expect(result).toBe(true);\n  });\n\n  it("Exponentiation operator works", () => {\n    expect(1 ** 2 === Math.pow(1, 2)).toBe(true);\n  });\n')),Object(o.b)("p",null,"Much love to the TypeScript team for an awesome job; I can't wait to get stuck into some of the exciting new features of TypeScript 2.0. ",Object(o.b)("inlineCode",{parentName:"p"},"strictNullChecks")," FTW!"))}c.isMDXComponent=!0}}]);
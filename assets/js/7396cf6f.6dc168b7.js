(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{1210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(4),r=n(10),o=(n(0),n(1210)),i={title:"Start Me Up: ts-loader meet .tsbuildinfo",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[".tsbuildinfo","TypeScript"],hide_table_of_contents:!1},l={permalink:"/2019/09/30/start-me-up-ts-loader-meet-tsbuildinfo",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-09-30-start-me-up-ts-loader-meet-tsbuildinfo.md",source:"@site/blog/2019-09-30-start-me-up-ts-loader-meet-tsbuildinfo.md",title:"Start Me Up: ts-loader meet .tsbuildinfo",description:"With TypeScript 3.4, a new behaviour landed and a magical new file type appeared; .tsbuildinfo",date:"2019-09-30T00:00:00.000Z",formattedDate:"September 30, 2019",tags:[{label:".tsbuildinfo",permalink:"/tags/tsbuildinfo"},{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:1.755,truncated:!1,prevItem:{title:"Definitely Typed: The Movie",permalink:"/2019/10/08/definitely-typed-movie"},nextItem:{title:"Coming Soon: Definitely Typed",permalink:"/2019/09/14/coming-soon-definitely-typed"}},p=[{value:"<code>ts-loader v7.0.0</code>",id:"ts-loader-v700",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With TypeScript 3.4, ",Object(o.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html"},"a new behaviour landed and a magical new file type appeared; ",Object(o.b)("inlineCode",{parentName:"a"},".tsbuildinfo"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TypeScript 3.4 introduces a new flag called ",Object(o.b)("inlineCode",{parentName:"p"},"--incremental")," which tells TypeScript to save information about the project graph from the last compilation. The next time TypeScript is invoked with ",Object(o.b)("inlineCode",{parentName:"p"},"--incremental"),", it will use that information to detect the least costly way to type-check and emit changes to your project."),Object(o.b)("p",{parentName:"blockquote"},"..."),Object(o.b)("p",{parentName:"blockquote"},"These ",Object(o.b)("inlineCode",{parentName:"p"},".tsbuildinfo")," files can be safely deleted and don\u2019t have any impact on our code at runtime - they\u2019re purely used to make compilations faster.")),Object(o.b)("p",null,"This was all very exciting, but until the release of TypeScript 3.6 there were no APIs available to allow third party tools like ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," to hook into them. The wait is over! Because with TypeScript 3.6 the APIs landed: ",Object(o.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html#apis-to-support---build-and---incremental"},"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html#apis-to-support---build-and---incremental")),Object(o.b)("p",null,"This was the handiwork of the very excellent ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/sheetalkamat"},"@sheetalkamat")," of the TypeScript team - you can see her PR here: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/pull/31432"},"https://github.com/microsoft/TypeScript/pull/31432")),Object(o.b)("p",null,"What's more, Sheetal took the PR for a test drive using ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader"),", and her hard work has just shipped with ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/TypeStrong/ts-loader/releases/tag/v6.2.0">v6.2.0</a>'),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/TypeStrong/ts-loader/pull/1012"},"https://github.com/TypeStrong/ts-loader/pull/1012")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/TypeStrong/ts-loader/pull/1017"},"https://github.com/TypeStrong/ts-loader/pull/1017"))),Object(o.b)("p",null,"If you're a ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," user, and you're using TypeScript 3.6+ then you can get the benefit of this now. That is, if you make use of the ",Object(o.b)("inlineCode",{parentName:"p"},"experimentalWatchApi: true")," option. With this set:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"ts-loader will both emit and consume the ",Object(o.b)("inlineCode",{parentName:"p"},".tsbuildinfo")," artefact.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"This applies both when a project has ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," options ",Object(o.b)("inlineCode",{parentName:"p"},"composite")," or ",Object(o.b)("inlineCode",{parentName:"p"},"incremental")," set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The net result of people using this should be faster cold starts in build time where a previous compilation has taken place."))),Object(o.b)("h2",{id:"ts-loader-v700"},Object(o.b)("inlineCode",{parentName:"h2"},"ts-loader v7.0.0")),Object(o.b)("p",null,"We would love for you to take this new functionality for a spin. Partly because we think it will make your life better. And partly because we're planning to make using the watch API the default behaviour of ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," when we come to ship ",Object(o.b)("inlineCode",{parentName:"p"},"v7.0.0"),"."),Object(o.b)("p",null,"If you can take this for a spin before we make that change we'd be so grateful. Thanks so much to Sheetal for persevering away on this feature. It's amazing work and so very appreciated."))}s.isMDXComponent=!0}}]);
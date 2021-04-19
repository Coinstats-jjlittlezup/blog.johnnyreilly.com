(window.webpackJsonp=window.webpackJsonp||[]).push([[1029],{1131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(4),a=n(10),o=(n(0),n(1210)),i={title:"@types is rogue",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},p={permalink:"/2017/02/14/typescript-types-and-repeatable-builds",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-02-14-typescript-types-and-repeatable-builds.md",source:"@site/blog/2017-02-14-typescript-types-and-repeatable-builds.md",title:"@types is rogue",description:'Or perhaps I should call this "@types and repeatable builds"....',date:"2017-02-14T00:00:00.000Z",formattedDate:"February 14, 2017",tags:[],readingTime:2.025,truncated:!1,prevItem:{title:"Under the Duck: An Afternoon in Open Source",permalink:"/2017/02/23/under-duck-afternoon-in-open-source"},nextItem:{title:"Hands-free HTTPS",permalink:"/2017/02/01/hands-free-https"}},s=[{value:"How do we respond to this?",id:"how-do-we-respond-to-this",children:[]}],c={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Or perhaps I should call this "@types and repeatable builds"....'),Object(o.b)("p",null," The other day, on a React / TypeScript project I work on, the nightly CI build started failing. But nothing had changed in the project... What gives? After digging I discovered the reason; spome of the type definitions which my project depends upon had changed. Why did this break my build? Let\u2019s learn some more..."),Object(o.b)("p",null,"We acquire type definitions via npm. Type definitions from Definitely Typed are published to npm by an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Microsoft/types-publisher"},"automated process")," and they are all published under the @types namespace on npm. So, the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/react"},"react type definition")," is published as the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@types/react"},"@types/react")," package, the node type definition is published as the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@types/node"},"@types/node")," package. The hip bone's connected to the thigh bone. You get the picture."),Object(o.b)("p",null,"The npm ecosystem is essentially built on top of ",Object(o.b)("a",{parentName:"p",href:"http://semver.org/"},"semantic versioning")," and they ",Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/getting-started/semantic-versioning"},"take it seriously"),". Essentially, when a package is published it should be categorised as a major release (breaking changes), a minor release (extra functionality which is backwards compatible) or a patch release (backwards compatible bug fixes)."),Object(o.b)("p",null,"Now we get to the meat of the matter: @types is rogue. You cannot trust the version numbers on @types packages to respect semantic versioning. They don't."),Object(o.b)("p",null,"The main reason for this is that when it comes to versioning, the @types type definition essentially looks to mirror the version of the package they are seeking to type. ",Object(o.b)("em",{parentName:"p"},"THIS MEANS THE TYPE DEFINITION CANNOT DO ITS OWN SEMANTIC VERSIONING.")," A simple change in a type definition can lead to breakages in consuming code. That's what happened to me. Let's say an exported interface name changes; all code that relies upon the old name will now break. You see? Pain."),Object(o.b)("h2",{id:"how-do-we-respond-to-this"},"How do we respond to this?"),Object(o.b)("p",null,"My own take has been to pin the version numbers of @types packages; fixing to specific definitions. No ",Object(o.b)("inlineCode",{parentName:"p"},'"~"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'"^"')," for my ",Object(o.b)("inlineCode",{parentName:"p"},"@types devDependencies"),"."),Object(o.b)("p",null,"No respect semantic versioning? No problem. You can go much further with repeatable builds and made use of ",Object(o.b)("a",{parentName:"p",href:"https://code.facebook.com/posts/1840075619545360"},"facebook's new npm client yarn")," and ",Object(o.b)("a",{parentName:"p",href:"https://yarnpkg.com/blog/2016/11/24/lockfiles-for-all/"},"lockfiles")," (very popular BTW) but I haven't felt the need yet. This should be ample for now."),Object(o.b)("p",null,"The other question that may be nagging at your subconscious is this: what\u2019s an easy way to know when new packages are available for my project dependencies? Well, the ",Object(o.b)("inlineCode",{parentName:"p"},"Get-Package -Updates")," (nuget hat tip) for npm that I\u2019d recommend is this: ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npm-check-updates"},"npm-check-updates"),". It does the job wonderfully."))}l.isMDXComponent=!0},1210:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},h=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),b=r,d=h["".concat(i,".").concat(b)]||h[b]||u[b]||o;return n?a.a.createElement(d,p(p({ref:t},c),{},{components:n})):a.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
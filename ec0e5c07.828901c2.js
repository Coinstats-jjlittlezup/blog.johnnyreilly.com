(window.webpackJsonp=window.webpackJsonp||[]).push([[827],{892:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(966)),i={title:"@types is rogue",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},p={permalink:"/2017/02/14/typescript-types-and-repeatable-builds",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-02-14-typescript-types-and-repeatable-builds.md",source:"@site/blog/2017-02-14-typescript-types-and-repeatable-builds.md",description:'Or perhaps I should call this "@types and repeatable builds"....',date:"2017-02-14T00:00:00.000Z",tags:[],title:"@types is rogue",readingTime:2.025,truncated:!1,prevItem:{title:"Under the Duck: An Afternoon in Open Source",permalink:"/2017/02/23/under-duck-afternoon-in-open-source"},nextItem:{title:"Hands-free HTTPS",permalink:"/2017/02/01/hands-free-https"}},s=[{value:"How do we respond to this?",id:"how-do-we-respond-to-this",children:[]}],c={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Or perhaps I should call this "@types and repeatable builds"....'),Object(o.b)("p",null," The other day, on a React / TypeScript project I work on, the nightly CI build started failing. But nothing had changed in the project... What gives? After digging I discovered the reason; spome of the type definitions which my project depends upon had changed. Why did this break my build? Let\u2019s learn some more..."),Object(o.b)("p",null,"We acquire type definitions via npm. Type definitions from Definitely Typed are published to npm by an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Microsoft/types-publisher"},"automated process")," and they are all published under the @types namespace on npm. So, the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/react"},"react type definition")," is published as the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@types/react"},"@types/react")," package, the node type definition is published as the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@types/node"},"@types/node")," package. The hip bone's connected to the thigh bone. You get the picture."),Object(o.b)("p",null,"The npm ecosystem is essentially built on top of ",Object(o.b)("a",{parentName:"p",href:"http://semver.org/"},"semantic versioning")," and they ",Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/getting-started/semantic-versioning"},"take it seriously"),". Essentially, when a package is published it should be categorised as a major release (breaking changes), a minor release (extra functionality which is backwards compatible) or a patch release (backwards compatible bug fixes)."),Object(o.b)("p",null,"Now we get to the meat of the matter: @types is rogue. You cannot trust the version numbers on @types packages to respect semantic versioning. They don't."),Object(o.b)("p",null,"The main reason for this is that when it comes to versioning, the @types type definition essentially looks to mirror the version of the package they are seeking to type. ",Object(o.b)("em",{parentName:"p"},"THIS MEANS THE TYPE DEFINITION CANNOT DO ITS OWN SEMANTIC VERSIONING.")," A simple change in a type definition can lead to breakages in consuming code. That's what happened to me. Let's say an exported interface name changes; all code that relies upon the old name will now break. You see? Pain."),Object(o.b)("h2",{id:"how-do-we-respond-to-this"},"How do we respond to this?"),Object(o.b)("p",null,"My own take has been to pin the version numbers of @types packages; fixing to specific definitions. No ",Object(o.b)("inlineCode",{parentName:"p"},'"~"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'"^"')," for my ",Object(o.b)("inlineCode",{parentName:"p"},"@types devDependencies"),"."),Object(o.b)("p",null,"No respect semantic versioning? No problem. You can go much further with repeatable builds and made use of ",Object(o.b)("a",{parentName:"p",href:"https://code.facebook.com/posts/1840075619545360"},"facebook's new npm client yarn")," and ",Object(o.b)("a",{parentName:"p",href:"https://yarnpkg.com/blog/2016/11/24/lockfiles-for-all/"},"lockfiles")," (very popular BTW) but I haven't felt the need yet. This should be ample for now."),Object(o.b)("p",null,"The other question that may be nagging at your subconscious is this: what\u2019s an easy way to know when new packages are available for my project dependencies? Well, the ",Object(o.b)("inlineCode",{parentName:"p"},"Get-Package -Updates")," (nuget hat tip) for npm that I\u2019d recommend is this: ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npm-check-updates"},"npm-check-updates"),". It does the job wonderfully."))}l.isMDXComponent=!0},966:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},h=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),b=a,d=h["".concat(i,".").concat(b)]||h[b]||u[b]||o;return n?r.a.createElement(d,p(p({ref:t},c),{},{components:n})):r.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
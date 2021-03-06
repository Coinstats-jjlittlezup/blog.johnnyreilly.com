(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(958)),i={title:"\ud83d\udca3ing Relative Paths with TypeScript and webpack",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},p={permalink:"/blog.johnnyreilly.com/2018/08/21/killing-relative-paths-with-typescript-and",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-08-21-killing-relative-paths-with-typescript-and.md",source:"@site/blog/2018-08-21-killing-relative-paths-with-typescript-and.md",description:"I write a lot of TypeScript. Because I like modularity, I split up my codebases into discreet modules and import from them as necessary.",date:"2018-08-21T00:00:00.000Z",tags:[],title:"\ud83d\udca3ing Relative Paths with TypeScript and webpack",readingTime:2.72,truncated:!1,prevItem:{title:"Ivan Drago and Definitely Typed",permalink:"/blog.johnnyreilly.com/2018/09/15/ivan-drago-and-definitely-typed"},nextItem:{title:"Docker and Configuration on Azure Web App for Containers: Whither Colons?",permalink:"/blog.johnnyreilly.com/2018/07/28/configuring-docker-azure-web-app-containers"}},l=[{value:"TypeScript",id:"typescript",children:[]},{value:"webpack <code>resolve.alias</code> to the rescue!",id:"webpack-resolvealias-to-the-rescue",children:[]},{value:"DRY with the tsconfig-paths-webpack-plugin",id:"dry-with-the-tsconfig-paths-webpack-plugin",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I write a lot of TypeScript. Because I like modularity, I split up my codebases into discreet modules and ",Object(r.b)("inlineCode",{parentName:"p"},"import")," from them as necessary."),Object(r.b)("p",null," Take a look at this ",Object(r.b)("inlineCode",{parentName:"p"},"import"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import * as utils from '../../../../../../../shared/utils';\n")),Object(r.b)("p",null,"Now take a look at this import:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import * as utils from 'shared/utils';\n")),Object(r.b)("p",null,'Which do you prefer? If the answer was "the first" then read no further. You have all you need, go forth and be happy. If the answer was "the second" then stick around; I can help!'),Object(r.b)("h2",{id:"typescript"},"TypeScript"),Object(r.b)("p",null,"There's been a solution for this in TypeScript-land for some time. You can read the detail ",Object(r.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"},'in the "path mapping" docs here'),"."),Object(r.b)("p",null,"Let's take a slightly simpler example; we have a folder structure that looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"projectRoot \n\u251c\u2500\u2500 components \n\u2502 \u2514\u2500\u2500 page.tsx (imports '../shared/utils') \n\u251c\u2500\u2500 shared \n\u2502 \u251c\u2500\u2500 folder1 \n\u2502 \u2514\u2500\u2500 folder2 \n\u2502 \u2514\u2500\u2500 utils.ts \n\u2514\u2500\u2500 tsconfig.json\n")),Object(r.b)("p",null,"We would like ",Object(r.b)("inlineCode",{parentName:"p"},"page.tsx")," to import ",Object(r.b)("inlineCode",{parentName:"p"},"'shared/utils'")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"'../shared/utils'"),". We can, if we augment our ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," with the following properties:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{ \n  "compilerOptions": { \n    "baseUrl": ".", \n    "paths": { \n       "components/*": ["components/*"],\n       "shared/*": ["shared/*"]\n    }\n  }\n}\n')),Object(r.b)("p",null,"Then we can use option 2. We can happily write:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import * as utils from 'shared/utils';\n")),Object(r.b)("p",null,"My code compiles, yay.... Ship it!"),Object(r.b)("p",null,"Let's not get over-excited. Actually, we're only part-way there; you can compile this code with the TypeScript compiler.... But is that enough?"),Object(r.b)("p",null,"I bundle my TypeScript with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader"),' and webpack. If I try and use my new exciting import statement above with my build system then disappointment is in my future. webpack will be all like "import whuuuuuuuut?"'),Object(r.b)("p",null,"You see, webpack doesn't know what we told the TypeScript compiler in the ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json"),". Why would it? It was our little secret."),Object(r.b)("h2",{id:"webpack-resolvealias-to-the-rescue"},"webpack ",Object(r.b)("inlineCode",{parentName:"h2"},"resolve.alias")," to the rescue!"),Object(r.b)("p",null,"This same functionality has existed in webpack for a long time; actually much longer than it has existed in TypeScript. It's the ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/configuration/resolve/#resolve-alias"},Object(r.b)("inlineCode",{parentName:"a"},"resolve.alias"))," functionality."),Object(r.b)("p",null,"So, looking at that I should be able to augment my ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js")," like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  resolve: {\n    alias: {\n      components: path.resolve(process.cwd(), 'components/'),\n      shared: path.resolve(process.cwd(), 'shared/'),\n    }\n  }\n};\n")),Object(r.b)("p",null,"And now both webpack and TypeScript are up to speed with how to resolve modules."),Object(r.b)("h2",{id:"dry-with-the-tsconfig-paths-webpack-plugin"},"DRY with the ",Object(r.b)("a",{parentName:"h2",href:"https://github.com/dividab/tsconfig-paths-webpack-plugin"},Object(r.b)("inlineCode",{parentName:"a"},"tsconfig-paths-webpack-plugin"))),Object(r.b)("p",null,"When I look at the ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js")," something occurs to me: I don't like to repeat myself. As well as that, I don't like to repeat myself. It's so... Repetitive."),Object(r.b)("p",null,"The declarations you make in the ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," are re-stated in the ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js"),". Who wants to maintain two sets of code where one would do? Not me."),Object(r.b)("p",null,"Fortunately, you don't have to. There's the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dividab/tsconfig-paths-webpack-plugin"},Object(r.b)("inlineCode",{parentName:"a"},"tsconfig-paths-webpack-plugin"))," for webpack which will do the job for you. You can replace your verbose ",Object(r.b)("inlineCode",{parentName:"p"},"resolve.alias")," with this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'module.exports = {\n  //...\n  resolve: {\n    plugins: [new TsconfigPathsPlugin({ /*configFile: "./path/to/tsconfig.json" */ })]\n  }\n};\n')),Object(r.b)("p",null,"This does the hard graft of reading your ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," and translating path mappings into webpack ",Object(r.b)("inlineCode",{parentName:"p"},"alias"),"es. From this point forward, you need only edit the ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," and everything else will just work."),Object(r.b)("p",null,"Thanks to ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jonaskello"},"Jonas Kello"),", author of the plugin; it's tremendous! Thanks also to ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/TheLarkInn"},"Sean Larkin")," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/s-panferov"},"Stanislav Panferov")," (of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/s-panferov/awesome-typescript-loader"},"awesome-typescript-loader"),") who together worked on the original plugin that I understand the ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig-paths-webpack-plugin")," is based on. Great work!"))}s.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),h=a,d=b["".concat(i,".").concat(h)]||b[h]||u[h]||r;return n?o.a.createElement(d,p(p({ref:t},c),{},{components:n})):o.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
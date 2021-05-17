(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[4046],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35953:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"TypeScript, webpack: goodbye relative paths",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["relative paths","TypeScript","webpack","alias","paths","resolve","tsconfig-paths-webpack-plugin"],hide_table_of_contents:!1},p={permalink:"/2018/08/21/killing-relative-paths-with-typescript-and",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-08-21-killing-relative-paths-with-typescript-and.md",source:"@site/blog/2018-08-21-killing-relative-paths-with-typescript-and.md",title:"TypeScript, webpack: goodbye relative paths",description:"I write a lot of TypeScript. Because I like modularity, I split up my codebases into discreet modules and import from them as necessary.",date:"2018-08-21T00:00:00.000Z",formattedDate:"August 21, 2018",tags:[{label:"relative paths",permalink:"/tags/relative-paths"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"webpack",permalink:"/tags/webpack"},{label:"alias",permalink:"/tags/alias"},{label:"paths",permalink:"/tags/paths"},{label:"resolve",permalink:"/tags/resolve"},{label:"tsconfig-paths-webpack-plugin",permalink:"/tags/tsconfig-paths-webpack-plugin"}],readingTime:2.72,truncated:!1,prevItem:{title:"Semantic Versioning and Definitely Typed",permalink:"/2018/09/15/semantic-versioning-and-definitely-typed"},nextItem:{title:"Docker and Configuration on Azure Web App for Containers: Whither Colons?",permalink:"/2018/07/28/configuring-docker-azure-web-app-containers"}},l=[{value:"TypeScript",id:"typescript",children:[]},{value:"webpack <code>resolve.alias</code> to the rescue!",id:"webpack-resolvealias-to-the-rescue",children:[]},{value:"DRY with the tsconfig-paths-webpack-plugin",id:"dry-with-the-tsconfig-paths-webpack-plugin",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I write a lot of TypeScript. Because I like modularity, I split up my codebases into discreet modules and ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," from them as necessary."),(0,o.kt)("p",null," Take a look at this ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as utils from '../../../../../../../shared/utils';\n")),(0,o.kt)("p",null,"Now take a look at this import:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as utils from 'shared/utils';\n")),(0,o.kt)("p",null,'Which do you prefer? If the answer was "the first" then read no further. You have all you need, go forth and be happy. If the answer was "the second" then stick around; I can help!'),(0,o.kt)("h2",{id:"typescript"},"TypeScript"),(0,o.kt)("p",null,"There's been a solution for this in TypeScript-land for some time. You can read the detail ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"},'in the "path mapping" docs here'),"."),(0,o.kt)("p",null,"Let's take a slightly simpler example; we have a folder structure that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"projectRoot \n\u251c\u2500\u2500 components \n\u2502 \u2514\u2500\u2500 page.tsx (imports '../shared/utils') \n\u251c\u2500\u2500 shared \n\u2502 \u251c\u2500\u2500 folder1 \n\u2502 \u2514\u2500\u2500 folder2 \n\u2502 \u2514\u2500\u2500 utils.ts \n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("p",null,"We would like ",(0,o.kt)("inlineCode",{parentName:"p"},"page.tsx")," to import ",(0,o.kt)("inlineCode",{parentName:"p"},"'shared/utils'")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"'../shared/utils'"),". We can, if we augment our ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," with the following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "compilerOptions": { \n    "baseUrl": ".", \n    "paths": { \n       "components/*": ["components/*"],\n       "shared/*": ["shared/*"]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Then we can use option 2. We can happily write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as utils from 'shared/utils';\n")),(0,o.kt)("p",null,"My code compiles, yay.... Ship it!"),(0,o.kt)("p",null,"Let's not get over-excited. Actually, we're only part-way there; you can compile this code with the TypeScript compiler.... But is that enough?"),(0,o.kt)("p",null,"I bundle my TypeScript with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader"),' and webpack. If I try and use my new exciting import statement above with my build system then disappointment is in my future. webpack will be all like "import whuuuuuuuut?"'),(0,o.kt)("p",null,"You see, webpack doesn't know what we told the TypeScript compiler in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". Why would it? It was our little secret."),(0,o.kt)("h2",{id:"webpack-resolvealias-to-the-rescue"},"webpack ",(0,o.kt)("inlineCode",{parentName:"h2"},"resolve.alias")," to the rescue!"),(0,o.kt)("p",null,"This same functionality has existed in webpack for a long time; actually much longer than it has existed in TypeScript. It's the ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/resolve/#resolve-alias"},(0,o.kt)("inlineCode",{parentName:"a"},"resolve.alias"))," functionality."),(0,o.kt)("p",null,"So, looking at that I should be able to augment my ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  resolve: {\n    alias: {\n      components: path.resolve(process.cwd(), 'components/'),\n      shared: path.resolve(process.cwd(), 'shared/'),\n    }\n  }\n};\n")),(0,o.kt)("p",null,"And now both webpack and TypeScript are up to speed with how to resolve modules."),(0,o.kt)("h2",{id:"dry-with-the-tsconfig-paths-webpack-plugin"},"DRY with the ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/dividab/tsconfig-paths-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"tsconfig-paths-webpack-plugin"))),(0,o.kt)("p",null,"When I look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," something occurs to me: I don't like to repeat myself. As well as that, I don't like to repeat myself. It's so... Repetitive."),(0,o.kt)("p",null,"The declarations you make in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," are re-stated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". Who wants to maintain two sets of code where one would do? Not me."),(0,o.kt)("p",null,"Fortunately, you don't have to. There's the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dividab/tsconfig-paths-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"tsconfig-paths-webpack-plugin"))," for webpack which will do the job for you. You can replace your verbose ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve.alias")," with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'module.exports = {\n  //...\n  resolve: {\n    plugins: [new TsconfigPathsPlugin({ /*configFile: "./path/to/tsconfig.json" */ })]\n  }\n};\n')),(0,o.kt)("p",null,"This does the hard graft of reading your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and translating path mappings into webpack ",(0,o.kt)("inlineCode",{parentName:"p"},"alias"),"es. From this point forward, you need only edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and everything else will just work."),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jonaskello"},"Jonas Kello"),", author of the plugin; it's tremendous! Thanks also to ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/TheLarkInn"},"Sean Larkin")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/s-panferov"},"Stanislav Panferov")," (of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/s-panferov/awesome-typescript-loader"},"awesome-typescript-loader"),") who together worked on the original plugin that I understand the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig-paths-webpack-plugin")," is based on. Great work!"))}c.isMDXComponent=!0}}]);
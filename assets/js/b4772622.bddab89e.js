(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[35195],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return b}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),b=o,m=u["".concat(s,".").concat(b)]||u[b]||c[b]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85324:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i=["components"],l={title:"webpack? esbuild? Why not both?",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["webpack","esbuild","esbuild-loader","ts-loader","babel-loader"],image:"blog/2021-07-11-webpack-esbuild-why-not-both/webpack-esbuild-why-not-both.jpg",hide_table_of_contents:!1},s=void 0,p={permalink:"/2021/07/11/webpack-esbuild-why-not-both",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-07-11-webpack-esbuild-why-not-both.md",source:"@site/blog/2021-07-11-webpack-esbuild-why-not-both.md",title:"webpack? esbuild? Why not both?",description:"Builds can be made faster using tools like esbuild. However, if you're invested in webpack but would still like to take advantage of speedier builds, there is a way. This post takes us through using esbuild alongside webpack using esbuild-loader.",date:"2021-07-11T00:00:00.000Z",formattedDate:"July 11, 2021",tags:[{label:"webpack",permalink:"/tags/webpack"},{label:"esbuild",permalink:"/tags/esbuild"},{label:"esbuild-loader",permalink:"/tags/esbuild-loader"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"babel-loader",permalink:"/tags/babel-loader"}],readingTime:7.025,truncated:!1,nextItem:{title:"Output connection strings and keys from Azure Bicep",permalink:"/2021/07/07/output-connection-strings-and-keys-from-azure-bicep"}},d=[{value:"Web development",id:"web-development",children:[]},{value:"Migrating an existing project to esbuild",id:"migrating-an-existing-project-to-esbuild",children:[]},{value:"Creating a baseline application",id:"creating-a-baseline-application",children:[]},{value:"CRACO",id:"craco",children:[]}],c={toc:d};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Builds can be made faster using tools like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evanw/esbuild"},"esbuild"),". However, if you're invested in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"webpack")," but would still like to take advantage of speedier builds, there is a way. This post takes us through using esbuild alongside webpack using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/privatenumber/esbuild-loader"},"esbuild-loader"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of the &quot;why not both&quot; meme adapted to include webpack and esbuild",src:a(2028).Z})),(0,r.kt)("h2",{id:"web-development"},"Web development"),(0,r.kt)("p",null,"With apologies to those suffering from JavaScript fatigue, once again the world of web development is evolving. It's long been common practice to run your JavaScript and TypeScript through some kind of Node.js based build tool, like webpack or rollup.js.  These tools are written in the same language they compile to; JavaScript (or TypeScript). The new kids on the blog are tools like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evanw/esbuild"},"esbuild"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vitejs/vite"},"Vite")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/swc-project/swc"},"swc"),". The significant difference between these and their predecessors is that they are written in languages like Go and Rust. Go and Rust enjoy far greater performance than JavaScript.  This translates into significantly faster builds. If you'd like to read about esbuild directly there's a ",(0,r.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/fast-javascript-bundling-with-esbuild/"},"great post")," about it."),(0,r.kt)("p",null,"These new tools are transformative and represent a likely future of build tooling for the web. In the long term, the likes of esbuild, Vite and friends may well come to displace the current standard build tools.  So the webpacks, the rollups and so on. "),(0,r.kt)("p",null,"However, that\u2019s the long term.  There\u2019s a lot of projects out there that are already heavily invested in their current build tooling.  Mostly webpack.  Migrating to a new build tool is no small piece of work.  New projects might start with Vite, but existing ones are less likely to be ported.  There\u2019s a reason webpack is so popular.  It does a lot of things very well indeed. It's battle tested on large projects; it's mature and it handles many use cases."),(0,r.kt)("p",null,"So if you\u2019re a team that wants to have faster builds, but doesn\u2019t have the time to go through a big migration... Is there anything you can do?  Yes. There\u2019s a middle ground to be explored. There\u2019s a relatively new project named ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/privatenumber/esbuild-loader"},"esbuild-loader")," developed by ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/privatenumbr"},"hiroki osame"),". It's a webpack loader built on top of esbuild. It allows users to swap out ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader")," with itself, and massively improve build speeds."),(0,r.kt)("p",null,"To declare an interest here, I'm the primary maintainer of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader"),"; a popular TypeScript loader that is commonly used with webpack. However, I feel strongly that the important thing here is developer productivity. As Node.js-based projects, ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader")," will never be able to compete with ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," in the same way. As a language, Go really, uh, goes!"),(0,r.kt)("p",null,"Whilst esbuild may not work for all use cases, it will for the majority. As such ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," represents a middle ground; and an early way to get access to the increased build speed that esbuild offers ",(0,r.kt)("em",{parentName:"p"},"without")," saying goodbye to webpack.  This post will look at using ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," in your webpack setup."),(0,r.kt)("h2",{id:"migrating-an-existing-project-to-esbuild"},"Migrating an existing project to esbuild"),(0,r.kt)("p",null,"It's very straightforward to migrate a project which uses either ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader"),". You install the dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D esbuild-loader\n")),(0,r.kt)("p",null,"Then if we are currently using ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader"),", we make this change to our ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  module.exports = {\n    module: {\n      rules: [\n-       {\n-         test: /\\.js$/,\n-         use: 'babel-loader',\n-       },\n+       {\n+         test: /\\.js$/,\n+         loader: 'esbuild-loader',\n+         options: {\n+           loader: 'jsx',  // Remove this if you're not using JSX\n+           target: 'es2015'  // Syntax to compile to (see options below for possible values)\n+         }\n+       },\n\n        ...\n      ],\n    },\n  }\n")),(0,r.kt)("p",null,"Or if we're using ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader"),", we make this change to our ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  module.exports = {\n    module: {\n      rules: [\n-       {\n-         test: /\\.tsx?$/,\n-         use: 'ts-loader'\n-       },\n+       {\n+         test: /\\.tsx?$/,\n+         loader: 'esbuild-loader',\n+         options: {\n+           loader: 'tsx',  // Or 'ts' if you don't need tsx\n+           target: 'es2015'\n+         }\n+       },\n\n        ...\n      ]\n    },\n  }\n")),(0,r.kt)("h2",{id:"creating-a-baseline-application"},"Creating a baseline application"),(0,r.kt)("p",null,"Let's try ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," out in practice.  We're going to create a new React application using ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-app --template typescript\n")),(0,r.kt)("p",null,"This will scaffold out a new React application using TypeScript in the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app")," directory. It's worth knowing that Create React App uses ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader")," behind the scenes. "),(0,r.kt)("p",null,"CRA also uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin")," to provide TypeScript type checking. This is very useful, as esbuild ",(0,r.kt)("em",{parentName:"p"},"just")," does transpilation and ",(0,r.kt)("a",{parentName:"p",href:"https://esbuild.github.io/faq/#upcoming-roadmap"},"does not intend to provide type checking support"),". So it's tremendous we still have that plugin in place as otherwise we would lose type checking."),(0,r.kt)("p",null,"So we can understand the advantage of moving to esbuild, we first need a baseline to understand what performance looks like with babel-loader. We'll run ",(0,r.kt)("inlineCode",{parentName:"p"},"time npm run build")," to execute a build of our simple app:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of the completed build for Create React App",src:a(1637).Z})),(0,r.kt)("p",null,"Our complete build, TypeScript type checking, transpilation, minification and so on, all took 22.08 seconds. The question now is, what will happen if we drop esbuild into the mix?"),(0,r.kt)("h2",{id:"craco"},"CRACO"),(0,r.kt)("p",null,"One way to customise a Create React App build is by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run eject")," and then customising the code that CRA pumps out. Doing so is fine, but it means you can't keep track with CRA's evolution.  An alternative is to use a tool like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gsoft-inc/craco"},"CRACO")," which allows us to tweak configuration in place. It describes itself this way:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"C"),"reate ",(0,r.kt)("em",{parentName:"p"},"R"),"eact ",(0,r.kt)("em",{parentName:"p"},"A"),"pp ",(0,r.kt)("em",{parentName:"p"},"C"),"onfiguration ",(0,r.kt)("em",{parentName:"p"},"O"),"verride is an easy and comprehensible configuration layer for create-react-app.")),(0,r.kt)("p",null,"We're going to use CRACO, so we'll add ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," and CRACO as dependencies: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @craco/craco esbuild-loader --save-dev\n")),(0,r.kt)("p",null,"Then we'll swap over our various ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," in our ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},"CRACO"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"start": "craco start",\n"build": "craco build",\n"test": "craco test",\n')),(0,r.kt)("p",null,"Our app now uses CRACO, but we haven't yet configured it.  So we'll add a ",(0,r.kt)("inlineCode",{parentName:"p"},"craco.config.js")," file to the root of our project. This is where we swap out ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { addAfterLoader, removeLoaders, loaderByName, getLoaders, throwUnexpectedConfigError } = require('@craco/craco');\nconst { ESBuildMinifyPlugin } = require('esbuild-loader');\n\nconst throwError = (message) =>\n    throwUnexpectedConfigError({\n        packageName: 'craco',\n        githubRepo: 'gsoft-inc/craco',\n        message,\n        githubIssueQuery: 'webpack',\n    });\n\nmodule.exports = {\n    webpack: {\n        configure: (webpackConfig, { paths }) => {\n            const { hasFoundAny, matches } = getLoaders(webpackConfig, loaderByName('babel-loader'));\n            if (!hasFoundAny) throwError('failed to find babel-loader');\n\n            console.log('removing babel-loader');\n            const { hasRemovedAny, removedCount } = removeLoaders(webpackConfig, loaderByName('babel-loader'));\n            if (!hasRemovedAny) throwError('no babel-loader to remove');\n            if (removedCount !== 2) throwError('had expected to remove 2 babel loader instances');\n\n            console.log('adding esbuild-loader');\n\n            const tsLoader = {\n                test: /\\.(js|mjs|jsx|ts|tsx)$/,\n                include: paths.appSrc,\n                loader: require.resolve('esbuild-loader'),\n                options: { \n                  loader: 'tsx',\n                  target: 'es2015'\n                },\n            };\n\n            const { isAdded: tsLoaderIsAdded } = addAfterLoader(webpackConfig, loaderByName('url-loader'), tsLoader);\n            if (!tsLoaderIsAdded) throwError('failed to add esbuild-loader');\n            console.log('added esbuild-loader');\n\n            console.log('adding non-application JS babel-loader back');\n            const { isAdded: babelLoaderIsAdded } = addAfterLoader(\n                webpackConfig,\n                loaderByName('esbuild-loader'),\n                matches[1].loader // babel-loader\n            );\n            if (!babelLoaderIsAdded) throwError('failed to add back babel-loader for non-application JS');\n            console.log('added non-application JS babel-loader back');\n\n            console.log('replacing TerserPlugin with ESBuildMinifyPlugin');\n            webpackConfig.optimization.minimizer = [\n                new ESBuildMinifyPlugin({\n                    target: 'es2015' \n                })\n            ];\n\n            return webpackConfig;\n        },\n    },\n};\n")),(0,r.kt)("p",null,"So what's happening here? The script looks for ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader")," usages in the default Create React App config. There will be two; one for TypeScript / JavaScript application code (we want to replace this) and one for non application JavaScript code. It's not too clear what non application JavaScript code there is or can be, so we'll leave it in place; it may be important. Significantly, the code we care about is the application code."),(0,r.kt)("p",null,"You cannot remove a ",(0,r.kt)("em",{parentName:"p"},"single")," loader using ",(0,r.kt)("inlineCode",{parentName:"p"},"CRACO"),", so instead we'll remove both and we'll add back the non application JavaScript ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader"),". We'll also add ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"{ loader: 'tsx', target: 'es2015' }")," option set (to ensure we can process JSX/TSX)."),(0,r.kt)("p",null,"Finally we'll swap out using Terser for JavaScript minification for esbuild as well."),(0,r.kt)("p",null,"Our migration is complete. The next time we build we'll have Create React App running using ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," ",(0,r.kt)("em",{parentName:"p"},"without")," having ejected. Once again we'll run ",(0,r.kt)("inlineCode",{parentName:"p"},"time npm run build")," to execute a build of our simple app and determine how long it takes:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of the completed build for Create React App with esbuild",src:a(73845).Z})),(0,r.kt)("p",null,"Our complete build, TypeScript type checking, transpilation, minification and so on, all took 13.85 seconds. By migrating to ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," we've reduced our overall compilation time by approximately one third; this is a tremendous improvement!"),(0,r.kt)("p",null,"As your codebase scales and your application grows, compilation time can skyrocket also. With ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," you should get ongoing benefits to your build time."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/webpack-or-esbuild-why-not-both/"},"This post was originally published on LogRocket.")))}u.isMDXComponent=!0},73845:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create-react-app-esbuild-89d926dee2fa650999a342ad915812c7.png"},1637:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create-react-app-raw-05d2052c9ae4f4a8b894727622d3aca3.png"},2028:function(e,t,a){"use strict";t.Z=a.p+"assets/images/webpack-esbuild-why-not-both-a320b6bc74d2965419e947062bf8eddd.jpg"}}]);
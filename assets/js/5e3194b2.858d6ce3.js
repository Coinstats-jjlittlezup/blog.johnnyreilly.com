(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{1170:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),o=(a(0),a(1170)),l={title:"Create React App with ts-loader and CRACO",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["CRACO","TypeScript","create react app","fork-ts-checker-webpack-plugin","ts-loader"],hide_table_of_contents:!1},i={permalink:"/2021/01/02/create-react-app-with-ts-loader-and-craco",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-02-create-react-app-with-ts-loader-and-craco.md",source:"@site/blog/2021-01-02-create-react-app-with-ts-loader-and-craco.md",description:"Create React App is a fantastic way to get up and running building a web app with React. It also supports using TypeScript with React. Simply entering the following:",date:"2021-01-02T00:00:00.000Z",formattedDate:"January 2, 2021",tags:[{label:"CRACO",permalink:"/tags/craco"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"create react app",permalink:"/tags/create-react-app"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"}],title:"Create React App with ts-loader and CRACO",readingTime:3.385,truncated:!1,prevItem:{title:"Strongly typing react-querys useQueries",permalink:"/2021/01/03/strongly-typing-react-query-s-usequeries"},nextItem:{title:"Azure Pipelines meet Jest",permalink:"/2020/12/30/azure-pipelines-meet-jest"}},c=[{value:"<del><code>babel-loader</code></del> <code>ts-loader</code>",id:"babel-loader-ts-loader",children:[]}],p={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," is a fantastic way to get up and running building a web app with React. It also supports using TypeScript with React. Simply entering the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-app --template typescript\n")),Object(o.b)("p",null,"Will give you a great TypeScript React project to get building with. There's two parts to the TypeScript support that exist:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Transpilation AKA "turning our TypeScript into JavaScript". Back since ',Object(o.b)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/typescript-and-babel-7/"},"Babel 7 launched, Babel has enjoyed great support for transpiling TypeScript into JavaScript"),". Create React App leverages this; using the Babel webpack loader, ",Object(o.b)("a",{parentName:"li",href:"https://github.com/babel/babel-loader"},"babel-loader"),", for transpilation."),Object(o.b)("li",{parentName:"ol"},'Type checking AKA "seeing if our code compiles". Create React App uses the ',Object(o.b)("a",{parentName:"li",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin"},Object(o.b)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," to run the TypeScript type checker on a separate process and report any issues that may exist.")),Object(o.b)("p",null,"This is a great setup and works very well for the majority of use cases. However, what if we'd like to tweak this setup? What if we'd like to swap out ",Object(o.b)("inlineCode",{parentName:"p"},"babel-loader")," for ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," for compilation purposes? Can we do that?"),Object(o.b)("p",null,"Yes you can! And that's what we're going to do using a tool named ",Object(o.b)("a",{parentName:"p",href:"https://github.com/gsoft-inc/craco"},Object(o.b)("inlineCode",{parentName:"a"},"CRACO"))," ","-",' the pithy shortening of "Create React App Configuration Override". This is a tool that allows us to:'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Get all the benefits of create-react-app and customization without using 'eject' by adding a single ",Object(o.b)("inlineCode",{parentName:"p"},"craco.config.js")," file at the root of your application and customize your eslint, babel, postcss configurations and many more.")),Object(o.b)("h2",{id:"babel-loader-ts-loader"},Object(o.b)("del",{parentName:"h2"},Object(o.b)("inlineCode",{parentName:"del"},"babel-loader"))," ",Object(o.b)("inlineCode",{parentName:"h2"},"ts-loader")),Object(o.b)("p",null,"So let's do the swap. First of all we're going to need to add ",Object(o.b)("inlineCode",{parentName:"p"},"CRACO")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," to our project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"npm install @craco/craco ts-loader --save-dev\n")),Object(o.b)("p",null,"Then we'll swap over our various ",Object(o.b)("inlineCode",{parentName:"p"},"scripts")," in our ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," to use ",Object(o.b)("inlineCode",{parentName:"p"},"CRACO"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'"start": "craco start",\n        "build": "craco build",\n        "test": "craco test",\n')),Object(o.b)("p",null,"Finally we'll add a ",Object(o.b)("inlineCode",{parentName:"p"},"craco.config.js")," file to the root of our project. This is where we swap out ",Object(o.b)("inlineCode",{parentName:"p"},"babel-loader")," for ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { addAfterLoader, removeLoaders, loaderByName, getLoaders, throwUnexpectedConfigError } = require('@craco/craco');\n\nconst throwError = (message) =>\n    throwUnexpectedConfigError({\n        packageName: 'craco',\n        githubRepo: 'gsoft-inc/craco',\n        message,\n        githubIssueQuery: 'webpack',\n    });\n\nmodule.exports = {\n    webpack: {\n        configure: (webpackConfig, { paths }) => {\n            const { hasFoundAny, matches } = getLoaders(webpackConfig, loaderByName('babel-loader'));\n            if (!hasFoundAny) throwError('failed to find babel-loader');\n\n            console.log('removing babel-loader');\n            const { hasRemovedAny, removedCount } = removeLoaders(webpackConfig, loaderByName('babel-loader'));\n            if (!hasRemovedAny) throwError('no babel-loader to remove');\n            if (removedCount !== 2) throwError('had expected to remove 2 babel loader instances');\n\n            console.log('adding ts-loader');\n\n            const tsLoader = {\n                test: /\\.(js|mjs|jsx|ts|tsx)$/,\n                include: paths.appSrc,\n                loader: require.resolve('ts-loader'),\n                options: { transpileOnly: true },\n            };\n\n            const { isAdded: tsLoaderIsAdded } = addAfterLoader(webpackConfig, loaderByName('url-loader'), tsLoader);\n            if (!tsLoaderIsAdded) throwError('failed to add ts-loader');\n            console.log('added ts-loader');\n\n            console.log('adding non-application JS babel-loader back');\n            const { isAdded: babelLoaderIsAdded } = addAfterLoader(\n                webpackConfig,\n                loaderByName('ts-loader'),\n                matches[1].loader // babel-loader\n            );\n            if (!babelLoaderIsAdded) throwError('failed to add back babel-loader for non-application JS');\n            console.log('added non-application JS babel-loader back');\n\n            return webpackConfig;\n        },\n    },\n};\n")),Object(o.b)("p",null,"So what's happening here? The script looks for ",Object(o.b)("inlineCode",{parentName:"p"},"babel-loader")," usages in the default Create React App config. There will be two; one for TypeScript / JavaScript application code (we want to replace this) and one for non application JavaScript code. I'm actually not too clear what non application JavaScript code there is or can be, but we'll leave it in place; it may be important."),Object(o.b)("p",null,"You cannot remove a ",Object(o.b)("em",{parentName:"p"},"single")," loader using ",Object(o.b)("inlineCode",{parentName:"p"},"CRACO"),", so instead we'll remove both and we'll add back the non application JavaScript ",Object(o.b)("inlineCode",{parentName:"p"},"babel-loader"),". We'll also add ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"transpileOnly: true")," option set (to ensure ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," doesn't do type checking)."),Object(o.b)("p",null,"Now the next time we run ",Object(o.b)("inlineCode",{parentName:"p"},"npm start")," we'll have Create React App running using ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," and ",Object(o.b)("em",{parentName:"p"},"without")," having ejected. If we want to adjust the options of ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," further then we're completely at liberty to do so, adjusting the ",Object(o.b)("inlineCode",{parentName:"p"},"options")," in our ",Object(o.b)("inlineCode",{parentName:"p"},"craco.config.js"),"."),Object(o.b)("p",null,"If you value debugging your original source code rather than the transpiled JavaScript, remember to set the ",Object(o.b)("inlineCode",{parentName:"p"},'"sourceMap": true')," property in your ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),Object(o.b)("p",null,"Finally, if we wanted to go even further, we could remove the ",Object(o.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," and move ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," to use ",Object(o.b)("inlineCode",{parentName:"p"},"transpileOnly: false")," so it performs type checking also. However, generally it may be better to stay with the setup with post outlines for performance reasons."))}s.isMDXComponent=!0}}]);
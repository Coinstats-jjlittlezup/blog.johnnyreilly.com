(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=o,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(h,p(p({ref:t},l),{},{components:n})):a.a.createElement(h,p({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(3),a=n(8),r=(n(0),n(1166)),i={title:"TypeScript / webpack - you down with PnP? Yarn, you know me!",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["TypeScript","yarn","Webpack","PnP"],hide_table_of_contents:!1},p={permalink:"/2019/06/07/typescript-webpack-you-down-with-pnp",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-06-07-typescript-webpack-you-down-with-pnp.md",source:"@site/blog/2019-06-07-typescript-webpack-you-down-with-pnp.md",description:"Yarn PnP is an innovation by the Yarn team designed to speed up module resolution by node. To quote the (excellent) docs:",date:"2019-06-07T00:00:00.000Z",formattedDate:"June 7, 2019",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"yarn",permalink:"/tags/yarn"},{label:"Webpack",permalink:"/tags/webpack"},{label:"PnP",permalink:"/tags/pn-p"}],title:"TypeScript / webpack - you down with PnP? Yarn, you know me!",readingTime:5.535,truncated:!1,prevItem:{title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",permalink:"/2019/07/13/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin"},nextItem:{title:"TypeScript and high CPU usage - watch don't stare!",permalink:"/2019/05/23/typescript-and-high-cpu-usage-watch"}},s=[{value:"Vanilla <code>ts-loader</code>",id:"vanilla-ts-loader",children:[]},{value:"<code>fork-ts-checker-webpack-plugin</code> with <code>ts-loader</code>",id:"fork-ts-checker-webpack-plugin-with-ts-loader",children:[]},{value:"Living on the Bleeding Edge",id:"living-on-the-bleeding-edge",children:[]}],l={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Yarn PnP is an innovation by the Yarn team designed to speed up module resolution by node. To quote the ",Object(r.b)("a",{parentName:"p",href:"https://yarnpkg.com/en/docs/pnp"},"(excellent) docs"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Plug\u2019n\u2019Play is an alternative installation strategy unveiled in September 2018..."),Object(r.b)("p",{parentName:"blockquote"},"The way regular installs work is simple: Yarn generates a ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," directory that Node is then able to consume. In this context, Node doesn\u2019t know the first thing about what a package is: it only reasons in terms of files. \u201cDoes this file exist here? No? Let\u2019s look in the parent ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," then. Does it exist here? Still no? Too bad\u2026 parent folder it is!\u201d - and it does this until it matches something that matches one of the possibilities. That\u2019s vastly inefficient."),Object(r.b)("p",{parentName:"blockquote"},"When you think about it, Yarn knows everything about your dependency tree - it evens installs it! So why is Node tasked with locating your packages on the disk? Why don\u2019t we simply query Yarn, and let it tell us where to look for a package X required by a package Y? That\u2019s what Plug\u2019n\u2019Play (abbreviated PnP) is. Instead of generating a node","_","modules directory and leaving the resolution to Node, we now generate a single .pnp.js file and let Yarn tell us where to find our packages.")),Object(r.b)("p",null,"Yarn has been worked upon, amongst others, by the excellent ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/arcanis"},"Ma\xebl Nison"),". You can hear him talking about it in person ",Object(r.b)("a",{parentName:"p",href:"https://youtu.be/XePfzVs852s"},"in this talk at JSConfEU"),"."),Object(r.b)("p",null,"Thanks particularly to Ma\xebl's work, it's possible to use Yarn PnP with TypeScript using webpack with ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," ",Object(r.b)("em",{parentName:"p"},"and"),Object(r.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),". This post intends to show you just how simple it is to convert a project that uses either to work with Yarn PnP."),Object(r.b)("h2",{id:"vanilla-ts-loader"},"Vanilla ",Object(r.b)("inlineCode",{parentName:"h2"},"ts-loader")),Object(r.b)("p",null,"Your project is built using standalone ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader"),"; i.e. a simple setup that handles both transpilation and type checking."),Object(r.b)("p",null,"First things first, add this property to your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),": (this is only required if you are using Yarn 1; this tag will be optional starting from the v2, where projects will switch to PnP by default.)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n    "installConfig": {\n        "pnp": true \n    }\n}\n')),Object(r.b)("p",null,"Also, because this is webpack, we're going to need to add an extra dependency in the form of ",Object(r.b)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"yarn add -D pnp-webpack-plugin\n")),Object(r.b)("p",null,"To quote the excellent docs, make the following amends to your ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"const PnpWebpackPlugin = require(`pnp-webpack-plugin`);\n\nmodule.exports = { \n    module: { \n        rules: [{ \n            test: /\\.ts$/, \n            loader: require.resolve('ts-loader'), \n            options: PnpWebpackPlugin.tsLoaderOptions(), \n        }], \n    },\n    resolve: { \n        plugins: [ PnpWebpackPlugin, ], \n    },\n    resolveLoader: { \n        plugins: [ PnpWebpackPlugin.moduleLoader(module), ],\n    },\n};\n")),Object(r.b)("p",null,"If you have any options you want to pass to ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader"),", just pass them as parameter of ",Object(r.b)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"tsLoaderOptions")," function and it will take care of forwarding them properly. Behind the scenes the ",Object(r.b)("inlineCode",{parentName:"p"},"tsLoaderOptions")," function is providing ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," with the options necessary to switch into Yarn PnP mode."),Object(r.b)("p",null,"Congratulations; you now have ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," functioning with Yarn PnP support!"),Object(r.b)("h2",{id:"fork-ts-checker-webpack-plugin-with-ts-loader"},Object(r.b)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")," with ",Object(r.b)("inlineCode",{parentName:"h2"},"ts-loader")),Object(r.b)("p",null,"You may well be using ",Object(r.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," to handle type checking whilst ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," gets on with the transpilation. This workflow is also supported using ",Object(r.b)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),". You'll have needed to follow the same steps as the ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," setup. It's just the ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js")," tweaks that will be different."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"const PnpWebpackPlugin = require(`pnp-webpack-plugin`);\n\nmodule.exports = { \n    plugins: {\n        new ForkTsCheckerWebpackPlugin(PnpWebpackPlugin.forkTsCheckerOptions({\n            useTypescriptIncrementalApi: false, // not possible to use this until: https://github.com/microsoft/TypeScript/issues/31056\n        })),\n    }\n    module: { \n        rules: [{ \n            test: /\\.ts$/, \n            loader: require.resolve('ts-loader'), \n            options: PnpWebpackPlugin.tsLoaderOptions({ transpileOnly: true }), \n        }], \n    },\n    resolve: { \n        plugins: [ PnpWebpackPlugin, ], \n    },\n    resolveLoader: { \n        plugins: [ PnpWebpackPlugin.moduleLoader(module), ],\n    },\n};\n")),Object(r.b)("p",null,"Again if you have any options you want to pass to ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader"),", just pass them as parameter of ",Object(r.b)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"tsLoaderOptions")," function. As we're using ",Object(r.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," we're going to want to stop ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," doing type checking with the ",Object(r.b)("inlineCode",{parentName:"p"},"transpileOnly: true")," option."),Object(r.b)("p",null,"We're now initialising ",Object(r.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," with ",Object(r.b)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"forkTsCheckerOptions")," function. Behind the scenes the ",Object(r.b)("inlineCode",{parentName:"p"},"forkTsCheckerOptions")," function is providing the ",Object(r.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," with the options necessary to switch into Yarn PnP mode."),Object(r.b)("p",null,"And that's it! You now have ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," and ",Object(r.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," functioning with Yarn PnP support!"),Object(r.b)("h2",{id:"living-on-the-bleeding-edge"},"Living on the Bleeding Edge"),Object(r.b)("p",null,"Whilst you can happily develop and build using Yarn PnP, it's worth bearing in mind that this is a new approach. As such, there's some rough edges right now."),Object(r.b)("p",null,"If you're interested in Yarn PnP, it's worth taking the v2 of Yarn (Berry) for a spin. You can find it here: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry"},"https://github.com/yarnpkg/berry"),". It's where most of the Yarn PnP work happens, and it includes zip loading - two birds, one stone!"),Object(r.b)("p",null,"Because there isn't first class support for Yarn PnP in TypeScript itself yet, you cannot make use of the Watch API through ",Object(r.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),". (You can read about that issue ",Object(r.b)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/31056"},"here"),")"),Object(r.b)("p",null,"As you've likely noticed, the webpack configuration required makes for a noisy ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js"),". Further to that, VS Code (which is powered by TypeScript remember) has no support for Yarn PnP yet and so will present resolution errors to you. If you can ignore the sea of red squigglies all over your source files in the editor and just look at your webpack build you'll be fine."),Object(r.b)("p",null,"There is a tool called ",Object(r.b)("inlineCode",{parentName:"p"},"PnPify")," that adds support for PnP to TypeScript (in particular tsc). You can find more information here: ",Object(r.b)("a",{parentName:"p",href:"https://yarnpkg.github.io/berry/advanced/pnpify"},"https://yarnpkg.github.io/berry/advanced/pnpify"),". For tsc it would be:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$> yarn pnpify tsc [...]\n")),Object(r.b)("p",null,"The gist is that it simulates the existence of ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," by leveraging the data from the PnP file. As such it's not a perfect fix (",Object(r.b)("inlineCode",{parentName:"p"},"pnp-webpack-plugin")," is a better integration), but it's a very useful tool to have to unblock yourself when using a project that doesn't support it."),Object(r.b)("p",null,"PnPify actually allows us to use TypeScript in VSCode with PnP! Its documentation is here: ",Object(r.b)("a",{parentName:"p",href:"https://yarnpkg.github.io/berry/advanced/pnpify#vscode-support"},"https://yarnpkg.github.io/berry/advanced/pnpify#vscode-support")),Object(r.b)("p",null,"All of these hindrances should hopefully be resolved in future. Ideally, one day a good developer experience can be the default experience. In the meantime, you can still dev - just be prepared for the rough edges. Here's some useful resources to track the future of support:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can follow more on built in webpack support here: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/webpack/enhanced-resolve/issues/162"},"https://github.com/webpack/enhanced-resolve/issues/162")),Object(r.b)("li",{parentName:"ul"},"And on built in TypeScript support here: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/issues/18896"},"https://github.com/Microsoft/TypeScript/issues/18896")),Object(r.b)("li",{parentName:"ul"},"Finally, there it's worth watching the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/nodejs/modules"},"nodejs/module")," repository, which debates amongst other things how to properly integrate loaders with Node.")),Object(r.b)("p",null,"This last one would be nice because:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We'd stop having to patch require"),Object(r.b)("li",{parentName:"ul"},"We probably wouldn't have to use yarn node if Node itself was able to find the loader somehow (such as if it was listed in the package.json metadata)")),Object(r.b)("p",null,"Thanks to Ma\xebl for his tireless work on Yarn. To my mind Ma\xebl is certainly a candidate for the hardest worker in open source. I've been shamelessly borrowing his excellent docs for this post - thanks for writing so excellently Ma\xebl!"))}c.isMDXComponent=!0}}]);
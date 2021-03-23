(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{1186:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),h=r,m=b["".concat(l,".").concat(h)]||b[h]||u[h]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},776:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(4),o=n(10),a=(n(0),n(1186)),l={title:"fork-ts-checker-webpack-plugin code clickability",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["VS Code","console","fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},c={permalink:"/2017/09/12/fork-ts-checker-webpack-plugin-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-09-12-fork-ts-checker-webpack-plugin-code.md",source:"@site/blog/2017-09-12-fork-ts-checker-webpack-plugin-code.md",description:"My name is John Reilly and I'm a VS Code addict. There I said it. I'm also a big fan of TypeScript and webpack. I've recently switched to using the awesome fork-ts-checker-webpack-plugin to speed up my builds.",date:"2017-09-12T00:00:00.000Z",formattedDate:"September 12, 2017",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"console",permalink:"/tags/console"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],title:"fork-ts-checker-webpack-plugin code clickability",readingTime:2.085,truncated:!1,prevItem:{title:"Working with Extrahop on webpack and ts-loader",permalink:"/2017/10/19/working-with-extrahop-on-webpack-and-ts"},nextItem:{title:"TypeScript + Webpack: Super Pursuit Mode",permalink:"/2017/09/07/typescript-webpack-super-pursuit-mode"}},i=[],s={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"My name is John Reilly and I'm a VS Code addict. There I said it. I'm also a big fan of TypeScript and webpack. I've recently switched to using the awesome ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/fork-ts-checker-webpack-plugin"},Object(a.b)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," to speed up my builds."),Object(a.b)("p",null," One thing I love is using VS Code both as my editor and my terminal. Using the fork-ts-checker-webpack-plugin I noticed a problem when TypeScript errors showed up in the terminal:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-XRG_JvUHkTQ/Wbds0uKYYzI/AAAAAAAAGes/ol8enPs6lLwRTdv8Uhml3cQdfJPji6nvACLcBGAs/s640/Screenshot%2B2017-09-12%2B06.12.25.png",alt:null})),Object(a.b)("p",null,"Take a look at the red file location in the console above. What's probably not obvious from the above screenshot is that it is ",Object(a.b)("strong",{parentName:"p"},"not clickable"),". I'm used to being able to click on link in the console and bounce straight to the error location. It's a really productive workflow; see a problem, click on it, be taken to the cause, fix it."),Object(a.b)("p",null,'I want to click on "',Object(a.b)("inlineCode",{parentName:"p"},"C:/source/ts-loader/examples/fork-ts-checker/src/fileWithError.ts(2,7)"),'" and have VS Code open up ',Object(a.b)("inlineCode",{parentName:"p"},"fileWithError.ts"),", ideally at line 2 and column 7. But here it's not working. Why?"),Object(a.b)("p",null,"Well, I initially got this slightly wrong; I thought it was about the formatting of the file path. It is. I thought that having the line number and column number in parentheses after the path (eg ",Object(a.b)("inlineCode",{parentName:"p"},'"(2,7)"'),") was screwing over VS Code. It isn't. Something else is. Look closely at the screenshot; what do you see? Do you notice how the colour of the line number / column number is different to the path? In the words of ",Object(a.b)("a",{parentName:"p",href:"https://youtu.be/281jMxOvP5k"},"Delbert Wilkins"),": that's crucial."),Object(a.b)("p",null,"Yup, the colour change between the path and the line number / column number is the problem. I've submitted a ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/48"},"PR to fix this")," that I hope will get merged. In the meantime you can avoid this issue by dropping this code into your ",Object(a.b)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"var chalk = require(\"chalk\");\nvar os = require(\"os\");\n\nfunction clickableFormatter(message, useColors) {\n    var colors = new chalk.constructor({ enabled: useColors });\n    var messageColor = message.isWarningSeverity() ? colors.bold.yellow : colors.bold.red;\n    var fileAndNumberColor = colors.bold.cyan;\n    var codeColor = colors.grey;\n    return [\n        messageColor(message.getSeverity().toUpperCase() + \" in \") +\n        fileAndNumberColor(message.getFile() + \"(\" + message.getLine() + \",\" + message.getCharacter() + \")\") +\n        messageColor(':'),\n\n        codeColor(message.getFormattedCode() + ': ') + message.getContent()\n    ].join(os.EOL);\n};\n\nmodule.exports = {\n    // Other config...\n    module: {\n        rules: [\n            {\n                test: /\\.tsx?$/,\n                loader: 'ts-loader',\n                options: { transpileOnly: true }\n            }\n        ]\n    },\n    resolve: {\n        extensions: [ '.ts', '.tsx', 'js' ]\n    },\n    plugins: [\n        new ForkTsCheckerWebpackPlugin({ formatter: clickableFormatter }) // Here we get our clickability back\n    ]\n};\n")),Object(a.b)("p",null,"With that in place, what do you we have? This:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-nCA_UAzk7jQ/WbdyV9bxZ1I/AAAAAAAAGe8/9d5RJ6DsF3opycHZcPDNYYMScezFGRXCQCLcBGAs/s640/Screenshot%2B2017-09-12%2B06.35.48.png",alt:null})),Object(a.b)("p",null,"VS Code clickability; it's a beautiful thing."))}p.isMDXComponent=!0}}]);
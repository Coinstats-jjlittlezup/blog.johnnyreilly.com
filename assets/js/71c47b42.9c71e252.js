(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{1183:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=o,m=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(4),a=n(10),i=(n(0),n(1183)),r={title:"It's Not Dead: webpack and dead code elimination limitations",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["webpack; dead code elimination; process.env.NODE_ENV; DefinePlugin"],hide_table_of_contents:!1},c={permalink:"/2018/03/07/its-not-dead-webpack-and-dead-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-03-07-its-not-dead-webpack-and-dead-code.md",source:"@site/blog/2018-03-07-its-not-dead-webpack-and-dead-code.md",description:"Every now and then you can be surprised. Your assumptions turn out to be wrong.",date:"2018-03-07T00:00:00.000Z",formattedDate:"March 7, 2018",tags:[{label:"webpack; dead code elimination; process.env.NODE_ENV; DefinePlugin",permalink:"/tags/webpack-dead-code-elimination-process-env-node-env-define-plugin"}],title:"It's Not Dead: webpack and dead code elimination limitations",readingTime:2.12,truncated:!1,prevItem:{title:"Uploading Images to Cloudinary with the Fetch API",permalink:"/2018/03/25/uploading-images-to-cloudinary-with-fetch"},nextItem:{title:"ts-loader 4 / fork-ts-checker-webpack-plugin 0.4",permalink:"/2018/02/25/ts-loader-400-fork-ts-checker-webpack"}},l=[{value:"Limitations",id:"limitations",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Every now and then you can be surprised. Your assumptions turn out to be wrong."),Object(i.b)("p",null," Webpack has long supported the notion of dead code elimination. webpack facilitates this through use of the ",Object(i.b)("inlineCode",{parentName:"p"},"DefinePlugin"),". The compile time value of ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," is set either to ",Object(i.b)("inlineCode",{parentName:"p"},"'production'")," or something else. If it's set to ",Object(i.b)("inlineCode",{parentName:"p"},"'production'")," then some dead code hackery can happen. ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/optimizing-performance.html#webpack"},"Libraries like React make use of this to serve up different, and crucially smaller, production builds.")),Object(i.b)("p",null,"A (pre-webpack 4) production config file will typically contain this code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"new webpack.DefinePlugin({\n    'process.env.NODE_ENV': JSON.stringify('production')\n}),\nnew UglifyJSPlugin(),\n")),Object(i.b)("p",null,"The result of the above config is that webpack will inject the value 'production' everywhere in the codebase where a ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," can be found. (In fact, as of webpack 4 setting this magic value is out-of-the-box behaviour for Production mode; yay the #0CJS!)"),Object(i.b)("p",null,"What this means is, if you've written:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"if (process.env.NODE_ENV !== 'production') {\n  // Do a development mode only thing\n}\n")),Object(i.b)("p",null,"webpack can and will turn this into"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"if ('production' !== 'production') {\n  // Do a development mode only thing\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://github.com/webpack-contrib/uglifyjs-webpack-plugin"},"UglifyJSPlugin")," is there to minify the JavaScript in your bundles. As an added benefit, this plugin is smart enough to know that ",Object(i.b)("inlineCode",{parentName:"p"},"'production' !== 'production'")," is always ",Object(i.b)("inlineCode",{parentName:"p"},"false"),". And because it's smart, it chops the code. Dead code elimated."),Object(i.b)("p",null,"You can read more about this ",Object(i.b)("a",{parentName:"p",href:"https://webpack.js.org/guides/production/#specify-the-environment"},"in the webpack docs"),"."),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("p",null,"Given what I've said, consider the following code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"export class Config {\n    // Other properties\n\n    get isDevelopment() {\n        return process.env.NODE_ENV !== 'production';\n    }\n}\n")),Object(i.b)("p",null,"This is a config class that exposes the expression ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," with the friendly name ",Object(i.b)("inlineCode",{parentName:"p"},"isDevelopment"),". You'd think that dead code elimination would be your friend here. It's not."),Object(i.b)("p",null,"My personal expection was that dead code elimination would treat ",Object(i.b)("inlineCode",{parentName:"p"},"Config.isDevelopment")," and the expression ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," identically. Because they're identical."),Object(i.b)("p",null,"However, this turns out not to be the case. Dead code elimination works just as you would hope when using the expression ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," directly in code. However webpack ",Object(i.b)("strong",{parentName:"p"},"only")," performs dead code elimination for the ",Object(i.b)("strong",{parentName:"p"},"direct")," usage of the ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," expression. I'll say that again: if you want dead code elimination then use the injected values; not an encapsulated version of them. It turns out you cannot rely on webpack flowing values through and performing dead code elimination on that basis."),Object(i.b)("p",null,"The TL;DR: if you want to elimate dead code then ","*","always","*"," use ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'"),"; don't abstract it. It doesn't work."),Object(i.b)("p",null,"UglifyJS is smart. But not that smart."))}s.isMDXComponent=!0}}]);
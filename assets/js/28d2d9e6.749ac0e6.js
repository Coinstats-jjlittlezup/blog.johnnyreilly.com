"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[90242],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90689:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],l={title:"It's Not Dead: webpack and dead code elimination limitations",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["webpack; dead code elimination; process.env.NODE_ENV; DefinePlugin"],hide_table_of_contents:!1},p=void 0,c={permalink:"/2018/03/07/its-not-dead-webpack-and-dead-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-03-07-its-not-dead-webpack-and-dead-code.md",source:"@site/blog/2018-03-07-its-not-dead-webpack-and-dead-code.md",title:"It's Not Dead: webpack and dead code elimination limitations",description:"Every now and then you can be surprised. Your assumptions turn out to be wrong.",date:"2018-03-07T00:00:00.000Z",formattedDate:"March 7, 2018",tags:[{label:"webpack; dead code elimination; process.env.NODE_ENV; DefinePlugin",permalink:"/tags/webpack-dead-code-elimination-process-env-node-env-define-plugin"}],readingTime:2.12,truncated:!1,prevItem:{title:"Uploading Images to Cloudinary with the Fetch API",permalink:"/2018/03/25/uploading-images-to-cloudinary-with-fetch"},nextItem:{title:"ts-loader 4 / fork-ts-checker-webpack-plugin 0.4",permalink:"/2018/02/25/ts-loader-400-fork-ts-checker-webpack"}},s=[{value:"Limitations",id:"limitations",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every now and then you can be surprised. Your assumptions turn out to be wrong."),(0,a.kt)("p",null," Webpack has long supported the notion of dead code elimination. webpack facilitates this through use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"DefinePlugin"),". The compile time value of ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," is set either to ",(0,a.kt)("inlineCode",{parentName:"p"},"'production'")," or something else. If it's set to ",(0,a.kt)("inlineCode",{parentName:"p"},"'production'")," then some dead code hackery can happen. ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/optimizing-performance.html#webpack"},"Libraries like React make use of this to serve up different, and crucially smaller, production builds.")),(0,a.kt)("p",null,"A (pre-webpack 4) production config file will typically contain this code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new webpack.DefinePlugin({\n    'process.env.NODE_ENV': JSON.stringify('production')\n}),\nnew UglifyJSPlugin(),\n")),(0,a.kt)("p",null,"The result of the above config is that webpack will inject the value 'production' everywhere in the codebase where a ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," can be found. (In fact, as of webpack 4 setting this magic value is out-of-the-box behaviour for Production mode; yay the #0CJS!)"),(0,a.kt)("p",null,"What this means is, if you've written:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (process.env.NODE_ENV !== 'production') {\n  // Do a development mode only thing\n}\n")),(0,a.kt)("p",null,"webpack can and will turn this into"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if ('production' !== 'production') {\n  // Do a development mode only thing\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/uglifyjs-webpack-plugin"},"UglifyJSPlugin")," is there to minify the JavaScript in your bundles. As an added benefit, this plugin is smart enough to know that ",(0,a.kt)("inlineCode",{parentName:"p"},"'production' !== 'production'")," is always ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". And because it's smart, it chops the code. Dead code elimated."),(0,a.kt)("p",null,"You can read more about this ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/production/#specify-the-environment"},"in the webpack docs"),"."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Given what I've said, consider the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export class Config {\n    // Other properties\n\n    get isDevelopment() {\n        return process.env.NODE_ENV !== 'production';\n    }\n}\n")),(0,a.kt)("p",null,"This is a config class that exposes the expression ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," with the friendly name ",(0,a.kt)("inlineCode",{parentName:"p"},"isDevelopment"),". You'd think that dead code elimination would be your friend here. It's not."),(0,a.kt)("p",null,"My personal expection was that dead code elimination would treat ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.isDevelopment")," and the expression ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," identically. Because they're identical."),(0,a.kt)("p",null,"However, this turns out not to be the case. Dead code elimination works just as you would hope when using the expression ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," directly in code. However webpack ",(0,a.kt)("strong",{parentName:"p"},"only")," performs dead code elimination for the ",(0,a.kt)("strong",{parentName:"p"},"direct")," usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," expression. I'll say that again: if you want dead code elimination then use the injected values; not an encapsulated version of them. It turns out you cannot rely on webpack flowing values through and performing dead code elimination on that basis."),(0,a.kt)("p",null,"The TL;DR: if you want to elimate dead code then ","*","always","*"," use ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'"),"; don't abstract it. It doesn't work."),(0,a.kt)("p",null,"UglifyJS is smart. But not that smart."))}u.isMDXComponent=!0}}]);
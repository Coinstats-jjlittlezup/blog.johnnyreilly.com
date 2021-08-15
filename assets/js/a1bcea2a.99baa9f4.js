"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[59981],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,y=m["".concat(s,".").concat(h)]||m[h]||p[h]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"React Component Curry",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["currying","jsx","React","stateless functional components"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2016/10/05/react-component-curry",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-10-05-react-component-curry.md",source:"@site/blog/2016-10-05-react-component-curry.md",title:"React Component Curry",description:"Everyone loves curry don't they? I don't know about you but I'm going for one on Friday.",date:"2016-10-05T00:00:00.000Z",formattedDate:"October 5, 2016",tags:[{label:"currying",permalink:"/tags/currying"},{label:"jsx",permalink:"/tags/jsx"},{label:"React",permalink:"/tags/react"},{label:"stateless functional components",permalink:"/tags/stateless-functional-components"}],readingTime:1.39,truncated:!1,prevItem:{title:"But you can't die... I love you!",permalink:"/2016/11/01/but-you-cant-die-i-love-you-ts-loader"},nextItem:{title:"TypeScript 2.0, ES2016 and Babel",permalink:"/2016/09/22/typescript-20-es2016-and-babel"}},u=[{value:"Mine&#39;s a Balti",id:"mines-a-balti",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Everyone loves curry don't they? I don't know about you but I'm going for one on Friday."),(0,a.kt)("p",null," When React 0.14 shipped, it came with a new way to write React components. Rather than as an ES2015 class or using ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createClass")," there was now another way: stateless functional components."),(0,a.kt)("p",null,"These are components which have no state (the name gives it away) and a simple syntax; they are a function which takes your component props as a single parameter and they return JSX. Think of them as the render method of a standard component just with props as a parameter."),(0,a.kt)("p",null,"The advantage of these components is that they can reduce the amount of code you have to write for a component which requires no state. This is even more true if you're using ES2015 syntax as you have arrow functions and destructuring to help.Embrace the terseness!"),(0,a.kt)("h2",{id:"mines-a-balti"},"Mine's a Balti"),(0,a.kt)("p",null,"There is another advantage of this syntax. If you have a number of components which share similar implementation you can easily make component factories by currying:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function iconMaker(fontAwesomeClassName: string) {\n   return props => <i className={ `fa ${ fontAwesomeClassName }` }/>;\n}\n\nconst ThumbsUpIcon = iconMaker("fa-thumbs-up");\nconst TrophyIcon = iconMaker("fa-trophy");\n\n// Somewhere in else inside a render function:\n\n<p>This is totally <ThumbsUpIcon />.... You should win a <TrophyIcon /></p>\n')),(0,a.kt)("p",null,"So our ",(0,a.kt)("inlineCode",{parentName:"p"},"iconMaker")," is a function which, when called with a ",(0,a.kt)("a",{parentName:"p",href:"http://fontawesome.io/"},"Font Awesome")," class name produces a function which, when invoked, will return a the HTML required to render that icon. This is a super simple example, a bhaji if you will, but you can imagine how useful this technique can be when you've more of a banquet in mind."))}m.isMDXComponent=!0}}]);
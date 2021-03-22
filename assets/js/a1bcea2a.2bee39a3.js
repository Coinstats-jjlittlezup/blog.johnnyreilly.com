(window.webpackJsonp=window.webpackJsonp||[]).push([[713],{1183:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,y=p["".concat(i,".").concat(h)]||p[h]||m[h]||a;return n?o.a.createElement(y,c(c({ref:t},l),{},{components:n})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(4),o=n(10),a=(n(0),n(1183)),i={title:"React Component Curry",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["currying","jsx","React","stateless functional components"],hide_table_of_contents:!1},c={permalink:"/2016/10/05/react-component-curry",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-10-05-react-component-curry.md",source:"@site/blog/2016-10-05-react-component-curry.md",description:"Everyone loves curry don't they? I don't know about you but I'm going for one on Friday.",date:"2016-10-05T00:00:00.000Z",formattedDate:"October 5, 2016",tags:[{label:"currying",permalink:"/tags/currying"},{label:"jsx",permalink:"/tags/jsx"},{label:"React",permalink:"/tags/react"},{label:"stateless functional components",permalink:"/tags/stateless-functional-components"}],title:"React Component Curry",readingTime:1.39,truncated:!1,prevItem:{title:"But you can't die... I love you!",permalink:"/2016/11/01/but-you-cant-die-i-love-you-ts-loader"},nextItem:{title:"TypeScript 2.0, ES2016 and Babel",permalink:"/2016/09/22/typescript-20-es2016-and-babel"}},s=[{value:"Mine&#39;s a Balti",id:"mines-a-balti",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Everyone loves curry don't they? I don't know about you but I'm going for one on Friday."),Object(a.b)("p",null," When React 0.14 shipped, it came with a new way to write React components. Rather than as an ES2015 class or using ",Object(a.b)("inlineCode",{parentName:"p"},"React.createClass")," there was now another way: stateless functional components."),Object(a.b)("p",null,"These are components which have no state (the name gives it away) and a simple syntax; they are a function which takes your component props as a single parameter and they return JSX. Think of them as the render method of a standard component just with props as a parameter."),Object(a.b)("p",null,"The advantage of these components is that they can reduce the amount of code you have to write for a component which requires no state. This is even more true if you're using ES2015 syntax as you have arrow functions and destructuring to help.Embrace the terseness!"),Object(a.b)("h2",{id:"mines-a-balti"},"Mine's a Balti"),Object(a.b)("p",null,"There is another advantage of this syntax. If you have a number of components which share similar implementation you can easily make component factories by currying:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'function iconMaker(fontAwesomeClassName: string) {\n   return props => <i className={ `fa ${ fontAwesomeClassName }` }/>;\n}\n\nconst ThumbsUpIcon = iconMaker("fa-thumbs-up");\nconst TrophyIcon = iconMaker("fa-trophy");\n\n// Somewhere in else inside a render function:\n\n<p>This is totally <ThumbsUpIcon />.... You should win a <TrophyIcon /></p>\n')),Object(a.b)("p",null,"So our ",Object(a.b)("inlineCode",{parentName:"p"},"iconMaker")," is a function which, when called with a ",Object(a.b)("a",{parentName:"p",href:"http://fontawesome.io/"},"Font Awesome")," class name produces a function which, when invoked, will return a the HTML required to render that icon. This is a super simple example, a bhaji if you will, but you can imagine how useful this technique can be when you've more of a banquet in mind."))}u.isMDXComponent=!0}}]);
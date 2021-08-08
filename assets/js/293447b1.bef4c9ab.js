"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[9318],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,g=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},20951:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"The Ternary Operator <3 Destructuring",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Destructuring","Ternary Operator","TypeScript","ES2015"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2016/08/19/the-ternary-operator-meets-destructuring",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-08-19-the-ternary-operator-meets-destructuring.md",source:"@site/blog/2016-08-19-the-ternary-operator-meets-destructuring.md",title:"The Ternary Operator <3 Destructuring",description:"I'm addicted to the ternary operator. For reasons I can't explain, I cannot get enough of:",date:"2016-08-19T00:00:00.000Z",formattedDate:"August 19, 2016",tags:[{label:"Destructuring",permalink:"/tags/destructuring"},{label:"Ternary Operator",permalink:"/tags/ternary-operator"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"ES2015",permalink:"/tags/es-2015"}],readingTime:2.235,truncated:!1,prevItem:{title:"Integration Tests with SQL Server Database Snapshots",permalink:"/2016/09/12/integration-tests-with-sql-server"},nextItem:{title:"Understanding Webpack's DefinePlugin (and using with TypeScript)",permalink:"/2016/07/23/using-webpacks-defineplugin-with-typescript"}},c=[{value:"Crowdfund You A Tuple",id:"crowdfund-you-a-tuple",children:[]}],u={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I'm addicted to the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"},"ternary operator"),". For reasons I can't explain, I cannot get enough of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const thisOrThat = (someCondition) ? "this" : "or that"\n')),(0,o.kt)("p",null,"The occasion regularly arises where I need to turn my lovely terse code into an if statement in order to set 2 variables instead of 1. I've been heartbroken; I hate doing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'let legWear: string, coat: boolean;\nif (weather === "good") {\n  legWear = "shorts";\n  coat = false;\n}\nelse {\n  legWear = "jeans";\n  coat = true;\n}\n')),(0,o.kt)("p",null,"Just going from setting one variable to setting two has been really traumatic:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"I've had do stop using ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," and moved to ",(0,o.kt)("inlineCode",{parentName:"li"},"let"),'. This has made my code less "truthful" in the sense that I never intend to reassign these variables again; they are intended to be immutable.'),(0,o.kt)("li",{parentName:"ul"},"I've gone from 1 line of code to ",(0,o.kt)("em",{parentName:"li"},"9 lines of code"),". That's 9x the code for increasing the number of variables in play by 1. That's... heavy."),(0,o.kt)("li",{parentName:"ul"},"This third point only applies if you're using TypeScript (and I am): I have to specify the types of my variables up front if I want type safety.")),(0,o.kt)("p",null,"ES2015 gives us another option. We can move back to the ternary operator if we change the return type of each branch to be an object sharing the same signature. Then, using destructuring, we can pull out those object properties into ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),"s:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { legWear, coat } = (weather === "good") \n  ? { legWear: "shorts", coat: false }\n  : { legWear: "jeans", coat: true }\n')),(0,o.kt)("p",null,"With this approach we're keeping usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," and we're only marginally increasing the amount of code we're writing. If you're using TypeScript you're back to being able to rely on the compiler correctly inferring your types; you don't need to specify. Awesome."),(0,o.kt)("h2",{id:"crowdfund-you-a-tuple"},"Crowdfund You A Tuple"),(0,o.kt)("p",null,"I thought I was done and then I saw this:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly"},"@johnny","_","reilly")," even neater with tuples: const ","[str, num]"," = test ? ",'["yes", 100]'," : ",'["no", 50]',";"),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Illustrated Pamphlet (@Rickenhacker) ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/Rickenhacker/status/766913766323781632"},"August 20, 2016"))),(0,o.kt)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/Rickenhacker"},"Daniel")," helpfully points out that there's an even terser syntax available to us:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const [ legWear, coat ] = (weather === "good") \n  ? [ "shorts", false ]\n  : [ "jeans",  true  ]\n')),(0,o.kt)("p",null,"The above is ES2015 array destructuring. We get exactly the same effect but it's a little terser as we don't have to repeat the prop names as we do when using object destructuring. From a TypeScript perspective the assignment side of the above is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/pull/428"},"Tuple")," which allows our type inference to flow through in the manner we'd hope."),(0,o.kt)("p",null,"Lovely. Thanks!"))}h.isMDXComponent=!0}}]);
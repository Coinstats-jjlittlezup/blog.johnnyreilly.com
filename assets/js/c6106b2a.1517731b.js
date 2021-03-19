(window.webpackJsonp=window.webpackJsonp||[]).push([[834],{1170:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},232:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(1170)),i={title:"The Ternary Operator <3 Destructuring",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Destructuring","Ternary Operator","TypeScript","ES2015"],hide_table_of_contents:!1},c={permalink:"/2016/08/19/the-ternary-operator-meets-destructuring",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-08-19-the-ternary-operator-meets-destructuring.md",source:"@site/blog/2016-08-19-the-ternary-operator-meets-destructuring.md",description:"I'm addicted to the ternary operator. For reasons I can't explain, I cannot get enough of:",date:"2016-08-19T00:00:00.000Z",formattedDate:"August 19, 2016",tags:[{label:"Destructuring",permalink:"/tags/destructuring"},{label:"Ternary Operator",permalink:"/tags/ternary-operator"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"ES2015",permalink:"/tags/es-2015"}],title:"The Ternary Operator <3 Destructuring",readingTime:2.245,truncated:!1,prevItem:{title:"Integration Tests with SQL Server Database Snapshots",permalink:"/2016/09/12/integration-tests-with-sql-server"},nextItem:{title:"Understanding Webpack's DefinePlugin (and using with TypeScript)",permalink:"/2016/07/23/using-webpacks-defineplugin-with-typescript"}},l=[{value:"Crowdfund You A Tuple",id:"crowdfund-you-a-tuple",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I'm addicted to the ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"},"ternary operator"),". For reasons I can't explain, I cannot get enough of:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const thisOrThat = (someCondition) ? "this" : "or that"\n')),Object(o.b)("p",null,"The occasion regularly arises where I need to turn my lovely terse code into an if statement in order to set 2 variables instead of 1. I've been heartbroken; I hate doing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'let legWear: string, coat: boolean;\nif (weather === "good") {\n  legWear = "shorts";\n  coat = false;\n}\nelse {\n  legWear = "jeans";\n  coat = true;\n}\n')),Object(o.b)("p",null,"Just going from setting one variable to setting two has been really traumatic:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"I've had do stop using ",Object(o.b)("inlineCode",{parentName:"li"},"const")," and moved to ",Object(o.b)("inlineCode",{parentName:"li"},"let"),'. This has made my code less "truthful" in the sense that I never intend to reassign these variables again; they are intended to be immutable.'),Object(o.b)("li",{parentName:"ul"},"I've gone from 1 line of code to ",Object(o.b)("em",{parentName:"li"},"9 lines of code"),". That's 9x the code for increasing the number of variables in play by 1. That's... heavy."),Object(o.b)("li",{parentName:"ul"},"This third point only applies if you're using TypeScript (and I am): I have to specify the types of my variables up front if I want type safety.")),Object(o.b)("p",null,"ES2015 gives us another option. We can move back to the ternary operator if we change the return type of each branch to be an object sharing the same signature. Then, using destructuring, we can pull out those object properties into ",Object(o.b)("inlineCode",{parentName:"p"},"const"),"s:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'const { legWear, coat } = (weather === "good") \n  ? { legWear: "shorts", coat: false }\n  : { legWear: "jeans", coat: true }\n')),Object(o.b)("p",null,"With this approach we're keeping usage of ",Object(o.b)("inlineCode",{parentName:"p"},"const")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"let")," and we're only marginally increasing the amount of code we're writing. If you're using TypeScript you're back to being able to rely on the compiler correctly inferring your types; you don't need to specify. Awesome."),Object(o.b)("h2",{id:"crowdfund-you-a-tuple"},"Crowdfund You A Tuple"),Object(o.b)("p",null,"I thought I was done and then I saw this:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly"},"@johnny","_","reilly")," even neater with tuples: const ","[str, num]"," = test ? ",'["yes", 100]'," : ",'["no", 50]',";"),Object(o.b)("p",{parentName:"blockquote"},"\u2014 Illustrated Pamphlet (@Rickenhacker) ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/Rickenhacker/status/766913766323781632"},"August 20, 2016"))),Object(o.b)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://twitter.com/Rickenhacker"},"Daniel")," helpfully points out that there's an even terser syntax available to us:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'const [ legWear, coat ] = (weather === "good") \n  ? [ "shorts", false ]\n  : [ "jeans",  true  ]\n')),Object(o.b)("p",null,"The above is ES2015 array destructuring. We get exactly the same effect but it's a little terser as we don't have to repeat the prop names as we do when using object destructuring. From a TypeScript perspective the assignment side of the above is a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/pull/428"},"Tuple")," which allows our type inference to flow through in the manner we'd hope."),Object(o.b)("p",null,"Lovely. Thanks!"))}p.isMDXComponent=!0}}]);
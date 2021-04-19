(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(h,l(l({ref:t},p),{},{components:n})):r.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(4),r=n(10),o=(n(0),n(1211)),i={title:"TypeScript: In Praise of Union Types",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["TypeScript","Option bags","Union Types","Function syntax"],hide_table_of_contents:!1},l={permalink:"/2015/01/20/typescript-using-functions-with-union-types",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-01-20-typescript-using-functions-with-union-types.md",source:"@site/blog/2015-01-20-typescript-using-functions-with-union-types.md",title:"TypeScript: In Praise of Union Types",description:"(& How to Express Functions in UTs)",date:"2015-01-20T00:00:00.000Z",formattedDate:"January 20, 2015",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"Option bags",permalink:"/tags/option-bags"},{label:"Union Types",permalink:"/tags/union-types"},{label:"Function syntax",permalink:"/tags/function-syntax"}],readingTime:6.34,truncated:!1,prevItem:{title:"The Convent with Continuous Delivery",permalink:"/2015/02/11/the-convent-with-continuous-delivery"},nextItem:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",permalink:"/2015/01/07/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2"}},s=[{value:"(&amp; How to Express Functions in UTs)",id:"-how-to-express-functions-in-uts",children:[]},{value:"A little history",id:"a-little-history",children:[{value:"That&#39;s right - the days before Union Types are now &quot;history&quot; :-)",id:"thats-right---the-days-before-union-types-are-now-history--",children:[]}]},{value:"A new dawn",id:"a-new-dawn",children:[]},{value:"State of the Union",id:"state-of-the-union",children:[]},{value:"Bonfire of the Overloads",id:"bonfire-of-the-overloads",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"-how-to-express-functions-in-uts"},"(& How to Express Functions in UTs)"),Object(o.b)("p",null," Have you heard the good news my friend? I refer, of course, to the shipping of TypeScript 1.4 and my ",Object(o.b)("em",{parentName:"p"},"favourite")," language feature since generics.... Union Types."),Object(o.b)("p",null,"In the ",Object(o.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/typescript/archive/2015/01/16/announcing-typescript-1-4.aspx"},"1",".","4 announcement")," Jonathan Turner described Union Types thusly:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"JavaScript functions may take a number of possible argument types. Up to now, we\u2019ve supported this using function overloads. Starting with TypeScript 1.4, we\u2019ve generalized this capability and now allow you to specify that that a value is one of a number of different types using a union type:"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",{parentName:"pre",className:"language-ts"},'function f(x: number | number[]) {\n  if (typeof x === "number") {\n    return x + 10;\n  }\n  else {\n    // return sum of numbers\n  }\n}\n')),Object(o.b)("p",{parentName:"blockquote"},"Once you have a value of a union type, you can use a typeof and instanceof checks to use the value in a type-safe way. You'll notice we use this in the above example and can treat x as a number type inside of the if-block."),Object(o.b)("p",{parentName:"blockquote"},"Union types are a new kind of type and work any place you specify a type.")),Object(o.b)("p",null,"Lovely right? But what's missing? Well, to my mind, the most helpful aspect of Union Types. Definition file creation."),Object(o.b)("h2",{id:"a-little-history"},"A little history"),Object(o.b)("h3",{id:"thats-right---the-days-before-union-types-are-now-history--"},'That\'s right - the days before Union Types are now "history" :-)'),Object(o.b)("p",null,"When creating definition files (",Object(o.b)("inlineCode",{parentName:"p"},"*.d.ts"),') in the past there was a problem with TypeScript. A limitation. JavaScript often relies on "option bags" to pass configuration into a method. An "option bag" is essentially a JavaScript object literal which contains properties which are used to perform configuration. A good example of this is the ',Object(o.b)("inlineCode",{parentName:"p"},"route")," parameter passed into Angular's ngRoute ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when">when</a>')," method."),Object(o.b)("p",null,"I'd like to draw your attention to 2 of the properties that can be passed in (quoted from the documentation):"),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"controller \u2013 ",Object(o.b)("inlineCode",{parentName:"p"},"{(string|function()=}")," \u2013 Controller fn that should be associated with newly created scope or the name of a registered controller if passed as a string.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"template \u2013 ",Object(o.b)("inlineCode",{parentName:"p"},"{string=|function()=}")," \u2013 html template as a string or a function that returns an html template as a string which should be used by ngView or ngInclude directives. This property takes precedence over templateUrl."),Object(o.b)("p",{parentName:"li"},"  If template is a function, it will be called with the following parameters:"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("inlineCode",{parentName:"p"},"{Array.&lt;Object&gt;}")," ","-"," route parameters extracted from the current $location.path() by applying the current route")))),Object(o.b)("p",null,"Both of these properties can be of more than 1 type."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"controller")," can be a ",Object(o.b)("inlineCode",{parentName:"li"},"string"),Object(o.b)("em",{parentName:"li"},"or")," a ",Object(o.b)("inlineCode",{parentName:"li"},"function"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"template")," can be a ",Object(o.b)("inlineCode",{parentName:"li"},"string"),Object(o.b)("em",{parentName:"li"},"or")," a ",Object(o.b)("inlineCode",{parentName:"li"},"function")," that returns a ",Object(o.b)("inlineCode",{parentName:"li"},"string")," and has ",Object(o.b)("inlineCode",{parentName:"li"},"$routeParams")," as a parameter.")),Object(o.b)("p",null,"There's the rub. Whilst it was possible to overload functions in TypeScript pre 1.4, it was ",Object(o.b)("u",null,"not")),Object(o.b)("p",null," possible to overload interface members. This meant the only way to model these sorts of properties was by seeking out a best common type which would fit all scenarios. This invariably meant using the ",Object(o.b)("inlineCode",{parentName:"p"},"any")," type. Whilst that worked it didn't lend any consuming code a great deal of type safety. Let's look at a truncated version of ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/borisyankov/DefinitelyTyped/blob/c71628e0765eb8e240d8eabd2225f64ea2e2fdb8/angularjs/angular-route.d.ts">angular-route.d.ts</a>')," for these properties prior to union types:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"declare module ng.route {\n\n  // ... \n \n  interface IRoute {\n \n    /**\n     * {(string|function()=}\n     * Controller fn that should be associated with newly created scope or \n     * the name of a registered controller if passed as a string.\n     */\n    controller?: any;\n\n    /**\n     * {string=|function()=}\n     * Html template as a string or a function that returns an html template \n     * as a string which should be used by ngView or ngInclude directives. This \n     * property takes precedence over templateUrl.\n     * \n     * If template is a function, it will be called with the following parameters:\n     * \n     * {Array.<Object>} - route parameters extracted from the current \n     * $location.path() by applying the current route\n     */\n    template?: any;\n\n    // ... \n  }\n \n  // ... \n}\n")),Object(o.b)("p",null,"It's ",Object(o.b)("inlineCode",{parentName:"p"},"any")," city... Kind of sticks in the craw doesn't it?"),Object(o.b)("h2",{id:"a-new-dawn"},"A new dawn"),Object(o.b)("p",null,"TypeScript 1.4 has shipped and Union Types are with us. We can do better than ",Object(o.b)("inlineCode",{parentName:"p"},"any"),". So what does ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/borisyankov/DefinitelyTyped/blob/30ce45e0e706322f34608ab6fa5de141bba59c90/angularjs/angular-route.d.ts">angular-route.d.ts</a>')," look like now we have Union Types?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"declare module ng.route {\n\n  // ... \n \n  interface IRoute {\n \n    /**\n     * {(string|function()=}\n     * Controller fn that should be associated with newly created scope or \n     * the name of a registered controller if passed as a string.\n     */\n    controller?: string|Function;\n\n    /**\n     * {string=|function()=}\n     * Html template as a string or a function that returns an html template \n     * as a string which should be used by ngView or ngInclude directives. This \n     * property takes precedence over templateUrl.\n     * \n     * If template is a function, it will be called with the following parameters:\n     * \n     * {Array.<Object>} - route parameters extracted from the current \n     * $location.path() by applying the current route\n     */\n    template?: string | { ($routeParams?: ng.route.IRouteParamsService) : string; }\n\n    // ... \n  }\n \n  // ... \n}\n")),Object(o.b)("p",null,"With these changes in place we are now accurately modelling the ",Object(o.b)("inlineCode",{parentName:"p"},"route")," option bags in TypeScript. Hoorah!!!"),Object(o.b)("p",null,"Let's dig in a little. If you look at the ",Object(o.b)("inlineCode",{parentName:"p"},"controller")," definition it's pretty straightforward. ",Object(o.b)("inlineCode",{parentName:"p"},"string|Function")," ","-"," clearly the ",Object(o.b)("inlineCode",{parentName:"p"},"controller")," can be a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("em",{parentName:"p"},"or")," a ",Object(o.b)("inlineCode",{parentName:"p"},"Function"),". Simple."),Object(o.b)("p",null,"Now let's look at the ",Object(o.b)("inlineCode",{parentName:"p"},"template")," definition by itself:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"template?: string | { ($routeParams?: ng.route.IRouteParamsService) : string; }\n")),Object(o.b)("p",null,"As with the ",Object(o.b)("inlineCode",{parentName:"p"},"controller")," the ",Object(o.b)("inlineCode",{parentName:"p"},"template")," can be a string - that is pretty clear. But what's that hovering on the other side of the \"","|",'"? What could ',Object(o.b)("inlineCode",{parentName:"p"},"{ ($routeParams?: ng.route.IRouteParamsService) : string; }")," be exactly?"),Object(o.b)("p",null,"Well, in a word, it's a ",Object(o.b)("inlineCode",{parentName:"p"},"Function"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"controller")," would allow any kind of function at all. However the ",Object(o.b)("inlineCode",{parentName:"p"},"template")," definition is deliberately more restrictive. This defines a function which must return a ",Object(o.b)("inlineCode",{parentName:"p"},"string")," and which receives an optional parameter of ",Object(o.b)("inlineCode",{parentName:"p"},"$routeParams")," of type ",Object(o.b)("inlineCode",{parentName:"p"},"ng.route.IRouteParamsService"),"."),Object(o.b)("h2",{id:"state-of-the-union"},"State of the Union"),Object(o.b)("p",null,"Hopefully you can now see just how useful Union Types are and how you can express specific sorts of function definitions as part of a Union Type."),Object(o.b)("p",null,"The thing that prompted me first to write this post was seeing that there don't appear to be any examples out there of how to express functions inside Union Types. I only landed on the syntax myself after a little experimentation in Visual Studio after I'd installed TS 1.4. I've started work on bringing Union Types to the typings inside ",Object(o.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped"},"DefinitelyTyped")," and so you'll start to see them appearing more and more. But since it's rather \"hidden knowledge\" at present I wanted to do my bit to make it a little better known."),Object(o.b)("p",null,"As ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/Rickenhacker"},"Daniel")," helpfully points out in the comments there is an alternate syntax - lambda style. So instead of this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"template?: string | { ($routeParams?: ng.route.IRouteParamsService) : string; }\n")),Object(o.b)("p",null,"You could write this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"template?: string | (($routeParams?: ng.route.IRouteParamsService) => string);\n")),Object(o.b)("p",null,"Just remember to place parentheses around the lambda to clearly delineate it."),Object(o.b)("h2",{id:"bonfire-of-the-overloads"},"Bonfire of the Overloads"),Object(o.b)("p",null,'Before I sign off I should mention the ability Union Types give you to define a much terser definition file. Basically the "',"|",'" operator makes for a bonfire of the overloads. Where you previously may have had 6 overloads for the same method (each with identical JSDoc) you now only need 1. Which is beautiful (and DRY).'),Object(o.b)("p",null,"It's surprising just what a difference it makes. This is ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/borisyankov/DefinitelyTyped/blob/9bd7fe69d98337db56144c3da131d413f5b7e895/jquery/jquery.d.ts">jQuery.d.ts</a>')," last week (pre TypeScript 1.4). This is ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/borisyankov/DefinitelyTyped/blob/9f64372a065541fe2b8f6c5c5cd9b55a1d631f19/jquery/jquery.d.ts">jQuery.d.ts</a>')," now - with Union Types aplenty. Last week it was ","~","4000 lines of code. This week it's ","~","3200 lines of code. With the same functionality. Union Types are ",Object(o.b)("em",{parentName:"p"},"FANTASTIC"),"!"))}c.isMDXComponent=!0}}]);
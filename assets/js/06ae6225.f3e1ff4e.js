"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[11422],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79722:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return h},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["callback functions","TypeScript","Lexical scoping","closure","Instance methods"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2014/04/01/typescript-instance-methods",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-04-01-typescript-instance-methods.md",source:"@site/blog/2014-04-01-typescript-instance-methods.md",title:"TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)",description:"I was recently reading Jeff Walker's blog post \"Why TypeScript Isn't the Answer\". This is part of series in which Jeff goes through various compile-to-JavaScript technologies including TypeScript, CoffeeScript and Dart and explains his view of why he feels they don't quite hit the mark.",date:"2014-04-01T00:00:00.000Z",formattedDate:"April 1, 2014",tags:[{label:"callback functions",permalink:"/tags/callback-functions"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Lexical scoping",permalink:"/tags/lexical-scoping"},{label:"closure",permalink:"/tags/closure"},{label:"Instance methods",permalink:"/tags/instance-methods"}],readingTime:4.965,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"TypeScript, JSDoc and Intellisense",permalink:"/2014/05/05/typescript-jsdoc-and-intellisense"},nextItem:{title:"The Surprisingly Happy Tale of Visual Studio Online, Continous Integration and Chutzpah",permalink:"/2014/03/17/the-surprisingly-happy-tale-of-visual"}},c={authorsImageUrls:[void 0]},h=[{value:"Instance Methods to the Rescue!",id:"instance-methods-to-the-rescue",children:[]},{value:"<code>Greeter</code> with Instance Methods",id:"greeter-with-instance-methods",children:[]},{value:"Update 02/04/2014 - mixing and matching <code>prototype</code> and Instance Methods",id:"update-02042014---mixing-and-matching-prototype-and-instance-methods",children:[]}],u={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I was recently reading ",(0,o.kt)("a",{parentName:"p",href:"http://www.walkercoderanger.com/blog/2014/02/typescript-isnt-the-answer/"},"Jeff Walker's blog post \"Why TypeScript Isn't the Answer\""),". This is part of series in which Jeff goes through various compile-to-JavaScript technologies including TypeScript, CoffeeScript and Dart and explains his view of why he feels they don't quite hit the mark."),(0,o.kt)("p",null," As a user (and big fan) of TypeScript I read the post with interest and picked up on one particular issue that Jeff mentions:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Classes make the unchanged behaviour of the ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," keyword more confusing. For example, in a class like ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeter")," from the ",(0,o.kt)("a",{parentName:"p",href:"http://www.typescriptlang.org/Playground"},"TypeScript playground"),", the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is confusing:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class Greeter {\n greeting: string;\n constructor(message: string) {\n  this.greeting = message;\n }\n greet() {\n  return "Hello, " + this.greeting;\n }\n}\n')),(0,o.kt)("p",{parentName:"blockquote"},"One can\u2019t help but feel the ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," keyword in the methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeter")," should always reference a ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeter")," instance. However, the semantics of this are unchanged from JavaScript:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var greeter = new Greeter("world");\nvar unbound = greeter.greet;\nalert(unbound());\n')),(0,o.kt)("p",{parentName:"blockquote"},"The above code displays \u201cHello, undefined\u201d instead of the naively expected \u201cHello, world\u201d.")),(0,o.kt)("p",null,"Now Jeff is quite correct in everything he says above. However, he's also missing a trick. Or rather, he's missing out on a very useful feature of TypeScript."),(0,o.kt)("h2",{id:"instance-methods-to-the-rescue"},"Instance Methods to the Rescue!"),(0,o.kt)("p",null,"Still in the early days of TypeScript, the issue Jeff raises had already been identified. (And for what it's worth, this issue wasn't there by mistake - remember TypeScript is quite deliberately a \"superset of JavaScript\".) Happily with the ",(0,o.kt)("a",{parentName:"p",href:"http://blogs.msdn.com/b/typescript/archive/2013/08/06/announcing-0-9-1.aspx"},"release of TypeScript 0.9.1"),' a nice remedy was included in the language in the form of "Instance Methods".'),(0,o.kt)("p",null,"Instance Methods are lexically scoped; bound to a specific instance of a JavaScript object. i.e. These methods are ","*",(0,o.kt)("strong",{parentName:"p"},"not"),"*"," vulnerable to the \u201cHello, undefined\u201d issue Jeff raises. To quote the blog post:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We've relaxed the restrictions on field initializers to now allow ",(0,o.kt)("inlineCode",{parentName:"p"},"'this'"),". This means that classes can now contain both methods on the prototype, and ",(0,o.kt)("strong",{parentName:"p"},"callback functions on the instance"),". The latter are particularly useful when you want to use a member on the class as a callback function, as in the code above. This lets you mix-n-match between \u2018closure\u2019 style and \u2018prototype\u2019 style class member patterns easily.")),(0,o.kt)("h2",{id:"greeter-with-instance-methods"},(0,o.kt)("inlineCode",{parentName:"h2"},"Greeter")," with Instance Methods"),(0,o.kt)("p",null,"So, if we take the ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeter")," example, how do we apply Instance Methods to it? Well, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class Greeter {\n greeting: string;\n constructor(message: string) {\n  this.greeting = message;\n }\n greet = () => {\n  return "Hello, " + this.greeting;\n }\n}\n')),(0,o.kt)("p",null,"Can you tell the difference? It's subtle. That's right; the mere swapping out of ",(0,o.kt)("inlineCode",{parentName:"p"},"()")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"= () =&gt;")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"greet")," method takes us from a ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," method to an Instance Method."),(0,o.kt)("p",null,"Observant readers will have noticed that we are using TypeScript / ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/arrow_functions"},"ES6's Arrow Function syntax"),". In fact with that in mind I could actually have gone super-terse if I was so inclined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class Greeter {\n greeting: string;\n constructor(message: string) {\n  this.greeting = message;\n }\n greet = () => "Hello, " + this.greeting\n}\n')),(0,o.kt)("p",null,"But either way, both of the above class declarations compile down to the following JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var Greeter = (function () {\n    function Greeter(message) {\n        var _this = this;\n        this.greet = function () {\n            return "Hello, " + _this.greeting;\n        };\n        this.greeting = message;\n    }\n    return Greeter;\n})();\n')),(0,o.kt)("p",null,"Which differs from the pre-Instance Methods generated JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var Greeter = (function () {\n    function Greeter(message) {\n        this.greeting = message;\n    }\n    Greeter.prototype.greet = function () {\n        return "Hello, " + this.greeting;\n    };\n    return Greeter;\n})();\n')),(0,o.kt)("p",null,"As you can see the Instance Methods approach does ","*",(0,o.kt)("strong",{parentName:"p"},"not"),"*"," make use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeter")," to add the method. (As the pre-Instance Methods ",(0,o.kt)("inlineCode",{parentName:"p"},"greet()")," declaration did.) Instead it creates a function directly on the created object and internally uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"_this")," variable inside the Instance Methods. (",(0,o.kt)("inlineCode",{parentName:"p"},"_this")," being a previously captured instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),".)"),(0,o.kt)("p",null,"So with Instance Methods we can repeat Jeff's experiment from earlier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var greeter = new Greeter("world");\nvar bound = greeter.greet;\nalert(bound());\n')),(0,o.kt)("p",null,"But this time round the code displays \u201cHello, world\u201d and no longer \u201cHello, undefined\u201d."),(0,o.kt)("h2",{id:"update-02042014---mixing-and-matching-prototype-and-instance-methods"},"Update 02/04/2014 - mixing and matching ",(0,o.kt)("inlineCode",{parentName:"h2"},"prototype")," and Instance Methods"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/bgever"},"Bart Verkoeijen")," made an excellent comment concerning the extra memory that Instance Methods require as opposed to ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," methods. Not everyone reads the comments and so I thought I'd add a little suffix to my post."),(0,o.kt)("p",null,"What I\u2019ve come to realise is that it comes down to problem that you\u2019re trying to solve. Instance methods are bulletproof in terms of relying on a specific instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," regardless of how a method is invoked. But for many of my use cases that\u2019s overkill. Let\u2019s take the original (",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," methods) ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeter")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var Greeter = (function () {\n    function Greeter(message) {\n        this.greeting = message;\n    }\n    Greeter.prototype.greet = function () {\n        return "Hello, " + this.greeting;\n    };\n    return Greeter;\n})();\n\nvar greeter = new Greeter("world");\nvar greeter2 = new Greeter("universe");\n\nconsole.log(greeter.greet()); // Logs "Hello, world"\nconsole.log(greeter2.greet()); // Logs "Hello, universe"\n')),(0,o.kt)("p",null,"As you can see above, provided I invoke my ",(0,o.kt)("inlineCode",{parentName:"p"},"greet")," method in the context of my created object then I can rely on ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," being what I would hope."),(0,o.kt)("p",null,"That being the case my general practice has not been to use exclusively Instance methods ","*",(0,o.kt)("strong",{parentName:"p"},"or"),"*"," ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," methods. What I tend to do is start out only with ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," methods on my classes and switch them over to be an Instance method if there is an actual need to ensure context. So my TypeScript classes tend to be a combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," methods and Instance methods."),(0,o.kt)("p",null,"More often than not the ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," methods are just fine. It tends to be where an object is interacting with some kind of presentation framework (Knockout / Angular etc) or being invoked as part of a callback (eg AJAX scenarios) where I need Instance methods."))}d.isMDXComponent=!0}}]);
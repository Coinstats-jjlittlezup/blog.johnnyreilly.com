(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1170)),i={title:"TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["callback functions","TypeScript","Lexical scoping","closure","Instance methods"],hide_table_of_contents:!1},s={permalink:"/2014/04/01/typescript-instance-methods",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-04-01-typescript-instance-methods.md",source:"@site/blog/2014-04-01-typescript-instance-methods.md",description:"I was recently reading Jeff Walker's blog post \"Why TypeScript Isn't the Answer\". This is part of series in which Jeff goes through various compile-to-JavaScript technologies including TypeScript, CoffeeScript and Dart and explains his view of why he feels they don't quite hit the mark.",date:"2014-04-01T00:00:00.000Z",formattedDate:"April 1, 2014",tags:[{label:"callback functions",permalink:"/tags/callback-functions"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Lexical scoping",permalink:"/tags/lexical-scoping"},{label:"closure",permalink:"/tags/closure"},{label:"Instance methods",permalink:"/tags/instance-methods"}],title:"TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)",readingTime:4.965,truncated:!1,prevItem:{title:"TypeScript, JSDoc and Intellisense",permalink:"/2014/05/05/typescript-jsdoc-and-intellisense"},nextItem:{title:"The Surprisingly Happy Tale of Visual Studio Online, Continous Integration and Chutzpah",permalink:"/2014/03/17/the-surprisingly-happy-tale-of-visual"}},c=[{value:"Instance Methods to the Rescue!",id:"instance-methods-to-the-rescue",children:[]},{value:"<code>Greeter</code> with Instance Methods",id:"greeter-with-instance-methods",children:[]},{value:"Update 02/04/2014 - mixing and matching <code>prototype</code> and Instance Methods",id:"update-02042014---mixing-and-matching-prototype-and-instance-methods",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I was recently reading ",Object(o.b)("a",{parentName:"p",href:"http://www.walkercoderanger.com/blog/2014/02/typescript-isnt-the-answer/"},"Jeff Walker's blog post \"Why TypeScript Isn't the Answer\""),". This is part of series in which Jeff goes through various compile-to-JavaScript technologies including TypeScript, CoffeeScript and Dart and explains his view of why he feels they don't quite hit the mark."),Object(o.b)("p",null," As a user (and big fan) of TypeScript I read the post with interest and picked up on one particular issue that Jeff mentions:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Classes make the unchanged behaviour of the ",Object(o.b)("inlineCode",{parentName:"p"},"this")," keyword more confusing. For example, in a class like ",Object(o.b)("inlineCode",{parentName:"p"},"Greeter")," from the ",Object(o.b)("a",{parentName:"p",href:"http://www.typescriptlang.org/Playground"},"TypeScript playground"),", the use of ",Object(o.b)("inlineCode",{parentName:"p"},"this")," is confusing:"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",{parentName:"pre",className:"language-ts"},'class Greeter {\n greeting: string;\n constructor(message: string) {\n  this.greeting = message;\n }\n greet() {\n  return "Hello, " + this.greeting;\n }\n}\n')),Object(o.b)("p",{parentName:"blockquote"},"One can\u2019t help but feel the ",Object(o.b)("inlineCode",{parentName:"p"},"this")," keyword in the methods of ",Object(o.b)("inlineCode",{parentName:"p"},"Greeter")," should always reference a ",Object(o.b)("inlineCode",{parentName:"p"},"Greeter")," instance. However, the semantics of this are unchanged from JavaScript:"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",{parentName:"pre",className:"language-js"},'var greeter = new Greeter("world");\nvar unbound = greeter.greet;\nalert(unbound());\n')),Object(o.b)("p",{parentName:"blockquote"},"The above code displays \u201cHello, undefined\u201d instead of the naively expected \u201cHello, world\u201d.")),Object(o.b)("p",null,"Now Jeff is quite correct in everything he says above. However, he's also missing a trick. Or rather, he's missing out on a very useful feature of TypeScript."),Object(o.b)("h2",{id:"instance-methods-to-the-rescue"},"Instance Methods to the Rescue!"),Object(o.b)("p",null,"Still in the early days of TypeScript, the issue Jeff raises had already been identified. (And for what it's worth, this issue wasn't there by mistake - remember TypeScript is quite deliberately a \"superset of JavaScript\".) Happily with the ",Object(o.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/typescript/archive/2013/08/06/announcing-0-9-1.aspx"},"release of TypeScript 0.9.1"),' a nice remedy was included in the language in the form of "Instance Methods".'),Object(o.b)("p",null,"Instance Methods are lexically scoped; bound to a specific instance of a JavaScript object. i.e. These methods are ","*",Object(o.b)("strong",{parentName:"p"},"not"),"*"," vulnerable to the \u201cHello, undefined\u201d issue Jeff raises. To quote the blog post:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We've relaxed the restrictions on field initializers to now allow ",Object(o.b)("inlineCode",{parentName:"p"},"'this'"),". This means that classes can now contain both methods on the prototype, and ",Object(o.b)("strong",{parentName:"p"},"callback functions on the instance"),". The latter are particularly useful when you want to use a member on the class as a callback function, as in the code above. This lets you mix-n-match between \u2018closure\u2019 style and \u2018prototype\u2019 style class member patterns easily.")),Object(o.b)("h2",{id:"greeter-with-instance-methods"},Object(o.b)("inlineCode",{parentName:"h2"},"Greeter")," with Instance Methods"),Object(o.b)("p",null,"So, if we take the ",Object(o.b)("inlineCode",{parentName:"p"},"Greeter")," example, how do we apply Instance Methods to it? Well, like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'class Greeter {\n greeting: string;\n constructor(message: string) {\n  this.greeting = message;\n }\n greet = () => {\n  return "Hello, " + this.greeting;\n }\n}\n')),Object(o.b)("p",null,"Can you tell the difference? It's subtle. That's right; the mere swapping out of ",Object(o.b)("inlineCode",{parentName:"p"},"()")," with ",Object(o.b)("inlineCode",{parentName:"p"},"= () =&gt;")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"greet")," method takes us from a ",Object(o.b)("inlineCode",{parentName:"p"},"prototype")," method to an Instance Method."),Object(o.b)("p",null,"Observant readers will have noticed that we are using TypeScript / ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/arrow_functions"},"ES6's Arrow Function syntax"),". In fact with that in mind I could actually have gone super-terse if I was so inclined:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'class Greeter {\n greeting: string;\n constructor(message: string) {\n  this.greeting = message;\n }\n greet = () => "Hello, " + this.greeting\n}\n')),Object(o.b)("p",null,"But either way, both of the above class declarations compile down to the following JavaScript:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'var Greeter = (function () {\n    function Greeter(message) {\n        var _this = this;\n        this.greet = function () {\n            return "Hello, " + _this.greeting;\n        };\n        this.greeting = message;\n    }\n    return Greeter;\n})();\n')),Object(o.b)("p",null,"Which differs from the pre-Instance Methods generated JavaScript:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'var Greeter = (function () {\n    function Greeter(message) {\n        this.greeting = message;\n    }\n    Greeter.prototype.greet = function () {\n        return "Hello, " + this.greeting;\n    };\n    return Greeter;\n})();\n')),Object(o.b)("p",null,"As you can see the Instance Methods approach does ","*",Object(o.b)("strong",{parentName:"p"},"not"),"*"," make use of the ",Object(o.b)("inlineCode",{parentName:"p"},"prototype")," on ",Object(o.b)("inlineCode",{parentName:"p"},"Greeter")," to add the method. (As the pre-Instance Methods ",Object(o.b)("inlineCode",{parentName:"p"},"greet()")," declaration did.) Instead it creates a function directly on the created object and internally uses the ",Object(o.b)("inlineCode",{parentName:"p"},"_this")," variable inside the Instance Methods. (",Object(o.b)("inlineCode",{parentName:"p"},"_this")," being a previously captured instance of ",Object(o.b)("inlineCode",{parentName:"p"},"this"),".)"),Object(o.b)("p",null,"So with Instance Methods we can repeat Jeff's experiment from earlier:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'var greeter = new Greeter("world");\nvar bound = greeter.greet;\nalert(bound());\n')),Object(o.b)("p",null,"But this time round the code displays \u201cHello, world\u201d and no longer \u201cHello, undefined\u201d."),Object(o.b)("h2",{id:"update-02042014---mixing-and-matching-prototype-and-instance-methods"},"Update 02/04/2014 - mixing and matching ",Object(o.b)("inlineCode",{parentName:"h2"},"prototype")," and Instance Methods"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://twitter.com/bgever"},"Bart Verkoeijen")," made an excellent comment concerning the extra memory that Instance Methods require as opposed to ",Object(o.b)("inlineCode",{parentName:"p"},"prototype")," methods. Not everyone reads the comments and so I thought I'd add a little suffix to my post."),Object(o.b)("p",null,"What I\u2019ve come to realise is that it comes down to problem that you\u2019re trying to solve. Instance methods are bulletproof in terms of relying on a specific instance of ",Object(o.b)("inlineCode",{parentName:"p"},"this")," regardless of how a method is invoked. But for many of my use cases that\u2019s overkill. Let\u2019s take the original (",Object(o.b)("inlineCode",{parentName:"p"},"prototype")," methods) ",Object(o.b)("inlineCode",{parentName:"p"},"Greeter")," example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'var Greeter = (function () {\n    function Greeter(message) {\n        this.greeting = message;\n    }\n    Greeter.prototype.greet = function () {\n        return "Hello, " + this.greeting;\n    };\n    return Greeter;\n})();\n\nvar greeter = new Greeter("world");\nvar greeter2 = new Greeter("universe");\n\nconsole.log(greeter.greet()); // Logs "Hello, world"\nconsole.log(greeter2.greet()); // Logs "Hello, universe"\n')),Object(o.b)("p",null,"As you can see above, provided I invoke my ",Object(o.b)("inlineCode",{parentName:"p"},"greet")," method in the context of my created object then I can rely on ",Object(o.b)("inlineCode",{parentName:"p"},"this")," being what I would hope."),Object(o.b)("p",null,"That being the case my general practice has not been to use exclusively Instance methods ","*",Object(o.b)("strong",{parentName:"p"},"or"),"*"," ",Object(o.b)("inlineCode",{parentName:"p"},"prototype")," methods. What I tend to do is start out only with ",Object(o.b)("inlineCode",{parentName:"p"},"prototype")," methods on my classes and switch them over to be an Instance method if there is an actual need to ensure context. So my TypeScript classes tend to be a combination of ",Object(o.b)("inlineCode",{parentName:"p"},"prototype")," methods and Instance methods."),Object(o.b)("p",null,"More often than not the ",Object(o.b)("inlineCode",{parentName:"p"},"prototype")," methods are just fine. It tends to be where an object is interacting with some kind of presentation framework (Knockout / Angular etc) or being invoked as part of a callback (eg AJAX scenarios) where I need Instance methods."))}p.isMDXComponent=!0},1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,u=h["".concat(i,".").concat(d)]||h[d]||b[d]||o;return n?a.a.createElement(u,s(s({ref:t},l),{},{components:n})):a.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
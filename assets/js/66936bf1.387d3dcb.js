(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,m=h["".concat(r,".").concat(p)]||h[p]||d[p]||i;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1257:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},676:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(4),o=n(10),i=(n(0),n(1219)),r={title:"Striving for (JavaScript) Convention",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["naming convention","javascript","Hungarian Notation","DOJO"],hide_table_of_contents:!1},s={permalink:"/2012/03/12/striving-for-javascript-convention",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-03-12-striving-for-javascript-convention.md",source:"@site/blog/2012-03-12-striving-for-javascript-convention.md",title:"Striving for (JavaScript) Convention",description:"Update",date:"2012-03-12T00:00:00.000Z",formattedDate:"March 12, 2012",tags:[{label:"naming convention",permalink:"/tags/naming-convention"},{label:"javascript",permalink:"/tags/javascript"},{label:"Hungarian Notation",permalink:"/tags/hungarian-notation"},{label:"DOJO",permalink:"/tags/dojo"}],readingTime:9.63,truncated:!1,prevItem:{title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",permalink:"/2012/03/17/using-pubsub-observer-pattern-to"},nextItem:{title:"jQuery Unobtrusive Remote Validation",permalink:"/2012/03/03/jquery-unobtrusive-remote-validation"}},l=[{value:"Update",id:"update",children:[]}],c={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"update"},"Update"),Object(i.b)("p",null," The speed of change makes fools of us all. Since I originally wrote this post all of 3 weeks ago Visual Studio 11 beta has been released and the issues I was seeking to solve have pretty much been resolved by the new innovations found therein. It's nicely detailed in ",Object(i.b)("a",{parentName:"p",href:"http://www.twitter.com/carlbergenhem"},"@carlbergenhem"),"'s blog post: ",Object(i.b)("a",{parentName:"p",href:"http://blogs.telerik.com/blogs/posts/12-03-26/my-top-5-visual-studio-11-designer-improvements-for-asp-net-4-5-development.aspx"},"My Top 5 Visual Studio 11 Designer Improvements for ASP.NET 4.5 Development"),". I've left the post in place below but much of what I said (particularly with regard to Hungarian Notation) I've now moved away from. That was originally my intention anyway so that's no bad thing. The one HN artefact that I've held onto is using \"$\" as a prefix for jQuery objects. I think that still makes sense. I would have written my first line of JavaScript in probably 2000. It probably looked something like this: ",Object(i.b)("inlineCode",{parentName:"p"},"alert('hello world')"),". I know. Classy. As I've mentioned before it was around 2010 before I took JavaScript in any way seriously. Certainly it was then when I started to actively learn the language. Because up until this point I'd been studiously avoiding writing any JavaScript at all I'd never really given thought to forms and conventions. When I wrote any JavaScript I just used the same style and approaches as I used in my main development language (of C#). By and large I have been following the .net naming conventions which are ably explained by Pete Brown ",Object(i.b)("a",{parentName:"p",href:"http://10rem.net/articles/net-naming-conventions-and-programming-standards---best-practices"},"here"),". Over time I have started to move away from this approach. Without a deliberate intention to do so I have found myself adopting a different style for my JavaScript code as compared with anything else I write. I wouldn't go so far as to say I'm completely happy with the style I'm currently using. But I find it more helpful than not and thought it might be worth talking about. It was really 2 things that started me down the road of \"rolling my own\" convention: dynamic typing and the lack of safety nets. Let's take each in turn.... ### 1","."," Dynamic typing"),Object(i.b)("p",null," Having grown up (in a development sense) using compiled and strongly-typed languages I was used to the IDE making it pretty clear what was what through friendly tooltips and the like: ",Object(i.b)("img",{src:n(1257).default})),Object(i.b)("p",null," JavaScript is loosely / dynamically typed (",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/questions/9154388/does-untyped-also-mean-dynamically-typed-in-the-academic-cs-world"},'occasionally called "untyped" but let\'s not go there'),"). This means that the IDE can't easily determine what's what. So no tooltips for you sunshine. ### 2","."," The lack of safety nets / running with scissors"),Object(i.b)("p",null," Now I've come to love it but what I realised pretty quickly when getting into JavaScript was this: you are running with scissors. If you're not careful and you don't take precautions it can bloody quickly. If I'm writing C# I have a lot of safety nets. Not the least of which is \"does it compile\"? If I declare an integer and then subsequently try to assign a string value to it ",Object(i.b)("u",null,"it won't let me")),Object(i.b)("p",null,". But JavaScript is forgiving. Some would say too forgiving. Let's do something mad: ```js\nvar iAmANumber = 77;"),Object(i.b)("p",null,"console.log(iAmANumber); //Logs a number"),Object(i.b)("p",null,'iAmANumber = "It\'s a string";'),Object(i.b)("p",null,"console.log(iAmANumber); //Logs a string"),Object(i.b)("p",null,'iAmANumber = {\ndescription: "I am an object"\n};'),Object(i.b)("p",null,"console.log(iAmANumber); //Logs an object"),Object(i.b)("p",null,"iAmANumber = function (myVariable) {"),Object(i.b)("p",null,"  console.log(myVariable);\n}"),Object(i.b)("p",null,'console.log(iAmANumber); //Logs a function\niAmANumber("I am not a number, I am a free man!"); //Calls a function which performs a log'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\nNow if I were to attempt something similar in C# fuggedaboudit but JavaScript; no I'm romping home free: ![](../static/blog/2012-03-12-striving-for-javascript-convention/Mad%2BStuff.png)\n\n Now I'm not saying that you should ever do the above, and thinking about it I can't think of a situation where you'd want to (suggestions on a postcard). But the point is it's possible. And because it's possible to do this deliberately, it's doubly possible to do this accidentally. My point is this: it's easy to make bugs in JavaScript. ## What ~~Katy~~ Johnny Did Next\n\nI'd started making more and more extensive use of JavaScript. I was beginning to move in the direction of using the [single-page application](<http://en.wikipedia.org/wiki/Single-page_application>) approach (*<sideNote>although more in the sense of giving application style complexity to individual pages rather than ensuring that entire applications ended up in a single page</sideNote>*). This meant that whereas in the past I'd had the occasional 2 lines of JavaScript I now had a multitude of functions which were all interacting in response to user input. All these functions would contain a number of different variables. As well as this I was making use of jQuery for both Ajax purposes and to smooth out the DOM inconsistencies between various browsers. This only added to the mix as variables in one of my functions could be any one of the following: - a number\n- a string\n- a boolean\n- a date\n- an object\n- an array\n- a function\n- a jQuery object - not strictly a distinct JavaScript type obviously but treated pretty much as one in the sense that it has a particular functions / properties etc associated with it\n\n\x3c!-- --\x3e\n\n As I started doing this sort of work I made no changes to my coding style. Wherever possible I did \\***exactly**\\* what I would have been doing in C# in JavaScript. And it worked fine. Until.... Okay there is no \"until\" as such, it did work fine. But what I found was that I would do a piece of work, check it into source control, get users to test it, release the work into Production and promptly move onto the next thing. However, a little way down the line there would be a request to add a new feature or perhaps a bug was reported and I'd find myself back looking at the code. And, as is often the case, despite the comments I would realise that it wasn't particularly clear why something worked in the way it did. (Happily it's not just me that has this experience, paranoia has lead me to ask many a fellow developer and they have confessed to similar) When it came to bug hunting in particular I found myself cursing the lack of friendly tooltips and the like. Each time I wanted to look at a variable I'd find myself tracking back through the function, looking for the initial use of the variable to determine the type. Then I'd be tracking forward through the function for each subsequent use to ensure that it conformed. Distressingly, I would find examples of where it looked like I'd forgotten the type of the variable towards the end of a function (for which I can only, regrettably, blame myself). Most commonly I would have a situation like this: ```js\nvar tableCell = $(\"#ItIsMostDefinitelyATableCell\"); //I jest ;-)\n\n/* ...THERE WOULD BE SOME CODE DOING SOMETHING HERE... */\n\ntableCell.className = \"makeMeProminent\"; //Oh dear - not good.\n")),Object(i.b)("p",null," You see what happened above? I forgot I had a jQuery object and instead treated it like it was a standard DOM element. Oh dear. ## Spinning my own safety net; Hungarian style"),Object(i.b)("p",null,' After I\'d experienced a few of the situations described above I decided that steps needed to be taken to minimise the risk of this. In this case, I decided that "steps" meant ',Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Hungarian_notation"},"Hungarian notation"),". I know. I bet you're wincing right now. For those of you that don't remember HN was pretty much the standard way of coding at one point (although at the point that I started coding professionally it had already started to decline). It was adopted in simpler times long before the modern IDE's that tell you what each variable is became the norm. Back when you couldn't be sure of the types you were dealing with. In short, kind of like my situation with JavaScript right now. There's not much to it. By and large HN simply means having a lowercase prefix of 1-3 characters on all your variables indicating type. It doesn't solve all your problems. It doesn't guarantee to stop bugs. But because each instance of the variables use implicitly indicates it's type it makes bugs more glaringly obvious. This means when writing code I'm less likely to misuse a variable (eg ",Object(i.b)("inlineCode",{parentName:"p"},'iNum = "JIKJ"'),') because part of my brain would be bellowing: "that just looks wrong... pay better attention lad!". Likewise, if I\'m scanning through some JavaScript and searching for a bug then this can make it more obvious. Here\'s some examples of different types of variables declared using the style I have adopted: ```js\nvar iInteger = 4;\nvar dDecimal = 10.50;\nvar sString = "I am a string";\nvar bBoolean = true;\nvar dteDate = new Date();\nvar oObject = {\ndescription: "I am an object"\n};\nvar aArray = ',"[34, 77]",';\nvar fnFunction = function () {\n//Do something\n};\nvar $jQueryObject = $("#ItIsMostDefinitelyATableCell");'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\n Some of you have read this and thought \"hold on a minute... JavaScript doesn't have integers / decimals etc\". You're quite right. My style is not specifically stating the type of a variable. More it is seeking to provide a guide on how a variable should be used. JavaScript does not have integers. But oftentimes I'll be using a number variable which i will only ever want to treat as an integer. And so I'll name it accordingly. ## Spinning a better safety net; DOJO style\n\nI would be the first to say that alternative approaches are available. And here's one I recently happened upon that I rather like the look of: look 2/3rds down at the parameters section of [the DOJO styleguide](<http://dojotoolkit.org/community/styleGuide>) Essentially they advise specifying parameter types through the use of prefixed comments. See the examples below: ```js\nfunction(/*String*/ foo, /*int*/ bar)...\n")),Object(i.b)("p",null,"or ```js\nfunction(/",Object(i.b)("em",{parentName:"p"},"String?"),"/ foo, /",Object(i.b)("em",{parentName:"p"},"int"),"/ bar, /",Object(i.b)("em",{parentName:"p"},"String[]?"),"/ baz)..."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\nI really rather like this approach and I'm thinking about starting to adopt it. It's not possible in Hungarian Notation to be so clear about the purpose of a variable. At least not without starting to adopt all kinds of kooky conventions that take in all the possible permutations of variable types. And if you did that you'd really be defeating yourself anyway as it would simply reduce the clarity of your code and make bugs more likely. ## Spinning a better safety net; unit tests\n\nDespite being quite used to writing unit tests for all my server-side code I have not yet fully embraced unit testing on the client. Partly I've been holding back because of the variety of JavaScript testing frameworks available. I wasn't sure which to start with. But given that it is so easy to introduce bugs into JavaScript I have come to the conclusion that it's better to have some tests in place rather than none. Time to embrace the new. ## Conclusion\n\nI've found using Hungarian Notation useful whilst working in JavaScript. Not everyone will feel the same and I think that's fair enough; within reason I think it's generally a good idea to go with what you find useful. However, I am giving genuine consideration to moving to the DOJO style and moving back to my more standard camel-cased variable names instead of Hungarian Notation. Particularly since I strive to keep my functions short with the view that ideally each should 1 thing well. Keep it simple etc... And so in a perfect world the situation of forgetting a variables purpose shouldn't really arise... I think once I've got up and running with JavaScript unit tests I may make that move. Hungarian Notation may have proved to be just a stop-gap measure until better techniques were employed...\n")))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(8),i=(n(0),n(1166)),r={title:"Striving for (JavaScript) Convention",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["naming convention","javascript","Hungarian Notation","DOJO"],hide_table_of_contents:!1},s={permalink:"/2012/03/12/striving-for-javascript-convention",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-03-12-striving-for-javascript-convention.md",source:"@site/blog/2012-03-12-striving-for-javascript-convention.md",description:"Update",date:"2012-03-12T00:00:00.000Z",formattedDate:"March 12, 2012",tags:[{label:"naming convention",permalink:"/tags/naming-convention"},{label:"javascript",permalink:"/tags/javascript"},{label:"Hungarian Notation",permalink:"/tags/hungarian-notation"},{label:"DOJO",permalink:"/tags/dojo"}],title:"Striving for (JavaScript) Convention",readingTime:9.63,truncated:!1,prevItem:{title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",permalink:"/2012/03/17/using-pubsub-observer-pattern-to"},nextItem:{title:"jQuery Unobtrusive Remote Validation",permalink:"/2012/03/03/jquery-unobtrusive-remote-validation"}},l=[{value:"Update",id:"update",children:[]}],c={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"update"},"Update"),Object(i.b)("p",null," The speed of change makes fools of us all. Since I originally wrote this post all of 3 weeks ago Visual Studio 11 beta has been released and the issues I was seeking to solve have pretty much been resolved by the new innovations found therein. It's nicely detailed in ",Object(i.b)("a",{parentName:"p",href:"http://www.twitter.com/carlbergenhem"},"@carlbergenhem"),"'s blog post: ",Object(i.b)("a",{parentName:"p",href:"http://blogs.telerik.com/blogs/posts/12-03-26/my-top-5-visual-studio-11-designer-improvements-for-asp-net-4-5-development.aspx"},"My Top 5 Visual Studio 11 Designer Improvements for ASP.NET 4.5 Development"),". I've left the post in place below but much of what I said (particularly with regard to Hungarian Notation) I've now moved away from. That was originally my intention anyway so that's no bad thing. The one HN artefact that I've held onto is using \"$\" as a prefix for jQuery objects. I think that still makes sense. I would have written my first line of JavaScript in probably 2000. It probably looked something like this: ",Object(i.b)("inlineCode",{parentName:"p"},"alert('hello world')"),". I know. Classy. As I've mentioned before it was around 2010 before I took JavaScript in any way seriously. Certainly it was then when I started to actively learn the language. Because up until this point I'd been studiously avoiding writing any JavaScript at all I'd never really given thought to forms and conventions. When I wrote any JavaScript I just used the same style and approaches as I used in my main development language (of C#). By and large I have been following the .net naming conventions which are ably explained by Pete Brown ",Object(i.b)("a",{parentName:"p",href:"http://10rem.net/articles/net-naming-conventions-and-programming-standards---best-practices"},"here"),". Over time I have started to move away from this approach. Without a deliberate intention to do so I have found myself adopting a different style for my JavaScript code as compared with anything else I write. I wouldn't go so far as to say I'm completely happy with the style I'm currently using. But I find it more helpful than not and thought it might be worth talking about. It was really 2 things that started me down the road of \"rolling my own\" convention: dynamic typing and the lack of safety nets. Let's take each in turn.... ### 1","."," Dynamic typing"),Object(i.b)("p",null," Having grown up (in a development sense) using compiled and strongly-typed languages I was used to the IDE making it pretty clear what was what through friendly tooltips and the like: ",Object(i.b)("img",{src:n(1203).default})),Object(i.b)("p",null," JavaScript is loosely / dynamically typed (",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/questions/9154388/does-untyped-also-mean-dynamically-typed-in-the-academic-cs-world"},'occasionally called "untyped" but let\'s not go there'),"). This means that the IDE can't easily determine what's what. So no tooltips for you sunshine. ### 2","."," The lack of safety nets / running with scissors"),Object(i.b)("p",null," Now I've come to love it but what I realised pretty quickly when getting into JavaScript was this: you are running with scissors. If you're not careful and you don't take precautions it can bloody quickly. If I'm writing C# I have a lot of safety nets. Not the least of which is \"does it compile\"? If I declare an integer and then subsequently try to assign a string value to it ",Object(i.b)("u",null,"it won't let me")),Object(i.b)("p",null,". But JavaScript is forgiving. Some would say too forgiving. Let's do something mad: ```js\nvar iAmANumber = 77;"),Object(i.b)("p",null,"console.log(iAmANumber); //Logs a number"),Object(i.b)("p",null,'iAmANumber = "It\'s a string";'),Object(i.b)("p",null,"console.log(iAmANumber); //Logs a string"),Object(i.b)("p",null,'iAmANumber = {\ndescription: "I am an object"\n};'),Object(i.b)("p",null,"console.log(iAmANumber); //Logs an object"),Object(i.b)("p",null,"iAmANumber = function (myVariable) {"),Object(i.b)("p",null,"  console.log(myVariable);\n}"),Object(i.b)("p",null,'console.log(iAmANumber); //Logs a function\niAmANumber("I am not a number, I am a free man!"); //Calls a function which performs a log'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\nNow if I were to attempt something similar in C# fuggedaboudit but JavaScript; no I'm romping home free: ![](../static/blog/2012-03-12-striving-for-javascript-convention/Mad%2BStuff.png)\n\n Now I'm not saying that you should ever do the above, and thinking about it I can't think of a situation where you'd want to (suggestions on a postcard). But the point is it's possible. And because it's possible to do this deliberately, it's doubly possible to do this accidentally. My point is this: it's easy to make bugs in JavaScript. ## What ~~Katy~~ Johnny Did Next\n\nI'd started making more and more extensive use of JavaScript. I was beginning to move in the direction of using the [single-page application](<http://en.wikipedia.org/wiki/Single-page_application>) approach (*<sideNote>although more in the sense of giving application style complexity to individual pages rather than ensuring that entire applications ended up in a single page</sideNote>*). This meant that whereas in the past I'd had the occasional 2 lines of JavaScript I now had a multitude of functions which were all interacting in response to user input. All these functions would contain a number of different variables. As well as this I was making use of jQuery for both Ajax purposes and to smooth out the DOM inconsistencies between various browsers. This only added to the mix as variables in one of my functions could be any one of the following: - a number\n- a string\n- a boolean\n- a date\n- an object\n- an array\n- a function\n- a jQuery object - not strictly a distinct JavaScript type obviously but treated pretty much as one in the sense that it has a particular functions / properties etc associated with it\n\n\x3c!-- --\x3e\n\n As I started doing this sort of work I made no changes to my coding style. Wherever possible I did \\***exactly**\\* what I would have been doing in C# in JavaScript. And it worked fine. Until.... Okay there is no \"until\" as such, it did work fine. But what I found was that I would do a piece of work, check it into source control, get users to test it, release the work into Production and promptly move onto the next thing. However, a little way down the line there would be a request to add a new feature or perhaps a bug was reported and I'd find myself back looking at the code. And, as is often the case, despite the comments I would realise that it wasn't particularly clear why something worked in the way it did. (Happily it's not just me that has this experience, paranoia has lead me to ask many a fellow developer and they have confessed to similar) When it came to bug hunting in particular I found myself cursing the lack of friendly tooltips and the like. Each time I wanted to look at a variable I'd find myself tracking back through the function, looking for the initial use of the variable to determine the type. Then I'd be tracking forward through the function for each subsequent use to ensure that it conformed. Distressingly, I would find examples of where it looked like I'd forgotten the type of the variable towards the end of a function (for which I can only, regrettably, blame myself). Most commonly I would have a situation like this: ```js\nvar tableCell = $(\"#ItIsMostDefinitelyATableCell\"); //I jest ;-)\n\n/* ...THERE WOULD BE SOME CODE DOING SOMETHING HERE... */\n\ntableCell.className = \"makeMeProminent\"; //Oh dear - not good.\n")),Object(i.b)("p",null," You see what happened above? I forgot I had a jQuery object and instead treated it like it was a standard DOM element. Oh dear. ## Spinning my own safety net; Hungarian style"),Object(i.b)("p",null,' After I\'d experienced a few of the situations described above I decided that steps needed to be taken to minimise the risk of this. In this case, I decided that "steps" meant ',Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Hungarian_notation"},"Hungarian notation"),". I know. I bet you're wincing right now. For those of you that don't remember HN was pretty much the standard way of coding at one point (although at the point that I started coding professionally it had already started to decline). It was adopted in simpler times long before the modern IDE's that tell you what each variable is became the norm. Back when you couldn't be sure of the types you were dealing with. In short, kind of like my situation with JavaScript right now. There's not much to it. By and large HN simply means having a lowercase prefix of 1-3 characters on all your variables indicating type. It doesn't solve all your problems. It doesn't guarantee to stop bugs. But because each instance of the variables use implicitly indicates it's type it makes bugs more glaringly obvious. This means when writing code I'm less likely to misuse a variable (eg ",Object(i.b)("inlineCode",{parentName:"p"},'iNum = "JIKJ"'),') because part of my brain would be bellowing: "that just looks wrong... pay better attention lad!". Likewise, if I\'m scanning through some JavaScript and searching for a bug then this can make it more obvious. Here\'s some examples of different types of variables declared using the style I have adopted: ```js\nvar iInteger = 4;\nvar dDecimal = 10.50;\nvar sString = "I am a string";\nvar bBoolean = true;\nvar dteDate = new Date();\nvar oObject = {\ndescription: "I am an object"\n};\nvar aArray = ',"[34, 77]",';\nvar fnFunction = function () {\n//Do something\n};\nvar $jQueryObject = $("#ItIsMostDefinitelyATableCell");'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\n Some of you have read this and thought \"hold on a minute... JavaScript doesn't have integers / decimals etc\". You're quite right. My style is not specifically stating the type of a variable. More it is seeking to provide a guide on how a variable should be used. JavaScript does not have integers. But oftentimes I'll be using a number variable which i will only ever want to treat as an integer. And so I'll name it accordingly. ## Spinning a better safety net; DOJO style\n\nI would be the first to say that alternative approaches are available. And here's one I recently happened upon that I rather like the look of: look 2/3rds down at the parameters section of [the DOJO styleguide](<http://dojotoolkit.org/community/styleGuide>) Essentially they advise specifying parameter types through the use of prefixed comments. See the examples below: ```js\nfunction(/*String*/ foo, /*int*/ bar)...\n")),Object(i.b)("p",null,"or ```js\nfunction(/",Object(i.b)("em",{parentName:"p"},"String?"),"/ foo, /",Object(i.b)("em",{parentName:"p"},"int"),"/ bar, /",Object(i.b)("em",{parentName:"p"},"String[]?"),"/ baz)..."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\nI really rather like this approach and I'm thinking about starting to adopt it. It's not possible in Hungarian Notation to be so clear about the purpose of a variable. At least not without starting to adopt all kinds of kooky conventions that take in all the possible permutations of variable types. And if you did that you'd really be defeating yourself anyway as it would simply reduce the clarity of your code and make bugs more likely. ## Spinning a better safety net; unit tests\n\nDespite being quite used to writing unit tests for all my server-side code I have not yet fully embraced unit testing on the client. Partly I've been holding back because of the variety of JavaScript testing frameworks available. I wasn't sure which to start with. But given that it is so easy to introduce bugs into JavaScript I have come to the conclusion that it's better to have some tests in place rather than none. Time to embrace the new. ## Conclusion\n\nI've found using Hungarian Notation useful whilst working in JavaScript. Not everyone will feel the same and I think that's fair enough; within reason I think it's generally a good idea to go with what you find useful. However, I am giving genuine consideration to moving to the DOJO style and moving back to my more standard camel-cased variable names instead of Hungarian Notation. Particularly since I strive to keep my functions short with the view that ideally each should 1 thing well. Keep it simple etc... And so in a perfect world the situation of forgetting a variables purpose shouldn't really arise... I think once I've got up and running with JavaScript unit tests I may make that move. Hungarian Notation may have proved to be just a stop-gap measure until better techniques were employed... \n\n")))}u.isMDXComponent=!0},1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(r,".").concat(d)]||h[d]||p[d]||i;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1203:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);
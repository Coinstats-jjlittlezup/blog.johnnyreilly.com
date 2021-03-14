(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1160:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),h=i,d=b["".concat(r,".").concat(h)]||b[h]||p[h]||o;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1205:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/C%2523%2Bversion%2Bof%2BJohnReilly-d980bc6ac3a2f7f3fe7c55b8a7e24c7f.png"},1206:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/JavaScript%2Bversion%2Bof%2BJohnReilly-61bf5d26bcf47e84491e329e64ba9d24.png"},763:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(8),o=(n(0),n(1160)),r={title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["inheritance","javascript","c#","observer pattern","pubsub"],hide_table_of_contents:!1},s={permalink:"/2012/03/17/using-pubsub-observer-pattern-to",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-03-17-using-pubsub-observer-pattern-to.md",source:"@site/blog/2012-03-17-using-pubsub-observer-pattern-to.md",description:"Yes the title of this post is \\*painfully\\* verbose. Sorry about that. Couple of questions for you: - Have you ever liked the way you can have base classes in C# which can then be inherited and subclassed in a different file / class",date:"2012-03-17T00:00:00.000Z",formattedDate:"March 17, 2012",tags:[{label:"inheritance",permalink:"/tags/inheritance"},{label:"javascript",permalink:"/tags/javascript"},{label:"c#",permalink:"/tags/c"},{label:"observer pattern",permalink:"/tags/observer-pattern"},{label:"pubsub",permalink:"/tags/pubsub"}],title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",readingTime:5.485,truncated:!1,prevItem:{title:"WCF - moving from Config to Code, a simple WCF service harness (plus implementing your own Authorization)",permalink:"/2012/03/22/wcf-moving-from-config-to-code-simple"},nextItem:{title:"Striving for (JavaScript) Convention",permalink:"/2012/03/12/striving-for-javascript-convention"}},l=[{value:"The Problem",id:"the-problem",children:[]}],c={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Yes the title of this post is ","*",Object(o.b)("strong",{parentName:"p"},"painfully"),"*"," verbose. Sorry about that. Couple of questions for you: - Have you ever liked the way you can have base classes in C# which can then be inherited and subclassed ",Object(o.b)("u",null,"in a different file / class")),Object(o.b)("p",null,"?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Have you ever thought; gosh it'd be nice to do something like that in JavaScript..."),Object(o.b)("li",{parentName:"ul"},"Have you then looked at JavaScripts prototypical inheritance and thought \"right.... I'm sure it's possible but this going to end up like ",Object(o.b)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/War_and_Peace"},"War and Peace"),'"'),Object(o.b)("li",{parentName:"ul"},"Have you then subsequently thought \"and hold on a minute... even if I did implement this using the prototype and split things between different files / modules wouldn't I have to pollute the global scope to achieve that? And wouldn't that mean that my code was exposed to the vagaries of any other scripts on the page? Hmmm...\""),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://www.thrillingdetective.com/eyes/oxford.html"},"Men! Are you skinny? Do bullies kick sand in your face?")," (Just wanted to see if you were still paying attention...)")),Object(o.b)("h2",{id:"the-problem"},"The Problem"),Object(o.b)("p",null,"Well, the above thoughts occurred to me just recently. I had a situation where I was working on an MVC project and needed to build up quite large objects within JavaScript representing various models. The models in question were already implemented on the server side using classes and made extensive use of inheritance because many of the properties were shared between the various models. That is to say we would have models which were implemented through the use of a class inheriting a base class which in turn inherits a further base class. With me? Good. Perhaps I can make it a little clearer with an example. Here are my 3 classes. First BaseReilly.cs: ```cs\npublic class BaseReilly\n{\npublic string LastName { get; set; }"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'    public BaseReilly()\n    {\n        LastName = "Reilly";\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'\nNext BoyReilly.cs (which inherits from BaseReilly): ```cs\npublic class BoyReilly : BaseReilly\n    {\n        public string Sex { get; set; }\n\n        public BoyReilly()\n            : base()\n        {\n            Sex = "It is a manchild";\n        }\n    }\n')),Object(o.b)("p",null,"And finally JohnReilly.cs (which inherits from BoyReilly which in turn inherits from BaseReilly): ```cs\npublic class JohnReilly : BoyReilly\n{\npublic string FirstName { get; set; }"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'    public JohnReilly()\n        : base()\n    {\n        FirstName = "John";\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'\nUsing the above I can create myself my very own "JohnReilly" like so: ```cs\nvar johnReilly = new JohnReilly();\n')),Object(o.b)("p",null,"And it will look like this: ",Object(o.b)("img",{src:n(1205).default})),Object(o.b)("p",null," I was looking to implement something similar on the client and within JavaScript. I was keen to ensure ",Object(o.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Code_reuse"},"code reuse"),". And my inclination to keep things simple made me wary of making use of the ",Object(o.b)("a",{parentName:"p",href:"http://bonsaiden.github.com/JavaScript-Garden/#object.prototype"},"prototype"),". It is undoubtedly powerful but I don't think even the mighty ",Object(o.b)("a",{parentName:"p",href:"http://javascript.crockford.com/prototypal.html"},"Crockford"),' would consider it "simple". Also I had the reservation of exposing my object to the global scope. So what to do? I had an idea.... ## The Big Idea'),Object(o.b)("p",null," For a while I've been making use explicit use of the ",Object(o.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Observer_pattern"},"Observer pattern"),' in my JavaScript, better known by most as the publish/subscribe (or "PubSub") pattern. There\'s a million JavaScript libraries that facilitate this and after some experimentation I finally settled on ',Object(o.b)("a",{parentName:"p",href:"https://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js"},"higgins")," implementation as it's simple and I saw a ",Object(o.b)("a",{parentName:"p",href:"http://jsperf.com/pubsubjs-vs-jquery-custom-events/11"},"JSPerf")," which demonstrated it as either the fastest or second fastest in class. Up until now my main use for it had been to facilitate loosely coupled GUI interactions. If I wanted one component on the screen to influence anothers behaviour I simply needed to get the first component to publish out the relevant events and the second to subscribe to these self-same events. One of the handy things about publishing out events this way is that with them you can also include data. This data can be useful when driving the response in the subscribers. However, it occurred to me that it would be equally possible to pass an object when publishing an event. **",Object(o.b)("u",null,"And the subscribers could enrich that object with data as they saw fit.")),Object(o.b)("p",null,"** Now this struck me as a pretty useful approach. It's not rock solid secure as it's always possible that someone could subscribe to your events and get access to your object as you published out. However, that's pretty unlikely to happen accidentally; certainly far less likely than someone else's global object clashing with your global object. ## What might this look like in practice?"),Object(o.b)("p",null,"So this is what it ended up looking like when I turned my 3 classes into JavaScript files / modules. First BaseReilly.js: ```js\n$(function () {"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$.subscribe("PubSub.Inheritance.Emulation", function (obj) {\n    obj.LastName = "Reilly";\n});\n')),Object(o.b)("p",null,"});"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'\nNext BoyReilly.js: ```js\n$(function () {\n\n    $.subscribe("PubSub.Inheritance.Emulation", function (obj) {\n        obj.Sex = "It is a manchild";\n    });\n});\n')),Object(o.b)("p",null,"And finally JohnReilly.js: ```js\n$(function () {"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$.subscribe("PubSub.Inheritance.Emulation", function (obj) {\n    obj.FirstName = "John";\n});\n')),Object(o.b)("p",null,"});"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'\nIf the above scripts have been included in a page I can create myself my very own "JohnReilly" in JavaScript like so: ```js\nvar oJohnReilly = {}; //Empty object\n    \n    $.publish("PubSub.Inheritance.Emulation", [oJohnReilly]); //Empty object "published" so it can be enriched by subscribers\n\n    console.log(JSON.stringify(oJohnReilly)); //Show me this thing you call "JohnReilly"\n')),Object(o.b)("p",null,"And it will look like this: ",Object(o.b)("img",{src:n(1206).default})),Object(o.b)("p",null," And it works. Obviously the example I've given above it somewhat naive - in reality my object properties are driven by GUI components rather than hard-coded. But I hope this illustrates the point. This technique allows you to simply share functionality between different JavaScript files and so keep your codebase tight. I certainly wouldn't recommend it for all circumstances but when you're doing something as simple as building up an object to be used to pass data around (as I am) then it works very well indeed. ## A Final Thought on Script Ordering"),Object(o.b)("p",null,"A final thing that maybe worth mentioning is script ordering. The order in which functions are called is driven by the order in which subscriptions are made. In my example I was registering the scripts in this order: ```html"),Object(o.b)("script",{src:"/Scripts/PubSubInheritanceDemo/BaseReilly.js"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'    <script src="/Scripts/PubSubInheritanceDemo/BoyReilly.js"><\/script>\n    <script src="/Scripts/PubSubInheritanceDemo/JohnReilly.js"<>/script>\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\nSo when my event was published out the functions in the above JS files would be called in this order: 1. BaseReilly.js\n2. BoyReilly.js\n3. JohnReilly.js\n\n\x3c!-- --\x3e\n\nIf you were so inclined you could use this to emulate inheritance in behaviour. Eg you could set a property in `BaseReilly.js` which was subsequently overridden in `JohnReilly.js` or `BoyReilly.js` if you so desired. I'm not doing that myself but it occurred as a possibility. ## PS\n\nIf you're interested in learning more about JavaScript stabs at inheritance you could do far worse than look at Bob Inces in depth StackOverflow [answer](<http://stackoverflow.com/a/1598077/761388>).\n\n")))}u.isMDXComponent=!0}}]);
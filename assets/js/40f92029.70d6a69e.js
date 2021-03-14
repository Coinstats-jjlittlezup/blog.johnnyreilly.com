(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1161:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=h(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(a),d=n,b=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return a?o.a.createElement(b,s(s({ref:t},c),{},{components:a})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},504:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return h}));var n=a(3),o=a(8),r=(a(0),a(1161)),i={title:"The Joy of JSON",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Dave Ward","json","Encosia","Christian Heilmann javascript object literal","douglas crockford"],hide_table_of_contents:!1},s={permalink:"/2012/02/23/joy-of-json",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-02-23-joy-of-json.md",source:"@site/blog/2012-02-23-joy-of-json.md",description:"So back to JSON. For those of you that don't know JSON stands for JavaScript Object Notation and is lightweight text based data interchange format. Rather than quote other people verbatim you can find thorough explanations of JSON here: - Introducing JSON",date:"2012-02-23T00:00:00.000Z",formattedDate:"February 23, 2012",tags:[{label:"Dave Ward",permalink:"/tags/dave-ward"},{label:"json",permalink:"/tags/json"},{label:"Encosia",permalink:"/tags/encosia"},{label:"Christian Heilmann javascript object literal",permalink:"/tags/christian-heilmann-javascript-object-literal"},{label:"douglas crockford",permalink:"/tags/douglas-crockford"}],title:"The Joy of JSON",readingTime:3.555,truncated:!1,prevItem:{title:"jQuery Unobtrusive Remote Validation",permalink:"/2012/03/03/jquery-unobtrusive-remote-validation"},nextItem:{title:"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment",permalink:"/2012/02/15/wcf-transport-windows-authentication"}},l=[],c={toc:l};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"So back to JSON. For those of you that don't know JSON stands for JavaScript Object Notation and is lightweight text based data interchange format. Rather than quote other people verbatim you can find thorough explanations of JSON here: - ",Object(r.b)("a",{parentName:"p",href:"http://www.json.org/"},"Introducing JSON")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://www.json.org/js.html"},"JSON in Javascript"))),Object(r.b)("p",null," As mentioned in my previous ",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/02/potted-history-of-using-ajax-on.html"},"post on Ajax")," I came upon JSON quite by accident and was actually using it for some time without having any idea. But let's pull back a bit. Let's start with the JavaScript Object Literal. Some years ago I came upon this article by Christan Heilmann about the JavaScript Object Literal which had been published all the way back in 2006: ",Object(r.b)("a",{parentName:"p",href:"http://christianheilmann.com/2006/02/16/show-love-to-the-object-literal/"},"Show love to the JavaScript Object Literal")," Now when I read this it was a revelation to me. I hadn't really used JavaScript objects a great deal at this point (yes I am one of those people that started using JavaScript without actually learning the thing) and when I had used them is was through the ",Object(r.b)("inlineCode",{parentName:"p"},"var obj = new Object()"),' pattern (as that\'s the only approach I knew). So it was wonderful to discover that instead of the needlessly verbose: ```js\nvar myCar = new Object();\nmyCar.wheels = 4;\nmyCar.colour = "blue";'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n I could simply use the much more concise object literal syntax to declare an object instead: ```js\nvar myCar = { wheels: 4, colour: "blue" };\n')),Object(r.b)("p",null," Lovely. Henceforth I adopted this approach in my code as I'm generally a believer that brevity is best. It was sometime later that I happened upon JSON (when I started looking into ",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/01/jqgrid-its-just-far-better-grid.html"},"jqGrid"),"). Basically I was looking to pass complex data structures backward and forward to the server and, as far as I knew, there was no way to achieve this simply in JavaScript. I was expecting that I would have to manually serialise and deserialise (yes dammit I will use the English spellings!) objects when ever I wanted to do this sort of thing. However, I was reading the the fantastic Dave Ward's ",Object(r.b)("a",{parentName:"p",href:"http://encosia.com/"},"Encosia")," blog which on this occasion was talking about the ",Object(r.b)("a",{parentName:"p",href:"http://encosia.com/why-aspnet-ajax-updatepanels-are-dangerous/"},"troubles of UpdatePanels")," (a subject close to my heart by the way) and more interestingly the use of PageMethods in ASP.NET. This is what he said that made me prick up my ears: ",Object(r.b)("em",{parentName:"p"},'"Page methods allow ASP.NET AJAX pages to directly execute a page\u2019s static methods, using JSON (JavaScript Object Notation). JSON is basically a minimalistic version of SOAP, which is perfectly suited for light weight communication between client and server."')," JSON is a lightweight SOAP eh? I've used SOAP. I wonder if I could use this.... To my complete surprise, and may I say delight, I discovered that a wonderful fellow called Douglas Crockford, he of ",Object(r.b)("a",{parentName:"p",href:"http://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},"JavaScript, The Good Parts"),' fame had quietly come up with JSON some time ago. JSON, from my perspective, turned out to be a simple way to turn an object into a string and then from a string back into an object. So simple that it consists of 2 methods on a JSON object: - JSON.stringify(myObject) - take an object and make me a JSON string. (and by the way isn\'t "stringify" just the loveliest method name ever?)'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"JSON.parse(myJSONString) - take a JSON string and make me an object")),Object(r.b)("p",null,'Let me illustrate the above method names using the myCar example from earlier: ```js\nvar myCar = { wheels: 4, colour: "blue" };\n// myCar is an object'),Object(r.b)("p",null,'var myCarJSON = JSON.stringify(myCar);\n//myCarJSON will look like this: \'{"wheels":4,"colour":"blue"}\''),Object(r.b)("p",null,'var anotherCarMadeFromMyJSON = JSON.parse(myCarJSON);\n//anotherCarMadeFromMyJSON will be a brand new "car" object'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\n I've also demonstrated this using the Chrome Console: ![](../static/blog/2012-02-23-joy-of-json/Using%2BJSON.png)\n\n Crockford initially invented/discovered JSON himself and wrote a little helper library which provided a JSON object to be used by all and sundry. This can be found here: [JSON on GitHub](<https://github.com/douglascrockford/JSON-js>) Because JSON was so clearly wonderful, glorious and useful it ended up becoming a part of the EcmaScript 5 spec (in fact it's worth reading the brilliant [John Resig's blog post](<http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/>) on this). This has lead to JSON being offered [natively in browsers](<http://en.wikipedia.org/wiki/JSON#Native_encoding_and_decoding_in_browsers>) for quite some time. However, for those of us (and I am one alas) still supporting IE 6 and the like we still have Crockfords JSON2.js to fall back on.\n\n")))}h.isMDXComponent=!0}}]);
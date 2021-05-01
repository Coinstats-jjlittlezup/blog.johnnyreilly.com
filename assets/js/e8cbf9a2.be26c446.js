(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[90538],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return h},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67664:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i={title:"The Joy of JSON",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Dave Ward","json","Encosia","Christian Heilmann javascript object literal","douglas crockford"],hide_table_of_contents:!1},s={permalink:"/2012/02/23/joy-of-json",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-02-23-joy-of-json.md",source:"@site/blog/2012-02-23-joy-of-json.md",title:"The Joy of JSON",description:"So back to JSON. For those of you that don't know JSON stands for JavaScript Object Notation and is lightweight text based data interchange format. Rather than quote other people verbatim you can find thorough explanations of JSON here: - Introducing JSON",date:"2012-02-23T00:00:00.000Z",formattedDate:"February 23, 2012",tags:[{label:"Dave Ward",permalink:"/tags/dave-ward"},{label:"json",permalink:"/tags/json"},{label:"Encosia",permalink:"/tags/encosia"},{label:"Christian Heilmann javascript object literal",permalink:"/tags/christian-heilmann-javascript-object-literal"},{label:"douglas crockford",permalink:"/tags/douglas-crockford"}],readingTime:3.555,truncated:!1,prevItem:{title:"jQuery Unobtrusive Remote Validation",permalink:"/2012/03/03/jquery-unobtrusive-remote-validation"},nextItem:{title:"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment",permalink:"/2012/02/15/wcf-transport-windows-authentication"}},l=[],c={toc:l};function h(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So back to JSON. For those of you that don't know JSON stands for JavaScript Object Notation and is lightweight text based data interchange format. Rather than quote other people verbatim you can find thorough explanations of JSON here: - ",(0,r.kt)("a",{parentName:"p",href:"http://www.json.org/"},"Introducing JSON")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.json.org/js.html"},"JSON in Javascript"))),(0,r.kt)("p",null," As mentioned in my previous ",(0,r.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/02/potted-history-of-using-ajax-on.html"},"post on Ajax")," I came upon JSON quite by accident and was actually using it for some time without having any idea. But let's pull back a bit. Let's start with the JavaScript Object Literal. Some years ago I came upon this article by Christan Heilmann about the JavaScript Object Literal which had been published all the way back in 2006: ",(0,r.kt)("a",{parentName:"p",href:"http://christianheilmann.com/2006/02/16/show-love-to-the-object-literal/"},"Show love to the JavaScript Object Literal")," Now when I read this it was a revelation to me. I hadn't really used JavaScript objects a great deal at this point (yes I am one of those people that started using JavaScript without actually learning the thing) and when I had used them is was through the ",(0,r.kt)("inlineCode",{parentName:"p"},"var obj = new Object()"),' pattern (as that\'s the only approach I knew). So it was wonderful to discover that instead of the needlessly verbose: ```js\nvar myCar = new Object();\nmyCar.wheels = 4;\nmyCar.colour = "blue";'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n I could simply use the much more concise object literal syntax to declare an object instead: ```js\nvar myCar = { wheels: 4, colour: "blue" };\n')),(0,r.kt)("p",null," Lovely. Henceforth I adopted this approach in my code as I'm generally a believer that brevity is best. It was sometime later that I happened upon JSON (when I started looking into ",(0,r.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/01/jqgrid-its-just-far-better-grid.html"},"jqGrid"),"). Basically I was looking to pass complex data structures backward and forward to the server and, as far as I knew, there was no way to achieve this simply in JavaScript. I was expecting that I would have to manually serialise and deserialise (yes dammit I will use the English spellings!) objects when ever I wanted to do this sort of thing. However, I was reading the the fantastic Dave Ward's ",(0,r.kt)("a",{parentName:"p",href:"http://encosia.com/"},"Encosia")," blog which on this occasion was talking about the ",(0,r.kt)("a",{parentName:"p",href:"http://encosia.com/why-aspnet-ajax-updatepanels-are-dangerous/"},"troubles of UpdatePanels")," (a subject close to my heart by the way) and more interestingly the use of PageMethods in ASP.NET. This is what he said that made me prick up my ears: ",(0,r.kt)("em",{parentName:"p"},'"Page methods allow ASP.NET AJAX pages to directly execute a page\u2019s static methods, using JSON (JavaScript Object Notation). JSON is basically a minimalistic version of SOAP, which is perfectly suited for light weight communication between client and server."')," JSON is a lightweight SOAP eh? I've used SOAP. I wonder if I could use this.... To my complete surprise, and may I say delight, I discovered that a wonderful fellow called Douglas Crockford, he of ",(0,r.kt)("a",{parentName:"p",href:"http://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},"JavaScript, The Good Parts"),' fame had quietly come up with JSON some time ago. JSON, from my perspective, turned out to be a simple way to turn an object into a string and then from a string back into an object. So simple that it consists of 2 methods on a JSON object: - JSON.stringify(myObject) - take an object and make me a JSON string. (and by the way isn\'t "stringify" just the loveliest method name ever?)'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON.parse(myJSONString) - take a JSON string and make me an object")),(0,r.kt)("p",null,'Let me illustrate the above method names using the myCar example from earlier: ```js\nvar myCar = { wheels: 4, colour: "blue" };\n// myCar is an object'),(0,r.kt)("p",null,'var myCarJSON = JSON.stringify(myCar);\n//myCarJSON will look like this: \'{"wheels":4,"colour":"blue"}\''),(0,r.kt)("p",null,'var anotherCarMadeFromMyJSON = JSON.parse(myCarJSON);\n//anotherCarMadeFromMyJSON will be a brand new "car" object'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n I've also demonstrated this using the Chrome Console: ![](../static/blog/2012-02-23-joy-of-json/Using%2BJSON.png)\n\n Crockford initially invented/discovered JSON himself and wrote a little helper library which provided a JSON object to be used by all and sundry. This can be found here: [JSON on GitHub](<https://github.com/douglascrockford/JSON-js>) Because JSON was so clearly wonderful, glorious and useful it ended up becoming a part of the EcmaScript 5 spec (in fact it's worth reading the brilliant [John Resig's blog post](<http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/>) on this). This has lead to JSON being offered [natively in browsers](<http://en.wikipedia.org/wiki/JSON#Native_encoding_and_decoding_in_browsers>) for quite some time. However, for those of us (and I am one alas) still supporting IE 6 and the like we still have Crockfords JSON2.js to fall back on.\n")))}h.isMDXComponent=!0}}]);
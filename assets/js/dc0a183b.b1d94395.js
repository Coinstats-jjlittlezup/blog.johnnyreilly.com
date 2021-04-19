(window.webpackJsonp=window.webpackJsonp||[]).push([[959],{1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(4),a=n(10),i=(n(0),n(1211)),o={title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Visual Studio 2012","JavaScript debugging","IE 10"],hide_table_of_contents:!1},l={permalink:"/2013/04/17/ie-10-install-torches-javascript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-04-17-ie-10-install-torches-javascript.md",source:"@site/blog/2013-04-17-ie-10-install-torches-javascript.md",title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",description:"OK the title of this post is a little verbose. I've just wasted a morning of my life trying to discover what happened to my ability to debug JavaScript in Visual Studio 2012. If you don't want to experience the same pain then read on...",date:"2013-04-17T00:00:00.000Z",formattedDate:"April 17, 2013",tags:[{label:"Visual Studio 2012",permalink:"/tags/visual-studio-2012"},{label:"JavaScript debugging",permalink:"/tags/java-script-debugging"},{label:"IE 10",permalink:"/tags/ie-10"}],readingTime:1.255,truncated:!1,prevItem:{title:"A navigation animation (for your users delectation)",permalink:"/2013/04/26/a-navigation-animation-for-your-users"},nextItem:{title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",permalink:"/2013/04/09/making-ie-10s-clear-field-x-button-and"}},s=[{value:"The Symptoms",id:"the-symptoms",children:[]},{value:"The Cure",id:"the-cure",children:[]},{value:"The Probable Cause",id:"the-probable-cause",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"OK the title of this post is a little verbose. I've just wasted a morning of my life trying to discover what happened to my ability to debug JavaScript in Visual Studio 2012. If you don't want to experience the same pain then read on..."),Object(i.b)("h2",{id:"the-symptoms"},"The Symptoms"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"I'm not hitting my JavaScript breakpoints when I hit F5 in Visual Studio."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/bb385621.aspx"},"Script Documents")," is missing from the Solution Explorer when I'm debugging in Visual Studio.")),Object(i.b)("h2",{id:"the-cure"},"The Cure"),Object(i.b)("p",null,"In the end, after a great deal of frustration, I happened upon ",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/15908391/761388"},"this answer")," on Stack Overflow. It set me in the right direction."),Object(i.b)("p",null,'In my "Browse With..." drop down in Visual Studio I was ',"*",Object(i.b)("strong",{parentName:"p"},"not"),"*"," seeing this:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-iRgBxdxUrkU/UW6csypEd3I/AAAAAAAAAaY/rNK6N79GT6k/s320/BrowseWith.png",alt:null})),Object(i.b)("p",null,"I was seeing exactly the same as this list but with ",Object(i.b)("strong",{parentName:"p"},"TWO")," instances of Internet Explorer in the list instead of one. Odd, I know."),Object(i.b)("p",null,"I fixed this up by selecting Google Chrome as my target instead of IE, running it and then setting it back to IE. And interestingly, when I went to set it back to IE there was only one instance of Internet Explorer in the list again."),Object(i.b)("h2",{id:"the-probable-cause"},"The Probable Cause"),Object(i.b)("p",null,"My machine was auto updated from IE 9 to IE 10 just the other day. I ","*",Object(i.b)("strong",{parentName:"p"},"think"),"*",' my JavaScript debugging issue appeared at the same time. This would explain to me why I had two instances of "Internet Explorer" in my list. Not certain but I\'d say the evidence is fairly compelling.'),Object(i.b)("p",null,"Painful Microsoft. Painful"))}u.isMDXComponent=!0}}]);
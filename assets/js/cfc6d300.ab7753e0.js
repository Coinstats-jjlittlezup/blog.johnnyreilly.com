(window.webpackJsonp=window.webpackJsonp||[]).push([[884],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(r,".").concat(b)]||u[b]||h[b]||i;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),i=(n(0),n(1170)),r={title:"WPF and Mystic Meg or Playing Futurologist",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["SPA","WPF"],hide_table_of_contents:!1},l={permalink:"/2014/02/12/wpf-and-mystic-meg-or-playing",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-02-12-wpf-and-mystic-meg-or-playing.md",source:"@site/blog/2014-02-12-wpf-and-mystic-meg-or-playing.md",description:"Time for an unusual post. Most of what gets put down here is technical \"how-to's\". It's usually prompted by something I've been working on and serves, as much as anything else, as an aide-memoire. Not this time.",date:"2014-02-12T00:00:00.000Z",formattedDate:"February 12, 2014",tags:[{label:"SPA",permalink:"/tags/spa"},{label:"WPF",permalink:"/tags/wpf"}],title:"WPF and Mystic Meg or Playing Futurologist",readingTime:2.915,truncated:!1,prevItem:{title:"TypeScript and RequireJS (Keep It Simple)",permalink:"/2014/02/27/typescript-and-requirejs-keep-it-simple"},nextItem:{title:"Integration Testing with Entity Framework and Snapshot Backups",permalink:"/2014/01/24/integration-testing-with-entity"}},s=[],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Time for an unusual post. Most of what gets put down here is technical \"how-to's\". It's usually prompted by something I've been working on and serves, as much as anything else, as an aide-memoire. Not this time."),Object(i.b)("p",null," I\u2019ve been watching the changes in the world of development of the last couple of years and I\u2019ve come to a controversial conclusion... So I wanted to write about it. Hopefully I'll be able to return to this in 5 years and say \"wow - I'm so insightful - almost visionary really\". Or not. Either way, let's put it out there - it's sink or swim time. Ready for it? Here\u2019s my bet: WPF will die."),Object(i.b)("p",null,"Sounds dramatic right? OK - I've overstated my case just to get you to read on (I should work for the tabloids). Let me flesh this out a little. First of all, I think WPF is a fine technology - great apps are built with it. My personal favourite being the fantastic ",Object(i.b)("a",{parentName:"p",href:"https://github.com/blog/1151-designing-github-for-windows"},"GitHub for Windows"),". And actually I don't think WPF will die at all. What I think will happen is that it will become a more niche way to build applications."),Object(i.b)("p",null,"More broadly, I think that native client apps (be they Windows, Mac, iOS, Android etc) will eventually come to be replaced by ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Single-page_application"},"rich web apps / SPAs")," of the Angular / Ember / Durandal ilk. I realise that at the moment that seems like a ludicrous statement \u2013 native apps are heavily used throughout enterprises worldwide and certainly will continue to be used and actively developed for at least the next 5 years."),Object(i.b)("p",null,"But as the web comes to ",Object(i.b)("a",{parentName:"p",href:"http://arstechnica.com/information-technology/2013/05/native-level-performance-on-the-web-a-brief-examination-of-asm-js/"},"perform like native"),", as ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS"},"JavaScript become a compile target"),", as ",Object(i.b)("a",{parentName:"p",href:"http://davidwalsh.name/canvas-demos"},"HTML 5 provides rich UI")," and as ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/WebSockets"},"interactive communication becomes possible")," I reckon this is a fairly probable scenario. Particularly when you consider the ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/Apps/Reference"},"API work Firefox is doing around Firefox OS"),". I could be wrong, but my expectation is that the day will come when people will have apps that they can access from anywhere, on any platform and those apps can be deployed without infrastructure having to push out new versions to each client machine."),Object(i.b)("p",null,"The web undeniably has issues but I think it will likely win out. And the cost case for a single client app is pretty compelling to anyone funding a system."),Object(i.b)("p",null,"As a dev I\u2019m always working with an ever-evolving grab bag of technology whether it be front end, middle tier, database or services. In fact that will likely always be the case (change being the only constant in the world of software). But on the basis of my expectations I\u2019m planning to always keep at least a toe in the world of web apps as a form of \u201ccareer future-proofing\u201d."),Object(i.b)("p",null,"Going less broad again when I look at the Microsoft stack, I think XAML will live on for some time. Obviously Silverlight is no longer being actively developed but MS are using it in Windows 8 (Phone and WinJS) as well as WPF. But I do kind of wonder if it will become like a bit like VB.Net, still around, still in use, but slowly dropping off in terms of popularity. Particularly as you can write WinJS apps in HTML / CSS / JavaScript."),Object(i.b)("p",null,"As I say, I could very much be wrong about all of this. I don\u2019t know what your view of the future of the development landscape is? You may have a different insight? I\u2019d be intrigued to know!"))}p.isMDXComponent=!0}}]);
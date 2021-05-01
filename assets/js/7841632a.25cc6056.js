(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[74277],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,f=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45915:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r={title:"WPF and Mystic Meg or Playing Futurologist",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["SPA","WPF"],hide_table_of_contents:!1},l={permalink:"/2014/02/12/wpf-and-mystic-meg-or-playing",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-02-12-wpf-and-mystic-meg-or-playing.md",source:"@site/blog/2014-02-12-wpf-and-mystic-meg-or-playing.md",title:"WPF and Mystic Meg or Playing Futurologist",description:"Time for an unusual post. Most of what gets put down here is technical \"how-to's\". It's usually prompted by something I've been working on and serves, as much as anything else, as an aide-memoire. Not this time.",date:"2014-02-12T00:00:00.000Z",formattedDate:"February 12, 2014",tags:[{label:"SPA",permalink:"/tags/spa"},{label:"WPF",permalink:"/tags/wpf"}],readingTime:2.915,truncated:!1,prevItem:{title:"TypeScript and RequireJS (Keep It Simple)",permalink:"/2014/02/27/typescript-and-requirejs-keep-it-simple"},nextItem:{title:"Integration Testing with Entity Framework and Snapshot Backups",permalink:"/2014/01/24/integration-testing-with-entity"}},s=[],p={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Time for an unusual post. Most of what gets put down here is technical \"how-to's\". It's usually prompted by something I've been working on and serves, as much as anything else, as an aide-memoire. Not this time."),(0,i.kt)("p",null," I\u2019ve been watching the changes in the world of development of the last couple of years and I\u2019ve come to a controversial conclusion... So I wanted to write about it. Hopefully I'll be able to return to this in 5 years and say \"wow - I'm so insightful - almost visionary really\". Or not. Either way, let's put it out there - it's sink or swim time. Ready for it? Here\u2019s my bet: WPF will die."),(0,i.kt)("p",null,"Sounds dramatic right? OK - I've overstated my case just to get you to read on (I should work for the tabloids). Let me flesh this out a little. First of all, I think WPF is a fine technology - great apps are built with it. My personal favourite being the fantastic ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blog/1151-designing-github-for-windows"},"GitHub for Windows"),". And actually I don't think WPF will die at all. What I think will happen is that it will become a more niche way to build applications."),(0,i.kt)("p",null,"More broadly, I think that native client apps (be they Windows, Mac, iOS, Android etc) will eventually come to be replaced by ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Single-page_application"},"rich web apps / SPAs")," of the Angular / Ember / Durandal ilk. I realise that at the moment that seems like a ludicrous statement \u2013 native apps are heavily used throughout enterprises worldwide and certainly will continue to be used and actively developed for at least the next 5 years."),(0,i.kt)("p",null,"But as the web comes to ",(0,i.kt)("a",{parentName:"p",href:"http://arstechnica.com/information-technology/2013/05/native-level-performance-on-the-web-a-brief-examination-of-asm-js/"},"perform like native"),", as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS"},"JavaScript become a compile target"),", as ",(0,i.kt)("a",{parentName:"p",href:"http://davidwalsh.name/canvas-demos"},"HTML 5 provides rich UI")," and as ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/WebSockets"},"interactive communication becomes possible")," I reckon this is a fairly probable scenario. Particularly when you consider the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/Apps/Reference"},"API work Firefox is doing around Firefox OS"),". I could be wrong, but my expectation is that the day will come when people will have apps that they can access from anywhere, on any platform and those apps can be deployed without infrastructure having to push out new versions to each client machine."),(0,i.kt)("p",null,"The web undeniably has issues but I think it will likely win out. And the cost case for a single client app is pretty compelling to anyone funding a system."),(0,i.kt)("p",null,"As a dev I\u2019m always working with an ever-evolving grab bag of technology whether it be front end, middle tier, database or services. In fact that will likely always be the case (change being the only constant in the world of software). But on the basis of my expectations I\u2019m planning to always keep at least a toe in the world of web apps as a form of \u201ccareer future-proofing\u201d."),(0,i.kt)("p",null,"Going less broad again when I look at the Microsoft stack, I think XAML will live on for some time. Obviously Silverlight is no longer being actively developed but MS are using it in Windows 8 (Phone and WinJS) as well as WPF. But I do kind of wonder if it will become like a bit like VB.Net, still around, still in use, but slowly dropping off in terms of popularity. Particularly as you can write WinJS apps in HTML / CSS / JavaScript."),(0,i.kt)("p",null,"As I say, I could very much be wrong about all of this. I don\u2019t know what your view of the future of the development landscape is? You may have a different insight? I\u2019d be intrigued to know!"))}c.isMDXComponent=!0}}]);
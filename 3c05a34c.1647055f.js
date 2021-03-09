(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1e3:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tumblr_mxjpcobvcg...6_r2_250-4abb938-0c7bb9135f65346d933b4499d46f5ccb.gif"},268:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(960)),i={title:"Live Reload Considered Harmful",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},l={permalink:"/blog.johnnyreilly.com/2015/12/20/live-reload-considered-harmful",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-12-20-live-reload-considered-harmful.md",source:"@site/blog/2015-12-20-live-reload-considered-harmful.md",description:"I've seen it go by many names; live reload, hot reload, browser sync... the list goes on. It's been the subject of a million demos. It's the focus of a thousand npm packages. Someone tweaks a file and... wait for it... doesn't have to refresh their browser to see the changes... The future is now!",date:"2015-12-20T00:00:00.000Z",tags:[],title:"Live Reload Considered Harmful",readingTime:2.455,truncated:!1,prevItem:{title:"UseStaticFiles for ASP.Net vOld",permalink:"/blog.johnnyreilly.com/2016/01/01/usestaticfiles-for-aspnet-vold"},nextItem:{title:"ES6 + TypeScript + Babel + React + Flux + Karma: The Secret Recipe",permalink:"/blog.johnnyreilly.com/2015/12/16/es6-typescript-babel-react-flux-karma"}},s=[{value:"Why is Live Reload a Thing?",id:"why-is-live-reload-a-thing",children:[]},{value:"Why is Live Reload a BAD Thing?",id:"why-is-live-reload-a-bad-thing",children:[]}],c={toc:s};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I've seen it go by many names; ",Object(o.b)("a",{parentName:"p",href:"http://livereload.com/"},"live reload"),", hot reload, ",Object(o.b)("a",{parentName:"p",href:"https://browsersync.io/"},"browser sync"),"... the list goes on. It's been the subject of a million demos. It's the focus of a thousand npm packages. Someone tweaks a file and... wait for it... ",Object(o.b)("em",{parentName:"p"},"doesn't have to refresh their browser to see the changes"),"... The future is now!"),Object(o.b)("p",null," Forgive me the sarcasm, but I have come to the conclusion that whilst live reload is impressive... for my own purposes, it is not actually that useful. It certainly shouldn't be the default goto that it seems to have become."),Object(o.b)("p",null,"Hear me out people, I may be the voice crying out in the wilderness but I'm right dammit."),Object(o.b)("p",null,Object(o.b)("img",{src:a(1e3).default})),Object(o.b)("h2",{id:"why-is-live-reload-a-thing"},"Why is Live Reload a Thing?"),Object(o.b)("p",null,"What is live reload? Well having to hit F5 after you've made a change... That seems like such hard work right? To quote ",Object(o.b)("a",{parentName:"p",href:"http://haacked.com/archive/2011/12/13/better-git-with-powershell.aspx/"},"Phil Haack"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"... we\u2019re software developers.... It\u2019s time to AWW TOE MATE!")),Object(o.b)("p",null,"Yup, automation. Anything that a developer can theoretically automate.... will be automated. Usually this is a good thing but automation can be addictive. And on this occasion it's time for an intervention."),Object(o.b)("p",null,"What else could be the attraction? Well, this is speculation but I would say that the implementation actually has something to do with it. Live reload is almost invariably powered by ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"WebSockets")," and they are certainly cool. Developers I know what you are like. You're attracted by the new shiny thing. You can't resist the allure of WS. And there with live reload idling away in the background you're all bleeding edge. I can say all this because this is exactly what I am like."),Object(o.b)("h2",{id:"why-is-live-reload-a-bad-thing"},"Why is Live Reload a BAD Thing?"),Object(o.b)("p",null,"Well the OCD part of me is instinctively repelled by the extra ",Object(o.b)("inlineCode",{parentName:"p"},"script")," tag of alien code that live reload foists upon your app. How very dare that ",Object(o.b)("inlineCode",{parentName:"p"},'&lt;script src="http://localhost:35729/livereload.js?snipver=1"&gt;&lt;/script&gt;')," push its way into my pristine DOM. It's an outrage."),Object(o.b)("p",null,"Perhaps a more convincing rationale is how useful it is to have 2 different versions of your app up on screen at the same time. I like to try things out when I'm working. I get a screen working one way and then I tweak and play with my implementation. I have the app of 10 minutes ago sat side by side with the newly adjusted one. Assess, compare and and declare a winner. That's so useful and live reload does away with it. That's a problem."),Object(o.b)("p",null,"Finally, I'm an obsessive 'Ctrl-S'-er. I've been burned by unsaved changes too many times. I'm saving every couple of keypresses. With live reload that usually means I have the noise of a dead application in the corner of my eye as LR obsessively forces the latest brokenness upon me. That sucks."),Object(o.b)("p",null,"I've no doubt there are situations where live reload is useful. But for my money that's the exception rather than the rule. Let the madness end now. Just say \"no\", kids."))}u.isMDXComponent=!0},960:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),b=n,d=h["".concat(i,".").concat(b)]||h[b]||p[b]||o;return a?r.a.createElement(d,l(l({ref:t},c),{},{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
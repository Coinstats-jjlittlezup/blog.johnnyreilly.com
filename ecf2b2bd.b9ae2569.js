(window.webpackJsonp=window.webpackJsonp||[]).push([[824],{888:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(958)),i={title:"LICENSE to kill your PWA",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},s={permalink:"/blog.johnnyreilly.com/2020/01/21/license-to-kill-your-pwa",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-01-21-license-to-kill-your-pwa.md",source:"@site/blog/2020-01-21-license-to-kill-your-pwa.md",description:"Update: 26/01/2020 - LICENSE to kill revoked!",date:"2020-01-21T00:00:00.000Z",tags:[],title:"LICENSE to kill your PWA",readingTime:3.805,truncated:!1,prevItem:{title:"From create-react-app to PWA",permalink:"/blog.johnnyreilly.com/2020/01/31/from-create-react-app-to-pwa"},nextItem:{title:"EF Core 3.1 breaks left join with no navigation property",permalink:"/blog.johnnyreilly.com/2020/01/02/ef-core-31-breaks-left-join-with-no-navigation-property"}},c=[{value:"Update: 26/01/2020 - LICENSE to kill revoked!",id:"update-26012020---license-to-kill-revoked",children:[]},{value:"The tragedy",id:"the-tragedy",children:[]},{value:"The mystery",id:"the-mystery",children:[]},{value:"The investigation",id:"the-investigation",children:[]},{value:"The resolution",id:"the-resolution",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"update-26012020---license-to-kill-revoked"},"Update: 26/01/2020 - LICENSE to kill revoked!"),Object(a.b)("p",null," Following the original publication of this post I received this tweet suggesting we should change the behaviour of the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"terser-webpack-plugin"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Send a PR to change the name to .LICENSE.txt by default."),Object(a.b)("p",{parentName:"blockquote"},"\u2014 Tobias Koppers (@wSokra) ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/wSokra/status/1220069497660411904?ref_src=twsrc%5Etfw"},"January 22, 2020"))),Object(a.b)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),Object(a.b)("p",null,"That seemed like an excellent idea! I raised ",Object(a.b)("a",{parentName:"p",href:"https://github.com/webpack-contrib/terser-webpack-plugin/pull/210"},"this PR")," which changes the behaviour such that instead of ",Object(a.b)("inlineCode",{parentName:"p"},".LICENSE")," files being produced, ",Object(a.b)("inlineCode",{parentName:"p"},".LICENSE.txt")," files are pumped out instead. Crucially they are IIS (and other servers) friendly. The great news is that future users of webpack / create-react-app etc will not face this problem at all; result!"),Object(a.b)("h2",{id:"the-tragedy"},"The tragedy"),Object(a.b)("p",null,"Recently my beloved PWA died. I didn't realise it at first. It wasn't until a week or so after the tragedy that I realised he'd gone. In his place was the stale memory of service workers gone by. Last week's code; cached and repeatedly served up to a disappointed audience. Terrible news."),Object(a.b)("p",null,"What had happened? What indeed. The problem was quirky and (now that I know the answer) I'm going to share it with you. Because it's entirely non-obvious."),Object(a.b)("h2",{id:"the-mystery"},"The mystery"),Object(a.b)("p",null,"Once I realised that I was repeatedly being served up an old version of my PWA, I got to wondering.... Why? What's happening? What's wrong? What did I do? I felt bad. I stared at the ceiling. I sighed and opened my Chrome devtools. With no small amount of sadness I went to the ",Object(a.b)("inlineCode",{parentName:"p"},"Application")," tab, hit ",Object(a.b)("inlineCode",{parentName:"p"},"Service Workers")," and then ",Object(a.b)("inlineCode",{parentName:"p"},"Unregister"),"."),Object(a.b)("p",null,"Then I hit refresh and took a look at console. I saw this:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://4.bp.blogspot.com/-nWKzYl8ffN8/XidQp44KPdI/AAAAAAAATSc/XsYpCMXSUk4CqcP82JKd1PGBmVYJp3YTACPcBGAYYCw/s1600/LICENSE%2Bcannot%2Bbe%2Bcached.png"},"![null]","(<https://4.bp.blogspot.com/-nWKzYl8ffN8/XidQp44KPdI/AAAAAAAATSc/XsYpCMXSUk4CqcP82JKd1PGBmVYJp3YTACPcBGAYYCw/s640/LICENSE%2Bcannot%2Bbe%2Bcached.png> =640x32)"),'What does this mean? Something about a "bad-precaching-response". And apparently this was happening whilst trying to load this resource: ',Object(a.b)("inlineCode",{parentName:"p"},"/static/js/6.20102e99.chunk.js.LICENSE?__WB_REVISION__=e2fc36")),Object(a.b)("p",null,"This ",Object(a.b)("inlineCode",{parentName:"p"},"404")," was preventing pre-caching from executing successfully. This was what was killing my PWA. This was the perpetrator. How to fix this? Read on!"),Object(a.b)("h2",{id:"the-investigation"},"The investigation"),Object(a.b)("p",null,"Time to find out what's going on. I dropped that URL into my browser to see what would happen. ",Object(a.b)("inlineCode",{parentName:"p"},"404")," city man:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-B-49bVwTF5o/XidQ4jSUaEI/AAAAAAAATSg/X53fRFl8meE0oDD09L7PdeB0PgUmnh12QCLcBGAsYHQ/s1600/LICENSE%2Bfile%2Bscrewing%2Bme%2Bover.png"},"![null]","(<https://3.bp.blogspot.com/-B-49bVwTF5o/XidQ4jSUaEI/AAAAAAAATSg/X53fRFl8meE0oDD09L7PdeB0PgUmnh12QCLcBGAsYHQ/s400/LICENSE%2Bfile%2Bscrewing%2Bme%2Bover.png> =400x233)"),"So, to disk. I took a look at what was actually on the server in that location. Sure enough, the file existed. When I opened it up I found this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/**\n* A better abstraction over CSS.\n*\n* @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present\n* @website https://github.com/cssinjs/jss\n* @license MIT\n*/\n \n/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n \n/** @license React v16.12.0\n* react.production.min.js\n*\n* Copyright (c) Facebook, Inc. and its affiliates.\n*\n* This source code is licensed under the MIT license found in the\n* LICENSE file in the root directory of this source tree.\n*/\n \n/** @license React v16.12.0\n* react-dom.production.min.js\n*\n* Copyright (c) Facebook, Inc. and its affiliates.\n*\n* This source code is licensed under the MIT license found in the\n* LICENSE file in the root directory of this source tree.\n*/\n \n/** @license React v0.18.0\n* scheduler.production.min.js\n*\n* Copyright (c) Facebook, Inc. and its affiliates.\n*\n* This source code is licensed under the MIT license found in the\n* LICENSE file in the root directory of this source tree.\n*/\n \n/** @license React v16.12.0\n* react-is.production.min.js\n*\n* Copyright (c) Facebook, Inc. and its affiliates.\n*\n* This source code is licensed under the MIT license found in the\n* LICENSE file in the root directory of this source tree.\n*/\n")),Object(a.b)("p",null,"What is this? Well, as the name of the file suggests, it's licenses. For some reason, my build was scraping the licenses from the head of some of my files and placing them in a separate ",Object(a.b)("inlineCode",{parentName:"p"},"6.20102e99.chunk.js.LICENSE")," file. Doing some more digging I happened upon ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/6441"},"this discussion against the ",Object(a.b)("inlineCode",{parentName:"a"},"create-react-app"))," project. It's worth saying, that my PWA was an ejected ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app")," project."),Object(a.b)("p",null,"It turned out the the issue was related to the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/webpack-contrib/terser-webpack-plugin"},Object(a.b)("inlineCode",{parentName:"a"},"terser-webpack-plugin")),". The default behaviour performs this kind of license file extraction. The app was being served by an IIS server and it wasn't configured to support the ",Object(a.b)("inlineCode",{parentName:"p"},".LICENSE")," file type."),Object(a.b)("h2",{id:"the-resolution"},"The resolution"),Object(a.b)("p",null,"The simplest solution was simply this: wave goodbye to ",Object(a.b)("inlineCode",{parentName:"p"},"LICENSE")," files. If you haven't ejected from your ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app")," then this might be a problem. But since I had, I was able to make this tweak to the terser settings in the ",Object(a.b)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"new TerserPlugin({\n    /* TURN OFF LICENSE FILES - SEE https://github.com/facebook/create-react-app/issues/6441 */\n    extractComments: false,\n    /* TURN OFF LICENSE FILES - Tweak by John Reilly */\n    terserOptions: {\n        // ....\n")),Object(a.b)("p",null,"And with this we say goodbye to our ",Object(a.b)("inlineCode",{parentName:"p"},"404"),"s and hello to a resurrected PWA!"))}p.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,u=h["".concat(i,".").concat(d)]||h[d]||b[d]||a;return n?r.a.createElement(u,s(s({ref:t},l),{},{components:n})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
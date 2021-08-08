"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[82764],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"LICENSE to kill your PWA",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},l=void 0,c={permalink:"/2020/01/21/license-to-kill-your-pwa",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-01-21-license-to-kill-your-pwa.md",source:"@site/blog/2020-01-21-license-to-kill-your-pwa.md",title:"LICENSE to kill your PWA",description:"Update: 26/01/2020 - LICENSE to kill revoked!",date:"2020-01-21T00:00:00.000Z",formattedDate:"January 21, 2020",tags:[],readingTime:3.805,truncated:!1,prevItem:{title:"From create-react-app to PWA",permalink:"/2020/01/31/from-create-react-app-to-pwa"},nextItem:{title:"EF Core 3.1 breaks left join with no navigation property",permalink:"/2020/01/02/ef-core-31-breaks-left-join-with-no-navigation-property"}},p=[{value:"Update: 26/01/2020 - LICENSE to kill revoked!",id:"update-26012020---license-to-kill-revoked",children:[]},{value:"The tragedy",id:"the-tragedy",children:[]},{value:"The mystery",id:"the-mystery",children:[]},{value:"The investigation",id:"the-investigation",children:[]},{value:"The resolution",id:"the-resolution",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"update-26012020---license-to-kill-revoked"},"Update: 26/01/2020 - LICENSE to kill revoked!"),(0,o.kt)("p",null," Following the original publication of this post I received this tweet suggesting we should change the behaviour of the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"terser-webpack-plugin"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Send a PR to change the name to .LICENSE.txt by default."),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Tobias Koppers (@wSokra) ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/wSokra/status/1220069497660411904?ref_src=twsrc%5Etfw"},"January 22, 2020"))),(0,o.kt)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,o.kt)("p",null,"That seemed like an excellent idea! I raised ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/terser-webpack-plugin/pull/210"},"this PR")," which changes the behaviour such that instead of ",(0,o.kt)("inlineCode",{parentName:"p"},".LICENSE")," files being produced, ",(0,o.kt)("inlineCode",{parentName:"p"},".LICENSE.txt")," files are pumped out instead. Crucially they are IIS (and other servers) friendly. The great news is that future users of webpack / create-react-app etc will not face this problem at all; result!"),(0,o.kt)("h2",{id:"the-tragedy"},"The tragedy"),(0,o.kt)("p",null,"Recently my beloved PWA died. I didn't realise it at first. It wasn't until a week or so after the tragedy that I realised he'd gone. In his place was the stale memory of service workers gone by. Last week's code; cached and repeatedly served up to a disappointed audience. Terrible news."),(0,o.kt)("p",null,"What had happened? What indeed. The problem was quirky and (now that I know the answer) I'm going to share it with you. Because it's entirely non-obvious."),(0,o.kt)("h2",{id:"the-mystery"},"The mystery"),(0,o.kt)("p",null,"Once I realised that I was repeatedly being served up an old version of my PWA, I got to wondering.... Why? What's happening? What's wrong? What did I do? I felt bad. I stared at the ceiling. I sighed and opened my Chrome devtools. With no small amount of sadness I went to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," tab, hit ",(0,o.kt)("inlineCode",{parentName:"p"},"Service Workers")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Unregister"),"."),(0,o.kt)("p",null,"Then I hit refresh and took a look at console. I saw this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(37686).Z})),(0,o.kt)("p",null,'What does this mean? Something about a "bad-precaching-response". And apparently this was happening whilst trying to load this resource: ',(0,o.kt)("inlineCode",{parentName:"p"},"/static/js/6.20102e99.chunk.js.LICENSE?__WB_REVISION__=e2fc36")),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"404")," was preventing pre-caching from executing successfully. This was what was killing my PWA. This was the perpetrator. How to fix this? Read on!"),(0,o.kt)("h2",{id:"the-investigation"},"The investigation"),(0,o.kt)("p",null,"Time to find out what's going on. I dropped that URL into my browser to see what would happen. ",(0,o.kt)("inlineCode",{parentName:"p"},"404")," city man:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(74577).Z})),(0,o.kt)("p",null,"So, to disk. I took a look at what was actually on the server in that location. Sure enough, the file existed. When I opened it up I found this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n* A better abstraction over CSS.\n*\n* @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present\n* @website https://github.com/cssinjs/jss\n* @license MIT\n*/\n \n/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n \n/** @license React v16.12.0\n* react.production.min.js\n*\n* Copyright (c) Facebook, Inc. and its affiliates.\n*\n* This source code is licensed under the MIT license found in the\n* LICENSE file in the root directory of this source tree.\n*/\n \n/** @license React v16.12.0\n* react-dom.production.min.js\n*\n* Copyright (c) Facebook, Inc. and its affiliates.\n*\n* This source code is licensed under the MIT license found in the\n* LICENSE file in the root directory of this source tree.\n*/\n \n/** @license React v0.18.0\n* scheduler.production.min.js\n*\n* Copyright (c) Facebook, Inc. and its affiliates.\n*\n* This source code is licensed under the MIT license found in the\n* LICENSE file in the root directory of this source tree.\n*/\n \n/** @license React v16.12.0\n* react-is.production.min.js\n*\n* Copyright (c) Facebook, Inc. and its affiliates.\n*\n* This source code is licensed under the MIT license found in the\n* LICENSE file in the root directory of this source tree.\n*/\n")),(0,o.kt)("p",null,"What is this? Well, as the name of the file suggests, it's licenses. For some reason, my build was scraping the licenses from the head of some of my files and placing them in a separate ",(0,o.kt)("inlineCode",{parentName:"p"},"6.20102e99.chunk.js.LICENSE")," file. Doing some more digging I happened upon ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/6441"},"this discussion against the ",(0,o.kt)("inlineCode",{parentName:"a"},"create-react-app"))," project. It's worth saying, that my PWA was an ejected ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," project."),(0,o.kt)("p",null,"It turned out the the issue was related to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/terser-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"terser-webpack-plugin")),". The default behaviour performs this kind of license file extraction. The app was being served by an IIS server and it wasn't configured to support the ",(0,o.kt)("inlineCode",{parentName:"p"},".LICENSE")," file type."),(0,o.kt)("h2",{id:"the-resolution"},"The resolution"),(0,o.kt)("p",null,"The simplest solution was simply this: wave goodbye to ",(0,o.kt)("inlineCode",{parentName:"p"},"LICENSE")," files. If you haven't ejected from your ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," then this might be a problem. But since I had, I was able to make this tweak to the terser settings in the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new TerserPlugin({\n    /* TURN OFF LICENSE FILES - SEE https://github.com/facebook/create-react-app/issues/6441 */\n    extractComments: false,\n    /* TURN OFF LICENSE FILES - Tweak by John Reilly */\n    terserOptions: {\n        // ....\n")),(0,o.kt)("p",null,"And with this we say goodbye to our ",(0,o.kt)("inlineCode",{parentName:"p"},"404"),"s and hello to a resurrected PWA!"))}d.isMDXComponent=!0},37686:function(e,t){t.Z="data:image/png;base64,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"},74577:function(e,t,n){t.Z=n.p+"assets/images/LICENSE%2Bfile%2Bscrewing%2Bme%2Bover-cff6e57d87d8ca78f35b309b6de20e42.png"}}]);
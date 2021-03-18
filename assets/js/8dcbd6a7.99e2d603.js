(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(i,".").concat(u)]||b[u]||h[u]||r;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},780:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),r=(n(0),n(1170)),i={title:"Under the Duck: An Afternoon in Open Source",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["breaking changes","ts-loader","Webpack"],hide_table_of_contents:!1},s={permalink:"/2017/02/23/under-duck-afternoon-in-open-source",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-02-23-under-duck-afternoon-in-open-source.md",source:"@site/blog/2017-02-23-under-duck-afternoon-in-open-source.md",description:"Have you ever wondered what happens behind the scenes of open source projects? One that I'm involved with is ts-loader; a TypeScript loader for webpack. Yesterday was an interesting day in the life of ts-loader and webpack; things unexpectedly broke. Oh and don't worry, they're fixed now.",date:"2017-02-23T00:00:00.000Z",formattedDate:"February 23, 2017",tags:[{label:"breaking changes",permalink:"/tags/breaking-changes"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],title:"Under the Duck: An Afternoon in Open Source",readingTime:5.245,truncated:!1,prevItem:{title:"Debugging ASP.Net Core in VS or Code",permalink:"/2017/03/28/debugging-aspnet-core-in-vs-or-code"},nextItem:{title:"@types is rogue",permalink:"/2017/02/14/typescript-types-and-repeatable-builds"}},c=[{value:"3:55pm",id:"355pm",children:[]},{value:"16:12",id:"1612",children:[]},{value:"16:15",id:"1615",children:[]},{value:"17:28",id:"1728",children:[]},{value:"18:00",id:"1800",children:[]},{value:"18:15",id:"1815",children:[]},{value:"19:30",id:"1930",children:[]},{value:"20:30",id:"2030",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Have you ever wondered what happens behind the scenes of open source projects? One that I'm involved with is ",Object(r.b)("a",{parentName:"p",href:"https://github.com/typestrong/ts-loader"},"ts-loader"),"; a TypeScript loader for webpack. Yesterday was an interesting day in the life of ts-loader and webpack; things unexpectedly broke. Oh and don't worry, they're fixed now."),Object(r.b)("p",null," How things panned out reflects well on the webpack community. I thought it might be instructive to take a look at the legs furiously paddling underneath the duck of open source. What follows is a minute by minute account of my life on the afternoon of Wednesday 22nd February 2017:"),Object(r.b)("h3",{id:"355pm"},"3:55pm"),Object(r.b)("p",null," I'm sat at my desk in the City of London. I have to leave at 4pm to go to the dentist. I'm working away on a project which is built and bundled using ts-loader and webpack. However, having just npm installed and tried to spin up webpack in watch mode, I discover that everything is broken. Watch mode is not working - there's an error being thrown in ts-loader. It's to do with a webpack property called ",Object(r.b)("inlineCode",{parentName:"p"},"mtimes"),". ts-loader depends upon it and it looks like it is no longer always passed through. Go figure. ### 4:01pm"),Object(r.b)("p",null,"I've got to go. I'm 15 minutes from Bank station. So, I grab my bag and scarper out the door. On my phone I notice ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/issues/479"},"an issue")," has been raised - other people are being affected by the problem too. As I trot down the various alleys that lead to the station I wonder whether I can work around this issue. Using GitHub to fork, edit code and submit a PR on a mobile phone is possible. Just. But it's certainly not easy..."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/481"},"My PR is in"),", the various test packs are starting to execute somewhere out there in Travis and Appveyor-land. Then I notice ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mredbishop"},"Ed Bishop")," has submitted a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/480"},"near identical PR"),". Yay Ed! I'm always keen to encourage people to contribute and so I intend to merge that PR rather than my own."),Object(r.b)("h3",{id:"1612"},"16:12"),Object(r.b)("p",null,"Rubbish. The Waterloo and City Line is out of action. I need to get across London to reach Waterloo or I'll miss my appointment. It's time to start running...."),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4IBGernmtKA",frameBorder:"0",allowFullScreen:""}),Object(r.b)("h3",{id:"1615"},"16:15"),Object(r.b)("p",null,"It's rather nagging at me that behaviour has changed without warning. This has been reliably in place the entire time I've been involved with ts-loader / webpack. Why now? I don't see any obvious mentions on the webpack GitHub repo. So I head over to the webpack Slack channel and ask: (conversation slightly abridged)"),Object(r.b)("blockquote",null,Object(r.b)("h4",{parentName:"blockquote",id:"johnny_reilly"},"johnny","_","reilly"),Object(r.b)("p",{parentName:"blockquote"},"Hey all, has something happened to ",Object(r.b)("inlineCode",{parentName:"p"},"mtimes"),"? Behaviour seems to have changed - now undefined occasionally during watch mode. A PR has been raised against ts-loader to work around this ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/480#issuecomment-281714600"},"https://github.com/TypeStrong/ts-loader/pull/480#issuecomment-281714600")),Object(r.b)("p",{parentName:"blockquote"},"However I'm wondering if this should actually be merged given behaviour has changed unexpectedly"),Object(r.b)("h4",{parentName:"blockquote",id:"sokra"},"sokra"),Object(r.b)("p",{parentName:"blockquote"},"ah..."),Object(r.b)("p",{parentName:"blockquote"},"i removed it. I thought it was unused."),Object(r.b)("h4",{parentName:"blockquote",id:"johnny_reilly-1"},"johnny","_","reilly"),Object(r.b)("p",{parentName:"blockquote"},"It's definitely not!"),Object(r.b)("h4",{parentName:"blockquote",id:"sokra-1"},"sokra"),Object(r.b)("p",{parentName:"blockquote"},"it's not in the public API^^"),Object(r.b)("p",{parentName:"blockquote"},"Any reason why you are not using ",Object(r.b)("inlineCode",{parentName:"p"},"getTimes()"),"?"),Object(r.b)("p",{parentName:"blockquote"},"..."),Object(r.b)("h4",{parentName:"blockquote",id:"johnny_reilly-2"},"johnny","_","reilly"),Object(r.b)("p",{parentName:"blockquote"}," Okay, I'm on a train and won't be near a computer for a while. ts-loader is presently broken because it depends on mtimes. Would it be possible for you to add this back at least for now. I'm aware many people depend on ts-loader and are now broken. #### sokra"),Object(r.b)("p",{parentName:"blockquote"},"sure, I readd it but deprecate it."),Object(r.b)("p",{parentName:"blockquote"},"..."),Object(r.b)("h4",{parentName:"blockquote",id:"seanlarkin"},"sean.larkin"),Object(r.b)("p",{parentName:"blockquote"}," @sokra is this the change you just made for that watchpack bug fix? Or unlrelated, just wanted to track if I didn't already have the change/issue #### sokra"),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack/watchpack/pull/48"},"https://github.com/webpack/watchpack/pull/48")),Object(r.b)("h4",{parentName:"blockquote",id:"johnny_reilly-3"},"johnny","_","reilly"),Object(r.b)("p",{parentName:"blockquote"},"This is what the present code does:"),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"const watcher = watching.compiler.watchFileSystem.watcher || \n                watching.compiler.watchFileSystem.wfs.watcher\n")),Object(r.b)("p",{parentName:"blockquote"},"And then ",Object(r.b)("inlineCode",{parentName:"p"},".mtimes")),Object(r.b)("p",{parentName:"blockquote"},"Should I be able to do ",Object(r.b)("inlineCode",{parentName:"p"},".getTimes()")," instead?"),Object(r.b)("h4",{parentName:"blockquote",id:"sokra-2"},"sokra"),Object(r.b)("p",{parentName:"blockquote"},"actually you can't rely on ",Object(r.b)("inlineCode",{parentName:"p"},"watchFileSystem")," being ",Object(r.b)("inlineCode",{parentName:"p"},"NodeJsWatchFileSystem"),". But this is another topic"),Object(r.b)("p",{parentName:"blockquote"},"..."),Object(r.b)("p",{parentName:"blockquote"},"but yes"),Object(r.b)("h4",{parentName:"blockquote",id:"johnny_reilly-4"},"johnny","_","reilly"),Object(r.b)("p",{parentName:"blockquote"},"Thanks @sokra - when I get to a keyboard I'll swap ",Object(r.b)("inlineCode",{parentName:"p"},"mtimes")," for ",Object(r.b)("inlineCode",{parentName:"p"},"getTimes()")," and report back.")),Object(r.b)("h3",{id:"1728"},"17:28"),Object(r.b)("p",null,"Despite various trains being out of action / missing in action I've made it to the dentists; phew! I go in for my checkup and plan to take a look at the issue later that evening. In the meantime I've hoping that Tobias (",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/wsokra"},"Sokra"),") will get chance to republish so that ts-loader users aren't too impacted."),Object(r.b)("h3",{id:"1800"},"18:00"),Object(r.b)("p",null,"Done at the dentist and I'm heading home. Whilst I've been opening wide and squinting at the ceiling, ",Object(r.b)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2017/02/22/announcing-typescript-2-2/"},"TypeScript 2.2 has shipped"),". Whilst this is super exciting, according to Greenkeeper, ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/483"},"the new version has broken the build"),". Arrrrghhhh..."),Object(r.b)("p",null,"I start to look into this and realise we're not broken because of TypeScript 2.2; we were broken because of the ",Object(r.b)("inlineCode",{parentName:"p"},"mtimes"),". Tobias has now re-added ",Object(r.b)("inlineCode",{parentName:"p"},"mtimes")," and published. With that in place I requeue a build and.... drum roll.... we're green!"),Object(r.b)("p",null,"The good news just keeps on coming as ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/bancek"},"Luka Zakraj\u0161ek")," has submitted a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/482"},"PR which uses ",Object(r.b)("inlineCode",{parentName:"a"},"getTimes()")," in place of ",Object(r.b)("inlineCode",{parentName:"a"},"mtimes")),". And the tests pass. Awesome! MERGE. I just need to cut a release and we're done."),Object(r.b)("h3",{id:"1815"},"18:15"),Object(r.b)("p",null,"I'm home. My youngest son has been suffering from chicken pox all week and as a result my wife has been in isolation, taking care of him. We chat whilst the boys watch Paw Patrol as the bath runs. I flick open the laptop and start doing the various housekeeping tasks around cutting a release. This is interrupted by various bathtime / bedtime activities and I abandon work for now."),Object(r.b)("h3",{id:"1930"},"19:30"),Object(r.b)("p",null,"The boys are down and I get on with the release; updating the changelog, bumping the version number and running the tests. For various reasons this takes longer than it normally does."),Object(r.b)("h3",{id:"2030"},"20:30"),Object(r.b)("p",null,"Finally we're there; ts-loader 2.0.1 ships: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/releases/tag/v2.0.1"},"https://github.com/TypeStrong/ts-loader/releases/tag/v2.0.1"),"."),Object(r.b)("p",null,"I'm tremendously grateful to everyone that helped out - thank you all!"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"ts-loader 2.0.1 has shipped; thanks ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/wSokra"},"@wsokra"),Object(r.b)("a",{parentName:"p",href:"https://twitter.com/bancek"},"@bancek")," and @mredbishop ",Object(r.b)("a",{parentName:"p",href:"https://t.co/I00c7sJyFo"},"https://t.co/I00c7sJyFo"),Object(r.b)("a",{parentName:"p",href:"https://twitter.com/hashtag/typescript?src=hash"},"#","typescript")),Object(r.b)("p",{parentName:"blockquote"},"\u2014 John Reilly (@johnny","_","reilly) ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly/status/834515296077627392"},"February 22, 2017"))),Object(r.b)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}))}p.isMDXComponent=!0}}]);
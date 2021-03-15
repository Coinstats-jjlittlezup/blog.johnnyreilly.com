(window.webpackJsonp=window.webpackJsonp||[]).push([[864],{1166:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return a?o.a.createElement(h,l(l({ref:t},p),{},{components:a})):o.a.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},965:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(8),r=(a(0),a(1166)),i={title:"You Might Not Need thread-loader",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["HappyPack","thread-loader","fork-ts-checker-webpack-plugin","ts-loader","Webpack","fast builds"],hide_table_of_contents:!1},l={permalink:"/2018/12/22/you-might-not-need-thread-loader",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-12-22-you-might-not-need-thread-loader.md",source:"@site/blog/2018-12-22-you-might-not-need-thread-loader.md",description:"It all started with a GitHub issue. Ernst Ammann reported:",date:"2018-12-22T00:00:00.000Z",formattedDate:"December 22, 2018",tags:[{label:"HappyPack",permalink:"/tags/happy-pack"},{label:"thread-loader",permalink:"/tags/thread-loader"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"},{label:"fast builds",permalink:"/tags/fast-builds"}],title:"You Might Not Need thread-loader",readingTime:3.675,truncated:!1,prevItem:{title:"GitHub Actions and Yarn",permalink:"/2019/01/05/github-actions-and-yarn"},nextItem:{title:"Cache Rules Everything Around Me",permalink:"/2018/12/10/cache-rules-everything-around-me"}},c=[{value:"All I Want For Christmas is Faster Builds",id:"all-i-want-for-christmas-is-faster-builds",children:[]},{value:"<code>thread-loader</code>: Infinity War",id:"thread-loader-infinity-war",children:[]},{value:"&quot;Maybe You&#39;ve Thread Enough&quot;",id:"maybe-youve-thread-enough",children:[]}],p={toc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It all started with a GitHub issue. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/namics/webpack-config-plugins/issues/24"},"Ernst Ammann reported"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Without the thread-loader, compilation takes three to four times less time on changes. We could remove it.")),Object(r.b)("p",null,"If you're not aware of the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/namics/webpack-config-plugins"},Object(r.b)("inlineCode",{parentName:"a"},"webpack-config-plugins"))," project then I commend it to you. Famously, webpack configuration can prove tricky. ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-config-plugins")," borrows the idea of presets from Babel. It provides a number of pluggable webpack configurations which give a best practice setup for different webpack use cases. So if you're no expert with webpack and you want a good setup for building your TypeScript / Sass / JavaScript then ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-config-plugins")," has got your back."),Object(r.b)("p",null,"One of the people behind the project is the very excellent ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jantimon"},"Jan Nicklas")," who is well known for his work on the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jantimon/html-webpack-plugin"},Object(r.b)("inlineCode",{parentName:"a"},"html-webpack-plugin")),"."),Object(r.b)("p",null,"It was Jan who responded to Ernst's issue and decided to look into it."),Object(r.b)("h2",{id:"all-i-want-for-christmas-is-faster-builds"},"All I Want For Christmas is Faster Builds"),Object(r.b)("p",null,"Everyone wants fast builds. I do. You do. We all do. ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-config-plugins")," is about giving these to the user in a precooked package."),Object(r.b)("p",null,"There's a webpack loader called ",Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack-contrib/thread-loader"},Object(r.b)("inlineCode",{parentName:"a"},"thread-loader"))," which spawns multiple processes and splits up work between them. It was originally inspired by the work in the happypack project which does a similar thing."),Object(r.b)("p",null,"I wrote ",Object(r.b)("a",{parentName:"p",href:"https://medium.com/p/83cc568dea79"},"a blog post")," some time ago which gave details about ways to speed up your TypeScript builds by combining the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},Object(r.b)("inlineCode",{parentName:"a"},"ts-loader"))," project (which I manage) with the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},Object(r.b)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," project (which I'm heavily involved with)."),Object(r.b)("p",null,"That post was written back in the days of webpack 2 / 3. It advocated use of both ",Object(r.b)("inlineCode",{parentName:"p"},"happypack")," / ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," to drop your build times even further. As you'll see, now that we're well into the world of webpack 4 (with webpack 5 waiting in the wings) the advantage of ",Object(r.b)("inlineCode",{parentName:"p"},"happypack")," / ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," are no longer so profound."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"webpack-config-plugins")," follows the advice I set out in my post; it uses ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," in its pluggable configurations. Now, back to Ernst's issue."),Object(r.b)("h2",{id:"thread-loader-infinity-war"},Object(r.b)("inlineCode",{parentName:"h2"},"thread-loader"),": Infinity War"),Object(r.b)("p",null,"Jan quickly identified the problem. He did that rarest of things; he read the documentation which said:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// timeout for killing the worker processes when idle\n      // defaults to 500 (ms)\n      // can be set to Infinity for watching builds to keep workers alive\n      poolTimeout: 2000,\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-config-plugins")," configurations (running in watch mode) were subject to the thread loaders being killed after 500ms. They got resurrected when they were next needed; but that's not as instant as you might hope. Jan then did a test:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"(default pool - 30 runs - 1000 components ) average: 2.668068965517241\n(no thread-loader - 30 runs - 1000 components ) average: 1.2674137931034484\n(Infinity pool - 30 runs - 1000 components ) average: 1.371827586206896\n")),Object(r.b)("p",null,"This demonstrates that using ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," in watch mode with ",Object(r.b)("inlineCode",{parentName:"p"},"poolTimeout: Infinity")," performs significantly better than when it defaults to 500ms. But perhaps more significantly, not using ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," performs even better still."),Object(r.b)("h2",{id:"maybe-youve-thread-enough"},'"Maybe You\'ve Thread Enough"'),Object(r.b)("p",null,"When I tested using ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," in watch mode with ",Object(r.b)("inlineCode",{parentName:"p"},"poolTimeout: Infinity")," on my own builds I got the same benefit Jan had. I also got ",Object(r.b)("em",{parentName:"p"},"even")," more benefit from dropping ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," entirely."),Object(r.b)("p",null,"A likely reason for this benefit is that typically when you're developing, you're working on one file at a time. Hence you only transpile one file at a time:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://2.bp.blogspot.com/-u2nbxnUAJXQ/XB8y1mF6hoI/AAAAAAAANRU/biYIfBaDsDwnNA2jp_YLNrLBcXWITAM1ACPcBGAYYCw/s1600/ts-profile2.png"},"![null]","(<https://2.bp.blogspot.com/-u2nbxnUAJXQ/XB8y1mF6hoI/AAAAAAAANRU/biYIfBaDsDwnNA2jp_YLNrLBcXWITAM1ACPcBGAYYCw/s640/ts-profile2.png> =640x173)"),"So there's not a great deal of value that ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," can add here; mostly it's twiddling thumbs and adding an overhead. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack-contrib/thread-loader/blob/master/README.md#usage"},"To quote the docs:")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Each worker is a separate node.js process, which has an overhead of ","~","600ms. There is also an overhead of inter-process communication."),Object(r.b)("p",{parentName:"blockquote"},"Use this loader only for expensive operations!")),Object(r.b)("p",null,"Now, my build is not your build. I can't guarantee that you'll get the same results as Jan and I experienced; but I would encourage you to investigate if you're using ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," correctly and whether it's actually helping you. In these days of webpack 4+ perhaps it isn't."),Object(r.b)("p",null,"There are still scenarios where ",Object(r.b)("inlineCode",{parentName:"p"},"thread-loader")," still provides an advantage. It can speed up production builds. It can speed up the initial startup of watch mode. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack-contrib/thread-loader/pull/52"},"In fact Jan has subsequently actually improved the ",Object(r.b)("inlineCode",{parentName:"a"},"thread-loader")," to that specific end.")," Yay Jan!"),Object(r.b)("p",null,"If this is all too much for you, and you want to hand off the concern to someone else then perhaps all of this serves as a motivation to just sit back, put your feet up and start using ",Object(r.b)("a",{parentName:"p",href:"https://github.com/namics/webpack-config-plugins"},Object(r.b)("inlineCode",{parentName:"a"},"webpack-config-plugins"))," instead of doing your own configuration."))}s.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[638],{1186:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,d=b["".concat(i,".").concat(u)]||b[u]||h[u]||o;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},796:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(4),r=a(10),o=(a(0),a(1186)),i={title:"TypeScript and webpack: Watch It",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["TypeScript","watch API","Webpack"],hide_table_of_contents:!1},c={permalink:"/2019/01/13/typescript-and-webpack-watch-it",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-01-13-typescript-and-webpack-watch-it.md",source:"@site/blog/2019-01-13-typescript-and-webpack-watch-it.md",description:'All I ask for is a compiler and a tight feedback loop. Narrowing the gap between making a change to a program and seeing the effect of that is a productivity boon. The TypeScript team are wise cats and dig this. They\'ve taken strides to improve the developer experience of TypeScript users by introducing a "watch" API which can be leveraged by other tools. To quote the docs:',date:"2019-01-13T00:00:00.000Z",formattedDate:"January 13, 2019",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"watch API",permalink:"/tags/watch-api"},{label:"Webpack",permalink:"/tags/webpack"}],title:"TypeScript and webpack: Watch It",readingTime:2.38,truncated:!1,prevItem:{title:"WhiteList Proxying with ASP.Net Core",permalink:"/2019/02/22/whitelist-proxying-with-aspnet-core"},nextItem:{title:"GitHub Actions and Yarn",permalink:"/2019/01/05/github-actions-and-yarn"}},p=[{value:"You Can Watch Too",id:"you-can-watch-too",children:[]},{value:"Mary Poppins",id:"mary-poppins",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],l={toc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All I ask for is a compiler and a tight feedback loop. Narrowing the gap between making a change to a program and seeing the effect of that is a productivity boon. The TypeScript team are wise cats and dig this. They've taken strides to improve the developer experience of TypeScript users by ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#writing-an-incremental-program-watcher"},'introducing a "watch" API which can be leveraged by other tools'),". To quote the docs:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'TypeScript 2.7 introduces two new APIs: one for creating "watcher" programs that provide set of APIs to trigger rebuilds, and a "builder" API that watchers can take advantage of... This can speed up large projects with many files.')),Object(o.b)("p",null,"Recently the wonderful ",Object(o.b)("a",{parentName:"p",href:"https://github.com/0xorial"},"0xorial")," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/198"},"opened a PR to add support for the watch API")," to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},Object(o.b)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),"."),Object(o.b)("p",null,'I took this PR for a spin on a large project that I work on. With my machine, I was averaging 12 seconds between incremental builds. (I will charitably describe the machine in question as "challenged"; hobbled by one of the most aggressive virus checkers known to mankind. Fist bump InfoSec \ud83e\udd1c\ud83e\udd1b\ud83d\ude09) Switching to using the watch API dropped this to a mere 1.5 seconds!'),Object(o.b)("h2",{id:"you-can-watch-too"},"You Can Watch Too"),Object(o.b)("p",null,"0xorial's PR was merged toot suite and was been released as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v1.0.0-alpha.2"},Object(o.b)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin@1.0.0-alpha.2")),". If you'd like to take this for a spin then you can. Just:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Up your version of the plugin to ",Object(o.b)("inlineCode",{parentName:"li"},"fork-ts-checker-webpack-plugin@next")," in your ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")),Object(o.b)("li",{parentName:"ol"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"useTypescriptIncrementalApi: true")," to the plugin when you initialise it in your ",Object(o.b)("inlineCode",{parentName:"li"},"webpack.config.js"),".")),Object(o.b)("p",null,"That's it."),Object(o.b)("h2",{id:"mary-poppins"},"Mary Poppins"),Object(o.b)("p",null,"Sorry, I was trying to paint a word picture of something you might watch that was also comforting. Didn't quite work..."),Object(o.b)("p",null,'Anyway, you might be thinking "wait, just hold on a minute.... he said ',Object(o.b)("inlineCode",{parentName:"p"},"@next")," ","-"," I am ",Object(o.b)("em",{parentName:"p"},"not")," that bleeding edge.\" Well, it's not like that. Don't be scared."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," has merely been updated for webpack 5 (which is in alpha) and the ",Object(o.b)("inlineCode",{parentName:"p"},"@next")," reflects that. To be clear, the ",Object(o.b)("inlineCode",{parentName:"p"},"@next")," version of the plugin still supports (remarkably!) webpack 2, 3 and 4 as well as 5 alpha. Users of current and historic versions of webpack should feel safe using the ",Object(o.b)("inlineCode",{parentName:"p"},"@next")," version; for webpack 2, 3 and 4 expect stability. webpack 5 users should expect potential changes to align with webpack 5 as it progresses."),Object(o.b)("h2",{id:"roadmap"},"Roadmap"),Object(o.b)("p",null,"This is available now and we'd love for you to try it out. As you can see, at the moment it's opt-in. You have to explicitly choose to use the new behaviour. Depending upon how testing goes, we may look to make this the default behaviour for the plugin in future (assuming users are running a high enough version of TypeScript). It would be great to hear from people if they have any views on that, or feedback in general."),Object(o.b)("p",null,"Much \u2764\ufe0f y'all. And many thanks to the very excellent ",Object(o.b)("a",{parentName:"p",href:"https://github.com/0xorial"},"0xorial")," for the hard work."))}s.isMDXComponent=!0}}]);
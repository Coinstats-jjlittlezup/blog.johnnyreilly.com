(window.webpackJsonp=window.webpackJsonp||[]).push([[717],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=b(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||s[p]||a;return n?o.a.createElement(m,c(c({ref:t},i),{},{components:n})):o.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},847:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(8),a=(n(0),n(1170)),l={title:"Oh the Glamour of Open Source",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:[],hide_table_of_contents:!1},c={permalink:"/2017/08/30/oh-glamour-of-open-source",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-08-30-oh-glamour-of-open-source.md",source:"@site/blog/2017-08-30-oh-glamour-of-open-source.md",description:"Here's how my life panned out in the early hours of Wednesday 30th September 2017:",date:"2017-08-30T00:00:00.000Z",formattedDate:"August 30, 2017",tags:[],title:"Oh the Glamour of Open Source",readingTime:1.205,truncated:!1,prevItem:{title:"TypeScript + Webpack: Super Pursuit Mode",permalink:"/2017/09/07/typescript-webpack-super-pursuit-mode"},nextItem:{title:"Karma: From PhantomJS to Headless Chrome",permalink:"/2017/08/27/karma-from-phantomjs-to-headless-chrome"}},u=[],i={toc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here's how my life panned out in the early hours of Wednesday 30th September 2017:"),Object(a.b)("dl",null,Object(a.b)("dt",null,"2 am"),Object(a.b)("dd",null,"awoken by Lisette having a nightmare"),Object(a.b)("dt",null,"3 am"),Object(a.b)("dd",null,"gave up hope of getting back to sleep upstairs and headed for the sofa"),Object(a.b)("dt",null,"4 am"),Object(a.b)("dd",null,"still not asleep and discovered a serious gap in an open source project I help out with"),Object(a.b)("dt",null,"4:30 am"),Object(a.b)("dd",null," come up with idea for a fix"),Object(a.b)("dt",null,"4:45 am"),Object(a.b)("dd",null," accidentally delete a repo that I and many others care about from GitHub"),Object(a.b)("dt",null,"4:50 am"),Object(a.b)("dd",null," recover said repo from backups (sweet mercy how could I be so stupid?)"),Object(a.b)("dt",null,"4:55 am"),Object(a.b)("dd",null," actually succeed in cloning the repo I want to hack on "),Object(a.b)("dt",null,"5:30 am"),Object(a.b)("dd",null," implement fix and ",Object(a.b)("a",{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/43"},"send PR")),Object(a.b)("dt",null,"5:35 am"),Object(a.b)("dd",null," go for a walk round the river"),Object(a.b)("dt",null,"6:30 am"),Object(a.b)("dd",null," realise I didn't submit a test for the changed functionality"),Object(a.b)("dt",null,"6:35 am"),Object(a.b)("dd",null," write test only to discover I can't run the test pack on Windows"),Object(a.b)("dt",null,"6:40 am"),Object(a.b)("dd",null," add test to PR anyway so I can see test results when Travis runs on each commit."),Object(a.b)("dt",null,"7 am"),Object(a.b)("dd",null,"despair at the duration of my feedback loop, totally fail to get my tests to pass"),Object(a.b)("dt",null,"7:10 am"),Object(a.b)("dd",null," stub my toe really badly on a train set Benjamin has been busily assembling beneath my feet"),Object(a.b)("dt",null,"7:11 am"),Object(a.b)("dd",null," give in and literally beg the project owner in Paris to fix the tests for me. He takes pity on me and agrees. Possibly because I gave him emoji tulips \ud83c\udf37"),Object(a.b)("dt",null,"7:12 am"),Object(a.b)("dd",null," feel like a slight failure and profoundly tired.")),Object(a.b)("p",null,"Oh the glamour of open source."))}b.isMDXComponent=!0}}]);
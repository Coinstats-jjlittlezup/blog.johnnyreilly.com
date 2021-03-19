(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=a.a.createContext({}),c=function(e){var t=a.a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.a.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,b=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return n?a.a.createElement(b,s(s({ref:t},h),{},{components:n})):a.a.createElement(b,s({ref:t},h))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},857:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(8),o=(n(0),n(1170)),i={title:"Karma: From PhantomJS to Headless Chrome",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Chrome","Karma","PhantomJS","Headless"],hide_table_of_contents:!1},s={permalink:"/2017/08/27/karma-from-phantomjs-to-headless-chrome",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-08-27-karma-from-phantomjs-to-headless-chrome.md",source:"@site/blog/2017-08-27-karma-from-phantomjs-to-headless-chrome.md",description:"Like pretty much everyone else I've been using PhantomJS to run my JavaScript (or compiled-to-JS) unit tests. It's been great. So when I heard the news that PhantomJS was dead I was genuinely sad. However, the King is dead.... Long live the King! For there is a new hope; it's called Chrome Headless . It's not a separate version of Chrome; rather the ability to run Chrome without a UI is now baked into Google's favourite browser as of v59. (For those history buffs I might as well be clear: the main reason PhantomJS died is because Chrome Headless was in the works.)",date:"2017-08-27T00:00:00.000Z",formattedDate:"August 27, 2017",tags:[{label:"Chrome",permalink:"/tags/chrome"},{label:"Karma",permalink:"/tags/karma"},{label:"PhantomJS",permalink:"/tags/phantom-js"},{label:"Headless",permalink:"/tags/headless"}],title:"Karma: From PhantomJS to Headless Chrome",readingTime:1.905,truncated:!1,prevItem:{title:"Oh the Glamour of Open Source",permalink:"/2017/08/30/oh-glamour-of-open-source"},nextItem:{title:"A Haiku on the Problem with SemVer: Us",permalink:"/2017/07/29/a-haiku-on-problem-with-semver-us"}},l=[{value:"Making the Switch",id:"making-the-switch",children:[]},{value:"<code>package.json</code>",id:"packagejson",children:[]},{value:"<code>karma.conf.js</code>",id:"karmaconfjs",children:[]},{value:"Continuous Integration",id:"continuous-integration",children:[]}],h={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Like pretty much everyone else I've been using PhantomJS to run my JavaScript (or compiled-to-JS) unit tests. It's been great. So when I heard the news that ",Object(o.b)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=14105489"},"PhantomJS was dead")," I was genuinely sad. However, the King is dead.... Long live the King! For there is a new hope; it's called ",Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"Chrome Headless "),". It's not a separate version of Chrome; rather the ability to run Chrome without a UI is now baked into Google's favourite browser as of v59. (For those history buffs I might as well be clear: the main reason PhantomJS died is because Chrome Headless was in the works.)"),Object(o.b)("h2",{id:"making-the-switch"},"Making the Switch"),Object(o.b)("p",null,"As long as you're running Chrome v59 or greater then you can switch. I've just made ts-loader's execution test pack run with Chrome Headless instead of PhantomJS and I've rarely been happier. Honest. Some context: the execution test pack runs Jasmine unit tests via the ",Object(o.b)("a",{parentName:"p",href:"https://karma-runner.github.io/1.0/index.html"},"Karma test runner"),". The move was surprisingly easy and you can see just how minimal it was in the PR ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/611/files"},"here"),". If you want to migrate a test that runs tests via Karma then this will take you through what you need to do."),Object(o.b)("h2",{id:"packagejson"},Object(o.b)("inlineCode",{parentName:"h2"},"package.json")),Object(o.b)("p",null,"You no longer need ",Object(o.b)("inlineCode",{parentName:"p"},"phantomjs-prebuilt")," as a dev dependency of your project. That's the PhantomJS browser disappearing in the rear view mirror. Next we need to replace ",Object(o.b)("inlineCode",{parentName:"p"},"karma-phantomjs-launcher")," with ",Object(o.b)("inlineCode",{parentName:"p"},"karma-chrome-launcher"),". These packages are responsible for firing up the browser that the tests are run in and we no longer want to invoke PhantomJS; we're Chrome all the way baby."),Object(o.b)("h2",{id:"karmaconfjs"},Object(o.b)("inlineCode",{parentName:"h2"},"karma.conf.js")),Object(o.b)("p",null,"You need to tell Karma to use Chrome Headless instead of PhantomJS. You do that by replacing"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"browsers: [ 'PhantomJS' ],\n")),Object(o.b)("p",null,"with"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"browsers: [ 'ChromeHeadless' ],\n")),Object(o.b)("p",null,"That's it; job done!"),Object(o.b)("h2",{id:"continuous-integration"},"Continuous Integration"),Object(o.b)("p",null,"There's always one more thing isn't there? Yup, ts-loader has CI builds that run on ",Object(o.b)("a",{parentName:"p",href:"https://ci.appveyor.com/project/JohnReilly/ts-loader/branch/master"},"Windows with AppVeyor")," and ",Object(o.b)("a",{parentName:"p",href:"https://travis-ci.org/TypeStrong/ts-loader"},"Linux with Travis"),". The AppVeyor build went green on the first run; that's because Chrome is installed by default in the AppVeyor build environment. (yay!)"),Object(o.b)("p",null,"Travis went red. (boooo!) Travis doesn't have Chrome installed by default. But it's no biggie; you just need to tweak your ",Object(o.b)("inlineCode",{parentName:"p"},".travis.yml")," like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"dist: trusty\naddons:\n  chrome: stable\n")),Object(o.b)("p",null,"This includes Chrome in the Travis build environment. Green. Boom!"))}c.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[658],{721:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(958)),i={title:"Karma: From PhantomJS to Headless Chrome",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Chrome","Karma","PhantomJS","Headless"],hide_table_of_contents:!1},s={permalink:"/blog.johnnyreilly.com/2017/08/27/karma-from-phantomjs-to-headless-chrome",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-08-27-karma-from-phantomjs-to-headless-chrome.md",source:"@site/blog/2017-08-27-karma-from-phantomjs-to-headless-chrome.md",description:"Like pretty much everyone else I've been using PhantomJS to run my JavaScript (or compiled-to-JS) unit tests. It's been great. So when I heard the news that PhantomJS was dead I was genuinely sad. However, the King is dead.... Long live the King! For there is a new hope; it's called Chrome Headless . It's not a separate version of Chrome; rather the ability to run Chrome without a UI is now baked into Google's favourite browser as of v59. (For those history buffs I might as well be clear: the main reason PhantomJS died is because Chrome Headless was in the works.)",date:"2017-08-27T00:00:00.000Z",tags:[{label:"Chrome",permalink:"/blog.johnnyreilly.com/tags/chrome"},{label:"Karma",permalink:"/blog.johnnyreilly.com/tags/karma"},{label:"PhantomJS",permalink:"/blog.johnnyreilly.com/tags/phantom-js"},{label:"Headless",permalink:"/blog.johnnyreilly.com/tags/headless"}],title:"Karma: From PhantomJS to Headless Chrome",readingTime:1.9,truncated:!1,prevItem:{title:"Oh the Glamour of Open Source",permalink:"/blog.johnnyreilly.com/2017/08/30/oh-glamour-of-open-source"},nextItem:{title:"A Haiku on the Problem with SemVer: Us",permalink:"/blog.johnnyreilly.com/2017/07/29/a-haiku-on-problem-with-semver-us"}},l=[{value:"Making the Switch",id:"making-the-switch",children:[]},{value:"<code>package.json</code>",id:"packagejson",children:[]},{value:"<code>karma.conf.js</code>",id:"karmaconfjs",children:[]},{value:"Continuous Integration",id:"continuous-integration",children:[]}],h={toc:l};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Like pretty much everyone else I've been using PhantomJS to run my JavaScript (or compiled-to-JS) unit tests. It's been great. So when I heard the news that ",Object(a.b)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=14105489"},"PhantomJS was dead")," I was genuinely sad. However, the King is dead.... Long live the King! For there is a new hope; it's called ",Object(a.b)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"Chrome Headless "),". It's not a separate version of Chrome; rather the ability to run Chrome without a UI is now baked into Google's favourite browser as of v59. (For those history buffs I might as well be clear: the main reason PhantomJS died is because Chrome Headless was in the works.)"),Object(a.b)("h2",{id:"making-the-switch"},"Making the Switch"),Object(a.b)("p",null,"As long as you're running Chrome v59 or greater then you can switch. I've just made ts-loader's execution test pack run with Chrome Headless instead of PhantomJS and I've rarely been happier. Honest. Some context: the execution test pack runs Jasmine unit tests via the ",Object(a.b)("a",{parentName:"p",href:"https://karma-runner.github.io/1.0/index.html"},"Karma test runner"),". The move was surprisingly easy and you can see just how minimal it was in the PR ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/611/files"},"here"),". If you want to migrate a test that runs tests via Karma then this will take you through what you need to do."),Object(a.b)("h2",{id:"packagejson"},Object(a.b)("inlineCode",{parentName:"h2"},"package.json")),Object(a.b)("p",null,"You no longer need ",Object(a.b)("inlineCode",{parentName:"p"},"phantomjs-prebuilt")," as a dev dependency of your project. That's the PhantomJS browser disappearing in the rear view mirror. Next we need to replace ",Object(a.b)("inlineCode",{parentName:"p"},"karma-phantomjs-launcher")," with ",Object(a.b)("inlineCode",{parentName:"p"},"karma-chrome-launcher"),". These packages are responsible for firing up the browser that the tests are run in and we no longer want to invoke PhantomJS; we're Chrome all the way baby."),Object(a.b)("h2",{id:"karmaconfjs"},Object(a.b)("inlineCode",{parentName:"h2"},"karma.conf.js")),Object(a.b)("p",null,"You need to tell Karma to use Chrome Headless instead of PhantomJS. You do that by replacing"),Object(a.b)("pre",null,"   browsers: [ 'PhantomJS' ],"),Object(a.b)("p",null,"with"),Object(a.b)("pre",null,"   browsers: [ 'ChromeHeadless' ],"),Object(a.b)("p",null,"That's it; job done!"),Object(a.b)("h2",{id:"continuous-integration"},"Continuous Integration"),Object(a.b)("p",null,"There's always one more thing isn't there? Yup, ts-loader has CI builds that run on ",Object(a.b)("a",{parentName:"p",href:"https://ci.appveyor.com/project/JohnReilly/ts-loader/branch/master"},"Windows with AppVeyor")," and ",Object(a.b)("a",{parentName:"p",href:"https://travis-ci.org/TypeStrong/ts-loader"},"Linux with Travis"),". The AppVeyor build went green on the first run; that's because Chrome is installed by default in the AppVeyor build environment. (yay!)"),Object(a.b)("p",null,"Travis went red. (boooo!) Travis doesn't have Chrome installed by default. But it's no biggie; you just need to tweak your ",Object(a.b)("inlineCode",{parentName:"p"},".travis.yml")," like so:"),Object(a.b)("pre",null,"dist: trusty addons: chrome: stable"),Object(a.b)("p",null,"This includes Chrome in the Travis build environment. Green. Boom!"))}c.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=o.a.createContext({}),c=function(e){var t=o.a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return o.a.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,b=m["".concat(i,".").concat(p)]||m[p]||u[p]||a;return n?o.a.createElement(b,s(s({ref:t},h),{},{components:n})):o.a.createElement(b,s({ref:t},h))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<a;h++)i[h]=n[h];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
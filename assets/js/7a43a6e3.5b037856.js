(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{1166:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||r;return a?o.a.createElement(m,l(l({ref:t},u),{},{components:a})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},717:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(8),r=(a(0),a(1166)),i={title:"Gulp, npm, long paths and Visual Studio.... Fight!",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["npm","Visual Studio","long paths","gulp-angular-templatecache"],hide_table_of_contents:!1},l={permalink:"/2014/12/12/gulp-npm-long-paths-and-visual-studio-fight",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-12-12-gulp-npm-long-paths-and-visual-studio-fight.md",source:"@site/blog/2014-12-12-gulp-npm-long-paths-and-visual-studio-fight.md",description:"How I managed to gulp-angular-templatecache working inside Visual Studio",date:"2014-12-12T00:00:00.000Z",formattedDate:"December 12, 2014",tags:[{label:"npm",permalink:"/tags/npm"},{label:"Visual Studio",permalink:"/tags/visual-studio"},{label:"long paths",permalink:"/tags/long-paths"},{label:"gulp-angular-templatecache",permalink:"/tags/gulp-angular-templatecache"}],title:"Gulp, npm, long paths and Visual Studio.... Fight!",readingTime:2.71,truncated:!1,prevItem:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",permalink:"/2014/12/29/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1"},nextItem:{title:"What's in a (Domain) Name?",permalink:"/2014/12/05/whats-in-a-name"}},s=[{value:"<sub>How I managed to gulp-angular-templatecache working inside Visual Studio</sub>",id:"how-i-managed-to-gulp-angular-templatecache-working-inside-visual-studio",children:[]},{value:"It&#39;s Workaround Time!",id:"its-workaround-time",children:[]},{value:"The Future",id:"the-future",children:[]}],u={toc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"how-i-managed-to-gulp-angular-templatecache-working-inside-visual-studio"},Object(r.b)("sub",null,"How I managed to gulp-angular-templatecache working inside Visual Studio")),Object(r.b)("p",null," Every now and then something bites you unexpectedly. After a certain amount of pain, the answer comes to you and you know you want to save others from falling into the same deathtrap."),Object(r.b)("p",null,"There I was minding my own business and having a play with a Gulp plugin called ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/gulp-angular-templatecache"},"gulp-angular-templatecache"),'. If you\'re not aware of it, it "Concatenates and registers AngularJS templates in the $templateCache". I was planning to use it so that all the views in an ',Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/proverb-offline"},"Angular app of mine"),' were loaded up-front rather than on demand. (It\'s a first step in making an "offline-first" version of that particular app.)'),Object(r.b)("p",null,"I digress already. No sooner had I tapped in:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ps"},"npm install gulp-angular-templatecache --saveDev\n")),Object(r.b)("p",null,"Then I noticed my Visual Studio project was no longer compiling. It was dying a death on build with this error:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ps"},"ASPNETCOMPILER : error ASPRUNTIME: The specified path, file name, or both are too long. The fully qualified file name must be less than 260 characters, and the directory name must be less than 248 characters.\n")),Object(r.b)("p",null,"I was dimly aware that there were issues with the nested ",Object(r.b)("a",{parentName:"p",href:"https://github.com/joyent/node/issues/6960"},"node","_","modules")," leading to Windows-killing paths. This sounded just like that.... And it was! ",Object(r.b)("inlineCode",{parentName:"p"},"gulp-angular-templatecache")," had a dependency on ",Object(r.b)("inlineCode",{parentName:"p"},"gulp-footer")," which had a dependency on ",Object(r.b)("inlineCode",{parentName:"p"},"lodash.assign")," which had a dependency on ",Object(r.b)("inlineCode",{parentName:"p"},"lodash._basecreatecallback")," which had.... You see where I'm going? It seems that the lovely lodash has created the path from hell."),Object(r.b)("p",null,"For reasons that aren't particularly clear this kills Visual Studio's build process. This is slightly surprising given that our rogue path is sat in the ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," directory which isn't part of the project in Visual Studio. That being the case you'd imagine that you could do what you liked there. But no, it seems VS is a delicate flower and we must be careful not to offend. Strange."),Object(r.b)("h2",{id:"its-workaround-time"},"It's Workaround Time!"),Object(r.b)("p",null,"After a ",Object(r.b)("em",{parentName:"p"},"great deal")," of digging I found the answer nestled in the middle of an ",Object(r.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/24144479/761388"},"answer on Stack Overflow"),". To quote:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you will add \"lodash.bind\" module to your project's package.json as dependency it will be installed in one level with gulp and not as gulp's dependency")),Object(r.b)("p",null,"That's right, I just needed to tap enter this at the root of my project:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ps"},"npm install lodash.bind --saveDev\n")),Object(r.b)("p",null,"And all was sweetness and light once more - no more complaints from VS."),Object(r.b)("h2",{id:"the-future"},"The Future"),Object(r.b)("p",null,"It looks like lodash are ",Object(r.b)("a",{parentName:"p",href:"https://github.com/lodash/lodash-cli/issues/23"},"on course to address this issue"),". So one day this this workaround won't be necessary anymore which is good."),Object(r.b)("p",null,"However, the general long path issue concerning node / npm hasn't vanished for Windows users. Given VS 2015 is planning to make Gulp and Grunt 1st class citizens of Visual Studio I'm going to guess that sort of issue is likely to arise again and again for other packages. I'm hoping that means that someone will actually fix the underlying path issues that upset Windows with npm."),Object(r.b)("p",null,"It sounds like npm are planning to take ",Object(r.b)("a",{parentName:"p",href:"https://github.com/joyent/node/issues/6960#issuecomment-46704998"},"some steps")," which is great. But I can't be alone in having a slightly nagging feeling that Windows isn't quite a first class citizen for node / io / npm yet. I really hope it will become one."))}p.isMDXComponent=!0}}]);
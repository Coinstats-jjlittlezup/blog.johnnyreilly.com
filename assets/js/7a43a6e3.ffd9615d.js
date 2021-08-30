"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[76150],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return h},default:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Gulp, npm, long paths and Visual Studio.... Fight!",authors:"johnnyreilly",tags:["npm","Visual Studio","long paths","gulp-angular-templatecache"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2014/12/12/gulp-npm-long-paths-and-visual-studio-fight",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-12-12-gulp-npm-long-paths-and-visual-studio-fight.md",source:"@site/blog/2014-12-12-gulp-npm-long-paths-and-visual-studio-fight.md",title:"Gulp, npm, long paths and Visual Studio.... Fight!",description:"How I managed to gulp-angular-templatecache working inside Visual Studio",date:"2014-12-12T00:00:00.000Z",formattedDate:"December 12, 2014",tags:[{label:"npm",permalink:"/tags/npm"},{label:"Visual Studio",permalink:"/tags/visual-studio"},{label:"long paths",permalink:"/tags/long-paths"},{label:"gulp-angular-templatecache",permalink:"/tags/gulp-angular-templatecache"}],readingTime:2.71,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",permalink:"/2014/12/29/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1"},nextItem:{title:"What's in a (Domain) Name?",permalink:"/2014/12/05/whats-in-a-name"}},p={authorsImageUrls:[void 0]},h=[{value:"<sub>How I managed to gulp-angular-templatecache working inside Visual Studio</sub>",id:"how-i-managed-to-gulp-angular-templatecache-working-inside-visual-studio",children:[]},{value:"It&#39;s Workaround Time!",id:"its-workaround-time",children:[]},{value:"The Future",id:"the-future",children:[]}],c={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-i-managed-to-gulp-angular-templatecache-working-inside-visual-studio"},(0,r.kt)("sub",null,"How I managed to gulp-angular-templatecache working inside Visual Studio")),(0,r.kt)("p",null," Every now and then something bites you unexpectedly. After a certain amount of pain, the answer comes to you and you know you want to save others from falling into the same deathtrap."),(0,r.kt)("p",null,"There I was minding my own business and having a play with a Gulp plugin called ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/gulp-angular-templatecache"},"gulp-angular-templatecache"),'. If you\'re not aware of it, it "Concatenates and registers AngularJS templates in the $templateCache". I was planning to use it so that all the views in an ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/proverb-offline"},"Angular app of mine"),' were loaded up-front rather than on demand. (It\'s a first step in making an "offline-first" version of that particular app.)'),(0,r.kt)("p",null,"I digress already. No sooner had I tapped in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ps"},"npm install gulp-angular-templatecache --saveDev\n")),(0,r.kt)("p",null,"Then I noticed my Visual Studio project was no longer compiling. It was dying a death on build with this error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ps"},"ASPNETCOMPILER : error ASPRUNTIME: The specified path, file name, or both are too long. The fully qualified file name must be less than 260 characters, and the directory name must be less than 248 characters.\n")),(0,r.kt)("p",null,"I was dimly aware that there were issues with the nested ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/joyent/node/issues/6960"},"node","_","modules")," leading to Windows-killing paths. This sounded just like that.... And it was! ",(0,r.kt)("inlineCode",{parentName:"p"},"gulp-angular-templatecache")," had a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"gulp-footer")," which had a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash.assign")," which had a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash._basecreatecallback")," which had.... You see where I'm going? It seems that the lovely lodash has created the path from hell."),(0,r.kt)("p",null,"For reasons that aren't particularly clear this kills Visual Studio's build process. This is slightly surprising given that our rogue path is sat in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory which isn't part of the project in Visual Studio. That being the case you'd imagine that you could do what you liked there. But no, it seems VS is a delicate flower and we must be careful not to offend. Strange."),(0,r.kt)("h2",{id:"its-workaround-time"},"It's Workaround Time!"),(0,r.kt)("p",null,"After a ",(0,r.kt)("em",{parentName:"p"},"great deal")," of digging I found the answer nestled in the middle of an ",(0,r.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/24144479/761388"},"answer on Stack Overflow"),". To quote:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you will add \"lodash.bind\" module to your project's package.json as dependency it will be installed in one level with gulp and not as gulp's dependency")),(0,r.kt)("p",null,"That's right, I just needed to tap enter this at the root of my project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ps"},"npm install lodash.bind --saveDev\n")),(0,r.kt)("p",null,"And all was sweetness and light once more - no more complaints from VS."),(0,r.kt)("h2",{id:"the-future"},"The Future"),(0,r.kt)("p",null,"It looks like lodash are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lodash/lodash-cli/issues/23"},"on course to address this issue"),". So one day this this workaround won't be necessary anymore which is good."),(0,r.kt)("p",null,"However, the general long path issue concerning node / npm hasn't vanished for Windows users. Given VS 2015 is planning to make Gulp and Grunt 1st class citizens of Visual Studio I'm going to guess that sort of issue is likely to arise again and again for other packages. I'm hoping that means that someone will actually fix the underlying path issues that upset Windows with npm."),(0,r.kt)("p",null,"It sounds like npm are planning to take ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/joyent/node/issues/6960#issuecomment-46704998"},"some steps")," which is great. But I can't be alone in having a slightly nagging feeling that Windows isn't quite a first class citizen for node / io / npm yet. I really hope it will become one."))}d.isMDXComponent=!0}}]);
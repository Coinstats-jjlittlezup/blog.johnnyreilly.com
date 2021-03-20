(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(a,".").concat(f)]||u[f]||y[f]||o;return n?i.a.createElement(d,l(l({ref:t},c),{},{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},786:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),o=(n(0),n(1176)),a={title:"TypeScript: Don't forget Build Action for Implicit Referencing...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["TypeScriptCompile","BuildAction","DefinitelyTyped","TypeScript","NuGet"],hide_table_of_contents:!1},l={permalink:"/2013/11/04/typescript-dont-forget-build-action-for-implicit-referencing",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-11-04-typescript-dont-forget-build-action-for-implicit-referencing.md",source:"@site/blog/2013-11-04-typescript-dont-forget-build-action-for-implicit-referencing.md",description:"As part of the known breaking changes between 0.9 and 0.9.1 there was this subtle but significant switch:",date:"2013-11-04T00:00:00.000Z",formattedDate:"November 4, 2013",tags:[{label:"TypeScriptCompile",permalink:"/tags/type-script-compile"},{label:"BuildAction",permalink:"/tags/build-action"},{label:"DefinitelyTyped",permalink:"/tags/definitely-typed"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"NuGet",permalink:"/tags/nu-get"}],title:"TypeScript: Don't forget Build Action for Implicit Referencing...",readingTime:1.955,truncated:!1,prevItem:{title:"Rolling your own confirm mechanism using Promises and jQuery UI",permalink:"/2013/11/26/rolling-your-own-confirm-mechanism"},nextItem:{title:"Getting TypeScript Compile-on-Save and Continuous Integration to play nice",permalink:"/2013/10/30/getting-typescript-compile-on-save-and-continous-integration-to-play-nice"}},p=[{value:"Wrong!",id:"wrong",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As part of the ",Object(o.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/wikipage?title=Known%20breaking%20changes%20between%200.8%20and%200.9&referringTitle=Documentation"},"known breaking changes between 0.9 and 0.9.1")," there was this subtle but significant switch:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In Visual Studio, all TypeScript files in a project are considered to be referencing each other"),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Description:")," Previously, all TypeScript files in a project had to reference each other explicitly. With 0.9.1, they now implicitly reference all other TypeScript files in the project. For existing projects that fit multiple projects into a single projects, these will now have to be separate projects."),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Reason:")," This greatly simplifies using TypeScript in the project context.")),Object(o.b)("p",null,"Having been ",Object(o.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1471"},"initially resistant")," to this change I recently decided to give it a try. That is to say I started pulling out the ",Object(o.b)("inlineCode",{parentName:"p"},"/// &lt;reference"),"'s from my TypeScript files. However, to my surprise, pulling out these references stopped my TypeScript from compiling and killed my Intellisense. After wrestling with this for a couple of hours I finally ",Object(o.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1855"},"filed an issue on the TypeScript CodePlex site"),". (Because clearly the problem was with TypeScript and not how I was using it, right?)"),Object(o.b)("h2",{id:"wrong"},"Wrong!"),Object(o.b)("p",null,"When I looked through my typing files (","*",'.d.ts) I found that, pretty much without exception, all had a Build Action of "Content" and not "TypeScriptCompile". I went through the project and switched the files over to being "TypeScriptCompile". This resolved the issue and I was then able to pull out the remaining ',Object(o.b)("inlineCode",{parentName:"p"},"/// &lt;reference")," comments from the codebase (though I did have to restart Visual Studio to get the Intellisense working)."),Object(o.b)("p",null,"Most, if not all, of the typing files had been pulled in from NuGet and are part of the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped"},"DefinitelyTyped"),' project on GitHub. Unfortunately, at present, when TypeScript NuGet packages are added they are added without the "TypeScriptCompile" Build Action. I was going to post an issue there and ask if it\'s possible for NuGet packages to pull in typings files as "TypeScriptCompile" from the off - fortunately a chap called Natan Vivo ',Object(o.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/issues/1138"},"already has"),"."),Object(o.b)("p",null,"So until this issue is resolved it's probably a good idea to check that your TypeScript files are set to the correct Build Action in your project. And every time you upgrade your TypeScript NuGet packages double check that you still have the correct Build Action afterwards (and to get Intellisense working in VS 2012 at least you'll need to close and re-open the solution as well)."))}s.isMDXComponent=!0}}]);
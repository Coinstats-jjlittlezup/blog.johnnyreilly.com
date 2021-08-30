"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[86771],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,y=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"HotTowel-Angular meet TypeScript",authors:"johnnyreilly",tags:["HotTowel","TypeScript","AngularJS","JohnPapa"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2014/07/03/hottowel-angular-meet-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-07-03-hottowel-angular-meet-typescript.md",source:"@site/blog/2014-07-03-hottowel-angular-meet-typescript.md",title:"HotTowel-Angular meet TypeScript",description:"I've recently ported John Papa's popular Hot Towel Angular SPA Template to TypeScript. Why? Because it was there.",date:"2014-07-03T00:00:00.000Z",formattedDate:"July 3, 2014",tags:[{label:"HotTowel",permalink:"/tags/hot-towel"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"AngularJS",permalink:"/tags/angular-js"},{label:"JohnPapa",permalink:"/tags/john-papa"}],readingTime:2.715,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"AngularJS meet ASP.Net Server Validation",permalink:"/2014/08/01/angularjs-meet-aspnet-server-validation"},nextItem:{title:"A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch",permalink:"/2014/06/20/dates-DataAnnotations-and-data-impedance-mismatch"}},u={authorsImageUrls:[void 0]},c=[{value:"What is this port you speak of?",id:"what-is-this-port-you-speak-of",children:[]},{value:"What&#39;s in the repo?",id:"whats-in-the-repo",children:[{value:"1. sidebar.js&#39;s <code>getNavRoutes</code>",id:"1-sidebarjss-getnavroutes",children:[]}]},{value:"If you want to use this",id:"if-you-want-to-use-this",children:[]},{value:"Thanks",id:"thanks",children:[]}],h={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I've recently ported John Papa's popular ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnpapa/HotTowel-Angular"},"Hot Towel Angular SPA Template")," to TypeScript. Why? ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/George_Mallory"},"Because it was there.")),(0,r.kt)("p",null,"If you'd like to read more about HotTowel-Angular then have a read of ",(0,r.kt)("a",{parentName:"p",href:"http://www.johnpapa.net/hot-towel-angular/"},"John Papa's post"),". You can find my port on GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/HotTowel-Angular-TypeScript"},"here"),"."),(0,r.kt)("h2",{id:"what-is-this-port-you-speak-of"},"What is this port you speak of?"),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"intentionally")," a \"bare bones\" port of the HotTowel-Angular JavaScript code across to TypeScript. It's essentially the same code as John's - just with added type annotations (and yes it is ",(0,r.kt)("inlineCode",{parentName:"p"},"noImplicitAny")," compliant)."),(0,r.kt)("p",null,"You could, if you wanted to, go much further. You could start using a whole host of TypeScripts functionality: modules / classes / arrow functions... the whole shebang. But my port is deliberately not that; I didn't want to scare your horses... I wanted you to see how easy it is to move from JS to TS. And I'm standing on the shoulders of that great giant ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/john_papa"},"John Papa")," for that purpose."),(0,r.kt)("p",null,"If you wanted an example of how you might go further in an Angular port to TypeScript then you could take a look at my ",(0,r.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2014/06/migrating-from-angularjs-to-angularts.html"},"previous post")," on the topic."),(0,r.kt)("h2",{id:"whats-in-the-repo"},"What's in the repo?"),(0,r.kt)("p",null,"The repo contains the contents of HotTowel-Angular's app folder, with each JavaScript file converted over to TypeScript. The compiled JavaScript files are also included so that you can compare just how similar the compiled JavaScript is to John's original code."),(0,r.kt)("p",null,"In fact there are only 2 differences in the end:"),(0,r.kt)("h3",{id:"1-sidebarjss-getnavroutes"},"1","."," sidebar.js's ",(0,r.kt)("inlineCode",{parentName:"h3"},"getNavRoutes")),(0,r.kt)("p",null,"...had the filtering changed from this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"return r.config.settings && r.config.settings.nav;\n")),(0,r.kt)("p",null," to this: ```ts\nreturn (r.config.settings && r.config.settings.nav) ? true : false;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nThis was necessary as TypeScript insists that the array `filter` predicate returns a `boolean`. John's original method returns a number (`nav`'s value to be clear) which actually seems to work fine. My assumption is that JavaScript's filter method is happy with a truth-y / false-y test which John's implementation would satisfy.\n\n### 2\\. common.js's `$broadcast`\n\n...had to be given a rest parameter to satisfy the TS compiler. John's original method exposed no parameters as it just forwards on whatever arguments are passed to it. This means that `$broadcast` has a bit of unused code in the head of the generated method:\n\n```js\nvar args = [];\n    for (var _i = 0; _i < (arguments.length - 0); _i++) {\n        args[_i] = arguments[_i + 0];\n    }\n")),(0,r.kt)("h2",{id:"if-you-want-to-use-this"},"If you want to use this"),(0,r.kt)("p",null,"Then simply follow the instructions for installing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnpapa/HotTowel-Angular"},"HotTowel-Angular")," and then drop this repo's app folder over the one just created when HotTowel-Angular was installed. If you're using Visual Studio then make sure that you include the new TS files into your project and give them the ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildAction")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScriptCompile"),"."),(0,r.kt)("p",null,"You'll need the following NuGet packages for the relevant DefinitelyTyped Typings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ps"},"Install-Package angularjs.TypeScript.DefinitelyTyped\n    Install-Package angular-ui-bootstrap.TypeScript.DefinitelyTyped\n    Install-Package jquery.TypeScript.DefinitelyTyped\n    Install-Package spin.TypeScript.DefinitelyTyped\n    Install-Package toastr.TypeScript.DefinitelyTyped\n")),(0,r.kt)("p",null,"And you're good to go. If you're not using Visual Studio then you may need to add in some ",(0,r.kt)("inlineCode",{parentName:"p"},'&lt;reference path="angular.d.ts" /&gt;')," etc. statements to the TypeScript files as well."),(0,r.kt)("p",null,"If you're interested in the specific versions of the typings that I used then you can find them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages.config")," of the repo."),(0,r.kt)("h2",{id:"thanks"},"Thanks"),(0,r.kt)("p",null,"To John Papa for creating HotTowel-Angular. Much love."),(0,r.kt)("p",null,"And my mum too... Just because."))}d.isMDXComponent=!0}}]);
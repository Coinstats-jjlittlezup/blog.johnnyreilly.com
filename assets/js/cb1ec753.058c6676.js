(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[13265],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return c},kt:function(){return m}});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(i),m=o,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return i?n.createElement(d,a(a({ref:t},c),{},{components:i})):n.createElement(d,a({ref:t},c))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},79530:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n,o=i(22122),r=i(19756),a=(i(67294),i(3905)),s=["components"],l={title:"Hey tsconfig.json, where have you been all my life?",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["tsconfig.json","TypeScript","implicit references"],hide_table_of_contents:!1},p=void 0,c={permalink:"/2015/02/27/hey-tsconfigjson-where-have-you-been",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-02-27-hey-tsconfigjson-where-have-you-been.md",source:"@site/blog/2015-02-27-hey-tsconfigjson-where-have-you-been.md",title:"Hey tsconfig.json, where have you been all my life?",description:"Sometimes, you just miss things. Something seismic happens and you had no idea. So it was with tsconfig.json.",date:"2015-02-27T00:00:00.000Z",formattedDate:"February 27, 2015",tags:[{label:"tsconfig.json",permalink:"/tags/tsconfig-json"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"implicit references",permalink:"/tags/implicit-references"}],readingTime:4.38,truncated:!1,prevItem:{title:"PartialView.ToString()",permalink:"/2015/03/20/partialview-tostring"},nextItem:{title:"Using Gulp to inject scripts and styles tags directly into your HTML",permalink:"/2015/02/17/using-gulp-in-asp-net-instead-of-web-optimization"}},u=[{value:"Implicit Referencing",id:"implicit-referencing",children:[]},{value:"Cross-IDE TypeScript projects",id:"cross-ide-typescript-projects",children:[]},{value:"<code>tsconfig.json</code>",id:"tsconfigjson",children:[]}],h=(n="TypeScriptEnabled",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes, you just miss things. Something seismic happens and you had no idea. So it was with ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,a.kt)("p",null,' This blog post started life with the name "TypeScript: Some IDEs are more equal than others". I\'d intended to use it summarise a discussion on the ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/1066"},"TypeScript GitHub repo")," about implicit referencing including a fist shaken at the sky at the injustice of it all. But whilst I was writing it I dicovered things had changed without my knowledge. That's a rather wonderful thing."),(0,a.kt)("h2",{id:"implicit-referencing"},"Implicit Referencing"),(0,a.kt)("p",null,"Implicit referencing, if you're not aware, is the thing that separates Visual Studio from all other IDEs / text editors. Implicit referencing means that in Visual Studio you don't need to make use of comments at the head of each TypeScript file in order to tell the compiler where it can find the related TypeScript files."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"reference")," comments aren't necessary when using Visual Studio because the VS project file is used to drive the files passed to the TypeScript compiler (tsc)."),(0,a.kt)("p",null,"The upshot of this is that, at time of writing, you can generally look at a TypeScript codebase and tell whether it was written using Visual Studio by opening it up a file at random and eyeballing for something like this at the top:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/// <reference path="other-file.ts" />\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'"A-ha! They\'re using "reference" comments Watson. From this I deduce that the individuals in question are using the internal module approach and using Visual Studio as their IDE. Elementary, my dear fellow, quite elementary."')),(0,a.kt)("p",null,"This has important implications. Important I tell you, yes important! Well, important if you want to reduce the barriers between Visual Studio and everyone else. And I do. Whilst I love Visual Studio - it's been my daily workhorse for many years - I also love stepping away from it and using something more stripped down. I also like working with other people without mandating that they need to use Visual Studio as well. In the words of Rodney King, \"can't we all get along?\"."),(0,a.kt)("h2",{id:"cross-ide-typescript-projects"},"Cross-IDE TypeScript projects"),(0,a.kt)("p",null,"I feel I should be clear - you can already set up TypeScript projects to work regardless of IDE. But there's friction. It's not clear cut. You can see a full on discussion around this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/1066"},"here")," but in the end it comes down to making a choice between these 3 options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)(h,{mdxType:"TypeScriptEnabled"},"false")," in a project file. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/issues/1066#issuecomment-63727612"},"This flag effectively deactivates implicit referencing.")," This approach requires that all developers (regardless of IDE) use ",(0,a.kt)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s to build context. Compiler options in VS can be controlled using the project file as is."),(0,a.kt)("li",{parentName:"ol"},"Using Visual Studio without any csproj tweaks. This approach requires that all files will need ",(0,a.kt)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s at their heads in order to build compilation context ",(0,a.kt)("em",{parentName:"li"},"outside")," of Visual Studio. It's possible that ",(0,a.kt)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s and the csproj could get out of line - care is required to avoid this. Compiler options in VS can be controlled using the project file as is."),(0,a.kt)("li",{parentName:"ol"},"Using just files in Visual Studio with ",(0,a.kt)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s to build compilation context. This scenario also requires that all developers (regardless of IDE) use ",(0,a.kt)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s to build context. In Visual Studio there will be no control over compiler options.")),(0,a.kt)("p",null,"As you can see - this is sub-optimal. But don't worry - there's a new sheriff in town...."),(0,a.kt)("h2",{id:"tsconfigjson"},(0,a.kt)("inlineCode",{parentName:"h2"},"tsconfig.json")),(0,a.kt)("p",null,"I'd decided to give ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/atom-typescript"},"Atom TypeScript plugin")," a go as I heard much enthusiastic noise about it. I fired it up and pointed it at a a TypeScript AngularJS project built in Visual Studio. I was mentally preparing myself for the job of adding all the /// references in when I suddenly noticed a file blinking at me: ",(0,a.kt)("img",{src:i(18291).Z})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"? What's that? Time to read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/atom-typescript#project-support"},"the docs"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Supported via tsconfig.json (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md"},"read more"),") which is going to be the defacto Project file format for the next versions of TypeScript.")),(0,a.kt)("p",null,'"read more"? Oh yes indeedy - I think I will "read more"!'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A unified project format for TypeScript (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/pull/1692"},"see merged PR on Microsoft/TypeScript"),"). The TypeScript compiler (1.4 and above) only cares about compilerOptions and files. We add additional features to this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/1955"},"with the typescript team's approval to extend the file as long as we don't conflict:")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/atom-typescript/blob/e2fa67c4715189b71430f766ed9a92d9fb3255f9/lib/main/tsconfig/tsconfig.ts#L8-L35"},"compilerOptions")," similar to what you would pass on the commandline to tsc. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md#filesglob"},"filesGlob"),": To make it easier for you to just add / remove files in your project we add filesGlob which accepts an array of glob / minimatch / RegExp patterns (similar to grunt)to specify source files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md#format"},"format"),": Code formatting options"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md#version"},"version"),": The TypeScript version"))),(0,a.kt)("p",null,"That's right folks, we don't need ",(0,a.kt)("inlineCode",{parentName:"p"},"/// &lt;reference"),"s comments anymore. In a blinding flash of light it all changes. We're going from the dark end of the street, to the bright side of the road. ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," is here to ease away the pain and make it all better. Let's enjoy it while we can."),(0,a.kt)("p",null,"This change should ship with TypeScript 1.5 (hopefully) for those using Visual Studio. For those using Atom TypeScript (and as of today that's includes me) the carnival celebrations can begin now!"),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/basarat"},"@basarat")," who have quoted at length and ",(0,a.kt)("a",{parentName:"p",href:"https://smellegantcode.wordpress.com/"},"Daniel Earwicker")," who is the reason that I came to discover ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."))}d.isMDXComponent=!0},18291:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Screenshot%2B2015-02-27%2B16.05.29-8aa0ba44c9403d1f59ea0a77d1201bd6.png"}}]);
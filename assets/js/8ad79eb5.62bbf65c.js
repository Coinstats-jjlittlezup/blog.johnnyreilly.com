(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{1166:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return m}));var n=i(0),o=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(i),h=n,m=u["".concat(a,".").concat(h)]||u[h]||b[h]||r;return i?o.a.createElement(m,s(s({ref:t},l),{},{components:i})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<r;l++)a[l]=i[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},772:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return s})),i.d(t,"metadata",(function(){return c})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return b}));var n,o=i(3),r=i(8),a=(i(0),i(1166)),s={title:"Hey tsconfig.json, where have you been all my life?",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["tsconfig.json","TypeScript","implicit references"],hide_table_of_contents:!1},c={permalink:"/2015/02/27/hey-tsconfigjson-where-have-you-been",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-02-27-hey-tsconfigjson-where-have-you-been.md",source:"@site/blog/2015-02-27-hey-tsconfigjson-where-have-you-been.md",description:"Sometimes, you just miss things. Something seismic happens and you had no idea. So it was with tsconfig.json.",date:"2015-02-27T00:00:00.000Z",formattedDate:"February 27, 2015",tags:[{label:"tsconfig.json",permalink:"/tags/tsconfig-json"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"implicit references",permalink:"/tags/implicit-references"}],title:"Hey tsconfig.json, where have you been all my life?",readingTime:4.4,truncated:!1,prevItem:{title:"PartialView.ToString()",permalink:"/2015/03/20/partialview-tostring"},nextItem:{title:"Using Gulp to inject scripts and styles tags directly into your HTML",permalink:"/2015/02/17/using-gulp-in-asp-net-instead-of-web-optimization"}},l=[{value:"Implicit Referencing",id:"implicit-referencing",children:[]},{value:"Cross-IDE TypeScript projects",id:"cross-ide-typescript-projects",children:[]},{value:"<code>tsconfig.json</code>",id:"tsconfigjson",children:[]}],p=(n="TypeScriptEnabled",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),u={toc:l};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sometimes, you just miss things. Something seismic happens and you had no idea. So it was with ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),Object(a.b)("p",null,' This blog post started life with the name "TypeScript: Some IDEs are more equal than others". I\'d intended to use it summarise a discussion on the ',Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/1066"},"TypeScript GitHub repo")," about implicit referencing including a fist shaken at the sky at the injustice of it all. But whilst I was writing it I dicovered things had changed without my knowledge. That's a rather wonderful thing."),Object(a.b)("h2",{id:"implicit-referencing"},"Implicit Referencing"),Object(a.b)("p",null,"Implicit referencing, if you're not aware, is the thing that separates Visual Studio from all other IDEs / text editors. Implicit referencing means that in Visual Studio you don't need to make use of comments at the head of each TypeScript file in order to tell the compiler where it can find the related TypeScript files."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," comments aren't necessary when using Visual Studio because the VS project file is used to drive the files passed to the TypeScript compiler (tsc)."),Object(a.b)("p",null,"The upshot of this is that, at time of writing, you can generally look at a TypeScript codebase and tell whether it was written using Visual Studio by opening it up a file at random and eyeballing for something like this at the top:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'/// <reference path="other-file.ts" />\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},'"A-ha! They\'re using "reference" comments Watson. From this I deduce that the individuals in question are using the internal module approach and using Visual Studio as their IDE. Elementary, my dear fellow, quite elementary."')),Object(a.b)("p",null,"This has important implications. Important I tell you, yes important! Well, important if you want to reduce the barriers between Visual Studio and everyone else. And I do. Whilst I love Visual Studio - it's been my daily workhorse for many years - I also love stepping away from it and using something more stripped down. I also like working with other people without mandating that they need to use Visual Studio as well. In the words of Rodney King, \"can't we all get along?\"."),Object(a.b)("h2",{id:"cross-ide-typescript-projects"},"Cross-IDE TypeScript projects"),Object(a.b)("p",null,"I feel I should be clear - you can already set up TypeScript projects to work regardless of IDE. But there's friction. It's not clear cut. You can see a full on discussion around this ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/1066"},"here")," but in the end it comes down to making a choice between these 3 options:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Set ",Object(a.b)(p,{mdxType:"TypeScriptEnabled"},"false")," in a project file. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/issues/1066#issuecomment-63727612"},"This flag effectively deactivates implicit referencing.")," This approach requires that all developers (regardless of IDE) use ",Object(a.b)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s to build context. Compiler options in VS can be controlled using the project file as is."),Object(a.b)("li",{parentName:"ol"},"Using Visual Studio without any csproj tweaks. This approach requires that all files will need ",Object(a.b)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s at their heads in order to build compilation context ",Object(a.b)("em",{parentName:"li"},"outside")," of Visual Studio. It's possible that ",Object(a.b)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s and the csproj could get out of line - care is required to avoid this. Compiler options in VS can be controlled using the project file as is."),Object(a.b)("li",{parentName:"ol"},"Using just files in Visual Studio with ",Object(a.b)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s to build compilation context. This scenario also requires that all developers (regardless of IDE) use ",Object(a.b)("inlineCode",{parentName:"li"},"/// &lt;reference"),"s to build context. In Visual Studio there will be no control over compiler options.")),Object(a.b)("p",null,"As you can see - this is sub-optimal. But don't worry - there's a new sheriff in town...."),Object(a.b)("h2",{id:"tsconfigjson"},Object(a.b)("inlineCode",{parentName:"h2"},"tsconfig.json")),Object(a.b)("p",null,"I'd decided to give ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/atom-typescript"},"Atom TypeScript plugin")," a go as I heard much enthusiastic noise about it. I fired it up and pointed it at a a TypeScript AngularJS project built in Visual Studio. I was mentally preparing myself for the job of adding all the /// references in when I suddenly noticed a file blinking at me: ",Object(a.b)("a",{parentName:"p",href:"http://3.bp.blogspot.com/-cK80o3-ysP0/VPCV9fxtwXI/AAAAAAAAAzA/HC8uY9wjB7s/s1600/Screenshot%2B2015-02-27%2B16.05.29.png"},Object(a.b)("img",{parentName:"a",src:"http://3.bp.blogspot.com/-cK80o3-ysP0/VPCV9fxtwXI/AAAAAAAAAzA/HC8uY9wjB7s/s640/Screenshot%2B2015-02-27%2B16.05.29.png",alt:"null"}))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"? What's that? Time to read ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/atom-typescript#project-support"},"the docs"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Supported via tsconfig.json (",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md"},"read more"),") which is going to be the defacto Project file format for the next versions of TypeScript.")),Object(a.b)("p",null,'"read more"? Oh yes indeedy - I think I will "read more"!'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A unified project format for TypeScript (",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/pull/1692"},"see merged PR on Microsoft/TypeScript"),"). The TypeScript compiler (1.4 and above) only cares about compilerOptions and files. We add additional features to this ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/1955"},"with the typescript team's approval to extend the file as long as we don't conflict:")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/TypeStrong/atom-typescript/blob/e2fa67c4715189b71430f766ed9a92d9fb3255f9/lib/main/tsconfig/tsconfig.ts#L8-L35"},"compilerOptions")," similar to what you would pass on the commandline to tsc. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md#filesglob"},"filesGlob"),": To make it easier for you to just add / remove files in your project we add filesGlob which accepts an array of glob / minimatch / RegExp patterns (similar to grunt)to specify source files."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md#format"},"format"),": Code formatting options"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md#version"},"version"),": The TypeScript version"))),Object(a.b)("p",null,"That's right folks, we don't need ",Object(a.b)("inlineCode",{parentName:"p"},"/// &lt;reference"),"s comments anymore. In a blinding flash of light it all changes. We're going from the dark end of the street, to the bright side of the road. ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," is here to ease away the pain and make it all better. Let's enjoy it while we can."),Object(a.b)("p",null,"This change should ship with TypeScript 1.5 (hopefully) for those using Visual Studio. For those using Atom TypeScript (and as of today that's includes me) the carnival celebrations can begin now!"),Object(a.b)("p",null,"Thanks to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/basarat"},"@basarat")," who have quoted at length and ",Object(a.b)("a",{parentName:"p",href:"https://smellegantcode.wordpress.com/"},"Daniel Earwicker")," who is the reason that I came to discover ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"."))}b.isMDXComponent=!0}}]);
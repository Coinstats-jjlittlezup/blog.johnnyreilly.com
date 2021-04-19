(window.webpackJsonp=window.webpackJsonp||[]).push([[713],{1210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(h,s(s({ref:t},c),{},{components:n})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(4),o=n(10),a=(n(0),n(1210)),i={title:"TypeScript: Spare the Rod, Spoil the Code",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["tsconfig.json","TypeScript"],hide_table_of_contents:!1},s={permalink:"/2017/05/20/typescript-spare-rod-spoil-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-05-20-typescript-spare-rod-spoil-code.md",source:"@site/blog/2017-05-20-typescript-spare-rod-spoil-code.md",title:"TypeScript: Spare the Rod, Spoil the Code",description:"I've recently started a new role. Perhaps unsurprisingly, part of the technology stack is TypeScript. A couple of days into the new codebase I found a bug. Well, I say I found a bug, TypeScript and VS Code found the bug - I just let everyone else know.",date:"2017-05-20T00:00:00.000Z",formattedDate:"May 20, 2017",tags:[{label:"tsconfig.json",permalink:"/tags/tsconfig-json"},{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:2.085,truncated:!1,prevItem:{title:"Windows Defender Step Away From npm",permalink:"/2017/06/11/windows-defender-step-away-from-npm"},nextItem:{title:"Setting Build Version Using AppVeyor and ASP.Net Core",permalink:"/2017/04/25/setting-build-version-using-appveyor"}},l=[],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I've recently started a new role. Perhaps unsurprisingly, part of the technology stack is TypeScript. A couple of days into the new codebase I found a bug. Well, I say I found a bug, TypeScript and VS Code found the bug - I just let everyone else know."),Object(a.b)("p",null,' The flexibility that TypeScript offers in terms of compiler settings is second to none. You can turn up the dial of strictness to your hearts content. Or down. I\'m an "up" man myself.'),Object(a.b)("p",null,"The project that I am working on has the dial set fairly low; it's pretty much using the default compiler values which are (sensibly) not too strict. I have to say this makes sense for helping people get on board with using TypeScript. Start from a point of low strictness and turn it up when you're ready. As you might have guessed, I cranked the dial up on day one on my own machine. I should say that as I did this, I didn't foist this on the project at large - I kept it just to my build... I'm not ","*",Object(a.b)("strong",{parentName:"p"},"that"),"*"," guy!"),Object(a.b)("p",null,"I made the below changes to the ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file. Details of what each of these settings does can be found in the documentation ",Object(a.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html"},"here"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"noImplicitAny": true,\n    "noImplicitThis": true,\n    "noUnusedLocals": true,\n    "noImplicitReturns": true,\n    "noUnusedParameters": true,\n')),Object(a.b)("p",null,"I said I found a bug. The nature of the bug was an unused variable; a variable was created in a function but then not used. Here's a super simple example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"function sayHi(name: string) {\n    const greeting = `Hi ${ name }`;\n    return name;\n}\n")),Object(a.b)("p",null,"It's an easy mistake to make. I've made this mistake before myself. But with the ",Object(a.b)("inlineCode",{parentName:"p"},"noUnusedLocals")," compiler setting in place it's now an easy mistake to catch; VS Code lets you know loud and clear:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-EgsBVxOeD88/WR_NvmhT0dI/AAAAAAAAEzk/LXOWhJyGGDEhr-AmLGqPjRbARQEB6h_ZwCPcB/s400/Screenshot%2B2017-05-20%2B05.58.54.png",alt:null})),Object(a.b)("p",null,"The other compiler settings will similarly highlight simple mistakes it's possible to make and I'd recommend using them. I should say I've written this from the perspective of a VS Code user, but this really applies generally to TypeScript usage. So whether you're an ",Object(a.b)("a",{parentName:"p",href:"http://alm.tools/"},"alm.tools")," guy, a WebStorm gal or something else entirely then this too can be yours!"),Object(a.b)("p",null,"I'd also say that the ",Object(a.b)("inlineCode",{parentName:"p"},"strictNullChecks")," compiler setting is worth looking into. However, switching an already established project to using that can involve fairly extensive code changes and will also require a certain amount of education of, and buy in from, your team. So whilst I'd recommend it too, I'd save that one until last."))}p.isMDXComponent=!0}}]);
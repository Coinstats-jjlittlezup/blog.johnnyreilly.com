(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{1186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||h[d]||i;return n?a.a.createElement(m,s(s({ref:t},p),{},{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(4),a=n(10),i=(n(0),n(1186)),o={title:"Upgrading to TypeScript 0.9.5 - A Personal Memoir",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Q","TypeScript","0.9.1.1","0.9.5","upgrading"],hide_table_of_contents:!1},s={permalink:"/2014/01/09/upgrading-to-typescript-095-personal",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-01-09-upgrading-to-typescript-095-personal.md",source:"@site/blog/2014-01-09-upgrading-to-typescript-095-personal.md",description:"I recently made the step to upgrade from TypeScript 0.9.1.1 to 0.9.5. To my surprise this process was rather painful and certainly not an unalloyed pleasure. Since I'm now on the other side, so to speak, I thought I'd share my experience and cast back a rope bridge to those about to journey over the abyss.",date:"2014-01-09T00:00:00.000Z",formattedDate:"January 9, 2014",tags:[{label:"Q",permalink:"/tags/q"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"0.9.1.1",permalink:"/tags/0-9-1-1"},{label:"0.9.5",permalink:"/tags/0-9-5"},{label:"upgrading",permalink:"/tags/upgrading"}],title:"Upgrading to TypeScript 0.9.5 - A Personal Memoir",readingTime:7.73,truncated:!1,prevItem:{title:"Integration Testing with Entity Framework and Snapshot Backups",permalink:"/2014/01/24/integration-testing-with-entity"},nextItem:{title:"NuGet and WebMatrix: How to install a specific version of a package",permalink:"/2013/12/13/nuget-and-webmatrix-how-to-install"}},l=[{value:"TL;DR",id:"tldr",children:[]},{value:"Upgrading the Plugin",id:"upgrading-the-plugin",children:[]},{value:"Declaration Merging is dead... Sort of",id:"declaration-merging-is-dead-sort-of",children:[]},{value:"The Promised Land",id:"the-promised-land",children:[]}],p={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I recently made the step to upgrade from TypeScript 0.9.1.1 to 0.9.5. To my surprise this process was rather painful and certainly not an unalloyed pleasure. Since I'm now on the other side, so to speak, I thought I'd share my experience and cast back a rope bridge to those about to journey over the abyss."),Object(i.b)("h2",{id:"tldr"},"TL;DR"),Object(i.b)("p",null,"TypeScript 0.9.5 is worth making the jump to. However, if you are using Visual Studio (as I would guess many are) then you should be aware of a number of problems with the TypeScript Visual Studio tooling for TS 0.9.5. These problems can be worked around if you follow the instructions in this post."),Object(i.b)("h2",{id:"upgrading-the-plugin"},"Upgrading the Plugin"),Object(i.b)("p",null,"At home I upgraded the moment TS 0.9.5 was released. This allowed me to help with migrating the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped"},"Definitely Typed typings")," over from 0.9.1.1. And allowed me to give TS 0.9.5 a little test drive. However, I deliberately held off performing the upgrade at work until I knew that all the Definitely Typed typings had been upgraded. This was completed ",Object(i.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/pull/1385"},"by the end of 2013"),". So in the new year it seemed a good time to make the move."),Object(i.b)("p",null,"If, like me, you are using TypeScript inside Visual Studio then you'd imagine it's as simple as closing down VS, uninstalling TypeScript 0.9.1.1 from Programs and Features and then installing the ",Object(i.b)("a",{parentName:"p",href:"http://www.typescriptlang.org/#Download"},"new plugin"),". And it is if you are running IE 10 or IE 11 on your Windows machine. If you are running a lower IE version then there is a problem."),Object(i.b)("p",null,"Regrettably, the TypeScript 0.9.5 plugin installer has a dependency on IE 10. Fortunately TypeScript itself has no dependency on IE 10 at all (and why would it?). This dependency appears to have been a mistake. I ",Object(i.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1975"},"raised it as an issue")," and the TS team have said that this will be resolved in the next major release."),Object(i.b)("p",null,"Happily there is a workaround if you're running IE 9 or lower which has been noted in the ",Object(i.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/typescript/archive/2013/12/05/announcing-typescript-0-9-5.aspx"},"comments underneath the TS 0.9.5 release blog post"),". All you do is set the ",Object(i.b)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Internet Explorer\\svcVersion")," registry key value to ",Object(i.b)("inlineCode",{parentName:"p"},"10.0.9200.16384")," for the duration of the install."),Object(i.b)("p",null,"First hurdle jumped, the upgrade continues simple enough. Then the fun starts..."),Object(i.b)("h2",{id:"declaration-merging-is-dead-sort-of"},"Declaration Merging is dead... Sort of"),Object(i.b)("p",null,"Having upgraded my plugin I opened up the project I'm working on in Visual Studio. I used NuGet to upgrade all the Definitely Typed packages to the latest (TS 0.9.5) versions. Then I tried, and failed, to compile. It was the the most obscure error I've seen in a while:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"VSTSC : tsc.js(37574, 25) Microsoft JScript runtime error : Unable to get value of the property 'wrapsSomeTypeParameter': object is null or undefined\n")),Object(i.b)("p",null,"As you can see there was no indication where in my code the problem was being caused. Fortunately someone had already suffered this particular problem and logged an issue ",Object(i.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1995"},"here"),". Digging through the comments I found a common theme; everyone experiencing the problem was using the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/blob/master/q/Q.d.ts"},"Q typings"),". So what's up with that?"),Object(i.b)("p",null,"Strangely, if you directly referenced the Q typings everything was okay - which is how the Definitely Typed tests came to pass in the first place. But if you wanted to make use of these typings with implicit referencing (in Visual Studio since TS 0.9.1, all TypeScript files in a project are considered to be referencing each other) - well it doesn't work."),Object(i.b)("p",null,"I decided to take a look at the Q typings at this point to see what was so upsetting about them. The one thing that was obvious was that these typings make use of ",Object(i.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/typescript/archive/2013/06/18/announcing-typescript-0-9.aspx"},"Declaration Merging"),". And this made them slightly different to most of the other typing libraries that I was using. So I decided to refactor the Q typings to use the more interface driven approach the other typing libraries used in the hope that might resolve the issue."),Object(i.b)("p",null,"Roughly speaking I went from:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'declare function Q<T>(promise: Q.IPromise<T>): Q.Promise<T>;\ndeclare function Q<T>(promise: JQueryPromise<T>): Q.Promise<T>;\ndeclare function Q<T>(value: T): Q.Promise<T>;\n\ndeclare module Q {\n    //\u2026 functions etc in here\n}\n\ndeclare module "q" {\n    export = Q;\n}\n')),Object(i.b)("p",null,"To:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'interface QIPromise<T> {\n    //\u2026 functions etc in here\n}\n \ninterface QDeferred<T> {\n    //\u2026 functions etc in here\n}\n \ninterface QPromise<T> {\n    //\u2026 functions etc in here\n}\n \ninterface QPromiseState<T> {\n    //\u2026 functions etc in here\n}\n \ninterface QStatic {\n \n    <t>(promise: QIPromise<T>): QPromise<T>;\n    <t>(promise: JQueryPromise<T>): QPromise<T>;\n    <t>(value: T): QPromise<T>;\n \n    //\u2026 other functions etc continue here\n}\n \ndeclare module "q" {\n    export = Q;\n}\ndeclare var Q: QStatic;\n</t></t></t>\n')),Object(i.b)("p",null,"And that fixed the obscure 'wrapsSomeTypeParameter' error. The full source code of these amended typings can be found as a GitHub Repo ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Q-TS-0.9.5-WorkAround"},"here")," in case you want to use it yourself. (I did originally consider adding this to Definitely Typed but opted not to in the end - ",Object(i.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/pull/1497"},"see discussion on GitHub"),".)"),Object(i.b)("h2",{id:"the-promised-land"},"The Promised Land"),Object(i.b)("p",null,"You're there. You've upgraded to the new plugin and the new typings. All is compiling as it should and the language service is working as well. Was it worth it? I think yes, for the following reasons:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"TS 0.9.5 compiles faster, and hogs less memory. "),Object(i.b)("li",{parentName:"ol"},"When we compiled with TS 0.9.5 we found there were a couple of bugs in our codebase which the tightened up compiler was now detecting. Essentially where we'd assumed types were flowing through to functions there were a couple of occasions with TS 0.9.1.1 where they weren't. Where we'd assumed we had a type of ",Object(i.b)("inlineCode",{parentName:"li"},"T")," available in a function whereas it was actually a type of ",Object(i.b)("inlineCode",{parentName:"li"},"any"),". I was really surprised that this was the case since we were already making use of ",Object(i.b)("inlineCode",{parentName:"li"},"noImplicitAny")," compiler flag in our project. So where a type had changed and a retired property was being referenced TS 0.9.5 picked up an error that TS 0.9.1.1 had not. Good catch! "),Object(i.b)("li",{parentName:"ol"},"And finally (and I know these are really minor), the compiled JS is a little different now. Firstly, the compiled JS features all of TypeScript comments in the positions that you might hope for. Previously it seemed that about 75% came along for the ride and ended up in some strange locations sometimes. Secondly, enums are treated differently during compilation now - where it makes sense the actual backing value of an enum is used rather than going through the JavaScript construct. So it's a bit like a ",Object(i.b)("inlineCode",{parentName:"li"},"const")," I guess - presumably this allows JavaScript engines to optimise a little more.")),Object(i.b)("p",null,"I hope I haven't put you off with this post. I think TypeScript 0.9.5 is well worth making the leap for - and hopefully by reading this you'll have saved yourself from a few of the rough edges."))}c.isMDXComponent=!0}}]);
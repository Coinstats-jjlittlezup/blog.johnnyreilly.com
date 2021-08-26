"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[90625],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||h[m]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93236:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return c},toc:function(){return h},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"How I'm Using Cassette part 3:Cassette and TypeScript Integration",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Andrew Davey","TypeScript","javascript","cassette","Web Essentials"],hide_table_of_contents:!1},p=void 0,l={permalink:"/2013/07/06/how-im-using-cassette-part-3-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-07-06-how-im-using-cassette-part-3-typescript.md",source:"@site/blog/2013-07-06-how-im-using-cassette-part-3-typescript.md",title:"How I'm Using Cassette part 3:Cassette and TypeScript Integration",description:"The modern web is JavaScript. There's no two ways about it. HTML 5 has new CSS, new HTML but the most important aspect of it from an application development point of view is JavaScript. It's the engine. Without it HTML 5 wouldn't be the exciting application platform that it is. Half the posts on Hacker News would vanish.",date:"2013-07-06T00:00:00.000Z",formattedDate:"July 6, 2013",tags:[{label:"Andrew Davey",permalink:"/tags/andrew-davey"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"javascript",permalink:"/tags/javascript"},{label:"cassette",permalink:"/tags/cassette"},{label:"Web Essentials",permalink:"/tags/web-essentials"}],readingTime:5.39,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"Announcing jQuery Validation Unobtrusive Native...",permalink:"/2013/08/08/announcing-jquery-validation"},nextItem:{title:"jQuery Validate - Native Unobtrusive Validation Support!",permalink:"/2013/06/26/jquery-validate-native-unobtrusive-validation"}},c={authorsImageUrls:[void 0]},h=[{value:"Cassette and TypeScript",id:"cassette-and-typescript",children:[]},{value:"The Fly in the Ointment: Asset References",id:"the-fly-in-the-ointment-asset-references",children:[]},{value:"Pulling the Fly from the Ointment",id:"pulling-the-fly-from-the-ointment",children:[]}],u={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The modern web is JavaScript. There's no two ways about it. HTML 5 has new CSS, new HTML but the most important aspect of it from an application development point of view is JavaScript. It's the engine. Without it HTML 5 wouldn't be the exciting application platform that it is. Half the posts on ",(0,i.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/"},"Hacker News")," would vanish."),(0,i.kt)("p",null," It's easy to break a JavaScript application. One false keypress and you can mysteriously turn a fully functioning app into toast. And not know why. There's tools you can use to help yourself - ",(0,i.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2012/04/jshint-customising-your-hurt-feelings.html"},"JSHint / JSLint")," but whilst these make error detection a little easier it remains very easy to shoot yourself in the foot with JavaScript. Because of this I've come to really rather love ",(0,i.kt)("a",{parentName:"p",href:"http://www.typescriptlang.org/"},"TypeScript"),". If you didn't already know, TypeScript can be summed up as JavaScript with optional static typing. It's a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"superset"))," of JavaScript - JavaScript with go-faster stripes. When run through the compiler TypeScript is ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Source-to-source_compiler"},"transpiled")," into JavaScript. And importantly, if you have bugs in your code, the compiler should catch them at this point and let you know."),(0,i.kt)("p",null,"Now very few of us are working on greenfield applications. Most of us have existing applications to maintain and support. Happily, TypeScript fits very well with this purely because TypeScript is a superset of JavaScript. That is to say: all JavaScript is valid TypeScript in the same way that all CSS is valid ",(0,i.kt)("a",{parentName:"p",href:"http://lesscss.org/"},"LESS"),". This means that you can take an existing ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," file, rename it to have a ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," suffix, run the TypeScript compiler over it and out will pop your JavaScript file just as it was before. You're then free to enrich your TypeScript file with the relevant type annotations at your own pace. Increasing the robustness of your codebase is a choice left to you."),(0,i.kt)("p",null,"The project I am working on has recently started to incorporate TypeScript. It's an ASP.Net MVC 4 application which makes use of ",(0,i.kt)("a",{parentName:"p",href:"http://knockoutjs.com/"},"Knockout"),". The reason we started to incorporate TypeScript is because certain parts of the app, particularly the Knockout parts, were becoming more complex. This complexity wasn't really an issue when we were writing the relevant JavaScript. However, when it came to refactoring and handing files from one team member to another we realised it was very easy to introduce bugs into the codebase, particularly around the JavaScript. Hence TypeScript."),(0,i.kt)("h2",{id:"cassette-and-typescript"},"Cassette and TypeScript"),(0,i.kt)("p",null,"Enough of the pre-amble. The project was making use of Cassette for serving up its CSS and JavaScript. Because Cassette rocks. One of the reasons we use it is that we're making extensive use of ",(0,i.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2013/06/how-im-using-cassette-part-2.html"},"Cassette's ability to serve scripts in dependency order"),". So if we were to move to using TypeScript it was important that TypeScript and Cassette would play well together."),(0,i.kt)("p",null,"I'm happy to report that Cassettes and TypeScript do work well together, but there are a few things that you need to get up and running. Or, to be a little clearer, if you want to make use of Cassette's in-file Asset Referencing then you'll need to follow these steps. If you don't need Asset Referencing then you'll be fine using Cassette with TypeScript generated JavaScript as is ","*",(0,i.kt)("strong",{parentName:"p"},"provided"),"*"," you ensure the TypeScript compiler is not preserving comments in the generated JavaScript."),(0,i.kt)("h2",{id:"the-fly-in-the-ointment-asset-references"},"The Fly in the Ointment: Asset References"),(0,i.kt)("p",null,"TypeScript is designed to allow you to break up your application into modules. However, the referencing mechanism which allows you to reference one TypeScript file / module from another is exactly the same as the existing Visual Studio XML reference comments mechanism that was originally introduced to drive JavaScript Intellisense in Visual Studio. To quote the ",(0,i.kt)("a",{parentName:"p",href:"http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf"},"TypeScript spec"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"A comment of the form /// ",(0,i.kt)("reference",{path:"\u2026"})," adds a dependency on the source file specified in the path argument. The path is resolved relative to the directory of the containing source file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"An external import declaration that specifies a relative external module name (section 11.2.1) resolves the name relative to the directory of the containing source file. If a source file with the resulting path and file extension \u2018.ts\u2019 exists, that file is added as a dependency. Otherwise, if a source file with the resulting path and file extension \u2018.d.ts\u2019 exists, that file is added as a dependency."))),(0,i.kt)("p",null,"The problem is that ",(0,i.kt)("a",{parentName:"p",href:"http://getcassette.net/documentation/v1/AssetReferences"},"Cassette ","*",(0,i.kt)("strong",{parentName:"a"},"also"),"*"," supports Visual Studio XML reference comments to drive Asset References"),". The upshot of this is, that Cassette will parse the ",(0,i.kt)("inlineCode",{parentName:"p"},'/// &lt;reference path="*.ts"/&gt;'),"s and will attempt to serve up the TypeScript files in the browser... Calamity!"),(0,i.kt)("h2",{id:"pulling-the-fly-from-the-ointment"},"Pulling the Fly from the Ointment"),(0,i.kt)("p",null,"Again I'm going to take the demo from last time (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/CassetteDemo/tree/References"},"the References branch of my CassetteDemo project"),") and build on top of it. First of all, we need to update the Cassette package. This is because to get Cassette working with TypeScript you need to be running at least Cassette 2.1. So let's let NuGet do it's thing:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Update-Package Cassette.Aspnet")),(0,i.kt)("p",null,"And whilst we're at it let's grab the jQuery TypeScript typings - we'll need them later:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Install-Package jquery.TypeScript.DefinitelyTyped")),(0,i.kt)("p",null,"Now we need to add a couple of classes to the project. First of all this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5934706.js?file=ParseJavaScriptNotTypeScriptReferences.cs"}),(0,i.kt)("p",null,"Which subclasses ",(0,i.kt)("inlineCode",{parentName:"p"},"ParseJavaScriptReferences")," and ensures TypeScript files are excluded when JavaScript references are being parsed. And to make sure that Cassette makes use of ",(0,i.kt)("inlineCode",{parentName:"p"},"ParseJavaScriptNotTypeScriptReferences")," in place of ",(0,i.kt)("inlineCode",{parentName:"p"},"ParseJavaScriptReferences")," we need this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5934706.js?file=InsertIntoPipelineParseJavaScriptNotTypeScriptReferences.cs"}),(0,i.kt)("p",null,"Now we're in a position to use TypeScript with Cassette. To demonstrate this let's take the ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.js")," and rename it to ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.ts"),". And now it's TypeScript. However before it can compile it needs to know what jQuery is - so we drag in the jQuery typings from ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/borisyankov/DefinitelyTyped"},"Definitely Typed"),". And now it can compile from this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5934706.js?file=Index.ts"}),(0,i.kt)("p",null,"To this: (Please note that I get the TypeScript compiler to preserve my comments in order that I can continue to use Cassettes Asset Referencing)"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5934706.js?file=Index.js"}),(0,i.kt)("p",null,"As you can see the output JavaScript has both the TypeScript and the Cassette references in place. However thanks to ",(0,i.kt)("inlineCode",{parentName:"p"},"ParseJavaScriptNotTypeScriptReferences")," those TypeScript references will be ignored by Cassette."),(0,i.kt)("p",null,"So that's it - we're home free. Before I finish off I'd like to say thanks to Cassette's ",(0,i.kt)("a",{parentName:"p",href:"http://twitter.com/andrewdavey"},"Andrew Davey")," who ",(0,i.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/?fromgroups=#!topic/cassette/SM3Rxh48D7Q"},"set me on the right path")," when trying to work out how to do this. A thousand thank yous Andrew!"),(0,i.kt)("p",null,"And finally, again as last time you can see what I've done in this post by just looking at the repository on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/CassetteDemo/tree/TypeScript"},"GitHub"),". The changes I made are on the TypeScript branch of that particular repository."))}m.isMDXComponent=!0}}]);
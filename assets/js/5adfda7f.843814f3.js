(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{1210:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),h=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=h(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=h(n),d=o,b=c["".concat(a,".").concat(d)]||c[d]||p[d]||i;return n?r.a.createElement(b,s(s({ref:t},u),{},{components:n})):r.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var o=n(4),r=n(10),i=(n(0),n(1210)),a={title:"The Convent with Continuous Delivery",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Poor Clares","Continuous Delivery","Arundel","AppVeyor"],hide_table_of_contents:!1},s={permalink:"/2015/02/11/the-convent-with-continuous-delivery",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-02-11-the-convent-with-continuous-delivery.md",source:"@site/blog/2015-02-11-the-convent-with-continuous-delivery.md",title:"The Convent with Continuous Delivery",description:"I've done it. I've open sourced the website that I maintain for my aunt what is a nun. Because I think we can all agree that nuns need open source and continuous integration about as much as anyone else.",date:"2015-02-11T00:00:00.000Z",formattedDate:"February 11, 2015",tags:[{label:"Poor Clares",permalink:"/tags/poor-clares"},{label:"Continuous Delivery",permalink:"/tags/continuous-delivery"},{label:"Arundel",permalink:"/tags/arundel"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],readingTime:3.53,truncated:!1,prevItem:{title:"Using Gulp to inject scripts and styles tags directly into your HTML",permalink:"/2015/02/17/using-gulp-in-asp-net-instead-of-web-optimization"},nextItem:{title:"TypeScript: In Praise of Union Types",permalink:"/2015/01/20/typescript-using-functions-with-union-types"}},l=[{value:"Why on earth did you bother?",id:"why-on-earth-did-you-bother",children:[]},{value:"How did you go about it?",id:"how-did-you-go-about-it",children:[]},{value:"Where is it?",id:"where-is-it",children:[]},{value:"Will you take pull requests?",id:"will-you-take-pull-requests",children:[]}],u={toc:l};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I've done it. I've open sourced the ",Object(i.b)("a",{parentName:"p",href:"http://www.poorclaresarundel.org/"},"website that I maintain for my aunt what is a nun"),". Because I think we can all agree that nuns need open source and continuous integration about as much as anyone else."),Object(i.b)("p",null," For a long time now I've been maintaining a website for one of my (many) aunts that is a Poor Clare. (",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Subtyping"},'That\'s a subtype of "nun" you OO enthusiasts.'),") It's not a terribly exciting site - it's mostly static content. It's built with a combination of AngularJS / TypeScript / Bootstrap and ASP.Net MVC. It's hosted on ",Object(i.b)("a",{parentName:"p",href:"http://azure.microsoft.com/en-us/documentation/services/websites/"},"Azure Websites"),". In fact I have written about it (slightly more cagily) before ",Object(i.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2014/06/migrating-from-angularjs-to-angularts.html"},"here"),"."),Object(i.b)("p",null,"I'll say up front: presentation-wise the site is not a work of art. However the nuns seem pretty happy with it. (Or perhaps secretly they're forgiving me the shonkiness and sparing my feelings - who can say?) If I put my mind to it the site could look much more lovely. But there's only so much time I can spare - and that's actually one of the reasons I've set up Continuous Delivery."),Object(i.b)("h2",{id:"why-on-earth-did-you-bother"},"Why on earth did you bother?"),Object(i.b)("p",null,"Well, you'd be surprised how often tweaks can be requested. Sometimes it appears to be forgotten for months at a time, and then all of a sudden my inbox is daily filled with a list of minor alterations. You know, slight text changes and the like."),Object(i.b)("p",null,'So what I was generally doing was getting home of an evening, waiting until the children were in bed, chomping down some food and then firing up Visual Studio to make the changes and hit "Publish". Yes that\'s right; I was essentially using Visual Studio to edit text files and push a website out to Azure. The very definition of using a sledgehammer to crack a nut I think we can all agree.'),Object(i.b)("p",null,"It occurred to me that if I had Continuous Delivery set up then I could make these tweaks and not have to worry about the site being published. Which would be nice. I wouldn't need Visual Studio anymore - any text editor would do. Also nice. Finally, if the source control was accessible online then I could probably get away with doing most tweaks on my mobile phone whilst I was travelling home. Timesaver!"),Object(i.b)("h2",{id:"how-did-you-go-about-it"},"How did you go about it?"),Object(i.b)("p",null,"Since ",Object(i.b)("a",{parentName:"p",href:"http://www.visualstudioonline.com"},'Visual Studio Online (then "Team Foundation Service")')," was released I have been using it to host the source code. So the obvious solution was to use the tools offered there to do the deployment. However, this wasn't the smooth experience you might have hoped for. I had quite a frustrating afternoon trying things out before deciding it was becoming more trouble than it was worth. VSO appeared to make it supremely hard to customise builds."),Object(i.b)("p",null,"Just recently though I have been having the most wonderful experience with ",Object(i.b)("a",{parentName:"p",href:"http://www.appveyor.com/"},"AppVeyor"),". AppVeyor market themselves as ",Object(i.b)("em",{parentName:"p"},'"#1 Continuous Delivery service for Windows"')," ","-"," I think they're right. Their build process is entirely flexible and customisable. It is, in short, a joy to use. (The support is fantastic too - very helpful indeed. Go ",Object(i.b)("a",{parentName:"p",href:"https://github.com/FeodorFitsner"},"Feodor"),"!)"),Object(i.b)("p",null,"If you look just below the header you'll read a very important sentence: ",Object(i.b)("em",{parentName:"p"},'"Free for open-source projects"'),". You hear that? By the time I'd finished reading that sentence I'd decided that the Poor Clares website was about to become an open source project."),Object(i.b)("p",null,"And now it is."),Object(i.b)("h2",{id:"where-is-it"},"Where is it?"),Object(i.b)("p",null,"The source on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/poorclaresarundel"},"GitHub"),". The builds and deployment are taken care of by ",Object(i.b)("a",{parentName:"p",href:"https://ci.appveyor.com/project/JohnReilly/poorclaresarundel"},"AppVeyor"),"."),Object(i.b)("h2",{id:"will-you-take-pull-requests"},"Will you take pull requests?"),Object(i.b)("p",null,"If they're serious, then yes, certainly! My long term plan is to try and get the nuns set up as collaborators in GitHub. That way they can make their own minor tweaks without me getting involved."),Object(i.b)("p",null,"On another front, I do wonder if open-sourcing Poor Clares, Arundel might have other hidden benefits. There's a number of things I'm not too keen on in the code. Up until now I think my attitude was possibly \"it works so that's good enough\". It was only me aware of the shortcomings. Now it's public I'll probably have more of an incentive to tidy up the rough edges. That's the theory anyway - Embarrassment Driven Development anyone? :-)"))}h.isMDXComponent=!0}}]);
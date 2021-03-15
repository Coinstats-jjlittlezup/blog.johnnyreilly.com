(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),r=(n(0),n(1166)),i={title:"NuGet and WebMatrix: How to install a specific version of a package",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["jquery","package","WebMatrix","NuGet"],hide_table_of_contents:!1},l={permalink:"/2013/12/13/nuget-and-webmatrix-how-to-install",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-12-13-nuget-and-webmatrix-how-to-install.md",source:"@site/blog/2013-12-13-nuget-and-webmatrix-how-to-install.md",description:"I've recently been experimenting with WebMatrix. If you haven't heard of it, WebMatrix is Microsoft's \"free, lightweight, cloud-connected web development tool\". All marketing aside, it's pretty cool. You can whip up a site in next to no time, it has source control, publishing abilities, intellisense. Much good stuff. And one thing it has, that I genuinely hadn't expected is NuGet. Brilliant!",date:"2013-12-13T00:00:00.000Z",formattedDate:"December 13, 2013",tags:[{label:"jquery",permalink:"/tags/jquery"},{label:"package",permalink:"/tags/package"},{label:"WebMatrix",permalink:"/tags/web-matrix"},{label:"NuGet",permalink:"/tags/nu-get"}],title:"NuGet and WebMatrix: How to install a specific version of a package",readingTime:2.505,truncated:!1,prevItem:{title:"Upgrading to TypeScript 0.9.5 - A Personal Memoir",permalink:"/2014/01/09/upgrading-to-typescript-095-personal"},nextItem:{title:"Simple fading in and out using CSS transitions and classes",permalink:"/2013/12/04/simple-fading-in-and-out-using-css-transitions"}},s=[{value:"NuGet, by hook or by crook",id:"nuget-by-hook-or-by-crook",children:[]},{value:"Now for bonus points",id:"now-for-bonus-points",children:[]},{value:"Rounding off",id:"rounding-off",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I've recently been experimenting with WebMatrix. If you haven't heard of it, WebMatrix is Microsoft's ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",{parentName:"em",href:"http://www.microsoft.com/web/webmatrix/"},'"free, lightweight, cloud-connected web development tool"')),". All marketing aside, it's pretty cool. You can whip up a site in next to no time, it has source control, publishing abilities, intellisense. Much good stuff. And one thing it has, that I genuinely hadn't expected is ",Object(r.b)("a",{parentName:"p",href:"https://www.nuget.org/"},"NuGet"),". Brilliant!"),Object(r.b)("p",null," But like any free product there are disadvantages. As a long time Visual Studio user I've become very used to the power of the NuGet command line. I've been spoiled. You don't have this in WebMatrix. You have a nice UI that looks like this:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-MLAAVw9-O_A/UqstzAa1-8I/AAAAAAAAAfU/gtg8kPjsP7M/s400/NuGetWebMatrix.png",alt:null})),Object(r.b)("p",null,"Looks great right? However, if you want to install a specific version of a NuGet package... well let's see what happens..."),Object(r.b)("p",null,"As you're probably aware jQuery currently exists in 2 branches; the 1.10.x branch which supports IE 6-8 and the 2.0.x branch which doesn't. However there is only 1 jQuery inside NuGet. Let's click on install and see if we can select a specific version:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-Phqw0WYN0BM/UqswJPr7X1I/AAAAAAAAAfg/4lpkwUG5p5w/s400/NuGetWebMatrixjQuery.png",alt:null})),Object(r.b)("p",null,"Hmmm.... As you can see it's 2.0.3 or bust. We can't select a specific version; we're forced to go with the latest and greatest which is a problem if you need to support IE 6-8. So the obvious strategy if you're in this particular camp is to forego NuGet entirely. Go old school. And we could. But let's say we want to keep using NuGet, mindful that a little while down the road we'll be ready to do that upgrade. Can it be done? Let's find out."),Object(r.b)("h2",{id:"nuget-by-hook-or-by-crook"},"NuGet, by hook or by crook"),Object(r.b)("p",null,"I've created a new site in WebMatrix using the Empty Site template. Looks like this:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-yDf_KCHWImA/Uqs8Csn8UWI/AAAAAAAAAfs/cmnj5ddqDCk/s400/EmptySite.png",alt:null})),Object(r.b)("p",null,"Lovely."),Object(r.b)("p",null,"Now to get me some jQuery 1.10.2 goodness. To the console Batman! We've already got the NuGet command line installed (if you haven't you could get it from ",Object(r.b)("a",{parentName:"p",href:"http://nuget.org/nuget.exe"},"here"),") and so we follow these steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"At the ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\")," prompt we enter ",Object(r.b)("inlineCode",{parentName:"li"},"nuget install jQuery -Version 1.10.2")," and down comes jQuery 1.10.2."),Object(r.b)("li",{parentName:"ul"},"We move ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\jQuery.1.10.2")," to ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\App_Data\\packages\\jQuery.1.10.2"),"."),Object(r.b)("li",{parentName:"ul"},"Then we delete the ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\App_Data\\packages\\jQuery.1.10.2\\Tools")," subfolder."),Object(r.b)("li",{parentName:"ul"},"We move ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\App_Data\\packages\\jQuery.1.10.2\\Content\\Scripts")," to ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\Scripts"),"."),Object(r.b)("li",{parentName:"ul"},"And finally we delete the ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\App_Data\\packages\\jQuery.1.10.2\\Content")," folder.")),Object(r.b)("p",null,"We hit refresh back in WebMatrix and now we get this:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-EAfCq2zjNl4/UqtAvAW35PI/AAAAAAAAAf4/u97kbdXWO84/s400/EmptySiteWithjQuery.png",alt:null})),Object(r.b)("p",null,'If we go to NuGet and select updates you\'ll see that jQuery is now considered "installed" and an update is available. So, in short, our plan worked - yay!'),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-3-pJuMZVJPo/UqtBiuBNdyI/AAAAAAAAAgE/GA_4difKXdQ/s320/NuGetWebMatrixjQueryUpgrade.png",alt:null})),Object(r.b)("h2",{id:"now-for-bonus-points"},"Now for bonus points"),Object(r.b)("p",null,'Just to prove that you can upgrade using the WebMatrix tooling following our manual install let\'s do it. Click "Update", then "Yes" and finally "I Accept" to the EULA. You\'ll now see we\'re now on jQuery 2.0.3:'),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-6tLukWlzBfg/UqtE_Ni4FaI/AAAAAAAAAgM/AUxszwXhlGo/s400/NuGetWebMatrixjQueryUpgraded.png",alt:null})),Object(r.b)("h2",{id:"rounding-off"},"Rounding off"),Object(r.b)("p",null,"In my example I'm only looking at a simple JavaScript library. But the same principal should be able to be applied to any NuGet package as far as I'm aware. Hope that helps!"))}p.isMDXComponent=!0}}]);
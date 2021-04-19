(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{101:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return p}));var n=i(4),a=i(10),o=(i(0),i(1210)),r={title:"Using Web Optimization with MVC 3",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net","Bundling","MVC 3","Web Optimization","Minification"],hide_table_of_contents:!1},l={permalink:"/2012/10/05/using-web-optimization-with-mvc-3",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-10-05-using-web-optimization-with-mvc-3.md",source:"@site/blog/2012-10-05-using-web-optimization-with-mvc-3.md",title:"Using Web Optimization with MVC 3",description:"A while ago I wrote about optimally serving up JavaScript in web applications. I mentioned that Microsoft had come up with a NuGet package called Microsoft ASP.NET Web Optimization which could help with that by minifying and bundling CSS and JavaScript. At the time I was wondering if I would be able to to use this package with pre-existing MVC 3 projects (given that the package had been released together with MVC 4). Happily it turns out you can. But it's not quite as straightforward as I might have liked so I've documented how to get going with this here...",date:"2012-10-05T00:00:00.000Z",formattedDate:"October 5, 2012",tags:[{label:"asp.net",permalink:"/tags/asp-net"},{label:"Bundling",permalink:"/tags/bundling"},{label:"MVC 3",permalink:"/tags/mvc-3"},{label:"Web Optimization",permalink:"/tags/web-optimization"},{label:"Minification",permalink:"/tags/minification"}],readingTime:3.62,truncated:!1,prevItem:{title:"MVC 3 meet Dictionary",permalink:"/2012/10/22/mvc-3-meet-dictionary"},nextItem:{title:"Unit Testing and Entity Framework: The Filth and the Fury",permalink:"/2012/10/03/unit-testing-and-entity-framework-filth"}},s=[{value:"Getting the Basics in Place",id:"getting-the-basics-in-place",children:[]},{value:"Switching over _Layout.cshtml to use Web Optimization",id:"switching-over-_layoutcshtml-to-use-web-optimization",children:[]}],c={toc:s};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A while ago I ",Object(o.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/06/how-im-structuring-my-javascript-in-web.html#WebOptimization"},"wrote")," about optimally serving up JavaScript in web applications. I mentioned that Microsoft had come up with a NuGet package called ",Object(o.b)("a",{parentName:"p",href:"http://nuget.org/packages/Microsoft.AspNet.Web.Optimization"},"Microsoft ASP.NET Web Optimization")," which could help with that by minifying and bundling CSS and JavaScript. At the time I was wondering if I would be able to to use this package with pre-existing MVC 3 projects (given that the package had been released together with MVC 4). Happily it turns out you can. But it's not quite as straightforward as I might have liked so I've documented how to get going with this here..."),Object(o.b)("h2",{id:"getting-the-basics-in-place"},"Getting the Basics in Place"),Object(o.b)("p",null,'To keep it simple I\'m going to go through taking a "vanilla" MVC 3 app and enhancing it to work with Web Optimization. To start, follow these basic steps:'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open Visual Studio (bet you didn't see that coming!)"),Object(o.b)("li",{parentName:"ol"},"Create a new MVC 3 application (I called mine \"WebOptimizationWithMvc3\" to demonstrate my imaginative flair). It doesn't really matter which sort of MVC 3 project you create - I chose an Intranet application but really that's by the by."),Object(o.b)("li",{parentName:"ol"},"Update pre-existing NuGet packages"),Object(o.b)("li",{parentName:"ol"},'At the NuGet console type: "',Object(o.b)("inlineCode",{parentName:"li"},"Install-Package Microsoft.AspNet.Web.Optimization"),'"')),Object(o.b)("p",null,"Whilst the NuGet package adds the necessary references to your MVC 3 project it doesn't add the corresponding namespaces to the web.configs. To fix this manually add the following child XML element to the ",Object(o.b)("inlineCode",{parentName:"p"},"&lt;namespaces&gt;")," element in your root and Views web.config files:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'&lt;add namespace="System.Web.Optimization" /&gt;')),Object(o.b)("p",null,"This gives you access to ",Object(o.b)("inlineCode",{parentName:"p"},"Scripts")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Styles")," in your views without needing the fully qualified namespace. For reasons best known to Microsoft I had to close down and restart Visual Studio before intellisense started working. You may need to do likewise."),Object(o.b)("p",null,'Next up we want to get some JavaScript / CSS bundles in place. To do this, create a folder in the root of your project called "App',"_","Start\". There's nothing magical about this to my knowledge; this is just a convention that's been adopted to store all the bits of startup in one place and avoid clutterage. (I think this grew out of Nuget; see ",Object(o.b)("a",{parentName:"p",href:"http://blog.davidebbo.com/2011/02/appstart-folder-convention-for-nuget.html"},"David Ebbo talking about this here"),".) Inside your new folder you should add a new class called ",Object(o.b)("inlineCode",{parentName:"p"},"BundleConfig.cs")," which looks like this:"),Object(o.b)("script",{src:"https://gist.github.com/3839486.js?file=BundleConfig.cs"}),Object(o.b)("p",null,"The above is what you get when you create a new MVC 4 project (as it includes Web Optimization out of the box). All it does is create some JavaScript and CSS bundles relating to jQuery, jQuery UI, jQuery Validate, Modernizr and the standard site CSS. Nothing radical here but this example should give you an idea of how bundling can be configured and used. To make use of ",Object(o.b)("inlineCode",{parentName:"p"},"BundleConfig.cs")," you should modify your ",Object(o.b)("inlineCode",{parentName:"p"},"Global.asax.cs")," so it looks like this:"),Object(o.b)("script",{src:"https://gist.github.com/3839486.js?file=Global.asax.cs"}),Object(o.b)("p",null,"Once you've done this you're ready to start using Web Optimization in your MVC 3 application."),Object(o.b)("h2",{id:"switching-over-_layoutcshtml-to-use-web-optimization"},"Switching over ","_","Layout.cshtml to use Web Optimization"),Object(o.b)("p",null,'With a "vanilla" MVC 3 app the only use of CSS and JavaScript files is found in ',Object(o.b)("inlineCode",{parentName:"p"},"_Layout.cshtml"),". To switch over to using Web Optimization you should replace the existing ",Object(o.b)("inlineCode",{parentName:"p"},"_Layout.cshtml")," with this: (you'll see that the few differences that there are between the 2 are solely around the replacement of link / script tags with references to ",Object(o.b)("inlineCode",{parentName:"p"},"Scripts")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Styles")," instead)"),Object(o.b)("script",{src:"https://gist.github.com/3839486.js?file=_Layout.cshtml"}),Object(o.b)("p",null,"Do note that in the above ",Object(o.b)("inlineCode",{parentName:"p"},"Scripts.Render")," call we're rendering out 3 bundles; jQuery, jQuery UI and jQuery Validate. We're not using any of these in ",Object(o.b)("inlineCode",{parentName:"p"},"_Layout.cshtml")," but rendering these (and their associated link tags) gives us a chance to demonstrate that everything is working as expected."),Object(o.b)("p",null,"In your root web.config file make sure that the following tag is in place: ",Object(o.b)("inlineCode",{parentName:"p"},'&lt;compilation debug="<b>true</b>" targetFramework="4.0"&gt;'),". Then run, the generated HTML should look something like this:"),Object(o.b)("script",{src:"https://gist.github.com/3839486.js?file=debug  true"}),Object(o.b)("p",null,"This demonstrates that when the application has debug set to true you see the full scripts / links being rendered out as you would hope (to make your debugging less painful)."),Object(o.b)("p",null,"Now go back to your root ",Object(o.b)("inlineCode",{parentName:"p"},"web.config")," file and chance the debug tag to false: ",Object(o.b)("inlineCode",{parentName:"p"},'&lt;compilation debug="<b>false</b>" targetFramework="4.0"&gt;'),". This time when you run, the generated HTML should look something like this:"),Object(o.b)("script",{src:"https://gist.github.com/3839486.js?file=debug  false"}),Object(o.b)("p",null,"This time you can see that in non-debug mode (ie how it would run in Production) minified bundles of scripts and css files are being served up instead of the raw files. And that's it; done."))}p.isMDXComponent=!0},1210:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return d}));var n=i(0),a=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(i),h=n,d=u["".concat(r,".").concat(h)]||u[h]||b[h]||o;return i?a.a.createElement(d,l(l({ref:t},c),{},{components:i})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"}}]);
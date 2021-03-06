(window.webpackJsonp=window.webpackJsonp||[]).push([[751],{815:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return p}));var n=i(3),o=i(7),a=(i(0),i(958)),r={title:"Using Web Optimization with MVC 3",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp.net","Bundling","MVC 3","Web Optimization","Minification"],hide_table_of_contents:!1},l={permalink:"/blog.johnnyreilly.com/2012/10/05/using-web-optimization-with-mvc-3",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-10-05-using-web-optimization-with-mvc-3.md",source:"@site/blog/2012-10-05-using-web-optimization-with-mvc-3.md",description:"A while ago I wrote about optimally serving up JavaScript in web applications. I mentioned that Microsoft had come up with a NuGet package called Microsoft ASP.NET Web Optimization which could help with that by minifying and bundling CSS and JavaScript. At the time I was wondering if I would be able to to use this package with pre-existing MVC 3 projects (given that the package had been released together with MVC 4). Happily it turns out you can. But it's not quite as straightforward as I might have liked so I've documented how to get going with this here...",date:"2012-10-05T00:00:00.000Z",tags:[{label:"asp.net",permalink:"/blog.johnnyreilly.com/tags/asp-net"},{label:"Bundling",permalink:"/blog.johnnyreilly.com/tags/bundling"},{label:"MVC 3",permalink:"/blog.johnnyreilly.com/tags/mvc-3"},{label:"Web Optimization",permalink:"/blog.johnnyreilly.com/tags/web-optimization"},{label:"Minification",permalink:"/blog.johnnyreilly.com/tags/minification"}],title:"Using Web Optimization with MVC 3",readingTime:3.62,truncated:!1,prevItem:{title:"MVC 3 meet Dictionary",permalink:"/blog.johnnyreilly.com/2012/10/22/mvc-3-meet-dictionary"},nextItem:{title:"Unit Testing and Entity Framework: The Filth and the Fury",permalink:"/blog.johnnyreilly.com/2012/10/03/unit-testing-and-entity-framework-filth"}},s=[{value:"Getting the Basics in Place",id:"getting-the-basics-in-place",children:[]},{value:"Switching over _Layout.cshtml to use Web Optimization",id:"switching-over-_layoutcshtml-to-use-web-optimization",children:[]}],c={toc:s};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A while ago I ",Object(a.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/06/how-im-structuring-my-javascript-in-web.html#WebOptimization"},"wrote")," about optimally serving up JavaScript in web applications. I mentioned that Microsoft had come up with a NuGet package called ",Object(a.b)("a",{parentName:"p",href:"http://nuget.org/packages/Microsoft.AspNet.Web.Optimization"},"Microsoft ASP.NET Web Optimization")," which could help with that by minifying and bundling CSS and JavaScript. At the time I was wondering if I would be able to to use this package with pre-existing MVC 3 projects (given that the package had been released together with MVC 4). Happily it turns out you can. But it's not quite as straightforward as I might have liked so I've documented how to get going with this here..."),Object(a.b)("h2",{id:"getting-the-basics-in-place"},"Getting the Basics in Place"),Object(a.b)("p",null,'To keep it simple I\'m going to go through taking a "vanilla" MVC 3 app and enhancing it to work with Web Optimization. To start, follow these basic steps:'),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open Visual Studio (bet you didn't see that coming!)"),Object(a.b)("li",{parentName:"ol"},"Create a new MVC 3 application (I called mine \"WebOptimizationWithMvc3\" to demonstrate my imaginative flair). It doesn't really matter which sort of MVC 3 project you create - I chose an Intranet application but really that's by the by."),Object(a.b)("li",{parentName:"ol"},"Update pre-existing NuGet packages"),Object(a.b)("li",{parentName:"ol"},'At the NuGet console type: "',Object(a.b)("inlineCode",{parentName:"li"},"Install-Package Microsoft.AspNet.Web.Optimization"),'"')),Object(a.b)("p",null,"Whilst the NuGet package adds the necessary references to your MVC 3 project it doesn't add the corresponding namespaces to the web.configs. To fix this manually add the following child XML element to the ",Object(a.b)("inlineCode",{parentName:"p"},"&lt;namespaces&gt;")," element in your root and Views web.config files:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'&lt;add namespace="System.Web.Optimization" /&gt;')),Object(a.b)("p",null,"This gives you access to ",Object(a.b)("inlineCode",{parentName:"p"},"Scripts")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Styles")," in your views without needing the fully qualified namespace. For reasons best known to Microsoft I had to close down and restart Visual Studio before intellisense started working. You may need to do likewise."),Object(a.b)("p",null,'Next up we want to get some JavaScript / CSS bundles in place. To do this, create a folder in the root of your project called "App',"_","Start\". There's nothing magical about this to my knowledge; this is just a convention that's been adopted to store all the bits of startup in one place and avoid clutterage. (I think this grew out of Nuget; see ",Object(a.b)("a",{parentName:"p",href:"http://blog.davidebbo.com/2011/02/appstart-folder-convention-for-nuget.html"},"David Ebbo talking about this here"),".) Inside your new folder you should add a new class called ",Object(a.b)("inlineCode",{parentName:"p"},"BundleConfig.cs")," which looks like this:"),Object(a.b)("script",{src:"https://gist.github.com/3839486.js?file=BundleConfig.cs"}),Object(a.b)("p",null,"The above is what you get when you create a new MVC 4 project (as it includes Web Optimization out of the box). All it does is create some JavaScript and CSS bundles relating to jQuery, jQuery UI, jQuery Validate, Modernizr and the standard site CSS. Nothing radical here but this example should give you an idea of how bundling can be configured and used. To make use of ",Object(a.b)("inlineCode",{parentName:"p"},"BundleConfig.cs")," you should modify your ",Object(a.b)("inlineCode",{parentName:"p"},"Global.asax.cs")," so it looks like this:"),Object(a.b)("script",{src:"https://gist.github.com/3839486.js?file=Global.asax.cs"}),Object(a.b)("p",null,"Once you've done this you're ready to start using Web Optimization in your MVC 3 application."),Object(a.b)("h2",{id:"switching-over-_layoutcshtml-to-use-web-optimization"},"Switching over ","_","Layout.cshtml to use Web Optimization"),Object(a.b)("p",null,'With a "vanilla" MVC 3 app the only use of CSS and JavaScript files is found in ',Object(a.b)("inlineCode",{parentName:"p"},"_Layout.cshtml"),". To switch over to using Web Optimization you should replace the existing ",Object(a.b)("inlineCode",{parentName:"p"},"_Layout.cshtml")," with this: (you'll see that the few differences that there are between the 2 are solely around the replacement of link / script tags with references to ",Object(a.b)("inlineCode",{parentName:"p"},"Scripts")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Styles")," instead)"),Object(a.b)("script",{src:"https://gist.github.com/3839486.js?file=_Layout.cshtml"}),Object(a.b)("p",null,"Do note that in the above ",Object(a.b)("inlineCode",{parentName:"p"},"Scripts.Render")," call we're rendering out 3 bundles; jQuery, jQuery UI and jQuery Validate. We're not using any of these in ",Object(a.b)("inlineCode",{parentName:"p"},"_Layout.cshtml")," but rendering these (and their associated link tags) gives us a chance to demonstrate that everything is working as expected."),Object(a.b)("p",null,"In your root web.config file make sure that the following tag is in place: ",Object(a.b)("inlineCode",{parentName:"p"},'&lt;compilation debug="<b>true</b>" targetFramework="4.0"&gt;'),". Then run, the generated HTML should look something like this:"),Object(a.b)("script",{src:"https://gist.github.com/3839486.js?file=debug  true"}),Object(a.b)("p",null,"This demonstrates that when the application has debug set to true you see the full scripts / links being rendered out as you would hope (to make your debugging less painful)."),Object(a.b)("p",null,"Now go back to your root ",Object(a.b)("inlineCode",{parentName:"p"},"web.config")," file and chance the debug tag to false: ",Object(a.b)("inlineCode",{parentName:"p"},'&lt;compilation debug="<b>false</b>" targetFramework="4.0"&gt;'),". This time when you run, the generated HTML should look something like this:"),Object(a.b)("script",{src:"https://gist.github.com/3839486.js?file=debug  false"}),Object(a.b)("p",null,"This time you can see that in non-debug mode (ie how it would run in Production) minified bundles of scripts and css files are being served up instead of the raw files. And that's it; done."))}p.isMDXComponent=!0},958:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return d}));var n=i(0),o=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(i),h=n,d=u["".concat(r,".").concat(h)]||u[h]||b[h]||a;return i?o.a.createElement(d,l(l({ref:t},c),{},{components:i})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<a;c++)r[c]=i[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"}}]);
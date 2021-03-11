(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=h(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(n),b=a,d=u["".concat(r,".").concat(b)]||u[b]||p[b]||i;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(3),o=n(7),i=(n(0),n(1159)),r={title:"Optimally Serving Up JavaScript",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp.net mvc","html helper","javascript","cassette"],hide_table_of_contents:!1},s={permalink:"/2012/07/01/how-im-structuring-my-javascript-in-web",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-07-01-how-im-structuring-my-javascript-in-web.md",source:"@site/blog/2012-07-01-how-im-structuring-my-javascript-in-web.md",description:"I have occasionally done some server-side JavaScript with Rhino and Node.js but this is the exception rather than the rule. Like most folk at the moment, almost all the JavaScript I write is in a web context.",date:"2012-07-01T00:00:00.000Z",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"html helper",permalink:"/tags/html-helper"},{label:"javascript",permalink:"/tags/javascript"},{label:"cassette",permalink:"/tags/cassette"}],title:"Optimally Serving Up JavaScript",readingTime:6.05,truncated:!1,prevItem:{title:"Rendering Partial View to a String",permalink:"/2012/07/16/rendering-partial-view-to-string"},nextItem:{title:"Reasons to be Cheerful (why now is a good time to be a dev)",permalink:"/2012/06/04/reasons-to-be-cheerful-why-now-is-good"}},l=[{value:"What are you up to?",id:"what-are-you-up-to",children:[]},{value:"&quot;Render first. JS second.&quot;",id:"render-first-js-second",children:[]},{value:"I want to serve you...",id:"i-want-to-serve-you",children:[]},{value:"Minification - I want to serve you less...",id:"minification---i-want-to-serve-you-less",children:[]},{value:"CDNs (they want to serve you)",id:"cdns-they-want-to-serve-you",children:[]},{value:"TL:DR",id:"tldr",children:[]}],c={toc:l};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I have occasionally done some server-side JavaScript with Rhino and Node.js but this is the exception rather than the rule. Like most folk at the moment, almost all the JavaScript I write is in a web context."),Object(i.b)("p",null," Over time I've come to adopt a roughly standard approach to how I structure my JavaScript; both the JavaScript itself and how it is placed / rendered in the an HTML document. I wanted to write about the approach I'm using. Partly just to document the approach but also because I often find writing about something crystalises my feelings on the subject in one way or another. I think that most of what I'm doing is sensible and rational but maybe as I write about this I'll come to some firmer conclusions about my direction of travel."),Object(i.b)("h2",{id:"what-are-you-up-to"},"What are you up to?"),Object(i.b)("p",null,"Before I get started it's probably worth mentioning the sort of web development I'm generally called to do (as this has obviously influenced my decisions)."),Object(i.b)("p",null,"Most of my work tends to be on web applications used internally within a company. That is to say, web applications accessible on a Company intranet. Consequently, the user base for my applications tends to be smaller than the Amazons and Googles of this world. It almost invariably sits on the ASP.NET stack in some way. Either classic WebForms or MVC."),Object(i.b)("h2",{id:"render-first-js-second"},'"Render first. JS second."'),Object(i.b)("p",null,"I took 2 things away from ",Object(i.b)("a",{parentName:"p",href:"http://www.stevesouders.com/blog/2010/09/30/render-first-js-second/"},"Steve Souder's article"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Async script loading is better than synchronous script loading"),Object(i.b)("li",{parentName:"ol"},"Get your screen rendered and ","*",Object(i.b)("strong",{parentName:"li"},"then"),"*"," execute your JavaScript")),Object(i.b)("p",null,"I'm not doing any async script loading as yet; although I am thinking of giving it a try at some point. In terms of choosing a loader I'll probably give RequireJS first crack of the whip (purely as it looks like most people are tending it's direction and that can't be without reason)."),Object(i.b)("p",null,"However - it seems that the concept of async script loading is kind of conflict with one of the other tenets of web wisdom: script bundling. Script bundling, if you're not already aware, is the idea that you should combine all your scripts into a single file and then just serve that. This prevents multiple HTTP requests as each script loads in. Async script loading is obviously okay with multiple HTTP requests, presumably because of the asynchronous non-blocking pattern of loading. So. 2 different ideas. And there's further movement on this front right now as ",Object(i.b)("a",{parentName:"p",href:"http://www.hanselman.com/blog/VisualStudio2012RCIsReleasedTheBigWebRollup.aspx"},"Microsoft are baking in script bundling to .NET 4.5"),"."),Object(i.b)("p",null,'Rather than divide myself between these 2 horses I have at the moment tried to follow the "JS second" part of this advice in my own (perhaps slightly old fashioned) way...'),Object(i.b)("h2",{id:"i-want-to-serve-you"},"I want to serve you..."),Object(i.b)("p",null,"I have been making sure that scripts are the last thing served to the screen by using a customised version of ",Object(i.b)("a",{parentName:"p",href:"http://frugalcoder.us/post/2009/06/29/Handling-Scripts-in-ASPNet-MVC.aspx"},"Michael J. Ryan's HtmlHelper"),". This lovely helper allows you to add script references as required from a number of different sources (layout page, view, partial view etc - even the controller if you so desired). It's simple to control the ordering of scripts by allowing you to set a priority for each script which determines the render order."),Object(i.b)("p",null,"Then as a final step before rendering the ",Object(i.b)("inlineCode",{parentName:"p"},"&lt;/body&gt;")," tag the scripts can be rendered in one block. By this point the web page is rendered visually and a marginal amount of blocking is, in my view, acceptable."),Object(i.b)("p",null,"If anyone is curious - the class below is my own version of Michael's helper. My contribution is the go faster stripes relating to the caching suffix and the ability to specify dependancies using script references rather than using numeric priority mechanism):"),Object(i.b)("script",{src:"https://gist.github.com/3019159.js?file=ScriptExtensions.cs"}),Object(i.b)("h2",{id:"minification---i-want-to-serve-you-less"},"Minification - I want to serve you less..."),Object(i.b)("p",null,"Another tweak I made to the script helper meant that when compiling either the debug or production (minified) versions of common JS files will be included if available. This means in a production environment the users get minified JS files so faster loading. And in a development environment we get the full JS files which make debugging more straightforward."),Object(i.b)("p",null,"What I haven't started doing is minifying my own JS files as yet. I know I'm being somewhat inconsistent here by sometimes serving minified files and sometimes not. I'm not proud. Part of my rationale for this that since most of my users use my apps on a daily basis they will for the most part be using cached JS files. Obviously there'll be slightly slower load times the first time they go to a page but nothing that significant I hope."),Object(i.b)("p",null,"I have thought of starting to do my own minification as a build step but have held off for now. Again this is something being baked into .NET 4.5; another reason why I have held off doing this a different way for now."),Object(i.b)("p",null,"Update"),Object(i.b)("p",null,"It now looks like this Microsofts optimisations have become ",Object(i.b)("a",{parentName:"p",href:"http://nuget.org/packages/Microsoft.AspNet.Web.Optimization"},"this Nuget package"),". It's early days (well it was released on 15th August 2012 and I'm writing this on the 16th) but I think this looks not to be tied to MVC 4 or .NET 4.5 in which case I could use it in my current MVC 3 projects. I hope so..."),Object(i.b)("p",null,"By the way there's a ",Object(i.b)("a",{parentName:"p",href:"http://www.pluralsight.com/training/Courses/TableOfContents/mvc4#mvc4-m3-optimization"},"nice rundown of how to use this by K. Scott Allen of Pluralsight"),". It's fantastic. Recommended."),Object(i.b)("p",null,"Update 2"),Object(i.b)("p",null,"Having done a little asking around I now understand that this ","*",Object(i.b)("strong",{parentName:"p"},"can"),"*"," be used with MVC 3 / .NET 4.0. Excellent!"),Object(i.b)("p",null,"One rather nice alternative script serving mechanism I've seen (but not yet used) is Andrew Davey's ",Object(i.b)("a",{parentName:"p",href:"http://getcassette.net"},"Cassette")," which I mean to take for a test drive soon. This looks fantastic (and is available as a ",Object(i.b)("a",{parentName:"p",href:"http://nuget.org/packages/Cassette"},"Nuget package")," ","-"," 10 points!)."),Object(i.b)("h2",{id:"cdns-they-want-to-serve-you"},"CDNs (they want to serve you)"),Object(i.b)("p",null,"I've never professionally made use of CDNs at all. There are ",Object(i.b)("a",{parentName:"p",href:"http://encosia.com/3-reasons-why-you-should-let-google-host-jquery-for-you/"},"clearly good reasons why you should")," but most of those good reasons relate most to public facing web apps."),Object(i.b)("p",null,"As I've said, the applications I tend to work on sit behind firewalls and it's not always guaranteed what my users can see from the grand old world of web beyond. (Indeed what they see can change on hour by hour basis sometimes...) Combined with that, because my apps are only accessible by a select few I don't face the pressure to reduce load on the server that public web apps can face."),Object(i.b)("p",null,"So while CDN's are clearly a good thing. I don't use them at present. And that's unlikely to change in the short term."),Object(i.b)("h2",{id:"tldr"},"TL:DR"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"I don't use CDNs - they're clearly useful but they don't suit my particular needs"),Object(i.b)("li",{parentName:"ol"},"I serve each JavaScript file individually just before the body tag. I don't bundle."),Object(i.b)("li",{parentName:"ol"},"I don't minify my own scripts (though clearly it wouldn't be hard) but I do serve the minified versions of 3rd party libraries (eg jQuery) in a Production environment."),Object(i.b)("li",{parentName:"ol"},"I don't use async script loaders at present. I may in future; we shall see.")),Object(i.b)("p",null,"I expect some of the above may change (well, possibly not point #1) but this general approach is working well for me at present."),Object(i.b)("p",null,"I haven't touched at all on how I'm structuring my JavaScript code itself. Perhaps next time."))}h.isMDXComponent=!0}}]);
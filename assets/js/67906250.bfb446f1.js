(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||h[b]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},680:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(4),a=n(10),i=(n(0),n(1211)),o={title:"Caching and cache-busting with RequireJS",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net","RequireJS","cache","caching"],hide_table_of_contents:!1},s={permalink:"/2014/03/05/caching-and-cache-busting-with-requirejs",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-03-05-caching-and-cache-busting-with-requirejs.md",source:"@site/blog/2014-03-05-caching-and-cache-busting-with-requirejs.md",title:"Caching and cache-busting with RequireJS",description:"Having put together a demo of using TypeScript with RequireJS my attention turned quickly to caching. Or rather, IE forced me to think about caching.",date:"2014-03-05T00:00:00.000Z",formattedDate:"March 5, 2014",tags:[{label:"asp.net",permalink:"/tags/asp-net"},{label:"RequireJS",permalink:"/tags/require-js"},{label:"cache",permalink:"/tags/cache"},{label:"caching",permalink:"/tags/caching"}],readingTime:8.965,truncated:!1,prevItem:{title:"Knockout + Globalize = valueNumber Binding Handler",permalink:"/2014/03/11/knockout-globalize-valuenumber-binding"},nextItem:{title:"TypeScript and RequireJS (Keep It Simple)",permalink:"/2014/02/27/typescript-and-requirejs-keep-it-simple"}},l=[{value:"Research",id:"research",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Let\u2019s get the server involved!",id:"lets-get-the-server-involved",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Having put together a demo of using TypeScript with RequireJS my attention turned quickly to caching. Or rather, IE forced me to think about caching."),Object(i.b)("p",null," Everyone has their own workflow, their own tools. The things they like to use as they put things together. And for me I\u2019m a Visual Studio man \u2013 it\u2019s not everyone\u2019s bag but I really like it. I find the JavaScript tooling is now really solid combined with IE and it (generally) makes me more productive. I want to use it. But, as you know, nothing is perfect..."),Object(i.b)("p",null,"So there I was, delighted with the TypeScript / RequireJS demo. It was working just lovely. I started investigating the debugging story. What would happen if I change a script file on the fly? When I refresh IE does it pick up the tweaks?"),Object(i.b)("p",null,"Let\u2019s find out. I'll open up alerter.ts and change this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'var name = "John";\n')),Object(i.b)("p",null,"to this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'var name = "Bobby";\n')),Object(i.b)("p",null,"And ","*",Object(i.b)("strong",{parentName:"p"},"boom"),"*",'! Nothing. I\u2019ve refreshed IE and I\u2019m expecting to see \u201cWelcome to Code Camp, Bobby\u201d. But I\u2019m still reading \u201cWelcome to Code Camp, John\u201d... I bet Chrome wouldn\u2019t do this to me... And I\u2019m right! It doesn\u2019t. I don\u2019t want to get too much into the details of this but it looks like it comes down to Chrome sending an "If-Modified-Since" request header where IE does not. I\u2019m pretty sure that IE could be configured to behave likewise but I\u2019d rather not have to remember that. (And furthermore I don\u2019t want to have to remind every person that works on the app to do that as well.)'),Object(i.b)("p",null,"This raises a number of issues but essentially it gets me to think about the sort of caching I want. Like most of you I have 2 significant use cases:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Development"),Object(i.b)("li",{parentName:"ol"},"Production")),Object(i.b)("p",null,"For Development I want any changes to JavaScript files to be picked up \u2013 I do ","*",Object(i.b)("strong",{parentName:"p"},"not"),"*"," want caching. For Production I want caching in order that users have better performance / faster loading. If I ship a new version of the app to Production I also want users to pick up the new versions of a file and cache those."),Object(i.b)("h2",{id:"research"},"Research"),Object(i.b)("p",null,"I did a little digging. The most useful information I found was ",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/q/8315088/761388"},"a StackOverflow post on RequireJS and caching"),". Actually I\u2019d recommend anyone reading this to head over and read that from top to bottom. Read the question and all of the answers as well \u2013 pretty much everything will add to your understanding of RequireJS."),Object(i.b)("p",null,"As with any set of answers there are different and conflicting views. ",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/8479953/761388"},"Phil McCull\u2019s (accepted) answer")," was for my money the most useful. It pointed ",Object(i.b)("a",{parentName:"p",href:"http://requirejs.org/docs/api.html#config-urlArgs"},"back to the RequireJS documentation"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'*"urlArgs: Extra query string arguments appended to URLs that RequireJS uses to fetch resources. Most useful to cache bust when the browser or server is not configured correctly. Example cache bust setting for urlArgs:'),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre",className:"language-js"},'urlArgs: "bust=" +  (new Date()).getTime()\n')),Object(i.b)("p",{parentName:"blockquote"},'During development it can be useful to use this, however be sure to remove it before deploying your code."'),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"}))),Object(i.b)("p",null,"Phil\u2019s answer suggests using urlArgs ","*",Object(i.b)("strong",{parentName:"p"},"both"),"*"," for Production and for Development in 2 different ways. Using what amounts to a random number in the Development environment (as in the official docs) for cache-busting. For the Production environment he suggests using a specific version number which allows for client-side caching between different build versions."),Object(i.b)("p",null,"Full disclosure, this is not the approach favoured by James Burke (author of RequireJS). He doesn\u2019t go into why in the RequireJS docs but has ",Object(i.b)("a",{parentName:"p",href:"https://groups.google.com/forum/#!msg/requirejs/3E9dP_BSQoY/36ut2Gtko7cJ"},"elsewhere expounded on this"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"For deployed assets, I prefer to put the version or hash for the whole build as a build directory, then just modify the baseUrl config used for the project to use that versioned directory as the baseUrl. Then no other files change, and it helps avoid some proxy issues where they may not cache an URL with a query string on it. "))),Object(i.b)("p",null,"I\u2019m not so worried about the proxy caching issue. My users tend to be people who use the application repeatedly and so the caching I most care about is their local machine caching. From what I understand urlArgs will work fine in this scenario. Yes the downside of this approach is that some proxy servers may not cache these assets. That\u2019s a shame but it\u2019s not a dealbreaker for me. As I said, I still have client side caching."),Object(i.b)("p",null,"If you want to go a little deeper I recommend reading ",Object(i.b)("a",{parentName:"p",href:"http://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/"},"Steve Souders post")," on the topic (in case you\u2019re not aware Steve is Google\u2019s Mr Performance). Interestingly, looking at the comments on the post it sounds like the lack of support for proxy caching with querystrings may that may be starting to change."),Object(i.b)("p",null,"But either way, I\u2019m happy with this approach. As I always say, if it\u2019s good enough for Stack Overflow then it\u2019s good enough for me:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-pG0ahnzaPJM/UxcP7f6ENII/AAAAAAAAAhY/VVahRmEe5_0/s320/IfItsGoodEnoughForStackOverflow.png",alt:null})),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("p",null,"I\u2019m going to start off using the demo from ",Object(i.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2014/02/typescript-and-requirejs-keep-it-simple.html"},"my last blog post")," as a basis. Let\u2019s take that and evolve it. As a result my solution is going to work with TypeScript and RequireJS (since the previous demo was about that) but the implementation I\u2019m going to come up with would work as well with vanilla JS as it would with TypeScript compiled JS."),Object(i.b)("p",null,"Let\u2019s take a look at our index.html. First we\u2019ll drop our usage of ",Object(i.b)("inlineCode",{parentName:"p"},"main.ts")," / ",Object(i.b)("inlineCode",{parentName:"p"},"main.js"),' (our bootstrapper file that defines config and kicks off the "app"). We\u2019ll pull out the use of ',Object(i.b)("inlineCode",{parentName:"p"},"data-main")," and instead, just after the reference to require we\u2019ll add the contents of ",Object(i.b)("inlineCode",{parentName:"p"},"main.js")," much in ",Object(i.b)("a",{parentName:"p",href:"http://requirejs.org/docs/api.html#config"},"the style of the RequireJS docs"),". We\u2019ll also include a urlArgs that as a cache-buster that uses the approach outlined ",Object(i.b)("a",{parentName:"p",href:"http://requirejs.org/docs/api.html#config-urlArgs"},"in the RequireJS docs"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<script src="/scripts/require.js"><\/script>\n<script>\n    require.config({\n        baseUrl: "/scripts",\n        paths: {\n            "jquery": "jquery-2.1.0"\n        },\n        urlArgs: "v=" +  (new Date()).getTime()\n    });\n \n    require(["alerter"], function (alerter) {\n        alerter.showMessage();\n    });\n<\/script>\n')),Object(i.b)("p",null,"Spinning up the site all runs as you would expect. The question is: does this work as a cache-buster? Let\u2019s tweak ",Object(i.b)("inlineCode",{parentName:"p"},"alerter.ts")," / ",Object(i.b)("inlineCode",{parentName:"p"},"alerter.js"),". And:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-WTNrPPyeMTY/UxcRTQpqM3I/AAAAAAAAAhk/ICvFXxji3FY/s320/newDateSolution.png",alt:null})),Object(i.b)("p",null,"Oh yeah! We\u2019re cache-busting like gangbusters!"),Object(i.b)("p",null,"So now let\u2019s comment out our existing urlArgs (which represents the Development solution from Phil\u2019s answer) and replace it with a fixed value like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'//urlArgs: "v=" +  (new Date()).getTime()\n        urlArgs: "v=1"\n')),Object(i.b)("p",null,"This represents the Production solution from Phil\u2019s answer. Now let\u2019s run, refresh a couple of times and ensure that our fixed querystring value results in a 304 status code (indicating \u201cNot Modified\u201d and cached item used):"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-Yy138lKDkuE/UxcRr7EpiXI/AAAAAAAAAhs/QVPcUF-rdgw/s320/FixedQuerystring304.png",alt:null})),Object(i.b)("p",null,"It does! Now let\u2019s increment the value:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'urlArgs: "v=2"\n')),Object(i.b)("p",null,"When we refresh the browser this should result in 200 status codes (indicating the cached version has not been used and the client has picked up a new version from the server)."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-qx7Ya1MZNC8/UxcSBwKjM_I/AAAAAAAAAh0/aywHMXHUrwI/s320/NewFixedQuerystring200.png",alt:null})),Object(i.b)("p",null,"Success! That\u2019s our premise tested \u2013 both Development and Production scenarios. Now we want to turn this into a slightly more sophisticated reusable solution like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<script src="/scripts/require.js"><\/script>\n<script>\n    var inDevelopment = true,\n        version = "1";\n \n    require.config({\n        baseUrl: "/scripts",\n        paths: {\n            "jquery": "jquery-2.1.0"\n        },\n        urlArgs: "v=" + ((inDevelopment)\n            ? (new Date()).getTime()\n            : version)\n    });\n \n    require(["alerter"], function (alerter) {\n        alerter.showMessage();\n    });\n<\/script>\n')),Object(i.b)("p",null,"In the tweaked script above 2 variables are defined. The first is ",Object(i.b)("inlineCode",{parentName:"p"},"inDevelopment")," which models whether you are in the Development scenario (true) or the Production scenario (false). The second is ",Object(i.b)("inlineCode",{parentName:"p"},"version")," which represents the application version number. With this in place I can simply flip between the Development and Production scenario by changing the value of ",Object(i.b)("inlineCode",{parentName:"p"},"inDevelopment"),". And when a new version ships I can change the version number to force a cache refresh on the users."),Object(i.b)("p",null,"What drives the values of ",Object(i.b)("inlineCode",{parentName:"p"},"inDevelopment")," / ",Object(i.b)("inlineCode",{parentName:"p"},"version")," is down to you. You could load the ",Object(i.b)("inlineCode",{parentName:"p"},"inDevelopment")," / ",Object(i.b)("inlineCode",{parentName:"p"},"version")," values from some application endpoint. You could hardcode them in your screen. The choices are yours. I\u2019m going to finish off with a simple approach that I've found useful."),Object(i.b)("h2",{id:"lets-get-the-server-involved"},"Let\u2019s get the server involved!"),Object(i.b)("p",null,"I want the server to drive my urlArgs value. Why? Well this project happens to be an ASP.NET project which handily has the concept of Development / Production scenarios nicely modelled by the ",Object(i.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/s10awwz0(v=vs.85).aspx"},"web.config\u2019s compilation debug flag"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n  <system.web>\n    <compilation debug="true" targetFramework="4.5" />\n    <httpRuntime targetFramework="4.5" />\n  </system.web>\n</configuration>\n')),Object(i.b)("p",null,"If debug is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," then that reflects the Development scenario. If debug is ",Object(i.b)("inlineCode",{parentName:"p"},"false")," then that reflects the Production scenario."),Object(i.b)("p",null,"So bearing that in mind I want to use the value of debug to drive my ",Object(i.b)("inlineCode",{parentName:"p"},"urlArgs"),". If I have my debug flag set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," I want to cache-bust all the way. Likewise, if debug is set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," then I want to serve up the version number so that caching is used until the version number changes. Time to break out the C#:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'namespace RequireJSandCaching\n{\n    public static class RequireJSHelpers\n    {\n        private static readonly bool _inDebug;\n        private static readonly string _version;\n \n        static RequireJSHelpers()\n        {\n            _inDebug = System.Web.HttpContext.Current.IsDebuggingEnabled;\n            _version = (_inDebug)\n                ? "InDebug"\n                : System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();\n        }\n \n        public static string Version\n        {\n            get\n            {\n                return (_inDebug)\n                    ? System.DateTime.Now.Ticks.ToString()\n                    : _version;\n            }\n        }\n    }\n}\n')),Object(i.b)("p",null,"This is a static helper class called ",Object(i.b)("inlineCode",{parentName:"p"},"RequireJSHelpers"),". It has a static constructor which initialises 2 fields. ",Object(i.b)("inlineCode",{parentName:"p"},"_inDebug")," is taken from ",Object(i.b)("inlineCode",{parentName:"p"},"System.Web.HttpContext.Current.IsDebuggingEnabled")," which exposes the compilation debug value. ",Object(i.b)("inlineCode",{parentName:"p"},"_version")," is initialised, when debug is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", to the version number of the dll (driven by this ",Object(i.b)("inlineCode",{parentName:"p"},'AssemblyInfo.cs [assembly: AssemblyVersion("1.0.*")]')," attribute)"),Object(i.b)("p",null,"There\u2019s 1 property on this helper class called version. Depending on whether the app is in debug mode or not this attribute either exposes the application version or effectively the C# equivalent to JavaScript\u2019s ",Object(i.b)("inlineCode",{parentName:"p"},"(new Date()).getTime()"),". (Well strictly speaking they have a different starting point in history but that\u2019s by-the-by... Both are of equal value as cache-busters.)"),Object(i.b)("p",null,"You probably see where this is all going."),Object(i.b)("p",null,"Let\u2019s clone our ",Object(i.b)("inlineCode",{parentName:"p"},"index.html")," page and call it ",Object(i.b)("inlineCode",{parentName:"p"},"serverUrlArgs.cshtml")," (note the suffix). Let\u2019s replace the script section with this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<script>\n    require.config({\n        baseUrl: "/scripts",\n        paths: {\n            "jquery": "jquery-2.1.0"\n        },\n        urlArgs: "v=@RequireJSandCaching.RequireJSHelpers.Version"\n    });\n \n    require(["alerter"], function (alerter) {\n        alerter.showMessage();\n    });\n<\/script>\n')),Object(i.b)("p",null,"Which drives ",Object(i.b)("inlineCode",{parentName:"p"},"urlArgs")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"RequireJSHelpers.Version")," property. If we fire it up now (with debug set to true in our web.config) then we see requests like this:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-N9TIJO1jzU4/UxcUW8z2uaI/AAAAAAAAAiA/-vo6wVx2NoI/s320/DebugEqualsTrue.png",alt:null})),Object(i.b)("p",null,"And if we set debug to false in our web.config then (after the initial requests have been cached) we see requests like this:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-xv40UDHgJfk/UxcUe4SZrUI/AAAAAAAAAiI/euLoArWTPLw/s320/DebugEqualsFalse.png",alt:null})),Object(i.b)("p",null,"This leaves us with a simple mechanism to drive our RequireJS caching. If debug is set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," in our ",Object(i.b)("inlineCode",{parentName:"p"},"web.config")," then Require will perform cache-busting. If debug is set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," then RequireJS will perform only version-changing cache-busting and will, whilst the version remains constant, support client-side caching."),Object(i.b)("p",null,"Finished. In case it helps I\u2019ve put the code for this ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/RequireJSandCaching"},"up on GitHub"),"."))}u.isMDXComponent=!0}}]);
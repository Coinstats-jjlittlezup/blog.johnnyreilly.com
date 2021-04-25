(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},632:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(4),a=n(10),r=(n(0),n(1219)),i={title:"A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net mvc","asp.net","html5mode","AngularJS","ASP.Net Web API"],hide_table_of_contents:!1},l={permalink:"/2015/05/05/a-tale-of-angular-html5mode-aspnet-mvc",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-05-05-a-tale-of-angular-html5mode-aspnet-mvc.md",source:"@site/blog/2015-05-05-a-tale-of-angular-html5mode-aspnet-mvc.md",title:"A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API",description:"So. You want to kick hash based routing to the kerb. You want real URLs. You've read the HTML5 mode section of the Angular $location docs and you're good to go. It's just a matter of dropping $locationProvider.html5Mode(true) into your app initialisation right?",date:"2015-05-05T00:00:00.000Z",formattedDate:"May 5, 2015",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"asp.net",permalink:"/tags/asp-net"},{label:"html5mode",permalink:"/tags/html-5-mode"},{label:"AngularJS",permalink:"/tags/angular-js"},{label:"ASP.Net Web API",permalink:"/tags/asp-net-web-api"}],readingTime:2.945,truncated:!1,prevItem:{title:"NgValidationFor Baby Steps",permalink:"/2015/05/11/ngvalidationfor-baby-steps"},nextItem:{title:"Tonight I'll Start an Open Source Project...",permalink:"/2015/04/24/tonight-ill-start-open-source-project"}},s=[{value:"ASP.Net MVC",id:"aspnet-mvc",children:[]},{value:"ASP.Net Web API",id:"aspnet-web-api",children:[]}],u={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"So. You want to kick hash based routing to the kerb. You want ",Object(r.b)("em",{parentName:"p"},"real")," URLs. You've read the HTML5 mode section of the ",Object(r.b)("a",{parentName:"p",href:"https://docs.angularjs.org/guide/$location"},"Angular $location docs")," and you're good to go. It's just a matter of dropping ",Object(r.b)("inlineCode",{parentName:"p"},"$locationProvider.html5Mode(true)")," into your app initialisation right?"),Object(r.b)("p",null," Wrong."),Object(r.b)("p",null,"You want your URLs to be shareable. If, when you copy the URL out of your browser and send it someone else, they do not get taken to the same position in the application as you do then I've got news for you: THAT'S NOT REALLY A URL. And just using ",Object(r.b)("inlineCode",{parentName:"p"},"$locationProvider.html5Mode(true)")," has done nothing useful for you. You want to ensure that, if the URL entered in the browser does not relate to a specific server-side end-point, the self-same HTML root page is ",Object(r.b)("em",{parentName:"p"},"always")," served up. Then Angular can load the correct resources for the URL you have entered and get you to the required state."),Object(r.b)("p",null,"There are tips to be found in Angular UI's ",Object(r.b)("a",{parentName:"p",href:"https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode"},"How to: Configure your server to work with html5Mode")," doc. However they required a little extra fiddling to get my ASP.Net back end working quite as I wanted. To save you pain, here are my cultural learnings."),Object(r.b)("h2",{id:"aspnet-mvc"},"ASP.Net MVC"),Object(r.b)("p",null,"I had an ASP.Net MVC app which I wanted to use ",Object(r.b)("inlineCode",{parentName:"p"},"html5mode")," with. To do this is simply a matter of tweaking your ",Object(r.b)("inlineCode",{parentName:"p"},"RouteConfig.cs")," like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'public class RouteConfig\n    {\n        public static void RegisterRoutes(RouteCollection routes)\n        {\n            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");\n\n            // Here go the routes that you still want to be able to hit\n            routes.MapRoute(\n                name: "IAmARouteThatYouStillWantToHit",\n                url: "ThatsWhyIAmRegisteredFirst",\n                defaults: new { controller = "Hittable", action = "Index" }\n            );\n\n            // Everything else will hit Home/Index which serves up the root angular app page\n            routes.MapRoute(\n                name: "Default",\n                url: "{*anything}", // THIS IS THE MAGIC!!!!\n                defaults: new { controller = "Home", action = "Index" }\n            );\n        }\n')),Object(r.b)("p",null,"With this in place my existing routes work just as I would hope. Any route that doesn't fit that registered can be assumed to be ",Object(r.b)("inlineCode",{parentName:"p"},"html5mode")," related and will serve up the root angular app page as I'd hope."),Object(r.b)("h2",{id:"aspnet-web-api"},"ASP.Net Web API"),Object(r.b)("p",null,'Later I realised that the app in question was mostly static content. Certainly the root angular app page was and so it seemed wasteful to require an ASP.Net MVC controller to serve up that static content. So I stripped out MVC from the app entirely, choosing to serve raw HTML instead. For the dynamic parts I switched to using Web API. This was "hittable" as long as I had my ',Object(r.b)("inlineCode",{parentName:"p"},"WebApiConfig.cs")," and my ",Object(r.b)("inlineCode",{parentName:"p"},"system.webServer")," section in my ",Object(r.b)("inlineCode",{parentName:"p"},"web.config")," lined up correctly, viz:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'public static class WebApiConfig\n    {\n        public static void Register(HttpConfiguration config)\n        {\n            // Web API routes\n            config.MapHttpAttributeRoutes();\n\n            config.Routes.MapHttpRoute(\n                name: "DefaultApi",\n                routeTemplate: "api/{controller}/{id}",\n                defaults: new { id = RouteParameter.Optional }\n            );\n\n            // other stuff\n        }\n    }\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n\n    <system.webServer>\n\n        <defaultDocument>\n            <files>\n                <clear />\n                <add value="build/index.html" /> \x3c!-- This is the root document for the Angular app --\x3e\n            </files>\n        </defaultDocument>\n        \n        <rewrite>\n            <rules>\n                <rule name="Main Rule" stopProcessing="true">\n                    <match url=".*" />\n                    <conditions logicalGrouping="MatchAll">\n                        \x3c!-- Allows "api/" prefixed URLs to still hit Web API controllers \n                             as defined in WebApiConfig --\x3e\n                        <add input="{REQUEST_URI}" pattern="api/" ignoreCase="true" negate="true" />\n                        \n                        \x3c!-- Static files and directories can be served so partials etc can be loaded --\x3e\n                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />\n                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />\n                    </conditions>\n                    <action type="Rewrite" url="/" />\n                </rule>\n            </rules>\n        </rewrite>\n        \n    </system.webServer>\n\n</configuration>\n')),Object(r.b)("p",null,'With this in place I can happily hit "api" prefixed URLs and still land on my Web API controllers whilst other URLs will serve up the root angular app page. Lovely.'))}c.isMDXComponent=!0}}]);
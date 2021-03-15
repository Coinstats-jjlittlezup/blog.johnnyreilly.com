(window.webpackJsonp=window.webpackJsonp||[]).push([[767],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,h=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(h,s(s({ref:t},u),{},{components:n})):r.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1190:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/AccessDenied-fa23475ee86b66fd86dff4b22e9805d0.png"},1191:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Forbidden-bcdccecaf89f2faca1a8592c8d15dc8b.png"},261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(8),i=(n(0),n(1166)),a={title:"How to make Azure AD 403",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},s={permalink:"/2020/12/21/how-to-make-azure-ad-403",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-12-21-how-to-make-azure-ad-403.md",source:"@site/blog/2020-12-21-how-to-make-azure-ad-403.md",description:"This post is about how you can customise ASP.NETs integration with Azure Active Directory to customise the behaviour that redirects unauthorized requests to the AccessDenied endpoint. If you're using the tremendous Azure Active Directory for authentication with ASP.NET then there's a good chance you're using the Microsoft.Identity.Web library. It's this that allows us to drop the following statement into the ConfigureServices method of our Startup class:",date:"2020-12-21T00:00:00.000Z",formattedDate:"December 21, 2020",tags:[],title:"How to make Azure AD 403",readingTime:2.665,truncated:!1,prevItem:{title:"Prettier your CSharp with dotnet-format and lint-staged",permalink:"/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged"},nextItem:{title:"Nullable reference types; CSharp's very own strictNullChecks",permalink:"/2020/12/20/nullable-reference-types-csharp-strictnullchecks"}},c=[{value:"Give us <code>403</code>",id:"give-us-403",children:[]},{value:"Extra customisation bonus points",id:"extra-customisation-bonus-points",children:[]}],u={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This post is about how you can customise ASP.NETs integration with Azure Active Directory to customise the behaviour that redirects unauthorized requests to the ",Object(i.b)("inlineCode",{parentName:"p"},"AccessDenied")," endpoint. If you're using the tremendous ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-app-configuration?tabs=aspnetcore"},"Azure Active Directory for authentication with ASP.NET")," then there's a good chance you're using the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/AzureAD/microsoft-identity-web"},Object(i.b)("inlineCode",{parentName:"a"},"Microsoft.Identity.Web"))," library. It's this that allows us to drop the following statement into the ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigureServices")," method of our ",Object(i.b)("inlineCode",{parentName:"p"},"Startup")," class:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"services.AddMicrosoftIdentityWebAppAuthentication(Configuration);\n")),Object(i.b)("p",null,"Which (combined with configuration in our ",Object(i.b)("inlineCode",{parentName:"p"},"appsettings.json")," files) hooks us up with Azure AD for authentication. This is 95% awesome. The 5% is what we're here for. Here's a screenshot of the scenario that troubles us:"),Object(i.b)("p",null," ",Object(i.b)("img",{src:n(1190).default})),Object(i.b)("p",null,"We've made a request to ",Object(i.b)("inlineCode",{parentName:"p"},"/WeatherForecast"),"; a secured endpoint (a controller decorated with the ",Object(i.b)("inlineCode",{parentName:"p"},"Authorize")," attribute). We're authenticated; the app knows who we are. But we're not authorized / allowed to access this endpoint. We don't have permission. The HTTP specification caters directly for this scenario with ",Object(i.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-6.5.3"},"status code ",Object(i.b)("inlineCode",{parentName:"a"},"403 Forbidden")),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The 403 (Forbidden) status code indicates that the server understood the request but refuses to authorize it.")),Object(i.b)("p",null,"However, ",Object(i.b)("inlineCode",{parentName:"p"},"Microsoft.Identity.Web")," is ploughing another furrow. Instead of returning ",Object(i.b)("inlineCode",{parentName:"p"},"403"),", it's returning ",Object(i.b)("inlineCode",{parentName:"p"},"302 Found")," and redirecting the browser to ",Object(i.b)("inlineCode",{parentName:"p"},"https://localhost:5001/Account/AccessDenied?ReturnUrl=%2FWeatherForecast"),". Now the intentions here are ",Object(i.b)("em",{parentName:"p"},"great"),". If you wanted to implement a page in your application at that endpoint that displayed some kind of useful message it would be really useful. However, what if you want the more HTTP-y behaviour instead? In the case of a HTTP request triggered by JavaScript (typical for Single Page Applications) then this redirect isn't that helpful. JavaScript doesn't really know what to do with the ",Object(i.b)("inlineCode",{parentName:"p"},"302")," and whilst you could code around this, it's not desirable."),Object(i.b)("p",null,"We want ",Object(i.b)("inlineCode",{parentName:"p"},"403")," ","-"," we don't want ",Object(i.b)("inlineCode",{parentName:"p"},"302"),"."),Object(i.b)("h2",{id:"give-us-403"},"Give us ",Object(i.b)("inlineCode",{parentName:"h2"},"403")),Object(i.b)("p",null,"You can have this behaviour by dropping the following code after your ",Object(i.b)("inlineCode",{parentName:"p"},"services.AddMicrosoftIdentityWebAppAuthentication"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"services.Configure<CookieAuthenticationOptions>(CookieAuthenticationDefaults.AuthenticationScheme, options =>\n{\n    options.Events.OnRedirectToAccessDenied = new Func<RedirectContext<CookieAuthenticationOptions>, Task>(context =>\n    {\n        context.Response.StatusCode = StatusCodes.Status403Forbidden;\n        return context.Response.CompleteAsync();\n    });\n});\n")),Object(i.b)("p",null,"This code hijacks the redirect to AccessDenied and transforms it into a ",Object(i.b)("inlineCode",{parentName:"p"},"403")," instead. Tremendous! What does this look like?"),Object(i.b)("p",null,Object(i.b)("img",{src:n(1191).default})),Object(i.b)("p",null,"This is the behaviour we want!"),Object(i.b)("h2",{id:"extra-customisation-bonus-points"},"Extra customisation bonus points"),Object(i.b)("p",null,"You may want to have some nuance to the way you handle unauthorized requests. Because of the nature of ",Object(i.b)("inlineCode",{parentName:"p"},"OnRedirectToAccessDenied")," this is entirely possible; you have complete access to the requests coming in which you can use to direct behaviour. To take a single example, let's say we want to direct normal browsing behaviour (AKA humans clicking about in Chrome) which is not authorized to a given screen, otherwise provide ",Object(i.b)("inlineCode",{parentName:"p"},"403"),"s. What would that look like?"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'services.Configure<CookieAuthenticationOptions>(CookieAuthenticationDefaults.AuthenticationScheme, options =>\n{\n    options.Events.OnRedirectToAccessDenied = new Func<RedirectContext<CookieAuthenticationOptions>, Task>(context =>\n    {\n        var isRequestForHtml = context.Request.Headers["Accept"].ToString().Contains("text/html");\n        if (isRequestForHtml) {\n            context.Response.StatusCode = StatusCodes.Status302Found;\n            context.Response.Headers["Location"] = "/unauthorized";\n        }\n        else {\n            context.Response.StatusCode = StatusCodes.Status403Forbidden;\n        }\n\n        return context.Response.CompleteAsync();\n    });\n});\n')),Object(i.b)("p",null,"So above, we check the request ",Object(i.b)("inlineCode",{parentName:"p"},"Accept")," headers and see if they contain ",Object(i.b)("inlineCode",{parentName:"p"},'"text/html"'),"; which we're using as a signal that the request came from a users browsing. (This may not be bulletproof; better suggestions gratefully received.) If the request does contain a ",Object(i.b)("inlineCode",{parentName:"p"},'"text/html"``Accept')," header then we redirect the client to an ",Object(i.b)("inlineCode",{parentName:"p"},"/unauthorized")," screen, otherwise we return ",Object(i.b)("inlineCode",{parentName:"p"},"403")," as we did before. Super flexible and powerful!"))}l.isMDXComponent=!0}}]);
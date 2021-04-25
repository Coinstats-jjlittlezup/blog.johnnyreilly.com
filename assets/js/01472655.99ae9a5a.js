(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),h=o,y=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return n?r.a.createElement(y,i(i({ref:t},u),{},{components:n})):r.a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(4),r=n(10),a=(n(0),n(1219)),s={title:"WhiteList Proxying with ASP.Net Core",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp net core","proxy","http requests","whitelist"],hide_table_of_contents:!1},i={permalink:"/2019/02/22/whitelist-proxying-with-aspnet-core",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-02-22-whitelist-proxying-with-aspnet-core.md",source:"@site/blog/2019-02-22-whitelist-proxying-with-aspnet-core.md",title:"WhiteList Proxying with ASP.Net Core",description:'Once upon a time there lived a young team who were building a product. They were ready to go live with their beta and so they set off on a journey to a mystical land they had heard tales of. This magical kingdom was called "Production". However, Production was a land with walls and but one gate. That gate was jealously guarded by a defender named "InfoSec". InfoSec was there to make sure that only the the right people, noble of thought and pure of deed were allowed into the promised land. InfoSec would ask questions like "are you serving over HTTPS" and "what are you doing about cross site scripting"?',date:"2019-02-22T00:00:00.000Z",formattedDate:"February 22, 2019",tags:[{label:"asp net core",permalink:"/tags/asp-net-core"},{label:"proxy",permalink:"/tags/proxy"},{label:"http requests",permalink:"/tags/http-requests"},{label:"whitelist",permalink:"/tags/whitelist"}],readingTime:5.95,truncated:!1,prevItem:{title:"The Big One Point Oh",permalink:"/2019/03/06/the-big-one-point-oh"},nextItem:{title:"TypeScript and webpack: Watch It",permalink:"/2019/01/13/typescript-and-webpack-watch-it"}},p=[{value:"The Proxy Regroup",id:"the-proxy-regroup",children:[]},{value:"Proxy Part 1",id:"proxy-part-1",children:[]},{value:"Proxy Part 2",id:"proxy-part-2",children:[]}],u={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Once upon a time there lived a young team who were building a product. They were ready to go live with their beta and so they set off on a journey to a mystical land they had heard tales of. This magical kingdom was called "Production". However, Production was a land with walls and but one gate. That gate was jealously guarded by a defender named "InfoSec". InfoSec was there to make sure that only the the right people, noble of thought and pure of deed were allowed into the promised land. InfoSec would ask questions like "are you serving over HTTPS" and "what are you doing about cross site scripting"?'),Object(a.b)("p",null,'The team felt they had good answers to InfoSec\'s questions. However, just as they were about to step through the gate, InfoSec held up their hand and said "your application wants to access a database... database access needs to take place on our own internal network. Not over the publicly accessible internet. You shall not pass."'),Object(a.b)("p",null,'The team, with one foot in the air, paused. They swallowed and said "can you give us five minutes?"'),Object(a.b)("p",null," ",Object(a.b)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-tmH5nbo_kGY/XG-8jmokKdI/AAAAAAAAN_Q/1zzN3IfRtlopNC9HTRio6HdpVCeO5jMkwCPcBGAYYCw/s640/hang-on-lads-ive-got-a-great-idea.jpg",alt:null})),Object(a.b)("h2",{id:"the-proxy-regroup"},"The Proxy Regroup"),Object(a.b)("p",null,"And so it came to pass that the teams product (which took the form of ASP.Net Core web application) had to be changed. Where once there had been a single application, there would now be two; one that lived on the internet (the ",Object(a.b)("em",{parentName:"p"},"web")," app) and one that lived on the companies private network (the ",Object(a.b)("em",{parentName:"p"},"API")," app). The API app would do all the database access. In fact the product team opted to move all significant operations into the API as well. This left the web app with two purposes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"the straightforward serving of HTML, CSS, JS and images"),Object(a.b)("li",{parentName:"ol"},"the proxying of API calls through to the API app")),Object(a.b)("h2",{id:"proxy-part-1"},"Proxy Part 1"),Object(a.b)("p",null,"In the early days of this proxying the team reached for ",Object(a.b)("a",{parentName:"p",href:"https://github.com/twitchax/AspNetCore.Proxy"},Object(a.b)("inlineCode",{parentName:"a"},"AspNetCore.Proxy")),". It's a great open source project that allows you to proxy HTTP requests. It gives you complete control over the construction of proxy requests, so that you can have a request come into your API and end up proxying it to a URL with a completely different path on the proxy server."),Object(a.b)("h2",{id:"proxy-part-2"},"Proxy Part 2"),Object(a.b)("p",null,"The approach offered by ",Object(a.b)("inlineCode",{parentName:"p"},"AspNetCore.Proxy")," is fantastically powerful in terms of control. However, we didn't actually need that level of configurability. In fact, it resulted in us writing a great deal of boilerplate code. You see in our case we'd opted to proxy path for path, changing only the server name on each proxied request. So if a GET request came in going to ",Object(a.b)("a",{parentName:"p",href:"https://web.app.com/api/version"},"https://web.app.com/api/version")," then we would want to proxy it to a GET request to ",Object(a.b)("a",{parentName:"p",href:"https://api.app.com/api/version"},"https://api.app.com/api/version"),". You see? All we did was swap ",Object(a.b)("a",{parentName:"p",href:"https://web.app.com"},"https://web.app.com")," for ",Object(a.b)("a",{parentName:"p",href:"https://api.app.com."},"https://api.app.com.")," Nothing more. We did that as a rule. We knew we ",Object(a.b)("em",{parentName:"p"},"always")," wanted to do just this."),Object(a.b)("p",null,"So we ended up spinning up our own solution which allowed just the specification of paths we wanted to proxy with their corresponding HTTP verbs. Let's talk through it. Usage of our approach ended up as a middleware within our web app's ",Object(a.b)("inlineCode",{parentName:"p"},"Startup.cs"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'public void Configure(IApplicationBuilder app) {\n            // ...\n\n            app.UseProxyWhiteList(\n                // where ServerToProxyToBaseUrl is the server you want requests to be proxied to\n                proxyAddressTweaker: (requestPath) => $"{ServerToProxyToBaseUrl}{requestPath}",\n                whiteListProxyRoutes: new [] {\n                    // An anonymous request\n                    WhiteListProxy.AnonymousRoute("api/version", HttpMethod.Get),\n     \n                    // An authenticated request; to send this we must know who the user is\n                    WhiteListProxy.Route("api/account/{accountId:int}/all-the-secret-info", HttpMethod.Get, HttpMethod.Post),\n            });\n\n\n            app.UseMvc();\n   \n            // ...\n        }\n')),Object(a.b)("p",null,"If you look at the code above you can see that we are proxing all our requests to a single server: ",Object(a.b)("inlineCode",{parentName:"p"},"ServerToProxyToBaseUrl"),". We're proxying 2 different requests:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"GET")," requests to ",Object(a.b)("inlineCode",{parentName:"li"},"api/version")," are proxied through as ",Object(a.b)("em",{parentName:"li"},"anonymous"),Object(a.b)("inlineCode",{parentName:"li"},"GET")," requests."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"GET")," and ",Object(a.b)("inlineCode",{parentName:"li"},"POST")," requests to ",Object(a.b)("inlineCode",{parentName:"li"},"api/account/{accountId:int}/all-the-secret-info")," are proxied through as ",Object(a.b)("inlineCode",{parentName:"li"},"GET")," and ",Object(a.b)("inlineCode",{parentName:"li"},"POST")," requests. These requests require that a user be authenticated first.")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"WhiteListProxy")," proxy class we've been using looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'using System;\nusing System.Collections.Generic;\nusing System.Net.Http;\n\nnamespace My.Web.Proxy {\n    public class WhiteListProxy {\n        public string Path { get; set; }\n        public IEnumerable<HttpMethod> Methods { get; set; }\n        public bool IsAnonymous { get; set; }\n\n        private WhiteListProxy(string path, bool isAnonymous, params HttpMethod[] methods) {\n            if (methods == null || methods.Length == 0)\n                throw new ArgumentException($"You need at least a single HttpMethod to be specified for {path}");\n\n            Path = path;\n            IsAnonymous = isAnonymous;\n            Methods = methods;\n        }\n\n        public static WhiteListProxy Route(string path, params HttpMethod[] methods) => new WhiteListProxy(path, isAnonymous : false, methods: methods);\n        public static WhiteListProxy AnonymousRoute(string path, params HttpMethod[] methods) => new WhiteListProxy(path, isAnonymous : true, methods: methods);\n    }\n\n}\n')),Object(a.b)("p",null,"The middleware for proxying (our ",Object(a.b)("inlineCode",{parentName:"p"},"UseProxyWhiteList"),") looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'using System;\nusing System.Collections.Generic;\nusing System.ComponentModel;\nusing System.Linq;\nusing System.Net.Http;\nusing System.Reflection;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Authentication;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Routing;\nusing Microsoft.Extensions.DependencyModel;\nusing Microsoft.Extensions.DependencyInjection;\nusing Serilog;\n\nnamespace My.Web.Proxy {\n    public static class ProxyRouteExtensions {\n        /// <summary>\n        /// Middleware which proxies the supplied whitelist routes\n        /// </summary>\n        public static void UseProxyWhiteList(\n            this IApplicationBuilder app,\n            Func<string, string> proxyAddressTweaker,\n            Action<HttpContext, HttpRequestMessage> preSendProxyRequestAction,\n            IEnumerable<WhiteListProxy> whiteListProxyRoutes\n        ) {\n            app.UseRouter(builder => {\n                foreach (var whiteListProxy in whiteListProxyRoutes) {\n                    foreach (var method in whiteListProxy.Methods) {\n                        builder.MapMiddlewareVerb(method.ToString(), whiteListProxy.Path, proxyApp => {\n                            proxyApp.UseProxy_Challenge(whiteListProxy.IsAnonymous);\n                            proxyApp.UseProxy_Run(proxyAddressTweaker, preSendProxyRequestAction);\n                        });\n                    }\n                }\n            });\n        }\n\n        private static void UseProxy_Challenge(this IApplicationBuilder app, bool allowAnonymous) {\n            app.Use((context, next) =>\n            {\n                var routePath = context.Request.Path.Value;\n\n                var weAreAuthenticatedOrWeDontNeedToBe =\n                    context.User.Identity.IsAuthenticated || allowAnonymous;\n                if (weAreAuthenticatedOrWeDontNeedToBe)\n                    return next();\n\n                return context.ChallengeAsync();\n            });\n        }\n\n        private static void UseProxy_Run(\n            this IApplicationBuilder app,\n            Func<string, string> proxyAddressTweaker,\n            Action<HttpContext, HttpRequestMessage> preSendProxyRequestAction\n            )\n        {\n            app.Run(async context => {\n                var proxyAddress = "";\n                try {\n                    proxyAddress = proxyAddressTweaker(context.Request.Path.Value);\n                    \n                    var proxyRequest = context.Request.CreateProxyHttpRequest(proxyAddress);\n\n                    if (preSendProxyRequestAction != null)\n                        preSendProxyRequestAction(context, proxyRequest);\n\n                    var httpClients = context.RequestServices.GetService<IHttpClients>(); // IHttpClients is just a wrapper for HttpClient - insert your own here\n\n                    var proxyResponse = await httpClients.SendRequestAsync(proxyRequest,\n                            HttpCompletionOption.ResponseHeadersRead, context.RequestAborted)\n                        .ConfigureAwait(false);\n\n                    await context.CopyProxyHttpResponse(proxyResponse).ConfigureAwait(false);\n                }\n                catch (OperationCanceledException ex) {\n                    if (ex.CancellationToken.IsCancellationRequested)\n                        return;\n\n                    if (!context.Response.HasStarted)\n                    {\n                        context.Response.StatusCode = 408;\n                        await context.Response\n                            .WriteAsync("Request timed out.");\n                    }\n                }\n                catch (Exception e) {\n                    if (!context.Response.HasStarted)\n                    {\n                        context.Response.StatusCode = 500;\n                        await context.Response\n                            .WriteAsync(\n                                $"Request could not be proxied.\\n\\n{e.Message}\\n\\n{e.StackTrace}.");\n                    }\n                }\n            });\n        }\n\n        public static void AddOrReplaceHeader(this HttpRequestMessage request, string headerName, string headerValue) {\n            // It\'s possible for there to be multiple headers with the same name; we only want a single header to remain.  Our one.\n            while (request.Headers.TryGetValues(headerName, out var existingAuthorizationHeader)) {\n                request.Headers.Remove(headerName);\n            }\n            request.Headers.TryAddWithoutValidation(headerName, headerValue);\n        }\n\n        public static HttpRequestMessage CreateProxyHttpRequest(this HttpRequest request, string uriString) {\n            var uri = new Uri(uriString + request.QueryString);\n\n            var requestMessage = new HttpRequestMessage();\n            var requestMethod = request.Method;\n            if (!HttpMethods.IsGet(requestMethod) &&\n                !HttpMethods.IsHead(requestMethod) &&\n                !HttpMethods.IsDelete(requestMethod) &&\n                !HttpMethods.IsTrace(requestMethod)) {\n                var streamContent = new StreamContent(request.Body);\n                requestMessage.Content = streamContent;\n            }\n\n            // Copy the request headers.\n            if (requestMessage.Content != null)\n                foreach (var header in request.Headers)\n                    if (!requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray()))\n                        requestMessage.Content?.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());\n\n            requestMessage.Headers.Host = uri.Authority;\n            requestMessage.RequestUri = uri;\n            requestMessage.Method = new HttpMethod(request.Method);\n\n            return requestMessage;\n        }\n\n        public static async Task CopyProxyHttpResponse(this HttpContext context, HttpResponseMessage responseMessage) {\n            var response = context.Response;\n\n            response.StatusCode = (int) responseMessage.StatusCode;\n            foreach (var header in responseMessage.Headers) {\n                response.Headers[header.Key] = header.Value.ToArray();\n            }\n\n            if (responseMessage.Content != null) {\n                foreach (var header in responseMessage.Content.Headers) {\n                    response.Headers[header.Key] = header.Value.ToArray();\n                }\n            }\n\n            response.Headers.Remove("transfer-encoding");\n\n            using(var responseStream = await responseMessage.Content.ReadAsStreamAsync().ConfigureAwait(false)) {\n                await responseStream.CopyToAsync(response.Body, 81920, context.RequestAborted).ConfigureAwait(false);\n            }\n        }\n    }\n}\n')))}l.isMDXComponent=!0}}]);
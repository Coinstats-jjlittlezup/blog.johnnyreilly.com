(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[16758],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75286:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var i=n(22122),a=n(19756),r=(n(67294),n(3905)),o={title:"Azure Easy Auth and Roles with .NET (and .NET Core)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Azure","App service","authorisation","Authentication","azure AD"],hide_table_of_contents:!1},s={permalink:"/2021/01/14/azure-easy-auth-and-roles-with-dotnet-and-core",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-14-azure-easy-auth-and-roles-with-dotnet-and-core.md",source:"@site/blog/2021-01-14-azure-easy-auth-and-roles-with-dotnet-and-core.md",title:"Azure Easy Auth and Roles with .NET (and .NET Core)",description:"If this post is interesting to you, you may also want to look at this one where we try to use Microsoft.Identity.Web for the same purpose.",date:"2021-01-14T00:00:00.000Z",formattedDate:"January 14, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"App service",permalink:"/tags/app-service"},{label:"authorisation",permalink:"/tags/authorisation"},{label:"Authentication",permalink:"/tags/authentication"},{label:"azure AD",permalink:"/tags/azure-ad"}],readingTime:5.665,truncated:!1,prevItem:{title:"Azure Easy Auth and Roles with .NET and Microsoft.Identity.Web",permalink:"/2021/01/17/azure-easy-auth-and-roles-with-net-and-microsoft-identity-web"},nextItem:{title:"Strongly typing react-querys useQueries",permalink:"/2021/01/03/strongly-typing-react-query-s-usequeries"}},l=[{value:"Where are our roles?",id:"where-are-our-roles",children:[]},{value:"Role up, role up!",id:"role-up-role-up",children:[]},{value:"Update: Potential ways forward",id:"update-potential-ways-forward",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If this post is interesting to you, you may also want to ",(0,r.kt)("a",{parentName:"em",href:"https://blog.johnnyreilly.com/2021/01/azure-easy-auth-and-roles-with-net-and-microsoft-identity-web.html"},"look at this one where we try to use Microsoft.Identity.Web for the same purpose."))),(0,r.kt)("p",null," Azure has a feature which is intended to allow Authentication and Authorization to be applied outside of your application code. It's called ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization"},'"Easy Auth"'),". Unfortunately, in the context of App Services it doesn't work with .NET Core and .NET. Perhaps it would be better to say: of the various .NETs, it supports .NET Framework. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization#userapplication-claims"},"To quote the docs"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At this time, ASP.NET Core does not currently support populating the current user with the Authentication/Authorization feature. However, some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MaximRouiller/MaximeRouiller.Azure.AppService.EasyAuth"},"3rd party, open source middleware components")," do exist to help fill this gap.")),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/MaximRouiller"},"Maxime Rouiller")," there's a way forward here. However, as I was taking this for a spin today, I discovered another issue."),(0,r.kt)("h2",{id:"where-are-our-roles"},"Where are our roles?"),(0,r.kt)("p",null,"Consider the following .NET controller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[Authorize(Roles = "Administrator,Reader")]\n[HttpGet("api/admin-reader")]\npublic string GetWithAdminOrReader() =>\n    "this is a secure endpoint that users with the Administrator or Reader role can access";\n\n[Authorize(Roles = "Administrator")]\n[HttpGet("api/admin")]\npublic string GetWithAdmin() =>\n    "this is a secure endpoint that users with the Administrator role can access";\n\n[Authorize(Roles = "Reader")]\n[HttpGet("api/reader")]\npublic string GetWithReader() =>\n    "this is a secure endpoint that users with the Reader role can access";\n')),(0,r.kt)("p",null,"The three endpoints above restrict access based upon roles. However, even with Maxime's marvellous shim in the mix, authorization doesn't work when deployed to an Azure App Service. Why? Well, it comes down to how roles are mapped to claims."),(0,r.kt)("p",null,"Let's back up a bit. First of all we've added a dependency to our project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet add package MaximeRouiller.Azure.AppService.EasyAuth\n")),(0,r.kt)("p",null,"Next we've updated our ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs``ConfigureServices")," such that it looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'if (Env.IsDevelopment()) {\n    services.AddMicrosoftIdentityWebAppAuthentication(Configuration);\nelse\n    services.AddAuthentication("EasyAuth").AddEasyAuthAuthentication((o) => { });\n')),(0,r.kt)("p",null,"With the above in place, either the Microsoft Identity platform will directly be used for authentication, or Maxime's package will be used as the default authentication scheme. The driver for this is ",(0,r.kt)("inlineCode",{parentName:"p"},"Env")," which is an ",(0,r.kt)("inlineCode",{parentName:"p"},"IHostEnvironment")," that was injected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs"),". Running locally, both authentication and authorization will work. However, deployed to an Azure App Service, only authentication will work."),(0,r.kt)("p",null,"It turns out that directly using the Microsoft Identity platform, we see roles claims coming through like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    // ...\n    {\n        "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n        "value": "Administrator"\n    },\n    {\n        "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n        "value": "Reader"\n    },\n    // ...\n\n]\n')),(0,r.kt)("p",null,"But in Azure we see roles claims showing up with a different ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    // ...\n    {\n        "type": "roles",\n        "value": "Administrator"\n    },\n    {\n        "type": "roles",\n        "value": "Reader"\n    },\n    // ...\n]\n')),(0,r.kt)("p",null,"This is the crux of the problem; .NET and .NET Core are looking in a different place for roles."),(0,r.kt)("h2",{id:"role-up-role-up"},"Role up, role up!"),(0,r.kt)("p",null,"There wasn't an obvious way to make this work with Maxime's package. So we ended up lifting the source code of Maxime's package and tweaking it. Take a look:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Authentication;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Extensions.Options;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Security.Claims;\nusing System.Text.Encodings.Web;\nusing System.Text.Json;\nusing System.Text.Json.Serialization;\nusing System.Threading.Tasks;\n\n/// <summary>\n/// Based on https://github.com/MaximRouiller/MaximeRouiller.Azure.AppService.EasyAuth\n/// Essentially EasyAuth only supports .NET Framework: https://docs.microsoft.com/en-us/azure/app-service/app-service-authentication-how-to#access-user-claims\n/// This allows us to get support for Authentication and Authorization (using roles) with .NET\n/// </summary>\nnamespace EasyAuth {\n    public static class EasyAuthAuthenticationBuilderExtensions {\n        public static AuthenticationBuilder AddEasyAuthAuthentication(\n            this IServiceCollection services) =>\n            services.AddAuthentication("EasyAuth").AddEasyAuthAuthenticationScheme(o => { });\n\n        public static AuthenticationBuilder AddEasyAuthAuthenticationScheme(\n            this AuthenticationBuilder builder,\n            Action<EasyAuthAuthenticationOptions> configure) =>\n                builder.AddScheme<EasyAuthAuthenticationOptions, EasyAuthAuthenticationHandler>(\n                    "EasyAuth",\n                    "EasyAuth",\n                    configure);\n    }\n\n    public class EasyAuthAuthenticationOptions : AuthenticationSchemeOptions {\n        public EasyAuthAuthenticationOptions() {\n            Events = new object();\n        }\n    }\n\n    public class EasyAuthAuthenticationHandler : AuthenticationHandler<EasyAuthAuthenticationOptions> {\n        public EasyAuthAuthenticationHandler(\n            IOptionsMonitor<EasyAuthAuthenticationOptions> options,\n            ILoggerFactory logger,\n            UrlEncoder encoder,\n            ISystemClock clock)\n            : base(options, logger, encoder, clock) {\n        }\n\n        protected override Task<AuthenticateResult> HandleAuthenticateAsync() {\n            try {\n                var easyAuthEnabled = string.Equals(Environment.GetEnvironmentVariable("WEBSITE_AUTH_ENABLED", EnvironmentVariableTarget.Process), "True", StringComparison.InvariantCultureIgnoreCase);\n                if (!easyAuthEnabled) return Task.FromResult(AuthenticateResult.NoResult());\n\n                var easyAuthProvider = Context.Request.Headers["X-MS-CLIENT-PRINCIPAL-IDP"].FirstOrDefault();\n                var msClientPrincipalEncoded = Context.Request.Headers["X-MS-CLIENT-PRINCIPAL"].FirstOrDefault();\n                if (string.IsNullOrWhiteSpace(easyAuthProvider) ||\n                    string.IsNullOrWhiteSpace(msClientPrincipalEncoded))\n                    return Task.FromResult(AuthenticateResult.NoResult());\n\n                var decodedBytes = Convert.FromBase64String(msClientPrincipalEncoded);\n                var msClientPrincipalDecoded = System.Text.Encoding.Default.GetString(decodedBytes);\n                var clientPrincipal = JsonSerializer.Deserialize<MsClientPrincipal>(msClientPrincipalDecoded);\n                if (clientPrincipal == null) return Task.FromResult(AuthenticateResult.NoResult());\n\n                var mappedRolesClaims = clientPrincipal.Claims\n                    .Where(claim => claim.Type == "roles")\n                    .Select(claim => new Claim(ClaimTypes.Role, claim.Value))\n                    .ToList();\n\n                var claims = clientPrincipal.Claims.Select(claim => new Claim(claim.Type, claim.Value)).ToList();\n                claims.AddRange(mappedRolesClaims);\n\n                var principal = new ClaimsPrincipal();\n                principal.AddIdentity(new ClaimsIdentity(claims, clientPrincipal.AuthenticationType, clientPrincipal.NameType, clientPrincipal.RoleType));\n\n                var ticket = new AuthenticationTicket(principal, easyAuthProvider);\n                var success = AuthenticateResult.Success(ticket);\n                Context.User = principal;\n\n                return Task.FromResult(success);\n            } catch (Exception ex) {\n                return Task.FromResult(AuthenticateResult.Fail(ex));\n            }\n        }\n    }\n\n    public class MsClientPrincipal {\n        [JsonPropertyName("auth_typ")]\n        public string? AuthenticationType { get; set; }\n        [JsonPropertyName("claims")]\n        public IEnumerable<UserClaim> Claims { get; set; } = Array.Empty<UserClaim>();\n        [JsonPropertyName("name_typ")]\n        public string? NameType { get; set; }\n        [JsonPropertyName("role_typ")]\n        public string? RoleType { get; set; }\n    }\n\n    public class UserClaim {\n        [JsonPropertyName("typ")]\n        public string Type { get; set; } = string.Empty;\n        [JsonPropertyName("val")]\n        public string Value { get; set; } = string.Empty;\n    }\n}\n')),(0,r.kt)("p",null,"There's a number of changes in the above code to Maxime's package. Three changes that are not significant and one that is. First the insignificant changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It uses ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-how-to?pivots=dotnet-5-0"},(0,r.kt)("inlineCode",{parentName:"a"},"System.Text.Json"))," in place of JSON.NET"),(0,r.kt)("li",{parentName:"ol"},"It uses ",(0,r.kt)("a",{parentName:"li",href:"https://blog.johnnyreilly.com/2020/12/nullable-reference-types-csharp-strictnullchecks.html"},"C#s nullable reference types")),(0,r.kt)("li",{parentName:"ol"},"It changes the extension method signature such that instead of entering ",(0,r.kt)("inlineCode",{parentName:"li"},"services.AddAuthentication().AddEasyAuthAuthentication((o) =&gt; { })")," we now need only enter ",(0,r.kt)("inlineCode",{parentName:"li"},"services.AddEasyAuthAuthentication()"))),(0,r.kt)("p",null,"Now the significant change:"),(0,r.kt)("p",null,"Where the middleware encounters claims in the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MS-CLIENT-PRINCIPAL")," header with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," of ",(0,r.kt)("inlineCode",{parentName:"p"},'"roles"')," it creates brand new claims for each, with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," but with the official ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," supplied by ",(0,r.kt)("inlineCode",{parentName:"p"},"ClaimsTypes.Role")," of ",(0,r.kt)("inlineCode",{parentName:"p"},'"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"'),". The upshot of this, is that when the processed claims are inspected in Azure they now look more like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    // ...\n    {\n        "type": "roles",\n        "value": "Administrator"\n    },\n    {\n        "type": "roles",\n        "value": "Reader"\n    },\n    // ...\n    {\n        "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n        "value": "Administrator"\n    },\n    {\n        "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n        "value": "Reader"\n    }\n]\n')),(0,r.kt)("p",null,"As you can see, we now have both the originally supplied roles ",(0,r.kt)("em",{parentName:"p"},"as well")," as roles of the type that .NET and .NET Core expect. Consequently, roles based behaviour starts to work. Thanks to Maxime for his fine work on the initial solution. It would be tremendous if neither the code in this blog post nor Maxime's shim were required. Still, until that glorious day!"),(0,r.kt)("h2",{id:"update-potential-ways-forward"},"Update: Potential ways forward"),(0,r.kt)("p",null,"When I was tweeting this post, Maxime was good enough to respond and suggest that this may be resolved within Azure itself in future:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Oh, so that's why they removed the name? \ud83d\ude32\ud83d\ude1c Jokes aside, we hope that this package won't be necessary for the future. I know that ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/mattchenderson?ref_src=twsrc%5Etfw"},"@mattchenderson")," is part of a working group to update Easy Auth. Might want to make sure you follow him as well. \ud83d\ude01"),(0,r.kt)("p",{parentName:"blockquote"},"\u2014 Maxime Rouiller (@MaximRouiller) ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/MaximRouiller/status/1349804324713615366?ref_src=twsrc%5Etfw"},"January 14, 2021"))),(0,r.kt)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,r.kt)("p",null,"There's a prospective PR that would add an event to Maxime's API. If something along these lines was merged, then my workaround would no longer be necessary. Follow the PR ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MaximRouiller/MaximeRouiller.Azure.AppService.EasyAuth/pull/13"},"here"),"."))}c.isMDXComponent=!0}}]);
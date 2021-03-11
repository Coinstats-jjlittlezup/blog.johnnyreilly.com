(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},725:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(1159)),o={title:"Azure Easy Auth and Roles with .NET and Microsoft.Identity.Web",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},s={permalink:"/2021/01/17/azure-easy-auth-and-roles-with-net-and-microsoft-identity-web",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-17-azure-easy-auth-and-roles-with-net-and-microsoft-identity-web.md",source:"@site/blog/2021-01-17-azure-easy-auth-and-roles-with-net-and-microsoft-identity-web.md",description:"I wrote recently about how to get Azure Easy Auth to work with roles. This involved borrowing the approach used by MaximeRouiller.Azure.AppService.EasyAuth.",date:"2021-01-17T00:00:00.000Z",tags:[],title:"Azure Easy Auth and Roles with .NET and Microsoft.Identity.Web",readingTime:2.35,truncated:!1,prevItem:{title:"Surfacing Azure Pipelines Build Info in a .NET React SPA",permalink:"/2021/01/29/surfacing-azure-pipelines-build-info-in"},nextItem:{title:"Azure Easy Auth and Roles with .NET (and .NET Core)",permalink:"/2021/01/14/azure-easy-auth-and-roles-with-dotnet-and-core"}},l=[{value:"Getting set up",id:"getting-set-up",children:[]},{value:"You gotta <code>roles</code> with it",id:"you-gotta-roles-with-it",children:[]},{value:"Claims transformation FTW",id:"claims-transformation-ftw",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/01/azure-easy-auth-and-roles-with-dotnet-and-core.html"},"I wrote recently about how to get Azure Easy Auth to work with roles"),". This involved borrowing the approach used by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaximRouiller/MaximeRouiller.Azure.AppService.EasyAuth"},"MaximeRouiller.Azure.AppService.EasyAuth"),"."),Object(i.b)("p",null,"As a consequence of writing that post I came to learn that official support for Azure Easy Auth had landed in October 2020 in v1.2 of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/AzureAD/microsoft-identity-web/wiki/1.2.0#integration-with-azure-app-services-authentication-of-web-apps-running-with-microsoftidentityweb"},"Microsoft.Identity.Web"),". This was great news; I was delighted."),Object(i.b)("p",null,"However, it turns out that the same authorization issue that ",Object(i.b)("inlineCode",{parentName:"p"},"MaximeRouiller.Azure.AppService.EasyAuth")," suffers from, is visited upon ",Object(i.b)("inlineCode",{parentName:"p"},"Microsoft.Identity.Web")," as well."),Object(i.b)("h2",{id:"getting-set-up"},"Getting set up"),Object(i.b)("p",null,"We're using a .NET 5 project, running in an Azure App Service (Linux). In our ",Object(i.b)("inlineCode",{parentName:"p"},".csproj")," we have:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Microsoft.Identity.Web" Version="1.4.1" />\n')),Object(i.b)("p",null,"In our ",Object(i.b)("inlineCode",{parentName:"p"},"Startup.cs")," we're using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"public void ConfigureServices(IServiceCollection services) {\n            //...\n            services.AddMicrosoftIdentityWebAppAuthentication(Configuration);\n            //...\n      }\n\n      public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {\n            //...\n            app.UseAuthentication();\n            app.UseAuthorization();\n            //...\n      }\n")),Object(i.b)("h2",{id:"you-gotta-roles-with-it"},"You gotta ",Object(i.b)("inlineCode",{parentName:"h2"},"roles")," with it"),Object(i.b)("p",null,"Whilst the authentication works, authorization does not. So whilst my app knows who I am - the authorization is not working with relation to ",Object(i.b)("strong",{parentName:"p"},"roles"),"."),Object(i.b)("p",null,"When directly using ",Object(i.b)("inlineCode",{parentName:"p"},"Microsoft.Identity.Web")," when running locally, we see these claims:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'[\n    // ...\n    {\n        "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n        "value": "Administrator"\n    },\n    {\n        "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n        "value": "Reader"\n    },\n    // ...\n\n]\n')),Object(i.b)("p",null,"However, we get different behaviour with EasyAuth; it provides roles related claims with a ",Object(i.b)("strong",{parentName:"p"},"different type"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'[\n    // ...\n    {\n        "type": "roles",\n        "value": "Administrator"\n    },\n    {\n        "type": "roles",\n        "value": "Reader"\n    },\n    // ...\n]\n')),Object(i.b)("p",null,"This means that roles related authorization ",Object(i.b)("em",{parentName:"p"},"does not work")," with Easy Auth:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'[Authorize(Roles = "Reader")]\n[HttpGet("api/reader")]\npublic string GetWithReader() =>\n    "this is a secure endpoint that users with the Reader role can access";\n')),Object(i.b)("p",null,"This is because .NET is looking for claims with a ",Object(i.b)("inlineCode",{parentName:"p"},"type")," of ",Object(i.b)("inlineCode",{parentName:"p"},'"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"')," and not finding them with Easy Auth."),Object(i.b)("h2",{id:"claims-transformation-ftw"},"Claims transformation FTW"),Object(i.b)("p",null,"There is a way to work around this issue .NET using ",Object(i.b)("inlineCode",{parentName:"p"},"IClaimsTransformation"),". This is a poorly documented feature, but fortunately ",Object(i.b)("a",{parentName:"p",href:"https://gunnarpeipman.com/aspnet-core-adding-claims-to-existing-identity/"},"Gunnar Peipman's blog does a grand job of explaining it"),"."),Object(i.b)("p",null,"Inside our ",Object(i.b)("inlineCode",{parentName:"p"},"Startup.cs")," I've registered a claims transformer:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"services.AddScoped<IClaimsTransformation, AddRolesClaimsTransformation>();\n")),Object(i.b)("p",null,"And that claims transformer looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'public class AddRolesClaimsTransformation : IClaimsTransformation {\n        private readonly ILogger<AddRolesClaimsTransformation> _logger;\n\n        public AddRolesClaimsTransformation(ILogger<AddRolesClaimsTransformation> logger) {\n            _logger = logger;\n        }\n\n        public Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal) {\n            var mappedRolesClaims = principal.Claims\n                .Where(claim => claim.Type == "roles")\n                .Select(claim => new Claim(ClaimTypes.Role, claim.Value))\n                .ToList();\n\n            // Clone current identity\n            var clone = principal.Clone();\n\n            if (clone.Identity is not ClaimsIdentity newIdentity) return Task.FromResult(principal);\n\n            // Add role claims to cloned identity\n            foreach (var mappedRoleClaim in mappedRolesClaims) \n                newIdentity.AddClaim(mappedRoleClaim);\n\n            if (mappedRolesClaims.Count > 0)\n                _logger.LogInformation("Added roles claims {mappedRolesClaims}", mappedRolesClaims);\n            else\n                _logger.LogInformation("No roles claims added");\n\n            return Task.FromResult(clone);\n        }\n    }\n')),Object(i.b)("p",null,"The class above creates a new principal with ",Object(i.b)("inlineCode",{parentName:"p"},'"roles"')," claims mapped across to ",Object(i.b)("inlineCode",{parentName:"p"},'"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"'),". This is enough to get .NET treating roles the way you'd hope."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/AzureAD/microsoft-identity-web/issues/881"},"I've raised an issue against the ",Object(i.b)("inlineCode",{parentName:"a"},"Microsoft.Identity.Web")," repo")," about this. Perhaps one day this workaround will no longer be necessary."))}p.isMDXComponent=!0}}]);
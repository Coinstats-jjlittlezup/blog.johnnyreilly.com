(window.webpackJsonp=window.webpackJsonp||[]).push([[960],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(r,".").concat(h)]||p[h]||d[h]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),o=n(8),a=(n(0),n(1170)),r={title:"Hard-coding a Claim in Development Mode in ASP.Net Core",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["ASP.Net Core","Authentication"],hide_table_of_contents:!1},c={permalink:"/2019/08/02/hard-coding-claim-in-development-mode",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-08-02-hard-coding-claim-in-development-mode.md",source:"@site/blog/2019-08-02-hard-coding-claim-in-development-mode.md",description:"I was recently part of a hackathon team that put together an API in just 30 hours. We came second. (Not bitter, not bitter...)",date:"2019-08-02T00:00:00.000Z",formattedDate:"August 2, 2019",tags:[{label:"ASP.Net Core",permalink:"/tags/asp-net-core"},{label:"Authentication",permalink:"/tags/authentication"}],title:"Hard-coding a Claim in Development Mode in ASP.Net Core",readingTime:2.66,truncated:!1,prevItem:{title:"Symbiotic Definitely Typed",permalink:"/2019/08/17/symbiotic-definitely-typed"},nextItem:{title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",permalink:"/2019/07/13/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I was recently part of a hackathon team that put together an API in just 30 hours. We came second. (Not bitter, not bitter...)"),Object(a.b)("p",null,"We were moving pretty quickly during the hackathon and, when we came to the end of it, we had a working API which we were able to demo. The good news is that the API is going to graduate to be a product! We're going to ship this. Before we can do that though, there's a little tidy up to do."),Object(a.b)("p",null,"The first thing I remembered / realised when I picked up the codebase again, was the shortcuts we'd made on the developer experience. We'd put the API together using ASP.Net Core. We're handling authentication using JWTs which is nicely supported. When we're deployed, an external facing proxy calls our application with the appropriate JWT and everything works as you'd hope."),Object(a.b)("p",null,"The question is, what's it like to develop against this on your laptop? Getting a JWT for when I'm debugging locally is too much friction. I want to be able to work on the problem at hand, going away to get a JWT each time is a timesuck. So what to do? Well, during the hackathon, we just commented out ",Object(a.b)("inlineCode",{parentName:"p"},"[Authorize]")," attributes and hardcoded user ids in our controllers. This works, but it's a messy developer experience; it's easy to forget to uncomment things you've commented and break things. There must be a better way."),Object(a.b)("p",null,"The solution I landed on was this: in development mode (which we only use whilst debugging) we hardcode an authenticated user. The way our authentication works is that we have a claim on our principal called something like ",Object(a.b)("inlineCode",{parentName:"p"},'"our-user-id"'),", the value of which is our authenticated user id. So in the ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigureServices")," method of our ",Object(a.b)("inlineCode",{parentName:"p"},"Startup.cs")," we have a conditional authentication registration like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'// Whilst developing, we don\'t want to authenticate; we hardcode to a particular users id\nif (Env.IsDevelopment()) {\n    services.AddAuthentication(nameof(DevelopmentModeAuthenticationHandler))\n        .AddScheme<DevelopmentModeAuthenticationOptions, DevelopmentModeAuthenticationHandler>(\n            nameof(DevelopmentModeAuthenticationHandler), \n            options => {\n                options.UserIdToSetInClaims = "this-is-a-user-id"; \n            }\n        );\n}\nelse {\n    // The application typically uses this\n    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)\n        .AddJwtBearer(options => {\n            // ...\n        });\n}\n')),Object(a.b)("p",null,"As you can see, we're using a special ",Object(a.b)("inlineCode",{parentName:"p"},"DevelopmentModeAuthenticationHandler")," authentication scheme in development mode, instead of JWT. As we register that, we declare the user id that we want to use. Whenever the app runs using the ",Object(a.b)("inlineCode",{parentName:"p"},"DevelopmentModeAuthenticationHandler")," auth, all requests will arrive using a principal with an ",Object(a.b)("inlineCode",{parentName:"p"},'"our-user-id"')," claim with a value of ",Object(a.b)("inlineCode",{parentName:"p"},'"this-is-a-user-id"')," (or whatever you've set it to.)"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"DevelopmentModeAuthenticationHandler")," looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'using System.Collections.Generic;\nusing System.Security.Claims;\nusing System.Text.Encodings.Web;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Authentication;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Extensions.Options;\n\nnamespace OurApp\n{\n    public class DevelopmentModeAuthenticationOptions : AuthenticationSchemeOptions \n    {\n        public string UserIdToSetInClaims { get; set; }\n    }\n\n    public class DevelopmentModeAuthenticationHandler : AuthenticationHandler<DevelopmentModeAuthenticationOptions> {\n        private readonly ILoggingService _loggingService;\n\n        public DevelopmentModeAuthenticationHandler(\n            IOptionsMonitor<DevelopmentModeAuthenticationOptions> options,\n            ILoggerFactory logger,\n            UrlEncoder encoder,\n            ISystemClock clock\n        ) : base(options, logger, encoder, clock) {\n        }\n\n        protected override Task<AuthenticateResult> HandleAuthenticateAsync() {\n            var claims = new List<Claim> { new Claim("our-user-id", Options.UserIdToSetInClaims) };\n\n            var identity = new ClaimsIdentity(claims, nameof(DevelopmentModeAuthenticationHandler));\n            var ticket = new AuthenticationTicket(new ClaimsPrincipal(identity), Scheme.Name);\n            \n            return Task.FromResult(AuthenticateResult.Success(ticket));\n        }\n    }\n}\n')),Object(a.b)("p",null,"Now, developing locally is frictionless! We don't comment out ",Object(a.b)("inlineCode",{parentName:"p"},"[Authorize]")," attributes, we don't hard code user ids in controllers."))}u.isMDXComponent=!0}}]);
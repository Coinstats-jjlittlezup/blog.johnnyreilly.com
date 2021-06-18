(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[93452],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6210:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var i=n(22122),o=n(19756),r=(n(67294),n(3905)),a=["components"],l={title:"Hard-coding a Claim in Development Mode in ASP.Net Core",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["ASP.Net Core","Authentication"],hide_table_of_contents:!1},c=void 0,s={permalink:"/2019/08/02/hard-coding-claim-in-development-mode",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-08-02-hard-coding-claim-in-development-mode.md",source:"@site/blog/2019-08-02-hard-coding-claim-in-development-mode.md",title:"Hard-coding a Claim in Development Mode in ASP.Net Core",description:"I was recently part of a hackathon team that put together an API in just 30 hours. We came second. (Not bitter, not bitter...)",date:"2019-08-02T00:00:00.000Z",formattedDate:"August 2, 2019",tags:[{label:"ASP.Net Core",permalink:"/tags/asp-net-core"},{label:"Authentication",permalink:"/tags/authentication"}],readingTime:2.66,truncated:!1,prevItem:{title:"Symbiotic Definitely Typed",permalink:"/2019/08/17/symbiotic-definitely-typed"},nextItem:{title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",permalink:"/2019/07/13/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I was recently part of a hackathon team that put together an API in just 30 hours. We came second. (Not bitter, not bitter...)"),(0,r.kt)("p",null,"We were moving pretty quickly during the hackathon and, when we came to the end of it, we had a working API which we were able to demo. The good news is that the API is going to graduate to be a product! We're going to ship this. Before we can do that though, there's a little tidy up to do."),(0,r.kt)("p",null,"The first thing I remembered / realised when I picked up the codebase again, was the shortcuts we'd made on the developer experience. We'd put the API together using ASP.Net Core. We're handling authentication using JWTs which is nicely supported. When we're deployed, an external facing proxy calls our application with the appropriate JWT and everything works as you'd hope."),(0,r.kt)("p",null,"The question is, what's it like to develop against this on your laptop? Getting a JWT for when I'm debugging locally is too much friction. I want to be able to work on the problem at hand, going away to get a JWT each time is a timesuck. So what to do? Well, during the hackathon, we just commented out ",(0,r.kt)("inlineCode",{parentName:"p"},"[Authorize]")," attributes and hardcoded user ids in our controllers. This works, but it's a messy developer experience; it's easy to forget to uncomment things you've commented and break things. There must be a better way."),(0,r.kt)("p",null,"The solution I landed on was this: in development mode (which we only use whilst debugging) we hardcode an authenticated user. The way our authentication works is that we have a claim on our principal called something like ",(0,r.kt)("inlineCode",{parentName:"p"},'"our-user-id"'),", the value of which is our authenticated user id. So in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," method of our ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," we have a conditional authentication registration like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'// Whilst developing, we don\'t want to authenticate; we hardcode to a particular users id\nif (Env.IsDevelopment()) {\n    services.AddAuthentication(nameof(DevelopmentModeAuthenticationHandler))\n        .AddScheme<DevelopmentModeAuthenticationOptions, DevelopmentModeAuthenticationHandler>(\n            nameof(DevelopmentModeAuthenticationHandler), \n            options => {\n                options.UserIdToSetInClaims = "this-is-a-user-id"; \n            }\n        );\n}\nelse {\n    // The application typically uses this\n    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)\n        .AddJwtBearer(options => {\n            // ...\n        });\n}\n')),(0,r.kt)("p",null,"As you can see, we're using a special ",(0,r.kt)("inlineCode",{parentName:"p"},"DevelopmentModeAuthenticationHandler")," authentication scheme in development mode, instead of JWT. As we register that, we declare the user id that we want to use. Whenever the app runs using the ",(0,r.kt)("inlineCode",{parentName:"p"},"DevelopmentModeAuthenticationHandler")," auth, all requests will arrive using a principal with an ",(0,r.kt)("inlineCode",{parentName:"p"},'"our-user-id"')," claim with a value of ",(0,r.kt)("inlineCode",{parentName:"p"},'"this-is-a-user-id"')," (or whatever you've set it to.)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DevelopmentModeAuthenticationHandler")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Collections.Generic;\nusing System.Security.Claims;\nusing System.Text.Encodings.Web;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Authentication;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Extensions.Options;\n\nnamespace OurApp\n{\n    public class DevelopmentModeAuthenticationOptions : AuthenticationSchemeOptions \n    {\n        public string UserIdToSetInClaims { get; set; }\n    }\n\n    public class DevelopmentModeAuthenticationHandler : AuthenticationHandler<DevelopmentModeAuthenticationOptions> {\n        private readonly ILoggingService _loggingService;\n\n        public DevelopmentModeAuthenticationHandler(\n            IOptionsMonitor<DevelopmentModeAuthenticationOptions> options,\n            ILoggerFactory logger,\n            UrlEncoder encoder,\n            ISystemClock clock\n        ) : base(options, logger, encoder, clock) {\n        }\n\n        protected override Task<AuthenticateResult> HandleAuthenticateAsync() {\n            var claims = new List<Claim> { new Claim("our-user-id", Options.UserIdToSetInClaims) };\n\n            var identity = new ClaimsIdentity(claims, nameof(DevelopmentModeAuthenticationHandler));\n            var ticket = new AuthenticationTicket(new ClaimsPrincipal(identity), Scheme.Name);\n            \n            return Task.FromResult(AuthenticateResult.Success(ticket));\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Now, developing locally is frictionless! We don't comment out ",(0,r.kt)("inlineCode",{parentName:"p"},"[Authorize]")," attributes, we don't hard code user ids in controllers."))}d.isMDXComponent=!0}}]);
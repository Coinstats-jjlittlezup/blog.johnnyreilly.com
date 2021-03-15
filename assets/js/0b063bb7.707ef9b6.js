(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1166:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=t,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||l;return n?a.a.createElement(m,i(i({ref:r},p),{},{components:n})):a.a.createElement(m,i({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return c}));var t=n(3),a=n(8),l=(n(0),n(1166)),o={title:"Nullable reference types; CSharp's very own strictNullChecks",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},i={permalink:"/2020/12/20/nullable-reference-types-csharp-strictnullchecks",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-12-20-nullable-reference-types-csharp-strictnullchecks.md",source:"@site/blog/2020-12-20-nullable-reference-types-csharp-strictnullchecks.md",description:"'Tis the season to play with new compiler settings! I'm a very keen TypeScript user and have been merrily using strictNullChecks since it shipped. I was dimly aware that C# was also getting a similar feature by the name of nullable reference types.",date:"2020-12-20T00:00:00.000Z",formattedDate:"December 20, 2020",tags:[],title:"Nullable reference types; CSharp's very own strictNullChecks",readingTime:3.85,truncated:!1,prevItem:{title:"How to make Azure AD 403",permalink:"/2020/12/21/how-to-make-azure-ad-403"},nextItem:{title:"azure-pipelines-task-lib and isOutput setVariable",permalink:"/2020/12/09/azure-pipelines-task-lib-and-isoutput-setvariable"}},s=[{value:"Turning on nullable reference types",id:"turning-on-nullable-reference-types",children:[]},{value:"Really make it hurt",id:"really-make-it-hurt",children:[]},{value:"What do they mean?",id:"what-do-they-mean",children:[]},{value:"Widening the type to include <code>null</code>",id:"widening-the-type-to-include-null",children:[]}],p={toc:s};function c(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(l.b)("p",null,"'Tis the season to play with new compiler settings! I'm a very keen TypeScript user and have been merrily using ",Object(l.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#--strictnullchecks"},Object(l.b)("inlineCode",{parentName:"a"},"strictNullChecks"))," since it shipped. I was dimly aware that C# was also getting a similar feature by the name of ",Object(l.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/nullable-reference-types"},"nullable reference types"),"."),Object(l.b)("p",null,"It's only now that I've got round to taking at look at this marvellous feature. I thought I'd share what moving to nullable reference types looked like for me; and what code changes I found myself making as a consequence."),Object(l.b)("h2",{id:"turning-on-nullable-reference-types"},"Turning on nullable reference types"),Object(l.b)("p",null,"To turn on nullable reference types in a C# project you should pop open the ",Object(l.b)("inlineCode",{parentName:"p"},".csproj")," file and ensure it contains a ",Object(l.b)("inlineCode",{parentName:"p"},"&lt;Nullable&gt;enable&lt;/Nullable&gt;"),". So if you had a .NET Core 3.1 codebase it might look like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup>\n    <TargetFramework>netcoreapp3.1</TargetFramework>\n    <Nullable>enable</Nullable>\n  </PropertyGroup>\n")),Object(l.b)("p",null,"When you compile from this point forward, possible null reference types are reported as warnings. Consider this C#:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cs"},'[ApiController]\n    public class UserController : ControllerBase\n    {\n        private readonly ILogger<UserController> _logger;\n\n        public UserController(ILogger<UserController> logger)\n        {\n            _logger = logger;\n        }\n\n        [AllowAnonymous]\n        [HttpGet("UserName")]\n        public string GetUserName()\n        {\n            if (User.Identity.IsAuthenticated) {\n                _logger.LogInformation("{User} is getting their username", User.Identity.Name);\n                return User.Identity.Name;\n            }\n\n            _logger.LogInformation("The user is not authenticated");\n            return null;\n        }\n    }\n')),Object(l.b)("p",null,"A ",Object(l.b)("inlineCode",{parentName:"p"},"dotnet build")," results in this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"dotnet build --configuration release\n\nMicrosoft (R) Build Engine version 16.7.1+52cd83677 for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  Restored /Users/jreilly/code/app/src/server-app/Server/app.csproj (in 471 ms).\nControllers/UserController.cs(38,24): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\nControllers/UserController.cs(42,20): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\n  app -> /Users/jreilly/code/app/src/server-app/Server/bin/release/netcoreapp3.1/app.dll\n  app -> /Users/jreilly/code/app/src/server-app/Server/bin/release/netcoreapp3.1/app.Views.dll\n\nBuild succeeded.\n\nControllers/UserController.cs(38,24): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\nControllers/UserController.cs(42,20): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\n    2 Warning(s)\n    0 Error(s)\n")),Object(l.b)("p",null,"You see the two ",Object(l.b)("inlineCode",{parentName:"p"},'"Possible null reference return."')," warnings? Bingo"),Object(l.b)("h2",{id:"really-make-it-hurt"},"Really make it hurt"),Object(l.b)("p",null,"This is good - information is being surfaced up. But it's a warning. I could ignore it. I like compilers to get really up in my face and force me to make a change. I'm not into warnings; I'm into errors. Know what works for you. If you're similarly minded, you can upgrade nullable reference warnings to errors by tweaking the ",Object(l.b)("inlineCode",{parentName:"p"},".csproj")," a touch further. Add yourself a ",Object(l.b)("inlineCode",{parentName:"p"},"&lt;WarningsAsErrors&gt;nullable&lt;/WarningsAsErrors&gt;")," element. So maybe your ",Object(l.b)("inlineCode",{parentName:"p"},".csproj")," now looks like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup>\n    <TargetFramework>netcoreapp3.1</TargetFramework>\n    <Nullable>enable</Nullable>\n    <WarningsAsErrors>nullable</WarningsAsErrors>\n  </PropertyGroup>\n")),Object(l.b)("p",null,"And a ",Object(l.b)("inlineCode",{parentName:"p"},"dotnet build")," will result in this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"dotnet build --configuration release\n\nMicrosoft (R) Build Engine version 16.7.1+52cd83677 for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  Restored /Users/jreilly/code/app/src/server-app/Server/app.csproj (in 405 ms).\nControllers/UserController.cs(38,24): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\nControllers/UserController.cs(42,20): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\n\nBuild FAILED.\n\nControllers/UserController.cs(38,24): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\nControllers/UserController.cs(42,20): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\n    0 Warning(s)\n    2 Error(s)\n")),Object(l.b)("p",null,"Yay! Errors!"),Object(l.b)("h2",{id:"what-do-they-mean"},"What do they mean?"),Object(l.b)("p",null,'"',Object(l.b)("inlineCode",{parentName:"p"},"Possible null reference return"),"\" isn't the clearest of errors. What does that actually amount to? Well, it amounts to the compiler saying \"you're a liar! (maybe)\". Let's look again at the code where this error is reported:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cs"},'[AllowAnonymous]\n        [HttpGet("UserName")]\n        public string GetUserName()\n        {\n            if (User.Identity.IsAuthenticated) {\n                _logger.LogInformation("{User} is getting their username", User.Identity.Name);\n                return User.Identity.Name;\n            }\n\n            _logger.LogInformation("The user is not authenticated");\n            return null;\n        }\n')),Object(l.b)("p",null,"We're getting that error reported where we're returning ",Object(l.b)("inlineCode",{parentName:"p"},"null")," and where we're returning ",Object(l.b)("inlineCode",{parentName:"p"},"User.Identity.Name")," which ",Object(l.b)("em",{parentName:"p"},"may")," be ",Object(l.b)("inlineCode",{parentName:"p"},"null"),". And we're getting that because as far as the compiler is concerned ",Object(l.b)("inlineCode",{parentName:"p"},"string")," has changed. Before we turned on nullable reference types the compiler considered ",Object(l.b)("inlineCode",{parentName:"p"},"string")," to mean ",Object(l.b)("inlineCode",{parentName:"p"},"string")," ",Object(l.b)("em",{parentName:"p"},"OR"),Object(l.b)("inlineCode",{parentName:"p"},"null"),". Now, ",Object(l.b)("inlineCode",{parentName:"p"},"string")," means ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"."),Object(l.b)("p",null,"This is the same sort of behaviour as TypeScripts ",Object(l.b)("inlineCode",{parentName:"p"},"strictNullChecks"),". With TypeScript, before you turn on ",Object(l.b)("inlineCode",{parentName:"p"},"strictNullChecks"),", as far as the compiler is concerned, ",Object(l.b)("inlineCode",{parentName:"p"},"string")," means ",Object(l.b)("inlineCode",{parentName:"p"},"string"),Object(l.b)("em",{parentName:"p"},"OR"),Object(l.b)("inlineCode",{parentName:"p"},"null"),Object(l.b)("em",{parentName:"p"},"OR"),Object(l.b)("inlineCode",{parentName:"p"},"undefined")," (JavaScript didn't feel one null-ish value was enough and so has two - don't ask). Once ",Object(l.b)("inlineCode",{parentName:"p"},"strictNullChecks")," is on, ",Object(l.b)("inlineCode",{parentName:"p"},"string")," means ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"."),Object(l.b)("p",null,"It's a lot clearer. And that's why the compiler is getting antsy. The method signature is ",Object(l.b)("inlineCode",{parentName:"p"},"string"),", but it can see ",Object(l.b)("inlineCode",{parentName:"p"},"null")," potentially being returned. It doesn't like it. By and large that's good. We want the compiler to notice this as that's the entire point. We want to catch accidental ",Object(l.b)("inlineCode",{parentName:"p"},"null"),"s before they hit a user. This is ",Object(l.b)("em",{parentName:"p"},"great"),"! However, what do you do if have a method (as we do) that legitimately returns a ",Object(l.b)("inlineCode",{parentName:"p"},"string")," or ",Object(l.b)("inlineCode",{parentName:"p"},"null"),"?"),Object(l.b)("h2",{id:"widening-the-type-to-include-null"},"Widening the type to include ",Object(l.b)("inlineCode",{parentName:"h2"},"null")),Object(l.b)("p",null,"We change the signature from this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cs"},"public string GetUserName()\n")),Object(l.b)("p",null,"To this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cs"},"public string? GetUserName()\n")),Object(l.b)("p",null,"That's right, the simple addition of ",Object(l.b)("inlineCode",{parentName:"p"},"?")," marks a reference type (like a string) as potentially being ",Object(l.b)("inlineCode",{parentName:"p"},"null"),". Adding that means that we're potentially returning ",Object(l.b)("inlineCode",{parentName:"p"},"null"),", but we're sure about it; there's intention here - it's not accidental. Wonderful!"))}c.isMDXComponent=!0}}]);
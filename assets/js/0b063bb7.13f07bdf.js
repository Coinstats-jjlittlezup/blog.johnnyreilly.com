(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[34099],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?t.createElement(g,o(o({ref:r},c),{},{components:n})):t.createElement(g,o({ref:r},c))}));function m(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55134:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var t=n(22122),l=n(19756),a=(n(67294),n(3905)),o={title:"Nullable reference types; CSharp's very own strictNullChecks",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["CSharp","Nullable reference types"],hide_table_of_contents:!1},i={permalink:"/2020/12/20/nullable-reference-types-csharp-strictnullchecks",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-12-20-nullable-reference-types-csharp-strictnullchecks.md",source:"@site/blog/2020-12-20-nullable-reference-types-csharp-strictnullchecks.md",title:"Nullable reference types; CSharp's very own strictNullChecks",description:"'Tis the season to play with new compiler settings! I'm a very keen TypeScript user and have been merrily using strictNullChecks since it shipped. I was dimly aware that C# was also getting a similar feature by the name of nullable reference types.",date:"2020-12-20T00:00:00.000Z",formattedDate:"December 20, 2020",tags:[{label:"CSharp",permalink:"/tags/c-sharp"},{label:"Nullable reference types",permalink:"/tags/nullable-reference-types"}],readingTime:3.85,truncated:!1,prevItem:{title:"Azure AD should 403",permalink:"/2020/12/21/how-to-make-azure-ad-403"},nextItem:{title:"azure-pipelines-task-lib and isOutput setVariable",permalink:"/2020/12/09/azure-pipelines-task-lib-and-isoutput-setvariable"}},s=[{value:"Turning on nullable reference types",id:"turning-on-nullable-reference-types",children:[]},{value:"Really make it hurt",id:"really-make-it-hurt",children:[]},{value:"What do they mean?",id:"what-do-they-mean",children:[]},{value:"Widening the type to include <code>null</code>",id:"widening-the-type-to-include-null",children:[]}],p={toc:s};function c(e){var r=e.components,n=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"'Tis the season to play with new compiler settings! I'm a very keen TypeScript user and have been merrily using ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#--strictnullchecks"},(0,a.kt)("inlineCode",{parentName:"a"},"strictNullChecks"))," since it shipped. I was dimly aware that C# was also getting a similar feature by the name of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/nullable-reference-types"},"nullable reference types"),"."),(0,a.kt)("p",null,"It's only now that I've got round to taking at look at this marvellous feature. I thought I'd share what moving to nullable reference types looked like for me; and what code changes I found myself making as a consequence."),(0,a.kt)("h2",{id:"turning-on-nullable-reference-types"},"Turning on nullable reference types"),(0,a.kt)("p",null,"To turn on nullable reference types in a C# project you should pop open the ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file and ensure it contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;Nullable&gt;enable&lt;/Nullable&gt;"),". So if you had a .NET Core 3.1 codebase it might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup>\n    <TargetFramework>netcoreapp3.1</TargetFramework>\n    <Nullable>enable</Nullable>\n  </PropertyGroup>\n")),(0,a.kt)("p",null,"When you compile from this point forward, possible null reference types are reported as warnings. Consider this C#:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'[ApiController]\n    public class UserController : ControllerBase\n    {\n        private readonly ILogger<UserController> _logger;\n\n        public UserController(ILogger<UserController> logger)\n        {\n            _logger = logger;\n        }\n\n        [AllowAnonymous]\n        [HttpGet("UserName")]\n        public string GetUserName()\n        {\n            if (User.Identity.IsAuthenticated) {\n                _logger.LogInformation("{User} is getting their username", User.Identity.Name);\n                return User.Identity.Name;\n            }\n\n            _logger.LogInformation("The user is not authenticated");\n            return null;\n        }\n    }\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet build")," results in this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet build --configuration release\n\nMicrosoft (R) Build Engine version 16.7.1+52cd83677 for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  Restored /Users/jreilly/code/app/src/server-app/Server/app.csproj (in 471 ms).\nControllers/UserController.cs(38,24): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\nControllers/UserController.cs(42,20): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\n  app -> /Users/jreilly/code/app/src/server-app/Server/bin/release/netcoreapp3.1/app.dll\n  app -> /Users/jreilly/code/app/src/server-app/Server/bin/release/netcoreapp3.1/app.Views.dll\n\nBuild succeeded.\n\nControllers/UserController.cs(38,24): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\nControllers/UserController.cs(42,20): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\n    2 Warning(s)\n    0 Error(s)\n")),(0,a.kt)("p",null,"You see the two ",(0,a.kt)("inlineCode",{parentName:"p"},'"Possible null reference return."')," warnings? Bingo"),(0,a.kt)("h2",{id:"really-make-it-hurt"},"Really make it hurt"),(0,a.kt)("p",null,"This is good - information is being surfaced up. But it's a warning. I could ignore it. I like compilers to get really up in my face and force me to make a change. I'm not into warnings; I'm into errors. Know what works for you. If you're similarly minded, you can upgrade nullable reference warnings to errors by tweaking the ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," a touch further. Add yourself a ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;WarningsAsErrors&gt;nullable&lt;/WarningsAsErrors&gt;")," element. So maybe your ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," now looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup>\n    <TargetFramework>netcoreapp3.1</TargetFramework>\n    <Nullable>enable</Nullable>\n    <WarningsAsErrors>nullable</WarningsAsErrors>\n  </PropertyGroup>\n")),(0,a.kt)("p",null,"And a ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet build")," will result in this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet build --configuration release\n\nMicrosoft (R) Build Engine version 16.7.1+52cd83677 for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  Restored /Users/jreilly/code/app/src/server-app/Server/app.csproj (in 405 ms).\nControllers/UserController.cs(38,24): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\nControllers/UserController.cs(42,20): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\n\nBuild FAILED.\n\nControllers/UserController.cs(38,24): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\nControllers/UserController.cs(42,20): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]\n    0 Warning(s)\n    2 Error(s)\n")),(0,a.kt)("p",null,"Yay! Errors!"),(0,a.kt)("h2",{id:"what-do-they-mean"},"What do they mean?"),(0,a.kt)("p",null,'"',(0,a.kt)("inlineCode",{parentName:"p"},"Possible null reference return"),"\" isn't the clearest of errors. What does that actually amount to? Well, it amounts to the compiler saying \"you're a liar! (maybe)\". Let's look again at the code where this error is reported:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'[AllowAnonymous]\n        [HttpGet("UserName")]\n        public string GetUserName()\n        {\n            if (User.Identity.IsAuthenticated) {\n                _logger.LogInformation("{User} is getting their username", User.Identity.Name);\n                return User.Identity.Name;\n            }\n\n            _logger.LogInformation("The user is not authenticated");\n            return null;\n        }\n')),(0,a.kt)("p",null,"We're getting that error reported where we're returning ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," and where we're returning ",(0,a.kt)("inlineCode",{parentName:"p"},"User.Identity.Name")," which ",(0,a.kt)("em",{parentName:"p"},"may")," be ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". And we're getting that because as far as the compiler is concerned ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," has changed. Before we turned on nullable reference types the compiler considered ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," to mean ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ",(0,a.kt)("em",{parentName:"p"},"OR"),(0,a.kt)("inlineCode",{parentName:"p"},"null"),". Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," means ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("p",null,"This is the same sort of behaviour as TypeScripts ",(0,a.kt)("inlineCode",{parentName:"p"},"strictNullChecks"),". With TypeScript, before you turn on ",(0,a.kt)("inlineCode",{parentName:"p"},"strictNullChecks"),", as far as the compiler is concerned, ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," means ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),(0,a.kt)("em",{parentName:"p"},"OR"),(0,a.kt)("inlineCode",{parentName:"p"},"null"),(0,a.kt)("em",{parentName:"p"},"OR"),(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," (JavaScript didn't feel one null-ish value was enough and so has two - don't ask). Once ",(0,a.kt)("inlineCode",{parentName:"p"},"strictNullChecks")," is on, ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," means ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("p",null,"It's a lot clearer. And that's why the compiler is getting antsy. The method signature is ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", but it can see ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," potentially being returned. It doesn't like it. By and large that's good. We want the compiler to notice this as that's the entire point. We want to catch accidental ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"s before they hit a user. This is ",(0,a.kt)("em",{parentName:"p"},"great"),"! However, what do you do if have a method (as we do) that legitimately returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"?"),(0,a.kt)("h2",{id:"widening-the-type-to-include-null"},"Widening the type to include ",(0,a.kt)("inlineCode",{parentName:"h2"},"null")),(0,a.kt)("p",null,"We change the signature from this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public string GetUserName()\n")),(0,a.kt)("p",null,"To this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public string? GetUserName()\n")),(0,a.kt)("p",null,"That's right, the simple addition of ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," marks a reference type (like a string) as potentially being ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". Adding that means that we're potentially returning ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", but we're sure about it; there's intention here - it's not accidental. Wonderful!"))}c.isMDXComponent=!0}}]);
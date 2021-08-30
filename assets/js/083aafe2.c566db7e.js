"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[82952],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12102:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return g}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],l={title:"Debugging ASP.Net Core in VS or Code",authors:"johnnyreilly",tags:["VS Code","ASP.Net Core","Visual Studio"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2017/03/28/debugging-aspnet-core-in-vs-or-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-03-28-debugging-aspnet-core-in-vs-or-code.md",source:"@site/blog/2017-03-28-debugging-aspnet-core-in-vs-or-code.md",title:"Debugging ASP.Net Core in VS or Code",description:"I've been using Visual Studio for a long time. Very good it is too. However, it is heavyweight; it does far more than I need. What I really want when I'm working is a fast snappy editor, with intellisense and debugging. What I've basically described is VS Code. It rocks and has long become my go-to editor for TypeScript.",date:"2017-03-28T00:00:00.000Z",formattedDate:"March 28, 2017",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"ASP.Net Core",permalink:"/tags/asp-net-core"},{label:"Visual Studio",permalink:"/tags/visual-studio"}],readingTime:3.7,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"I'm looking for work!",permalink:"/2017/03/30/im-looking-for-work"},nextItem:{title:"Under the Duck: An Afternoon in Open Source",permalink:"/2017/02/23/under-duck-afternoon-in-open-source"}},c={authorsImageUrls:[void 0]},d=[],u={toc:d};function g(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I've been using Visual Studio for a long time. Very good it is too. However, it is heavyweight; it does far more than I need. What I really want when I'm working is a fast snappy editor, with intellisense and debugging. What I've basically described is ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),". It rocks and has long become my go-to editor for TypeScript."),(0,a.kt)("p",null," Since I'm a big C# fan as well I was delighted that editing C# was also possible in Code. What I want now is to be able to debug ASP.Net Core in Visual Studio OR VS Code. Can it be done? Let's see...."),(0,a.kt)("p",null,"I fire up Visual Studio and ",(0,a.kt)("inlineCode",{parentName:"p"},"File -&gt; New Project")," (yes it's a verb now). Select .NET Core and then ASP.Net Core Web Application. OK. We'll go for a Web Application. Let's not bother with authentication. OK. Wait a couple of seconds and Visual Studio serves up a new project. Hit F5 and we're debugging in Visual Studio."),(0,a.kt)("p",null,"So far, so straightforward. What will VS Code make of this?"),(0,a.kt)("p",null,'I cd my way to the root of my new ASP.Net Core Web Application and type the magical phrase "code .". Up it fires. I feel lucky, let\'s hit "F5". Huh, a dropdown shows up saying ',(0,a.kt)("inlineCode",{parentName:"p"},'"Select Environment"')," and offering me the options of Chrome and Node. Neither do I want. It's about this time I remember this is a clean install of VS Code and doesn't yet have the C# extension installed. In fact, if I open a C# file it up it tells me and recommends that I install. Well that's nice. I take it up on the kind offer; install and reload."),(0,a.kt)("p",null,'When it comes back up I see the following entries in the "output" tab:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Updating C# dependencies...\nPlatform: win32, x86_64 (win7-x64)\n\nDownloading package 'OmniSharp (.NET 4.6 / x64)' (20447 KB) .................... Done!\nDownloading package '.NET Core Debugger (Windows / x64)' (39685 KB) .................... Done!\n\nInstalling package 'OmniSharp (.NET 4.6 / x64)'\nInstalling package '.NET Core Debugger (Windows / x64)'\n\nFinished\n")),(0,a.kt)("p",null,'Note that mention of "debugger" there? Sounds super-promising. There\'s also some prompts: ',(0,a.kt)("inlineCode",{parentName:"p"},"\"There are unresolved dependencies from 'WebApplication1/WebApplication1.csproj'. Please execute the restore command to continue\"")),(0,a.kt)("p",null,"So it wants me to ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet restore"),". It's even offering to do that for me! Have at you; I let it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Welcome to .NET Core!\n---------------------\nLearn more about .NET Core @ https://aka.ms/dotnet-docs. Use dotnet --help to see available commands or go to https://aka.ms/dotnet-cli-docs.\n\nTelemetry\n--------------\nThe .NET Core tools collect usage data in order to improve your experience. The data is anonymous and does not include command-line arguments. The data is collected by Microsoft and shared with the community.\nYou can opt out of telemetry by setting a DOTNET_CLI_TELEMETRY_OPTOUT environment variable to 1 using your favorite shell.\nYou can read more about .NET Core tools telemetry @ https://aka.ms/dotnet-cli-telemetry.\n\nConfiguring...\n-------------------\nA command is running to initially populate your local package cache, to improve restore speed and enable offline access. This command will take up to a minute to complete and will only happen once.\nDecompressing Decompressing 100% 4026 ms\nExpanding 100% 34814 ms\n  Restoring packages for c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\WebApplication1.csproj...\n  Restoring packages for c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\WebApplication1.csproj...\n  Restore completed in 734.05 ms for c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\WebApplication1.csproj.\n  Generating MSBuild file c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\obj\\WebApplication1.csproj.nuget.g.props.\n  Writing lock file to disk. Path: c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\obj\\project.assets.json\n  Restore completed in 1.26 sec for c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\WebApplication1.csproj.\n  \n  NuGet Config files used:\n      C:\\Users\\johnr\\AppData\\Roaming\\NuGet\\NuGet.Config\n      C:\\Program Files (x86)\\NuGet\\Config\\Microsoft.VisualStudio.Offline.config\n  \n  Feeds used:\n      https://api.nuget.org/v3/index.json\n      C:\\Program Files (x86)\\Microsoft SDKs\\NuGetPackages\\\nDone: 0.\n")),(0,a.kt)("p",null,"The other prompt says ",(0,a.kt)("inlineCode",{parentName:"p"},"\"Required assets to build and debug are missing from 'WebApplication1'. Add them?\""),". This also sounds very promising and I give it the nod. This creates a ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode")," directory and 2 enclosed files; ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tasks.json"),"."),(0,a.kt)("p",null,"So lets try that F5 thing again... http://localhost:5000/ is now serving the same app. That looks pretty good. So lets add a breakpoint to the ",(0,a.kt)("inlineCode",{parentName:"p"},"HomeController")," and see if we can hit it:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(40958).Z})),(0,a.kt)("p",null,"Well I can certainly add a breakpoint but all those red squigglies are unnerving me. Let's clean the slate. If you want to simply do that in VS Code hold down ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL+SHIFT+P"),' and then type "reload". Pick "Reload window". A couple of seconds later we\'re back in and Code is looking much happier. Can we hit our breakpoint?'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9764).Z})),(0,a.kt)("p",null,"Yes we can! So you're free to develop in either Code or VS; the choice is yours. I think that's pretty awesome - and well done to all the peeople behind Code who've made this a pretty seamless experience!"))}g.isMDXComponent=!0},40958:function(e,t,n){t.Z=n.p+"assets/images/firstgo-3072a00af0157003bc667ee05673295f.png"},9764:function(e,t,n){t.Z=n.p+"assets/images/secondgo-bdaf2c0e127b63dcea3c224d1c8a7f49.png"}}]);
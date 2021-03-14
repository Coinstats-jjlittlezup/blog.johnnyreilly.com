(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),i=(n(0),n(1160)),r={title:"Debugging ASP.Net Core in VS or Code",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["VS Code","ASP.Net Core","Visual Studio"],hide_table_of_contents:!1},l={permalink:"/2017/03/28/debugging-aspnet-core-in-vs-or-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-03-28-debugging-aspnet-core-in-vs-or-code.md",source:"@site/blog/2017-03-28-debugging-aspnet-core-in-vs-or-code.md",description:"I've been using Visual Studio for a long time. Very good it is too. However, it is heavyweight; it does far more than I need. What I really want when I'm working is a fast snappy editor, with intellisense and debugging. What I've basically described is VS Code. It rocks and has long become my go-to editor for TypeScript.",date:"2017-03-28T00:00:00.000Z",formattedDate:"March 28, 2017",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"ASP.Net Core",permalink:"/tags/asp-net-core"},{label:"Visual Studio",permalink:"/tags/visual-studio"}],title:"Debugging ASP.Net Core in VS or Code",readingTime:3.7,truncated:!1,prevItem:{title:"I'm looking for work!",permalink:"/2017/03/30/im-looking-for-work"},nextItem:{title:"Under the Duck: An Afternoon in Open Source",permalink:"/2017/02/23/under-duck-afternoon-in-open-source"}},s=[],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I've been using Visual Studio for a long time. Very good it is too. However, it is heavyweight; it does far more than I need. What I really want when I'm working is a fast snappy editor, with intellisense and debugging. What I've basically described is ",Object(i.b)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),". It rocks and has long become my go-to editor for TypeScript."),Object(i.b)("p",null," Since I'm a big C# fan as well I was delighted that editing C# was also possible in Code. What I want now is to be able to debug ASP.Net Core in Visual Studio OR VS Code. Can it be done? Let's see...."),Object(i.b)("p",null,"I fire up Visual Studio and ",Object(i.b)("inlineCode",{parentName:"p"},"File -&gt; New Project")," (yes it's a verb now). Select .NET Core and then ASP.Net Core Web Application. OK. We'll go for a Web Application. Let's not bother with authentication. OK. Wait a couple of seconds and Visual Studio serves up a new project. Hit F5 and we're debugging in Visual Studio."),Object(i.b)("p",null,"So far, so straightforward. What will VS Code make of this?"),Object(i.b)("p",null,'I cd my way to the root of my new ASP.Net Core Web Application and type the magical phrase "code .". Up it fires. I feel lucky, let\'s hit "F5". Huh, a dropdown shows up saying ',Object(i.b)("inlineCode",{parentName:"p"},'"Select Environment"')," and offering me the options of Chrome and Node. Neither do I want. It's about this time I remember this is a clean install of VS Code and doesn't yet have the C# extension installed. In fact, if I open a C# file it up it tells me and recommends that I install. Well that's nice. I take it up on the kind offer; install and reload."),Object(i.b)("p",null,'When it comes back up I see the following entries in the "output" tab:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"Updating C# dependencies...\nPlatform: win32, x86_64 (win7-x64)\n\nDownloading package 'OmniSharp (.NET 4.6 / x64)' (20447 KB) .................... Done!\nDownloading package '.NET Core Debugger (Windows / x64)' (39685 KB) .................... Done!\n\nInstalling package 'OmniSharp (.NET 4.6 / x64)'\nInstalling package '.NET Core Debugger (Windows / x64)'\n\nFinished\n")),Object(i.b)("p",null,'Note that mention of "debugger" there? Sounds super-promising. There\'s also some prompts: ',Object(i.b)("inlineCode",{parentName:"p"},"\"There are unresolved dependencies from 'WebApplication1/WebApplication1.csproj'. Please execute the restore command to continue\"")),Object(i.b)("p",null,"So it wants me to ",Object(i.b)("inlineCode",{parentName:"p"},"dotnet restore"),". It's even offering to do that for me! Have at you; I let it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"Welcome to .NET Core!\n---------------------\nLearn more about .NET Core @ https://aka.ms/dotnet-docs. Use dotnet --help to see available commands or go to https://aka.ms/dotnet-cli-docs.\n\nTelemetry\n--------------\nThe .NET Core tools collect usage data in order to improve your experience. The data is anonymous and does not include command-line arguments. The data is collected by Microsoft and shared with the community.\nYou can opt out of telemetry by setting a DOTNET_CLI_TELEMETRY_OPTOUT environment variable to 1 using your favorite shell.\nYou can read more about .NET Core tools telemetry @ https://aka.ms/dotnet-cli-telemetry.\n\nConfiguring...\n-------------------\nA command is running to initially populate your local package cache, to improve restore speed and enable offline access. This command will take up to a minute to complete and will only happen once.\nDecompressing Decompressing 100% 4026 ms\nExpanding 100% 34814 ms\n  Restoring packages for c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\WebApplication1.csproj...\n  Restoring packages for c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\WebApplication1.csproj...\n  Restore completed in 734.05 ms for c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\WebApplication1.csproj.\n  Generating MSBuild file c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\obj\\WebApplication1.csproj.nuget.g.props.\n  Writing lock file to disk. Path: c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\obj\\project.assets.json\n  Restore completed in 1.26 sec for c:\\Source\\Debugging\\WebApplication1\\WebApplication1\\WebApplication1.csproj.\n  \n  NuGet Config files used:\n      C:\\Users\\johnr\\AppData\\Roaming\\NuGet\\NuGet.Config\n      C:\\Program Files (x86)\\NuGet\\Config\\Microsoft.VisualStudio.Offline.config\n  \n  Feeds used:\n      https://api.nuget.org/v3/index.json\n      C:\\Program Files (x86)\\Microsoft SDKs\\NuGetPackages\\\nDone: 0.\n")),Object(i.b)("p",null,"The other prompt says ",Object(i.b)("inlineCode",{parentName:"p"},"\"Required assets to build and debug are missing from 'WebApplication1'. Add them?\""),". This also sounds very promising and I give it the nod. This creates a ",Object(i.b)("inlineCode",{parentName:"p"},".vscode")," directory and 2 enclosed files; ",Object(i.b)("inlineCode",{parentName:"p"},"launch.json")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.json"),"."),Object(i.b)("p",null,"So lets try that F5 thing again... http://localhost:5000/ is now serving the same app. That looks pretty good. So lets add a breakpoint to the ",Object(i.b)("inlineCode",{parentName:"p"},"HomeController")," and see if we can hit it:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-iGUm3Cz8TzE/WNqNIEYnzUI/AAAAAAAAETU/p8NxbGTzJe8Zj5MbXuivzjGlWEvUPKOygCPcB/s1600/firstgo.png"},"![null]","(<https://3.bp.blogspot.com/-iGUm3Cz8TzE/WNqNIEYnzUI/AAAAAAAAETU/p8NxbGTzJe8Zj5MbXuivzjGlWEvUPKOygCPcB/s640/firstgo.png> =640x347)"),"Well I can certainly add a breakpoint but all those red squigglies are unnerving me. Let's clean the slate. If you want to simply do that in VS Code hold down ",Object(i.b)("inlineCode",{parentName:"p"},"CTRL+SHIFT+P"),' and then type "reload". Pick "Reload window". A couple of seconds later we\'re back in and Code is looking much happier. Can we hit our breakpoint?'),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-cOJHnIO0_io/WNqNe6a_94I/AAAAAAAAETc/DXsH0wkvbgIMIrUl04k_oj-VTA5-FS9TwCLcB/s1600/secondgo.png"},"![null]","(<https://3.bp.blogspot.com/-cOJHnIO0_io/WNqNe6a_94I/AAAAAAAAETc/DXsH0wkvbgIMIrUl04k_oj-VTA5-FS9TwCLcB/s640/secondgo.png> =640x347)"),"Yes we can! So you're free to develop in either Code or VS; the choice is yours. I think that's pretty awesome - and well done to all the peeople behind Code who've made this a pretty seamless experience!"))}p.isMDXComponent=!0},1160:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,g=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(g,l(l({ref:t},c),{},{components:n})):a.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
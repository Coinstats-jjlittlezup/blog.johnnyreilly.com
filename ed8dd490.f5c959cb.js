(window.webpackJsonp=window.webpackJsonp||[]).push([[826],{1014:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/coloured-console-235bc09c89c446ffb16f886abbfa36b2.png"},1015:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/application-insights-properties-bad281e33f559caeb9a87686f1b58f55.png"},890:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var i=t(3),o=t(7),r=(t(0),t(958)),a={title:"ASP.NET, Serilog and Application Insights",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp.net","Azure","Application Insights","Serilog"],hide_table_of_contents:!1},l={permalink:"/2021/01/30/aspnet-serilog-and-application-insights",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-30-aspnet-serilog-and-application-insights.md",source:"@site/blog/2021-01-30-aspnet-serilog-and-application-insights.md",description:"If you're deploying an ASP.NET application to Azure App Services, there's a decent chance you'll also be using the fantastic Serilog and will want to plug it into Azure's Application Insights.",date:"2021-01-30T00:00:00.000Z",tags:[{label:"asp.net",permalink:"/tags/asp-net"},{label:"Azure",permalink:"/tags/azure"},{label:"Application Insights",permalink:"/tags/application-insights"},{label:"Serilog",permalink:"/tags/serilog"}],title:"ASP.NET, Serilog and Application Insights",readingTime:3.685,truncated:!1,prevItem:{title:"ARM templates, security, role assignments and magic GUIDs",permalink:"/2021/02/08/arm-templates-security-role-assignments"},nextItem:{title:"Surfacing Azure Pipelines Build Info in a .NET React SPA",permalink:"/2021/01/29/surfacing-azure-pipelines-build-info-in"}},s=[{value:"Let&#39;s plug it together",id:"lets-plug-it-together",children:[]}],c={toc:s};function u(e){var n=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you're deploying an ASP.NET application to Azure App Services, there's a decent chance you'll also be using the fantastic ",Object(r.b)("a",{parentName:"p",href:"https://serilog.net/"},"Serilog")," and will want to plug it into Azure's ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"},"Application Insights"),"."),Object(r.b)("p",null,"This post will show you how it's done, and it'll also build upon the ",Object(r.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/01/surfacing-azure-pipelines-build-info-in.html"},"build info work from our previous post"),". In what way? Great question. Well logs are a tremendous diagnostic tool. If you have logs which display some curious behaviour, and you'd like to replicate that in another environment, you really want to take exactly that version of the codebase out to play. Our last post introduced build info into our application in the form of our ",Object(r.b)("inlineCode",{parentName:"p"},"AppVersionInfo")," class that looks something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "buildNumber": "20210130.1",\n    "buildId": "123456",\n    "branchName": "main",\n    "commitHash": "7089620222c30c1ad88e4b556c0a7908ddd34a8e"\n}\n')),Object(r.b)("p",null,"We'd initially exposed an endpoint in our application which surfaced up this information. Now we're going to take that self same information and bake it into our log messages by making use of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/serilog/serilog/wiki/Enrichment"},"Serilog's enrichment functionality"),". Build info and Serilog's enrichment are the double act your logging has been waiting for."),Object(r.b)("h2",{id:"lets-plug-it-together"},"Let's plug it together"),Object(r.b)("p",null,"We're going to need a number of Serilog dependencies added to our ",Object(r.b)("inlineCode",{parentName:"p"},".csproj"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Serilog.AspNetCore" Version="3.4.0" />\n    <PackageReference Include="Serilog.Enrichers.Environment" Version="2.1.3" />\n    <PackageReference Include="Serilog.Enrichers.Thread" Version="3.1.0" />\n    <PackageReference Include="Serilog.Sinks.ApplicationInsights" Version="3.1.0" />\n    <PackageReference Include="Serilog.Sinks.Async" Version="1.4.0" />\n')),Object(r.b)("p",null,"The earlier in your application lifetime you get logging wired up, the happier you will be. Earlier, means more information when you're diagnosing issues. So we want to start in our ",Object(r.b)("inlineCode",{parentName:"p"},"Program.cs"),"; ",Object(r.b)("inlineCode",{parentName:"p"},"Startup.cs")," would be just ",Object(r.b)("em",{parentName:"p"},"way")," too late."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'public class Program {\n    const string APP_NAME = "MyAmazingApp";\n\n    public static int Main(string[] args) {\n        AppVersionInfo.InitialiseBuildInfoGivenPath(Directory.GetCurrentDirectory());\n        LoggerConfigurationExtensions.SetupLoggerConfiguration(APP_NAME, AppVersionInfo.GetBuildInfo());\n\n        try\n        {\n            Log.Information("Starting web host");\n            CreateHostBuilder(args).Build().Run();\n            return 0;\n        }\n        catch (Exception ex)\n        {\n            Log.Fatal(ex, "Host terminated unexpectedly");\n            return 1;\n        }\n        finally\n        {\n            Log.CloseAndFlush();\n        }\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .UseSerilog((hostBuilderContext, services, loggerConfiguration) => {\n                loggerConfiguration.ConfigureBaseLogging(APP_NAME, AppVersionInfo.GetBuildInfo());\n                loggerConfiguration.AddApplicationInsightsLogging(services, hostBuilderContext.Configuration);\n            })\n            .ConfigureWebHostDefaults(webBuilder => {\n                webBuilder\n                    .UseStartup<Startup>();\n            });\n}\n')),Object(r.b)("p",null,"If you look at the code above you'll see that the first line of code that executes is ",Object(r.b)("inlineCode",{parentName:"p"},"AppVersionInfo.InitialiseBuildInfoGivenPath"),". This initialises our ",Object(r.b)("inlineCode",{parentName:"p"},"AppVersionInfo")," so we have meaningful build info to pump into our logs. The next thing we do is to configure Serilog with ",Object(r.b)("inlineCode",{parentName:"p"},"LoggerConfigurationExtensions.SetupLoggerConfiguration"),". This provides us with a configured logger so we are free to log any issues that take place during startup. (Incidentally, after startup you'll likely inject an ",Object(r.b)("inlineCode",{parentName:"p"},"ILogger")," into your classes rather than using the static ",Object(r.b)("inlineCode",{parentName:"p"},"Log")," directly.)"),Object(r.b)("p",null,"Finally, we call ",Object(r.b)("inlineCode",{parentName:"p"},"CreateHostBuilder")," which in turn calls ",Object(r.b)("inlineCode",{parentName:"p"},"UseSerilog")," to plug Serilog into ASP.NET. If you take a look inside the body of ",Object(r.b)("inlineCode",{parentName:"p"},"UserSerilog")," you'll see we configure the logging of ASP.NET (in the same we did for Serilog) and we hook into Application Insights as well. There's been a number of references to ",Object(r.b)("inlineCode",{parentName:"p"},"LoggerConfigurationExtensions"),". Let's take a look at it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'internal static class LoggerConfigurationExtensions {\n    internal static void SetupLoggerConfiguration(string appName, BuildInfo buildInfo) {\n        Log.Logger = new LoggerConfiguration()\n            .ConfigureBaseLogging(appName, buildInfo)\n            .CreateLogger();\n    }\n\n    internal static LoggerConfiguration ConfigureBaseLogging(\n        this LoggerConfiguration loggerConfiguration,\n        string appName,\n        BuildInfo buildInfo\n    ) {\n        loggerConfiguration\n            .MinimumLevel.Debug()\n            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)\n            // AMAZING COLOURS IN THE CONSOLE!!!!\n            .WriteTo.Async(a => a.Console(theme: AnsiConsoleTheme.Code))\n            .Enrich.FromLogContext()\n            .Enrich.WithMachineName()\n            .Enrich.WithThreadId()\n            // Build information as custom properties\n            .Enrich.WithProperty(nameof(buildInfo.BuildId), buildInfo.BuildId)\n            .Enrich.WithProperty(nameof(buildInfo.BuildNumber), buildInfo.BuildNumber)\n            .Enrich.WithProperty(nameof(buildInfo.BranchName), buildInfo.BranchName)\n            .Enrich.WithProperty(nameof(buildInfo.CommitHash), buildInfo.CommitHash)\n            .Enrich.WithProperty("ApplicationName", appName);\n\n        return loggerConfiguration;\n    }\n\n    internal static LoggerConfiguration AddApplicationInsightsLogging(this LoggerConfiguration loggerConfiguration, IServiceProvider services, IConfiguration configuration)\n    {\n        if (!string.IsNullOrWhiteSpace(configuration.GetValue<string>("APPINSIGHTS_INSTRUMENTATIONKEY")))\n        {\n            loggerConfiguration.WriteTo.ApplicationInsights(\n                services.GetRequiredService<TelemetryConfiguration>(),\n                TelemetryConverter.Traces);\n        }\n\n        return loggerConfiguration;\n    }\n}\n')),Object(r.b)("p",null,"If we take a look at the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigureBaseLogging")," method above, we can see that our logs are being enriched with the build info, property by property. We're also giving ourselves a beautifully coloured console thanks to Serilog's glorious ",Object(r.b)("a",{parentName:"p",href:"https://github.com/serilog/serilog-sinks-console#themes"},"theme support"),":"),Object(r.b)("p",null," ",Object(r.b)("img",{src:t(1014).default})),Object(r.b)("p",null,"Take a moment to admire the salmon pinks. Is it not lovely?"),Object(r.b)("p",null,"Finally we come to the main act. Plugging in Application Insights is as simple as dropping in ",Object(r.b)("inlineCode",{parentName:"p"},"loggerConfiguration.WriteTo.ApplicationInsights")," into our configuration. You'll note that this depends upon the existence of an application setting of ",Object(r.b)("inlineCode",{parentName:"p"},"APPINSIGHTS_INSTRUMENTATIONKEY")," ","-"," this is the secret sauce that we need to be in place so we can pipe logs merrily to Application Insights. So you'll need this configuration in place so this works."),Object(r.b)("p",null,Object(r.b)("img",{src:t(1015).default})),Object(r.b)("p",null,"As you can see, we now have the likes of ",Object(r.b)("inlineCode",{parentName:"p"},"BuildNumber"),", ",Object(r.b)("inlineCode",{parentName:"p"},"CommitHash")," and friends visible on each log. Happy diagnostic days!"),Object(r.b)("p",null,"I'm indebted to the marvellous ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/MarcelMichau"},"Marcel Michau")," who showed me how to get the fiddlier parts of how to get Application Insights plugged in the right way. Thanks chap!"))}u.isMDXComponent=!0},958:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var i=t(0),o=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=i,d=p["".concat(a,".").concat(b)]||p[b]||g[b]||r;return t?o.a.createElement(d,l(l({ref:n},c),{},{components:t})):o.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
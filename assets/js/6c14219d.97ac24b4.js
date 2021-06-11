(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[14727],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26965:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var i=n(22122),r=n(19756),o=(n(67294),n(3905)),a={title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Azure Functions",".NET 5","querystring","query params","dependency injection","Bicep"],image:"blog/2021-06-11-azure-functions-dotnet-5-query-params-di-bicep/title-image.png",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",hide_table_of_contents:!1},s={permalink:"/2021/06/11/azure-functions-dotnet-5-query-params-di-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-06-11-azure-functions-dotnet-5-query-params-di-bicep.md",source:"@site/blog/2021-06-11-azure-functions-dotnet-5-query-params-di-bicep.md",title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",date:"2021-06-11T00:00:00.000Z",formattedDate:"June 11, 2021",tags:[{label:"Azure Functions",permalink:"/tags/azure-functions"},{label:".NET 5",permalink:"/tags/net-5"},{label:"querystring",permalink:"/tags/querystring"},{label:"query params",permalink:"/tags/query-params"},{label:"dependency injection",permalink:"/tags/dependency-injection"},{label:"Bicep",permalink:"/tags/bicep"}],readingTime:3.38,truncated:!1,nextItem:{title:"Azurite and Table Storage in a dev container",permalink:"/2021/05/15/azurite-and-table-storage-dev-container"}},l=[{value:"Query params",id:"query-params",children:[]},{value:"Dependency Injection, local development and Azure Application Settings",id:"dependency-injection-local-development-and-azure-application-settings",children:[]},{value:"Bicep",id:"bicep",children:[]},{value:"Building .NET 5 functions",id:"building-net-5-functions",children:[]}],p={toc:l};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. There's an excellent ",(0,o.kt)("a",{parentName:"p",href:"https://codetraveler.io/2021/05/28/creating-azure-functions-using-net-5/"},"guide")," for the general steps required to perform the upgrade. However there's a number of (unrelated) items which are not covered by that post:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Query params"),(0,o.kt)("li",{parentName:"ul"},"Dependency Injection"),(0,o.kt)("li",{parentName:"ul"},"Bicep"),(0,o.kt)("li",{parentName:"ul"},"Build")),(0,o.kt)("p",null,"This post will show how to tackle these."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image showing name of post and the Azure Functions logo",src:n(84227).Z})),(0,o.kt)("h2",{id:"query-params"},"Query params"),(0,o.kt)("p",null,"As part of the move to .NET 5 functions, we say goodbye to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httprequest?view=aspnetcore-5.0"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpRequest"))," and hello to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.functions.worker.http.httprequestdata?view=azure-dotnet"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpRequestData")),".  Now ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpRequest")," had a useful ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httprequest.query?view=aspnetcore-5.0#Microsoft_AspNetCore_Http_HttpRequest_Query"},(0,o.kt)("inlineCode",{parentName:"a"},"Query"))," property which allowed for the simple extraction of query parameters like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'var from = req.Query["from"]\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"HttpRequestData")," has no such property.  However, it's straightforward to make our own. It's simply a matter of using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.web.httputility.parsequerystring?view=net-5.0"},(0,o.kt)("inlineCode",{parentName:"a"},"System.Web.HttpUtility.ParseQueryString"))," on ",(0,o.kt)("inlineCode",{parentName:"p"},"req.Url.Query")," and using that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'var query = System.Web.HttpUtility.ParseQueryString(req.Url.Query);\nvar from = query["from"]\n')),(0,o.kt)("h2",{id:"dependency-injection-local-development-and-azure-application-settings"},"Dependency Injection, local development and Azure Application Settings"),(0,o.kt)("p",null,"Dependency Injection is a much more familiar shape in .NET 5 if you're familiar with .NET Core web apps.  Once again we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," file. To get the configuration built in such a way to support both local development and when deployed to Azure, there's a few things to do. When deployed to Azure you'll likely want to read from Azure Application Settings:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of Azure Application Settings",src:n(28717).Z})),(0,o.kt)("p",null,"To tackle both of these, you'll want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"AddJsonFile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AddEnvironmentVariables")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigureAppConfiguration"),". A final ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," might look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace MyApp\n{\n    public class Program\n    {\n        public static Task Main(string[] args)\n        {\n            var host = new HostBuilder()\n                .ConfigureAppConfiguration(configurationBuilder => \n                    configurationBuilder\n                        .AddCommandLine(args)\n                        // below is for local development\n                        .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)\n                        // below is what you need to read Application Settings in Azure\n                        .AddEnvironmentVariables()\n                )\n                .ConfigureFunctionsWorkerDefaults()\n                .ConfigureServices(services =>\n                {\n                    services.AddLogging();\n                    services.AddHttpClient();\n                })\n                .Build();\n\n            return host.RunAsync();\n        }\n    }\n}\n')),(0,o.kt)("p",null,"With this approach in place, when the application runs, it should construct a configuration driven by all the providers required to run our application."),(0,o.kt)("h2",{id:"bicep"},"Bicep"),(0,o.kt)("p",null,"When it comes to deploying to Azure via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep"},"Bicep"),", there's some small tweaks required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appSettings.FUNCTIONS_WORKER_RUNTIME")," becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"dotnet-isolated")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"linuxFxVersion")," becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"DOTNET-ISOLATED|5.0"))),(0,o.kt)("p",null,"Applied to the resource itself the diff looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"resource functionAppName_resource 'Microsoft.Web/sites@2018-11-01' = {\n  name: functionAppName\n  location: location\n  tags: tags_var\n  kind: 'functionapp,linux'\n  identity: {\n    type: 'SystemAssigned'\n  }\n  properties: {\n    serverFarmId: appServicePlanName_resource.id\n    siteConfig: {\n      http20Enabled: true\n      remoteDebuggingEnabled: false\n      minTlsVersion: '1.2'\n      appSettings: [\n        {\n          name: 'FUNCTIONS_EXTENSION_VERSION'\n          value: '~3'\n        }\n        {\n          name: 'FUNCTIONS_WORKER_RUNTIME'\n-          value: 'dotnet'\n+          value: 'dotnet-isolated'\n        }\n        {\n          name: 'AzureWebJobsStorage'\n          value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccountName};AccountKey=${listKeys(resourceId('Microsoft.Storage/storageAccounts', storageAccountName), '2019-06-01').keys[0].value};EndpointSuffix=${environment().suffixes.storage}'\n        }\n      ]\n      connectionStrings: [\n        {\n          name: 'TableStorageConnectionString'\n          connectionString: 'DefaultEndpointsProtocol=https;AccountName=${storageAccountName};AccountKey=${listKeys(resourceId('Microsoft.Storage/storageAccounts', storageAccountName), '2019-06-01').keys[0].value};EndpointSuffix=${environment().suffixes.storage}'\n        }\n      ]\n-      linuxFxVersion: 'DOTNETCORE|LTS'\n+      linuxFxVersion: 'DOTNET-ISOLATED|5.0'\n      ftpsState: 'Disabled'\n      managedServiceIdentityId: 1\n    }\n    clientAffinityEnabled: false\n    httpsOnly: true\n  }\n}\n")),(0,o.kt)("h2",{id:"building-net-5-functions"},"Building .NET 5 functions"),(0,o.kt)("p",null,"Before signing off, there's one more thing to slip in. When attempting to build .NET 5 Azure Functions with the .NET SDK ",(0,o.kt)("em",{parentName:"p"},"alone"),", you'll encounter this error: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"The framework 'Microsoft.NETCore.App', version '3.1.0' was not found.\n")),(0,o.kt)("p",null,"Docs on this seem to be pretty short. The closest I came to docs was ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/66938752/net-5-the-framework-microsoft-netcore-app-version-3-1-0-was-not-found/66938753#66938753"},"this comment on Stack Overflow"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To build .NET 5 functions, the .NET Core 3 SDK is required. So this must be installed alongside the 5.0.x sdk.")),(0,o.kt)("p",null,"So with Azure Pipelines you might have have something that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"stages:\n- stage: build\n  displayName: build\n  pool:\n    vmImage: 'ubuntu-latest'\n  jobs:\n  - job: BuildAndTest\n    displayName: 'Build and Test'\n    steps:\n    # we need .NET Core SDK 3.1 too!\n    - task: UseDotNet@2\n      displayName: 'Install .NET Core SDK 3.1'\n      inputs:\n        packageType: 'sdk'\n        version: 3.1.x\n\n    - task: UseDotNet@2\n      displayName: 'Install .NET SDK 5.0'\n      inputs:\n        packageType: 'sdk'\n        version: 5.0.x\n\n    - task: DotNetCoreCLI@2\n      displayName: \"function app test\"\n      inputs:\n        command: test\n        \n    - task: DotNetCoreCLI@2\n      displayName: \"function app build\"\n      inputs:\n        command: build\n        arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)/MyApp'\n        \n    - task: DotNetCoreCLI@2\n      displayName: 'function app publish'\n      inputs:\n        command: publish\n        arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)/MyApp /p:SourceRevisionId=$(Build.SourceVersion)'\n        publishWebProjects: false\n        modifyOutputPath: false\n        zipAfterPublish: true\n\n    - publish: $(Build.ArtifactStagingDirectory)/MyApp\n      artifact: functionapp\n")),(0,o.kt)("p",null,"Have fun building .NET 5 functions!"))}u.isMDXComponent=!0},28717:function(e,t,n){"use strict";t.Z=n.p+"assets/images/application-settings-f177c29c01d8a646443655192d73b3b1.png"},84227:function(e,t,n){"use strict";t.Z=n.p+"assets/images/title-image-b79911805fc227ea2efac37f37c4778f.png"}}]);
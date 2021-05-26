(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[17572],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51674:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Autofac 6, integration tests and .NET generic hosting",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["autofac","asp.net","ConfigureTestContainer","Integration Testing"],image:"blog/2020-10-02-autofac-6-integration-tests-and-generic-hosting/autofac-integration-tests.png",hide_table_of_contents:!1},s={permalink:"/2020/10/02/autofac-6-integration-tests-and-generic-hosting",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-10-02-autofac-6-integration-tests-and-generic-hosting.md",source:"@site/blog/2020-10-02-autofac-6-integration-tests-and-generic-hosting.md",title:"Autofac 6, integration tests and .NET generic hosting",description:"I blogged a little while ago around to support integration tests using Autofac. This was specific to Autofac but documented a workaround for a long standing issue with ConfigureTestContainer that was introduced into .NET core 3.0 which affects all third-party containers that use ConfigureTestContainer in their tests.",date:"2020-10-02T00:00:00.000Z",formattedDate:"October 2, 2020",tags:[{label:"autofac",permalink:"/tags/autofac"},{label:"asp.net",permalink:"/tags/asp-net"},{label:"ConfigureTestContainer",permalink:"/tags/configure-test-container"},{label:"Integration Testing",permalink:"/tags/integration-testing"}],readingTime:2.23,truncated:!1,prevItem:{title:"Safari: The Mysterious Case of the Empty Download",permalink:"/2020/10/19/safari-empty-download-content-type"},nextItem:{title:"Why your team needs a newsfeed",permalink:"/2020/09/04/why-your-team-needs-newsfeed"}},c=[{value:"Concern for third-party containers",id:"concern-for-third-party-containers",children:[]}],u={toc:c};function p(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I ",(0,i.kt)("a",{parentName:"p",href:"/2020/05/21/autofac-webapplicationfactory-integration-tests"},"blogged a little while ago around to support integration tests using Autofac"),". This was specific to Autofac but documented a workaround for a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907"},"long standing issue with ",(0,i.kt)("inlineCode",{parentName:"a"},"ConfigureTestContainer")," that was introduced into .NET core 3.0")," which affects ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1#default-service-container-replacement"},"all third-party containers")," that use ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureTestContainer")," in their tests."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A title image for the blog featuring the Autofac logo",src:n(82580).Z})),(0,i.kt)("p",null,"I'll not repeat the contents of the previous post - it all still stands. However, with Autofac 6 the approach documented there will cease to work. This is because the previous approach relied upon ",(0,i.kt)("inlineCode",{parentName:"p"},"ContainerBuilder")," not being sealed. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1120"},"As of Autofac 6 it is.")),(0,i.kt)("p",null,"Happily the tremendous ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/evocationist"},"Alistair Evans")," came up with an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1207#issuecomment-701961371"},"alternative approach")," which is listed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n/// Based upon https://github.com/dotnet/AspNetCore.Docs/tree/master/aspnetcore/test/integration-tests/samples/3.x/IntegrationTestsSample\n/// </summary>\n/// <typeparam name="TStartup"></typeparam>\npublic class AutofacWebApplicationFactory<TStartup> : WebApplicationFactory<TStartup> where TStartup : class\n{\n    protected override IHost CreateHost(IHostBuilder builder)\n    {\n        builder.UseServiceProviderFactory<ContainerBuilder>(new CustomServiceProviderFactory());\n        return base.CreateHost(builder);\n    }\n}\n\n/// <summary>\n/// Based upon https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-620750841 - only necessary because of an issue in ASP.NET Core\n/// </summary>\npublic class CustomServiceProviderFactory : IServiceProviderFactory<ContainerBuilder>\n{\n    private AutofacServiceProviderFactory _wrapped;\n    private IServiceCollection _services;\n\n    public CustomServiceProviderFactory()\n    {\n        _wrapped = new AutofacServiceProviderFactory();\n    }\n\n    public ContainerBuilder CreateBuilder(IServiceCollection services)\n    {\n        // Store the services for later.\n        _services = services;\n\n        return _wrapped.CreateBuilder(services);\n    }\n\n    public IServiceProvider CreateServiceProvider(ContainerBuilder containerBuilder)\n    {\n        var sp = _services.BuildServiceProvider();\n#pragma warning disable CS0612 // Type or member is obsolete\n        var filters = sp.GetRequiredService<IEnumerable<IStartupConfigureContainerFilter<ContainerBuilder>>>();\n#pragma warning restore CS0612 // Type or member is obsolete\n\n        foreach (var filter in filters)\n        {\n            filter.ConfigureContainer(b => { })(containerBuilder);\n        }\n\n        return _wrapped.CreateServiceProvider(containerBuilder);\n    }        \n}\n')),(0,i.kt)("p",null,"Using this in place of the previous approach should allow you continue running your integration tests with Autofac 6. Thanks Alistair!"),(0,i.kt)("h2",{id:"concern-for-third-party-containers"},"Concern for third-party containers"),(0,i.kt)("p",null,"Whilst this gets us back up and running, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1207#issuecomment-702250044"},"Alistair pointed out that this approach depends upon a deprecated interface"),". This is the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.hosting.istartupconfigurecontainerfilter-1.configurecontainer?view=aspnetcore-3.1"},(0,i.kt)("inlineCode",{parentName:"a"},"IStartupConfigureContainerFilter"))," which ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/pull/11505"},"has been marked as ",(0,i.kt)("inlineCode",{parentName:"a"},"Obsolete")," since mid 2019"),". What this means is, at some point, this approach will stop working."),(0,i.kt)("p",null,"The marvellous David Fowler has said that ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1207#issuecomment-702361608"},(0,i.kt)("inlineCode",{parentName:"a"},"ConfigureTestContainer")," issue should be resolved in .NET"),". However it's worth noting that this has been an issue since .NET Core 3 shipped and unfortunately the wonderful ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-702287717"},"Chris Ross has advised that it's not likely to be fixed for .NET 5"),"."),(0,i.kt)("p",null,"I'm very keen this does get resolved in .NET. Building tests upon an ",(0,i.kt)("inlineCode",{parentName:"p"},"Obsolete")," attribute doesn't fill me with confidence. I'm a long time user of Autofac and I'd like to continue to be. Here's hoping that's made possible by a fix landing in .NET. If this is something you care about, it may be worth upvoting / commenting on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907"},"the issue in GitHub")," so the team are aware of desire around this being resolved."))}p.isMDXComponent=!0},82580:function(e,t,n){"use strict";t.Z=n.p+"assets/images/autofac-integration-tests-7950d2a75e653006ab8defd2c2f26740.png"}}]);
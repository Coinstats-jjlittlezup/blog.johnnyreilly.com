(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,h=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(h,s(s({ref:t},u),{},{components:n})):a.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1170)),i={title:"Autofac 6, integration tests and .NET generic hosting",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["autofac","asp.net","ConfigureTestContainer","Integration Testing"],hide_table_of_contents:!1},s={permalink:"/2020/10/02/autofac-6-integration-tests-and-generic-hosting",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-10-02-autofac-6-integration-tests-and-generic-hosting.md",source:"@site/blog/2020-10-02-autofac-6-integration-tests-and-generic-hosting.md",description:"I blogged a little while ago around to support integration tests using Autofac. This was specific to Autofac but documented a workaround for a long standing issue with ConfigureTestContainer that was introduced into .NET core 3.0 which affects all third-party containers that use ConfigureTestContainer in their tests.",date:"2020-10-02T00:00:00.000Z",formattedDate:"October 2, 2020",tags:[{label:"autofac",permalink:"/tags/autofac"},{label:"asp.net",permalink:"/tags/asp-net"},{label:"ConfigureTestContainer",permalink:"/tags/configure-test-container"},{label:"Integration Testing",permalink:"/tags/integration-testing"}],title:"Autofac 6, integration tests and .NET generic hosting",readingTime:2.18,truncated:!1,prevItem:{title:"The Mysterious Case of Safari and the Empty Download",permalink:"/2020/10/19/safari-empty-download-content-type"},nextItem:{title:"Why your team needs a newsfeed",permalink:"/2020/09/04/why-your-team-needs-newsfeed"}},c=[{value:"Concern for third-party containers",id:"concern-for-third-party-containers",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I ",Object(o.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2020/05/autofac-webapplicationfactory-and.html"},"blogged a little while ago around to support integration tests using Autofac"),". This was specific to Autofac but documented a workaround for a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907"},"long standing issue with ",Object(o.b)("inlineCode",{parentName:"a"},"ConfigureTestContainer")," that was introduced into .NET core 3.0")," which affects ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1#default-service-container-replacement"},"all third-party containers")," that use ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigureTestContainer")," in their tests."),Object(o.b)("p",null,"I'll not repeat the contents of the previous post - it all still stands. However, with Autofac 6 the approach documented there will cease to work. This is because the previous approach relied upon ",Object(o.b)("inlineCode",{parentName:"p"},"ContainerBuilder")," not being sealed. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1120"},"As of Autofac 6 it is.")),Object(o.b)("p",null,"Happily the tremendous ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/evocationist"},"Alistair Evans")," came up with an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1207#issuecomment-701961371"},"alternative approach")," which is listed below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n    /// Based upon https://github.com/dotnet/AspNetCore.Docs/tree/master/aspnetcore/test/integration-tests/samples/3.x/IntegrationTestsSample\n    /// </summary>\n    /// <typeparam name="TStartup"></typeparam>\n    public class AutofacWebApplicationFactory<TStartup> : WebApplicationFactory<TStartup> where TStartup : class\n    {\n        protected override IHost CreateHost(IHostBuilder builder)\n        {\n            builder.UseServiceProviderFactory<ContainerBuilder>(new CustomServiceProviderFactory());\n            return base.CreateHost(builder);\n        }\n    }\n\n    /// <summary>\n    /// Based upon https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-620750841 - only necessary because of an issue in ASP.NET Core\n    /// </summary>\n    public class CustomServiceProviderFactory : IServiceProviderFactory<ContainerBuilder>\n    {\n        private AutofacServiceProviderFactory _wrapped;\n        private IServiceCollection _services;\n\n        public CustomServiceProviderFactory()\n        {\n            _wrapped = new AutofacServiceProviderFactory();\n        }\n\n        public ContainerBuilder CreateBuilder(IServiceCollection services)\n        {\n            // Store the services for later.\n            _services = services;\n\n            return _wrapped.CreateBuilder(services);\n        }\n\n        public IServiceProvider CreateServiceProvider(ContainerBuilder containerBuilder)\n        {\n            var sp = _services.BuildServiceProvider();\n#pragma warning disable CS0612 // Type or member is obsolete\n            var filters = sp.GetRequiredService<IEnumerable<IStartupConfigureContainerFilter<ContainerBuilder>>>();\n#pragma warning restore CS0612 // Type or member is obsolete\n\n            foreach (var filter in filters)\n            {\n                filter.ConfigureContainer(b => { })(containerBuilder);\n            }\n\n            return _wrapped.CreateServiceProvider(containerBuilder);\n        }        \n    }\n')),Object(o.b)("p",null,"Using this in place of the previous approach should allow you continue running your integration tests with Autofac 6. Thanks Alistair!"),Object(o.b)("h2",{id:"concern-for-third-party-containers"},"Concern for third-party containers"),Object(o.b)("p",null,"Whilst this gets us back up and running, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1207#issuecomment-702250044"},"Alistair pointed out that this approach depends upon a deprecated interface"),". This is the ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.hosting.istartupconfigurecontainerfilter-1.configurecontainer?view=aspnetcore-3.1"},Object(o.b)("inlineCode",{parentName:"a"},"IStartupConfigureContainerFilter"))," which ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/pull/11505"},"has been marked as ",Object(o.b)("inlineCode",{parentName:"a"},"Obsolete")," since mid 2019"),". What this means is, at some point, this approach will stop working."),Object(o.b)("p",null,"The marvellous David Fowler has said that ",Object(o.b)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1207#issuecomment-702361608"},Object(o.b)("inlineCode",{parentName:"a"},"ConfigureTestContainer")," issue should be resolved in .NET"),". However it's worth noting that this has been an issue since .NET Core 3 shipped and unfortunately the wonderful ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-702287717"},"Chris Ross has advised that it's not likely to be fixed for .NET 5"),"."),Object(o.b)("p",null,"I'm very keen this does get resolved in .NET. Building tests upon an ",Object(o.b)("inlineCode",{parentName:"p"},"Obsolete")," attribute doesn't fill me with confidence. I'm a long time user of Autofac and I'd like to continue to be. Here's hoping that's made possible by a fix landing in .NET. If this is something you care about, it may be worth upvoting / commenting on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907"},"the issue in GitHub")," so the team are aware of desire around this being resolved."))}p.isMDXComponent=!0}}]);
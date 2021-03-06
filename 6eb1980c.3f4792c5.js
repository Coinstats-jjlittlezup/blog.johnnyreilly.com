(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{457:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(958)),i={title:"Google Analytics API and ASP.Net Core",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp net core","google analytics"],hide_table_of_contents:!1},s={permalink:"/blog.johnnyreilly.com/2019/03/22/google-analytics-api-and-aspnet-core",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-03-22-google-analytics-api-and-aspnet-core.md",source:"@site/blog/2019-03-22-google-analytics-api-and-aspnet-core.md",description:"Some of my posts are meaningful treaties on the nature of software development. Some are detailed explanations of approaches you can use. Some are effectively code dumps. This is one of those.",date:"2019-03-22T00:00:00.000Z",tags:[{label:"asp net core",permalink:"/blog.johnnyreilly.com/tags/asp-net-core"},{label:"google analytics",permalink:"/blog.johnnyreilly.com/tags/google-analytics"}],title:"Google Analytics API and ASP.Net Core",readingTime:2.045,truncated:!1,prevItem:{title:"Template Tricks for a Dainty DOM",permalink:"/blog.johnnyreilly.com/2019/03/24/template-tricks-for-dainty-dom"},nextItem:{title:"The Big One Point Oh",permalink:"/blog.johnnyreilly.com/2019/03/06/the-big-one-point-oh"}},c=[],l={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Some of my posts are meaningful treaties on the nature of software development. Some are detailed explanations of approaches you can use. Some are effectively code dumps. This is one of those."),Object(a.b)("p",null,"I recently had need to be able to access the API for Google Analytics from ASP.Net Core. Getting this up and running turned out to be surprisingly tough because of an absence of good examples. So here it is; an example of how you can access a simple page access stat using ",Object(a.b)("a",{parentName:"p",href:"https://www.nuget.org/packages/Google.Apis.AnalyticsReporting.v4/"},"the API"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'async Task<SomeKindOfDataStructure[]> GetUsageFromGoogleAnalytics(DateTime startAtThisDate, DateTime endAtThisDate)\n{\n    // Create the DateRange object. Here we want data from last week.\n    var dateRange = new DateRange\n    {\n        StartDate = startAtThisDate.ToString("yyyy-MM-dd"),\n        EndDate = endAtThisDate.ToString("yyyy-MM-dd")\n    };\n    // Create the Metrics and dimensions object.\n    // var metrics = new List<Metric> { new Metric { Expression = "ga:sessions", Alias = "Sessions" } };\n    // var dimensions = new List<Dimension> { new Dimension { Name = "ga:pageTitle" } };\n    var metrics = new List<Metric> { new Metric { Expression = "ga:uniquePageviews" } };\n    var dimensions = new List<Dimension> { \n        new Dimension { Name = "ga:date" },\n        new Dimension { Name = "ga:dimension1" } \n    };\n\n    // Get required View Id from configuration\n    var viewId = $"ga:{"[VIEWID]"}";\n\n    // Create the Request object.\n    var reportRequest = new ReportRequest\n    {\n        DateRanges = new List<DateRange> { dateRange },\n        Metrics = metrics,\n        Dimensions = dimensions,\n        FiltersExpression = "ga:pagePath==/index.html",\n        ViewId = viewId\n    };\n\n    var getReportsRequest = new GetReportsRequest {\n        ReportRequests = new List<ReportRequest> { reportRequest }\n    };\n        \n    //Invoke Google Analytics API call and get report\n    var analyticsService = GetAnalyticsReportingServiceInstance();\n    var response = await (analyticsService.Reports.BatchGet(getReportsRequest)).ExecuteAsync();\n\n    var logins = response.Reports[0].Data.Rows.Select(row => new SomeKindOfDataStructure {\n        Date = new DateTime(\n            year: Convert.ToInt32(row.Dimensions[0].Substring(0, 4)), \n            month: Convert.ToInt32(row.Dimensions[0].Substring(4, 2)), \n            day: Convert.ToInt32(row.Dimensions[0].Substring(6, 2))),\n        NumberOfLogins = Convert.ToInt32(row.Metrics[0].Values[0])\n    })\n    .OrderByDescending(login => login.Date)\n    .ToArray();\n\n    return logins;\n}\n\n/// <summary>\n/// Intializes and returns Analytics Reporting Service Instance\n/// </summary>\nAnalyticsReportingService GetAnalyticsReportingServiceInstance() {\n    var googleAuthFlow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer {\n        ClientSecrets = new ClientSecrets {\n            ClientId = "[CLIENTID]",\n            ClientSecret = "[CLIENTSECRET]"\n        }\n    });\n\n    var responseToken = new TokenResponse {\n        AccessToken = "[ANALYTICSTOKEN]",\n        RefreshToken = "[REFRESHTOKEN]",\n        Scope = AnalyticsReportingService.Scope.AnalyticsReadonly, //Read-only access to Google Analytics,\n        TokenType = "Bearer",\n    };\n\n    var credential = new UserCredential(googleAuthFlow, "", responseToken);\n\n    // Create the  Analytics service.\n    return new AnalyticsReportingService(new BaseClientService.Initializer {\n        HttpClientInitializer = credential,\n        ApplicationName = "my-super-applicatio",\n    });\n}\n')),Object(a.b)("p",null,"You can see above that you need various credentials to be able to use the API. You can acquire these by logging into GA. Enjoy!"))}p.isMDXComponent=!0},958:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(i,".").concat(m)]||u[m]||g[m]||a;return t?o.a.createElement(y,s(s({ref:n},l),{},{components:t})):o.a.createElement(y,s({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
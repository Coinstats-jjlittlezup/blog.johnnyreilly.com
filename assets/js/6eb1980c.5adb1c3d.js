(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[5918],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(t),m=o,y=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},60006:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={title:"Google Analytics API and ASP.Net Core",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp net core","google analytics"],hide_table_of_contents:!1},s={permalink:"/2019/03/22/google-analytics-api-and-aspnet-core",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-03-22-google-analytics-api-and-aspnet-core.md",source:"@site/blog/2019-03-22-google-analytics-api-and-aspnet-core.md",title:"Google Analytics API and ASP.Net Core",description:"Some of my posts are meaningful treaties on the nature of software development. Some are detailed explanations of approaches you can use. Some are effectively code dumps. This is one of those.",date:"2019-03-22T00:00:00.000Z",formattedDate:"March 22, 2019",tags:[{label:"asp net core",permalink:"/tags/asp-net-core"},{label:"google analytics",permalink:"/tags/google-analytics"}],readingTime:2.045,truncated:!1,prevItem:{title:"Template Tricks for a Dainty DOM",permalink:"/2019/03/24/template-tricks-for-dainty-dom"},nextItem:{title:"The Big One Point Oh",permalink:"/2019/03/06/the-big-one-point-oh"}},l=[],c={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Some of my posts are meaningful treaties on the nature of software development. Some are detailed explanations of approaches you can use. Some are effectively code dumps. This is one of those."),(0,a.kt)("p",null,"I recently had need to be able to access the API for Google Analytics from ASP.Net Core. Getting this up and running turned out to be surprisingly tough because of an absence of good examples. So here it is; an example of how you can access a simple page access stat using ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Google.Apis.AnalyticsReporting.v4/"},"the API"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'async Task<SomeKindOfDataStructure[]> GetUsageFromGoogleAnalytics(DateTime startAtThisDate, DateTime endAtThisDate)\n{\n    // Create the DateRange object. Here we want data from last week.\n    var dateRange = new DateRange\n    {\n        StartDate = startAtThisDate.ToString("yyyy-MM-dd"),\n        EndDate = endAtThisDate.ToString("yyyy-MM-dd")\n    };\n    // Create the Metrics and dimensions object.\n    // var metrics = new List<Metric> { new Metric { Expression = "ga:sessions", Alias = "Sessions" } };\n    // var dimensions = new List<Dimension> { new Dimension { Name = "ga:pageTitle" } };\n    var metrics = new List<Metric> { new Metric { Expression = "ga:uniquePageviews" } };\n    var dimensions = new List<Dimension> { \n        new Dimension { Name = "ga:date" },\n        new Dimension { Name = "ga:dimension1" } \n    };\n\n    // Get required View Id from configuration\n    var viewId = $"ga:{"[VIEWID]"}";\n\n    // Create the Request object.\n    var reportRequest = new ReportRequest\n    {\n        DateRanges = new List<DateRange> { dateRange },\n        Metrics = metrics,\n        Dimensions = dimensions,\n        FiltersExpression = "ga:pagePath==/index.html",\n        ViewId = viewId\n    };\n\n    var getReportsRequest = new GetReportsRequest {\n        ReportRequests = new List<ReportRequest> { reportRequest }\n    };\n        \n    //Invoke Google Analytics API call and get report\n    var analyticsService = GetAnalyticsReportingServiceInstance();\n    var response = await (analyticsService.Reports.BatchGet(getReportsRequest)).ExecuteAsync();\n\n    var logins = response.Reports[0].Data.Rows.Select(row => new SomeKindOfDataStructure {\n        Date = new DateTime(\n            year: Convert.ToInt32(row.Dimensions[0].Substring(0, 4)), \n            month: Convert.ToInt32(row.Dimensions[0].Substring(4, 2)), \n            day: Convert.ToInt32(row.Dimensions[0].Substring(6, 2))),\n        NumberOfLogins = Convert.ToInt32(row.Metrics[0].Values[0])\n    })\n    .OrderByDescending(login => login.Date)\n    .ToArray();\n\n    return logins;\n}\n\n/// <summary>\n/// Intializes and returns Analytics Reporting Service Instance\n/// </summary>\nAnalyticsReportingService GetAnalyticsReportingServiceInstance() {\n    var googleAuthFlow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer {\n        ClientSecrets = new ClientSecrets {\n            ClientId = "[CLIENTID]",\n            ClientSecret = "[CLIENTSECRET]"\n        }\n    });\n\n    var responseToken = new TokenResponse {\n        AccessToken = "[ANALYTICSTOKEN]",\n        RefreshToken = "[REFRESHTOKEN]",\n        Scope = AnalyticsReportingService.Scope.AnalyticsReadonly, //Read-only access to Google Analytics,\n        TokenType = "Bearer",\n    };\n\n    var credential = new UserCredential(googleAuthFlow, "", responseToken);\n\n    // Create the  Analytics service.\n    return new AnalyticsReportingService(new BaseClientService.Initializer {\n        HttpClientInitializer = credential,\n        ApplicationName = "my-super-applicatio",\n    });\n}\n')),(0,a.kt)("p",null,"You can see above that you need various credentials to be able to use the API. You can acquire these by logging into GA. Enjoy!"))}p.isMDXComponent=!0}}]);
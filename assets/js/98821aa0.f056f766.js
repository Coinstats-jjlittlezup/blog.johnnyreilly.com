(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{1211:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,b=m["".concat(r,".").concat(u)]||m[u]||d[u]||i;return a?o.a.createElement(b,s(s({ref:t},l),{},{components:a})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},848:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(4),o=a(10),i=(a(0),a(1211)),r={title:"Giving OData to CRM 4.0",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["OData","WCF Data Services","CRM 4.0","LINQ"],hide_table_of_contents:!1},s={permalink:"/2012/09/24/giving-odata-to-crm-40",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-09-24-giving-odata-to-crm-40.md",source:"@site/blog/2012-09-24-giving-odata-to-crm-40.md",title:"Giving OData to CRM 4.0",description:"Just recently I was tasked with seeing if we could provide a way to access our Dynamics CRM instance via OData. My initial investigations made it seem like there was nothing for me to do; CRM 2011 provides OData support out of the box. Small problem. We were running CRM 4.0.",date:"2012-09-24T00:00:00.000Z",formattedDate:"September 24, 2012",tags:[{label:"OData",permalink:"/tags/o-data"},{label:"WCF Data Services",permalink:"/tags/wcf-data-services"},{label:"CRM 4.0",permalink:"/tags/crm-4-0"},{label:"LINQ",permalink:"/tags/linq"}],readingTime:3.745,truncated:!1,prevItem:{title:"Unit Testing and Entity Framework: The Filth and the Fury",permalink:"/2012/10/03/unit-testing-and-entity-framework-filth"},nextItem:{title:"Globalize and jQuery Validation",permalink:"/2012/09/06/globalize-and-jquery-validate"}},c=[{value:"LINQ to CRM",id:"linq-to-crm",children:[]},{value:"Make me an OData Service",id:"make-me-an-odata-service",children:[]},{value:"Now, a warning...",id:"now-a-warning",children:[]},{value:"Finishing off",id:"finishing-off",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Just recently I was tasked with seeing if we could provide a way to access our Dynamics CRM instance via OData. My initial investigations made it seem like there was nothing for me to do; ",Object(i.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/gg309461.aspx"},"CRM 2011 provides OData support out of the box"),". Small problem. We were running CRM 4.0."),Object(i.b)("p",null," It could well have ended there apart from the fact that Microsoft makes it astonishingly easy to to create your own OData service using WCF Data Services. Because it's so straightforward I was able to get an OData solution for CRM 4.0 up and running with very little heavy lifting at all. Want to know how it's done?"),Object(i.b)("h2",{id:"linq-to-crm"},"LINQ to CRM"),Object(i.b)("p",null,"To start with you're going to need the ",Object(i.b)("a",{parentName:"p",href:"http://www.microsoft.com/en-us/download/details.aspx?id=38"},"CRM SDK 4.0"),'. This contains a "vanilla" LINQ to CRM client which is used in each of the example applications that can be found in ',Object(i.b)("inlineCode",{parentName:"p"},"microsoft.xrm\\samples"),". We want this client (or something very like it) to use as the basis for our OData service."),Object(i.b)("p",null,"In order to get a LINQ to CRM provider that caters for your own customised CRM instance you need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"crmsvcutil")," utility from the CRM SDK (found in the ",Object(i.b)("inlineCode",{parentName:"p"},"microsoft.xrm\\tools\\")," directory). Detailed instructions on how to use this can be found in this Word document: ",Object(i.b)("inlineCode",{parentName:"p"},"microsoft.xrm\\advanced_developer_extensions_-_developers_guide.docx"),". Extra information around the topic can be found using these links:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/ff681559"},"MSDN docs on xRM")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/ff681573"},"MSDN examples of LINQ queries")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.dynamicscrmtrickbag.com/"},"CRM blog site")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://community.adxstudio.com/products/adxstudio-portals/developers-guide/archive/linq-to-crm-22/"},"Another site listing examples of LINQ to CRM"))),Object(i.b)("p",null,"You should end up with custom generated data context classes which look not dissimilar to similar classes that you may already have in place for Entity Framework etc. With your ",Object(i.b)("inlineCode",{parentName:"p"},"Xrm.DataContext")," in hand (a subclass of ",Object(i.b)("inlineCode",{parentName:"p"},"Microsoft.Xrm.Client.Data.Services.CrmDataContext"),") you'll be ready to move forwards."),Object(i.b)("h2",{id:"make-me-an-odata-service"},"Make me an OData Service"),Object(i.b)("p",null,"As I said, Microsoft makes it fantastically easy to get an OData service up and running. ",Object(i.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-US/library/dd728275"},"In this example")," an entity context model is created from the Northwind database and then exposed as an OData service. To create my CRM OData service I followed a similar process. But rather than creating an entity context model using a database I plugged in the ",Object(i.b)("inlineCode",{parentName:"p"},"Xrm.DataContext")," instance of CRM that we created a moment ago. These are the steps I followed to make my service:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Create a new ASP.NET Web Application called "CrmOData" (in case it\'s relevant I was using Visual Studio 2010 to do this).')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove all ASPXs / JavaScript / CSS files etc leaving you with an essentially empty project.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add references to the following DLLs that come with the SDK: - microsoft.crm.sdk.dll"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"microsoft.crm.sdktypeproxy.dll"),Object(i.b)("li",{parentName:"ul"},"microsoft.crm.sdktypeproxy.xmlserializers.dll"),Object(i.b)("li",{parentName:"ul"},"microsoft.xrm.client.dll"),Object(i.b)("li",{parentName:"ul"},"microsoft.xrm.portal.dll"),Object(i.b)("li",{parentName:"ul"},"microsoft.xrm.portal.files.dll"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add the ",Object(i.b)("inlineCode",{parentName:"p"},"&lt;microsoft.xrm.client&gt;")," config section to your web.config (not forgetting the associated Xrm connection string)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add this new file below to the root of the project:"))),Object(i.b)("script",{src:"https://gist.github.com/3765280.js?file=Crm.svc.cs"}),Object(i.b)("p",null,"And that's it - done. When you run this web application you will find an OData service exposed at http://localhost:12345/Crm.svc. You could have it even simpler if you wanted - you could pull out the logging that's in place and leave only the ",Object(i.b)("inlineCode",{parentName:"p"},"InitializeService")," there. That's all you need. (The ",Object(i.b)("inlineCode",{parentName:"p"},"GetEntityById")," method is a helper method of my own for identifying the GUIDs of CRM.)"),Object(i.b)("p",null,"You may have noticed that I have made use of caching for my OData service following the steps I found ",Object(i.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/peter_qian/archive/2010/11/17/using-asp-net-output-caching-with-wcf-data-services.aspx"},"here"),". Again you may or may not want to use this."),Object(i.b)("h2",{id:"now-a-warning"},"Now, a warning..."),Object(i.b)("p",null,"Okay - not so much a warning as a limitation. Whilst most aspects of the OData service work as you would hope there is no support for the $select operator. I had a frustrating time trying to discover why and then came upon this explanation:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},'"$select statements are not supported. This problem is being discussed here ',Object(i.b)("a",{parentName:"em",href:"http://social.msdn.microsoft.com/Forums/en/adodotnetdataservices/thread/366086ee-dcef-496a-ad15-f461788ae678"},"http://social.msdn.microsoft.com/Forums/en/adodotnetdataservices/thread/366086ee-dcef-496a-ad15-f461788ae678"),' and is caused by the fact that CrmDataContext implements the IExpandProvider interface which in turn causes the DataService to lose support for $select projections"')),Object(i.b)("p",null,"You can also see ",Object(i.b)("a",{parentName:"p",href:"http://social.microsoft.com/Forums/en/crmdevelopment/thread/31daedb4-3d75-483a-8d7f-269af3375d74"},"here")," for the original post discussing this."),Object(i.b)("h2",{id:"finishing-off"},"Finishing off"),Object(i.b)("p",null,"In the example I set out here I used the version of WCF Data Services that shipped with Visual Studio 2010. WCF Data Services now ships separately from the .NET Framework and you can ",Object(i.b)("a",{parentName:"p",href:"http://nuget.org/packages?q=wcf+data+services"},"pick up the latest and greatest from Nuget"),". I understand that you could easily switch over to using the latest versions but since I didn't see any feature that I needed on this occasion I haven't."),Object(i.b)("p",null,"I hope you find this useful."))}p.isMDXComponent=!0}}]);
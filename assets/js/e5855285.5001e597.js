(window.webpackJsonp=window.webpackJsonp||[]).push([[995],{1084:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(4),r=n(10),o=(n(0),n(1183)),i={title:"Managed Identity, Azure SQL and Entity Framework",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["connection string","managed identity","entity framework","Microsoft.Data.SqlClient"],hide_table_of_contents:!1},s={permalink:"/2021/03/10/managed-identity-azure-sql-entity-framework",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-03-10-managed-identity-azure-sql-entity-framework.md",source:"@site/blog/2021-03-10-managed-identity-azure-sql-entity-framework.md",description:"Managed Identity offers a very secure way for applications running in Azure to connect to Azure SQL databases. It's an approach that does not require code changes; merely configuration of connection string and associated resources. Hence it has a good developer experience. Importantly, it allows us to avoid exposing our database to username / password authentication, and hence making it a tougher target for bad actors.",date:"2021-03-10T00:00:00.000Z",formattedDate:"March 10, 2021",tags:[{label:"connection string",permalink:"/tags/connection-string"},{label:"managed identity",permalink:"/tags/managed-identity"},{label:"entity framework",permalink:"/tags/entity-framework"},{label:"Microsoft.Data.SqlClient",permalink:"/tags/microsoft-data-sql-client"}],title:"Managed Identity, Azure SQL and Entity Framework",readingTime:4.925,truncated:!1,prevItem:{title:"From Blogger to Docusaurus",permalink:"/2021/03/15/from-blogger-to-docusaurus"},nextItem:{title:"Generate TypeScript and CSharp clients with NSwag based on an API",permalink:"/2021/03/06/generate-typescript-and-csharp-clients-with-nswag"}},c=[{value:"<code>Integrated Security=true</code>",id:"integrated-securitytrue",children:[]},{value:"Managed Identity",id:"managed-identity",children:[]},{value:"Connection String alone",id:"connection-string-alone",children:[]},{value:"Usage with Entity Framework Core 5",id:"usage-with-entity-framework-core-5",children:[]},{value:"User Assigned Managed Identity",id:"user-assigned-managed-identity",children:[]}],l={toc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Managed Identity offers a very secure way for applications running in Azure to connect to Azure SQL databases. It's an approach that does not require code changes; merely configuration of connection string and associated resources. Hence it has a good developer experience. Importantly, it allows us to avoid exposing our database to username / password authentication, and hence making it a tougher target for bad actors."),Object(o.b)("p",null,"This post talks us through using managed identity for connecting to Azure SQL. "),Object(o.b)("h2",{id:"integrated-securitytrue"},Object(o.b)("inlineCode",{parentName:"h2"},"Integrated Security=true")),Object(o.b)("p",null,'Everyone is deploying to the cloud. Few are the organisations that view deployment to data centers they manage as the future. This is generally a good thing, however in the excitement of the new, it\'s possible to forget some of the good properties that "on premise" deployment afforded when it came to connectivity and authentication.'),Object(o.b)("p",null,"I speak of course, of our old friend ",Object(o.b)("inlineCode",{parentName:"p"},"Integrated Security=true"),". When you seek to connect a web application to a database, you'll typically use some kind of database connection string. And back in the day, it may have looked something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Data Source=myServer;Initial Catalog=myDB;Integrated Security=true;\n")),Object(o.b)("p",null,"The above provides a database server, a database and also ",Object(o.b)("inlineCode",{parentName:"p"},"Integrated Security=true"),". When you see ",Object(o.b)("inlineCode",{parentName:"p"},"Integrated Security=true"),', what you\'re essentially looking at is an instruction to use the identity that an application is running under (typically called a "service account") as the authentication credential to secure access to the database. Under the covers, this amounts to ',Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/authentication-in-sql-server"},"Windows Authentication"),"."),Object(o.b)("p",null,"The significant thing about this approach is that it is more secure than using usernames and passwords in the connection string. If you have to use username and password to authenticate, then you need to persist them somewhere - so you need to make sure that's secure. Also, if someone manages to acquire that username and password, they're free to get access to the database and do malicious things."),Object(o.b)("p",null,'Bottom line: the less you are sharing authentication credentials, the better your security. Integrated Security is a harder nut to crack than username and password. The thing to note about the above phrase is "Windows Authentication".  Web Apps in Azure / AWS etc do not typically use Windows Authentication when it comes to connecting to the database.  Connecting with username / password is far more common.'),Object(o.b)("p",null,"What if there was a way to have the developer experience of ",Object(o.b)("inlineCode",{parentName:"p"},"Integrated Security=true")," without needing to use Windows Authentication?  There is."),Object(o.b)("h2",{id:"managed-identity"},"Managed Identity"),Object(o.b)("p",null,"The docs express the purpose of ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview"},"managed identity")," well:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A common challenge for developers is the management of secrets and credentials to secure communication between different services. On Azure, managed identities eliminate the need for developers having to manage credentials by providing an identity for the Azure resource in Azure AD and using it to obtain Azure Active Directory (Azure AD) tokens")),Object(o.b)("p",null,"Historically a certain amount of ceremony was required to use managed identity to connect to a database, and could involve augmenting a ",Object(o.b)("inlineCode",{parentName:"p"},"DbContext")," like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'public MyDbContext(DbContextOptions options) : base(options) {\n    var conn = (Microsoft.Data.SqlClient.SqlConnection)Database.GetDbConnection();\n    var credential = new DefaultAzureCredential();\n    var token = credential\n        .GetToken(\n            new Azure.Core.TokenRequestContext(new[] { "https://database.windows.net/.default" })\n        );\n    conn.AccessToken = token.Token;\n}\n')),Object(o.b)("p",null,"This mechanism works, and has the tremendous upside of no longer requiring credentials be passed in a connection string.  However, as you can see this isn't the simplest of setups.  And also, what if you don't want to use managed identity when you're developing locally?  This approach has baggage and forces us to make code changes."),Object(o.b)("h2",{id:"connection-string-alone"},"Connection String alone"),Object(o.b)("p",null,"The wonderful aspect of the original ",Object(o.b)("inlineCode",{parentName:"p"},"Integrated Security=true")," approach, was that there were no code changes required; one need only supply the connection string. Just configuration."),Object(o.b)("p",null,"This is now possible with Azure SQL thanks to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dotnet/SqlClient/pull/730"},"this PR")," to the ",Object(o.b)("a",{parentName:"p",href:"https://www.nuget.org/packages/Microsoft.Data.SqlClient/"},"Microsoft.Data.SqlClient")," nuget package. (Incidentally, ",Object(o.b)("a",{parentName:"p",href:"https://devblogs.microsoft.com/dotnet/introducing-the-new-microsoftdatasqlclient/"},"Microsoft.Data.SqlClient is the successor to System.Data.SqlClient."),")"),Object(o.b)("p",null,"Support for connection string managed identities ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dotnet/SqlClient/blob/master/release-notes/2.1/2.1.0.md#Azure-Active-Directory-Managed-Identity-authentication"},"shipped with v2.1"),". Connection strings can look slightly different depending on the type of managed identity you're using:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'// For System Assigned Managed Identity\n"Server:{serverURL}; Authentication=Active Directory MSI; Initial Catalog={db};"\n\n// For System Assigned Managed Identity\n"Server:{serverURL}; Authentication=Active Directory Managed Identity; Initial Catalog={db};"\n\n// For User Assigned Managed Identity\n"Server:{serverURL}; Authentication=Active Directory MSI; User Id={ObjectIdOfManagedIdentity}; Initial Catalog={db};"\n\n// For User Assigned Managed Identity\n"Server:{serverURL}; Authentication=Active Directory Managed Identity; User Id={ObjectIdOfManagedIdentity}; Initial Catalog={db};"\n')),Object(o.b)("p",null,"Regardless of the approach, you can see that none of the connection strings have credentials in them.  And that's special."),Object(o.b)("h2",{id:"usage-with-entity-framework-core-5"},"Usage with Entity Framework Core 5"),Object(o.b)("p",null,"If you're using Entity Framework Core, you might be struggling to get this working and encountering strange error messages.  In my ASP.NET project I had a dependendency on\n",Object(o.b)("a",{parentName:"p",href:"https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer/5.0.4"},"Microsoft.EntityFrameworkCore.SqlServer@5"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Microsoft.EntityFrameworkCore.SqlServer@5 in NuGet",src:n(1224).default})),Object(o.b)("p",null,"If you look close above, you'll see that the package has a dependency on Microsoft.Data.SqlClient, but crucially on 2.0.1 or greater.  So if ",Object(o.b)("inlineCode",{parentName:"p"},"dotnet")," has installed a version of Microsoft.Data.SqlClient which is ",Object(o.b)("em",{parentName:"p"},"less")," than 2.1 then the functionality required will not be installed. The resolution is simple, ensure that the required version is installed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"dotnet add package Microsoft.Data.SqlClient --version 2.1.2\n")),Object(o.b)("p",null,"The version which we want to use is 2.1 (or greater) and fortunately that is compatible with Entity Framework Core 5.  Incidentally, when Entity Framework Core 6 ships it will no longer be necessary to manually specify this dependency as it already requires ",Object(o.b)("a",{parentName:"p",href:"mailto:Microsoft.Data.SqlClient@2.1"},"Microsoft.Data.SqlClient@2.1")," as a minimum."),Object(o.b)("h2",{id:"user-assigned-managed-identity"},"User Assigned Managed Identity"),Object(o.b)("p",null,"If you're using user assigned managed identity, you'll need to supply the object id of your managed identity, which you can find in the ",Object(o.b)("a",{parentName:"p",href:"https://portal.azure.com/"},"Azure Portal"),":"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Managed Identity object id",src:n(1225).default})),Object(o.b)("p",null,"You can configure this in ARM as well, but cryptically, the object id goes by the nom de plume of ",Object(o.b)("inlineCode",{parentName:"p"},"principalId")," (thanks to my partner in crime ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jmccor99"},"John McCormick")," for puzzling that out):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"\"CONNECTIONSTRINGS__OURDBCONNECTION\": \"[concat('Server=tcp:', parameters('sqlServerName') , '.database.windows.net,1433;Initial Catalog=', parameters('sqlDatabaseName'),';Authentication=Active Directory MSI',';User Id=', reference(resourceId('Microsoft.ManagedIdentity/userAssignedIdentities/', parameters('managedIdentityName')), '2018-11-30').principalId)]\"\n")),Object(o.b)("p",null,"That's it! With managed identity handling your authentication you can sleep easy, knowing you should be in a better place security wise."))}d.isMDXComponent=!0},1183:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,b=u["".concat(i,".").concat(h)]||u[h]||p[h]||o;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1224:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/entity-framework-core-nuget-d1da164951dd2d6e8b7c794b7c959d58.png"},1225:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/managed-identity-object-id-25de76ce41faea196959927a3fefe1e0.png"}}]);
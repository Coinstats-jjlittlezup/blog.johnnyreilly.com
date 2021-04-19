(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{1210:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||h[b]||r;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1223:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/traffic-to-app-service-a11ff2c51af6c3776075153eae17e9eb.png"},1224:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/data-protection-zero-downtime-0e3b1ca7d853ca65fa0ebc09dbe1b2de.png"},190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(4),o=n(10),r=(n(0),n(1210)),i={title:"Goodbye Client Affinity, Hello Data Protection with Azure",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},s={permalink:"/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-02-27-goodbye-client-affinity-hello-data-protection-with-azure.md",source:"@site/blog/2021-02-27-goodbye-client-affinity-hello-data-protection-with-azure.md",title:"Goodbye Client Affinity, Hello Data Protection with Azure",description:"I've written lately about zero downtime releases with Azure App Service. Zero downtime releases are only successful if your authentication mechanism survives a new deployment. We looked in my last post at how to achieve this with Azure's in-built authentication mechanism; Easy Auth.",date:"2021-02-27T00:00:00.000Z",formattedDate:"February 27, 2021",tags:[],readingTime:3.46,truncated:!1,prevItem:{title:"Generate TypeScript and CSharp clients with NSwag based on an API",permalink:"/2021/03/06/generate-typescript-and-csharp-clients-with-nswag"},nextItem:{title:"Making Easy Auth tokens survive releases on Linux Azure App Service",permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service"}},c=[{value:"Sharing is caring",id:"sharing-is-caring",children:[]}],l={toc:c};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I've written lately about ",Object(r.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/02/azure-app-service-health-checks-and-zero-downtime-deployments.html"},"zero downtime releases with Azure App Service"),". Zero downtime releases are only successful if your authentication mechanism survives a new deployment. We looked in my last post at ",Object(r.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/02/easy-auth-tokens-survive-releases-on-linux-azure-app-service.html"},"how to achieve this with Azure's in-built authentication mechanism; Easy Auth"),"."),Object(r.b)("p",null,"We're now going to look at how the same goal can be achieved if your ASP.NET application is authenticating another way. We achieve this through use of the ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/configuration/overview"},"ASP.NET Data Protection")," system. Andrew Lock has written ",Object(r.b)("a",{parentName:"p",href:"https://andrewlock.net/an-introduction-to-the-data-protection-system-in-asp-net-core/"},"an excellent walkthrough on the topic")," and I encourage you to read it."),Object(r.b)("p",null,"We're interested in the ASP.NET data-protection system because it encrypts and decrypts sensitive data including the authentication cookie. It's wonderful that the data protection does this, but at the same time it presents a problem. We would like to route traffic to ",Object(r.b)("em",{parentName:"p"},"multiple")," instances of our application\u2026 So traffic could go to instance 1, instance 2 of our app etc."),Object(r.b)("p",null," ",Object(r.b)("img",{alt:"traffic to app service",src:n(1223).default})),Object(r.b)("p",null,"How can we ensure the different instances of our app can read the authentication cookies regardless of the instance that produced them? How can we ensure that instance 1 can read cookies produced by instance 2 and vice versa? And for that matter, we'd like all instances to be able to read cookies whether they were produced by an instance in a production or staging slot."),Object(r.b)("p",null,'We\'re aiming to avoid the use of "sticky sessions" and ARRAffinity cookies. These ensure that traffic is continually routed to the same instance. Routing to the same instance explicitly prevents us from stopping routing traffic to an old instance and starting routing to a new one.'),Object(r.b)("p",null,"With the data protection activated and multiple instances of your app service you immediately face the issue that different instances of the app will be unable to read cookies they did not create. This is the default behaviour of data protection. ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/web-farm?view=aspnetcore-5.0#data-protection"},"To quote the docs:")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Data Protection relies upon a set of cryptographic keys stored in a key ring. When the Data Protection system is initialized, it applies default settings that store the key ring locally. Under the default configuration, a unique key ring is stored on each node of the web farm. Consequently, each web farm node can't decrypt data that's encrypted by an app on any other node.")),Object(r.b)("p",null,"The problem here is the data protection keys (the key ring) is being stored locally on each instance. What are the implications of this? Well, For example, instance 2 doesn't have access to the keys instance 1 is using and so can't decrypt instance 1 cookies."),Object(r.b)("h2",{id:"sharing-is-caring"},"Sharing is caring"),Object(r.b)("p",null,"What we need to do is move away from storing keys locally, and to storing it in a ",Object(r.b)("em",{parentName:"p"},"shared")," place instead. We're going to store data protection keys in Azure Blob Storage and protect the keys with Azure Key Vault:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"persist keys to azure blob",src:n(1224).default})),Object(r.b)("p",null,"All instances of the application can access the key ring and consequently sharing cookies is enabled. ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/configuration/overview?view=aspnetcore-5.0#protectkeyswithazurekeyvault"},"As the documentation attests"),", enabling this is fairly simple. It amounts to adding the following packages to your ASP.NET app:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.nuget.org/packages/Azure.Extensions.AspNetCore.DataProtection.Blobs"},Object(r.b)("inlineCode",{parentName:"a"},"Azure.Extensions.AspNetCore.DataProtection.Blobs"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.nuget.org/packages/Azure.Extensions.AspNetCore.DataProtection.Keys"},Object(r.b)("inlineCode",{parentName:"a"},"Azure.Extensions.AspNetCore.DataProtection.Keys")))),Object(r.b)("p",null,"And adding the following to the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigureServices")," in your ASP.NET app:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'services.AddDataProtection().SetApplicationName("OurWebApp")\n        // azure credentials require storage blob contributor role permissions\n        // eg https://my-storage-account.blob.core.windows.net/keys/key\n        .PersistKeysToAzureBlobStorage(new Uri($"https://{Configuration["StorageAccountName"]}.blob.core.windows.net/keys/key"), new DefaultAzureCredential())\n\n        // azure credentials require key vault crypto role permissions\n        // eg https://my-key-vault.vault.azure.net/keys/dataprotection\n        .ProtectKeysWithAzureKeyVault(new Uri($"https://{Configuration["KeyVaultName"]}.vault.azure.net/keys/dataprotection"), new DefaultAzureCredential());\n')),Object(r.b)("p",null,"In the above example you can see we're passing the name of our Storage account and Key Vault via configuration."),Object(r.b)("p",null,"There's one more crucial piece of the puzzle here; and it's role assignments, better known as permissions. Your App Service needs to be able to read and write to Azure Key Vault and the Azure Blob Storage. The permissions of ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor"},"Storage Blob Data Contributor")," and ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-crypto-officer-preview"},"Key Vault Crypto Officer")," are sufficient to enable this. (If you'd like to see what configuring that looks like via ARM templates then ",Object(r.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/02/arm-templates-security-role-assignments.html"},"check out this post"),".)"),Object(r.b)("p",null,"With this in place we're able to route traffic to any instance of our application, secure in the knowledge that it will be able to read the cookies. Furthermore, we've enabled zero downtime releases as a direct consequence."))}u.isMDXComponent=!0}}]);
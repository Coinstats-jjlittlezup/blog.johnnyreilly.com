"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[69029],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93534:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Goodbye Client Affinity, Hello Data Protection with Azure",description:"How to use ASP.NET Data Protection to remove the need for sticky sessions with Client Affinity",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Azure","Data Protection","Easy Auth","ASP.NET","Client Affinity"],image:"blog/2021-02-27-goodbye-client-affinity-hello-data-protection-with-azure/traffic-to-app-service.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-02-27-goodbye-client-affinity-hello-data-protection-with-azure.md",source:"@site/blog/2021-02-27-goodbye-client-affinity-hello-data-protection-with-azure.md",title:"Goodbye Client Affinity, Hello Data Protection with Azure",description:"How to use ASP.NET Data Protection to remove the need for sticky sessions with Client Affinity",date:"2021-02-27T00:00:00.000Z",formattedDate:"February 27, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Data Protection",permalink:"/tags/data-protection"},{label:"Easy Auth",permalink:"/tags/easy-auth"},{label:"ASP.NET",permalink:"/tags/asp-net"},{label:"Client Affinity",permalink:"/tags/client-affinity"}],readingTime:3.45,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"NSwag: TypeScript and CSharp client generation based on an API",permalink:"/2021/03/06/generate-typescript-and-csharp-clients-with-nswag"},nextItem:{title:"Making Easy Auth tokens survive releases on Linux Azure App Service",permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service"}},u={authorsImageUrls:[void 0]},p=[{value:"Sharing is caring",id:"sharing-is-caring",children:[]}],h={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I've written lately about ",(0,r.kt)("a",{parentName:"p",href:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"},"zero downtime releases with Azure App Service"),". Zero downtime releases are only successful if your authentication mechanism survives a new deployment. We looked in my last post at ",(0,r.kt)("a",{parentName:"p",href:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service"},"how to achieve this with Azure's in-built authentication mechanism; Easy Auth"),"."),(0,r.kt)("p",null,"We're now going to look at how the same goal can be achieved if your ASP.NET application is authenticating another way. We achieve this through use of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/configuration/overview"},"ASP.NET Data Protection")," system. Andrew Lock has written ",(0,r.kt)("a",{parentName:"p",href:"https://andrewlock.net/an-introduction-to-the-data-protection-system-in-asp-net-core/"},"an excellent walkthrough on the topic")," and I encourage you to read it."),(0,r.kt)("p",null,"We're interested in the ASP.NET data-protection system because it encrypts and decrypts sensitive data including the authentication cookie. It's wonderful that the data protection does this, but at the same time it presents a problem. We would like to route traffic to ",(0,r.kt)("em",{parentName:"p"},"multiple")," instances of our application\u2026 So traffic could go to instance 1, instance 2 of our app etc."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"traffic to app service",src:n(90802).Z})),(0,r.kt)("p",null,"How can we ensure the different instances of our app can read the authentication cookies regardless of the instance that produced them? How can we ensure that instance 1 can read cookies produced by instance 2 and vice versa? And for that matter, we'd like all instances to be able to read cookies whether they were produced by an instance in a production or staging slot."),(0,r.kt)("p",null,'We\'re aiming to avoid the use of "sticky sessions" and ARRAffinity cookies. These ensure that traffic is continually routed to the same instance. Routing to the same instance explicitly prevents us from stopping routing traffic to an old instance and starting routing to a new one.'),(0,r.kt)("p",null,"With the data protection activated and multiple instances of your app service you immediately face the issue that different instances of the app will be unable to read cookies they did not create. This is the default behaviour of data protection. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/web-farm?view=aspnetcore-5.0#data-protection"},"To quote the docs:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Data Protection relies upon a set of cryptographic keys stored in a key ring. When the Data Protection system is initialized, it applies default settings that store the key ring locally. Under the default configuration, a unique key ring is stored on each node of the web farm. Consequently, each web farm node can't decrypt data that's encrypted by an app on any other node.")),(0,r.kt)("p",null,"The problem here is the data protection keys (the key ring) is being stored locally on each instance. What are the implications of this? Well, For example, instance 2 doesn't have access to the keys instance 1 is using and so can't decrypt instance 1 cookies."),(0,r.kt)("h2",{id:"sharing-is-caring"},"Sharing is caring"),(0,r.kt)("p",null,"What we need to do is move away from storing keys locally, and to storing it in a ",(0,r.kt)("em",{parentName:"p"},"shared")," place instead. We're going to store data protection keys in Azure Blob Storage and protect the keys with Azure Key Vault:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"persist keys to azure blob",src:n(59606).Z})),(0,r.kt)("p",null,"All instances of the application can access the key ring and consequently sharing cookies is enabled. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/configuration/overview?view=aspnetcore-5.0#protectkeyswithazurekeyvault"},"As the documentation attests"),", enabling this is fairly simple. It amounts to adding the following packages to your ASP.NET app:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Azure.Extensions.AspNetCore.DataProtection.Blobs"},(0,r.kt)("inlineCode",{parentName:"a"},"Azure.Extensions.AspNetCore.DataProtection.Blobs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Azure.Extensions.AspNetCore.DataProtection.Keys"},(0,r.kt)("inlineCode",{parentName:"a"},"Azure.Extensions.AspNetCore.DataProtection.Keys")))),(0,r.kt)("p",null,"And adding the following to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," in your ASP.NET app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'services.AddDataProtection().SetApplicationName("OurWebApp")\n        // azure credentials require storage blob contributor role permissions\n        // eg https://my-storage-account.blob.core.windows.net/keys/key\n        .PersistKeysToAzureBlobStorage(new Uri($"https://{Configuration["StorageAccountName"]}.blob.core.windows.net/keys/key"), new DefaultAzureCredential())\n\n        // azure credentials require key vault crypto role permissions\n        // eg https://my-key-vault.vault.azure.net/keys/dataprotection\n        .ProtectKeysWithAzureKeyVault(new Uri($"https://{Configuration["KeyVaultName"]}.vault.azure.net/keys/dataprotection"), new DefaultAzureCredential());\n')),(0,r.kt)("p",null,"In the above example you can see we're passing the name of our Storage account and Key Vault via configuration."),(0,r.kt)("p",null,"There's one more crucial piece of the puzzle here; and it's role assignments, better known as permissions. Your App Service needs to be able to read and write to Azure Key Vault and the Azure Blob Storage. The permissions of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor"},"Storage Blob Data Contributor")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-crypto-officer-preview"},"Key Vault Crypto Officer")," are sufficient to enable this. (If you'd like to see what configuring that looks like via ARM templates then ",(0,r.kt)("a",{parentName:"p",href:"/2021/02/08/arm-templates-security-role-assignments"},"check out this post"),".)"),(0,r.kt)("p",null,"With this in place we're able to route traffic to any instance of our application, secure in the knowledge that it will be able to read the cookies. Furthermore, we've enabled zero downtime releases as a direct consequence."))}d.isMDXComponent=!0},59606:function(e,t,n){t.Z=n.p+"assets/images/data-protection-zero-downtime-d267eb88eafd479df49a359021e7f628.png"},90802:function(e,t,n){t.Z=n.p+"assets/images/traffic-to-app-service-0fb4d2ef97f99c82fd5fba1240824fb9.png"}}]);
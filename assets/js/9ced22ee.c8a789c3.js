(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1233:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/easy-auth-zero-downtime-deployment-61490054e3f8ba565854d7105a175ee6.png"},1234:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/token-1efdd5206571d649dca09531f014ea5a.png"},274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(4),r=n(10),o=(n(0),n(1189)),i={title:"Making Easy Auth tokens survive releases on Linux Azure App Service",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},s={permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service.md",source:"@site/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service.md",description:'I wrote recently about zero downtime deployments on Azure App Service. Many applications require authentication, and ours is no exception. In our case we\'re using Azure Active Directory facilitated by "Easy Auth" which provides authentication to our App Service.',date:"2021-02-16T00:00:00.000Z",formattedDate:"February 16, 2021",tags:[],title:"Making Easy Auth tokens survive releases on Linux Azure App Service",readingTime:3.94,truncated:!1,prevItem:{title:"Goodbye Client Affinity, Hello Data Protection with Azure",permalink:"/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure"},nextItem:{title:"Azure App Service, Health checks and zero downtime deployments",permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"}},c=[{value:"SaS-sy ARM Templates",id:"sas-sy-arm-templates",children:[]},{value:"What&#39;s actually happening?",id:"whats-actually-happening",children:[]}],l={toc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I ",Object(o.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/02/azure-app-service-health-checks-and-zero-downtime-deployments.html"},"wrote recently about zero downtime deployments on Azure App Service"),". Many applications require authentication, and ours is no exception. In our case we're using Azure Active Directory facilitated by ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization"},'"Easy Auth"')," which provides authentication to our App Service."),Object(o.b)("p",null,"Our app uses a Linux App Service. It's worth knowing that Linux App Services run as a Docker container. As a consequence, Easy Auth works in a slightly different way; effectively as a middleware. ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization#on-containers"},"To quote the docs on Easy Auth"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This module handles several things for your app:"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"Authenticates users with the specified provider"),Object(o.b)("li",{parentName:"ul"},"Validates, stores, and refreshes tokens"),Object(o.b)("li",{parentName:"ul"},"Manages the authenticated session"),Object(o.b)("li",{parentName:"ul"},"Injects identity information into request headers The module runs separately from your application code and is configured using app settings. No SDKs, specific languages, or changes to your application code are required.")),Object(o.b)("p",{parentName:"blockquote"},"The authentication and authorization module runs in a separate container, isolated from your application code. Using what's known as the ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/ambassador"},"Ambassador")," pattern, it interacts with the incoming traffic to perform similar functionality as on Windows.")),Object(o.b)("p",null,"However, ",Object(o.b)("a",{parentName:"p",href:"https://social.msdn.microsoft.com/Forums/en-US/dde551b2-c86d-474b-b0a6-cc66163785a1/restarting-azure-app-service-on-linux-with-azure-active-directory-authentication-resets-authme#b59951ab-623a-4442-a221-80c157387bbe"},"Microsoft have acknowledged there is a potential bug in Easy Auth support at present"),". When the app service is restarted, the stored tokens are removed, and ",Object(o.b)("strong",{parentName:"p"},"authentication begins to fail"),". As you might well imagine, authentication similarly starts to fail when a new app service is introduced - as is the case during deployment."),Object(o.b)("p",null,"This is really significant. You may well have \"zero downtime deployment\", but it doesn't amount to a hill of beans if the moment you've deployed your users find they're effectively logged out. ",Object(o.b)("a",{parentName:"p",href:"https://social.msdn.microsoft.com/Forums/en-US/dde551b2-c86d-474b-b0a6-cc66163785a1/restarting-azure-app-service-on-linux-with-azure-active-directory-authentication-resets-authme#b59951ab-623a-4442-a221-80c157387bbe"},"The advice from Microsoft")," is to use ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/archive/blogs/jpsanders/azure-app-service-authentication-using-a-blob-storage-for-token-cache"},"Blob Storage for Token Cache"),":"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://twitter.com/cgillum"},"Chris Gillum")," said in a ",Object(o.b)("a",{parentName:"p",href:"https://cgillum.tech/2016/03/07/app-service-token-store/"},"blog on the topic"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"you can provision an Azure Blob Storage container and configure your web app with a SaS URL (with read/write/list access) pointing to that blob container. This SaS URL can then be saved to the ",Object(o.b)("inlineCode",{parentName:"p"},"WEBSITE_AUTH_TOKEN_CONTAINER_SASURL")," app setting. When this app setting is present, all tokens will be stored in and fetched from the specified blob container.")),Object(o.b)("p",null,"To turn that into something visual, what's suggested is this:"),Object(o.b)("p",null," ",Object(o.b)("img",{alt:"diagram of Easy Auth with blog storage",src:n(1233).default})),Object(o.b)("h2",{id:"sas-sy-arm-templates"},"SaS-sy ARM Templates"),Object(o.b)("p",null,"I have the good fortune to work with some very talented people. One of them, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jmccor99"},"John McCormick")," turned his hand to putting this proposed solution into ",Object(o.b)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," and ARM template-land. First of all, let's look at our ",Object(o.b)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),". We add the following, prior to our deployment job:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"- job: SASGen\n        displayName: Generate SAS Token\n\n        steps:\n          - task: AzurePowerShell@4\n            name: ObtainSasTokenTask\n            inputs:\n              azureSubscription: $(serviceConnection)\n              ScriptType: inlineScript\n              Inline: |\n                $startTime = Get-Date\n                $expiryTime = $startTime.AddDays(90)\n                $storageAcc = Get-AzStorageAccount -ResourceGroupName $(azureResourceGroup) -Name $(storageAccountName)\n                $ctx = $storageAcc.Context\n                $sas = New-AzStorageContainerSASToken -Context $ctx -Name \"tokens\" -Permission \"rwl\" -Protocol HttpsOnly -StartTime $startTime -ExpiryTime $expiryTime -FullUri\n                Write-Host \"##vso[task.setvariable variable=sasToken;issecret=true;isOutput=true]$sas\"\n              azurePowerShellVersion: 'LatestVersion'\n\n      - job: DeployAppARMTemplates\n        variables:\n          sasToken: $[dependencies.SASGen.outputs['ObtainSasTokenTask.sasToken'] ]\n        displayName: Deploy App ARM Templates\n        dependsOn:\n        - SASGen\n\n        steps:\n          - task: AzureResourceManagerTemplateDeployment@3\n            displayName: Deploy app-service ARM Template\n            inputs:\n              deploymentScope: Resource Group\n              azureResourceManagerConnection: $(serviceConnection)\n              subscriptionId: $(subscriptionId)\n              action: Create Or Update Resource Group\n              resourceGroupName: $(azureResourceGroup)\n              location: $(location)\n              templateLocation: Linked artifact\n              csmFile: 'infra/app-service/azuredeploy.json'\n              csmParametersFile: 'infra/azuredeploy.parameters.json'\n              overrideParameters: >-\n                -sasUrl $(sasToken)\n              deploymentMode: Incremental\n")),Object(o.b)("p",null,"There's two notable things happening above:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("inlineCode",{parentName:"li"},"SASGen")," job, a PowerShell script runs that ",Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/az.storage/new-azstoragecontainersastoken?view=azps-5.5.0"},"generates a SaS token URL")," with read, write and list permissions that will last for 90 days. (Incidentally, there is a way to do this via ",Object(o.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/56127006/761388"},"ARM templates, and without PowerShell")," ","-"," but alas it didn't seem to work when we experimented with it.)"),Object(o.b)("li",{parentName:"ol"},"The generated (secret) token URL (",Object(o.b)("inlineCode",{parentName:"li"},"sasUrl"),") is passed as a parameter to our App Service ARM template. The ARM template sets an appsetting for the app service:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "apiVersion": "2020-09-01",\n    "name": "appsettings",\n    "type": "config",\n    "properties": {\n        "WEBSITE_AUTH_TOKEN_CONTAINER_SASURL": "[parameters(\'sasUrl\')]"\n    }\n},\n')),Object(o.b)("p",null,"If you google ",Object(o.b)("inlineCode",{parentName:"p"},"WEBSITE_AUTH_TOKEN_CONTAINER_SASURL")," you will not find a geat deal. Documentation is short. What you will find is ",Object(o.b)("a",{parentName:"p",href:"http://jsandersblog.azurewebsites.net/2017/08/10/azure-app-service-authentication-using-a-blob-storage-for-token-cache/"},"Jeff Sanders excellent blog on the topic"),". It is, in terms of content, it has some commonality with this post; except in Jeff's example he's manually implementing the workaround in the Azure Portal."),Object(o.b)("h2",{id:"whats-actually-happening"},"What's actually happening?"),Object(o.b)("p",null,"With this in place, every time someone logs into your app a JSON token is written to the storage like so:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"token in storage account",src:n(1234).default})),Object(o.b)("p",null,"If you take the trouble to look inside you'll find something like this tucked away:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "encrypted": true,\n    "tokens": {\n        "aad": "herewith_a_very_very_long_encrypted_token"\n    },\n    "version": 1\n}\n')),Object(o.b)("p",null,"With this in place, you can safely restart your app service and / or deploy a new one, safe in the knowledge that the tokens will live on in the storage account, and that consequently you will not be unauthenticating users."))}p.isMDXComponent=!0}}]);
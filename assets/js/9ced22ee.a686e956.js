"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[34828],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47493:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Making Easy Auth tokens survive releases on Linux Azure App Service",authors:"johnnyreilly",image:"blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service/easy-auth-zero-downtime-deployment.png",tags:["Azure","Easy Auth","tokens","SAS","Blob Storage"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service.md",source:"@site/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service.md",title:"Making Easy Auth tokens survive releases on Linux Azure App Service",description:'I wrote recently about zero downtime deployments on Azure App Service. Many applications require authentication, and ours is no exception. In our case we\'re using Azure Active Directory facilitated by "Easy Auth" which provides authentication to our App Service.',date:"2021-02-16T00:00:00.000Z",formattedDate:"February 16, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Easy Auth",permalink:"/tags/easy-auth"},{label:"tokens",permalink:"/tags/tokens"},{label:"SAS",permalink:"/tags/sas"},{label:"Blob Storage",permalink:"/tags/blob-storage"}],readingTime:3.92,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Goodbye Client Affinity, Hello Data Protection with Azure",permalink:"/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure"},nextItem:{title:"Azure App Service, Health checks and zero downtime deployments",permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"}},c={authorsImageUrls:[void 0]},u=[{value:"SaS-sy ARM Templates",id:"sas-sy-arm-templates",children:[]},{value:"What&#39;s actually happening?",id:"whats-actually-happening",children:[]}],m={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I ",(0,o.kt)("a",{parentName:"p",href:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"},"wrote recently about zero downtime deployments on Azure App Service"),". Many applications require authentication, and ours is no exception. In our case we're using Azure Active Directory facilitated by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization"},'"Easy Auth"')," which provides authentication to our App Service."),(0,o.kt)("p",null,"Our app uses a Linux App Service. It's worth knowing that Linux App Services run as a Docker container. As a consequence, Easy Auth works in a slightly different way; effectively as a middleware. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization#on-containers"},"To quote the docs on Easy Auth"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This module handles several things for your app:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Authenticates users with the specified provider"),(0,o.kt)("li",{parentName:"ul"},"Validates, stores, and refreshes tokens"),(0,o.kt)("li",{parentName:"ul"},"Manages the authenticated session"),(0,o.kt)("li",{parentName:"ul"},"Injects identity information into request headers The module runs separately from your application code and is configured using app settings. No SDKs, specific languages, or changes to your application code are required.")),(0,o.kt)("p",{parentName:"blockquote"},"The authentication and authorization module runs in a separate container, isolated from your application code. Using what's known as the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/ambassador"},"Ambassador")," pattern, it interacts with the incoming traffic to perform similar functionality as on Windows.")),(0,o.kt)("p",null,"However, ",(0,o.kt)("a",{parentName:"p",href:"https://social.msdn.microsoft.com/Forums/en-US/dde551b2-c86d-474b-b0a6-cc66163785a1/restarting-azure-app-service-on-linux-with-azure-active-directory-authentication-resets-authme#b59951ab-623a-4442-a221-80c157387bbe"},"Microsoft have acknowledged there is a potential bug in Easy Auth support at present"),". When the app service is restarted, the stored tokens are removed, and ",(0,o.kt)("strong",{parentName:"p"},"authentication begins to fail"),". As you might well imagine, authentication similarly starts to fail when a new app service is introduced - as is the case during deployment."),(0,o.kt)("p",null,"This is really significant. You may well have \"zero downtime deployment\", but it doesn't amount to a hill of beans if the moment you've deployed your users find they're effectively logged out. ",(0,o.kt)("a",{parentName:"p",href:"https://social.msdn.microsoft.com/Forums/en-US/dde551b2-c86d-474b-b0a6-cc66163785a1/restarting-azure-app-service-on-linux-with-azure-active-directory-authentication-resets-authme#b59951ab-623a-4442-a221-80c157387bbe"},"The advice from Microsoft")," is to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/archive/blogs/jpsanders/azure-app-service-authentication-using-a-blob-storage-for-token-cache"},"Blob Storage for Token Cache"),":"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/cgillum"},"Chris Gillum")," said in a ",(0,o.kt)("a",{parentName:"p",href:"https://cgillum.tech/2016/03/07/app-service-token-store/"},"blog on the topic"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"you can provision an Azure Blob Storage container and configure your web app with a SaS URL (with read/write/list access) pointing to that blob container. This SaS URL can then be saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"WEBSITE_AUTH_TOKEN_CONTAINER_SASURL")," app setting. When this app setting is present, all tokens will be stored in and fetched from the specified blob container.")),(0,o.kt)("p",null,"To turn that into something visual, what's suggested is this:"),(0,o.kt)("p",null," ",(0,o.kt)("img",{alt:"diagram of Easy Auth with blog storage",src:n(36103).Z})),(0,o.kt)("h2",{id:"sas-sy-arm-templates"},"SaS-sy ARM Templates"),(0,o.kt)("p",null,"I have the good fortune to work with some very talented people. One of them, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jmccor99"},"John McCormick")," turned his hand to putting this proposed solution into ",(0,o.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," and ARM template-land. First of all, let's look at our ",(0,o.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),". We add the following, prior to our deployment job:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"- job: SASGen\n        displayName: Generate SAS Token\n\n        steps:\n          - task: AzurePowerShell@4\n            name: ObtainSasTokenTask\n            inputs:\n              azureSubscription: $(serviceConnection)\n              ScriptType: inlineScript\n              Inline: |\n                $startTime = Get-Date\n                $expiryTime = $startTime.AddDays(90)\n                $storageAcc = Get-AzStorageAccount -ResourceGroupName $(azureResourceGroup) -Name $(storageAccountName)\n                $ctx = $storageAcc.Context\n                $sas = New-AzStorageContainerSASToken -Context $ctx -Name \"tokens\" -Permission \"rwl\" -Protocol HttpsOnly -StartTime $startTime -ExpiryTime $expiryTime -FullUri\n                Write-Host \"##vso[task.setvariable variable=sasToken;issecret=true;isOutput=true]$sas\"\n              azurePowerShellVersion: 'LatestVersion'\n\n      - job: DeployAppARMTemplates\n        variables:\n          sasToken: $[dependencies.SASGen.outputs['ObtainSasTokenTask.sasToken'] ]\n        displayName: Deploy App ARM Templates\n        dependsOn:\n        - SASGen\n\n        steps:\n          - task: AzureResourceManagerTemplateDeployment@3\n            displayName: Deploy app-service ARM Template\n            inputs:\n              deploymentScope: Resource Group\n              azureResourceManagerConnection: $(serviceConnection)\n              subscriptionId: $(subscriptionId)\n              action: Create Or Update Resource Group\n              resourceGroupName: $(azureResourceGroup)\n              location: $(location)\n              templateLocation: Linked artifact\n              csmFile: 'infra/app-service/azuredeploy.json'\n              csmParametersFile: 'infra/azuredeploy.parameters.json'\n              overrideParameters: >-\n                -sasUrl $(sasToken)\n              deploymentMode: Incremental\n")),(0,o.kt)("p",null,"There's two notable things happening above:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"SASGen")," job, a PowerShell script runs that ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/az.storage/new-azstoragecontainersastoken?view=azps-5.5.0"},"generates a SaS token URL")," with read, write and list permissions that will last for 90 days. (Incidentally, there is a way to do this via ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/56127006/761388"},"ARM templates, and without PowerShell")," ","-"," but alas it didn't seem to work when we experimented with it.)"),(0,o.kt)("li",{parentName:"ol"},"The generated (secret) token URL (",(0,o.kt)("inlineCode",{parentName:"li"},"sasUrl"),") is passed as a parameter to our App Service ARM template. The ARM template sets an appsetting for the app service:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "apiVersion": "2020-09-01",\n    "name": "appsettings",\n    "type": "config",\n    "properties": {\n        "WEBSITE_AUTH_TOKEN_CONTAINER_SASURL": "[parameters(\'sasUrl\')]"\n    }\n},\n')),(0,o.kt)("p",null,"If you google ",(0,o.kt)("inlineCode",{parentName:"p"},"WEBSITE_AUTH_TOKEN_CONTAINER_SASURL")," you will not find a geat deal. Documentation is short. What you will find is ",(0,o.kt)("a",{parentName:"p",href:"http://jsandersblog.azurewebsites.net/2017/08/10/azure-app-service-authentication-using-a-blob-storage-for-token-cache/"},"Jeff Sanders excellent blog on the topic"),". It is, in terms of content, it has some commonality with this post; except in Jeff's example he's manually implementing the workaround in the Azure Portal."),(0,o.kt)("h2",{id:"whats-actually-happening"},"What's actually happening?"),(0,o.kt)("p",null,"With this in place, every time someone logs into your app a JSON token is written to the storage like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"token in storage account",src:n(62599).Z})),(0,o.kt)("p",null,"If you take the trouble to look inside you'll find something like this tucked away:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "encrypted": true,\n    "tokens": {\n        "aad": "herewith_a_very_very_long_encrypted_token"\n    },\n    "version": 1\n}\n')),(0,o.kt)("p",null,"With this in place, you can safely restart your app service and / or deploy a new one, safe in the knowledge that the tokens will live on in the storage account, and that consequently you will not be unauthenticating users."))}h.isMDXComponent=!0},36103:function(e,t,n){t.Z=n.p+"assets/images/easy-auth-zero-downtime-deployment-504b87e27d28a69b4c10d7c085fd9fbc.png"},62599:function(e,t,n){t.Z=n.p+"assets/images/token-9f104a2188a359fa7cedaf8371d2963d.png"}}]);
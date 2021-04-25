(window.webpackJsonp=window.webpackJsonp||[]).push([[965],{1079:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var o=r(4),a=r(10),n=(r(0),r(1219)),i={title:"ARM templates, security, role assignments and magic GUIDs",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},s={permalink:"/2021/02/08/arm-templates-security-role-assignments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-02-08-arm-templates-security-role-assignments.md",source:"@site/blog/2021-02-08-arm-templates-security-role-assignments.md",title:"ARM templates, security, role assignments and magic GUIDs",description:"If you're deploying to Azure, there's a good chance you're using ARM templates to do so. Once you've got past \"Hello World\", you'll probably find yourself in a situation when you're deploying multiple types of resource to make your solution. For instance, you may be deploying an App Service alongside Key Vault and Storage.",date:"2021-02-08T00:00:00.000Z",formattedDate:"February 8, 2021",tags:[],readingTime:5.915,truncated:!1,prevItem:{title:"Azure App Service, Health checks and zero downtime deployments",permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"},nextItem:{title:"ASP.NET, Serilog and Application Insights",permalink:"/2021/01/30/aspnet-serilog-and-application-insights"}},c=[{value:"Role (up for your) assignments",id:"role-up-for-your-assignments",children:[]},{value:"Creating a role assignment",id:"creating-a-role-assignment",children:[]}],l={toc:c};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"If you're deploying to Azure, there's a good chance you're using ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview"},"ARM templates")," to do so. Once you've got past \"Hello World\", you'll probably find yourself in a situation when you're deploying multiple types of resource to make your solution. For instance, you may be deploying an ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/quickstart-arm-template?pivots=platform-linux#review-the-template"},"App Service")," alongside ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.keyvault/vaults"},"Key Vault")," and ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts"},"Storage"),"."),Object(n.b)("p",null,"One of the hardest things when it comes to deploying software and having it work, is permissions. Without adequate permissions configured, the most beautiful code can do ",Object(n.b)("em",{parentName:"p"},"nothing"),". Incidentally, this is a good thing. We're deploying to the web; many people are there, not all good. As a different kind of web-head once said:"),Object(n.b)("p",null," ",Object(n.b)("img",{alt:"With great power, comes great responsibility",src:r(1284).default})),Object(n.b)("p",null,"Azure has great power and ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices#use-role-based-access-control"},"suggests you use it wisely"),"."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Access management for cloud resources is critical for any organization that uses the cloud. ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/overview"},"Azure role-based access control (Azure RBAC)")," helps you manage who has access to Azure resources, what they can do with those resources, and what areas they have access to."),Object(n.b)("p",{parentName:"blockquote"},"Designating groups or individual roles responsible for specific functions in Azure helps avoid confusion that can lead to human and automation errors that create security risks. Restricting access based on the ",Object(n.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Need_to_know"},"need to know")," and ",Object(n.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"},"least privilege")," security principles is imperative for organizations that want to enforce security policies for data access.")),Object(n.b)("p",null,"This is good advice. With that in mind, how can we ensure that the different resources we're deploying to Azure can talk to one another?"),Object(n.b)("h2",{id:"role-up-for-your-assignments"},"Role (up for your) assignments"),Object(n.b)("p",null,"The answer is roles. There's a number of roles that exist in Azure that can be assigned to users, groups, service principals and managed identities. In our own case we're using managed identity for our resources. What we can do is use ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/overview#how-azure-rbac-works"},'"role assignments"')," to give our managed identity access to given resources. ",Object(n.b)("a",{parentName:"p",href:"https://twitter.com/ArLucaID"},"Arturo Lucatero")," gives a great short explanation of this:"),Object(n.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Dzhm-garKBM",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:""}),Object(n.b)("p",null,'Whilst this explanation is delightfully simple, the actual implementation when it comes to ARM templates is a little more involved. Because now it\'s time to talk "magic" GUIDs. Consider the following truncated ARM template, which gives our managed identity (and hence our App Service which uses this identity) access to Key Vault and Storage:'),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",\n    // ...\n    "variables": {\n        // ...\n        "managedIdentity": "[concat(\'mi-\', parameters(\'applicationName\'), \'-\', parameters(\'environment\'), \'-\', \'001\')]",\n        "appInsightsName": "[concat(\'appi-\', parameters(\'applicationName\'), \'-\', parameters(\'environment\'), \'-\', \'001\')]",\n        "keyVaultName": "[concat(\'kv-\', parameters(\'applicationName\'), \'-\', parameters(\'environment\'), \'-\', \'001\')]",\n        "storageAccountName": "[concat(\'st\', parameters(\'applicationName\'), parameters(\'environment\'), \'001\')]",\n        "storageBlobDataContributor": "[subscriptionResourceId(\'Microsoft.Authorization/roleDefinitions\', \'ba92f5b4-2d11-453d-a403-e96b0029c9fe\')]",\n        "keyVaultSecretsOfficer": "[subscriptionResourceId(\'Microsoft.Authorization/roleDefinitions\', \'b86a8fe4-44ce-4948-aee5-eccb2c155cd7\')]",\n        "keyVaultCryptoOfficer": "[subscriptionResourceId(\'Microsoft.Authorization/roleDefinitions\', \'14b46e9e-c2b7-41b4-b07b-48a6ebf60603\')]",\n        "uniqueRoleGuidKeyVaultSecretsOfficer": "[guid(resourceId(\'Microsoft.KeyVault/vaults\',  variables(\'keyVaultName\')), variables(\'keyVaultSecretsOfficer\'), resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\')))]",\n        "uniqueRoleGuidKeyVaultCryptoOfficer": "[guid(resourceId(\'Microsoft.KeyVault/vaults\',  variables(\'keyVaultName\')), variables(\'keyVaultCryptoOfficer\'), resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\')))]",\n        "uniqueRoleGuidStorageAccount": "[guid(resourceId(\'Microsoft.Storage/storageAccounts\',  variables(\'storageAccountName\')), variables(\'storageBlobDataContributor\'), resourceId(\'Microsoft.Storage/storageAccounts\', variables(\'storageAccountName\')))]"\n    },\n    "resources": [\n        {\n            "type": "Microsoft.ManagedIdentity/userAssignedIdentities",\n            "name": "[variables(\'managedIdentity\')]",\n            "apiVersion": "2018-11-30",\n            "location": "[parameters(\'location\')]"\n        },\n        // ...\n        {\n            "type": "Microsoft.Storage/storageAccounts/providers/roleAssignments",\n            "apiVersion": "2020-04-01-preview",\n            "name": "[concat(variables(\'storageAccountName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidStorageAccount\'))]",\n            "dependsOn": [\n                "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n            ],\n            "properties": {\n                "roleDefinitionId": "[variables(\'storageBlobDataContributor\')]",\n                "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n                "scope": "[resourceId(\'Microsoft.Storage/storageAccounts\', variables(\'storageAccountName\'))]",\n                "principalType": "ServicePrincipal"\n            }\n        },\n        {\n            "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",\n            "apiVersion": "2018-01-01-preview",\n            "name": "[concat(variables(\'keyVaultName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidKeyVaultSecretsOfficer\'))]",\n            "dependsOn": [\n                "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n            ],\n            "properties": {\n                "roleDefinitionId": "[variables(\'keyVaultSecretsOfficer\')]",\n                "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n                "scope": "[resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\'))]",\n                "principalType": "ServicePrincipal"\n            }\n        },\n        {\n            "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",\n            "apiVersion": "2018-01-01-preview",\n            "name": "[concat(variables(\'keyVaultName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidKeyVaultCryptoOfficer\'))]",\n            "dependsOn": [\n                "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n            ],\n            "properties": {\n                "roleDefinitionId": "[variables(\'keyVaultCryptoOfficer\')]",\n                "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n                "scope": "[resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\'))]",\n                "principalType": "ServicePrincipal"\n            }\n        }\n    ]\n}\n')),Object(n.b)("p",null,"Let's take a look at these three variables:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-json"},"\"storageBlobDataContributor\": \"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')]\",\n        \"keyVaultSecretsOfficer\": \"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'b86a8fe4-44ce-4948-aee5-eccb2c155cd7')]\",\n        \"keyVaultCryptoOfficer\": \"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '14b46e9e-c2b7-41b4-b07b-48a6ebf60603')]\",\n")),Object(n.b)("p",null,"The three variables above contain the subscription resource ids for the roles ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor"},"Storage Blob Data Contributor"),", ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-secrets-officer-preview"},"Key Vault Secrets Officer")," and ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-crypto-officer-preview"},"Key Vault Crypto Officer"),'. The first question on your mind is likely: "what is ',Object(n.b)("inlineCode",{parentName:"p"},"ba92f5b4-2d11-453d-a403-e96b0029c9fe"),' and where does it come from?" Great question! Well, each of these GUIDs represents a built-in role in Azure RBAC. The ',Object(n.b)("inlineCode",{parentName:"p"},"ba92f5b4-2d11-453d-a403-e96b0029c9fe")," represents the Storage Blob Data Contributor role."),Object(n.b)("p",null,"How can I look these up? Well, there's two ways; ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles"},"there's an article which documents them here")," or you could crack open the ",Object(n.b)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/features/cloud-shell/"},"Cloud Shell")," and look up a role by GUID like so:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-ps"},'Get-AzRoleDefinition | ? {$_.id -eq "ba92f5b4-2d11-453d-a403-e96b0029c9fe" }\n\nName             : Storage Blob Data Contributor\nId               : ba92f5b4-2d11-453d-a403-e96b0029c9fe\nIsCustom         : False\nDescription      : Allows for read, write and delete access to Azure Storage blob containers and data\nActions          : {Microsoft.Storage/storageAccounts/blobServices/containers/delete, Microsoft.Storage/storageAccounts/blobServices/containers/read,\n                   Microsoft.Storage/storageAccounts/blobServices/containers/write, Microsoft.Storage/storageAccounts/blobServices/generateUserDelegationKey/action}\nNotActions       : {}\nDataActions      : {Microsoft.Storage/storageAccounts/blobServices/containers/blobs/delete, Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read,\n                   Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write, Microsoft.Storage/storageAccounts/blobServices/containers/blobs/move/action\u2026}\nNotDataActions   : {}\nAssignableScopes : {/}\n')),Object(n.b)("p",null,"Or by name like so:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-ps"},"Get-AzRoleDefinition | ? {$_.name -like \"*Crypto Officer*\" }\n\nName             : Key Vault Crypto Officer\nId               : 14b46e9e-c2b7-41b4-b07b-48a6ebf60603\nIsCustom         : False\nDescription      : Perform any action on the keys of a key vault, except manage permissions. Only works for key vaults that use the 'Azure role-based access control' permission model.\nActions          : {Microsoft.Authorization/*/read, Microsoft.Insights/alertRules/*, Microsoft.Resources/deployments/*, Microsoft.Resources/subscriptions/resourceGroups/read\u2026}\nNotActions       : {}\nDataActions      : {Microsoft.KeyVault/vaults/keys/*}\nNotDataActions   : {}\nAssignableScopes : {/}\n")),Object(n.b)("p",null,"As you can see, the ",Object(n.b)("inlineCode",{parentName:"p"},"Actions")," section of the output above (and in even more detail on the ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles"},"linked article"),") provides information about what the different roles can do. So if you're looking to enable one Azure resource to talk to another, you should be able to refer to these to identify a role that you might want to use."),Object(n.b)("h2",{id:"creating-a-role-assignment"},"Creating a role assignment"),Object(n.b)("p",null,"So now we understand how you identify the roles in question, let's take the final leap and look at assigning those roles to our managed identity. For each role assignment, you'll need a ",Object(n.b)("inlineCode",{parentName:"p"},"roleAssignments")," resource defined that looks like this:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-json"},'{\n            "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",\n            "apiVersion": "2018-01-01-preview",\n            "name": "[concat(variables(\'keyVaultName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidKeyVaultCryptoOfficer\'))]",\n            "dependsOn": [\n                "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n            ],\n            "properties": {\n                "roleDefinitionId": "[variables(\'keyVaultCryptoOfficer\')]",\n                "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n                "scope": "[resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\'))]",\n                "principalType": "ServicePrincipal"\n            }\n        }\n')),Object(n.b)("p",null,"Let's go through the above, significant property by significant property (it's also worth checking the official reference ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.authorization/roleassignments"},"here"),"):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"type")," ","-"," the type of role assignment we want to create, for a key vault it's ",Object(n.b)("inlineCode",{parentName:"li"},'"Microsoft.KeyVault/vaults/providers/roleAssignments"'),", for storage it's ",Object(n.b)("inlineCode",{parentName:"li"},'"Microsoft.Storage/storageAccounts/providers/roleAssignments"'),". The pattern is that it's the resource type, followed by ",Object(n.b)("inlineCode",{parentName:"li"},'"/providers/roleAssignments"'),". "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"dependsOn")," ","-"," before we can create a role assignment, we need the service principal we desire to permission (in our case a managed identity) to exist"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"properties.roleDefinitionId")," ","-"," the role that we're assigning, provided as an id. So for this example it's the ",Object(n.b)("inlineCode",{parentName:"li"},"keyVaultCryptoOfficer")," variable, which was earlier defined as ",Object(n.b)("inlineCode",{parentName:"li"},"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')]"),". (Note the use of the GUID)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"properties.principalId")," ","-"," the id of the principal we're adding permissions for. In our case this is a managed identity (a type of service principal)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"properties.scope")," ","-"," we're modifying another resource; our key vault isn't defined in this ARM template and we want to specify the resource we're granting permissions to."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"properties.principalType")," ","-"," the type of principal that we're creating an assignment for; in our this is ",Object(n.b)("inlineCode",{parentName:"li"},'"ServicePrincipal"')," ","-"," our managed identity.")),Object(n.b)("p",null,"There is an alternate approach that you can use where the ",Object(n.b)("inlineCode",{parentName:"p"},"type")," is ",Object(n.b)("inlineCode",{parentName:"p"},'"Microsoft.Authorization/roleAssignments"'),". Whilst this also works, it displayed errors in the ",Object(n.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools"},"Azure tooling for VS Code"),". As such, we've opted not to use that approach in our ARM templates."),Object(n.b)("p",null,"Many thanks to the awesome ",Object(n.b)("a",{parentName:"p",href:"https://github.com/jmccor99"},"John McCormick")," who wrangled permissions with me until we bent Azure RBAC to our will."))}u.isMDXComponent=!0},1219:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||n;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1284:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/with-great-power-comes-great-responsibility-be2ae78bc5a7371b606fc4ea7d0f83fa.jpg"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1098],{1189:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),b=r,d=c["".concat(o,".").concat(b)]||c[b]||m[b]||i;return n?a.a.createElement(d,p(p({ref:t},s),{},{components:n})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1255:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/bicep-meet-azure-pipelines-48a0287fc00e16a2e6f7f626c083fe87.png"},1256:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/azure-pipeline-with-bicep-f17708b8680c26761c2835035f0a0631.png"},276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(4),a=n(10),i=(n(0),n(1189)),o={title:"Bicep meet Azure Pipelines 2",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Bicep","ARM templates","Azure Pipelines","Azure CLI"],image:"blog/2021-03-23-bicep-meet-azure-pipelines-2/bicep-meet-azure-pipelines.png",hide_table_of_contents:!1},p={permalink:"/2021/03/23/bicep-meet-azure-pipelines-2",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-03-23-bicep-meet-azure-pipelines-2.md",source:"@site/blog/2021-03-23-bicep-meet-azure-pipelines-2.md",description:"Last time I wrote about how to use the Azure CLI to run Bicep within the context of an Azure Pipeline. The solution was relatively straightforward, and involved using az deployment group create in a task. There's an easier way.",date:"2021-03-23T00:00:00.000Z",formattedDate:"March 23, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"ARM templates",permalink:"/tags/arm-templates"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"},{label:"Azure CLI",permalink:"/tags/azure-cli"}],title:"Bicep meet Azure Pipelines 2",readingTime:1.665,truncated:!1,prevItem:{title:"Hello World Bicep",permalink:"/2021/04/10/hello-world-bicep"},nextItem:{title:"Bicep meet Azure Pipelines",permalink:"/2021/03/20/bicep-meet-azure-pipelines"}},l=[{value:"The easier way",id:"the-easier-way",children:[]}],s={toc:l};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/2021/03/20/bicep-meet-azure-pipelines"},"Last time")," I wrote about how to use the Azure CLI to run Bicep within the context of an Azure Pipeline. The solution was relatively straightforward, and involved using ",Object(i.b)("inlineCode",{parentName:"p"},"az deployment group create")," in a task. There's an easier way."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Bicep meet Azure Pipelines",src:n(1255).default})),Object(i.b)("h2",{id:"the-easier-way"},"The easier way"),Object(i.b)("p",null,"The target reader of the previous post was someone who was already using ",Object(i.b)("inlineCode",{parentName:"p"},"AzureResourceManagerTemplateDeployment@3")," in an Azure Pipeline to deploy an ARM template. Rather than replacing your existing ",Object(i.b)("inlineCode",{parentName:"p"},"AzureResourceManagerTemplateDeployment@3")," tasks, all you need do is insert a prior ",Object(i.b)("inlineCode",{parentName:"p"},"bash")," step that compiles the Bicep to ARM, which your existing template can then process. It looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},'        - bash: az bicep build --files infra/app-service/azuredeploy.bicep\n          displayName: "Compile Bicep to ARM"\n')),Object(i.b)("p",null,"This will take your Bicep template of ",Object(i.b)("inlineCode",{parentName:"p"},"azuredeploy.bicep"),", transpile it into an ARM template named ",Object(i.b)("inlineCode",{parentName:"p"},"azuredeploy.json")," which a subsequent ",Object(i.b)("inlineCode",{parentName:"p"},"AzureResourceManagerTemplateDeployment@3")," task can process. Since this is just exercising the Azure CLI, using ",Object(i.b)("inlineCode",{parentName:"p"},"bash")," is not required; powershell etc would also be fine; it's just required that the Azure CLI is available in a pipeline."),Object(i.b)("p",null,"In fact this simple task could even be a one-liner if you didn't fancy using the ",Object(i.b)("inlineCode",{parentName:"p"},"displayName"),". (Though I say keep it; optimising for readability is generally a good shout.) A full pipeline could look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"        - bash: az bicep build --files infra/app-service/azuredeploy.bicep\n          displayName: \"Compile Bicep to ARM\"\n\n        - task: AzureResourceManagerTemplateDeployment@3\n          displayName: \"Deploy Hello Azure ARM\"\n          inputs:\n            azureResourceManagerConnection: '$(azureSubscription)'\n            action: Create Or Update Resource Group\n            resourceGroupName: '$(resourceGroupName)'\n            location: 'North Europe'\n            templateLocation: Linked artifact\n            csmFile: 'infra/app-service/azuredeploy.json' # created by bash script\n            csmParametersFile: 'infra/app-service/azuredeploy.parameters.json'\n            deploymentMode: Incremental\n            deploymentOutputs: resourceGroupDeploymentOutputs\n            overrideParameters: -applicationName $(Build.Repository.Name)\n\n        - pwsh: |\n            $outputs = ConvertFrom-Json '$(resourceGroupDeploymentOutputs)'\n            foreach ($output in $outputs.PSObject.Properties) {\n                Write-Host \"##vso[task.setvariable variable=RGDO_$($output.Name)]$($output.Value.value)\"\n            }\n          displayName: \"Turn ARM outputs into variables\"\n")),Object(i.b)("p",null,"And when it's run, it may result in something along these lines:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Bicep in an Azure Pipeline",src:n(1256).default})),Object(i.b)("p",null,"So if you want to get using Bicep right now with minimal effort, this an on ramp that could work for you! Props to ",Object(i.b)("a",{parentName:"p",href:"https://twitter.com/foldr"},"Jamie McCrindle")," for suggesting this."))}u.isMDXComponent=!0}}]);
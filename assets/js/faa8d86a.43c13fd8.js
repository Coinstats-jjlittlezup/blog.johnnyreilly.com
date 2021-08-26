"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[40101],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=i,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59425:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return h}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Bicep meet Azure Pipelines 2",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Bicep","ARM templates","Azure Pipelines","Azure CLI"],image:"blog/2021-03-23-bicep-meet-azure-pipelines-2/bicep-meet-azure-pipelines.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/2021/03/23/bicep-meet-azure-pipelines-2",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-03-23-bicep-meet-azure-pipelines-2.md",source:"@site/blog/2021-03-23-bicep-meet-azure-pipelines-2.md",title:"Bicep meet Azure Pipelines 2",description:"Last time I wrote about how to use the Azure CLI to run Bicep within the context of an Azure Pipeline. The solution was relatively straightforward, and involved using az deployment group create in a task. There's an easier way.",date:"2021-03-23T00:00:00.000Z",formattedDate:"March 23, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"ARM templates",permalink:"/tags/arm-templates"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"},{label:"Azure CLI",permalink:"/tags/azure-cli"}],readingTime:1.665,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"Hello World Bicep",permalink:"/2021/04/10/hello-world-bicep"},nextItem:{title:"Bicep meet Azure Pipelines",permalink:"/2021/03/20/bicep-meet-azure-pipelines"}},u={authorsImageUrls:[void 0]},c=[{value:"The easier way",id:"the-easier-way",children:[]}],m={toc:c};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/2021/03/20/bicep-meet-azure-pipelines"},"Last time")," I wrote about how to use the Azure CLI to run Bicep within the context of an Azure Pipeline. The solution was relatively straightforward, and involved using ",(0,a.kt)("inlineCode",{parentName:"p"},"az deployment group create")," in a task. There's an easier way."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bicep meet Azure Pipelines",src:n(10730).Z})),(0,a.kt)("h2",{id:"the-easier-way"},"The easier way"),(0,a.kt)("p",null,"The target reader of the previous post was someone who was already using ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureResourceManagerTemplateDeployment@3")," in an Azure Pipeline to deploy an ARM template. Rather than replacing your existing ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureResourceManagerTemplateDeployment@3")," tasks, all you need do is insert a prior ",(0,a.kt)("inlineCode",{parentName:"p"},"bash")," step that compiles the Bicep to ARM, which your existing template can then process. It looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'        - bash: az bicep build --file infra/app-service/azuredeploy.bicep\n          displayName: "Compile Bicep to ARM"\n')),(0,a.kt)("p",null,"This will take your Bicep template of ",(0,a.kt)("inlineCode",{parentName:"p"},"azuredeploy.bicep"),", transpile it into an ARM template named ",(0,a.kt)("inlineCode",{parentName:"p"},"azuredeploy.json")," which a subsequent ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureResourceManagerTemplateDeployment@3")," task can process. Since this is just exercising the Azure CLI, using ",(0,a.kt)("inlineCode",{parentName:"p"},"bash")," is not required; powershell etc would also be fine; it's just required that the Azure CLI is available in a pipeline."),(0,a.kt)("p",null,"In fact this simple task could even be a one-liner if you didn't fancy using the ",(0,a.kt)("inlineCode",{parentName:"p"},"displayName"),". (Though I say keep it; optimising for readability is generally a good shout.) A full pipeline could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"        - bash: az bicep build --file infra/app-service/azuredeploy.bicep\n          displayName: \"Compile Bicep to ARM\"\n\n        - task: AzureResourceManagerTemplateDeployment@3\n          displayName: \"Deploy Hello Azure ARM\"\n          inputs:\n            azureResourceManagerConnection: '$(azureSubscription)'\n            action: Create Or Update Resource Group\n            resourceGroupName: '$(resourceGroupName)'\n            location: 'North Europe'\n            templateLocation: Linked artifact\n            csmFile: 'infra/app-service/azuredeploy.json' # created by bash script\n            csmParametersFile: 'infra/app-service/azuredeploy.parameters.json'\n            deploymentMode: Incremental\n            deploymentOutputs: resourceGroupDeploymentOutputs\n            overrideParameters: -applicationName $(Build.Repository.Name)\n\n        - pwsh: |\n            $outputs = ConvertFrom-Json '$(resourceGroupDeploymentOutputs)'\n            foreach ($output in $outputs.PSObject.Properties) {\n                Write-Host \"##vso[task.setvariable variable=RGDO_$($output.Name)]$($output.Value.value)\"\n            }\n          displayName: \"Turn ARM outputs into variables\"\n")),(0,a.kt)("p",null,"And when it's run, it may result in something along these lines:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bicep in an Azure Pipeline",src:n(65043).Z})),(0,a.kt)("p",null,"So if you want to get using Bicep right now with minimal effort, this an on ramp that could work for you! Props to ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/foldr"},"Jamie McCrindle")," for suggesting this."))}h.isMDXComponent=!0},65043:function(e,t,n){t.Z=n.p+"assets/images/azure-pipeline-with-bicep-30469eb1b11c83b0402a81e7ccbee5e2.png"},10730:function(e,t,n){t.Z=n.p+"assets/images/bicep-meet-azure-pipelines-cfcdd6693ae17634089935e5cb24c972.png"}}]);
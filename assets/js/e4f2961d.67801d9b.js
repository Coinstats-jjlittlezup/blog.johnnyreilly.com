"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[45153],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(b,p(p({ref:t},u),{},{components:n})):a.createElement(b,p({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<r;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35739:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),p=["components"],o={title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Azure Static Web App","Bicep","Azure DevOps","Azure Pipelines"],image:"blog/2021-08-15-bicep-azure-static-web-apps-azure-devops/title-image.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/08/15/bicep-azure-static-web-apps-azure-devops",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-08-15-bicep-azure-static-web-apps-azure-devops.md",source:"@site/blog/2021-08-15-bicep-azure-static-web-apps-azure-devops.md",title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",description:'This post demonstrates how to deploy Azure Static Web Apps using Bicep and Azure DevOps. It includes a workaround for the "Provider is invalid.  Cannot change the Provider. Please detach your static site first if you wish to use to another deployment provider." issue.',date:"2021-08-15T00:00:00.000Z",formattedDate:"August 15, 2021",tags:[{label:"Azure Static Web App",permalink:"/tags/azure-static-web-app"},{label:"Bicep",permalink:"/tags/bicep"},{label:"Azure DevOps",permalink:"/tags/azure-dev-ops"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"}],readingTime:3.38,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"Bicep: syntax highlighting with PrismJS (and Docusaurus)",permalink:"/2021/08/19/bicep-syntax-highlighting-with-prismjs"},nextItem:{title:"TypeScript 4.4 and more readable code",permalink:"/2021/08/14/typescript-4-4-more-readable-code"}},u={authorsImageUrls:[void 0]},c=[{value:"Bicep template",id:"bicep-template",children:[]},{value:"Static Web App",id:"static-web-app",children:[]},{value:"Azure Pipeline",id:"azure-pipeline",children:[]}],d={toc:c};function m(e){var t=e.components,o=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This post demonstrates how to deploy ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/overview"},"Azure Static Web Apps")," using Bicep and Azure DevOps. It includes a workaround for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps/issues/516"},'"Provider is invalid.  Cannot change the Provider. Please detach your static site first if you wish to use to another deployment provider." issue'),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"title image reading &quot;Publish Azure Static Web Apps with Bicep and Azure DevOps&quot; and some Azure logos",src:n(17304).Z})),(0,r.kt)("h2",{id:"bicep-template"},"Bicep template"),(0,r.kt)("p",null,"The first thing we're going to do is create a folder where our Bicep file for deploying our Azure Static Web App will live:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir infra/static-web-app -p\n")),(0,r.kt)("p",null,"Then we'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.bicep")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bicep"},"param repositoryUrl string\nparam repositoryBranch string\n\nparam location string = 'westeurope'\nparam skuName string = 'Free'\nparam skuTier string = 'Free'\n\nparam appName string\n\nresource staticWebApp 'Microsoft.Web/staticSites@2020-12-01' = {\n  name: appName\n  location: location\n  tags: tagsObj\n  sku: {\n    name: skuName\n    tier: skuTier\n  }\n  properties: {\n    // The provider, repositoryUrl and branch fields are required for successive deployments to succeed\n    // for more details see: https://github.com/Azure/static-web-apps/issues/516\n    provider: 'DevOps'\n    repositoryUrl: repositoryUrl\n    branch: repositoryBranch\n    buildProperties: {\n      skipGithubActionWorkflowGeneration: true\n    }\n  }\n}\n\noutput deployment_token string = listSecrets(staticWebApp.id, staticWebApp.apiVersion).properties.apiKey \n")),(0,r.kt)("p",null,"There's some things to draw attention to in the code above:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"provider"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"repositoryUrl")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"branch")," fields are required for successive deployments to succeed. In our case we're deploying via Azure DevOps and so our provider is ",(0,r.kt)("inlineCode",{parentName:"li"},"'DevOps'"),". For more details, ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps/issues/516"},"look at this issue"),". "),(0,r.kt)("li",{parentName:"ol"},"We're creating a ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment_token")," which we'll need in order that we can deploy into the Azure Static Web App resource.")),(0,r.kt)("h2",{id:"static-web-app"},"Static Web App"),(0,r.kt)("p",null,"In order that we can test out Azure Static Web Apps, what we need is a static web app.  You could use pretty much anything here; we're going to use Docusaurus.  We'll execute this single command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init static-web-app classic\n")),(0,r.kt)("p",null,"Which will scaffold a Docusaurus site in a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"static-web-app"),". We don't need to change it any further; let's just see if we can deploy it."),(0,r.kt)("h2",{id:"azure-pipeline"},"Azure Pipeline"),(0,r.kt)("p",null,"We're going to add an ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," file which Azure DevOps can use to power a pipeline:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"stages:\n- stage: build\n  displayName: build\n  pool:\n    vmImage: 'ubuntu-latest'\n  jobs:\n  - job: BuildAndDeploy\n    displayName: 'Build and Deploy'\n    steps:\n    - checkout: self\n      submodules: true\n        \n    - bash: az bicep build --file infra/static-web-app/main.bicep\n      displayName: \"Compile Bicep to ARM\"\n\n    - task: AzureResourceManagerTemplateDeployment@3\n      name: DeployStaticWebAppInfra\n      displayName: Deploy Static Web App infra\n      inputs:\n        deploymentScope: Resource Group\n        azureResourceManagerConnection: ${{ parameters.serviceConnection }}\n        subscriptionId: $(subscriptionId)\n        action: Create Or Update Resource Group\n        resourceGroupName: $(azureResourceGroup)\n        location: $(location)\n        templateLocation: Linked artifact\n        csmFile: 'infra/static-web-app/main.json' # created by bash script\n        overrideParameters: >-\n          -repositoryUrl $(repo)\n          -repositoryBranch $(Build.SourceBranchName)\n          -appName $(staticWebAppName)\n        deploymentMode: Incremental\n        deploymentOutputs: deploymentOutputs\n\n    - task: PowerShell@2\n      name: 'SetDeploymentOutputVariables'\n      displayName: \"Set Deployment Output Variables\"\n      inputs:\n        targetType: inline\n        script: |\n          $armOutputObj = '$(deploymentOutputs)' | ConvertFrom-Json\n          $armOutputObj.PSObject.Properties | ForEach-Object {\n            $keyname = $_.Name\n            $value = $_.Value.value\n\n            # Creates a standard pipeline variable\n            Write-Output \"##vso[task.setvariable variable=$keyName;]$value\"\n\n            # Creates an output variable\n            Write-Output \"##vso[task.setvariable variable=$keyName;issecret=true;isOutput=true]$value\"\n\n            # Display keys in pipeline\n            Write-Output \"output variable: $keyName\"\n          }\n        pwsh: true\n\n    - task: AzureStaticWebApp@0\n      name: DeployStaticWebApp\n      displayName: Deploy Static Web App\n      inputs:\n        app_location: 'static-web-app'\n        # api_location: 'api'\n        output_location: 'build'\n        azure_static_web_apps_api_token: $(deployment_token) # captured from deploymentOutputs\n")),(0,r.kt)("p",null,"When the pipeline is run, it does the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Compiles our Bicep into an ARM template"),(0,r.kt)("li",{parentName:"ol"},"Deploys the compiled ARM template to Azure"),(0,r.kt)("li",{parentName:"ol"},"Captures the deployment outputs (essentially the ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment_token"),") and converts them into variables to use in the pipeline"),(0,r.kt)("li",{parentName:"ol"},"Deploys our Static Web App using the ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment_token"))),(0,r.kt)("p",null,"A successful pipeline looks something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of successfully running Azure Pipeline",src:n(22299).Z})),(0,r.kt)("p",null,"What you might notice is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"AzureStaticWebApp")," is itself installing and building our application. This is handled by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/Oryx"},"Microsoft Oryx"),". The upshot of this is that we don't need to manually run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm build")," ourselves; the ",(0,r.kt)("inlineCode",{parentName:"p"},"AzureStaticWebApp")," task will take care of it for us."),(0,r.kt)("p",null,"Finally, let's see if we've deployed something successfully..."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of deployed Azure Static Web App",src:n(95789).Z})),(0,r.kt)("p",null,"We have! It's worth noting that you'll likely want to give your Azure Static Web App a lovelier URL, and perhaps even put it behind Azure Front Door as well."))}m.isMDXComponent=!0},95789:function(e,t,n){t.Z=n.p+"assets/images/deployed-azure-static-web-app-screenshot-1ebda27d7f0537e14647e234282d6930.png"},22299:function(e,t,n){t.Z=n.p+"assets/images/successful-azure-pipelines-run-screenshot-bf1d896067834091a095faf736f00cb7.png"},17304:function(e,t,n){t.Z=n.p+"assets/images/title-image-d24b3ab999e590da3ebe6fda7dc7c31c.png"}}]);
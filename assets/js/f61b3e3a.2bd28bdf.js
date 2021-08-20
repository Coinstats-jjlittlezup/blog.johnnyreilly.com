"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[27682],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43096:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],r={title:"Azure App Service, Health checks and zero downtime deployments",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Azure App Service","Health checks","deployment slots","zero downtime deployments"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-02-11-azure-app-service-health-checks-and-zero-downtime-deployments.md",source:"@site/blog/2021-02-11-azure-app-service-health-checks-and-zero-downtime-deployments.md",title:"Azure App Service, Health checks and zero downtime deployments",description:"I've been working recently on zero downtime deployments using Azure App Service. They're facilitated by a combination of Health checks and deployment slots. This post will talk about why this is important and how it works.",date:"2021-02-11T00:00:00.000Z",formattedDate:"February 11, 2021",tags:[{label:"Azure App Service",permalink:"/tags/azure-app-service"},{label:"Health checks",permalink:"/tags/health-checks"},{label:"deployment slots",permalink:"/tags/deployment-slots"},{label:"zero downtime deployments",permalink:"/tags/zero-downtime-deployments"}],readingTime:7.485,truncated:!1,prevItem:{title:"Making Easy Auth tokens survive releases on Linux Azure App Service",permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service"},nextItem:{title:"Azure RBAC: role assignments and ARM templates",permalink:"/2021/02/08/arm-templates-security-role-assignments"}},u=[{value:"Why zero downtime deployments?",id:"why-zero-downtime-deployments",children:[]},{value:"Manual zero downtime releases with App Services",id:"manual-zero-downtime-releases-with-app-services",children:[]},{value:"Rollbacks for bonus points",id:"rollbacks-for-bonus-points",children:[]},{value:"Automated zero downtime releases with Health checks",id:"automated-zero-downtime-releases-with-health-checks",children:[]}],c={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I've been working recently on zero downtime deployments using Azure App Service. They're facilitated by a combination of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check"},"Health checks")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots"},"deployment slots"),". This post will talk about why this is important and how it works."),(0,i.kt)("h2",{id:"why-zero-downtime-deployments"},"Why zero downtime deployments?"),(0,i.kt)("p",null,"Historically (and for many applications, currently) deployment results in downtime. A period of time during the release where an application is not available to users whilst the new version is deployed. There are a number of downsides to releases with downtime:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your users cannot use your application. This will frustrate them and make them sad."),(0,i.kt)("li",{parentName:"ol"},"Because you're a kind person and you want your users to be happy, you'll optimise to make their lives better. You'll release when the fewest users are accessing your application. It will likely mean you'll end up working late, early or at weekends."),(0,i.kt)("li",{parentName:"ol"},"Again because you want to reduce impact on users, you'll release less often. This means that every release will bring with it a greater collection of changes. This is turn will often result in a large degree of focus on manually testing each release, to reduce the likelihood of bugs ending up in users hands. This is a noble aim, but it drags the teams focus away from shipping.")),(0,i.kt)("p",null,"Put simply: downtime in releases impacts customer happiness and leads to reduced pace for teams. It's a vicious circle."),(0,i.kt)("p",null,"But if we turn it around, what does it look like if releases have ",(0,i.kt)("em",{parentName:"p"},"no")," downtime at all?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your users can always use your application. This will please them."),(0,i.kt)("li",{parentName:"ol"},"Your team is now safe to release at any time, day or night. They will likely release more often as a consequence."),(0,i.kt)("li",{parentName:"ol"},"If your team has sufficient automated testing in place, they're now in a position where they can move to ",(0,i.kt)("a",{parentName:"li",href:"https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"},"Continuous Deployment"),"."),(0,i.kt)("li",{parentName:"ol"},'Releases become boring. This is good. They "just work\u2122\ufe0f" and so the team can focus instead on building the cool features that are going to make users lives even better.')),(0,i.kt)("h2",{id:"manual-zero-downtime-releases-with-app-services"},"Manual zero downtime releases with App Services"),(0,i.kt)("p",null,"App Services have the ability to scale out. To ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/blog/scaling-up-and-scaling-out-in-windows-azure-web-sites/"},"quote the docs"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A scale out operation is the equivalent of creating multiple copies of your web site and adding a load balancer to distribute the demand between them. When you scale out ... there is no need to configure load balancing separately since this is already provided by the platform.")),(0,i.kt)("p",null,"As you can see, scaling out works by having multiple instances of your app. Deployment slots are exactly this, but with an extra twist. If you add a deployment slot to your App Service, then you ",(0,i.kt)("strong",{parentName:"p"},"no longer deploy to production"),". Instead you deploy to your staging slot. Your staging slot is accessible in the same way your production slot is accessible. So whilst your users may go to ",(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app.io"},"https://my-glorious-app.io"),", your staging slot may live at ",(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app-stage.azurewebsites.net"},"https://my-glorious-app-stage.azurewebsites.net")," instead. Because this is accessible, this is testable. You are in a position to test the deployed application before making it generally available."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"diagram of network traffic going to various App Service Deployment Slots",src:a(47063).Z})),(0,i.kt)("p",null,'Once you\'re happy that everything looks good, you can "swap slots". What this means, is the version of the app living in the staging slot, gets moved into the production slot. So that which lived at ',(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app-stage.azurewebsites.net"},"https://my-glorious-app-stage.azurewebsites.net")," moves to ",(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app.io"},"https://my-glorious-app.io"),". For a more details on what that involves ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots#what-happens-during-a-swap"},"read this"),". The significant take home is this: there is no downtime. Traffic stops being routed to the old instance and starts being routed to the new one. It's as simple as that."),(0,i.kt)("p",null,"I should mention at this point that there's a ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.com/article/17/5/colorful-deployments"},"number of zero downtime strategies out there")," and slots can help support a number of these. This includes canary deployments, where a subset of traffic is routed to the new version prior to it being opened out more widely. In our case, we're looking at rolling deployments, where we replace the currently running instances of our application with the new ones; but it's worth being aware that there are other strategies that slots can facilitate."),(0,i.kt)("p",null,"So what does it look like when slots swap? Well, to test that out, we swapped slots on our two App Service instances. We repeatedly CURLed our apps ",(0,i.kt)("a",{parentName:"p",href:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"},(0,i.kt)("inlineCode",{parentName:"a"},"api/build"))," endpoint that exposes the build information; to get visibility around which version of our app we were routing traffic to. This is what we saw:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Thu Jan 21 11:51:51 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:51:54 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:51:57 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:00 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:03 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:05 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:08 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:10 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:12 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:15 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:17 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\n')),(0,i.kt)("p",null,"The first new version of our application showed up in a production slot at 11:51:54, and the last old version showed up at 11:52:12. So it took a total of 15 seconds to complete the transition from hitting only instances of the old application to hitting only instances of the new application. During that 15 seconds either old or new versions of the application would be serving traffic. Significantly, there was always a version of the application returning responses."),(0,i.kt)("p",null,"This is ",(0,i.kt)("em",{parentName:"p"},"very")," exciting! We have zero downtime deployments!"),(0,i.kt)("h2",{id:"rollbacks-for-bonus-points"},"Rollbacks for bonus points"),(0,i.kt)("p",null,"We now have the new version of the app (",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.6"),") in the production slot, and the old version of the app (",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5"),") in the staging slot."),(0,i.kt)("p",null,"Slots have a tremendous rollback story. If it emerges that there was some uncaught issue in your release and you'd like to revert to the previous version, you can! Just as we swapped just now to move ",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.6")," from the staging slot to the production slot and ",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5")," the other way, we can swap right back and revert our release like so:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"diagram of network traffic going to various App Service Deployment Slots exposing build number",src:a(92501).Z})),(0,i.kt)("p",null,"Once again users going to ",(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app.io"},"https://my-glorious-app.io")," are hitting ",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5"),"."),(0,i.kt)("p",null,"This is also ",(0,i.kt)("em",{parentName:"p"},"very")," exciting! We have zero downtime deployments ",(0,i.kt)("em",{parentName:"p"},"and")," rollbacks!"),(0,i.kt)("h2",{id:"automated-zero-downtime-releases-with-health-checks"},"Automated zero downtime releases with Health checks"),(0,i.kt)("p",null,"The final piece of the puzzle here automation. You're a sophisticated team, you've put a great deal of energy into automating your tests. You don't want your release process to be manual for this very reason; you trust your test coverage. You want to move to Continuous Deployment."),(0,i.kt)("p",null,"Fortunately, automating swapping slots is a breeze with ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),". Consider the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"- job: DeployApp\n        displayName: Deploy app\n        dependsOn:\n        - DeployARMTemplates\n\n        steps:\n        - download: current\n          artifact: webapp\n\n        - task: AzureWebApp@1\n          displayName: 'Deploy Web Application'\n          inputs:\n            azureSubscription: $(serviceConnection)\n            resourceGroupName: $(azureResourceGroup)\n            appName: $(appServiceName)\n            package: $(Pipeline.Workspace)/webapp/**/*.zip\n            slotName: stage\n            deployToSlotOrASE: true\n            deploymentMethod: auto\n\n      - job: SwapSlots\n        displayName: Swap Slots\n        dependsOn:\n        - DeployApp\n\n        steps:\n          - task: AzureAppServiceManage@0\n            displayName: Swap Slots\n            inputs:\n              action: 'Swap Slots'\n              azureSubscription: $(serviceConnection)\n              resourceGroupName: $(azureResourceGroup)\n              webAppName: $(appServiceName)\n              SourceSlot: 'stage'\n")),(0,i.kt)("p",null,"The first job here, deploys our previously built ",(0,i.kt)("inlineCode",{parentName:"p"},"webapp")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"stage")," slot. The second job swaps the slot."),(0,i.kt)("p",null,"When I first considered this, the question rattling around in the back of my mind was this: how does App Service know when it's safe to swap? What if we swap before our app has fully woken up and started serving responses?"),(0,i.kt)("p",null,"It so happens that using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check"},"Health checks, App Service caters for this beautifully"),'. A health check endpoint is a URL in your application which, when hit, checks the dependencies of your application. "Is the database accessible?" "Are the APIs I depend upon accessible?" The diagram from the docs expresses it very well:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"diagram of traffic hitting the health check endpoint",src:a(16585).Z})),(0,i.kt)("p",null,"This approach is very similar to ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"},"liveness, readiness and startup probes in Kubernetes"),". To make use of Health checks, in our ARM template for our App Service we have configured a ",(0,i.kt)("inlineCode",{parentName:"p"},"healthCheckPath"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"siteConfig": {\n    "linuxFxVersion": "[parameters(\'linuxFxVersion\')]",\n    "alwaysOn": true,\n    "http20Enabled": true,\n    "minTlsVersion": "1.2",\n    "healthCheckPath": "/api/health",\n    //...\n}\n')),(0,i.kt)("p",null,"This tells App Service where to look to check the health. The health check endpoint itself is provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"MapHealthChecks")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," of our .NET application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'app.UseEndpoints(endpoints => {\n    endpoints.MapControllerRoute(\n        name: "default",\n        pattern: "{controller}/{action=Index}/{id?}");\n\n    endpoints.MapHealthChecks("/api/health");\n});\n')),(0,i.kt)("p",null,"You read a full list of all the ways App Service uses Health checks ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check#what-app-service-does-with-health-checks"},"here"),". Pertinent for zero downtime deployments is this:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"when scaling up or out, App Service pings the Health check path to ensure new instances are ready.")),(0,i.kt)("p",null,"This is the magic sauce. App Service doesn't route traffic to an instance until it's given the thumbs up that it's ready in the form of passing health checks. This is excellent; it is this that makes automated zero downtime releases a reality."),(0,i.kt)("p",null,"Props to the various Azure teams that have made this possible; I'm very impressed by the way in which the Health checks and slots can be combined together to support some tremendous use cases."))}h.isMDXComponent=!0},92501:function(e,t,a){t.Z=a.p+"assets/images/app-service-with-slots-and-build-number-6577277984c21445024c1a0d1806f379.png"},47063:function(e,t,a){t.Z=a.p+"assets/images/app-service-with-slots-4e9ec89772aaaac7014376f5801ceb2f.png"},16585:function(e,t,a){t.Z=a.p+"assets/images/health-check-failure-diagram-b8d644ee9115fbcb5c63cc31aa4b5891.png"}}]);
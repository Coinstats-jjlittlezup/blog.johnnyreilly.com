(window.webpackJsonp=window.webpackJsonp||[]).push([[1061],{1170:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),b=n,d=u["".concat(s,".").concat(b)]||u[b]||h[b]||i;return a?o.a.createElement(d,r(r({ref:t},p),{},{components:a})):o.a.createElement(d,r({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=b;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1221:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/app-service-with-slots-16aac8093f6180c5595123ea418e11e1.png"},1222:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/app-service-with-slots-and-build-number-cb3ff72d23c65edd5c0775f2c018ac8c.png"},1223:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/health-check-failure-diagram-fa96ff15c146b91e8deaac2c01d9fa66.png"},268:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),o=a(8),i=(a(0),a(1170)),s={title:"Azure App Service, Health checks and zero downtime deployments",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:[],hide_table_of_contents:!1},r={permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-02-11-azure-app-service-health-checks-and-zero-downtime-deployments.md",source:"@site/blog/2021-02-11-azure-app-service-health-checks-and-zero-downtime-deployments.md",description:"I've been working recently on zero downtime deployments using Azure App Service. They're facilitated by a combination of Health checks and deployment slots. This post will talk about why this is important and how it works.",date:"2021-02-11T00:00:00.000Z",formattedDate:"February 11, 2021",tags:[],title:"Azure App Service, Health checks and zero downtime deployments",readingTime:7.355,truncated:!1,prevItem:{title:"Making Easy Auth tokens survive releases on Linux Azure App Service",permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service"},nextItem:{title:"ARM templates, security, role assignments and magic GUIDs",permalink:"/2021/02/08/arm-templates-security-role-assignments"}},l=[{value:"Why zero downtime deployments?",id:"why-zero-downtime-deployments",children:[]},{value:"Manual zero downtime releases with App Services",id:"manual-zero-downtime-releases-with-app-services",children:[]},{value:"Rollbacks for bonus points",id:"rollbacks-for-bonus-points",children:[]},{value:"Automated zero downtime releases with Health checks",id:"automated-zero-downtime-releases-with-health-checks",children:[]}],p={toc:l};function c(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I've been working recently on zero downtime deployments using Azure App Service. They're facilitated by a combination of ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check"},"Health checks")," and ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots"},"deployment slots"),". This post will talk about why this is important and how it works."),Object(i.b)("h2",{id:"why-zero-downtime-deployments"},"Why zero downtime deployments?"),Object(i.b)("p",null,"Historically (and for many applications, currently) deployment results in downtime. A period of time during the release where an application is not available to users whilst the new version is deployed. There are a number of downsides to releases with downtime:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Your users cannot use your application. This will frustrate them and make them sad."),Object(i.b)("li",{parentName:"ol"},"Because you're a kind person and you want your users to be happy, you'll optimise to make their lives better. You'll release when the fewest users are accessing your application. It will likely mean you'll end up working late, early or at weekends."),Object(i.b)("li",{parentName:"ol"},"Again because you want to reduce impact on users, you'll release less often. This means that every release will bring with it a greater collection of changes. This is turn will often result in a large degree of focus on manually testing each release, to reduce the likelihood of bugs ending up in users hands. This is a noble aim, but it drags the teams focus away from shipping.")),Object(i.b)("p",null,"Put simply: downtime in releases impacts customer happiness and leads to reduced pace for teams. It's a vicious circle."),Object(i.b)("p",null,"But if we turn it around, what does it look like if releases have ",Object(i.b)("em",{parentName:"p"},"no")," downtime at all?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Your users can always use your application. This will please them."),Object(i.b)("li",{parentName:"ol"},"Your team is now safe to release at any time, day or night. They will likely release more often as a consequence."),Object(i.b)("li",{parentName:"ol"},"If your team has sufficient automated testing in place, they're now in a position where they can move to ",Object(i.b)("a",{parentName:"li",href:"https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"},"Continuous Deployment"),"."),Object(i.b)("li",{parentName:"ol"},'Releases become boring. This is good. They "just work\u2122\ufe0f" and so the team can focus instead on building the cool features that are going to make users lives even better.')),Object(i.b)("h2",{id:"manual-zero-downtime-releases-with-app-services"},"Manual zero downtime releases with App Services"),Object(i.b)("p",null,"App Services have the ability to scale out. To ",Object(i.b)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/blog/scaling-up-and-scaling-out-in-windows-azure-web-sites/"},"quote the docs"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A scale out operation is the equivalent of creating multiple copies of your web site and adding a load balancer to distribute the demand between them. When you scale out ... there is no need to configure load balancing separately since this is already provided by the platform.")),Object(i.b)("p",null,"As you can see, scaling out works by having multiple instances of your app. Deployment slots are exactly this, but with an extra twist. If you add a deployment slot to your App Service, then you ",Object(i.b)("strong",{parentName:"p"},"no longer deploy to production"),". Instead you deploy to your staging slot. Your staging slot is accessible in the same way your production slot is accessible. So whilst your users may go to ",Object(i.b)("a",{parentName:"p",href:"https://my-glorious-app.io"},"https://my-glorious-app.io"),", your staging slot may live at ",Object(i.b)("a",{parentName:"p",href:"https://my-glorious-app-stage.azurewebsites.net"},"https://my-glorious-app-stage.azurewebsites.net")," instead. Because this is accessible, this is testable. You are in a position to test the deployed application before making it generally available."),Object(i.b)("p",null," ",Object(i.b)("img",{src:a(1221).default})),Object(i.b)("p",null,'Once you\'re happy that everything looks good, you can "swap slots". What this means, is the version of the app living in the staging slot, gets moved into the production slot. So that which lived at ',Object(i.b)("a",{parentName:"p",href:"https://my-glorious-app-stage.azurewebsites.net"},"https://my-glorious-app-stage.azurewebsites.net")," moves to ",Object(i.b)("a",{parentName:"p",href:"https://my-glorious-app.io"},"https://my-glorious-app.io"),". For a more details on what that involves ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots#what-happens-during-a-swap"},"read this"),". The significant take home is this: there is no downtime. Traffic stops being routed to the old instance and starts being routed to the new one. It's as simple as that."),Object(i.b)("p",null,"I should mention at this point that there's a ",Object(i.b)("a",{parentName:"p",href:"https://opensource.com/article/17/5/colorful-deployments"},"number of zero downtime strategies out there")," and slots can help support a number of these. This includes canary deployments, where a subset of traffic is routed to the new version prior to it being opened out more widely. In our case, we're looking at rolling deployments, where we replace the currently running instances of our application with the new ones; but it's worth being aware that there are other strategies that slots can facilitate."),Object(i.b)("p",null,"So what does it look like when slots swap? Well, to test that out, we swapped slots on our two App Service instances. We repeatedly CURLed our apps ",Object(i.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/01/surfacing-azure-pipelines-build-info-in.html"},Object(i.b)("inlineCode",{parentName:"a"},"api/build"))," endpoint that exposes the build information; to get visibility around which version of our app we were routing traffic to. This is what we saw:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'Thu Jan 21 11:51:51 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:51:54 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:51:57 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:00 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:03 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:05 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:08 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:10 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:12 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:15 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:17 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\n')),Object(i.b)("p",null,"The first new version of our application showed up in a production slot at 11:51:54, and the last old version showed up at 11:52:12. So it took a total of 15 seconds to complete the transition from hitting only instances of the old application to hitting only instances of the new application. During that 15 seconds either old or new versions of the application would be serving traffic. Significantly, there was always a version of the application returning responses."),Object(i.b)("p",null,"This is ",Object(i.b)("em",{parentName:"p"},"very")," exciting! We have zero downtime deployments!"),Object(i.b)("h2",{id:"rollbacks-for-bonus-points"},"Rollbacks for bonus points"),Object(i.b)("p",null,"We now have the new version of the app (",Object(i.b)("inlineCode",{parentName:"p"},"buildNumber: 20210121.6"),") in the production slot, and the old version of the app (",Object(i.b)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5"),") in the staging slot."),Object(i.b)("p",null,"Slots have a tremendous rollback story. If it emerges that there was some uncaught issue in your release and you'd like to revert to the previous version, you can! Just as we swapped just now to move ",Object(i.b)("inlineCode",{parentName:"p"},"buildNumber: 20210121.6")," from the staging slot to the production slot and ",Object(i.b)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5")," the other way, we can swap right back and revert our release like so:"),Object(i.b)("p",null,Object(i.b)("img",{src:a(1222).default})),Object(i.b)("p",null,"Once again users going to ",Object(i.b)("a",{parentName:"p",href:"https://my-glorious-app.io"},"https://my-glorious-app.io")," are hitting ",Object(i.b)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5"),"."),Object(i.b)("p",null,"This is also ",Object(i.b)("em",{parentName:"p"},"very")," exciting! We have zero downtime deployments ",Object(i.b)("em",{parentName:"p"},"and")," rollbacks!"),Object(i.b)("h2",{id:"automated-zero-downtime-releases-with-health-checks"},"Automated zero downtime releases with Health checks"),Object(i.b)("p",null,"The final piece of the puzzle here automation. You're a sophisticated team, you've put a great deal of energy into automating your tests. You don't want your release process to be manual for this very reason; you trust your test coverage. You want to move to Continuous Deployment."),Object(i.b)("p",null,"Fortunately, automating swapping slots is a breeze with ",Object(i.b)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),". Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"- job: DeployApp\n        displayName: Deploy app\n        dependsOn:\n        - DeployARMTemplates\n\n        steps:\n        - download: current\n          artifact: webapp\n\n        - task: AzureWebApp@1\n          displayName: 'Deploy Web Application'\n          inputs:\n            azureSubscription: $(serviceConnection)\n            resourceGroupName: $(azureResourceGroup)\n            appName: $(appServiceName)\n            package: $(Pipeline.Workspace)/webapp/**/*.zip\n            slotName: stage\n            deployToSlotOrASE: true\n            deploymentMethod: auto\n\n      - job: SwapSlots\n        displayName: Swap Slots\n        dependsOn:\n        - DeployApp\n\n        steps:\n          - task: AzureAppServiceManage@0\n            displayName: Swap Slots\n            inputs:\n              action: 'Swap Slots'\n              azureSubscription: $(serviceConnection)\n              resourceGroupName: $(azureResourceGroup)\n              webAppName: $(appServiceName)\n              SourceSlot: 'stage'\n")),Object(i.b)("p",null,"The first job here, deploys our previously built ",Object(i.b)("inlineCode",{parentName:"p"},"webapp")," to the ",Object(i.b)("inlineCode",{parentName:"p"},"stage")," slot. The second job swaps the slot."),Object(i.b)("p",null,"When I first considered this, the question rattling around in the back of my mind was this: how does App Service know when it's safe to swap? What if we swap before our app has fully woken up and started serving responses?"),Object(i.b)("p",null,"It so happens that using ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check"},"Health checks, App Service caters for this beautifully"),'. A health check endpoint is a URL in your application which, when hit, checks the dependencies of your application. "Is the database accessible?" "Are the APIs I depend upon accessible?" The diagram from the docs expresses it very well:'),Object(i.b)("p",null,Object(i.b)("img",{src:a(1223).default})),Object(i.b)("p",null,"This approach is very similar to ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"},"liveness, readiness and startup probes in Kubernetes"),". To make use of Health checks, in our ARM template for our App Service we have configured a ",Object(i.b)("inlineCode",{parentName:"p"},"healthCheckPath"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"siteConfig": {\n    "linuxFxVersion": "[parameters(\'linuxFxVersion\')]",\n    "alwaysOn": true,\n    "http20Enabled": true,\n    "minTlsVersion": "1.2",\n    "healthCheckPath": "/api/health",\n    //...\n}\n')),Object(i.b)("p",null,"This tells App Service where to look to check the health. The health check endpoint itself is provided by the ",Object(i.b)("inlineCode",{parentName:"p"},"MapHealthChecks")," in our ",Object(i.b)("inlineCode",{parentName:"p"},"Startup.cs")," of our .NET application:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'app.UseEndpoints(endpoints => {\n    endpoints.MapControllerRoute(\n        name: "default",\n        pattern: "{controller}/{action=Index}/{id?}");\n\n    endpoints.MapHealthChecks("/api/health");\n});\n')),Object(i.b)("p",null,"You read a full list of all the ways App Service uses Health checks ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check#what-app-service-does-with-health-checks"},"here"),". Pertinent for zero downtime deployments is this:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"when scaling up or out, App Service pings the Health check path to ensure new instances are ready.")),Object(i.b)("p",null,"This is the magic sauce. App Service doesn't route traffic to an instance until it's given the thumbs up that it's ready in the form of passing health checks. This is excellent; it is this that makes automated zero downtime releases a reality."),Object(i.b)("p",null,"Props to the various Azure teams that have made this possible; I'm very impressed by the way in which the Health checks and slots can be combined together to support some tremendous use cases."))}c.isMDXComponent=!0}}]);
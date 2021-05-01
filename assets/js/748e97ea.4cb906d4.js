(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[29445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87148:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a={title:"Docker and Configuration on Azure Web App for Containers: Whither Colons?",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},p={permalink:"/2018/07/28/configuring-docker-azure-web-app-containers",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-07-28-configuring-docker-azure-web-app-containers.md",source:"@site/blog/2018-07-28-configuring-docker-azure-web-app-containers.md",title:"Docker and Configuration on Azure Web App for Containers: Whither Colons?",description:"App Services have long been a super simple way to spin up a web app in Azure. The barrier to entry is low, maintenance is easy. It just works. App Services recently got a turbo boost in the form of Azure App Service on Linux. Being able to deploy to Linux is exciting enough; but the real reason this is notable because you can deploy Docker images that will be run as app services.",date:"2018-07-28T00:00:00.000Z",formattedDate:"July 28, 2018",tags:[],readingTime:1.805,truncated:!1,prevItem:{title:"\ud83d\udca3ing Relative Paths with TypeScript and webpack",permalink:"/2018/08/21/killing-relative-paths-with-typescript-and"},nextItem:{title:"Cypress and Auth0",permalink:"/2018/07/09/cypress-and-auth0"}},s=[{value:"The Mystery of Configuration",id:"the-mystery-of-configuration",children:[]},{value:"What do I do?",id:"what-do-i-do",children:[]},{value:"Why is it like this?",id:"why-is-it-like-this",children:[]}],l={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"App Services have long been a super simple way to spin up a web app in Azure. The barrier to entry is low, maintenance is easy. It just works. App Services recently got a turbo boost in the form of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"},"Azure App Service on Linux"),". Being able to deploy to Linux is exciting enough; but the real reason this is notable because ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/containers/tutorial-custom-docker-image"},"you can deploy Docker images that will be run as app services"),"."),(0,i.kt)("p",null," I cannot over-emphasise just how easy this makes getting a Docker image into Production. Yay Azure!"),(0,i.kt)("h2",{id:"the-mystery-of-configuration"},"The Mystery of Configuration"),(0,i.kt)("p",null,"Applications need configuration. ASP.Net Core applications are typically configured by an ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file which might look like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "Parent": {\n        "ChildOne": "I\'m a little teapot",\n        "ChildTwo": "Short and stout"\n      }\n    }\n')),(0,i.kt)("p",null,"With a classic App Service you could override a setting in the ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json"),' by updating "Application settings" within the Azure portal. You\'d do this in the style of creating an Application setting called ',(0,i.kt)("inlineCode",{parentName:"p"},"Parent:ChildOne")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Parent:ChildTwo"),". To be clear: using colons to target a specific piece of config."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-LUlgZrW9Yc0/W1wg5AbUQNI/AAAAAAAALVU/NeLfdpy7MOI0tAOX6EN-JH3SKDBwbbflACPcBGAYYCw/s640/appservice_classic.png",alt:null})),(0,i.kt)("p",null,"You can read about this approach ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/waws/2018/06/12/asp-net-core-settings-for-azure-app-service/"},"here"),". Now there's something I want you to notice; consider the colons below:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-0YSRmySfNc4/W1whJuEieaI/AAAAAAAALVc/k1zloq14lzASVQL6HjHCk-zzDTD2a8LAwCLcBGAs/s640/appservice_colons_fine.png",alt:null})),(0,i.kt)("p",null,"If you try and follow the same steps when you're using Web App for Containers / i.e. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"},"a Docker image deployed to an Azure App Service on Linux ")," you ",(0,i.kt)("strong",{parentName:"p"},"cannot")," use colons:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-hPNAcxRce0o/W1whYT9tINI/AAAAAAAALVg/YCCKzRE4E8opV5VZYmVFmSiOBLRWbep1ACLcBGAs/s640/appservice_container_colons_bad.png",alt:null})),(0,i.kt)("p",null,"When you hover over the error you see this message: ",(0,i.kt)("inlineCode",{parentName:"p"},'This field can only contain letters, numbers (0-9), periods ("."), and underscores ("_")'),". Using ",(0,i.kt)("inlineCode",{parentName:"p"},".")," does not work alas."),(0,i.kt)("h2",{id:"what-do-i-do"},"What do I do?"),(0,i.kt)("p",null,"So it turns out you just can't configure App Services on Linux."),(0,i.kt)("p",null,"Jokes!"),(0,i.kt)("p",null,"No, of course you can and here I can help. After more experimentation than I'd like to admit I happened upon the answer. Here it is:"),(0,i.kt)("p",null,"Where you use ",(0,i.kt)("inlineCode",{parentName:"p"},":")," on a classic App Service, you should use a ",(0,i.kt)("inlineCode",{parentName:"p"},"__")," (double underscore) on an App Service with containers. So ",(0,i.kt)("inlineCode",{parentName:"p"},"Parent__ChildOne")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Parent:ChildOne"),". It's as simple as that."),(0,i.kt)("h2",{id:"why-is-it-like-this"},"Why is it like this?"),(0,i.kt)("p",null,"Honestly? No idea. I can't find any information on the matter. Let me know if you find out."))}c.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,d=u["".concat(a,".").concat(h)]||u[h]||b[h]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},784:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(8),i=(n(0),n(1170)),a={title:"Docker and Configuration on Azure Web App for Containers: Whither Colons?",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:[],hide_table_of_contents:!1},c={permalink:"/2018/07/28/configuring-docker-azure-web-app-containers",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-07-28-configuring-docker-azure-web-app-containers.md",source:"@site/blog/2018-07-28-configuring-docker-azure-web-app-containers.md",description:"App Services have long been a super simple way to spin up a web app in Azure. The barrier to entry is low, maintenance is easy. It just works. App Services recently got a turbo boost in the form of Azure App Service on Linux. Being able to deploy to Linux is exciting enough; but the real reason this is notable because you can deploy Docker images that will be run as app services.",date:"2018-07-28T00:00:00.000Z",formattedDate:"July 28, 2018",tags:[],title:"Docker and Configuration on Azure Web App for Containers: Whither Colons?",readingTime:1.805,truncated:!1,prevItem:{title:"\ud83d\udca3ing Relative Paths with TypeScript and webpack",permalink:"/2018/08/21/killing-relative-paths-with-typescript-and"},nextItem:{title:"Cypress and Auth0",permalink:"/2018/07/09/cypress-and-auth0"}},p=[{value:"The Mystery of Configuration",id:"the-mystery-of-configuration",children:[]},{value:"What do I do?",id:"what-do-i-do",children:[]},{value:"Why is it like this?",id:"why-is-it-like-this",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"App Services have long been a super simple way to spin up a web app in Azure. The barrier to entry is low, maintenance is easy. It just works. App Services recently got a turbo boost in the form of ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"},"Azure App Service on Linux"),". Being able to deploy to Linux is exciting enough; but the real reason this is notable because ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/containers/tutorial-custom-docker-image"},"you can deploy Docker images that will be run as app services"),"."),Object(i.b)("p",null," I cannot over-emphasise just how easy this makes getting a Docker image into Production. Yay Azure!"),Object(i.b)("h2",{id:"the-mystery-of-configuration"},"The Mystery of Configuration"),Object(i.b)("p",null,"Applications need configuration. ASP.Net Core applications are typically configured by an ",Object(i.b)("inlineCode",{parentName:"p"},"appsettings.json")," file which might look like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n      "Parent": {\n        "ChildOne": "I\'m a little teapot",\n        "ChildTwo": "Short and stout"\n      }\n    }\n')),Object(i.b)("p",null,"With a classic App Service you could override a setting in the ",Object(i.b)("inlineCode",{parentName:"p"},"appsettings.json"),' by updating "Application settings" within the Azure portal. You\'d do this in the style of creating an Application setting called ',Object(i.b)("inlineCode",{parentName:"p"},"Parent:ChildOne")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Parent:ChildTwo"),". To be clear: using colons to target a specific piece of config."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-LUlgZrW9Yc0/W1wg5AbUQNI/AAAAAAAALVU/NeLfdpy7MOI0tAOX6EN-JH3SKDBwbbflACPcBGAYYCw/s640/appservice_classic.png",alt:null})),Object(i.b)("p",null,"You can read about this approach ",Object(i.b)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/waws/2018/06/12/asp-net-core-settings-for-azure-app-service/"},"here"),". Now there's something I want you to notice; consider the colons below:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-0YSRmySfNc4/W1whJuEieaI/AAAAAAAALVc/k1zloq14lzASVQL6HjHCk-zzDTD2a8LAwCLcBGAs/s640/appservice_colons_fine.png",alt:null})),Object(i.b)("p",null,"If you try and follow the same steps when you're using Web App for Containers / i.e. ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"},"a Docker image deployed to an Azure App Service on Linux ")," you ",Object(i.b)("strong",{parentName:"p"},"cannot")," use colons:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-hPNAcxRce0o/W1whYT9tINI/AAAAAAAALVg/YCCKzRE4E8opV5VZYmVFmSiOBLRWbep1ACLcBGAs/s640/appservice_container_colons_bad.png",alt:null})),Object(i.b)("p",null,"When you hover over the error you see this message: ",Object(i.b)("inlineCode",{parentName:"p"},'This field can only contain letters, numbers (0-9), periods ("."), and underscores ("_")'),". Using ",Object(i.b)("inlineCode",{parentName:"p"},".")," does not work alas."),Object(i.b)("h2",{id:"what-do-i-do"},"What do I do?"),Object(i.b)("p",null,"So it turns out you just can't configure App Services on Linux."),Object(i.b)("p",null,"Jokes!"),Object(i.b)("p",null,"No, of course you can and here I can help. After more experimentation than I'd like to admit I happened upon the answer. Here it is:"),Object(i.b)("p",null,"Where you use ",Object(i.b)("inlineCode",{parentName:"p"},":")," on a classic App Service, you should use a ",Object(i.b)("inlineCode",{parentName:"p"},"__")," (double underscore) on an App Service with containers. So ",Object(i.b)("inlineCode",{parentName:"p"},"Parent__ChildOne")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"Parent:ChildOne"),". It's as simple as that."),Object(i.b)("h2",{id:"why-is-it-like-this"},"Why is it like this?"),Object(i.b)("p",null,"Honestly? No idea. I can't find any information on the matter. Let me know if you find out."))}l.isMDXComponent=!0}}]);
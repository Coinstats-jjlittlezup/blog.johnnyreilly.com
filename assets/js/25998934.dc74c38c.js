"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[66840],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var A=r.createContext({}),s=function(e){var t=r.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(A.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,A=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,d=u["".concat(A,".").concat(f)]||u[f]||l[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var A in t)hasOwnProperty.call(t,A)&&(p[A]=t[A]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3631:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return A},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],image:"blog/2018-07-28-azure-app-service-web-app-containers-asp-net-nested-configuration/appservice_classic.png",hide_table_of_contents:!1},A=void 0,s={permalink:"/2018/07/28/azure-app-service-web-app-containers-asp-net-nested-configuration",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-07-28-azure-app-service-web-app-containers-asp-net-nested-configuration.md",source:"@site/blog/2018-07-28-azure-app-service-web-app-containers-asp-net-nested-configuration.md",title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",description:"How can we configure an ASP.NET application with nested properties Azure App Service Web App for Containers using Application Settings in Azure? Colons don't work.",date:"2018-07-28T00:00:00.000Z",formattedDate:"July 28, 2018",tags:[],readingTime:1.89,truncated:!1,prevItem:{title:"Using TypeScript and webpack alias: goodbye relative paths",permalink:"/2018/08/21/typescript-webpack-alias-goodbye-relative-paths"},nextItem:{title:"Cypress and Auth0",permalink:"/2018/07/09/cypress-and-auth0"}},c=[{value:"Containers on App Service",id:"containers-on-app-service",children:[]},{value:"The Mystery of Configuration",id:"the-mystery-of-configuration",children:[]},{value:"How do we configure without colons?",id:"how-do-we-configure-without-colons",children:[]}],l={toc:c};function u(e){var t=e.components,p=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How can we configure an ASP.NET application with nested properties ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/services/app-service/containers/"},"Azure App Service Web App for Containers")," using Application Settings in Azure? Colons don't work."),(0,a.kt)("h2",{id:"containers-on-app-service"},"Containers on App Service"),(0,a.kt)("p",null,"App Services have long been a super simple way to spin up a web app in Azure. The barrier to entry is low, maintenance is easy. It just works. App Services recently got a turbo boost in the form of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"},"Azure App Service on Linux"),". Being able to deploy to Linux is exciting enough; but another reason this is notable because ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/containers/tutorial-custom-docker-image"},"you can deploy Docker images that will be run as app services"),"."),(0,a.kt)("p",null,"I cannot over-emphasise just how easy this makes getting a Docker image into Production. Yay Azure!"),(0,a.kt)("h2",{id:"the-mystery-of-configuration"},"The Mystery of Configuration"),(0,a.kt)("p",null,"Applications need configuration. ASP.Net Core applications are typically configured by an ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file which might look like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Parent": {\n    "ChildOne": "I\'m a little teapot",\n    "ChildTwo": "Short and stout"\n  }\n}\n')),(0,a.kt)("p",null,"With a classic App Service you could override a setting in the ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json"),' by updating "Application settings" within the Azure portal. You\'d do this in the style of creating an Application setting called ',(0,a.kt)("inlineCode",{parentName:"p"},"Parent:ChildOne")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Parent:ChildTwo"),". To be clear: using colons to target a specific piece of config."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of an App Service Application Settings in the Azure Portal, nested properties configured using colons",src:n(74015).Z})),(0,a.kt)("p",null,"You can read about this approach ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/waws/2018/06/12/asp-net-core-settings-for-azure-app-service/"},"here"),". Now there's something I want you to notice; consider the colons below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of an App Service specific Application Setting nested property configured using colons - all good",src:n(14247).Z})),(0,a.kt)("p",null,"If you try and follow the same steps when you're using Web App for Containers / i.e. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"},"a Docker image deployed to an Azure App Service on Linux ")," you ",(0,a.kt)("strong",{parentName:"p"},"cannot")," use colons:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of a Web App for Containers specific Application Setting nested property configured using colons - errors",src:n(36552).Z})),(0,a.kt)("p",null,"When you hover over the error you see this message: ",(0,a.kt)("inlineCode",{parentName:"p"},'This field can only contain letters, numbers (0-9), periods ("."), and underscores ("_")'),". Using ",(0,a.kt)("inlineCode",{parentName:"p"},".")," does not work alas."),(0,a.kt)("h2",{id:"how-do-we-configure-without-colons"},"How do we configure without colons?"),(0,a.kt)("p",null,"It's simple. Where you would use ",(0,a.kt)("inlineCode",{parentName:"p"},":")," on a classic App Service, you should use a ",(0,a.kt)("inlineCode",{parentName:"p"},"__")," (double underscore) on an App Service with containers. So ",(0,a.kt)("inlineCode",{parentName:"p"},"Parent__ChildOne")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"Parent:ChildOne"),". It's as simple as that."))}u.isMDXComponent=!0},74015:function(e,t,n){t.Z=n.p+"assets/images/appservice_classic-65019ef2a2e90f435b83b8691cdb6e35.png"},14247:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkgAAABgCAMAAADRoH3vAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABoVBMVEX////JycklJSVycnL29vaLi4urq6vc3NxAQEDu7u5UVFRTU1PAwMCHh4d/f3/CwsK2trahoaGpqqwfIyeIiozb3Nw6PkH29vducXPIycqEhohPUlbMzc7t7u6trq/BwsTu7u9gY2ZOUlW0treeoKJ7foDd3t6+v8Dl5ebR0tNeYWTT1NbU1dUAvPIYwvPn+f4xyfTO8v1Jz/a27Pth1vee5fp53PiG3/mS4vlt2fiq6ftV0vbC7/w9zPXb9f0kxvTz/P4Mv/PY4eZpF6r+/v7Z2tzo6ery8/PV19n7/Pzt7e2ysrK3u79NVmBZYWrr7O1tdHxGT1mXnKH39/h8golVXWbd3+Cvs7ecoKbu7/DLztFja3OHjJPf4eJwd3+Rl53U1NTg4eNXX2i+wcS5vcFianKxsbHs7OxRWWNbY2x6gYjv8PGsrKzl5eWOlJqmqq/W2Nuzt7qmpqbe3t52fYTt7u9zeoF1fIN3foXe4OKmq7Dm5+hgaHDR1Nbn6OpcZG3GyMy0tLTHx8f4+Pj29/fd3d339/fq6up9PLWhfMjEvNuHCzPuAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UFEQYVKkKbzGsAAABqdEVYdFJhdyBwcm9maWxlIHR5cGUgYXBwMQAKYXBwMQogICAgICAzNAo0OTQ5MmEwMDA4MDAwMDAwMDEwMDMxMDEwMjAwMDcwMDAwMDAxYTAwMDAwMDAwMDAwMDAwNDc2ZjZmNjc2YzY1MDAwMAqnX4qZAAAJ9ElEQVR42u2ciZ/axhXHBzawR7dNKgQLxfSIczXt5LBz2Dm8SWynsVsnxYC0aDdW2rpxj7Ru3fuu0yZp+1fnvTczQpwLLJUX+P0+AYQ0h5j31fs9yY6VgiAIgiAIgsYrl89vPDT6UCFfUMVxRze3tjZnnmyuTtBSqJDPjwvuOJA2t2jf9Ew8tMEtZ+wELZm2d7a+kC+OB2mUxmapSWloxk7Q0jnbxq6EuMgb+Z1tjntuJ5/PpTMSpS2ijd+JCf7IFx0eedugQJsFl4KkuTTMsXdSmy8mnbZ38rsbMj733vgS9XIdoGV2thQSQsXmlmwIMQYkiXO+aD52tlMgySbTZzaEDmWb2325ESDZTnbKgusALbWzbVIciwwSgZGjNwKpSPuFBANSjgnZ3jXtaVOyFDNBTXNK2hcIDOnj2lhHK9IQKWuzIBVkIpq3wI0LtgO01M4mmYFiLG/MlYl7IQWSK2+KNuskTOScrZlyytZU1qhyvRQ3CFJOYDP8FG1GQkJa9ns262OpNEPfJEs5kCwgREaxPyMVR4JkiKOaiRgdKLb7QHLEFmwHRGOZnS1v6xRjbRx8sSoxrQFrMzY1ytpyAyAJNg9LlnlkU03ISMba5rgThE6bs8lzHa5wbOUrDBlLGiy2i66gzg0U27apA8nQaUtoasTfhcak2M65WstAbDsgHEsrirXkAU45RMyXJZoU7Ee2xJaS239hIkfv/GBAngu4e72CJWAIpILqHcxZ1gZBkl0FCxI4WhEl3pLt0+dcHndsAOnEU1pjhADSiUHCbT8EQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQUshr+QrVa6USpXyXrVUKnm0jzeqezX69hXeVfI9fq+fqdT2qpWyatQ9aVKqKe5a3VM12qt87ksjebxZ3fNtA6sqNStXPHrVG9SbJq3RYRqKR+Lua7n29MvLFV4lXmxZihLHQ77WZGW+yrsqZ+r84fkcFTru0RpyE1rTRYiHomCYSPg8KAfva+ZsavaUjlGjXqKTKjMi1a9TeD2OqbwZOkzMzalLKzp5in6j7n6DkMNNaUNY4QbfeJRA6v+VPCa/fHPKaZD8Nb2G+bri95qyl5jnVrtR93tLb+LAV68SkGjZKBpe+io9KUgcGwaX5zMgSfBMmKa7ymuVs/RDBBGf+zEwNKg3FqQqU+R5yejlil8py5nUzwpO/LVeHQKJlok6E4SP0YAASblkbkBy0UtA4jCMBqnyOFFUf6K+wFXjGWz85wbJrzYovGxt9UZiV7zhmWw7BJJfq9Tqns+XRMleUH71SfZFn6+jcuUsHX28KtaWPgWi6Km65C5PGvdZGy/belobrz1naIkeh8B3ZmPiwR42ANI3q75HZYZnzGRxIJEj8XzO2gxc1nSncbaeT6dyA9dCozOSr/xHKx5/lZ/GOxv1p3kILqMawlX9yeGMRGf7GHXyS6YY8M2luNYZSVDyRmUkQckfk5FoqZ+mjOSZoCwKJMoCJ8lInBXIdIZA4nJmHEhcFZGD9UCi5ZA8w6PR11qp/tQIkIhZX8zfVmOyXbPZaV3l1t7GIRWCJLDDINHVSIlDqonFgeR8Yk6QqnILVf1WP0heyVlbco2kQJISShJQzYJE+esMV9/04yVB+XvG2vpTos9VIvfxKt8WE3Xe2X97t04UGWvjTG4NJKmRUqXGMEhSQvmLvWsTJ+P5JG5+r6xZ4N0hBEHQ/11aa6We0fpZ9ZzWz6tzWp9XL2j9onpJ65fVBa0vqle0flW9pvXr6pLW++oNrd9U6k2t31D7Wl9Sr2v9mnpV61fURa0vqJe1fkm9qPUL6rzW59TzWj+nntX6GTsVtKogqbeyk34LWm5NAuny5cvZUQutrjIECVpdnc8SpPNY7xWukWBtEECCTovOZQnSOaw3im0ImqSLWYJ0EeuNGgk1EgSQoNl05erb/PGdd65N3eVCliBdQIhm0vXd71rtXs+Uo+/dePeqUu99v3lzepIcSK12k9QJwpC+BAeq2+6qqNk87PKxo0B1D5vNSDoEnWaz3VKKW4ZyfBbxuGPE09Dx928Fdkdw1Dp+wDDmM4mjwf3Bre7wGEmzbjKJMr9kkqJYGoVxxiDtfnDd6oPdLOf9wQ+bzXevEkfN5o+m7bOfykh2vRKQOBTBOybCrXakWrclMj+mEEQEELWM2q1ZTnC/BxJDI+AMxyvFwtF0w48EyfYfA9Jgfzd/FI8FvJt5RvrwTqIPs5z32k1C6Cc/pbef/XyeGmkQpGRRaSWTdWSiTLMwtBf9TDXSBJAO6Gsr7p46kGg16ECYvbV99ItEH6nMSZqJo4kgdQ9Ds/gc8ViSTxxZEKhteHArUHOAdJs8ko30l/SK5Wso4e7GrbSpdgLaezf1Ed5tk6WyvwS33m8fdAIeJDJI04mZA10x6c7dmHr9ijw4sp2ZIHrFtw/FllOT8G+Wkfnrr3mXbRSxg3O/MDKUh1mzdO83ie6pB0DSb6fnSF0aAklQjGWlKSSRA4kOxLxtr3D6kB0z6RJH8DBmR3QZib9SvcKjSpwocJwLyTkJiqATcglkP0JGR0AOQ2Zcure7DiRzgIeI6cQZpJZkJNPZgUQDx6EByU7Cv1lGTjKSaWTypTkfk9zWCKTf/Z4p4Ip7fpBSxTaHPXJFgkQosSZqQddxOAdI1J9eCUg8nMwppsZZieGIlIPW8UDghtbErNNy+W/uDoy1WeDlLYpTHfnlQIqsYfYmsb+ZKz4HkmkU2xsJMTVuvD4gGY5mIklPBsnssyDJrnSNZDCbvUYaCVIy+zEgBQf27OwZJiDJAXuWiwCJSGUX7JXaawNS9w8E0R+PmKQ/LaTYjpRxBU4Bf5YKhNY44roiNHdtcgd3MpCIRWNtSamdsrZRILXig8gab9gHkhxgZsI+a7OdY5mKk6q4Vr+1DYAkjcwFRDQnpXYY0lXE/x0Fqw3SX/7KdTbXSTf+tojbfy5m6Zo0lhE2Xc3a9xypM8ua7vdAkpIr5GJbKubg6O+21Fb2qKmyR4CkwnbLZAj2tnYrAUkOUDvabYrtFtd4tjPtPGwzSFz/WW80k0ShA6l72An4ZRu1+S6Ainhbaq8RSCr4B9+vXbt5459XZn4g+YCUPFboxeu4JzZjHSZ1YAYXuj1ERd8zgm4CePbWdv9jx9HH97Od+V/yRPvKv6fv8aD/iGQENdHkm8HuuIcOqQPd6R9M9D24mvSwSWWWiBJ9cv+e1f1P1CnXg/5D2yGQgs5ktwyb0TEH+AFGdJLTHA1S3Mz6T0jUp3c+s7rzKUCaDBK0IsJfbIMWJPxVW2gBwl/+h1AjQQAJWjHhf9mGUGxDp8na/vPf/+HfR4JO/u8jZUottLIZCf/0HzSXPgfDNwzOr7HsSAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0xN1QwNjoxMjoxMCswMDowMPZVbAAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMTdUMDY6MTI6MTArMDA6MDCHCNS8AAAAAElFTkSuQmCC"},36552:function(e,t){t.Z="data:image/png;base64,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"}}]);
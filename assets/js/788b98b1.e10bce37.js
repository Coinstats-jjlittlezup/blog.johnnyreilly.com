(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,h=b["".concat(l,".").concat(u)]||b[u]||m[u]||r;return n?o.a.createElement(h,i(i({ref:t},p),{},{components:n})):o.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1272:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/hello-world-bicep-91a0d8f9326169e5272b1f1eb7dbdbee.png"},743:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(4),o=n(10),r=(n(0),n(1219)),l={title:"Hello World Bicep",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Bicep","ARM templates"],image:"blog/2021-04-10-hello-world-bicep/hello-world-bicep.png",hide_table_of_contents:!1},i={permalink:"/2021/04/10/hello-world-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-04-10-hello-world-bicep.md",source:"@site/blog/2021-04-10-hello-world-bicep.md",title:"Hello World Bicep",description:'Bicep makes Azure Resource Management a great deal simpler than ARM templates. The selling point here is grokkability. This post takes a look at the "Hello World" example recently added to the Bicep repo to appreciate quite what a difference it makes.',date:"2021-04-10T00:00:00.000Z",formattedDate:"April 10, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"ARM templates",permalink:"/tags/arm-templates"}],readingTime:2.675,truncated:!1,prevItem:{title:"ts-loader goes webpack 5",permalink:"/2021/04/20/ts-loader-goes-webpack-5"},nextItem:{title:"Bicep meet Azure Pipelines 2",permalink:"/2021/03/23/bicep-meet-azure-pipelines-2"}},c=[{value:"More than configuration",id:"more-than-configuration",children:[]},{value:"From terse to verbose",id:"from-terse-to-verbose",children:[]}],p={toc:c};function s(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Bicep makes Azure Resource Management a great deal simpler than ARM templates. The selling point here is grokkability. This post takes a look at the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Azure/bicep/pull/2011"},'"Hello World" example recently added to the Bicep repo')," to appreciate quite what a difference it makes."),Object(r.b)("p",null,Object(r.b)("img",{alt:"hello world bicep",src:n(1272).default})),Object(r.b)("h2",{id:"more-than-configuration"},"More than configuration"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Azure/bicep/tree/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world"},'"Hello World"')," added to the Bicep repo by ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ChristopherGLewis"},"Chris Lewis")," illustrates the simplest usage of Bicep:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This bicep file takes a ",Object(r.b)("inlineCode",{parentName:"p"},"yourName")," parameter and adds that to a ",Object(r.b)("inlineCode",{parentName:"p"},"hello")," variable and returns the concatenated string as an ARM output.")),Object(r.b)("p",null,"This is, when you consider it, the very essence of a computer program. Taking an input, doing some computation and providing an output. When I think about ARM templates, (and because Bicep is transpiled into ARM templates I mentally bracket the two together) I tend to think about resources being deployed. I focus on ",Object(r.b)("em",{parentName:"p"},"configuration"),", not ",Object(r.b)("em",{parentName:"p"},"computation")),Object(r.b)("p",null,"This is an imperfect mental model. ARM templates can do so much more than deploy by slinging strings and numbers. Thanks to the wealth of ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-functions"},"template functions")," that exist they have much more power. They can do computation."),Object(r.b)("p",null,"The Hello World example focuses just on computation."),Object(r.b)("h2",{id:"from-terse-to-verbose"},"From terse to verbose"),Object(r.b)("p",null,"The Hello World example is made up of two significant files:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"main.bicep")," - the bicep code"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"main.json")," - the ARM template compiled from the Bicep file  ")),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Azure/bicep/blob/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world/main.bicep"},Object(r.b)("inlineCode",{parentName:"a"},"main.bicep"))," file amounts to 3 lines of code (I have omitted the comment line):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bicep"},"param yourName string\nvar hello = 'Hello World! - Hi'\n\noutput helloWorld string = '${hello} ${yourName}'\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the first line takes the ",Object(r.b)("em",{parentName:"li"},"input")," of ",Object(r.b)("inlineCode",{parentName:"li"},"yourName")),Object(r.b)("li",{parentName:"ul"},"the second line declares a ",Object(r.b)("inlineCode",{parentName:"li"},"hello")," variable"),Object(r.b)("li",{parentName:"ul"},"the third line ",Object(r.b)("em",{parentName:"li"},"computes")," the new value of ",Object(r.b)("inlineCode",{parentName:"li"},"helloWorld")," based upon ",Object(r.b)("inlineCode",{parentName:"li"},"hello")," and ",Object(r.b)("inlineCode",{parentName:"li"},"yourName"),", then passes it as ",Object(r.b)("em",{parentName:"li"},"output"))),Object(r.b)("p",null,"Gosh is it ever simple. It's easy to read and it's simple to understand. Even if you don't know Bicep, if you've experience in another language you can likely guess what's happening."),Object(r.b)("p",null,"Let's compare this with the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Azure/bicep/blob/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world/main.json"},Object(r.b)("inlineCode",{parentName:"a"},"main.json"))," that ",Object(r.b)("inlineCode",{parentName:"p"},"main.bicep")," is transpiled into:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",\n  "contentVersion": "1.0.0.0",\n  "metadata": {\n    "_generator": {\n      "name": "bicep",\n      "version": "dev",\n      "templateHash": "6989941473549654446"\n    }\n  },\n  "parameters": {\n    "yourName": {\n      "type": "string"\n    }\n  },\n  "functions": [],\n  "variables": {\n    "hello": "Hello World! - Hi"\n  },\n  "resources": [],\n  "outputs": {\n    "helloWorld": {\n      "type": "string",\n      "value": "[format(\'{0} {1}\', variables(\'hello\'), parameters(\'yourName\'))]"\n    }\n  }\n}\n')),Object(r.b)("p",null,"The above ARM template expresses exactly the same thing as the Bicep alternative. But that 3 lines of logic has become 27 lines of JSON. We've lost something in the transition. Intent is no longer clear. We've gone from something easy to reason about, to something that is hard to reason about. You need to think a lot less to write the Bicep alternative and that's a ",Object(r.b)("em",{parentName:"p"},"good")," thing."),Object(r.b)("p",null,"I was chatting to someone recently who expressed it well by saying:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"ARM is the format that the resource providers understand, so really it\u2019s the Azure equivalent of Assembler \u2013 and I don\u2019t know anyone who enjoys coding in Assembler.")),Object(r.b)("p",null,"This is a great example of the value that Bicep provides. If you'd like to play with the Hello World a little, why not ",Object(r.b)("a",{parentName:"p",href:"https://aka.ms/bicepdemo#eJzT1w9OzC3ISVXISM3JyVcozy/KSeEqSCxKzFWozC8t8kvMTVUoLinKzEvnKkssgqqyVVD3ADPCQcoVFXQVPDLVubjyS0sKSksgasAyUJ0g9SrVYOFaBZVqmLm16gCvlitr"},"take it for a spin in the Bicep playground"),"."))}s.isMDXComponent=!0}}]);
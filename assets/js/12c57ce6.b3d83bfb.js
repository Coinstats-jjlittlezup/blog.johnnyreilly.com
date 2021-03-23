(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/azure-devops-marketplace-9a66c268389423b6ec4b68cb8ff195da.png"},358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(4),o=n(10),r=(n(0),n(1186)),i={title:"Images in MarkDown for the Azure DevOps Marketplace!",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},s={permalink:"/2020/11/28/images-in-markdown-for-azure-devops-marketplace",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-11-28-images-in-markdown-for-azure-devops-marketplace.md",source:"@site/blog/2020-11-28-images-in-markdown-for-azure-devops-marketplace.md",description:"I've recently found myself developing custom pipelines task extensions for Azure DevOps. The extensions being developed end up in the Azure DevOps Marketplace. What you see there when you look at existing extensions is some pretty lovely documentation.",date:"2020-11-28T00:00:00.000Z",formattedDate:"November 28, 2020",tags:[],title:"Images in MarkDown for the Azure DevOps Marketplace!",readingTime:2.355,truncated:!1,prevItem:{title:"azure-pipelines-task-lib and isOutput setVariable",permalink:"/2020/12/09/azure-pipelines-task-lib-and-isoutput-setvariable"},nextItem:{title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",permalink:"/2020/11/14/bulletproof-uniq-with-typescript"}},l=[{value:"How can our tasks look as lovely?",id:"how-can-our-tasks-look-as-lovely",children:[]},{value:"Mark(Down) our manifest",id:"markdown-our-manifest",children:[]},{value:"Now the images...",id:"now-the-images",children:[]}],c={toc:l};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I've recently found myself developing ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?view=azure-devops"},"custom pipelines task extensions for Azure DevOps"),". The extensions being developed end up in the ",Object(r.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/azuredevops"},"Azure DevOps Marketplace"),". What you see there when you look at existing extensions is some pretty lovely documentation."),Object(r.b)("p",null," ",Object(r.b)("img",{src:n(1203).default})),Object(r.b)("h2",{id:"how-can-our-tasks-look-as-lovely"},"How can our tasks look as lovely?"),Object(r.b)("p",null,"That, my friends, is the question to answer. Good documentation is key to success. Here's the ask: when a custom task is installed it becomes available in the marketplace, we want it to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"contain documentation"),Object(r.b)("li",{parentName:"ul"},"that documentation should support images... For a picture, famously, speaks a thousand words")),Object(r.b)("h2",{id:"markdown-our-manifest"},"Mark(Down) our manifest"),Object(r.b)("p",null,"To get documentation showing up in the marketplace, we need to take a look at the ",Object(r.b)("inlineCode",{parentName:"p"},"vss-extension.json")," file which lies at the root of our extension folder. It's a kind of manifest file and is documented ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops"},"here"),"."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#discovery-attributes"},"Tucked away in the docs, you'll find mention of a ",Object(r.b)("inlineCode",{parentName:"a"},"content")," property and the words:")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Dictionary of content files that describe your extension to users... Each file is assumed to be in ",Object(r.b)("a",{parentName:"p",href:"https://help.github.com/articles/github-flavored-markdown/"},"GitHub Flavored Markdown format"),". The path of each item is the path to the markdown file in the extension. Valid keys: ",Object(r.b)("inlineCode",{parentName:"p"},"details"),".")),Object(r.b)("p",null,"This means we can have a MarkDown file in our repo which documents our task. To stay consistent with most projects, a solid choice is to use the ",Object(r.b)("inlineCode",{parentName:"p"},"README.md")," that sits in the root of the project to this end."),Object(r.b)("p",null,"So the simple addition of this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    //...\n    "content": {\n        "details": {\n            "path": "README.md"\n        }\n    },\n    //...\n}\n')),Object(r.b)("p",null,"Gives us documentation in the marketplace. Yay!"),Object(r.b)("h2",{id:"now-the-images"},"Now the images..."),Object(r.b)("p",null,"If we are referencing images in our ",Object(r.b)("inlineCode",{parentName:"p"},"README.md")," then, as it stands right now, they won't show up in the marketplace. It'll be broken link city. Imagine some MarkDown like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"![alt text](images/screenshot.png)\n")),Object(r.b)("p",null,"This is entirely correct and supported, but won't work by default. This is because these images need to be specified in the ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#files"},Object(r.b)("inlineCode",{parentName:"a"},"files")," property")," of the ",Object(r.b)("inlineCode",{parentName:"p"},"vss-extension.json"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    //...\n    "content": {\n        "details": {\n            "path": "README.md"\n        }\n    },\n    "files": [\n        {\n            "path": "images",\n            "addressable": true\n        }\n    ]\n    //...\n}\n')),Object(r.b)("p",null,"Consider the above; the ",Object(r.b)("inlineCode",{parentName:"p"},"path")," of ",Object(r.b)("inlineCode",{parentName:"p"},"images")," includes everything inside the ",Object(r.b)("inlineCode",{parentName:"p"},"images")," folder in the task. However, it's crucial that the ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#properties-1"},Object(r.b)("inlineCode",{parentName:"a"},'"addressable": true'))," is present as well. It's this that makes the files in this ",Object(r.b)("inlineCode",{parentName:"p"},"path")," URL-addressable. And without that, the images won't be displayed."),Object(r.b)("p",null,"That's it! We're done! We can have rich, image inclusive, documentation in our custom tasks."),Object(r.b)("p",null,"A final note: it's possible to specify individual files rather than whole paths in the ",Object(r.b)("inlineCode",{parentName:"p"},"files")," directory and you might want to do that if you're being very careful around file size. There is a maximum size for a custom task and it's easy to breach it. But by and large I find that \"allowlisting\" a single directory is easier."))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[680],{1170:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return b}));var o=i(0),n=i.n(o);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(i),h=o,b=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return i?n.a.createElement(b,a(a({ref:t},c),{},{components:i})):n.a.createElement(b,a({ref:t},c))}));function b(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,p=new Array(r);p[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<r;c++)p[c]=i[c];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},821:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return p})),i.d(t,"metadata",(function(){return a})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return s}));var o=i(3),n=i(8),r=(i(0),i(1170)),p={title:"Getting TypeScript Compile-on-Save and Continuous Integration to play nice",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["TFS","TypeScript","Build Server","Continuous Integration"],hide_table_of_contents:!1},a={permalink:"/2013/10/30/getting-typescript-compile-on-save-and-continous-integration-to-play-nice",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-10-30-getting-typescript-compile-on-save-and-continous-integration-to-play-nice.md",source:"@site/blog/2013-10-30-getting-typescript-compile-on-save-and-continous-integration-to-play-nice.md",description:'Well sort of... Perhaps this post should more accurately called "How to get CI to ignore your TypeScript whilst Visual Studio still compiles it..."',date:"2013-10-30T00:00:00.000Z",formattedDate:"October 30, 2013",tags:[{label:"TFS",permalink:"/tags/tfs"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Build Server",permalink:"/tags/build-server"},{label:"Continuous Integration",permalink:"/tags/continuous-integration"}],title:"Getting TypeScript Compile-on-Save and Continuous Integration to play nice",readingTime:3.935,truncated:!1,prevItem:{title:"TypeScript: Don't forget Build Action for Implicit Referencing...",permalink:"/2013/11/04/typescript-dont-forget-build-action-for-implicit-referencing"},nextItem:{title:"Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native",permalink:"/2013/10/04/migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native"}},l=[{value:"Once there was Web Essentials",id:"once-there-was-web-essentials",children:[]},{value:"But there is still Compile on Save hope!",id:"but-there-is-still-compile-on-save-hope",children:[]},{value:"So what now?",id:"so-what-now",children:[]},{value:"A solution",id:"a-solution",children:[]},{value:"Final thoughts",id:"final-thoughts",children:[]}],c={toc:l};function s(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Well sort of... Perhaps this post should more accurately called "How to get CI to ignore your TypeScript whilst Visual Studio still compiles it..."'),Object(r.b)("h2",{id:"once-there-was-web-essentials"},"Once there was Web Essentials"),Object(r.b)("p",null,"When I first started using TypeScript, I was using it in combination with Web Essentials. Those were happy days. I saved my TS file and Web Essentials would kick off TypeScript compilation. Ah bliss. But the good times couldn't last forever and sure enough when version 3.0 of Web Essentials shipped it ",Object(r.b)("a",{parentName:"p",href:"http://madskristensen.net/post/Web-Essentials-2013-Where-is-the-TypeScript-support"},"pulled support for TypeScript"),"."),Object(r.b)("p",null,"This made me, ",Object(r.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1616"},"and others"),", very sad. Essentially we were given the choice between sticking with an old version of Web Essentials (2.9 - the last release before 3.0) and keeping our Compile-on-Save ","*",Object(r.b)("strong",{parentName:"p"},"or"),"*"," keeping with the latest version of Web Essentials and losing it. And since I understood that newer versions of TypeScript had differences in the compiler flags which slightly broke compatibility with WE 2.9 the latter choice seemed the most sensible..."),Object(r.b)("h2",{id:"but-there-is-still-compile-on-save-hope"},"But there is still Compile on Save hope!"),Object(r.b)("p",null,"The information was that we need not lose our Compile on Save. We just need to follow the instructions ",Object(r.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/wikipage?title=Compile-on-Save"},"here"),". Or to quote them:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Then additionally add (or replace if you had an older PreBuild action for TypeScript) the following at the end of your project file to include TypeScript compilation in your project."),Object(r.b)("p",{parentName:"blockquote"},"..."),Object(r.b)("p",{parentName:"blockquote"},"For C#-style projects (.csproj):"),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup Condition=\"'$(Configuration)' == 'Debug'\">\n    <TypeScriptTarget>ES5</TypeScriptTarget>\n    <TypeScriptIncludeComments>true</TypeScriptIncludeComments>\n    <TypeScriptSourceMap>true</TypeScriptSourceMap>\n  </PropertyGroup>\n  <PropertyGroup Condition=\"'$(Configuration)' == 'Release'\">\n    <TypeScriptTarget>ES5</TypeScriptTarget>\n    <TypeScriptIncludeComments>false</TypeScriptIncludeComments>\n    <TypeScriptSourceMap>false</TypeScriptSourceMap>\n  </PropertyGroup>\n  <Import Project=\"$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets\" />\n"))),Object(r.b)("p",null,"I followed these instructions (well I had to tweak the ",Object(r.b)("inlineCode",{parentName:"p"},"Import Project")," location) and I was in business again. But I when I came to check my code into TFS I came unstuck. The automated build kicked off and then, in short order, kicked me:"),Object(r.b)("blockquote",null,Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre"},'C:\\Builds\\1\\MyApp\\MyApp Continuous Integration\\src\\MyApp\\MyApp.csproj (1520): The imported project "C:\\Program Files (x86)\\MSBuild\\Microsoft\\VisualStudio\\v11.0\\TypeScript\\Microsoft.TypeScript.targets" was not found. Confirm that the path in the <import> declaration is correct, and that the file exists on disk.\nC:\\Builds\\1\\MyApp\\MyApp Continuous Integration\\src\\MyApp\\MyApp.csproj (1520): The imported project "C:\\Program Files (x86)\\MSBuild\\Microsoft\\VisualStudio\\v11.0\\TypeScript\\Microsoft.TypeScript.targets" was not found. Confirm that the path in the <import> declaration is correct, and that the file exists on disk.\n</import></import>\n'))),Object(r.b)("p",null,"That's right, TypeScript wasn't installed on the build server. And since TypeScript was now part of the build process my builds were now failing. Ouch."),Object(r.b)("h2",{id:"so-what-now"},"So what now?"),Object(r.b)("p",null,"I did a little digging and found ",Object(r.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1518"},"this issue report on the TypeScript CodePlex site"),". To quote the issue, it seemed there were 2 possible solutions to get continuous integration and typescript playing nice:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install TypeScript on the build server"),Object(r.b)("li",{parentName:"ol"},"Copy the required files for Microsoft.TypeScript.targets to a different source-controlled folder and change the path references in the csproj file to this folder.")),Object(r.b)("p",null,"#","1 wasn't an option for us - we couldn't install on the build server. And covering both #1 and #2, I wasn't particularly inclined to kick off builds on the build server since I was wary of ",Object(r.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1432"},"reported problems with memory leaks")," etc with the TS compiler. I may feel differently later when TS is no longer in Alpha and has stabilised but it didn't seem like the right time."),Object(r.b)("h2",{id:"a-solution"},"A solution"),Object(r.b)("p",null,"So, to sum up, what I wanted was to be able to compile TypeScript in Visual Studio on my machine, and indeed in VS on the machine of anyone else working on the project. But I ","*",Object(r.b)("strong",{parentName:"p"},"didn't"),"*"," want TypeScript compilation to be part of the build process on the server."),Object(r.b)("p",null,"The solution in the end was pretty simple - I replaced the ",Object(r.b)("inlineCode",{parentName:"p"},".csproj")," changes with the code below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup Condition=\"'$(Configuration)' == 'Debug'\">\n    <TypeScriptTarget>ES5</TypeScriptTarget>\n    <TypeScriptRemoveComments>false</TypeScriptRemoveComments>\n    <TypeScriptSourceMap>false</TypeScriptSourceMap>\n    <TypeScriptModuleKind>AMD</TypeScriptModuleKind>\n    <TypeScriptNoImplicitAny>true</TypeScriptNoImplicitAny>\n  </PropertyGroup>\n  <PropertyGroup Condition=\"'$(Configuration)' == 'Release'\">\n    <TypeScriptTarget>ES5</TypeScriptTarget>\n    <TypeScriptRemoveComments>false</TypeScriptRemoveComments>\n    <TypeScriptSourceMap>false</TypeScriptSourceMap>\n    <TypeScriptModuleKind>AMD</TypeScriptModuleKind>\n    <TypeScriptNoImplicitAny>true</TypeScriptNoImplicitAny>\n  </PropertyGroup>\n  <Import Project=\"$(VSToolsPath)\\TypeScript\\Microsoft.TypeScript.targets\" Condition=\"Exists('$(VSToolsPath)\\TypeScript\\Microsoft.TypeScript.targets')\" />\n")),Object(r.b)("p",null,"What this does is enable TypeScript compilation ","*",Object(r.b)("strong",{parentName:"p"},"only"),"*"," if TypeScript is installed. So when I'm busy developing with Visual Studio on my machine with the plugin installed I can compile TypeScript. But when I check in the TypeScript compilation is ","*",Object(r.b)("strong",{parentName:"p"},"not"),"*"," performed on the build server. This is because TypeScript is not installed on the build server and we are only compiling if it is installed. (Just to completely labour the point.)"),Object(r.b)("h2",{id:"final-thoughts"},"Final thoughts"),Object(r.b)("p",null,"I do consider this an interim solution. As I mentioned earlier, when TypeScript has stabilised I think I'd like TS compilation to be part of the build process. Like with any other code I think compiling on check-in to catch bugs early is an excellent idea. But I think I'll wait until there's some clearer guidance on the topic from the TypeScript team before I take this step."))}s.isMDXComponent=!0}}]);
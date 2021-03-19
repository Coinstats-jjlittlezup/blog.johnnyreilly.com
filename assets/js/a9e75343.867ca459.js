(window.webpackJsonp=window.webpackJsonp||[]).push([[738],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},864:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(1170)),i={title:"TFS 2012, .NET 4.5 and C# 6",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["C# 6",".Net 4.5","TFS 2012"],hide_table_of_contents:!1},l={permalink:"/2016/02/01/tfs-2012-net-45-and-c-6",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-02-01-tfs-2012-net-45-and-c-6.md",source:"@site/blog/2016-02-01-tfs-2012-net-45-and-c-6.md",description:"So, you want to use C# 6 language features and you\u2019re working on an older project that\u2019s still rocking .NET 4.5. Well, with some caveats, you can.",date:"2016-02-01T00:00:00.000Z",formattedDate:"February 1, 2016",tags:[{label:"C# 6",permalink:"/tags/c-6"},{label:".Net 4.5",permalink:"/tags/net-4-5"},{label:"TFS 2012",permalink:"/tags/tfs-2012"}],title:"TFS 2012, .NET 4.5 and C# 6",readingTime:.86,truncated:!1,prevItem:{title:"Visual Studio, tsconfig.json and external TypeScript compilation",permalink:"/2016/02/19/visual-studio-tsconfigjson-and-external"},nextItem:{title:"Coded UI and the Curse of the Docking Station",permalink:"/2016/01/14/coded-ui-and-curse-of-docking-station"}},c=[],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So, you want to use C# 6 language features and you\u2019re working on an older project that\u2019s still rocking .NET 4.5. Well, with ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/28921749/761388"},"some caveats"),", you can."),Object(a.b)("p",null," The new compiler will compile targeting older framework versions. Well that\u2019s all lovely; let\u2019s all go home."),Object(a.b)("p",null,"Now. What say you\u2019ve got an old, old build server? It\u2019s TFS 2012 Update 2, creaking away, still glad to alive and kind of wondering why it hasn\u2019t been upgraded or retired. This is where you want to compile .NET 4.5 from C# 6. Well it can be done. Here\u2019s how it\u2019s done:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install Visual Studio 2015 on the build server (I\u2019m told this can be achieved using ",Object(a.b)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/download/details.aspx?id=48159"},"Microsoft Build Tools 2015")," but I haven\u2019t tried it myelf so caveat emptor)"),Object(a.b)("li",{parentName:"ol"},"set the ",Object(a.b)("inlineCode",{parentName:"li"},"MSBuild Arguments")," in the build definition to ",Object(a.b)("inlineCode",{parentName:"li"},"/p:VisualStudioVersion=14.0")," (i.e. Visual Studio 2015 mode) ",Object(a.b)("img",{parentName:"li",src:"http://4.bp.blogspot.com/-QBbNPXyPeHM/VquGppTit4I/AAAAAAAAA5U/myurEeB4Kdo/s640/EditBuildConfiguration.png",alt:null}))),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"in each project that uses C# 6 syntax, install the NuGet package ",Object(a.b)("a",{parentName:"li",href:"https://www.nuget.org/packages/Microsoft.Net.Compilers"},"Microsoft.Net.Compilers")," with a quick ",Object(a.b)("inlineCode",{parentName:"li"},"install-package Microsoft.Net.Compilers"))),Object(a.b)("p",null,"That\u2019s it; huzzah! String interpolation here I come\u2026"))}u.isMDXComponent=!0}}]);
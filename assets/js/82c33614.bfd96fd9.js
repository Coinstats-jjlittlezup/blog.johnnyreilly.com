(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(8),i=(n(0),n(1170)),a={title:"Setting Build Version Using AppVeyor and ASP.Net Core",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["powershell","Version","dot net core","AppVeyor"],hide_table_of_contents:!1},l={permalink:"/2017/04/25/setting-build-version-using-appveyor",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-04-25-setting-build-version-using-appveyor.md",source:"@site/blog/2017-04-25-setting-build-version-using-appveyor.md",description:"AppVeyor has support for setting the version of a binary during a build. However - this deals with the classic ASP.Net world of AssemblyInfo. I didn't find any reference to support for doing the same with dot net core. Remember, dot net core relies upon a &lt;Version&gt; or a &lt;VersionPrefix&gt; setting in the .csproj file. Personally, &lt;Version&gt; is my jam.",date:"2017-04-25T00:00:00.000Z",formattedDate:"April 25, 2017",tags:[{label:"powershell",permalink:"/tags/powershell"},{label:"Version",permalink:"/tags/version"},{label:"dot net core",permalink:"/tags/dot-net-core"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],title:"Setting Build Version Using AppVeyor and ASP.Net Core",readingTime:1.025,truncated:!1,prevItem:{title:"TypeScript: Spare the Rod, Spoil the Code",permalink:"/2017/05/20/typescript-spare-rod-spoil-code"},nextItem:{title:"I'm looking for work!",permalink:"/2017/03/30/im-looking-for-work"}},p=[],s={toc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"AppVeyor has ",Object(i.b)("a",{parentName:"p",href:"https://www.appveyor.com/docs/build-configuration/#assemblyinfo-patching"},"support for setting the version of a binary during a build"),". However - this deals with the classic ASP.Net world of ",Object(i.b)("inlineCode",{parentName:"p"},"AssemblyInfo"),". I didn't find any reference to support for doing the same with dot net core. Remember, dot net core ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/articles/core/tools/project-json-to-csproj#version"},"relies upon a ",Object(i.b)("inlineCode",{parentName:"a"},"&lt;Version&gt;")," or a ",Object(i.b)("inlineCode",{parentName:"a"},"&lt;VersionPrefix&gt;")," setting in the ",Object(i.b)("inlineCode",{parentName:"a"},".csproj")," file"),". Personally, ",Object(i.b)("inlineCode",{parentName:"p"},"&lt;Version&gt;")," is my jam."),Object(i.b)("p",null," However, coming up with your own bit of powershell that stamps the version during the build is a doddle; here we go:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ps"},'Param($projectFile, $buildNum)\n\n$content = [IO.File]::ReadAllText($projectFile)\n\n$regex = new-object System.Text.RegularExpressions.Regex (\'(<version>)([\\d]+.[\\d]+.[\\d]+)(.[\\d]+)(<\\/Version>)\', \n         [System.Text.RegularExpressions.RegexOptions]::MultiLine)\n\n$version = $null\n$match = $regex.Match($content)\nif($match.Success) {\n    # from "<version>1.0.0.0</version>" this will extract "1.0.0"\n    $version = $match.groups[2].value\n}\n\n# suffix build number onto $version. eg "1.0.0.15"\n$version = "$version.$buildNum"\n\n# update "<version>1.0.0.0</version>" to "<version>$version</version>"\n$content = $regex.Replace($content, \'${1}\' + $version + \'${4}\')\n\n# update csproj file\n[IO.File]::WriteAllText($projectFile, $content)\n\n# update AppVeyor build\nUpdate-AppveyorBuild -Version $version\n</version>\n')),Object(i.b)("p",null,"You can invoke this script as part of the build process in AppVeyor by adding something like this to your ",Object(i.b)("inlineCode",{parentName:"p"},"appveyor.yml"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"before_build:\n- ps: .\\ModifyVersion.ps1 $env:APPVEYOR_BUILD_FOLDER\\src\\Proverb.Web\\Proverb.Web.csproj $env:APPVEYOR_BUILD_NUMBER\n")),Object(i.b)("p",null,"It will keep the first 3 parts of the version in your ",Object(i.b)("inlineCode",{parentName:"p"},".csproj"),' (eg "1.0.0") and suffix on the build number supplied by AppVeyor.'))}c.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[942],{1189:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?o.a.createElement(h,r(r({ref:t},p),{},{components:n})):o.a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(4),o=n(10),i=(n(0),n(1189)),l={title:"npm please stop hurting Visual Studio",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["rimraf","npm","long paths","Windows"],hide_table_of_contents:!1},r={permalink:"/2015/06/29/npm-please-stop-hurting-visual-studio",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-06-29-npm-please-stop-hurting-visual-studio.md",source:"@site/blog/2015-06-29-npm-please-stop-hurting-visual-studio.md",description:"I don't know about you but I personally feel that the following sentence may well be the saddest in the English language:",date:"2015-06-29T00:00:00.000Z",formattedDate:"June 29, 2015",tags:[{label:"rimraf",permalink:"/tags/rimraf"},{label:"npm",permalink:"/tags/npm"},{label:"long paths",permalink:"/tags/long-paths"},{label:"Windows",permalink:"/tags/windows"}],title:"npm please stop hurting Visual Studio",readingTime:4.495,truncated:!1,prevItem:{title:"Upgrading to Globalize 1.x for Dummies",permalink:"/2015/07/30/upgrading-to-globalize-1x-for-dummies"},nextItem:{title:"Back to the Future with Code First Migrations",permalink:"/2015/06/19/Back-to-the-Future-with-Code-First-Migrations"}},s=[{value:"The Latest Infraction",id:"the-latest-infraction",children:[]},{value:"rimraf to the Rescue",id:"rimraf-to-the-rescue",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I don't know about you but I personally feel that the following sentence may well be the saddest in the English language:"),Object(i.b)("p",null," ",Object(i.b)("inlineCode",{parentName:"p"},"2&gt;ASPNETCOMPILER : error ASPRUNTIME: The specified path, file name, or both are too long. The fully qualified file name must be less than 260 characters, and the directory name must be less than 248 characters.")),Object(i.b)("p",null,"The message above would suggest there is some kind of ASP.Net issue going on. There isn't - the problem actually lies with Windows. It's ",Object(i.b)("a",{parentName:"p",href:"http://blog.icanmakethiswork.io/2014/12/gulp-npm-long-paths-and-visual-studio-fight.html"},"not the first time it's come up")," but for those of you not aware there is something you need to know about Windows: ",Object(i.b)("em",{parentName:"p"},"It handles long paths badly.")),Object(i.b)("p",null,"There's a number of caveats which people may attach the above sentence. But essentially what I have said is true. And it becomes brutally apparent to you the moment you start using a few node / npm powered tools in your workflow. You will likely see that horrible message and you won't be able to get much further forward. Sigh. I thought this was the future..."),Object(i.b)("p",null,"This post is about how to deal with the long path issue when using npm with Visual Studio. This should very much be a short term workaround as ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/npm/releases/tag/v3.0.0"},"npm 3.0")," is planned to make long paths with npm a thing of the past. But until that golden dawn...."),Object(i.b)("h2",{id:"the-latest-infraction"},"The Latest Infraction"),Object(i.b)("p",null,"I'm a big fan of Gulp and Bower. They rock. ",Object(i.b)("a",{parentName:"p",href:"https://twitter.com/codecadwallader"},"Steve Cadwallader")," wrote an excellent blog post about ",Object(i.b)("a",{parentName:"p",href:"http://www.codecadwallader.com/2015/03/15/integrating-gulp-into-your-tfs-builds-and-web-deploy/"},"integrating Gulp into your Visual Studio build"),". Essentially the Gist of his post is this: forget using ",Object(i.b)("a",{parentName:"p",href:"https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708"},"Task Runner Explorer")," to trigger your Gulp / Grunt jobs. No, actually plug it into the build process by tweaking your ",Object(i.b)("inlineCode",{parentName:"p"},".csproj")," file. The first time I used this approach it was a dream come true. It just worked and I was a very happy man."),Object(i.b)("p",null,"Since this approach was so marvellous I took a look at the demo / docs part of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"jQuery Validation Unobtrusive Native")," with a view to applying it there. I originally wrote this back in 2013 and at the time used NuGet for both server and client side package management. I decided to migrate it to use Bower for the client side packages (which I planned to combine with a Gulp script which was going to pull out the required JS / CSS etc as needed). However it wasn't the plain sailing I'd imagined. The actual switchover from NuGet to Bower was simple. Just a case of removing NuGet packages and adding their associated Bower counterpart. The problem came when the migration was done and I hit \"compile\". That's when I got to see ",Object(i.b)("inlineCode",{parentName:"p"},"2&gt;ASPNETCOMPILER : error ASPRUNTIME: The specified path, file name, or both are too long...")," etc"),Object(i.b)("p",null,"For reasons that I don't fully understand, Visual Studio is really upset by the presence in the project structure of one almighty long path. Oddly enough, not a path that's actually part of the Visual Studio project in question at all. Rather one that has come along as a result of our Gulp / Bower / npm shenanigans. Quick as a flash, I whipped out Daniel Schroeder's ",Object(i.b)("a",{parentName:"p",href:"https://pathlengthchecker.codeplex.com/"},"Path Length Checker")," to see where the problem lay:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-uTcT2hLpRyA/VZFIiLX5n8I/AAAAAAAAA3M/lHA0TV2UVOM/s640/bower-with-the-long-paths.png",alt:null})),Object(i.b)("p",null,"And lo, the fault lay with Bower. Poor show, Bower, poor show."),Object(i.b)("h2",{id:"rimraf-to-the-rescue"},"rimraf to the Rescue"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/isaacs/rimraf"},"rimraf"),' is "the ',Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rm_(Unix)"},"UNIX command"),Object(i.b)("inlineCode",{parentName:"p"},"rm -rf"),' for node". (By the way, what is it with node and the pathological hatred of capital letters?)'),Object(i.b)("p",null,"What this means is: rimraf can delete. Properly. So let's get it: ",Object(i.b)("inlineCode",{parentName:"p"},"npm install -g rimraf"),". Then at any time at the command line we can dispose of a long path in 2 shakes of lamb's tail."),Object(i.b)("p",null,"In my current situation the contents of the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folder is causing me heartache. But with rimraf in play I can get rid of it with the magic words: ",Object(i.b)("inlineCode",{parentName:"p"},"rimraf ./node_modules"),". Alakazam! So let's poke this command into the extra commands that I've already shoplifted from Steve's blog post. I'll end up with the following section of XML at the end of my ",Object(i.b)("inlineCode",{parentName:"p"},".csproj"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<PropertyGroup>\n    <CompileDependsOn>\n      $(CompileDependsOn);\n      GulpBuild;\n    </CompileDependsOn>\n    <CleanDependsOn>\n      $(CleanDependsOn);\n      GulpClean\n    </CleanDependsOn>\n    <CopyAllFilesToSingleFolderForPackageDependsOn>\n      CollectGulpOutput;\n      $(CopyAllFilesToSingleFolderForPackageDependsOn);\n    </CopyAllFilesToSingleFolderForPackageDependsOn>\n    <CopyAllFilesToSingleFolderForMsdeployDependsOn>\n      CollectGulpOutput;\n      $(CopyAllFilesToSingleFolderForPackageDependsOn);\n    </CopyAllFilesToSingleFolderForMsdeployDependsOn>\n  </PropertyGroup>\n  <Target Name="GulpBuild">\n    <Exec Command="npm install" />\n    <Exec Command="bower install" />\n    <Exec Command="gulp" />\n    <Exec Command="rimraf ./node_modules" />\n  </Target>\n  <Target Name="GulpClean">\n    <Exec Command="npm install" />\n    <Exec Command="gulp clean" />\n    <Exec Command="rimraf ./node_modules" />\n  </Target>\n  <Target Name="CollectGulpOutput">\n    <ItemGroup>\n      <_CustomFiles Include="build\\**\\*" />\n      <FilesForPackagingFromProject Include="%(_CustomFiles.Identity)">\n        <DestinationRelativePath>build\\%(RecursiveDir)%(Filename)%(Extension)</DestinationRelativePath>\n      </FilesForPackagingFromProject>\n    </ItemGroup>\n    <Message Text="CollectGulpOutput list: %(_CustomFiles.Identity)" />\n  </Target>\n')),Object(i.b)("p",null,"So let's focus on the important bits in the ",Object(i.b)("inlineCode",{parentName:"p"},"GulpBuild")," target:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'&lt;Exec Command="npm install" /&gt;')," ","-"," install the node packages our project uses as specified in ",Object(i.b)("inlineCode",{parentName:"li"},"package.json"),". This will include Gulp and Bower. The latter package is going to contain super-long, Windows wrecking paths."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'&lt;Exec Command="bower install" /&gt;')," ","-"," install the bower packages specified in ",Object(i.b)("inlineCode",{parentName:"li"},"bower.json")," using Bower (which was installed by npm just now)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'&lt;Exec Command="gulp" /&gt;')," ","-"," do a little dance, make a little love, copy a few files, get down tonight."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'&lt;Exec Command="rimraf ./node_modules" /&gt;')," ","-"," remove the ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," folder populated by the ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")," command.")),Object(i.b)("p",null,"With that addition of ",Object(i.b)("inlineCode",{parentName:"p"},"rimraf ./node_modules")," to the build phase the problem goes away. During each build a big, big Windows path is being constructed but then it's wiped again before it has chance to upset anyone. I've also added the same to the ",Object(i.b)("inlineCode",{parentName:"p"},"GulpClean")," target."),Object(i.b)("p",null,"You are very welcome."))}u.isMDXComponent=!0}}]);
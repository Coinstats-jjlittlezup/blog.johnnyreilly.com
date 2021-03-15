(window.webpackJsonp=window.webpackJsonp||[]).push([[706],{1166:function(e,t,o){"use strict";o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return d}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(o),m=n,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return o?a.a.createElement(d,r(r({ref:t},c),{},{components:o})):a.a.createElement(d,r({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var c=2;c<i;c++)s[c]=o[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},214:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return p}));var n=o(3),a=o(8),i=(o(0),o(1166)),s={title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["wget","powershell","github pages","AppVeyor"],hide_table_of_contents:!1},r={permalink:"/2014/12/29/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-12-29-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1.md",source:"@site/blog/2014-12-29-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1.md",description:"There's a small open source project I'm responsible for called jQuery Validation Unobtrusive Native. (A catchy name is a must for any good open source project. Alas I'm not quite meeting my own exacting standards on this particular point... I should have gone with my gut and called it \"Livingstone\" instead. Too late now...)",date:"2014-12-29T00:00:00.000Z",formattedDate:"December 29, 2014",tags:[{label:"wget",permalink:"/tags/wget"},{label:"powershell",permalink:"/tags/powershell"},{label:"github pages",permalink:"/tags/github-pages"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",readingTime:5.805,truncated:!1,prevItem:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",permalink:"/2015/01/07/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2"},nextItem:{title:"Gulp, npm, long paths and Visual Studio.... Fight!",permalink:"/2014/12/12/gulp-npm-long-paths-and-visual-studio-fight"}},l=[{value:"I&#39;m quite cheap",id:"im-quite-cheap",children:[]},{value:"You Wget me?",id:"you-wget-me",children:[]}],c={toc:l};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There's a small open source project I'm responsible for called ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"jQuery Validation Unobtrusive Native"),'. (A catchy name is a must for any good open source project. Alas I\'m not quite meeting my own exacting standards on this particular point... I should have gone with my gut and called it "Livingstone" instead. Too late now...)'),Object(i.b)("p",null," The project itself is fairly simple in purpose. It's essentially a bridge between ASP.Net MVC's inbuilt support for driving validation from data attributes and jQuery Validation's native support for the same. It is, in the end, a collection of ASP.Net MVC HTML helper extensions. It is not massively complicated."),Object(i.b)("p",null,'I believe it was Tony Blair that said "documentation, documentation, documentation" were his priorities for open source projects. Or maybe it was someone else... Anyway, the point stands. Documentation is supremely important if you want your project to be in any way useful to anyone other than yourself. A project, no matter how fantastic, which lacks decent documentation is a missed opportunity.'),Object(i.b)("p",null,"Anyway I'm happy to say that jQuery Validation Unobtrusive Native ",Object(i.b)("em",{parentName:"p"},"has")," documentation! And pretty good documentation at that. The documentation takes the form of the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/tree/master/jVUNDemo"},"jVUNDemo")," project which is part of the jQuery Validation Unobtrusive Native repo. jVUNDemo is an ASP.Net MVC web application which is built on top of the jQuery Validation Unobtrusive Native helpers. It demonstrates the helpers in action and documents how you might go about using them. It looks a bit like this:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://1.bp.blogspot.com/-5p7fD3Q9dc8/VKDzTV1wYDI/AAAAAAAAAxE/LowxrVAxeXI/s1600/Screenshot%2B2014-12-29%2B06.22.46.png"},Object(i.b)("img",{parentName:"a",src:"http://1.bp.blogspot.com/-5p7fD3Q9dc8/VKDzTV1wYDI/AAAAAAAAAxE/LowxrVAxeXI/s640/Screenshot%2B2014-12-29%2B06.22.46.png",alt:"null"})),"When I first put jVUNDemo together I hosted it on Azure so the world could see it in all it's finery. And that worked just fine. However, there's something you ought to know about me:"),Object(i.b)("h2",{id:"im-quite-cheap"},"I'm quite cheap"),Object(i.b)("p",null,'No really, I am. My attention was grabbed by the essentially "free" nature of ',Object(i.b)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages"),". I was immediately seized by the desire to somehow deploy jVUNDemo to GitHub Pages and roll around joyfully in all that lovely free hosting."),Object(i.b)("p",null,'"But", I hear you cry, "you can\'t deploy an ASP.Net MVC application to Git Hub Pages... It only hosts static sites!" Quite right. Sort of. This is where I get to pull my ace of spades: jVUNDemo is not really an "app" so much as a static site. Yup, once the HTML that makes up each page is generated there isn\'t any app like business to do. It\'s just a collection of text and 1 screen demo\'s really.'),Object(i.b)("p",null,"That being the case, there's no reason why I shouldn't be able to make use of GitHub Pages. So that's what I decided to do. Whilst I was at it I also wanted to automate the deployment process. When I tweak jVUNDemo I don't want to have to manually push out a new version of jVUNDemo to wherever it's being hosted. No, I'm a developer so I'll automate it."),Object(i.b)("p",null,"I've broken this up into 2 posts. This first one will cover how you generate a static site from an ASP.Net MVC site. The second will be about how to use ",Object(i.b)("a",{parentName:"p",href:"http://www.appveyor.com/"},"AppVeyor")," to ensure that on each build your documentation is getting republished."),Object(i.b)("h2",{id:"you-wget-me"},"You Wget me?"),Object(i.b)("p",null,"So, static site generation. There's a well known Unix utility called ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wget"},"Wget"),' which covers exactly that ground and so we\'re going to use it. It downloads and saves HTML, it recursively walks the links inside the site and grabs those pages too and it converts our routes so they are locally browsable ("Demo/Required" becomes "Demo/Required.html").'),Object(i.b)("p",null,"You can use ",Object(i.b)("a",{parentName:"p",href:"https://chocolatey.org/packages/Wget"},"Chocolatey")," to get a copy of Wget. We're also going to need IIS Express to host jVUNDemo whilst Wget converts it. Once jVUNDemo has been built successfully you should be be able to kick off the process like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ps"},"cd C:\\projects\\jquery-validation-unobtrusive-native\n.\\makeStatic.ps1 $pwd.path\n")),Object(i.b)("p",null,"This invokes the ",Object(i.b)("inlineCode",{parentName:"p"},"makeStatic")," Powershell script in the root of the jQuery Validation Unobtrusive Native repo:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ps"},'param([string]$buildFolder)\n\n$jVUNDemo = "$($buildFolder)\\jVUNDemo"\n$staticSiteParentPath = (get-item $buildFolder).Parent.FullName\n$staticSite = "static-site"\n$staticSitePath = "$($staticSiteParentPath)\\$($staticSite)"\n$wgetLogPath = "$($staticSiteParentPath)\\wget.log"\n$port = 57612\n$servedAt = "http://localhost:$($port)/"\nwrite-host "jVUNDemo location: $jVUNDemo"\nwrite-host "static site parent location: $staticSiteParentPath"\nwrite-host "static site location: $staticSitePath"\nwrite-host "wget log path: $wgetLogPath"\n\nwrite-host "Spin up jVUNDemo site at $($servedAt)"\n$process = Start-Process \'C:\\Program Files (x86)\\IIS Express\\iisexpress.exe\' -NoNewWindow -ArgumentList "/path:$($jVUNDemo) /port:$($port)"\n\nwrite-host "Wait a moment for IIS to startup"\nStart-sleep -s 15\n\nif (Test-Path $staticSitePath) { \n    write-host "Removing $($staticSitePath)..."\n    Remove-Item -path $staticSitePath -Recurse -Force\n}\n\nwrite-host "Create static version of demo site here: $($staticSitePath)"\nPush-Location $staticSiteParentPath\n# 2>&1 used to combine stderr and stdout\nwget.exe --recursive --convert-links -E --directory-prefix=$staticSite --no-host-directories $servedAt > $wgetLogPath 2>&1\nwrite-host "lastExitCode: $($lastExitCode)"\ncat $wgetLogPath\nPop-Location\n\nwrite-host "Shut down jVUNDemo site"\nstop-process -Name iisexpress\n\nif (Test-Path $staticSitePath) { \n    write-host "Contents of $($staticSitePath)"\n    ls $staticSitePath\n}\n')),Object(i.b)("p",null,"The above Powershell does the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Starts up IIS Express serving jVUNDemo on http://localhost:57612/"),Object(i.b)("li",{parentName:"ol"},"Waits 15 seconds for IIS Express to get itself together (probably a shorter wait time would be sufficient)"),Object(i.b)("li",{parentName:"ol"},'Points Wget at jVUNDemo and bellows "go!!!!"'),Object(i.b)("li",{parentName:"ol"},'Wget downloads and saves the static version of jVUNDemo to a directory called "static-site"'),Object(i.b)("li",{parentName:"ol"},"Stops IIS Express"),Object(i.b)("li",{parentName:"ol"},'Prints out the contents of the "static-site" directory')),Object(i.b)("p",null,"When run, it pumps something like this out:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"jVUNDemo location: C:\\projects\\jquery-validation-unobtrusive-native\\jVUNDemo \nstatic site parent location: C:\\projects \nstatic site location: C:\\projects\\static-site \nwget log path: C:\\projects\\wget.log \nSpin up jVUNDemo site at http://localhost:57612/ \nWait a moment for IIS to startup \nCreate static version of demo site here: C:\\projects\\static-site \nwget.exe : --2014-12-29 07:49:56--  http://localhost:57612/\nResolving localhost... \n127.0.0.1\nConnecting to localhost|127.0.0.1|:57612... connected.\nHTTP request sent, awaiting response... \n200 OK\n\n..... lots of HTTP requests.....\n\nDownloaded: 30 files, 1.0M in 0.09s (10.8 MB/s)\nConverting static-site/Demo/CreditCard.html... 34-0\nConverting static-site/Demo/Number.html... 34-0\nConverting static-site/Demo/Range.html... 34-0\nConverting static-site/Demo/Email.html... 34-0\nConverting static-site/AdvancedDemo/CustomValidation.html... 35-0\nConverting static-site/Demo/Date.html... 36-0\nConverting static-site/Home/License.html... 27-0\nConverting static-site/index.html... 29-0\nConverting static-site/AdvancedDemo/Dynamic.html... 35-0\nConverting static-site/Demo/MaxLengthMinLength.html... 34-0\nConverting static-site/Demo/Required.html... 34-0\nConverting static-site/AdvancedDemo.html... 32-0\nConverting static-site/Demo/Remote.html... 35-0\nConverting static-site/Demo/EqualTo.html... 34-0\nConverting static-site/AdvancedDemo/Globalize.html... 38-0\nConverting static-site/Demo/Url.html... 34-0\nConverting static-site/Demo.html... 37-0\nConverting static-site/Home/GettingStarted.html... 29-0\nConverting static-site/Home/Download.html... 27-0\nConverting static-site/AdvancedDemo/Tooltip.html... 34-0\nConverted 20 files in 0.03 seconds.\n \nShut down jVUNDemo site \nContents of C:\\projects\\static-site \n \n \n    Directory: C:\\projects\\static-site\n \n \nMode                LastWriteTime     Length Name\n----                -------------     ------ ----\nd----        12/29/2014   7:50 AM            AdvancedDemo\nd----        12/29/2014   7:50 AM            Content\nd----        12/29/2014   7:50 AM            Demo\nd----        12/29/2014   7:50 AM            Home\nd----        12/29/2014   7:50 AM            Scripts\n-a---        12/29/2014   7:50 AM       5967 AdvancedDemo.html\n-a---        12/29/2014   7:50 AM       6802 Demo.html\n-a---        12/29/2014   7:47 AM      12862 favicon.ico\n-a---        12/29/2014   7:50 AM       8069 index.html\n")),Object(i.b)("p",null,"And that's it for part 1 my friends! You now have a static version of the ASP.Net MVC site to dazzle the world with. I should say for the purposes of full disclosure that there are 2 pages in the site which are not entirely \"static\" friendly. For these 2 pages I've put messages in that are displayed when the page is served up in a static format explaining the limitations. Their full glory can still be experienced by cloning the project and running locally."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2015/01/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2.html"},"Next time")," we'll take the mechanism detailed above and plug it into AppVeyor for some Continuous Integration happiness."))}p.isMDXComponent=!0}}]);
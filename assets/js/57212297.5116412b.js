(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{1210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,m=u["".concat(r,".").concat(b)]||u[b]||h[b]||i;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(4),o=n(10),i=(n(0),n(1210)),r={title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["GitHub Personal Access Token","Continuous Integration","powershell","github pages","AppVeyor"],hide_table_of_contents:!1},s={permalink:"/2015/01/07/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-01-07-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2.md",source:"@site/blog/2015-01-07-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2.md",title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",description:'"Automation, automation, automation." Those were and are Tony Blair\'s priorities for keeping open source projects well maintained.',date:"2015-01-07T00:00:00.000Z",formattedDate:"January 7, 2015",tags:[{label:"GitHub Personal Access Token",permalink:"/tags/git-hub-personal-access-token"},{label:"Continuous Integration",permalink:"/tags/continuous-integration"},{label:"powershell",permalink:"/tags/powershell"},{label:"github pages",permalink:"/tags/github-pages"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],readingTime:4.8,truncated:!1,prevItem:{title:"TypeScript: In Praise of Union Types",permalink:"/2015/01/20/typescript-using-functions-with-union-types"},nextItem:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",permalink:"/2014/12/29/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1"}},l=[{value:"GitHub Personal Access Token",id:"github-personal-access-token",children:[]},{value:"<code>appveyor.yml</code>",id:"appveyoryml",children:[]},{value:"<code>pushStatic.ps1</code>",id:"pushstaticps1",children:[]}],p={toc:l};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'"Automation, automation, automation." Those were and are Tony Blair\'s priorities for keeping open source projects well maintained.'),Object(i.b)("p",null," OK, that's not quite true... But what is certainly true is that maintaining an open source project takes time. And there's only so much free time that anyone has. For that reason, wherever you can it makes sense to ",Object(i.b)("em",{parentName:"p"},"AUTOMATE"),"!"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2014/12/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1.html"},"Last time")," we looked at how you can take an essentially static ASP.Net MVC site (in this case my jVUNDemo documentation site) and generate an entirely static version using Wget. This static site has been pushed to ",Object(i.b)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages")," and is serving as the documentation for ",Object(i.b)("a",{parentName:"p",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/"},"jQuery Validation Unobtrusive Native")," (and for bonus points is costing me no money at all)."),Object(i.b)("p",null,"So what next? Well, automation clearly! If I make a change to jQuery Validation Unobtrusive Native then AppVeyor already bounds in and performs a ",Object(i.b)("a",{parentName:"p",href:"https://ci.appveyor.com/project/JohnReilly/jquery-validation-unobtrusive-native"},"continuous integration build")," for me. It picks up the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"latest source")," from GitHub, pulls in my dependencies, performs a build and runs my tests. Lovely."),Object(i.b)("p",null,"So the obvious thing to do is to take this process and plug in the generation of my static site and the publication thereof to GitHub pages. The minute a change is made to my project the documentation should be updated without me having to break sweat. That's the goal."),Object(i.b)("h2",{id:"github-personal-access-token"},"GitHub Personal Access Token"),Object(i.b)("p",null,"In order to complete our chosen mission we're going to need a GitHub Personal Access Token. We're going to use it when we clone, update and push our GitHub Pages branch. To get one we biff over to Settings / Applications in GitHub and click the \"Generate New Token\" button."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-TN1tTkL_eoQ/VKwQfPn8_JI/AAAAAAAAAyI/EeF6XLcP8dg/s640/GitHubApplicationSettings.png",alt:null})),Object(i.b)("p",null,"The token I'm using for my project has the following scopes selected:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-2hsSnmHy_DY/VKwQo7MM0BI/AAAAAAAAAyQ/c5ZAT_mZi5w/s640/GitHub%2BPersonal%2BAccess%2BToken.png",alt:null})),Object(i.b)("h2",{id:"appveyoryml"},Object(i.b)("inlineCode",{parentName:"h2"},"appveyor.yml")),Object(i.b)("p",null,"With our token in hand we turn our attention to AppVeyor build configuration. This is possible using a file called ",Object(i.b)("a",{parentName:"p",href:"http://www.appveyor.com/docs/build-configuration"},Object(i.b)("inlineCode",{parentName:"a"},"appveyor.yml"))," stored in the root of your repo. You can also use the AppVeyor web UI to do this. However, for the purposes of ease of demonstration I'm using the file approach. The ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/appveyor.yml"},"jQuery Validation Unobtrusive Native ",Object(i.b)("inlineCode",{parentName:"a"},"appveyor.yml"))," looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"#---------------------------------#\n#      general configuration      #\n#---------------------------------#\n\n# version format\nversion: 1.0.{build}\n\n#---------------------------------#\n#    environment configuration    #\n#---------------------------------#\n\n# environment variables\nenvironment:\n  GithubEmail: johnny_reilly@hotmail.com\n  GithubUsername: johnnyreilly\n  GithubPersonalAccessToken:\n    secure: T4M/N+e/baksVoeWoYKPWIpfahOsiSFw/+Zc81VuThZmWEqmrRtgEHUyin0vCWhl    \n\nbranches:\n  only:\n    - master\n\ninstall:\n- ps: choco install wget\n\nbuild:\n  verbosity: minimal\n\nafter_test:\n- ps: ./makeStatic.ps1 $env:APPVEYOR_BUILD_FOLDER\n- ps: ./pushStatic.ps1 $env:APPVEYOR_BUILD_FOLDER $env:GithubEmail $env:GithubUsername $env:GithubPersonalAccessToken\n")),Object(i.b)("p",null,"There's a number of things you should notice from the yml file:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We create 3 environment variables: GithubEmail, GithubUsername and GithubPersonalAccessToken (more on this in a moment)."),Object(i.b)("li",{parentName:"ul"},"We only build the master branch."),Object(i.b)("li",{parentName:"ul"},"We use ",Object(i.b)("a",{parentName:"li",href:"https://chocolatey.org/packages/Wget"},"Chocolatey")," to install Wget which is used by the ",Object(i.b)("inlineCode",{parentName:"li"},"makeStatic.ps1")," Powershell script."),Object(i.b)("li",{parentName:"ul"},"After the tests have completed we run 2 Powershell scripts. First ",Object(i.b)("inlineCode",{parentName:"li"},'<a href="https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/makeStatic.ps1">makeStatic.ps1</a>')," which builds the static version of our site. This is the exact same script we discussed in the previous post - we're just passing it the build folder this time (one of AppVeyor's environment variables). Second, we run ",Object(i.b)("inlineCode",{parentName:"li"},'<a href="https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/pushStatic.ps1">pushStatic.ps1</a>')," which publishes the static site to GitHub Pages.")),Object(i.b)("p",null,"We pass 4 arguments to ",Object(i.b)("inlineCode",{parentName:"p"},"pushStatic.ps1"),": the build folder, my email address, my username and my personal access token. For the sake of security the GithubPersonalAccessToken has been encrypted as indicated by the ",Object(i.b)("inlineCode",{parentName:"p"},"secure")," keyword. This is a capability available in AppVeyor ",Object(i.b)("a",{parentName:"p",href:"https://ci.appveyor.com/tools/encrypt"},"here"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-rQcNQPu2ass/VKwRC0QbQTI/AAAAAAAAAyY/8a8Qf5DGapA/s640/AppVeyor%2Bencrypt.png",alt:null})),Object(i.b)("p",null,"This allows me to mask my personal access token rather than have it available as free text for anyone to grab."),Object(i.b)("h2",{id:"pushstaticps1"},Object(i.b)("inlineCode",{parentName:"h2"},"pushStatic.ps1")),Object(i.b)("p",null,"Finally we can turn our attention to how our Powershell script ",Object(i.b)("inlineCode",{parentName:"p"},"pushStatic.ps1")," goes about pushing our changes up to GitHub Pages:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ps"},'param([string]$buildFolder, [string]$email, [string]$username, [string]$personalAccessToken)\n\nWrite-Host "- Set config settings...."\ngit config --global user.email $email\ngit config --global user.name $username\ngit config --global push.default matching\n\nWrite-Host "- Clone gh-pages branch...."\ncd "$($buildFolder)\\..\\"\nmkdir gh-pages\ngit clone --quiet --branch=gh-pages https://$($username):$($personalAccessToken)@github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native.git .\\gh-pages\\\ncd gh-pages\ngit status\n\nWrite-Host "- Clean gh-pages folder...."\nGet-ChildItem -Attributes !r | Remove-Item -Recurse -Force\n\nWrite-Host "- Copy contents of static-site folder into gh-pages folder...."\ncopy-item -path ..\\static-site\\* -Destination $pwd.Path -Recurse\n\ngit status\n$thereAreChanges = git status | select-string -pattern "Changes not staged for commit:","Untracked files:" -simplematch\nif ($thereAreChanges -ne $null) { \n    Write-host "- Committing changes to documentation..."\n    git add --all\n    git status\n    git commit -m "skip ci - static site regeneration"\n    git status\n    Write-Host "- Push it...."\n    git push --quiet\n    Write-Host "- Pushed it good!"\n} \nelse { \n    write-host "- No changes to documentation to commit"\n}\n')),Object(i.b)("p",null,"So what's happening here? Let's break it down:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Git is configured with the passed in username and email address."),Object(i.b)("li",{parentName:"ul"},'A folder is created that sits alongside the build folder called "gh-pages".'),Object(i.b)("li",{parentName:"ul"},'We clone the "gh-pages" branch of jQuery Validation Unobtrusive Native into our "gh-pages" directory. You\'ll notice that we are using our GitHub personal access token in the clone URL itself.'),Object(i.b)("li",{parentName:"ul"},'We delete the contents of the "gh-pages" directory leaving it empty.'),Object(i.b)("li",{parentName:"ul"},'We copy across the contents of the "static-site" folder (created by ',Object(i.b)("inlineCode",{parentName:"li"},"makeStatic.ps1"),') into the "gh-pages".'),Object(i.b)("li",{parentName:"ul"},"We use ",Object(i.b)("inlineCode",{parentName:"li"},"git status")," to check if there are any changes. (This method is completely effective but a little crude to my mind - there's probably better approaches to this.... shout me in the comments if you have a suggestion.)"),Object(i.b)("li",{parentName:"ul"},"If we have no changes then we do nothing."),Object(i.b)("li",{parentName:"ul"},"If we have changes then we stage them, commit them and push them to GitHub Pages. Then we sign off with an allusion to ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Push_It_(Salt-n-Pepa_song)"},"80's East Coast hip-hop"),"... 'Cos that's how we roll.")),Object(i.b)("p",null,'With this in place, any changes to the docs will be automatically published out to our "gh-pages" branch. Our documentation will always be up to date thanks to the goodness of AppVeyor\'s Continuous Integration service.'))}c.isMDXComponent=!0}}]);
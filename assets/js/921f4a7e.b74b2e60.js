(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{1160:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(i,".").concat(m)]||c[m]||h[m]||o;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},710:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),o=(n(0),n(1160)),i={title:"Running JavaScript Unit Tests in AppVeyor",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Jasmine","javascript","Unit tests","Continuous Integration","AppVeyor","Chutzpah"],hide_table_of_contents:!1},s={permalink:"/2014/09/06/running-javascript-unit-tests-in-appveyor",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-09-06-running-javascript-unit-tests-in-appveyor.md",source:"@site/blog/2014-09-06-running-javascript-unit-tests-in-appveyor.md",description:"With a little help from Chutzpah...",date:"2014-09-06T00:00:00.000Z",formattedDate:"September 6, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"javascript",permalink:"/tags/javascript"},{label:"Unit tests",permalink:"/tags/unit-tests"},{label:"Continuous Integration",permalink:"/tags/continuous-integration"},{label:"AppVeyor",permalink:"/tags/app-veyor"},{label:"Chutzpah",permalink:"/tags/chutzpah"}],title:"Running JavaScript Unit Tests in AppVeyor",readingTime:2.965,truncated:!1,prevItem:{title:"Unit Testing an Angular Controller with Jasmine",permalink:"/2014/09/10/unit-testing-angular-controller-with"},nextItem:{title:"My Unrequited Love for Isolate Scope",permalink:"/2014/08/12/my-unrequited-love-for-isolate-scope"}},p=[{value:"With a little help from Chutzpah...",id:"with-a-little-help-from-chutzpah",children:[]},{value:"NuGet me?",id:"nuget-me",children:[]},{value:"Now to use Chutzpah",id:"now-to-use-chutzpah",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"with-a-little-help-from-chutzpah"},"With a little help from Chutzpah..."),Object(o.b)("p",null," ",Object(o.b)("a",{parentName:"p",href:"http://www.appveyor.com"},"AppVeyor")," (if you're not aware of it) is a Continuous Integration provider. If you like, it's plug-and-play CI for .NET developers. It's lovely. And what's more it's ",Object(o.b)("a",{parentName:"p",href:"http://www.appveyor.com/pricing"},'"free for open-source projects with public repositories hosted on GitHub and BitBucket"'),". Boom! I recently hooked up 2 of my GitHub projects with AppVeyor. It took me all of... 10 minutes. If that? It really is ","*",Object(o.b)("strong",{parentName:"p"},"that"),"*"," good."),Object(o.b)("p",null,"But.... There had to be a \"but\" otherwise I wouldn't have been writing the post you're reading. For a little side project of mine called ",Object(o.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Proverb"},"Proverb")," there were C# unit tests and there were JavaScript unit tests. And the JavaScript unit tests weren't being run... No fair!!!"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://chutzpah.codeplex.com/"},"Chutzpah")," is a JavaScript test runner which at this point runs QUnit, Jasmine and Mocha JavaScript tests. I use the ",Object(o.b)("a",{parentName:"p",href:"http://visualstudiogallery.msdn.microsoft.com/f8741f04-bae4-4900-81c7-7c9bfb9ed1fe"},"Visual Studio extension")," to run Jasmine tests on my machine during development. I've also been able to use ",Object(o.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2014/03/the-surprisingly-happy-tale-of-visual.html"},"Chutzpah for CI purposes with Visual Studio Online / Team Foundation Server"),". So what say we try and do the triple and make it work with AppVeyor too?"),Object(o.b)("h2",{id:"nuget-me"},"NuGet me?"),Object(o.b)("p",null,"In order that I could run Chutzpah I needed Chutzpah to be installed on the build machine. So I had 2 choices:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add Chutzpah direct to the repo"),Object(o.b)("li",{parentName:"ol"},"Add the ",Object(o.b)("a",{parentName:"li",href:"http://www.nuget.org/packages/chutzpah"},"Chutzpah Nuget package")," to the solution")),Object(o.b)("p",null,"Unsurprisingly I chose #2 - much cleaner."),Object(o.b)("h2",{id:"now-to-use-chutzpah"},"Now to use Chutzpah"),Object(o.b)("p",null,'Time to dust down the PowerShell. I created myself a "before tests script" and added it to my build. It looked a little something like this:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ps"},'# Locate Chutzpah\n\n$ChutzpahDir = get-childitem chutzpah.console.exe -recurse | select-object -first 1 | select -expand Directory\n\n# Run tests using Chutzpah and export results as JUnit format to chutzpah-results.xml\n\n$ChutzpahCmd = "$($ChutzpahDir)\\chutzpah.console.exe $($env:APPVEYOR_BUILD_FOLDER)\\AngularTypeScript\\Proverb.Web.Tests.JavaScript /junit .\\chutzpah-results.xml"\nWrite-Host $ChutzpahCmd\nInvoke-Expression $ChutzpahCmd\n\n# Upload results to AppVeyor one by one\n\n$testsuites = [xml](get-content .\\chutzpah-results.xml)\n\n$anyFailures = $FALSE\nforeach ($testsuite in $testsuites.testsuites.testsuite) {\n    write-host " $($testsuite.name)"\n    foreach ($testcase in $testsuite.testcase){\n        $failed = $testcase.failure\n        $time = $testsuite.time\n        if ($testcase.time) { $time = $testcase.time }\n        if ($failed) {\n            write-host "Failed   $($testcase.name) $($testcase.failure.message)"\n            Add-AppveyorTest $testcase.name -Outcome Failed -FileName $testsuite.name -ErrorMessage $testcase.failure.message -Duration $time\n            $anyFailures = $TRUE\n        }\n        else {\n            write-host "Passed   $($testcase.name)"\n            Add-AppveyorTest $testcase.name -Outcome Passed -FileName $testsuite.name -Duration $time\n        }\n\n    }\n}\n\nif ($anyFailures -eq $TRUE){\n    write-host "Failing build as there are broken tests"\n    $host.SetShouldExit(1)\n}\n')),Object(o.b)("p",null,"What this does is:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run Chutzpah from the installed NuGet package location, passing in the location of my Jasmine unit tests. In the case of my project there is a ",Object(o.b)("inlineCode",{parentName:"li"},"chutzpah.json")," file in the project which dictates how Chutzpah should run the tests. Also, ",Object(o.b)("a",{parentName:"li",href:"https://chutzpah.codeplex.com/wikipage?title=Command%20Line%20Options&referringTitle=Documentation"},"the JUnit flag is also passed")," in order that Chutzpah creates a ",Object(o.b)("inlineCode",{parentName:"li"},"chutzpah-results.xml")," file of test results in the JUnit format."),Object(o.b)("li",{parentName:"ol"},"We iterate through test results and tell AppVeyor about the the test passes and failures using the ",Object(o.b)("a",{parentName:"li",href:"http://www.appveyor.com/docs/build-worker-api"},"Build Worker API"),"."),Object(o.b)("li",{parentName:"ol"},"If there have been any failed tests then we fail the build. If you look ",Object(o.b)("a",{parentName:"li",href:"https://ci.appveyor.com/project/JohnReilly/proverb/build/1.0.17"},"here")," you can see a deliberately failed build which demo's that this works as it should.")),Object(o.b)("p",null,"That's a wrap - We now have CI which includes our JavaScript tests! That's right we get to see beautiful screens like these:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://4.bp.blogspot.com/--GGN2YPhzkk/VAtx-JUkwAI/AAAAAAAAAsg/XPIJ7PICFsA/s1600/Screenshot%2B2014-09-06%2B21.43.15.png"},Object(o.b)("img",{parentName:"a",src:"http://4.bp.blogspot.com/--GGN2YPhzkk/VAtx-JUkwAI/AAAAAAAAAsg/XPIJ7PICFsA/s640/Screenshot%2B2014-09-06%2B21.43.15.png",alt:"null"})),Object(o.b)("a",{parentName:"p",href:"http://3.bp.blogspot.com/-NNrq3w-EbCg/VAtzVPUOsqI/AAAAAAAAAsw/akwN8-J9K1k/s1600/Screenshot%2B2014-09-06%2B21.49.38.png"},Object(o.b)("img",{parentName:"a",src:"http://3.bp.blogspot.com/-NNrq3w-EbCg/VAtzVPUOsqI/AAAAAAAAAsw/akwN8-J9K1k/s640/Screenshot%2B2014-09-06%2B21.49.38.png",alt:"null"})),"## Thanks to..."),Object(o.b)("p",null,"Thanks to Dan Jones, whose comments on ",Object(o.b)("a",{parentName:"p",href:"http://help.appveyor.com/discussions/questions/390-running-jasmine-on-appveyor#comment_34433599"},"this discussion")," provided a number of useful pointers which moved me in the right direction. And thanks to Feador Fitzner who has generously ",Object(o.b)("a",{parentName:"p",href:"http://help.appveyor.com/discussions/questions/495-integrating-chutzpah-into-appveyor#comment_34447202"},"said AppVeyor will support JUnit in the future")," which may simplify use of Chutzpah with AppVeyor even further."))}u.isMDXComponent=!0}}]);
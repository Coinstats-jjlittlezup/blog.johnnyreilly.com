(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[6999],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73106:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),l={title:"TFS 2012 meet PowerShell, Karma and BuildNumber",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["BuildDefinitionName","BuildNumber","npm","Karma","powershell","trx","TFS 2012"],hide_table_of_contents:!1},o={permalink:"/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-03-04-tfs-2012-meet-powershell-karma-and-buildnumber.md",source:"@site/blog/2016-03-04-tfs-2012-meet-powershell-karma-and-buildnumber.md",title:"TFS 2012 meet PowerShell, Karma and BuildNumber",description:"To my lasting regret, TFS 2012 has no direct support for PowerShell. Such a shame as PowerShell scripts can do a lot of heavy lifting in a build process. Well, here we're going to brute force TFS 2012 into running PowerShell scripts. And along the way we'll also get Karma test results publishing into TFS 2012 as an example usage. Nice huh? Let's go!",date:"2016-03-04T00:00:00.000Z",formattedDate:"March 4, 2016",tags:[{label:"BuildDefinitionName",permalink:"/tags/build-definition-name"},{label:"BuildNumber",permalink:"/tags/build-number"},{label:"npm",permalink:"/tags/npm"},{label:"Karma",permalink:"/tags/karma"},{label:"powershell",permalink:"/tags/powershell"},{label:"trx",permalink:"/tags/trx"},{label:"TFS 2012",permalink:"/tags/tfs-2012"}],readingTime:5.39,truncated:!1,prevItem:{title:"Atom - Recovering from Corrupted Packages",permalink:"/2016/03/17/atom-recovering-from-corrupted-packages"},nextItem:{title:"Creating Angular UI Routes in the Controller",permalink:"/2016/02/29/creating-angular-ui-routes-in-controller"}},s=[{value:"PowerShell via <code>csproj</code>",id:"powershell-via-csproj",children:[]},{value:"Where&#39;s my <code>BuildNumber</code> and <code>BuildDefinitionName</code>?",id:"wheres-my-buildnumber-and-builddefinitionname",children:[]},{value:"<code>AfterBuild.ps1</code>",id:"afterbuildps1",children:[]},{value:"Bonus Karma: <code>test-results.trx</code>",id:"bonus-karma-test-resultstrx",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To my lasting regret, TFS 2012 has no direct support for PowerShell. Such a shame as PowerShell scripts can do a lot of heavy lifting in a build process. Well, here we're going to brute force TFS 2012 into running PowerShell scripts. And along the way we'll also get Karma test results publishing into TFS 2012 as an example usage. Nice huh? Let's go!"),(0,a.kt)("h2",{id:"powershell-via-csproj"},"PowerShell via ",(0,a.kt)("inlineCode",{parentName:"h2"},"csproj")),(0,a.kt)("p",null,"It's time to hack the ",(0,a.kt)("inlineCode",{parentName:"p"},"csproj")," (or whatever project file you have) again. We're going to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"AfterBuild")," target to the end of the file. This target will be triggered after the build completes (as the name suggests):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<Target Name=\"AfterBuild\">\n    <Message Importance=\"High\" Text=\"AfterBuild: PublishUrl = $(PublishUrl), BuildUri = $(BuildUri), Configuration = $(Configuration), ProjectDir = $(ProjectDir), TargetDir = $(TargetDir), TargetFileName = $(TargetFileName), BuildNumber = $(BuildNumber), BuildDefinitionName = $(BuildDefinitionName)\" />\n    <Exec Command=\"powershell.exe -NonInteractive -ExecutionPolicy RemoteSigned \"& '$(ProjectDir)AfterBuild.ps1' '$(Configuration)' '$(ProjectDir)' '$(TargetDir)' '$(PublishUrl)' '$(BuildNumber)' '$(BuildDefinitionName)'\"\" />\n  </Target>\n")),(0,a.kt)("p",null,"There's 2 things happening in this target:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A message is printed out during compilation which contains details of the various compile time variables. This is nothing more than a ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log")," statement really; it's useful for debugging and so I keep it around. You'll notice one of them is called ",(0,a.kt)("inlineCode",{parentName:"li"},"$(BuildNumber)"),"; more on that later."),(0,a.kt)("li",{parentName:"ol"},"A command is executed; PowerShell! This invokes PowerShell with the ",(0,a.kt)("inlineCode",{parentName:"li"},"-NonInteractive")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"-ExecutionPolicy RemoteSigned")," flags. It passes a script to be executed called ",(0,a.kt)("inlineCode",{parentName:"li"},"AfterBuild.ps1")," that lives in the root of the project directory. To that script a number of parameters are supplied; compile time variables that we may use in the script.")),(0,a.kt)("h2",{id:"wheres-my-buildnumber-and-builddefinitionname"},"Where's my ",(0,a.kt)("inlineCode",{parentName:"h2"},"BuildNumber")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"BuildDefinitionName"),"?"),(0,a.kt)("p",null,"So you've checked in your changes and kicked off a build on the server. You're picking over the log messages and you're thinking: \"Where's my ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildNumber"),"?\". Well, TFS 2012 does not have that set as a variable at compile time by default. This stumped me for a while but thankfully I wasn't the only person wondering... As ever, ",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/7330453/761388"},"Stack Overflow had the answer"),". So, deep breath, it's time to hack the TFS build template file."),(0,a.kt)("p",null,"Checkout the ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultTemplate.11.1.xaml")," file from TFS and open it in your text editor of choice. It's ",(0,a.kt)("em",{parentName:"p"},"find and replace")," time! (There are probably 2 instances that need replacement.) Perform a ",(0,a.kt)("em",{parentName:"p"},"find")," for the below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[String.Format(&quot;/p:SkipInvalidConfigurations=true {0}&quot;, MSBuildArguments)]\n")),(0,a.kt)("p",null,"And ",(0,a.kt)("em",{parentName:"p"},"replace")," it with this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[String.Format("/p:SkipInvalidConfigurations=true /p:BuildNumber={1} /p:BuildDefinitionName={2} {0}", MSBuildArguments, BuildDetail.BuildNumber, BuildDetail.BuildDefinition.Name)]\n')),(0,a.kt)("p",null,"Pretty long line eh? Let's try breaking that up to make it more readable: (but remember in the XAML it needs to be a one liner)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[String.Format("/p:SkipInvalidConfigurations=true \n    /p:BuildNumber={1} \n    /p:BuildDefinitionName={2} {0}", MSBuildArguments, BuildDetail.BuildNumber, BuildDetail.BuildDefinition.Name)]\n')),(0,a.kt)("p",null,"We're just adding 2 extra parameters of ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildNumber")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildDefinitionName")," to the invocation of MSBuild. Once we've checked this back in, ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildNumber")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildDefinitionName")," will be available on future builds. Yay! ",(0,a.kt)("em",{parentName:"p"},"Important! You must have a build name that does not feature spaces; probably there's a way to pass spaces here but I'm not sure what it is.")),(0,a.kt)("h2",{id:"afterbuildps1"},(0,a.kt)("inlineCode",{parentName:"h2"},"AfterBuild.ps1")),(0,a.kt)("p",null,"You can use your ",(0,a.kt)("inlineCode",{parentName:"p"},"AfterBuild.ps1")," script to do any number of things. In my case I'm going to use MSTest to publish some test results which have been generated by Karma into TFS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ps"},'param ([string]$configuration, [string]$projectDir, [string]$targetDir, [string]$publishUrl, [string]$buildNumber, [string] $buildDefinitionName)\n\n$ErrorActionPreference = \'Stop\'\nClear\n\nfunction PublishTestResults([string]$resultsFile) {\n Write-Host \'PublishTests\'\n $mstest = \'C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\Common7\\IDE\\MSTest.exe\'\n\n Write-Host "Using $mstest at $pwd"\n Write-Host "Publishing: $resultsFile"\n\n & $mstest /publishresultsfile:$resultsFile /publish:http://my-tfs-server:8080/tfs /teamproject:MyProject /publishbuild:$buildNumber /platform:\'Any CPU\' /flavor:Release\n}\n\nfunction FailBuildIfThereAreTestFailures([string]$resultsFile) {\n $results = [xml](GC $resultsFile)\n $outcome = $results.TestRun.ResultSummary.outcome\n $fgColor = if($outcome -eq "Failed") { "Red" } else { "Green" }\n $total = $results.TestRun.ResultSummary.Counters.total\n $passed = $results.TestRun.ResultSummary.Counters.passed\n $failed = $results.TestRun.ResultSummary.Counters.failed\n\n $failedTests = $results.TestRun.Results.UnitTestResult | Where-Object { $_.outcome -eq "Failed" }\n\n Write-Host Test Results: $outcome -ForegroundColor $fgColor -BackgroundColor "Black"\n Write-Host Total tests: $total\n Write-Host Passed: $passed\n Write-Host Failed: $failed\n Write-Host\n\n $failedTests | % { Write-Host Failed test: $_.testName\n  Write-Host $_.Output.ErrorInfo.Message\n  Write-Host $_.Output.ErrorInfo.StackTrace }\n\n Write-Host\n\n if($outcome -eq "Failed") { \n  Write-Host "Failing build as there are broken tests"\n  $host.SetShouldExit(1)\n }\n}\n\nfunction Run() {\n  Write-Host "Running AfterBuild.ps1 using Configuration: $configuration, projectDir: $projectDir, targetDir: $targetDir, publishUrl: $publishUrl, buildNumber: $buildNumber, buildDefinitionName: $buildDefinitionName"\n\n if($buildNumber) {\n  $resultsFile = "$projectDir\\test-results.trx"\n  PublishTestResults $resultsFile\n  FailBuildIfThereAreTestFailures $resultsFile\n }\n}\n\n# Off we go...\nRun\n')),(0,a.kt)("p",null,"Assuming we have a build number this script kicks off the ",(0,a.kt)("inlineCode",{parentName:"p"},"PublishTestResults")," function above. So we won't attempt to publish test results when compiling in Visual Studio on our dev machine. The script looks for ",(0,a.kt)("inlineCode",{parentName:"p"},"MSTest.exe")," in a certain location on disk (the default VS 2015 installation location in fact; it may be installed elsewhere on your build machine). MSTest is then invoked and passed a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"test-results.trx")," which is is expected to live in the root of the project. All being well, the test results will be registered with the running build and will be visible when you look at test results in TFS."),(0,a.kt)("p",null,"Finally in ",(0,a.kt)("inlineCode",{parentName:"p"},"FailBuildIfThereAreTestFailures")," we parse the ",(0,a.kt)("inlineCode",{parentName:"p"},"test-results.trx")," file (and for this I'm totally in the debt of ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/davidroberts63/5655441"},"David Robert's helpful Gist"),"). We write out the results to the host so it'll show up in the MSBuild logs. Also, and this is crucial, if there are any failures we fail the build by exiting PowerShell with a code of 1. We are deliberately swallowing any error that Karma raises earlier when it detects failed tests. We do this because we want to publish the failed test results to TFS ",(0,a.kt)("em",{parentName:"p"},"before")," we kill the build."),(0,a.kt)("h2",{id:"bonus-karma-test-resultstrx"},"Bonus Karma: ",(0,a.kt)("inlineCode",{parentName:"h2"},"test-results.trx")),(0,a.kt)("p",null,"If you've read a ",(0,a.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2016/02/visual-studio-tsconfigjson-and-external.html"},"previous post of mine")," you'll be aware that it's possible to get MSBuild to kick off npm build tasks. Specifically I have MSBuild kicking off an ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build"),". My ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "test": "karma start --reporters mocha,trx --single-run --browsers PhantomJS",\n    "clean": "gulp delete-dist-contents",\n    "watch": "gulp watch",\n    "build": "gulp build",\n    "postbuild": "npm run test"\n  },\n')),(0,a.kt)("p",null,"You can see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"postbuild")," hook kicks off the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," script in turn. And that ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," script kicks off a single run of karma. I'm not going to go over setting up Karma at all here; there are other posts out there that cover that admirably. But I wanted to share news of the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/karma-trx-reporter"},"karma trx reporter"),". This reporter is the thing that produces our ",(0,a.kt)("inlineCode",{parentName:"p"},"test-results.trx")," file; trx being the format that TFS likes to deal with."),(0,a.kt)("p",null,"So now we've got a PowerShell hook into our build process (something very useful in itself) which we are using to publish Karma test results into TFS 2012. They said it couldn't be done. They were wrong. Huzzah!!!!!!!"))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1061],{1136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(8),r=(n(0),n(1176)),o={title:"Migrating from AngularJS to AngularTS - a walkthrough",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Jasmine","TypeScript","Unit tests","AngularJS"],hide_table_of_contents:!1},s={permalink:"/2014/06/01/migrating-from-angularjs-to-angularts",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-06-01-migrating-from-angularjs-to-angularts.md",source:"@site/blog/2014-06-01-migrating-from-angularjs-to-angularts.md",description:"It started with nuns. Don't all good stories start that way? One of my (many) aunts is a Poor Clare nun. At some point in the distant past I was cajoled into putting together a simple website for her convent. This post is a walkthrough of how to migrate from AngularJS using JavaScript to AngularJS using TypeScript. It just so happens that the AngularJS app in question is the one that belongs to my mother's sister's convent.",date:"2014-06-01T00:00:00.000Z",formattedDate:"June 1, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Unit tests",permalink:"/tags/unit-tests"},{label:"AngularJS",permalink:"/tags/angular-js"}],title:"Migrating from AngularJS to AngularTS - a walkthrough",readingTime:12.625,truncated:!1,prevItem:{title:"A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch",permalink:"/2014/06/20/dates-DataAnnotations-and-data-impedance-mismatch"},nextItem:{title:"Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests",permalink:"/2014/05/15/team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project"}},l=[{value:"TL;DR - grab what you need",id:"tldr---grab-what-you-need",children:[]},{value:"Background",id:"background",children:[]},{value:"Typings",id:"typings",children:[]},{value:"Changing JS files to TS files",id:"changing-js-files-to-ts-files",children:[]},{value:"Recap",id:"recap",children:[]},{value:"TypeScriptify <code>app.ts</code>",id:"typescriptify-appts",children:[]},{value:"TypeScriptify <code>siteSectionService.ts</code>",id:"typescriptify-sitesectionservicets",children:[]},{value:"TypeScriptify <code>prayerRequestService.ts</code>",id:"typescriptify-prayerrequestservicets",children:[]},{value:"TypeScriptify <code>prayerRequestController.ts</code>",id:"typescriptify-prayerrequestcontrollerts",children:[]},{value:"TypeScriptify <code>navController.ts</code>",id:"typescriptify-navcontrollerts",children:[]},{value:"TypeScriptify <code>mainController.ts</code>",id:"typescriptify-maincontrollerts",children:[]},{value:"Did it work? Drum roll...",id:"did-it-work-drum-roll",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It started with nuns. Don't all good stories start that way? One of my (many) aunts is a Poor Clare nun. At some point in the distant past I was cajoled into putting together a simple website for her convent. This post is a walkthrough of how to migrate from AngularJS using JavaScript to AngularJS using TypeScript. It just so happens that the AngularJS app in question is the one that belongs to my mother's sister's convent."),Object(r.b)("h2",{id:"tldr---grab-what-you-need"},"TL;DR - grab what you need"),Object(r.b)("p",null,'For reference the complete "before" and "after" projects can be found on GitHub ',Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/AngularJS2AngularTS"},"here"),". This is available so people can see clearly what changes have been made in the migration."),Object(r.b)("p",null,"The content of the site is available for ",Object(r.b)("u",null,"reference only")),Object(r.b)("p",null,'. (Not that I can really imagine people creating their own "Poor Clares" site and hawking it to convents around the globe but I thought I\'d make the point.) It looks like this:'),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-jUf3uryRdKk/U4w3VVMX04I/AAAAAAAAAnQ/6Pu84tk92S0/s1600/SisterGabriel.png",alt:null})),Object(r.b)("h2",{id:"background"},"Background"),Object(r.b)("p",null,"I've been quietly maintaining this website / app for quite a while now. It's a very simple site; 95% of it is static content about the convent. The one piece of actual functionality is a page which allows the user of the website to send a prayer request to the nuns at the convent:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-DChKaPJu4eE/U4w4DPbwxCI/AAAAAAAAAnY/PPtSe_HzPCU/s1600/OurPrayer.png",alt:null})),Object(r.b)("p",null,"Behind the scenes this sends 2 emails:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The first back to the person who submitted the prayer request assuring them that they will be prayed for."),Object(r.b)("li",{parentName:"ul"},"The second to the convent telling them the details of what the person would like prayer for.")),Object(r.b)("aside",null,Object(r.b)("em",null,"It's not accidental that I am not sharing the location of my aunt's website in this post. Given the inherent mischievousness of most developers (I should know, I am one) I harbour a fear that readers of this post might go away and submit many an insincere prayer request (or worse) to the convent. If that's you I don't intend to help you. You're clever, you'll find the site if you are so minded. But please know that the nuns who read any of your prayer requests are wonderful people (nuns get a bad rep) and that they love you. They *",Object(r.b)("strong",null,"will"),"* pray for you. They're good like that. I appeal to your better nature on this.")),Object(r.b)("p",null,"Right now you are probably thinking this is an unusual post. Perhaps it is, but bear with me."),Object(r.b)("p",null,"Over time the website has had many incarnations. It's been table-based layout, it's used Kendo UI, it's used Bootstrap. It's been static HTML, it's been ASP.Net WebForms, it's been ASP.Net MVC and it's currently built using ",Object(r.b)("strong",{parentName:"p"},"AngularJS")," with ",Object(r.b)("strong",{parentName:"p"},"MVC")," on the back-end to handle bundling / minification and dispatching of emails."),Object(r.b)("p",null,"I decided to migrate this AngularJS app to use TypeScript. As I did that I thought I'd document the process for anyone else who might be considering doing something similar. As it happens this is a particularly good candidate for migration as there's a full unit test suite for the app (written with Jasmine). Once I've finished the migration these unit tests should pass, just as they do currently."),Object(r.b)("p",null,'You are probably thinking to yourself "but TypeScript is just about adding compile-time annotations right? How could the unit tests not pass after migration?" Fair point, well made. Well that is generally true but I have something slightly different planned when we get to the controllers - you\'ll see what I mean...'),Object(r.b)("p",null,"It's also a good candidate for documenting a walkthrough as it's a particularly small and simple Angular app. It consists of just ",Object(r.b)("strong",{parentName:"p"},"3 controllers"),", ",Object(r.b)("strong",{parentName:"p"},"2 services")," and ",Object(r.b)("strong",{parentName:"p"},"1 app"),"."),Object(r.b)("p",null,"Before I kick off I thought I'd list a couple of guidelines / caveats on this post:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"I don't intend to say much about the architecture of this application - I want to focus on the migration from JavaScript to TypeScript."),Object(r.b)("li",{parentName:"ul"},'The choices that I make for the migration path do not necessarily reflect the "one true way". Rather, they are pragmatic choices that I am making - there may be alternatives approaches here and there that could be used instead.'),Object(r.b)("li",{parentName:"ul"},"I love Visual Studio - it's my IDE of choice and the one I am using as I perform the migration. Some of the points that I will make are Visual Studio specific - I will try and highlight that when appropriate.")),Object(r.b)("h2",{id:"typings"},"Typings"),Object(r.b)("p",null,"The first thing we're going to need to get going are the Angular typing files which can be found on Definitely Typed ",Object(r.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/tree/master/angularjs"},"here"),". Since these typings are made available over ",Object(r.b)("a",{parentName:"p",href:"https://www.nuget.org/packages/angularjs.TypeScript.DefinitelyTyped/"},"NuGet")," I'm going to pull them in with a wave of my magic ",Object(r.b)("inlineCode",{parentName:"p"},"Install-Package angularjs.TypeScript.DefinitelyTyped"),"."),Object(r.b)("p",null,"As well as pulling in the typing files Visual Studio 2013 has also made some tweaks to my ",Object(r.b)("inlineCode",{parentName:"p"},"PoorClaresAngular.csproj")," file which it tells me about:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-DZcJ-YANHAE/U4b6Yd4Zr7I/AAAAAAAAAlM/SYpK8RFSVgg/s1600/TypeScriptDialog.png",alt:null})),Object(r.b)("p",null,"And these are the TypeScript specific additions that Visual Studio has made to ",Object(r.b)("inlineCode",{parentName:"p"},"PoorClaresAngular.csproj"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<Import \n   Project="$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.Default.props" \n   Condition="Exists(\'$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.Default.props\')" />\n\n  <TypeScriptToolsVersion>1.0</TypeScriptToolsVersion>\n\n  <Import \n   Project="$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets" \n   Condition="Exists(\'$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets\')" />\n')),Object(r.b)("p",null,"I'm going to add one extra of my own:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<TypeScriptNoImplicitAny>True</TypeScriptNoImplicitAny>\n")),Object(r.b)("p",null,"This prevents you having variables of type ",Object(r.b)("inlineCode",{parentName:"p"},"any")," in your TypeScript codebase without you implicitly specifying the type. You can live without this but I've found it's useful to catch where you're missing out on the benefit of static typing. Further to that, this option can be particularly useful when performing a migration. It will become obvious why this is the case as we go on."),Object(r.b)("p",null,"I decline the kind opportunity to further search NuGet as I'm already on my way typing-wise. So let's review what has happened. Below you can see the typing files that have been pulled in and that the project and packages files were amended:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-mgEjfAnPp5I/U4b7wqDLkdI/AAAAAAAAAlY/MlfZA5c7TIs/s1600/AddedTypings.png",alt:null})),Object(r.b)("h2",{id:"changing-js-files-to-ts-files"},"Changing JS files to TS files"),Object(r.b)("p",null,"This really should be as simple as changing all the JavaScript files underneath the ",Object(r.b)("inlineCode",{parentName:"p"},"js")," directory to have the suffix ",Object(r.b)("inlineCode",{parentName:"p"},"ts"),". So going from this:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-El_425y9130/U4clVSYUO4I/AAAAAAAAAlo/Z-NmvPlOjiA/s1600/js.png",alt:null})),Object(r.b)("p",null,"To this:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-QMLxo7CnDV0/U4clbseUBsI/AAAAAAAAAlw/oRCZf5YqZUQ/s1600/ts.png",alt:null})),Object(r.b)("p",null,"And if you're not using Visual Studio it is. But if you are using Visual Studio there's a certain amount of fiddling required to include the generated ",Object(r.b)("inlineCode",{parentName:"p"},".js")," and ",Object(r.b)("inlineCode",{parentName:"p"},".js.map")," files associated with each ",Object(r.b)("inlineCode",{parentName:"p"},".ts")," file. The easiest (hah!) thing to do is to crack open the project and wherever you find a ",Object(r.b)("inlineCode",{parentName:"p"},'&lt;TypeScriptCompile Include="js\\somePath.ts" /&gt;')," to add in 2 ",Object(r.b)("inlineCode",{parentName:"p"},"Content")," statements, one for each generated file which states the dependency on the TypeScript file. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<TypeScriptCompile Include="js\\services\\siteSectionService.ts" />\n    <Content Include="js\\services\\siteSectionService.js">\n      <DependentUpon>siteSectionService.ts</DependentUpon>\n    </Content>\n    <Content Include="js\\services\\siteSectionService.js.map">\n      <DependentUpon>siteSectionService.ts</DependentUpon>\n    </Content>\n')),Object(r.b)("p",null,"It's a bit of a pain to have to do this at the moment. Hopefully the Visual Studio tooling will catch up so this sort of tweaking becomes unnecessary."),Object(r.b)("h2",{id:"recap"},"Recap"),Object(r.b)("p",null,"So, where are we? Well, we've got our project ready for TypeScript, we've pulled in the Angular typings from Definitely Typed and we've turned all our JavaScript files in the ",Object(r.b)("inlineCode",{parentName:"p"},"js")," directory into TypeScript files."),Object(r.b)("p",null,"Now we can actually start working through our TypeScript files and ensuring we're all typed correctly. Please note that because I'm working in Visual Studio I get the benefit of implicit referencing; I don't have to explicitly state the typing files each TypeScript file relies on at the head of the file (eg ",Object(r.b)("inlineCode",{parentName:"p"},'/// &lt;reference path="angularjs/angular.d.ts" /&gt;'),"). If you aren't working in Visual Studio then you'd need to add these yourself."),Object(r.b)("h2",{id:"typescriptify-appts"},"TypeScriptify ",Object(r.b)("inlineCode",{parentName:"h2"},"app.ts")),Object(r.b)("p",null,"Opening up ",Object(r.b)("inlineCode",{parentName:"p"},"app.ts")," we're presented with a few red squigglies:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-91g1TEbkZd4/U4ctcYQqogI/AAAAAAAAAmI/qQzfzNAaPhA/s1600/app.ts.png",alt:null})),Object(r.b)("p",null,"These red squigglies are the direct result of my earlier opting in to ",Object(r.b)("inlineCode",{parentName:"p"},"NoImplicitAny"),". So in my view it's already paid for itself as it's telling me where I could start using typings. So to get things working nicely I'll give ",Object(r.b)("inlineCode",{parentName:"p"},"$routeProvider")," the type of ",Object(r.b)("inlineCode",{parentName:"p"},"ng.route.IRouteProvider")," and I'll explicitly specify the type of ",Object(r.b)("inlineCode",{parentName:"p"},"any")," for the 2 ",Object(r.b)("inlineCode",{parentName:"p"},"params")," parameters:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'// ...\n    function ($routeProvider: ng.route.IRouteProvider) {\n\n        function getTheConventTemplateUrl(params: any) {\n            var view = params.view || "home";\n            return "partials/theConvent/" + view + ".html";\n        }\n\n        function getMainTemplateUrl(params: any) {\n            var view = params.view || "home";\n            return "partials/main/" + view + ".html";\n        }\n\n        // ...\n    }\n    // ...\n')),Object(r.b)("h2",{id:"typescriptify-sitesectionservicets"},"TypeScriptify ",Object(r.b)("inlineCode",{parentName:"h2"},"siteSectionService.ts")),Object(r.b)("p",null,"Opening up ",Object(r.b)("inlineCode",{parentName:"p"},"siteSectionService.ts")," we're only presented with a single squiggly, and for the same reason as last time:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-aFd1JgtcLIU/U4cwBbs8N7I/AAAAAAAAAmU/x9GME8J5CMc/s1600/siteSectionService.ts.png",alt:null})),Object(r.b)("p",null,"This error is easily remedied by giving ",Object(r.b)("inlineCode",{parentName:"p"},"path")," the type of ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"."),Object(r.b)("p",null,"What's more interesting / challenging is thinking about how we want to enforce the definition of ",Object(r.b)("inlineCode",{parentName:"p"},"siteSectionService"),". Remember, this is a service and as such it will be re-used elsewhere in the application (in both ",Object(r.b)("inlineCode",{parentName:"p"},"navController")," and ",Object(r.b)("inlineCode",{parentName:"p"},"mainController"),"). What we need is an interface that describes what our (revealing module pattern) service exposes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n\ninterface ISiteSectionService {\n    getSiteSection: () => string;\n    determineSiteSection: (path: string) => void;\n}\n\nangular.module("poorClaresApp.services").factory(\n\n    "siteSectionService",\n\n    [ // No dependencies at present\n    function (): ISiteSectionService {\n\n        var siteSection = "home";\n\n        function getSiteSection() {\n            return siteSection;\n        }\n\n        function determineSiteSection(path: string) {\n            var newSiteSection = "home";\n\n            if (path.indexOf("/theConvent/") !== -1) {\n                newSiteSection = "theConvent";\n            }\n            else if (path !== "/") {\n                newSiteSection = "main";\n            }\n\n            siteSection = newSiteSection;\n        }\n\n        return {\n            getSiteSection: getSiteSection,\n            determineSiteSection: determineSiteSection\n        };\n    }]);\n')),Object(r.b)("p",null,"As you can see the ",Object(r.b)("inlineCode",{parentName:"p"},"ISiteSectionService ")," interface is marked as the return type of the function. This ensures that what we return from the function satisfies that definition. Also, it allows us to re-use that interface elsewhere (as we will do later)."),Object(r.b)("h2",{id:"typescriptify-prayerrequestservicets"},"TypeScriptify ",Object(r.b)("inlineCode",{parentName:"h2"},"prayerRequestService.ts")),Object(r.b)("p",null,"Opening up ",Object(r.b)("inlineCode",{parentName:"p"},"prayerRequestService.ts")," we're again in ",Object(r.b)("inlineCode",{parentName:"p"},"NoImplicitAny")," country:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-QfZUdnxu5oA/U4c0iI-JF3I/AAAAAAAAAmg/pbwlmGGbBjo/s1600/prayerRequestService.ts.png",alt:null})),Object(r.b)("p",null,"This is fixed up by defining ",Object(r.b)("inlineCode",{parentName:"p"},"$http")," as ",Object(r.b)("inlineCode",{parentName:"p"},"ng.IHttpService")," and ",Object(r.b)("inlineCode",{parentName:"p"},"email")," and ",Object(r.b)("inlineCode",{parentName:"p"},"prayFor")," as ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"."),Object(r.b)("p",null,"As with ",Object(r.b)("inlineCode",{parentName:"p"},"siteSectionService")," we need to create an interface to define what ",Object(r.b)("inlineCode",{parentName:"p"},"prayerRequestService")," exposes. This leaves us with this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n\ninterface IPrayerRequestService {\n    sendPrayerRequest: (email: string, prayFor: string) => ng.IPromise<{\n        success: boolean;\n        text: string;\n    }>;\n}\n\nangular.module("poorClaresApp.services").factory(\n\n    "prayerRequestService",\n\n    ["$http",\n    function ($http: ng.IHttpService): IPrayerRequestService {\n\n        var url = "/PrayerRequest";\n\n        function sendPrayerRequest(email: string, prayFor: string) {\n\n            var params = { email: email, prayFor: prayFor };\n\n            return $http.post(url, params)\n                .then(function (response) {\n                    return {\n                        success: response.data.success,\n                        text: response.data.text\n                    };\n                });\n        }\n\n        return {\n            sendPrayerRequest: sendPrayerRequest\n        };\n    }]);\n')),Object(r.b)("h2",{id:"typescriptify-prayerrequestcontrollerts"},"TypeScriptify ",Object(r.b)("inlineCode",{parentName:"h2"},"prayerRequestController.ts")),Object(r.b)("p",null,"Opening up ",Object(r.b)("inlineCode",{parentName:"p"},"prayerRequestController.ts")," leads me to the conclusion that I have ",Object(r.b)("strong",{parentName:"p"},"no interesting way left")," of telling you that we once more need to supply types for our parameters. Let's take it as read that the same will happen on all remaining files as well eh? Hopefully by now it's fairly clear that this option is useful, even if only for a migration. I say this because using it forces you to think about what typings should be applied to your code:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-5-joMHeUrNE/U4c5tcYeoLI/AAAAAAAAAmw/qwl0Bjz21zA/s1600/prayerRequestController.png",alt:null})),Object(r.b)("p",null,"We'll define ",Object(r.b)("inlineCode",{parentName:"p"},"$scope")," as ",Object(r.b)("inlineCode",{parentName:"p"},"ng.IScope"),", ",Object(r.b)("inlineCode",{parentName:"p"},"prayerRequestService")," as ",Object(r.b)("inlineCode",{parentName:"p"},"IPrayerRequestService")," (which we created just now) and ",Object(r.b)("inlineCode",{parentName:"p"},"prayerRequest")," as ",Object(r.b)("inlineCode",{parentName:"p"},"{ email: string; prayFor: string }"),". Which leaves me with this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n\nangular.module("poorClaresApp.controllers").controller(\n\n    "PrayerRequestController",\n\n    ["$scope", "prayerRequestService",\n    function ($scope: ng.IScope, prayerRequestService: IPrayerRequestService) {\n        \n        var vm = this;\n\n        vm.send = function (prayerRequest: { email: string; prayFor: string }) {\n\n            vm.message = {\n                success: true,\n                text: "Sending..."\n            };\n\n            prayerRequestService.sendPrayerRequest(prayerRequest.email, prayerRequest.prayFor)\n                .then(function (response) {\n                    vm.message = {\n                        success: response.success,\n                        text: response.text\n                    };\n                })\n                .then(null, function (error) { // IE 8 friendly alias for catch\n                    vm.message = {\n                        success: false,\n                        text: "Sorry your email was not sent"\n                    };\n                });\n        }\n    }]);\n')),Object(r.b)("p",null,"I could move on but let's go for bonus points (and now you'll see why the unit test suite is so handy). To quote the Angular documentation:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"In Angular, a Controller is a JavaScript constructor function that is used to augment the Angular Scope.")),Object(r.b)("p",null,"So let's see if we can swap over our vanilla contructor function for a TypeScript class. This will (in my view) better express the intention of the code. To do this I am essentially following the example laid down by my Definitely Typed colleague ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/basarat"},"Basarat"),". I highly recommend his ",Object(r.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=WdtVn_8K17E"},"screencast on the topic"),". Also kudos to ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/andrewdavey"},"Andrew Davey")," whose ",Object(r.b)("a",{parentName:"p",href:"http://aboutcode.net/2013/10/20/typescript-angularjs-controller-classes.html"},"post on the topic")," also fed into this."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n\nmodule poorClaresApp.controllers {\n    class PrayerRequestController {\n\n        static $inject = ["$scope", "prayerRequestService"];\n        constructor(\n            private $scope: ng.IScope,\n            private prayerRequestService: IPrayerRequestService) {\n        }\n\n        message: { success: boolean; text: string };\n\n        send(prayerRequest: { email: string; prayFor: string }) {\n\n            this.message = {\n                success: true,\n                text: "Sending..."\n            };\n\n            this.prayerRequestService.sendPrayerRequest(prayerRequest.email, prayerRequest.prayFor)\n                .then((response) => {\n                    this.message = {\n                        success: response.success,\n                        text: response.text\n                    };\n                })\n                .then(null, (error) => { // IE 8 friendly alias for catch\n                    this.message = {\n                        success: false,\n                        text: "Sorry your email was not sent"\n                    };\n                });\n        }\n    }\n\n    angular.module("poorClaresApp.controllers")\n           .controller("PrayerRequestController", PrayerRequestController);\n}\n')),Object(r.b)("p",null,"My only reservation with this approach is that we have to declare the TypeScript class outside the ",Object(r.b)("inlineCode",{parentName:"p"},"angular.module...")," statement. To avoid cluttering up global scope I've placed our class in a module called ",Object(r.b)("inlineCode",{parentName:"p"},"poorClaresApp.controllers")," which maps nicely to our Angular module name. It would be nice if I could place the class definition in an ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Immediately-invoked_function_expression"},"IIFE")," to completely keep this completely isolated but TypeScript doesn't allow for that syntax (for reasons I'm unclear about - the output would be legal JavaScript)."),Object(r.b)("p",null,"For a small class this seems to add a little noise but as classes grow in complexity I think this approach will quickly start to pay dividends. There are a few things worth noting about the above approach:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The required injectable parameters have moved into the class definition in the form of the ",Object(r.b)("inlineCode",{parentName:"li"},"static $inject")," statement. I personally like that this no longer sits outside the code it relates to."),Object(r.b)("li",{parentName:"ul"},'Because we\'re using TypeScript arrow functions (which preserve the outer "this" context) we are now free to dispose of the ',Object(r.b)("inlineCode",{parentName:"li"},"var vm = this;")," mechanism we're were previously using for the same purpose. Much more intuitive code to my mind."),Object(r.b)("li",{parentName:"ul"},"We are not actually using ",Object(r.b)("inlineCode",{parentName:"li"},"$scope")," at all in this controller - maybe it should be removed entirely in the long run.")),Object(r.b)("h2",{id:"typescriptify-navcontrollerts"},"TypeScriptify ",Object(r.b)("inlineCode",{parentName:"h2"},"navController.ts")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"navController")," can be simply converted like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n\ninterface INavControllerScope extends ng.IScope {\n    isCollapsed: boolean;\n    siteSection: string;\n}\n\nangular.module("poorClaresApp.controllers").controller(\n\n    "NavController",\n\n    ["$scope", "siteSectionService",\n    function ($scope: INavControllerScope, siteSectionService: ISiteSectionService) {\n\n        $scope.isCollapsed = true;\n        $scope.siteSection = siteSectionService.getSiteSection();\n\n        $scope.$watch(siteSectionService.getSiteSection, function (newValue, oldValue) {\n            $scope.siteSection = newValue;\n        });\n    }]);\n')),Object(r.b)("p",null,"I'd draw your attention to the creation of a the ",Object(r.b)("inlineCode",{parentName:"p"},"INavControllerScope")," interface that extends the default Angular $scope of ",Object(r.b)("inlineCode",{parentName:"p"},"ng.IScope")," with 2 extra properties."),Object(r.b)("p",null,"Let's also switch this over to the class based approach (there is less of a reason to on this occasion just looking at the size of the codebase but I'm all about consistency of approach):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n\nmodule poorClaresApp.controllers {\n    interface INavControllerScope extends ng.IScope {\n        isCollapsed: boolean;\n        siteSection: string;\n    }\n\n    class NavController {\n\n        static $inject = ["$scope", "siteSectionService"];\n        constructor(\n            private $scope: INavControllerScope,\n            private siteSectionService: ISiteSectionService) {\n\n            $scope.isCollapsed = true;\n            $scope.siteSection = siteSectionService.getSiteSection();\n\n            $scope.$watch(siteSectionService.getSiteSection, function (newValue, oldValue) {\n                $scope.siteSection = newValue;\n            });\n        }\n    }\n\n    angular.module("poorClaresApp.controllers").controller("NavController", NavController);\n}\n')),Object(r.b)("h2",{id:"typescriptify-maincontrollerts"},"TypeScriptify ",Object(r.b)("inlineCode",{parentName:"h2"},"mainController.ts")),Object(r.b)("p",null,"Finally, ",Object(r.b)("inlineCode",{parentName:"p"},"mainController")," can be converted as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n\nangular.module("poorClaresApp.controllers").controller(\n\n    "MainController",\n\n    ["$location", "siteSectionService",\n    function ($location: ng.ILocationService, siteSectionService: ISiteSectionService) {\n\n        siteSectionService.determineSiteSection($location.path());\n    }]);\n')),Object(r.b)("p",null,"Again it's just a case of assigning the undeclared types. For completeness lets also switch this over to the class based approach:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'"use strict";\n\nmodule poorClaresApp.controllers {\n    class MainController {\n\n        static $inject = ["$location", "siteSectionService"];\n        constructor(\n            private $location: ng.ILocationService,\n            private siteSectionService: ISiteSectionService) {\n\n            siteSectionService.determineSiteSection($location.path());\n        }\n    }\n\n    angular.module("poorClaresApp.controllers").controller("MainController", MainController);\n}\n')),Object(r.b)("h2",{id:"did-it-work-drum-roll"},"Did it work? Drum roll..."),Object(r.b)("p",null,"In unit tests we trust. Let's run them..."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-re8aAJVtSDk/U4hYNPqKk9I/AAAAAAAAAnA/1Vu7ooQk1jw/s1600/UnitTestsPass.png",alt:null})),Object(r.b)("p",null,"Success! I hope you found this useful."))}p.isMDXComponent=!0},1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,d=u["".concat(o,".").concat(h)]||u[h]||b[h]||r;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
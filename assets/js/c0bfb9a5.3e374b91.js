(window.webpackJsonp=window.webpackJsonp||[]).push([[813],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?r.a.createElement(g,s(s({ref:t},c),{},{components:n})):r.a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},923:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),a=(n(0),n(1170)),i={title:"Journalling the Migration of Jasmine Tests to TypeScript",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["Jasmine","TypeScript Language Service","TypeScript","javascript","implicit references"],hide_table_of_contents:!1},s={permalink:"/2014/09/13/migrating-jasmine-tests-to-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-09-13-migrating-jasmine-tests-to-typescript.md",source:"@site/blog/2014-09-13-migrating-jasmine-tests-to-typescript.md",description:"I previously attempted to migrate my Jasmine tests from JavaScript to TypeScript. The last time I tried it didn't go so well and I bailed. Thank the Lord for source control. But feeling I shouldn't be deterred I decided to have another crack at it.",date:"2014-09-13T00:00:00.000Z",formattedDate:"September 13, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"TypeScript Language Service",permalink:"/tags/type-script-language-service"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"javascript",permalink:"/tags/javascript"},{label:"implicit references",permalink:"/tags/implicit-references"}],title:"Journalling the Migration of Jasmine Tests to TypeScript",readingTime:9.41,truncated:!1,prevItem:{title:"He tasks me; he heaps me.... I will wreak that MOQ upon him.",permalink:"/2014/10/03/he-tasks-me-he-heaps-me-i-will-wreak"},nextItem:{title:"Unit Testing an Angular Controller with Jasmine",permalink:"/2014/09/10/unit-testing-angular-controller-with"}},l=[{value:"What to Migrate?",id:"what-to-migrate",children:[]},{value:"Off we go",id:"off-we-go",children:[]},{value:"Could not find symbol &#39;$q&#39;",id:"could-not-find-symbol-q",children:[]},{value:"Typings? Where we&#39;re going, we need typings...",id:"typings-where-were-going-we-need-typings",children:[]},{value:"So That&#39;s All Good...",id:"so-thats-all-good",children:[]},{value:"Who Killed the TypeScript Language Service?",id:"who-killed-the-typescript-language-service",children:[]},{value:"Solutions....",id:"solutions",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I previously attempted to migrate my Jasmine tests from JavaScript to TypeScript. The last time I tried it didn't go so well and I bailed. Thank the Lord for source control. But feeling I shouldn't be deterred I decided to have another crack at it."),Object(a.b)("p",null,' I did manage it this time... Sort of. Unfortunately there was a problem which I discovered right at the end. An issue with the TypeScript / Visual Studio tooling. So, just to be clear, this is not a blog post of "do this and it will work perfectly". On this occasion there will be some rough edges. This post exists, as much as anything else, as a record of the problems I experienced - I hope it will prove useful. Here we go:'),Object(a.b)("h2",{id:"what-to-migrate"},"What to Migrate?"),Object(a.b)("p",null,"I'm going to use one of the test files in my my side project ",Object(a.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Proverb"},"Proverb"),". It's the tests for an AngularJS controller called ",Object(a.b)("inlineCode",{parentName:"p"},"sageDetail")," ","-"," I've written about it ",Object(a.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2014/09/unit-testing-angular-controller-with.html"},"before"),". Here it is in all it's JavaScript-y glory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'describe("Proverb.Web -> app-> controllers ->", function () {\n\n    beforeEach(function () {\n\n        module("app");\n    });\n\n    describe("sageDetail ->", function () {\n\n        var $rootScope,\n            getById_deferred, // deferred used for promises\n            $location, $routeParams_stub, common, datacontext, // controller dependencies\n            sageDetailController; // the controller\n\n        beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _$location_, _common_, _datacontext_) {\n\n            $rootScope = _$rootScope_;\n            $q = _$q_;\n\n            $location = _$location_;\n            common = _common_;\n            datacontext = _datacontext_;\n\n            $routeParams_stub = { id: "10" };\n            getById_deferred = $q.defer();\n\n            spyOn(datacontext.sage, "getById").and.returnValue(getById_deferred.promise);\n            spyOn(common, "activateController").and.callThrough();\n            spyOn(common.logger, "getLogFn").and.returnValue(jasmine.createSpy("log"));\n            spyOn($location, "path").and.returnValue(jasmine.createSpy("path"));\n\n            sageDetailController = _$controller_("sageDetail", {\n                $location: $location,\n                $routeParams: $routeParams_stub,\n                common: common,\n                datacontext: datacontext\n            });\n\n\n        }));\n\n        describe("on creation ->", function () {\n\n            it("controller should have a title of \'Sage Details\'", function () {\n\n                expect(sageDetailController.title).toBe("Sage Details");\n            });\n\n            it("controller should have no sage", function () {\n\n                expect(sageDetailController.sage).toBeUndefined();\n            });\n\n            it("datacontext.sage.getById should be called", function () {\n\n                expect(datacontext.sage.getById).toHaveBeenCalledWith(10, true);\n            });\n        });\n\n        describe("activateController ->", function () {\n\n            var sage_stub;\n            beforeEach(function () {\n                sage_stub = { name: "John" };\n            });\n\n            it("should set sages to be the resolved promise values", function () {\n\n                getById_deferred.resolve(sage_stub);\n                $rootScope.$digest(); // So Angular processes the resolved promise\n\n                expect(sageDetailController.sage).toBe(sage_stub);\n            });\n\n            it("should log \'Activated Sage Details View\' and set title with name", function () {\n\n                getById_deferred.resolve(sage_stub);\n                $rootScope.$digest(); // So Angular processes the resolved promise\n\n                expect(sageDetailController.log).toHaveBeenCalledWith("Activated Sage Details View");\n                expect(sageDetailController.title).toBe("Sage Details: " + sage_stub.name);\n            });\n        });\n\n        describe("gotoEdit ->", function () {\n\n            var sage_stub;\n            beforeEach(function () {\n                sage_stub = { id: 20 };\n            });\n\n            it("should set $location.path to edit URL", function () {\n\n                getById_deferred.resolve(sage_stub);\n                $rootScope.$digest(); // So Angular processes the resolved promise\n\n                sageDetailController.gotoEdit();\n\n                expect($location.path).toHaveBeenCalledWith("/sages/edit/" + sage_stub.id);\n            });\n        });\n    });\n});\n')),Object(a.b)("h2",{id:"off-we-go"},"Off we go"),Object(a.b)("p",null,"Righteo. Let's flip the switch. ",Object(a.b)("inlineCode",{parentName:"p"},"sageDetail.js")," you shall go to the ball! One wave of my magic wand and ",Object(a.b)("inlineCode",{parentName:"p"},"sageDetail.js")," becomes ",Object(a.b)("inlineCode",{parentName:"p"},"sageDetail.ts"),"... Alakazam!! Of course we've got to do the fiddling with the ",Object(a.b)("inlineCode",{parentName:"p"},"csproj")," file to include the dependent JavaScript files. (I'll be very pleased when ASP.Net vNext ships and I don't have to do this anymore....) So find this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<TypeScriptCompile Include="app\\sages\\sageDetail.ts" />\n')),Object(a.b)("p",null,"And add this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<Content Include="app\\sages\\sageDetail.js">\n  <DependentUpon>sageDetail.ts</DependentUpon>\n</Content>\n<Content Include="app\\sages\\sageDetail.js.map">\n  <DependentUpon>sageDetail.ts</DependentUpon>\n</Content>\n')),Object(a.b)("p",null,"What next? I've a million red squigglies in my code. It's \"could not find symbol\" city. Why? Typings! We need typings! So let's begin - I'm needing the Jasmine typings for starters. So let's hit NuGet and it looks like we need ",Object(a.b)("a",{parentName:"p",href:"http://www.nuget.org/packages/jasmine.TypeScript.DefinitelyTyped/"},"this"),":"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Install-Package jasmine.TypeScript.DefinitelyTyped"),"That did no good at all. Still red squigglies. I'm going to hazard a guess that this is something to do with the fact my JavaScript Unit Test project doesn't contain the various TypeScript artefacts that Visual Studio kindly puts into the web csproj for you. This is because I'm keeping my JavaScript tests in a separate project from the code being tested. Also, the Visual Studio TypeScript tooling seems to work on the assumption that TypeScript will only be used within a web project; not a test project. Well I won't let that hold me back... Time to port the TypeScript artefacts in the web csproj over by hand. I'll take this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<Import Project="$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.Default.props" Condition="Exists(\'$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.Default.props\')" />\n')),Object(a.b)("p",null,"And I'll also take this"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup Condition=\"'$(Configuration)' == 'Debug'\">\n  <TypeScriptNoImplicitAny>True</TypeScriptNoImplicitAny>\n</PropertyGroup>\n<Import Project=\"$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets\" Condition=\"Exists('$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets')\" />\n")),Object(a.b)("p",null,"Bingo bango - a difference. I no longer have red squigglies under the Jasmine statements (",Object(a.b)("inlineCode",{parentName:"p"},"describe"),", ",Object(a.b)("inlineCode",{parentName:"p"},"it")," etc). But alas, I do everywhere else. One in particular draws my eye..."),Object(a.b)("h2",{id:"could-not-find-symbol-q"},"Could not find symbol '$q'"),Object(a.b)("p",null,"Once again TypeScript picks up the hidden bugs in my JavaScript:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"$q = _$q_;\n")),Object(a.b)("p",null,"That's right it's an implicit global. Quickly fixed:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"var $q = _$q_;\n")),Object(a.b)("h2",{id:"typings-where-were-going-we-need-typings"},"Typings? Where we're going, we need typings..."),Object(a.b)("p",null,"We need more types. We're going to need the types created by our application; our controllers / services / directives etc. As well that we need the types used in the creation of the app. So the Angular typings etc. Since we're going to need to use ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," statements to pull in the types created by our application I might as well use them to pull in the required definition files as well (eg ",Object(a.b)("inlineCode",{parentName:"p"},"angular.d.ts"),"):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular-mocks.d.ts" />\n/// <reference path="../../../proverb.web/app/sages/sagedetail.ts" />\n/// <reference path="../../../proverb.web/app/common/common.ts" />\n/// <reference path="../../../proverb.web/app/services/datacontext.ts" />\n/// <reference path="../../../proverb.web/app/services/repository.sage.ts" />\n')),Object(a.b)("p",null,"Now we need to work our way through the \"variable 'x' implicitly has an 'any' type\" messages. One thing we need to do is to amend our original sageDetails.ts file so that the ",Object(a.b)("inlineCode",{parentName:"p"},"sageDetailRouteParams")," interface and ",Object(a.b)("inlineCode",{parentName:"p"},"SageDetail")," class are exported from the controllers module. We can't use the types otherwise. Now we can add typings to our file - once finished it looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular-mocks.d.ts" />\n/// <reference path="../../../proverb.web/app/sages/sagedetail.ts" />\n/// <reference path="../../../proverb.web/app/common/common.ts" />\n/// <reference path="../../../proverb.web/app/services/datacontext.ts" />\n/// <reference path="../../../proverb.web/app/services/repository.sage.ts" />\ndescribe("Proverb.Web -> app-> controllers ->", function () {\n\n    beforeEach(function () {\n\n        module("app");\n    });\n\n    describe("sageDetail ->", function () {\n\n        var $rootScope: ng.IRootScopeService,\n            // deferred used for promises \n            getById_deferred: ng.IDeferred<sage>, \n            // controller dependencies\n            $location: ng.ILocationService,\n            $routeParams_stub: controllers.sageDetailRouteParams,\n            common: common,\n            datacontext: datacontext,\n            sageDetailController: controllers.SageDetail; // the controller\n\n        beforeEach(inject(function (\n            _$controller_: any,\n            _$rootScope_: ng.IRootScopeService,\n            _$q_: ng.IQService,\n            _$location_: ng.ILocationService,\n            _common_: common,\n            _datacontext_: datacontext) {\n\n            $rootScope = _$rootScope_;\n            var $q = _$q_;\n\n            $location = _$location_;\n            common = _common_;\n            datacontext = _datacontext_;\n\n            $routeParams_stub = { id: "10" };\n            getById_deferred = $q.defer();\n\n            spyOn(datacontext.sage, "getById").and.returnValue(getById_deferred.promise);\n            spyOn(common, "activateController").and.callThrough();\n            spyOn(common.logger, "getLogFn").and.returnValue(jasmine.createSpy("log"));\n            spyOn($location, "path").and.returnValue(jasmine.createSpy("path"));\n\n            sageDetailController = _$controller_("sageDetail", {\n                $location: $location,\n                $routeParams: $routeParams_stub,\n                common: common,\n                datacontext: datacontext\n            });\n\n\n        }));\n\n        describe("on creation ->", function () {\n\n            it("controller should have a title of \'Sage Details\'", function () {\n\n                expect(sageDetailController.title).toBe("Sage Details");\n            });\n\n            it("controller should have no sage", function () {\n\n                expect(sageDetailController.sage).toBeUndefined();\n            });\n\n            it("datacontext.sage.getById should be called", function () {\n\n                expect(datacontext.sage.getById).toHaveBeenCalledWith(10, true);\n            });\n        });\n\n        describe("activateController ->", function () {\n\n            var sage_stub: sage;\n            beforeEach(function () {\n                sage_stub = { name: "John", id: 10, username: "John", email: "john@", dateOfBirth: new Date() };\n            });\n\n            it("should set sages to be the resolved promise values", function () {\n\n                getById_deferred.resolve(sage_stub);\n                $rootScope.$digest(); // So Angular processes the resolved promise\n\n                expect(sageDetailController.sage).toBe(sage_stub);\n            });\n\n            it("should log \'Activated Sage Details View\' and set title with name", function () {\n\n                getById_deferred.resolve(sage_stub);\n                $rootScope.$digest(); // So Angular processes the resolved promise\n\n                expect(sageDetailController.log).toHaveBeenCalledWith("Activated Sage Details View");\n                expect(sageDetailController.title).toBe("Sage Details: " + sage_stub.name);\n            });\n        });\n\n        describe("gotoEdit ->", function () {\n\n            var sage_stub: sage;\n            beforeEach(function () {\n                sage_stub = { name: "John", id: 20, username: "John", email: "john@", dateOfBirth: new Date() };\n            });\n\n            it("should set $location.path to edit URL", function () {\n\n                getById_deferred.resolve(sage_stub);\n                $rootScope.$digest(); // So Angular processes the resolved promise\n\n                sageDetailController.gotoEdit();\n\n                expect($location.path).toHaveBeenCalledWith("/sages/edit/" + sage_stub.id);\n            });\n        });\n    });\n});\n')),Object(a.b)("h2",{id:"so-thats-all-good"},"So That's All Good..."),Object(a.b)("p",null,"Except it's not. When I run the tests using Chutzpah my ",Object(a.b)("inlineCode",{parentName:"p"},"sageDetail")," controller tests aren't found. My spider sense is tingling. This is something to do with the ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," statements. They're throwing Chutzpah off. No bother, I can fix that with a quick tweak of the project file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup Condition=\"'$(Configuration)' == 'Debug'\">\n    <TypeScriptNoImplicitAny>True</TypeScriptNoImplicitAny>\n    <TypeScriptRemoveComments>True</TypeScriptRemoveComments>\n  </PropertyGroup>\n")),Object(a.b)("p",null,"The TypeScript compiler will now strip comments; which includes the ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," statements. Now my tests are detected ","*",Object(a.b)("strong",{parentName:"p"},"and"),"*"," they run. Yay!"),Object(a.b)("h2",{id:"who-killed-the-typescript-language-service"},"Who Killed the TypeScript Language Service?"),Object(a.b)("p",null,"Yup it's dead. Whilst the compilation itself has no issues, take a look at the errors being presented for just one of the files back in the original web project:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-SYbV5TwnO3Y/VBNwa2TwQPI/AAAAAAAAAtY/oU8dI5Tv-iY/s640/Screenshot%2B2014-09-12%2B23.15.22.png",alt:null})),Object(a.b)("p",null,"It looks like having one TypeScript project in a solution which uses ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," comments somehow breaks the implicit referencing behaviour built into Visual Studio for other TypeScript projects in the solution. I can say this with some confidence as if I pull out the ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," comments from the top of the test file that we've converted then it's business as usual - the TypeScript Language Service lives once more. I'm sure you can see the problem here though: the TypeScript test file doesn't compile. All rather unsatisfactory."),Object(a.b)("p",null,"I suspect that if I added ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," comments throughout the web project the TypeScript Language Service would be just fine. But I rather like the implicit referencing functionality so I'm not inclined to do that. After reaching something of a brick wall and thinking I had encountered a bug in the TypeScript Language service I ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/673"},"raised an issue on GitHub"),"."),Object(a.b)("h2",{id:"solutions"},"Solutions...."),Object(a.b)("p",null,"Thanks to the help of ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mhegazy"},"Mohamed Hegazy")," it emerged that the problem was down to missing ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," comments in my ",Object(a.b)("inlineCode",{parentName:"p"},"sageDetail")," controller tests. One thing I had not considered was the 2 different ways each of my TypeScript projects were working:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Proverb.Web uses the Visual Studio implicit referencing functionality. This means that I do not need to use ",Object(a.b)("inlineCode",{parentName:"li"},"reference")," comments in the TypeScript files in Proverb.Web."),Object(a.b)("li",{parentName:"ul"},"Proverb.Web.JavaScript does ","*",Object(a.b)("strong",{parentName:"li"},"not"),"*"," uses the implicit referencing functionality. It needs ",Object(a.b)("inlineCode",{parentName:"li"},"reference")," comments to resolve references.")),Object(a.b)("p",null,"The important thing to take away from this (and the thing I had overlooked) was that Proverb.Web.JavaScript uses ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," comments to pull in Proverb.Web TypeScript files. Those files have dependencies which are ","*",Object(a.b)("strong",{parentName:"p"},"not"),"*"," stated using ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," comments. So the compiler trips up when it tries to walk the dependency tree - there are no ",Object(a.b)("inlineCode",{parentName:"p"},"reference")," comments to be followed! So for example, ",Object(a.b)("inlineCode",{parentName:"p"},"common.ts")," has a dependency upon ",Object(a.b)("inlineCode",{parentName:"p"},"logger.ts"),". Fixing the TypeScript Language Service involves ensuring that the full dependency list is included in the ",Object(a.b)("inlineCode",{parentName:"p"},"sageDetail")," controller tests file, like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular-mocks.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular-route.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/toastr/toastr.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/underscore/underscore.d.ts" />\n/// <reference path="../../../proverb.web/app/sages/sagedetail.ts" />\n/// <reference path="../../../proverb.web/app/common/logger.ts" />\n/// <reference path="../../../proverb.web/app/common/common.ts" />\n/// <reference path="../../../proverb.web/app/services/datacontext.ts" />\n/// <reference path="../../../proverb.web/app/services/repositories.ts" />\n/// <reference path="../../../proverb.web/app/services/repository.sage.ts" />\n/// <reference path="../../../proverb.web/app/services/repository.saying.ts" />\n/// <reference path="../../../proverb.web/app/app.ts" />\n/// <reference path="../../../proverb.web/app/config.route.ts" />\n')),Object(a.b)("p",null,"With this in place you have a working solution, albeit one that is a little flaky. ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/673#issuecomment-56024348"},"An alternative solution was suggested by Noel Abrahams")," which I quote here:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Why not do the following?"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"Compile Proverb.Web with --declarations and the option for combining output into a single file. This should create a Proverb.Web.d.ts in your output directory."),Object(a.b)("li",{parentName:"ul"},"In Proverb.Web.Tests.JavaScript add a reference to this file."),Object(a.b)("li",{parentName:"ul"},'Right-click Proverb.Web.Tests.JavaScript select "Build Dependencies" > "Project Dependencies" and add a reference to Proverb.Web.')),Object(a.b)("p",{parentName:"blockquote"},"I don't think directly referencing TypeScript source files is a good idea, because it causes the file to be rebuilt every time the dependant project is compiled.")),Object(a.b)("p",null,"Mohamed rather liked this solution. It looks like some more work is due to be done on the TypeScript tooling to make this less headache-y in future."))}p.isMDXComponent=!0}}]);
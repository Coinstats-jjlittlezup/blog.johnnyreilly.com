(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1210:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,p=h["".concat(i,".").concat(u)]||h[u]||g[u]||r;return n?o.a.createElement(p,s(s({ref:t},c),{},{components:n})):o.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},806:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(4),o=n(10),r=(n(0),n(1210)),i={title:"Unit Testing an Angular Controller with Jasmine",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Jasmine","Controllers","promises","Unit tests","AngularJS"],hide_table_of_contents:!1},s={permalink:"/2014/09/10/unit-testing-angular-controller-with",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-09-10-unit-testing-angular-controller-with.md",source:"@site/blog/2014-09-10-unit-testing-angular-controller-with.md",title:"Unit Testing an Angular Controller with Jasmine",description:"Anyone who reads my blog will know that I have been long in the habit of writing unit tests for my C# code. I'm cool like that. However, it took me a while to get up and running writing unit tests for my JavaScript code. I finally got there using a combination of Jasmine 2.0 and Chutzpah. (Jasmine being my test framework and Chutzpah being my test runner.)",date:"2014-09-10T00:00:00.000Z",formattedDate:"September 10, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"Controllers",permalink:"/tags/controllers"},{label:"promises",permalink:"/tags/promises"},{label:"Unit tests",permalink:"/tags/unit-tests"},{label:"AngularJS",permalink:"/tags/angular-js"}],readingTime:7.61,truncated:!1,prevItem:{title:"Journalling the Migration of Jasmine Tests to TypeScript",permalink:"/2014/09/13/migrating-jasmine-tests-to-typescript"},nextItem:{title:"Running JavaScript Unit Tests in AppVeyor",permalink:"/2014/09/06/running-javascript-unit-tests-in-appveyor"}},l=[{value:"What I&#39;m Testing",id:"what-im-testing",children:[{value:"sagesDetail.ts",id:"sagesdetailts",children:[]},{value:"sageDetail.js",id:"sagedetailjs",children:[]}]},{value:"Now for the Tests",id:"now-for-the-tests",children:[{value:"Jasmine tests for sageDetail.js",id:"jasmine-tests-for-sagedetailjs",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Anyone who reads my blog will know that I have been long in the habit of writing unit tests for my C# code. I'm cool like that. However, it took me a while to get up and running writing unit tests for my JavaScript code. I finally ",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2014/03/the-surprisingly-happy-tale-of-visual.html"},"got there")," using a combination of Jasmine 2.0 and Chutzpah. (Jasmine being my test framework and Chutzpah being my test runner.)"),Object(r.b)("p",null," I'm getting properly into the habit of testing my JavaScript. I won't pretend it's been particularly fun but I firmly believe it will end up being useful... That's what I tell myself during the long dark tea-times of the soul anyway."),Object(r.b)("p",null,"I have a side project called ",Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Proverb"},"Proverb"),". It doesn't do anything in particular - for the most part it's a simple application that displays the collected wise sayings of a team that I used to be part of. There's not much to it - a bit of CRUD, a dashboard. Not much more. Because of the project's simplicity it's ideal to use Proverb's underlying idea when trying out new technologies / frameworks. ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Paul_Halmos"},"The best way to learn is to do"),'. So if I want to learn "X", then building Proverb using "X" is a good way to go.'),Object(r.b)("p",null,"I digress already. I had a version of Proverb built using a combination of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Proverb/tree/master/AngularTypeScript"},"AngularJS and TypeScript"),". I had written the Angular side of Proverb without any tests. Now I was able to write JavaScript tests for my Angular code that's just what I set out to do. It should prove something of a of ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Kata_(programming)"},"Code Kata")," too."),Object(r.b)("p",null,"Whilst I'm at it I thought it might prove helpful if I wrote up how I approached writing unit tests for a single Angular controller. So here goes."),Object(r.b)("h2",{id:"what-im-testing"},"What I'm Testing"),Object(r.b)("p",null,"I have an Angular controller called ",Object(r.b)("inlineCode",{parentName:"p"},"sagesDetail"),". It powers this screen:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/--OBcJ0FLlmI/VBA_R_UpnXI/AAAAAAAAAtE/Zi4K4dR6PU8/s640/sageDetailScreen.png",alt:null})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"sagesDetail")," is a very simple controller. It does these things:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'Load the "sage" (think of it as just a "user") and make it available on the controller so it can be bound to the view.'),Object(r.b)("li",{parentName:"ol"},"Set the view title."),Object(r.b)("li",{parentName:"ol"},"Log view activation."),Object(r.b)("li",{parentName:"ol"},"Expose a ",Object(r.b)("inlineCode",{parentName:"li"},"gotoEdit")," method which, when called, redirects the user to the edit screen.")),Object(r.b)("p",null,"The controller is written in TypeScript and looks like this:"),Object(r.b)("h3",{id:"sagesdetailts"},"sagesDetail.ts"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'module controllers {\n\n    "use strict";\n\n    var controllerId = "sageDetail";\n\n    interface sageDetailRouteParams extends ng.route.IRouteParamsService {\n        id: string;\n    }\n\n    class SageDetail {\n\n        log: loggerFunction;\n        sage: sage;\n        title: string;\n\n        static $inject = ["$location", "$routeParams", "common", "datacontext"];\n        constructor(\n            private $location: ng.ILocationService,\n            private $routeParams: sageDetailRouteParams,\n            private common: common,\n            private datacontext: datacontext\n            ) {\n\n            this.sage = undefined;\n            this.title = "Sage Details";\n\n            this.log = common.logger.getLogFn(controllerId);\n\n            this.activate();\n        }\n\n        // Prototype methods\n\n        activate() {\n            var id = parseInt(this.$routeParams.id, 10);\n            var dataPromises: ng.IPromise<any>[] = [this.datacontext.sage.getById(id, true).then(data => this.sage = data)];\n\n            this.common.activateController(dataPromises, controllerId, this.title)\n                .then(() => {\n                    this.log("Activated Sage Details View");\n                    this.title = "Sage Details: " + this.sage.name;\n                });\n        }\n\n        gotoEdit() {\n            this.$location.path("/sages/edit/" + this.sage.id);\n        }\n    }\n\n    angular.module("app").controller(controllerId, SageDetail);\n}\n')),Object(r.b)("p",null,"When compiled to JavaScript it looks like this:"),Object(r.b)("h3",{id:"sagedetailjs"},"sageDetail.js"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'var controllers;\n(function (controllers) {\n    "use strict";\n\n    var controllerId = "sageDetail";\n\n    var SageDetail = (function () {\n        function SageDetail($location, $routeParams, common, datacontext) {\n            this.$location = $location;\n            this.$routeParams = $routeParams;\n            this.common = common;\n            this.datacontext = datacontext;\n            this.sage = undefined;\n            this.title = "Sage Details";\n\n            this.log = common.logger.getLogFn(controllerId);\n\n            this.activate();\n        }\n        // Prototype methods\n        SageDetail.prototype.activate = function () {\n            var _this = this;\n            var id = parseInt(this.$routeParams.id, 10);\n            var dataPromises = [this.datacontext.sage.getById(id, true).then(function (data) {\n                    return _this.sage = data;\n                })];\n\n            this.common.activateController(dataPromises, controllerId, this.title).then(function () {\n                _this.log("Activated Sage Details View");\n                _this.title = "Sage Details: " + _this.sage.name;\n            });\n        };\n\n        SageDetail.prototype.gotoEdit = function () {\n            this.$location.path("/sages/edit/" + this.sage.id);\n        };\n        SageDetail.$inject = ["$location", "$routeParams", "common", "datacontext"];\n        return SageDetail;\n    })();\n\n    angular.module("app").controller(controllerId, SageDetail);\n})(controllers || (controllers = {}));\n//# sourceMappingURL=sageDetail.js.map\n')),Object(r.b)("h2",{id:"now-for-the-tests"},"Now for the Tests"),Object(r.b)("p",null,"I haven't yet made the move of switching over my Jasmine tests from JavaScript to TypeScript. (It's on my list but there's only so many things you can do at once...) For that reason the tests you'll see here are straight JavaScript. Below you will see the tests for the ",Object(r.b)("inlineCode",{parentName:"p"},"sageDetail")," controller."),Object(r.b)("p",null,"I have put very comments in the test code to make clear the intent to you, dear reader. Annotated the life out of them. Naturally I wouldn't expect a test to be so heavily annotated in a typical test suite - and you can be sure mine normally aren't!"),Object(r.b)("h3",{id:"jasmine-tests-for-sagedetailjs"},"Jasmine tests for sageDetail.js"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'describe("Proverb.Web -> app-> controllers ->", function () {\n\n    // Before each test runs we\'re going to need ourselves an Angular App to test - go fetch!\n    beforeEach(function () {\n\n        module("app");  // module is an alias for <a href="https://docs.angularjs.org/api/ngMock/function/angular.mock.module">angular.mock.module</a>\n    });\n\n    // Tests for the sageDetail controller\n    describe("sageDetail ->", function () {\n\n        // Declare describe-scoped variables \n        var $rootScope, \n            getById_deferred, // deferred used for promises\n            $location, $routeParams_stub, common, datacontext, // controller dependencies\n            sageDetailController; // the controller\n\n        // Before each test runs set up the controller using inject - an alias for <a href="https://docs.angularjs.org/api/ngMock/function/angular.mock.inject">angular.mock.inject</a>\n        beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _$location_, _common_, _datacontext_) {\n\n            // Note how each parameter is prefixed and suffixed with "_" - this an Angular nicety\n            // which allows you to have variables in your tests with the original reference name.\n            // So here we assign the injected parameters to the describe-scoped variables:\n            $rootScope = _$rootScope_;\n            $q = _$q_;\n            $location = _$location_;\n            common = _common_;\n            datacontext = _datacontext_;\n\n            // Our controller has a dependency on an "id" property passed on the $routeParams\n            // We\'re going to stub this out with a JavaScript object literal\n            $routeParams_stub = { id: "10" };\n\n            // Our controller depends on a promise returned from this function: datacontext.sage.getById\n            // Well strictly speaking it also uses a promise for activateController but since the activateController\n            // promise just wraps the getById promise it will be resolved when the getById promise is.\n            // Here we create a deferred representing the getById promise which we can resolve as we need to \n            getById_deferred = $q.defer();\n\n            // set up a spy on datacontext.sage.getById and set it to return the promise of getById_deferred\n            // this allows us to #1 detect that getById has been called \n            // and #2 resolve / reject our promise as our test requires using getById_deferred\n            spyOn(datacontext.sage, "getById").and.returnValue(getById_deferred.promise);\n\n            // set up a spy on common.activateController and set it to call through\n            // this allows us to detect that activateController has been called whilst \n            // maintaining existing controller functionality\n            spyOn(common, "activateController").and.callThrough();\n\n            // set up spys on common.logger.getLogFn and $location.path so we can detect they have been called\n            spyOn(common.logger, "getLogFn").and.returnValue(jasmine.createSpy("log"));\n            spyOn($location, "path").and.returnValue(jasmine.createSpy("path"));\n\n            // create a sageDetail controller and inject the dependencies we have set up\n            sageDetailController = _$controller_("sageDetail", {\n                $location: $location,\n                $routeParams: $routeParams_stub,\n                common: common,\n                datacontext: datacontext\n            });\n        }));\n\n        // Tests for the controller state at the point of the sageDetail controller\'s creation\n        // ie before the getById / activateController promises have been resolved \n        // So this tests the constructor (function) and the activate function up to the point\n        // of the promise calls\n        describe("on creation ->", function () {\n\n            it("controller should have a title of \'Sage Details\'", function () {\n\n                // tests this code has executed:\n                // this.title = "Sage Details";\n                expect(sageDetailController.title).toBe("Sage Details");\n            });\n\n            it("controller should have no sage", function () {\n\n                // tests this code has executed:\n                // this.sage = undefined;\n                expect(sageDetailController.sage).toBeUndefined();\n            });\n\n            it("datacontext.sage.getById should be called", function () {\n\n                // tests this code has executed:\n                // this.datacontext.sage.getById(id, true)\n                expect(datacontext.sage.getById).toHaveBeenCalledWith(10, true);\n            });\n        });\n\n        // Tests for the controller state at the point of the resolution of the getById promise\n        // ie after the getById / activateController promises have been resolved \n        // So this tests the constructor (function) and the activate function after the point\n        // of the promise calls\n        describe("activateController ->", function () {\n\n            var sage_stub;\n            beforeEach(function () {\n                // Create a sage stub which will be used when resolving the getById promise\n                sage_stub = { name: "John" };\n            });\n\n            it("should set sages to be the resolved promise values", function () {\n\n                // Resolve the getById promise with the sage stub\n                getById_deferred.resolve(sage_stub);\n                $rootScope.$digest(); // So Angular processes the resolved promise\n\n                // tests this code has executed:\n                // this.sage = data\n                expect(sageDetailController.sage).toBe(sage_stub);\n            });\n\n            it("should log \'Activated Sage Details View\' and set title with name", function () {\n\n                // Resolve the getById promise with the sage stub\n                getById_deferred.resolve(sage_stub);\n                $rootScope.$digest(); // So Angular processes the resolved promise\n\n                // tests this code has executed:\n                // this.log("Activated Sage Details View");\n                // this.title = "Sage Details: " + this.sage.name;\n                expect(sageDetailController.log).toHaveBeenCalledWith("Activated Sage Details View");\n                expect(sageDetailController.title).toBe("Sage Details: " + sage_stub.name);\n            });\n        });\n\n        // Tests for the gotoEdit function on the controller\n        // Note that this will only be called *after* a controller has been created\n        // and it depends upon a sage having first been loaded\n        describe("gotoEdit ->", function () {\n\n            var sage_stub;\n            beforeEach(function () {\n                // Create a sage stub which will be used when resolving the getById promise\n                sage_stub = { id: 20 };\n            });\n\n            it("should set $location.path to edit URL", function () {\n\n                // Resolve the getById promise with the sage stub\n                getById_deferred.resolve(sage_stub);\n                $rootScope.$digest(); // So Angular processes the resolved promise\n\n                sageDetailController.gotoEdit();\n\n                // tests this code has executed:\n                // this.$location.path("/sages/edit/" + this.sage.id);\n                expect($location.path).toHaveBeenCalledWith("/sages/edit/" + sage_stub.id);\n            });\n        });\n    });\n});\n')))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(958)),i={title:"AngularJS meet ASP.Net Server Validation",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp.net","directive","TypeScript","server validation","AngularJS"],hide_table_of_contents:!1},s={permalink:"/blog.johnnyreilly.com/2014/08/01/angularjs-meet-aspnet-server-validation",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-08-01-angularjs-meet-aspnet-server-validation.md",source:"@site/blog/2014-08-01-angularjs-meet-aspnet-server-validation.md",description:"So. You're using AngularJS to build your front end with ASP.Net running on the server side. You're a trustworthy dev - you know that validation on the client will only get you so far. You need to validate on the server.",date:"2014-08-01T00:00:00.000Z",tags:[{label:"asp.net",permalink:"/blog.johnnyreilly.com/tags/asp-net"},{label:"directive",permalink:"/blog.johnnyreilly.com/tags/directive"},{label:"TypeScript",permalink:"/blog.johnnyreilly.com/tags/type-script"},{label:"server validation",permalink:"/blog.johnnyreilly.com/tags/server-validation"},{label:"AngularJS",permalink:"/blog.johnnyreilly.com/tags/angular-js"}],title:"AngularJS meet ASP.Net Server Validation",readingTime:10.345,truncated:!1,prevItem:{title:"Getting more RESTful with Web API and IHttpActionResult",permalink:"/blog.johnnyreilly.com/2014/08/08/getting-more-RESTful-with-Web-API"},nextItem:{title:"HotTowel-Angular meet TypeScript",permalink:"/blog.johnnyreilly.com/2014/07/03/hottowel-angular-meet-typescript"}},l=[{value:"What do we need client side?",id:"what-do-we-need-client-side",children:[{value:"TypeScript",id:"typescript",children:[]},{value:"JavaScript",id:"javascript",children:[]},{value:"TypeScript",id:"typescript-1",children:[]},{value:"JavaScript",id:"javascript-1",children:[]},{value:"TypeScript",id:"typescript-2",children:[]},{value:"JavaScript",id:"javascript-2",children:[]}]},{value:"How can I get ASP.Net to send me this information?",id:"how-can-i-get-aspnet-to-send-me-this-information",children:[]}],c={toc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"So. You're using AngularJS to build your front end with ASP.Net running on the server side. You're a trustworthy dev - you know that validation on the client will only get you so far. You need to validate on the server."),Object(o.b)("p",null," My particular scenario is where you have a form which you are saving. Angular serves you well when it comes to hooking in your own client side validation. But it doesn't really ship with anything that supports ",Object(o.b)("strong",{parentName:"p"},"nicely")," presenting server side validation on the client. Invariably when you look around you find people duplicating their server side validation on the client and presenting all their server side validation in a ",Object(o.b)("inlineCode",{parentName:"p"},"&lt;div&gt;")," at the top of the screen."),Object(o.b)("p",null,"This works but it's not as helpful to the user as it might be. It groups together all the validation from the server into one place. What I want is field level validation from the server that's presented on a field level basis on the screen. Like this:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://2.bp.blogspot.com/-vxr6_ajRNj8/U9tQjs3SS3I/AAAAAAAAAr8/1HoOUJdPO0w/s1600/server-error.png"},Object(o.b)("img",{parentName:"a",src:"http://2.bp.blogspot.com/-vxr6_ajRNj8/U9tQjs3SS3I/AAAAAAAAAr8/1HoOUJdPO0w/s320/server-error.png",alt:"null"})),"I know. ",Object(o.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Endymion_(poem)"},"A thing of beauty is a joy forever.")," Let us travel together to this promised land..."),Object(o.b)("h2",{id:"what-do-we-need-client-side"},"What do we need client side?"),Object(o.b)("p",null,"Well, let's start with a directive which I'll call ",Object(o.b)("inlineCode",{parentName:"p"},"serverError"),". This plants a validation message just ",Object(o.b)("em",{parentName:"p"},"after")," the element being validated which is displayed when that element is declared invalid by the server. (That is to say when the ",Object(o.b)("inlineCode",{parentName:"p"},"ngModel")," has a ",Object(o.b)("inlineCode",{parentName:"p"},"$error.server")," set.) When the element is changed then the ",Object(o.b)("inlineCode",{parentName:"p"},"$error.server")," is unset in order that validation can be hidden and the form can be revalidated against the server."),Object(o.b)("p",null,"I'm using TypeScript with Angular so for my JavaScript examples I'll give you both the TypeScript which I originally wrote and the generated JavaScript as well."),Object(o.b)("h3",{id:"typescript"},"TypeScript"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'interface serverErrorScope extends ng.IScope {\n    name: string;\n    serverError: { [field: string]: string };\n}\n\napp.directive("serverError", [function () {\n\n  // Usage:\n  // <input class="col-xs-12 col-sm-9" \n  //        name="sage.name" ng-model="vm.sage.name" server-error="vm.errors" />\n  var directive = {\n    link: link,\n    restrict: "A",\n    require: "ngModel", // supply the ngModel controller as the 4th parameter in the link function\n    scope: { // Pass in name and serverError to the scope\n      name: "@",\n      serverError: "="\n    }\n  };\n  return directive;\n\n  function link(scope: serverErrorScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModelController: ng.INgModelController) {\n\n    // Bootstrap alert template for error\n    var template = \'<div class="alert alert-danger" role="alert">\' +\n                               \'<i class="glyphicon glyphicon-warning-sign"></i> \' +\n                               \'%error%</div>\';\n\n    // Create an element to hold the validation message\n    var decorator = angular.element(\'<div></div>\');\n    element.after(decorator);\n\n    // Watch ngModelController.$error.server & show/hide validation accordingly\n    scope.$watch(safeWatch(() => ngModelController.$error.server), showHideValidation);\n\n    function showHideValidation(serverError: boolean) {\n\n      // Display an error if serverError is true otherwise clear the element\n      var errorHtml = "";\n      if (serverError) {\n        // Aliasing serverError and name to make it more obvious what their purpose is\n        var errorDictionary = scope.serverError;\n        var errorKey = scope.name;\n        errorHtml = template.replace(/%error%/, errorDictionary[errorKey] || "Unknown error occurred...");\n      }\n      decorator.html(errorHtml);\n    }\n\n    // wipe the server error message upon keyup or change events so can revalidate with server \n    element.on("keyup change", (event) => {\n      scope.$apply(() => { ngModelController.$setValidity("server", true); });\n    });\n  }\n}]);\n\n// Thanks @Basarat! http://stackoverflow.com/a/24863256/761388\nfunction safeWatch<t extends="" function="">(expression: T) {\n  return () => {\n    try {\n      return expression();\n    }\n    catch (e) {\n      return null;\n    }\n  };\n}\n</t>\n')),Object(o.b)("h3",{id:"javascript"},"JavaScript"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'app.directive("serverError", [function () {\n  // Usage:\n  // <input class="col-xs-12 col-sm-9" \n  //        name="sage.name" ng-model="vm.sage.name" server-error="vm.errors" />\n  var directive = {\n    link: link,\n    restrict: "A",\n    require: "ngModel",\n    scope: {\n      name: "@",\n      serverError: "="\n    }\n  };\n  return directive;\n\n  function link(scope, element, attrs, ngModelController) {\n    // Bootstrap alert template for error\n    var template = \'<div class="alert alert-danger" role="alert">\' +\n                               \'<i class="glyphicon glyphicon-warning-sign"></i> \' +\n                               \'%error%</div>\';\n\n    // Create an element to hold the validation message\n    var decorator = angular.element(\'<div></div>\');\n    element.after(decorator);\n\n    // Watch ngModelController.$error.server & show/hide validation accordingly\n    scope.$watch(safeWatch(function () {\n      return ngModelController.$error.server;\n    }), showHideValidation);\n\n    function showHideValidation(serverError) {\n      // Display an error if serverError is true otherwise clear the element\n      var errorHtml = "";\n      if (serverError) {\n        // Aliasing serverError and name to make it more obvious what their purpose is\n        var errorDictionary = scope.serverError;\n        var errorKey = scope.name;\n        errorHtml = template.replace(/%error%/, errorDictionary[errorKey] || "Unknown error occurred...");\n      }\n      decorator.html(errorHtml);\n    }\n\n    // wipe the server error message upon keyup or change events so can revalidate with server\n    element.on("keyup change", function (event) {\n      scope.$apply(function () {\n        ngModelController.$setValidity("server", true);\n      });\n    });\n  }\n}]);\n\n// Thanks @Basarat! http://stackoverflow.com/a/24863256/761388\nfunction safeWatch(expression) {\n  return function () {\n    try  {\n      return expression();\n    } catch (e) {\n      return null;\n    }\n  };\n}\n')),Object(o.b)("p",null,"If you look closely at this directive you'll see it is restricted to be used as an attribute and it depends on 2 things:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The value that the ",Object(o.b)("inlineCode",{parentName:"li"},"server-error")," attribute is set to should be an object which will contain key / values where the keys represent fields that are being validated."),Object(o.b)("li",{parentName:"ol"},"The element being validated must have a name property (which will be used to look up the validation message in the ",Object(o.b)("inlineCode",{parentName:"li"},"server-error"),' error "dictionary".')),Object(o.b)("p",null,'Totally not clear, right? Let\'s have an example. Here is my "sageEdit" screen which you saw the screenshot of earlier:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<section class="mainbar" ng-controller="sageEdit as vm">\n    <section class="matter">\n        <div class="container-fluid">\n            <form name="form" novalidate role="form">\n                <div>\n                    <button class="btn btn-info"\n                            ng-click="vm.save()"\n                            ng-disabled="!vm.canSave">\n                        <i class="glyphicon glyphicon-save"></i>Save\n                    </button>\n                    <span ng-show="vm.hasChanges"\n                          class="dissolve-animation ng-hide">\n                        <i class="glyphicon glyphicon-asterisk orange"></i>\n                    </span>\n                </div>\n                <div class="widget wblue">\n                    <div data-cc-widget-header title="{{vm.title}}"></div>\n                    <div class="widget-content form-horizontal">\n                        <div class="form-group">\n                            <label class="col-xs-12 col-sm-2">Name</label>\n                            <input class="col-xs-12 col-sm-9" \n                                   name="sage.name" ng-model="vm.sage.name" \n                                   server-error="vm.errors" />\n                        </div>\n                        <div class="form-group">\n                            <label class="col-xs-12 col-sm-2">Username</label>\n                            <input class="col-xs-12 col-sm-9" \n                                   name="sage.userName" ng-model="vm.sage.userName" \n                                   server-error="vm.errors" />\n                        </div>\n                        <div class="form-group">\n                            <label class="col-xs-12 col-sm-2">Email</label>\n                            <input class="col-xs-12 col-sm-9"\n                                   type="email"\n                                   name="sage.email" ng-model="vm.sage.email" \n                                   server-error="vm.errors" />\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </section>\n</section>\n')),Object(o.b)("p",null,"If you look closely at where ",Object(o.b)("inlineCode",{parentName:"p"},"server-error"),' is used we have a name attribute set (eg "sage.email") and we\'re passing in something called ',Object(o.b)("inlineCode",{parentName:"p"},"<em>vm.</em>errors")," as the ",Object(o.b)("inlineCode",{parentName:"p"},"server-error")," attribute value. That's because we're using the \"controller as\" syntax and our controller is called ",Object(o.b)("inlineCode",{parentName:"p"},"vm"),"."),Object(o.b)("p",null,"On that controller we're going to have a dictionary style object called ",Object(o.b)("inlineCode",{parentName:"p"},"errors"),'. If you wanted to you could put that object on the scope instead and omit the "vm." prefix. You could call it ',Object(o.b)("inlineCode",{parentName:"p"},"wrongThingsWhatISpottedWithYourModel")," or ",Object(o.b)("inlineCode",{parentName:"p"},"barry")," ","-"," whatever floats your boat really. You get my point; it's flexible."),Object(o.b)("p",null,"Let's take a look at our sageEdit Angular controller:"),Object(o.b)("h3",{id:"typescript-1"},"TypeScript"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'module controllers {\n\n  "use strict";\n\n  interface sageEditRouteParams extends ng.route.IRouteParamsService {\n    id: number;\n  }\n\n  interface sageEditScope extends ng.IScope {\n    form: ng.IFormController;\n  }\n\n  class SageEdit {\n\n    errors: { [field: string]: string };\n    log: loggerFunction;\n    logError: loggerFunction;\n    logSuccess: loggerFunction;\n    sage: sage;\n    title: string;\n\n    private _isSaving: boolean;\n\n    static $inject = ["$location", "$routeParams", "$scope", "common", "datacontext"];\n    constructor(\n      private $location: ng.ILocationService,\n      private $routeParams: sageEditRouteParams,\n      private $scope: sageEditScope,\n      private common: common,\n      private datacontext: datacontext\n      ) {\n\n      this.errors = {};\n      this.log = common.logger.getLogFn(controllerId);\n      this.logError = common.logger.getLogFn(controllerId, "error");\n      this.logSuccess = common.logger.getLogFn(controllerId, "success");\n      this.sage = undefined;\n      this.title = "Sage Edit";\n\n      this._isSaving = false;\n\n      this.activate();\n    }\n\n    // Prototype methods\n\n    activate() {\n      var id = this.$routeParams.id;\n      var dataPromises: ng.IPromise<any>[] = [this.getSage(id)];\n\n      this.common.activateController(dataPromises, controllerId, this.title)\n        .then(() => {\n          this.log("Activated Sage Edit View");\n          this.title = "Sage Edit: " + this.sage.name;\n        });\n    }\n\n    getSage(id: number) {\n      return this.datacontext.sage.getById(id).then(sage => {\n        this.sage = sage;\n      });\n    }\n\n    save() {\n\n      this.errors = {}; //Wipe server errors\n      this._isSaving = true;\n      this.datacontext.sage.save(this.sage).then(response => {\n\n        if (response.success) {\n          this.sage = response.entity;\n          this.logSuccess("Saved " + this.sage.name + " [" + this.sage.id + "]");\n          this.$location.path("/sages/detail/" + this.sage.id);\n        }\n        else {\n          this.logError("Failed to save", response.errors);\n\n          angular.forEach(response.errors, (errors, field) => {\n            (<ng.INgModelController>this.$scope.form[field]).$setValidity("server", false);\n            this.errors[field] = errors.join(",");\n          });\n        }\n\n        this._isSaving = false;\n      });\n    }\n\n    // Properties\n\n    get hasChanges(): boolean {\n      return this.$scope.form.$dirty;\n    }\n\n    get canSave(): boolean {\n      return this.hasChanges && !this._isSaving && this.$scope.form.$valid;\n    }\n  }\n\n  var controllerId = "sageEdit";\n  angular.module("app").controller(controllerId, SageEdit);\n}\n')),Object(o.b)("h3",{id:"javascript-1"},"JavaScript"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'var controllers;\n(function (controllers) {\n  "use strict";\n\n  var SageEdit = (function () {\n    function SageEdit($location, $routeParams, $scope, common, datacontext) {\n      this.$location = $location;\n      this.$routeParams = $routeParams;\n      this.$scope = $scope;\n      this.common = common;\n      this.datacontext = datacontext;\n      this.errors = {};\n      this.log = common.logger.getLogFn(controllerId);\n      this.logError = common.logger.getLogFn(controllerId, "error");\n      this.logSuccess = common.logger.getLogFn(controllerId, "success");\n      this.sage = undefined;\n      this.title = "Sage Edit";\n\n      this._isSaving = false;\n\n      this.activate();\n    }\n    // Prototype methods\n    SageEdit.prototype.activate = function () {\n      var _this = this;\n      var id = this.$routeParams.id;\n      var dataPromises = [this.getSage(id)];\n\n      this.common.activateController(dataPromises, controllerId, this.title).then(function () {\n        _this.log("Activated Sage Edit View");\n        _this.title = "Sage Edit: " + _this.sage.name;\n      });\n    };\n\n    SageEdit.prototype.getSage = function (id) {\n      var _this = this;\n      return this.datacontext.sage.getById(id).then(function (sage) {\n        _this.sage = sage;\n      });\n    };\n\n    SageEdit.prototype.save = function () {\n      var _this = this;\n      this.errors = {}; //Wipe server errors\n      this._isSaving = true;\n      this.datacontext.sage.save(this.sage).then(function (response) {\n        if (response.success) {\n          _this.sage = response.entity;\n          _this.logSuccess("Saved " + _this.sage.name + " [" + _this.sage.id + "]");\n\n          _this.$location.path("/sages/detail/" + _this.sage.id);\n        } else {\n          _this.logError("Failed to save", response.errors);\n\n          angular.forEach(response.errors, function (errors, field) {\n            _this.$scope.form[field].$setValidity("server", false);\n            _this.errors[field] = errors.join(",");\n          });\n        }\n\n        _this._isSaving = false;\n      });\n    };\n\n    Object.defineProperty(SageEdit.prototype, "hasChanges", {\n      // Properties\n      get: function () {\n        return this.$scope.form.$dirty;\n      },\n      enumerable: true,\n      configurable: true\n    });\n\n    Object.defineProperty(SageEdit.prototype, "canSave", {\n      get: function () {\n        return this.hasChanges && !this._isSaving && this.$scope.form.$valid;\n      },\n      enumerable: true,\n      configurable: true\n    });\n    SageEdit.$inject = ["$location", "$routeParams", "$scope", "common", "datacontext"];\n    return SageEdit;\n  })();\n\n  var controllerId = "sageEdit";\n  angular.module("app").controller(controllerId, SageEdit);\n})(controllers || (controllers = {}));\n')),Object(o.b)("p",null,"Okay - this is a shedload of code and most of it isn't relevant to you. I share it as I like to see things in context. Let's focus in on the important bits that you should take away. Firstly, our controller has a property called ",Object(o.b)("inlineCode",{parentName:"p"},"errors"),"."),Object(o.b)("p",null,"Secondly, when we attempt to save our server sends back a JSON payload which, given a validation failure, looks something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "success":false,\n  "errors":{\n    "sage.name":["The Name field is required."],\n    "sage.userName":[\n      "The UserName field is required.",\n      "The field UserName must be a string with a minimum length of 3 and a maximum length of 30."\n    ],\n    "sage.email":["The Email field is not a valid e-mail address."]\n  }\n}\n')),Object(o.b)("p",null,"So let's pare back our ",Object(o.b)("inlineCode",{parentName:"p"},"save")," function to the bare necessities (those simple bare necessities, forget about your worries and your strife...):"),Object(o.b)("h3",{id:"typescript-2"},"TypeScript"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'save() {\n\n      this.errors = {}; //Wipe server errors\n\n      this.datacontext.sage.save(this.sage).then(response => {\n\n        if (response.success) {\n          this.sage = response.entity;\n        }\n        else {\n          angular.forEach(response.errors, (errors, field) => {\n            (<ng.INgModelController>this.$scope.form[field]).$setValidity("server", false);\n            this.errors[field] = errors.join(",");\n          });\n        }\n      });\n    }\n')),Object(o.b)("h3",{id:"javascript-2"},"JavaScript"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'SageEdit.prototype.save = function () {\n      var _this = this;\n      this.errors = {}; //Wipe server errors\n      this.datacontext.sage.save(this.sage).then(function (response) {\n        if (response.success) {\n          _this.sage = response.entity;\n        } else {\n          angular.forEach(response.errors, function (errors, field) {\n            _this.$scope.form[field].$setValidity("server", false);\n            _this.errors[field] = errors.join(",");\n          });\n        }\n      });\n    };\n')),Object(o.b)("p",null,"At the point of save we wipe any server error messages that might be stored on the client. Then, if we receive back a payload with errors we store those errors and set the validity of the relevant form element to false. This will trigger the display of the message by our directive."),Object(o.b)("p",null,"That's us done for the client side. You're no doubt now asking yourself this question:"),Object(o.b)("h2",{id:"how-can-i-get-aspnet-to-send-me-this-information"},"How can I get ASP.Net to send me this information?"),Object(o.b)("p",null,"So glad you asked. We've a simple model that looks like this which has a number of data annotations:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"public class Sage\n{\n  public int Id { get; set; }\n\n  [Required]\n  public string Name { get; set; }\n\n  [Required]\n  [StringLength(30, MinimumLength = 3)]\n  public string UserName { get; set; }\n\n  [EmailAddress]\n  public string Email { get; set; }\n}\n")),Object(o.b)("p",null,"When we save we post back to a Web API controller that looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n\n      return Ok(new\n      {\n        Success = false,\n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new\n    {\n      Success = true,\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n")),Object(o.b)("p",null,"As you can see, when ",Object(o.b)("inlineCode",{parentName:"p"},"ModelState")," is not valid we send back a dictionary of the ",Object(o.b)("inlineCode",{parentName:"p"},"ModelState")," error messages keyed by property name. We generate this with an extension method I wrote called ",Object(o.b)("inlineCode",{parentName:"p"},"ToErrorDictionary"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"public static class ModelStateExtensions\n{\n  public static Dictionary<string, IEnumerable<string>> ToErrorDictionary(\n    this System.Web.Http.ModelBinding.ModelStateDictionary modelState, bool camelCaseKeyName = true) \n  {\n    var errors = modelState\n      .Where(x => x.Value.Errors.Any())\n      .ToDictionary(\n        kvp => CamelCasePropNames(kvp.Key),\n        kvp => kvp.Value.Errors.Select(e => e.ErrorMessage)\n      );\n\n    return errors;\n  }\n\n  private static string CamelCasePropNames(string propName)\n  {\n    var array = propName.Split('.');\n    var camelCaseList = new string[array.Length];\n    for (var i = 0; i < array.Length; i++)\n    {\n      var prop = array[i];\n      camelCaseList[i] = prop.Substring(0, 1).ToLower() + prop.Substring(1, prop.Length - 1);\n    }\n    return string.Join(\".\", camelCaseList);\n  }\n}\n")),Object(o.b)("p",null,"That's it - your solution front to back. It would be quite easy to hook other types of validation in server-side (database level checks etc). I hope you find this useful."))}d.isMDXComponent=!0},958:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),g=r,u=p["".concat(i,".").concat(g)]||p[g]||h[g]||o;return t?a.a.createElement(u,s(s({ref:n},c),{},{components:t})):a.a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);
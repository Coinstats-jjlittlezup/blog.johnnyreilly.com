(window.webpackJsonp=window.webpackJsonp||[]).push([[844],{1166:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return v}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,v=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(v,s(s({ref:r},c),{},{components:t})):a.a.createElement(v,s({ref:r},c))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},208:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(8),o=(t(0),t(1166)),i={title:"My Unrequited Love for Isolate Scope",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Directives","TypeScript","javascript","UI Bootstrap","Isolated Scope","AngularJS"],hide_table_of_contents:!1},s={permalink:"/2014/08/12/my-unrequited-love-for-isolate-scope",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-08-12-my-unrequited-love-for-isolate-scope.md",source:"@site/blog/2014-08-12-my-unrequited-love-for-isolate-scope.md",description:"I wrote a little while ago about creating a directive to present server errors on the screen in an Angular application. In my own (not so humble opinion), it was really quite nice. I was particularly proud of my usage of isolate scope. However, pride comes before a fall.",date:"2014-08-12T00:00:00.000Z",formattedDate:"August 12, 2014",tags:[{label:"Directives",permalink:"/tags/directives"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"javascript",permalink:"/tags/javascript"},{label:"UI Bootstrap",permalink:"/tags/ui-bootstrap"},{label:"Isolated Scope",permalink:"/tags/isolated-scope"},{label:"AngularJS",permalink:"/tags/angular-js"}],title:"My Unrequited Love for Isolate Scope",readingTime:4.42,truncated:!1,prevItem:{title:"Running JavaScript Unit Tests in AppVeyor",permalink:"/2014/09/06/running-javascript-unit-tests-in-appveyor"},nextItem:{title:"Getting more RESTful with Web API and IHttpActionResult",permalink:"/2014/08/08/getting-more-RESTful-with-Web-API"}},l=[{value:"A New Hope",id:"a-new-hope",children:[{value:"serverError.ts",id:"servererrorts",children:[]},{value:"serverError.js",id:"servererrorjs",children:[]}]},{value:"My Plea",id:"my-plea",children:[]}],c={toc:l};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2014/08/angularjs-meet-aspnet-server-validation.html"},"I wrote a little while ago about creating a directive to present server errors on the screen in an Angular application"),". In my own (not so humble opinion), it was really quite nice. I was particularly proud of my usage of isolate scope. However, pride comes before a fall."),Object(o.b)("p",null," It turns out that using isolate scope in a directive is not always wise. Or rather \u2013 not always possible. And this is why:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'Error: [$compile:multidir] Multiple directives [datepickerPopup, serverError] asking for new/isolated scope on: &lt;input name="sage.dateOfBirth" class="col-xs-12 col-sm-9" type="text" value="" ng-click="vm.dateOfBirthDatePickerOpen()" server-error="vm.errors" ng-model="vm.sage.dateOfBirth" is-open="vm.dateOfBirthDatePickerIsOpen" datepicker-popup="dd MMM yyyy"&gt; '),"Ug. What happened here? Well, I had a date field that I was using my serverError directive on. Nothing too controversial there. The problem came when I tried to plug in ",Object(o.b)("a",{parentName:"p",href:"http://angular-ui.github.io/bootstrap/"},"UI Bootstrap\u2019s datepicker")," as well. That\u2019s right the directives are fighting. Sad face."),Object(o.b)("p",null,"To be more precise, it turns out that only one directive on an element is allowed to create an isolated scope. So if I want to use UI Bootstrap\u2019s datepicker (and I do) \u2013 well my serverError directive is toast."),Object(o.b)("h2",{id:"a-new-hope"},"A New Hope"),Object(o.b)("p",null,"So ladies and gentlemen, let me present serverError 2.0 \u2013 this time without isolated scope:"),Object(o.b)("h3",{id:"servererrorts"},"serverError.ts"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'(function () {\n  "use strict";\n\n  var app = angular.module("app");\n\n  // Plant a validation message to the right of the element when it is declared invalid by the server\n  app.directive("serverError", [function () {\n\n    // Usage:\n    // <input class="col-xs-12 col-sm-9" \n    //        name="sage.name" ng-model="vm.sage.name" server-error="vm.errors" />\n\n    var directive = {\n      link: link,\n      restrict: "A",\n      require: "ngModel" // supply the ngModel controller as the 4th parameter in the link function\n    };\n    return directive;\n\n    function link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModelController: ng.INgModelController) {\n      // Extract values from attributes (deliberately not using isolated scope)\n      var errorKey: string = attrs["name"]; // eg "sage.name"\n      var errorDictionaryExpression: string = attrs["serverError"]; // eg "vm.errors"\n\n      // Bootstrap alert template for error\n      var template = \'<div class="alert alert-danger col-xs-9 col-xs-offset-2" role="alert"><i class="glyphicon glyphicon-warning-sign larger"></i> %error%</div>\';\n\n      // Create an element to hold the validation message\n      var decorator = angular.element(\'<div></div>\');\n      element.after(decorator);\n\n      // Watch ngModelController.$error.server & show/hide validation accordingly\n      scope.$watch(safeWatch(() => ngModelController.$error.server), showHideValidation);\n\n      function showHideValidation(serverError: boolean) {\n\n        // Display an error if serverError is true otherwise clear the element\n        var errorHtml = "";\n        if (serverError) {\n          var errorDictionary: { [field: string]: string } = scope.$eval(errorDictionaryExpression);\n          errorHtml = template.replace(/%error%/, errorDictionary[errorKey] || "Unknown error occurred...");\n        }\n        decorator.html(errorHtml);\n      }\n\n      // wipe the server error message upon keyup or change events so can revalidate with server \n      element.on("keyup change", (event) => {\n        scope.$apply(() => { ngModelController.$setValidity("server", true); });\n      });\n    }\n  }]);\n\n  // Thanks @Basarat! http://stackoverflow.com/a/24863256/761388\n  function safeWatch<T extends Function>(expression: T) {\n    return () => {\n      try {\n        return expression();\n      }\n      catch (e) {\n        return null;\n      }\n    };\n  }\n})();\n')),Object(o.b)("h3",{id:"servererrorjs"},"serverError.js"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'(function () {\n  "use strict";\n\n  var app = angular.module("app");\n\n  // Plant a validation message to the right of the element when it is declared invalid by the server\n  app.directive("serverError", [function () {\n    // Usage:\n    // <input class="col-xs-12 col-sm-9" \n    //        name="sage.name" ng-model="vm.sage.name" server-error="vm.errors" />\n    var directive = {\n      link: link,\n      restrict: "A",\n      require: "ngModel"\n    };\n    return directive;\n\n    function link(scope, element, attrs, ngModelController) {\n      // Extract values from attributes (deliberately not using isolated scope)\n      var errorKey = attrs["name"];\n      var errorDictionaryExpression = attrs["serverError"];\n\n      // Bootstrap alert template for error\n      var template = \'<div class="alert alert-danger col-xs-9 col-xs-offset-2" role="alert"><i class="glyphicon glyphicon-warning-sign larger"></i> %error%</div>\';\n\n      // Create an element to hold the validation message\n      var decorator = angular.element(\'<div></div>\');\n      element.after(decorator);\n\n      // Watch ngModelController.$error.server & show/hide validation accordingly\n      scope.$watch(safeWatch(function () {\n        return ngModelController.$error.server;\n      }), showHideValidation);\n\n      function showHideValidation(serverError) {\n        // Display an error if serverError is true otherwise clear the element\n        var errorHtml = "";\n        if (serverError) {\n        var errorDictionary = scope.$eval(errorDictionaryExpression);\n        errorHtml = template.replace(/%error%/, errorDictionary[errorKey] || "Unknown error occurred...");\n        }\n        decorator.html(errorHtml);\n      }\n\n      // wipe the server error message upon keyup or change events so can revalidate with server\n      element.on("keyup change", function (event) {\n        scope.$apply(function () {\n        ngModelController.$setValidity("server", true);\n        });\n      });\n    }\n  }]);\n\n  // Thanks @Basarat! http://stackoverflow.com/a/24863256/761388\n  function safeWatch(expression) {\n    return function () {\n    try  {\n      return expression();\n    } catch (e) {\n      return null;\n    }\n    };\n  }\n})();\n')),Object(o.b)("p",null,"This version of the serverError directive is from a users perspective identical to the previous version. But it doesn\u2019t use isolated scope \u2013 this means it can be used in concert with other directives which do."),Object(o.b)("p",null,"It works by pulling the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"serverError")," values off the attrs parameter. ",Object(o.b)("inlineCode",{parentName:"p"},"name")," is just a string - the value of which never changes so it can be used as is. ",Object(o.b)("inlineCode",{parentName:"p"},"serverError")," is an expression that represents the error dictionary that is used to store the server error messages. This is accessed through use of ",Object(o.b)("inlineCode",{parentName:"p"},"scope.$eval")," as an when it needs to."),Object(o.b)("h2",{id:"my-plea"},"My Plea"),Object(o.b)("p",null,"What I\u2019ve outlined here works. I\u2019ll admit that usage of ",Object(o.b)("inlineCode",{parentName:"p"},"$eval")," makes me feel a little bit dirty (I\u2019ve got ",Object(o.b)("a",{parentName:"p",href:"http://www.jslint.com/lint.html#evil"},"\u201ceval is evil\u201d")," running through my head). Whilst it works, I\u2019m not sure what I\u2019ve done is necessarily best practice. After all ",Object(o.b)("a",{parentName:"p",href:"https://docs.angularjs.org/guide/directive"},"the Angular docs themselves say"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"*Best Practice:")," Use the scope option to create isolate scopes when making components that you want to reuse throughout your app. *")),Object(o.b)("p",null,"But as we\u2019ve seen this isn\u2019t always an option. I\u2019ve written this post to document my own particular struggle and ask the question \u201cis there a better way?\u201d If you know then please tell me!"))}p.isMDXComponent=!0}}]);
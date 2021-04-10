(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{1189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(h,p(p({ref:t},c),{},{components:n})):r.a.createElement(h,p({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(4),r=n(10),o=(n(0),n(1189)),i={title:"Angular UI Bootstrap Datepicker Weirdness",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Angular UI Bootstrap Datepicker"],hide_table_of_contents:!1},p={permalink:"/2015/05/23/angular-ui-bootstrap-datepicker-weirdness",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-05-23-angular-ui-bootstrap-datepicker-weirdness.md",source:"@site/blog/2015-05-23-angular-ui-bootstrap-datepicker-weirdness.md",description:"The Angular UI Bootstrap Datepicker is fan-dabby-dozy. But it has a ... pecularity. You can use the picker like this:",date:"2015-05-23T00:00:00.000Z",formattedDate:"May 23, 2015",tags:[{label:"Angular UI Bootstrap Datepicker",permalink:"/tags/angular-ui-bootstrap-datepicker"}],title:"Angular UI Bootstrap Datepicker Weirdness",readingTime:2.465,truncated:!1,prevItem:{title:"Back to the Future with Code First Migrations",permalink:"/2015/06/19/Back-to-the-Future-with-Code-First-Migrations"},nextItem:{title:"NgValidationFor Baby Steps",permalink:"/2015/05/11/ngvalidationfor-baby-steps"}},l=[],c={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://angular-ui.github.io/bootstrap/#/datepicker"},"Angular UI Bootstrap Datepicker")," is fan-dabby-dozy. But it has a ... pecularity. You can use the picker like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div ng-app="peskyDatepicker">\n   <div ng-controller="DatepickerDemoCtrl as vm">\n       <input type="text" class="form-control"\n              datepicker-popup="mediumDate"\n              is-open="vm.valuationDatePickerIsOpen"\n              ng-click="vm.valuationDatePickerOpen()"\n              ng-model="vm.valuationDate" />\n   </div>\n</div>\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"angular\n.module('peskyDatepicker', ['ui.bootstrap'])\n.controller('DatepickerDemoCtrl', [\nfunction () {\n  \n  var vm = this;\n  \n  vm.valuationDate = new Date();\n  vm.valuationDatePickerIsOpen = false;\n  \n  vm.valuationDatePickerOpen = function () {\n\n      this.valuationDatePickerIsOpen = true;\n  };\n}]);\n")),Object(o.b)("p",null,"The above code produces a textbox which, when clicked upon, renders the datepicker popup (which vanishes upon date selection). This works because the ",Object(o.b)("inlineCode",{parentName:"p"},"ng-click")," directive calls the ",Object(o.b)("inlineCode",{parentName:"p"},"valuationDatePickerOpen")," function on the controller which sets the ",Object(o.b)("inlineCode",{parentName:"p"},"valuationDatePickerIsOpen")," property to be ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and that property happens to be bound to the ",Object(o.b)("inlineCode",{parentName:"p"},"is-open")," attribute. Your knee bone connected to your thigh bone, Your thigh bone connected to your hip bone... This makes sense. This works. Great."),Object(o.b)("p",null,"But I want something a little prettier - I want to use the lovely calendar glyph to trigger the datepicker popup like in the docs. That should be really easy right? I just tweak the HTML to add a calendar button and the associated ",Object(o.b)("inlineCode",{parentName:"p"},'ng-click="vm.valuationDatePickerOpen()"'),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div ng-app="peskyDatepicker">\n    <div ng-controller="DatepickerDemoCtrl as vm">\n      <p class="input-group">\n        <input type="text" class="form-control" \n               datepicker-popup="mediumDate" \n               is-open="vm.valuationDatePickerIsOpen" \n               ng-click="vm.valuationDatePickerOpen()" \n               ng-model="vm.valuationDate" />\n        <span class="input-group-btn">\n          <button type="button" class="btn btn-default" \n                  ng-click="vm.valuationDatePickerOpen()">\n            <i class="glyphicon glyphicon-calendar"></i>\n          </button>\n        </span>\n      </p>\n    </div>\n</div>\n')),Object(o.b)("p",null,"Miraculously, this ",Object(o.b)("em",{parentName:"p"},"doesn't")," work. Which is strange - I mean it ought to... The same ",Object(o.b)("inlineCode",{parentName:"p"},"ng-click")," directive is sat on our new calendar button as is in place on the datepicker itself. So what's happening? Well let's do some investigation. If you take a look at the docs you'll see that their example with the calendar glyph is subtly different to our own. Namely, when the opener function is invoked, the official docs pass along ",Object(o.b)("inlineCode",{parentName:"p"},"$event"),". To what end? Well, the docs opener function does something that our own does not. This:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"$scope.open = function($event) {\n    $event.preventDefault();\n    $event.stopPropagation();\n\n    $scope.opened = true;\n  };\n")),Object(o.b)("p",null,"Ignore all the ",Object(o.b)("inlineCode",{parentName:"p"},"$scope")," malarkey - I want you to pay attention to what is happening with ",Object(o.b)("inlineCode",{parentName:"p"},"$event"),". ",Object(o.b)("inlineCode",{parentName:"p"},"preventDefault")," and ",Object(o.b)("inlineCode",{parentName:"p"},"stopPropogation")," are being called. This is probably relevant."),Object(o.b)("p",null,"I decided to do a little experimentation. I created a Plunk which demonstrates the datepicker and uses ",Object(o.b)("inlineCode",{parentName:"p"},"$watch")," to track what happens to ",Object(o.b)("inlineCode",{parentName:"p"},"valuationDatePickerIsOpen"),". The Plunk featured 2 calendar glyphs - the left one doesn't pass along ",Object(o.b)("inlineCode",{parentName:"p"},"$event")," to ",Object(o.b)("inlineCode",{parentName:"p"},"valuationDatePickerOpen")," when it is clicked and the right one does. When ",Object(o.b)("inlineCode",{parentName:"p"},"$event")," is passed we call ",Object(o.b)("inlineCode",{parentName:"p"},"preventDefault")," and ",Object(o.b)("inlineCode",{parentName:"p"},"stopPropogation"),"."),Object(o.b)("iframe",{src:"http://embed.plnkr.co/dJyF531w0QRGiAScRf15/preview",width:"100%",height:"450"}),Object(o.b)("p",null,"After a little experimentation of my own I discovered that calling ",Object(o.b)("inlineCode",{parentName:"p"},"$event.stopPropogation()")," is the magic bullet. Without that in place ",Object(o.b)("inlineCode",{parentName:"p"},"valuationDatePickerIsOpen")," gets set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and then immediately back to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," again. I do not know why. There may be an entirely sane reason for this - if so then please do post a comment and let me know. It wouldn't hurt for the Angular UI Bootstrap Datepicker docs to mention this. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/angular-ui/bootstrap/issues/3705"},"Perhaps it's time to submit a PR....")))}s.isMDXComponent=!0}}]);
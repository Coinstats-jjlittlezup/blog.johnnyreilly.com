(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[85866],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58270:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var i=n(22122),a=n(19756),o=(n(67294),n(3905)),r={title:"NgValidationFor Baby Steps",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net mvc","AngularJS","NgValidationFor"],hide_table_of_contents:!1},l={permalink:"/2015/05/11/ngvalidationfor-baby-steps",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-05-11-ngvalidationfor-baby-steps.md",source:"@site/blog/2015-05-11-ngvalidationfor-baby-steps.md",title:"NgValidationFor Baby Steps",description:"I thought as I start the NgValidationFor project I'd journal my progress. I'm writing this with someone particular in mind welcome!",date:"2015-05-11T00:00:00.000Z",formattedDate:"May 11, 2015",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"AngularJS",permalink:"/tags/angular-js"},{label:"NgValidationFor",permalink:"/tags/ng-validation-for"}],readingTime:3.39,truncated:!1,prevItem:{title:"Angular UI Bootstrap Datepicker Weirdness",permalink:"/2015/05/23/angular-ui-bootstrap-datepicker-weirdness"},nextItem:{title:"A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API",permalink:"/2015/05/05/a-tale-of-angular-html5mode-aspnet-mvc"}},s=[{value:"Getting up and running",id:"getting-up-and-running",children:[]},{value:"So what have we got?",id:"so-what-have-we-got",children:[]},{value:"So what now?",id:"so-what-now",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I thought as I start the ",(0,o.kt)("a",{parentName:"p",href:"http://blog.icanmakethiswork.io/2015/04/tonight-ill-start-open-source-project.html"},"NgValidationFor project")," I'd journal my progress. I'm writing this with someone particular in mind: me. Specifically, me in 2 years who will no doubt wonder why I made some of the choices I did. Everyone else, move along now - nothing to see. Unless the inner workings of someone else's mind are interesting to you... In which case: welcome!"),(0,o.kt)("h2",{id:"getting-up-and-running"},"Getting up and running"),(0,o.kt)("p",null,"I've got a project on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/NgValidationFor"},"GitHub")," and I'm starting to think about implementations. One thing that bit me on ",(0,o.kt)("a",{parentName:"p",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/"},"jVUN")," was being tied to a specific version of ASP.Net MVC. For each major release of ASP.Net MVC I needed separate builds / NuGet packages and the like. A pain. Particularly when it came to bug fixes for prior versions - the breaking changes with each version of MVC meant far more work was required when it came to shipping fixes for MVC 4 / MVC 3."),(0,o.kt)("p",null,"So with that in mind I'm going to try and limit my dependencies. I'm not saying I will never depend upon ASP.Net MVC - I may if I think it becomes useful to give the users a nicer API or if there's another compelling reason. But to start with I'm just going to focus on the translation of data annotations to Angular validation directive attributes."),(0,o.kt)("p",null,"To that end I'm going to begin with just a class library and an associated test project. I'm going to try and minimise the dependencies that NgValidationFor has. At least initially I may even see if I can sensibly avoid depending on ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Web")," (mindful of the upcoming ASP.Net 5 changes). Let's see."),(0,o.kt)("p",null,"A little time passes......."),(0,o.kt)("h2",{id:"so-what-have-we-got"},"So what have we got?"),(0,o.kt)("p",null,"My first efforts have resulted in the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.requiredattribute(v=vs.110).aspx">RequiredAttribute</a>'),". This is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/NgValidationFor/tree/6cf862a7638d3ed933cd0e075a1807b1414847da"},"code right now"),". It's made up of:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"NgValidationFor.Core - the core part of the project which converts data annotations into AngularJS 1.x validation directive attributes."),(0,o.kt)("li",{parentName:"ol"},"NgValidationFor.Core.UnitTests - the unit tests for the core"),(0,o.kt)("li",{parentName:"ol"},"NgValidationFor.Documentation - this is an ASP.Net MVC project which will become a documentation site for NgValidationFor. It also doubles as a way for me to try out NgValidationFor."),(0,o.kt)("li",{parentName:"ol"},"NgValidationFor.Documentation.UnitTests - unit tests for the documentation (there's none yet as I'm still spiking - but when I'm a little clearer, they will be)")),(0,o.kt)("p",null,"How can it be used? Well fairly easily. Take this simple model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using System.ComponentModel.DataAnnotations;\n\nnamespace NgValidationFor.Documentation.Models\n{\n    public class RequiredDemoModel\n    {\n        [Required]\n        public string RequiredField { get; set; }\n    }\n}\n")),(0,o.kt)("p",null,"When used in an MVC View for which ",(0,o.kt)("inlineCode",{parentName:"p"},"RequiredDemoModel")," is the Model, NgValiditionFor can be used thusly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@using NgValidationFor.Core\n@using NgValidationFor.Documentation.Models\n@model RequiredDemoModel\n<input type="text" \n       name="userName" \n       ng-model="user.name"\n       @Html.Raw(Model.GetAttributes(x => Model.RequiredField))\n       >\n')),(0,o.kt)("p",null,"Which results in this HTML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text"\n       name="userName" \n       ng-model="user.name"\n       required="required"\n       >\n')),(0,o.kt)("p",null,"Tada!!!! It works."),(0,o.kt)("h2",{id:"so-what-now"},"So what now?"),(0,o.kt)("p",null,"Yes it works, but I'm not going to pretend it's pretty. I don't like having to wrap the usage of NgValidationFor with ",(0,o.kt)("inlineCode",{parentName:"p"},"Html.Raw(...)"),". I'm having to do that because ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAttributes")," returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". This string is then HTML encoded by MVC. To avoid my quotation marks turning into ",(0,o.kt)("inlineCode",{parentName:"p"},"&amp;quot;")," I need to actually be exposing an ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-us/library/system.web.ihtmlstring(v=vs.110).aspx">IHtmlString</a>'),". So I'm going to need to depend upon ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Web"),". That's not so bad - at least I'm not tied to a specific MVC version."),(0,o.kt)("p",null,"I'm not too keen on the implementation I've come up with for NgValidationFor either. It's a single static method at the minute which does everything. It breaks the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single_responsibility_principle"},"Single Responsibility Priniciple")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open/closed_principle"},"Open/Closed Principle"),". I need to take a look at that - I want people to be able to extend this and I need to think about a good and simple way to achieve that."),(0,o.kt)("p",null,"Finally, usage. ",(0,o.kt)("inlineCode",{parentName:"p"},"Model.GetAttributes(x =&gt; Model.RequiredField)")," feels wrong to me. I think I'm happy with having this used as an extension method but it needs to be clearer what's happening. Perhaps ",(0,o.kt)("inlineCode",{parentName:"p"},"Model.NgValidationFor(x =&gt; Model.RequiredField)")," would be better. I need to try a few things out and come up with a nicer way to use NgValidationFor."))}u.isMDXComponent=!0}}]);
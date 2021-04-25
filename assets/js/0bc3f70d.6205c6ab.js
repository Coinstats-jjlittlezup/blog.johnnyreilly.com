(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(r,".").concat(m)]||d[m]||u[m]||o;return n?i.a.createElement(b,l(l({ref:t},c),{},{components:n})):i.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},354:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(4),i=n(10),o=(n(0),n(1219)),r={title:"NgValidationFor Baby Steps",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net mvc","AngularJS","NgValidationFor"],hide_table_of_contents:!1},l={permalink:"/2015/05/11/ngvalidationfor-baby-steps",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-05-11-ngvalidationfor-baby-steps.md",source:"@site/blog/2015-05-11-ngvalidationfor-baby-steps.md",title:"NgValidationFor Baby Steps",description:"I thought as I start the NgValidationFor project I'd journal my progress. I'm writing this with someone particular in mind welcome!",date:"2015-05-11T00:00:00.000Z",formattedDate:"May 11, 2015",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"AngularJS",permalink:"/tags/angular-js"},{label:"NgValidationFor",permalink:"/tags/ng-validation-for"}],readingTime:3.39,truncated:!1,prevItem:{title:"Angular UI Bootstrap Datepicker Weirdness",permalink:"/2015/05/23/angular-ui-bootstrap-datepicker-weirdness"},nextItem:{title:"A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API",permalink:"/2015/05/05/a-tale-of-angular-html5mode-aspnet-mvc"}},s=[{value:"Getting up and running",id:"getting-up-and-running",children:[]},{value:"So what have we got?",id:"so-what-have-we-got",children:[]},{value:"So what now?",id:"so-what-now",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I thought as I start the ",Object(o.b)("a",{parentName:"p",href:"http://blog.icanmakethiswork.io/2015/04/tonight-ill-start-open-source-project.html"},"NgValidationFor project")," I'd journal my progress. I'm writing this with someone particular in mind: me. Specifically, me in 2 years who will no doubt wonder why I made some of the choices I did. Everyone else, move along now - nothing to see. Unless the inner workings of someone else's mind are interesting to you... In which case: welcome!"),Object(o.b)("h2",{id:"getting-up-and-running"},"Getting up and running"),Object(o.b)("p",null,"I've got a project on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/NgValidationFor"},"GitHub")," and I'm starting to think about implementations. One thing that bit me on ",Object(o.b)("a",{parentName:"p",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/"},"jVUN")," was being tied to a specific version of ASP.Net MVC. For each major release of ASP.Net MVC I needed separate builds / NuGet packages and the like. A pain. Particularly when it came to bug fixes for prior versions - the breaking changes with each version of MVC meant far more work was required when it came to shipping fixes for MVC 4 / MVC 3."),Object(o.b)("p",null,"So with that in mind I'm going to try and limit my dependencies. I'm not saying I will never depend upon ASP.Net MVC - I may if I think it becomes useful to give the users a nicer API or if there's another compelling reason. But to start with I'm just going to focus on the translation of data annotations to Angular validation directive attributes."),Object(o.b)("p",null,"To that end I'm going to begin with just a class library and an associated test project. I'm going to try and minimise the dependencies that NgValidationFor has. At least initially I may even see if I can sensibly avoid depending on ",Object(o.b)("inlineCode",{parentName:"p"},"System.Web")," (mindful of the upcoming ASP.Net 5 changes). Let's see."),Object(o.b)("p",null,"A little time passes......."),Object(o.b)("h2",{id:"so-what-have-we-got"},"So what have we got?"),Object(o.b)("p",null,"My first efforts have resulted in the implementation of the ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.requiredattribute(v=vs.110).aspx">RequiredAttribute</a>'),". This is the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/NgValidationFor/tree/6cf862a7638d3ed933cd0e075a1807b1414847da"},"code right now"),". It's made up of:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"NgValidationFor.Core - the core part of the project which converts data annotations into AngularJS 1.x validation directive attributes."),Object(o.b)("li",{parentName:"ol"},"NgValidationFor.Core.UnitTests - the unit tests for the core"),Object(o.b)("li",{parentName:"ol"},"NgValidationFor.Documentation - this is an ASP.Net MVC project which will become a documentation site for NgValidationFor. It also doubles as a way for me to try out NgValidationFor."),Object(o.b)("li",{parentName:"ol"},"NgValidationFor.Documentation.UnitTests - unit tests for the documentation (there's none yet as I'm still spiking - but when I'm a little clearer, they will be)")),Object(o.b)("p",null,"How can it be used? Well fairly easily. Take this simple model:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"using System.ComponentModel.DataAnnotations;\n\nnamespace NgValidationFor.Documentation.Models\n{\n    public class RequiredDemoModel\n    {\n        [Required]\n        public string RequiredField { get; set; }\n    }\n}\n")),Object(o.b)("p",null,"When used in an MVC View for which ",Object(o.b)("inlineCode",{parentName:"p"},"RequiredDemoModel")," is the Model, NgValiditionFor can be used thusly:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'@using NgValidationFor.Core\n@using NgValidationFor.Documentation.Models\n@model RequiredDemoModel\n<input type="text" \n       name="userName" \n       ng-model="user.name"\n       @Html.Raw(Model.GetAttributes(x => Model.RequiredField))\n       >\n')),Object(o.b)("p",null,"Which results in this HTML:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<input type="text"\n       name="userName" \n       ng-model="user.name"\n       required="required"\n       >\n')),Object(o.b)("p",null,"Tada!!!! It works."),Object(o.b)("h2",{id:"so-what-now"},"So what now?"),Object(o.b)("p",null,"Yes it works, but I'm not going to pretend it's pretty. I don't like having to wrap the usage of NgValidationFor with ",Object(o.b)("inlineCode",{parentName:"p"},"Html.Raw(...)"),". I'm having to do that because ",Object(o.b)("inlineCode",{parentName:"p"},"GetAttributes")," returns a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),". This string is then HTML encoded by MVC. To avoid my quotation marks turning into ",Object(o.b)("inlineCode",{parentName:"p"},"&amp;quot;")," I need to actually be exposing an ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-us/library/system.web.ihtmlstring(v=vs.110).aspx">IHtmlString</a>'),". So I'm going to need to depend upon ",Object(o.b)("inlineCode",{parentName:"p"},"System.Web"),". That's not so bad - at least I'm not tied to a specific MVC version."),Object(o.b)("p",null,"I'm not too keen on the implementation I've come up with for NgValidationFor either. It's a single static method at the minute which does everything. It breaks the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single_responsibility_principle"},"Single Responsibility Priniciple")," and the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open/closed_principle"},"Open/Closed Principle"),". I need to take a look at that - I want people to be able to extend this and I need to think about a good and simple way to achieve that."),Object(o.b)("p",null,"Finally, usage. ",Object(o.b)("inlineCode",{parentName:"p"},"Model.GetAttributes(x =&gt; Model.RequiredField)")," feels wrong to me. I think I'm happy with having this used as an extension method but it needs to be clearer what's happening. Perhaps ",Object(o.b)("inlineCode",{parentName:"p"},"Model.NgValidationFor(x =&gt; Model.RequiredField)")," would be better. I need to try a few things out and come up with a nicer way to use NgValidationFor."))}p.isMDXComponent=!0}}]);
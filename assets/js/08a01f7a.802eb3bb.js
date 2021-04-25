(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,u=p["".concat(l,".").concat(b)]||p[b]||h[b]||i;return n?o.a.createElement(u,r(r({ref:t},c),{},{components:n})):o.a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},340:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(4),o=n(10),i=(n(0),n(1219)),l={title:"Unit testing ModelState",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net mvc","Marc Talary","DataAnnotations","Controller","ModelState"],hide_table_of_contents:!1},r={permalink:"/2013/03/03/unit-testing-modelstate",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-03-03-unit-testing-modelstate.md",source:"@site/blog/2013-03-03-unit-testing-modelstate.md",title:"Unit testing ModelState",description:'- Me: "It can\'t be done"',date:"2013-03-03T00:00:00.000Z",formattedDate:"March 3, 2013",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"Marc Talary",permalink:"/tags/marc-talary"},{label:"DataAnnotations",permalink:"/tags/data-annotations"},{label:"Controller",permalink:"/tags/controller"},{label:"ModelState",permalink:"/tags/model-state"}],readingTime:4.075,truncated:!1,prevItem:{title:"DecimalModelBinder for nullable Decimals",permalink:"/2013/03/11/decimalmodelbinder-for-nullable-decimals"},nextItem:{title:"Unit testing MVC controllers / Mocking UrlHelper",permalink:"/2013/02/18/unit-testing-mvc-controllers-mocking"}},s=[{value:"Simple scenario",id:"simple-scenario",children:[]},{value:"Back to the dispute",id:"back-to-the-dispute",children:[]},{value:"Now I get to learn something",id:"now-i-get-to-learn-something",children:[]},{value:"An example",id:"an-example",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Me: "It can\'t be done"'),Object(i.b)("li",{parentName:"ul"},'Him: "Yes it can"'),Object(i.b)("li",{parentName:"ul"},'Me: "No it can\'t"'),Object(i.b)("li",{parentName:"ul"},'Him: "Yes it can, I\'ve just done it"'),Object(i.b)("li",{parentName:"ul"},'Me: "Ooooh! Show me ..."')),Object(i.b)("p",null," The above conversation (or one much like it) took place between my colleague Marc Talary and myself a couple of weeks ago. It was one of those faintly embarrassing situations where you state your case with absolute certainty only to subsequently discover that you were ","*",Object(i.b)("strong",{parentName:"p"},"completely"),"*"," wrong. Ah arrogance, thy name is Reilly..."),Object(i.b)("p",null,"The disputed situation in this case was ModelState validation in ASP.Net MVC. How can you unit test a models validation driven by ",Object(i.b)("inlineCode",{parentName:"p"},"DataAnnotations"),"? If at all. Well it can be done, and here's how."),Object(i.b)("h2",{id:"simple-scenario"},"Simple scenario"),Object(i.b)("p",null,"Let's start with a simple model:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5069901.js?file=CarModel.cs"}),Object(i.b)("p",null,"And let's have a controller which makes use of that model:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5069901.js?file=CarController.cs"}),Object(i.b)("p",null,"When I was first looking at unit testing this I was slightly baffled by the behaviour I witnessed. I took an invalid model (where the properties set on the model were violating the model's validation ",Object(i.b)("inlineCode",{parentName:"p"},"DataAnnotations"),"):"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5069901.js?file=NaomiCampbell.cs"}),Object(i.b)("p",null,"I passed the invalid model to the ",Object(i.b)("inlineCode",{parentName:"p"},"Edit")," controller action inside a unit test. My expectation was that the ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState.IsValid")," code path would ","*",Object(i.b)("strong",{parentName:"p"},"not"),"*"," be followed as this was ","*",Object(i.b)("strong",{parentName:"p"},"not"),"*"," a valid model. So ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState.IsValid")," should evaluate to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", right? Wrong!"),Object(i.b)("p",null,"Contrary to my expectation the validity of ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState")," is not evaluated on the fly inside the controller. Rather it is determined during the model binding that takes place ","*",Object(i.b)("strong",{parentName:"p"},"before"),"*"," the actual controller action method is called. And that completely explains why during my unit test with an invalid model we find we're following the ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState.IsValid")," code path."),Object(i.b)("h2",{id:"back-to-the-dispute"},"Back to the dispute"),Object(i.b)("p",null,"As this blog post started off I was slightly missing Marc's point. I thought he was saying we should be testing the ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState.IsValid == false")," code path. And given that ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState")," is determined before we reach the controller my view was that the only way to achieve this was through making use of ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState.AddModelError")," in our unit test (you can read a good explanation of that ",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/3816143/761388"},"here"),"). And indeed we were already testing for this; we were surfacing errors via a ",Object(i.b)("inlineCode",{parentName:"p"},"JsonResult")," and so had a test in place to ensure that ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState")," errors were transformed in the manner we would expect."),Object(i.b)("p",null,"However, Marc's point was actually that we should have unit tests that enforced our design. That is to say, if we'd decided a certain property on a model was mandatory we should have a test that checked that this was indeed the case. If someone came along later and removed the ",Object(i.b)("inlineCode",{parentName:"p"},"Required")," data annotation then we wanted that test to fail."),Object(i.b)("p",null,"It's worth saying, we didn't want a unit test to ensure that ASP.Net MVC worked as expected. Rather, where we had used DataAnnotations against our models to drive validation, we wanted to ensure the validation didn't disappear further down the track. Just to be clear: we wanted to test our code, not Microsoft's."),Object(i.b)("h2",{id:"now-i-get-to-learn-something"},"Now I get to learn something"),Object(i.b)("p",null,"When I grasped Marc's point I thought that the the only way to write these tests would be to make use of reflection. And whilst we could certainly do that I wasn't entirely happy with that as a solution. To my mind it was kind of testing \"at one remove\", if you see what I mean. What I really wanted was to see that MVC was surfacing validations in the manner I might have hoped. And you can!"),Object(i.b)("p",null,".... Drum roll... Ladies and gents may I present Marc's ",Object(i.b)("inlineCode",{parentName:"p"},"ModelStateTestController"),":"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5069901.js?file=ModelStateTestController.cs"}),Object(i.b)("p",null,"This class is, as you can see, incredibly simple. It is a controller, it inherits from ",Object(i.b)("inlineCode",{parentName:"p"},"System.Web.Mvc.Controller")," and establishes a mock context in the constructor using MOQ. This controller exposes a single method: ",Object(i.b)("inlineCode",{parentName:"p"},"TestTryValidateModel"),". This method internally determines the controller's ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState")," given the supplied object by calling off to Mvc's (protected) ",Object(i.b)("inlineCode",{parentName:"p"},"TryValidateModel")," method (",Object(i.b)("inlineCode",{parentName:"p"},"TryValidateModel")," evaluates ",Object(i.b)("inlineCode",{parentName:"p"},"ModelState"),")."),Object(i.b)("p",null,"This simple class allows us to test the validations on a model in a simple fashion that stays close to the way our models will actually be used in the wild. It's pragmatic and it's useful."),Object(i.b)("h2",{id:"an-example"},"An example"),Object(i.b)("p",null,"Let me wrap up with an example unit test. The test below makes use of the ",Object(i.b)("inlineCode",{parentName:"p"},"ModelStateTestController")," to check the application of the DataAnnotations on our model:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5069901.js?file=ModelStateUnitTests.cs"}),Object(i.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(i.b)("p",null,"In a way I think it's a shame that ",Object(i.b)("inlineCode",{parentName:"p"},"TryValidateModel")," is a protected method. If it weren't it would be simplicity to write a unit test which tested the ModelState directly in context of the action method. It would be possible to get round this by establishing a base controller class which all our controllers would inherit from which implemented the ",Object(i.b)("inlineCode",{parentName:"p"},"TestTryValidateModel")," method from above. On the other hand maybe it's good to have clarity of the difference between testing model validations and testing controller actions. Something to ponder..."))}d.isMDXComponent=!0}}]);
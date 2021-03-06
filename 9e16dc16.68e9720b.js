(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{623:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(958)),i={title:"Unit testing MVC controllers / Mocking UrlHelper",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["MVC","unit testing","AreaRegistration.RegisterAllAreas()","MOQ","UrlHelper"],hide_table_of_contents:!1},l={permalink:"/2013/02/18/unit-testing-mvc-controllers-mocking",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-02-18-unit-testing-mvc-controllers-mocking.md",source:"@site/blog/2013-02-18-unit-testing-mvc-controllers-mocking.md",description:"I have put a name to my pain...",date:"2013-02-18T00:00:00.000Z",tags:[{label:"MVC",permalink:"/tags/mvc"},{label:"unit testing",permalink:"/tags/unit-testing"},{label:"AreaRegistration.RegisterAllAreas()",permalink:"/tags/area-registration-register-all-areas"},{label:"MOQ",permalink:"/tags/moq"},{label:"UrlHelper",permalink:"/tags/url-helper"}],title:"Unit testing MVC controllers / Mocking UrlHelper",readingTime:2.455,truncated:!1,prevItem:{title:"Unit testing ModelState",permalink:"/2013/03/03/unit-testing-modelstate"},nextItem:{title:"Using Expressions with Constructors",permalink:"/2013/02/13/using-expressions-with-constructors"}},s=[{value:"I have put a name to my pain...",id:"i-have-put-a-name-to-my-pain",children:[]},{value:"Getting disillusioned",id:"getting-disillusioned",children:[]},{value:"MvcMockControllers updated",id:"mvcmockcontrollers-updated",children:[]},{value:"What I want to test",id:"what-i-want-to-test",children:[]},{value:"Enough of the waffle - show me a unit test",id:"enough-of-the-waffle---show-me-a-unit-test",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"i-have-put-a-name-to-my-pain"},"I have put a name to my pain..."),Object(a.b)("p",null," And it is unit testing ASP.Net MVC controllers."),Object(a.b)("p",null,"Well perhaps that's unfair. I have no problem unit testing MVC controllers.... ",Object(a.b)("strong",{parentName:"p"},"until"),' it comes to making use of the "innards" of MVC. Let me be more specific. This week I had a controller action that I needed to test. It looked a little like this:'),Object(a.b)("script",{src:"https://gist.github.com/johnnyreilly/4959924.js?file=DemoController.cs"}),Object(a.b)("p",null,"Looks fine right? It's an action that takes a simple object as an argument. That's ok. It returns a JsonResult. No worries. The JsonResult consists of an anonymous class. De nada. The anonymous class has one property that is driven by the controllers ",Object(a.b)("inlineCode",{parentName:"p"},"UrlHelper"),". Yeah that shouldn't be an issue... ",Object(a.b)("strong",{parentName:"p"},"Hold your horses sunshine - you're going nowhere!")),Object(a.b)("h2",{id:"getting-disillusioned"},"Getting disillusioned"),Object(a.b)("p",null,"Yup, the minute you start pumping in asserts around that ",Object(a.b)("inlineCode",{parentName:"p"},"UrlHelper")," driven property you're going to be mighty disappointed. What, you didn't expect the result to be ",Object(a.b)("inlineCode",{parentName:"p"},"null"),"? Damn shame."),Object(a.b)("p",null,"Despite ",Object(a.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/magazine/dd942838.aspx"},"articles"),' on MSDN about how the intention is for MVC to be deliberately testable the sad fact of the matter is that there is a yawning hole around the testing support for controllers in ASP.Net MVC. Whenever you try to test something that makes use of controller "gubbins" you have ',Object(a.b)("strong",{parentName:"p"},"serious")," problems. And unfortunately I didn't find anyone out there who could offer the whole solution."),Object(a.b)("p",null,"After what I can best describe as a day of pain I found a way to scratch my particular itch. I found a way to write unit tests for controllers that made use of UrlHelper. As a bonus I managed to include the unit testing of Routes and Areas (well kind of) too."),Object(a.b)("h2",{id:"mvcmockcontrollers-updated"},"MvcMockControllers updated"),Object(a.b)("p",null,"This solution is heavily based on the work of Scott Hanselman who ",Object(a.b)("a",{parentName:"p",href:"http://www.hanselman.com/blog/ASPNETMVCSessionAtMix08TDDAndMvcMockHelpers.aspx"},"wrote and blogged about ",Object(a.b)("inlineCode",{parentName:"a"},"MvcMockHelpers"))," back in 2008. Essentially I've taken this and tweaked it so I could achieve my ends. My version of ",Object(a.b)("inlineCode",{parentName:"p"},"MvcMockHelpers")," looks a little like this:"),Object(a.b)("script",{src:"https://gist.github.com/johnnyreilly/4959924.js?file=MvcMockHelpers.cs"}),Object(a.b)("h2",{id:"what-i-want-to-test"},"What I want to test"),Object(a.b)("p",null,"I want to be able to unit test the controller ",Object(a.b)("inlineCode",{parentName:"p"},"Edit")," method I mentioned earlier. This method calls the ",Object(a.b)("inlineCode",{parentName:"p"},"Action")," method on the controllers ",Object(a.b)("inlineCode",{parentName:"p"},"Url")," member (which is, in turn, a ",Object(a.b)("inlineCode",{parentName:"p"},"UrlHelper"),") to generate a URL for passing pack to the client. The URL generated should fit with the routing mechanism I have set up. In this case the route we expect a URL for was mapped by the following area registration:"),Object(a.b)("script",{src:"https://gist.github.com/johnnyreilly/4959924.js?file=DemoAreaRegistration.cs"}),Object(a.b)("h2",{id:"enough-of-the-waffle---show-me-a-unit-test"},"Enough of the waffle - show me a unit test"),Object(a.b)("p",null,"Now to the meat; here's a unit test which demonstrates how this is used:"),Object(a.b)("script",{src:"https://gist.github.com/johnnyreilly/4959924.js?file=UnitTestingAnAreaUsingUrlHelper.cs"}),Object(a.b)("p",null,"Let's go through this unit test and breakdown what's happening:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Arrange"),Object(a.b)("li",{parentName:"ol"},"Act"),Object(a.b)("li",{parentName:"ol"},"Assert")),Object(a.b)("p",null,"The most interesting thing you'll note is the controller's UrlHelper is now generating a URL as we might have hoped. The URL is generated making use of our routing, yay! Finally we're also managing to unit test a route registered by our area."))}u.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||h[b]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
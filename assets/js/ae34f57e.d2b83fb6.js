(window.webpackJsonp=window.webpackJsonp||[]).push([[756],{1166:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=c(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||r;return a?i.a.createElement(m,l(l({ref:t},s),{},{components:a})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},200:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return c}));var n=a(3),i=a(8),r=(a(0),a(1166)),o={title:"Announcing jQuery Validation Unobtrusive Native...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},l={permalink:"/2013/08/08/announcing-jquery-validation",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-08-08-announcing-jquery-validation.md",source:"@site/blog/2013-08-08-announcing-jquery-validation.md",description:"I've been busy working on an open source project called jQuery Validation Unobtrusive Native. To see it in action take a look here.",date:"2013-08-08T00:00:00.000Z",formattedDate:"August 8, 2013",tags:[],title:"Announcing jQuery Validation Unobtrusive Native...",readingTime:2.31,truncated:!1,prevItem:{title:"Using Bootstrap Tooltips to display jQuery Validation error messages",permalink:"/2013/08/17/using-bootstrap-tooltips-to-display"},nextItem:{title:"How I'm Using Cassette part 3:Cassette and TypeScript Integration",permalink:"/2013/07/06/how-im-using-cassette-part-3-typescript"}},u=[{value:"A Little Background",id:"a-little-background",children:[]},{value:"So... What is jQuery Validation Unobtrusive Native?",id:"so-what-is-jquery-validation-unobtrusive-native",children:[]},{value:"Future Plans",id:"future-plans",children:[]}],s={toc:u};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I've been busy working on an open source project called ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"http://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"jQuery Validation Unobtrusive Native")),". ",Object(r.b)("a",{parentName:"p",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/"},"To see it in action take a look here"),"."),Object(r.b)("h2",{id:"a-little-background"},"A Little Background"),Object(r.b)("p",null,"I noticed a little while ago that jQuery Validation was now providing native support for validation driven by HTML 5 data attributes. As you may be aware, Microsoft shipped ",Object(r.b)("a",{parentName:"p",href:"http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html"},"jquery.validate.unobtrusive.js")," back with MVC 3. (",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/08/jquery-unobtrusive-validation.html"},"I have written about it before."),") It provided a way to apply data model validations to the client side using a combination of jQuery Validation and HTML 5 data attributes."),Object(r.b)("p",null,"The principal of this was and is fantastic. But since that time the jQuery Validation project has implemented its own support for driving validation unobtrusively (shipping with ",Object(r.b)("a",{parentName:"p",href:"http://jquery.bassistance.de/validate/changelog.txt"},"jQuery Validation 1.11.0"),"). I've been looking at a way to directly use the native support instead of jquery.validate.unobtrusive.js."),Object(r.b)("h2",{id:"so-what-is-jquery-validation-unobtrusive-native"},"So... What is jQuery Validation Unobtrusive Native?"),Object(r.b)("p",null,"jQuery Validation Unobtrusive Native is a collection of ASP.Net MVC HTML helper extensions. These make use of jQuery Validation's native support for validation driven by HTML 5 data attributes. The advantages of the native support over jquery.validate.unobtrusive.js are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Dynamically created form elements are parsed automatically. jquery.validate.unobtrusive.js does not support this whilst jQuery Validation does. ",Object(r.b)("a",{parentName:"li",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/AdvancedDemo/Knockout.html"},"Take a look at a demo using Knockout.")),Object(r.b)("li",{parentName:"ul"},"jquery.validate.unobtrusive.js restricts how you use jQuery Validation. If you want to use showErrors or something similar then you may find that you need to go native (or at least you may find that significantly easier than working with the jquery.validate.unobtrusive.js defaults)... "),Object(r.b)("li",{parentName:"ul"},"Send less code to your browser, make your browser to do less work and even get a (marginal) performance benefit .")),Object(r.b)("p",null,"This project intends to be a bridge between MVC's inbuilt support for driving validation from data attributes and jQuery Validation's native support for the same. This is achieved by hooking into the MVC data attribute creation mechanism and using it to generate the data attributes natively supported by jQuery Validation."),Object(r.b)("h2",{id:"future-plans"},"Future Plans"),Object(r.b)("p",null,"So far the basic set of the HtmlHelpers and their associated unobtrusive mappings have been implemented. If any have been missed then let me know. As time goes by I intend to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"fill in any missing gaps there may be"),Object(r.b)("li",{parentName:"ul"},"maintain MVC 3, 4 (and when the time comes 5+) versions of this on Nuget"),Object(r.b)("li",{parentName:"ul"},"not all data annotations generate client data attributes - if it makes sense I may look to implement some of these where it seems sensible. (eg the ",Object(r.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.minlengthattribute.aspx"},"MinLengthAttribute")," annotation could be mapped to ",Object(r.b)("a",{parentName:"li",href:"http://jqueryvalidation.org/minlength-method/"},"minlength")," validation...)"),Object(r.b)("li",{parentName:"ul"},"get the unit test coverage to a good level and finally (and perhaps most importantly)"),Object(r.b)("li",{parentName:"ul"},"create some really useful ",Object(r.b)("a",{parentName:"li",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/Demo.html"},"demos and documentation"),".")),Object(r.b)("p",null,"Help is appreciated so feel free to pitch in! You can find the project on GitHub ",Object(r.b)("a",{parentName:"p",href:"http://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"here"),"..."))}c.isMDXComponent=!0}}]);
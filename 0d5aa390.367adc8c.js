(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(958)),i={title:"Getting more RESTful with Web API and IHttpActionResult",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Web API 2","IHttpActionResult"],hide_table_of_contents:!1},l={permalink:"/blog.johnnyreilly.com/2014/08/08/getting-more-RESTful-with-Web-API",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-08-08-getting-more-RESTful-with-Web-API.md",source:"@site/blog/2014-08-08-getting-more-RESTful-with-Web-API.md",description:"Up until, well yesterday really, I tended to have my Web API action methods all returning 200's no matter what. Successful request? 200 for you sir! Some validation error in the model? 200 for you too ma'am - but I'll wrap up the validation errors and send them back too. Database error? 200 and and an error message.",date:"2014-08-08T00:00:00.000Z",tags:[{label:"Web API 2",permalink:"/blog.johnnyreilly.com/tags/web-api-2"},{label:"IHttpActionResult",permalink:"/blog.johnnyreilly.com/tags/i-http-action-result"}],title:"Getting more RESTful with Web API and IHttpActionResult",readingTime:2.68,truncated:!1,prevItem:{title:"My Unrequited Love for Isolate Scope",permalink:"/blog.johnnyreilly.com/2014/08/12/my-unrequited-love-for-isolate-scope"},nextItem:{title:"AngularJS meet ASP.Net Server Validation",permalink:"/blog.johnnyreilly.com/2014/08/01/angularjs-meet-aspnet-server-validation"}},s=[{value:"Web API 2 - Bad Job on on the BadRequest Helper",id:"web-api-2---bad-job-on-on-the-badrequest-helper",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Up until, well yesterday really, I tended to have my Web API action methods all returning ",Object(a.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/HTTP_200#2xx_Success"},"200"),"'s no matter what. Successful request? 200 for you sir! Some validation error in the model? 200 for you too ma'am - but I'll wrap up the validation errors and send them back too. Database error? 200 and and an error message."),Object(a.b)("p",null," It kind of looked like this (this example taken from a ",Object(a.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2014/08/angularjs-meet-aspnet-server-validation.html"},"previous post"),"):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},"public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n\n      return Ok(new {\n        Success = false,\n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new {\n      Success = true,\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n")),Object(a.b)("p",null,"Well I'm no RESTafarian but this felt a little... wrong. Like I wasn't fully embracing the web. I didn't want to have to include my own ",Object(a.b)("inlineCode",{parentName:"p"},"Success")," flag to indicate whether the request was good or not. I decided that I'd rather have it at least a little more webby. To that end, I decided I'd like to have 2xx success status codes for genuine success only and 4xx client error status codes for failures."),Object(a.b)("p",null,"Lose the wrapper - embrace the web. This post is about doing just that."),Object(a.b)("h2",{id:"web-api-2---bad-job-on-on-the-badrequest-helper"},"Web API 2 - Bad Job on on the BadRequest Helper"),Object(a.b)("p",null,"Web API 2 ships with a whole host of API helper methods. Things like ",Object(a.b)("inlineCode",{parentName:"p"},"Ok")," (which you can see me using above) and ",Object(a.b)("inlineCode",{parentName:"p"},"BadRequest"),". ",Object(a.b)("inlineCode",{parentName:"p"},"BadRequest")," was what I had in mind to use in place of ",Object(a.b)("inlineCode",{parentName:"p"},"Ok")," where I had some kind of error I wanted to report to the client like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},"public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n\n      return BadRequest(new  { \n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new {\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n")),Object(a.b)("p",null,"Looks good right? No more need for my ",Object(a.b)("inlineCode",{parentName:"p"},"Success")," flag. Terser. Less code is better code. Unfortunately the built in ",Object(a.b)("inlineCode",{parentName:"p"},"BadRequest")," helper method doesn't have the flexibility of the ",Object(a.b)("inlineCode",{parentName:"p"},"Ok")," helper method - it doesn't allow you to send anything back you want. Fortunately this is easily remedied with a short extension method for ",Object(a.b)("inlineCode",{parentName:"p"},"ApiController"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},"using System.Net;\nusing System.Web.Http;\nusing System.Web.Http.Results;\n\nnamespace System.Web.Http\n{\n    public static class ControllerExtensions\n    {\n        public static IHttpActionResult BadRequest<T>(this ApiController controller, T obj)\n        {\n            return new NegotiatedContentResult<T>(HttpStatusCode.BadRequest, obj, controller);\n        }\n    }\n}\n")),Object(a.b)("p",null,"With this in place I can then tweak my implementation to hook into the extension method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n      // See how we have "this." before BadRequest so the Extension method is invoked\n      return this.BadRequest(new  { \n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new {\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n')),Object(a.b)("p",null,"And now we have have an endpoint that serves up 2xx status codes or 4xx status codes just as I'd hoped. Obviously this change in the way my action methods are returning will have implications for the consuming client (in my case an app built using AngularJS and $q). Essentially I can now use my ",Object(a.b)("inlineCode",{parentName:"p"},"then")," to handle the successes and my ",Object(a.b)("inlineCode",{parentName:"p"},"catch")," to handle the errors."))}u.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
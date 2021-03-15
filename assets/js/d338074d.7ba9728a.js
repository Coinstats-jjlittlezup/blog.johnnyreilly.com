(window.webpackJsonp=window.webpackJsonp||[]).push([[906],{1005:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(1166)),i={title:"Getting more RESTful with Web API and IHttpActionResult",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Web API 2","IHttpActionResult"],hide_table_of_contents:!1},l={permalink:"/2014/08/08/getting-more-RESTful-with-Web-API",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-08-08-getting-more-RESTful-with-Web-API.md",source:"@site/blog/2014-08-08-getting-more-RESTful-with-Web-API.md",description:"Up until, well yesterday really, I tended to have my Web API action methods all returning 200's no matter what. Successful request? 200 for you sir! Some validation error in the model? 200 for you too ma'am - but I'll wrap up the validation errors and send them back too. Database error? 200 and and an error message.",date:"2014-08-08T00:00:00.000Z",formattedDate:"August 8, 2014",tags:[{label:"Web API 2",permalink:"/tags/web-api-2"},{label:"IHttpActionResult",permalink:"/tags/i-http-action-result"}],title:"Getting more RESTful with Web API and IHttpActionResult",readingTime:2.68,truncated:!1,prevItem:{title:"My Unrequited Love for Isolate Scope",permalink:"/2014/08/12/my-unrequited-love-for-isolate-scope"},nextItem:{title:"AngularJS meet ASP.Net Server Validation",permalink:"/2014/08/01/angularjs-meet-aspnet-server-validation"}},s=[{value:"Web API 2 - Bad Job on on the BadRequest Helper",id:"web-api-2---bad-job-on-on-the-badrequest-helper",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Up until, well yesterday really, I tended to have my Web API action methods all returning ",Object(o.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/HTTP_200#2xx_Success"},"200"),"'s no matter what. Successful request? 200 for you sir! Some validation error in the model? 200 for you too ma'am - but I'll wrap up the validation errors and send them back too. Database error? 200 and and an error message."),Object(o.b)("p",null," It kind of looked like this (this example taken from a ",Object(o.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2014/08/angularjs-meet-aspnet-server-validation.html"},"previous post"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n\n      return Ok(new {\n        Success = false,\n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new {\n      Success = true,\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n")),Object(o.b)("p",null,"Well I'm no RESTafarian but this felt a little... wrong. Like I wasn't fully embracing the web. I didn't want to have to include my own ",Object(o.b)("inlineCode",{parentName:"p"},"Success")," flag to indicate whether the request was good or not. I decided that I'd rather have it at least a little more webby. To that end, I decided I'd like to have 2xx success status codes for genuine success only and 4xx client error status codes for failures."),Object(o.b)("p",null,"Lose the wrapper - embrace the web. This post is about doing just that."),Object(o.b)("h2",{id:"web-api-2---bad-job-on-on-the-badrequest-helper"},"Web API 2 - Bad Job on on the BadRequest Helper"),Object(o.b)("p",null,"Web API 2 ships with a whole host of API helper methods. Things like ",Object(o.b)("inlineCode",{parentName:"p"},"Ok")," (which you can see me using above) and ",Object(o.b)("inlineCode",{parentName:"p"},"BadRequest"),". ",Object(o.b)("inlineCode",{parentName:"p"},"BadRequest")," was what I had in mind to use in place of ",Object(o.b)("inlineCode",{parentName:"p"},"Ok")," where I had some kind of error I wanted to report to the client like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n\n      return BadRequest(new  { \n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new {\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n")),Object(o.b)("p",null,"Looks good right? No more need for my ",Object(o.b)("inlineCode",{parentName:"p"},"Success")," flag. Terser. Less code is better code. Unfortunately the built in ",Object(o.b)("inlineCode",{parentName:"p"},"BadRequest")," helper method doesn't have the flexibility of the ",Object(o.b)("inlineCode",{parentName:"p"},"Ok")," helper method - it doesn't allow you to send anything back you want. Fortunately this is easily remedied with a short extension method for ",Object(o.b)("inlineCode",{parentName:"p"},"ApiController"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"using System.Net;\nusing System.Web.Http;\nusing System.Web.Http.Results;\n\nnamespace System.Web.Http\n{\n    public static class ControllerExtensions\n    {\n        public static IHttpActionResult BadRequest<T>(this ApiController controller, T obj)\n        {\n            return new NegotiatedContentResult<T>(HttpStatusCode.BadRequest, obj, controller);\n        }\n    }\n}\n")),Object(o.b)("p",null,"With this in place I can then tweak my implementation to hook into the extension method:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n      // See how we have "this." before BadRequest so the Extension method is invoked\n      return this.BadRequest(new  { \n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new {\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n')),Object(o.b)("p",null,"And now we have have an endpoint that serves up 2xx status codes or 4xx status codes just as I'd hoped. Obviously this change in the way my action methods are returning will have implications for the consuming client (in my case an app built using AngularJS and $q). Essentially I can now use my ",Object(o.b)("inlineCode",{parentName:"p"},"then")," to handle the successes and my ",Object(o.b)("inlineCode",{parentName:"p"},"catch")," to handle the errors."))}u.isMDXComponent=!0},1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[71379],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82469:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={title:"Getting more RESTful with Web API and IHttpActionResult",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Web API 2","IHttpActionResult"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2014/08/08/getting-more-RESTful-with-Web-API",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-08-08-getting-more-RESTful-with-Web-API.md",source:"@site/blog/2014-08-08-getting-more-RESTful-with-Web-API.md",title:"Getting more RESTful with Web API and IHttpActionResult",description:"Up until, well yesterday really, I tended to have my Web API action methods all returning 200's no matter what. Successful request? 200 for you sir! Some validation error in the model? 200 for you too ma'am - but I'll wrap up the validation errors and send them back too. Database error? 200 and and an error message.",date:"2014-08-08T00:00:00.000Z",formattedDate:"August 8, 2014",tags:[{label:"Web API 2",permalink:"/tags/web-api-2"},{label:"IHttpActionResult",permalink:"/tags/i-http-action-result"}],readingTime:2.68,truncated:!1,prevItem:{title:"My Unrequited Love for Isolate Scope",permalink:"/2014/08/12/my-unrequited-love-for-isolate-scope"},nextItem:{title:"AngularJS meet ASP.Net Server Validation",permalink:"/2014/08/01/angularjs-meet-aspnet-server-validation"}},c=[{value:"Web API 2 - Bad Job on on the BadRequest Helper",id:"web-api-2---bad-job-on-on-the-badrequest-helper",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Up until, well yesterday really, I tended to have my Web API action methods all returning ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/HTTP_200#2xx_Success"},"200"),"'s no matter what. Successful request? 200 for you sir! Some validation error in the model? 200 for you too ma'am - but I'll wrap up the validation errors and send them back too. Database error? 200 and and an error message."),(0,a.kt)("p",null," It kind of looked like this (this example taken from a ",(0,a.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2014/08/angularjs-meet-aspnet-server-validation.html"},"previous post"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n\n      return Ok(new {\n        Success = false,\n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new {\n      Success = true,\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n")),(0,a.kt)("p",null,"Well I'm no RESTafarian but this felt a little... wrong. Like I wasn't fully embracing the web. I didn't want to have to include my own ",(0,a.kt)("inlineCode",{parentName:"p"},"Success")," flag to indicate whether the request was good or not. I decided that I'd rather have it at least a little more webby. To that end, I decided I'd like to have 2xx success status codes for genuine success only and 4xx client error status codes for failures."),(0,a.kt)("p",null,"Lose the wrapper - embrace the web. This post is about doing just that."),(0,a.kt)("h2",{id:"web-api-2---bad-job-on-on-the-badrequest-helper"},"Web API 2 - Bad Job on on the BadRequest Helper"),(0,a.kt)("p",null,"Web API 2 ships with a whole host of API helper methods. Things like ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," (which you can see me using above) and ",(0,a.kt)("inlineCode",{parentName:"p"},"BadRequest"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"BadRequest")," was what I had in mind to use in place of ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," where I had some kind of error I wanted to report to the client like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n\n      return BadRequest(new  { \n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new {\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n")),(0,a.kt)("p",null,"Looks good right? No more need for my ",(0,a.kt)("inlineCode",{parentName:"p"},"Success")," flag. Terser. Less code is better code. Unfortunately the built in ",(0,a.kt)("inlineCode",{parentName:"p"},"BadRequest")," helper method doesn't have the flexibility of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," helper method - it doesn't allow you to send anything back you want. Fortunately this is easily remedied with a short extension method for ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiController"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using System.Net;\nusing System.Web.Http;\nusing System.Web.Http.Results;\n\nnamespace System.Web.Http\n{\n    public static class ControllerExtensions\n    {\n        public static IHttpActionResult BadRequest<T>(this ApiController controller, T obj)\n        {\n            return new NegotiatedContentResult<T>(HttpStatusCode.BadRequest, obj, controller);\n        }\n    }\n}\n")),(0,a.kt)("p",null,"With this in place I can then tweak my implementation to hook into the extension method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public class SageController : ApiController\n{\n  // ...\n\n  public IHttpActionResult Post(User sage)\n  {\n    if (!ModelState.IsValid) {\n      // See how we have "this." before BadRequest so the Extension method is invoked\n      return this.BadRequest(new  { \n        Errors = ModelState.ToErrorDictionary()\n      });\n    }\n\n    sage = _userService.Save(sage);\n\n    return Ok(new {\n      Entity = sage\n    });\n  }\n\n  // ...\n}\n')),(0,a.kt)("p",null,"And now we have have an endpoint that serves up 2xx status codes or 4xx status codes just as I'd hoped. Obviously this change in the way my action methods are returning will have implications for the consuming client (in my case an app built using AngularJS and $q). Essentially I can now use my ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," to handle the successes and my ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," to handle the errors."))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1183:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return w}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,w=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(w,l(l({ref:t},c),{},{components:n})):i.a.createElement(w,l({ref:t},c))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},289:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(4),i=n(10),r=(n(0),n(1183)),o={title:"PartialView.ToString()",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net mvc","sward","PartialView"],hide_table_of_contents:!1},l={permalink:"/2015/03/20/partialview-tostring",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-03-20-partialview-tostring.md",source:"@site/blog/2015-03-20-partialview-tostring.md",description:"In the name of DRY I found myself puzzling how one could take a PartialViewResult and render it as a string. Simple, right?",date:"2015-03-20T00:00:00.000Z",formattedDate:"March 20, 2015",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"sward",permalink:"/tags/sward"},{label:"PartialView",permalink:"/tags/partial-view"}],title:"PartialView.ToString()",readingTime:3.715,truncated:!1,prevItem:{title:"How to activate your emoji keyboard on Android 5.0 (Lollipop)",permalink:"/2015/04/17/how-to-activate-your-emoji-keyboard-on"},nextItem:{title:"Hey tsconfig.json, where have you been all my life?",permalink:"/2015/02/27/hey-tsconfigjson-where-have-you-been"}},s=[{value:"What are we trying to do?",id:"what-are-we-trying-to-do",children:[]},{value:"Inheritance (it&#39;s so yesterday darling)",id:"inheritance-its-so-yesterday-darling",children:[]},{value:"Extension method (sexier syntax)",id:"extension-method-sexier-syntax",children:[]},{value:"Favouring Composition over Inheritance (testable)",id:"favouring-composition-over-inheritance-testable",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In the name of ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"DRY")," I found myself puzzling how one could take a ",Object(r.b)("inlineCode",{parentName:"p"},"PartialViewResult")," and render it as a ",Object(r.b)("inlineCode",{parentName:"p"},"string"),". Simple, right?"),Object(r.b)("p",null," In fact, in my head this was already a solved problem. I mean I've written about this ",Object(r.b)("a",{parentName:"p",href:"http://blog.icanmakethiswork.io/2012/07/rendering-partial-view-to-string.html"},"before")," already! Except I haven't. Not really - what I did back then was link to what someone else had written and say \"yay! well done chap - like he said!\". It turns out that was a bad move. That blog appears to be gone and so I'm back to where I was. Ug. Lesson learned."),Object(r.b)("h2",{id:"what-are-we-trying-to-do"},"What are we trying to do?"),Object(r.b)("p",null,"So, for the second time of asking, here is how to take a ",Object(r.b)("inlineCode",{parentName:"p"},"PartialViewResult")," and turn it into a ",Object(r.b)("inlineCode",{parentName:"p"},"string"),". It's an invaluable technique to deal with certain scenarios."),Object(r.b)("p",null,"In my own case I have a toolbar in my application that is first pushed into the UI in my ",Object(r.b)("inlineCode",{parentName:"p"},"_Layout.cshtml")," by means of a trusty ",Object(r.b)("inlineCode",{parentName:"p"},'@Html.Action("Toolbar")'),". I wanted to be able to re-use the ",Object(r.b)("inlineCode",{parentName:"p"},"PartialViewResult")," returned by ",Object(r.b)("inlineCode",{parentName:"p"},"Toolbar")," on my controller inside a ",Object(r.b)("inlineCode",{parentName:"p"},"JSON")," payload. And despite the title of this post, ",Object(r.b)("inlineCode",{parentName:"p"},"PartialView.ToString()"),Object(r.b)("em",{parentName:"p"},"doesn't")," quite cut the mustard. Obvious really, if it did then why would I be writing this and you be reading this?"),Object(r.b)("p",null,"The solution is actually fairly simple. And, purely for swank, I'm going to offer it you 3 ways. Whatever's your poison."),Object(r.b)("h2",{id:"inheritance-its-so-yesterday-darling"},"Inheritance (it's so yesterday darling)"),Object(r.b)("p",null,"Yes there was a time when everything was inheritance based. You were rewarded handsomely for making sure that was the case. However, times have changed and (with good reason) people tend to ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Composition_over_inheritance"},"favour composition over inheritance"),". So, perhaps just for the memories, let first offer you the inheritance based approach:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"protected string ConvertPartialViewToString(PartialViewResult partialView)\n{\n  using (var sw = new StringWriter())\n  {\n    partialView.View = ViewEngines.Engines\n      .FindPartialView(ControllerContext, partialView.ViewName).View;\n\n    var vc = new ViewContext(\n      ControllerContext, partialView.View, partialView.ViewData, partialView.TempData, sw);\n    partialView.View.Render(vc, sw);\n\n    var partialViewString = sw.GetStringBuilder().ToString();\n\n    return partialViewString;\n  }\n}\n")),Object(r.b)("p",null,"The idea being that the above method is placed onto a base controller which your controllers subclass. Thus using this method inside one of the controllers is as simple as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"var toolbarHtml = ConvertPartialViewToString(partialViewResult);\n")),Object(r.b)("h2",{id:"extension-method-sexier-syntax"},"Extension method (sexier syntax)"),Object(r.b)("p",null,"So the next choice is implementing this as an extension method. Here's my static class which adds ",Object(r.b)("inlineCode",{parentName:"p"},"ConvertToString")," onto ",Object(r.b)("inlineCode",{parentName:"p"},"PartialViewResult"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"using System.IO;\nusing System.Web.Mvc;\n\nnamespace My.Utilities.Extensions\n{\n  public static class PartialViewResultExtensions\n  {\n    public static string ConvertToString(this PartialViewResult partialView, \n                                              ControllerContext controllerContext)\n    {\n      using (var sw = new StringWriter())\n      {\n        partialView.View = ViewEngines.Engines\n          .FindPartialView(controllerContext, partialView.ViewName).View;\n\n        var vc = new ViewContext(\n          controllerContext, partialView.View, partialView.ViewData, partialView.TempData, sw);\n        partialView.View.Render(vc, sw);\n\n        var partialViewString = sw.GetStringBuilder().ToString();\n\n        return partialViewString;\n      }\n    }\n  }\n}\n")),Object(r.b)("p",null,"I don't know about you but I do love an extension method - it often makes for much more readable code. In this case we can use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"var toolbarHtml = partialViewResult.ConvertToString(ControllerContext);\n")),Object(r.b)("p",null,"Which I think we can all agree is really rather lovely. Perhaps it would be more lovely if I didn't have to pass ",Object(r.b)("inlineCode",{parentName:"p"},"ControllerContext")," ","-"," but hey! Still quite nice."),Object(r.b)("h2",{id:"favouring-composition-over-inheritance-testable"},"Favouring Composition over Inheritance (testable)"),Object(r.b)("p",null,'Although ASP.Net MVC was designed to be testable there are times when you think "really? Can it be that hard?". In fact for a well thought through discussion on the topic I advise you read ',Object(r.b)("a",{parentName:"p",href:"http://volaresystems.com/blog/post/2010/08/19/Dont-mock-HttpContext"},"this"),". (I'm aware of the irony implicit in linking to another blog post in a blog post that I only wrote because I first linked to another blog which vanished.... Infinite recursion anybody?)"),Object(r.b)("p",null,"The conclusion of the linked blog post is twofold"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Don't mock HTTPContext"),Object(r.b)("li",{parentName:"ol"},"Use the ",Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Facade_pattern"},"facade pattern")," instead")),Object(r.b)("p",null,"Having testable code is not a optional bauble in my view - it's a necessity. So with my final approach that's exactly what I'll do."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"using System.Web.Mvc;\n\nnamespace My.Interfaces\n{\n  public interface IMvcInternals\n  {\n    string ConvertPartialViewToString(PartialViewResult partialView, ControllerContext controllerContext);\n  }\n}\n\n// ....\n\nusing System.IO;\nusing System.Web.Mvc;\nusing My.Interfaces;\n\nnamespace My.Utilities\n{\n  public class MvcInternals : IMvcInternals\n  {\n    public string ConvertPartialViewToString(PartialViewResult partialView, \n                                             ControllerContext controllerContext)\n    {\n      using (var sw = new StringWriter())\n      {\n        partialView.View = ViewEngines.Engines\n          .FindPartialView(controllerContext, partialView.ViewName).View;\n\n        var vc = new ViewContext(\n          controllerContext, partialView.View, partialView.ViewData, partialView.TempData, sw);\n        partialView.View.Render(vc, sw);\n\n        var partialViewString = sw.GetStringBuilder().ToString();\n\n        return partialViewString;\n      }\n    }\n  }\n}\n")),Object(r.b)("p",null,"So here I have a simple interface with a ",Object(r.b)("inlineCode",{parentName:"p"},"ConvertPartialViewToString")," method on it. This interface can be passed into a controller and then used like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"var toolbarHtml = _mvcInternals.ConvertPartialViewToString(partialViewResult, ControllerContext);\n")),Object(r.b)("p",null,"Ah... that's the sweet mellifluous sound of easily testable code."))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[801],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),h=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=h(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=h(n),d=a,b=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return n?r.a.createElement(b,s(s({ref:t},u),{},{components:n})):r.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},912:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(3),r=n(8),o=(n(0),n(1170)),i={title:"What on earth is jQuery?  And why should I care?",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["jqgrid","ajax","jquery","scott gu","microsoft"],hide_table_of_contents:!1},s={permalink:"/2012/01/24/what-on-earth-is-jquery-and-why-should",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-01-24-what-on-earth-is-jquery-and-why-should.md",source:"@site/blog/2012-01-24-what-on-earth-is-jquery-and-why-should.md",description:"What on earth is jQuery? What's a jQuery plugin?",date:"2012-01-24T00:00:00.000Z",formattedDate:"January 24, 2012",tags:[{label:"jqgrid",permalink:"/tags/jqgrid"},{label:"ajax",permalink:"/tags/ajax"},{label:"jquery",permalink:"/tags/jquery"},{label:"scott gu",permalink:"/tags/scott-gu"},{label:"microsoft",permalink:"/tags/microsoft"}],title:"What on earth is jQuery?  And why should I care?",readingTime:4.515,truncated:!1,prevItem:{title:"JavaScript - getting to know the beast...",permalink:"/2012/01/30/javascript-getting-to-know-beast"},nextItem:{title:"jqGrid - it's just a far better grid",permalink:"/2012/01/14/jqgrid-its-just-far-better-grid"}},l=[],u={toc:l};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"What on earth is jQuery? What's a jQuery plugin?"),Object(o.b)("p",null,' These were the questions I was asking myself shortly after discovering that jqGrid was a "jQuery plugin". I\'d been vaguely aware of the phrase "jQuery" being increasingly mentioned on various techical websites since about 2009. But for some reason I\'d felt no urge to find out what it was. I seem to remember that I read the name "jQuery" and jumped to the perfectly logical (in my head) conclusion that this must be a Java SQL engine of some sort. (After all "j" as a prefix to anything so far had generally been Java and "Query" just rang of databases to me.) Clearly I was wrong - life\'s full of surprises.'),Object(o.b)("p",null,"I soon discovered that, contrary to expectations, jQuery had nothing to do with Java ","*",Object(o.b)("strong",{parentName:"p"},"and"),"*"," nothing to do with databases either. It was in fact a JavaScript library written by the amazing ",Object(o.b)("a",{parentName:"p",href:"http://ejohn.org/about/"},"John Resig"),". At the time I had no love for JavaScript. I now realise I knew nearly nothing about it but my feeling was that JavaScript was awful - evil even. However, given JavaScripts ubiquity in the world of web it seemed to be a necessary evil."),Object(o.b)("p",null,"I took a look at the ",Object(o.b)("a",{parentName:"p",href:"http://jquery.com/"},"jQuery website")," and after reading round a bit I noticed that it could be used for ",Object(o.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Ajax_%28programming%29"},"Ajax")," operations. This lead to me reaching the (incorrect) conclusion that jQuery was basically an alternative to the ",Object(o.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ASP.NET_AJAX#Microsoft_Ajax_Library"},"Microsoft Ajax library")," which we were already using to call various Web Services. But I remained frankly suspicious of jQuery. What was the point of this library? Why did it exist?"),Object(o.b)("p",null,"I read the the ",Object(o.b)("a",{parentName:"p",href:"http://weblogs.asp.net/scottgu/archive/2008/09/28/jquery-and-microsoft.aspx"},"blog")," by Scott Gu announcing Microsoft was going to start shipping jQuery with Visual Studio. The Great Gu trusted it. Therefore, I figured, it must be okay... Right?"),Object(o.b)("p",null,"The thing was, I was quite happy with the Microsoft Ajax library. I was familiar with it. It worked. Why switch? I saw the various operations Scott Gu was doing to divs on the screen using jQuery. I didn't want to do anything like that at all. As I said; I had no love for JavaScript - I viewed it as C#'s simple-minded idiot cousin. My unofficial motto when doing web stuff was \"wherever possible, do it on the server\"."),Object(o.b)("p",null,"I think I would have ignored jQuery entirely but for the fact of jqGrid. If I wanted to use jqGrid I had to use jQuery as well. In the end I decided I'd allow it house room just for the sake of jqGrid and I'd just ignore it apart from that. And that's how it was for a while."),Object(o.b)("p",null,"Then I had an epiphany. Okay - that's overplaying it. What actually happened was I realised that something we were doing elsewhere could be done faster and easier with jQuery. It's something so ridiculously feeble that I feel vaguely embarrassed sharing it. Anyway."),Object(o.b)("p",null,"So, you know the css hover behaviour is only implemented for anchor tags in IE6? No? Well read this ",Object(o.b)("a",{parentName:"p",href:"http://stackoverflow.com/questions/36605/ie-6-css-hover-non-anchor-tag"},"Stack Overflow"),' entry - it\'ll clarify. Well, the app that I was working on was an internal web application only used by people with the corporate installation of IE 6 on their desktops. And it was "terribly important" that buttons had hover behaviour. For reasons that now escape me we were doing this by manually adding inline onmouseover / onmouseout event handlers to each input button on the screen in turn in every page in the ',Object(o.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/ms178472.aspx"},"Page","_","Load")," event server side. I think we were aware it wasn't fantastic to have to wire up each button in turn. But it worked and as with so many development situations we had other pressures, other requirements to fulfil and other fish to fry - so we left it at that."),Object(o.b)("p",null,"And then it occurred to me... What about using the ",Object(o.b)("a",{parentName:"p",href:"http://api.jquery.com/class-selector/"},"jQuery class selector")," in conjunction with the ",Object(o.b)("a",{parentName:"p",href:"http://api.jquery.com/hover/"},"jQuery hover event"),"? I could have one method that I called on a page which would wire up all of my hover behaviours in one fell swoop. I wouldn't need to do input-by-input wireups anymore! Hallelujah! This is what I did:"),Object(o.b)("p",null,"The buttons I would like to style:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<input type="button" value="I am a button" class="itIsAButton" />\n<input type="button" value="So am I" class="itIsAButton" />\n<input type="button" value="Me too" class="itIsAButton" />\n')),Object(o.b)("p",null,"My CSS (filter, by the way, is just linear gradients in IE 6-9):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},".itIsAButton\n{\n  filter:progid:DXImageTransform.Microsoft.Gradient (GradientType=0,StartColorStr='#ededed',EndColorStr='#cdcdcd');   \n}\n\n.itIsAButton:hover, .itIsAButton_hover /* \"_hover\" is for IE6 */\n{\n  filter:progid:DXImageTransform.Microsoft.Gradient (GradientType=0,StartColorStr='#f6f6f6',EndColorStr='#efefef');   \n}\n")),Object(o.b)("p",null,"My jQuery:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'$(document).ready(function () {\n\n  //Add hover behaviour on picker buttons for IE6\n  if (($.browser.msie) && \n      (parseInt($.browser.version, 10) < 7)) {\n\n    var fnButtonHover = function (handlerInOut) {\n\n      var $btn = $(this);\n      var sOriginalClass = $btn.prop("class");\n\n      if (handlerInOut.type === "mouseenter") {\n\n        //If not already hovering class then apply it\n        if (sOriginalClass.indexOf("_hover") === -1) {\n\n          $btn.prop("class", sOriginalClass + "_hover");\n        }\n      }\n      else if (handlerInOut.type === "mouseleave") {\n\n        //If not already non-hovering class then apply it\n        if (sOriginalClass.indexOf("_hover") !== -1) {\n\n          $btn.prop("class", sOriginalClass.split("_")[0]);\n        }\n      }\n    };\n\n    $(".itIsAButton").hover(fnButtonHover);\n  }\n});\n')),Object(o.b)("p",null,"And it worked. I didn't really understand this much about this jQuery \"thing\" at that point but I could now see that it clearly had at least one use. I've come to appreciate that jQuery is one of the best pieces of software I've ever encountered. Over time I may go further into some of the good stuff of jQuery. It is, quite simply, brilliant."))}h.isMDXComponent=!0}}]);
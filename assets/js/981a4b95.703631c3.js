(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(8),r=(n(0),n(1166)),i={title:"How to attribute encode a PartialView in MVC (Razor)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp.net mvc","encode","PartialView","razor","attribute"],hide_table_of_contents:!1},l={permalink:"/2012/08/24/how-to-attribute-encode-partialview-in",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-08-24-how-to-attribute-encode-partialview-in.md",source:"@site/blog/2012-08-24-how-to-attribute-encode-partialview-in.md",description:"This post is plagiarism. But I'm plagiarising myself so I don't feel too bad.",date:"2012-08-24T00:00:00.000Z",formattedDate:"August 24, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"encode",permalink:"/tags/encode"},{label:"PartialView",permalink:"/tags/partial-view"},{label:"razor",permalink:"/tags/razor"},{label:"attribute",permalink:"/tags/attribute"}],title:"How to attribute encode a PartialView in MVC (Razor)",readingTime:2.42,truncated:!1,prevItem:{title:"Globalize and jQuery Validation",permalink:"/2012/09/06/globalize-and-jquery-validate"},nextItem:{title:"ClosedXML - the real SDK for Excel",permalink:"/2012/08/16/closedxml-real-sdk-for-excel"}},s=[{value:"The Question",id:"the-question",children:[]},{value:"The Answer",id:"the-answer",children:[]},{value:"Final thoughts",id:"final-thoughts",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This post is plagiarism. But I'm plagiarising myself so I don't feel too bad."),Object(r.b)("p",null," I posted a ",Object(r.b)("a",{parentName:"p",href:"http://stackoverflow.com/q/12093005/761388"},"question")," on StackOverflow recently asking if there was a simple way to attribute encode a PartialView in Razor / ASP.NET MVC. I ended up answering my own question and since I thought it was a useful solution it might be worth sharing."),Object(r.b)("h2",{id:"the-question"},"The Question"),Object(r.b)("p",null,"In the project I was working on I was using PartialViews to store the HTML that would be rendered in a tooltip in my ASP.NET MVC application. (In case you're curious I was using the ",Object(r.b)("a",{parentName:"p",href:"http://jquerytools.org/demos/tooltip/index.html"},"jQuery Tools library for my tooltip")," effect.)"),Object(r.b)("p",null,"I had thought that Razor, clever beast that it is, would automatically attribute encode anything sat between quotes in my HTML. Unfortunately this doesn't appear to be the case. In the short term I was able to workaround this by using single quotation marks to encapsulate my PartialViews HTML. See below for an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip" \n     title=\'@Html.Partial("_MyTooltipInAPartial")\'>\n    Some content\n</div>\n')),Object(r.b)("p",null,"Now this worked just fine but I was aware that if any PartialView needed to use single quotation marks I would have a problem. Let's say for a moment that ",Object(r.b)("inlineCode",{parentName:"p"},"_MyTooltipInAPartial.cshtml")," contained this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<span style="color:green">fjkdsjf\'lksdjdlks</span>\n')),Object(r.b)("p",null,"Well when I used my handy little single quote workaround, the following would result:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip"\n     title=\'<span style="color:green">fjkdsjf\'lksdjdlks</span>\'>\n    Some content\n</div>\n')),Object(r.b)("p",null,"Which although it doesn't show up so well in the code sample above is definite ",Object(r.b)("em",{parentName:"p"},'"does not compute, does not compute, does not compute ',"*","LOUD EXPLOSION","*",'"')," territory."),Object(r.b)("h2",{id:"the-answer"},"The Answer"),Object(r.b)("p",null,"This took me back to my original intent which was to encapsulate the HTML in double quotes like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip" \n     title="@Html.Partial("_MyTooltipInAPartial")">\n    Some content\n</div>\n')),Object(r.b)("p",null,"Though with the example discussed above we clearly had a problem whether we used single or double quotes. What to do?"),Object(r.b)("p",null,"Well the answer wasn't too complicated. After a little pondering I ended up scratching my own itch by writing an HTML helper method called ",Object(r.b)("inlineCode",{parentName:"p"},"PartialAttributeEncoded")," which made use of ",Object(r.b)("inlineCode",{parentName:"p"},"HttpUtility.HtmlAttributeEncode")," to HTML attribute encode a PartialView."),Object(r.b)("p",null,"Here's the code:"),Object(r.b)("script",{src:"https://gist.github.com/3449462.js?file=PartialExtensions.cs"}),Object(r.b)("p",null,"Using the above helper is simplicity itself:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip" \n     title="@Html.PartialAttributeEncoded("_MyTooltipInAPartial")">\n    Some content\n</div>\n')),Object(r.b)("p",null,"And, given the example I've been going through, it would provide you with this output:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip"\n     title="&lt;span style=&quot;color:green&quot;>fjkdsjf&#39;lksdjdlks</span>">\n    Some content\n</div>\n')),Object(r.b)("p",null,"Now the HTML in the title attribute above might be an unreadable mess - but it's the unreadable mess you need. That's what the HTML we've been discussing looks like when it's been encoded."),Object(r.b)("h2",{id:"final-thoughts"},"Final thoughts"),Object(r.b)("p",null,"I was surprised that Razor didn't handle this out of the box. I wonder if this is something that will come along with a later version? It's worth saying that I experienced this issue when working on an MVC 3 application. It's possible that this issue may actually have been solved with MVC 4 already; I haven't had chance to check yet though."))}u.isMDXComponent=!0}}]);
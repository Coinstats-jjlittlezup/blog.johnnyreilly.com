(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[67688],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65828:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r={title:"How to attribute encode a PartialView in MVC (Razor)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net mvc","encode","PartialView","razor","attribute"],hide_table_of_contents:!1},l={permalink:"/2012/08/24/how-to-attribute-encode-partialview-in",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-08-24-how-to-attribute-encode-partialview-in.md",source:"@site/blog/2012-08-24-how-to-attribute-encode-partialview-in.md",title:"How to attribute encode a PartialView in MVC (Razor)",description:"This post is plagiarism. But I'm plagiarising myself so I don't feel too bad.",date:"2012-08-24T00:00:00.000Z",formattedDate:"August 24, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"encode",permalink:"/tags/encode"},{label:"PartialView",permalink:"/tags/partial-view"},{label:"razor",permalink:"/tags/razor"},{label:"attribute",permalink:"/tags/attribute"}],readingTime:2.42,truncated:!1,prevItem:{title:"Globalize and jQuery Validation",permalink:"/2012/09/06/globalize-and-jquery-validate"},nextItem:{title:"ClosedXML - the real SDK for Excel",permalink:"/2012/08/16/closedxml-real-sdk-for-excel"}},s=[{value:"The Question",id:"the-question",children:[]},{value:"The Answer",id:"the-answer",children:[]},{value:"Final thoughts",id:"final-thoughts",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This post is plagiarism. But I'm plagiarising myself so I don't feel too bad."),(0,i.kt)("p",null," I posted a ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/q/12093005/761388"},"question")," on StackOverflow recently asking if there was a simple way to attribute encode a PartialView in Razor / ASP.NET MVC. I ended up answering my own question and since I thought it was a useful solution it might be worth sharing."),(0,i.kt)("h2",{id:"the-question"},"The Question"),(0,i.kt)("p",null,"In the project I was working on I was using PartialViews to store the HTML that would be rendered in a tooltip in my ASP.NET MVC application. (In case you're curious I was using the ",(0,i.kt)("a",{parentName:"p",href:"http://jquerytools.org/demos/tooltip/index.html"},"jQuery Tools library for my tooltip")," effect.)"),(0,i.kt)("p",null,"I had thought that Razor, clever beast that it is, would automatically attribute encode anything sat between quotes in my HTML. Unfortunately this doesn't appear to be the case. In the short term I was able to workaround this by using single quotation marks to encapsulate my PartialViews HTML. See below for an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip" \n     title=\'@Html.Partial("_MyTooltipInAPartial")\'>\n    Some content\n</div>\n')),(0,i.kt)("p",null,"Now this worked just fine but I was aware that if any PartialView needed to use single quotation marks I would have a problem. Let's say for a moment that ",(0,i.kt)("inlineCode",{parentName:"p"},"_MyTooltipInAPartial.cshtml")," contained this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<span style="color:green">fjkdsjf\'lksdjdlks</span>\n')),(0,i.kt)("p",null,"Well when I used my handy little single quote workaround, the following would result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip"\n     title=\'<span style="color:green">fjkdsjf\'lksdjdlks</span>\'>\n    Some content\n</div>\n')),(0,i.kt)("p",null,"Which although it doesn't show up so well in the code sample above is definite ",(0,i.kt)("em",{parentName:"p"},'"does not compute, does not compute, does not compute ',"*","LOUD EXPLOSION","*",'"')," territory."),(0,i.kt)("h2",{id:"the-answer"},"The Answer"),(0,i.kt)("p",null,"This took me back to my original intent which was to encapsulate the HTML in double quotes like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip" \n     title="@Html.Partial("_MyTooltipInAPartial")">\n    Some content\n</div>\n')),(0,i.kt)("p",null,"Though with the example discussed above we clearly had a problem whether we used single or double quotes. What to do?"),(0,i.kt)("p",null,"Well the answer wasn't too complicated. After a little pondering I ended up scratching my own itch by writing an HTML helper method called ",(0,i.kt)("inlineCode",{parentName:"p"},"PartialAttributeEncoded")," which made use of ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpUtility.HtmlAttributeEncode")," to HTML attribute encode a PartialView."),(0,i.kt)("p",null,"Here's the code:"),(0,i.kt)("script",{src:"https://gist.github.com/3449462.js?file=PartialExtensions.cs"}),(0,i.kt)("p",null,"Using the above helper is simplicity itself:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip" \n     title="@Html.PartialAttributeEncoded("_MyTooltipInAPartial")">\n    Some content\n</div>\n')),(0,i.kt)("p",null,"And, given the example I've been going through, it would provide you with this output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<div class="tooltip"\n     title="&lt;span style=&quot;color:green&quot;>fjkdsjf&#39;lksdjdlks</span>">\n    Some content\n</div>\n')),(0,i.kt)("p",null,"Now the HTML in the title attribute above might be an unreadable mess - but it's the unreadable mess you need. That's what the HTML we've been discussing looks like when it's been encoded."),(0,i.kt)("h2",{id:"final-thoughts"},"Final thoughts"),(0,i.kt)("p",null,"I was surprised that Razor didn't handle this out of the box. I wonder if this is something that will come along with a later version? It's worth saying that I experienced this issue when working on an MVC 3 application. It's possible that this issue may actually have been solved with MVC 4 already; I haven't had chance to check yet though."))}p.isMDXComponent=!0}}]);
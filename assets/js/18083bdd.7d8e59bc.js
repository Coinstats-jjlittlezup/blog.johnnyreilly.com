(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1189:function(t,e,o){"use strict";o.d(e,"a",(function(){return u})),o.d(e,"b",(function(){return m}));var a=o(0),n=o.n(a);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var p=n.a.createContext({}),c=function(t){var e=n.a.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},u=function(t){var e=c(t.components);return n.a.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},d=n.a.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(o),d=a,m=u["".concat(i,".").concat(d)]||u[d]||h[d]||r;return o?n.a.createElement(m,l(l({ref:e},p),{},{components:o})):n.a.createElement(m,l({ref:e},p))}));function m(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},80:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return i})),o.d(e,"metadata",(function(){return l})),o.d(e,"toc",(function(){return s})),o.d(e,"default",(function(){return c}));var a=o(4),n=o(10),r=(o(0),o(1189)),i={title:"Using Bootstrap Tooltips to display jQuery Validation error messages",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Tooltip","Bootstrap","jQuery Validation"],hide_table_of_contents:!1},l={permalink:"/2013/08/17/using-bootstrap-tooltips-to-display",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-08-17-using-bootstrap-tooltips-to-display.md",source:"@site/blog/2013-08-17-using-bootstrap-tooltips-to-display.md",description:"I love jQuery Validation. I was recently putting together a screen which had a lot of different bits of validation going on. And the default jQuery Validation approach of displaying the validation messages next to the element being validated wasn't working for me. That is to say, because of the amount of elements on the form, the appearance of validation messages was really making a mess of the presentation. So what to do?",date:"2013-08-17T00:00:00.000Z",formattedDate:"August 17, 2013",tags:[{label:"Tooltip",permalink:"/tags/tooltip"},{label:"Bootstrap",permalink:"/tags/bootstrap"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"}],title:"Using Bootstrap Tooltips to display jQuery Validation error messages",readingTime:1.225,truncated:!1,prevItem:{title:"Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native",permalink:"/2013/10/04/migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native"},nextItem:{title:"Announcing jQuery Validation Unobtrusive Native...",permalink:"/2013/08/08/announcing-jquery-validation"}},s=[{value:"Tooltips to the rescue!",id:"tooltips-to-the-rescue",children:[]}],p={toc:s};function c(t){var e=t.components,o=Object(n.a)(t,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,o,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I love jQuery Validation. I was recently putting together a screen which had a lot of different bits of validation going on. And the default jQuery Validation approach of displaying the validation messages next to the element being validated wasn't working for me. That is to say, because of the amount of elements on the form, the appearance of validation messages was really making a mess of the presentation. So what to do?"),Object(r.b)("h2",{id:"tooltips-to-the-rescue"},"Tooltips to the rescue!"),Object(r.b)("p",null,"I was chatting to ",Object(r.b)("a",{parentName:"p",href:"https://plus.google.com/u/0/116859810359377785616/posts"},"Marc Talary")," about this and he had the bright idea of using tooltips to display the error messages. Tooltips would allow the existing presentation of the form to remain as is whilst still displaying the messages to the users. Brilliant idea!"),Object(r.b)("p",null,"After a certain amount of fiddling I came up with a fairly solid mechanism for getting jQuery Validation to display error messages as tooltips which I'll share here. It's worth saying that for the application that Marc and I were working on we already had ",Object(r.b)("a",{parentName:"p",href:"http://jqueryui.com/"},"jQuery UI")," in place and so we decided to use the ",Object(r.b)("a",{parentName:"p",href:"http://jqueryui.com/tooltip/"},"jQuery UI tooltip"),". This example will use the ",Object(r.b)("a",{parentName:"p",href:"http://getbootstrap.com/javascript/#tooltips"},"Bootstrap tooltip")," instead. As much as anything else this demonstrates that you could swap out the tooltip mechanism here with any of your choosing."),Object(r.b)("iframe",{src:"http://htmlpreview.github.io/?https://gist.github.com/johnnyreilly/5867188/raw/2543a12fbd5c0aaad1da6793b7a7437492be3baf/DemoTooltip.html",width:"100%",height:"350"}),Object(r.b)("p",null,"Beautiful isn't it? Now look at the source:"),Object(r.b)("script",{src:"https://gist.github.com/johnnyreilly/5867188.js?file=DemoTooltip.html"}),Object(r.b)("p",null,"All the magic is in the JavaScript, specifically the ",Object(r.b)("inlineCode",{parentName:"p"},"showErrors")," function that's passed as an option to jQuery Validation. Enjoy!"))}c.isMDXComponent=!0}}]);
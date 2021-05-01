(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[5529],{3905:function(t,e,o){"use strict";o.d(e,{Zo:function(){return u},kt:function(){return m}});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),h=p(o),m=n,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return o?a.createElement(d,i(i({ref:e},u),{},{components:o})):a.createElement(d,i({ref:e},u))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6143:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=o(22122),n=o(19756),r=(o(67294),o(3905)),i={title:"Using Bootstrap Tooltips to display jQuery Validation error messages",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Tooltip","Bootstrap","jQuery Validation"],hide_table_of_contents:!1},l={permalink:"/2013/08/17/using-bootstrap-tooltips-to-display",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-08-17-using-bootstrap-tooltips-to-display.md",source:"@site/blog/2013-08-17-using-bootstrap-tooltips-to-display.md",title:"Using Bootstrap Tooltips to display jQuery Validation error messages",description:"I love jQuery Validation. I was recently putting together a screen which had a lot of different bits of validation going on. And the default jQuery Validation approach of displaying the validation messages next to the element being validated wasn't working for me. That is to say, because of the amount of elements on the form, the appearance of validation messages was really making a mess of the presentation. So what to do?",date:"2013-08-17T00:00:00.000Z",formattedDate:"August 17, 2013",tags:[{label:"Tooltip",permalink:"/tags/tooltip"},{label:"Bootstrap",permalink:"/tags/bootstrap"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"}],readingTime:1.225,truncated:!1,prevItem:{title:"Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native",permalink:"/2013/10/04/migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native"},nextItem:{title:"Announcing jQuery Validation Unobtrusive Native...",permalink:"/2013/08/08/announcing-jquery-validation"}},s=[{value:"Tooltips to the rescue!",id:"tooltips-to-the-rescue",children:[]}],p={toc:s};function u(t){var e=t.components,o=(0,n.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I love jQuery Validation. I was recently putting together a screen which had a lot of different bits of validation going on. And the default jQuery Validation approach of displaying the validation messages next to the element being validated wasn't working for me. That is to say, because of the amount of elements on the form, the appearance of validation messages was really making a mess of the presentation. So what to do?"),(0,r.kt)("h2",{id:"tooltips-to-the-rescue"},"Tooltips to the rescue!"),(0,r.kt)("p",null,"I was chatting to ",(0,r.kt)("a",{parentName:"p",href:"https://plus.google.com/u/0/116859810359377785616/posts"},"Marc Talary")," about this and he had the bright idea of using tooltips to display the error messages. Tooltips would allow the existing presentation of the form to remain as is whilst still displaying the messages to the users. Brilliant idea!"),(0,r.kt)("p",null,"After a certain amount of fiddling I came up with a fairly solid mechanism for getting jQuery Validation to display error messages as tooltips which I'll share here. It's worth saying that for the application that Marc and I were working on we already had ",(0,r.kt)("a",{parentName:"p",href:"http://jqueryui.com/"},"jQuery UI")," in place and so we decided to use the ",(0,r.kt)("a",{parentName:"p",href:"http://jqueryui.com/tooltip/"},"jQuery UI tooltip"),". This example will use the ",(0,r.kt)("a",{parentName:"p",href:"http://getbootstrap.com/javascript/#tooltips"},"Bootstrap tooltip")," instead. As much as anything else this demonstrates that you could swap out the tooltip mechanism here with any of your choosing."),(0,r.kt)("iframe",{src:"http://htmlpreview.github.io/?https://gist.github.com/johnnyreilly/5867188/raw/2543a12fbd5c0aaad1da6793b7a7437492be3baf/DemoTooltip.html",width:"100%",height:"350"}),(0,r.kt)("p",null,"Beautiful isn't it? Now look at the source:"),(0,r.kt)("script",{src:"https://gist.github.com/johnnyreilly/5867188.js?file=DemoTooltip.html"}),(0,r.kt)("p",null,"All the magic is in the JavaScript, specifically the ",(0,r.kt)("inlineCode",{parentName:"p"},"showErrors")," function that's passed as an option to jQuery Validation. Enjoy!"))}u.isMDXComponent=!0}}]);
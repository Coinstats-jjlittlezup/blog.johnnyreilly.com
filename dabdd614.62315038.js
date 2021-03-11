(window.webpackJsonp=window.webpackJsonp||[]).push([[929],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||h[m]||r;return n?o.a.createElement(b,l(l({ref:t},s),{},{components:n})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},994:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(1159)),i={title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["autocomplete","jQuery UI","clear field button","IE 10"],hide_table_of_contents:!1},l={permalink:"/2013/04/09/making-ie-10s-clear-field-x-button-and",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-04-09-making-ie-10s-clear-field-x-button-and.md",source:"@site/blog/2013-04-09-making-ie-10s-clear-field-x-button-and.md",description:"This morning when I logged on I was surprised to discover IE 10 had been installed onto my machine. I hadn't taken any action to trigger this myself and so I\u2019m assuming that this was part of the general Windows Update mechanism. I know Microsoft had planned to push IE 10 out through this mechanism.",date:"2013-04-09T00:00:00.000Z",tags:[{label:"autocomplete",permalink:"/tags/autocomplete"},{label:"jQuery UI",permalink:"/tags/j-query-ui"},{label:"clear field button",permalink:"/tags/clear-field-button"},{label:"IE 10",permalink:"/tags/ie-10"}],title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",readingTime:1.605,truncated:!1,prevItem:{title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",permalink:"/2013/04/17/ie-10-install-torches-javascript"},nextItem:{title:"Death to compatibility mode",permalink:"/2013/04/01/death-to-compatibility-mode"}},c=[],s={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This morning when I logged on I was surprised to discover IE 10 had been installed onto my machine. I hadn't taken any action to trigger this myself and so I\u2019m assuming that this was part of the general Windows Update mechanism. I know ",Object(r.b)("a",{parentName:"p",href:"http://technet.microsoft.com/en-us/ie/jj898508.aspx"},"Microsoft had planned to push IE 10 out through this mechanism"),"."),Object(r.b)("p",null," I was a little surprised that my work desktop had been upgraded without any notice. And I was initially rather concerned given that most of my users have IE 9 and now I didn't have a test harness on my development machine any more. (I've generally found that having the majority users browser on your own machine is a good idea.) However, I wasn't too concerned as I didn\u2019t think it would makes much of a difference to my development experience. I say that because IE10, as far as I understand, is basically IE 9 + more advanced CSS 3 and extra HTML 5 features. The rendering of my existing content developed for the IE 9 target should look pixel for pixel identical in IE 10. That\u2019s the theory anyway."),Object(r.b)("p",null,"However, I have found one exception to this rule already. IE 10 provides clear field buttons in text boxes that look like this:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://3.bp.blogspot.com/-HRxuGdc6PhE/UWQMq15gKHI/AAAAAAAAAZg/XmFfFZBMHYk/s1600/ClearField.png"},Object(r.b)("img",{parentName:"a",src:"http://3.bp.blogspot.com/-HRxuGdc6PhE/UWQMq15gKHI/AAAAAAAAAZg/XmFfFZBMHYk/s320/ClearField.png",alt:"null"})),"Unhappily I found these were clashing with our jQuery UI auto complete loading gif \u2013 looking like this:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://3.bp.blogspot.com/-RPXGJkm1Lyk/UWQNCcFlmpI/AAAAAAAAAZo/pGP3IubeBiQ/s1600/ClearFieldMeetAutoComplete.png"},Object(r.b)("img",{parentName:"a",src:"http://3.bp.blogspot.com/-RPXGJkm1Lyk/UWQNCcFlmpI/AAAAAAAAAZo/pGP3IubeBiQ/s320/ClearFieldMeetAutoComplete.png",alt:"null"})),"I know; ugly isn't it? Happily I was able to resolve this with a CSS ",Object(r.b)("strike",null,"hack")),Object(r.b)("p",null," fix which looks like this:"),Object(r.b)("script",{src:"https://gist.github.com/johnnyreilly/5345373.js?file=ie10jQueryUI.css"}),Object(r.b)("p",null,"And now the jQuery UI autocomplete looks like we expect during the loading phase:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://3.bp.blogspot.com/-mzBwe7BGwjk/UWQNdEKiucI/AAAAAAAAAZw/OmUFi6zMY7g/s1600/AutoComplete.png"},Object(r.b)("img",{parentName:"a",src:"http://3.bp.blogspot.com/-mzBwe7BGwjk/UWQNdEKiucI/AAAAAAAAAZw/OmUFi6zMY7g/s320/AutoComplete.png",alt:"null"})),"But happily when the autocomplete is not in the loading phase we still have access to the IE 10 clear field button. This works because the CSS selector above only applies to the ",Object(r.b)("em",{parentName:"p"},"ui-autocomplete-loading")," class (which is only applied to the textbox when the loading is taking place). So we still get to use this:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://3.bp.blogspot.com/-HRxuGdc6PhE/UWQMq15gKHI/AAAAAAAAAZg/XmFfFZBMHYk/s1600/ClearField.png"},Object(r.b)("img",{parentName:"a",src:"http://3.bp.blogspot.com/-HRxuGdc6PhE/UWQMq15gKHI/AAAAAAAAAZg/XmFfFZBMHYk/s320/ClearField.png",alt:"null"})),"Which is nice."))}p.isMDXComponent=!0}}]);
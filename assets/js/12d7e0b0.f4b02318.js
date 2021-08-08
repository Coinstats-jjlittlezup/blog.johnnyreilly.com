"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[38895],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(n),m=o,c=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(c,r(r({ref:t},p),{},{components:n})):a.createElement(c,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55086:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={title:"Simple fading in and out using CSS transitions and classes",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["CSS 3","transitionend","fadeIn","fadeOut","transitions"],hide_table_of_contents:!1},l=void 0,d={permalink:"/2013/12/04/simple-fading-in-and-out-using-css-transitions",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-12-04-simple-fading-in-and-out-using-css-transitions.md",source:"@site/blog/2013-12-04-simple-fading-in-and-out-using-css-transitions.md",title:"Simple fading in and out using CSS transitions and classes",description:"Caveat emptor folks... Let me start off by putting my hands up and saying I am no expert on CSS. And furthermore let me say that this blog post is essentially the distillation of a heady session of googling on the topic of CSS transitions. The credit for the technique detailed here belongs to many others, I'm just documenting it for my own benefit (and for anyone who stumbles upon this).",date:"2013-12-04T00:00:00.000Z",formattedDate:"December 4, 2013",tags:[{label:"CSS 3",permalink:"/tags/css-3"},{label:"transitionend",permalink:"/tags/transitionend"},{label:"fadeIn",permalink:"/tags/fade-in"},{label:"fadeOut",permalink:"/tags/fade-out"},{label:"transitions",permalink:"/tags/transitions"}],readingTime:3.615,truncated:!1,prevItem:{title:"NuGet and WebMatrix: How to install a specific version of a package",permalink:"/2013/12/13/nuget-and-webmatrix-how-to-install"},nextItem:{title:"Rolling your own confirm mechanism using Promises and jQuery UI",permalink:"/2013/11/26/rolling-your-own-confirm-mechanism"}},p=[{value:"What do we want to do?",id:"what-do-we-want-to-do",children:[]},{value:"I&#39;m sold - let&#39;s do it!",id:"im-sold---lets-do-it",children:[]},{value:"Now, a warning...",id:"now-a-warning",children:[]},{value:"A halfway there solution to the <code>display: none</code>",id:"a-halfway-there-solution-to-the-display-none",children:[]}],u={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Caveat emptor folks... Let me start off by putting my hands up and saying I am no expert on CSS. And furthermore let me say that this blog post is essentially the distillation of a heady session of googling on the topic of CSS transitions. The credit for the technique detailed here belongs to many others, I'm just documenting it for my own benefit (and for anyone who stumbles upon this)."),(0,i.kt)("h2",{id:"what-do-we-want-to-do"},"What do we want to do?"),(0,i.kt)("p",null,"Most web developers have likely reached at some point for jQuery's ",(0,i.kt)("a",{parentName:"p",href:"http://api.jquery.com/fadeIn/"},(0,i.kt)("inlineCode",{parentName:"a"},"fadeIn"))," and ",(0,i.kt)("a",{parentName:"p",href:"http://api.jquery.com/fadeOut/"},(0,i.kt)("inlineCode",{parentName:"a"},"fadeOut"))," awesomeness. What could be cooler than fading in or out your UI, right?"),(0,i.kt)("p",null,"Behind the scenes of ",(0,i.kt)("inlineCode",{parentName:"p"},"fadeIn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fadeOut")," JavaScript is doing an awful lot of work to create that animation. And in our modern world we simply don't need to do that work anymore; it's gone native and is covered by ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions"},"CSS transitions"),"."),(0,i.kt)("p",null,'Added to the "',(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/George_Mallory"},"because it's there"),'" reason for using CSS transitions to do fading there is a more important reason; let me quote ',(0,i.kt)("a",{parentName:"p",href:"http://www.html5rocks.com/en/tutorials/speed/html5/#toc-css3-transitions"},"HTML5 rocks"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"',(0,i.kt)("em",{parentName:"p"},"CSS Transitions make style animation trivial for everyone, but they also are a smart performance feature. Because a CSS transition is managed by the browser, the fidelity of its animation can be greatly improved, and in many cases hardware accelerated. Currently WebKit (Chrome, Safari, iOS) have hardware accelerated CSS transforms, but it's coming quickly to other browsers and platforms."),'"')),(0,i.kt)("p",null,"Added to this, if you have mobile users then the usage of native functionality (as opposed to doing it manually in JavaScript) actually saves battery life."),(0,i.kt)("h2",{id:"im-sold---lets-do-it"},"I'm sold - let's do it!"),(0,i.kt)("p",null,"This is the CSS we'll need:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".fader {\n    -moz-transition: opacity 0.7s linear;\n    -o-transition: opacity 0.7s linear;\n    -webkit-transition: opacity 0.7s linear;\n    transition: opacity 0.7s linear;\n}\n\n.fader.fadedOut {\n    opacity: 0;\n}\n")),(0,i.kt)("p",null,"Note we have 2 CSS classes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fader")," ","-"," if this class is applied to an element then when the opacity of that element is changed it will be an animated change. The duration of the transition and the timing function used are customisable - in this case it takes 0.7 seconds and is linear."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fadedOut")," ","-"," when used in conjunction with ",(0,i.kt)("inlineCode",{parentName:"li"},"fader")," this class creates a fading in or fading out effect as it is removed or applied respectively. (This relies upon the default value of opacity being 1.)")),(0,i.kt)("p",null,"Let's see it in action:"),(0,i.kt)("iframe",{width:"100%",height:"200",src:"http://jsfiddle.net/johnny_reilly/86amq/embedded/result,js,html,css",allowFullScreen:"allowFullScreen",frameBorder:"0"}),(0,i.kt)("p",null,"It goes without saying that one day in the not too distant future (I hope) we'll be able to leave behind the horrible world of vendor prefixes. Then we'll be down to just the single ",(0,i.kt)("inlineCode",{parentName:"p"},"transition")," statement. One day..."),(0,i.kt)("h2",{id:"now-a-warning"},"Now, a warning..."),(0,i.kt)("p",null,"Unfortunately the technique detailed above differs from ",(0,i.kt)("a",{parentName:"p",href:"http://api.jquery.com/fadeIn/"},(0,i.kt)("inlineCode",{parentName:"a"},"fadeIn"))," and ",(0,i.kt)("a",{parentName:"p",href:"http://api.jquery.com/fadeOut/"},(0,i.kt)("inlineCode",{parentName:"a"},"fadeOut"))," in one important way. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"fadeOut")," animation completes it sets removes the element from the flow of the DOM using ",(0,i.kt)("inlineCode",{parentName:"p"},"display: none"),". However, display is not a property that can be animated and so you can't include this in your CSS transition. If removing the element from the flow of the DOM is something you need then you'll need to bear this in mind. If anyone has any suggestions for an nice way to approach this I'd love to hear from you."),(0,i.kt)("h2",{id:"a-halfway-there-solution-to-the-display-none"},"A halfway there solution to the ",(0,i.kt)("inlineCode",{parentName:"h2"},"display: none")),(0,i.kt)("p",null,"Andrew Davey tweeted me the suggestion below:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly"},"@johnny","_","reilly")," Yep, transitions are sweet. You could use the transitionend event to remove the element from the DOM ",(0,i.kt)("a",{parentName:"p",href:"http://t.co/Q1oWy3g8Lp"},"http://t.co/Q1oWy3g8Lp")),(0,i.kt)("p",{parentName:"blockquote"},"\u2014 Andrew Davey (@andrewdavey) ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/andrewdavey/statuses/408545283606212608"},"December 5, 2013"))),(0,i.kt)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,i.kt)("p",null,"So I thought I'd give it a go. However, whilst we've a ",(0,i.kt)("inlineCode",{parentName:"p"},"transitionend")," event to play with we don't have a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"transitionstart")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"transitionbegin"),". So I tried this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$("#showHideButton").click(function(){\n    var $alertDiv = $("#alertDiv");\n    if ($alertDiv.hasClass("fadedOut")) {\n        $alertDiv.removeClass("fadedOut").css("display", "");\n    }\n    else {\n        $("#alertDiv").addClass("fadedOut");\n    }\n})\n\n$(document).on(\'webkitTransitionEnd transitionend oTransitionEnd\', ".fader", \n    function (evnt) {\n        var $faded = $(evnt.target);\n        if ($faded.hasClass("fadedOut")) {\n            $faded.css("display", "none");\n        }\n});\n')),(0,i.kt)("p",null,"Essentially, on the ",(0,i.kt)("inlineCode",{parentName:"p"},"transitionend")," event ",(0,i.kt)("inlineCode",{parentName:"p"},"display: none")," is applied to the element in question. Groovy. In the absence of a ",(0,i.kt)("inlineCode",{parentName:"p"},"transitionstart")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"transitionbegin"),", when removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"fadeOut")," class I'm first manually clearing out the ",(0,i.kt)("inlineCode",{parentName:"p"},"display: none"),". Whilst this works in terms of adding it back into the flow of the DOM it takes away all the ",(0,i.kt)("inlineCode",{parentName:"p"},"fadeIn")," gorgeousness. So it's not quite the fully featured solution you might hope for. But it's a start."))}h.isMDXComponent=!0}}]);
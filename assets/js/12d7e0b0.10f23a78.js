(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),c=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,m=p["".concat(r,".").concat(b)]||p[b]||u[b]||i;return n?o.a.createElement(m,s(s({ref:t},d),{},{components:n})):o.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(8),i=(n(0),n(1176)),r={title:"Simple fading in and out using CSS transitions and classes",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["CSS 3","transitionend","fadeIn","fadeOut","transitions"],hide_table_of_contents:!1},s={permalink:"/2013/12/04/simple-fading-in-and-out-using-css-transitions",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-12-04-simple-fading-in-and-out-using-css-transitions.md",source:"@site/blog/2013-12-04-simple-fading-in-and-out-using-css-transitions.md",description:"Caveat emptor folks... Let me start off by putting my hands up and saying I am no expert on CSS. And furthermore let me say that this blog post is essentially the distillation of a heady session of googling on the topic of CSS transitions. The credit for the technique detailed here belongs to many others, I'm just documenting it for my own benefit (and for anyone who stumbles upon this).",date:"2013-12-04T00:00:00.000Z",formattedDate:"December 4, 2013",tags:[{label:"CSS 3",permalink:"/tags/css-3"},{label:"transitionend",permalink:"/tags/transitionend"},{label:"fadeIn",permalink:"/tags/fade-in"},{label:"fadeOut",permalink:"/tags/fade-out"},{label:"transitions",permalink:"/tags/transitions"}],title:"Simple fading in and out using CSS transitions and classes",readingTime:3.625,truncated:!1,prevItem:{title:"NuGet and WebMatrix: How to install a specific version of a package",permalink:"/2013/12/13/nuget-and-webmatrix-how-to-install"},nextItem:{title:"Rolling your own confirm mechanism using Promises and jQuery UI",permalink:"/2013/11/26/rolling-your-own-confirm-mechanism"}},l=[{value:"What do we want to do?",id:"what-do-we-want-to-do",children:[]},{value:"I&#39;m sold - let&#39;s do it!",id:"im-sold---lets-do-it",children:[]},{value:"Now, a warning...",id:"now-a-warning",children:[]},{value:"A halfway there solution to the <code>display: none</code>",id:"a-halfway-there-solution-to-the-display-none",children:[]}],d={toc:l};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Caveat emptor folks... Let me start off by putting my hands up and saying I am no expert on CSS. And furthermore let me say that this blog post is essentially the distillation of a heady session of googling on the topic of CSS transitions. The credit for the technique detailed here belongs to many others, I'm just documenting it for my own benefit (and for anyone who stumbles upon this)."),Object(i.b)("h2",{id:"what-do-we-want-to-do"},"What do we want to do?"),Object(i.b)("p",null,"Most web developers have likely reached at some point for jQuery's ",Object(i.b)("a",{parentName:"p",href:"http://api.jquery.com/fadeIn/"},Object(i.b)("inlineCode",{parentName:"a"},"fadeIn"))," and ",Object(i.b)("a",{parentName:"p",href:"http://api.jquery.com/fadeOut/"},Object(i.b)("inlineCode",{parentName:"a"},"fadeOut"))," awesomeness. What could be cooler than fading in or out your UI, right?"),Object(i.b)("p",null,"Behind the scenes of ",Object(i.b)("inlineCode",{parentName:"p"},"fadeIn")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fadeOut")," JavaScript is doing an awful lot of work to create that animation. And in our modern world we simply don't need to do that work anymore; it's gone native and is covered by ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions"},"CSS transitions"),"."),Object(i.b)("p",null,'Added to the "',Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/George_Mallory"},"because it's there"),'" reason for using CSS transitions to do fading there is a more important reason; let me quote ',Object(i.b)("a",{parentName:"p",href:"http://www.html5rocks.com/en/tutorials/speed/html5/#toc-css3-transitions"},"HTML5 rocks"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"',Object(i.b)("em",{parentName:"p"},"CSS Transitions make style animation trivial for everyone, but they also are a smart performance feature. Because a CSS transition is managed by the browser, the fidelity of its animation can be greatly improved, and in many cases hardware accelerated. Currently WebKit (Chrome, Safari, iOS) have hardware accelerated CSS transforms, but it's coming quickly to other browsers and platforms."),'"')),Object(i.b)("p",null,"Added to this, if you have mobile users then the usage of native functionality (as opposed to doing it manually in JavaScript) actually saves battery life."),Object(i.b)("h2",{id:"im-sold---lets-do-it"},"I'm sold - let's do it!"),Object(i.b)("p",null,"This is the CSS we'll need:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-css"},".fader {\n    -moz-transition: opacity 0.7s linear;\n    -o-transition: opacity 0.7s linear;\n    -webkit-transition: opacity 0.7s linear;\n    transition: opacity 0.7s linear;\n}\n\n.fader.fadedOut {\n    opacity: 0;\n}\n")),Object(i.b)("p",null,"Note we have 2 CSS classes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fader")," ","-"," if this class is applied to an element then when the opacity of that element is changed it will be an animated change. The duration of the transition and the timing function used are customisable - in this case it takes 0.7 seconds and is linear."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fadedOut")," ","-"," when used in conjunction with ",Object(i.b)("inlineCode",{parentName:"li"},"fader")," this class creates a fading in or fading out effect as it is removed or applied respectively. (This relies upon the default value of opacity being 1.)")),Object(i.b)("p",null,"Let's see it in action:"),Object(i.b)("iframe",{width:"100%",height:"200",src:"http://jsfiddle.net/johnny_reilly/86amq/embedded/result,js,html,css",allowFullScreen:"allowFullScreen",frameBorder:"0"}),Object(i.b)("p",null,"It goes without saying that one day in the not too distant future (I hope) we'll be able to leave behind the horrible world of vendor prefixes. Then we'll be down to just the single ",Object(i.b)("inlineCode",{parentName:"p"},"transition")," statement. One day..."),Object(i.b)("h2",{id:"now-a-warning"},"Now, a warning..."),Object(i.b)("p",null,"Unfortunately the technique detailed above differs from ",Object(i.b)("a",{parentName:"p",href:"http://api.jquery.com/fadeIn/"},Object(i.b)("inlineCode",{parentName:"a"},"fadeIn"))," and ",Object(i.b)("a",{parentName:"p",href:"http://api.jquery.com/fadeOut/"},Object(i.b)("inlineCode",{parentName:"a"},"fadeOut"))," in one important way. When the ",Object(i.b)("inlineCode",{parentName:"p"},"fadeOut")," animation completes it sets removes the element from the flow of the DOM using ",Object(i.b)("inlineCode",{parentName:"p"},"display: none"),". However, display is not a property that can be animated and so you can't include this in your CSS transition. If removing the element from the flow of the DOM is something you need then you'll need to bear this in mind. If anyone has any suggestions for an nice way to approach this I'd love to hear from you."),Object(i.b)("h2",{id:"a-halfway-there-solution-to-the-display-none"},"A halfway there solution to the ",Object(i.b)("inlineCode",{parentName:"h2"},"display: none")),Object(i.b)("p",null,"Andrew Davey tweeted me the suggestion below:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly"},"@johnny","_","reilly")," Yep, transitions are sweet. You could use the transitionend event to remove the element from the DOM ",Object(i.b)("a",{parentName:"p",href:"http://t.co/Q1oWy3g8Lp"},"http://t.co/Q1oWy3g8Lp")),Object(i.b)("p",{parentName:"blockquote"},"\u2014 Andrew Davey (@andrewdavey) ",Object(i.b)("a",{parentName:"p",href:"https://twitter.com/andrewdavey/statuses/408545283606212608"},"December 5, 2013"))),Object(i.b)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),Object(i.b)("p",null,"So I thought I'd give it a go. However, whilst we've a ",Object(i.b)("inlineCode",{parentName:"p"},"transitionend")," event to play with we don't have a corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"transitionstart")," or ",Object(i.b)("inlineCode",{parentName:"p"},"transitionbegin"),". So I tried this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'$("#showHideButton").click(function(){\n    var $alertDiv = $("#alertDiv");\n    if ($alertDiv.hasClass("fadedOut")) {\n        $alertDiv.removeClass("fadedOut").css("display", "");\n    }\n    else {\n        $("#alertDiv").addClass("fadedOut");\n    }\n})\n\n$(document).on(\'webkitTransitionEnd transitionend oTransitionEnd\', ".fader", \n    function (evnt) {\n        var $faded = $(evnt.target);\n        if ($faded.hasClass("fadedOut")) {\n            $faded.css("display", "none");\n        }\n});\n')),Object(i.b)("p",null,"Essentially, on the ",Object(i.b)("inlineCode",{parentName:"p"},"transitionend")," event ",Object(i.b)("inlineCode",{parentName:"p"},"display: none")," is applied to the element in question. Groovy. In the absence of a ",Object(i.b)("inlineCode",{parentName:"p"},"transitionstart")," or ",Object(i.b)("inlineCode",{parentName:"p"},"transitionbegin"),", when removing the ",Object(i.b)("inlineCode",{parentName:"p"},"fadeOut")," class I'm first manually clearing out the ",Object(i.b)("inlineCode",{parentName:"p"},"display: none"),". Whilst this works in terms of adding it back into the flow of the DOM it takes away all the ",Object(i.b)("inlineCode",{parentName:"p"},"fadeIn")," gorgeousness. So it's not quite the fully featured solution you might hope for. But it's a start."))}c.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var h=i.a.createContext({}),c=function(e){var t=i.a.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return i.a.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return a?i.a.createElement(m,s(s({ref:t},h),{},{components:a})):i.a.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var h=2;h<o;h++)r[h]=a[h];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),i=a(8),o=(a(0),a(1176)),r={title:"A navigation animation (for your users delectation)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["navigation animation","css load","UX","CSS animation","Modernizr"],hide_table_of_contents:!1},s={permalink:"/2013/04/26/a-navigation-animation-for-your-users",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-04-26-a-navigation-animation-for-your-users.md",source:"@site/blog/2013-04-26-a-navigation-animation-for-your-users.md",description:"The Vexation",date:"2013-04-26T00:00:00.000Z",formattedDate:"April 26, 2013",tags:[{label:"navigation animation",permalink:"/tags/navigation-animation"},{label:"css load",permalink:"/tags/css-load"},{label:"UX",permalink:"/tags/ux"},{label:"CSS animation",permalink:"/tags/css-animation"},{label:"Modernizr",permalink:"/tags/modernizr"}],title:"A navigation animation (for your users delectation)",readingTime:5.435,truncated:!1,prevItem:{title:"How I'm Using Cassette part 1:Getting Up and Running",permalink:"/2013/05/04/how-im-using-cassette"},nextItem:{title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",permalink:"/2013/04/17/ie-10-install-torches-javascript"}},l=[{value:"The Vexation",id:"the-vexation",children:[]},{value:"The Agreeable Resolution",id:"the-agreeable-resolution",children:[]},{value:"How&#39;s that work then guv?",id:"hows-that-work-then-guv",children:[]},{value:"Oh, and a final PS",id:"oh-and-a-final-ps",children:[]},{value:"Better make that a PPS - catering for IE 9 and earlier",id:"better-make-that-a-pps---catering-for-ie-9-and-earlier",children:[]}],h={toc:l};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"the-vexation"},"The Vexation"),Object(o.b)("p",null," The current application I'm working on lives within an ",Object(o.b)("inlineCode",{parentName:"p"},"iframe"),". A side effect of that is that my users no longer get the visual feedback that they're used to as they navigate around the site. By \"visual feedback\" what I mean are the little visual tics that are displayed in the browser when you're in the process of navigating from one screen to the next. Basically, these:"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-x_8VXvW0w1M/UXpam8TtPQI/AAAAAAAAAbI/uVFFkL8uBAc/s320/TheSpinCycleOfProgress.png",alt:null})),Object(o.b)("p",null,"When an application is nested in an ",Object(o.b)("inlineCode",{parentName:"p"},"iframe")," it seems that these visual tics aren't propogated up to the top frame of the browser as the user navigates around. Clicking on links results in a short lag whilst nothing appears to be happening and then, BANG!, a new page is rendered. This is not a great user experience. There's nothing to indicate that the link has been clicked on and the browser is doing something. Well, not in Internet Explorer at least - Chrome (my browser of choice) appears to do just that. But that's really by the by, the people using my app will be using the corporate browser, IE; so I need to think about them."),Object(o.b)("p",null,"Now I'm fully aware that this is more in the region of nice-to-have rather than absolute necessity. That said, my experience is that when users think an application isn't responding fast enough their action point is usually \"click it again, and maybe once more for luck\". To prevent this from happening, I wanted to give the users back some kind of steer when they were in the process of navigation, ",Object(o.b)("inlineCode",{parentName:"p"},"iframe")," or no ",Object(o.b)("inlineCode",{parentName:"p"},"iframe"),"."),Object(o.b)("h2",{id:"the-agreeable-resolution"},"The Agreeable Resolution"),Object(o.b)("p",null,"To that end, I've come up with something that I feel does the job, and does it well. I've taken a CSS animation courtesy of the good folk at ",Object(o.b)("a",{parentName:"p",href:"http://cssload.net/"},"CSS Load")," and embedded it in the layout of my application. This animation is hidden from view until the user navigates to another page. At that point, the CSS animation appears in the header of the screen and remains in place until the new screen is rendered. This is what it looks like:"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-RaGwl1llrDM/UX4pEiUfGWI/AAAAAAAAAbo/jSZC0skiLfQ/s320/NavigationAnimationAtWork.png",alt:null})),Object(o.b)("h2",{id:"hows-that-work-then-guv"},"How's that work then guv?"),Object(o.b)("p",null,"You're no doubt dazzled by the glory of it all. How was it accomplished? Well, it was actually a great deal easier than you might think. First of all we have the html:"),Object(o.b)("script",{src:"https://gist.github.com/johnnyreilly/5466370.js?file=navigationAnimation.html"}),Object(o.b)("p",null,"Apart from the outer ",Object(o.b)("inlineCode",{parentName:"p"},"div")," tag (#navigationAnimation) all of this is the HTML taken from ",Object(o.b)("a",{parentName:"p",href:"http://cssload.net/"},"CSS Load"),". If you wanted to use a different navigation animation you could easily replace the inner HTML with something else instead. Next up is the CSS, again courtesy of CSS Load (and it's this that turns this simple HTML into sumptuous animated goodness):"),Object(o.b)("script",{src:"https://gist.github.com/johnnyreilly/5466370.js?file=navigationAnimation.css"}),Object(o.b)("p",null,"And finally we have the JavaScript which is responsible for showing animation when the user starts navigating:"),Object(o.b)("script",{src:"https://gist.github.com/johnnyreilly/5466370.js?file=navigationAnimation.js"}),Object(o.b)("p",null,"It's helped along with a little jQuery here but this could easily be accomplished with vanilla JS if you fancied. The approach works by hooking into the ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/beforeunload"},"beforeunload"),' event that fires when "',Object(o.b)("em",{parentName:"p"},"the window, the document and its resources are about to be unloaded"),"\". There's a little bit more to the functionality in the JavaScript abover which I go into in the PPS below. Essentially that covers backwards compatibility with earlier versions of IE."),Object(o.b)("p",null,"I've coded this up in a manner that lends itself to re-use. I can imagine that you might also want to make use of the navigation animation if, for example, you had an expensive AJAX operation on a page and you didn't want the users to despair. So the navigation animation could become a kind of a generic \"I am doing something\" animation instead - I leave it to your disgression."),Object(o.b)("h2",{id:"oh-and-a-final-ps"},"Oh, and a final PS"),Object(o.b)("p",null,"I had initially planned to use an old school animated GIF instead of a CSS animation. The thing that stopped me taking this course of action is that, to quote an ",Object(o.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/780617/761388"},"answer on Stack Overflow"),' "',Object(o.b)("em",{parentName:"p"},"IE assumes that the clicking of a link heralds a new navigation where the current page contents will be replaced. As part of the process for perparing for that it halts the code that animates the GIFs."),'". So I needed animation that stayed animated. And lo, there were CSS animations...'),Object(o.b)("h2",{id:"better-make-that-a-pps---catering-for-ie-9-and-earlier"},"Better make that a PPS - catering for IE 9 and earlier"),Object(o.b)("p",null,"I spoke a touch too soon when I expounded on how CSS animations were going to get me out of a hole. Unfortunately, and to my lasting regret, they aren't supported in IE 9. And yes, at least for now that is what the users have. To get round this I've delved a little bit further and discovered a frankly hacky way to make animated gifs stay animated after beforeunload has fired. It works by rendering an animated gif to the screen when beforeunload is fired. Why this works I couldn't say - but if you're interested to research more then take a look at ",Object(o.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/1904931/761388"},"this answer on Stack Overflow"),". In my case I've found an animated gif on ",Object(o.b)("a",{parentName:"p",href:"http://www.ajaxload.info/"},"AjaxLoad")," which looks pretty similar to the CSS animation:"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-_9OgkLfflAg/UYEXn7dgByI/AAAAAAAAAb8/3Q33pAs6WeM/s320/navigationAnimation.gif",alt:"null"}),"This is now saved away as ",Object(o.b)("inlineCode",{parentName:"p"},"navigationAnimation.gif")," in the application. The JavaScript uses Modernizr to detect if CSS animations are in play. If they're not then the animated gif is rendered to the screen in place of the CSS animation HTML. Ugly, but it seems to work well; I think this will work on IE 6 - 9. The CSS animations will work on IE 10+."))}c.isMDXComponent=!0}}]);
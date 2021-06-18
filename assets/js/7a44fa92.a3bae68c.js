(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[40407],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var h=2;h<o;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42865:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return p},default:function(){return u}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r=["components"],s={title:"A navigation animation (for your users delectation)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["navigation animation","css load","UX","CSS animation","Modernizr"],hide_table_of_contents:!1},l=void 0,h={permalink:"/2013/04/26/a-navigation-animation-for-your-users",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-04-26-a-navigation-animation-for-your-users.md",source:"@site/blog/2013-04-26-a-navigation-animation-for-your-users.md",title:"A navigation animation (for your users delectation)",description:"The Vexation",date:"2013-04-26T00:00:00.000Z",formattedDate:"April 26, 2013",tags:[{label:"navigation animation",permalink:"/tags/navigation-animation"},{label:"css load",permalink:"/tags/css-load"},{label:"UX",permalink:"/tags/ux"},{label:"CSS animation",permalink:"/tags/css-animation"},{label:"Modernizr",permalink:"/tags/modernizr"}],readingTime:5.435,truncated:!1,prevItem:{title:"How I'm Using Cassette part 1:Getting Up and Running",permalink:"/2013/05/04/how-im-using-cassette"},nextItem:{title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",permalink:"/2013/04/17/ie-10-install-torches-javascript"}},p=[{value:"The Vexation",id:"the-vexation",children:[]},{value:"The Agreeable Resolution",id:"the-agreeable-resolution",children:[]},{value:"How&#39;s that work then guv?",id:"hows-that-work-then-guv",children:[]},{value:"Oh, and a final PS",id:"oh-and-a-final-ps",children:[]},{value:"Better make that a PPS - catering for IE 9 and earlier",id:"better-make-that-a-pps---catering-for-ie-9-and-earlier",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-vexation"},"The Vexation"),(0,o.kt)("p",null," The current application I'm working on lives within an ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe"),". A side effect of that is that my users no longer get the visual feedback that they're used to as they navigate around the site. By \"visual feedback\" what I mean are the little visual tics that are displayed in the browser when you're in the process of navigating from one screen to the next. Basically, these:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-x_8VXvW0w1M/UXpam8TtPQI/AAAAAAAAAbI/uVFFkL8uBAc/s320/TheSpinCycleOfProgress.png",alt:null})),(0,o.kt)("p",null,"When an application is nested in an ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," it seems that these visual tics aren't propogated up to the top frame of the browser as the user navigates around. Clicking on links results in a short lag whilst nothing appears to be happening and then, BANG!, a new page is rendered. This is not a great user experience. There's nothing to indicate that the link has been clicked on and the browser is doing something. Well, not in Internet Explorer at least - Chrome (my browser of choice) appears to do just that. But that's really by the by, the people using my app will be using the corporate browser, IE; so I need to think about them."),(0,o.kt)("p",null,"Now I'm fully aware that this is more in the region of nice-to-have rather than absolute necessity. That said, my experience is that when users think an application isn't responding fast enough their action point is usually \"click it again, and maybe once more for luck\". To prevent this from happening, I wanted to give the users back some kind of steer when they were in the process of navigation, ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," or no ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe"),"."),(0,o.kt)("h2",{id:"the-agreeable-resolution"},"The Agreeable Resolution"),(0,o.kt)("p",null,"To that end, I've come up with something that I feel does the job, and does it well. I've taken a CSS animation courtesy of the good folk at ",(0,o.kt)("a",{parentName:"p",href:"http://cssload.net/"},"CSS Load")," and embedded it in the layout of my application. This animation is hidden from view until the user navigates to another page. At that point, the CSS animation appears in the header of the screen and remains in place until the new screen is rendered. This is what it looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-RaGwl1llrDM/UX4pEiUfGWI/AAAAAAAAAbo/jSZC0skiLfQ/s320/NavigationAnimationAtWork.png",alt:null})),(0,o.kt)("h2",{id:"hows-that-work-then-guv"},"How's that work then guv?"),(0,o.kt)("p",null,"You're no doubt dazzled by the glory of it all. How was it accomplished? Well, it was actually a great deal easier than you might think. First of all we have the html:"),(0,o.kt)("script",{src:"https://gist.github.com/johnnyreilly/5466370.js?file=navigationAnimation.html"}),(0,o.kt)("p",null,"Apart from the outer ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," tag (#navigationAnimation) all of this is the HTML taken from ",(0,o.kt)("a",{parentName:"p",href:"http://cssload.net/"},"CSS Load"),". If you wanted to use a different navigation animation you could easily replace the inner HTML with something else instead. Next up is the CSS, again courtesy of CSS Load (and it's this that turns this simple HTML into sumptuous animated goodness):"),(0,o.kt)("script",{src:"https://gist.github.com/johnnyreilly/5466370.js?file=navigationAnimation.css"}),(0,o.kt)("p",null,"And finally we have the JavaScript which is responsible for showing animation when the user starts navigating:"),(0,o.kt)("script",{src:"https://gist.github.com/johnnyreilly/5466370.js?file=navigationAnimation.js"}),(0,o.kt)("p",null,"It's helped along with a little jQuery here but this could easily be accomplished with vanilla JS if you fancied. The approach works by hooking into the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/beforeunload"},"beforeunload"),' event that fires when "',(0,o.kt)("em",{parentName:"p"},"the window, the document and its resources are about to be unloaded"),"\". There's a little bit more to the functionality in the JavaScript abover which I go into in the PPS below. Essentially that covers backwards compatibility with earlier versions of IE."),(0,o.kt)("p",null,"I've coded this up in a manner that lends itself to re-use. I can imagine that you might also want to make use of the navigation animation if, for example, you had an expensive AJAX operation on a page and you didn't want the users to despair. So the navigation animation could become a kind of a generic \"I am doing something\" animation instead - I leave it to your disgression."),(0,o.kt)("h2",{id:"oh-and-a-final-ps"},"Oh, and a final PS"),(0,o.kt)("p",null,"I had initially planned to use an old school animated GIF instead of a CSS animation. The thing that stopped me taking this course of action is that, to quote an ",(0,o.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/780617/761388"},"answer on Stack Overflow"),' "',(0,o.kt)("em",{parentName:"p"},"IE assumes that the clicking of a link heralds a new navigation where the current page contents will be replaced. As part of the process for perparing for that it halts the code that animates the GIFs."),'". So I needed animation that stayed animated. And lo, there were CSS animations...'),(0,o.kt)("h2",{id:"better-make-that-a-pps---catering-for-ie-9-and-earlier"},"Better make that a PPS - catering for IE 9 and earlier"),(0,o.kt)("p",null,"I spoke a touch too soon when I expounded on how CSS animations were going to get me out of a hole. Unfortunately, and to my lasting regret, they aren't supported in IE 9. And yes, at least for now that is what the users have. To get round this I've delved a little bit further and discovered a frankly hacky way to make animated gifs stay animated after beforeunload has fired. It works by rendering an animated gif to the screen when beforeunload is fired. Why this works I couldn't say - but if you're interested to research more then take a look at ",(0,o.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/1904931/761388"},"this answer on Stack Overflow"),". In my case I've found an animated gif on ",(0,o.kt)("a",{parentName:"p",href:"http://www.ajaxload.info/"},"AjaxLoad")," which looks pretty similar to the CSS animation:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-_9OgkLfflAg/UYEXn7dgByI/AAAAAAAAAb8/3Q33pAs6WeM/s320/navigationAnimation.gif",alt:"null"}),"This is now saved away as ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationAnimation.gif")," in the application. The JavaScript uses Modernizr to detect if CSS animations are in play. If they're not then the animated gif is rendered to the screen in place of the CSS animation HTML. Ugly, but it seems to work well; I think this will work on IE 6 - 9. The CSS animations will work on IE 10+."))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(8),i=(n(0),n(1161)),l={title:"Template Tricks for a Dainty DOM",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["DOM","template","Materialized"],hide_table_of_contents:!1},r={permalink:"/2019/03/24/template-tricks-for-dainty-dom",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-03-24-template-tricks-for-dainty-dom.md",source:"@site/blog/2019-03-24-template-tricks-for-dainty-dom.md",description:"I'm somewhat into code golf. Placing restrictions on what you're \"allowed\" to do in code and seeing what the happens as a result. I'd like to share with you something that came out of some recent dabblings.",date:"2019-03-24T00:00:00.000Z",formattedDate:"March 24, 2019",tags:[{label:"DOM",permalink:"/tags/dom"},{label:"template",permalink:"/tags/template"},{label:"Materialized",permalink:"/tags/materialized"}],title:"Template Tricks for a Dainty DOM",readingTime:5.25,truncated:!1,prevItem:{title:"react-select with less typing lag",permalink:"/2019/04/27/react-select-with-less-typing-lag"},nextItem:{title:"Google Analytics API and ASP.Net Core",permalink:"/2019/03/22/google-analytics-api-and-aspnet-core"}},s=[{value:"&quot;Oh All Right; Just a Splash&quot;",id:"oh-all-right-just-a-splash",children:[]},{value:"The DOM Bunker",id:"the-dom-bunker",children:[]},{value:"Smuggling DOM in Templates",id:"smuggling-dom-in-templates",children:[]},{value:"&quot;That Sounds Complicated...&quot;",id:"that-sounds-complicated",children:[]},{value:"Do It Yourself",id:"do-it-yourself",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I'm somewhat into code golf. Placing restrictions on what you're \"allowed\" to do in code and seeing what the happens as a result. I'd like to share with you something that came out of some recent dabblings."),Object(i.b)("p",null,"Typically I spend a good amount of time playing with TypeScript. Either working on build tools or making web apps with it. (Usually with a portion of React on the side.) This is something different."),Object(i.b)("p",null,"I have a side project on the go which is essentially a mini analytics dashboard. For the purposes of this piece let's call it \"StatsDash\". When I was starting it I thought: let's try something different. Let's build StatsDash with HTML ",Object(i.b)("em",{parentName:"p"},"only"),". The actual HTML is hand cranked by me and generated in ASP.Net Core / C# using a combination of LINQ and string interpolation. (Who needs Razor? \ud83d\ude0e) I'll say it's pretty fun - but the back end is not what I want to focus on."),Object(i.b)("p",null,"I got something up and running pretty quickly in pure HTML. The first lesson I learned was this: HTML alone is hella ugly. So I relaxed my criteria; I allowed CSS to come play as long as I didn't have to write any / much myself. There followed some experimentation with different CSS frameworks. For a while I rolled with Bootstrap (old school!), then Bulma and finally I settled on ",Object(i.b)("a",{parentName:"p",href:"https://materializecss.com/"},"Materialized"),". Materialized is a heavily inspired by Google's Material Design and is hence quite beautiful. With my HTML and Materialize's CSS we were rolling. Beautiful stats - no JS."),Object(i.b)("h2",{id:"oh-all-right-just-a-splash"},'"Oh All Right; Just a Splash"'),Object(i.b)("p",null,"Lovely as things were, StatsDash quickly got to the point where there was too much information on the screen. It was time to make some changes. If data is to convey a message, it must first be comprehensible."),Object(i.b)("p",null,"I needed a way to hide and show data as people interacted with StatsDash. I wanted to achieve this ",Object(i.b)("em",{parentName:"p"},"without")," starting to render on the client side and also without going back to the server each time."),Object(i.b)("p",null,"If you want interactions in your UI all roads lead to JS. It's certainly possible to do some tricks with CSS but that's a round of code golf I'm ill equipped to play. So, I took a look at what Materialized had to offer. Usefully it has a ",Object(i.b)("a",{parentName:"p",href:"https://materializecss.com/modals.html"},"Modal")," component. With that in play I'd be able to separate the detailed information into different modals which the users could show and hide as required. Perfect!"),Object(i.b)("p",null,"It required a little JS. What's a line or two between friends? Dear reader, I compromised once more."),Object(i.b)("h2",{id:"the-dom-bunker"},"The DOM Bunker"),Object(i.b)("p",null,'With my handy modals, StatsDash was now a one stop shop for a great deal of information. Info which took the form of DOM nodes. Lots of them. And by "lots of them" I want you to think along the lines of "space is big, really big...".'),Object(i.b)("p",null,"This was impacting users. Clicking to open a modal resulted in a noticeable lag. It would take 2+ seconds for the browser to respond. Users found themselves clicking multiple times; wondering why nothing seemed to occur. In the end the modal would shuffle into view. However, this wasn't the best experience. The lack of responsiveness was getting in the way of users enjoying all StatsDash had to offer."),Object(i.b)("p",null,"Running an audit of StatsDash in Chrome DevTools there was no doubt we had a DOM problem:"),Object(i.b)("p",null," ",Object(i.b)("a",{parentName:"p",href:"https://1.bp.blogspot.com/-lrVKXxqAtmU/XJdHE509SCI/AAAAAAAAOhU/vxVhqlOMtFMbdm_HDpNkSW55B73Wxm86ACPcBGAYYCw/s1600/DOM-massive.png"},"![null]","(<https://1.bp.blogspot.com/-lrVKXxqAtmU/XJdHE509SCI/AAAAAAAAOhU/vxVhqlOMtFMbdm_HDpNkSW55B73Wxm86ACPcBGAYYCw/s640/DOM-massive.png> =640x298)"),"What to do? I still didn't want to go back to the server on each click in StatsDash. And I didn't want to start writing rendering code on the client as well either. I have in the past mixed client and server side rendering and I know well that it's a first class ticket to a confusing codebase."),Object(i.b)("h2",{id:"smuggling-dom-in-templates"},"Smuggling DOM in Templates"),Object(i.b)("p",null,"There's a mechanism that supports this use case directly: the ",Object(i.b)("inlineCode",{parentName:"p"},"&lt;template&gt;")," element. ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template"},"To quote MDN"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The HTML Content Template (",Object(i.b)("inlineCode",{parentName:"p"},"&lt;template&gt;"),") element is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Think of a template as a content fragment that is being stored for subsequent use in the document.")),Object(i.b)("p",null,"This is ",Object(i.b)("em",{parentName:"p"},"exactly")," what I'm after. I can keep my rendering server side, but instead wrap content that isn't immediately visible to users inside a ",Object(i.b)("inlineCode",{parentName:"p"},"&lt;template&gt;")," element and render that only when users need it."),Object(i.b)("p",null,"So in the case of my modals (where most of my DOM lives), I can tuck the contents of each modal into a ",Object(i.b)("inlineCode",{parentName:"p"},"&lt;template&gt;")," element. Then, when the user clicks to open a modal we move that template content into the DOM so they can see it. Likewise, as they close a modal we can clear out the modal's DOM content to ease the load on the dear old browser."),Object(i.b)("h2",{id:"that-sounds-complicated"},'"That Sounds Complicated..."'),Object(i.b)("p",null,"It's not. Let me show you how easily this is accomplished. First of all, wrap all your modal contents into ",Object(i.b)("inlineCode",{parentName:"p"},"&lt;template&gt;")," elements. They should look a little something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<div>\n    <button data-target="modalId" class="btn modal-trigger">Open the Modal!</button>\n\n    <template>\n        \x3c!--\n        loads of DOM nodes\n        --\x3e\n    </template>\n\n    <div id="modalId" class="modal modal-fixed-footer"></div>\n</div>\n')),Object(i.b)("p",null,"Next, where you initialise your modals you need to make a little tweak:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('DOMContentLoaded', function() {\n    M.Modal.init(document.querySelectorAll('.modal'), {\n        onOpenStart: modalDiv => {\n            const template = modalDiv.parentNode.querySelector('template');\n\n            modalDiv.appendChild(document.importNode(template.content, true));\n        },\n        onCloseEnd: modalDiv => {\n            while (modalDiv.firstChild) {\n                modalDiv.removeChild(modalDiv.firstChild);\n            }\n        }\n    });\n});\n")),Object(i.b)("p",null,"That's it! As you can see, before we open our modals, the ",Object(i.b)("inlineCode",{parentName:"p"},"onOpenStart")," callback will fire which creates the actual DOM elements based upon the ",Object(i.b)("inlineCode",{parentName:"p"},"template"),". And when the modals finish closing the ",Object(i.b)("inlineCode",{parentName:"p"},"onCloseEnd")," callback runs to remove those DOM elements once more."),Object(i.b)("p",null,"For this minimal change, the client gets a dramatically different user experience. StatsDash went from super laggy to satisfyingly fast. Using ",Object(i.b)("inlineCode",{parentName:"p"},"template"),"s, The number of initial DOM nodes dropped from more than ",Object(i.b)("em",{parentName:"p"},"20,000")," to ",Object(i.b)("em",{parentName:"p"},"200"),". That's right \ud83d\udcaf times smaller!"),Object(i.b)("h2",{id:"do-it-yourself"},"Do It Yourself"),Object(i.b)("p",null,"The code examples above rely upon the Materialize modals. However the principles used here are broadly applicable. It's easy for you to take the approach outlined here and apply it in a different situation."),Object(i.b)("p",null,"If you're interested in some of the other exciting things you can do with templates then I recommend ",Object(i.b)("a",{parentName:"p",href:"https://www.html5rocks.com/en/tutorials/webcomponents/template/"},"Eric Bidelman's post on the topic"),"."))}d.isMDXComponent=!0},1161:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,u=h["".concat(l,".").concat(p)]||h[p]||m[p]||i;return n?o.a.createElement(u,r(r({ref:t},c),{},{components:n})):o.a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
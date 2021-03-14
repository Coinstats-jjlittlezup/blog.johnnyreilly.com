(window.webpackJsonp=window.webpackJsonp||[]).push([[1051],{1161:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),c=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,b=h["".concat(i,".").concat(p)]||h[p]||u[p]||r;return n?a.a.createElement(b,s(s({ref:t},d),{},{components:n})):a.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(3),a=n(8),r=(n(0),n(1161)),i={title:"Coded UI and the Curse of the Docking Station",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Docking station","Surface Pro 3","Coded UI","Second monitor"],hide_table_of_contents:!1},s={permalink:"/2016/01/14/coded-ui-and-curse-of-docking-station",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-01-14-coded-ui-and-curse-of-docking-station.md",source:"@site/blog/2016-01-14-coded-ui-and-curse-of-docking-station.md",description:"I\u2019ve a love / hate relationship with Coded UI. Well hate / hate might be more accurate. Hate perhaps married with a very grudging respect still underpinned by a wary bitterness. Yes, that\u2019s about the size of it. Why? Well, when Coded UI works, it\u2019s fab. But it\u2019s flaky as anything. Anybody who\u2019s used the technology is presently nodding sagely and holding back the tears. It\u2019s all a bit... tough.",date:"2016-01-14T00:00:00.000Z",formattedDate:"January 14, 2016",tags:[{label:"Docking station",permalink:"/tags/docking-station"},{label:"Surface Pro 3",permalink:"/tags/surface-pro-3"},{label:"Coded UI",permalink:"/tags/coded-ui"},{label:"Second monitor",permalink:"/tags/second-monitor"}],title:"Coded UI and the Curse of the Docking Station",readingTime:2.42,truncated:!1,prevItem:{title:"TFS 2012, .NET 4.5 and C# 6",permalink:"/2016/02/01/tfs-2012-net-45-and-c-6"},nextItem:{title:"UseStaticFiles for ASP.Net vOld",permalink:"/2016/01/01/usestaticfiles-for-aspnet-vold"}},l=[],d={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I\u2019ve a love / hate relationship with Coded UI. Well hate / hate might be more accurate. Hate perhaps married with a very grudging respect still underpinned by a wary bitterness. Yes, that\u2019s about the size of it. Why? Well, when Coded UI works, it\u2019s fab. But it\u2019s flaky as anything. Anybody who\u2019s used the technology is presently nodding sagely and holding back the tears. It\u2019s all a bit... tough."),Object(r.b)("p",null," I\u2019ve recently discovered another quirk to add to the list. Docking stations. I was back working on a project which had a Coded UI test suite. I\u2019d heard tell that there were problems with the tests and was just taking a look at them. The first hurdle I fell at was getting the tests to run locally. The tests had first been developed on a standard desktop build and, as much as this can ever be said of Coded UI tests, they worked. However, the future had happened. The company in question was no longer using the old school desktop towers. Nope, they\u2019d reached for the sky and equipped the whole office with Surface Pro 3\u2019s, hot desks, docking stations and big, big monitors. It looked terribly flash."),Object(r.b)("p",null,"Coded UI was not happy."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Mouse.Click")," behaviour wasn\u2019t working. Most tests need the ability for users to click on buttons, dropdowns etc. That\u2019s part of a normal UI. And so it was with these tests. This is where they fell over. The reason they fell over at this point didn\u2019t become clear for a while. It wasn\u2019t until we tried tweaking our implementation of the tests that we realised what was happening. The tests normally found buttons / dropdowns etc on the screen and then attempted to perform a ",Object(r.b)("inlineCode",{parentName:"p"},"Mouse.Click")," upon them. We changed the implementation to be subtly different. Instead of just clicking on the element we amended the test to move the mouse to the button and then perform the click."),Object(r.b)("p",null,"Aha!"),Object(r.b)("p",null,"Rather than steadily moving towards an element and clicking, the pointer was swerving like a drunk man crossing the road at 3am. It completely missed the element it was aiming for and clicked upon a seemingly random area of the screen. This is Coded UI doing \u201cpin the tail on the donkey\u201d."),Object(r.b)("p",null,"After more time than I'd like to admit I happened upon the solution. I tended to dock my Surface and then tune my monitor resolution to the one most optimal for coding. (ie really high res.) This is what messes with Coded UI's head; the resolution change. If I wanted to be able to run tests successfully all I had to do was switch back to the resolution I initially booted with. Alternately I could restart my computer so it launched with the resolution I was presently using."),Object(r.b)("p",null,"Once you do follow this guidance Coded UI has a moment of clarity, gets sober and starts ",Object(r.b)("inlineCode",{parentName:"p"},"Mouse.Click"),"-","ing like a pro."))}c.isMDXComponent=!0}}]);
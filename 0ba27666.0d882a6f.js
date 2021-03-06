(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(958)),o={title:"Rendering Partial View to a String",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp.net mvc","Kevin Craft","PartialView","JsonResult"],hide_table_of_contents:!1},s={permalink:"/2012/07/16/rendering-partial-view-to-string",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-07-16-rendering-partial-view-to-string.md",source:"@site/blog/2012-07-16-rendering-partial-view-to-string.md",description:"Well done that man!",date:"2012-07-16T00:00:00.000Z",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"Kevin Craft",permalink:"/tags/kevin-craft"},{label:"PartialView",permalink:"/tags/partial-view"},{label:"JsonResult",permalink:"/tags/json-result"}],title:"Rendering Partial View to a String",readingTime:4.075,truncated:!1,prevItem:{title:"jQuery Unobtrusive Validation (+ associated gotchas)",permalink:"/2012/08/06/jquery-unobtrusive-validation"},nextItem:{title:"Optimally Serving Up JavaScript",permalink:"/2012/07/01/how-im-structuring-my-javascript-in-web"}},l=[{value:"Well done that man!",id:"well-done-that-man",children:[]}],h={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"well-done-that-man"},"Well done that man!"),Object(i.b)("p",null,"Every now and then I'm thinking to myself \"",Object(i.b)("em",{parentName:"p"},"wouldn't it be nice if you could do x..."),"\" And then I discover that someone else has thought the self same thoughts and better yet they have the answer! I had this situation recently and discovered the wonderful Kevin Craft had been there, done that and made the T-shirt. Here's his blog: ",Object(i.b)("a",{parentName:"p",href:"http://craftycodeblog.com/2010/05/15/asp-net-mvc-render-partial-view-to-string/"},"http://craftycodeblog.com/2010/05/15/asp-net-mvc-render-partial-view-to-string/")," I wanted to talk about how this simple post provided me with an elegant solution to something I've found niggling and unsatisfactory for a while now... ## How it helped"),Object(i.b)("p",null,"Just last week I was thinking about ",Object(i.b)("inlineCode",{parentName:"p"},"Partial Views"),". Some background. I'm working on an ASP.NET MVC 3 project which provides users with a nice web interface to manage the workflow surrounding certain types of financial asset. The user is presented with a web page which shows a kind of grid to the user. As the user hovers over a row they are presented with a context menu which allows them to perform certain workflow actions. If they perform an action then that row will need to be updated to reflect this. Back in the day this would have been achieved by doing a full postback to the server. At the server the action would be taken, the persistent storage updated and then the whole page would be served up to the user again with the relevant row of HTML updated but everything else staying as is. Now there's nothing wrong with this approach as such. I mean it works just fine. But in my case since I knew that it was only that single row of HTML that was going to be updated and so I was loath to re-render the whole page. It seemed a waste to get so much data back from the server when only a marginal amount was due to change. And also I didn't want the user to experience the screen refresh flash. Looks ugly. Now in the past when I've had a solution to this problem which from a UI perspective is good but from a development perspective slightly unsatisfactory. I would have my page call a controller method (via ",Object(i.b)("inlineCode",{parentName:"p"},"jQuery.ajax"),") to perform the action. This controller would return a ",Object(i.b)("inlineCode",{parentName:"p"},"JsonResult")," indicating success or failure and any data necessary to update the screen. Then in the ",Object(i.b)("inlineCode",{parentName:"p"},"success")," function I would manually update the HTML on the screen using the data provided. Now this solution works but there's a problem. ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Rolf_Harris"},"Can you tell what it is yet?")," It's not very DRY. I'm repeating myself. When the page is initially rendered I have a ",Object(i.b)("inlineCode",{parentName:"p"},"View")," which renders (in this example) all the relevant HTML for the screen ","*","including","*"," the HTML for my rows of data. And likewise I have my JavaScript method for updating the screen too. So with this solution I have duplicated my GUI logic. If I update 1, I need to update the other. It's not a massive hardship but it is, as I say, unsatisfactory. I was recently thinking that it would be nice if I could refactor my row HTML into a ",Object(i.b)("inlineCode",{parentName:"p"},"Partial View")," which I could then use in 2 places: 1. In my standard ",Object(i.b)("inlineCode",{parentName:"p"},"View")," as I iterated through each element for display and\n2. Nested inside a ",Object(i.b)("inlineCode",{parentName:"p"},"JsonResult"),"..."),Object(i.b)("p",null,"The wonderful thing about approach 2 is that it allows me to massively simplify my ",Object(i.b)("inlineCode",{parentName:"p"},"success"),' to this: ```js\n$("myRowSelector")\n.empty()\n.html(data.RowHTML); //Where RowHTML is the property that\n//contains my stringified PartialView'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\n and if I later make changes to the `Partial View` these changes will not require me to make any changes to my JavaScript at all. Brilliant! And entirely satisfactory. On the grounds that someone else might have had the same idea I did a little googling around. Sure enough I discovered [Kevin Craft's post](<http://craftycodeblog.com/2010/05/15/asp-net-mvc-render-partial-view-to-string/>) which was just the ticket. It does exactly what I'd hoped. Besides being a nice and DRY solution this approach has a number of other advantages as well: - Given it's a `Partial View` the Visual Studio IDE provides a nice experience when coding it up with regards to intellisense / highlighting etc. Not something available when you're hand coding up a string which contains the HTML you'd like passed back...\n- A wonderful debug experience. You can debug the rendering of a `Partial View` being rendered to a string in the same way as if the ASP.NET MVC framework was serving it up. I could have lived without this but it's fantastic to have it available.\n- It's possible to nest \\***multiple**\\* `Partial Views` within your `JsonResult`. THIS IS WONDERFUL!!! This means that if several parts of your screen need to be updated (perhaps the row and a status panel as well) then as long as both are refactored into a `Partial View` you can generate them on the fly and pass them back.\n\n\x3c!-- --\x3e\n\nExcellent stuff!\n\n")))}c.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=r.a.createContext({}),c=function(e){var t=r.a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||i;return n?r.a.createElement(m,s(s({ref:t},h),{},{components:n})):r.a.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var h=2;h<i;h++)o[h]=n[h];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
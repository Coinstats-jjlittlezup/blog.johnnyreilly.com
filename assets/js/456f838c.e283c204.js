"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[61924],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97493:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Rendering Partial View to a String",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net mvc","Kevin Craft","PartialView","JsonResult"],hide_table_of_contents:!1},l=void 0,h={permalink:"/2012/07/16/rendering-partial-view-to-string",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-07-16-rendering-partial-view-to-string.md",source:"@site/blog/2012-07-16-rendering-partial-view-to-string.md",title:"Rendering Partial View to a String",description:"Well done that man!",date:"2012-07-16T00:00:00.000Z",formattedDate:"July 16, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"Kevin Craft",permalink:"/tags/kevin-craft"},{label:"PartialView",permalink:"/tags/partial-view"},{label:"JsonResult",permalink:"/tags/json-result"}],readingTime:4.055,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"jQuery Unobtrusive Validation (+ associated gotchas)",permalink:"/2012/08/06/jquery-unobtrusive-validation"},nextItem:{title:"Optimally Serving Up JavaScript",permalink:"/2012/07/01/how-im-structuring-my-javascript-in-web"}},c={authorsImageUrls:[void 0]},u=[{value:"Well done that man!",id:"well-done-that-man",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"well-done-that-man"},"Well done that man!"),(0,i.kt)("p",null,"Every now and then I'm thinking to myself \"",(0,i.kt)("em",{parentName:"p"},"wouldn't it be nice if you could do x..."),"\" And then I discover that someone else has thought the self same thoughts and better yet they have the answer! I had this situation recently and discovered the wonderful Kevin Craft had been there, done that and made the T-shirt. Here's his blog: ",(0,i.kt)("a",{parentName:"p",href:"http://craftycodeblog.com/2010/05/15/asp-net-mvc-render-partial-view-to-string/"},"http://craftycodeblog.com/2010/05/15/asp-net-mvc-render-partial-view-to-string/")," I wanted to talk about how this simple post provided me with an elegant solution to something I've found niggling and unsatisfactory for a while now... ## How it helped"),(0,i.kt)("p",null,"Just last week I was thinking about ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial Views"),". Some background. I'm working on an ASP.NET MVC 3 project which provides users with a nice web interface to manage the workflow surrounding certain types of financial asset. The user is presented with a web page which shows a kind of grid to the user. As the user hovers over a row they are presented with a context menu which allows them to perform certain workflow actions. If they perform an action then that row will need to be updated to reflect this. Back in the day this would have been achieved by doing a full postback to the server. At the server the action would be taken, the persistent storage updated and then the whole page would be served up to the user again with the relevant row of HTML updated but everything else staying as is. Now there's nothing wrong with this approach as such. I mean it works just fine. But in my case since I knew that it was only that single row of HTML that was going to be updated and so I was loath to re-render the whole page. It seemed a waste to get so much data back from the server when only a marginal amount was due to change. And also I didn't want the user to experience the screen refresh flash. Looks ugly. Now in the past when I've had a solution to this problem which from a UI perspective is good but from a development perspective slightly unsatisfactory. I would have my page call a controller method (via ",(0,i.kt)("inlineCode",{parentName:"p"},"jQuery.ajax"),") to perform the action. This controller would return a ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonResult")," indicating success or failure and any data necessary to update the screen. Then in the ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," function I would manually update the HTML on the screen using the data provided. Now this solution works but there's a problem. ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Rolf_Harris"},"Can you tell what it is yet?")," It's not very DRY. I'm repeating myself. When the page is initially rendered I have a ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," which renders (in this example) all the relevant HTML for the screen ","*","including","*"," the HTML for my rows of data. And likewise I have my JavaScript method for updating the screen too. So with this solution I have duplicated my GUI logic. If I update 1, I need to update the other. It's not a massive hardship but it is, as I say, unsatisfactory. I was recently thinking that it would be nice if I could refactor my row HTML into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial View")," which I could then use in 2 places: 1. In my standard ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," as I iterated through each element for display and\n2. Nested inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonResult"),"..."),(0,i.kt)("p",null,"The wonderful thing about approach 2 is that it allows me to massively simplify my ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),' to this: ```js\n$("myRowSelector")\n.empty()\n.html(data.RowHTML); //Where RowHTML is the property that\n//contains my stringified PartialView'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n and if I later make changes to the `Partial View` these changes will not require me to make any changes to my JavaScript at all. Brilliant! And entirely satisfactory. On the grounds that someone else might have had the same idea I did a little googling around. Sure enough I discovered [Kevin Craft's post](http://craftycodeblog.com/2010/05/15/asp-net-mvc-render-partial-view-to-string/) which was just the ticket. It does exactly what I'd hoped. Besides being a nice and DRY solution this approach has a number of other advantages as well: - Given it's a `Partial View` the Visual Studio IDE provides a nice experience when coding it up with regards to intellisense / highlighting etc. Not something available when you're hand coding up a string which contains the HTML you'd like passed back...\n- A wonderful debug experience. You can debug the rendering of a `Partial View` being rendered to a string in the same way as if the ASP.NET MVC framework was serving it up. I could have lived without this but it's fantastic to have it available.\n- It's possible to nest \\***multiple**\\* `Partial Views` within your `JsonResult`. THIS IS WONDERFUL!!! This means that if several parts of your screen need to be updated (perhaps the row and a status panel as well) then as long as both are refactored into a `Partial View` you can generate them on the fly and pass them back.\n\n\n\nExcellent stuff!\n")))}p.isMDXComponent=!0}}]);
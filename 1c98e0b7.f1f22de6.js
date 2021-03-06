(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(958)),r={title:"How I'm Using Cassette part 1:Getting Up and Running",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp.net mvc","Andrew Davey","cassette"],hide_table_of_contents:!1},s={permalink:"/blog.johnnyreilly.com/2013/05/04/how-im-using-cassette",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-05-04-how-im-using-cassette.md",source:"@site/blog/2013-05-04-how-im-using-cassette.md",description:"Backing into the light",date:"2013-05-04T00:00:00.000Z",tags:[{label:"asp.net mvc",permalink:"/blog.johnnyreilly.com/tags/asp-net-mvc"},{label:"Andrew Davey",permalink:"/blog.johnnyreilly.com/tags/andrew-davey"},{label:"cassette",permalink:"/blog.johnnyreilly.com/tags/cassette"}],title:"How I'm Using Cassette part 1:Getting Up and Running",readingTime:5.465,truncated:!1,prevItem:{title:"How I'm Using Cassette part 2:Get Cassette to Serve Scripts in Dependency Order",permalink:"/blog.johnnyreilly.com/2013/06/06/how-im-using-cassette-part-2"},nextItem:{title:"A navigation animation (for your users delectation)",permalink:"/blog.johnnyreilly.com/2013/04/26/a-navigation-animation-for-your-users"}},l=[{value:"Backing into the light",id:"backing-into-the-light",children:[]},{value:"Adding Cassette to a raw MVC 4 project",id:"adding-cassette-to-a-raw-mvc-4-project",children:[]},{value:"Making use of our Bundles",id:"making-use-of-our-bundles",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"backing-into-the-light"},"Backing into the light"),Object(i.b)("p",null," For a while now, I've been seeking a bulletproof way to handle the following scenarios... all at the same time in the context of an ASP.Net MVC application:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"How to serve full-fat JavaScript in debug mode and minified in release mode"),Object(i.b)("li",{parentName:"ol"},"When debugging, ensure that the full-fat JS being served is definitely the latest version; and ","*",Object(i.b)("strong",{parentName:"li"},"not"),"*"," from the cache. (The time I've wasted due to ",Object(i.b)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#304"},"304's"),"...)"),Object(i.b)("li",{parentName:"ol"},"How to add Javascript assets that need to be served up from any point in an ASP.Net MVC application (including views, layouts, partial views... even controllers if so desired) whilst preventing duplicate scripts from being served."),Object(i.b)("li",{parentName:"ol"},"How to ensure that Javascript files are served up last to any web page to ensure a speedy feel to users (don't want JS blocking rendering)."),Object(i.b)("li",{parentName:"ol"},"And last but certainly not least the need to load Javascript files in dependency order. If ",Object(i.b)("inlineCode",{parentName:"li"},"myView.js")," depends on jQuery then clearly ",Object(i.b)("inlineCode",{parentName:"li"},"jQuery-latest.js")," needs to be served before ",Object(i.b)("inlineCode",{parentName:"li"},"myView.js"),".")),Object(i.b)("p",null,"Now the best, most comprehensive and solid looking solution to this problem has for some time seemed to me to be ",Object(i.b)("a",{parentName:"p",href:"http://aboutcode.net/"},"Andrew Davey's"),Object(i.b)("a",{parentName:"p",href:"http://getcassette.net/"},"Cassette"),". This addresses all my issues in one way or another, as well as bringing in a raft of other features (support for Coffeescript etc)."),Object(i.b)("p",null,"However, up until now I've slightly shied away from using Cassette as I was under the impression it had a large number of dependencies. That doesn't appear to be the case at all. I also had some vague notion that I could quite simply build my own solution to these problems making use of Microsoft's ",Object(i.b)("a",{parentName:"p",href:"http://nuget.org/packages/Microsoft.AspNet.Web.Optimization/1.0.0"},"Web Optimization")," which nicely handles my #1 problem above. However, looking again at the documentation Cassette was promising to handle scenarios #1 - #5 without breaking sweat. How could I ignore that? I figured I should do the sensible thing and take another look at it. And, lo and behold, when I started evaluating it again it seemed to be just what I needed."),Object(i.b)("p",null,"With the minumum of fuss I was able to get an ASP.Net MVC 4 solution up and running, integrated with Cassette, which dealt with all my scenarios very nicely indeed. I thought it might be good to write this up over a short series of posts and share what my finished code looks like. If you follow the steps I go through below it'll get you started using Cassette. Or you could skip to the end of this post and look at the repo on GitHub. Here we go..."),Object(i.b)("h2",{id:"adding-cassette-to-a-raw-mvc-4-project"},"Adding Cassette to a raw MVC 4 project"),Object(i.b)("p",null,"Fire up Visual Studio and create a new MVC 4 project (I used the internet template to have some content in place)."),Object(i.b)("p",null,'Go to the Package Manager Console and key in "',Object(i.b)("inlineCode",{parentName:"p"},"Install-Package Cassette.Aspnet"),'". Cassette will install itself.'),Object(i.b)("p",null,"Now you've got Cassette in place you may as well pull out usage of Web Optimization as you're not going to need it any more.Be ruthless, delete App","_","Start/BundleConfig.cs and delete the line of code that references it in Global.asax.cs. If you take the time to run the app now you'll see you've miraculously lost your CSS and your JavaScript. The code referencing it is still in place but there's nothing for it to serve up. Don't worry about that - we're going to come back and Cassette-ify things later on..."),Object(i.b)("p",null,"You'll also notice you now have a CassetteConfiguration.cs file in your project. Open it. Replace the contents with this (I've just commented out the default code and implemented my own CSS and Script bundles based on what is available in the default template of an MVC 4 app):"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=CassetteConfiguration.cs"}),Object(i.b)("p",null,"In the script above I've created 4 bundles, 1 stylesheet bundle and 3 JavaScript bundles - each of these is roughly equivalent to Web Optimization bundles that are part of the MVC 4 template:"),Object(i.b)("dl",null,Object(i.b)("dt",null,"~/bundles/css"),Object(i.b)("dd",null,"Our site CSS - this includes both our own CSS and the jQuery UI CSS as well. This is the rough equivalent of the Web Optimization bundles ",Object(i.b)("em",null,"~/Content/css")," and ",Object(i.b)("em",null,"~/Content/themes/base/css")," brought together."),Object(i.b)("dt",null,"~/bundles/head"),Object(i.b)("dd",null,"What scripts we want served in the head tag - Modernizr basically. Do note the setting of the ",Object(i.b)("em",null,"PageLocation")," property - the purpose of this will become apparent later. This is the direct equivalent of the Web Optimization bundle: ",Object(i.b)("em",null,"~/bundles/modernizr"),"."),Object(i.b)("dt",null,"~/bundles/core"),Object(i.b)("dd",null,"The scripts we want served on every page. For this example project I've picked jQuery and jQuery UI. This is the rough equivalent of the Web Optimization bundles ",Object(i.b)("em",null,"~/bundles/jquery")," and ",Object(i.b)("em",null,"~/bundles/jqueryui")," brought together."),Object(i.b)("dt",null,"~/bundles/validate"),Object(i.b)("dd",null,"The validation scripts (that are dependent on the core scripts). This is the rough equivalent of the Web Optimization bundle: ",Object(i.b)("em",null,"~/bundles/jqueryval"),".")),Object(i.b)("p",null,"At this point we've set up Cassette in our project - although we're not making use of it yet. If you want to double check that everything is working properly then you can fire up your project and browse to \"Cassette.axd\" in the root. You should see something a bit like this:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://1.bp.blogspot.com/-xM9iU6HjB7o/UWzjAN5EieI/AAAAAAAAAaA/EAXTTnD6vdY/s1600/CassetteScripts.png"},Object(i.b)("img",{parentName:"a",src:"http://1.bp.blogspot.com/-xM9iU6HjB7o/UWzjAN5EieI/AAAAAAAAAaA/EAXTTnD6vdY/s320/CassetteScripts.png",alt:"null"})),"## How Web Optimization and Cassette Differ"),Object(i.b)("p",null,"If you're more familiar with the workings of Web Optimization than Cassette then it's probably worth taking a moment to appreciate an important distinction between the slightly different ways each works."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Web Optimization")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create bundles as desired."),Object(i.b)("li",{parentName:"ol"},"Serve up bundles and / or straight JavaScript files as you like within your MVC views / partial views / layouts. ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cassette")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create bundles for ","*",Object(i.b)("strong",{parentName:"li"},"all"),"*",' JavaScript files you wish to serve up. You may wish to create some bundles which consist of a number of a number of JavaScript files pushed together. But for each individual file you wish to serve you also need to create an individual bundle. (Failure to do so may mean you fall prey to the "',Object(i.b)("em",{parentName:"li"},'Cannot find an asset bundle containing the path "',"~",'/Scripts/somePath.js".'),'")'),Object(i.b)("li",{parentName:"ol"},"Reference bundles and / or individual JavaScript files in their individual bundles as you like within your MVC views / partial views / layouts / controllers / HTML helpers... the list goes on!"),Object(i.b)("li",{parentName:"ol"},"Render the referenced scripts to the page (typically just before the closing ",Object(i.b)("inlineCode",{parentName:"li"},"body")," tag)")),Object(i.b)("h2",{id:"making-use-of-our-bundles"},"Making use of our Bundles"),Object(i.b)("p",null,"Now we've created our bundles let's get the project serving up CSS and JavaScript using Cassette. First the layout file. Take the ",Object(i.b)("inlineCode",{parentName:"p"},"_Layout.cshtml")," file from this:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=_LayoutBefore.cshtml"}),Object(i.b)("p",null,"To this:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=_LayoutAfter.cshtml"}),Object(i.b)("p",null,"And now let's take one of the views, ",Object(i.b)("inlineCode",{parentName:"p"},"Login.cshtml")," and take it from this:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=LoginBefore.cshtml"}),Object(i.b)("p",null,"To this:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=LoginAfter.cshtml"}),Object(i.b)("p",null,"So now you should be up and running with Cassette. If you want the code behind this then take I've put it on GitHub ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/CassetteDemo"},"here"),"."))}u.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),h=a,d=b["".concat(r,".").concat(h)]||b[h]||p[h]||i;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
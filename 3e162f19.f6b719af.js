(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(3),o=n(7),i=(n(0),n(958)),r={title:"Task.WhenAll / Select is a footgun \ud83d\udc5f\ud83d\udd2b",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},s={permalink:"/blog.johnnyreilly.com/2020/06/21/taskwhenall-select-is-footgun",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-06-21-taskwhenall-select-is-footgun.md",source:"@site/blog/2020-06-21-taskwhenall-select-is-footgun.md",description:'This post differs from my typical fayre. Most often I write "here\'s how to do a thing". This is not that. It\'s more "don\'t do this thing I did". And maybe also, "how can we avoid a situation like this happening again in future?". On this topic I very much don\'t have all the answers - but by putting my thoughts down maybe I\'ll learn and maybe others will educate me. I would love that!',date:"2020-06-21T00:00:00.000Z",tags:[],title:"Task.WhenAll / Select is a footgun \ud83d\udc5f\ud83d\udd2b",readingTime:5.97,truncated:!1,prevItem:{title:"Devcontainers and SSL interception",permalink:"/blog.johnnyreilly.com/2020/07/11/devcontainers-and-ssl-interception"},nextItem:{title:"Autofac, WebApplicationFactory and integration tests",permalink:"/blog.johnnyreilly.com/2020/05/21/autofac-webapplicationfactory-and"}},l=[{value:"Doing things that don&#39;t scale",id:"doing-things-that-dont-scale",children:[]},{value:"So cool, so terrible",id:"so-cool-so-terrible",children:[]},{value:"What is the problem?",id:"what-is-the-problem",children:[]},{value:"What will we change in future?",id:"what-will-we-change-in-future",children:[]},{value:"What did we do right now?",id:"what-did-we-do-right-now",children:[]}],c={toc:l};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'This post differs from my typical fayre. Most often I write "here\'s how to do a thing". This is not that. It\'s more "don\'t do this thing I did". And maybe also, "how can we avoid a situation like this happening again in future?". On this topic I very much don\'t have all the answers - but by putting my thoughts down maybe I\'ll learn and maybe others will educate me. I would love that!'),Object(i.b)("h2",{id:"doing-things-that-dont-scale"},"Doing things that don't scale"),Object(i.b)("p",null,"The platform that I work on once had zero users. We used to beg people to log in and see what we had built. Those days are (happily) but a memory. We're getting popular."),Object(i.b)("p",null,"As our platform has grown in popularity it has revealed some bad choices we made. Approaches that look fine on the surface (and that work just dandy when you have no users) may start to cause problems as your number of users grows."),Object(i.b)("p",null,'I wanted to draw attention to one approach in particular that impacted us severely. In this case "impacted us severely" is a euphemism for "brought the site down and caused a critical incident".'),Object(i.b)("p",null,"You don't want this to happen to you. Trust me. So, what follows is a cautionary tale. The purpose of which is simply this: reader, do you have code of this ilk in your codebase? If you do: out, damn'd spot! out, I say!"),Object(i.b)("h2",{id:"so-cool-so-terrible"},"So cool, so terrible"),Object(i.b)("p",null,"I love LINQ. I love a declarative / functional style of coding. It appeals to me on some gut level. I find it tremendously readable. Read any C# of mine and the odds are pretty good that you'll find some LINQ in the mix."),Object(i.b)("p",null,"Imagine this scenario: you have a collection of user ids. You want to load the details of each user represented by their id from an API. You want to bag up all of those users into some kind of collection and send it back to the calling code."),Object(i.b)("p",null,"Reading that, if you're like me, you're imagining some kind of map operation which loads the user details for each user id. Something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"var users = userIds.Select(userId => GetUserDetails(userId)).ToArray(); // users is User[]\n")),Object(i.b)("p",null,"Lovely. But you'll note that I'm loading users from an API. Oftentimes, APIs are asynchronous. Certainly, in my case they were. So rather than calling a ",Object(i.b)("inlineCode",{parentName:"p"},"GetUserDetails")," function I found myself calling a ",Object(i.b)("inlineCode",{parentName:"p"},"GetUserDetailsAsync")," function, behind which an HTTP request is being sent and, later, a response is being returned."),Object(i.b)("p",null,"So how do we deal with this? ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.whenall?view=netcore-3.1#System_Threading_Tasks_Task_WhenAll__1_System_Collections_Generic_IEnumerable_System_Threading_Tasks_Task___0___"},Object(i.b)("inlineCode",{parentName:"a"},"Task.WhenAll"))," my friends!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"var userTasks = userIds.Select(userId => GetUserDetailsAsync(userId));\nvar users = await Task.WhenAll(tasks); // users is User[]\n")),Object(i.b)("p",null,"It worked great! Right up until to the point where it didn't. These sorts of shenanigans were fine when we had a minimal number of users... But there came a point where problems arose. It got to the point where that simple looking mapping operation became a cause of many, many, ",Object(i.b)("em",{parentName:"p"},"many")," HTTP requests being fired concurrently. Then bad things started to happen. Not only did we realise we were launching a denial of service attack on the API we were consuming, we were bringing our own application to collapse."),Object(i.b)("p",null,"Not a proud day."),Object(i.b)("h2",{id:"what-is-the-problem"},"What is the problem?"),Object(i.b)("p",null,"Through log analysis, code reading and speculation, (with the help of the invaluable ",Object(i.b)("a",{parentName:"p",href:"https://www.linkedin.com/in/robert-grzankowski-53618114"},"Robski"),") we came to realise that the cause of our woes was the ",Object(i.b)("inlineCode",{parentName:"p"},"Task.WhenAll")," / ",Object(i.b)("inlineCode",{parentName:"p"},"Select")," combination. Exercising that codepath was a surefire way to bring the application to its knees."),Object(i.b)("p",null,"As I read around on the topic I happened upon ",Object(i.b)("a",{parentName:"p",href:"https://www.twitter.com/mark_heath"},"Mark Heath"),"'s excellent list of ",Object(i.b)("a",{parentName:"p",href:"https://markheath.net/post/async-antipatterns"},"Async antipatterns"),'. Number #6 on the list is "Excessive parallelization". It describes a nearly identical scenario to my own:'),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Now, this does "work", but what if there were 10,000 orders? We\'ve flooded the thread pool with thousands of tasks, potentially preventing other useful work from completing. If ',Object(i.b)("inlineCode",{parentName:"p"},"ProcessOrderAsync")," makes downstream calls to another service like a database or a microservice, we'll potentially overload that with too high a volume of calls.")),Object(i.b)("p",null,"We're definitely overloading the API we're consuming with too high a volume of calls. I have to admit that I'm less clear on the direct reason that a ",Object(i.b)("inlineCode",{parentName:"p"},"Task.WhenAll")," / ",Object(i.b)("inlineCode",{parentName:"p"},"Select")," combination could prove fatal to our application. Mark suggests this approach will flood the thread pool with tasks. As I read around on ",Object(i.b)("inlineCode",{parentName:"p"},"async")," and ",Object(i.b)("inlineCode",{parentName:"p"},"await")," it's repeated again and again that a ",Object(i.b)("inlineCode",{parentName:"p"},"Task")," is not the same thing as a ",Object(i.b)("inlineCode",{parentName:"p"},"Thread"),". I have to hold my hands up here and say that I don't understand the implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"async")," / ",Object(i.b)("inlineCode",{parentName:"p"},"await")," in C# well enough. ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth#deeper-dive-into-tasks-for-an-io-bound-operation"},"These docs are helpful but I still don't think the penny has fully dropped for me yet.")," I will continue to read."),Object(i.b)("p",null,"One thing we learned as we debugged the production k8s pod was that, prior to its collapse, our app appeared to be opening up 1 million connections to the API we were consuming. Which seemed a bit much. Worthy of investigation. It's worth saying that we're not certain this is exactly what is happening; we have less instrumentation in place than we'd like. But some fancy wc grepping on Robski's behalf suggested this was the case."),Object(i.b)("h2",{id:"what-will-we-change-in-future"},"What will we change in future?"),Object(i.b)("p",null,"A learning that came out of this for us was this: we need more metrics exposed. We don't understand our application's behaviour under load as well as we'd like. So we're planning to do some work with ",Object(i.b)("a",{parentName:"p",href:"https://www.app-metrics.io/"},"App Metrics")," and ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," so we've a better idea of how our application performs. If you want to improve something, first measure it."),Object(i.b)("p",null,"Another fly in the ointment was that we were unable to reproduce the issue when running locally. It's worth saying here that I develop on a Windows machine and, when deployed, our application runs in a (Linux) Docker container. So there's a difference and a distance between our development experience and our running one."),Object(i.b)("p",null,"I'm planning to migrate to developing in a ",Object(i.b)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers"},"devcontainer")," where that's possible. That should narrow the gap between our production experience and our development one. Reducing the difference between the two is always useful as it means you're less likely to get different behaviour (ie \"problems\") in production as compared to development. I'm curious as to whether I'll be able to replicate that behaviour in a devcontainer."),Object(i.b)("h2",{id:"what-did-we-do-right-now"},"What did we do right now?"),Object(i.b)("p",null,"To solve the immediate issue we were able to pivot away to a completely different approach. We moved aggregation from our ASP.NET Core web application to our TypeScript / React client with a (pretty sweet) custom hook. The topic for a subsequent blog post."),Object(i.b)("p",null,"Moving to a different approach solved my immediate issue. But it left me puzzling. What was actually going wrong? Is it thread pool exhaustion? Is it something else? So many possibilities!"),Object(i.b)("p",null,"If anyone has any insights they'd like to share that would be incredible! I've also ",Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/62490098/task-whenall-with-select-is-a-footgun-but-why/62490705"},"asked a question on Stack Overflow")," which has kindly had answers from generous souls. ",Object(i.b)("a",{parentName:"p",href:"https://twitter.com/jamesskimming"},"James Skimming"),"'s answer lead me to ",Object(i.b)("a",{parentName:"p",href:"https://www.stevejgordon.co.uk/httpclient-connection-pooling-in-dotnet-core"},"Steve Gordon's excellent post on connection pooling")," which I'm still absorbing and seems like it could be relevant."))}h.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(n),u=a,b=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
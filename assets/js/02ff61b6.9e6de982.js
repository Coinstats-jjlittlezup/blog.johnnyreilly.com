(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var r=n(4),o=n(10),a=(n(0),n(1211)),i={title:"Why your team needs a newsfeed",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["newsfeed"],hide_table_of_contents:!1},s={permalink:"/2020/09/04/why-your-team-needs-newsfeed",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-09-04-why-your-team-needs-newsfeed.md",source:"@site/blog/2020-09-04-why-your-team-needs-newsfeed.md",title:"Why your team needs a newsfeed",description:"I'm part of a team that builds an online platform. I'm often preoccupied by how to narrow the gap between our users and \"us\" - the people that build the platform. It's important we understand how people use and interact with what we've built. If we don't then we're liable to waste our time and energy building the wrong things. Or the wrong amount of the right things.",date:"2020-09-04T00:00:00.000Z",formattedDate:"September 4, 2020",tags:[{label:"newsfeed",permalink:"/tags/newsfeed"}],readingTime:5.01,truncated:!1,prevItem:{title:"Autofac 6, integration tests and .NET generic hosting",permalink:"/2020/10/02/autofac-6-integration-tests-and-generic-hosting"},nextItem:{title:"Devcontainers AKA performance in a secure sandbox",permalink:"/2020/08/09/devcontainers-aka-performance-in-secure"}},l=[{value:"How do you build a newsfeed?",id:"how-do-you-build-a-newsfeed",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],c={toc:l};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I'm part of a team that builds an online platform. I'm often preoccupied by how to narrow the gap between our users and \"us\" - the people that build the platform. It's important we understand how people use and interact with what we've built. If we don't then we're liable to waste our time and energy building the wrong things. Or the wrong amount of the right things."),Object(a.b)("p",null,"On a recent holiday I spent a certain amount of time pondering how to narrow the gap between our user and us. We have lots of things that help us; we use various analytics tools like ",Object(a.b)("a",{parentName:"p",href:"https://mixpanel.com/"},"mixpanel"),", we've got a mini analytics platform of our own, we have teams notifications that pop up client feedback and so on. They are all great, but they're somewhat disparate; they don't give us a clear insight as to who uses our platform and how they do so. The information is there, but it's tough to grok. It doesn't make for a joined up story."),Object(a.b)("p",null,"Reaching around for how to solve this I had an idea: what if our platform had a newsfeed? The kind of thing that social media platforms the likes of Twitter and Facebook have used to great effect; a stream of mini-activities which show how the community interacts with the product. People logging in and browsing around, using features on the platform. If we could see this in near real time we'd be brought closer to our users; we'd have something that would help us have real empathy and understanding. We'd see our product as the stories of users interacting with it."),Object(a.b)("h2",{id:"how-do-you-build-a-newsfeed"},"How do you build a newsfeed?"),Object(a.b)("p",null,'This was an experiment that seemed worth pursuing. So I decided to build a proof of concept and see what happened. Now I intended to put the "M" into MVP with this; I went in with a number of intentional constraints:'),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The news feed wouldn't auto update (users have the F5 key for that)"),Object(a.b)("li",{parentName:"ol"},"We'd host the newsfeed in our own mini analytics platform (which is already used by the team to understand how people use the platform)"),Object(a.b)("li",{parentName:"ol"},'News stories wouldn\'t be stored anywhere; we\'d generate them on the fly by querying various databases / APIs. The cost of this would be that our news stories wouldn\'t be "persistent"; you wouldn\'t be able to address them with a URL; there\'d be no way to build "like" or "share" functionality.')),Object(a.b)("p",null,"All of the above constraints are, importantly, reversable decisions. If we want auto update it could be built later. If we want the newsfeed to live somewhere else we could move it. If we wanted news stories to be persisted then we could do that."),Object(a.b)("h2",{id:"implementation"},"Implementation"),Object(a.b)("p",null,"With these constraints in mind, I turned my attention to the implementation. I built a ",Object(a.b)("inlineCode",{parentName:"p"},"NewsFeedService")," that would be queried for news stories. The interface I decided to build looked like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"NewsFeedService.getNewsFeed(from: Date, to: Date): NewsFeed\n\ntype NewsFeed {\n    startedAt: Date;\n    ended at: Date;\n    stories: NewsStory[];\n}\n\ntype NewsStory {\n    /** When the story happened */\n    happenedAt: Date;\n    /** A code that represents the type of story this is; eg USER_SESSION */\n    storyCode: string\n    /** The story details in markdown format */\n    story: string;\n}\n")),Object(a.b)("p",null,"Each query to ",Object(a.b)("inlineCode",{parentName:"p"},"NewsFeedService.getNewsFeed")," would query various databases / APIs related to our product, looking for interesting events. Whether it be users logging in, users performing some kind of action, whatever. For each interested event a news story like this would be produced:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Jane Smith logged in at 10:03am for 25 minutes. They placed ",Object(a.b)("a",{parentName:"p",href:"https://my-glorious-platform.io/orders/janes-order"},"an order")," worth \xa33,000.")),Object(a.b)("p",null,"Now the killer feature here is ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Markdown#:~:text=Markdown%20is%20a%20lightweight%20markup,using%20a%20plain%20text%20editor."},"Markdown"),". Our stories are written in Markdown. Why is Markdown cool? Well ",Object(a.b)("a",{parentName:"p",href:"https://web.archive.org/web/20040402182332/http://daringfireball.net/projects/markdown/"},"to quote the creators of Markdown"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).")),Object(a.b)("p",null,"This crucially includes the ability to include links. This was significant because I want us to be able to be able to click on pieces of information in the stories and be taken to the relevant place in the platform to see more details. Just as you see status updates on, for example, Twitter which lead you on to more details:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This is the history of ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/DefinitelyTyped?ref_src=twsrc%5Etfw"},"@DefinitelyTyped"),": ",Object(a.b)("a",{parentName:"p",href:"https://t.co/AY6s3bWnKP"},"https://t.co/AY6s3bWnKP")," Thanks to ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/SeaRyanC?ref_src=twsrc%5Etfw"},"@SeaRyanC")," & ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/drosenwasser?ref_src=twsrc%5Etfw"},"@drosenwasser")," of the ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/typescript?ref_src=twsrc%5Etfw"},"@typescript")," team, ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/blakeembrey?ref_src=twsrc%5Etfw"},"@blakeembrey")," inventor of typings, ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/vvakame?ref_src=twsrc%5Etfw"},"@vvakame"),", ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/_stevefenton?ref_src=twsrc%5Etfw"},"@","_","stevefenton"),", ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/basarat?ref_src=twsrc%5Etfw"},"@basarat"),", and of course ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/borisyankov?ref_src=twsrc%5Etfw"},"@borisyankov")," for telling me their parts of the story\u2764\ufe0f\ud83c\udf3b"),Object(a.b)("p",{parentName:"blockquote"},"\u2014 John Reilly (@johnny","_","reilly) ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly/status/1181542739994976256?ref_src=twsrc%5Etfw"},"October 8, 2019"))),Object(a.b)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),Object(a.b)("p",null,"Again consider this example news story:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Jane Smith logged in at 10:03am for 25 minutes. They placed ",Object(a.b)("a",{parentName:"p",href:"https://my-glorious-platform.io/orders/janes-order"},"an order")," worth \xa33,000.")),Object(a.b)("p",null,"Consider that story but without a link. It's not the same is it? A newsfeed without links would be missing a trick. Markdown gives us links. And happily due to my extensive work down the open source mines, I speak it like a native."),Object(a.b)("p",null,"The first consumer of the newsfeed was to be our own mini analytics platform, which is a React app. Converting the markdown stories to React is a solved problem thanks to the wonderful ",Object(a.b)("a",{parentName:"p",href:"https://github.com/rexxars/react-markdown"},"react-markdown"),". You can simply sling Markdown at it and out comes HTML. Et voil\xe0 a news feed!"),Object(a.b)("h2",{id:"whats-next"},"What's next?"),Object(a.b)("p",null,"So that's it! We've built a (primitive) news feed. We can now see in real time how are users are getting on. We're closer to them, we understand them better as a consequence. If we want to take it further there's a number of things we could do:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"We could make the feed auto-update"),Object(a.b)("li",{parentName:"ol"},"We could push news stories to other destinations. Markdown is a gloriously portable format which can be used in a variety of environments. For instance the likes of Slack and ",Object(a.b)("a",{parentName:"li",href:"https://blog.johnnyreilly.com/2019/12/automating-teams-notifications-recently.html"},"Teams")," accept it and apps like these are generally open on people's desktops and phones all the time anyway. Another way to narrow the gap between us and and our users.")),Object(a.b)("p",null,"It's very exciting!"))}h.isMDXComponent=!0}}]);
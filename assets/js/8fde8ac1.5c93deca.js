(window.webpackJsonp=window.webpackJsonp||[]).push([[645],{1219:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=h(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(a),d=n,u=p["".concat(r,".").concat(d)]||p[d]||b[d]||i;return a?o.a.createElement(u,s(s({ref:t},c),{},{components:a})):o.a.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return h}));var n=a(4),o=a(10),i=(a(0),a(1219)),r={title:"Death to compatibility mode",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["css","intranet","meta","internet explorer","compatibility mode","header"],hide_table_of_contents:!1},s={permalink:"/2013/04/01/death-to-compatibility-mode",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-04-01-death-to-compatibility-mode.md",source:"@site/blog/2013-04-01-death-to-compatibility-mode.md",title:"Death to compatibility mode",description:'For just over 10 years my bread and butter has been the development and maintenance of line of business apps. More particularly, web apps built on the Microsoft stack of love (\xa9 Scott Hanselman). These sort of apps are typically accessed via the company intranet and since "bring your own device" is still a relatively new innovation these apps are invariably built for everyones favourite browser: Internet Explorer. As we all know, enterprises are generally not that speedy when it comes to upgrades. So we\'re basically talking IE 9 at best, but more often than not, IE 8.',date:"2013-04-01T00:00:00.000Z",formattedDate:"April 1, 2013",tags:[{label:"css",permalink:"/tags/css"},{label:"intranet",permalink:"/tags/intranet"},{label:"meta",permalink:"/tags/meta"},{label:"internet explorer",permalink:"/tags/internet-explorer"},{label:"compatibility mode",permalink:"/tags/compatibility-mode"},{label:"header",permalink:"/tags/header"}],readingTime:6.11,truncated:!1,prevItem:{title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",permalink:"/2013/04/09/making-ie-10s-clear-field-x-button-and"},nextItem:{title:"DecimalModelBinder for nullable Decimals",permalink:"/2013/03/11/decimalmodelbinder-for-nullable-decimals"}},l=[{value:"A Brief History",id:"a-brief-history",children:[]},{value:"There&#39;s the rub",id:"theres-the-rub",children:[]},{value:"Solution 1: Custom HTTP Header through web.config",id:"solution-1-custom-http-header-through-webconfig",children:[]},{value:"Solution 2: Custom HTTP Header the hard way",id:"solution-2-custom-http-header-the-hard-way",children:[]},{value:"Solution 3: Meta Tags are go!",id:"solution-3-meta-tags-are-go",children:[]},{value:"And for bonus points: <code>IFRAME</code>s!",id:"and-for-bonus-points-iframes",children:[]},{value:"That&#39;s it",id:"thats-it",children:[]}],c={toc:l};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For just over 10 years my bread and butter has been the development and maintenance of line of business apps. More particularly, web apps built on the Microsoft stack of love (",Object(i.b)("a",{parentName:"p",href:"https://channel9.msdn.com/Events/MIX/MIX11/FRM02"},"\xa9 Scott Hanselman"),'). These sort of apps are typically accessed via the company intranet and since "bring your own device" is still a relatively new innovation these apps are invariably built for everyones favourite browser: Internet Explorer. As we all know, enterprises are generally not that speedy when it comes to upgrades. So we\'re basically talking IE 9 at best, but more often than not, IE 8.'),Object(i.b)("p",null," Now, unlike many people, I don't regard IE as a work of evil. I spent a fair number of years working for an organization which had IE 6 as the only installed browser on company desktops. (In fact, this was still the case as late as 2012!) Now, because JavaScript is so marvellously flexible I was still able to do a great deal with the help of a number of ",Object(i.b)("a",{parentName:"p",href:"http://paulirish.com/2011/the-history-of-the-html5-shiv/"},"shivs / shims"),"."),Object(i.b)("p",null,'But rendering and CSS - well that\'s another matter. Because here we\'re at the mercy of "compatibility mode". Perhaps a quick history lesson is in order. What is this "compatibility mode" of which you speak?'),Object(i.b)("h2",{id:"a-brief-history"},"A Brief History"),Object(i.b)("p",null,"Well it all started when Microsoft released IE 8. To quote them:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},'A fundamental problem discussed during each and every Internet Explorer release is balancing new features and functionality with site compatibility for the existing Web. On the one hand, new features and functionality push the Web forward. On the other hand, the Web is a large expanse; requiring every legacy page to support the "latest and greatest" browser version immediately at product launch just isn\'t feasible. Internet Explorer 8 addresses this challenge by introducing compatibility modes which gives a way to introduce new features and stricter compliance to standards while enabling it to be backward compliant.')," ","-"," excerpted from ",Object(i.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/askie/archive/2009/03/23/understanding-compatibility-modes-in-internet-explorer-8.aspx"},"understanding compatibility modes in Internet Explorer 8"),".")),Object(i.b)("h2",{id:"theres-the-rub"},"There's the rub"),Object(i.b)("p",null,"Sounds fair enough? Of course it does. Microsoft have generally bent over backwards to facilitate backwards compatibility. Quite right too - good business sense and all that. However, one of the choices made around backwards compatibility I've come to regard as somewhat irksome. Later down in the article you'll find this doozy: (emphasis mine)"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},'"',Object(i.b)("strong",{parentName:"em"},"for Intranet pages, 7 (IE 7 Standards) rendering mode is used by default"),' and can be changed."'))),Object(i.b)("p",null,"For whatever reason, this decision was not particularly well promoted. As a result, a fair number of devs I've encountered have little or no knowledge of compatibility mode. Certainly it came as a surprise to me. Here was I, developing away on my desktop. I'd fire up the app hosted on my machine and test on my local install of IE 8. All would look new and shiny (well non-anchor tags would have ",Object(i.b)("inlineCode",{parentName:"p"},":hover")," support). Happy and content, I'd push to our test system and browse to it. Wait, what's happened? Where's the new style rendering? What's up with my CSS? This is a bug right?"),Object(i.b)("p",null,"Obviously I know now it's not a bug it's a \"feature\". And I have learned how to get round the intranet default of compatibility mode through cunning deployment of meta tags and custom http headers. Recently compatibility mode has come to bite me for the second time (in this case I was building for IE 9 and was left wondering where all my rounded corners had vanished to when I deployed...)."),Object(i.b)("p",null,'For my own sanity I thought it might be good to document the various ways that exist to solve this particular problem. Just to clarify terms, "solve" in this context means "force IE to render in the most standards compliant / like other browsers fashion it can muster". You can use compatibility mode to do more than just that and if you\'re interested in more about this then I recommend ',Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/6771584/761388"},"this Stack Overflow answer"),"."),Object(i.b)("h2",{id:"solution-1-custom-http-header-through-webconfig"},"Solution 1: Custom HTTP Header through web.config"),Object(i.b)("p",null,"If you're running IIS7 or greater then, for my money, this is the simplest and most pain free solution. All you need do is include the following snippet in your web config file:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5283462.js?file=web.config"}),Object(i.b)("p",null,"This will make IIS serve up the above custom response HTTP header with each page."),Object(i.b)("h2",{id:"solution-2-custom-http-header-the-hard-way"},"Solution 2: Custom HTTP Header the hard way"),Object(i.b)("p",null,"Maybe you're running II6 and so you making a change to the web.config won't make a difference. That's fine, you can still get the same behaviour by going to the HTTP headers tab in IIS (see below) and adding the ",Object(i.b)("inlineCode",{parentName:"p"},"X-UA-Compatible: IE=edge")," header by hand."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-78CYavaCiUk/UVlGNv87U_I/AAAAAAAAAZQ/qtchMc14JsY/s320/CustomHeadersIIS6.gif",alt:null})),Object(i.b)("p",null,"Or, if you don't have access to IIS (don't laugh - it happens) you can fall back to doing this in code like this:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5283462.js?file=servingUpTheHardWay.cs"}),Object(i.b)("p",null,"Obviously there's a whole raft of ways you could get this in, using ",Object(i.b)("inlineCode",{parentName:"p"},"Application_BeginRequest")," in ",Object(i.b)("inlineCode",{parentName:"p"},"Global.asax.cs")," would probably as good an approach as any."),Object(i.b)("h2",{id:"solution-3-meta-tags-are-go"},"Solution 3: Meta Tags are go!"),Object(i.b)("p",null,"The final approach uses meta tags. And, in my experience it is the most quirky approach - it doesn't always seem to work. First up, what do we do? Well, in each page served we include the following meta tag like this:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5283462.js?file=any.html"}),Object(i.b)("p",null,"Having crawled over the WWW equivalent of broken glass I now know why this ","*",Object(i.b)("strong",{parentName:"p"},"sometimes"),"*"," doesn't work. (And credit where it's due the answer came from ",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/3960197/761388"},"here"),".) It's all down to the positioning of the meta tag:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"The X-UA-compatible header is not case sensitive; however, it must appear in the Web page's header (the HEAD section) before all other elements, except for the title element and other meta elements.")," ","-"," excerpted from ",Object(i.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-gb/library/jj676915(v=vs.85).aspx"},"specifying legacy document modes"))),Object(i.b)("p",null,"That's right, get your meta tag in the wrong place and things won't work. And you won't know why. Lovely. But get it right and it's all gravy. This remains the most unsatisfactory approach in my book though."),Object(i.b)("h2",{id:"and-for-bonus-points-iframes"},"And for bonus points: ",Object(i.b)("inlineCode",{parentName:"h2"},"IFRAME"),"s!"),Object(i.b)("p",null,"Before I finish off I thought it worth sharing a little known feature of ",Object(i.b)("inlineCode",{parentName:"p"},"IFRAME"),"s. If page is running in compatibility mode and it contains an ",Object(i.b)("inlineCode",{parentName:"p"},"IFRAME")," then the page loaded in that ",Object(i.b)("inlineCode",{parentName:"p"},"IFRAME")," will ",Object(i.b)("strong",{parentName:"p"},"also run in compatibility mode"),". No ifs, no buts."),Object(i.b)("p",null,"In the case that I encountered this behaviour, the application was being hosted in an ",Object(i.b)("inlineCode",{parentName:"p"},"IFRAME")," inside Sharepoint. Because of the way our Sharepoint was configured it ended up that the only real game in town for us was the meta tags approach - which happily worked once we'd correctly placed our meta tag."),Object(i.b)("p",null,"Again, it's lamentable that this behaviour isn't better documented - hopefully the act of writing this here will mean that it becomes a little better known. There's probably a good reason for this behaviour, though I'm frankly, I don't know what it is. If anyone does, I'd be interested."),Object(i.b)("h2",{id:"thats-it"},"That's it"),Object(i.b)("p",null,"Armed with the above I hope you have less compatibility mode pain than I have. The following blog entry is worth a read by the way:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/ie/archive/2009/02/16/just-the-facts-recap-of-compatibility-view.aspx"},"http://blogs.msdn.com/b/ie/archive/2009/02/16/just-the-facts-recap-of-compatibility-view.aspx")),Object(i.b)("p",null,"Finally, I have an open question about compatibility mode. I ",Object(i.b)("em",{parentName:"p"},"think")," (but I don't know) that even in compatibility mode IE runs using the same JavaScript engine. However I suspect it has a different DOM to play with. If anyone knows a little more about this and wants to let me know that'd be fantastic."))}h.isMDXComponent=!0}}]);
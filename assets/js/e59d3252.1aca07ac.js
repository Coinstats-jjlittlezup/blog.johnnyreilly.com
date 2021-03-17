(window.webpackJsonp=window.webpackJsonp||[]).push([[991],{1076:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var o=a(3),n=a(8),r=(a(0),a(1170)),i={title:"Globalize.js - number and date localisation made easy",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["jqueryui","Globalize.JS","javascript","ASP.NET AJAX","Globalization","Richard D. Worth"],hide_table_of_contents:!1},l={permalink:"/2012/05/07/globalizejs-number-and-date",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-05-07-globalizejs-number-and-date.md",source:"@site/blog/2012-05-07-globalizejs-number-and-date.md",description:"I wanted to write about a JavaScript library which seems to have had very little attention so far. And that surprises me as it's",date:"2012-05-07T00:00:00.000Z",formattedDate:"May 7, 2012",tags:[{label:"jqueryui",permalink:"/tags/jqueryui"},{label:"Globalize.JS",permalink:"/tags/globalize-js"},{label:"javascript",permalink:"/tags/javascript"},{label:"ASP.NET AJAX",permalink:"/tags/asp-net-ajax"},{label:"Globalization",permalink:"/tags/globalization"},{label:"Richard D. Worth",permalink:"/tags/richard-d-worth"}],title:"Globalize.js - number and date localisation made easy",readingTime:7.555,truncated:!1,prevItem:{title:"Dad Didn't Buy Any Games",permalink:"/2012/05/30/dad-didnt-buy-any-games"},nextItem:{title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",permalink:"/2012/04/28/beg-steal-or-borrow-decent-javascript"}},s=[{value:"Why does this matter?",id:"why-does-this-matter",children:[]},{value:"Why does this matter to me?",id:"why-does-this-matter-to-me",children:[]},{value:"JavaScript Date / Number Localisation - the Status Quo",id:"javascript-date--number-localisation---the-status-quo",children:[]},{value:"Microsoft doing *good things*",id:"microsoft-doing-good-things",children:[]},{value:"Microsoft doing *even better things* (Scott Gu to the rescue!)",id:"microsoft-doing-even-better-things-scott-gu-to-the-rescue",children:[]},{value:"History takes a funny course...",id:"history-takes-a-funny-course",children:[]},{value:"Stick a fork in it - it&#39;s done",id:"stick-a-fork-in-it---its-done",children:[]},{value:"The Future?",id:"the-future",children:[]}],c={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I wanted to write about a JavaScript library which seems to have had very little attention so far. And that surprises me as it's"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Brilliant!"),Object(r.b)("li",{parentName:"ol"},"Solves a common problem that faces many app developers who work in the wonderful world of web; myself included")),Object(r.b)("p",null,"The library is called Globalize.js and can be found on ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jquery/globalize"},"GitHub here"),". Globalize.js is a simple JavaScript library that allows you to format and parse numbers and dates in culture specific fashion."),Object(r.b)("h2",{id:"why-does-this-matter"},"Why does this matter?"),Object(r.b)("p",null,"Because different countries and cultures do dates and numbers in different ways. Christmas Day this year in England will be ",Object(r.b)("inlineCode",{parentName:"p"},"25/12/2012")," (dd/MM/yyyy). But for American eyes this should be ",Object(r.b)("inlineCode",{parentName:"p"},"12/25/2012")," (M/d/yyyy). And for German ",Object(r.b)("inlineCode",{parentName:"p"},"25.12.2012"),' (dd.MM.yyyy). Likewise, if I was to express numerically the value of "one thousand exactly - to 2 decimal places", as a UK citizen I would do it like so: ',Object(r.b)("inlineCode",{parentName:"p"},"1,000.00"),". But if I was French I'd express it like this: ",Object(r.b)("inlineCode",{parentName:"p"},"1.000,00"),". You see my point?"),Object(r.b)("h2",{id:"why-does-this-matter-to-me"},"Why does this matter to me?"),Object(r.b)("p",null,"For a number of years I've been working on applications that are used globally, from London to Frankfurt to Shanghai to New York to Singapore and many other locations besides. The requirement has always been to serve up localised dates and numbers so users experience of the system is more natural. Since our applications are all ASP.NET we've never really had a problem server-side. Microsoft have blessed us with all the goodness of ",Object(r.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.globalization.aspx"},"System.Globalization")," which covers hundreds of different cultures and localisations. It makes it frankly easy:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'using System.Globalization;\n\n//Produces: "06.05.2012"\nnew DateTime(2012,5,6).ToString("d", new CultureInfo("de-DE")); \n\n//Produces: "45,56"\n45.56M.ToString("n", new CultureInfo("fr-FR"));\n')),Object(r.b)("p",null,"The problem has always been client-side. If you need to localise dates and numbers on the client what do you do?"),Object(r.b)("h2",{id:"javascript-date--number-localisation---the-status-quo"},"JavaScript Date / Number Localisation - the Status Quo"),Object(r.b)("p",null,"Well to be frank - it's a bit rubbish really. What's on offer natively at present basically amounts to this:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"},"Date.toLocaleDateString")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/ToLocaleString"},"Number.ToLocaleString"))),Object(r.b)("p",null,"This is better than nothing - but not by much. There's no real control or flexibility here. If you don't like the native localisation format or you want something slightly different then tough. This is all you've got to play with."),Object(r.b)("p",null,"For the longest time this didn't matter too much. Up until relatively recently the world of web was far more about the thin client and the fat server. It would be quite standard to have all HTML generated on the server. And, as we've seen .NET (and many other back end enviroments as well) give you all the flexiblility you might desire given this approach."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=k2sYIIjS-cQ"},"But the times they are a-changing"),". And given the ongoing explosion of HTML 5 the rich client is very definitely with us. So we need tools."),Object(r.b)("h2",{id:"microsoft-doing-good-things"},"Microsoft doing ","*","good things","*"),Object(r.b)("p",null,"Hands up who remembers when Microsoft first shipped it's ",Object(r.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/magazine/cc163300.aspx"},"ASP.NET AJAX")," library back in 2007?"),Object(r.b)("p",null,"Well a small part of this was the extensions ASP.NET AJAX added to JavaScripts native Date and Number objects.... These extensions allowed the localisation of Dates and Numbers to the current UI culture and the subsequent string parsing of these back into Dates / Numbers. These extensions pretty much gave JavaScript the functionality that the server already had in ",Object(r.b)("inlineCode",{parentName:"p"},"System.Globalization"),". (not quite like-for-like but near enough the mark)"),Object(r.b)("p",null,"I'm not aware of a great fuss ever being made about this - a fact I find surprising since one would imagine this is a common need. There's good documentation about this on MSDN - here's some useful links:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/bb386572.aspx"},"Ajax Script Globalization and Localization")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/bb386581.aspx"},"Walkthrough: Globalizing a Date by Using Client Script")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/bb397506.aspx"},"JavaScript Base Type Extensions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/bb397521.aspx"},"Date.parseLocale")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/bb383816.aspx"},"Date.localeFormat")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/bb310813.aspx"},"Number.localeFormat")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/bb310985.aspx"},"Number.parseLocale"))),Object(r.b)("p",null,"When our team became aware of this we started to make use of it in our web applications. I imagine we weren't alone..."),Object(r.b)("h2",{id:"microsoft-doing-even-better-things-scott-gu-to-the-rescue"},"Microsoft doing ","*","even better things","*"," (Scott Gu to the rescue!)"),Object(r.b)("p",null,"I started to think about this again when MVC reared it's lovely head."),Object(r.b)("p",null,"Like many, I found I preferred the separation of concerns / testability etc that MVC allowed. As such, our team was planning to, over time, migrate our ASP.NET WebForms applications over to MVC. However, before we could even begin to do this we had a problem. Our JavaScript localisation was dependant on the ScriptManager. The ",Object(r.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.aspx"},"ScriptManager")," is very much a WebForms construct."),Object(r.b)("p",null,"What to do? To the users it wouldn't be acceptable to remove the localisation functionality from the web apps. The architecture of an application is, to a certain extent, meaningless from the users perspective - they're only interested in what directly impacts them. That makes sense, even if it was a problem for us."),Object(r.b)("p",null,"Fortunately the Great Gu had it in hand. Lo and behold the ",Object(r.b)("a",{parentName:"p",href:"http://forum.jquery.com/topic/proposal-for-a-globalization-plugin-jquery-glob-js"},"this post")," appeared on the jQuery forum and the following post appeared on Guthrie's blog:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://weblogs.asp.net/scottgu/archive/2010/06/10/jquery-globalization-plugin-from-microsoft.aspx"},"http://weblogs.asp.net/scottgu/archive/2010/06/10/jquery-globalization-plugin-from-microsoft.aspx")),Object(r.b)("p",null,"Yes that's right. Microsoft were giving back to the jQuery community by contributing a jQuery globalisation plug-in. They'd basically taken the work done with ASP.NET AJAX Date / Number extensions, jQuery-plug-in-ified it and put it out there. Fantastic!"),Object(r.b)("p",null,"Using this we could localise / globalise dates and numbers whether we were working in WebForms or in MVC. Or anything else for that matter. If we were suddenly seized with a desire to re-write our apps in PHP we'd ","*",Object(r.b)("strong",{parentName:"p"},"still"),"*"," be able to use Globalize.js on the client to handle our regionalisation of dates and numbers."),Object(r.b)("h2",{id:"history-takes-a-funny-course"},"History takes a funny course..."),Object(r.b)("p",null,"Now for my part I would have expected that this announcement to be followed in short order by dancing in the streets and widespread adoption. Surprisingly, not so. All went quiet on the globalisation front for some time and then out of the blue the following comment appeared on the jQuery forum by ",Object(r.b)("a",{parentName:"p",href:"http://rdworth.org/blog/"},"Richard D. Worth")," (he of jQuery UI fame):"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://blog.jquery.com/2011/04/16/official-plugins-a-change-in-the-roadmap/#comment-527484"},"http://blog.jquery.com/2011/04/16/official-plugins-a-change-in-the-roadmap/#comment-527484")),Object(r.b)("p",null,"The long and short of which was:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The jQuery UI team were now taking care of (the re-named) Globalize.js library as the grid control they were developing had a need for some of Globalize.js's goodness. Consequently a home for Globalize.js appeared on the jQuery UI website: ",Object(r.b)("a",{parentName:"li",href:"http://wiki.jqueryui.com/Globalize"},"http://wiki.jqueryui.com/Globalize")),Object(r.b)("li",{parentName:"ul"},"The source of Globalize.js moved to this location on GitHub: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/jquery/globalize/"},"https://github.com/jquery/globalize/")),Object(r.b)("li",{parentName:"ul"},"Perhaps most significantly, the jQuery globalisation plug-in as developed by Microsoft had now been made a standalone JavaScript library. This was clearly brilliant news for Node.js developers as they would now be able to take advantage of this and perform localisation / globalisation server-side - they wouldn't need to have jQuery along for the ride. Also, this would be presumably be good news for users of other client side JavaScript libraries like Dojo / YUI etc.")),Object(r.b)("p",null,"Globalize.js clearly has a rosy future in front of it. Using the new Globalize.js library was still simplicity itself. Here's some examples of localising dates / numbers using the German culture:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'<script \n  src="/Scripts/Globalize/globalize.js" \n  type="text/javascript"><\/script>\n<script \n  src="/Scripts/Globalize/cultures/globalize.culture.de-DE.js" \n  type="text/javascript"><\/script>\n\nGlobalize.culture("de-DE");\n\n//"2012-05-06" - ISO 8601 format\nGlobalize.format(new Date(2012,4,6), "yyyy-MM-dd");\n\n//"06.05.2012" - standard German short date format of dd.MM.yyyy\nGlobalize.format(new Date(2012,4,6), Globalize.culture().calendar.patterns.d);   \n\n//"4.576,3" - a number rendered to 1 decimal place\nGlobalize.format(4576.34, "n1");\n')),Object(r.b)("h2",{id:"stick-a-fork-in-it---its-done"},"Stick a fork in it - it's done"),Object(r.b)("p",null,"The entry for Globalize.js on the jQuery UI site reads as follows:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},'"version: 0.1.0a1 (not a jQuery UI version number, as this is a standalone utility) status: in development (part of Grid project)"'))),Object(r.b)("p",null,"I held back from making use of the library for some time, deterred by the \"in development\" status. However, I had a bit of dialog with one of the jQuery UI team (I forget exactly who) who advised that the API was unlikely to change further and that the codebase was actually pretty stable. Our team did some testing of Globalize.js and found this very much to be case. Everything worked just as we expected and hoped. We're now using Globalize.js in a production environment with no problems reported; it's been doing a grand job."),Object(r.b)("p",null,"In my opinion, Number / Date localisation on the client is ready for primetime right now - it works! Unfortunately, because Globalize.js has been officially linked in with the jQuery UI grid project it seems unlikely that this will officially ship until the grid does. Looking at the jQuery UI ",Object(r.b)("a",{parentName:"p",href:"http://wiki.jqueryui.com/Roadmap"},"roadmap")," the grid is currently slated to release with jQuery UI 2.1. There isn't yet a release date for jQuery UI 1.9 and so it could be a long time before the grid actually sees the light of day."),Object(r.b)("p",null,'I\'m hoping that the jQuery UI team will be persuaded to "officially" release Globalize.js long before the grid actually ships. Obviously people can use Globalize.js as is right now (as we are) but it seems a shame that many others will be missing out on using this excellent functionality, deterred by the "in development" status. Either way, ',Object(r.b)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=qEMytPF8YuY"},"the campaign to release Globalise.js officially starts here!")),Object(r.b)("h2",{id:"the-future"},"The Future?"),Object(r.b)("p",null,"There are plans to bake globalisation right into JavaScript natively with EcmaScript 5.1. There's a good post on the topic ",Object(r.b)("a",{parentName:"p",href:"http://generatedcontent.org/post/59403168016/esintlapi"},"here"),". And here's a couple of historical links worth reading too:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://norbertlindenberg.com/2012/02/ecmascript-internationalization-api/"},"http://norbertlindenberg.com/2012/02/ecmascript-internationalization-api/"),Object(r.b)("a",{parentName:"p",href:"http://wiki.ecmascript.org/doku.php?id=globalization:specification_drafts"},"http://wiki.ecmascript.org/doku.php?id=globalization:specification","_","drafts")))}b.isMDXComponent=!0},1170:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(a),p=o,d=u["".concat(i,".").concat(p)]||u[p]||h[p]||r;return a?n.a.createElement(d,l(l({ref:t},c),{},{components:a})):n.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1170:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var o=a(0),i=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,n=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,d=u["".concat(n,".").concat(h)]||u[h]||b[h]||r;return a?i.a.createElement(d,l(l({ref:t},c),{},{components:a})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var c=2;c<r;c++)n[c]=a[c];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var o=a(3),i=a(8),r=(a(0),a(1170)),n={title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["Internationalization","Twitter.Bootstrap.MVC4","Globalize JS","Twitter Bootstrap"],hide_table_of_contents:!1},l={permalink:"/2013/01/14/twitterbootstrapmvc4-meet-bootstrap_14",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-01-14-twitterbootstrapmvc4-meet-bootstrap_14.md",source:"@site/blog/2013-01-14-twitterbootstrapmvc4-meet-bootstrap_14.md",description:"Last time I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation.",date:"2013-01-14T00:00:00.000Z",formattedDate:"January 14, 2013",tags:[{label:"Internationalization",permalink:"/tags/internationalization"},{label:"Twitter.Bootstrap.MVC4",permalink:"/tags/twitter-bootstrap-mvc-4"},{label:"Globalize JS",permalink:"/tags/globalize-js"},{label:"Twitter Bootstrap",permalink:"/tags/twitter-bootstrap"}],title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",readingTime:2.93,truncated:!1,prevItem:{title:"Using Expressions with Constructors",permalink:"/2013/02/13/using-expressions-with-constructors"},nextItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker",permalink:"/2013/01/09/twitterbootstrapmvc4-meet-bootstrap"}},s=[{value:"Going global down in Acapulco",id:"going-global-down-in-acapulco",children:[]},{value:"Culture-specific script bundles",id:"culture-specific-script-bundles",children:[]},{value:"Where have we got to?",id:"where-have-we-got-to",children:[]},{value:"International Bootstrap Datepicker",id:"international-bootstrap-datepicker",children:[]},{value:"Summary",id:"summary",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2013/01/twitterbootstrapmvc4-meet-bootstrap.html"},"Last time")," I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation."),Object(r.b)("p",null," I also discovered that Stefan Petre's Bootstrap Datepicker appears to have been abandoned. Andrew Rowls has taken it on and created a GitHub repository for it ",Object(r.b)("a",{parentName:"p",href:"https://github.com/eternicode/bootstrap-datepicker"},"here"),". Besides bug fixes he's also introduced the ability for the Bootstrap Datepicker to customised for different cultures."),Object(r.b)("p",null,"Since these 2 subjects are linked I tackled them together and thought it might be worth writing up here. You can find the conclusion of my work in a GitHub repository I created ",Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/BootstrapMvcSample"},"here"),"."),Object(r.b)("h2",{id:"going-global-down-in-acapulco"},"Going global down in Acapulco"),Object(r.b)("p",null,"First step in internationalising any ASP.Net web app is adding the following to the ",Object(r.b)("inlineCode",{parentName:"p"},"web.config"),":"),Object(r.b)("script",{src:"https://gist.github.com/4528994.js?file=web.config"}),Object(r.b)("p",null,"Then I pulled ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jquery/globalize"},"Globalize")," and the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/eternicode/bootstrap-datepicker"},"Andrew Rowls fork of Bootstrap Datepicker")," into the project (replacing Stefan's original assets). As well as this I pulled in the ",Object(r.b)("inlineCode",{parentName:"p"},"jQuery.validate.globalize.js")," extension ",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2012/09/globalize-and-jquery-validate.html"},"I wrote about here"),". (This replaces some of the default jQuery Validate functionality for culture-specific functionality based on Globalize.) This extension depends on a meta tag that is generated using the following file (which also handles the serving up of the relevant JavaScript culture bundles, more of which shortly):"),Object(r.b)("script",{src:"https://gist.github.com/4528994.js?file=GlobalizationHelpers.cs"}),Object(r.b)("h2",{id:"culture-specific-script-bundles"},"Culture-specific script bundles"),Object(r.b)("p",null,"With all of my dependancies in place I was now ready to press on. Since both Globalize and the new Bootstrap Datepicker come with their own culture-specific JavaScript files it seemed a good idea to make use of ASP.Nets new bundling functionality. This I did here:"),Object(r.b)("script",{src:"https://gist.github.com/4528994.js?file=BootstrapBundleConfig.cs"}),Object(r.b)("p",null,"The code above creates a script bundle for each culture when the application starts up. This script bundle contains the culture-specific Globalize and Bootstrap Datepicker JavaScript files. If further culture-specific components were added to the application it would make sense to include these here as well."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"_BootstrapLayout.basic.cshtml")," has been amended to make use of the new bundles and also to include a meta tag that will used to drive regionalisation:"),Object(r.b)("script",{src:"https://gist.github.com/4528994.js?file=_BootstrapLayout.basic.cshtml"}),Object(r.b)("p",null,"To illustrate how this works, a German user running a machine with the de-DE culture would be served up the following 2 files:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"globalize.culture.de-DE.js")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bootstrap-datepicker.de.js"))),Object(r.b)("h2",{id:"where-have-we-got-to"},"Where have we got to?"),Object(r.b)("p",null,"With all this done we have now fixed the validation issues we were experiencing previously. This was done by including the Globalize library, the accept-language meta tag and the jQuery Validate Globalize extensions."),Object(r.b)("p",null,"Besides this we've laid the groundwork for introducing internationalised datepickers by introducing Andrew Rowls fork of the Bootstrap Datepicker. That's what we'll do next..."),Object(r.b)("h2",{id:"international-bootstrap-datepicker"},"International Bootstrap Datepicker"),Object(r.b)("p",null,"The final steps of switching over to using a culture-specific date picker are achieved by making a change to the Scripts section in the ",Object(r.b)("inlineCode",{parentName:"p"},"Create.cshtml")," file. The existing (and very simple) section should be replaced with this:"),Object(r.b)("script",{src:"https://gist.github.com/4528994.js?file=Create.cshtml"}),Object(r.b)("p",null,'The script above takes the region from the accept-language meta tag and attempts to look up an associated "language" for the Bootstrap Datepicker. If it finds one it uses it, if not then the default language of "en" / English will be used.'),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,"In this post we:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"fixed the validation issues we'd introduced by marrying up Twitter.Bootstrap.MVC4 and the Bootstrap Datepicker"),Object(r.b)("li",{parentName:"ol"},"switched over to using the Andrew Rowls fork of Bootstrap Datepicker and made use of the internationalisation functionality it exposes.")))}p.isMDXComponent=!0}}]);
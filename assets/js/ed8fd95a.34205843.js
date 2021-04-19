(window.webpackJsonp=window.webpackJsonp||[]).push([[1039],{1211:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var i=a(0),l=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),p=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},h=l.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,d=u["".concat(r,".").concat(h)]||u[h]||b[h]||n;return a?l.a.createElement(d,o(o({ref:t},c),{},{components:a})):l.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<n;c++)r[c]=a[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var i=a(4),l=a(10),n=(a(0),a(1211)),r={title:"Globalize and jQuery Validation",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net mvc","Internationalisation","Globalization","Globalize JS","Localisation","jQuery Validation","jQuery.validate.js"],hide_table_of_contents:!1},o={permalink:"/2012/09/06/globalize-and-jquery-validate",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-09-06-globalize-and-jquery-validate.md",source:"@site/blog/2012-09-06-globalize-and-jquery-validate.md",title:"Globalize and jQuery Validation",description:"Update 05/10/2015",date:"2012-09-06T00:00:00.000Z",formattedDate:"September 6, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"Internationalisation",permalink:"/tags/internationalisation"},{label:"Globalization",permalink:"/tags/globalization"},{label:"Globalize JS",permalink:"/tags/globalize-js"},{label:"Localisation",permalink:"/tags/localisation"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"},{label:"jQuery.validate.js",permalink:"/tags/j-query-validate-js"}],readingTime:3.77,truncated:!1,prevItem:{title:"Giving OData to CRM 4.0",permalink:"/2012/09/24/giving-odata-to-crm-40"},nextItem:{title:"How to attribute encode a PartialView in MVC (Razor)",permalink:"/2012/08/24/how-to-attribute-encode-partialview-in"}},s=[{value:"Update 05/10/2015",id:"update-05102015",children:[]},{value:"Update 27/08/2013",id:"update-27082013",children:[]},{value:"Background",id:"background",children:[]},{value:"jQuery Global is dead... Long live Globalize!",id:"jquery-global-is-dead-long-live-globalize",children:[]},{value:"Wait, where&#39;s <code>html lang</code> getting set?",id:"wait-wheres-html-lang-getting-set",children:[]},{value:"Serving up the right Globalize culture files",id:"serving-up-the-right-globalize-culture-files",children:[]},{value:"Putting it all together",id:"putting-it-all-together",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"update-05102015"},"Update 05/10/2015"),Object(n.b)("p",null," If you're after a version of this that works with Globalize 1.x then take a look ",Object(n.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2015/10/jquery-validation-globalize-hits-10.html"},"here"),"."),Object(n.b)("h2",{id:"update-27082013"},"Update 27/08/2013"),Object(n.b)("p",null,"To make it easier for people to use the approach detailed in this post I have created a repository for ",Object(n.b)("inlineCode",{parentName:"p"},"jquery.validate.globalize.js")," on GitHub ",Object(n.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jquery-validation-globalize"},"here"),"."),Object(n.b)("p",null,"This is also available as a nuget package ",Object(n.b)("a",{parentName:"p",href:"https://www.nuget.org/packages/jQuery.Validation.Globalize/"},"here"),"."),Object(n.b)("p",null,"To see a good demo take a look ",Object(n.b)("a",{parentName:"p",href:"http://jqueryvalidationunobtrusivenative.azurewebsites.net/AdvancedDemo/Globalize"},"here"),"."),Object(n.b)("h2",{id:"background"},"Background"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2012/05/globalizejs-number-and-date.html"},"I've written before about a great little library called Globalize")," which makes locale specific number / date formatting simple within JavaScript. And I've just stumbled upon an ",Object(n.b)("a",{parentName:"p",href:"http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx"},"old post written by Scott Hanselman about the business of Globalisation / Internationalisation / Localisation within ASP.NET"),". It's a great post and I recommend reading it (I'm using many of the approaches he discusses)."),Object(n.b)("h2",{id:"jquery-global-is-dead-long-live-globalize"},"jQuery Global is dead... Long live Globalize!"),Object(n.b)("p",null,"However, there's one tweak I would make to Scotts suggestions and that's to use Globalize in place of the jQuery Global plugin. The jQuery Global plugin has now effectively been reborn as Globalize (with no dependancy on jQuery). As far as I can tell jQuery Global is now disappearing from the web - certainly the link in Scotts post is dead now at least. I've ",Object(n.b)("del",{parentName:"p"},"ripped off"),' been inspired by the "Globalized jQuery Unobtrusive Validation" section of Scotts article and made ',Object(n.b)("inlineCode",{parentName:"p"},"jquery.validate.globalize.js"),"."),Object(n.b)("p",null,"And for what it's worth ",Object(n.b)("inlineCode",{parentName:"p"},"jquery.validate.globalize.js")," applies equally to standard jQuery Validation as well as to jQuery Unobtrusive Validation. I say that as the above JavaScript is effectively a monkey patch to the number / date / range / min / max methods of jQuery.validate.js which forces these methods to use Globalize's parsing support instead."),Object(n.b)("p",null,"Here's the JavaScript:"),Object(n.b)("script",{src:"https://gist.github.com/3651751.js?file=jquery.validate.globalize.js"}),Object(n.b)("p",null,"The above script does 2 things. Firstly it monkey patches jquery.validate.js to make use of Globalize.js number and date parsing in place of the defaults. Secondly it initialises Globalize to relevant current culture driven by the ",Object(n.b)("inlineCode",{parentName:"p"},"html lang")," property. So if the html tag looked like this:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-html"},'<html lang="de-DE">\n...\n</html>\n')),Object(n.b)("p",null,'Then Globalize would be initialised with the "de-DE" culture assuming that culture was available and had been served up to the client. (By the way, the Globalize initialisation logic has only been placed in the code above to demonstrate that Globalize needs to be initialised to the culture. It\'s more likely that this initialisation step would sit elsewhere in a "proper" app.)'),Object(n.b)("h2",{id:"wait-wheres-html-lang-getting-set"},"Wait, where's ",Object(n.b)("inlineCode",{parentName:"h2"},"html lang")," getting set?"),Object(n.b)("p",null,"In Scott's article he created a ",Object(n.b)("inlineCode",{parentName:"p"},"MetaAcceptLanguage")," helper to generate a META tag like this: ",Object(n.b)("inlineCode",{parentName:"p"},'&lt;meta name="accept-language" content="en-GB" /&gt;')," which he used to drive Globalizes specified culture."),Object(n.b)("p",null,"Rather than generating a meta tag I've chosen to use the ",Object(n.b)("inlineCode",{parentName:"p"},"lang")," attribute of the ",Object(n.b)("inlineCode",{parentName:"p"},"html")," tag to specify the culture. I've chosen to do this as it's more in line with the ",Object(n.b)("a",{parentName:"p",href:"http://www.w3.org/TR/i18n-html-tech-lang/#ri20030510.102829377"},"W3C spec"),". But it should be noted this is just a different way of achieving exactly the same end."),Object(n.b)("p",null,"So how's it getting set? Well, it's no great shakes; in my ",Object(n.b)("inlineCode",{parentName:"p"},"_Layout.cshtml")," file my html tag looks like this:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-html"},'<html lang="@System.Globalization.CultureInfo.CurrentUICulture.Name">\n')),Object(n.b)("p",null,"And in my ",Object(n.b)("inlineCode",{parentName:"p"},"web.config")," I have following setting set:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n  <system.web>\n    <globalization culture="auto" uiCulture="auto" />\n    \x3c!--- Other stuff.... --\x3e\n  </system.web>\n</configuration>\n')),Object(n.b)("p",null,"With both of these set this means I get ",Object(n.b)("inlineCode",{parentName:"p"},'&lt;html lang="de-DE"&gt;')," or ",Object(n.b)("inlineCode",{parentName:"p"},'&lt;html lang="en-GB"&gt;')," etc. depending on a users culture."),Object(n.b)("h2",{id:"serving-up-the-right-globalize-culture-files"},"Serving up the right Globalize culture files"),Object(n.b)("p",null,"In order that I send the correct Globalize culture to the client I've come up with this static class which provides the user with the relevant culture URL (falling back to the en-GB culture if it can't find one based your culture):"),Object(n.b)("script",{src:"https://gist.github.com/3651751.js?file=GlobalizeUrls.cs"}),Object(n.b)("h2",{id:"putting-it-all-together"},"Putting it all together"),Object(n.b)("p",null,"To make use of all of this together you'll need to have the ",Object(n.b)("inlineCode",{parentName:"p"},"html lang")," attribute set as described earlier and some scripts output in your layout page like this:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-html"},'<script src="@Url.Content("~/Scripts/jquery.js")" type="text/javascript"><\/script>\n<script src="@Url.Content(GlobalizeUrls.Globalize)" type="text/javascript"><\/script>\n<script src="@Url.Content(GlobalizeUrls.GlobalizeCulture)" type="text/javascript"><\/script>\n<script src="@Url.Content("~/Scripts/jquery.validate.js")" type="text/javascript"><\/script>\n<script src="@Url.Content("~/scripts/jquery.validate.globalize.js")" type="text/javascript"><\/script>\n\n@* Only serve the following script if you need it: *@\n<script src="@Url.Content("~/scripts/jquery.validate.unobtrusive.js")" type="text/javascript"><\/script>\n')),Object(n.b)("p",null,"Which will render something like this:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-html"},'<script src="/Scripts/jquery.js" type="text/javascript"><\/script>\n<script src="/Scripts/globalize.js" type="text/javascript"><\/script>\n<script src="/scripts/globalize/globalize.culture.en-GB.js" type="text/javascript"><\/script>\n<script src="/Scripts/jquery.validate.js" type="text/javascript"><\/script>\n<script src="/Scripts/jquery.validate.globalize.js" type="text/javascript"><\/script>\n<script src="/Scripts/jquery.validate.unobtrusive.js" type="text/javascript"><\/script>\n')),Object(n.b)("p",null,"This will load up jQuery, Globalize, your Globalize culture, jQuery Validate, jQuery Validates unobtrusive extensions (which you don't need if you're not using them) and the jQuery Validate Globalize script which will set up culture aware validation."),Object(n.b)("p",null,"Finally and just to re-iterate, it's highly worthwhile to give ",Object(n.b)("a",{parentName:"p",href:"http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx"},"Scott Hanselman's original article a look"),". Most all the ideas in here were taken wholesale from him!"))}p.isMDXComponent=!0}}]);
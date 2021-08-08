"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[98614],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return a?i.createElement(d,o(o({ref:t},h),{},{components:a})):i.createElement(d,o({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21549:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return u}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=["components"],s={title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Date","Sebastian Markb\xe5ge","DateTime","System.Web.Script.Serialization.JavaScriptSerializer","EMCAScript standard","json","javascript","Serialization","Nathan Vonnahme"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2012/04/28/beg-steal-or-borrow-decent-javascript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-04-28-beg-steal-or-borrow-decent-javascript.md",source:"@site/blog/2012-04-28-beg-steal-or-borrow-decent-javascript.md",title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",description:"I've so named this blog post because it shamelessly borrows from the fine work of others 1. http",date:"2012-04-28T00:00:00.000Z",formattedDate:"April 28, 2012",tags:[{label:"Date",permalink:"/tags/date"},{label:"Sebastian Markb\xe5ge",permalink:"/tags/sebastian-markbage"},{label:"DateTime",permalink:"/tags/date-time"},{label:"System.Web.Script.Serialization.JavaScriptSerializer",permalink:"/tags/system-web-script-serialization-java-script-serializer"},{label:"EMCAScript standard",permalink:"/tags/emca-script-standard"},{label:"json",permalink:"/tags/json"},{label:"javascript",permalink:"/tags/javascript"},{label:"Serialization",permalink:"/tags/serialization"},{label:"Nathan Vonnahme",permalink:"/tags/nathan-vonnahme"}],readingTime:6.485,truncated:!1,prevItem:{title:"Globalize.js - number and date localisation made easy",permalink:"/2012/05/07/globalizejs-number-and-date"},nextItem:{title:"JSHint - Customising your hurt feelings",permalink:"/2012/04/23/jshint-customising-your-hurt-feelings"}},h=[{value:"DateTime, JSON, JavaScript Dates....",id:"datetime-json-javascript-dates",children:[]},{value:"Getting your web services to use the ISO 8601 DateTime Converter",id:"getting-your-web-services-to-use-the-iso-8601-datetime-converter",children:[]}],c={toc:h};function u(e){var t=e.components,s=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I've so named this blog post because it shamelessly borrows from the fine work of others: Sebastian Markb\xe5ge and Nathan Vonnahme. Sebastian wrote a blog post documenting a good solution to the ASP.NET JavaScriptSerializer DateTime problem at the tail end of last year. However, his solution didn't get me 100% of the way there when I tried to use it because of a need to support IE 8 which lead me to use Nathan Vonnahme's ISO 8601 JavaScript Date parser. I thought it was worth documenting this, hence this post, but just so I'm clear; the hard work here was done by Sebastian Markb\xe5ge and Nathan Vonnahme and not me. Consider me just a curator in this case. The original blog posts that I am drawing upon can be found here: 1. ",(0,r.kt)("a",{parentName:"p",href:"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/"},"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/")," and here:\n2. ",(0,r.kt)("a",{parentName:"p",href:"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/"},"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/")),(0,r.kt)("h2",{id:"datetime-json-javascript-dates"},"DateTime, JSON, JavaScript Dates...."),(0,r.kt)("p",null,"Like many, I've long been frustrated with the quirky DateTime serialisation employed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Web.Script.Serialization.JavaScriptSerializer")," class. When serialising DateTimes so they can be JSON.parsed on the client, this serialiser uses the following approach: (from MSDN) ",(0,r.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.web.script.serialization.javascriptserializer.aspx"},(0,r.kt)("em",{parentName:"a"},'Date object, represented in JSON as "\\/Date(number of ticks)\\/". The number of ticks is a positive or negative long value that indicates the number of ticks (milliseconds) that have elapsed since midnight 01 January, 1970 UTC."'))," Now this is not particularly helpful in my opinion because it's not human readable (at least not this human; perhaps ",(0,r.kt)("a",{parentName:"p",href:"http://stackoverflow.com/users/22656/jon-skeet"},"Jon Skeet"),"...) When consuming your data from web services / PageMethods using ",(0,r.kt)("a",{parentName:"p",href:"http://api.jquery.com/jQuery.ajax/"},"jQuery.ajax")," you are landed with the extra task of having to convert what were DateTimes on the server from Microsofts string Date format (eg ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\/Date(1293840000000)\\/"'),") into actual JavaScript Dates. It's also unhelpful because it's divergent from the approach to DateTime / Date serialisation used by a native JSON serialisers: ",(0,r.kt)("img",{src:a(42948).Z})),(0,r.kt)("p",null," Just as an aside it's worth emphasising that one of the limitations of JSON is that the JSON.parsing of a JSON.stringified date will ","*",(0,r.kt)("strong",{parentName:"p"},"not"),"*"," return you to a JavaScript Date but rather an ISO 8601 date string which will need to be subsequently converted into a Date. Not JSON's fault - essentially down to the absence of a Date literal within JavaScript. ## Making JavaScriptSerializer behave more JSON'y"),(0,r.kt)("p",null,"Anyway, I didn't think there was anything I could really do about this in an ASP.NET classic / WebForms world because, to my knowledge, it is not possible to swap out the serialiser that is used. JavaScriptSerializer is the only game in town. (Though I am optimistic about the future; given the announcement that I first picked up on Rick Strahl's blog that ",(0,r.kt)("a",{parentName:"p",href:"http://www.west-wind.com/weblog/posts/2012/Mar/09/Using-an-alternate-JSON-Serializer-in-ASPNET-Web-API"},"Json.NET was going to be adopted as the default JSON serializer for ASP.NET Web API"),"; what with Json.NET having out-of-the-box ",(0,r.kt)("a",{parentName:"p",href:"http://james.newtonking.com/archive/2009/02/20/good-date-times-with-json-net.aspx"},"ISO 8601 support"),". I digress...) Because it can make debugging a much more straightforward process I place a lot of value on being able to read the network traffic that web apps generate. It's much easier to drop into Fiddler / FireBug / Chrome dev tools etc and watch what's happening there and then instead of having to manually process the data separately first so that you can understand it. I think this is nicely aligned with the ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/KISS_principle"},"KISS principle"),". For that reason I've been generally converting DateTimes to ISO 8601 strings on the server before returning them to the client. A bit of extra overhead but generally worth it for the gains in clarity in my opinion. So I was surprised and delighted when I happened upon ",(0,r.kt)("a",{parentName:"p",href:"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/"},"Sebastian Markb\xe5ge's blog post")," which provided a DateTime JavaScriptConverter that could be plugged into the JavaScriptSerializer. You can see the code below (or on Sebastian's original post with a good explanation of how it works): ",(0,r.kt)("script",{src:"https://gist.github.com/2489976.js?file=DateTimeJavaScriptConverter.cs"})),(0,r.kt)("p",null," Using this converter meant that a DateTime that previously would have been serialised as ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\/Date(1293840000000)\\/"')," would now be serialised as ",(0,r.kt)("inlineCode",{parentName:"p"},'"2011-01-01T00:00:00.0000000Z"')," instead. This is entirely agreeable because 1. it's entirely clear what a ",(0,r.kt)("inlineCode",{parentName:"p"},'"2011-01-01T00:00:00.0000000Z"')," style date represents and\n2. this is more in line with native browser JSON implementations and ",(0,r.kt)("inlineCode",{parentName:"p"},"&lt;statingTheObvious&gt;"),"consistency is a good thing.",(0,r.kt)("inlineCode",{parentName:"p"},"&lt;/statingTheObvious&gt;")),(0,r.kt)("h2",{id:"getting-your-web-services-to-use-the-iso-8601-datetime-converter"},"Getting your web services to use the ISO 8601 DateTime Converter"),(0,r.kt)("p",null,"Sebastian alluded in his post to a ",(0,r.kt)("inlineCode",{parentName:"p"},"web.config")," setting that could be used to get web services / pagemethods etc. implementing his custom DateTime serialiser. This is it: ",(0,r.kt)("script",{src:"https://gist.github.com/2489976.js?file=web.config"})),(0,r.kt)("p",null," With this in place your web services / page methods will happily be able to serialise / deserialise ISO style date strings to your hearts content. ## What no ISO 8601 date string Date constructor?"),(0,r.kt)("p",null,"As I mentioned earlier, Sebastian's solution didn't get me 100% of the way there. There was still a fly in the ointment in the form of IE 8. Unfortunately IE 8 doesn't have JavaScript ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/parse"},"Date constructor that takes ISO 8601 date strings"),". This lead me to using Nathan Vonnahme's ISO 8601 JavaScript Date parser, the code of which is below (or see his original post ",(0,r.kt)("a",{parentName:"p",href:"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/"},"here"),"): ",(0,r.kt)("script",{src:"https://gist.github.com/2489976.js?file=parseISO8601Date.js"})),(0,r.kt)("p",null," With this in place I could parse ISO 8601 Dates just like anyone else. Great stuff. ",(0,r.kt)("inlineCode",{parentName:"p"},'parseISO8601Date("2011-01-01T00:00:00.0000000Z")')," would give me a JavaScript Date of ",(0,r.kt)("inlineCode",{parentName:"p"},"Sat Jan 1 00:00:00 UTC 2011"),". Obviously in the fullness of time the parseISO8601Date solution should no longer be necessary because ",(0,r.kt)("a",{parentName:"p",href:"http://es5.github.com/#x15.9.3.2"},"EcmaScript 5 specifies an ISO 8601 date string constructor"),". However, in the interim Nathan's solution is a lifesaver. Thanks again both to Sebastian Markb\xe5ge and Nathan Vonnahme who have both generously allowed me use their work as the basis for this post. ## PS And it would have worked if it wasn't for that pesky IE 9..."),(0,r.kt)("p",null,"Subsequent to writing this post I thought I'd check that IE 9 had implemented a JavaScript Date constructor that would process an ISO 8601 date string like this: ",(0,r.kt)("inlineCode",{parentName:"p"},'new Date("2011-01-01T00:00:00.0000000Z")'),". It hasn't. Take a look: ",(0,r.kt)("img",{src:a(91994).Z})),(0,r.kt)("p",null," This is slightly galling as the above code works dandy in Firefox and Chrome. As you can see from the screenshot you can get the JavaScript IE 9 Date constructor to play nice by trimming off the final 4 \"0\"'s from the string. Frustrating. Obviously we can still use Nathan's solution but it's a shame that we can't use the native support. Based on what I've read ",(0,r.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/az4se3k1.aspx#Roundtrip"},"here")," I think it would be possible to amend Sebastians serializer to fall in line with IE 9's pendantry by changing this: ```cs\nreturn new CustomString(((DateTime)obj).ToUniversalTime()"),(0,r.kt)("p",null,"  .ToString(",(0,r.kt)("b",null,'"O"'),")"),(0,r.kt)("p",null,");"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n To this: ```cs\nreturn new CustomString(((DateTime)obj).ToUniversalTime()\n\n  .ToString(<b>\"yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffzzz\"</b>)\n\n);\n")),(0,r.kt)("p",null," I've held off from doing this myself as I rather like Sebastian's idea of being able to use Microsoft's Round-trip (\"O\", \"o\") Format Specifier. And it seems perverse that we should have to move away from using Microsoft's Round-trip Format Specifier purely because of (Microsoft's) IE! But it's a possibility to consider and so I put it out there. I would hope that MS will improve their JavaScript Date constructor with IE 10. A missed opportunity if they don't I think. ## PPS Just when you thought is over... IE 9 was right!"),(0,r.kt)("p",null,"Sebastian got in contact after I first published this post and generously pointed out that, contrary to my expectation, IE 9 technically had the correct implementation. According to the ",(0,r.kt)("a",{parentName:"p",href:"http://es5.github.com/#x15.9.1.15"},"EMCAScript standard")," the Date constructor should not allow more than millisecond precision. In this case, Chrome and Firefox are being less strict - not more correct. On reflection this does rather make sense as the result of a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify(new Date())"),' never results in an ISO date string to the 10 millionths of a second detail. Sebastian has himself stopped using Microsoft\'s Round-trip ("O", "o") Format Specifier in favour of this format string: ```cs\nreturn new CustomString(((DateTime)obj).ToUniversalTime()'),(0,r.kt)("p",null,"  .ToString(",(0,r.kt)("b",null,'"yyyy-MM-ddTHH:mm:ss.fffZ"'),")"),(0,r.kt)("p",null,");"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n This results in date strings that comply perfectly with the ECMAScript spec. I suspect I'll switch to using this also now. Though I'll probably leave the first part of the post intact as I think the background remains interesting. Thanks again Sebastian!\n")))}u.isMDXComponent=!0},42948:function(e,t,a){t.Z=a.p+"assets/images/FireBug-Dates-0636f61333c7811fd9a8a56078638bb5.png"},91994:function(e,t,a){t.Z=a.p+"assets/images/IE9%2B%2528shakes%2Bfist%2529-fd45569f1f35097a7029f2b79244da80.png"}}]);
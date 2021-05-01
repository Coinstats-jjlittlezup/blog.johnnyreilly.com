(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[14659],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(a),p=o,w=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return a?n.createElement(w,r(r({ref:t},c),{},{components:a})):n.createElement(w,r({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var h=2;h<i;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90846:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=a(22122),o=a(19756),i=(a(67294),a(3905)),r={title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["ajax","jquery","webservice.htc","json","microsoft"],hide_table_of_contents:!1},s={permalink:"/2012/02/05/potted-history-of-using-ajax-on",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-02-05-potted-history-of-using-ajax-on.md",source:"@site/blog/2012-02-05-potted-history-of-using-ajax-on.md",title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",description:"This post originally started out as an explanation of JSON. However as I wrote this quickly got abandoned in favour of writing about how I came to use JSON in the first place - which was through the use of Ajax. Having written a goodly amount I've now decided to move the actual JSON stuff into another post since I think Ajax is probably worth thinking about by itself rather than as an aside. So let me start at the beginning and explain how I came to use Ajax in the first place (this may take some time so please bear with me). In late 2004 I first started working on a project which I was to remain involved with (on and off) for a very long time indeed. The project was part financial reporting system and part sales incentivisation tool; it was used internally in the investment bank in which I was working. The project had been in existence for a number of years and had a web front end which at that point would been built in a combination of HTML, JavaScript, classic ASP and with a Visual Basic 6.0 back end. One of the reasons I had been brought on to the project was to help \".Net-ify\" the thing and migrate it to ASP.NET and C#. I digress. The interesting thing about this app was that there were actually some quite advanced things being done with it (despite the classic ASP / VB). The users could enter trades into the system which represented actual trades that had been entered into a trading system elsewhere in the organisation. These trades would be assigned a reporting value which would be based on their various attributes. (Stay with me people this will get more interesting I \\*promise\\*.) The calculation of the reporting value was quite an in depth process and needed to be performed server-side. However, the users had decreed that it wasn't acceptable to do a full postback to the server to perform this calculation; they wanted it done \"on-the-fly\". Now if you asked me at the time I'd have said \"can't be done\". Fortunately the other people working on the project then weren't nearly so defeatist. Instead they went away and found Microsoft's webservice.htc library. For those of you that don't know this was a JavaScript library that Microsoft came up with to enable the access of Web Services on the client. Given that it was designed to work with IE 5 I suspect it was created between 1999-2001 (but I'm not certain about that). Now it came as a revelation to me but this was a JavaScript library that talked to our web services through the medium of XML. In short it was my first encounter with anything remotely Ajax\\-y. It was exciting! However, the possibilities of what we could do didn't actually become apparent to me for some years. It's worth saying that the way we were using webservice.htc was exceedingly simplistic and rather than investigating further I took the limited ways we were using it as indications of the limitations of Ajax and / or webservice.htc. So for a long time I thought the following: - The only way to pass multiple arguments to a web service was to package up arguments into a single string with delimiters which you could split and unpackage as your first step on the server.",date:"2012-02-05T00:00:00.000Z",formattedDate:"February 5, 2012",tags:[{label:"ajax",permalink:"/tags/ajax"},{label:"jquery",permalink:"/tags/jquery"},{label:"webservice.htc",permalink:"/tags/webservice-htc"},{label:"json",permalink:"/tags/json"},{label:"microsoft",permalink:"/tags/microsoft"}],readingTime:7.255,truncated:!1,prevItem:{title:"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment",permalink:"/2012/02/15/wcf-transport-windows-authentication"},nextItem:{title:"JavaScript - getting to know the beast...",permalink:"/2012/01/30/javascript-getting-to-know-beast"}},l=[],h={toc:l};function c(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'This post originally started out as an explanation of JSON. However as I wrote this quickly got abandoned in favour of writing about how I came to use JSON in the first place - which was through the use of Ajax. Having written a goodly amount I\'ve now decided to move the actual JSON stuff into another post since I think Ajax is probably worth thinking about by itself rather than as an aside. So let me start at the beginning and explain how I came to use Ajax in the first place (this may take some time so please bear with me). In late 2004 I first started working on a project which I was to remain involved with (on and off) for a very long time indeed. The project was part financial reporting system and part sales incentivisation tool; it was used internally in the investment bank in which I was working. The project had been in existence for a number of years and had a web front end which at that point would been built in a combination of HTML, JavaScript, classic ASP and with a Visual Basic 6.0 back end. One of the reasons I had been brought on to the project was to help ".Net-ify" the thing and migrate it to ASP.NET and C#. I digress. The interesting thing about this app was that there were actually some quite advanced things being done with it (despite the classic ASP / VB). The users could enter trades into the system which represented actual trades that had been entered into a trading system elsewhere in the organisation. These trades would be assigned a reporting value which would be based on their various attributes. (Stay with me people this will get more interesting I ',"*",(0,i.kt)("strong",{parentName:"p"},"promise"),"*",".) The calculation of the reporting value was quite an in depth process and needed to be performed server-side. However, the users had decreed that it wasn't acceptable to do a full postback to the server to perform this calculation; they wanted it done \"on-the-fly\". Now if you asked me at the time I'd have said \"can't be done\". Fortunately the other people working on the project then weren't nearly so defeatist. Instead they went away and found Microsoft's ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/ie/ms531033%28v=vs.85%29.aspx"},"webservice.htc")," library. For those of you that don't know this was a JavaScript library that Microsoft came up with to enable the access of Web Services on the client. Given that it was designed to work with IE 5 I suspect it was created between 1999-2001 (but I'm not certain about that). Now it came as a revelation to me but this was a JavaScript library that talked to our web services through the medium of XML. In short it was my first encounter with anything remotely ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Ajax_(programming)"},"Ajax"),"-","y. It was exciting! However, the possibilities of what we could do didn't actually become apparent to me for some years. It's worth saying that the way we were using webservice.htc was exceedingly simplistic and rather than investigating further I took the limited ways we were using it as indications of the limitations of Ajax and / or webservice.htc. So for a long time I thought the following: - The only way to pass multiple arguments to a web service was to package up arguments into a single string with delimiters which you could ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Comparison_of_programming_languages_(string_functions)#split"},"split")," and unpackage as your first step on the server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The only valid return type was a single string. And so if you wanted to return a number of numeric values (as we did) the only way to do this was to package up return values into a very long string with delimiters in and (you guessed it!) ",(0,i.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Comparison_of_programming_languages_(string_functions)#split"},"split")," and unpackage as your first step on the client."),(0,i.kt)("li",{parentName:"ul"},"The only thing that you could (or would want to) send back and forth between client and server was XML")),(0,i.kt)("p",null," So to recap, I'm now aware that it's possible for JavaScript to interact with the server through the use of web services. It's possible, but ugly, not that quick and requires an awful lot of manual serialization / deserialization operations. It's clearly powerful but not much fun at all. And that's where I left it for a number of years. Let's fade to black... It's now 2007 and Microsoft have released ASP.NET Ajax, the details of which are well explained in this ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/magazine/cc163499.aspx"},"article")," (which I have only recently discovered). Now I'm always interested in \"the new\" and so I was naturally interested in this. Just to be completely upfront about this I should confess that when I first discovered ASP.NET Ajax I didn't clock the power of it at all. Initially I just switched over from using webservice.htc to ASP.NET Ajax. This alone gave us a ","*",(0,i.kt)("strong",{parentName:"p"},"massive"),"*",' performance improvement (I know it was massive since we actually received a "well done" email from our users which is testament to the difference it was making to their experience of the system). But we were still performing our manual serialisation / deserialisation of values on the client and the server. ie. Using Ajax was now much faster but still not too much fun. Let\'s jump forward in time again to around 2010 to the point in time when I was discovering jQuery and that JavaScript wasn\'t actually evil. It\'s not unusual for me to play around with "what if" scenarios in my code, just to see what might might be possible. Sometimes I discover things. So it was with JSON. We had a web service in the system that allowed us to look up a counterparty (ie a bank account) with an identifier. Once we looked it up we packaged up the counterparty details (eg name, location etc) into a big long string with delimiters and sent it back to client. One day I decided to change the return type on the web service from a string to the actual counterparty class. So we went from something like this: ```cs\n','[WebService(Namespace = "http://tempuri.org/")][WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]',"\n","[ScriptService]","\npublic class CounterpartyWebService : System.Web.Services.WebService\n{\n","[WebMethod]",'\npublic string GetCounterparty(string parameters)\n{\nstring[] aParameters = parameters.Split("|");\nint counterpartyId = int.Parse(aParameters',"[0]",");\nbool includeLocation = (aParameters","[1]",' == "1");\nCounterparty counterparty = _counterpartyDb\n.GetCounterparty(counterpartyId);'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'string returnValue = counterparty.Id + \n                   "|" + counterparty.Name + \n                   (includeLocation\n                     ? "|" + counterparty.Location \n                     : "");\n\nreturn returnValue;\n')),(0,i.kt)("p",null,"  }\n}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nTo something like this: ```cs\n[WebMethod]\npublic Counterparty GetCounterparty(string parameters)\n{\n  string[] aParameters = parameters.Split("|");\n  int counterpartyId = int.Parse(aParameters[0]);\n  bool includeLocation = (aParameters[1] == "1");\n  Counterparty counterparty = _counterpartyDb\n    .GetCounterparty(counterpartyId);\n\n  return counterparty;\n}\n')),(0,i.kt)("p",null,"I genuinely expected that this was just going to break. It didn't. Suddenly on the client I'm sat there with a full blown object that looks just like the object I had on the server. ",(0,i.kt)("strong",{parentName:"p"},"WHAT BLACK MAGIC COULD THIS BE??????????")," Certain that I'd discovered witchcraft I decided to try something else. What would happen if I changed the signature on the method so it received individual parameters and passed my individual parameters to the web service instead of packaging them up into a string? I tried this: ```cs\n","[WebMethod]","\npublic Counterparty GetCounterparty(int counterpartyId,\nbool includeLocation)\n{\nCounterparty counterparty = _counterpartyDb\n.GetCounterparty(counterpartyId);"),(0,i.kt)("p",null,"  return counterparty;\n}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nAnd it worked! **[IT WORKED!!!!!!!!!!!!!!!!!!!!!](<http://www.youtube.com/watch?v=N_dWpCy8rdc&feature=related>)** (And yes I know I wasn't actually using the includeLocation parameter - but the point was it was being passed to the server and I could have used it if I'd wanted to.) I couldn't believe it. For **years** I'd been using Ajax and without **any** idea of the power available to me. The ignorance! The stupidity of the man! To my complete surprise it turned out that: - Ajax could be quick! ASP.NET Ajax was lightening fast when compared to webservice.htc\n- You could send multiple arguments to a web service without all that packaging nonsense\n- You could return complex objects without the need for packaging it all up yourself.\n\n\x3c!-- --\x3e\n\n Essentially the source of all this goodness was the magic of JSON. I wouldn't really come to comprehend this until I moved away from using the ASP.NET Ajax client libraries in favour of using the [jQuery.ajax](<http://api.jquery.com/jQuery.ajax/>) functionality. (Yes, having mostly rattled on about using webservice.htc and ASP.NET Ajax I should clarify that I have now forsaken both for jQuery as I find it more powerful and more configurable - but it's the journey that counts I guess!) It's abysmal that I didn't discover the power of Ajax sooner but the difference this discovery made to me was immense. Approaches that I would have dismissed or shied away from previously because of the amount of \"plumbing\" involved now became easy. This massively contributed to my [programmer joy](<http://www.hanselman.com/blog/HanselminutesPodcast260NETAPIDesignThatOptimizesForProgrammerJoyWithJonathanCarter.aspx>)! Next time I promise I'll aim to actually get onto JSON.\n")))}c.isMDXComponent=!0}}]);
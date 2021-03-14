(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{1161:function(e,t,o){"use strict";o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return u}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(o),m=n,u=h["".concat(r,".").concat(m)]||h[m]||d[m]||i;return o?a.a.createElement(u,l(l({ref:t},p),{},{components:o})):a.a.createElement(u,l({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=o[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},122:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return c}));var n=o(3),a=o(8),i=(o(0),o(1161)),r={title:"Getting up to speed with Bloomberg's Open API...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[".NET","c#","Bloomberg","Open API"],hide_table_of_contents:!1},l={permalink:"/2012/11/13/a-nicer-net-api-for-bloombergs-open-api",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-11-13-a-nicer-net-api-for-bloombergs-open-api.md",source:"@site/blog/2012-11-13-a-nicer-net-api-for-bloombergs-open-api.md",description:"A good portion of any devs life is usually spent playing with APIs. If you need to integrate some other system into the system you're working on (and it's rare to come upon a situation where this doesn't happen at some point) then it's API time.",date:"2012-11-13T00:00:00.000Z",formattedDate:"November 13, 2012",tags:[{label:".NET",permalink:"/tags/net"},{label:"c#",permalink:"/tags/c"},{label:"Bloomberg",permalink:"/tags/bloomberg"},{label:"Open API",permalink:"/tags/open-api"}],title:"Getting up to speed with Bloomberg's Open API...",readingTime:5.685,truncated:!1,prevItem:{title:"HTML to PDF using a WCF Service",permalink:"/2013/01/03/html-to-pdf-using-wcf-service"},nextItem:{title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",permalink:"/2012/11/02/xsdxml-schema-generator-xsdexe-taking"}},s=[{value:"Research",id:"research",children:[]},{value:"Hello World?",id:"hello-world",children:[]},{value:"He&#39;s the Bloomberg, I&#39;m the Wrapper",id:"hes-the-bloomberg-im-the-wrapper",children:[]},{value:"Update (07/12/2012)",id:"update-07122012",children:[]},{value:"Note to self (because I keep forgetting)",id:"note-to-self-because-i-keep-forgetting",children:[]}],p={toc:s};function c(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A good portion of any devs life is usually spent playing with APIs. If you need to integrate some other system into the system you're working on (and it's rare to come upon a situation where this doesn't happen at some point) then it's API time."),Object(i.b)("p",null," Some APIs are well documented and nice to use. Some aren't. I recently spent a goodly period of time investigating ",Object(i.b)("a",{parentName:"p",href:"http://www.openbloomberg.com/open-api/"},"Bloomberg's Open API")," and it was a slightly painful experience. So much so that I thought it best to write up my own experiences and maybe I can save others time and a bit of pain."),Object(i.b)("p",null,"Also, as I investigated the Bloomberg Open API I found myself coming up with my own little mini-C#-API. (It's generally a sure sign you've found an API you don't love if you end up writing your own wrapper.) This mini API did the heavy lifting for me and just handed back nicely structured data to deal with. I have included this wrapper here as well."),Object(i.b)("h2",{id:"research"},"Research"),Object(i.b)("p",null,"The initial plan was to, through code, extract Libor and Euribor rates from Bloomberg. I had access to a Bloomberg terminal and I had access to the internet - what could stop me? After digging around for a little while I found some useful resources that could be accessed from the Bloomberg terminal:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Typing \u201c",Object(i.b)("inlineCode",{parentName:"li"},"WAPI&lt;GO&gt;"),"\u201d into Bloomberg lead me to the Bloomberg API documentation."),Object(i.b)("li",{parentName:"ol"},"Typing \u201c",Object(i.b)("inlineCode",{parentName:"li"},"DOCS 2055451&lt;GO&gt;"),"\u201d into Bloomberg (I know - it's a bit cryptic) provided me with samples of how to use the Bloomberg API in VBA")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-mZxP0-jXRIo/UKJ8y8Gs5AI/AAAAAAAAAW0/qNyIN9hGBiQ/s400/bloombergwapidocumentation.gif",alt:null})),Object(i.b)("p",null,"To go with this I found some useful documentation of the Bloomberg Open API ",Object(i.b)("a",{parentName:"p",href:"http://www.openbloomberg.com/files/2012/10/blpapi-developers-guide.pdf"},"here")," and I found the .NET Bloomberg Open API itself ",Object(i.b)("a",{parentName:"p",href:"http://www.openbloomberg.com/open-api/"},"here"),"."),Object(i.b)("h2",{id:"hello-world"},"Hello World?"),Object(i.b)("p",null,"The first goal when getting up to speed with an API is getting it to do something. Anything. Just stick a fork into it and see if it croaks. Sticking a fork into Open API was achieved by taking the 30-odd example apps included in the Bloomberg Open API and running each in turn on the Bloomberg box until I had my \"he's alive!!\" moment. (I did find it surprising that not all of the examples worked - I don't know if there's a good reason for this...)"),Object(i.b)("p",null,"However, when I tried to write my own C# console application to interrogate the Open API it wasn't as plain sailing as I'd hoped. I'd write something that looked correct, compiled successfully and deploy it onto the Bloomberg terminal only to have it die a sad death whenever I tried to fire it off."),Object(i.b)("p",null,"I generally find the fastest way to get up and running with an API is to debug it. To make calls to the API and then examine, field by field and method by method, what is actually there. This wasn't really an option with my console app though. I was using a shared Bloomberg terminal with very limited access. No Visual Studio on the box and no remote debugging enabled."),Object(i.b)("p",null,"It was then that I had something of a eureka moment. I realised that the code in the VBA samples I'd downloaded from Bloomberg looked quite similar to the C# code samples that shipped with Open API. Hmmmm.... Shortly after this I found myself sat at the Bloomberg machine debugging the Bloomberg API using the VBA IDE in Excel. (For the record, these debugging tools are aren't too bad at all - they're nowhere near as slick as their VS counterparts but they do the job.) This was my ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Rosetta_Stone"},"Rosetta Stone")," ","-"," I could take what I'd learned from the VBA samples and translate that into equivalent C# / .NET code (bearing in mind what I'd learned from debugging in Excel and in fact sometimes bringing along the VBA comments themselves if they provided some useful insight)."),Object(i.b)("h2",{id:"hes-the-bloomberg-im-the-wrapper"},"He's the Bloomberg, I'm the Wrapper"),Object(i.b)("p",null,"So I'm off and romping... I have something that works. Hallelujah! Now that that hurdle had been crossed I found myself examining the actual Bloomberg API code itself. It functioned just fine but it did a couple of things that I wasn't too keen on:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The Bloomberg API came with custom data types. I didn't want to use these unless it was absolutely necessary - I just wanted to stick to the standard .NET types. This way if I needed to hand data onto another application I wouldn't be making each of these applications dependant on the Bloomberg Open API."),Object(i.b)("li",{parentName:"ol"},"To get the data out of the Bloomberg API there was an awful lot of boilerplate. Code which handled the possibilities of very large responses that might be split into several packages. Code which walked the element tree returned from Bloomberg parsing out the data. It wasn't a beacon of simplicity.")),Object(i.b)("p",null,'I wanted an API that I could simply invoke with security codes and required fields. And in return I wanted to be passed nicely structured data. As I\'ve already mentioned a desire to not introduce unnecessary dependencies I thought it might well suit to make use of nested Dictionaries. I came up with a simple C# Console project / application which had a reference to the Bloomberg Open API. It contained the following class; essentially my wrapper for Open API operations: (please note this is deliberately a very "bare-bones" implementation)'),Object(i.b)("script",{src:"https://gist.github.com/4065815.js?file=BloombergApi.cs"}),Object(i.b)("p",null,"The project also contained this class which demonstrates how I made use of my wrapper:"),Object(i.b)("script",{src:"https://gist.github.com/4065815.js?file=NicerBloombergApiDemo.cs"}),Object(i.b)("p",null,"And here's what the output looked like:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-1ghUYqbl0AE/UKJ_3vsuKqI/AAAAAAAAAXI/pPKR5dup48U/s400/Bloomberg.png",alt:null})),Object(i.b)("p",null,"This covered my bases. It was simple, it was easy to consume and it didn't require any custom types. My mini-API is only really catering for my own needs (unsurprisingly). However, there's lots more to the Bloomberg Open API and I may end up taking this further in the future if I encounter use cases that my current API doesn't cover."),Object(i.b)("h2",{id:"update-07122012"},"Update (07/12/2012)"),Object(i.b)("p",null,"Finally, a PS. I found in the ",Object(i.b)("a",{parentName:"p",href:"http://www.openbloomberg.com/faq/"},"Open API FAQs")," that ",Object(i.b)("em",{parentName:"p"},'"Testing any of that functionality currently requires a valid Bloomberg Desktop API (DAPI), Server API (SAPI) or Managed B-Pipe subscription. Bloomberg is planning on releasing a stand-alone simulator which will not require a subscription."')," There isn't any word yet on this stand-alone simulator. I emailed Bloomberg at ",Object(i.b)("a",{parentName:"p",href:"mailto:open-tech@bloomberg.net"},"open-tech@bloomberg.net")," to ask about this. They kindly replied that ",Object(i.b)("em",{parentName:"p"},'"Unfortunately it is not yet available. We understand that this makes testing API applications somewhat impractical, so we\'re continuing to work on this tool."')," Fingers crossed for something we can test soon!"),Object(i.b)("h2",{id:"note-to-self-because-i-keep-forgetting"},"Note to self (because I keep forgetting)"),Object(i.b)("p",null,"If you're looking to investigate what data is available about a security in Bloomberg it's worth typing \u201c",Object(i.b)("inlineCode",{parentName:"p"},"FLDS&lt;GO&gt;"),"\u201d into Bloomberg. This is the Bloomberg Fields Finder. Likewise, if you're trying to find a security you could try typing \u201c",Object(i.b)("inlineCode",{parentName:"p"},"SECF&lt;GO&gt;"),"\u201d into Bloomberg as this is the Security Finder."))}c.isMDXComponent=!0}}]);
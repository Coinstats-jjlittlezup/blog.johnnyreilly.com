(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(966)),r={title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Xsd.exe","XSD/XML Schema Generator","LINQ to XML"],hide_table_of_contents:!1},s={permalink:"/2012/11/02/xsdxml-schema-generator-xsdexe-taking",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-11-02-xsdxml-schema-generator-xsdexe-taking.md",source:"@site/blog/2012-11-02-xsdxml-schema-generator-xsdexe-taking.md",description:"Is it 2003 again?!?",date:"2012-11-02T00:00:00.000Z",tags:[{label:"Xsd.exe",permalink:"/tags/xsd-exe"},{label:"XSD/XML Schema Generator",permalink:"/tags/xsd-xml-schema-generator"},{label:"LINQ to XML",permalink:"/tags/linq-to-xml"}],title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",readingTime:5.92,truncated:!1,prevItem:{title:"Getting up to speed with Bloomberg's Open API...",permalink:"/2012/11/13/a-nicer-net-api-for-bloombergs-open-api"},nextItem:{title:"MVC 3 meet Dictionary",permalink:"/2012/10/22/mvc-3-meet-dictionary"}},l=[{value:"Is it 2003 again?!?",id:"is-it-2003-again",children:[]},{value:"To the XML Batman!",id:"to-the-xml-batman",children:[]},{value:"We Don&#39;t Need No Validation...",id:"we-dont-need-no-validation",children:[]},{value:"Tools of the Trade",id:"tools-of-the-trade",children:[]},{value:"Justify Your Actions",id:"justify-your-actions",children:[]},{value:"Serialization / Deserialization Helper",id:"serialization--deserialization-helper",children:[]},{value:"Update - using Xsd.exe to generate XSD from XML",id:"update---using-xsdexe-to-generate-xsd-from-xml",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"is-it-2003-again"},"Is it 2003 again?!?"),Object(i.b)("p",null," I've just discovered Xsd.exe. It's not new. Or shiny. And in fact it's been around since .NET 1.1. Truth be told, I've been aware of it for years but up until now I've not had need of it. But now now I've investigated it a bit I've found that it, combined with the XSD/XML Schema Generator can make for a nice tool to add to the utility belt."),Object(i.b)("p",null,"Granted XML has long since stopped being sexy. But if you need it, as I did recently, then this is for you."),Object(i.b)("h2",{id:"to-the-xml-batman"},"To the XML Batman!"),Object(i.b)("p",null,"Now XML is nothing new to me (or I imagine anyone who's been developing within the last 10 years). But most of the time when I use XML I'm barely aware that it's going on - by and large it's XML doing the heavy lifting underneath my web services. But the glory of this situation is, I never have to think about it. It just works. All I have to deal with are nice strongly typed objects which makes writing robust code a doddle."),Object(i.b)("p",null,"I recently came upon a situation where I was working with XML in the raw; that is to say strings. I was going to be supplied with strings of XML which would represent various objects. It would be my job to take the supplied XML, extract out the data I needed and proceed accordingly."),Object(i.b)("h2",{id:"we-dont-need-no-validation"},"We Don't Need No Validation..."),Object(i.b)("p",null,"I lied!"),Object(i.b)("p",null,"In order to write something reliable I needed to be able to validate that the supplied XML was as I expected. So, ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/XML_Schema_(W3C)"},"XSD")," time. If you're familiar with XML then you're probably equally familar with XSD which, to quote Wikipedia ",Object(i.b)("em",{parentName:"p"},"\"can be used to express a set of rules to which an XML document must conform in order to be considered 'valid'\""),"."),Object(i.b)("p",null,"Now I've written my fair share of XSDs over the years and I've generally found it a slightly tedious exercise. So I was delighted to discover an online tool to simplify the task. It's called the ",Object(i.b)("a",{parentName:"p",href:"http://www.freeformatter.com/xsd-generator.html"},"XSD/XML Schema Generator"),". What this marvellous tool does is allow you to enter an example of your XML which it then uses to reverse engineer an XSD."),Object(i.b)("p",null,"Here's an example. I plugged in this:"),Object(i.b)("script",{src:"https://gist.github.com/4000326.js?file=contact.xml"}),Object(i.b)("p",null,"And pulled out this:"),Object(i.b)("script",{src:"https://gist.github.com/4000326.js?file=contact.xsd"}),Object(i.b)("p",null,"Fantastic! It doesn't matter if the tool gets something slightly wrong; you can tweak the generated XSD to your hearts content. This is great because it does the hard work for you, allowing you to step back, mop your brow and then heartily approve the results. This tool is a labour saving device. Put simply, it's a dishwasher."),Object(i.b)("h2",{id:"tools-of-the-trade"},"Tools of the Trade"),Object(i.b)("p",null,"How to get to the actual data? I was initially planning to break out the ",Object(i.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.xml.linq.xdocument(v=vs.100).aspx"},Object(i.b)("inlineCode",{parentName:"a"},"XDocument")),", plug in my XSD and use the ",Object(i.b)("inlineCode",{parentName:"p"},"Validate")," method. Which would do the job just dandy."),Object(i.b)("p",null,"However I resisted. As much as I like LINQ to XML I turned to use ",Object(i.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/x6c1kb0s(v=vs.100).aspx"},"Xsd.exe")," instead. As I've mentioned, this tool is as old as the hills. But there's gold in them thar hills, listen: ",Object(i.b)("em",{parentName:"p"},'"The XML Schema Definition (Xsd.exe) tool generates XML schema or common language runtime classes from XDR, XML, and XSD files, or from classes in a runtime assembly."')),Object(i.b)("p",null,"Excited? Thought not. But what this means is we can hurl our XSD at this tool and it will toss back a nicely formatted C# class for me to use. Good stuff! So how's it done? Well MSDN is roughly as informative as it ever is (which is to say, not terribly) but fortunately there's not a great deal to it. You fire up the Visual Studio Command Prompt (and I advise doing this in Administrator mode to escape permissions pain). Then you enter a command to generate your class. Here's an example using the Contact.xsd file we generated earlier:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'xsd.exe "C:\\\\Contact.xsd" /classes /out:"C:\\\\" /namespace:"MyNameSpace"'),"Generation looks like this:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-TR-eaxshZo8/UJPclxs8JjI/AAAAAAAAAWg/TNKZuyi-8NU/s400/XsdInAction.png",alt:null})),Object(i.b)("p",null,"And you're left with the lovely Contact.cs class:"),Object(i.b)("script",{src:"https://gist.github.com/4000326.js?file=Contact.cs"}),Object(i.b)("h2",{id:"justify-your-actions"},"Justify Your Actions"),Object(i.b)("p",null,"But why is this good stuff? Indeed why is this more interesting than the newer, and hence obviously cooler, LINQ to XML? Well for my money it's the following reasons that are important:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Intellisense - I have always loved this. Call me lazy but I think intellisense frees up the mind to think about what problem you're actually trying to solve. Xsd.exe's generated classes give me that; I don't need to hold the whole data structure in my head as I code."),Object(i.b)("li",{parentName:"ol"},"Terse code - I'm passionate about less code. I think that a noble aim in software development is to write as little code as possible in order to achieve your aims. I say this as generally I have found that writing a minimal amount of code expresses the intention of the code in a far clearer fashion. In service of that aim Xsd.exe's generated classes allow me to write less code than would be required with LINQ to XML."),Object(i.b)("li",{parentName:"ol"},'To quote Scott Hanselman "',Object(i.b)("a",{parentName:"li",href:"http://www.hanselman.com/blog/NuGetPackageOfTheWeek6DynamicMalleableEnjoyableExpandoObjectsWithClay.aspx"},"successful compilation is just the first unit test"),"\". That it is but it's a doozy. If I'm making changes to the code and I've been using LINQ to XML I'm not going to see the benefits of strong typing that I would with Xsd.exe's generated classes. I like learning if I've broken the build sooner rather than later; strong typing gives me that safety net.")),Object(i.b)("h2",{id:"serialization--deserialization-helper"},"Serialization / Deserialization Helper"),Object(i.b)("p",null,"As you read this you're no doubt thinking \"but wait he's shown us how to create XSDs from XML and classes from XSDs but how do we take XML and turn it into objects? And how do we turn those objects back into XML?\""),Object(i.b)("p",null,"See how I read your mind just there? It's a gift. Well, I've written a little static helper class for the very purpose:"),Object(i.b)("script",{src:"https://gist.github.com/4000326.js?file=XmlConverter.cs"}),Object(i.b)("p",null,"And here's an example of how to use it:"),Object(i.b)("script",{src:"https://gist.github.com/4000326.js?file=XmlConverterUsage.cs"}),Object(i.b)("p",null,"I was tempted to name my methods in tribute to Crockford's JSON (namely ",Object(i.b)("inlineCode",{parentName:"p"},"ToXML")," becoming ",Object(i.b)("inlineCode",{parentName:"p"},"stringify")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ToObject")," becoming ",Object(i.b)("inlineCode",{parentName:"p"},"parse"),"). Maybe later."),Object(i.b)("p",null,"And that's us done. Whilst it's no doubt unfashionable I think that this is a very useful approach indeed and I commend it to the interweb!"),Object(i.b)("h2",{id:"update---using-xsdexe-to-generate-xsd-from-xml"},"Update - using Xsd.exe to generate XSD from XML"),Object(i.b)("p",null,"I was chatting to a friend about this blog post and he mentioned that you can actually use Xsd.exe to generate XSD files from XML as well. He's quite right - this feature does exist. To go back to our example from earlier we can execute the following command:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'xsd.exe "C:\\\\Contact.xml" /out:"C:\\\\" '),"And this will generate the following file:"),Object(i.b)("script",{src:"https://gist.github.com/4000326.js?file=Generated by XSD contact.xsd"}),Object(i.b)("p",null,"However, the XSD generated above is very much a \"Microsoft XSD\"; it's an XSD which features MS properties and so on. It's fine but I think that generally I prefer my XSDs to be as vanilla as possible. To that end I'm likely to stick to using the XSD/XML Schema Generator as it doesn't appear to be possible to get Xsd.exe to generate \"vanilla XSD\"."),Object(i.b)("p",null,"Thanks to Ajay for bringing it to my attention though."))}d.isMDXComponent=!0},966:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),b=a,m=h["".concat(r,".").concat(b)]||h[b]||u[b]||i;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
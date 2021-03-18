(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||a;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(8),a=(n(0),n(1170)),i={title:"Making PDFs from HTML in C# using WKHTMLtoPDF",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["wkhtmltopdf","webkit","c#","html","pdf"],hide_table_of_contents:!1},s={permalink:"/2012/04/05/making-pdfs-from-html-in-c-using",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-04-05-making-pdfs-from-html-in-c-using.md",source:"@site/blog/2012-04-05-making-pdfs-from-html-in-c-using.md",description:"Update 03/01/2013",date:"2012-04-05T00:00:00.000Z",formattedDate:"April 5, 2012",tags:[{label:"wkhtmltopdf",permalink:"/tags/wkhtmltopdf"},{label:"webkit",permalink:"/tags/webkit"},{label:"c#",permalink:"/tags/c"},{label:"html",permalink:"/tags/html"},{label:"pdf",permalink:"/tags/pdf"}],title:"Making PDFs from HTML in C# using WKHTMLtoPDF",readingTime:6.845,truncated:!1,prevItem:{title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",permalink:"/2012/04/16/simple-technique-for-initialising"},nextItem:{title:"WCF - moving from Config to Code, a simple WCF service harness (plus implementing your own Authorization)",permalink:"/2012/03/22/wcf-moving-from-config-to-code-simple"}},l=[{value:"Update 03/01/2013",id:"update-03012013",children:[]},{value:"Making PDFs from HTML",id:"making-pdfs-from-html",children:[]}],p={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"update-03012013"},"Update 03/01/2013"),Object(a.b)("p",null," I've written a subsequent post which builds on the work of this original post. The new post exposes this functionality via a WCF service and can be found ",Object(a.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2013/01/html-to-pdf-using-wcf-service.html"},"here"),"."),Object(a.b)("h2",{id:"making-pdfs-from-html"},"Making PDFs from HTML"),Object(a.b)("p",null,"I wanted to talk about an approach I've discovered for making PDFs directly from HTML. I realise that in these wild and crazy days of ",Object(a.b)("a",{parentName:"p",href:"http://mozilla.github.com/pdf.js/"},"PDF.js"),' and the like that techniques like this must seem very old hat. That said, this technique works and more importantly it solves a problem I was faced with but without forcing the users to move the "newest hottest version of X". Much as many of would love to solve problems this way, alas many corporations move slower than that and in the meantime we still have to deliver - we still have to meet requirements. Rather than just say "I did this" I thought I\'d record how I got to this point in the first place. I don\'t know about you but I find the reasoning behind why different technical decisions get made quite an interesting topic...'),Object(a.b)("p",null,'For some time I\'ve been developing / supporting an application which is used in an intranet environment where the company mandated browser is still IE 6. It was a requirement that there be "print" functionality in this application. As is well known (even by Microsoft themselves) the print functionality in IE 6 was never fantastic. But the requirement for usable printouts remained.'),Object(a.b)("p",null,'The developers working on the system before me decided to leverage Crystal Reports (remember that?). Essentially there was a reporting component to the application at the time which created custom reports using Crystal and rendered them to the user in the form of PDFs (which have been eminently printable for as long as I care to remember). One of the developers working on the system realised that it would be perfectly possible to create some "reports" within Crystal which were really "print to PDF" screens for the app.'),Object(a.b)("p",null,"It worked well and this solution stayed in place for a very long time. However, some years down the line the Crystal Reports was discarded as the reporting mechanism for the app. But we were unable to decommission Crystal entirely because we still needed it for printing."),Object(a.b)("p",null,"I'd never really liked the Crystal solution for a number of reasons:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"We needed custom stored procs to drive the Crystal print screens which were near duplicates of the main app procs. This duplication of effort never felt right."),Object(a.b)("li",{parentName:"ol"},"We had to switch IDEs whenever we were maintaining our print screens. And the Crystal IDE is not a joy to use."),Object(a.b)("li",{parentName:"ol"},"Perhaps most importantly, for certain users we needed to hide bits of information from the print. The version of Crystal we were using did not make the dynamic customisation of our print screens a straightforward proposition. (In its defence we weren't really using it for what it was designed for.) As a result the developers before me had ended up creating various versions of each print screen revealing different levels of information. As you can imagine, this meant that the effort involved in making changes to the print screens had increased exponentially")),Object(a.b)("p",null,"It occurred to me that it would be good if we could find some way of generating our own PDF reports without using Crystal that would be a step forward. It was shortly after this that I happened upon ",Object(a.b)("a",{parentName:"p",href:"http://code.google.com/p/wkhtmltopdf/"},"WKHTMLtoPDF"),". This is an open source project which describes itself as a ",Object(a.b)("em",{parentName:"p"},'"Simple shell utility to convert html to pdf using the webkit rendering engine, and qt."')," I tested it out on various websites and it worked. It wasn't by any stretch of the imagination a perfect HTML to PDF tool but the quality it produced greatly outstripped the presentation currently in place via Crystal."),Object(a.b)("p",null,"This was just the ticket. Using WKHTMLtoPDF I could have simple web pages in the application which could be piped into WKHTMLtoPDF to make a PDF as needed. It could be dynamic - because ASP.NET is dynamic. We wouldn't need to write and maintain custom stored procs anymore. And happily we would no longer need to use Crystal."),Object(a.b)("p",null,"Before we could rid ourselves of Crystal though, I needed a way that I could generate these PDFs on the fly within the website. For this I ended up writing a simple wrapper class for WKHTMLtoPDF which could be used to invoke it on the fly. In fact a good portion of this was derived from various contributions on ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/q/1331926"},"a post on StackOverflow"),". It ended up looking like this:"),Object(a.b)("script",{src:"https://gist.github.com/2341776.js?file=PdfGenerator.cs"}),Object(a.b)("p",null,"With this wrapper I could pass in URLs and extract out PDFs. Here's a couple of examples of me doing just that:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'//Create PDF from a single URL\n    var pdfUrl = PdfGenerator.HtmlToPdf(pdfOutputLocation: "~/PDFs/",\n        outputFilenamePrefix: "GeneratedPDF",\n        urls: new string[] { "http://news.bbc.co.uk" });\n\n    //Create PDF from multiple URLs\n    var pdfUrl = PdfGenerator.HtmlToPdf(pdfOutputLocation: "~/PDFs/",\n        outputFilenamePrefix: "GeneratedPDF",\n        urls: new string[] { "http://www.google.co.uk", "http://news.bbc.co.uk" });\n')),Object(a.b)("p",null,"As you can see from the second example above it's possible to pipe a number of URLs into the wrapper all to be rendered to a single PDF. Most of the time this was surplus to our requirements but it's good to know it's possible. Take a look at the BBC website PDF generated by the first example:"),Object(a.b)("iframe",{src:"https://docs.google.com/file/d/0B87K8-qxOZGFYktEWGtXRXJSSS1ZWFR4emFfMmVxZw/preview",width:"500",height:"500"}),Object(a.b)("p",null,"Pretty good, no? As you can see it's not perfect from looking at the titles (bit squashed) but I deliberately picked a more complicated page to show what WKHTMLtoPDF was capable of. The print screens I had in mind to build would be significantly simpler than this."),Object(a.b)("p",null,'Once this was in place I was able to scrap the Crystal solution. It was replaced with a couple of "print to PDF" ASPXs in the main web app which would be customised when rendering to hide the relevant bits of data from the user. These ASPXs would be piped into the HtmlToPdf method as needed and then the user would be redirected to that PDF. If for some reason the PDF failed to render the users would see the straight "print to PDF" ASPX - just not as a PDF if you see what I mean. I should say that it was pretty rare for a PDF to not render but this was my failsafe.'),Object(a.b)("p",null,"This new solution had a number of upsides from our perspective:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Development maintenance time (and consequently cost for our customers) for print screens was significantly reduced. This was due to the print screens being part of the main web app. This meant they shared styling etc with all the other web screens and the dynamic nature of ASP.NET made customising a screen on the fly simplicity itself."),Object(a.b)("li",{parentName:"ul"},"We were now able to regionalise our print screens for the users in the same way as we did with our main web app. This just wasn't realistic with the Crystal solution because of the amount of work involved."),Object(a.b)("li",{parentName:"ul"},"I guess this is kind of a ",Object(a.b)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"DRY")," solution :-)")),Object(a.b)("p",null,"You can easily make use of the above approach yourself. All you need do is download and install ",Object(a.b)("a",{parentName:"p",href:"http://code.google.com/p/wkhtmltopdf/"},"WKHTMLtoPDF")," on your machine. I advise using version 0.9.9 as the later release candidates appear slightly buggy at present."),Object(a.b)("p",null,"Couple of gotchas:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Make sure that you pass the correct installation path to the HtmlToPdf method if you installed it anywhere other than the default location. You'll see that the class assumes the default if it wasn't passed"),Object(a.b)("li",{parentName:"ol"},"Ensure that Read and Execute rights are granted to the wkhtmltopdf folder for the relevant process"),Object(a.b)("li",{parentName:"ol"},"Ensure that Write rights are granted for the location you want to create your PDFs for the relevant process")),Object(a.b)("p",null,"In our situation we are are invoking this directly in our web application on demand. I have no idea how this would scale - perhaps not well. This is not really an issue for us as our user base is fairly small and this functionality isn't called excessively. I think if this was used much more than it is I'd be tempted to hive off this functionality into a separate app. But this works just dandy for now."))}c.isMDXComponent=!0}}]);
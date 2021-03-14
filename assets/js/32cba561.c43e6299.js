(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1160:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=h(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),d=n,u=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return a?o.a.createElement(u,l(l({ref:t},c),{},{components:a})):o.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},291:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a(3),o=a(8),r=(a(0),a(1160)),i={title:"HTML to PDF using a WCF Service",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["wkhtmltopdf","html","WCF","pdf"],hide_table_of_contents:!1},l={permalink:"/2013/01/03/html-to-pdf-using-wcf-service",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-01-03-html-to-pdf-using-wcf-service.md",source:"@site/blog/2013-01-03-html-to-pdf-using-wcf-service.md",description:'TL; DR - "Talk is cheap. Show me the code."',date:"2013-01-03T00:00:00.000Z",formattedDate:"January 3, 2013",tags:[{label:"wkhtmltopdf",permalink:"/tags/wkhtmltopdf"},{label:"html",permalink:"/tags/html"},{label:"WCF",permalink:"/tags/wcf"},{label:"pdf",permalink:"/tags/pdf"}],title:"HTML to PDF using a WCF Service",readingTime:3.255,truncated:!1,prevItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker",permalink:"/2013/01/09/twitterbootstrapmvc4-meet-bootstrap"},nextItem:{title:"Getting up to speed with Bloomberg's Open API...",permalink:"/2012/11/13/a-nicer-net-api-for-bloombergs-open-api"}},s=[{value:"TL; DR - &quot;Talk is cheap. Show me the code.&quot;",id:"tl-dr---talk-is-cheap-show-me-the-code",children:[]},{value:"A little more detail",id:"a-little-more-detail",children:[]},{value:"That which binds us",id:"that-which-binds-us",children:[]},{value:"Good behaviour",id:"good-behaviour",children:[]},{value:"Test Harness",id:"test-harness",children:[]}],c={toc:s};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tl-dr---talk-is-cheap-show-me-the-code"},'TL; DR - "Talk is cheap. Show me the code."'),Object(r.b)("p",null," Some time ago I wrote a ",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/04/making-pdfs-from-html-in-c-using.html"},"post which demonstrated how you could make PDFs from HTML")," using C# and ",Object(r.b)("a",{parentName:"p",href:"http://code.google.com/p/wkhtmltopdf/"},"wkhtmltopdf"),". To my lasting surprise this has been the most popular post I've written. I recently put together an ASP.NET WCF service which exposed this functionality which I thought might be worth sharing. The code can be found on GitHub ",Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/PdfMakerWcfService"},"here"),"."),Object(r.b)("h2",{id:"a-little-more-detail"},"A little more detail"),Object(r.b)("p",null,"I should say up front that I'm still a little ambivalent about how sensible an idea this is. Behind the scenes this WCF service is remotely firing up wkhtmltopdf using ",Object(r.b)("inlineCode",{parentName:"p"},"System.Diagnostics.Process"),". I feel a little wary about recommending this as a solution for a variety of not particularly defined reasons. However, I have to say I've found this pretty stable and reliable. Bottom line it seems to work and work consistently. But I though I should include a caveat emptor; there is probably a better approach than this available. Anyway..."),Object(r.b)("p",null,"There isn't actually a great deal to say about this WCF service. It should (hopefully) just do what it says on the tin. Putting it together didn't involve a great deal of work; essentially it takes the code from the initial blog post and just wraps it in a WCF service called ",Object(r.b)("inlineCode",{parentName:"p"},"PdfMaker"),". The service exposes 2 methods:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"GetPdf")," ","-"," given a supplied URL this method creates a PDF and then returns it as a Stream to the client"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"GetPdfUrl")," ","-"," given a supplied URL this method creates a PDF and then returns the location of it to the client")),Object(r.b)("p",null,"Both of these methods also set a Location header in the response indicating the location of the created PDF."),Object(r.b)("h2",{id:"that-which-binds-us"},"That which binds us"),Object(r.b)("p",null,"The service uses ",Object(r.b)("inlineCode",{parentName:"p"},"webHttpBinding"),'. This is commonly employed when people want to expose a RESTful WCF service. The reason I\'ve used this binding is I wanted a simple "in" when calling the service. I wanted to be able to call the service via AJAX as well as directly by browsing to the service and supplying a URL-encoded URL like this:'),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:59002/PdfMaker.svc/GetPdf?url=http%3A%2F%2Fnews.ycombinator.com/"),"You may wonder why I'm using ",Object(r.b)("a",{parentName:"p",href:"http://news.ycombinator.com"},"http://news.ycombinator.com")," for the example above. I chose this as Hacker News is a very simple site; very few resources and a small page size. This means the service has less work to do when creating the PDF; it's a quick demo."),Object(r.b)("p",null,"I should say that this service is arguably *","*","not","*","* completely RESTful as each GET operation behind the scenes attempts to create a new PDF (arguably a side-effect). These should probably be POST operations as they create a new resource each time they're hit. However, if they were I wouldn't be able to just enter a URL into a browser for testing and that's really useful. So tough, I shake my fist at the devotees of pure REST on this occasion. (If I should be attacked in the street shortly after this blog is posted then the police should be advised this is good line of inquiry...)"),Object(r.b)("h2",{id:"good-behaviour"},"Good behaviour"),Object(r.b)("p",null,"It's worth noting that ",Object(r.b)("inlineCode",{parentName:"p"},"automaticFormatSelectionEnabled")," set to true on the behaviour so that content negotiation is enabled. Obviously for the ",Object(r.b)("inlineCode",{parentName:"p"},"GetPdf")," action this is rather meaningless as it's a stream that's passed back. However, for the ",Object(r.b)("inlineCode",{parentName:"p"},"GetPdfUrl")," action the returned string can either be JSON or XML. The Fiddler screenshots below demonstrate this in action:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-CX7w0jI0jTE/UOVaDP5Ae-I/AAAAAAAAAXk/H7zhyYYjPGA/s400/GetPdfUrl%2B-%2BJSON.png",alt:null})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-78GBDqI596I/UOVaTchTbBI/AAAAAAAAAXw/rz2Dg4g8BRs/s400/GetPdfUrl%2B-%2BXML.png",alt:null})),Object(r.b)("h2",{id:"test-harness"},"Test Harness"),Object(r.b)("p",null,"As a final touch I added in a test harness in the form of ",Object(r.b)("inlineCode",{parentName:"p"},"Demo.aspx"),". If you browse to it you'll see a screen a little like this:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-zoyt7ufl9FQ/UOVmD0VPh0I/AAAAAAAAAYE/DnmZmbx-Mxc/s400/PdfMakerDemo.png",alt:null})),Object(r.b)("p",null,"It's fairly self-explanatory as you can see. And here's an example of the output generated when pointing at Hacker News:"),Object(r.b)("iframe",{src:"https://docs.google.com/file/d/0B87K8-qxOZGFMGNCUWRneUFsVFU/preview",width:"500",height:"500"}),Object(r.b)("p",null,"And that's it. If there was a need this service could be easily extended to leverage the ",Object(r.b)("a",{parentName:"p",href:"http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltopdf-0.9.9-doc.html"},"various options")," that wkhtmltopdf makes available. Hope people find it useful."))}h.isMDXComponent=!0}}]);
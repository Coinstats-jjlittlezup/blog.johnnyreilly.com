(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[48116],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=h(o),u=a,m=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var h=2;h<r;h++)i[h]=o[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},16778:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=o(22122),a=o(19756),r=(o(67294),o(3905)),i={title:"HTML to PDF using a WCF Service",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["wkhtmltopdf","html","WCF","pdf"],hide_table_of_contents:!1},l={permalink:"/2013/01/03/html-to-pdf-using-wcf-service",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-01-03-html-to-pdf-using-wcf-service.md",source:"@site/blog/2013-01-03-html-to-pdf-using-wcf-service.md",title:"HTML to PDF using a WCF Service",description:'TL; DR - "Talk is cheap. Show me the code."',date:"2013-01-03T00:00:00.000Z",formattedDate:"January 3, 2013",tags:[{label:"wkhtmltopdf",permalink:"/tags/wkhtmltopdf"},{label:"html",permalink:"/tags/html"},{label:"WCF",permalink:"/tags/wcf"},{label:"pdf",permalink:"/tags/pdf"}],readingTime:3.255,truncated:!1,prevItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker",permalink:"/2013/01/09/twitterbootstrapmvc4-meet-bootstrap"},nextItem:{title:"Getting up to speed with Bloomberg's Open API...",permalink:"/2012/11/13/a-nicer-net-api-for-bloombergs-open-api"}},s=[{value:"TL; DR - &quot;Talk is cheap. Show me the code.&quot;",id:"tl-dr---talk-is-cheap-show-me-the-code",children:[]},{value:"A little more detail",id:"a-little-more-detail",children:[]},{value:"That which binds us",id:"that-which-binds-us",children:[]},{value:"Good behaviour",id:"good-behaviour",children:[]},{value:"Test Harness",id:"test-harness",children:[]}],h={toc:s};function p(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tl-dr---talk-is-cheap-show-me-the-code"},'TL; DR - "Talk is cheap. Show me the code."'),(0,r.kt)("p",null," Some time ago I wrote a ",(0,r.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/04/making-pdfs-from-html-in-c-using.html"},"post which demonstrated how you could make PDFs from HTML")," using C# and ",(0,r.kt)("a",{parentName:"p",href:"http://code.google.com/p/wkhtmltopdf/"},"wkhtmltopdf"),". To my lasting surprise this has been the most popular post I've written. I recently put together an ASP.NET WCF service which exposed this functionality which I thought might be worth sharing. The code can be found on GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/PdfMakerWcfService"},"here"),"."),(0,r.kt)("h2",{id:"a-little-more-detail"},"A little more detail"),(0,r.kt)("p",null,"I should say up front that I'm still a little ambivalent about how sensible an idea this is. Behind the scenes this WCF service is remotely firing up wkhtmltopdf using ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Diagnostics.Process"),". I feel a little wary about recommending this as a solution for a variety of not particularly defined reasons. However, I have to say I've found this pretty stable and reliable. Bottom line it seems to work and work consistently. But I though I should include a caveat emptor; there is probably a better approach than this available. Anyway..."),(0,r.kt)("p",null,"There isn't actually a great deal to say about this WCF service. It should (hopefully) just do what it says on the tin. Putting it together didn't involve a great deal of work; essentially it takes the code from the initial blog post and just wraps it in a WCF service called ",(0,r.kt)("inlineCode",{parentName:"p"},"PdfMaker"),". The service exposes 2 methods:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GetPdf")," ","-"," given a supplied URL this method creates a PDF and then returns it as a Stream to the client"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GetPdfUrl")," ","-"," given a supplied URL this method creates a PDF and then returns the location of it to the client")),(0,r.kt)("p",null,"Both of these methods also set a Location header in the response indicating the location of the created PDF."),(0,r.kt)("h2",{id:"that-which-binds-us"},"That which binds us"),(0,r.kt)("p",null,"The service uses ",(0,r.kt)("inlineCode",{parentName:"p"},"webHttpBinding"),'. This is commonly employed when people want to expose a RESTful WCF service. The reason I\'ve used this binding is I wanted a simple "in" when calling the service. I wanted to be able to call the service via AJAX as well as directly by browsing to the service and supplying a URL-encoded URL like this:'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:59002/PdfMaker.svc/GetPdf?url=http%3A%2F%2Fnews.ycombinator.com/"),"You may wonder why I'm using ",(0,r.kt)("a",{parentName:"p",href:"http://news.ycombinator.com"},"http://news.ycombinator.com")," for the example above. I chose this as Hacker News is a very simple site; very few resources and a small page size. This means the service has less work to do when creating the PDF; it's a quick demo."),(0,r.kt)("p",null,"I should say that this service is arguably *","*","not","*","* completely RESTful as each GET operation behind the scenes attempts to create a new PDF (arguably a side-effect). These should probably be POST operations as they create a new resource each time they're hit. However, if they were I wouldn't be able to just enter a URL into a browser for testing and that's really useful. So tough, I shake my fist at the devotees of pure REST on this occasion. (If I should be attacked in the street shortly after this blog is posted then the police should be advised this is good line of inquiry...)"),(0,r.kt)("h2",{id:"good-behaviour"},"Good behaviour"),(0,r.kt)("p",null,"It's worth noting that ",(0,r.kt)("inlineCode",{parentName:"p"},"automaticFormatSelectionEnabled")," set to true on the behaviour so that content negotiation is enabled. Obviously for the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetPdf")," action this is rather meaningless as it's a stream that's passed back. However, for the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetPdfUrl")," action the returned string can either be JSON or XML. The Fiddler screenshots below demonstrate this in action:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-CX7w0jI0jTE/UOVaDP5Ae-I/AAAAAAAAAXk/H7zhyYYjPGA/s400/GetPdfUrl%2B-%2BJSON.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-78GBDqI596I/UOVaTchTbBI/AAAAAAAAAXw/rz2Dg4g8BRs/s400/GetPdfUrl%2B-%2BXML.png",alt:null})),(0,r.kt)("h2",{id:"test-harness"},"Test Harness"),(0,r.kt)("p",null,"As a final touch I added in a test harness in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"Demo.aspx"),". If you browse to it you'll see a screen a little like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-zoyt7ufl9FQ/UOVmD0VPh0I/AAAAAAAAAYE/DnmZmbx-Mxc/s400/PdfMakerDemo.png",alt:null})),(0,r.kt)("p",null,"It's fairly self-explanatory as you can see. And here's an example of the output generated when pointing at Hacker News:"),(0,r.kt)("iframe",{src:"https://docs.google.com/file/d/0B87K8-qxOZGFMGNCUWRneUFsVFU/preview",width:"500",height:"500"}),(0,r.kt)("p",null,"And that's it. If there was a need this service could be easily extended to leverage the ",(0,r.kt)("a",{parentName:"p",href:"http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltopdf-0.9.9-doc.html"},"various options")," that wkhtmltopdf makes available. Hope people find it useful."))}p.isMDXComponent=!0}}]);
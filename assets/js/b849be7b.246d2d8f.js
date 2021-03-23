(window.webpackJsonp=window.webpackJsonp||[]).push([[797],{1186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(4),o=n(10),a=(n(0),n(1186)),i={title:"MVC 3 meet Dictionary",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["MVC 3","Dictionary"],hide_table_of_contents:!1},c={permalink:"/2012/10/22/mvc-3-meet-dictionary",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-10-22-mvc-3-meet-dictionary.md",source:"@site/blog/2012-10-22-mvc-3-meet-dictionary.md",description:"Documenting a JsonValueProviderFactory Gotcha",date:"2012-10-22T00:00:00.000Z",formattedDate:"October 22, 2012",tags:[{label:"MVC 3",permalink:"/tags/mvc-3"},{label:"Dictionary",permalink:"/tags/dictionary"}],title:"MVC 3 meet Dictionary",readingTime:2.68,truncated:!1,prevItem:{title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",permalink:"/2012/11/02/xsdxml-schema-generator-xsdexe-taking"},nextItem:{title:"Using Web Optimization with MVC 3",permalink:"/2012/10/05/using-web-optimization-with-mvc-3"}},l=[{value:"Documenting a JsonValueProviderFactory Gotcha",id:"documenting-a-jsonvalueproviderfactory-gotcha",children:[]},{value:"The Problem",id:"the-problem",children:[]},{value:"The Workaround",id:"the-workaround",children:[]},{value:"Summary and a PS",id:"summary-and-a-ps",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"documenting-a-jsonvalueproviderfactory-gotcha"},"Documenting a JsonValueProviderFactory Gotcha"),Object(a.b)("p",null," About a year ago I was involved in the migration of an ASP.NET WebForms application over to MVC 3. We'd been doing a lot of AJAX-y / Single Page Application-y things in the project and had come to the conclusion that MVC might be a slightly better fit since we intended to continue down this path."),Object(a.b)("p",null,"During the migration we encountered a bug in MVC 3 concerning Dictionary deserialization. This bug has subsequently tripped me up a few more times as I failed to remember the nature of the problem correctly. So I've written the issue up here as an aide to my own lamentable memory."),Object(a.b)("p",null,"Before I begin I should say that the problem *",Object(a.b)("u",null,"has been resolved in MVC 4")),Object(a.b)("p",null,"*. However given that I imagine many MVC 3 projects will not upgrade instantly there's probably some value in documenting the issue (and how to work around it). By the way, you can see my initial plea for assistance in ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/q/6881440/761388"},"this StackOverflow question"),"."),Object(a.b)("h2",{id:"the-problem"},"The Problem"),Object(a.b)("p",null,"The problem is that deserialization of Dictionary objects does not behave in the expected and desired fashion. When you fire off a dictionary it arrives at your endpoint as the enormously unhelpful ",Object(a.b)("inlineCode",{parentName:"p"},"null"),". To see this for yourself you can try using this JavaScript:"),Object(a.b)("script",{src:"https://gist.github.com/3931778.js?file=PostDictionaryTest.js"}),Object(a.b)("p",null,"With this C#:"),Object(a.b)("script",{src:"https://gist.github.com/3931778.js?file=HomeController.cs"}),Object(a.b)("p",null,"You get a null ",Object(a.b)("inlineCode",{parentName:"p"},"null")," dictionary."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-Lsz_lrqsLF8/UIVcfCzfGrI/AAAAAAAAAVM/gkq0qsVZTMw/s400/MyDictionaryIsNull.png",alt:null})),Object(a.b)("p",null,"After a long time googling around on the topic I eventually discovered, much to my surprise, that I was actually tripping over a bug in MVC 3. It was filed by ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/users/29407/darin-dimitrov"},"Darin Dimitrov")," of Stack Overflow fame and I found details about it filed as an official bug ",Object(a.b)("a",{parentName:"p",href:"http://connect.microsoft.com/VisualStudio/feedback/details/636647/make-jsonvalueproviderfactory-work-with-dictionary-types-in-asp-net-mvc"},"here"),". To quote Darin:"),Object(a.b)("p",null,'"',Object(a.b)("em",{parentName:"p"},"The System.Web.Mvc.JsonValueProviderFactory introduced in ASP.NET MVC 3 enables action methods to send and receive JSON-formatted text and to model-bind the JSON text to parameters of action methods. Unfortunately it doesn't work with dictionaries"),'"'),Object(a.b)("h2",{id:"the-workaround"},"The Workaround"),Object(a.b)("p",null,"My colleague found a workaround for the issue ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/5397743/761388"},"here"),". There are 2 parts to this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Dictionaries in JavaScript are simple JavaScript Object Literals. In order to workaround this issue it is necessary to ",Object(a.b)("inlineCode",{parentName:"li"},"JSON.stringify")," our Dictionary / JOL before sending it to the endpoint. This is done so a string can be picked up at the endpoint."),Object(a.b)("li",{parentName:"ol"},"The signature of your action is switched over from a Dictionary reference to a string reference. Deserialization is then manually performed back from the string to a Dictionary within the Action itself.")),Object(a.b)("p",null,"I've adapted my example from earlier to demonstrate this; first the JavaScript:"),Object(a.b)("script",{src:"https://gist.github.com/3931778.js?file=PostDictionaryTestWorkaround.js"}),Object(a.b)("p",null,"Then the C#:"),Object(a.b)("script",{src:"https://gist.github.com/3931778.js?file=HomeControllerWorkaround.cs"}),Object(a.b)("p",null,"And now we're able to get a dictionary:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-7_sHRAsZjbY/UIVnwqH7tRI/AAAAAAAAAVg/jkYd3aHKPF4/s400/MyDictionaryIsNotNull.png",alt:null})),Object(a.b)("h2",{id:"summary-and-a-ps"},"Summary and a PS"),Object(a.b)("p",null,"So that's it; a little unglamourous but this works. I'm slightly surprised that that wasn't picked up before MVC 3 was released but at least it's been fixed for MVC 4. I look forward to this blog post being irrelevant and out of date \u263a."),Object(a.b)("p",null,"For what it's worth in my example above we're using the trusty old ",Object(a.b)("inlineCode",{parentName:"p"},"System.Web.Script.Serialization.JavaScriptSerializer")," to perform deserialization. My preference is actually to use ",Object(a.b)("a",{parentName:"p",href:"http://james.newtonking.com/projects/json-net.aspx"},"JSON.Nets")," implementation but for the sake of simplicity I went with .NETs internal one here. To be honest, either is fine to my knowledge."))}u.isMDXComponent=!0}}]);
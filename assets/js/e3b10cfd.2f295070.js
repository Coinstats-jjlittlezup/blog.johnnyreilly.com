(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{1063:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(8),r=(a(0),a(1170)),o={title:"jQuery Validate - Native Unobtrusive Validation Support!",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["Native","jQuery Validate","Unobtrusive"],hide_table_of_contents:!1},s={permalink:"/2013/06/26/jquery-validate-native-unobtrusive-validation",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-06-26-jquery-validate-native-unobtrusive-validation.md",source:"@site/blog/2013-06-26-jquery-validate-native-unobtrusive-validation.md",description:"Did you know that jQuery Validate natively supports the use of HTML 5 data attributes to drive validation unobtrusively? Neither did I - I haven't seen any documentation for it. However, I was reading the jQuery Validate test suite and that's what I spotted being used in some of the tests.",date:"2013-06-26T00:00:00.000Z",formattedDate:"June 26, 2013",tags:[{label:"Native",permalink:"/tags/native"},{label:"jQuery Validate",permalink:"/tags/j-query-validate"},{label:"Unobtrusive",permalink:"/tags/unobtrusive"}],title:"jQuery Validate - Native Unobtrusive Validation Support!",readingTime:2.28,truncated:!1,prevItem:{title:"How I'm Using Cassette part 3:Cassette and TypeScript Integration",permalink:"/2013/07/06/how-im-using-cassette-part-3-typescript"},nextItem:{title:"How I'm Using Cassette part 2:Get Cassette to Serve Scripts in Dependency Order",permalink:"/2013/06/06/how-im-using-cassette-part-2"}},l=[{value:"Why is this useful?",id:"why-is-this-useful",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]},{value:"Update 09/08/2012",id:"update-09082012",children:[]}],u={toc:l};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Did you know that jQuery Validate natively supports the use of ",Object(r.b)("a",{parentName:"p",href:"http://ejohn.org/blog/html-5-data-attributes/"},"HTML 5 data attributes")," to drive validation unobtrusively? Neither did I - I haven't seen any documentation for it. However, I was reading the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jzaefferer/jquery-validation/blob/master/test/index.html"},"jQuery Validate test suite")," and that's what I spotted being used in some of the tests."),Object(r.b)("p",null," I was quite keen to give it a try as I've found the Microsoft produced ",Object(r.b)("a",{parentName:"p",href:"http://nuget.org/packages/jQuery.Validation.Unobtrusive/"},"unobtrusive extensions")," both fantastic and frustrating in nearly equal measure. Fantastic because they work and they're ",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2012/08/jquery-unobtrusive-validation.html"},"integrated nicely with MVC"),". Frustrating, because they don't allow you do all the things that jQuery Validate in the raw does."),Object(r.b)("p",null,"So when I realised that there was native alternative available I was delighted. Enough with the fine words - what we want is a demo:"),Object(r.b)("iframe",{src:"http://htmlpreview.github.io/?http://gist.github.com/johnnyreilly/5867188/raw/272b1b42f4773fe6df843550b3e3d457013522a8/Demo.html",width:"100%",height:"575"}),Object(r.b)("p",null,"Not particularly exciting? Not noticably different to any other jQuery Validate demo you've ever seen? Fair enough. Now look at the source:"),Object(r.b)("script",{src:"https://gist.github.com/johnnyreilly/5867188.js?file=Demo.html"}),Object(r.b)("p",null,"Do you see what I see? Data attributes (both ",Object(r.b)("inlineCode",{parentName:"p"},"data-rule-*")," and ",Object(r.b)("inlineCode",{parentName:"p"},"data-msg-*"),"s) being used to drive the validation unobtrusively! And if you look at the JavaScript files referenced you will see ","*",Object(r.b)("strong",{parentName:"p"},"no sign"),"*"," of ",Object(r.b)("inlineCode",{parentName:"p"},"jquery.validate.unobtrusive.js")," ","-"," this is all raw jQuery Validate. Nothing else."),Object(r.b)("h2",{id:"why-is-this-useful"},"Why is this useful?"),Object(r.b)("p",null,"First of all, I'm of the opinion that it makes intuitive sense to have the validation information relevant to various DOM elements stored directly with those DOM elements. There will be occasions where you may not want to use this approach but, in the main, I think it's very sensible. It saves you bouncing back and forth between your HTML and your JavaScript and it means when you read the HTML you know there and then what validation applies to your form."),Object(r.b)("p",null,"I think this particularly applies when it comes to adding elements to the DOM dynamically. If I use data attributes to drive my validation and I dynamically add elements then jQuery Validate will parse the validation rules for me. I won't have to subsequently apply validation to those new elements once they've been added to the DOM. 1 step instead of 2. It makes for simpler code and that's always a win."),Object(r.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(r.b)("p",null,"For myself I'm in the early stages of experimenting with this but I thought it might be good to get something out there to show how this works. If anyone knows of any official documentation for this please do let me know - I'd love to have a read of it. Maybe it's been out there all along and it's just my Googling powers are inadequate."),Object(r.b)("h2",{id:"update-09082012"},"Update 09/08/2012"),Object(r.b)("p",null,"If you're using ASP.Net MVC 3+ and this post has been of interest to you then you might want to take a look at ",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2013/08/announcing-jquery-validation.html"},"this"),"."))}d.isMDXComponent=!0},1170:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=i.a.createContext({}),d=function(e){var t=i.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},c=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=n,b=p["".concat(o,".").concat(c)]||p[c]||h[c]||r;return a?i.a.createElement(b,s(s({ref:t},u),{},{components:a})):i.a.createElement(b,s({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1011],{1189:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(r,".").concat(h)]||p[h]||d[h]||o;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1247:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/JSLint-e63a8504cc193628ce6d531d0118f6f8.png"},1248:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Extensions-eaec649adf02eee1ecce09e1210e718e.png"},187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(4),i=n(10),o=(n(0),n(1189)),r={title:"JSHint - Customising your hurt feelings",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["JSLint for Visual Studio","Coverity","Anton Kovalyov","javascript","paul irish","static code analysis","JSLint","JSHint","douglas crockford"],hide_table_of_contents:!1},s={permalink:"/2012/04/23/jshint-customising-your-hurt-feelings",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-04-23-jshint-customising-your-hurt-feelings.md",source:"@site/blog/2012-04-23-jshint-customising-your-hurt-feelings.md",description:"As I've started making greater use of JavaScript to give a richer GUI experience the amount of JS in my ASP.NET apps has unsurprisingly ballooned. If I'm honest, I hadn't given much consideration to the code quality of my JavaScript in the past. However, if I was going to make increasing use of it (and given the way the web is going at the moment I'd say that's a given) I didn't think this was tenable position to maintain. A friend of mine works for Coverity which is a company that provides tools for analysing code quality. I understand, from conversations with him, that their tools provide static analysis for compiled languages such as C++ / C# / Java etc. I was looking for something similar for JavaScript. Like many, I have read and loved Douglas Crockford's \"JavaScript",date:"2012-04-23T00:00:00.000Z",formattedDate:"April 23, 2012",tags:[{label:"JSLint for Visual Studio",permalink:"/tags/js-lint-for-visual-studio"},{label:"Coverity",permalink:"/tags/coverity"},{label:"Anton Kovalyov",permalink:"/tags/anton-kovalyov"},{label:"javascript",permalink:"/tags/javascript"},{label:"paul irish",permalink:"/tags/paul-irish"},{label:"static code analysis",permalink:"/tags/static-code-analysis"},{label:"JSLint",permalink:"/tags/js-lint"},{label:"JSHint",permalink:"/tags/js-hint"},{label:"douglas crockford",permalink:"/tags/douglas-crockford"}],title:"JSHint - Customising your hurt feelings",readingTime:4.53,truncated:!1,prevItem:{title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",permalink:"/2012/04/28/beg-steal-or-borrow-decent-javascript"},nextItem:{title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",permalink:"/2012/04/16/simple-technique-for-initialising"}},l=[],c={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As I've started making greater use of JavaScript to give a richer GUI experience the amount of JS in my ASP.NET apps has unsurprisingly ballooned. If I'm honest, I hadn't given much consideration to the code quality of my JavaScript in the past. However, if I was going to make increasing use of it (and given the way the web is going at the moment I'd say that's a given) I didn't think this was tenable position to maintain. A friend of mine works for ",Object(o.b)("a",{parentName:"p",href:"http://www.coverity.com/"},"Coverity")," which is a company that provides tools for analysing code quality. I understand, from conversations with him, that their tools provide static analysis for compiled languages such as C++ / C# / Java etc. I was looking for something similar for JavaScript. Like many, I have read and loved ",Object(o.b)("a",{parentName:"p",href:"http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},'Douglas Crockford\'s "JavaScript: The Good Parts"'),"; it is by some margin the most useful and interesting software related book I have read.So I was aware that Crockford had come up with his own JavaScript code quality tool called ",Object(o.b)("a",{parentName:"p",href:"http://www.jslint.com/"},"JSLint"),". JSLint is quite striking when you first encounter it: ",Object(o.b)("img",{src:n(1247).default})),Object(o.b)("p",null," It's the \"Warning! JSLint will hurt your feelings.\" that grabs you. And it's not wrong. I've copied and pasted code that I've written into JSLint and then gasped at the reams of errors JSLint would produce. I subsequently tried JSLint-ing various well known JS libraries (jQuery etc) and saw that JSLint considered they were thoroughly problematic as well. This made me feel slightly better. It was when I started examining some of the \"errors\" JSLint reported that I took exception. Yes, I took exception to exceptions! (I'm ","*",Object(o.b)("strong",{parentName:"p"},"very"),"*"," pleased with that!) Here's a few of the errors generated by JSLint when inspecting ",Object(o.b)("a",{parentName:"p",href:"http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"},"jquery-1.7.2.js"),": - ",Object(o.b)("inlineCode",{parentName:"p"},"Problem at line 16 character 10: Expected exactly one space between 'function' and '('.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Problem at line 25 character 1: Expected 'var' at column 13, not column 1.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Problem at line 31 character 5: Unexpected dangling '_' in '_jQuery'."))),Object(o.b)("p",null," JSLint is, much like it's creator, quite opinionated. Which is no bad thing. Many of Crockfords opinions are clearly worth their salt. It's just I didn't want all of them enforced upon me. As you can see above most of these \"problems\" are essentially complaints about a different style rather than bugs or potential issues. Now there are options in JSLint that you can turn on and off which looked quite promising. But before I got to investigating them I heard about ",Object(o.b)("a",{parentName:"p",href:"http://www.jshint.com"},"JSHint"),", brainchild of Anton Kovalyov and Paul Irish. In their own words: ",Object(o.b)("em",{parentName:"p"},"JSHint is a fork of JSLint, the tool written and maintained by Douglas Crockford. The project originally started as an effort to make a more configurable version of JSLint\u2014one that doesn't enforce one particular coding style on its users\u2014but then transformed into a separate static analysis tool with its own goals and ideals.")," This sounded right up my alley! So I thought I'd repeat my jQuery test. Here's a sample of what JSHint threw back at me, with its default settings in place: - ",Object(o.b)("inlineCode",{parentName:"p"},"Line 230: return num == null ? Expected '===' and instead saw '=='. ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Line 352: if ( (options = arguments[ i ]) != null ) { Expected '!==' and instead saw '!='. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Line 354: for ( name in options ) { The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype. "))),Object(o.b)("p",null,' These were much more the sort of "issues" I was interested in. Plus it seemed there was plenty of scope to tweak my options. Excellent. This was good. The icing on my cake would have been a plug-in for Visual Studio which would allow me to evaluate my JS files from within my IDE. Happily the world seems to be full of developers doing good turns for one another. I discovered an extension for VS called ',Object(o.b)("a",{parentName:"p",href:"http://jslint4vs2010.codeplex.com/"},"JSLint for Visual Studio 2010"),": ",Object(o.b)("img",{src:n(1248).default})),Object(o.b)("p",null," This was an extension that provided either JSLint ","*",Object(o.b)("strong",{parentName:"p"},"or"),"*"," JSHint evaluation as you preferred from within Visual Studio. Fantastic! With this extension in play you could add JavaScript static code analysis to your compilation process and so learn of all the issues in your code at the same time, whether they lay in C# or JS or ","[insert language here]",'. You could control how JS problems were reported; as warnings, errors etc. You could straightforwardly exclude files from evaluation (essential if you\'re reliant on a number of 3rd party JS libraries which you are not responsible for maintaining). You could cater for predefined variables; allow for jQuery or DOJO. You could simply evaluate a single file in your solution by right clicking it and hitting the "JS Lint" option in the context menu. And it was simplicity itself to activate and deactivate the JSHint / JSLint extension as required. For a more exhaustive round up of the options available I advise taking a look here: ',Object(o.b)("a",{parentName:"p",href:"http://jslint4vs2010.codeplex.com/"},"http://jslint4vs2010.codeplex.com"),". I would heartily recommend using JSHint if you're looking to improve your JS code quality. I'm grateful to Crockford for making JSHint possible by first writing JSLint. For my part though I think JSHint is the more pragmatic and useful tool and likely to be the one I stick with. For interest (and frankly sheer entertainment value at the crotchetiness of Crockford) it's definitely worth having a read up on how JSHint came to pass: - ",Object(o.b)("a",{parentName:"p",href:"http://anton.kovalyov.net/2011/02/20/why-i-forked-jslint-to-jshint/"},"http://anton.kovalyov.net/2011/02/20/why-i-forked-jslint-to-jshint/")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://badassjs.com/post/3364925033/jshint-an-community-driven-fork-of-jslint"},"http://badassjs.com/post/3364925033/jshint-an-community-driven-fork-of-jslint"))))}u.isMDXComponent=!0}}]);
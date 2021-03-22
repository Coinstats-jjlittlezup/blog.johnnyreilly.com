(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(4),o=a(10),r=(a(0),a(1183)),i={title:"JavaScript - getting to know the beast...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["javascript","c#","elijah manor","douglas crockford"],hide_table_of_contents:!1},s={permalink:"/2012/01/30/javascript-getting-to-know-beast",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-01-30-javascript-getting-to-know-beast.md",source:"@site/blog/2012-01-30-javascript-getting-to-know-beast.md",description:"So it's 2010 and I've started using jQuery. jQuery is a JavaScript library. This means that I'm writing JavaScript... Gulp! I should say that at this point in time I \\*hated\\* JavaScript (I have mentioned this previously). But what I know now is that I barely understood the language at all. All the JavaScript I knew was the result of copying and pasting after I'd hit \"view source\". I don't feel too bad about this - not because my ignorance was laudable but because I certainly wasn't alone in this. It seems that up until recently hardly anyone knew anything about JavaScript. It puzzles me now that I thought this was okay. I suppose like many people I didn't think JavaScript was capable of much and hence felt time spent researching it would be wasted. Just to illustrate where I was then, here is 2009 John's idea of some pretty \"advanced\" JavaScript: `html",date:"2012-01-30T00:00:00.000Z",formattedDate:"January 30, 2012",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"c#",permalink:"/tags/c"},{label:"elijah manor",permalink:"/tags/elijah-manor"},{label:"douglas crockford",permalink:"/tags/douglas-crockford"}],title:"JavaScript - getting to know the beast...",readingTime:5.835,truncated:!1,prevItem:{title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",permalink:"/2012/02/05/potted-history-of-using-ajax-on"},nextItem:{title:"What on earth is jQuery?  And why should I care?",permalink:"/2012/01/24/what-on-earth-is-jquery-and-why-should"}},l=[],c={toc:l};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"So it's 2010 and I've started using jQuery. jQuery is a JavaScript library. This means that I'm writing JavaScript... Gulp! I should say that at this point in time I ","*",Object(r.b)("strong",{parentName:"p"},"hated"),"*",' JavaScript (I have mentioned this previously). But what I know now is that I barely understood the language at all. All the JavaScript I knew was the result of copying and pasting after I\'d hit "view source". I don\'t feel too bad about this - not because my ignorance was laudable but because I certainly wasn\'t alone in this. It seems that up until recently hardly anyone knew anything about JavaScript. It puzzles me now that I thought this was okay. I suppose like many people I didn\'t think JavaScript was capable of much and hence felt time spent researching it would be wasted. Just to illustrate where I was then, here is 2009 John\'s idea of some pretty "advanced" JavaScript: ```html\nfunction GiveMeASum(iNum1, iNum2)\n{\nvar dteDate = new Date();\nvar iTotal = iNum1 + iNum2;\nreturn "This is your total: " + iTotal + ", at this time: " + dteDate.toString();\n}'),Object(r.b)("input",{type:"text",id:"Number1",value:"4"}),Object(r.b)("input",{type:"text",id:"Number2",value:"6"}),Object(r.b)("input",{type:"button",value:"Click Me To Add",onclick:"alert(GiveMeASum(parseInt(document.getElementById(Number1).value, 10), parseInt(document.getElementById(Number2).value, 10)))"}),"```",Object(r.b)("p",null," I know - I'm not to proud of it... Certainly if it was a horse you'd shoot it. Basically, at that point I knew the following: - JavaScript had functions (but I knew only one way to use them - see above)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It had some concept of numbers (but I had no idea of the type of numbers I was dealing with; integer / float / decimal / who knows?)"),Object(r.b)("li",{parentName:"ul"},"It had some concept of strings"),Object(r.b)("li",{parentName:"ul"},"It had a date object")),Object(r.b)("p",null," This was about the limit of my knowledge. If I was right, and that's all there was to JavaScript then my evaluation of it as utter rubbish would have been accurate. I was wrong. SOOOOOOOOOOOO WRONG! I first realised how wrong I was when I opened up the jQuery source to have a read. Put simply I had ","*",Object(r.b)("strong",{parentName:"p"},"no"),"*"," idea what I was looking at. For a while I wondered if I was actually looking at JavaScript; the code was so different to what I was expecting that for a goodly period I considered jQuery to be some kind of strange black magic; written in a language I did not understand. I was half right. jQuery wasn't black magic. But it was written in a language I didn't understand; namely JavaScript. :-( Here beginneth the lessons... I started casting around looking for information about JavaScript. Before very long I discovered one ",Object(r.b)("a",{parentName:"p",href:"http://www.elijahmanor.com/"},"Elijah Manor")," who had helpfully done a number of talks and blog posts directed at C# developers (which I was) about JavaScript. My man! - ",Object(r.b)("a",{parentName:"p",href:"http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/"},"How good C# habits can encourage bad JavaScript habits part 1")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-2/"},"How good C# habits can encourage bad JavaScript habits part 2")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-3/"},"How good C# habits can encourage bad JavaScript habits part 3")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://blogs.msdn.com/b/ukmsdn/archive/2011/06/10/javascript-for-the-c-developer.aspx"},"Video of Elijah Manor talking through the above material"))),Object(r.b)("p",null,' For me this was all massively helpful. In my development life so far I had only ever dealt with strongly typed, compiled "classical" languages. I had little to no experience of functional, dynamic and loosely typed languages (essentially what JavaScript is). Elijahs work opened up my eyes to some of the massive differences that exist. He also pointed me in the direction of the (never boring) Doug Crockford, author of the best programming book I have ever purchased: ',Object(r.b)("a",{parentName:"p",href:"http://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},"JavaScript: The Good Parts"),". Who could not like a book about JavaScript which starts each chapter with a quote from Shakespeare and still comes in at only a 100 pages? It's also worth watching the man in person as he's a thoroughly engaging presence. There's loads of videos of him out there but this one is pretty good: ",Object(r.b)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=v2ifWcnQs6M"},"Douglas Crockford: The JavaScript Programming Language"),". I don't want to waste your time by attempting to rehash what these guys have done already. I think it's always best to go to the source so I'd advise you to check them out for yourselves. That said it's probably worth summarising some of the main points I took away from them (you can find better explanations of all of these through looking at their posts): 1. JavaScript has objects but has no classes. Instead it has (what I still consider to be) the weirdest type of inheritance going: prototypical inheritance.\n2. JavaScript has the simplest and loveliest way of creating a new object out there; the \"JavaScript Object Literal\". Using this we can simply ",Object(r.b)("inlineCode",{parentName:"p"},'var myCar = { wheels: 4, colour: "blue" }')," and ladies and gents we have ourselves a car! (object)\n3. In JavaScript functions are ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/First-class_function"},"first class objects"),". This means functions can be assigned to variables (as easily as you'd assign a string to a variable) and crucially you can pass them as parameters to a function and pass them back as a return type. Herein lies power!\n4. JavaScript has 6 possible values (false, null, undefined, empty strings, 0 and NaN) which it evaluates as false. These are known as the \"false-y\" values. It's a bit weird but on the plus side this can lead to some nicely terse code.\n5. To perform comparisons in JavaScript you should avoid == and != and instead use === and !==. Before I discovered this I had been using == and != and then regularly puzzling over some truly odd behaviour. Small though it may sound, this may be the most important discovery of the lot as it was this that lead to me actually ","*",Object(r.b)("strong",{parentName:"p"},"trusting"),"*"," the language. Prior to this I vaguely thought I was picking up on some kind of bug in the JavaScript language which I plain didn't understand. (After all, in any sane universe should this really evaluate to true?: ",Object(r.b)("inlineCode",{parentName:"p"},'0 == ""'),')\n6. Finally JavaScript has function scope rather than block scope. Interestingly it "hoists" variable declaration to the top of each function which can lead to some very surprising behaviour if you don\'t realise what is happening. '),Object(r.b)("p",null,"I now realise that JavaScript is a fantastic language because of it's flexibility. It is also a deeply flawed language; in part due to it's unreasonably forgiving nature (you haven't finished your line with a semi-colon; that's okay - I can see you meant to so I'll stick one in / you haven't declared your variable; not a problem I won't tell you but I'll create a new variable stick it in global scope and off we go etc). It is without question the easiest language with which to create a proper dogs breakfast. To get the best out of JavaScript we need to understand the quirks of the language and we need good patterns. If you're interested in getting to grips with it I really advise you to check out the Elijah and Dougs work - it really helped me."))}u.isMDXComponent=!0},1183:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,b=h["".concat(i,".").concat(d)]||h[d]||p[d]||r;return a?o.a.createElement(b,s(s({ref:t},c),{},{components:a})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
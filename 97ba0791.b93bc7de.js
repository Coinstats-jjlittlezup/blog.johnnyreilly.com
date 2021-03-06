(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{607:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(958)),a={title:"Using Expressions with Constructors",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Expression","Constructors","Generic"],hide_table_of_contents:!1},s={permalink:"/blog.johnnyreilly.com/2013/02/13/using-expressions-with-constructors",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-02-13-using-expressions-with-constructors.md",source:"@site/blog/2013-02-13-using-expressions-with-constructors.md",description:"Every now and then you think \"x should be easy\" - and it isn't. I had one of those situations this morning. Something I thought would take 5 minutes had me still pondering 30 minutes later. I finally cracked it (with the help of a colleague - thanks Marc!) and I wanted to note down what I did since I'm sure to forget this.",date:"2013-02-13T00:00:00.000Z",tags:[{label:"Expression",permalink:"/blog.johnnyreilly.com/tags/expression"},{label:"Constructors",permalink:"/blog.johnnyreilly.com/tags/constructors"},{label:"Generic",permalink:"/blog.johnnyreilly.com/tags/generic"}],title:"Using Expressions with Constructors",readingTime:1.835,truncated:!1,prevItem:{title:"Unit testing MVC controllers / Mocking UrlHelper",permalink:"/blog.johnnyreilly.com/2013/02/18/unit-testing-mvc-controllers-mocking"},nextItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",permalink:"/blog.johnnyreilly.com/2013/01/14/twitterbootstrapmvc4-meet-bootstrap_14"}},l=[{value:"So what&#39;s the problem?",id:"so-whats-the-problem",children:[]},{value:"So what&#39;s the solution?",id:"so-whats-the-solution",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Every now and then you think \"x should be easy\" - and it isn't. I had one of those situations this morning. Something I thought would take 5 minutes had me still pondering 30 minutes later. I finally cracked it (with the help of a colleague - thanks Marc!) and I wanted to note down what I did since I'm sure to forget this."),Object(i.b)("h2",{id:"so-whats-the-problem"},"So what's the problem?"),Object(i.b)("p",null,"In our project we had a very simple validation class. It looked a bit like this:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/4944545.js?file=FieldValidationBefore.cs"}),Object(i.b)("p",null,"I wanted to take this class and extend it to have a constructor which allowed me to specify a Type and subsequently an Expression of that Type that allowed me to specify a property. 10 points if you read the last sentence and understood it without reading it a second time."),Object(i.b)("p",null,"Code is a better illustration; take a look below. I wanted to go from #1 to #2:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/4944545.js?file=HowItIsUsed.cs"}),Object(i.b)("p",null,'"Why?" I hear you ask. Well we had a swathe of statements in the code which test each property for a problem and would create a ',Object(i.b)("inlineCode",{parentName:"p"},"FieldValidation")," with the very same property name if one was found. There's no real problem with that but I'm a man that likes to refactor. Property names change and I didn't want to have to remember to manually go through each ",Object(i.b)("inlineCode",{parentName:"p"},"FieldValidation")," keeping these in line. If I was using the actual property name to drive the creation of my ",Object(i.b)("inlineCode",{parentName:"p"},"FieldValidations")," then that problem disappears. And I like that."),Object(i.b)("h2",{id:"so-whats-the-solution"},"So what's the solution?"),Object(i.b)("p",null,"Well it's this:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/4944545.js?file=FieldValidationAfter.cs"}),Object(i.b)("p",null,"As you can see we have taken the original FieldValidation class and added in a generic constructor which instead of taking ",Object(i.b)("inlineCode",{parentName:"p"},"string fieldName")," as a first argument it takes ",Object(i.b)("inlineCode",{parentName:"p"},"Expression&lt;Func&lt;T, object&gt;&gt; expression"),". LINQ's Expression magic is used to determine the supplied property name which is smashing. If you were wondering, the first ",Object(i.b)("inlineCode",{parentName:"p"},"MemberExpression")," code is used for ",Object(i.b)("em",{parentName:"p"},"reference")," types. The ",Object(i.b)("inlineCode",{parentName:"p"},"UnaryExpression")," wrapping a ",Object(i.b)("inlineCode",{parentName:"p"},"MemberExpression")," code is used for ",Object(i.b)("em",{parentName:"p"},"value")," types. A good explanation of this can be found ",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/12975480/761388"},"here"),"."),Object(i.b)("p",null,"My colleague directed me to ",Object(i.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/2916344"},"this crucial StackOverflow answer")," which provided some much needed direction when I was thrashing. And that's it; we're done, home free."))}p.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,b=h["".concat(a,".").concat(d)]||h[d]||u[d]||i;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
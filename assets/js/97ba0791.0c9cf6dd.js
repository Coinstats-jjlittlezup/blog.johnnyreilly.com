(window.webpackJsonp=window.webpackJsonp||[]).push([[669],{1161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||h[d]||a;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(1161)),i={title:"Using Expressions with Constructors",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Expression","Constructors","Generic"],hide_table_of_contents:!1},s={permalink:"/2013/02/13/using-expressions-with-constructors",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-02-13-using-expressions-with-constructors.md",source:"@site/blog/2013-02-13-using-expressions-with-constructors.md",description:"Every now and then you think \"x should be easy\" - and it isn't. I had one of those situations this morning. Something I thought would take 5 minutes had me still pondering 30 minutes later. I finally cracked it (with the help of a colleague - thanks Marc!) and I wanted to note down what I did since I'm sure to forget this.",date:"2013-02-13T00:00:00.000Z",formattedDate:"February 13, 2013",tags:[{label:"Expression",permalink:"/tags/expression"},{label:"Constructors",permalink:"/tags/constructors"},{label:"Generic",permalink:"/tags/generic"}],title:"Using Expressions with Constructors",readingTime:1.835,truncated:!1,prevItem:{title:"Unit testing MVC controllers / Mocking UrlHelper",permalink:"/2013/02/18/unit-testing-mvc-controllers-mocking"},nextItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",permalink:"/2013/01/14/twitterbootstrapmvc4-meet-bootstrap_14"}},l=[{value:"So what&#39;s the problem?",id:"so-whats-the-problem",children:[]},{value:"So what&#39;s the solution?",id:"so-whats-the-solution",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Every now and then you think \"x should be easy\" - and it isn't. I had one of those situations this morning. Something I thought would take 5 minutes had me still pondering 30 minutes later. I finally cracked it (with the help of a colleague - thanks Marc!) and I wanted to note down what I did since I'm sure to forget this."),Object(a.b)("h2",{id:"so-whats-the-problem"},"So what's the problem?"),Object(a.b)("p",null,"In our project we had a very simple validation class. It looked a bit like this:"),Object(a.b)("script",{src:"https://gist.github.com/johnnyreilly/4944545.js?file=FieldValidationBefore.cs"}),Object(a.b)("p",null,"I wanted to take this class and extend it to have a constructor which allowed me to specify a Type and subsequently an Expression of that Type that allowed me to specify a property. 10 points if you read the last sentence and understood it without reading it a second time."),Object(a.b)("p",null,"Code is a better illustration; take a look below. I wanted to go from #1 to #2:"),Object(a.b)("script",{src:"https://gist.github.com/johnnyreilly/4944545.js?file=HowItIsUsed.cs"}),Object(a.b)("p",null,'"Why?" I hear you ask. Well we had a swathe of statements in the code which test each property for a problem and would create a ',Object(a.b)("inlineCode",{parentName:"p"},"FieldValidation")," with the very same property name if one was found. There's no real problem with that but I'm a man that likes to refactor. Property names change and I didn't want to have to remember to manually go through each ",Object(a.b)("inlineCode",{parentName:"p"},"FieldValidation")," keeping these in line. If I was using the actual property name to drive the creation of my ",Object(a.b)("inlineCode",{parentName:"p"},"FieldValidations")," then that problem disappears. And I like that."),Object(a.b)("h2",{id:"so-whats-the-solution"},"So what's the solution?"),Object(a.b)("p",null,"Well it's this:"),Object(a.b)("script",{src:"https://gist.github.com/johnnyreilly/4944545.js?file=FieldValidationAfter.cs"}),Object(a.b)("p",null,"As you can see we have taken the original FieldValidation class and added in a generic constructor which instead of taking ",Object(a.b)("inlineCode",{parentName:"p"},"string fieldName")," as a first argument it takes ",Object(a.b)("inlineCode",{parentName:"p"},"Expression&lt;Func&lt;T, object&gt;&gt; expression"),". LINQ's Expression magic is used to determine the supplied property name which is smashing. If you were wondering, the first ",Object(a.b)("inlineCode",{parentName:"p"},"MemberExpression")," code is used for ",Object(a.b)("em",{parentName:"p"},"reference")," types. The ",Object(a.b)("inlineCode",{parentName:"p"},"UnaryExpression")," wrapping a ",Object(a.b)("inlineCode",{parentName:"p"},"MemberExpression")," code is used for ",Object(a.b)("em",{parentName:"p"},"value")," types. A good explanation of this can be found ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/12975480/761388"},"here"),"."),Object(a.b)("p",null,"My colleague directed me to ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/2916344"},"this crucial StackOverflow answer")," which provided some much needed direction when I was thrashing. And that's it; we're done, home free."))}p.isMDXComponent=!0}}]);
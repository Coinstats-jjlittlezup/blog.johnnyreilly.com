"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[62696],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Using Expressions with Constructors",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Expression","Constructors","Generic"],hide_table_of_contents:!1},l=void 0,c={permalink:"/2013/02/13/using-expressions-with-constructors",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-02-13-using-expressions-with-constructors.md",source:"@site/blog/2013-02-13-using-expressions-with-constructors.md",title:"Using Expressions with Constructors",description:"Every now and then you think \"x should be easy\" - and it isn't. I had one of those situations this morning. Something I thought would take 5 minutes had me still pondering 30 minutes later. I finally cracked it (with the help of a colleague - thanks Marc!) and I wanted to note down what I did since I'm sure to forget this.",date:"2013-02-13T00:00:00.000Z",formattedDate:"February 13, 2013",tags:[{label:"Expression",permalink:"/tags/expression"},{label:"Constructors",permalink:"/tags/constructors"},{label:"Generic",permalink:"/tags/generic"}],readingTime:1.835,truncated:!1,prevItem:{title:"Unit testing MVC controllers / Mocking UrlHelper",permalink:"/2013/02/18/unit-testing-mvc-controllers-mocking"},nextItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",permalink:"/2013/01/14/twitterbootstrapmvc4-meet-bootstrap_14"}},p=[{value:"So what&#39;s the problem?",id:"so-whats-the-problem",children:[]},{value:"So what&#39;s the solution?",id:"so-whats-the-solution",children:[]}],h={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every now and then you think \"x should be easy\" - and it isn't. I had one of those situations this morning. Something I thought would take 5 minutes had me still pondering 30 minutes later. I finally cracked it (with the help of a colleague - thanks Marc!) and I wanted to note down what I did since I'm sure to forget this."),(0,i.kt)("h2",{id:"so-whats-the-problem"},"So what's the problem?"),(0,i.kt)("p",null,"In our project we had a very simple validation class. It looked a bit like this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/4944545.js?file=FieldValidationBefore.cs"}),(0,i.kt)("p",null,"I wanted to take this class and extend it to have a constructor which allowed me to specify a Type and subsequently an Expression of that Type that allowed me to specify a property. 10 points if you read the last sentence and understood it without reading it a second time."),(0,i.kt)("p",null,"Code is a better illustration; take a look below. I wanted to go from #1 to #2:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/4944545.js?file=HowItIsUsed.cs"}),(0,i.kt)("p",null,'"Why?" I hear you ask. Well we had a swathe of statements in the code which test each property for a problem and would create a ',(0,i.kt)("inlineCode",{parentName:"p"},"FieldValidation")," with the very same property name if one was found. There's no real problem with that but I'm a man that likes to refactor. Property names change and I didn't want to have to remember to manually go through each ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldValidation")," keeping these in line. If I was using the actual property name to drive the creation of my ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldValidations")," then that problem disappears. And I like that."),(0,i.kt)("h2",{id:"so-whats-the-solution"},"So what's the solution?"),(0,i.kt)("p",null,"Well it's this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/4944545.js?file=FieldValidationAfter.cs"}),(0,i.kt)("p",null,"As you can see we have taken the original FieldValidation class and added in a generic constructor which instead of taking ",(0,i.kt)("inlineCode",{parentName:"p"},"string fieldName")," as a first argument it takes ",(0,i.kt)("inlineCode",{parentName:"p"},"Expression&lt;Func&lt;T, object&gt;&gt; expression"),". LINQ's Expression magic is used to determine the supplied property name which is smashing. If you were wondering, the first ",(0,i.kt)("inlineCode",{parentName:"p"},"MemberExpression")," code is used for ",(0,i.kt)("em",{parentName:"p"},"reference")," types. The ",(0,i.kt)("inlineCode",{parentName:"p"},"UnaryExpression")," wrapping a ",(0,i.kt)("inlineCode",{parentName:"p"},"MemberExpression")," code is used for ",(0,i.kt)("em",{parentName:"p"},"value")," types. A good explanation of this can be found ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/12975480/761388"},"here"),"."),(0,i.kt)("p",null,"My colleague directed me to ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/2916344"},"this crucial StackOverflow answer")," which provided some much needed direction when I was thrashing. And that's it; we're done, home free."))}u.isMDXComponent=!0}}]);
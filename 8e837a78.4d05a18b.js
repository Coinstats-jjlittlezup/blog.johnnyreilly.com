(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{566:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return c}));var a=n(3),o=n(7),i=(n(0),n(958)),r={title:"Unit Testing and Entity Framework: The Filth and the Fury",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["unit testing","Entity Framework","anti-pattern","MOQ"],hide_table_of_contents:!1},s={permalink:"/2012/10/03/unit-testing-and-entity-framework-filth",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-10-03-unit-testing-and-entity-framework-filth.md",source:"@site/blog/2012-10-03-unit-testing-and-entity-framework-filth.md",description:"Just recently I've noticed that there appears to be something of a controversy around Unit Testing and Entity Framework. I first came across it as I was Googling around for useful posts on using MOQ in conjunction with EF. I've started to notice the topic more and more and as I have mixed feelings on the subject (that is to say I don't have a settled opinion) I thought I'd write about this and see if I came to any kind of conclusion...",date:"2012-10-03T00:00:00.000Z",tags:[{label:"unit testing",permalink:"/tags/unit-testing"},{label:"Entity Framework",permalink:"/tags/entity-framework"},{label:"anti-pattern",permalink:"/tags/anti-pattern"},{label:"MOQ",permalink:"/tags/moq"}],title:"Unit Testing and Entity Framework: The Filth and the Fury",readingTime:7.325,truncated:!1,prevItem:{title:"Using Web Optimization with MVC 3",permalink:"/2012/10/05/using-web-optimization-with-mvc-3"},nextItem:{title:"Giving OData to CRM 4.0",permalink:"/2012/09/24/giving-odata-to-crm-40"}},l=[{value:"The Setup",id:"the-setup",children:[]},{value:"Using the Repository / Unit of Work Patterns",id:"using-the-repository--unit-of-work-patterns",children:[]},{value:"Or maybe I&#39;m wrong, maybe you can MOQ DbContext?",id:"or-maybe-im-wrong-maybe-you-can-moq-dbcontext",children:[]},{value:"Here come the nagging doubts...",id:"here-come-the-nagging-doubts",children:[{value:"1. Just because it compiles and passes unit tests don&#39;t imagine that means it works...",id:"1-just-because-it-compiles-and-passes-unit-tests-dont-imagine-that-means-it-works",children:[]},{value:"2. Complex queries",id:"2-complex-queries",children:[]},{value:"3. Lazy Loading",id:"3-lazy-loading",children:[]}]},{value:"Where does this leave us?",id:"where-does-this-leave-us",children:[]},{value:"Update",id:"update",children:[]},{value:"Update 2",id:"update-2",children:[]}],h={toc:l};function c(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Just recently I've noticed that there appears to be something of a controversy around Unit Testing and Entity Framework. I first came across it as I was Googling around for useful posts on using MOQ in conjunction with EF. I've started to notice the topic more and more and as I have mixed feelings on the subject (that is to say I don't have a settled opinion) I thought I'd write about this and see if I came to any kind of conclusion..."),Object(i.b)("h2",{id:"the-setup"},"The Setup"),Object(i.b)("p",null,"It started as I was working on a new project. We were using ASP.NET MVC 3 and Entity Framework with DbContext as our persistence layer. Rather than crowbarring the tests in afterwards the intention was to write tests to support the ongoing development. Not quite test driven development but certainly ",Object(i.b)("a",{parentName:"p",href:"http://blog.troyd.net/Test+Supported+Development+TSD+Is+NOT+Test+Driven+Development+TDD.aspx"},"test supported development"),". (Let's not get into the internecine conflict as to whether this is black belt testable code or not - it isn't but he who pays the piper etc.) Oh and we were planning to use MOQ as our mocking library."),Object(i.b)("p",null,"It was the first time I'd used DbContext rather than ObjectContext and so I thought I'd do a little research on how people were using DbContext with regards to testability. I had expected to find that there was some kind of consensus and an advised way forwards. I didn't get that at all. Instead I found a number of conflicting opinions."),Object(i.b)("h2",{id:"using-the-repository--unit-of-work-patterns"},"Using the Repository / Unit of Work Patterns"),Object(i.b)("p",null,"One thread of advice that came out was that people advised using the Repository / Unit of Work patterns as wrappers when it came to making testable code. This is kind of interesting in itself as to the best of my understanding ObjectSet / ObjectContext and DbSet / DbContext are both in themselves implementations of the Repository / Unit of Work patterns. So the advice was to build a Repository / Unit of Work pattern to wrap an existing Repository / Unit of Work pattern."),Object(i.b)("p",null,"Not as mad as it sounds. The reason for the extra abstraction is that ObjectContext / DbContext in the raw are not MOQ-able."),Object(i.b)("h2",{id:"or-maybe-im-wrong-maybe-you-can-moq-dbcontext"},"Or maybe I'm wrong, maybe you can MOQ DbContext?"),Object(i.b)("p",null,"No you can't. Well that's not true. You can and it's documented ",Object(i.b)("a",{parentName:"p",href:"http://romiller.com/2012/02/14/testing-with-a-fake-dbcontext/"},"here")," but there's a \"but\". You need to be using Entity Frameworks Code First approach; actually coding up your DbContext yourself. Before I'd got on board the project had already begun and we were already some way down the road of using the Database First approach. So this didn't seem to be a go-er really."),Object(i.b)("p",null,"The best article I found on testability and Entity Framework was ",Object(i.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/ff714955.aspx"},"this one")," by ",Object(i.b)("a",{parentName:"p",href:"http://odetocode.com/"},"K. Scott Allen")," which essentially detailed how you could implement the Repository / Unit of Work patterns on top of ObjectSet / ObjectContext. In the end I adapted this to do the same thing sat on top of DbSet / DbContext instead."),Object(i.b)("p",null,"With this in place I had me my testable code. I was quite happy with this as it seemed quite intelligible. My new approach looked similar to the existing DbSet / DbContext code and so there wasn't a great deal of re-writing to do. Sorted, right?"),Object(i.b)("h2",{id:"here-come-the-nagging-doubts"},"Here come the nagging doubts..."),Object(i.b)("p",null,"I did wonder, given that I found a number of articles about applying the Repository / Unit of Work patterns on top of ObjectSet / ObjectContext that there didn't seem to be many examples to do the same for DbSet / DbContext. (I did find a few examples of this but none that felt satisfactory to me for a variety of reasons.) This puzzled me."),Object(i.b)("p",null,"I also started to notice that a 1 man war was being waged against the approach I was using by ",Object(i.b)("a",{parentName:"p",href:"http://www.ladislavmrnka.com/about/"},"Ladislav Mrnka"),". Here are a couple of examples of his crusade:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://stackoverflow.com/a/6904479/761388"},"An answer on StackOverflow")," (there's quite a few similar answers around on StackOverflow saying similar)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://romiller.com/2012/02/14/testing-with-a-fake-dbcontext/#div-comment-1620"},"A comment on Rowan Millers post about fake DbContexts"))),Object(i.b)("p",null,"Ladislav is quite strongly of the opinion that wrapping DbSet / DbContext (and I presume ObjectSet / ObjectContext too) in a further Repository / Unit of Work is an antipattern. To quote him: ",Object(i.b)("em",{parentName:"p"},'"The reason why I don\u2019t like it is leaky abstraction in Linq-to-entities queries ... In your test you have Linq-to-Objects which is superset of Linq-to-entities and only subset of queries written in L2O is translatable to L2E"'),". It's worth looking at ",Object(i.b)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=gNeSZYke-_Q"},'Jon Skeets explanation of "leaky abstractions"')," which he did for TekPub."),Object(i.b)("p",null,"As much as I didn't want to admit it - I have come to the conclusion Ladislav probably has a point for a number of reasons:"),Object(i.b)("h3",{id:"1-just-because-it-compiles-and-passes-unit-tests-dont-imagine-that-means-it-works"},"1","."," Just because it compiles and passes unit tests don't imagine that means it works..."),Object(i.b)("p",null,"Unfortunately, a LINQ query that looks right, compiles and has passing unit tests written for it doesn't necessarily work. You can take a query that fails when executed against Entity Framework and come up with test data that will pass that unit test. As Ladislav rightly points out: ",Object(i.b)("inlineCode",{parentName:"p"},"LINQ-to-Objects != LINQ-to-Entities"),"."),Object(i.b)("p",null,"So in this case unit tests of this sort don't provide you with any security. What you need are **",Object(i.b)("u",null,"integration")),Object(i.b)("p",null,"** tests. Tests that run against an instance of the database and demonstrate that LINQ will actually translate queries / operations into valid SQL."),Object(i.b)("h3",{id:"2-complex-queries"},"2","."," Complex queries"),Object(i.b)("p",null,"You can write some pretty complex LINQ queries if you want. This is made particularly easy if you're using ",Object(i.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/ericlippert/archive/2009/12/07/query-transformations-are-syntactic.aspx"},"comprehension syntax"),". Whilst these queries may be simple to write it can be uphill work to generate test data to satisfy this. So much so that at times it can feel you've made a rod for your own back using this approach."),Object(i.b)("h3",{id:"3-lazy-loading"},"3","."," Lazy Loading"),Object(i.b)("p",null,"By default Entity Framework employs lazy loading. This a useful approach which reduces the amount of data that is transported. Sometimes this approach forces you to specify up front if you require a particular entity through use of ",Object(i.b)("inlineCode",{parentName:"p"},"Include")," statements. This again doesn't lend itself to testing particularly well."),Object(i.b)("h2",{id:"where-does-this-leave-us"},"Where does this leave us?"),Object(i.b)("p",null,"Having considered all of the above for a while and tried out various different approaches I think I'm coming to the conclusion that Ladislav is probably right. Implementing the Repository / Unit of Work patterns on top of ObjectSet / ObjectContext or DbSet / DbContext doesn't seem a worthwhile effort in the end."),Object(i.b)("p",null,"So what's a better idea? I think that in the name of simplicity you might as well have a simple class which wraps all of your Entity Framework code. This class could implement an interface and hence be straightforwardly MOQ-able (or alternatively all methods could be virtual and you could forego the interface). Along with this you should have integration tests in place which test the execution of the actual Entity Framework code against a test database."),Object(i.b)("p",null,"Now I should say this approach is not necessarily my final opinion. It seems sensible and practical. I think it is likely to simplify the tests that are written around a project. It will certainly be more reliable than just having unit tests in place."),Object(i.b)("p",null,"In terms of the project I'm working on at the moment we're kind of doing this in a halfway house sense. That is to say, we're still using our Repository / Unit of Work wrappers for DbSet / DbContext but where things move away from simple operations we're adding extra methods to our Unit of Work class or Repository classes which wrap this functionality and then testing it using our integration tests."),Object(i.b)("p",null,"I'm open to the possibility that my opinion may be modified further. And I'd be very interested to know what other people think on the subject."),Object(i.b)("h2",{id:"update"},"Update"),Object(i.b)("p",null,"It turns out that I'm not alone in thinking about this issue and indeed others have expressed this rather better than me - take a look at Jimmy Bogard's post for an example: ",Object(i.b)("a",{parentName:"p",href:"http://lostechies.com/jimmybogard/2012/09/20/limiting-your-abstractions/"},"http://lostechies.com/jimmybogard/2012/09/20/limiting-your-abstractions/"),"."),Object(i.b)("h2",{id:"update-2"},"Update 2"),Object(i.b)("p",null,"I've also recently watched the following Pluralsight course by Julie Lerman: ",Object(i.b)("a",{parentName:"p",href:"http://pluralsight.com/training/Courses/TableOfContents/efarchitecture#efarchitecture-m3-archrepo"},"http://pluralsight.com/training/Courses/TableOfContents/efarchitecture#efarchitecture-m3-archrepo"),'. In this course Julie talks about different implementations of the Repository and Unit of Work patterns in conjunction with Entity Framework. Julie is in favour of using this approach but in this module she elaborates on different "flavours" of these patterns that you might want to use for different reasons (bounded contexts / reference contexts etc). She makes a compelling case and helpfully she is open enough to say that this a point of contention in the community. At the end of watching this I think I felt happy that our "halfway house" approach seems to fit and seems to work. More than anything else Julie made clear that there isn\'t one definitively "true" approach. Rather many different but similar approaches for achieving the same goal. Good stuff Julie!'))}c.isMDXComponent=!0},958:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var h=o.a.createContext({}),c=function(t){var e=o.a.useContext(h),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return o.a.createElement(h.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,r=t.parentName,h=l(t,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(r,".").concat(d)]||u[d]||p[d]||i;return n?o.a.createElement(b,s(s({ref:e},h),{},{components:n})):o.a.createElement(b,s({ref:e},h))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[722],{786:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),o=(a(0),a(958)),i={title:"IQueryable... IEnumerable... Hmmm...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["LINQ","IEnumerable vs IQueryable"],hide_table_of_contents:!1},l={permalink:"/2015/11/30/iqueryable-ienumerable-hmmm",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-11-30-iqueryable-ienumerable-hmmm.md",source:"@site/blog/2015-11-30-iqueryable-ienumerable-hmmm.md",description:"So there I was, tip-tapping away at my keyboard when I became aware of the slowly loudening noise of a debate. It wasn't about poverty, war, civil rights or anything like that. No; this was far more contentious. It was about the behaviour of IQueryable&lt;T&gt; when mixed with IEnumerable&lt;T&gt;. I know, right, how could I not get involved?",date:"2015-11-30T00:00:00.000Z",tags:[{label:"LINQ",permalink:"/tags/linq"},{label:"IEnumerable vs IQueryable",permalink:"/tags/i-enumerable-vs-i-queryable"}],title:"IQueryable... IEnumerable... Hmmm...",readingTime:4.36,truncated:!1,prevItem:{title:"ES6 + TypeScript + Babel + React + Flux + Karma: The Secret Recipe",permalink:"/2015/12/16/es6-typescript-babel-react-flux-karma"},nextItem:{title:"The Names Have Been Changed...",permalink:"/2015/10/23/the-names-have-been-changed"}},s=[{value:"LINQ to Objects vs LINQ to ... ?",id:"linq-to-objects-vs-linq-to--",children:[]},{value:"Fixing the Problem",id:"fixing-the-problem",children:[]}],b={toc:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"So there I was, tip-tapping away at my keyboard when I became aware of the slowly loudening noise of a debate. It wasn't about poverty, war, civil rights or anything like that. No; this was far more contentious. It was about the behaviour of ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb351562(v=vs.100).aspx">IQueryable&lt;T&gt;</a>')," when mixed with ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/9eekhta0(v=vs.100).aspx">IEnumerable&lt;T&gt;</a>'),". I know, right, how could I not get involved?"),Object(o.b)("p",null," The code that was being debated was a database query that was being facilitated by Entity Framework. Now let me ask you a question: what is the problem with the methods below?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"private IEnumerable<Sage> GetSagesWithSayings()\n{\n    IQueryable<Sage> sageWithSayings = \n        from s in DbContext.Sages.Include(x => x.Sayings)\n        select s;\n\n    return sageWithSayings;\n}\n\npublic IEnumerable<Sage> GetSagesWithSayingsBornWithinTheLast100Years()\n{\n    var aHundredYearsAgo = DateTime.Now.AddYears(-100);\n    var sageWithSayings = GetSagesWithSayings().Where(x => x.DateOfBirth > aHundredYearsAgo);\n\n    return sageWithSayings;\n}\n")),Object(o.b)("p",null,"I've rather emphasised the problem by expressly declaring types in the ",Object(o.b)("inlineCode",{parentName:"p"},"GetSagesWithSayings")," method. More typically the ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;")," would be hiding itself beneath a ",Object(o.b)("inlineCode",{parentName:"p"},"var")," making the problem less obvious. But you get the point; it's something to do with an ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;")," being passed back as an ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable&lt;Sage&gt;"),"."),Object(o.b)("p",null,'The debate was raging around what this piece of code (or one much like it) actually did. One side positing "it\'ll get every record from the database and then throw away what it doesn\'t need in C#-land..." The opposing view being "are you sure about that? Doesn\'t it just get the records from the last hundred years from the database?"'),Object(o.b)("p",null,"So it comes down the SQL that ends up being generated. On the one hand it's going to get everything from the Sages table..."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"select ... \nfrom Sages ...\n")),Object(o.b)("p",null,"Or does it include a filter clause as well?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"select ... \nfrom Sages ...\nwhere DateOfBirth > '1915-11-30'\n")),Object(o.b)("p",null,"You probably know the answer... It gets everything. Every record is brought back from the database and those that are older than 100 years are then casually thrown away. So kinda wasteful. That's the problem. But why? And what does that tell us?"),Object(o.b)("h2",{id:"linq-to-objects-vs-linq-to--"},"LINQ to Objects vs LINQ to ... ?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'The term "LINQ to Objects" refers to the use of LINQ queries with any ',Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable")," or ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable&lt;T&gt;")," collection directly, without the use of an intermediate LINQ provider or API such as LINQ to SQL or LINQ to XML.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb351562(v=vs.100).aspx">IQueryable&lt;T&gt;</a>')," interface is intended for implementation by query providers."),Object(o.b)("p",{parentName:"blockquote"},"This interface inherits the ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/9eekhta0(v=vs.100).aspx">IEnumerable&lt;T&gt;</a>')," interface so that if it represents a query, the results of that query can be enumerated. Enumeration forces the expression tree associated with an ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb351562(v=vs.100).aspx">IQueryable&lt;T&gt;</a>')," object to be executed. Queries that do not return enumerable results are executed when the ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb549414(v=vs.100).aspx">Execute&lt;TResult&gt;(Expression)</a>')," method is called."),Object(o.b)("p",{parentName:"blockquote"},'The definition of "executing an expression tree" is specific to a query provider. For example, it may involve translating the expression tree to a query language appropriate for an underlying data source.')),Object(o.b)("p",null,'I know - check me out with my "quotes".'),Object(o.b)("p",null,"Now, ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable")," and ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable"),' are similar; for instance they are both considered "lazy" as they offer deferred execution. But there is an important difference between ',Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable")," and ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable"),"; namely that ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable")," hands off information about a query to another provider in order that they may decide how to do the necessary work. ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable")," does not; its work is done in memory by operating on the data it has."),Object(o.b)("p",null,"So let's apply this to our issue. We have an ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;")," and we return it as an ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable&lt;Sage&gt;"),". By doing this we haven't changed the underlying type; it's still an ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;"),". But by upcasting to ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable&lt;Sage&gt;")," we have told the compiler that we don't have an ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;"),". We've lied. I trust you're feeling guilty."),Object(o.b)("p",null,"No doubt whoever raised you told you not to tell lies. This was probably the very situation they had in mind. The implications of our dirty little fib come back to haunt us when we start to chain on subsequent filters. So when we perform our filter of ",Object(o.b)("inlineCode",{parentName:"p"},".Where(x =&gt; x.DateOfBirth &gt; aHundredYearsAgo)")," the compiler isn't going to get LINQ to Entities's extension methods in on this. No, it's going to get the LINQ to object extension methods instead."),Object(o.b)("p",null,"This is the cause of our problem. When it comes to execution we're not getting the database to do the heavy lifting because we've moved away from using ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable"),"."),Object(o.b)("h2",{id:"fixing-the-problem"},"Fixing the Problem"),Object(o.b)("p",null,"There are 2 courses of action open to you. The obvious course of action (and 99% of the time what you'd look to do) is change the signature of the `` method to return an IQueryable like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"private IQueryable<Sage> GetSagesWithSayings()\n    var sageWithSayings = // I prefer 'var', don't you?\n        from s in DbContext.Sages.Include(x => x.Sayings)\n        select s;\n\n    return sageWithSayings;\n}\n")),Object(o.b)("p",null,'The other alternative is what I like to think of as "the escape hatch": ',Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb353734(v=vs.100).aspx">AsQueryable</a>'),". This takes an ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable"),", checks if it's actually an ",Object(o.b)("inlineCode",{parentName:"p"},"IQueryable")," slumming it and casts back to that if it is. You might use this in a situation where you didn't have control over the data access code. Using it looks like this: (and would work whether ",Object(o.b)("inlineCode",{parentName:"p"},"GetSagesWithSayings")," was returning ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable"),Object(o.b)("em",{parentName:"p"},"or"),Object(o.b)("inlineCode",{parentName:"p"},"IQueryable"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"public IEnumerable<Sage> GetSagesWithSayingsBornWithinTheLast100Years()\n{\n    var aHundredYearsAgo = DateTime.Now.AddYears(-100);\n    var sageWithSayings =GetSagesWithSayings().AsQueryable().Where(x => x.DateOfBirth > aHundredYearsAgo);\n\n    return sageWithSayings;\n}\n")))}c.isMDXComponent=!0},958:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(i,".").concat(p)]||u[p]||h[p]||o;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);
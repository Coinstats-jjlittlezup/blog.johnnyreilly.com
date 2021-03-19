(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?r.a.createElement(h,i(i({ref:t},s),{},{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(1170)),l={title:"Elvis and King Concat",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Enumerable","Concat"],hide_table_of_contents:!1},i={permalink:"/2016/03/22/elvis-and-king-concat",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-03-22-elvis-and-king-concat.md",source:"@site/blog/2016-03-22-elvis-and-king-concat.md",description:"I hate LINQ's Enumerable.Concat when bringing together IEnumerables. Not the behaviour (I love that!) but rather how code ends up looking when you use it. Consider this:",date:"2016-03-22T00:00:00.000Z",formattedDate:"March 22, 2016",tags:[{label:"Enumerable",permalink:"/tags/enumerable"},{label:"Concat",permalink:"/tags/concat"}],title:"Elvis and King Concat",readingTime:2.535,truncated:!1,prevItem:{title:"Instant Stubs with JSON.Net (just add hot water)",permalink:"/2016/04/25/instant-stubs-with-jsonnet"},nextItem:{title:"Atom - Recovering from Corrupted Packages",permalink:"/2016/03/17/atom-recovering-from-corrupted-packages"}},c=[{value:"Attempt #1: <code>ConcatMany</code>",id:"attempt-1-concatmany",children:[]},{value:"Attempt #2: <code>EnumerableExtensions.Create</code>",id:"attempt-2-enumerableextensionscreate",children:[]},{value:"What Gives Elvis?",id:"what-gives-elvis",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I hate LINQ's ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-us/library/bb302894%28v=vs.110%29.aspx?f=255&amp;MSPPError=-2147217396">Enumerable.Concat</a>')," when bringing together ",Object(o.b)("inlineCode",{parentName:"p"},"IEnumerable"),"s. Not the behaviour (I love that!) but rather how code ends up looking when you use it. Consider this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var concatenated = myCollection?.Select(x => new ConcatObj(x)) ?? new ConcatObj[0].Concat(\n   myOtherCollection?.Select(x => new ConcatObj(x)) ?? new ConcatObj[0]\n);\n")),Object(o.b)("p",null,"In this example I'm bringing together 2 collections, either of which may be null (more on that later). I think we can all agree this doesn't represent a world of readability. I've also had to create a custom class ",Object(o.b)("inlineCode",{parentName:"p"},"ConcatObj")," because you can't create an empty array for an anonymous type in C#."),Object(o.b)("h2",{id:"attempt-1-concatmany"},"Attempt #1: ",Object(o.b)("inlineCode",{parentName:"h2"},"ConcatMany")),Object(o.b)("p",null,"After toying around with a bunch of different ideas I created this extension method:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"public static class FunctionalExtensions\n{\n    public static IEnumerable<T> ConcatMany<T>(\n        this IEnumerable<T> original,\n        params IEnumerable<T>[] enumerablesToConcat) => original.Concat(\n            enumerablesToConcat.Where(e => e != null).SelectMany(c => c)\n        );\n}\n")),Object(o.b)("p",null,"Thanks to the joy of ",Object(o.b)("inlineCode",{parentName:"p"},"params")," this extension allows me to bring together multiple IEnumerables into a single one but has the advantage of considerably cleaner calling code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var concatenated = Enumerable.Empty<ConcatObj>().ConcatMany(\n    myCollection?.Select(x => new ConcatObj(x)),\n    myOtherCollection?.Select(x => new ConcatObj(x))\n    );\n")),Object(o.b)("p",null,"For my money this is more readable and intent is clearer. Particularly as the number of contributing IEnumerables goes up. The downside is that I can\u2019t use anonymous objects because you need to tell the compiler what the type is when using ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-us/library/bb341042%28v=vs.110%29.aspx?f=255&amp;MSPPError=-2147217396">Enumerable.Empty</a>'),"."),Object(o.b)("p",null,"Wouldn't it be nice to have both:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Readable code and"),Object(o.b)("li",{parentName:"ol"},"Anonymous objects?")),Object(o.b)("h2",{id:"attempt-2-enumerableextensionscreate"},"Attempt #2: ",Object(o.b)("inlineCode",{parentName:"h2"},"EnumerableExtensions.Create")),Object(o.b)("p",null,"After batting round a few ideas (thanks Matt) I settled on this implementation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"public static class EnumerableExtensions\n{\n    public static IEnumerable<TSource> Create<TSource>(params IEnumerable<TSource>[] enumerables)\n    {\n        return Concat(enumerables.Where(e => e != null));\n    }\n\n    private static IEnumerable<TSource> Concat<TSource>(IEnumerable<IEnumerable<TSource>> enumerables)\n    {\n        foreach (var enumerable in enumerables)\n        {\n            foreach (var item in enumerable)\n            {\n                yield return item;\n            }\n        }\n    }\n}\n")),Object(o.b)("p",null,"Which allows for calling code like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var concatenated = EnumerableExtensions.Create(\n    myCollection?.Select(x => new { Anonymous = x.Types }),\n    myOtherCollection?.Select(x => new { Anonymous = x.Types })\n    );\n")),Object(o.b)("p",null,"That's right; anonymous types are back! Strictly speaking the ",Object(o.b)("inlineCode",{parentName:"p"},"Concat")," method above could be converted into a single ",Object(o.b)("inlineCode",{parentName:"p"},"SelectMany")," (and boy does ReSharper like telling me) but I'm quite happy with it as is. And to be honest, I so rarely get to use ",Object(o.b)("inlineCode",{parentName:"p"},"yield")," in my own code; I thought it might be nice to give it a whirl \ud83d\ude0a"),Object(o.b)("h2",{id:"what-gives-elvis"},"What Gives Elvis?"),Object(o.b)("p",null,"If you look closely at the implementation you'll notice that I purge all ",Object(o.b)("inlineCode",{parentName:"p"},"null"),"s when I'm bringing together the ",Object(o.b)("inlineCode",{parentName:"p"},"Enumerable"),'s. For why? Some may legitimately argue this is a bad idea. However, there is method in my "bad practice".'),Object(o.b)("p",null,"I've chosen to treat ",Object(o.b)("inlineCode",{parentName:"p"},"null"),' as "not important" for this use case. I\'m doing this because it emerges that ASP.NET MVC deserialises empty collections as nulls. (See ',Object(o.b)("a",{parentName:"p",href:"http://aspnetwebstack.codeplex.com/SourceControl/latest#src/System.Web.Mvc/ValueProviderResult.cs"},"here")," and play spot the ",Object(o.b)("inlineCode",{parentName:"p"},"return null;"),") Which is a pain. But thanks to the null purging behaviour of ",Object(o.b)("inlineCode",{parentName:"p"},"EnumerableExtensions.Create")," I can trust in the ",Object(o.b)("a",{parentName:"p",href:"https://csharp.today/c-6-features-null-conditional-and-and-null-coalescing-operators/"},"null-conditional (Elvis)")," operator to not do me wrong."))}b.isMDXComponent=!0}}]);
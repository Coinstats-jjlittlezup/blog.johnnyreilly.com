(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{306:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(966)),o={title:"Cache Rules Everything Around Me",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp net core","cache","wu-tang"],hide_table_of_contents:!1},c={permalink:"/2018/12/10/cache-rules-everything-around-me",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-12-10-cache-rules-everything-around-me.md",source:"@site/blog/2018-12-10-cache-rules-everything-around-me.md",description:"One thing that ASP.Net Core really got right was caching. IMemoryCache is a caching implementation that does just what I want. I love it. I take it everywhere. I've introduced it to my family.",date:"2018-12-10T00:00:00.000Z",tags:[{label:"asp net core",permalink:"/tags/asp-net-core"},{label:"cache",permalink:"/tags/cache"},{label:"wu-tang",permalink:"/tags/wu-tang"}],title:"Cache Rules Everything Around Me",readingTime:1.585,truncated:!1,prevItem:{title:"You Might Not Need thread-loader",permalink:"/2018/12/22/you-might-not-need-thread-loader"},nextItem:{title:"Snapshot Testing for C#",permalink:"/2018/11/17/snapshot-testing-for-c"}},l=[{value:"TimeSpan, TimeSpan Expiration Y&#39;all",id:"timespan-timespan-expiration-yall",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"One thing that ASP.Net Core really got right was caching. ",Object(i.b)("inlineCode",{parentName:"p"},'<a href="https://docs.microsoft.com/en-us/aspnet/core/performance/caching/memory">IMemoryCache</a>')," is a caching implementation that does just what I want. I love it. I take it everywhere. I've introduced it to my family."),Object(i.b)("h2",{id:"timespan-timespan-expiration-yall"},"TimeSpan, TimeSpan Expiration Y'all"),Object(i.b)("p",null,"To make usage of the ",Object(i.b)("inlineCode",{parentName:"p"},"IMemoryCache"),Object(i.b)("em",{parentName:"p"},"even")," more lovely I've written an extension method. I follow pretty much one cache strategy: ",Object(i.b)("inlineCode",{parentName:"p"},"SetAbsoluteExpiration")," and I just vary the expiration by an amount of time. This extension method implements that in a simple way; I call it ",Object(i.b)("inlineCode",{parentName:"p"},"GetOrCreateForTimeSpanAsync")," ","-"," catchy right? It looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Caching.Memory;\n\nnamespace My.Helpers {\n\n    public static class CacheHelpers {\n\n        public static async Task<TItem> GetOrCreateForTimeSpanAsync<TItem>(\n            this IMemoryCache cache,\n            string key,\n            Func<Task<TItem>> itemGetterAsync,\n            TimeSpan timeToCache\n        ) {\n            if (!cache.TryGetValue(key, out object result)) {\n                result = await itemGetterAsync();\n                if (result == null)\n                    return default(TItem);\n\n                var cacheEntryOptions = new MemoryCacheEntryOptions()\n                    .SetAbsoluteExpiration(timeToCache);\n\n                cache.Set(key, result, cacheEntryOptions);\n            }\n\n            return (TItem) result;\n        }\n    }\n}\n")),Object(i.b)("p",null,"Usage looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'private Task<superinterestingthing> GetSuperInterestingThingFromCache(Guid superInterestingThingId) => \n    _cache.GetOrCreateForTimeSpanAsync(\n        key: $"{nameof(MyClass)}:GetSuperInterestingThing:{superInterestingThingId}",\n        itemGetterAsync: () => GetSuperInterestingThing(superInterestingThingId),\n        timeToCache: TimeSpan.FromMinutes(5)\n    );\n</superinterestingthing>\n')),Object(i.b)("p",null,"This helper allows the consumer to provide three things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"key")," key for the item to be cached with"),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"itemGetterAsync")," which is the method that is used to retrieve a new value if an item cannot be found in the cache"),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"timeToCache")," which is the period of time that an item should be cached")),Object(i.b)("p",null,"If an item can't be looked up by the ",Object(i.b)("inlineCode",{parentName:"p"},"itemGetterAsync")," then ",Object(i.b)("em",{parentName:"p"},"nothing")," will be cached and a the ",Object(i.b)("inlineCode",{parentName:"p"},"default")," value of the expected type will be returned. This is important because lookups can fail, and there's nothing worse than a lookup failing and you caching ",Object(i.b)("inlineCode",{parentName:"p"},"null")," as a result."),Object(i.b)("p",null,"Go on, ask me how I know."),Object(i.b)("p",null,"This is a simple, clear and helpful API which makes interacting with ",Object(i.b)("inlineCode",{parentName:"p"},"IMemoryCache")," even more lovely than it was. Peep it y'all."))}p.isMDXComponent=!0},966:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,b=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
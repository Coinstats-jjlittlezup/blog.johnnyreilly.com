(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1189:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),y=r,d=c["".concat(i,".").concat(y)]||c[y]||b[y]||s;return n?a.a.createElement(d,o(o({ref:t},u),{},{components:n})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},968:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(4),a=n(10),s=(n(0),n(1189)),i={title:"Strongly typing react-querys useQueries",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["useQueries","react-query"],hide_table_of_contents:!1},o={permalink:"/2021/01/03/strongly-typing-react-query-s-usequeries",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-03-strongly-typing-react-query-s-usequeries.md",source:"@site/blog/2021-01-03-strongly-typing-react-query-s-usequeries.md",description:"If you haven't used react-query then I heartily recommend it. It provides (to quote the docs):",date:"2021-01-03T00:00:00.000Z",formattedDate:"January 3, 2021",tags:[{label:"useQueries",permalink:"/tags/use-queries"},{label:"react-query",permalink:"/tags/react-query"}],title:"Strongly typing react-querys useQueries",readingTime:7.455,truncated:!1,prevItem:{title:"Azure Easy Auth and Roles with .NET (and .NET Core)",permalink:"/2021/01/14/azure-easy-auth-and-roles-with-dotnet-and-core"},nextItem:{title:"Create React App with ts-loader and CRACO",permalink:"/2021/01/02/create-react-app-with-ts-loader-and-craco"}},l=[{value:"<code>useQueriesTyped</code> - a strongly typed wrapper for <code>useQueries</code>",id:"usequeriestyped---a-strongly-typed-wrapper-for-usequeries",children:[]},{value:"Usage",id:"usage",children:[]},{value:"In the box?",id:"in-the-box",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"If you haven't used ",Object(s.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},Object(s.b)("inlineCode",{parentName:"a"},"react-query"))," then I heartily recommend it. It provides (to quote the docs):"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Hooks for fetching, caching and updating asynchronous data in React")),Object(s.b)("p",null,"With version 3 of ",Object(s.b)("inlineCode",{parentName:"p"},"react-query"),", a new hook was added: ",Object(s.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQueries"},Object(s.b)("inlineCode",{parentName:"a"},"useQueries")),". This hook allows you fetch a variable number of queries at the same time. An example of what usage looks like is this (",Object(s.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/parallel-queries#dynamic-parallel-queries-with-usequeries"},"borrowed from the excellent docs"),"):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-tsx"},"function App({ users }) {\n   const userQueries = useQueries(\n     users.map(user => {\n       return {\n         queryKey: ['user', user.id],\n         queryFn: () => fetchUserById(user.id),\n       }\n     })\n   )\n }\n")),Object(s.b)("p",null,"Whilst ",Object(s.b)("inlineCode",{parentName:"p"},"react-query")," is written in TypeScript, the way that ",Object(s.b)("inlineCode",{parentName:"p"},"useQueries")," is presently written strips the types that are supplied to it. Consider ",Object(s.b)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-query/blob/d25ab3ef8260ea1c02b52b7082c3ce4120596b31/src/react/useQueries.ts#L8"},"the signature of the ",Object(s.b)("inlineCode",{parentName:"a"},"useQueries")),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"export function useQueries(queries: UseQueryOptions[]): UseQueryResult[] {\n")),Object(s.b)("p",null,"This returns an array of ",Object(s.b)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-query/blob/d25ab3ef8260ea1c02b52b7082c3ce4120596b31/src/react/types.ts#L42"},Object(s.b)("inlineCode",{parentName:"a"},"UseQueryResult")),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"export type UseQueryResult<\n  TData = unknown,\n  TError = unknown\n> = UseBaseQueryResult<TData, TError>\n")),Object(s.b)("p",null,"As you can see, no type parameters are passed to ",Object(s.b)("inlineCode",{parentName:"p"},"UseQueryResult")," in the ",Object(s.b)("inlineCode",{parentName:"p"},"useQueries")," signature and so it takes the default types of ",Object(s.b)("inlineCode",{parentName:"p"},"unknown"),". This forces the consumer to either assert the type that they believe to be there, or to use type narrowing to ensure the type. The former approach exposes a possibility of errors (the user can specify incorrect types) and the latter approach requires our code to perform type narrowing operations which are essentially unnecessary (the type hasn't changed since it was returned; it's simply been discarded)."),Object(s.b)("p",null,"What if there was a way to strongly type ",Object(s.b)("inlineCode",{parentName:"p"},"useQueries")," so we neither risked specifying incorrect types, nor wasted precious lines of code and CPU cycles performing type narrowing? There is my friends, read on!"),Object(s.b)("h2",{id:"usequeriestyped---a-strongly-typed-wrapper-for-usequeries"},Object(s.b)("inlineCode",{parentName:"h2"},"useQueriesTyped")," ","-"," a strongly typed wrapper for ",Object(s.b)("inlineCode",{parentName:"h2"},"useQueries")),Object(s.b)("p",null,"It's possible to wrap the ",Object(s.b)("inlineCode",{parentName:"p"},"useQueries")," hook with our own ",Object(s.b)("inlineCode",{parentName:"p"},"useQueriesTyped")," hook which exposes a strongly typed API. It looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"import { useQueries, UseQueryOptions, UseQueryResult } from 'react-query';\n\ntype Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;\n\nexport function useQueriesTyped<TQueries extends readonly UseQueryOptions[]>(\n    queries: [...TQueries]\n): {\n  [ArrayElement in keyof TQueries]: UseQueryResult<\n    TQueries[ArrayElement] extends { select: infer TSelect }\n      ? TSelect extends (data: any) => any\n        ? ReturnType<TSelect>\n        : never\n      : Awaited<\n          ReturnType<\n            NonNullable<\n              Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']\n            >\n          >\n        >\n  >\n} {\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    return useQueries(queries as UseQueryOptions<unknown, unknown, unknown>[]) as any;\n}\n")),Object(s.b)("p",null,"Let's unpack this. The first and most significant thing to note here is that ",Object(s.b)("inlineCode",{parentName:"p"},"queries")," moves from being ",Object(s.b)("inlineCode",{parentName:"p"},"UseQueryOptions[]")," to being ",Object(s.b)("inlineCode",{parentName:"p"},"TQueries extends readonly UseQueryOptions[]")," ","-"," far more fancy! The reason for this change is we want the type parameters to flow through on an element by element basis in the supplied array. ",Object(s.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types"},"TypeScript 4's variadic tuple types")," should allow us to support this. So the new array signature looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"queries: [...TQueries]\n")),Object(s.b)("p",null,"Where ",Object(s.b)("inlineCode",{parentName:"p"},"TQueries")," is"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"TQueries extends readonly UseQueryOptions[]\n")),Object(s.b)("p",null,"What this means is, that each element of the rest parameters array must have a type of ",Object(s.b)("inlineCode",{parentName:"p"},"readonly UseQueryOptions"),". Otherwise the compiler will shout at us (and rightly so)."),Object(s.b)("p",null,"So that's what's coming in.... What's going out? Well the return type of ",Object(s.b)("inlineCode",{parentName:"p"},"useQueriesTyped")," is the tremendously verbose:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"{ \n  [ArrayElement in keyof TQueries]: UseQueryResult<\n    TQueries[ArrayElement] extends { select: infer TSelect }\n      ? TSelect extends (data: any) => any\n        ? ReturnType<TSelect>\n        : never\n      : Awaited<\n          ReturnType<\n            NonNullable<\n              Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']\n            >\n          >\n        >\n  >\n}\n")),Object(s.b)("p",null,"Let's walk this through. First of all we'll look at this bit:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"{ [ArrayElement in keyof TQueries]: /* the type has been stripped to protect your eyes */ }\n")),Object(s.b)("p",null,"On the face of it, it looks like we're returning an ",Object(s.b)("inlineCode",{parentName:"p"},"Object"),", not an ",Object(s.b)("inlineCode",{parentName:"p"},"Array"),". There's nuance here; ",Object(s.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"JavaScript ",Object(s.b)("inlineCode",{parentName:"a"},"Array"),"s are ",Object(s.b)("inlineCode",{parentName:"a"},"Object"),"s"),"."),Object(s.b)("p",null,"More specifically, by approaching the signature this way, we can acquire the ",Object(s.b)("inlineCode",{parentName:"p"},"ArrayElement")," type which represents each of the keys of the array. Consider this array:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"[1, 'two', new Date()]\n")),Object(s.b)("p",null,"For the above, ",Object(s.b)("inlineCode",{parentName:"p"},"ArrayElement")," would take the values ",Object(s.b)("inlineCode",{parentName:"p"},"0"),", ",Object(s.b)("inlineCode",{parentName:"p"},"1")," and ",Object(s.b)("inlineCode",{parentName:"p"},"2"),". And this is going to prove useful in a moment as we're going to index into our ",Object(s.b)("inlineCode",{parentName:"p"},"TQueries")," object to surface up the return types for each element of our return array from there."),Object(s.b)("p",null,"Now let's look at the return type for each element. The signature of that looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"UseQueryResult<\n    TQueries[ArrayElement] extends { select: infer TSelect }\n      ? TSelect extends (data: any) => any\n        ? ReturnType<TSelect>\n        : never\n      : Awaited<\n          ReturnType<\n            NonNullable<\n              Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']\n            >\n          >\n        >\n  >\n")),Object(s.b)("p",null,"Gosh... Well there's a lot going on here. Let's start in the middle and work our way out."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"TQueries[ArrayElement]\n")),Object(s.b)("p",null,"The above code indexes into our ",Object(s.b)("inlineCode",{parentName:"p"},"TQueries")," array for each element of our strongly typed indexer ",Object(s.b)("inlineCode",{parentName:"p"},"ArrayElement"),". So it might resolve the first element of an array to ",Object(s.b)("inlineCode",{parentName:"p"},"{ queryKey: 'key1', queryFn: () =&gt; 1 }"),", for example. Next:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']\n")),Object(s.b)("p",null,"We're now taking the type of each element provided, and grabbing the type of the ",Object(s.b)("inlineCode",{parentName:"p"},"queryFn")," property. It's this type which contains the type of the data that will be passed back, that we want to make use of. So for an examples of ",Object(s.b)("inlineCode",{parentName:"p"},"[{ queryKey: 'key1', queryFn: () =&gt; 1 }, { queryKey: 'key2', queryFn: () =&gt; 'two' }, { queryKey: 'key3', queryFn: () =&gt; new Date() }]")," we'd have the type: ",Object(s.b)("inlineCode",{parentName:"p"},"const result: [() =&gt; number, () =&gt; string, () =&gt; Date]"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>\n")),Object(s.b)("p",null,"The next stage is using ",Object(s.b)("inlineCode",{parentName:"p"},"NonNullable")," on our ",Object(s.b)("inlineCode",{parentName:"p"},"queryFn"),", given that on ",Object(s.b)("inlineCode",{parentName:"p"},"UseQueryOptions")," it's an optional type. In our use case it is not optional / nullable and so we need to enforce that."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"ReturnType<NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>>\n")),Object(s.b)("p",null,"Now we want to get the return type of our ",Object(s.b)("inlineCode",{parentName:"p"},"queryFn")," ","-"," as that's the data type we're interested. So we use TypeScript's ",Object(s.b)("inlineCode",{parentName:"p"},"ReturnType")," for that."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"ReturnType<NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>>\n")),Object(s.b)("p",null,"Here we're using ",Object(s.b)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#recursive-conditional-types"},"TypeScript 4.1's recursive conditional types")," to unwrap a ",Object(s.b)("inlineCode",{parentName:"p"},"Promise")," (or not) to the relevant type. This allows us to get the actual type we're interested in, as opposed to the ",Object(s.b)("inlineCode",{parentName:"p"},"Promise")," of that type. Finally we have the type we need! So we can do this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;\n\nAwaited<ReturnType<NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>>>\n")),Object(s.b)("p",null,"It's at this point where we reach a conditional type in our type definition. Essentially, we have two different typing behaviours in play:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Where we're inferring the return type of the query"),Object(s.b)("li",{parentName:"ol"},"Where we're inferring the return type of a ",Object(s.b)("inlineCode",{parentName:"li"},"select"),". A ",Object(s.b)("inlineCode",{parentName:"li"},"select")," option can be used to transform or select a part of the data returned by the query function. It has the signature: ",Object(s.b)("inlineCode",{parentName:"li"},"select: (data: TData) =&gt; TSelect"))),Object(s.b)("p",null,"We've been unpacking the first of these so far. Now we encounter the conditional type that chooses between them:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"TQueries[ArrayElement] extends { select: infer TSelect }\n      ? TSelect extends (data: any) => any\n        ? ReturnType<TSelect>\n        : never\n      : Awaited< /*...*/ >\n  >\n")),Object(s.b)("p",null,"What's happening here is:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"if a query includes a ",Object(s.b)("inlineCode",{parentName:"li"},"select")," option, we infer what that is and then subsequently extract the return type of the ",Object(s.b)("inlineCode",{parentName:"li"},"select"),"."),Object(s.b)("li",{parentName:"ul"},"otherwise we use the query return type (as we we've previously examined)")),Object(s.b)("p",null,"Finally, whichever type we end up with, we supply that type as a parameter to ",Object(s.b)("inlineCode",{parentName:"p"},"UseQueryResult"),". And that is what is going to surface up our types to our users."),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("p",null,"So what does using our ",Object(s.b)("inlineCode",{parentName:"p"},"useQueriesTyped")," hook look like?"),Object(s.b)("p",null,"Well, supplying ",Object(s.b)("inlineCode",{parentName:"p"},"queryFn"),"s with different signatures looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"const result = useQueriesTyped({ queryKey: 'key1', queryFn: () => 1 }, { queryKey: 'key2', queryFn: () => 'two' });\n// const result: [QueryObserverResult<number, unknown>, QueryObserverResult<string, unknown>]\n\nif (result[0].data) {\n    // number\n}\nif (result[1].data) {\n    // string\n}\n")),Object(s.b)("p",null,"As you can see, we're being returned a ",Object(s.b)("inlineCode",{parentName:"p"},"Tuple")," and the exact types are flowing through."),Object(s.b)("p",null,"Next let's look at a ",Object(s.b)("inlineCode",{parentName:"p"},".map")," example with identical types in our supplied array:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"const resultWithAllTheSameTypes = useQueriesTyped(...[1, 2].map((x) => ({ queryKey: `${x}`, queryFn: () => x })));\n// const resultWithAllTheSameTypes: QueryObserverResult<number, unknown>[]\n\nif (resultWithAllTheSameTypes[0].data) {\n    // number\n}\n")),Object(s.b)("p",null,"The return type of ",Object(s.b)("inlineCode",{parentName:"p"},"number")," is flowing through for each element."),Object(s.b)("p",null,"Finally let's look at how ",Object(s.b)("inlineCode",{parentName:"p"},".map")," handles arrays with different types of elements:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"const resultWithDifferentTypes = useQueriesTyped(\n    ...[1, 'two', new Date()].map((x) => ({ queryKey: `${x}`, queryFn: () => x }))\n);\n//const resultWithDifferentTypes: QueryObserverResult<string | number | Date, unknown>[]\n\nif (resultWithDifferentTypes[0].data) {\n    // string | number | Date\n}\n\nif (resultWithDifferentTypes[1].data) {\n    // string | number | Date\n}\n\nif (resultWithDifferentTypes[2].data) {\n    // string | number | Date\n}\n")),Object(s.b)("p",null,"Admittedly this last example is a somewhat unlikely scenario. But again we can see the types flowing through - though further narrowing would be required here to get to the exact type."),Object(s.b)("h2",{id:"in-the-box"},"In the box?"),Object(s.b)("p",null,"It's great that we can wrap ",Object(s.b)("inlineCode",{parentName:"p"},"useQueries")," to get a strongly typed experience. It would be tremendous if this functionality was available by default. ",Object(s.b)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-query/pull/1527"},"There's a discussion going on around this"),". It's possible that this wrapper may no longer need to exist, and that would be amazing. In the meantime; enjoy!"))}p.isMDXComponent=!0}}]);
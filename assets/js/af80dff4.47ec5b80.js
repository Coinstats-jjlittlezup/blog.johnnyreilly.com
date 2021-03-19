(window.webpackJsonp=window.webpackJsonp||[]).push([[760],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(r,".").concat(h)]||u[h]||b[h]||o;return n?i.a.createElement(d,l(l({ref:t},c),{},{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),o=(n(0),n(1170)),r={title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},l={permalink:"/2020/11/14/bulletproof-uniq-with-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-11-14-bulletproof-uniq-with-typescript.md",source:"@site/blog/2020-11-14-bulletproof-uniq-with-typescript.md",description:"Never neglect the possibilities of a code review. There are times when you raise a PR and all you want is for everyone to hit approve so you can merge, merge and ship, ship! This can be a missed opportunity. For as much as I'd like to imagine my code is perfect, it's patently not. There's always scope for improvement.",date:"2020-11-14T00:00:00.000Z",formattedDate:"November 14, 2020",tags:[],title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",readingTime:3.845,truncated:!1,prevItem:{title:"Images in MarkDown for the Azure DevOps Marketplace!",permalink:"/2020/11/28/images-in-markdown-for-azure-devops-marketplace"},nextItem:{title:"Throttling data requests with React Hooks",permalink:"/2020/11/10/throttle-data-requests-with-react-hooks"}},s=[{value:"&quot;What&#39;s this?&quot;",id:"whats-this",children:[]},{value:"<code>uniq</code> v1",id:"uniq-v1",children:[]},{value:"<code>uniq</code> v2",id:"uniq-v2",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Never neglect the possibilities of a code review. There are times when you raise a PR and all you want is for everyone to hit approve so you can merge, merge and ship, ship! This can be a missed opportunity. For as much as I'd like to imagine my code is perfect, it's patently not. There's always scope for improvement."),Object(o.b)("h2",{id:"whats-this"},'"What\'s this?"'),Object(o.b)("p",null,"This week afforded me that opportunity. I was walking through a somewhat complicated PR on a call and someone said \"what's this?\". They'd spotted an expression much like this in my code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const myValues = [...new Set(allTheValuesSupplied)];\n")),Object(o.b)("p",null,"What is that? Well, it's a number of things:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Remove_duplicate_elements_from_the_array"},"It's a way to get the unique values in a collection.")),Object(o.b)("li",{parentName:"ol"},"It's a pro-tip and a coding BMX trick.")),Object(o.b)("p",null,"What do I mean? Well, this is indeed a technique for getting the unique values in a collection. But it relies upon you knowing a bunch of things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"},Object(o.b)("inlineCode",{parentName:"a"},"Set"))," contains unique values. If you add multiple identical values, only a single value will be stored."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set"},Object(o.b)("inlineCode",{parentName:"a"},"Set")," constructor")," takes ",Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol"},"iterable objects"),". This means we can ",Object(o.b)("inlineCode",{parentName:"li"},"new")," up a ",Object(o.b)("inlineCode",{parentName:"li"},"Set"),' with an array that we want to "unique-ify" and we will have a ',Object(o.b)("inlineCode",{parentName:"li"},"Set")," that contains those unique values."),Object(o.b)("li",{parentName:"ul"},"If you want to go on to do filtering / mapping etc on your unique values, you'll need to get them out of the ",Object(o.b)("inlineCode",{parentName:"li"},"Set"),". This is because (regrettably) ECMAScript iterables don't implicitly support these operations and neither are methods such as these part of the ",Object(o.b)("inlineCode",{parentName:"li"},"Set")," API. The easiest way to do that is to ",Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"spread")," into a new array which you can then operate upon. ")),Object(o.b)("p",null,"I have this knowledge. Lots of people have this knowledge. But whilst this may be the case, using this technique goes against what I would generally consider to be a good tenet of programming: comprehensibility. When you read this code above, it doesn't immediately tell you what it's doing. This is a strike against it."),Object(o.b)("p",null,'Further to that, it\'s "noisy". Even if the reader does have this knowledge, as they digest the code, they have to mentally unravel it. "Oh it\'s a ',Object(o.b)("inlineCode",{parentName:"p"},"Set"),", we're passing in values, then spreading it out, it's probably intended to get the unique values.... Right, cool, cool.... Continue!\""),Object(o.b)("iframe",{src:"https://giphy.com/embed/4NnSe87mg3h25JYIDh",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:""}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://twitter.com/margaridagp"},"Margarida Pereira")," explicitly called this out and I found myself agreeing. Let's make a ",Object(o.b)("inlineCode",{parentName:"p"},"uniq")," function!"),Object(o.b)("h2",{id:"uniq-v1"},Object(o.b)("inlineCode",{parentName:"h2"},"uniq")," v1"),Object(o.b)("p",null,"I wrote a very simple ",Object(o.b)("inlineCode",{parentName:"p"},"uniq")," function which looked like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"/**\n * Return the unique values found in the passed iterable\n */\nfunction uniq<TElement>(iterableToGetUniqueValuesOf: Iterable<TElement>) {\n    return [...new Set(iterableToGetUniqueValuesOf)];\n}\n")),Object(o.b)("p",null,"Usage of this was simple:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'uniq([1,1,1,3,1,1,2]) // produces [1, 3, 2]\nuniq(["John", "Guida", "Ollie", "Divya", "John"]) // produces ["John", "Guida", "Ollie", "Divya"]\n')),Object(o.b)("p",null,"And I thought this was tremendous. I committed and pushed. I assumed there was no more to be done. Guida (Margarida) then made this very helpful comment:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"BTW, I found a big bold warning that ",Object(o.b)("inlineCode",{parentName:"p"},"new Set()")," compares objects by reference (unless they're primitives) so it might be worth adding a comment to warn people that uniq/distinct compares objects by reference: ",Object(o.b)("a",{parentName:"p",href:"https://codeburst.io/javascript-array-distinct-5edc93501dc4"},"https://codeburst.io/javascript-array-distinct-5edc93501dc4"))),Object(o.b)("p",null,"She was right! If a caller was to, say, pass a collection of objects to ",Object(o.b)("inlineCode",{parentName:"p"},"uniq")," then they'd end up highly disappointed. Consider:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'uniq([{ name: "John" }, { name: "John" }]) // produces [{ name: "John" }, { name: "John" }]\n')),Object(o.b)("p",null,"We can do better!"),Object(o.b)("h2",{id:"uniq-v2"},Object(o.b)("inlineCode",{parentName:"h2"},"uniq")," v2"),Object(o.b)("p",null,"I like compilers shouting at me. Or more accurately, I like compilers telling me when something isn't valid / supported / correct. I wanted ",Object(o.b)("inlineCode",{parentName:"p"},"uniq")," to mirror the behaviour of ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," ","-"," to only support primitives such as ",Object(o.b)("inlineCode",{parentName:"p"},"string"),", ",Object(o.b)("inlineCode",{parentName:"p"},"number")," etc. So I made a new version of ",Object(o.b)("inlineCode",{parentName:"p"},"uniq")," that hardened up the generic contraints:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"/**\n * Return the unique values found in the passed iterable\n */\nfunction uniq<TElement extends string | number | bigint | boolean | symbol>(\n    iterableToGetUniqueValuesOf: Iterable<TElement>\n) {\n    return [...new Set(iterableToGetUniqueValuesOf)];\n}\n")),Object(o.b)("p",null,"With this in place, the compiler started shouting in the most helpful way. When I re-attemped ",Object(o.b)("inlineCode",{parentName:"p"},'[{ name: "John" }, { name: "John" }]')," the compiler hit me with:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Argument of type '{ name: string; }[]' is not assignable to parameter of type 'Iterable&lt;string | number | bigint | boolean | symbol&gt;'.")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/FAYw9gdgzmA2CmA6WYDmAKArhAlgR3QG0BvAAggEMBbeALlICIApMACwgdIF8AaUsyjXrM2HbgF0AlJNCQYCZGiy4ChEewZ91HKTOAB6AFSHgpQ6QBK8AC6YAThFLXW8UtnyZXANwqxPUUgAzMGwAE1IcR2dXAAcKKCh4cJxreDsKACMEU0N9YEDsEGscSDcVAB4AFQBRBBoIa1J4AA9UiFCAqGs7SNRSAB9yTCoMtIHSDJxUSMbBjLA4eApHQagATxG4AD50U1J9lLTMhEqwAHEbAFUVTwA1X38AeUD6AElU9Kz4Ktr4eustsBJPw9vs7DZ7I5CIgYRB4AB3UgAZRs6EOnxO5yuN3g9z88Cgz0k4gA3MAuMAgA"},"Take a look.")),Object(o.b)("p",null,"This is good. This is descriptive code that only allows legitimate inputs. It should lead to less confusion and a reduced likelihood of issues in Production. It's also a nice example of how code review can result in demonstrably better code. Thanks Guida!"))}p.isMDXComponent=!0}}]);
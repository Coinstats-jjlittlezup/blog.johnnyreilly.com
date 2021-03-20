(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=r,d=b["".concat(i,".").concat(h)]||b[h]||u[h]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},955:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1176)),i={title:"(Top One, Nice One) Get Sorted",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["sort","javascript","OrderBy","LINQ"],hide_table_of_contents:!1},c={permalink:"/2015/08/13/top-one-nice-one-get-sorted",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-08-13-top-one-nice-one-get-sorted.md",source:"@site/blog/2015-08-13-top-one-nice-one-get-sorted.md",description:"I was recently reading a post by Jaime Gonz\xe1lez Garc\xeda which featured the following mind-bending proposition:",date:"2015-08-13T00:00:00.000Z",formattedDate:"August 13, 2015",tags:[{label:"sort",permalink:"/tags/sort"},{label:"javascript",permalink:"/tags/javascript"},{label:"OrderBy",permalink:"/tags/order-by"},{label:"LINQ",permalink:"/tags/linq"}],title:"(Top One, Nice One) Get Sorted",readingTime:7.84,truncated:!1,prevItem:{title:"Things Done Changed",permalink:"/2015/09/10/things-done-changed"},nextItem:{title:"Upgrading to Globalize 1.x for Dummies",permalink:"/2015/07/30/upgrading-to-globalize-1x-for-dummies"}},s=[{value:"Sort",id:"sort",children:[]},{value:"String Comparer",id:"string-comparer",children:[]},{value:"Number Comparer",id:"number-comparer",children:[]},{value:"Descending Into the Pit of Success",id:"descending-into-the-pit-of-success",children:[]},{value:"<code>ThenBy</code>",id:"thenby",children:[]},{value:"<code>composeComparers</code>: The Sequel",id:"composecomparers-the-sequel",children:[]},{value:"<code>composeComparers</code>: The Ultimate",id:"composecomparers-the-ultimate",children:[]},{value:"Update 08/10/2018: Now TypeScript",id:"update-08102018-now-typescript",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I was recently reading ",Object(o.b)("a",{parentName:"p",href:"http://www.barbarianmeetscoding.com/blog/2015/07/09/mastering-the-arcane-art-of-javascript-mancy-for-c-sharp-developers-chapter-7-using-linq-in-javascript/"},"a post by Jaime Gonz\xe1lez Garc\xeda")," which featured the following mind-bending proposition:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"What if I told you that JavaScript has ",Object(o.b)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/bb397926.aspx"},"LINQ"),"??")),Object(o.b)("p",null,"It got me thinking about one of favourite features of LINQ: ",Object(o.b)("a",{parentName:"p",href:"http://www.dotnetperls.com/orderby-extension"},"ordering using OrderBy, ThenBy...")," The ability to simply expose a collection of objects in a given order with a relatively terse and descriptive syntax. It is fantastically convenient, expressive and something I've been missing in JavaScript. But if Jaime is right... Well, let's see what we can do."),Object(o.b)("h2",{id:"sort"},"Sort"),Object(o.b)("p",null,"JavaScript arrays have a ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"sort")," method. To quote MDN:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"arr.sort([compareFunction])"),"### ",Object(o.b)("inlineCode",{parentName:"p"},"compareFunction")),Object(o.b)("p",{parentName:"blockquote"},"Optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.")),Object(o.b)("p",null,"We want to use the ",Object(o.b)("inlineCode",{parentName:"p"},"sort")," function to introduce some LINQ-ish ordering goodness. Sort of. See what I did there?"),Object(o.b)("p",null,"Before we get going it's worth saying that LINQ's ",Object(o.b)("inlineCode",{parentName:"p"},"OrderBy")," and JavaScript's ",Object(o.b)("inlineCode",{parentName:"p"},"sort")," are not the same thing. ",Object(o.b)("inlineCode",{parentName:"p"},"sort")," actually changes the order of the array. However, ",Object(o.b)("inlineCode",{parentName:"p"},"OrderBy")," returns an ",Object(o.b)("inlineCode",{parentName:"p"},"IOrderedEnumerable")," which when iterated returns the items of the collection in a particular order. An important difference. If preserving the original order of my array was important to me (spoiler: mostly it isn't) then I could make a call to ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">slice</a>')," prior to calling ",Object(o.b)("inlineCode",{parentName:"p"},"sort"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sort")," also returns the array to the caller which is nice for chaining and means we can use it in a similar fashion to the way we use ",Object(o.b)("inlineCode",{parentName:"p"},"OrderBy"),". With that in mind, we're going to create comparer functions which will take a lambda / arrow function (ES6 alert!) and return a function which will compare based on the supplied lambda."),Object(o.b)("h2",{id:"string-comparer"},"String Comparer"),Object(o.b)("p",null,"Let's start with ordering by string properties:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function stringComparer(propLambda) {\n  return (obj1, obj2) => {\n    const obj1Val = propLambda(obj1) || '';\n    const obj2Val = propLambda(obj2) || '';\n    return obj1Val.localeCompare(obj2Val);\n  };\n}\n")),Object(o.b)("p",null,"We need some example data to sort: (I can only apologise for my lack of inspiration here)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const foodInTheHouse = [\n  { what: 'cake',   daysSincePurchase: 2 },\n  { what: 'apple',  daysSincePurchase: 8 },\n  { what: 'orange', daysSincePurchase: 6 },\n  { what: 'apple',  daysSincePurchase: 2 },\n];\n")),Object(o.b)("p",null,"If we were doing a sort by strings in LINQ we wouldn't need to implement our own comparer. And the code we'd write would look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"var foodInTheHouseSorted = foodInTheHouse.OrderBy(x => x.what);\n")),Object(o.b)("p",null,"With that in mind, here's how it would look to use our shiny and new ",Object(o.b)("inlineCode",{parentName:"p"},"stringComparer"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const foodInTheHouseSorted = foodInTheHouse.sort(stringComparer(x => x.what));\n\n// foodInTheHouseSorted: [\n//   { what: 'apple',  daysSincePurchase: 8 },\n//   { what: 'apple',  daysSincePurchase: 2 },\n//   { what: 'cake',   daysSincePurchase: 2 },\n//   { what: 'orange', daysSincePurchase: 6 }\n// ]\n\n// PS Don't forget, for our JavaScript: foodInTheHouse === foodInTheHouseSorted\n//    But for the LINQ:                 foodInTheHouse !=  foodInTheHouseSorted\n//    \n//    However, if I'd done this:\n\nconst foodInTheHouseSlicedAndSorted = foodInTheHouse.slice().sort(stringComparer(x => x.what));\n\n//    then:                             foodInTheHouse !== foodInTheHouseSlicedAndSorted \n//\n//    I shan't mention this again.\n")),Object(o.b)("h2",{id:"number-comparer"},"Number Comparer"),Object(o.b)("p",null,"Well that's strings sorted (quite literally). Now, what about numbers?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function numberComparer(propLambda) {\n  return (obj1, obj2) => {\n    const obj1Val = propLambda(obj1);\n    const obj2Val = propLambda(obj2);\n    if (obj1Val > obj2Val) {\n      return 1;\n    }\n    else if (obj1Val < obj2Val) {\n      return -1;\n    }\n    return 0;\n  };\n}\n")),Object(o.b)("p",null,"If we use the ",Object(o.b)("inlineCode",{parentName:"p"},"numberComparer")," on our original array it looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const foodInTheHouseSorted = foodInTheHouse.sort(numberComparer(x => x.daysSincePurchase));\n\n// foodInTheHouseSorted: [\n//   { what: 'cake',   daysSincePurchase: 2 },\n//   { what: 'apple',  daysSincePurchase: 2 },\n//   { what: 'orange', daysSincePurchase: 6 },\n//   { what: 'apple',  daysSincePurchase: 8 }\n// ]\n")),Object(o.b)("h2",{id:"descending-into-the-pit-of-success"},"Descending Into the Pit of Success"),Object(o.b)("p",null,"Well this is all kinds of fabulous. But something's probably nagging at you... What about ",Object(o.b)("inlineCode",{parentName:"p"},"OrderByDescending"),"? What about when I want to sort in the reverse order? May I present the ",Object(o.b)("inlineCode",{parentName:"p"},"reverse")," function:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function reverse(comparer) {\n  return (obj1, obj2) => comparer(obj1, obj2) * -1;\n}\n")),Object(o.b)("p",null,"As the name suggests, this function takes a given comparer that's handed to it and returns a function that inverts the results of executing that comparer. Clear as mud? A comparer can return 3 types of return values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"0 - implies equality for ",Object(o.b)("inlineCode",{parentName:"li"},"obj1")," and ",Object(o.b)("inlineCode",{parentName:"li"},"obj2")),Object(o.b)("li",{parentName:"ul"},"positive - implies ",Object(o.b)("inlineCode",{parentName:"li"},"obj1")," is greater than ",Object(o.b)("inlineCode",{parentName:"li"},"obj2")," by the ordering criterion"),Object(o.b)("li",{parentName:"ul"},"negative - implies ",Object(o.b)("inlineCode",{parentName:"li"},"obj1")," is less than ",Object(o.b)("inlineCode",{parentName:"li"},"obj2")," by the ordering criterion")),Object(o.b)("p",null,"Our ",Object(o.b)("inlineCode",{parentName:"p"},"reverse")," function takes the comparer it is given and returns a new comparer that will return a positive value where the old one would have returned a negative and vica versa. (Equality is unaffected.) An alternative implementation would have been this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function reverse(comparer) {\n  return (obj1, obj2) => comparer(obj2, obj1);\n}\n")),Object(o.b)("p",null,"Which is more optimal and even simpler as it just swaps the values supplied to the comparer. Whatever tickles your fancy. Either way, when used it looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const foodInTheHouseSorted = foodInTheHouse.sort(reverse(stringComparer(x => x.what)));\n\n// foodInTheHouseSorted: [\n//   { what: 'orange', daysSincePurchase: 6 },\n//   { what: 'cake',   daysSincePurchase: 2 },\n//   { what: 'apple',  daysSincePurchase: 8 },\n//   { what: 'apple',  daysSincePurchase: 2 }\n// ]\n")),Object(o.b)("p",null,"If you'd rather not have a function wrapping a function inline then you could create ",Object(o.b)("inlineCode",{parentName:"p"},"stringComparerDescending"),", a ",Object(o.b)("inlineCode",{parentName:"p"},"numberComparerDescending")," etc implementations. Arguably it might make for a nicer API. I'm not unhappy with the present approach myself and so I'll leave it as is. But it's an option."),Object(o.b)("h2",{id:"thenby"},Object(o.b)("inlineCode",{parentName:"h2"},"ThenBy")),Object(o.b)("p",null,"So far we can sort arrays by strings, we can sort arrays by numbers and we can do either in descending order. It's time to take it to the next level people. That's right ",Object(o.b)("inlineCode",{parentName:"p"},"ThenBy"),"; I want to be able to sort by one criteria and then by a subcriteria. So perhaps I want to eat the food in the house in alphabetical order, but if I have multiple apples I want to eat the ones I bought most recently first (because the other ones look old, brown and yukky). This may also be a sign I haven't thought my life through, but it's a choice that people make. People that I know. People I may have married."),Object(o.b)("p",null,"It's time to compose our comparers together. May I present... drum roll.... the ",Object(o.b)("inlineCode",{parentName:"p"},"composeComparers")," function:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function composeComparers(...comparers) {\n  return (obj1, obj2) => {\n    const comparer = comparers.find(c => c(obj1, obj2) !== 0);\n    return (comparer) ? comparer(obj1, obj2) : 0;\n  };\n}\n")),Object(o.b)("p",null,"This fine function takes any number of comparers that have been supplied to it. It then returns a comparer function which, when called, iterates through each of the original comparers and executes them until it finds one that returns a value that is not 0 (ie represents that the 2 items are not equal). It then sends that non-zero value back or if all was equal then sends back 0."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const foodInTheHouseSorted = foodInTheHouse.sort(composeComparers(\n    stringComparer(x => x.what),\n    numberComparer(x => x.daysSincePurchase),\n));\n\n// foodInTheHouseSorted: [\n//   { what: 'apple',  daysSincePurchase: 2 },\n//   { what: 'apple',  daysSincePurchase: 8 },\n//   { what: 'cake',   daysSincePurchase: 2 },\n//   { what: 'orange', daysSincePurchase: 6 }\n// ]\n")),Object(o.b)("h2",{id:"composecomparers-the-sequel"},Object(o.b)("inlineCode",{parentName:"h2"},"composeComparers"),": The Sequel"),Object(o.b)("p",null,"I'm not gonna lie - I was feeling quite pleased with this approach. I shared it with my friend (and repeated colleague) ",Object(o.b)("a",{parentName:"p",href:"http://blog.peterfoldi.com/"},"Peter Foldi"),". The next day I found this in my inbox:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function composeComparers(...comparers) {\n  return (obj1, obj2) => comparers.reduce((prev, curr) => prev || curr(obj1, obj2), 0);\n}\n")),Object(o.b)("p",null,"Dammit he's improved it. It's down to 1 line of code, it doesn't execute a non-zero returning comparer twice and it doesn't rely on ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">find</a>')," which only arrives with ES6. So if you wanted to backport to ES5 then this is a better choice."),Object(o.b)("p",null,"The only criticism I can make of it is that it iterates through each of the comparers even when it doesn't need to execute them. But that's just carping really."),Object(o.b)("h2",{id:"composecomparers-the-ultimate"},Object(o.b)("inlineCode",{parentName:"h2"},"composeComparers"),": The Ultimate"),Object(o.b)("p",null,"So naturally I thought I was done. Showing Peter's improvements to the estimable Matthew Horsley I learned that this was not so. Because he reached for the keyboard and entered this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'function composeComparers(...comparers) {\n  // README: <a href="https://wiki.haskell.org/Function_composition">https://wiki.haskell.org/Function_composition</a>\n  return comparers.reduce((prev, curr) => (a, b) => prev(a, b) || curr(a, b));\n}\n')),Object(o.b)("p",null,"That's right, he's created a function which takes a number of comparers and reduced them up front into a single comparer function. This means that when the sort takes place there is no longer a need to iterate through the comparers, just execute them."),Object(o.b)("p",null,"I know."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"http://i.qkme.me/3qknmj.jpg",alt:null})),Object(o.b)("p",null,"I'll get my coat..."),Object(o.b)("script",{src:"https://gist.github.com/johnnyreilly/22f7c05b02c2129b89ef.js"}),Object(o.b)("h2",{id:"update-08102018-now-typescript"},"Update 08/10/2018: Now TypeScript"),Object(o.b)("p",null,"You want to do this with TypeScript? Use this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"type Comparer<TObject> = (obj1: TObject, obj2: TObject) => number;\n\nexport function stringComparer<TObject>(propLambda: (obj: TObject) => string): Comparer<TObject> {\n    return (obj1: TObject, obj2: TObject) => {\n        const obj1Val = propLambda(obj1) || '';\n        const obj2Val = propLambda(obj2) || '';\n        return obj1Val.localeCompare(obj2Val);\n    };\n}\n\nexport function numberComparer<TObject>(propLambda: (obj: TObject) => number): Comparer<TObject> {\n    return (obj1: TObject, obj2: TObject) => {\n        const obj1Val = propLambda(obj1);\n        const obj2Val = propLambda(obj2);\n        if (obj1Val > obj2Val) {\n            return 1;\n        } else if (obj1Val < obj2Val) {\n            return -1;\n        }\n        return 0;\n    };\n}\n\nexport function reverse<TObject>(comparer: Comparer<TObject>) {\n    return (obj1: TObject, obj2: TObject) => comparer(obj2, obj1);\n}\n\nexport function composeComparers<TObject>(...comparers: Comparer<TObject>[]) {\n    return comparers.reduce((prev, curr) => (a, b) => prev(a, b) || curr(a, b));\n}\n")))}p.isMDXComponent=!0}}]);
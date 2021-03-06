(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{664:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var i=n(3),a=n(7),o=(n(0),n(958)),r={title:"Symbiotic Definitely Typed",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["TypeScript","react-testing-library","Definitely Typed"],hide_table_of_contents:!1},s={permalink:"/2019/08/17/symbiotic-definitely-typed",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-08-17-symbiotic-definitely-typed.md",source:"@site/blog/2019-08-17-symbiotic-definitely-typed.md",description:'I did ponder calling this post "how to enable a good TypeScript developer experience for npm modules that aren\'t written in TypeScript"... Not exactly pithy though.',date:"2019-08-17T00:00:00.000Z",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"react-testing-library",permalink:"/tags/react-testing-library"},{label:"Definitely Typed",permalink:"/tags/definitely-typed"}],title:"Symbiotic Definitely Typed",readingTime:5.64,truncated:!1,prevItem:{title:"Coming Soon: Definitely Typed",permalink:"/2019/09/14/coming-soon-definitely-typed"},nextItem:{title:"Hard-coding a Claim in Development Mode in ASP.Net Core",permalink:"/2019/08/02/hard-coding-claim-in-development-mode"}},p=[{value:"Update: Use a Loose Version Range in <code>package.json</code>",id:"update-use-a-loose-version-range-in-packagejson",children:[]},{value:"Update 2: Further Discussions!",id:"update-2-further-discussions",children:[]}],l={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'I did ponder calling this post "how to enable a good TypeScript developer experience for npm modules that aren\'t written in TypeScript"... Not exactly pithy though.'),Object(o.b)("p",null,"Definitely Typed is the resource which allows developers to use TypeScript with existing JavaScript libraries that ship without their own type definitions."),Object(o.b)("p",null,"DT began as a way to enable interop between JS and TS. When DT started, everything on npm was JavaScript. Over time it has become more common for libraries (eg ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx"},"Mobx")," / ",Object(o.b)("a",{parentName:"p",href:"https://github.com/angular/angular"},"Angular"),") to be written (or rewritten) in TypeScript. For publishing, they are compiled down to JS with perfect type definitions generated from the TypeScript alongside the compiled JavaScript. These libraries do not need to exist in Definitely Typed anymore."),Object(o.b)("p",null,"Another pattern that has emerged over time is that of type definitions being removed from Definitely Typed to live and be maintained alongside the libraries they support. An example of this is ",Object(o.b)("a",{parentName:"p",href:"https://github.com/moment/moment"},"MomentJS"),"."),Object(o.b)("p",null,"This week, I think for the first time, there emerged another approach. ",Object(o.b)("a",{parentName:"p",href:"https://kentcdodds.com/"},"Kent C Dodds"),"' ",Object(o.b)("inlineCode",{parentName:"p"},"react-testing-library")," had started out with the MomentJS approach of hosting type definitions alongside the JavaScript source code. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/testing-library/react-testing-library/pull/437"},"Alex Krolic raised a PR which proposed removing the type definitions from the RTL repo in favor of having the community maintain them at DefinitelyTyped.")),Object(o.b)("p",null,"I'll directly quote Kent's explanation of the motivation for this:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We were getting a lot of drive-by contributions to the TypeScript typings and many pull requests would either sit without being reviewed by someone who knows TypeScript well enough, or be merged by a maintainer who just hoped the contributor knew what they were doing. This resulted in a poor experience for TypeScript users who could experience type definition churn and delays, and it became a burden on project maintainers as well (most of us don't know TypeScript very well). Moving the type definitions to DefinitelyTyped puts the maintenance in much more capable hands.")),Object(o.b)("p",null,"I have to admit I was reticent about this idea in the first place. I like the idea that types ship with the package they support. It's a good developer experience; users install your package and it works with TypeScript straight out of the box. However Alex's PR addressed a real issue: what do you do when the authors of a package aren't interested / equipped / don't have the time to support TypeScript? Or don't want to deal with the noise of TypeScript related PRs which aren't relevant to them. What then?"),Object(o.b)("p",null,"Alex was saying, let's not force it. Let the types and the library be maintained separately. This can and is done well already; React is a case in point. The React team does not work on the type definitions for React, that's done (excellently) by a crew of dedicated React lovers in Definitely Typed."),Object(o.b)("p",null,"It's a fair point. The thing that was sad about this move was that the developer experience was going to have more friction. Users would have to ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add -D @testing-library/react")," and then subsequently ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add -D @types/testing-library__react")," to get the types."),Object(o.b)("p",null,"This two step process isn't the end of the world, but it does make it marginally harder for TypeScript users to get up and running. It reduces the developer joy. As a side note, this is made more unlovely by ",Object(o.b)("inlineCode",{parentName:"p"},"@testing-library/react")," being a scoped package. ",Object(o.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/47296731/how-can-i-install-typescript-declarations-for-scoped-namespaced-packages-via-ty"},"Types for a scoped package have a quirky convention for publishing.")," A fictional scoped package of ",Object(o.b)("inlineCode",{parentName:"p"},"@foo/bar")," would be published to npm as: ",Object(o.b)("inlineCode",{parentName:"p"},"@types/foo__bar"),". This is functional but non-obvious; it's tricky to discover. A two step process instead of a one step process is a non-useful friction that it would be great to eliminate."),Object(o.b)("p",null,"Fortunately, Kent and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/FredyC"},"Daniel K")," had one of these moments:"),Object(o.b)("p",null," ",Object(o.b)("a",{parentName:"p",href:"https://4.bp.blogspot.com/-tmH5nbo_kGY/XG-8jmokKdI/AAAAAAAAN_U/umq24uPgdKAZgAlePU5teNs57i8RWOg7gCPcBGAYYCw/s1600/hang-on-lads-ive-got-a-great-idea.jpg"},"![null]","(<https://4.bp.blogspot.com/-tmH5nbo_kGY/XG-8jmokKdI/AAAAAAAAN_U/umq24uPgdKAZgAlePU5teNs57i8RWOg7gCPcBGAYYCw/s640/hang-on-lads-ive-got-a-great-idea.jpg> =640x271)"),"Kent suggested that at the same time as dropping the type definitions that were shipped with the library, we try making ",Object(o.b)("inlineCode",{parentName:"p"},"@types/testing-library__react")," a dependency of ",Object(o.b)("inlineCode",{parentName:"p"},"@testing-library/react"),". This would mean that people installing ",Object(o.b)("inlineCode",{parentName:"p"},"@testing-library/react")," would get ",Object(o.b)("inlineCode",{parentName:"p"},"@types/testing-library__react")," installed ",Object(o.b)("em",{parentName:"p"},"automatically"),". So from the developers point of view, it's as though the type definitions shipped with the package directly."),Object(o.b)("p",null,"To cut a long story short reader, that's what happened. If you're using ",Object(o.b)("inlineCode",{parentName:"p"},"@testing-library/react")," from 9.1.2 you're getting Definitely Typed under the covers. This was ",Object(o.b)("a",{parentName:"p",href:"https://github.com/testing-library/react-testing-library/pull/437#issuecomment-521763117"},"nicely illustrated by Kent")," showing what the TypeScript consumption experience looked like before the Definitely Typed switch:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://1.bp.blogspot.com/-wJCLzg0uPuU/XVhqss-lXwI/AAAAAAAAQ48/SGCl9aEHGjUh1qE7OpyyY8MhqPkd2Rw4wCPcBGAYYCw/s1600/RTL-9.1.1.png"},"![null]","(<https://1.bp.blogspot.com/-wJCLzg0uPuU/XVhqss-lXwI/AAAAAAAAQ48/SGCl9aEHGjUh1qE7OpyyY8MhqPkd2Rw4wCPcBGAYYCw/s640/RTL-9.1.1.png> =640x385)"),"And here's what it looked like after:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://4.bp.blogspot.com/-jeTQeQnKpVY/XVhrvq8D-0I/AAAAAAAAQ5E/tOieujozFZQ_pttgStAAj_zQwtpGl1AsgCLcBGAs/s1600/RTL-9.1.2.png"},"![null]","(<https://4.bp.blogspot.com/-jeTQeQnKpVY/XVhrvq8D-0I/AAAAAAAAQ5E/tOieujozFZQ_pttgStAAj_zQwtpGl1AsgCLcBGAs/s640/RTL-9.1.2.png> =640x403)"),"Identical! i.e it worked. I grant you this is one of the more boring before / after comparisons there is\u2026 But hopefully you can see it demonstrates that this is giving us exactly what we need."),Object(o.b)("p",null,"To quote Kent once more:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"By adding the type definitions to the dependencies of React Testing Library, the experience for users is completely unchanged. So it's a huge improvement for the maintenance of the type definitions without any breaking changes for the users of those definitions.")),Object(o.b)("p",null,"This is clearly an approach that's useful; it adds value. It would be tremendous to see other libraries that aren't written in TypeScript but would like to enable a good TypeScript experience for those people that do use TS also adopting this approach."),Object(o.b)("h2",{id:"update-use-a-loose-version-range-in-packagejson"},"Update: Use a Loose Version Range in ",Object(o.b)("inlineCode",{parentName:"h2"},"package.json")),Object(o.b)("p",null,"When I ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly/status/1162843916661592064"},"tweeted this article")," it prompted this helpful response from ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/atcb"},"Andrew Branch")," of the TypeScript team:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},">"," use a loose version range This is my advice as well and should probably be mentioned in the article TBH."),Object(o.b)("p",{parentName:"blockquote"},"\u2014 Kent C. Dodds (@kentcdodds) ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/kentcdodds/status/1162876792287293440?ref_src=twsrc%5Etfw"},"August 18, 2019"))),Object(o.b)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),Object(o.b)("p",null,"Andrew makes the useful point that if you are adding support for TypeScript via an ",Object(o.b)("inlineCode",{parentName:"p"},"@types/...")," dependency then it's wise to do so with a loose version range. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/testing-library/react-testing-library/blob/c4ba755e42938018ec67dbc716037cfafca15e03/package.json#L46"},"In the case of RTL we did it like this:")),Object(o.b)("pre",null,'    "@types/testing-library__react": "^9.1.0"'),Object(o.b)("p",null,"i.e. Any type definition with a version of ",Object(o.b)("inlineCode",{parentName:"p"},"9.1")," or greater (whilst still lower than ",Object(o.b)("inlineCode",{parentName:"p"},"10.0.0"),") is considered valid. You could go even looser than that. If you really don't want to think about TypeScript beyond adding the dependency then a completely loose version range would do:"),Object(o.b)("pre",null,'    "@types/testing-library__react": "*"'),Object(o.b)("p",null,"This will always install the latest version of the ",Object(o.b)("inlineCode",{parentName:"p"},"@types/testing-library__react")," dependency and (importantly) allow users to override if there's a problematic ",Object(o.b)("inlineCode",{parentName:"p"},"@types/testing-library__react")," out there. This level of looseness is not really advised though. As in the scenario when a library (and associated type definitions) do a major release, users of the old major would get the wrong definitions by default when installing or upgrading (in range)."),Object(o.b)("p",null,"Probably the most helpful approach is the approach followed by RTL; fixing the major version but allowing all minor and patch releases ",Object(o.b)("em",{parentName:"p"},"inside")," a major version."),Object(o.b)("h2",{id:"update-2-further-discussions"},"Update 2: Further Discussions!"),Object(o.b)("p",null,"The technique used in this blog post sparked an interesting conversation with members of the TypeScript team when it was applied to ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/testing-library/jest-dom">https://github.com/testing-library/jest-dom</a>'),". ",Object(o.b)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom/issues/123#issuecomment-523586977"},"The conversation can be read here"),"."))}c.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),b=i,u=d["".concat(r,".").concat(b)]||d[b]||h[b]||o;return n?a.a.createElement(u,s(s({ref:t},l),{},{components:n})):a.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
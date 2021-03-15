(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(1166)),i={title:"ts-loader Project References: First Blood",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["TypeScript","project references","ts-loader","Webpack"],hide_table_of_contents:!1},l={permalink:"/2018/09/23/ts-loader-project-references-first-blood",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-09-23-ts-loader-project-references-first-blood.md",source:"@site/blog/2018-09-23-ts-loader-project-references-first-blood.md",description:"So project references eh? They shipped with TypeScript 3. We've just shipped initial support for project references in ts-loader v5.2.0. All the hard work was done by the amazing Andrew Branch. In fact I'd recommend taking a gander at the PR. Yay Andrew!",date:"2018-09-23T00:00:00.000Z",formattedDate:"September 23, 2018",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"project references",permalink:"/tags/project-references"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],title:"ts-loader Project References: First Blood",readingTime:3.385,truncated:!1,prevItem:{title:"Brand New Fonting Awesomeness",permalink:"/2018/10/07/font-awesome-brand-icons-react"},nextItem:{title:"Ivan Drago and Definitely Typed",permalink:"/2018/09/15/ivan-drago-and-definitely-typed"}},s=[{value:"TL;DR",id:"tldr",children:[]},{value:"Like <code>tsc</code>, but <em>not</em> like <code>tsc --build</code>",id:"like-tsc-but-not-like-tsc---build",children:[]},{value:"\u201cHey, don\u2019t you think that sounds kind of useless and terrible?\u201d",id:"hey-dont-you-think-that-sounds-kind-of-useless-and-terrible",children:[]},{value:"<code>outDir</code> Windows problemo.",id:"outdir-windows-problemo",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So ",Object(a.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/project-references.html"},"project references")," eh? They shipped with ",Object(a.b)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/#project-references"},"TypeScript 3"),". We've just shipped initial support for project references in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/releases/tag/v5.2.0"},Object(a.b)("inlineCode",{parentName:"a"},"ts-loader v5.2.0")),". All the hard work was done by the amazing ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/atcb"},"Andrew Branch"),". In fact I'd recommend taking a gander at ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/817"},"the PR"),". Yay Andrew!"),Object(a.b)("p",null," This post will take us through the nature of the support for project references in ts-loader now and what we hope the future will bring. It ",Object(a.b)("strike",null,"rips off shamelessly")),Object(a.b)("p",null," borrows from the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader#projectreferences-boolean-defaultfalse"},Object(a.b)("inlineCode",{parentName:"a"},"README.md"))," documentation that Andrew wrote as part of the PR. Because I am not above stealing."),Object(a.b)("h2",{id:"tldr"},"TL;DR"),Object(a.b)("p",null,"Using project references currently requires building referenced projects outside of ts-loader. We don\u2019t want to keep it that way, but we\u2019re releasing what we\u2019ve got now. To try it out, you\u2019ll need to pass ",Object(a.b)("inlineCode",{parentName:"p"},"projectReferences: true")," to ",Object(a.b)("inlineCode",{parentName:"p"},"loaderOptions"),"."),Object(a.b)("h2",{id:"like-tsc-but-not-like-tsc---build"},"Like ",Object(a.b)("inlineCode",{parentName:"h2"},"tsc"),", but ",Object(a.b)("em",{parentName:"h2"},"not")," like ",Object(a.b)("inlineCode",{parentName:"h2"},"tsc --build")),Object(a.b)("p",null,"ts-loader has partial support for ",Object(a.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/project-references.html"},"project references")," in that it will ",Object(a.b)("em",{parentName:"p"},"load")," dependent composite projects that are already built, but will not currently ",Object(a.b)("em",{parentName:"p"},"build/rebuild")," those upstream projects. The best way to explain exactly what this means is through an example. Say you have a project with a project reference pointing to the ",Object(a.b)("inlineCode",{parentName:"p"},"lib/")," directory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"tsconfig.json\napp.ts\nlib/\n  tsconfig.json\n  niftyUtil.ts\n")),Object(a.b)("p",null,"And we\u2019ll assume that the root ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," has ",Object(a.b)("inlineCode",{parentName:"p"},'{ "references": { "path": "lib" } }'),", which means that any import of a file that\u2019s part of the ",Object(a.b)("inlineCode",{parentName:"p"},"lib")," sub-project is treated as a reference to another project, not just a reference to a TypeScript file. Before discussing how ts-loader handles this, it\u2019s helpful to review at a really basic level what ",Object(a.b)("inlineCode",{parentName:"p"},"tsc")," itself does here. If you were to run ",Object(a.b)("inlineCode",{parentName:"p"},"tsc")," on this tiny example project, the build would fail with the error:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"error TS6305: Output file 'lib/niftyUtil.d.ts' has not been built from source file 'lib/niftyUtil.ts'.\n")),Object(a.b)("p",null,"Using project references actually instructs ",Object(a.b)("inlineCode",{parentName:"p"},"tsc"),Object(a.b)("em",{parentName:"p"},"not")," to build anything that\u2019s part of another project from source, but rather to look for any ",Object(a.b)("inlineCode",{parentName:"p"},".d.ts")," and ",Object(a.b)("inlineCode",{parentName:"p"},".js")," files that have already been generated from a previous build. Since we\u2019ve never built the project in ",Object(a.b)("inlineCode",{parentName:"p"},"lib")," before, those files don\u2019t exist, so building the root project fails. Still just thinking about how ",Object(a.b)("inlineCode",{parentName:"p"},"tsc")," works, there are two options to make the build succeed: either run ",Object(a.b)("inlineCode",{parentName:"p"},"tsc -p lib/tsconfig.json"),Object(a.b)("em",{parentName:"p"},"first"),", or simply run ",Object(a.b)("inlineCode",{parentName:"p"},"tsc --build"),", which will figure out that ",Object(a.b)("inlineCode",{parentName:"p"},"lib")," hasn\u2019t been built and build it first for you."),Object(a.b)("p",null,"Ok, so how is that relevant to ts-loader? Because the best way to think about what ts-loader does with project references is that it acts like ",Object(a.b)("inlineCode",{parentName:"p"},"tsc"),", but ",Object(a.b)("em",{parentName:"p"},"not")," like ",Object(a.b)("inlineCode",{parentName:"p"},"tsc --build"),". If you run ts-loader on a project that\u2019s using project references, and any upstream project hasn\u2019t been built, you\u2019ll get the exact same ",Object(a.b)("inlineCode",{parentName:"p"},"error TS6305")," that you would get with ",Object(a.b)("inlineCode",{parentName:"p"},"tsc"),". If you modify a source file in an upstream project and don\u2019t rebuild that project, ",Object(a.b)("inlineCode",{parentName:"p"},"ts-loader")," won\u2019t have any idea that you\u2019ve changed anything\u2014it will still be looking at the output from the last time you ",Object(a.b)("em",{parentName:"p"},"built")," that file."),Object(a.b)("h2",{id:"hey-dont-you-think-that-sounds-kind-of-useless-and-terrible"},"\u201cHey, don\u2019t you think that sounds kind of useless and terrible?\u201d"),Object(a.b)("p",null,"Well, sort of. You can consider it a work-in-progress. It\u2019s true that on its own, as of today, ts-loader doesn\u2019t have everything you need to take advantage of project references in webpack. In practice, though, ",Object(a.b)("em",{parentName:"p"},"consuming")," upstream projects and ",Object(a.b)("em",{parentName:"p"},"building")," upstream projects are somewhat separate concerns. Building them will likely come in a future release. For background, see the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/issues/815"},"original issue"),"."),Object(a.b)("h2",{id:"outdir-windows-problemo"},Object(a.b)("inlineCode",{parentName:"h2"},"outDir")," Windows problemo."),Object(a.b)("p",null,"At the moment, composite projects built using the ",Object(a.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html"},Object(a.b)("inlineCode",{parentName:"a"},"outDir")," compiler option"),' cannot be consumed using ts-loader on Windows. If you try to, ts-loader throws a "',Object(a.b)("inlineCode",{parentName:"p"},"has not been built from source file"),'" error. ',Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/817#issuecomment-422245998"},"You can see Andrew and I puzzling over it in the PR.")," We don't know why yet; it's possible there's a bug in ",Object(a.b)("inlineCode",{parentName:"p"},"tsc"),". It's more likely there's a bug in ",Object(a.b)("inlineCode",{parentName:"p"},"ts-loader"),". Hopefully it's going to get solved at some point. (Hey, maybe you're the one to solve it!) Either way, we didn't want to hold back from releasing. So if you're building on Windows then avoid building ",Object(a.b)("inlineCode",{parentName:"p"},"composite")," projects using ",Object(a.b)("inlineCode",{parentName:"p"},"outDir"),"."))}p.isMDXComponent=!0}}]);
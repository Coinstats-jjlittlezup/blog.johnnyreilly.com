(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1160:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=c(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(8),r=(n(0),n(1160)),i={title:"Dynamic import: I've been awaiting you...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["await","async","TypeScript","Karma","Babel","Webpack","dynamic import"],hide_table_of_contents:!1},s={permalink:"/2017/07/02/dynamic-import-ive-been-await-ing-you",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-07-02-dynamic-import-ive-been-await-ing-you.md",source:"@site/blog/2017-07-02-dynamic-import-ive-been-await-ing-you.md",description:"One of the most exciting features to ship with TypeScript 2.4 was support for the dynamic import expression. To quote the release blog post:",date:"2017-07-02T00:00:00.000Z",formattedDate:"July 2, 2017",tags:[{label:"await",permalink:"/tags/await"},{label:"async",permalink:"/tags/async"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Karma",permalink:"/tags/karma"},{label:"Babel",permalink:"/tags/babel"},{label:"Webpack",permalink:"/tags/webpack"},{label:"dynamic import",permalink:"/tags/dynamic-import"}],title:"Dynamic import: I've been awaiting you...",readingTime:5.07,truncated:!1,prevItem:{title:"A Haiku on the Problem with SemVer: Us",permalink:"/2017/07/29/a-haiku-on-problem-with-semver-us"},nextItem:{title:"Windows Defender Step Away From npm",permalink:"/2017/06/11/windows-defender-step-away-from-npm"}},p=[{value:"TypeScript Setup",id:"typescript-setup",children:[]},{value:"Babel Setup",id:"babel-setup",children:[]},{value:"webpack",id:"webpack",children:[]},{value:"ts-loader example",id:"ts-loader-example",children:[]}],l={toc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"One of the most exciting features to ship with TypeScript 2.4 was support for the dynamic import expression. To quote the ",Object(r.b)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/#dynamic-import-expressions"},"release blog post"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"import")," expressions are a new feature in ECMAScript that allows you to asynchronously request a module at any arbitrary point in your program. These modules come back as ",Object(r.b)("inlineCode",{parentName:"p"},"Promise"),"s of the module itself, and can be ",Object(r.b)("inlineCode",{parentName:"p"},"await"),"-","ed in an async function, or can be given a callback with ",Object(r.b)("inlineCode",{parentName:"p"},".then"),"."),Object(r.b)("p",{parentName:"blockquote"},"..."),Object(r.b)("p",{parentName:"blockquote"},"Many bundlers have support for automatically splitting output bundles (a.k.a. \u201ccode splitting\u201d) based on these ",Object(r.b)("inlineCode",{parentName:"p"},"import()")," expressions, so consider using this new feature with the ",Object(r.b)("inlineCode",{parentName:"p"},"esnext")," module target. Note that this feature won\u2019t work with the ",Object(r.b)("inlineCode",{parentName:"p"},"es2015")," module target, since the feature is anticipated for ES2018 or later.")),Object(r.b)("p",null,"As the post makes clear, this adds support for a very bleeding edge ECMAScript feature. This is not fully standardised yet; it's currently at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tc39/proposals"},"stage 3")," on the TC39 proposals list. That means it's at the ",Object(r.b)("a",{parentName:"p",href:"https://tc39.github.io/process-document/"},"Candidate")," stage and is unlikely to change further. If you'd like to read more about it then take a look at the official proposal ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"here"),"."),Object(r.b)("p",null,"Whilst this is super-new, we are still able to use this feature. We just have to jump through a few hoops first."),Object(r.b)("h2",{id:"typescript-setup"},"TypeScript Setup"),Object(r.b)("p",null,"First of all, you need to install TypeScript 2.4. With that in place you need to make some adjustments to your ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," in order that the relevant compiler switches are flipped. What do you need? First of all you need to be targeting ECMAScript 2015 as a minimum. That's important specifically because ES2015 contained ",Object(r.b)("inlineCode",{parentName:"p"},"Promise"),"s which is what dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"import"),"s produce. The second thing you need is to target the module type of ",Object(r.b)("inlineCode",{parentName:"p"},"esnext"),". You're likely targeting ",Object(r.b)("inlineCode",{parentName:"p"},"es2015")," now, ",Object(r.b)("inlineCode",{parentName:"p"},"esnext")," is that ",Object(r.b)("strong",{parentName:"p"},"plus")," dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"import"),"s."),Object(r.b)("p",null,"Here's a ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," I made earlier which has the relevant settings set:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "allowSyntheticDefaultImports": true,\n        "lib": [\n            "dom",\n            "es2015"\n        ],\n        "target": "es2015",\n        "module": "esnext",\n        "moduleResolution": "node",\n        "noImplicitAny": true,\n        "noUnusedLocals": true,\n        "noUnusedParameters": true,\n        "removeComments": false,\n        "preserveConstEnums": true,\n        "sourceMap": true,\n        "skipLibCheck": true\n    }\n}\n')),Object(r.b)("h2",{id:"babel-setup"},"Babel Setup"),Object(r.b)("p",null,"At the time of writing, browser support for dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"import")," is non-existent. This will likely be the case for some time but it needn't hold us back. Babel can step in here and compile our super-new JS into JS that will run in our browsers today."),Object(r.b)("p",null,"You'll need to decide for yourself how much you want Babel to do for you. In my case I'm targeting old school browsers which don't yet support ES2015. You may not need to. However, the one thing that you'll certainly need is the ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/syntax-dynamic-import/"},"Syntax Dynamic Import")," plugin. It's this that allows Babel to process dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"import")," statements."),Object(r.b)("p",null,"These are the options I'm passing to Babel:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'var babelOptions = {\n  "plugins": ["syntax-dynamic-import"],\n  "presets": [\n    [\n      "es2015",\n      {\n        "modules": false\n      }\n    ]\n  ]\n};\n')),Object(r.b)("p",null,"You're also going to need something that actually execute the ",Object(r.b)("inlineCode",{parentName:"p"},"import"),"s. In my case I'm using webpack..."),Object(r.b)("h2",{id:"webpack"},"webpack"),Object(r.b)("p",null,"webpack 2 supports ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/api/module-methods/#import-"},Object(r.b)("inlineCode",{parentName:"a"},"import()")),". So if you webpack set up with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader")," (or awesome-typescript-loader etc), chaining into ",Object(r.b)("a",{parentName:"p",href:"https://github.com/babel/babel-loader"},"babel-loader")," you should find you have a setup that supports dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"import"),". That means a ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js")," that looks something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"var path = require('path');\nvar webpack = require('webpack');\n\nvar babelOptions = {\n  \"plugins\": [\"syntax-dynamic-import\"],\n  \"presets\": [\n    [\n      \"es2015\",\n      {\n        \"modules\": false\n      }\n    ]\n  ]\n};\n\nmodule.exports = {\n  entry: './app.ts',\n  output: {\n      filename: 'bundle.js'\n  },\n  module: {\n    rules: [{\n      test: /\\.ts(x?)$/,\n      exclude: /node_modules/,\n      use: [\n        {\n          loader: 'babel-loader',\n          options: babelOptions\n        },\n        {\n          loader: 'ts-loader'\n        }\n      ]\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      use: [\n        {\n          loader: 'babel-loader',\n          options: babelOptions\n        }\n      ]\n    }]\n  },\n  resolve: {\n    extensions: ['.ts', '.tsx', '.js']\n  },\n};\n")),Object(r.b)("h2",{id:"ts-loader-example"},"ts-loader example"),Object(r.b)("p",null,"I'm one of the maintainers of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader")," which is a TypeScript loader for webpack. When support for dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"import"),"s landed I wanted to add a test to cover usage of the new syntax with ts-loader."),Object(r.b)("p",null,'We have 2 test packs for ts-loader, one of which is our "execution" test pack. It is so named because it works by spinning up webpack with ts-loader and then using ',Object(r.b)("a",{parentName:"p",href:"https://github.com/karma-runner/karma"},"karma"),' to execute a set of tests. Each "test" in our execution test pack is actually a mini-project with its own test suite (generally ',Object(r.b)("a",{parentName:"p",href:"https://jasmine.github.io/"},"jasmine")," but that's entirely configurabe). Each complete with its own ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js"),", ",Object(r.b)("inlineCode",{parentName:"p"},"karma.conf.js")," and either a ",Object(r.b)("inlineCode",{parentName:"p"},"typings.json")," or ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," for bringing in dependencies. So it's a full test of whether code slung with ts-loader and webpack actually executes when the output is plugged into a browser."),Object(r.b)("p",null,"This is the test pack for dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"import"),"s:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'import a from "../src/a";\nimport b from "../src/b";\n\ndescribe("app", () => {\n  it("a to be \'a\' and b to be \'b\' (classic)", () => {\n    expect(a).toBe("a");\n    expect(b).toBe("b");\n  });\n\n  it("import results in a module with a default export", done => {\n    import("../src/c").then(c => {\n      // .default is the default export\n      expect(c.default).toBe("c");\n\n      done();\n    }\n  });\n\n  it("import results in a module with an export", done => {\n    import("../src/d").then(d => {\n      // .default is the default export\n      expect(d.d).toBe("d");\n\n      done();\n    }\n  });\n\n  it("await import results in a module with a default export", async done => {\n    const c = await import("../src/c");\n\n    // .default is the default export\n    expect(c.default).toBe("c");\n\n    done();\n  });\n\n  it("await import results in a module with an export", async done => {\n    const d = await import("../src/d");\n\n    expect(d.d).toBe("d");\n\n    done();\n  });\n});\n')),Object(r.b)("p",null,"As you can see, it's possible to use the dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"import")," as a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," directly. Alternatively, it's possible to consume the imported module using TypeScripts support for ",Object(r.b)("inlineCode",{parentName:"p"},"async")," / ",Object(r.b)("inlineCode",{parentName:"p"},"await"),". For my money the latter option makes for much clearer code."),Object(r.b)("p",null,"If you're looking for a complete example of how to use the new syntax then you could do worse than taking the existing test pack and tweaking it to your own ends. The only change you'd need to make is to strip out the ",Object(r.b)("inlineCode",{parentName:"p"},"resolveLoader")," statements in ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js")," and ",Object(r.b)("inlineCode",{parentName:"p"},"karma.conf.js"),". (They exist to lock the test in case to the freshly built ts-loader stored locally. You'll not need this.)"),Object(r.b)("p",null,"You can find the test in question ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/test/execution-tests/2.4.1_babel-importCodeSplitting"},"here"),". Happy code splitting!"))}c.isMDXComponent=!0}}]);
(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[91287],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35069:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],s={title:"Dynamic import: I've been awaiting you...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["await","async","TypeScript","Karma","Babel","Webpack","dynamic import"],hide_table_of_contents:!1},p=void 0,l={permalink:"/2017/07/02/dynamic-import-ive-been-await-ing-you",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-07-02-dynamic-import-ive-been-await-ing-you.md",source:"@site/blog/2017-07-02-dynamic-import-ive-been-await-ing-you.md",title:"Dynamic import: I've been awaiting you...",description:"One of the most exciting features to ship with TypeScript 2.4 was support for the dynamic import expression. To quote the release blog post:",date:"2017-07-02T00:00:00.000Z",formattedDate:"July 2, 2017",tags:[{label:"await",permalink:"/tags/await"},{label:"async",permalink:"/tags/async"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Karma",permalink:"/tags/karma"},{label:"Babel",permalink:"/tags/babel"},{label:"Webpack",permalink:"/tags/webpack"},{label:"dynamic import",permalink:"/tags/dynamic-import"}],readingTime:5.07,truncated:!1,prevItem:{title:"A Haiku on the Problem with SemVer: Us",permalink:"/2017/07/29/a-haiku-on-problem-with-semver-us"},nextItem:{title:"Windows Defender Step Away From npm",permalink:"/2017/06/11/windows-defender-step-away-from-npm"}},u=[{value:"TypeScript Setup",id:"typescript-setup",children:[]},{value:"Babel Setup",id:"babel-setup",children:[]},{value:"webpack",id:"webpack",children:[]},{value:"ts-loader example",id:"ts-loader-example",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the most exciting features to ship with TypeScript 2.4 was support for the dynamic import expression. To quote the ",(0,r.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/#dynamic-import-expressions"},"release blog post"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," expressions are a new feature in ECMAScript that allows you to asynchronously request a module at any arbitrary point in your program. These modules come back as ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s of the module itself, and can be ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),"-","ed in an async function, or can be given a callback with ",(0,r.kt)("inlineCode",{parentName:"p"},".then"),"."),(0,r.kt)("p",{parentName:"blockquote"},"..."),(0,r.kt)("p",{parentName:"blockquote"},"Many bundlers have support for automatically splitting output bundles (a.k.a. \u201ccode splitting\u201d) based on these ",(0,r.kt)("inlineCode",{parentName:"p"},"import()")," expressions, so consider using this new feature with the ",(0,r.kt)("inlineCode",{parentName:"p"},"esnext")," module target. Note that this feature won\u2019t work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"es2015")," module target, since the feature is anticipated for ES2018 or later.")),(0,r.kt)("p",null,"As the post makes clear, this adds support for a very bleeding edge ECMAScript feature. This is not fully standardised yet; it's currently at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals"},"stage 3")," on the TC39 proposals list. That means it's at the ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.github.io/process-document/"},"Candidate")," stage and is unlikely to change further. If you'd like to read more about it then take a look at the official proposal ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"here"),"."),(0,r.kt)("p",null,"Whilst this is super-new, we are still able to use this feature. We just have to jump through a few hoops first."),(0,r.kt)("h2",{id:"typescript-setup"},"TypeScript Setup"),(0,r.kt)("p",null,"First of all, you need to install TypeScript 2.4. With that in place you need to make some adjustments to your ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in order that the relevant compiler switches are flipped. What do you need? First of all you need to be targeting ECMAScript 2015 as a minimum. That's important specifically because ES2015 contained ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s which is what dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"s produce. The second thing you need is to target the module type of ",(0,r.kt)("inlineCode",{parentName:"p"},"esnext"),". You're likely targeting ",(0,r.kt)("inlineCode",{parentName:"p"},"es2015")," now, ",(0,r.kt)("inlineCode",{parentName:"p"},"esnext")," is that ",(0,r.kt)("strong",{parentName:"p"},"plus")," dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"s."),(0,r.kt)("p",null,"Here's a ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," I made earlier which has the relevant settings set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "allowSyntheticDefaultImports": true,\n        "lib": [\n            "dom",\n            "es2015"\n        ],\n        "target": "es2015",\n        "module": "esnext",\n        "moduleResolution": "node",\n        "noImplicitAny": true,\n        "noUnusedLocals": true,\n        "noUnusedParameters": true,\n        "removeComments": false,\n        "preserveConstEnums": true,\n        "sourceMap": true,\n        "skipLibCheck": true\n    }\n}\n')),(0,r.kt)("h2",{id:"babel-setup"},"Babel Setup"),(0,r.kt)("p",null,"At the time of writing, browser support for dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," is non-existent. This will likely be the case for some time but it needn't hold us back. Babel can step in here and compile our super-new JS into JS that will run in our browsers today."),(0,r.kt)("p",null,"You'll need to decide for yourself how much you want Babel to do for you. In my case I'm targeting old school browsers which don't yet support ES2015. You may not need to. However, the one thing that you'll certainly need is the ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/syntax-dynamic-import/"},"Syntax Dynamic Import")," plugin. It's this that allows Babel to process dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements."),(0,r.kt)("p",null,"These are the options I'm passing to Babel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var babelOptions = {\n  "plugins": ["syntax-dynamic-import"],\n  "presets": [\n    [\n      "es2015",\n      {\n        "modules": false\n      }\n    ]\n  ]\n};\n')),(0,r.kt)("p",null,"You're also going to need something that actually execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"s. In my case I'm using webpack..."),(0,r.kt)("h2",{id:"webpack"},"webpack"),(0,r.kt)("p",null,"webpack 2 supports ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/module-methods/#import-"},(0,r.kt)("inlineCode",{parentName:"a"},"import()")),". So if you webpack set up with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader")," (or awesome-typescript-loader etc), chaining into ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-loader"},"babel-loader")," you should find you have a setup that supports dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),". That means a ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," that looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var path = require('path');\nvar webpack = require('webpack');\n\nvar babelOptions = {\n  \"plugins\": [\"syntax-dynamic-import\"],\n  \"presets\": [\n    [\n      \"es2015\",\n      {\n        \"modules\": false\n      }\n    ]\n  ]\n};\n\nmodule.exports = {\n  entry: './app.ts',\n  output: {\n      filename: 'bundle.js'\n  },\n  module: {\n    rules: [{\n      test: /\\.ts(x?)$/,\n      exclude: /node_modules/,\n      use: [\n        {\n          loader: 'babel-loader',\n          options: babelOptions\n        },\n        {\n          loader: 'ts-loader'\n        }\n      ]\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      use: [\n        {\n          loader: 'babel-loader',\n          options: babelOptions\n        }\n      ]\n    }]\n  },\n  resolve: {\n    extensions: ['.ts', '.tsx', '.js']\n  },\n};\n")),(0,r.kt)("h2",{id:"ts-loader-example"},"ts-loader example"),(0,r.kt)("p",null,"I'm one of the maintainers of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader")," which is a TypeScript loader for webpack. When support for dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"s landed I wanted to add a test to cover usage of the new syntax with ts-loader."),(0,r.kt)("p",null,'We have 2 test packs for ts-loader, one of which is our "execution" test pack. It is so named because it works by spinning up webpack with ts-loader and then using ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/karma-runner/karma"},"karma"),' to execute a set of tests. Each "test" in our execution test pack is actually a mini-project with its own test suite (generally ',(0,r.kt)("a",{parentName:"p",href:"https://jasmine.github.io/"},"jasmine")," but that's entirely configurabe). Each complete with its own ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"karma.conf.js")," and either a ",(0,r.kt)("inlineCode",{parentName:"p"},"typings.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," for bringing in dependencies. So it's a full test of whether code slung with ts-loader and webpack actually executes when the output is plugged into a browser."),(0,r.kt)("p",null,"This is the test pack for dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"s:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import a from "../src/a";\nimport b from "../src/b";\n\ndescribe("app", () => {\n  it("a to be \'a\' and b to be \'b\' (classic)", () => {\n    expect(a).toBe("a");\n    expect(b).toBe("b");\n  });\n\n  it("import results in a module with a default export", done => {\n    import("../src/c").then(c => {\n      // .default is the default export\n      expect(c.default).toBe("c");\n\n      done();\n    }\n  });\n\n  it("import results in a module with an export", done => {\n    import("../src/d").then(d => {\n      // .default is the default export\n      expect(d.d).toBe("d");\n\n      done();\n    }\n  });\n\n  it("await import results in a module with a default export", async done => {\n    const c = await import("../src/c");\n\n    // .default is the default export\n    expect(c.default).toBe("c");\n\n    done();\n  });\n\n  it("await import results in a module with an export", async done => {\n    const d = await import("../src/d");\n\n    expect(d.d).toBe("d");\n\n    done();\n  });\n});\n')),(0,r.kt)("p",null,"As you can see, it's possible to use the dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," directly. Alternatively, it's possible to consume the imported module using TypeScripts support for ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),". For my money the latter option makes for much clearer code."),(0,r.kt)("p",null,"If you're looking for a complete example of how to use the new syntax then you could do worse than taking the existing test pack and tweaking it to your own ends. The only change you'd need to make is to strip out the ",(0,r.kt)("inlineCode",{parentName:"p"},"resolveLoader")," statements in ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"karma.conf.js"),". (They exist to lock the test in case to the freshly built ts-loader stored locally. You'll not need this.)"),(0,r.kt)("p",null,"You can find the test in question ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/tree/master/test/execution-tests/2.4.1_babel-importCodeSplitting"},"here"),". Happy code splitting!"))}m.isMDXComponent=!0}}]);
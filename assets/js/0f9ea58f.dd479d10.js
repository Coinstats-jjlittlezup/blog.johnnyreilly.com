(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),c=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(h,p(p({ref:t},l),{},{components:n})):i.a.createElement(h,p({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},338:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(8),o=(n(0),n(1161)),a={title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["ESLint","TypeScript","fork-ts-checker-webpack-plugin","Webpack"],hide_table_of_contents:!1},p={permalink:"/2019/07/13/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-07-13-typescript-and-eslint-meet-fork-ts-checker-webpack-plugin.md",source:"@site/blog/2019-07-13-typescript-and-eslint-meet-fork-ts-checker-webpack-plugin.md",description:"The fork-ts-checker-webpack-plugin has, since its inception, performed two classes of checking:",date:"2019-07-13T00:00:00.000Z",formattedDate:"July 13, 2019",tags:[{label:"ESLint",permalink:"/tags/es-lint"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"Webpack",permalink:"/tags/webpack"}],title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",readingTime:4.65,truncated:!1,prevItem:{title:"Hard-coding a Claim in Development Mode in ASP.Net Core",permalink:"/2019/08/02/hard-coding-claim-in-development-mode"},nextItem:{title:"TypeScript / webpack - you down with PnP? Yarn, you know me!",permalink:"/2019/06/07/typescript-webpack-you-down-with-pnp"}},s=[{value:"How do you migrate from TSLint to ESLint?",id:"how-do-you-migrate-from-tslint-to-eslint",children:[]},{value:"Go Configure",id:"go-configure",children:[]},{value:"Performance and Power Tools",id:"performance-and-power-tools",children:[]}],l={toc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," has, since its inception, performed two classes of checking:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Compilation errors which the TypeScript compiler surfaces up"),Object(o.b)("li",{parentName:"ol"},"Linting issues which TSLint reports")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://eslint.org/blog/2019/01/future-typescript-eslint"},"You may have caught the announcement that TSLint is being deprecated and ESLint is the future of linting in the TypeScript world.")," This plainly has a bearing on linting in ",Object(o.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),"."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/pull/305"},"I've been beavering away at adding support for ESLint to the fork-ts-checker-webpack-plugin.")," I'm happy to say, the plugin now supports ESLint. Do you want to get your arms all around ESLint with ",Object(o.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),"? Read on!"),Object(o.b)("h2",{id:"how-do-you-migrate-from-tslint-to-eslint"},"How do you migrate from TSLint to ESLint?"),Object(o.b)("p",null,"Well, first of all you need the latest and greatest ",Object(o.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),". Support for ESLint shipped with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/releases/tag/v1.4.0"},"v1.4.0"),"."),Object(o.b)("p",null,"You need to change the options you supply to the plugin in your ",Object(o.b)("inlineCode",{parentName:"p"},"webpack.config.js")," to look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"new ForkTsCheckerWebpackPlugin({ eslint: true })\n")),Object(o.b)("p",null,"You'll also need the various ESLint related packages to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"eslint")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@typescript-eslint/parser"),": The parser that will allow ESLint to lint TypeScript code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@typescript-eslint/eslint-plugin"),": A plugin that contains ESLint rules that are TypeScript specific")),Object(o.b)("p",null,"If you want, you can pass options to ESLint using the ",Object(o.b)("inlineCode",{parentName:"p"},"eslintOptions")," option as well. These will be passed through to the underlying ESLint CLI Engine when it is instantiated. Docs on the supported options are ",Object(o.b)("a",{parentName:"p",href:"https://eslint.org/docs/developer-guide/nodejs-api#cliengine"},"documented here"),"."),Object(o.b)("h2",{id:"go-configure"},"Go Configure"),Object(o.b)("p",null,"Now you're ready to use ESLint, you just need to give it some configuration. Typically, an ",Object(o.b)("inlineCode",{parentName:"p"},".eslintrc.js")," is what you want here."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nmodule.exports = {\n    parser: '@typescript-eslint/parser', // Specifies the ESLint parser\n    plugins: [\n        '@typescript-eslint',\n    ],\n    env: {\n        browser: true,\n        jest: true\n    },\n    extends: [\n        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin\n    ],\n    parserOptions: {\n        project: path.resolve(__dirname, './tsconfig.json'),\n        tsconfigRootDir: __dirname,\n        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features\n        sourceType: 'module', // Allows for the use of imports\n    },\n    rules: {\n        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs\n        // e.g. \"@typescript-eslint/explicit-function-return-type\": \"off\",\n        '@typescript-eslint/explicit-function-return-type': 'off',\n        '@typescript-eslint/no-unused-vars': 'off',\n    },\n};\n")),Object(o.b)("p",null,"If you're a React person (and I am!) then you'll also need: ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add eslint-plugin-react"),". Then enrich your ",Object(o.b)("inlineCode",{parentName:"p"},"eslintrc.js")," a little:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nmodule.exports = {\n    parser: '@typescript-eslint/parser', // Specifies the ESLint parser\n    plugins: [\n        '@typescript-eslint',\n        'react'\n        // 'prettier' commented as we don't want to run prettier through eslint because performance\n    ],\n    env: {\n        browser: true,\n        jest: true\n    },\n    extends: [\n        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin\n        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier\n        // 'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react\n        'prettier/react', // disables react-specific linting rules that conflict with prettier\n        // 'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.\n    ],\n    parserOptions: {\n        project: path.resolve(__dirname, './tsconfig.json'),\n        tsconfigRootDir: __dirname,\n        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features\n        sourceType: 'module', // Allows for the use of imports\n        ecmaFeatures: {\n            jsx: true // Allows for the parsing of JSX\n        }\n    },\n    rules: {\n        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs\n        // e.g. \"@typescript-eslint/explicit-function-return-type\": \"off\",\n        '@typescript-eslint/explicit-function-return-type': 'off',\n        '@typescript-eslint/no-unused-vars': 'off',\n\n        // These rules don't add much value, are better covered by TypeScript and good definition files\n        'react/no-direct-mutation-state': 'off',\n        'react/no-deprecated': 'off',\n        'react/no-string-refs': 'off',\n        'react/require-render-return': 'off',\n\n        'react/jsx-filename-extension': [\n            'warn',\n            {\n                extensions: ['.jsx', '.tsx']\n            }\n        ], // also want to use with \".tsx\"\n        'react/prop-types': 'off' // Is this incompatible with TS props type?\n    },\n    settings: {\n        react: {\n            version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use\n        }\n    }\n};\n")),Object(o.b)("p",null,"You can add Prettier into the mix too. You can see how it is used in the above code sample. But given the impact that has on performance I wouldn't recommend it; hence it's commented out. ",Object(o.b)("a",{parentName:"p",href:"https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb"},"There's a good piece by Rob Cooper's for more details on setting up Prettier and VS Code with TypeScript and ESLint.")),Object(o.b)("h2",{id:"performance-and-power-tools"},"Performance and Power Tools"),Object(o.b)("p",null,'It\'s worth noting that support for TypeScript in ESLint is still brand new. As such, the rule of "Make it Work, Make it Right, Make it Fast" applies.... ESLint with TypeScript still has some performance issues which should be ironed out in the fullness of time. You can ',Object(o.b)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/issues/389"},"track them here"),"."),Object(o.b)("p",null,"This is important to bear in mind as, when I converted a large codebase over to using ESLint, I discovered that initial performance of linting was terribly slow. Something that's worth doing right now is identifying which rules are costing you most timewise and tweaking based on whether you think they're earning their keep."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://eslint.org/docs/developer-guide/working-with-rules#per-rule-performance"},Object(o.b)("inlineCode",{parentName:"a"},"TIMING")," environment variable")," can be used to provide a report on the relative cost performance wise of running each rule. A nice way to plug this into your workflow is to add the ",Object(o.b)("inlineCode",{parentName:"p"},"cross-env")," package to your project: ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add cross-env -D")," and then add 2 scripts to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'"lint": "eslint ./", \n"lint-rule-timings": "cross-env TIMING=1 yarn lint"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lint")," ","-"," just runs the linter standalone"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lint-rule-timings")," ","-"," does the same but with the ",Object(o.b)("inlineCode",{parentName:"li"},"TIMING")," environment variable set to 1 so a report will be generated.")),Object(o.b)("p",null,"I'd advise, making use of ",Object(o.b)("inlineCode",{parentName:"p"},"lint-rule-timings")," to identify which rules are costing you performance and then turning ",Object(o.b)("inlineCode",{parentName:"p"},"off")," rules as you need to. Remember, different rules have different value."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/960"},"Finally, if you'd like to see how it's done, here's an example of porting from TSLint to ESLint.")))}c.isMDXComponent=!0}}]);
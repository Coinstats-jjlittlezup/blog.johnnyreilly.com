"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[84360],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",authors:"johnnyreilly",tags:["ESLint","TypeScript","fork-ts-checker-webpack-plugin","Webpack"],hide_table_of_contents:!1},p=void 0,l={permalink:"/2019/07/13/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-07-13-typescript-and-eslint-meet-fork-ts-checker-webpack-plugin.md",source:"@site/blog/2019-07-13-typescript-and-eslint-meet-fork-ts-checker-webpack-plugin.md",title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",description:"The fork-ts-checker-webpack-plugin has, since its inception, performed two classes of checking:",date:"2019-07-13T00:00:00.000Z",formattedDate:"July 13, 2019",tags:[{label:"ESLint",permalink:"/tags/es-lint"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:4.62,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"ASP.NET Core authentication: hard-coding a claim in development",permalink:"/2019/08/02/asp-net-authentication-hard-coding-claims"},nextItem:{title:"TypeScript / webpack - you down with PnP? Yarn, you know me!",permalink:"/2019/06/07/typescript-webpack-you-down-with-pnp"}},c={authorsImageUrls:[void 0]},u=[{value:"How do you migrate from TSLint to ESLint?",id:"how-do-you-migrate-from-tslint-to-eslint",children:[]},{value:"Go Configure",id:"go-configure",children:[]},{value:"Performance and Power Tools",id:"performance-and-power-tools",children:[]}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," has, since its inception, performed two classes of checking:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Compilation errors which the TypeScript compiler surfaces up"),(0,o.kt)("li",{parentName:"ol"},"Linting issues which TSLint reports")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/blog/2019/01/future-typescript-eslint"},"You may have caught the announcement that TSLint is being deprecated and ESLint is the future of linting in the TypeScript world.")," This plainly has a bearing on linting in ",(0,o.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/pull/305"},"I've been beavering away at adding support for ESLint to the fork-ts-checker-webpack-plugin.")," I'm happy to say, the plugin now supports ESLint. Do you want to get your arms all around ESLint with ",(0,o.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),"? Read on!"),(0,o.kt)("h2",{id:"how-do-you-migrate-from-tslint-to-eslint"},"How do you migrate from TSLint to ESLint?"),(0,o.kt)("p",null,"Well, first of all you need the latest and greatest ",(0,o.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),". Support for ESLint shipped with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/releases/tag/v1.4.0"},"v1.4.0"),"."),(0,o.kt)("p",null,"You need to change the options you supply to the plugin in your ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," to look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new ForkTsCheckerWebpackPlugin({ eslint: true })\n")),(0,o.kt)("p",null,"You'll also need the various ESLint related packages to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eslint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@typescript-eslint/parser"),": The parser that will allow ESLint to lint TypeScript code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@typescript-eslint/eslint-plugin"),": A plugin that contains ESLint rules that are TypeScript specific")),(0,o.kt)("p",null,"If you want, you can pass options to ESLint using the ",(0,o.kt)("inlineCode",{parentName:"p"},"eslintOptions")," option as well. These will be passed through to the underlying ESLint CLI Engine when it is instantiated. Docs on the supported options are ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/developer-guide/nodejs-api#cliengine"},"documented here"),"."),(0,o.kt)("h2",{id:"go-configure"},"Go Configure"),(0,o.kt)("p",null,"Now you're ready to use ESLint, you just need to give it some configuration. Typically, an ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," is what you want here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nmodule.exports = {\n    parser: '@typescript-eslint/parser', // Specifies the ESLint parser\n    plugins: [\n        '@typescript-eslint',\n    ],\n    env: {\n        browser: true,\n        jest: true\n    },\n    extends: [\n        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin\n    ],\n    parserOptions: {\n        project: path.resolve(__dirname, './tsconfig.json'),\n        tsconfigRootDir: __dirname,\n        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features\n        sourceType: 'module', // Allows for the use of imports\n    },\n    rules: {\n        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs\n        // e.g. \"@typescript-eslint/explicit-function-return-type\": \"off\",\n        '@typescript-eslint/explicit-function-return-type': 'off',\n        '@typescript-eslint/no-unused-vars': 'off',\n    },\n};\n")),(0,o.kt)("p",null,"If you're a React person (and I am!) then you'll also need: ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add eslint-plugin-react"),". Then enrich your ",(0,o.kt)("inlineCode",{parentName:"p"},"eslintrc.js")," a little:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nmodule.exports = {\n    parser: '@typescript-eslint/parser', // Specifies the ESLint parser\n    plugins: [\n        '@typescript-eslint',\n        'react'\n        // 'prettier' commented as we don't want to run prettier through eslint because performance\n    ],\n    env: {\n        browser: true,\n        jest: true\n    },\n    extends: [\n        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin\n        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier\n        // 'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react\n        'prettier/react', // disables react-specific linting rules that conflict with prettier\n        // 'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.\n    ],\n    parserOptions: {\n        project: path.resolve(__dirname, './tsconfig.json'),\n        tsconfigRootDir: __dirname,\n        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features\n        sourceType: 'module', // Allows for the use of imports\n        ecmaFeatures: {\n            jsx: true // Allows for the parsing of JSX\n        }\n    },\n    rules: {\n        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs\n        // e.g. \"@typescript-eslint/explicit-function-return-type\": \"off\",\n        '@typescript-eslint/explicit-function-return-type': 'off',\n        '@typescript-eslint/no-unused-vars': 'off',\n\n        // These rules don't add much value, are better covered by TypeScript and good definition files\n        'react/no-direct-mutation-state': 'off',\n        'react/no-deprecated': 'off',\n        'react/no-string-refs': 'off',\n        'react/require-render-return': 'off',\n\n        'react/jsx-filename-extension': [\n            'warn',\n            {\n                extensions: ['.jsx', '.tsx']\n            }\n        ], // also want to use with \".tsx\"\n        'react/prop-types': 'off' // Is this incompatible with TS props type?\n    },\n    settings: {\n        react: {\n            version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use\n        }\n    }\n};\n")),(0,o.kt)("p",null,"You can add Prettier into the mix too. You can see how it is used in the above code sample. But given the impact that has on performance I wouldn't recommend it; hence it's commented out. ",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb"},"There's a good piece by Rob Cooper's for more details on setting up Prettier and VS Code with TypeScript and ESLint.")),(0,o.kt)("h2",{id:"performance-and-power-tools"},"Performance and Power Tools"),(0,o.kt)("p",null,'It\'s worth noting that support for TypeScript in ESLint is still brand new. As such, the rule of "Make it Work, Make it Right, Make it Fast" applies.... ESLint with TypeScript still has some performance issues which should be ironed out in the fullness of time. You can ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/issues/389"},"track them here"),"."),(0,o.kt)("p",null,"This is important to bear in mind as, when I converted a large codebase over to using ESLint, I discovered that initial performance of linting was terribly slow. Something that's worth doing right now is identifying which rules are costing you most timewise and tweaking based on whether you think they're earning their keep."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/developer-guide/working-with-rules#per-rule-performance"},(0,o.kt)("inlineCode",{parentName:"a"},"TIMING")," environment variable")," can be used to provide a report on the relative cost performance wise of running each rule. A nice way to plug this into your workflow is to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"cross-env")," package to your project: ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add cross-env -D")," and then add 2 scripts to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"lint": "eslint ./", \n"lint-rule-timings": "cross-env TIMING=1 yarn lint"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lint")," ","-"," just runs the linter standalone"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lint-rule-timings")," ","-"," does the same but with the ",(0,o.kt)("inlineCode",{parentName:"li"},"TIMING")," environment variable set to 1 so a report will be generated.")),(0,o.kt)("p",null,"I'd advise, making use of ",(0,o.kt)("inlineCode",{parentName:"p"},"lint-rule-timings")," to identify which rules are costing you performance and then turning ",(0,o.kt)("inlineCode",{parentName:"p"},"off")," rules as you need to. Remember, different rules have different value."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/960"},"Finally, if you'd like to see how it's done, here's an example of porting from TSLint to ESLint.")))}h.isMDXComponent=!0}}]);
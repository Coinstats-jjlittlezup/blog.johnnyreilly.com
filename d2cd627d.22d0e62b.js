(window.webpackJsonp=window.webpackJsonp||[]).push([[897],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||r;return n?a.a.createElement(u,l(l({ref:t},c),{},{components:n})):a.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},962:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(1159)),i={title:"Prettier your CSharp with dotnet-format and lint-staged",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},l={permalink:"/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-12-22-prettier-your-csharp-with-dotnet-format-and-lint-staged.md",source:"@site/blog/2020-12-22-prettier-your-csharp-with-dotnet-format-and-lint-staged.md",description:'Consistent formatting is a good thing. It makes code less confusing to newcomers and it allows whoever is working on the codebase to reliably focus on the task at hand. Not "fixing curly braces because Janice messed them up with her last commit". (A git commit message that would be tragic in so many ways.)',date:"2020-12-22T00:00:00.000Z",tags:[],title:"Prettier your CSharp with dotnet-format and lint-staged",readingTime:3.23,truncated:!1,prevItem:{title:"Azure Pipelines meet Jest",permalink:"/2020/12/30/azure-pipelines-meet-jest"},nextItem:{title:"How to make Azure AD 403",permalink:"/2020/12/21/how-to-make-azure-ad-403"}},s=[{value:"<code>dotnet-format</code>: a new hope",id:"dotnet-format-a-new-hope",children:[]},{value:"Customising your formatting",id:"customising-your-formatting",children:[]},{value:"<code>lint-staged</code> integration",id:"lint-staged-integration",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Consistent formatting is a good thing. It makes code less confusing to newcomers and it allows whoever is working on the codebase to reliably focus on the task at hand. Not "fixing curly braces because Janice messed them up with her last commit". (A ',Object(r.b)("inlineCode",{parentName:"p"},"git commit")," message that would be tragic in so many ways.)"),Object(r.b)("p",null,"Once you've agreed that you want to have consistent formatting, you want it to be enforced. Enter, stage left, ",Object(r.b)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),", the fantastic tool for formatting code. It rocks; I've been using on my JavaScript / TypeScript for the longest time. But what about C#? Well, there is a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/warrenseine/prettier-plugin-csharp"},"Prettier plugin for C#"),".... Sort of. It appears to be abandoned and contains the worrying message in the ",Object(r.b)("inlineCode",{parentName:"p"},"README.md"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Please note that this plugin is under active development, and might not be ready to run on production code yet. It will break your code.")),Object(r.b)("p",null,"Not a ringing endorsement."),Object(r.b)("h2",{id:"dotnet-format-a-new-hope"},Object(r.b)("inlineCode",{parentName:"h2"},"dotnet-format"),": a new hope"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://twitter.com/margaridagp"},"Margarida Pereira")," recently pointed me in the direction of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dotnet/format"},Object(r.b)("inlineCode",{parentName:"a"},"dotnet-format"))," which is a formatter for .NET. It's a .NET tool which:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"is a code formatter for dotnet that applies style preferences to a project or solution. Preferences will be read from an ",Object(r.b)("inlineCode",{parentName:"p"},".editorconfig")," file, if present, otherwise a default set of preferences will be used.")),Object(r.b)("p",null,"It can be installed with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"dotnet tool install -g dotnet-format\n")),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dotnet/format/issues/648#issuecomment-614905524"},"VS Code C# extension will make use of this formatter"),", you just need to set the following in your ",Object(r.b)("inlineCode",{parentName:"p"},"settings.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"omnisharp.enableRoslynAnalyzers": true,\n    "omnisharp.enableEditorConfigSupport": true\n')),Object(r.b)("h2",{id:"customising-your-formatting"},"Customising your formatting"),Object(r.b)("p",null,"If you'd like to deviate from the ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/code-style-rule-options"},"default formatting options")," then create yourself a ",Object(r.b)("inlineCode",{parentName:"p"},".editorconfig")," file in the root of your project. Let's say you prefer more of the ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Indentation_style#K&R_style"},"K & R style")," approach to braces instead of the C# default of ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Indentation_style#Allman_style"},"Allman style"),". To make ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet-format")," use that you'd set the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n# See https://github.com/dotnet/format/blob/master/docs/Supported-.editorconfig-options.md for reference\n[*.cs]\ncsharp_new_line_before_open_brace = none\ncsharp_new_line_before_catch = false\ncsharp_new_line_before_else = false\ncsharp_new_line_before_finally = false\ncsharp_new_line_before_members_in_anonymous_types = false\ncsharp_new_line_before_members_in_object_initializers = false\ncsharp_new_line_between_query_expression_clauses = true\n")),Object(r.b)("p",null,"With this in place it's K & R all the way baby!"),Object(r.b)("h2",{id:"lint-staged-integration"},Object(r.b)("inlineCode",{parentName:"h2"},"lint-staged")," integration"),Object(r.b)("p",null,"It's become somewhat standard to use the marvellous ",Object(r.b)("a",{parentName:"p",href:"https://github.com/typicode/husky"},Object(r.b)("inlineCode",{parentName:"a"},"husky"))," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged"},Object(r.b)("inlineCode",{parentName:"a"},"lint-staged"))," to enforce code quality. To quote the docs:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Run linters against staged git files and don't let \ud83d\udca9 slip into your code base!")),Object(r.b)("p",null,"So, before I happened upon ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet-format")," I was already enforcing TypeScript / JavaScript style with the following entry in my ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"husky": {\n    "hooks": {\n        "pre-commit": "lint-staged"\n    }\n},\n"lint-staged": {\n    "*.{js,ts,tsx}": "prettier --write"\n}\n')),Object(r.b)("p",null,"The above configuration runs Prettier against files which have been staged for commit, provided they have the suffix ",Object(r.b)("inlineCode",{parentName:"p"},".js")," or ",Object(r.b)("inlineCode",{parentName:"p"},".ts")," or ",Object(r.b)("inlineCode",{parentName:"p"},".tsx"),". How can we get ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet-format")," in the mix also? Like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"husky": {\n    "hooks": {\n        "pre-commit": "lint-staged --relative"\n    }\n},\n"lint-staged": {\n    "*.cs": "dotnet format --include",\n    "*.{js,ts,tsx}": "prettier --write"\n}\n')),Object(r.b)("p",null,"We've done two things here. First, we've changed the ",Object(r.b)("inlineCode",{parentName:"p"},"lint-staged")," command to include the parameter ",Object(r.b)("inlineCode",{parentName:"p"},"--relative"),". This is because ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet-format")," only deals with relative paths. Prettier is pretty flexible, so we can make this change without breaking anything."),Object(r.b)("p",null,"Secondly we've added the ",Object(r.b)("inlineCode",{parentName:"p"},"*.cs")," task of ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet format --include"),". This is the task that will be run on commit, when ",Object(r.b)("inlineCode",{parentName:"p"},"lint-staged")," runs, it will pass a list of relative file paths to ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet format"),", the ",Object(r.b)("inlineCode",{parentName:"p"},"--include")," accepts ",Object(r.b)("inlineCode",{parentName:"p"},"a list of relative file or folder paths to include in formatting"),". So if you'd staged two files it might end up executing a command like this:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dotnet format --include src/server-app/Server/Controllers/UserController.cs src/server-app/Server/Controllers/WeatherForecastController.cs")),Object(r.b)("p",null,"By and large we don't have to think about this; the important take home is that we're now enforcing standardised formatting for all C# files upon commit. Everything that goes into the codebase will be formatted in a consistent fashion."))}p.isMDXComponent=!0}}]);
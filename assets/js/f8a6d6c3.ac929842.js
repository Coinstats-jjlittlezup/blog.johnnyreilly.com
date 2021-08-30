"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[80823],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"dotnet-format: Prettier your CSharp with lint-staged",authors:"johnnyreilly",tags:["Prettier","dotnet-format","CSharpier"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-12-22-prettier-your-csharp-with-dotnet-format-and-lint-staged.md",source:"@site/blog/2020-12-22-prettier-your-csharp-with-dotnet-format-and-lint-staged.md",title:"dotnet-format: Prettier your CSharp with lint-staged",description:'Consistent formatting is a good thing. It makes code less confusing to newcomers and it allows whoever is working on the codebase to reliably focus on the task at hand. Not "fixing curly braces because Janice messed them up with her last commit". (A git commit message that would be tragic in so many ways.)',date:"2020-12-22T00:00:00.000Z",formattedDate:"December 22, 2020",tags:[{label:"Prettier",permalink:"/tags/prettier"},{label:"dotnet-format",permalink:"/tags/dotnet-format"},{label:"CSharpier",permalink:"/tags/c-sharpier"}],readingTime:3.555,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Azure Pipelines meet Jest",permalink:"/2020/12/30/azure-pipelines-meet-jest"},nextItem:{title:"Make Microsoft.Identity.Web respond with 403 forbidden instead of a 302 redirect",permalink:"/2020/12/21/how-to-make-azure-ad-403"}},c={authorsImageUrls:[void 0]},d=[{value:"<code>dotnet-format</code>: a new hope",id:"dotnet-format-a-new-hope",children:[]},{value:"Customising your formatting",id:"customising-your-formatting",children:[]},{value:"<code>lint-staged</code> integration",id:"lint-staged-integration",children:[]},{value:"CSharpier - update 16/05/2021",id:"csharpier---update-16052021",children:[]}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Consistent formatting is a good thing. It makes code less confusing to newcomers and it allows whoever is working on the codebase to reliably focus on the task at hand. Not "fixing curly braces because Janice messed them up with her last commit". (A ',(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," message that would be tragic in so many ways.)"),(0,a.kt)("p",null,"Once you've agreed that you want to have consistent formatting, you want it to be enforced. Enter, stage left, ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),", the fantastic tool for formatting code. It rocks; I've been using on my JavaScript / TypeScript for the longest time. But what about C#? Well, there is a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/warrenseine/prettier-plugin-csharp"},"Prettier plugin for C#"),".... Sort of. It appears to be abandoned and contains the worrying message in the ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note that this plugin is under active development, and might not be ready to run on production code yet. It will break your code.")),(0,a.kt)("p",null,"Not a ringing endorsement."),(0,a.kt)("h2",{id:"dotnet-format-a-new-hope"},(0,a.kt)("inlineCode",{parentName:"h2"},"dotnet-format"),": a new hope"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/margaridagp"},"Margarida Pereira")," recently pointed me in the direction of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dotnet/format"},(0,a.kt)("inlineCode",{parentName:"a"},"dotnet-format"))," which is a formatter for .NET. It's a .NET tool which:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"is a code formatter for dotnet that applies style preferences to a project or solution. Preferences will be read from an ",(0,a.kt)("inlineCode",{parentName:"p"},".editorconfig")," file, if present, otherwise a default set of preferences will be used.")),(0,a.kt)("p",null,"It can be installed with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet tool install -g dotnet-format\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dotnet/format/issues/648#issuecomment-614905524"},"VS Code C# extension will make use of this formatter"),", you just need to set the following in your ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"omnisharp.enableRoslynAnalyzers": true,\n    "omnisharp.enableEditorConfigSupport": true\n')),(0,a.kt)("h2",{id:"customising-your-formatting"},"Customising your formatting"),(0,a.kt)("p",null,"If you'd like to deviate from the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/code-style-rule-options"},"default formatting options")," then create yourself a ",(0,a.kt)("inlineCode",{parentName:"p"},".editorconfig")," file in the root of your project. Let's say you prefer more of the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Indentation_style#K&R_style"},"K & R style")," approach to braces instead of the C# default of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Indentation_style#Allman_style"},"Allman style"),". To make ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet-format")," use that you'd set the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n# See https://github.com/dotnet/format/blob/master/docs/Supported-.editorconfig-options.md for reference\n[*.cs]\ncsharp_new_line_before_open_brace = none\ncsharp_new_line_before_catch = false\ncsharp_new_line_before_else = false\ncsharp_new_line_before_finally = false\ncsharp_new_line_before_members_in_anonymous_types = false\ncsharp_new_line_before_members_in_object_initializers = false\ncsharp_new_line_between_query_expression_clauses = true\n")),(0,a.kt)("p",null,"With this in place it's K & R all the way baby!"),(0,a.kt)("h2",{id:"lint-staged-integration"},(0,a.kt)("inlineCode",{parentName:"h2"},"lint-staged")," integration"),(0,a.kt)("p",null,"It's become somewhat standard to use the marvellous ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typicode/husky"},(0,a.kt)("inlineCode",{parentName:"a"},"husky"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged"},(0,a.kt)("inlineCode",{parentName:"a"},"lint-staged"))," to enforce code quality. To quote the docs:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Run linters against staged git files and don't let \ud83d\udca9 slip into your code base!")),(0,a.kt)("p",null,"So, before I happened upon ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet-format")," I was already enforcing TypeScript / JavaScript style with the following entry in my ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"husky": {\n    "hooks": {\n        "pre-commit": "lint-staged"\n    }\n},\n"lint-staged": {\n    "*.{js,ts,tsx}": "prettier --write"\n}\n')),(0,a.kt)("p",null,"The above configuration runs Prettier against files which have been staged for commit, provided they have the suffix ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".tsx"),". How can we get ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet-format")," in the mix also? Like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"husky": {\n    "hooks": {\n        "pre-commit": "lint-staged --relative"\n    }\n},\n"lint-staged": {\n    "*.cs": "dotnet format --include",\n    "*.{js,ts,tsx}": "prettier --write"\n}\n')),(0,a.kt)("p",null,"We've done two things here. First, we've changed the ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged")," command to include the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"--relative"),". This is because ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet-format")," only deals with relative paths. Prettier is pretty flexible, so we can make this change without breaking anything."),(0,a.kt)("p",null,"Secondly we've added the ",(0,a.kt)("inlineCode",{parentName:"p"},"*.cs")," task of ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet format --include"),". This is the task that will be run on commit, when ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged")," runs, it will pass a list of relative file paths to ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet format"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"--include")," accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"a list of relative file or folder paths to include in formatting"),". So if you'd staged two files it might end up executing a command like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dotnet format --include src/server-app/Server/Controllers/UserController.cs src/server-app/Server/Controllers/WeatherForecastController.cs")),(0,a.kt)("p",null,"By and large we don't have to think about this; the important take home is that we're now enforcing standardised formatting for all C# files upon commit. Everything that goes into the codebase will be formatted in a consistent fashion."),(0,a.kt)("h2",{id:"csharpier---update-16052021"},"CSharpier - update 16/05/2021"),(0,a.kt)("p",null,"There is an alternative to the CSharp Prettier project. It's being worked on by\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/belav"},"Bela VanderVoort")," and it goes by the name of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/belav/csharpier"},"csharpier"),". When comparing CSharpier and dotnet-format, Bela put it like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"I could see CSharpier being the non-configurable super opinionated formatter and dotnet-format being for the people that do want to have options.")),(0,a.kt)("p",null,"Check it out!"))}u.isMDXComponent=!0}}]);
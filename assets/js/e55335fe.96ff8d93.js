"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[22821],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92056:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"TypeScript, abstract classes, and constructors",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["TypeScript","abstract","constructors","classes"],image:"blog/2021-08-01-typescript-abstract-classes-and-constructors/vs-code-abstract-screenshot.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/2021/08/01/typescript-abstract-classes-and-constructors",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-08-01-typescript-abstract-classes-and-constructors.md",source:"@site/blog/2021-08-01-typescript-abstract-classes-and-constructors.md",title:"TypeScript, abstract classes, and constructors",description:"TypeScript has the ability to define classes as abstract. This means they cannot be instantiated directly, only non-abstract subclasses can be. Let's take a look at what this means when it comes to constructor usage.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"abstract",permalink:"/tags/abstract"},{label:"constructors",permalink:"/tags/constructors"},{label:"classes",permalink:"/tags/classes"}],readingTime:4.67,truncated:!1,prevItem:{title:"TypeScript 4.4 and more readable code",permalink:"/2021/08/14/typescript-4-4-more-readable-code"},nextItem:{title:"Directory.Build.props: C# 9 for all your projects",permalink:"/2021/07/14/directory-build-props-c-sharp-9-for-all"}},p=[{value:"Making a scratchpad",id:"making-a-scratchpad",children:[]},{value:"Making an abstract class",id:"making-an-abstract-class",children:[]},{value:"Taking our abstract class for a spin",id:"taking-our-abstract-class-for-a-spin",children:[]},{value:"Subclassing without a new constructor",id:"subclassing-without-a-new-constructor",children:[]},{value:"Subclassing with a new constructor",id:"subclassing-with-a-new-constructor",children:[]},{value:"Wrapping it up",id:"wrapping-it-up",children:[]}],u={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"TypeScript has the ability to define classes as abstract. This means they cannot be instantiated directly, only non-abstract subclasses can be. Let's take a look at what this means when it comes to constructor usage."),(0,s.kt)("h2",{id:"making-a-scratchpad"},"Making a scratchpad"),(0,s.kt)("p",null,"In order that we can dig into this, let's create ourselves a scratchpad project to work with. We're going to create a node project and install TypeScript as a dependency."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ts-abstract-constructors\ncd ts-abstract-constructors\nnpm init --yes\nnpm install typescript @types/node --save-dev\n")),(0,s.kt)("p",null,"We now have a ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file set up. We need to initialise a TypeScript project as well:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npx tsc --init\n")),(0,s.kt)("p",null,"This will give us a ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file that will drive configuration of TypeScript. By default TypeScript transpiles to an older version of JavaScript that predates classes.  So we'll update the config to target a newer version of the language that does include them: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'    "target": "es2020",\n    "lib": ["es2020"],\n')),(0,s.kt)("p",null,"Let's create ourselves a TypeScript file called ",(0,s.kt)("inlineCode",{parentName:"p"},"index.ts"),". The name is not significant; we just need a file to develop in."),(0,s.kt)("p",null,"Finally we'll add a script to our ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," that compiles our TypeScript to JavaScript, and then runs the JS with node:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"start": "tsc --project \\".\\" && node index.js"\n')),(0,s.kt)("h2",{id:"making-an-abstract-class"},"Making an abstract class"),(0,s.kt)("p",null,"Now we're ready. Let's add an abstract class with a constructor to our ",(0,s.kt)("inlineCode",{parentName:"p"},"index.ts")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"abstract class ViewModel {\n  id: string;\n \n  constructor(id: string) {\n    this.id = id;\n  }\n}\n")),(0,s.kt)("p",null,"Consider the ",(0,s.kt)("inlineCode",{parentName:"p"},"ViewModel")," class above. Let's say we're building some kind of CRUD app, we'll have different views. Each of those views will have a corresponding viewmodel which is a subclass of the ",(0,s.kt)("inlineCode",{parentName:"p"},"ViewModel")," abstract class. The ",(0,s.kt)("inlineCode",{parentName:"p"},"ViewModel")," class has a mandatory ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," parameter in the constructor. This is to ensure that every viewmodel has an ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," value. If this were a real app, ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," would likely be the value with which an entity was looked up in some kind of database."),(0,s.kt)("p",null,"Importantly, all subclasses of ",(0,s.kt)("inlineCode",{parentName:"p"},"ViewModel")," should either:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"not implement a constructor at all, leaving the base class constructor to become the default constructor of the subclass ",(0,s.kt)("em",{parentName:"p"},"or"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"implement their own constructor which invokes the ",(0,s.kt)("inlineCode",{parentName:"p"},"ViewModel")," base class constructor."))),(0,s.kt)("h2",{id:"taking-our-abstract-class-for-a-spin"},"Taking our abstract class for a spin"),(0,s.kt)("p",null,"Now we have it, let's see what we can do with our abstract class. First of all, can we instantiate our abstract class? We shouldn't be able to do this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"const viewModel = new ViewModel('my-id');\n\nconsole.log(`the id is: ${viewModel.id}`);\n")),(0,s.kt)("p",null,"And sure enough, running ",(0,s.kt)("inlineCode",{parentName:"p"},"npm start")," results in the following error (which is also being reported by our editor; VS Code)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"index.ts:9:19 - error TS2511: Cannot create an instance of an abstract class.\n\nconst viewModel = new ViewModel('my-id');\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Screenshot of &quot;Cannot create an instance of an abstract class.&quot; error in VS Code",src:n(35961).Z})),(0,s.kt)("p",null,"Tremendous. However, it's worth remembering that ",(0,s.kt)("inlineCode",{parentName:"p"},"abstract")," is a TypeScript concept. When we compile our TS, although it's throwing a compilation error, it still transpiles an ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," file that looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"\"use strict\";\nclass ViewModel {\n    constructor(id) {\n        this.id = id;\n    }\n}\nconst viewModel = new ViewModel('my-id');\nconsole.log(`the id is: ${viewModel.id}`);\n")),(0,s.kt)("p",null,"As we can see, there's no mention of ",(0,s.kt)("inlineCode",{parentName:"p"},"abstract"),"; it's just a straightforward ",(0,s.kt)("inlineCode",{parentName:"p"},"class"),". In fact, if we directly execute the file with ",(0,s.kt)("inlineCode",{parentName:"p"},"node index.js")," we can see an output of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"the id is: my-id\n")),(0,s.kt)("p",null,"So the transpiled code is valid JavaScript even if the source code isn't valid TypeScript. This all reminds us that ",(0,s.kt)("inlineCode",{parentName:"p"},"abstract")," is a TypeScript construct."),(0,s.kt)("h2",{id:"subclassing-without-a-new-constructor"},"Subclassing without a new constructor"),(0,s.kt)("p",null,"Let's now create our first subclass of ",(0,s.kt)("inlineCode",{parentName:"p"},"ViewModel")," and attempt to instantiate it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class NoNewConstructorViewModel extends ViewModel {\n}\n\n// error TS2554: Expected 1 arguments, but got 0.\nconst viewModel1 = new NoNewConstructorViewModel();\n\nconst viewModel2 = new NoNewConstructorViewModel('my-id');\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Screenshot of &quot;error TS2554: Expected 1 arguments, but got 0.&quot; error in VS Code",src:n(77910).Z})),(0,s.kt)("p",null,"As the TypeScript compiler tells us, the second of these instantiations is legitimate as it relies upon the constructor from the base class as we'd hope. The first is not as there is no parameterless constructor."),(0,s.kt)("h2",{id:"subclassing-with-a-new-constructor"},"Subclassing with a new constructor"),(0,s.kt)("p",null,"Having done that, let's try subclassing and implementing a new constructor which has two parameters (to differentiate from the constructor we're overriding):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class NewConstructorViewModel extends ViewModel {\n  data: string;\n  constructor(id: string, data: string) {\n        super(id);\n        this.data = data;\n   }\n}\n\n// error TS2554: Expected 2 arguments, but got 0.\nconst viewModel3 = new NewConstructorViewModel();\n\n// error TS2554: Expected 2 arguments, but got 1.\nconst viewModel4 = new NewConstructorViewModel('my-id');\n\nconst viewModel5 = new NewConstructorViewModel('my-id', 'important info');\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Screenshot of &quot;error TS2554: Expected 1 arguments, but got 1.&quot; error in VS Code",src:n(57860).Z})),(0,s.kt)("p",null,"Again, only one of the attempted instantiations is legitimate. ",(0,s.kt)("inlineCode",{parentName:"p"},"viewModel3")," is not as there is no parameterless constructor. ",(0,s.kt)("inlineCode",{parentName:"p"},"viewModel4")," is not as we have overridden the base class constructor with our new one that has two parameters. Hence ",(0,s.kt)("inlineCode",{parentName:"p"},"viewModel5"),' is our "Goldilocks" instantiation; it\'s just right!'),(0,s.kt)("p",null,"It's also worth noting that we're calling ",(0,s.kt)("inlineCode",{parentName:"p"},"super")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"NewConstructorViewModel")," constructor. This invokes the constructor of the ",(0,s.kt)("inlineCode",{parentName:"p"},"ViewModel"),' base (or "super") class. TypeScript enforces that we pass the appropriate arguments (in our case a single ',(0,s.kt)("inlineCode",{parentName:"p"},"string"),")."),(0,s.kt)("h2",{id:"wrapping-it-up"},"Wrapping it up"),(0,s.kt)("p",null,"We've seen that TypeScript ensures correct usage of constructors when we have an abstract class. Importantly, all subclasses of abstract classes either:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"do not implement a constructor at all, leaving the base class constructor (the abstract constructor) to become the default constructor of the subclass ",(0,s.kt)("em",{parentName:"p"},"or"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'implement their own constructor which invokes the base (or "super") class constructor with the correct arguments.'))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/typescript-abstract-classes-and-constructors/"},"This post was originally published on LogRocket.")))}d.isMDXComponent=!0},35961:function(e,t,n){t.Z=n.p+"assets/images/vs-code-abstract-screenshot-4bcd5908377727094d6a1649e1c2e913.png"},57860:function(e,t,n){t.Z=n.p+"assets/images/vs-code-new-constructor-dcd35131a62c4bcfcf63fb8fb1b8a85f.png"},77910:function(e,t,n){t.Z=n.p+"assets/images/vs-code-no-new-constructor-0bdc746179c5137c0bc61f451af99d3e.png"}}]);
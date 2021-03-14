(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{1161:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return h}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),d=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),b=o,h=c["".concat(a,".").concat(b)]||c[b]||u[b]||r;return t?i.a.createElement(h,l(l({ref:n},p),{},{components:t})):i.a.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},748:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var o=t(3),i=t(8),r=(t(0),t(1161)),a={title:"Definitely Typed Shouldn't Exist",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["npm","DefinitelyTyped","TypeScript","atom-typescript"],hide_table_of_contents:!1},l={permalink:"/2015/09/23/authoring-npm-modules-with-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-09-23-authoring-npm-modules-with-typescript.md",source:"@site/blog/2015-09-23-authoring-npm-modules-with-typescript.md",description:"OK - the title's total clickbait but stay with me; there's a point here.",date:"2015-09-23T00:00:00.000Z",formattedDate:"September 23, 2015",tags:[{label:"npm",permalink:"/tags/npm"},{label:"DefinitelyTyped",permalink:"/tags/definitely-typed"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"atom-typescript",permalink:"/tags/atom-typescript"}],title:"Definitely Typed Shouldn't Exist",readingTime:10.76,truncated:!1,prevItem:{title:"jQuery Validation Globalize hits 1.0",permalink:"/2015/10/05/jquery-validation-globalize-hits-10"},nextItem:{title:"Things Done Changed",permalink:"/2015/09/10/things-done-changed"}},s=[{value:"Wrong!",id:"wrong",children:[]},{value:"Authoring npm modules with TypeScript",id:"authoring-npm-modules-with-typescript",children:[]},{value:"Port, port, port!!!",id:"port-port-port",children:[]},{value:"PS I&#39;m not the only one",id:"ps-im-not-the-only-one",children:[]},{value:"PPS Update 23/09/2015 09:51",id:"pps-update-23092015-0951",children:[]}],p={toc:s};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"OK - the title's total clickbait but stay with me; there's a point here."),Object(r.b)("p",null," I'm a member of the Definitely Typed team - and hopefully I won't be kicked out for writing this. My point is this: ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," files should live with the package they provide typing information for, in npm / GitHub etc. Not separately. TypeScript 1.6 has just been released. Yay! In the ",Object(r.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/typescript/archive/2015/09/16/announcing-typescript-1-6.aspx"},"release blog post")," it says this:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"We\u2019ve changed module resolution when doing CommonJS output to work more closely to how Node does module resolution. If a module name is non-relative, we now follow these steps to find the associated typings:"),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"Check in ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules")," for ",Object(r.b)("inlineCode",{parentName:"li"},"&lt;module name&gt;.d.ts")),Object(r.b)("li",{parentName:"ol"},"Search ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules\\&lt;module name&gt;\\package.json")," for a ",Object(r.b)("inlineCode",{parentName:"li"},"typings")," field"),Object(r.b)("li",{parentName:"ol"},"Look for ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules\\&lt;module name&gt;\\index.d.ts")),Object(r.b)("li",{parentName:"ol"},"Then we go one level higher and repeat the process")),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Please note:")," when we search through node","_","modules, we assume these are the packaged node modules which have type information and a corresponding ",Object(r.b)("inlineCode",{parentName:"p"},".js")," file. As such, we resolve only ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," files (not ",Object(r.b)("inlineCode",{parentName:"p"},".ts")," file) for non-relative names."),Object(r.b)("p",{parentName:"blockquote"},"Previously, we treated all module names as relative paths, and therefore we would never properly look in node","_","modules... We will continue to improve module resolution, including improvements to AMD, in upcoming releases.")),Object(r.b)("p",null,"The TL;DR is this: consuming npm packages which come with definition files should JUST WORK\u2122... npm is now a first class citizen in TypeScriptLand. So everyone who has a package on npm should now feel duty bound to include a ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," when they publish and Definitely Typed can shut up shop. Simple right?"),Object(r.b)("h2",{id:"wrong"},"Wrong!"),Object(r.b)("p",null,"Yeah, it's never going to happen. Surprising as it is, there are many people who are quite happy without TypeScript in their lives (I know - mad right?). These poor unfortunates are unlikely to ever take the extra steps necessary to write definition files. For this reason, there will probably ",Object(r.b)("em",{parentName:"p"},"always")," be a need for a provider of typings such as Definitely Typed. As well as that, the vast majority of people using TypeScript probably don't use npm to manage dependencies. There are, however, an increasing number of users who are using npm. Some (like me) may even be using tools like ",Object(r.b)("a",{parentName:"p",href:"http://browserify.org/"},"Browserify")," (with the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/smrq/tsify"},"TSIFY plugin"),") or ",Object(r.b)("a",{parentName:"p",href:"https://webpack.github.io/"},"WebPack")," (with the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jbrantly/ts-loader"},"TS loader"),") to bring it all together. My feeling is that, over time, using npm will become more common; particularly given the improvements being made to module resolution in the language."),Object(r.b)("p",null,"An advantage of shipping typings with an npm package is this: those typings should accurately describe their accompanying package. In Definitely Typed we only aim to support the latest and greatest typings. So if you find yourself looking for the typings of an older version of a package you're going to have to pick your way back through the history of a ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," file and hope you happen upon the version you're looking for. Not a fantastic experience."),Object(r.b)("p",null,"So I guess what I'm saying is this: if you're an npm package author then it would be fantastic to start shipping a package with typings in the box. If you're using npm to consume packages then using Definitely Typed ought to be the second step you might take after installing a package; the step you only need to take if the package doesn't come with typings. Using DT should be a fallback, not a default."),Object(r.b)("h2",{id:"authoring-npm-modules-with-typescript"},"Authoring npm modules with TypeScript"),Object(r.b)("p",null,"Yup - that's what this post is actually about. See how I lured you in with my mild trolling and pulled the old switcheroo? That's edutainment my friend. So, how do we write npm packages in TypeScript and publish them with their typings? Apparently Gandhi ",Object(r.b)("a",{parentName:"p",href:"http://www.nytimes.com/2011/08/30/opinion/falser-words-were-never-spoken.html?_r=0"},"didn't actually say"),' "Be the change you wish to see in the world." Which is a shame. But anyway, I\'m going to try and embrace the sentiment here.'),Object(r.b)("p",null,"Not so long ago I wrote a small npm module called ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/globalize-so-what-cha-want"},"globalize-so-what-cha-want"),". It is used to determine what parts of Globalize 1.x you need depending on the modules you're planning to use. It also, contains a little demo UI / online tool written in React which powers ",Object(r.b)("a",{parentName:"p",href:"http://johnnyreilly.github.io/globalize-so-what-cha-want/"},"this"),"."),Object(r.b)("p",null,"For this post, the purpose of the package is rather irrelevant. And even though I've just told you about it, I want you to pretend that the online tool doesn't exist. Pretend I never mentioned it."),Object(r.b)("p",null,"What is relevant, and what I want you to think about, is this: I wrote globalize-so-what-cha-want in plain old, honest to goodness JavaScript. Old school."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=V4YPFHyGWaY&feature=youtu.be&t=49s"},"But, my love of static typing could be held in abeyance for only so long.")," Once the initial package was written, unit tested and published I got the itch. THIS SHOULD BE WRITTEN IN TYPESCRIPT!!! Well, it didn't have to be but I wanted it to be. Despite having used TypeScript since the early days I'd only been using it for front end work; not for writing npm packages. My mission was clear: port globalize-so-what-cha-want to TypeScript and re-publish to npm."),Object(r.b)("h2",{id:"port-port-port"},"Port, port, port!!!"),Object(r.b)("p",null,"At this point globalize-so-what-cha-want consisted of a single ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," file in the root of the package. My end goal was to end up with that file still sat there, but now generated from TypeScript. Alongside it I wanted to see a ",Object(r.b)("inlineCode",{parentName:"p"},"index.d.ts")," which was generated from the same TypeScript."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"index.js"),Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/globalize-so-what-cha-want/tree/6cce84289134a555fe8462247b43eddb051303e3"},"before")," looked like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"/* jshint varstmt: false, esnext: false */\nvar DEPENDENCY_TYPES = {\n  SHARED_JSON: 'Shared JSON (used by all locales)',\n  LOCALE_JSON: 'Locale specific JSON (supplied for each locale)'\n};\n\nvar moduleDependencies = {\n  'core': {\n    dependsUpon: [],\n    cldrGlobalizeFiles: ['cldr.js', 'cldr/event.js', 'cldr/supplemental.js', 'globalize.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/likelySubtags.json' }\n    ]\n  },\n\n  'currency': {\n    dependsUpon: ['number','plural'],\n    cldrGlobalizeFiles: ['globalize/currency.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/currencies.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/currencyData.json' }\n    ]\n  },\n\n  'date': {\n    dependsUpon: ['number'],\n    cldrGlobalizeFiles: ['globalize/date.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/ca-gregorian.json' },\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/timeZoneNames.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/timeData.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/weekData.json' }\n    ]\n  },\n\n  'message': {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/message.js'],\n    json: []\n  },\n\n  'number': {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/number.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/numbers.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/numberingSystems.json' }\n    ]\n  },\n\n  'plural': {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/plural.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/plurals.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/ordinals.json' }\n    ]\n  },\n\n  'relativeTime': {\n    dependsUpon: ['number','plural'],\n    cldrGlobalizeFiles: ['globalize/relative-time.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/dateFields.json' }\n    ]\n  }\n};\n\nfunction determineRequiredCldrData(globalizeOptions) {\n  return determineRequired(globalizeOptions, _populateDependencyCurrier('json', function(json) { return json.dependency; }));\n}\n\nfunction determineRequiredCldrGlobalizeFiles(globalizeOptions) {\n  return determineRequired(globalizeOptions, _populateDependencyCurrier('cldrGlobalizeFiles', function(cldrGlobalizeFile) { return cldrGlobalizeFile; }));\n}\n\nfunction determineRequired(globalizeOptions, populateDependencies) {\n  var modules = Object.keys(globalizeOptions);\n  modules.forEach(function(module) {\n    if (!moduleDependencies[module]) {\n      throw new TypeError('There is no \\'' + module + '\\' module');\n    }\n  });\n\n  var requireds = [];\n  modules.forEach(function (module) {\n    if (globalizeOptions[module]) {\n      populateDependencies(module, requireds);\n    }\n  });\n\n  return requireds;\n}\n\nfunction _populateDependencyCurrier(requiredArray, requiredArrayGetter) {\n  var popDepFn = function(module, requireds) {\n    var dependencies = moduleDependencies[module];\n\n    dependencies.dependsUpon.forEach(function(requiredModule) {\n      popDepFn(requiredModule, requireds);\n    });\n\n    dependencies[requiredArray].forEach(function(required) {\n      var newRequired = requiredArrayGetter(required);\n      if (requireds.indexOf(newRequired) === -1) {\n        requireds.push(newRequired);\n      }\n    });\n\n    return requireds;\n  };\n\n  return popDepFn;\n}\n\nmodule.exports = {\n  determineRequiredCldrData: determineRequiredCldrData,\n  determineRequiredCldrGlobalizeFiles: determineRequiredCldrGlobalizeFiles\n};\n")),Object(r.b)("p",null,"You can even kind of tell that it was written in JavaScript thanks to the jshint rules at the top."),Object(r.b)("p",null,"I fired up Atom and created a new folder ",Object(r.b)("inlineCode",{parentName:"p"},"src/lib")," and inside there I created ",Object(r.b)("inlineCode",{parentName:"p"},"index.ts")," (yes, ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," renamed) and ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json"),". By the way, you'll notice I'm not leaving Atom - I'm making use of the magnificent ",Object(r.b)("a",{parentName:"p",href:"https://atom.io/packages/atom-typescript"},"atom-typescript")," which you should totally be using too. It rocks."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://2.bp.blogspot.com/-HkCD9qNaoaU/VgIwn4WTBTI/AAAAAAAAA4g/U2E1Ybe6acI/s1600/Screenshot%2B2015-09-23%2B05.51.14.png"},Object(r.b)("img",{parentName:"a",src:"http://2.bp.blogspot.com/-HkCD9qNaoaU/VgIwn4WTBTI/AAAAAAAAA4g/U2E1Ybe6acI/s640/Screenshot%2B2015-09-23%2B05.51.14.png",alt:"null"})),"Now I'm not going to bore you with what I had to do to port the JS to TS (not much). If you're interested, the source is ",Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/globalize-so-what-cha-want/blob/master/src/lib/index.ts"},"here"),". What's more interesting is the ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," ","-"," as it's this that is going to lead the generation of the JS and TS that we need:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "compileOnSave": true,\n    "compilerOptions": {\n        "module": "commonjs",\n        "declaration": true,\n        "target": "es5",\n        "noImplicitAny": true,\n        "suppressImplicitAnyIndexErrors": true,\n        "removeComments": false,\n        "preserveConstEnums": true,\n        "sourceMap": false,\n        "outDir": "../../"\n    },\n    "files": [\n        "index.ts"\n    ]\n}\n')),Object(r.b)("p",null,"The things to notice are:"),Object(r.b)("dl",null,Object(r.b)("dt",null,"module"),Object(r.b)("dd",null,"Publishing a commonjs module means it will play well with npm"),Object(r.b)("dt",null,"declaration"),Object(r.b)("dd",null,"This is what makes TypeScript generate ",Object(r.b)("code",null,"index.d.ts")),Object(r.b)("dt",null,"outDir"),Object(r.b)("dd",null,"We want to regenerate the ",Object(r.b)("code",null,"index.js")," in the root (2 directories above this)")),Object(r.b)("p",null,"So now, what do we get when we build in Atom? Well, we're generating an ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/johnnyreilly/globalize-so-what-cha-want/blob/master/index.js">index.js</a>')," file which looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"var DEPENDENCY_TYPES = {\n  SHARED_JSON: 'Shared JSON (used by all locales)',\n  LOCALE_JSON: 'Locale specific JSON (supplied for each locale)'\n};\nvar moduleDependencies = {\n  'core': {\n    dependsUpon: [],\n    cldrGlobalizeFiles: ['cldr.js', 'cldr/event.js', 'cldr/supplemental.js', 'globalize.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/likelySubtags.json' }\n    ]\n  },\n  'currency': {\n    dependsUpon: ['number', 'plural'],\n    cldrGlobalizeFiles: ['globalize/currency.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/currencies.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/currencyData.json' }\n    ]\n  },\n  'date': {\n    dependsUpon: ['number'],\n    cldrGlobalizeFiles: ['globalize/date.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/ca-gregorian.json' },\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/timeZoneNames.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/timeData.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/weekData.json' }\n    ]\n  },\n  'message': {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/message.js'],\n    json: []\n  },\n  'number': {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/number.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/numbers.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/numberingSystems.json' }\n    ]\n  },\n  'plural': {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/plural.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/plurals.json' },\n      { dependencyType: DEPENDENCY_TYPES.SHARED_JSON, dependency: 'cldr/supplemental/ordinals.json' }\n    ]\n  },\n  'relativeTime': {\n    dependsUpon: ['number', 'plural'],\n    cldrGlobalizeFiles: ['globalize/relative-time.js'],\n    json: [\n      { dependencyType: DEPENDENCY_TYPES.LOCALE_JSON, dependency: 'cldr/main/{locale}/dateFields.json' }\n    ]\n  }\n};\nfunction determineRequired(globalizeOptions, populateDependencies) {\n  var modules = Object.keys(globalizeOptions);\n  modules.forEach(function (module) {\n    if (!moduleDependencies[module]) {\n      throw new TypeError('There is no \\'' + module + '\\' module');\n    }\n  });\n  var requireds = [];\n  modules.forEach(function (module) {\n    if (globalizeOptions[module]) {\n      populateDependencies(module, requireds);\n    }\n  });\n  return requireds;\n}\nfunction _populateDependencyCurrier(requiredArray, requiredArrayGetter) {\n  var popDepFn = function (module, requireds) {\n    var dependencies = moduleDependencies[module];\n    dependencies.dependsUpon.forEach(function (requiredModule) {\n      popDepFn(requiredModule, requireds);\n    });\n    dependencies[requiredArray].forEach(function (required) {\n      var newRequired = requiredArrayGetter(required);\n      if (requireds.indexOf(newRequired) === -1) {\n        requireds.push(newRequired);\n      }\n    });\n    return requireds;\n  };\n  return popDepFn;\n}\n/**\n * The string array returned will contain a list of the required cldr json data you need. I don't believe ordering matters for the json but it is listed in the same dependency order as the cldr / globalize files are.\n *\n * @param options The globalize modules being used.\n */\nfunction determineRequiredCldrData(globalizeOptions) {\n  return determineRequired(globalizeOptions, _populateDependencyCurrier('json', function (json) { return json.dependency; }));\n}\nexports.determineRequiredCldrData = determineRequiredCldrData;\n/**\n * The string array returned will contain a list of the required cldr / globalize files you need, listed in the order they are required.\n *\n * @param options The globalize modules being used.\n */\nfunction determineRequiredCldrGlobalizeFiles(globalizeOptions) {\n  return determineRequired(globalizeOptions, _populateDependencyCurrier('cldrGlobalizeFiles', function (cldrGlobalizeFile) { return cldrGlobalizeFile; }));\n}\nexports.determineRequiredCldrGlobalizeFiles = determineRequiredCldrGlobalizeFiles;\n")),Object(r.b)("p",null,"Aside from one method moving internally and me adding some JSDoc, the only really notable change is the end of the file. TypeScript, when generating commonjs, doesn't use the ",Object(r.b)("inlineCode",{parentName:"p"},"module.exports = {}")," approach. Rather, it drops exported functions onto the ",Object(r.b)("inlineCode",{parentName:"p"},"exports")," object as functions are exported. Functionally this is ",Object(r.b)("em",{parentName:"p"},"identical"),"."),Object(r.b)("p",null,"Now for our big finish: happily sat alongside is ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," is the ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/johnnyreilly/globalize-so-what-cha-want/blob/master/index.d.ts">index.d.ts</a>')," file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"export interface Options {\n  currency?: boolean;\n  date?: boolean;\n  message?: boolean;\n  number?: boolean;\n  plural?: boolean;\n  relativeTime?: boolean;\n}\n/**\n * The string array returned will contain a list of the required cldr json data you need. I don't believe ordering matters for the json but it is listed in the same dependency order as the cldr / globalize files are.\n *\n * @param options The globalize modules being used.\n */\nexport declare function determineRequiredCldrData(globalizeOptions: Options): string[];\n/**\n * The string array returned will contain a list of the required cldr / globalize files you need, listed in the order they are required.\n *\n * @param options The globalize modules being used.\n */\nexport declare function determineRequiredCldrGlobalizeFiles(globalizeOptions: Options): string[];\n")),Object(r.b)("p",null,"We're there, huzzah! This has been now published to npm - anyone consuming this package can use TypeScript straight out of the box. I really hope that publishing npm packages in this fashion becomes much more commonplace. Time will tell."),Object(r.b)("h2",{id:"ps-im-not-the-only-one"},"PS I'm not the only one"),Object(r.b)("p",null,'I was just about to hit "publish" when I happened upon ',Object(r.b)("a",{parentName:"p",href:"https://twitter.com/basarat"},"Basarat"),"'s ",Object(r.b)("a",{parentName:"p",href:"https://github.com/basarat/ts-npm-module"},"ts-npm-module")," which is a project on GitHub which demo's how to publish and consume TypeScript using npm. I'd say great minds think alike but I'm pretty sure Basarat's mind is far greater than mine! (Cough, atom-typescript, cough.) Either way, it's good to see validation for the approach I'm suggesting."),Object(r.b)("h2",{id:"pps-update-23092015-0951"},"PPS Update 23/09/2015 09:51"),Object(r.b)("p",null,"One of the useful things about writing a blog is that you get to learn. Since I published I've become aware of a few things somewhat relevant to this post. First of all, there is still work ongoing in TypeScript land around this topic. Essentially there are problems resolving dependency conflicts when different dependencies have different versions - you can take part in the ongoing discussion ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/4665"},"here"),". There's also some useful resources to look at:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/wiki/Typings-for-npm-packages"},"https://github.com/Microsoft/TypeScript/wiki/Typings-for-npm-packages")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://basarat.gitbooks.io/typescript/content/docs/node/nodejs.html"},"https://basarat.gitbooks.io/typescript/content/docs/node/nodejs.html"))))}d.isMDXComponent=!0}}]);
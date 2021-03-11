(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,r(r({ref:t},c),{},{components:n})):o.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},930:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var i=n(3),o=n(7),a=(n(0),n(1159)),l={title:"Visual Studio, tsconfig.json and external TypeScript compilation",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["TFS","Visual Studio","tsconfig.json","TypeScript","Webpack"],hide_table_of_contents:!1},r={permalink:"/2016/02/19/visual-studio-tsconfigjson-and-external",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-02-19-visual-studio-tsconfigjson-and-external.md",source:"@site/blog/2016-02-19-visual-studio-tsconfigjson-and-external.md",description:"TypeScript first gained support for tsconfig.json back with the 1\\.5 release. However, to my lasting regret and surprise Visual Studio will not be gaining meaningful support for it until TypeScript 1.8 ships. However, if you want it now, it's already available to use in beta.",date:"2016-02-19T00:00:00.000Z",tags:[{label:"TFS",permalink:"/tags/tfs"},{label:"Visual Studio",permalink:"/tags/visual-studio"},{label:"tsconfig.json",permalink:"/tags/tsconfig-json"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Webpack",permalink:"/tags/webpack"}],title:"Visual Studio, tsconfig.json and external TypeScript compilation",readingTime:5.865,truncated:!1,prevItem:{title:"Creating Angular UI Routes in the Controller",permalink:"/2016/02/29/creating-angular-ui-routes-in-controller"},nextItem:{title:"TFS 2012, .NET 4.5 and C# 6",permalink:"/2016/02/01/tfs-2012-net-45-and-c-6"}},p=[{value:"External TypeScript Compilation and the VS build",id:"external-typescript-compilation-and-the-vs-build",children:[]},{value:"Goodbye TypeScript Compilation in VS",id:"goodbye-typescript-compilation-in-vs",children:[]},{value:"Hello TypeScript Compilation outside VS",id:"hello-typescript-compilation-outside-vs",children:[]},{value:"The <code>WebClientBuild</code> Target",id:"the-webclientbuild-target",children:[]},{value:"The <code>WebClientClean</code> Target",id:"the-webclientclean-target",children:[]},{value:"The <code>CollectLegacyTypeScriptOutput</code> and <code>CollectGulpOutput</code> Targets",id:"the-collectlegacytypescriptoutput-and-collectgulpoutput-targets",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"TypeScript first gained support for ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/tsconfig.json"},Object(a.b)("inlineCode",{parentName:"a"},"tsconfig.json"))," back with the ",Object(a.b)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2015/07/20/announcing-typescript-1-5/"},"1",".","5 release"),". However, to my lasting regret and surprise Visual Studio will not be gaining meaningful support for it until ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#improved-support-for-tsconfigjson-in-visual-studio-2015"},"TypeScript 1.8")," ships. However, if you want it now, it's already available to use in ",Object(a.b)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2016/01/28/announcing-typescript-1-8-beta/"},"beta"),"."),Object(a.b)("p",null," I've already leapt aboard. Whilst there's a number of bugs in the beta it's still totally usable. So use it."),Object(a.b)("h2",{id:"external-typescript-compilation-and-the-vs-build"},"External TypeScript Compilation and the VS build"),Object(a.b)("p",null,"Whilst ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," is useful and super cool it has limitations. It allows you to deactivate compilation upon file saving using ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/2326#issuecomment-178294169"},Object(a.b)("inlineCode",{parentName:"a"},"compileOnSave")),". ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/7091"},"What it doesn't allow is deactivation of the TypeScript compilation that happens as part of a Visual Studio build.")," That may not matter for the vanilla workflow of just dropping TypeScript files in a Visual Studio web project and having VS invoke the TypeScript compilation. However it comes to matter when your workflow deviates from the norm, as mine does. Using external compilation of TypeScript within Visual Studio is a little tricky. My own use case is somewhat atypical but perhaps not uncommon."),Object(a.b)("p",null,"I'm working on a project which has been built using TypeScript since TS 0.9. Not surprisingly, this started off using the default Visual Studio / TypeScript workflow. Active development on the project ceased around 9 months ago. Now it's starting up again. It's a reasonable sized web app and the existing functionality is, in the main, fine. But the users want to add some new screens."),Object(a.b)("p",null,"Like any developer, I want to build with the latest and greatest. In my case, this means I want to write modular ES6 using TypeScript. With this approach my code can be leaner and I have less script ordering drama in my life. (Yay import statements!) This can be done by bringing together webpack, TypeScript (",Object(a.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader"),") and ",Object(a.b)("a",{parentName:"p",href:"http://babeljs.io/"},"Babel")," (",Object(a.b)("a",{parentName:"p",href:"https://github.com/babel/babel-loader"},"babel-loader"),"). There's an example of this approach ",Object(a.b)("a",{parentName:"p",href:"/2015/12/es6-typescript-babel-react-flux-karma.html"},"here"),". Given the size of the existing codebase I'd rather leave the legacy TypeScript as is and isolate my new approach to the screens I'm going to build. Obviously I'd like to have a common build process for all the codebase at some point but I've got a deadline to meet and so a half-old / half-new approach is called for (at least for the time being)."),Object(a.b)("h2",{id:"goodbye-typescript-compilation-in-vs"},"Goodbye TypeScript Compilation in VS"),Object(a.b)("p",null,"Writing modular ES6 TypeScript which is fully transpiled to old-school JS is ",Object(a.b)("em",{parentName:"p"},"not possible")," using the Visual Studio tooling at present. For what it's worth I think that SystemJS compilation may make this more possible in the future but I don't really know enough about it to be sure. That's why I'm bringing webpack / Babel into the mix right now. I don't want Visual Studio to do anything for the ES6 code; I don't want it to compile. I want to deactivate my TypeScript compilation for the ES6 code. I can't do this from the ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," so I'm in a bit of a hole. What to do?"),Object(a.b)("p",null,"Well, as of (I think) TypeScript 1.7 it's possible to deactivate TypeScript compilation in Visual Studio. To ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/2294#issuecomment-129367578"},"quote"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"there is an easier way to disable TypeScriptCompile:"),Object(a.b)("p",{parentName:"blockquote"},"Just add ",Object(a.b)("inlineCode",{parentName:"p"},"&lt;TypeScriptCompileBlocked&gt;true&lt;/TypeScriptCompileBlocked&gt;")," to the ",Object(a.b)("inlineCode",{parentName:"p"},".csproj"),", e.g. in the first ",Object(a.b)("inlineCode",{parentName:"p"},"&lt;PropertyGroup&gt;"),".")),Object(a.b)("p",null,"Awesomeness!"),Object(a.b)("p",null,"But wait, this means that the legacy TypeScript isn't being compiled any longer. Bear in mind, I'm totally happy with the existing / legacy TypeScript compilation. Nooooooooooooooo!!!!!!!!!!!!!!!"),Object(a.b)("h2",{id:"hello-typescript-compilation-outside-vs"},"Hello TypeScript Compilation outside VS"),Object(a.b)("p",null,"Have no fear, I gotcha. What we're going to do is ensure that Visual Studio triggers 2 external TypeScript builds as part of its own build process:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The modular ES6 TypeScript (new)"),Object(a.b)("li",{parentName:"ul"},"The legacy TypeScript (old)")),Object(a.b)("p",null,"How do we do this? Through the magic of build targets. We need to add this to our ",Object(a.b)("inlineCode",{parentName:"p"},".csproj"),": (I add it near the end; I'm not sure if location matters though)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<PropertyGroup>\n    <CompileDependsOn>\n      $(CompileDependsOn);\n      WebClientBuild;\n    </CompileDependsOn>\n    <CleanDependsOn>\n      $(CleanDependsOn);\n      WebClientClean\n    </CleanDependsOn>\n    <CopyAllFilesToSingleFolderForPackageDependsOn>\n      CollectGulpOutput;\n      CollectLegacyTypeScriptOutput;\n      $(CopyAllFilesToSingleFolderForPackageDependsOn);\n    </CopyAllFilesToSingleFolderForPackageDependsOn>\n    <CopyAllFilesToSingleFolderForMsdeployDependsOn>\n      CollectGulpOutput;\n      CollectLegacyTypeScriptOutput;\n      $(CopyAllFilesToSingleFolderForPackageDependsOn);\n    </CopyAllFilesToSingleFolderForMsdeployDependsOn>\n  </PropertyGroup>\n  <Target Name="WebClientBuild">\n    <Exec Command="npm install" />\n    <Exec Command="npm run build-legacy-typescript" />\n    <Exec Command="npm run build -- --mode $(ConfigurationName)" />\n  </Target>\n  <Target Name="WebClientClean">\n    <Exec Command="npm run clean" />\n  </Target>\n  <Target Name="CollectGulpOutput">\n    <ItemGroup>\n      <_CustomFiles Include="dist\\**\\*" />\n      <FilesForPackagingFromProject Include="%(_CustomFiles.Identity)">\n        <DestinationRelativePath>dist\\%(RecursiveDir)%(Filename)%(Extension)</DestinationRelativePath>\n      </FilesForPackagingFromProject>\n    </ItemGroup>\n    <Message Text="CollectGulpOutput list: %(_CustomFiles.Identity)" />\n  </Target>\n  <Target Name="CollectLegacyTypeScriptOutput">\n    <ItemGroup>\n      <_CustomFiles Include="Scripts\\**\\*.js" />\n      <FilesForPackagingFromProject Include="%(_CustomFiles.Identity)">\n        <DestinationRelativePath>Scripts\\%(RecursiveDir)%(Filename)%(Extension)</DestinationRelativePath>\n      </FilesForPackagingFromProject>\n    </ItemGroup>\n    <Message Text="CollectLegacyTypeScriptOutput list: %(_CustomFiles.Identity)" />\n  </Target>\n')),Object(a.b)("p",null,"There's a few things going on here; let's take them one by one."),Object(a.b)("h2",{id:"the-webclientbuild-target"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"WebClientBuild")," Target"),Object(a.b)("p",null,"This target triggers our external builds. One by one it runs the following commands:"),Object(a.b)("dl",null,Object(a.b)("dt",null,Object(a.b)("code",null,"npm install")),Object(a.b)("dd",null,"Installs the npm packages."),Object(a.b)("dt",null,Object(a.b)("code",null,"npm run build-legacy-typescript")),Object(a.b)("dd",null,"Runs the ",Object(a.b)("code",null,'"build-legacy-typescript"'),Object(a.b)("code",null,"script")," in our ",Object(a.b)("code",null,"package.json")),Object(a.b)("dt",null,Object(a.b)("code",null,"npm run build -- --mode $(ConfigurationName)")),Object(a.b)("dd",null,"Runs the ",Object(a.b)("code",null,'"build"'),Object(a.b)("code",null,"script")," in our ",Object(a.b)("code",null,"package.json")," and passes through a ",Object(a.b)("code",null,"mode")," parameter of either ",Object(a.b)("code",null,'"Debug"')," or ",Object(a.b)("code",null,'"Release"')," from MSBuild - indicating whether we're creating a debug or a release build.")),Object(a.b)("p",null,"As you've no doubt gathered, I'm following the convention of using the ",Object(a.b)("inlineCode",{parentName:"p"},"scripts")," element of my ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," as repository for the various build tasks I might have for a web project. It looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "scripts": {\n    "test": "karma start --reporters mocha,junit --single-run --browsers PhantomJS",\n    "build-legacy-typescript": "tsc -v&&tsc --project Scripts",\n    "clean": "gulp delete-dist-contents",\n    "watch": "gulp watch",\n    "build": "gulp build"\n  },\n  // ...\n}\n')),Object(a.b)("p",null,"As you can see, ",Object(a.b)("inlineCode",{parentName:"p"},'"build-legacy-typescript"')," invokes ",Object(a.b)("inlineCode",{parentName:"p"},"tsc")," (which is registered as a ",Object(a.b)("inlineCode",{parentName:"p"},"devDependency"),") to print out the version of the compiler. Then it invokes ",Object(a.b)("inlineCode",{parentName:"p"},"tsc")," again using the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/Compiler-Options"},Object(a.b)("inlineCode",{parentName:"a"},"project"))," flag directly on the ",Object(a.b)("inlineCode",{parentName:"p"},"Scripts")," directory. This is where the legacy TypeScript and its associated ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," resides. Et voil\xe1, the old / existing TypeScript is compiled just as it was previously by VS itself."),Object(a.b)("p",null,"Next, the ",Object(a.b)("inlineCode",{parentName:"p"},'"build"')," invokes a ",Object(a.b)("inlineCode",{parentName:"p"},"gulp")," task called, descriptively, ",Object(a.b)("inlineCode",{parentName:"p"},'"build"'),". This task caters for our brand new codebase of modular ES6 TypeScript. When run, this task will invoke webpack, copy static files, build less etc. Quick digression: you can see there's a ",Object(a.b)("inlineCode",{parentName:"p"},'"watch"')," script that does the same thing on a file-watching basis; I use that during development."),Object(a.b)("h2",{id:"the-webclientclean-target"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"WebClientClean")," Target"),Object(a.b)("p",null,"The task that runs to clean up artefacts created by ",Object(a.b)("inlineCode",{parentName:"p"},"WebClientBuild"),"."),Object(a.b)("h2",{id:"the-collectlegacytypescriptoutput-and-collectgulpoutput-targets"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"CollectLegacyTypeScriptOutput")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"CollectGulpOutput")," Targets"),Object(a.b)("p",null,"Since we're compiling our TypeScript outside of VS we need to tell MSBuild / MSDeploy about the externally compiled assets in order that they are included in the publish pipeline. Here I'm standing on the shoulders of ",Object(a.b)("a",{parentName:"p",href:"http://www.codecadwallader.com/2015/03/15/integrating-gulp-into-your-tfs-builds-and-web-deploy/"},"Steve Cadwallader's excellent post"),". Thanks Steve!"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"CollectLegacyTypeScriptOutput")," and ",Object(a.b)("inlineCode",{parentName:"p"},"CollectGulpOutput")," respectively include all the built files contained in the ",Object(a.b)("inlineCode",{parentName:"p"},'"Scripts"')," and ",Object(a.b)("inlineCode",{parentName:"p"},'"dist"')," folders when a publish takes place. You don't need this for when you're building on your own machine but if you're looking to publish (either from your machine or from TFS) then you will need exactly this. Believe me that last sentence was typed with a memory of ",Object(a.b)("em",{parentName:"p"},"great")," pain and frustration."),Object(a.b)("p",null,"So in the end, as far as TypeScript is concerned, I'm using Visual Studio solely as an editor. It's the hooks in the ",Object(a.b)("inlineCode",{parentName:"p"},".csproj")," that ensure that compilation happens. It seems a little quirky that we still need to have the original TypeScript targets in the ",Object(a.b)("inlineCode",{parentName:"p"},".csproj")," file as well; but it works. That's all that matters."))}s.isMDXComponent=!0}}]);
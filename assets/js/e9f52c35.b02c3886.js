(window.webpackJsonp=window.webpackJsonp||[]).push([[1010],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(i,".").concat(u)]||b[u]||h[u]||r;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(8),r=(n(0),n(1170)),i={title:"Finding webpack 4 (use a Map)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["webpack 4"],hide_table_of_contents:!1},c={permalink:"/2018/01/29/finding-webpack-4-use-map",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-01-29-finding-webpack-4-use-map.md",source:"@site/blog/2018-01-29-finding-webpack-4-use-map.md",description:"Update: 03/02/2018",date:"2018-01-29T00:00:00.000Z",formattedDate:"January 29, 2018",tags:[{label:"webpack 4",permalink:"/tags/webpack-4"}],title:"Finding webpack 4 (use a Map)",readingTime:4.5,truncated:!1,prevItem:{title:"ts-loader 4 / fork-ts-checker-webpack-plugin 0.4",permalink:"/2018/02/25/ts-loader-400-fork-ts-checker-webpack"},nextItem:{title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",permalink:"/2018/01/28/webpack-4-ts-loader-fork-ts-checker"}},l=[{value:"Update: 03/02/2018",id:"update-03022018",children:[]},{value:"webpack 4",id:"webpack-4",children:[]},{value:"Plugins",id:"plugins",children:[]},{value:"Custom Hooks",id:"custom-hooks",children:[]},{value:"Loaders",id:"loaders",children:[]},{value:"I need a <code>Map</code>",id:"i-need-a-map",children:[]},{value:"Happy Porting!",id:"happy-porting",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"update-03022018"},"Update: 03/02/2018"),Object(r.b)("p",null," Tobias Koppers has written a migration guide for plugins / loaders as well - take a read ",Object(r.b)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-4-migration-guide-for-plugins-loaders-20a79b927202"},"here"),". It's very useful."),Object(r.b)("h2",{id:"webpack-4"},"webpack 4"),Object(r.b)("p",null,"webpack 4 is on the horizon. ",Object(r.b)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2"},"The beta dropped last Friday"),". So what do you, as a plugin / loader author need to do? What needs to change to make your loader / plugin webpack 4 friendly?"),Object(r.b)("p",null,"This is a guide that should inform you about the changes you might need to make. It's based on my own experiences migrating ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},Object(r.b)("inlineCode",{parentName:"a"},"ts-loader"))," and the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},Object(r.b)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),". If you'd like to see this in action then take a look at the PRs related to these. The ts-loader PR can be found ",Object(r.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/710"},"here"),". The fork-ts-checker-webpack-plugin PR can be found ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/93"},"here"),"."),Object(r.b)("h2",{id:"plugins"},"Plugins"),Object(r.b)("p",null,"One of the notable changes to webpack with v4 is the change to the plugin architecture. In terms of implications it's worth reading the comments made by ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/wsokra"},"Tobias Koppers"),Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/6244#issuecomment-357502113"},"here")," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/6064#issuecomment-349405474"},"here"),"."),Object(r.b)("p",null,"Previously, if your plugin was tapping into a compiler hook you'd write code that looked something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"this.compiler.plugin('watch-close', () => {\n   // do your thing here\n});\n")),Object(r.b)("p",null,"With webpack 4 things done changed. You'd now write something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"this.compiler.hooks.watchClose.tap('name-to-identify-your-plugin-goes-here', () => {\n   // do your thing here\n});\n")),Object(r.b)("p",null,"Hopefully that's fairly clear; we're using the new ",Object(r.b)("inlineCode",{parentName:"p"},"hooks")," property and tapping into our event of choice by ",Object(r.b)("inlineCode",{parentName:"p"},"camelCasing")," what was previously ",Object(r.b)("inlineCode",{parentName:"p"},"kebab-cased"),". So in this case ",Object(r.b)("inlineCode",{parentName:"p"},"plugin('watch-close' =&gt; hooks.watchClose.tap"),"."),Object(r.b)("p",null,"In the example above we were attaching to a sync hook. Now let's look at an async hook:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"this.compiler.plugin('watch-run', (watching, callback) => {\n   // do your thing here\n   callback();\n});\n")),Object(r.b)("p",null,"This would change to be:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"this.compiler.hooks.watchRun.tapAsync('name-to-identify-your-plugin-goes-here', (compiler, callback) => {\n   // do your thing here\n   callback();\n});\n")),Object(r.b)("p",null,"Note that rather than using ",Object(r.b)("inlineCode",{parentName:"p"},"tap")," here, we're using ",Object(r.b)("inlineCode",{parentName:"p"},"tapAsync"),". If you're more into promises there's a ",Object(r.b)("inlineCode",{parentName:"p"},"tapPromise")," you could use instead."),Object(r.b)("h2",{id:"custom-hooks"},"Custom Hooks"),Object(r.b)("p",null,"Prior to webpack 4, you could use your own custom hooks within your plugin. Usage was as simple as this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"this.compiler.applyPluginsAsync('fork-ts-checker-service-before-start', () => {\n   // do your thing here\n});\n")),Object(r.b)("p",null,"You can still use custom hooks with webpack 4, but there's a little more ceremony involved. Essentially, you need to tell webpack up front what you're planning. Not hard, I promise you."),Object(r.b)("p",null,"First of all, you'll need to add the package ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/tapable"},Object(r.b)("inlineCode",{parentName:"a"},"tapable"))," as a dependency. Then, inside your plugin you'll need to import the type of hook that you want to use; in the case of the ",Object(r.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," we used both a sync and an async hook:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const AsyncSeriesHook = require("tapable").AsyncSeriesHook;\nconst SyncHook = require("tapable").SyncHook;\n')),Object(r.b)("p",null,"Then, inside your ",Object(r.b)("inlineCode",{parentName:"p"},"apply")," method you need to register your hooks:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"if (this.compiler.hooks.forkTsCheckerServiceBeforeStart\n      || this.compiler.hooks.forkTsCheckerCancel\n      // other hooks...\n      || this.compiler.hooks.forkTsCheckerEmit) {\n      throw new Error('fork-ts-checker-webpack-plugin hooks are already in use');\n    }\n    this.compiler.hooks.forkTsCheckerServiceBeforeStart = new AsyncSeriesHook([]);\n\n    this.compiler.hooks.forkTsCheckerCancel = new SyncHook([]);\n    // other sync hooks...\n    this.compiler.hooks.forkTsCheckerDone = new SyncHook([]);\n")),Object(r.b)("p",null,"If you're interested in backwards compatibility then you should use the ",Object(r.b)("inlineCode",{parentName:"p"},"_pluginCompat")," to wire that in:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"this.compiler._pluginCompat.tap('fork-ts-checker-webpack-plugin', options => {\n      switch (options.name) {\n        case 'fork-ts-checker-service-before-start':\n          options.async = true;\n          break;\n        case 'fork-ts-checker-cancel':\n        // other sync hooks...\n        case 'fork-ts-checker-done':\n          return true;\n      }\n      return undefined;\n    });\n")),Object(r.b)("p",null,"With your registration in place, you just need to replace your calls to ",Object(r.b)("inlineCode",{parentName:"p"},"compiler.applyPlugins('sync-hook-name', ")," and ",Object(r.b)("inlineCode",{parentName:"p"},"compiler.applyPluginsAsync('async-hook-name', ")," with calls to ",Object(r.b)("inlineCode",{parentName:"p"},"compiler.hooks.syncHookName.call(")," and ",Object(r.b)("inlineCode",{parentName:"p"},"compiler.hooks.asyncHookName.callAsync("),". So to migrate our ",Object(r.b)("inlineCode",{parentName:"p"},"fork-ts-checker-service-before-start")," hook we'd write:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"this.compiler.hooks.forkTsCheckerServiceBeforeStart.callAsync(() => {\n   // do your thing here\n});\n")),Object(r.b)("h2",{id:"loaders"},"Loaders"),Object(r.b)("p",null,"Loaders are impacted by the changes to the plugin architecture. Mostly this means applying the same plugin changes as discussed above. ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," hooks into 2 plugin events:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'loader._compiler.plugin("after-compile", /* callback goes here */);\n    loader._compiler.plugin("watch-run", /* callback goes here */);\n')),Object(r.b)("p",null,"With webpack 4 these become:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'loader._compiler.hooks.afterCompile.tapAsync("ts-loader", /* callback goes here */);\n    loader._compiler.hooks.watchRun.tapAsync("ts-loader", /* callback goes here */);\n')),Object(r.b)("p",null,"Note again, we're using the string ",Object(r.b)("inlineCode",{parentName:"p"},'"ts-loader"')," to identify our loader."),Object(r.b)("h2",{id:"i-need-a-map"},"I need a ",Object(r.b)("inlineCode",{parentName:"h2"},"Map")),Object(r.b)("p",null,"When I initially ported to webpack 4, ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," simply wasn't working. In the end I tied this down to problems in our ",Object(r.b)("inlineCode",{parentName:"p"},"watch-run")," callback. There's 2 things of note here."),Object(r.b)("p",null,"Firstly, as per ",Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack/webpack/releases/tag/v4.0.0-beta.0"},"the changelog"),", the ",Object(r.b)("inlineCode",{parentName:"p"},"watch-run")," hook now has the ",Object(r.b)("inlineCode",{parentName:"p"},"Compiler")," as the first parameter. Previously this was a subproperty on the supplied ",Object(r.b)("inlineCode",{parentName:"p"},"watching")," parameter. So swapping over to use the compiler directly was necessary. Incidentally, ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," previously made use of the ",Object(r.b)("inlineCode",{parentName:"p"},"watching.startTime")," property that was supplied in webpack's 1, 2 and 3. It seems to be coping without it; so hopefully that's fine."),Object(r.b)("p",null,"Secondly, with webpack 4 it's \"ES2015 all the things!\" That is to say, with webpack now requiring a minimum of node 6, the codebase is free to start using ES2015. So if you're a consumer of ",Object(r.b)("inlineCode",{parentName:"p"},"compiler.fileTimestamps")," (and ",Object(r.b)("inlineCode",{parentName:"p"},"ts-loader")," is) then it's time to make a change to cater for the different API that a ",Object(r.b)("inlineCode",{parentName:"p"},"Map")," offers instead of indexing into an object literal with a ",Object(r.b)("inlineCode",{parentName:"p"},"string")," key."),Object(r.b)("p",null,"What this means is, code that would once have looked like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Object.keys(watching.compiler.fileTimestamps)\n .filter(filePath =>\n  watching.compiler.fileTimestamps[filePath] > lastTimes[filePath]\n )\n .forEach(filePath => {\n  lastTimes[filePath] = times[filePath];\n  // ...\n });\n")),Object(r.b)("p",null,"Now looks more like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"for (const [filePath, date] of compiler.fileTimestamps) {\n if (date > lastTimes.get(filePath)) {\n  continue;\n }\n\n lastTimes.set(filePath, date);\n // ...\n}\n")),Object(r.b)("h2",{id:"happy-porting"},"Happy Porting!"),Object(r.b)("p",null,"I hope your own port to webpack 4 goes well. Do let me know if there's anything I've missed out / any inaccuracies etc and I'll update this guide."))}s.isMDXComponent=!0}}]);
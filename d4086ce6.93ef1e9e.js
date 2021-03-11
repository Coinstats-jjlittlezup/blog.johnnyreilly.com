(window.webpackJsonp=window.webpackJsonp||[]).push([[905],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),h=a,d=p["".concat(o,".").concat(h)]||p[h]||u[h]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},970:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(1159)),o={title:"TypeScript and high CPU usage - watch don't stare!",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["cross-env","TypeScript","fork-ts-checker-webpack-plugin","watch API","Webpack"],hide_table_of_contents:!1},c={permalink:"/2019/05/23/typescript-and-high-cpu-usage-watch",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-05-23-typescript-and-high-cpu-usage-watch.md",source:"@site/blog/2019-05-23-typescript-and-high-cpu-usage-watch.md",description:"I'm one of the maintainers of the fork-ts-checker-webpack-plugin. Hi there!",date:"2019-05-23T00:00:00.000Z",tags:[{label:"cross-env",permalink:"/tags/cross-env"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"watch API",permalink:"/tags/watch-api"},{label:"Webpack",permalink:"/tags/webpack"}],title:"TypeScript and high CPU usage - watch don't stare!",readingTime:2.745,truncated:!1,prevItem:{title:"TypeScript / webpack - you down with PnP? Yarn, you know me!",permalink:"/2019/06/07/typescript-webpack-you-down-with-pnp"},nextItem:{title:"react-select with less typing lag",permalink:"/2019/04/27/react-select-with-less-typing-lag"}},l=[{value:"Why High?",id:"why-high",children:[]},{value:"&quot;there is another&quot;",id:"there-is-another",children:[]},{value:"workaround!",id:"workaround",children:[]},{value:"The Future",id:"the-future",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I'm one of the maintainers of the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin"),". Hi there!"),Object(i.b)("p",null,"Recently, various issues have been raised against create-react-app (which uses fork-ts-checker-webpack-plugin) as well as against the plugin itself. They've been related to the level of CPU usage in watch mode on idle; i.e. it's high!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/236"},"https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/236")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/facebook/create-react-app/issues/6792"},"https://github.com/facebook/create-react-app/issues/6792"))),Object(i.b)("h2",{id:"why-high"},"Why High?"),Object(i.b)("p",null,"Now, under the covers, the ",Object(i.b)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," uses the TypeScript watch API."),Object(i.b)("p",null,"The marvellous ",Object(i.b)("a",{parentName:"p",href:"https://github.com/NeKJ"},"John")," (not me - another John) did some digging and discovered the root cause came down to the way that the TypeScript watch API watches files:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"TS uses internally the ",Object(i.b)("inlineCode",{parentName:"p"},"fs.watch")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fs.watchFile")," API functions of nodejs for their watch mode. The latter function ",Object(i.b)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener"},"is even not recommended by nodejs documentation")," for performance reasons, and urges to use ",Object(i.b)("inlineCode",{parentName:"p"},"fs.watch")," instead."),Object(i.b)("p",{parentName:"blockquote"}," ",Object(i.b)("strong",{parentName:"p"},"NodeJS doc:")),Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},"Using fs.watch() is more efficient than fs.watchFile and fs.unwatchFile. fs.watch should be used instead of fs.watchFile and fs.unwatchFile when possible."))),Object(i.b)("h2",{id:"there-is-another"},'"there is another"'),Object(i.b)("p",null,"John also found that there are other file watching behaviours offered by TypeScript. What's more, the file watching behaviour is ",Object(i.b)("em",{parentName:"p"},"configurable with an environment variable"),". That's right, if an environment variable called ",Object(i.b)("inlineCode",{parentName:"p"},"TSC_WATCHFILE")," is set, it controls the file watching approach used. Big news!"),Object(i.b)("p",null,"John did some rough benchmarking of the performance of the different options that be set on his PC running linux 64 bit. Here's how it came out:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Value"),Object(i.b)("th",{parentName:"tr",align:null},"CPU usage on idle"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"TS default ",Object(i.b)("em",{parentName:"td"},"(TSC","_","WATCHFILE not set)")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"7",".","4%"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"UseFsEventsWithFallbackDynamicPolling"),Object(i.b)("td",{parentName:"tr",align:null},"0",".","2%")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"UseFsEventsOnParentDirectory"),Object(i.b)("td",{parentName:"tr",align:null},"0",".","2%")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PriorityPollingInterval"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"6",".","2%"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DynamicPriorityPolling"),Object(i.b)("td",{parentName:"tr",align:null},"0",".","5%")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"UseFsEvents"),Object(i.b)("td",{parentName:"tr",align:null},"0",".","2%")))),Object(i.b)("p",null,"As you can see, the default performs poorly. On the other hand, an option like ",Object(i.b)("inlineCode",{parentName:"p"},"UseFsEventsWithFallbackDynamicPolling")," is comparative greasy lightning."),Object(i.b)("h2",{id:"workaround"},"workaround!"),Object(i.b)("p",null,"To get this better experience into your world now, you could just set an environment variable on your machine. However, that doesn't scale; let's instead look at introducing the environment variable into your project explicitly."),Object(i.b)("p",null,"We're going to do this in a cross platform way using ",Object(i.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/kentcdodds/cross-env">cross-env</a>'),". This is a mighty useful utility by Kent C Dodds which allows you to set environment variables in a way that will work on Windows, Mac and Linux. Imagine it as the jQuery of the environment variables world :-)"),Object(i.b)("p",null,"Let's add it as a ",Object(i.b)("inlineCode",{parentName:"p"},"devDependency"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"yarn add -D cross-env\n")),Object(i.b)("p",null,"Then take a look at your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". You've probably got a ",Object(i.b)("inlineCode",{parentName:"p"},"start")," script that looks something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'"start": "webpack-dev-server --progress --color --mode development --config webpack.config.development.js",\n')),Object(i.b)("p",null,"Or if you're a create-react-app user maybe this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'"start": "react-scripts start",\n')),Object(i.b)("p",null,"Prefix your ",Object(i.b)("inlineCode",{parentName:"p"},"start")," script with ",Object(i.b)("inlineCode",{parentName:"p"},"cross-env TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling"),". This will, when run, initialise an environment variable called ",Object(i.b)("inlineCode",{parentName:"p"},"TSC_WATCHFILE")," with the value ",Object(i.b)("inlineCode",{parentName:"p"},"UseFsEventsWithFallbackDynamicPolling"),". Then it will start your development server as it did before. When TypeScript is fired up by webpack it will see this environment variable and use it to configure the file watching behaviour to one of the more performant options."),Object(i.b)("p",null,"So, in the case of a ",Object(i.b)("inlineCode",{parentName:"p"},"create-react-app")," user, your finished ",Object(i.b)("inlineCode",{parentName:"p"},"start")," script would look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'"start": "cross-env TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling react-scripts start",\n')),Object(i.b)("h2",{id:"the-future"},"The Future"),Object(i.b)("p",null,"There's a possibility that the default watch behaviour may change in TypeScript in future. It's currently under discussion, you can read more ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/31048"},"here"),"."))}b.isMDXComponent=!0}}]);
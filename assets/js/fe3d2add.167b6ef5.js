(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[93362],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12960:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o=["components"],l={title:"Understanding Webpack's DefinePlugin (and using with TypeScript)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["compile-time constants","TypeScript","defineplugin","Webpack"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2016/07/23/using-webpacks-defineplugin-with-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-07-23-using-webpacks-defineplugin-with-typescript.md",source:"@site/blog/2016-07-23-using-webpacks-defineplugin-with-typescript.md",title:"Understanding Webpack's DefinePlugin (and using with TypeScript)",description:"I've been searching for a way to describe what the DefinePlugin actually does. The docs say\\*:",date:"2016-07-23T00:00:00.000Z",formattedDate:"July 23, 2016",tags:[{label:"compile-time constants",permalink:"/tags/compile-time-constants"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"defineplugin",permalink:"/tags/defineplugin"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:2.78,truncated:!1,prevItem:{title:"The Ternary Operator <3 Destructuring",permalink:"/2016/08/19/the-ternary-operator-meets-destructuring"},nextItem:{title:"Creating an ES2015 Map from an Array in TypeScript",permalink:"/2016/06/02/create-es2015-map-from-array-in-typescript"}},c=[{value:"What Globals?",id:"what-globals",children:[]},{value:"Configuring our Globals",id:"configuring-our-globals",children:[]},{value:"TypeScript and Define",id:"typescript-and-define",children:[]}],u={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I've been searching for a way to describe what the DefinePlugin actually does. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin"},"docs")," say","*",":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Define free variables. Useful for having development builds with debug logging or adding global constants.")),(0,r.kt)("sub",null,"* Actually that should read \"used to say\". I've made some changes to the official docs.... (Surprisingly easy to do that by the way; it's just a wiki you can edit at will.)"),(0,r.kt)("p",null,"I think I would describe it thusly: the DefinePlugin allows you to create global constants which can be ",(0,r.kt)("em",{parentName:"p"},"configured at compile time"),". I find this very useful for allowing different behaviour between development builds and release builds. This post will demonstrate usage of this approach, talk about what's actually happening and how to get this working nicely with TypeScript."),(0,r.kt)("p",null,"If you just want to see this in action then take a look at this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/poorclaresarundel/"},"repo")," and keep your eyes open for usage of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/poorclaresarundel/search?utf8=%E2%9C%93&q=__VERSION__"},(0,r.kt)("inlineCode",{parentName:"a"},"__VERSION__"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/poorclaresarundel/search?utf8=%E2%9C%93&q=__IN_DEBUG__"},(0,r.kt)("inlineCode",{parentName:"a"},"__IN_DEBUG__")),"."),(0,r.kt)("h2",{id:"what-globals"},"What Globals?"),(0,r.kt)("p",null,"For our example we want to define 2 global constants; a string called ",(0,r.kt)("inlineCode",{parentName:"p"},"__VERSION__")," and a boolean called ",(0,r.kt)("inlineCode",{parentName:"p"},"__IN_DEBUG__"),'. The names are deliberately wacky to draw attention to the fact that these are not your everyday, common-or-garden variables. Them\'s "special". These constants will be initialised with different values depending on whether we are in a debug build or a production build. Usage of these constants in our code might look like this:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"if (__IN_DEBUG__) {\n        console.log(`This app is version ${ __VERSION__ }`);\n    }\n")),(0,r.kt)("p",null,"So, if ",(0,r.kt)("inlineCode",{parentName:"p"},"__IN_DEBUG__")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," this code would log out to the console the version of the app."),(0,r.kt)("h2",{id:"configuring-our-globals"},"Configuring our Globals"),(0,r.kt)("p",null,"To introduce these constants to webpack we're going to add this to our webpack configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"var webpack = require('webpack');\n\n// ...\n\n  plugins: [ \n      new webpack.DefinePlugin({\n          __IN_DEBUG__: JSON.stringify(false),\n          __VERSION__: JSON.stringify('1.0.0.' + Date.now())\n      }),\n      // ...\n  ]\n// ...\n")),(0,r.kt)("p",null,"What's going on here? Well, each key of the object literal above represents one of our global constants. When you look at the value, just imagine each outer ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify( ... )")," is not there. It's just noise. Imagine instead that you're seeing this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"__IN_DEBUG__: false,\n          __VERSION__: '1.0.0.' + Date.now()\n")),(0,r.kt)("p",null,"A little clearer, right? ",(0,r.kt)("inlineCode",{parentName:"p"},"__IN_DEBUG__")," is given the boolean value ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"__VERSION__")," is given the string value of ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0.")," plus the ticks off of ",(0,r.kt)("inlineCode",{parentName:"p"},"Date.now()"),". What's happening here is well explained in Pete Hunt's excellent ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/petehunt/webpack-howto#6-feature-flags"},"webpack howto"),': "definePlugin takes raw strings and inserts them". ',(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," facilitates this; it produces a string representation of a value that can be inlined into code. When the inlining takes place the actual output would be something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'if (false) { // Because at compile time, __IN_DEBUG__ === false\n        console.log(`This app is version ${ "1.0.0.1469268116580" }`); // And __VERSION__ === "1.0.0.1469268116580"\n    }\n')),(0,r.kt)("p",null,"And if you've got some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mishoo/UglifyJS"},"UglifyJS")," or similar in the mix then, in the example above, this would actually strip out the statement above entirely since it's clearly a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/NOP"},"NOOP"),". Yay the dead code removal! If ",(0,r.kt)("inlineCode",{parentName:"p"},"__IN_DEBUG__")," was ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," then (perhaps obviously) this statement would be left in place as it wouldn't be dead code."),(0,r.kt)("h2",{id:"typescript-and-define"},"TypeScript and Define"),(0,r.kt)("p",null,"The final piece of the puzzle is making TypeScript happy. It doesn't know anything about our global constants. So we need to tell it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"declare var __IN_DEBUG__: boolean;\ndeclare var __VERSION__: string;\n")),(0,r.kt)("p",null,"And that's it. Compile time constants are a go!"))}h.isMDXComponent=!0}}]);
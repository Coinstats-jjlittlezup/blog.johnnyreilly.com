(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1160:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(1160)),i={title:"The Mysterious Case of Webpack, Angular and jQuery",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["provideplugin","jquery","jqlite","Angular","Webpack"],hide_table_of_contents:!1},l={permalink:"/2016/05/24/the-mysterious-case-of-webpack-angular-and-jquery",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-05-24-the-mysterious-case-of-webpack-angular-and-jquery.md",source:"@site/blog/2016-05-24-the-mysterious-case-of-webpack-angular-and-jquery.md",description:"You may know that Angular ships with a cutdown version of jQuery called jQLite. It's still possible to use the full-fat jQuery; to quote the docs:",date:"2016-05-24T00:00:00.000Z",formattedDate:"May 24, 2016",tags:[{label:"provideplugin",permalink:"/tags/provideplugin"},{label:"jquery",permalink:"/tags/jquery"},{label:"jqlite",permalink:"/tags/jqlite"},{label:"Angular",permalink:"/tags/angular"},{label:"Webpack",permalink:"/tags/webpack"}],title:"The Mysterious Case of Webpack, Angular and jQuery",readingTime:1.895,truncated:!1,prevItem:{title:"Creating an ES2015 Map from an Array in TypeScript",permalink:"/2016/06/02/create-es2015-map-from-array-in-typescript"},nextItem:{title:"Inlining Angular Templates with WebPack and TypeScript",permalink:"/2016/05/13/inlining-angular-templates-with-webpack"}},u=[{value:"But wait! I&#39;m using webpack",id:"but-wait-im-using-webpack",children:[]},{value:"You need the <code>ProvidePlugin</code>",id:"you-need-the-provideplugin",children:[]}],c={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You may know that ",Object(o.b)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/function/angular.element"},"Angular ships with a cutdown version of jQuery called jQLite"),". It's still possible to use the full-fat jQuery; to quote the docs:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To use ",Object(o.b)("inlineCode",{parentName:"p"},"jQuery"),", simply ensure it is loaded before the ",Object(o.b)("inlineCode",{parentName:"p"},"angular.js")," file.")),Object(o.b)("p",null,"Now the wording rather implies that you're not using any module loader / bundler. Rather that all files are being loaded via ",Object(o.b)("inlineCode",{parentName:"p"},"script")," tags and relies on the global variables that result from that. True enough, if you take a look at the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/angular/angular.js/blob/eaa1119d4252bed08dfa42f984ef9502d0f02775/src/Angular.js#L1791"},"Angular source")," you can see how this works:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// bind to jQuery if present;\n  var jqName = jq();\n  jQuery = isUndefined(jqName) ? window.jQuery :   // use jQuery (if present)\n           !jqName             ? undefined     :   // use jqLite\n                                 window[jqName];   // use jQuery specified by `ngJq`\n")),Object(o.b)("p",null,"Amongst other things it looks for a ",Object(o.b)("inlineCode",{parentName:"p"},"jQuery")," variable which has been placed onto the ",Object(o.b)("inlineCode",{parentName:"p"},"window")," object. If it is found then jQuery is used; if it is not then it's ",Object(o.b)("inlineCode",{parentName:"p"},"jqLite")," all the way."),Object(o.b)("h2",{id:"but-wait-im-using-webpack"},"But wait! I'm using webpack"),Object(o.b)("p",null,"Me too! And one of the reasons is that we get to move away from reliance upon the global scope and towards proper modularisation. So how do we get Angular to use jQuery given the code we've seen above? Well, your first thought might be to ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," yourself some ",Object(o.b)("inlineCode",{parentName:"p"},"jQuery")," and then make sure you've got something like this in your entry file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'import "jquery"; // This\'ll fix it... Right?\nimport * as angular from "angular";\n')),Object(o.b)("p",null,"Wrong."),Object(o.b)("h2",{id:"you-need-the-provideplugin"},"You need the ",Object(o.b)("inlineCode",{parentName:"h2"},"ProvidePlugin")),Object(o.b)("p",null,"In your ",Object(o.b)("inlineCode",{parentName:"p"},"webpack.config.js")," you need to add the following entry to your plugins:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'new webpack.ProvidePlugin({\n          "window.jQuery": "jquery"\n      }),\n')),Object(o.b)("p",null,"This uses the webpack ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/webpack/docs/wiki/list-of-plugins#provideplugin">ProvidePlugin</a>')," and, at the point of webpackification (\xa9 2016 John Reilly) all references in the code to ",Object(o.b)("inlineCode",{parentName:"p"},"window.jQuery")," will be replaced with a reference to the webpack module that contains jQuery. So when you look at the bundled file you'll see that the code that checks the ",Object(o.b)("inlineCode",{parentName:"p"},"window")," object for ",Object(o.b)("inlineCode",{parentName:"p"},"jQuery")," has become this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"jQuery = isUndefined(jqName) ? __webpack_provided_window_dot_jQuery :   // use jQuery (if present)\n           !jqName             ? undefined     :   // use jqLite\n                                 window[jqName];   // use jQuery specified by `ngJq`\n")),Object(o.b)("p",null,"That's right; webpack is providing Angular with jQuery whilst still ",Object(o.b)("em",{parentName:"p"},"not")," placing a ",Object(o.b)("inlineCode",{parentName:"p"},"jQuery")," variable onto the ",Object(o.b)("inlineCode",{parentName:"p"},"window"),". Neat huh?"))}p.isMDXComponent=!0}}]);
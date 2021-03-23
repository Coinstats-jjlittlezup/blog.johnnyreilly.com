(window.webpackJsonp=window.webpackJsonp||[]).push([[441],{1186:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),b=n,g=m["".concat(l,".").concat(b)]||m[b]||s[b]||o;return r?a.a.createElement(g,i(i({ref:t},p),{},{components:r})):a.a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},636:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(4),a=r(10),o=(r(0),r(1186)),l={title:"Atom - Recovering from Corrupted Packages",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["apm","Atom","packages","corrupt"],hide_table_of_contents:!1},i={permalink:"/2016/03/17/atom-recovering-from-corrupted-packages",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",source:"@site/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",description:"Every now and then when I try and update my packages in Atom I find this glaring back at me:",date:"2016-03-17T00:00:00.000Z",formattedDate:"March 17, 2016",tags:[{label:"apm",permalink:"/tags/apm"},{label:"Atom",permalink:"/tags/atom"},{label:"packages",permalink:"/tags/packages"},{label:"corrupt",permalink:"/tags/corrupt"}],title:"Atom - Recovering from Corrupted Packages",readingTime:.715,truncated:!1,prevItem:{title:"Elvis and King Concat",permalink:"/2016/03/22/elvis-and-king-concat"},nextItem:{title:"TFS 2012 meet PowerShell, Karma and BuildNumber",permalink:"/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber"}},c=[],p={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every now and then when I try and update my packages in ",Object(o.b)("a",{parentName:"p",href:"https://atom.io/"},"Atom")," I find this glaring back at me:"),Object(o.b)("p",null," ",Object(o.b)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-t69IWPvBvfw/VupxTQuJroI/AAAAAAAAA6c/LzSeSZ8axL0j6_vkjnYdMwlNhu5H4xdCw/s640/Screenshot%2B2016-03-17%2B06.17.03.png",alt:null})),Object(o.b)("p",null,"Ug. The problem is that my atom packages have become corrupt. Quite how I couldn't say. But that's the problem. Atom, as I know from bitter experience, will not recover from this. It just sits there feeling sorry for itself. However, getting back to where you belong is simpler than you imagine:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Shutdown Atom"),Object(o.b)("li",{parentName:"ol"},"In the file system go to ",Object(o.b)("inlineCode",{parentName:"li"},"[Your name]/.atom")," (and bear in mind this is Windows; Macs / Linux may be different) ",Object(o.b)("img",{parentName:"li",src:"https://3.bp.blogspot.com/--YVoZCafXII/VupysHGAoRI/AAAAAAAAA6o/xIYfPVYAk7QGlXlxBxxQn6JZh2KlUzHNg/s640/Screenshot%2B2016-03-17%2B06.17.53.png",alt:null}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"You'll see an ",Object(o.b)("inlineCode",{parentName:"li"},".apm")," folder that contains all your packages. Delete this.")),Object(o.b)("p",null,"When you next fire up Atom these packages will automagically come back but this time they shouldn't be corrupt. Instead you should see the happiness of normality restored:"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-jRAGtqbjKNQ/VupzSKpSd4I/AAAAAAAAA6w/xSi_VdF-_5UJD5nNkLZ8Z0ep6bHPXREnw/s640/Screenshot%2B2016-03-17%2B06.23.18.png",alt:null})))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(f,l(l({ref:t},i),{},{components:n})):a.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(1161)),c={title:"Atom - Recovering from Corrupted Packages",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["apm","Atom","packages","corrupt"],hide_table_of_contents:!1},l={permalink:"/2016/03/17/atom-recovering-from-corrupted-packages",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",source:"@site/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",description:"Every now and then when I try and update my packages in Atom I find this glaring back at me:",date:"2016-03-17T00:00:00.000Z",formattedDate:"March 17, 2016",tags:[{label:"apm",permalink:"/tags/apm"},{label:"Atom",permalink:"/tags/atom"},{label:"packages",permalink:"/tags/packages"},{label:"corrupt",permalink:"/tags/corrupt"}],title:"Atom - Recovering from Corrupted Packages",readingTime:.71,truncated:!1,prevItem:{title:"Elvis and King Concat",permalink:"/2016/03/22/elvis-and-king-concat"},nextItem:{title:"TFS 2012 meet PowerShell, Karma and BuildNumber",permalink:"/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber"}},p=[],i={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every now and then when I try and update my packages in ",Object(o.b)("a",{parentName:"p",href:"https://atom.io/"},"Atom")," I find this glaring back at me:"),Object(o.b)("p",null," ",Object(o.b)("a",{parentName:"p",href:"https://4.bp.blogspot.com/-t69IWPvBvfw/VupxTQuJroI/AAAAAAAAA6c/LzSeSZ8axL0j6_vkjnYdMwlNhu5H4xdCw/s1600/Screenshot%2B2016-03-17%2B06.17.03.png"},Object(o.b)("img",{parentName:"a",src:"https://4.bp.blogspot.com/-t69IWPvBvfw/VupxTQuJroI/AAAAAAAAA6c/LzSeSZ8axL0j6_vkjnYdMwlNhu5H4xdCw/s640/Screenshot%2B2016-03-17%2B06.17.03.png",alt:"null"})),"Ug. The problem is that my atom packages have become corrupt. Quite how I couldn't say. But that's the problem. Atom, as I know from bitter experience, will not recover from this. It just sits there feeling sorry for itself. However, getting back to where you belong is simpler than you imagine:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Shutdown Atom"),Object(o.b)("li",{parentName:"ol"},"In the file system go to ",Object(o.b)("inlineCode",{parentName:"li"},"[Your name]/.atom")," (and bear in mind this is Windows; Macs / Linux may be different) ",Object(o.b)("a",{parentName:"li",href:"https://3.bp.blogspot.com/--YVoZCafXII/VupysHGAoRI/AAAAAAAAA6o/xIYfPVYAk7QGlXlxBxxQn6JZh2KlUzHNg/s1600/Screenshot%2B2016-03-17%2B06.17.53.png"},Object(o.b)("img",{parentName:"a",src:"https://3.bp.blogspot.com/--YVoZCafXII/VupysHGAoRI/AAAAAAAAA6o/xIYfPVYAk7QGlXlxBxxQn6JZh2KlUzHNg/s640/Screenshot%2B2016-03-17%2B06.17.53.png",alt:"null"}))),Object(o.b)("li",{parentName:"ol"},"You'll see an ",Object(o.b)("inlineCode",{parentName:"li"},".apm")," folder that contains all your packages. Delete this.")),Object(o.b)("p",null,"When you next fire up Atom these packages will automagically come back but this time they shouldn't be corrupt. Instead you should see the happiness of normality restored:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-jRAGtqbjKNQ/VupzSKpSd4I/AAAAAAAAA6w/xSi_VdF-_5UJD5nNkLZ8Z0ep6bHPXREnw/s1600/Screenshot%2B2016-03-17%2B06.23.18.png"},Object(o.b)("img",{parentName:"a",src:"https://3.bp.blogspot.com/-jRAGtqbjKNQ/VupzSKpSd4I/AAAAAAAAA6w/xSi_VdF-_5UJD5nNkLZ8Z0ep6bHPXREnw/s640/Screenshot%2B2016-03-17%2B06.23.18.png",alt:"null"}))))}s.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return A}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,A=u["".concat(p,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(A,c(c({ref:t},i),{},{components:n})):o.a.createElement(A,c({ref:t},i))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<a;i++)p[i]=n[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(1170)),p={title:"Atom - Recovering from Corrupted Packages",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["apm","Atom","packages","corrupt"],hide_table_of_contents:!1},c={permalink:"/2016/03/17/atom-recovering-from-corrupted-packages",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",source:"@site/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",description:"Every now and then when I try and update my packages in Atom I find this glaring back at me:",date:"2016-03-17T00:00:00.000Z",formattedDate:"March 17, 2016",tags:[{label:"apm",permalink:"/tags/apm"},{label:"Atom",permalink:"/tags/atom"},{label:"packages",permalink:"/tags/packages"},{label:"corrupt",permalink:"/tags/corrupt"}],title:"Atom - Recovering from Corrupted Packages",readingTime:.725,truncated:!1,prevItem:{title:"Elvis and King Concat",permalink:"/2016/03/22/elvis-and-king-concat"},nextItem:{title:"TFS 2012 meet PowerShell, Karma and BuildNumber",permalink:"/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber"}},l=[],i={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Every now and then when I try and update my packages in ",Object(a.b)("a",{parentName:"p",href:"https://atom.io/"},"Atom")," I find this glaring back at me:"),Object(a.b)("p",null," ",Object(a.b)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-t69IWPvBvfw/VupxTQuJroI/AAAAAAAAA6c/LzSeSZ8axL0j6_vkjnYdMwlNhu5H4xdCw/s640/Screenshot%2B2016-03-17%2B06.17.03.png",alt:null})),Object(a.b)("p",null,"](",Object(a.b)("a",{parentName:"p",href:"https://4.bp.blogspot.com/-t69IWPvBvfw/VupxTQuJroI/AAAAAAAAA6c/LzSeSZ8axL0j6_vkjnYdMwlNhu5H4xdCw/s1600/Screenshot%2B2016-03-17%2B06.17.03.png"},"https://4.bp.blogspot.com/-t69IWPvBvfw/VupxTQuJroI/AAAAAAAAA6c/LzSeSZ8axL0j6_vkjnYdMwlNhu5H4xdCw/s1600/Screenshot%2B2016-03-17%2B06.17.03.png"),")Ug. The problem is that my atom packages have become corrupt. Quite how I couldn't say. But that's the problem. Atom, as I know from bitter experience, will not recover from this. It just sits there feeling sorry for itself. However, getting back to where you belong is simpler than you imagine:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Shutdown Atom"),Object(a.b)("li",{parentName:"ol"},"In the file system go to ",Object(a.b)("inlineCode",{parentName:"li"},"[Your name]/.atom")," (and bear in mind this is Windows; Macs / Linux may be different) ",Object(a.b)("img",{parentName:"li",src:"https://3.bp.blogspot.com/--YVoZCafXII/VupysHGAoRI/AAAAAAAAA6o/xIYfPVYAk7QGlXlxBxxQn6JZh2KlUzHNg/s640/Screenshot%2B2016-03-17%2B06.17.53.png",alt:null}))),Object(a.b)("p",null,"](",Object(a.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/--YVoZCafXII/VupysHGAoRI/AAAAAAAAA6o/xIYfPVYAk7QGlXlxBxxQn6JZh2KlUzHNg/s1600/Screenshot%2B2016-03-17%2B06.17.53.png"},"https://3.bp.blogspot.com/--YVoZCafXII/VupysHGAoRI/AAAAAAAAA6o/xIYfPVYAk7QGlXlxBxxQn6JZh2KlUzHNg/s1600/Screenshot%2B2016-03-17%2B06.17.53.png"),")\n3. You'll see an ",Object(a.b)("inlineCode",{parentName:"p"},".apm")," folder that contains all your packages. Delete this."),Object(a.b)("p",null,"When you next fire up Atom these packages will automagically come back but this time they shouldn't be corrupt. Instead you should see the happiness of normality restored:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-jRAGtqbjKNQ/VupzSKpSd4I/AAAAAAAAA6w/xSi_VdF-_5UJD5nNkLZ8Z0ep6bHPXREnw/s640/Screenshot%2B2016-03-17%2B06.23.18.png",alt:null})),Object(a.b)("p",null,"](",Object(a.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-jRAGtqbjKNQ/VupzSKpSd4I/AAAAAAAAA6w/xSi_VdF-_5UJD5nNkLZ8Z0ep6bHPXREnw/s1600/Screenshot%2B2016-03-17%2B06.23.18.png"},"https://3.bp.blogspot.com/-jRAGtqbjKNQ/VupzSKpSd4I/AAAAAAAAA6w/xSi_VdF-_5UJD5nNkLZ8Z0ep6bHPXREnw/s1600/Screenshot%2B2016-03-17%2B06.23.18.png"),")"))}s.isMDXComponent=!0}}]);
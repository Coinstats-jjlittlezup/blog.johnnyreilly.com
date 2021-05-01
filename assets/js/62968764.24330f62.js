(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[83320],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),g=o,f=s["".concat(p,".").concat(g)]||s[g]||m[g]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73547:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),l={title:"Atom - Recovering from Corrupted Packages",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["apm","Atom","packages","corrupt"],hide_table_of_contents:!1},i={permalink:"/2016/03/17/atom-recovering-from-corrupted-packages",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",source:"@site/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",title:"Atom - Recovering from Corrupted Packages",description:"Every now and then when I try and update my packages in Atom I find this glaring back at me:",date:"2016-03-17T00:00:00.000Z",formattedDate:"March 17, 2016",tags:[{label:"apm",permalink:"/tags/apm"},{label:"Atom",permalink:"/tags/atom"},{label:"packages",permalink:"/tags/packages"},{label:"corrupt",permalink:"/tags/corrupt"}],readingTime:.715,truncated:!1,prevItem:{title:"Elvis and King Concat",permalink:"/2016/03/22/elvis-and-king-concat"},nextItem:{title:"TFS 2012 meet PowerShell, Karma and BuildNumber",permalink:"/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber"}},p=[],c={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every now and then when I try and update my packages in ",(0,a.kt)("a",{parentName:"p",href:"https://atom.io/"},"Atom")," I find this glaring back at me:"),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-t69IWPvBvfw/VupxTQuJroI/AAAAAAAAA6c/LzSeSZ8axL0j6_vkjnYdMwlNhu5H4xdCw/s640/Screenshot%2B2016-03-17%2B06.17.03.png",alt:null})),(0,a.kt)("p",null,"Ug. The problem is that my atom packages have become corrupt. Quite how I couldn't say. But that's the problem. Atom, as I know from bitter experience, will not recover from this. It just sits there feeling sorry for itself. However, getting back to where you belong is simpler than you imagine:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Shutdown Atom"),(0,a.kt)("li",{parentName:"ol"},"In the file system go to ",(0,a.kt)("inlineCode",{parentName:"li"},"[Your name]/.atom")," (and bear in mind this is Windows; Macs / Linux may be different) ",(0,a.kt)("img",{parentName:"li",src:"https://3.bp.blogspot.com/--YVoZCafXII/VupysHGAoRI/AAAAAAAAA6o/xIYfPVYAk7QGlXlxBxxQn6JZh2KlUzHNg/s640/Screenshot%2B2016-03-17%2B06.17.53.png",alt:null}))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"You'll see an ",(0,a.kt)("inlineCode",{parentName:"li"},".apm")," folder that contains all your packages. Delete this.")),(0,a.kt)("p",null,"When you next fire up Atom these packages will automagically come back but this time they shouldn't be corrupt. Instead you should see the happiness of normality restored:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-jRAGtqbjKNQ/VupzSKpSd4I/AAAAAAAAA6w/xSi_VdF-_5UJD5nNkLZ8Z0ep6bHPXREnw/s640/Screenshot%2B2016-03-17%2B06.23.18.png",alt:null})))}u.isMDXComponent=!0}}]);
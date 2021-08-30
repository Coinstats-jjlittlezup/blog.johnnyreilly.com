"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[40345],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21436:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Atom - Recovering from Corrupted Packages",authors:"johnnyreilly",tags:["apm","Atom","packages","corrupt"],hide_table_of_contents:!1},c=void 0,s={permalink:"/2016/03/17/atom-recovering-from-corrupted-packages",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",source:"@site/blog/2016-03-17-atom-recovering-from-corrupted-packages.md",title:"Atom - Recovering from Corrupted Packages",description:"Every now and then when I try and update my packages in Atom I find this glaring back at me:",date:"2016-03-17T00:00:00.000Z",formattedDate:"March 17, 2016",tags:[{label:"apm",permalink:"/tags/apm"},{label:"Atom",permalink:"/tags/atom"},{label:"packages",permalink:"/tags/packages"},{label:"corrupt",permalink:"/tags/corrupt"}],readingTime:.705,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Elvis and King Concat",permalink:"/2016/03/22/elvis-and-king-concat"},nextItem:{title:"TFS 2012 meet PowerShell, Karma and BuildNumber",permalink:"/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber"}},p={authorsImageUrls:[void 0]},m=[],u={toc:m};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every now and then when I try and update my packages in ",(0,a.kt)("a",{parentName:"p",href:"https://atom.io/"},"Atom")," I find this glaring back at me:"),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:n(46744).Z})),(0,a.kt)("p",null,"Ug. The problem is that my atom packages have become corrupt. Quite how I couldn't say. But that's the problem. Atom, as I know from bitter experience, will not recover from this. It just sits there feeling sorry for itself. However, getting back to where you belong is simpler than you imagine:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Shutdown Atom"),(0,a.kt)("li",{parentName:"ol"},"In the file system go to ",(0,a.kt)("inlineCode",{parentName:"li"},"[Your name]/.atom")," (and bear in mind this is Windows; Macs / Linux may be different) ",(0,a.kt)("img",{src:n(71618).Z}))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"You'll see an ",(0,a.kt)("inlineCode",{parentName:"li"},".apm")," folder that contains all your packages. Delete this.")),(0,a.kt)("p",null,"When you next fire up Atom these packages will automagically come back but this time they shouldn't be corrupt. Instead you should see the happiness of normality restored:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(47506).Z})))}f.isMDXComponent=!0},46744:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2016-03-17%2B06.17.03-cf1190e7c1c1f62fff4ffb021d649a4e.png"},71618:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2016-03-17%2B06.17.53-e04be874458ff345c0ae1d122e5074b2.png"},47506:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2016-03-17%2B06.23.18-4381d032a9a84b964261364c1bee19c5.png"}}]);
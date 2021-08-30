"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[28648],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34751:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return h},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Safari: The Mysterious Case of the Empty Download",authors:"johnnyreilly",tags:["Safari","Content-Type","Content-Length"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2020/10/19/safari-empty-download-content-type",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-10-19-safari-empty-download-content-type.md",source:"@site/blog/2020-10-19-safari-empty-download-content-type.md",title:"Safari: The Mysterious Case of the Empty Download",description:"Safari wants a Content-Type header in responses. Even if the response is Content-Length: 0. Without this, Safari can attempt to trigger an empty download. Don't argue; just go with it; some browsers are strange.",date:"2020-10-19T00:00:00.000Z",formattedDate:"October 19, 2020",tags:[{label:"Safari",permalink:"/tags/safari"},{label:"Content-Type",permalink:"/tags/content-type"},{label:"Content-Length",permalink:"/tags/content-length"}],readingTime:2.215,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Azure DevOps Client for Node.js - working around limitations",permalink:"/2020/10/31/azure-devops-node-api-missing-episodes"},nextItem:{title:"Autofac 6, integration tests and .NET generic hosting",permalink:"/2020/10/02/autofac-6-integration-tests-and-generic-hosting"}},c={authorsImageUrls:[void 0]},h=[{value:"The longer version",id:"the-longer-version",children:[]}],u={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Safari wants a ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," header in responses. Even if the response is ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Length: 0"),". Without this, Safari can attempt to trigger an empty download. Don't argue; just go with it; some browsers are strange."),(0,a.kt)("h2",{id:"the-longer-version"},"The longer version"),(0,a.kt)("p",null,"Every now and then a mystery presents itself. A puzzle which just doesn't make sense and yet stubbornly continues to exist. I happened upon one of these the other day and to say it was frustrating does it no justice at all."),(0,a.kt)("p",null,"It all came back to the default iOS and Mac browser; Safari. When our users log into our application, they are redirected to a shared login provider which, upon successful authentication, hands over a cookie containing auth details and redirects back to our application. A middleware in our app reads what it needs from the cookie and then creates a cookie of its own which is to be used throughout the session. As soon as the cookie is set, the page refreshes and the app boots up in an authenticated state."),(0,a.kt)("p",null,"That's the background. This mechanism had long been working fine with Chrome (which the majority of our users browse with), Edge, Firefox and Internet Explorer. But we started to get reports from Safari users that, once they'd supplied their credentials, they'd not be authenticated and redirected back to our application. Instead they'd be prompted to download an empty document and the redirect would not take place."),(0,a.kt)("p",null,"As a team we could not fathom why this should be the case; it just didn't make sense. There followed hours of experimentation before ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/hennie_spies"},"Hennie")," noticed something. It was at the point when the redirect back to our app from the login provider took place. Specifically the initial response that came back which contained our custom cookie and a ",(0,a.kt)("inlineCode",{parentName:"p"},"Refresh: 0")," header to trigger a refresh in the browser. There was no content in the response, save for headers. It was ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Length: 0")," all the way."),(0,a.kt)("p",null,"Hennie noticed that there was no ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," set and wondered if that was significant. It didn't seem like it would be a necessary header given there was no content. But Safari reckons not with logic. As an experiment we tried setting the response header to ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type: text/html"),". It worked! No mystery download, no failed redirect (which it turned out was actually a successful redirect which wasn't being surfaced in Safari's network request tab)."),(0,a.kt)("p",null,"It appears that always providing a ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," header in your responses is wise if only for the case of Safari. In fact, it's generally unlikely that this won't be set anyway, but it can happen as we have experienced. Hopefully we've suffered so you don't have to."))}d.isMDXComponent=!0}}]);
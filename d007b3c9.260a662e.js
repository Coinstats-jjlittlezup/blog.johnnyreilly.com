(window.webpackJsonp=window.webpackJsonp||[]).push([[877],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(i,".").concat(h)]||d[h]||u[h]||a;return n?o.a.createElement(f,s(s({ref:t},p),{},{components:n})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},942:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(1159)),i={title:"The Mysterious Case of Safari and the Empty Download",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},s={permalink:"/2020/10/19/safari-empty-download-content-type",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-10-19-safari-empty-download-content-type.md",source:"@site/blog/2020-10-19-safari-empty-download-content-type.md",description:"TL;DR 0. Without this, Safari can attempt to trigger an empty download. Don't argue; just go with it; some browsers are strange.",date:"2020-10-19T00:00:00.000Z",tags:[],title:"The Mysterious Case of Safari and the Empty Download",readingTime:2.22,truncated:!1,prevItem:{title:"Azure DevOps Node API: The missing episodes",permalink:"/2020/10/31/azure-devops-node-api-missing-episodes"},nextItem:{title:"Autofac 6, integration tests and .NET generic hosting",permalink:"/2020/10/02/autofac-6-integration-tests-and-generic-hosting"}},c=[{value:"The longer version",id:"the-longer-version",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"TL;DR:")," Safari wants a ",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type")," header in responses. Even if the response is ",Object(a.b)("inlineCode",{parentName:"p"},"Content-Length: 0"),". Without this, Safari can attempt to trigger an empty download. Don't argue; just go with it; some browsers are strange."),Object(a.b)("h2",{id:"the-longer-version"},"The longer version"),Object(a.b)("p",null,"Every now and then a mystery presents itself. A puzzle which just doesn't make sense and yet stubbornly continues to exist. I happened upon one of these the other day and to say it was frustrating does it no justice at all."),Object(a.b)("p",null,"It all came back to the default iOS and Mac browser; Safari. When our users log into our application, they are redirected to a shared login provider which, upon successful authentication, hands over a cookie containing auth details and redirects back to our application. A middleware in our app reads what it needs from the cookie and then creates a cookie of its own which is to be used throughout the session. As soon as the cookie is set, the page refreshes and the app boots up in an authenticated state."),Object(a.b)("p",null,"That's the background. This mechanism had long been working fine with Chrome (which the majority of our users browse with), Edge, Firefox and Internet Explorer. But we started to get reports from Safari users that, once they'd supplied their credentials, they'd not be authenticated and redirected back to our application. Instead they'd be prompted to download an empty document and the redirect would not take place."),Object(a.b)("p",null,"As a team we could not fathom why this should be the case; it just didn't make sense. There followed hours of experimentation before ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/hennie_spies"},"Hennie")," noticed something. It was at the point when the redirect back to our app from the login provider took place. Specifically the initial response that came back which contained our custom cookie and a ",Object(a.b)("inlineCode",{parentName:"p"},"Refresh: 0")," header to trigger a refresh in the browser. There was no content in the response, save for headers. It was ",Object(a.b)("inlineCode",{parentName:"p"},"Content-Length: 0")," all the way."),Object(a.b)("p",null,"Hennie noticed that there was no ",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type")," set and wondered if that was significant. It didn't seem like it would be a necessary header given there was no content. But Safari reckons not with logic. As an experiment we tried setting the response header to ",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type: text/html"),". It worked! No mystery download, no failed redirect (which it turned out was actually a successful redirect which wasn't being surfaced in Safari's network request tab)."),Object(a.b)("p",null,"It appears that always providing a ",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type")," header in your responses is wise if only for the case of Safari. In fact, it's generally unlikely that this won't be set anyway, but it can happen as we have experienced. Hopefully we've suffered so you don't have to."))}l.isMDXComponent=!0}}]);
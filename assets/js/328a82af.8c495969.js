(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=o,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||a;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(4),r=n(10),a=(n(0),n(1219)),i={title:"Brand New Fonting Awesomeness",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["brand icons","React","font awesome"],hide_table_of_contents:!1},s={permalink:"/2018/10/07/font-awesome-brand-icons-react",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-10-07-font-awesome-brand-icons-react.md",source:"@site/blog/2018-10-07-font-awesome-brand-icons-react.md",title:"Brand New Fonting Awesomeness",description:"Love me some Font Awesome. Absolutely wonderful. However, I came a cropper when following the instructions on using the all new Font Awesome 5 with React. The instructions for standard icons work fine. But if you want to use brand icons then this does not help you out much. There's 2 problems:",date:"2018-10-07T00:00:00.000Z",formattedDate:"October 7, 2018",tags:[{label:"brand icons",permalink:"/tags/brand-icons"},{label:"React",permalink:"/tags/react"},{label:"font awesome",permalink:"/tags/font-awesome"}],readingTime:1.45,truncated:!1,prevItem:{title:"Making a Programmer",permalink:"/2018/10/27/making-a-programmer"},nextItem:{title:"ts-loader Project References: First Blood",permalink:"/2018/09/23/ts-loader-project-references-first-blood"}},c=[{value:"Brand Me Up Buttercup",id:"brand-me-up-buttercup",children:[]},{value:"Update: It is documented!",id:"update-it-is-documented",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Love me some ",Object(a.b)("a",{parentName:"p",href:"https://fontawesome.com"},"Font Awesome"),". Absolutely wonderful. However, I came a cropper when following the instructions ",Object(a.b)("a",{parentName:"p",href:"https://fontawesome.com/how-to-use/on-the-web/using-with/react"},"on using the all new Font Awesome 5 with React"),". The instructions for standard icons work ",Object(a.b)("em",{parentName:"p"},"fine"),". But if you want to use brand icons then this does not help you out much. There's 2 problems:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Font Awesome's brand icons are not part of ",Object(a.b)("inlineCode",{parentName:"li"},'<a href="https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons">@fortawesome/free-solid-svg-icons</a>')," package"),Object(a.b)("li",{parentName:"ol"},"The method of icon usage illustrated (i.e. with the ",Object(a.b)("inlineCode",{parentName:"li"},"FontAwesomeIcon")," component) doesn't work. It doesn't render owt.")),Object(a.b)("h2",{id:"brand-me-up-buttercup"},"Brand Me Up Buttercup"),Object(a.b)("p",null,"You want brands? Well you need the ",Object(a.b)("inlineCode",{parentName:"p"},'<a href="https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons">@fortawesome/free-brands-svg-icons</a>'),". Obvs, right?"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @fortawesome/fontawesome-svg-core\nyarn add @fortawesome/free-brands-svg-icons\nyarn add @fortawesome/react-fontawesome\n")),Object(a.b)("p",null,"Now usage:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react'\nimport { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\nimport { faReact } from '@fortawesome/free-brands-svg-icons';\n\nexport const Framework = () => (\n  <div>\n    Favorite Framework: <FontAwesomeIcon icon={faReact} />\n  </div>\n)\n")),Object(a.b)("p",null,"Here we've ditched the \"library / magic-string\" approach from the documentation for one which explicitly imports and uses the required icons. I suspect this will be good for tree-shaking as well but, hand-on-heart, I haven't rigorously tested that. I'm not sure why the approach I'm using isn't documented actually. Mysterious! I've seen no ill-effects from using it but perhaps YMMV. Proceed with caution..."),Object(a.b)("h2",{id:"update-it-is-documented"},"Update: It is documented!"),Object(a.b)("p",null,"Yup - information on this approach is out there; but it's less obvious than you might hope. ",Object(a.b)("a",{parentName:"p",href:"https://github.com/FortAwesome/react-fontawesome#explicit-import"},"Read all about it here.")," For what it's worth, the explicit import approach seems to be playing second fiddle to the library / magic-string one. I'm not too sure why. For my money, explicit imports are clearer, less prone to errors and better setup for optimisation. Go figure..."),Object(a.b)("p",null,"Feel free to set me straight in the comments!"))}p.isMDXComponent=!0}}]);
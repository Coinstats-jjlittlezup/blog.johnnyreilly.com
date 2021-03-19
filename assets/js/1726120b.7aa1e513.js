(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(8),r=(n(0),n(1170)),i={title:"It's Not Dead 2: mobx-react-devtools and the undead",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["uglifyjs","mobx","dead code elimination","Webpack"],hide_table_of_contents:!1},c={permalink:"/2018/03/26/its-not-dead-2-mobx-react-devtools-and-the-undead",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-03-26-its-not-dead-2-mobx-react-devtools-and-the-undead.md",source:"@site/blog/2018-03-26-its-not-dead-2-mobx-react-devtools-and-the-undead.md",description:"I spent today digging through our webpack 4 config trying to work out why a production bundle contained code like this:",date:"2018-03-26T00:00:00.000Z",formattedDate:"March 26, 2018",tags:[{label:"uglifyjs",permalink:"/tags/uglifyjs"},{label:"mobx",permalink:"/tags/mobx"},{label:"dead code elimination",permalink:"/tags/dead-code-elimination"},{label:"Webpack",permalink:"/tags/webpack"}],title:"It's Not Dead 2: mobx-react-devtools and the undead",readingTime:2.025,truncated:!1,prevItem:{title:"Using Reflection to Identify Unwanted Dependencies",permalink:"/2018/04/28/using-reflection-to-identify-unwanted-dependencies"},nextItem:{title:"Uploading Images to Cloudinary with the Fetch API",permalink:"/2018/03/25/uploading-images-to-cloudinary-with-fetch"}},l=[{value:"Who Betrayed Me?",id:"who-betrayed-me",children:[]},{value:"Perhaps We Change the Advice?",id:"perhaps-we-change-the-advice",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I spent today digging through our webpack 4 config trying to work out why a production bundle contained code like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'if("production"!==e.env.NODE_ENV){//...\n')),Object(r.b)("p",null,"My expectation was that with webpack 4 and ",Object(r.b)("inlineCode",{parentName:"p"},"'mode': 'production'")," this meant that behind the scenes all ",Object(r.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," statements should be converted to ",Object(r.b)("inlineCode",{parentName:"p"},"'production'"),". Subsequently Uglify would automatically get its groove on with the resulting ",Object(r.b)("inlineCode",{parentName:"p"},'if("production"!=="production") ...')," and et voil\xe0!... Strip the dead code."),Object(r.b)("p",null,"It seemed that was not the case. I was seeing (regrettably) undead code. And who here actually likes the undead?"),Object(r.b)("h2",{id:"who-betrayed-me"},"Who Betrayed Me?"),Object(r.b)("p",null,"My beef was with webpack. It done did me wrong. Or... So I thought. webpack did nothing wrong. It is pure and good and unjustly complained about. It was my other love: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx"},"mobx"),". Or to be more specific: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx-react-devtools"},"mobx-react-devtools"),"."),Object(r.b)("p",null,"It turns out that the way you use ",Object(r.b)("inlineCode",{parentName:"p"},"mobx-react-devtools")," reliably makes the difference. It's the cause of the stray ",Object(r.b)("inlineCode",{parentName:"p"},'("production"!==e.env.NODE_ENV)')," statements in our bundle output. After a ",Object(r.b)("strong",{parentName:"p"},"long")," time I happened upon ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx-react-devtools/issues/66#issuecomment-365151531"},"this issue")," which contained a gem by one ",Object(r.b)("a",{parentName:"p",href:"https://github.com/gilesbutler"},"Giles Butler"),". His suggested way to reference ",Object(r.b)("inlineCode",{parentName:"p"},"mobx-react-devtools")," is (as far as I can tell) the solution!"),Object(r.b)("p",null,"On a dummy project I had the ",Object(r.b)("inlineCode",{parentName:"p"},"mobx-react-devtools")," advised code in place:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Layout } from './components/layout';\nimport DevTools from 'mobx-react-devtools';\n\nexport const App: React.SFC<{}> = _props => (\n    <div className=\"ui container\">\n        <Layout />\n        {process.env.NODE_ENV !== 'production' ? <DevTools position={{ bottom: 20, right: 20 }} /> : null}\n    </div>\n);\n")),Object(r.b)("p",null,"With this I had a build size of 311kb. Closer examination of my bundle revealed that my ",Object(r.b)("inlineCode",{parentName:"p"},"bundle.js")," was riddled with ",Object(r.b)("inlineCode",{parentName:"p"},'("production"!==e.env.NODE_ENV)')," statements. Sucks, right?"),Object(r.b)("p",null,"Then I tried this instead:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Layout } from './components/layout';\nconst { Fragment } = React;\n\nconst DevTools = process.env.NODE_ENV !== 'production' ? require('mobx-react-devtools').default : Fragment;\n\nexport const App: React.SFC<{}> = _props => (\n    <div className=\"ui container\">\n        <Layout />\n        <DevTools position={{ bottom: 20, right: 20 }} />\n    </div>\n);\n")),Object(r.b)("p",null,"With this approach I got a build size of 191kb. This was thanks to the dead code being actually stripped. That's a saving of 120kb!"),Object(r.b)("h2",{id:"perhaps-we-change-the-advice"},"Perhaps We Change the Advice?"),Object(r.b)("p",null,"There's a suggestion that the README should be changed to reflect this advice - until that happens, I wanted to share this solution. Also, I've a nagging feeling that I've missed something pertinent here; if someone knows something that I should... Tell me please!"))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[987],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||h[m]||i;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(1170)),o={title:"react-select with less typing lag",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["large lists","react-select","typing"],hide_table_of_contents:!1},s={permalink:"/2019/04/27/react-select-with-less-typing-lag",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-04-27-react-select-with-less-typing-lag.md",source:"@site/blog/2019-04-27-react-select-with-less-typing-lag.md",description:"This is going out to all those people using react-select with 1000+ items to render. To those people typing into the select and saying out loud \"it's so laggy.... This can't be... It's 2019... I mean, right?\" To the people who read this GitHub issue top to bottom 30 times and still came back unsure of what to do. This is for you.",date:"2019-04-27T00:00:00.000Z",formattedDate:"April 27, 2019",tags:[{label:"large lists",permalink:"/tags/large-lists"},{label:"react-select",permalink:"/tags/react-select"},{label:"typing",permalink:"/tags/typing"}],title:"react-select with less typing lag",readingTime:2.035,truncated:!1,prevItem:{title:"TypeScript and high CPU usage - watch don't stare!",permalink:"/2019/05/23/typescript-and-high-cpu-usage-watch"},nextItem:{title:"Template Tricks for a Dainty DOM",permalink:"/2019/03/24/template-tricks-for-dainty-dom"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is going out to all those people using ",Object(i.b)("a",{parentName:"p",href:"https://react-select.com"},Object(i.b)("inlineCode",{parentName:"a"},"react-select"))," with 1000+ items to render. To those people typing into the select and saying out loud \"it's ",Object(i.b)("em",{parentName:"p"},"so")," laggy.... This can't be... It's 2019... I mean, right?\" To the people who read this ",Object(i.b)("a",{parentName:"p",href:"https://github.com/JedWatson/react-select/issues/3128"},"GitHub issue")," top to bottom 30 times and still came back unsure of what to do. This is for you."),Object(i.b)("p",null,"I'm lying. Mostly this goes out to me. I have a select box. I need it to render 2000+ items. I want it to be lovely. I want my users to be delighted as they use it. I want them to type in and (",Object(i.b)("em",{parentName:"p"},"this is the crucial part!"),") for the control to feel responsive. Not laggy. Not like each keypress is going to Jupiter and back before it renders to the screen."),Object(i.b)("p",null,"Amongst the various gems on the GitHub issue are shared CodeSandboxes illustrating ways to integrate react-select with react-window. That's great and they do improve things. However, they don't do much to improve the laggy typing feel. There's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/JedWatson/react-select/issues/3128#issuecomment-431397942"},"brief mention")," of a props tweak you can make to react-select; this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"filterOption={createFilter({ ignoreAccents: false })}\n")),Object(i.b)("p",null,"What does this do? Well, this improves the typing lag experience ",Object(i.b)("em",{parentName:"p"},"massively"),". For why? Well, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/JedWatson/react-select/blob/292bad3298f2cafad6767f2134bd79a9c27e4073/src/filters.js#L21"},"if you look at the code")," you find that the default value is ",Object(i.b)("inlineCode",{parentName:"p"},"ignoreAccents: true"),". This default makes react-select invoke an expensive (and scary sounding) function called ",Object(i.b)("a",{parentName:"p",href:"https://github.com/JedWatson/react-select/blob/292bad3298f2cafad6767f2134bd79a9c27e4073/src/diacritics.js#L90"},Object(i.b)("inlineCode",{parentName:"a"},"stripDiacritics")),". Not once but twice. Ouchy. And this kills performance."),Object(i.b)("p",null,"But if you're okay with accents not being ignored (and ",Object(i.b)("em",{parentName:"p"},"spoiler"),": I am) then this is the option for you."),Object(i.b)("p",null,"Here's a CodeSandbox which also includes the ",Object(i.b)("inlineCode",{parentName:"p"},"ignoreAccents: false")," tweak. Enjoy!"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://codesandbox.io/s/zn70lqp31m?fontsize=14"},Object(i.b)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit johnnyreilly/react-window-with-react-select-less-laggy"}))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'import React, { Component } from "react";\nimport ReactDOM from "react-dom";\nimport Select, { createFilter } from "react-select";\nimport { FixedSizeList as List } from "react-window";\n\nimport "./styles.css";\n\nconst options = [];\nfor (let i = 0; i < 2500; i = i + 1) {\n  options.push({ value: i, label: `Option ${i}` });\n}\n\nconst height = 35;\n\nclass MenuList extends Component {\n  render() {\n    const { options, children, maxHeight, getValue } = this.props;\n    const [value] = getValue();\n    const initialOffset = options.indexOf(value) * height;\n\n    return (\n      <List\n        height={maxHeight}\n        itemCount={children.length}\n        itemSize={height}\n        initialScrollOffset={initialOffset}\n      >\n        {({ index, style }) => <div style={style}>{children[index]}</div>}\n      </List>\n    );\n  }\n}\n\nconst App = () => (\n  <Select\n    filterOption={createFilter({ ignoreAccents: false })} // this makes all the difference!\n    components={{ MenuList }}\n    options={options}\n  />\n);\n\nReactDOM.render(<App />, document.getElementById("root"));\n')))}p.isMDXComponent=!0}}]);
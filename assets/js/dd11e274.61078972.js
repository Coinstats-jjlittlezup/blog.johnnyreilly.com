(window.webpackJsonp=window.webpackJsonp||[]).push([[944],{1034:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),a=(n(0),n(1166)),i={title:"Windows Defender Step Away From npm",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["VS Code","code","Windows","failed","npm install","windows defender"],hide_table_of_contents:!1},s={permalink:"/2017/06/11/windows-defender-step-away-from-npm",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-06-11-windows-defender-step-away-from-npm.md",source:"@site/blog/2017-06-11-windows-defender-step-away-from-npm.md",description:"Update 18/06/2017",date:"2017-06-11T00:00:00.000Z",formattedDate:"June 11, 2017",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"code",permalink:"/tags/code"},{label:"Windows",permalink:"/tags/windows"},{label:"failed",permalink:"/tags/failed"},{label:"npm install",permalink:"/tags/npm-install"},{label:"windows defender",permalink:"/tags/windows-defender"}],title:"Windows Defender Step Away From npm",readingTime:1.68,truncated:!1,prevItem:{title:"Dynamic import: I've been awaiting you...",permalink:"/2017/07/02/dynamic-import-ive-been-await-ing-you"},nextItem:{title:"TypeScript: Spare the Rod, Spoil the Code",permalink:"/2017/05/20/typescript-spare-rod-spoil-code"}},l=[{value:"Update 18/06/2017",id:"update-18062017",children:[]},{value:"Update 12/07/2017",id:"update-12072017",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"update-18062017"},"Update 18/06/2017"),Object(a.b)("p",null," Whilst things did improve by fiddling with Windows Defender it wasn't a 100% fix which makes me wary. Interestingly, VS Code was always open when I did experience the issue and I haven't experienced it when it's been closed. So it may be the cause. I've opened ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/vscode/issues/28593"},"an issue for this against the VS Code repo")," ","-"," it sounds like other people may be affected as I was. Perhaps this is VS Code and not Windows Defender. Watch that space..."),Object(a.b)("h2",{id:"update-12072017"},"Update 12/07/2017"),Object(a.b)("p",null,"The issue was VS Code. The bug has now been fixed and shipped last night with ",Object(a.b)("a",{parentName:"p",href:"https://code.visualstudio.com/updates/v1_14"},"VS Code 1.14.0"),". Yay!"),Object(a.b)("hr",null),Object(a.b)("p",null,"I've recently experienced many of my ",Object(a.b)("inlineCode",{parentName:"p"},"npm install"),"s failing for no consistent reason. The error message would generally be something along the lines of:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm ERR! Error: EPERM: operation not permitted, rename 'C:\\dev\\training\\drrug\\node_modules\\.staging\\@exponent\\ngrok-fc327f2a' -> 'C:\\dev\\training\\drrug\\node_modules\\@exponent\\ngrok'\n")),Object(a.b)("p",null,"I spent a good deal of time changing the versions of node and npm I was running; all seemingly to no avail. Regular flakiness which I ascribed to node / npm. I was starting to give up when I read of ",Object(a.b)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app/issues/191#issuecomment-304073970"},"other people experiencing similar issues"),". Encouragingly ",Object(a.b)("a",{parentName:"p",href:"https://github.com/fmeira"},"Fernando Meira")," suggested a solution:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"I got the same problem just doing an npm install. Run with antivirus disabled (if you use Windows Defender, turn off Real-Time protection and Cloud-based protection). That worked for me!")),Object(a.b)("p",null,"I didn't really expect this to work - Windows Defender has been running in the background of my Windows 10 laptop since I've had it. There's been no problems with npm installs up until a week or so ago. But given the experience I and others have had I thought I should put it out there: it looks like Windows Defender has it in for npm. Go figure."),Object(a.b)("p",null,"Alas Windows Defender doesn't stay dead for long; it's like a zombie that rises from the grave no matter how many times you kill it. So you might want to try configuring it to ignore node.exe:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://2.bp.blogspot.com/-Pfq0TRPVLrk/WT1O_ieEo3I/AAAAAAAAFSI/pOSO45HlLcwGFISihZ-t8D8aETjjn64_wCPcB/s1600/Screenshot%2B2017-06-11%2B15.05.47.png"},"![null]","(<https://2.bp.blogspot.com/-Pfq0TRPVLrk/WT1O_ieEo3I/AAAAAAAAFSI/pOSO45HlLcwGFISihZ-t8D8aETjjn64_wCPcB/s640/Screenshot%2B2017-06-11%2B15.05.47.png> =446x640)"),"Or switching to Linux..."))}d.isMDXComponent=!0},1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||a;return n?o.a.createElement(b,s(s({ref:t},p),{},{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
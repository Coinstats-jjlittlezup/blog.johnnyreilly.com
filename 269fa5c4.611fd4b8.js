(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{199:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var o=t(3),r=t(7),a=(t(0),t(958)),i={title:"Windows Defender Step Away From npm",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["VS Code","code","Windows","failed","npm install","windows defender"],hide_table_of_contents:!1},l={permalink:"/blog.johnnyreilly.com/2017/06/11/windows-defender-step-away-from-npm",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-06-11-windows-defender-step-away-from-npm.md",source:"@site/blog/2017-06-11-windows-defender-step-away-from-npm.md",description:"Update 18/06/2017",date:"2017-06-11T00:00:00.000Z",tags:[{label:"VS Code",permalink:"/blog.johnnyreilly.com/tags/vs-code"},{label:"code",permalink:"/blog.johnnyreilly.com/tags/code"},{label:"Windows",permalink:"/blog.johnnyreilly.com/tags/windows"},{label:"failed",permalink:"/blog.johnnyreilly.com/tags/failed"},{label:"npm install",permalink:"/blog.johnnyreilly.com/tags/npm-install"},{label:"windows defender",permalink:"/blog.johnnyreilly.com/tags/windows-defender"}],title:"Windows Defender Step Away From npm",readingTime:1.675,truncated:!1,prevItem:{title:"Dynamic import: I've been awaiting you...",permalink:"/blog.johnnyreilly.com/2017/07/02/dynamic-import-ive-been-await-ing-you"},nextItem:{title:"TypeScript: Spare the Rod, Spoil the Code",permalink:"/blog.johnnyreilly.com/2017/05/20/typescript-spare-rod-spoil-code"}},s=[{value:"Update 18/06/2017",id:"update-18062017",children:[]},{value:"Update 12/07/2017",id:"update-12072017",children:[]}],p={toc:s};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"update-18062017"},"Update 18/06/2017"),Object(a.b)("p",null," Whilst things did improve by fiddling with Windows Defender it wasn't a 100% fix which makes me wary. Interestingly, VS Code was always open when I did experience the issue and I haven't experienced it when it's been closed. So it may be the cause. I've opened ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Microsoft/vscode/issues/28593"},"an issue for this against the VS Code repo")," ","-"," it sounds like other people may be affected as I was. Perhaps this is VS Code and not Windows Defender. Watch that space..."),Object(a.b)("h2",{id:"update-12072017"},"Update 12/07/2017"),Object(a.b)("p",null,"The issue was VS Code. The bug has now been fixed and shipped last night with ",Object(a.b)("a",{parentName:"p",href:"https://code.visualstudio.com/updates/v1_14"},"VS Code 1.14.0"),". Yay!"),Object(a.b)("hr",null),Object(a.b)("p",null,"I've recently experienced many of my ",Object(a.b)("inlineCode",{parentName:"p"},"npm install"),"s failing for no consistent reason. The error message would generally be something along the lines of:"),Object(a.b)("pre",null,"npm ERR! Error: EPERM: operation not permitted, rename 'C:\\dev\\training\\drrug\\node_modules\\.staging\\@exponent\\ngrok-fc327f2a' -> 'C:\\dev\\training\\drrug\\node_modules\\@exponent\\ngrok'"),Object(a.b)("p",null,"I spent a good deal of time changing the versions of node and npm I was running; all seemingly to no avail. Regular flakiness which I ascribed to node / npm. I was starting to give up when I read of ",Object(a.b)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app/issues/191#issuecomment-304073970"},"other people experiencing similar issues"),". Encouragingly ",Object(a.b)("a",{parentName:"p",href:"https://github.com/fmeira"},"Fernando Meira")," suggested a solution:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"I got the same problem just doing an npm install. Run with antivirus disabled (if you use Windows Defender, turn off Real-Time protection and Cloud-based protection). That worked for me!")),Object(a.b)("p",null,"I didn't really expect this to work - Windows Defender has been running in the background of my Windows 10 laptop since I've had it. There's been no problems with npm installs up until a week or so ago. But given the experience I and others have had I thought I should put it out there: it looks like Windows Defender has it in for npm. Go figure."),Object(a.b)("p",null,"Alas Windows Defender doesn't stay dead for long; it's like a zombie that rises from the grave no matter how many times you kill it. So you might want to try configuring it to ignore node.exe:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://2.bp.blogspot.com/-Pfq0TRPVLrk/WT1O_ieEo3I/AAAAAAAAFSI/pOSO45HlLcwGFISihZ-t8D8aETjjn64_wCPcB/s1600/Screenshot%2B2017-06-11%2B15.05.47.png"},"![null]","(<https://2.bp.blogspot.com/-Pfq0TRPVLrk/WT1O_ieEo3I/AAAAAAAAFSI/pOSO45HlLcwGFISihZ-t8D8aETjjn64_wCPcB/s640/Screenshot%2B2017-06-11%2B15.05.47.png> =446x640)"),"Or switching to Linux..."))}c.isMDXComponent=!0},958:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),c=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?r.a.createElement(b,l(l({ref:n},p),{},{components:t})):r.a.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
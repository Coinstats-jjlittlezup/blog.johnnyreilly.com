(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(966)),i={title:"Compromising: A Guide for Developers",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["compromise","empathy","developers","code style","teams"],hide_table_of_contents:!1},s={permalink:"/2018/05/13/compromising-guide-for-developers",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-05-13-compromising-guide-for-developers.md",source:"@site/blog/2018-05-13-compromising-guide-for-developers.md",description:"It is a truth universally acknowledged, that a single developer, will not be short of an opinion. Opinions on tabs vs spaces. Upon OOP vs FP. Upon classes vs functions. Just opinions, opinions, opinions. Opinions that are felt with all the sincerity of a Witchfinder General. And, alas, not always the same level of empathy.",date:"2018-05-13T00:00:00.000Z",tags:[{label:"compromise",permalink:"/tags/compromise"},{label:"empathy",permalink:"/tags/empathy"},{label:"developers",permalink:"/tags/developers"},{label:"code style",permalink:"/tags/code-style"},{label:"teams",permalink:"/tags/teams"}],title:"Compromising: A Guide for Developers",readingTime:2.925,truncated:!1,prevItem:{title:"VSTS... YAML up!",permalink:"/2018/06/16/vsts-yaml-up"},nextItem:{title:"Using Reflection to Identify Unwanted Dependencies",permalink:"/2018/04/28/using-reflection-to-identify-unwanted-dependencies"}},l=[{value:"On Compromise",id:"on-compromise",children:[]},{value:"Weighting Opinion",id:"weighting-opinion",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It is a truth universally acknowledged, that a single developer, will not be short of an opinion. Opinions on tabs vs spaces. Upon OOP vs FP. Upon ",Object(r.b)("inlineCode",{parentName:"p"},"class"),"es vs ",Object(r.b)("inlineCode",{parentName:"p"},"function"),"s. Just opinions, opinions, opinions. Opinions that are felt with all the sincerity of a Witchfinder General. And, alas, not always the same level of empathy."),Object(r.b)("p",null," Given the wealth of strongly felt desires, it's kind of amazing that developers ever manage to work together. It's rare to find a fellow dev that agrees entirely with your predilections. So how do people ever get past the \"you don't use semi-colons; what's wrong with you\"? Well, not easily to be honest. It involves compromise."),Object(r.b)("h2",{id:"on-compromise"},"On Compromise"),Object(r.b)("p",null,"We've all been in the position where we realise that there's something we don't like in a codebase. The ordering of members in a ",Object(r.b)("inlineCode",{parentName:"p"},"class"),", naming conventions, a lack of tests... Something."),Object(r.b)("p",null,"Then comes the moment of trepidation. You suggest a change. You suggest difference. It's time to find out if you're working with psychopaths. It's not untypical to find that you just have to go with the flow."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'"You\'ve been using 3 spaces?"'),Object(r.b)("li",{parentName:"ul"},'"Yes we use 3 spaces."'),Object(r.b)("li",{parentName:"ul"},'"Okay... So we\'ll be using 3 spaces..." ',"[backs away carefully]")),Object(r.b)("p",null,"I've been in this position so many times I've learned to adapt. It helps that I'm a malleable sort anyway. But what if there were another way?"),Object(r.b)("h2",{id:"weighting-opinion"},"Weighting Opinion"),Object(r.b)("p",null,"Sometimes your opinion is... Well.... Just an opinion. Other opinions are legitimate. At least in theory. If you can acknowledge that, you already have a level of self knowledge not gifted to all in the dev community. If you're able to get that far I feel there's something you might want to consider."),Object(r.b)("p",null,"Let me frame this up: there's a choice to be made around an approach that could be used in a codebase. There are 2 camps in the team; 1 camp advocating for 1 approach. The other for a different approach. Either one is functionally legitimate. They work. It's just a matter of preference of choice. How do you choose now? Let's look at a technique for splitting the difference."),Object(r.b)("p",null,"Voting helps. But let's say 50% of the team wants 1 approach and 50% wants the other. What then? Or, to take a more interesting idea, what say 25% want 1 approach and 75% want the other? If it's just 1 person, 1 vote then the 75% wins and that's it."),Object(r.b)("p",null,"But before we all move on, let's consider another factor. How much do people care? What if the 25% are really, really invested in the choice they're advocating for and the 75% just have a mild preference? From that point forwards the 25% are likely going to be less happy. Maybe they'll even burn inside. They're certainly going to be less productive."),Object(r.b)("p",null,'It\'s because of situations like this that weighting votes becomes useful. Out of 5, how much do you care? If one person cares "5 out of 5" and the other three are "1 out of 5".... Well go with the 25% It matters to them and that it matters to them should matter to you.'),Object(r.b)("p",null,"I'll contend that rolling like this makes for more content, happier and more productive teams. Making strength of feeling a factor in choices reduces friction and increases the peace."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-mg_-2oAjkxE/WvfwNZe3bPI/AAAAAAAAJ7c/CrsL9e0J2pg_t0H3G4aevVAL-c0W0us8wCPcBGAYYCw/s1600/Bestival_2008_Increase_the_Peace_banner.jpg"},"![null]","(<https://3.bp.blogspot.com/-mg_-2oAjkxE/WvfwNZe3bPI/AAAAAAAAJ7c/CrsL9e0J2pg_t0H3G4aevVAL-c0W0us8wCPcBGAYYCw/s640/Bestival_2008_Increase_the_Peace_banner.jpg> =640x427)"),"I've only recently discovered this technique and I can't claim credit for it. I learned it from the awesome ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/foldr"},"Jamie McCrindle"),". I commend to you! Be happier!"))}p.isMDXComponent=!0},966:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||r;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
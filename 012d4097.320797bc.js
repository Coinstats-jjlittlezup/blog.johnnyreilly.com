(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(966)),r={title:"GitHub Actions and Yarn",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["docker","yarn","GitHub Actions"],hide_table_of_contents:!1},c={permalink:"/2019/01/05/github-actions-and-yarn",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-01-05-github-actions-and-yarn.md",source:"@site/blog/2019-01-05-github-actions-and-yarn.md",description:"I'd been meaning to automate the npm publishing of ts-loader for the longest time. I had attempted to use Travis to do this in the same way as fork-ts-checker-webpack-plugin. Alas using secure environment variables in Travis has unfortunate implications for ts-loader's test pack.",date:"2019-01-05T00:00:00.000Z",tags:[{label:"docker",permalink:"/tags/docker"},{label:"yarn",permalink:"/tags/yarn"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],title:"GitHub Actions and Yarn",readingTime:4.005,truncated:!1,prevItem:{title:"TypeScript and webpack: Watch It",permalink:"/2019/01/13/typescript-and-webpack-watch-it"},nextItem:{title:"You Might Not Need thread-loader",permalink:"/2018/12/22/you-might-not-need-thread-loader"}},l=[{value:"Automate What?",id:"automate-what",children:[]},{value:"GitHub Action for <code>npm</code>",id:"github-action-for-npm",children:[]},{value:"GitHub Action for <code>npm</code> for <code>yarn</code>",id:"github-action-for-npm-for-yarn",children:[]},{value:"Going With The Workflow",id:"going-with-the-workflow",children:[]},{value:"You Don&#39;t Actually Need the npm GitHub Action",id:"you-dont-actually-need-the-npm-github-action",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I'd been meaning to automate the npm publishing of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},Object(o.b)("inlineCode",{parentName:"a"},"ts-loader"))," for the longest time. I had attempted to use Travis to do this in the same way as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},Object(o.b)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),". Alas using secure environment variables in Travis has unfortunate implications for ts-loader's test pack."),Object(o.b)("p",null,"Be not afeard. I've heard there's a new shiny thing from GitHub that I could use instead... It's a sign; I must use it!"),Object(o.b)("p",null,"GitHub Actions are still in beta. Technically Actions are ",Object(o.b)("a",{parentName:"p",href:"https://developer.github.com/actions/creating-github-actions/"},"code run in Docker containers")," in response to events. This didn't mean a great deal to me until I started thinking about what I wanted to do with ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader"),"'s publishing flow."),Object(o.b)("h2",{id:"automate-what"},"Automate What?"),Object(o.b)("p",null,"Each time I publish a release of ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," I execute the following node commands by hand:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"yarn install")," ","-"," to install ",Object(o.b)("inlineCode",{parentName:"li"},"ts-loader"),"'s dependencies"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"yarn build")," ","-"," to build ",Object(o.b)("inlineCode",{parentName:"li"},"ts-loader")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"yarn test")," ","-"," to run ",Object(o.b)("inlineCode",{parentName:"li"},"ts-loader"),"'s test packs"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"npm publish")," ","-"," to publish the release of ",Object(o.b)("inlineCode",{parentName:"li"},"ts-loader")," to npm")),Object(o.b)("p",null,"Having read up on GitHub Actions it seemed like they were born to handle this sort of task."),Object(o.b)("h2",{id:"github-action-for-npm"},"GitHub Action for ",Object(o.b)("inlineCode",{parentName:"h2"},"npm")),Object(o.b)("p",null,"I quickly discovered that someone out there ",Object(o.b)("s",null,"loves me")),Object(o.b)("p",null," had ",Object(o.b)("a",{parentName:"p",href:"https://github.com/actions/npm"},"already written a GitHub Action for ",Object(o.b)("inlineCode",{parentName:"a"},"npm")),"."),Object(o.b)("p",null,"The example in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/actions/npm/blob/master/README.md"},Object(o.b)("inlineCode",{parentName:"a"},"README.md"))," could be easily tweaked to meet my needs with one caveat: I had to use ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," in place of ",Object(o.b)("inlineCode",{parentName:"p"},"yarn"),". I didn't want to switch from ",Object(o.b)("inlineCode",{parentName:"p"},"yarn"),". What to do?"),Object(o.b)("p",null,"Well, remember when I said actions are code run in Docker containers? Another way to phrase that is to say: GitHub Actions are Docker images. Let's look under the covers of the ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," GitHub Action. As we peer inside the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/actions/npm/blob/e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437/Dockerfile#L1"},Object(o.b)("inlineCode",{parentName:"a"},"Dockerfile"))," what do we find?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FROM node:10-slim\n")),Object(o.b)("p",null,"Hmmmm.... Interesting. The base image of the ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," GitHub Action is ",Object(o.b)("inlineCode",{parentName:"p"},"node:10-slim"),". Looking it up, it seems the ",Object(o.b)("inlineCode",{parentName:"p"},"-slim")," Docker images come with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/nodejs/docker-node/blob/master/Dockerfile-slim.template"},Object(o.b)("inlineCode",{parentName:"a"},"yarn")," included"),". Which means we should be able to use ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," inside the ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," GitHub Action. Nice!"),Object(o.b)("h2",{id:"github-action-for-npm-for-yarn"},"GitHub Action for ",Object(o.b)("inlineCode",{parentName:"h2"},"npm")," for ",Object(o.b)("inlineCode",{parentName:"h2"},"yarn")),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," from the GitHub Action for ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," is delightfully simple. Here's what running ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," looks like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# install with npm\naction "install" {\n  uses = "actions/npm@1.0.0"\n  args = "install"\n}\n')),Object(o.b)("p",null,"Pivoting to use ",Object(o.b)("inlineCode",{parentName:"p"},"yarn install")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," is as simple as:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# install with yarn\naction "install" {\n  uses = "actions/npm@1.0.0"\n  runs = "yarn"\n  args = "install"\n}\n')),Object(o.b)("p",null,"You can see we've introduced the ",Object(o.b)("inlineCode",{parentName:"p"},'runs = "yarn"')," and after that the ",Object(o.b)("inlineCode",{parentName:"p"},"args")," are whatever you need them to be."),Object(o.b)("h2",{id:"going-with-the-workflow"},"Going With The Workflow"),Object(o.b)("p",null,"A GitHub Workflow that implements the steps I need would look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'workflow "build, test and publish on release" {\n  on = "push"\n  resolves = "publish"\n}\n\n# install with yarn\naction "install" {\n  uses = "actions/npm@1.0.0"\n  runs = "yarn"\n  args = "install"\n}\n\n# build with yarn\naction "build" {\n  needs = "install"\n  uses = "actions/npm@1.0.0"\n  runs = "yarn"\n  args = "build"\n}\n\n# test with yarn\naction "test" {\n  needs = "build"\n  uses = "actions/npm@1.0.0"\n  runs = "yarn"\n  args = "test"\n}\n\n# filter for a new tag\naction "check for new tag" {\n  needs = "Test"\n  uses = "actions/bin/filter@master"\n  args = "tag"\n}\n\n# publish with npm\naction "publish" {\n  needs = "check for new tag"\n  uses = "actions/npm@1.0.0"\n  args = "publish"\n  secrets = ["NPM_AUTH_TOKEN"]\n}\n')),Object(o.b)("p",null,"As you can see, this is a direct automation of steps 1-4 I listed earlier. Since all these actions are executed in the same container, we can skip from ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," to ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," with gay abandon."),Object(o.b)("p",null,"What's absolutely amazing is, when I got access to GitHub Actions ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/blob/master/.github/main.workflow"},"my hand crafted workflow")," looked like it should work first time! I know, right? Don't you love it when that happens? ",Object(o.b)("a",{parentName:"p",href:"https://github.com/actions/bin/issues/13"},"Alas there's presently a problem with filters in GitHub Actions"),". But that's by the by, if you're just looking to use a GitHub Action with yarn instead of npm then you are home free."),Object(o.b)("h2",{id:"you-dont-actually-need-the-npm-github-action"},"You Don't Actually Need the npm GitHub Action"),Object(o.b)("p",null,"You heard me right. Docker containers be Docker containers. You don't actually need to use this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'uses = "actions/npm@1.0.0"\n')),Object(o.b)("p",null,"You can use ",Object(o.b)("em",{parentName:"p"},"any")," Docker container which has node / npm installed! So if you'd like to use say node 11 instead you could just do this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'uses = "docker://node:11"\n')),Object(o.b)("p",null,"Which would use the node 11 image on ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/_/node"},"docker hub"),"."),Object(o.b)("p",null,"Which is pretty cool. You know what's even more incredible? Inside a workflow you can switch ",Object(o.b)("inlineCode",{parentName:"p"},"uses")," mid-workflow and keep the output. That's right; you can have a work flow with say three actions running ",Object(o.b)("inlineCode",{parentName:"p"},'uses = "docker://node:11"')," and then a fourth running ",Object(o.b)("inlineCode",{parentName:"p"},'uses = "actions/npm@1.0.0"'),". That's ",Object(o.b)("em",{parentName:"p"},"so")," flexible and powerful!"),Object(o.b)("p",null,"Thanks to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mcolyer"},"Matt Colyer")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/LandonSchropp"},"Landon Schropp")," for ",Object(o.b)("a",{parentName:"p",href:"https://github.com/actions/npm/issues/9"},"schooling me on the intricicies of GitHub Actions"),". Much \u2764"))}b.isMDXComponent=!0},966:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[17062],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41898:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],s={title:"VSTS... YAML up!",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["yaml","vsts","ci","travis","AppVeyor"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2018/06/16/vsts-yaml-up",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-06-16-vsts-yaml-up.md",source:"@site/blog/2018-06-16-vsts-yaml-up.md",title:"VSTS... YAML up!",description:"For the longest time I've been using the likes of Travis and AppVeyor to build open source projects that I work on. They rock. I've also recently been dipping my toes back in the water of Visual Studio Team Services. VSTS offers a whole stack of stuff, but my own area of interest has been the Continuous Integration / Continuous Deployment offering.",date:"2018-06-16T00:00:00.000Z",formattedDate:"June 16, 2018",tags:[{label:"yaml",permalink:"/tags/yaml"},{label:"vsts",permalink:"/tags/vsts"},{label:"ci",permalink:"/tags/ci"},{label:"travis",permalink:"/tags/travis"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],readingTime:4.36,truncated:!1,prevItem:{title:"VSTS and EF Core Migrations",permalink:"/2018/06/24/vsts-and-ef-core-migrations"},nextItem:{title:"Compromising: A Guide for Developers",permalink:"/2018/05/13/compromising-guide-for-developers"}},u=[{value:"The New Dawn",id:"the-new-dawn",children:[]},{value:"It Begins!",id:"it-begins",children:[]},{value:"A Bump in the Road",id:"a-bump-in-the-road",children:[]}],c={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For the longest time I've been using the likes of ",(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org/"},"Travis")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.appveyor.com/"},"AppVeyor")," to build open source projects that I work on. They rock. I've also recently been dipping my toes back in the water of ",(0,i.kt)("a",{parentName:"p",href:"https://www.visualstudio.com/team-services/"},"Visual Studio Team Services"),". VSTS offers a whole stack of stuff, but my own area of interest has been the Continuous Integration / Continuous Deployment offering."),(0,i.kt)("p",null," Historically I have been underwhelmed by the CI proposition of Team Foundation Server / VSTS. It was difficult to debug, difficult to configure, difficult to understand. If it worked... Great! If it didn't (and it often didn't), you were toast. But things done changed! I don't know when it happened, but VSTS is now super configurable. You add tasks / configure them, build and you're done! It's really nice."),(0,i.kt)("p",null,"However, there's been something I've been missing from Travis, AppVeyor et al. Keeping my build script with my code. Travis has ",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml"),", AppVeyor has ",(0,i.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),". VSTS, what's up?"),(0,i.kt)("h2",{id:"the-new-dawn"},"The New Dawn"),(0,i.kt)("p",null,"Up until now, really not much. It just wasn't possible. Until it was:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you prefer a build definition in YAML then we\u2019re currently hard at work on that. You can enable it as a preview feature: ",(0,i.kt)("a",{parentName:"p",href:"https://t.co/hau9Sv8brf"},"https://t.co/hau9Sv8brf")),(0,i.kt)("p",{parentName:"blockquote"},"\u2014 Martin Woodward (@martinwoodward) ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/martinwoodward/status/970250739510534144?ref_src=twsrc%5Etfw"},"March 4, 2018"))),(0,i.kt)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,i.kt)("p",null,"When I started testing it out I found things to like and some things I didn't understand. Crucially, my CI now builds based upon ",(0,i.kt)("inlineCode",{parentName:"p"},".vsts-ci.yml"),". YAML baby!"),(0,i.kt)("h2",{id:"it-begins"},"It Begins!"),(0,i.kt)("p",null,'You can get to "Hello World" by looking at ',(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/vsts/pipelines/build/yaml?view=vsts"},"the docs here")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/vsts-agent/blob/master/docs/preview/yamlgettingstarted.md"},"the examples here"),". But what you really want is your existing build, configured in the UI, exported to YAML. That doesn't seem to quite exist, but there's something that gets you part way. Take a look:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9063).Z})),(0,i.kt)("p",null,'If you notice, in the top right of the screen, each task now allows you click on a new "View YAML" button. It\'s kinda ',(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ronseal"},"Ronseal"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(35615).Z})),(0,i.kt)("p",null,"Using this hotness you can build yourself a ",(0,i.kt)("inlineCode",{parentName:"p"},".vsts-ci.yml")," file task by task."),(0,i.kt)("h2",{id:"a-bump-in-the-road"},"A Bump in the Road"),(0,i.kt)("p",null,"If you look closely at the message above you'll see there's a message about an undefined variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"#Your build definition references an undefined variable named \u2018Parameters.RestoreBuildProjects\u2019. Create or edit the build definition for this YAML file, define the variable on the Variables tab. See https://go.microsoft.com/fwlink/?linkid=865972\nsteps:\n- task: DotNetCoreCLI@2\n  displayName: Restore\n  inputs:\n    command: restore\n    projects: '$(Parameters.RestoreBuildProjects)'\n")),(0,i.kt)("p",null,"Try as I might, I couldn't locate ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameters.RestoreBuildProjects"),". So no working CI build for me. Then I remembered ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zerdos"},"Zoltan Erdos"),". He's hard to forget. Or rather, I remembered an idea of his which I will summarise thusly: \"Have a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in the root of your repo, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),' for individual tasks and you have a cross platform task runner".'),(0,i.kt)("p",null,"This is a powerful idea and one I decided to put to work. My project is React and TypeScript on the front end, and ASP.Net Core on the back. I wanted a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in the root of the repo which I could install dependencies, build, test and publish my whole app. I could call into that from my ",(0,i.kt)("inlineCode",{parentName:"p"},".vsts-ci.yml")," file. Something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-amazing-project",\n  "version": "1.0.0",\n  "author": "John Reilly <johnny_reilly@hotmail.com>",\n  "license": "MIT",\n  "private": true,\n  "scripts": {\n    "preinstall": "yarn run install:clientapp && yarn run install:web",\n    "install:clientapp": "cd MyAmazingProject.ClientApp && yarn install",\n    "install:web": "dotnet restore",\n    "prebuild": "yarn install",\n    "build": "yarn run build:clientapp && yarn run build:web",\n    "build:clientapp": "cd MyAmazingProject.ClientApp && yarn run build",\n    "build:web": "dotnet build --configuration Release",\n    "postbuild": "yarn test",\n    "test": "yarn run test:clientapp && yarn run test:web",\n    "test:clientapp": "cd MyAmazingProject.ClientApp && yarn test",\n    "test:web": "cd MyAmazingProject.Web.Tests && dotnet test",\n    "publish:web": "cd MyAmazingProject.Web && dotnet publish MyAmazingProject.Web.csproj --configuration Release"\n  }\n}\n</johnny_reilly@hotmail.com>\n')),(0,i.kt)("p",null,'It doesn\'t matter if I have "an undefined variable named \u2018Parameters.RestoreBuildProjects\u2019". I now have no need to use all the individual tasks in a build. I can convert them into a couple of scripts in my ',(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". So here's where I've ended up for now. I've a ",(0,i.kt)("inlineCode",{parentName:"p"},".vsts-ci.yml")," file which looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"queue: Hosted VS2017\n\nsteps:\n- task: geeklearningio.gl-vsts-tasks-yarn.yarn-installer-task.YarnInstaller@2\n  displayName: install yarn itself\n  inputs:\n    checkLatest: true\n- task: geeklearningio.gl-vsts-tasks-yarn.yarn-task.Yarn@2\n  displayName: yarn build and test\n  inputs:\n    Arguments: build\n- task: geeklearningio.gl-vsts-tasks-yarn.yarn-task.Yarn@2\n  displayName: yarn publish:web\n  inputs:\n    Arguments: 'run publish:web --output $(build.artifactstagingdirectory)/MyAmazingProject'\n- task: PublishBuildArtifacts@1\n  displayName: publish build artifact\n  inputs:\n    PathtoPublish: '$(build.artifactstagingdirectory)'\n")),(0,i.kt)("p",null,"This file does the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Installs yarn. (By the way VSTS, what's with not having yarn installed by default? I'll say this for the avoidance of doubt: in the npm cli space: yarn has won.)"),(0,i.kt)("li",{parentName:"ol"},"Install our dependencies, build the front end and back end, run all the tests. Effectively ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn build"),"."),(0,i.kt)("li",{parentName:"ol"},"Publish our web app to a directory. Effectively ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn run publish:web"),". This is only separate because we want to pass in the output directory and so it's just easier for it to be a separate step."),(0,i.kt)("li",{parentName:"ol"},"Publish the build artefact to TFS. (This will go on to be picked up by the continuous deployment mechanism and published out to Azure.)")),(0,i.kt)("p",null,"I much prefer this to what I had before. I feel there's much more that can be done here as well. I'm looking forward to the continuous deployment piece becoming scriptable too."),(0,i.kt)("p",null,"Thanks to Zoltan and props to the TFVS team!"))}d.isMDXComponent=!0},9063:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Screenshot%2B2018-06-16%2B18.49.08-942be861ee2b6ad0f39cdb2e564ab758.png"},35615:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Screenshot%2B2018-06-16%2B19.04.00-5a65a63e4905e6130043131a4386e129.png"}}]);
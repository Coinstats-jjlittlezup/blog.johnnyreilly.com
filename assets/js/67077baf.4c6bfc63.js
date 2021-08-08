"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[59486],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,d=m["".concat(o,".").concat(h)]||m[h]||c[h]||s;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],p={title:"Azure Pipelines meet Jest",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",image:"blog/2020-12-30-azure-pipelines-meet-jest/test-results.png",tags:["azure-pipelines","jest"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2020/12/30/azure-pipelines-meet-jest",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-12-30-azure-pipelines-meet-jest.md",source:"@site/blog/2020-12-30-azure-pipelines-meet-jest.md",title:"Azure Pipelines meet Jest",description:"This post explains how to integrate the tremendous test runner Jest with the continuous integration platform Azure Pipelines. Perhaps we're setting up a new project and we've created a new React app with Create React App. This ships with Jest support out of the box. How do we get that plugged into Pipelines such that:",date:"2020-12-30T00:00:00.000Z",formattedDate:"December 30, 2020",tags:[{label:"azure-pipelines",permalink:"/tags/azure-pipelines"},{label:"jest",permalink:"/tags/jest"}],readingTime:3.27,truncated:!1,prevItem:{title:"Create React App with ts-loader and CRACO",permalink:"/2021/01/02/create-react-app-with-ts-loader-and-craco"},nextItem:{title:"dotnet-format: Prettier your CSharp with lint-staged",permalink:"/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged"}},u=[{value:"Tests run as part of our pipeline",id:"tests-run-as-part-of-our-pipeline",children:[]},{value:"Tests results are reported in Azure Pipelines UI",id:"tests-results-are-reported-in-azure-pipelines-ui",children:[]}],c={toc:u};function m(e){var t=e.components,p=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This post explains how to integrate the tremendous test runner ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," with the continuous integration platform ",(0,s.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/services/devops/pipelines/?nav=min"},"Azure Pipelines"),". Perhaps we're setting up a new project and we've created a new React app with ",(0,s.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),". This ships with Jest support out of the box. How do we get that plugged into Pipelines such that:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Tests run as part of our pipeline"),(0,s.kt)("li",{parentName:"ol"},"A failing test fails the build"),(0,s.kt)("li",{parentName:"ol"},"Test results are reported in Azure Pipelines UI?")),(0,s.kt)("h2",{id:"tests-run-as-part-of-our-pipeline"},"Tests run as part of our pipeline"),(0,s.kt)("p",null,"First of all, lets get the tests running. Crack open your ",(0,s.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," file and, in the appropriate place add the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"- task: Npm@1\n  displayName: npm run test\n  inputs:\n    command: 'custom'\n    workingDir: 'src/client-app'\n    customCommand: 'run test'\n")),(0,s.kt)("p",null,"The above will, when run, trigger a ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run test")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/client-app")," folder of my project (it's here where my React app lives). You'd imagine this would just work\u2122\ufe0f - but life is not that simple. This is because Jest, by default, runs in watch mode. This is blocking and so not appropriate for CI."),(0,s.kt)("p",null,"In our ",(0,s.kt)("inlineCode",{parentName:"p"},"src/client-app/package.json")," let's create a new script that runs the tests but ",(0,s.kt)("em",{parentName:"p"},"not")," in watch mode:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"test:ci": "npm run test -- --watchAll=false",\n')),(0,s.kt)("p",null,"and switch our ",(0,s.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," to use it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"- task: Npm@1\n  displayName: npm run test\n  inputs:\n    command: 'custom'\n    workingDir: 'src/client-app'\n    customCommand: 'run test:ci'\n")),(0,s.kt)("p",null,"Boom! We're now running tests as part of our pipeline. And also, failing tests will fail the build, because of Jest's default behaviour of exiting with status code 1 on failed tests."),(0,s.kt)("h2",{id:"tests-results-are-reported-in-azure-pipelines-ui"},"Tests results are reported in Azure Pipelines UI"),(0,s.kt)("p",null,"Pipelines has a really nice UI for reporting test results. If you're using something like .NET then you'll find that test results just magically show up there. We'd like that for our Jest tests as well. And we can have it."),(0,s.kt)("p",null,"The way we achieve this is by:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Producing test results in a format that can be subsequently processed"),(0,s.kt)("li",{parentName:"ol"},"Using those test results to publish to Azure Pipelines")),(0,s.kt)("p",null,"The way that you configure Jest test output is through usage of ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/cli#--reporters"},(0,s.kt)("inlineCode",{parentName:"a"},"reporters")),". However, Create React App doesn't support these. However that's not an issue, as the marvellous ",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/dan_abramov"},"Dan Abramov")," demonstrates ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/2474#issuecomment-306340526"},"here"),"."),(0,s.kt)("p",null,"We need to install the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/jest-community/jest-junit"},(0,s.kt)("inlineCode",{parentName:"a"},"jest-junit"))," package to our ",(0,s.kt)("inlineCode",{parentName:"p"},"client-app"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install jest-junit --save-dev\n")),(0,s.kt)("p",null,"And we'll tweak our ",(0,s.kt)("inlineCode",{parentName:"p"},"test:ci")," script to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-junit")," reporter as well:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"test:ci": "npm run test -- --watchAll=false --reporters=default --reporters=jest-junit",\n')),(0,s.kt)("p",null,"We also need to add some configuration to our ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," in the form of a ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-junit")," element:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"jest-junit": {\n        "suiteNameTemplate": "{filepath}",\n        "outputDirectory": ".",\n        "outputName": "junit.xml"\n    }\n')),(0,s.kt)("p",null,"The above configuration will use the name of the test file as the suite name in the results, which should speed up the tracking down of the failing test. The other values specify where the test results should be published to, in this case the root of our ",(0,s.kt)("inlineCode",{parentName:"p"},"client-app")," with the filename ",(0,s.kt)("inlineCode",{parentName:"p"},"junit.xml"),"."),(0,s.kt)("p",null,"Now our CI is producing our test results, how do we get them into Pipelines? For that we need the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/test/publish-test-results?view=azure-devops&tabs=trx%2Cyaml"},"Publish test results task")," and a new step in our ",(0,s.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," ",(0,s.kt)("em",{parentName:"p"},"after")," our ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run test")," step:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"- task: Npm@1\n  displayName: npm run test\n  inputs:\n    command: 'custom'\n    workingDir: 'src/client-app'\n    customCommand: 'run test:ci'\n\n- task: PublishTestResults@2\n  displayName: 'supply npm test results to pipelines'\n  condition: succeededOrFailed() # because otherwise we won't know what tests failed\n  inputs:\n    testResultsFiles: 'src/client-app/junit.xml'\n")),(0,s.kt)("p",null,"This will read the test results from our ",(0,s.kt)("inlineCode",{parentName:"p"},"src/client-app/junit.xml")," file and pump them into Pipelines. Do note that we're ",(0,s.kt)("em",{parentName:"p"},"always")," running this step; so if the previous step failed (as it would in the case of a failing test) we still pump out the details of what that failure was. Like so:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot of test results being published to Azure Pipelines regardless of passing or failing tests",src:n(60110).Z})),(0,s.kt)("p",null,"And that's it! Azure Pipelines and Jest integrated."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot of test results published to Azure Pipelines",src:n(80473).Z})))}m.isMDXComponent=!0},60110:function(e,t,n){t.Z=n.p+"assets/images/test-and-publish-steps-2645872314ef6a1ec899e764edfca11b.png"},80473:function(e,t,n){t.Z=n.p+"assets/images/test-results-ef579439584efb9f9a4ccc13d1855641.png"}}]);
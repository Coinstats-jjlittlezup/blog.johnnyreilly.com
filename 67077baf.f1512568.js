(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{1002:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/test-and-publish-steps-857c53c4a41308041a4f7fa4c51221e0.png"},1003:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/test-results-8c21dae7bd47ba08188eed454ff2d72e.png"},431:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),s=(n(0),n(965)),i={title:"Azure Pipelines meet Jest",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["azure-pipelines","jest"],hide_table_of_contents:!1},o={permalink:"/blog.johnnyreilly.com/2020/12/30/azure-pipelines-meet-jest",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-12-30-azure-pipelines-meet-jest.md",source:"@site/blog/2020-12-30-azure-pipelines-meet-jest.md",description:"This post explains how to integrate the tremendous test runner Jest with the continuous integration platform Azure Pipelines. Perhaps we're setting up a new project and we've created a new React app with Create React App. This ships with Jest support out of the box. How do we get that plugged into Pipelines such that:",date:"2020-12-30T00:00:00.000Z",tags:[{label:"azure-pipelines",permalink:"/blog.johnnyreilly.com/tags/azure-pipelines"},{label:"jest",permalink:"/blog.johnnyreilly.com/tags/jest"}],title:"Azure Pipelines meet Jest",readingTime:3.185,truncated:!1,prevItem:{title:"Create React App with ts-loader and CRACO",permalink:"/blog.johnnyreilly.com/2021/01/02/create-react-app-with-ts-loader-and-craco"},nextItem:{title:"Prettier your CSharp with dotnet-format and lint-staged",permalink:"/blog.johnnyreilly.com/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged"}},p=[{value:"Tests run as part of our pipeline",id:"tests-run-as-part-of-our-pipeline",children:[]},{value:"Tests results are reported in Azure Pipelines UI",id:"tests-results-are-reported-in-azure-pipelines-ui",children:[]}],l={toc:p};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This post explains how to integrate the tremendous test runner ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," with the continuous integration platform ",Object(s.b)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/services/devops/pipelines/?nav=min"},"Azure Pipelines"),". Perhaps we're setting up a new project and we've created a new React app with ",Object(s.b)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),". This ships with Jest support out of the box. How do we get that plugged into Pipelines such that:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Tests run as part of our pipeline"),Object(s.b)("li",{parentName:"ol"},"A failing test fails the build"),Object(s.b)("li",{parentName:"ol"},"Test results are reported in Azure Pipelines UI?")),Object(s.b)("h2",{id:"tests-run-as-part-of-our-pipeline"},"Tests run as part of our pipeline"),Object(s.b)("p",null,"First of all, lets get the tests running. Crack open your ",Object(s.b)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," file and, in the appropriate place add the following:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yml"},"- task: Npm@1\n          displayName: npm run test\n          inputs:\n            command: 'custom'\n            workingDir: 'src/client-app'\n            customCommand: 'run test'\n")),Object(s.b)("p",null,"The above will, when run, trigger a ",Object(s.b)("inlineCode",{parentName:"p"},"npm run test")," in the ",Object(s.b)("inlineCode",{parentName:"p"},"src/client-app")," folder of my project (it's here where my React app lives). You'd imagine this would just work\u2122\ufe0f - but life is not that simple. This is because Jest, by default, runs in watch mode. This is blocking and so not appropriate for CI."),Object(s.b)("p",null,"In our ",Object(s.b)("inlineCode",{parentName:"p"},"src/client-app/package.json")," let's create a new script that runs the tests but ",Object(s.b)("em",{parentName:"p"},"not")," in watch mode:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'"test:ci": "npm run test -- --watchAll=false",\n')),Object(s.b)("p",null,"and switch our ",Object(s.b)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," to use it:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yml"},"- task: Npm@1\n          displayName: npm run test\n          inputs:\n            command: 'custom'\n            workingDir: 'src/client-app'\n            customCommand: 'run test:ci'\n")),Object(s.b)("p",null,"Boom! We're now running tests as part of our pipeline. And also, failing tests will fail the build, because of Jest's default behaviour of exiting with status code 1 on failed tests."),Object(s.b)("h2",{id:"tests-results-are-reported-in-azure-pipelines-ui"},"Tests results are reported in Azure Pipelines UI"),Object(s.b)("p",null,"Pipelines has a really nice UI for reporting test results. If you're using something like .NET then you'll find that test results just magically show up there. We'd like that for our Jest tests as well. And we can have it."),Object(s.b)("p",null,"The way we achieve this is by:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Producing test results in a format that can be subsequently processed"),Object(s.b)("li",{parentName:"ol"},"Using those test results to publish to Azure Pipelines")),Object(s.b)("p",null,"The way that you configure Jest test output is through usage of ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/cli#--reporters"},Object(s.b)("inlineCode",{parentName:"a"},"reporters")),". However, Create React App doesn't support these. However that's not an issue, as the marvellous ",Object(s.b)("a",{parentName:"p",href:"https://twitter.com/dan_abramov"},"Dan Abramov")," demonstrates ",Object(s.b)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/2474#issuecomment-306340526"},"here"),"."),Object(s.b)("p",null,"We need to install the ",Object(s.b)("a",{parentName:"p",href:"https://github.com/jest-community/jest-junit"},Object(s.b)("inlineCode",{parentName:"a"},"jest-junit"))," package to our ",Object(s.b)("inlineCode",{parentName:"p"},"client-app"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"npm install jest-junit --save-dev\n")),Object(s.b)("p",null,"And we'll tweak our ",Object(s.b)("inlineCode",{parentName:"p"},"test:ci")," script to use the ",Object(s.b)("inlineCode",{parentName:"p"},"jest-junit")," reporter as well:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'"test:ci": "npm run test -- --watchAll=false --reporters=default --reporters=jest-junit",\n')),Object(s.b)("p",null,"We also need to add some configuration to our ",Object(s.b)("inlineCode",{parentName:"p"},"package.json")," in the form of a ",Object(s.b)("inlineCode",{parentName:"p"},"jest-junit")," element:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'"jest-junit": {\n        "suiteNameTemplate": "{filepath}",\n        "outputDirectory": ".",\n        "outputName": "junit.xml"\n    }\n')),Object(s.b)("p",null,"The above configuration will use the name of the test file as the suite name in the results, which should speed up the tracking down of the failing test. The other values specify where the test results should be published to, in this case the root of our ",Object(s.b)("inlineCode",{parentName:"p"},"client-app")," with the filename ",Object(s.b)("inlineCode",{parentName:"p"},"junit.xml"),"."),Object(s.b)("p",null,"Now our CI is producing our test results, how do we get them into Pipelines? For that we need the ",Object(s.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/test/publish-test-results?view=azure-devops&tabs=trx%2Cyaml"},"Publish test results task")," and a new step in our ",Object(s.b)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," ",Object(s.b)("em",{parentName:"p"},"after")," our ",Object(s.b)("inlineCode",{parentName:"p"},"npm run test")," step:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yml"},"- task: Npm@1\n          displayName: npm run test\n          inputs:\n            command: 'custom'\n            workingDir: 'src/client-app'\n            customCommand: 'run test:ci'\n\n        - task: PublishTestResults@2\n          displayName: 'supply npm test results to pipelines'\n          condition: succeededOrFailed() # because otherwise we won't know what tests failed\n          inputs:\n            testResultsFiles: 'src/client-app/junit.xml'\n")),Object(s.b)("p",null,"This will read the test results from our ",Object(s.b)("inlineCode",{parentName:"p"},"src/client-app/junit.xml")," file and pump them into Pipelines. Do note that we're ",Object(s.b)("em",{parentName:"p"},"always")," running this step; so if the previous step failed (as it would in the case of a failing test) we still pump out the details of what that failure was. Like so:"),Object(s.b)("p",null,Object(s.b)("img",{src:n(1002).default})),Object(s.b)("p",null,"And that's it! Azure Pipelines and Jest integrated."),Object(s.b)("p",null,Object(s.b)("img",{src:n(1003).default})))}u.isMDXComponent=!0},965:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(i,".").concat(m)]||c[m]||b[m]||s;return n?a.a.createElement(h,o(o({ref:t},l),{},{components:n})):a.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
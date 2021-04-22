(window.webpackJsonp=window.webpackJsonp||[]).push([[795],{1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,d=c["".concat(o,".").concat(m)]||c[m]||b[m]||i;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},933:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(4),a=n(10),i=(n(0),n(1211)),o={title:"azure-pipelines-task-lib and isOutput setVariable",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},s={permalink:"/2020/12/09/azure-pipelines-task-lib-and-isoutput-setvariable",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-12-09-azure-pipelines-task-lib-and-isoutput-setvariable.md",source:"@site/blog/2020-12-09-azure-pipelines-task-lib-and-isoutput-setvariable.md",title:"azure-pipelines-task-lib and isOutput setVariable",description:'Some blog posts are insightful treatises on the future of web development, some are "here\'s how I solved my problem". This is most assuredly the latter.',date:"2020-12-09T00:00:00.000Z",formattedDate:"December 9, 2020",tags:[],readingTime:1.605,truncated:!1,prevItem:{title:"Nullable reference types; CSharp's very own strictNullChecks",permalink:"/2020/12/20/nullable-reference-types-csharp-strictnullchecks"},nextItem:{title:"Images in MarkDown for the Azure DevOps Marketplace!",permalink:"/2020/11/28/images-in-markdown-for-azure-devops-marketplace"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Some blog posts are insightful treatises on the future of web development, some are "here\'s how I solved my problem". This is most assuredly the latter.'),Object(i.b)("p",null,"I'm writing an ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?view=azure-devops"},"custom pipelines task extension for Azure Pipelines"),". It's written with TypeScript and the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/azure-pipelines-task-lib"},"azure-pipelines-task-lib"),"."),Object(i.b)("p",null,"The pipeline needs to output a variable. Azure Pipelines does that using the ",Object(i.b)("inlineCode",{parentName:"p"},"setvariable")," command combined with ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#set-a-multi-job-output-variable"},"isOutput=true"),". This looks something like this: ",Object(i.b)("inlineCode",{parentName:"p"},'##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the value"'),"."),Object(i.b)("p",null,"The bad news is that the lib ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/azure-pipelines-task-lib/issues/688"},"doesn't presently support ",Object(i.b)("inlineCode",{parentName:"a"},"isOutput=true")),". Gosh it makes me sad. Hopefully in future it will be resolved. But what now?"),Object(i.b)("p",null,"For now we can hack ourselves a workaround:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import * as tl from 'azure-pipelines-task-lib/task';\nimport * as tcm from 'azure-pipelines-task-lib/taskcommand';\nimport * as os from 'os';\n\n/**\n * Sets a variable which will be output as well.\n *\n * @param     name    name of the variable to set\n * @param     val     value to set\n * @param     secret  whether variable is secret.  Multi-line secrets are not allowed.  Optional, defaults to false\n * @returns   void\n */\nexport function setOutputVariable(name: string, val: string, secret = false): void {\n    // use the implementation of setVariable to set all the internals,\n    // then subsequently set the output variable manually\n    tl.setVariable(name, val, secret);\n\n    const varValue = val || '';\n\n    // write the command\n    // see https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#set-a-multi-job-output-variable\n    _command(\n        'task.setvariable',\n        { variable: name || '', isOutput: 'true', issecret: (secret || false).toString() },\n        varValue\n    );\n}\n\nconst _outStream = process.stdout;\n\nfunction _writeLine(str: string): void {\n    _outStream.write(str + os.EOL);\n}\n\nfunction _command(command: string, properties: any, message: string) {\n    const taskCmd = new tcm.TaskCommand(command, properties, message);\n    _writeLine(taskCmd.toString());\n}\n")),Object(i.b)("p",null,"The above is effectively a wrapper for the existing ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/azure-pipelines-task-lib/blob/90e9cde0e509cba77185a80ef3af2fc898fb026c/node/task.ts#L162"},Object(i.b)("inlineCode",{parentName:"a"},"setVariable")),". However, once it's called into the initial implementation, ",Object(i.b)("inlineCode",{parentName:"p"},"setOutputVariable")," then writes out the same variable once more, but this time bolting on ",Object(i.b)("inlineCode",{parentName:"p"},"isOutput=true"),"."),Object(i.b)("p",null,"Finally, I've raised a PR to see if ",Object(i.b)("inlineCode",{parentName:"p"},"isOutput")," can be added directly to the library. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/azure-pipelines-task-lib/pull/691"},"You can track progress on that here.")))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[823],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},957:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(4),r=n(10),i=(n(0),n(1219)),o={title:"Azure DevOps Node API: The missing episodes",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["azure devops api","203","node.js"],hide_table_of_contents:!1},s={permalink:"/2020/10/31/azure-devops-node-api-missing-episodes",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-10-31-azure-devops-node-api-missing-episodes.md",source:"@site/blog/2020-10-31-azure-devops-node-api-missing-episodes.md",title:"Azure DevOps Node API: The missing episodes",description:"I've been taking a good look at the REST API for Azure DevOps. I'm delighted to say that it's a very full API. However, there's quirks.",date:"2020-10-31T00:00:00.000Z",formattedDate:"October 31, 2020",tags:[{label:"azure devops api",permalink:"/tags/azure-devops-api"},{label:"203",permalink:"/tags/203"},{label:"node.js",permalink:"/tags/node-js"}],readingTime:3.36,truncated:!1,prevItem:{title:"Throttling data requests with React Hooks",permalink:"/2020/11/10/throttle-data-requests-with-react-hooks"},nextItem:{title:"The Mysterious Case of Safari and the Empty Download",permalink:"/2020/10/19/safari-empty-download-content-type"}},l=[{value:"Wiki got a big ol&#39; &quot;but&quot;",id:"wiki-got-a-big-ol-but",children:[]},{value:"Handrolled Wiki API",id:"handrolled-wiki-api",children:[]}],p={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I've been taking a good look at the ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1"},"REST API for Azure DevOps"),". I'm delighted to say that it's a very full API. However, there's quirks."),Object(i.b)("p",null,"I'm writing a tool that interrogates Azure DevOps in order that it can construct release documentation. That release documentation we would like to publish to the project wiki."),Object(i.b)("p",null,"To make integration with Azure DevOps even easier, the ADO team have put a good amount of work into ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1#client-libraries"},"client libraries"),' that allow you to code in your language of choice. In my case I\'m writing a Node.js tool (using TypeScript) and happily the client lib for Node is written and published with TypeScript too. Tremendous! However, there is a "but" coming....'),Object(i.b)("h2",{id:"wiki-got-a-big-ol-but"},'Wiki got a big ol\' "but"'),Object(i.b)("p",null,"As I've been using the Node client lib, I've found minor quirks. Such as the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/azure-devops-node-api/issues/415"},Object(i.b)("inlineCode",{parentName:"a"},"GitApi.getRefs")," missing the pagination parts of the API"),"."),Object(i.b)("p",null,"Whilst the ",Object(i.b)("inlineCode",{parentName:"p"},"GitApi")," was missing some parameters on a method, the ",Object(i.b)("inlineCode",{parentName:"p"},"WikiApi")," was ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/azure-devops-node-api/issues/416"},"missing whole endpoints, such as the Pages - Create Or Update")," one. The various ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/azure-devops-node-api/blob/master/CONTRIBUTING.md#general-contribution-guide"},"client libraries are auto-generated")," which makes contribution a difficult game. The lovely ",Object(i.b)("a",{parentName:"p",href:"https://github.com/vtbassmatt"},"Matt Cooper")," has ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/azure-devops-node-api/issues/415#issuecomment-717991914"},"alerted the team")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"These clients are generated from the server-side controllers, and at a glance, I don't understand why those two parameters weren't included. Full transparency, we don't dedicate a lot of cycles here, but I will get it on the team's radar to investigate/improve.")),Object(i.b)("p",null,"In the meantime, I still had a tool to write."),Object(i.b)("h2",{id:"handrolled-wiki-api"},"Handrolled Wiki API"),Object(i.b)("p",null,"Whilst the Node.js client lib was missing some crucial pieces, there did seem to be a way forward. Using the API directly; not using the client lib to do our HTTP and using ",Object(i.b)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," instead. Happily the types we needed were still available for be leveraged."),Object(i.b)("p",null,"Looking at the docs it seemed it ought to be simple:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1#assemble-the-request"},"https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1#assemble-the-request")),Object(i.b)("p",null,"But when I attempted this I found my requests erroring out with 203 Non-Authoritative Informations. It didn't make sense. I couldn't get a single request to be successful, they all failed. It occurred to me that the answer was hiding in ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),". I'd managed to make successful requests to the API using the client lib. What was it doing that I wasn't?"),Object(i.b)("p",null,"The answer ended up being an authorization one-liner:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const request = await axios({\n        url,\n        headers: {\n            Accept: 'application/json',\n            'Content-Type': 'application/json',\n            // This!\n            Authorization: `Basic ${Buffer.from(`PAT:${adoPersonalAccessToken}`).toString('base64')}`,\n            'X-TFS-FedAuthRedirect': 'Suppress',\n        },\n    });\n}\n")),Object(i.b)("p",null,"With this in hand everything started to work and I found myself able to write my own clients to fill in the missing pieces from the client lib:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios';\nimport { WikiPage, WikiPageCreateOrUpdateParameters, WikiType } from 'azure-devops-node-api/interfaces/WikiInterfaces';\nimport { IWikiApi } from 'azure-devops-node-api/WikiApi';\n\nasync function getWikiPage({\n    adoUrl,\n    adoProject,\n    adoPat,\n    wikiId,\n    path,\n}: {\n    adoUrl: string;\n    adoProject: string;\n    adoPat: string;\n    wikiId: string;\n    path: string;\n}) {\n    try {\n        const url = `${makeBaseApiUrl({\n            adoUrl,\n            adoProject,\n        })}/wiki/wikis/${wikiId}/pages?${apiVersion}&path=${path}&includeContent=True&recursionLevel=full`;\n        const request = await axios({\n            url,\n            headers: makeHeaders(adoPat),\n        });\n\n        const page: WikiPage = request.data;\n        return page;\n    } catch (error) {\n        return undefined;\n    }\n}\n\nasync function createWikiPage({\n    adoUrl,\n    adoProject,\n    adoPat,\n    wikiId,\n    path,\n    data,\n}: {\n    adoUrl: string;\n    adoProject: string;\n    adoPat: string;\n    wikiId: string;\n    path: string;\n    data: WikiPageCreateOrUpdateParameters;\n}) {\n    try {\n        const url = `${makeBaseApiUrl({\n            adoUrl,\n            adoProject,\n        })}/wiki/wikis/${wikiId}/pages?${apiVersion}&path=${path}`;\n\n        const request = await axios({\n            method: 'PUT',\n            url,\n            headers: makeHeaders(adoPat),\n            data,\n        });\n\n        const newPage: WikiPage = request.data;\n        return newPage;\n    } catch (error) {\n        return undefined;\n    }\n}\n\nconst apiVersion = \"api-version=6.0\";\n\n/**\n* Create the headers necessary to ake Azure DevOps happy\n* @param adoPat Personal Access Token from ADO\n*/\nfunction makeHeaders(adoPat: string) {\n    return {\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n        Authorization: `Basic ${Buffer.from(`PAT:${adoPat}`).toString('base64')}`,\n        'X-TFS-FedAuthRedirect': 'Suppress',\n    };\n}\n\n/**\n* eg https://dev.azure.com/{organization}/{project}/_apis\n*/\nfunction makeBaseApiUrl({ adoUrl, adoProject }: { adoUrl: string; adoProject: string }) {\n    return `${adoUrl}/${adoProject}/_apis`;\n}\n")),Object(i.b)("p",null,"With this I was able to write code like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"let topLevelPage = await getWikiPage({\n        adoUrl,\n        adoProject,\n        adoPat,\n        wikiId,\n        path: config.wikiTopLevelName,\n    });\n\n    if (!topLevelPage)\n        topLevelPage = await createWikiPage({\n            adoUrl,\n            adoProject,\n            adoPat,\n            wikiId,\n            path: config.wikiTopLevelName,\n            data: { content: '' },\n        });\n")),Object(i.b)("p",null,"and the wikis were ours!"))}c.isMDXComponent=!0}}]);
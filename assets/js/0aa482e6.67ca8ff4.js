"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[44573],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=s,m=h["".concat(i,".").concat(d)]||h[d]||c[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91593:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Throttling data requests with React Hooks",authors:"johnnyreilly",tags:["throttle","React","Hooks","data"],hide_table_of_contents:!1},i=void 0,u={permalink:"/2020/11/10/throttle-data-requests-with-react-hooks",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-11-10-throttle-data-requests-with-react-hooks.md",source:"@site/blog/2020-11-10-throttle-data-requests-with-react-hooks.md",title:"Throttling data requests with React Hooks",description:"When an application loads data, typically relatively few HTTP requests will be made. For example, if we imagine we're making a student administration application, then a \"view\" screen might make a single HTTP request to load that student's data before displaying it.",date:"2020-11-10T00:00:00.000Z",formattedDate:"November 10, 2020",tags:[{label:"throttle",permalink:"/tags/throttle"},{label:"React",permalink:"/tags/react"},{label:"Hooks",permalink:"/tags/hooks"},{label:"data",permalink:"/tags/data"}],readingTime:13.135,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",permalink:"/2020/11/14/bulletproof-uniq-with-typescript"},nextItem:{title:"Azure DevOps Client for Node.js - working around limitations",permalink:"/2020/10/31/azure-devops-node-api-missing-episodes"}},p={authorsImageUrls:[void 0]},c=[{value:"Let&#39;s bring Chrome to its knees",id:"lets-bring-chrome-to-its-knees",children:[]},{value:"Throttle me this",id:"throttle-me-this",children:[]},{value:"What shall we build?",id:"what-shall-we-build",children:[{value:"1. List repository contributors",id:"1-list-repository-contributors",children:[]},{value:"2. Get a user",id:"2-get-a-user",children:[]}]},{value:"Blogging devs v1.0",id:"blogging-devs-v10",children:[]}],h={toc:c};function d(e){var t=e.components,l=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When an application loads data, typically relatively few HTTP requests will be made. For example, if we imagine we're making a student administration application, then a \"view\" screen might make a single HTTP request to load that student's data before displaying it."),(0,o.kt)("p",null,"Occasionally there's a need for an application to make a large number of HTTP requests. Consider a reporting application which loads data and then aggregates it for presentation purposes."),(0,o.kt)("p",null,"This need presents two interesting problems to solve:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"how do we load data gradually?"),(0,o.kt)("li",{parentName:"ol"},"how do we present loading progress to users?")),(0,o.kt)("p",null,"This post will talk about how we can tackle these and demonstrate using a custom React Hook."),(0,o.kt)("h2",{id:"lets-bring-chrome-to-its-knees"},"Let's bring Chrome to its knees"),(0,o.kt)("p",null,"We'll begin our journey by spinning up a TypeScript React app with ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app throttle-requests-react-hook --template typescript\n")),(0,o.kt)("p",null,"Because we're going to be making a number of asynchronous calls, we're going to simplify the code by leaning on the widely used ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/streamich/react-use"},(0,o.kt)("inlineCode",{parentName:"a"},"react-use"))," for a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/streamich/react-use/blob/master/docs/useAsync.md"},(0,o.kt)("inlineCode",{parentName:"a"},"useAsync"))," hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd throttle-requests-react-hook\nyarn add react-use\n")),(0,o.kt)("p",null,"We'll replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.css")," file with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".App {\n  text-align: center;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-labelinput > * {\n  margin: 0.5em;\n  font-size:24px;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n.App-button {\n  font-size: calc(10px + 2vmin);\n  margin-top: 0.5em;\n  padding: 1em;\n  background-color: cornflowerblue;\n  color: #ffffff;\n  text-align: center;\n}\n\n.App-progress {\n  padding: 1em;\n  background-color: cadetblue;\n  color: #ffffff;\n}\n\n.App-results {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.App-results > * {\n  padding: 1em;\n  margin: 0.5em;\n  background-color: darkblue;\n  flex: 1 1 300px;\n}\n")),(0,o.kt)("p",null,"Then we'll replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," contents with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useAsync } from "react-use";\nimport "./App.css";\n\nfunction use10_000Requests(startedAt: string) {\n  const responses = useAsync(async () => {\n    if (!startedAt) return;\n\n    // make 10,000 unique HTTP requests\n    const results = await Promise.all(\n      Array.from(Array(10_000)).map(async (_, index) => {\n        const response = await fetch(\n          `/manifest.json?querystringValueToPreventCaching=${startedAt}_request-${index}`\n        );\n        const json = await response.json();\n        return json;\n      })\n    );\n\n    return results;\n  }, [startedAt]);\n\n  return responses;\n}\n\n\nfunction App() {\n  const [startedAt, setStartedAt] = useState("");\n  const responses = use10_000Requests(startedAt);\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>The HTTP request machine</h1>\n        <button\n          className="App-button"\n          onClick={(_) => setStartedAt(new Date().toISOString())}\n        >\n          Make 10,000 requests\n        </button>\n        {responses.loading && <div>{progressMessage}</div>}\n        {responses.error && <div>Something went wrong</div>}\n        {responses.value && (\n          <div className="App-results">\n            {responses.value.length} requests completed successfully\n          </div>\n        )}\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"The app that we've built is very simple; it's a button which, when you press it, fires 10,000 HTTP requests in parallel using the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API"),". The data being requested in this case is an arbitrary JSON file; the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json"),". If you look closely you'll see we're doing some querystring tricks with our URL to avoid getting cached data."),(0,o.kt)("p",null,"In fact, for this demo we're not interested in the results of these HTTP requests; rather we're interested in how the browser copes with this approach. (Spoiler: not well!) It's worth considering that requesting a text file from a server running on the same machine as the browser should be fast."),(0,o.kt)("p",null,"So we'll run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," and go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to get to the app. Running with Devtools open results in the following unhappy affair:"),(0,o.kt)("p",null," ",(0,o.kt)("img",{src:n(96388).Z})),(0,o.kt)("p",null,"The GIF above has been edited significantly for length. In reality it took 20 seconds for the first request to be fired, prior to that Chrome was unresponsive. When requests did start to fire, a significant number failed with ",(0,o.kt)("inlineCode",{parentName:"p"},"net::ERR_INSUFFICIENT_RESOURCES"),'. Further to that, those requests that were fired sat in "Stalled" state prior to being executed. This is a consequence of ',(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/network/reference#timing"},"Chrome limiting the number of connections - all browsers do this"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.")),(0,o.kt)("p",null,"In summary, the problems with the current approach are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the browser becoming unresponsive"),(0,o.kt)("li",{parentName:"ol"},"failing HTTP requests due to insufficient resources"),(0,o.kt)("li",{parentName:"ol"},"no information displayed to the user around progress")),(0,o.kt)("h2",{id:"throttle-me-this"},"Throttle me this"),(0,o.kt)("p",null,"Instead of hammering the browser by firing all the requests at once, we could instead implement a throttle. A throttle is a mechanism which allows you to limit the rate at which operations are performed. In this case we want to limit the rate at which HTTP requests are made. A throttle will tackle problems 1 and 2 - essentially keeping the browser free and easy and ensuring that requests are all successfully sent. We also want to keep our users informed around how progress is going. It's time to unveil the ",(0,o.kt)("inlineCode",{parentName:"p"},"useThrottleRequests")," hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useMemo, useReducer } from "react";\nimport { AsyncState } from "react-use/lib/useAsync";\n\n/** Function which makes a request */\nexport type RequestToMake = () => Promise<void>;\n\n/**\n * Given an array of requestsToMake and a limit on the number of max parallel requests\n * queue up those requests and start firing them\n * - inspired by Rafael Xavier\'s approach here: https://stackoverflow.com/a/48007240/761388\n *\n * @param requestsToMake\n * @param maxParallelRequests the maximum number of requests to make - defaults to 6\n */\nasync function throttleRequests(\n  requestsToMake: RequestToMake[],\n  maxParallelRequests = 6\n) {\n  // queue up simultaneous calls\n  const queue: Promise<void>[] = [];\n  for (let requestToMake of requestsToMake) {\n    // fire the async function, add its promise to the queue,\n    // and remove it from queue when complete\n    const promise = requestToMake().then((res) => {\n      queue.splice(queue.indexOf(promise), 1);\n      return res;\n    });\n    queue.push(promise);\n\n    // if the number of queued requests matches our limit then\n    // wait for one to finish before enqueueing more\n    if (queue.length >= maxParallelRequests) {\n      await Promise.race(queue);\n    }\n  }\n  // wait for the rest of the calls to finish\n  await Promise.all(queue);\n}\n\n/**\n * The state that represents the progress in processing throttled requests\n */\nexport type ThrottledProgress<TData> = {\n  /** the number of requests that will be made */\n  totalRequests: number;\n  /** the errors that came from failed requests */\n  errors: Error[];\n  /** the responses that came from successful requests */\n  values: TData[];\n  /** a value between 0 and 100 which represents the percentage of requests that have been completed (whether successfully or not) */\n  percentageLoaded: number;\n  /** whether the throttle is currently processing requests */\n  loading: boolean;\n};\n\nfunction createThrottledProgress<TData>(\n  totalRequests: number\n): ThrottledProgress<TData> {\n  return {\n    totalRequests,\n    percentageLoaded: 0,\n    loading: false,\n    errors: [],\n    values: [],\n  };\n}\n\n/**\n * A reducing function which takes the supplied `ThrottledProgress` and applies a new value to it\n */\nfunction updateThrottledProgress<TData>(\n  currentProgress: ThrottledProgress<TData>,\n  newData: AsyncState<TData>\n): ThrottledProgress<TData> {\n  const errors = newData.error\n    ? [...currentProgress.errors, newData.error]\n    : currentProgress.errors;\n\n  const values = newData.value\n    ? [...currentProgress.values, newData.value]\n    : currentProgress.values;\n\n  const percentageLoaded =\n    currentProgress.totalRequests === 0\n      ? 0\n      : Math.round(\n          ((errors.length + values.length) / currentProgress.totalRequests) * 100\n        );\n\n  const loading =\n    currentProgress.totalRequests === 0\n      ? false\n      : errors.length + values.length < currentProgress.totalRequests;\n\n  return {\n    totalRequests: currentProgress.totalRequests,\n    loading,\n    percentageLoaded,\n    errors,\n    values,\n  };\n}\n\ntype ThrottleActions<TValue> =\n  | {\n      type: "initialise";\n      totalRequests: number;\n    }\n  | {\n      type: "requestSuccess";\n      value: TValue;\n    }\n  | {\n      type: "requestFailed";\n      error: Error;\n    };\n\n/**\n * Create a ThrottleRequests and an updater\n */\nexport function useThrottleRequests<TValue>() {\n  function reducer(\n    throttledProgressAndState: ThrottledProgress<TValue>,\n    action: ThrottleActions<TValue>\n  ): ThrottledProgress<TValue> {\n    switch (action.type) {\n      case "initialise":\n        return createThrottledProgress(action.totalRequests);\n\n      case "requestSuccess":\n        return updateThrottledProgress(throttledProgressAndState, {\n          loading: false,\n          value: action.value,\n        });\n\n      case "requestFailed":\n        return updateThrottledProgress(throttledProgressAndState, {\n          loading: false,\n          error: action.error,\n        });\n    }\n  }\n\n  const [throttle, dispatch] = useReducer(\n    reducer,\n    createThrottledProgress<TValue>(/** totalRequests */ 0)\n  );\n\n  const updateThrottle = useMemo(() => {\n    /**\n     * Update the throttle with a successful request\n     * @param values from request\n     */\n    function requestSucceededWithData(value: TValue) {\n      return dispatch({\n        type: "requestSuccess",\n        value,\n      });\n    }\n\n    /**\n     * Update the throttle upon a failed request with an error message\n     * @param error error\n     */\n    function requestFailedWithError(error: Error) {\n      return dispatch({\n        type: "requestFailed",\n        error,\n      });\n    }\n\n    /**\n     * Given an array of requestsToMake and a limit on the number of max parallel requests\n     * queue up those requests and start firing them\n     * - based upon https://stackoverflow.com/a/48007240/761388\n     *\n     * @param requestsToMake\n     * @param maxParallelRequests the maximum number of requests to make - defaults to 6\n     */\n    function queueRequests(\n      requestsToMake: RequestToMake[],\n      maxParallelRequests = 6\n    ) {\n      dispatch({\n        type: "initialise",\n        totalRequests: requestsToMake.length,\n      });\n\n      return throttleRequests(requestsToMake, maxParallelRequests);\n    }\n\n    return {\n      queueRequests,\n      requestSucceededWithData,\n      requestFailedWithError,\n    };\n  }, [dispatch]);\n\n  return {\n    throttle,\n    updateThrottle,\n  };\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useThrottleRequests")," hook returns 2 properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"throttle")," ","-"," a ",(0,o.kt)("inlineCode",{parentName:"p"},"ThrottledProgress&lt;TData&gt;")," that contains the following data:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"totalRequests")," ","-"," the number of requests that will be made"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"errors")," ","-"," the errors that came from failed requests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values")," ","-"," the responses that came from successful requests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"percentageLoaded")," ","-"," a value between 0 and 100 which represents the percentage of requests that have been completed (whether successfully or not)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loading")," ","-"," whether the throttle is currently processing requests")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"updateThrottle")," ","-"," an object which exposes 3 functions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queueRequests")," ","-"," the function to which you pass the requests that should be queued and executed in a throttled fashion"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requestSucceededWithData")," ","-"," the function which is called if a request succeeds to provide the data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requestFailedWithError")," ","-"," the function which is called if a request fails to provide the error")))),(0,o.kt)("p",null,"That's a lot of words to describe our ",(0,o.kt)("inlineCode",{parentName:"p"},"useThrottleRequests")," hook. Let's look at what it looks like by migrating our ",(0,o.kt)("inlineCode",{parentName:"p"},"use10_000Requests")," hook to (no pun intended) use it. Here's a new implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useAsync } from "react-use";\nimport { useThrottleRequests } from "./useThrottleRequests";\nimport "./App.css";\n\nfunction use10_000Requests(startedAt: string) {\n  const { throttle, updateThrottle } = useThrottleRequests();\n  const [progressMessage, setProgressMessage] = useState("not started");\n\n  useAsync(async() => {\n      if (!startedAt) return;\n\n      setProgressMessage("preparing");\n\n      const requestsToMake = Array.from(Array(10_000)).map(\n        (_, index) => async () => {\n          try {\n            setProgressMessage(`loading ${index}...`);\n\n            const response = await fetch(\n              `/manifest.json?querystringValueToPreventCaching=${startedAt}_request-${index}`\n            );\n            const json = await response.json();\n\n            updateThrottle.requestSucceededWithData(json);\n          } catch (error) {\n            console.error(`failed to load ${index}`, error);\n            updateThrottle.requestFailedWithError(error);\n          }\n        }\n      );\n\n      await updateThrottle.queueRequests(requestsToMake);\n\n  }, [startedAt, updateThrottle, setProgressMessage]);\n\n  return { throttle, progressMessage };\n}\n\nfunction App() {\n  const [startedAt, setStartedAt] = useState("");\n\n  const { progressMessage, throttle } = use10_000Requests(startedAt);\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>The HTTP request machine</h1>\n        <button\n          className="App-button"\n          onClick={(_) => setStartedAt(new Date().toISOString())}\n        >\n          Make 10,000 requests\n        </button>\n        {throttle.loading && <div>{progressMessage}</div>}\n        {throttle.values.length > 0 && (\n          <div className="App-results">\n            {throttle.values.length} requests completed successfully\n          </div>\n        )}\n        {throttle.errors.length > 0 && (\n          <div className="App-results">\n            {throttle.errors.length} requests errored\n          </div>\n        )}\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"Looking at the new ",(0,o.kt)("inlineCode",{parentName:"p"},"use10_000Requests")," hook, there's a few subtle differences to our prior implementation. First of all, we're now exposing the ",(0,o.kt)("inlineCode",{parentName:"p"},"throttle"),"; a ",(0,o.kt)("inlineCode",{parentName:"p"},"ThrottleProgress&lt;TData&gt;"),". Our updated hook also exposes a ",(0,o.kt)("inlineCode",{parentName:"p"},"progressMessage")," which is a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," stored with ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," that we update as our throttle runs. In truth the information being surfaced here isn't that interesting. The ",(0,o.kt)("inlineCode",{parentName:"p"},"progressMessage")," is in place just to illustrate that you could capture some data from your requests as they complete for display purposes; a running total for instance."),(0,o.kt)("p",null,"So, how does our new hook approach perform?"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(13117).Z})),(0,o.kt)("p",null,"Very well indeed! Please note that the above GIF has again been edited for brevity. If we look back at the problems we faced with the prior approach, how do we compare?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("del",{parentName:"li"},"the browser becoming unresponsive")," ","-"," the browser remains responsive."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("del",{parentName:"li"},"failing HTTP requests due to insufficient resources")," ","-"," the browser does not experience failing HTTP requests."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("del",{parentName:"li"},"no information displayable to the user around progress")," ","-"," details of progress are displayed to the user throughout.")),(0,o.kt)("p",null,"Tremendous!"),(0,o.kt)("h2",{id:"what-shall-we-build"},"What shall we build?"),(0,o.kt)("p",null,"Our current example is definitely contrived. Let's try and apply our ",(0,o.kt)("inlineCode",{parentName:"p"},"useThrottleRequests")," hook to a more realistic scenario. We're going to build an application which, given a repo on GitHub, lists all the contributors blogs. (You can specify a blog URL on your GitHub profile; many people use this to specify their Twitter profile.)"),(0,o.kt)("p",null,"We can build this thanks to the excellent ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/rest"},"GitHub REST API"),". It exposes two endpoints of interest given our goal."),(0,o.kt)("h3",{id:"1-list-repository-contributors"},"1","."," List repository contributors"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-contributors"},"List repository contributors")," lists contributors to the specified repository at this URL: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET https://api.github.com/repos/{owner}/{repo}/contributors"),". The response is an array of objects, crucially featuring a ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," property that points to the user in question's API endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'[\n  // ...\n  {\n    // ...\n    "url": "https://api.github.com/users/octocat",\n    // ...\n  },\n  // ...\n]\n')),(0,o.kt)("h3",{id:"2-get-a-user"},"2","."," Get a user"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/users#get-a-user"},"Get a user")," is the API that the ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," property above is referring to. When called it returns an object representing the publicly available information about a user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // ...\n  "name": "The Octocat",\n  // ...\n  "blog": "https://github.blog",\n  // ...\n}\n')),(0,o.kt)("h2",{id:"blogging-devs-v10"},"Blogging devs v1.0"),(0,o.kt)("p",null,"We're now ready to build our blogging devs app; let's replace the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useCallback, useMemo, useState } from "react";\nimport { useAsync } from "react-use";\nimport { useThrottleRequests } from "./useThrottleRequests";\nimport "./App.css";\n\ntype GitHubUser = { name: string; blog?: string };\n\nfunction timeout(ms: number) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\nfunction useContributors(contributorsUrlToLoad: string) {\n  const { throttle, updateThrottle } = useThrottleRequests<GitHubUser>();\n  const [progressMessage, setProgressMessage] = useState("");\n\n  useAsync(async () => {\n    if (!contributorsUrlToLoad) return;\n\n    setProgressMessage("loading contributors");\n\n    // load contributors from GitHub\n    const contributorsResponse = await fetch(contributorsUrlToLoad);\n    const contributors: { url: string }[] = await contributorsResponse.json();\n\n    setProgressMessage(`loading ${contributors.length} contributors...`);\n\n    // For each entry in result, retrieve the given user from GitHub\n    const requestsToMake = contributors.map(({ url }, index) => async () => {\n      try {\n        setProgressMessage(\n          `loading ${index} / ${contributors.length}: ${url}...`\n        );\n\n        const response = await fetch(url);\n        const json: GitHubUser = await response.json();\n\n        // wait for 1 second before completing the request\n        // - makes for better demos\n        await timeout(1000);\n\n        updateThrottle.requestSucceededWithData(json);\n      } catch (error) {\n        console.error(`failed to load ${url}`, error);\n        updateThrottle.requestFailedWithError(error);\n      }\n    });\n\n    await updateThrottle.queueRequests(requestsToMake);\n\n    setProgressMessage("");\n  }, [contributorsUrlToLoad, updateThrottle, setProgressMessage]);\n\n  return { throttle, progressMessage };\n}\n\nfunction App() {\n  // The owner and repo to query; we\'re going to default\n  // to using DefinitelyTyped as an example repo as it\n  // is one of the most contributed to repos on GitHub\n  const [owner, setOwner] = useState("DefinitelyTyped");\n  const [repo, setRepo] = useState("DefinitelyTyped");\n  const handleOwnerChange = useCallback(\n    (event: React.ChangeEvent<HTMLInputElement>) =>\n      setOwner(event.target.value),\n    [setOwner]\n  );\n  const handleRepoChange = useCallback(\n    (event: React.ChangeEvent<HTMLInputElement>) => setRepo(event.target.value),\n    [setRepo]\n  );\n\n  const contributorsUrl = `https://api.github.com/repos/${owner}/${repo}/contributors`;\n\n  const [contributorsUrlToLoad, setUrlToLoad] = useState("");\n  const { progressMessage, throttle } = useContributors(contributorsUrlToLoad);\n\n  const bloggers = useMemo(\n    () => throttle.values.filter((contributor) => contributor.blog),\n    [throttle]\n  );\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>Blogging devs</h1>\n\n        <p>\n          Show me the{" "}\n          <a\n            className="App-link"\n            href={contributorsUrl}\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n            contributors for {owner}/{repo}\n          </a>{" "}\n          who have blogs.\n        </p>\n\n        <div className="App-labelinput">\n          <label htmlFor="owner">GitHub Owner</label>\n          <input\n            id="owner"\n            type="text"\n            value={owner}\n            onChange={handleOwnerChange}\n          />\n          <label htmlFor="repo">GitHub Repo</label>\n          <input\n            id="repo"\n            type="text"\n            value={repo}\n            onChange={handleRepoChange}\n          />\n        </div>\n\n        <button\n          className="App-button"\n          onClick={(e) => setUrlToLoad(contributorsUrl)}\n        >\n          Load bloggers from GitHub\n        </button>\n\n        {progressMessage && (\n          <div className="App-progress">{progressMessage}</div>\n        )}\n\n        {throttle.percentageLoaded > 0 && (\n          <>\n            <h3>Behold {bloggers.length} bloggers:</h3>\n            <div className="App-results">\n              {bloggers.map((blogger) => (\n                <div key={blogger.name}>\n                  <div>{blogger.name}</div>\n                  <a\n                    className="App-link"\n                    href={blogger.blog}\n                    target="_blank"\n                    rel="noopener noreferrer"\n                  >\n                    {blogger.blog}\n                  </a>\n                </div>\n              ))}\n            </div>\n          </>\n        )}\n\n        {throttle.errors.length > 0 && (\n          <div className="App-results">\n            {throttle.errors.length} requests errored\n          </div>\n        )}\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"The application gives users the opportunity to enter the organisation and repository of a GitHub project. Then, when the button is clicked, it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"loads the contributors"),(0,o.kt)("li",{parentName:"ul"},"for each contributor it loads the individual user (separate HTTP request for each)"),(0,o.kt)("li",{parentName:"ul"},"as it loads it communicates how far through the loading progress it has got"),(0,o.kt)("li",{parentName:"ul"},"as users are loaded, it renders a tile for each user with a listed blog")),(0,o.kt)("p",null,"Just to make the demo a little clearer we've artificially slowed the duration of each request by a second. What does it look like when you put it together? Well like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(89932).Z})),(0,o.kt)("p",null,"We have built a React Hook which allows us to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"gradually load data"),(0,o.kt)("li",{parentName:"ul"},"without blocking the UI of the browser"),(0,o.kt)("li",{parentName:"ul"},"and which provides progress data to keep users informed.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/throttling-data-requests-with-react-hooks/"},"This post was originally published on LogRocket.")))}d.isMDXComponent=!0},89932:function(e,t,n){t.Z=n.p+"assets/images/blogging-devs-e9b6ca6c427832fe283ccae4acfa9a64.gif"},13117:function(e,t,n){t.Z=n.p+"assets/images/i-want-it-all-with-hook-b0c4e380859556daa50e13bc35109275.gif"},96388:function(e,t,n){t.Z=n.p+"assets/images/i-want-it-all-41ce87fdb0503ffa4e8e22e0c68d97fa.gif"}}]);
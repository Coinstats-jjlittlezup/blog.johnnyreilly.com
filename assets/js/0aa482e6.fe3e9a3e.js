(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),s=n(8),a=(n(0),n(1160)),o={title:"Throttling data requests with React Hooks",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},i={permalink:"/2020/11/10/throttle-data-requests-with-react-hooks",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-11-10-throttle-data-requests-with-react-hooks.md",source:"@site/blog/2020-11-10-throttle-data-requests-with-react-hooks.md",description:"When an application loads data, typically relatively few HTTP requests will be made. For example, if we imagine we're making a student administration application, then a \"view\" screen might make a single HTTP request to load that student's data before displaying it.",date:"2020-11-10T00:00:00.000Z",formattedDate:"November 10, 2020",tags:[],title:"Throttling data requests with React Hooks",readingTime:13.215,truncated:!1,prevItem:{title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",permalink:"/2020/11/14/bulletproof-uniq-with-typescript"},nextItem:{title:"Azure DevOps Node API: The missing episodes",permalink:"/2020/10/31/azure-devops-node-api-missing-episodes"}},l=[{value:"Let&#39;s bring Chrome to its knees",id:"lets-bring-chrome-to-its-knees",children:[]},{value:"Throttle me this",id:"throttle-me-this",children:[]},{value:"What shall we build?",id:"what-shall-we-build",children:[{value:"1. List repository contributors",id:"1-list-repository-contributors",children:[]},{value:"2. Get a user",id:"2-get-a-user",children:[]}]},{value:"Blogging devs v1.0",id:"blogging-devs-v10",children:[]}],u={toc:l};function c(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When an application loads data, typically relatively few HTTP requests will be made. For example, if we imagine we're making a student administration application, then a \"view\" screen might make a single HTTP request to load that student's data before displaying it."),Object(a.b)("p",null,"Occasionally there's a need for an application to make a large number of HTTP requests. Consider a reporting application which loads data and then aggregates it for presentation purposes."),Object(a.b)("p",null,"This need presents two interesting problems to solve:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"how do we load data gradually?"),Object(a.b)("li",{parentName:"ol"},"how do we present loading progress to users?")),Object(a.b)("p",null,"This post will talk about how we can tackle these and demonstrate using a custom React Hook."),Object(a.b)("h2",{id:"lets-bring-chrome-to-its-knees"},"Let's bring Chrome to its knees"),Object(a.b)("p",null,"We'll begin our journey by spinning up a TypeScript React app with ",Object(a.b)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app throttle-requests-react-hook --template typescript\n")),Object(a.b)("p",null,"Because we're going to be making a number of asynchronous calls, we're going to simplify the code by leaning on the widely used ",Object(a.b)("a",{parentName:"p",href:"https://github.com/streamich/react-use"},Object(a.b)("inlineCode",{parentName:"a"},"react-use"))," for a ",Object(a.b)("a",{parentName:"p",href:"https://github.com/streamich/react-use/blob/master/docs/useAsync.md"},Object(a.b)("inlineCode",{parentName:"a"},"useAsync"))," hook."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"cd throttle-requests-react-hook\nyarn add react-use\n")),Object(a.b)("p",null,"We'll replace the ",Object(a.b)("inlineCode",{parentName:"p"},"App.css")," file with this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},".App {\n  text-align: center;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-labelinput > * {\n  margin: 0.5em;\n  font-size:24px;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n.App-button {\n  font-size: calc(10px + 2vmin);\n  margin-top: 0.5em;\n  padding: 1em;\n  background-color: cornflowerblue;\n  color: #ffffff;\n  text-align: center;\n}\n\n.App-progress {\n  padding: 1em;\n  background-color: cadetblue;\n  color: #ffffff;\n}\n\n.App-results {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.App-results > * {\n  padding: 1em;\n  margin: 0.5em;\n  background-color: darkblue;\n  flex: 1 1 300px;\n}\n")),Object(a.b)("p",null,"Then we'll replace the ",Object(a.b)("inlineCode",{parentName:"p"},"App.tsx")," contents with this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useAsync } from "react-use";\nimport "./App.css";\n\nfunction use10_000Requests(startedAt: string) {\n  const responses = useAsync(async () => {\n    if (!startedAt) return;\n\n    // make 10,000 unique HTTP requests\n    const results = await Promise.all(\n      Array.from(Array(10_000)).map(async (_, index) => {\n        const response = await fetch(\n          `/manifest.json?querystringValueToPreventCaching=${startedAt}_request-${index}`\n        );\n        const json = await response.json();\n        return json;\n      })\n    );\n\n    return results;\n  }, [startedAt]);\n\n  return responses;\n}\n\n\nfunction App() {\n  const [startedAt, setStartedAt] = useState("");\n  const responses = use10_000Requests(startedAt);\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>The HTTP request machine</h1>\n        <button\n          className="App-button"\n          onClick={(_) => setStartedAt(new Date().toISOString())}\n        >\n          Make 10,000 requests\n        </button>\n        {responses.loading && <div>{progressMessage}</div>}\n        {responses.error && <div>Something went wrong</div>}\n        {responses.value && (\n          <div className="App-results">\n            {responses.value.length} requests completed successfully\n          </div>\n        )}\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),Object(a.b)("p",null,"The app that we've built is very simple; it's a button which, when you press it, fires 10,000 HTTP requests in parallel using the ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API"),". The data being requested in this case is an arbitrary JSON file; the ",Object(a.b)("inlineCode",{parentName:"p"},"manifest.json"),". If you look closely you'll see we're doing some querystring tricks with our URL to avoid getting cached data."),Object(a.b)("p",null,"In fact, for this demo we're not interested in the results of these HTTP requests; rather we're interested in how the browser copes with this approach. (Spoiler: not well!) It's worth considering that requesting a text file from a server running on the same machine as the browser should be fast."),Object(a.b)("p",null,"So we'll run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start")," and go to ",Object(a.b)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to get to the app. Running with Devtools open results in the following unhappy affair:"),Object(a.b)("p",null," ",Object(a.b)("img",{src:n(1173).default})),Object(a.b)("p",null,"The GIF above has been edited significantly for length. In reality it took 20 seconds for the first request to be fired, prior to that Chrome was unresponsive. When requests did start to fire, a significant number failed with ",Object(a.b)("inlineCode",{parentName:"p"},"net::ERR_INSUFFICIENT_RESOURCES"),'. Further to that, those requests that were fired sat in "Stalled" state prior to being executed. This is a consequence of ',Object(a.b)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/network/reference#timing"},"Chrome limiting the number of connections - all browsers do this"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.")),Object(a.b)("p",null,"In summary, the problems with the current approach are:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"the browser becoming unresponsive"),Object(a.b)("li",{parentName:"ol"},"failing HTTP requests due to insufficient resources"),Object(a.b)("li",{parentName:"ol"},"no information displayed to the user around progress")),Object(a.b)("h2",{id:"throttle-me-this"},"Throttle me this"),Object(a.b)("p",null,"Instead of hammering the browser by firing all the requests at once, we could instead implement a throttle. A throttle is a mechanism which allows you to limit the rate at which operations are performed. In this case we want to limit the rate at which HTTP requests are made. A throttle will tackle problems 1 and 2 - essentially keeping the browser free and easy and ensuring that requests are all successfully sent. We also want to keep our users informed around how progress is going. It's time to unveil the ",Object(a.b)("inlineCode",{parentName:"p"},"useThrottleRequests")," hook:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { useMemo, useReducer } from "react";\nimport { AsyncState } from "react-use/lib/useAsync";\n\n/** Function which makes a request */\nexport type RequestToMake = () => Promise<void>;\n\n/**\n * Given an array of requestsToMake and a limit on the number of max parallel requests\n * queue up those requests and start firing them\n * - inspired by Rafael Xavier\'s approach here: https://stackoverflow.com/a/48007240/761388\n *\n * @param requestsToMake\n * @param maxParallelRequests the maximum number of requests to make - defaults to 6\n */\nasync function throttleRequests(\n  requestsToMake: RequestToMake[],\n  maxParallelRequests = 6\n) {\n  // queue up simultaneous calls\n  const queue: Promise<void>[] = [];\n  for (let requestToMake of requestsToMake) {\n    // fire the async function, add its promise to the queue,\n    // and remove it from queue when complete\n    const promise = requestToMake().then((res) => {\n      queue.splice(queue.indexOf(promise), 1);\n      return res;\n    });\n    queue.push(promise);\n\n    // if the number of queued requests matches our limit then\n    // wait for one to finish before enqueueing more\n    if (queue.length >= maxParallelRequests) {\n      await Promise.race(queue);\n    }\n  }\n  // wait for the rest of the calls to finish\n  await Promise.all(queue);\n}\n\n/**\n * The state that represents the progress in processing throttled requests\n */\nexport type ThrottledProgress<TData> = {\n  /** the number of requests that will be made */\n  totalRequests: number;\n  /** the errors that came from failed requests */\n  errors: Error[];\n  /** the responses that came from successful requests */\n  values: TData[];\n  /** a value between 0 and 100 which represents the percentage of requests that have been completed (whether successfully or not) */\n  percentageLoaded: number;\n  /** whether the throttle is currently processing requests */\n  loading: boolean;\n};\n\nfunction createThrottledProgress<TData>(\n  totalRequests: number\n): ThrottledProgress<TData> {\n  return {\n    totalRequests,\n    percentageLoaded: 0,\n    loading: false,\n    errors: [],\n    values: [],\n  };\n}\n\n/**\n * A reducing function which takes the supplied `ThrottledProgress` and applies a new value to it\n */\nfunction updateThrottledProgress<TData>(\n  currentProgress: ThrottledProgress<TData>,\n  newData: AsyncState<TData>\n): ThrottledProgress<TData> {\n  const errors = newData.error\n    ? [...currentProgress.errors, newData.error]\n    : currentProgress.errors;\n\n  const values = newData.value\n    ? [...currentProgress.values, newData.value]\n    : currentProgress.values;\n\n  const percentageLoaded =\n    currentProgress.totalRequests === 0\n      ? 0\n      : Math.round(\n          ((errors.length + values.length) / currentProgress.totalRequests) * 100\n        );\n\n  const loading =\n    currentProgress.totalRequests === 0\n      ? false\n      : errors.length + values.length < currentProgress.totalRequests;\n\n  return {\n    totalRequests: currentProgress.totalRequests,\n    loading,\n    percentageLoaded,\n    errors,\n    values,\n  };\n}\n\ntype ThrottleActions<TValue> =\n  | {\n      type: "initialise";\n      totalRequests: number;\n    }\n  | {\n      type: "requestSuccess";\n      value: TValue;\n    }\n  | {\n      type: "requestFailed";\n      error: Error;\n    };\n\n/**\n * Create a ThrottleRequests and an updater\n */\nexport function useThrottleRequests<TValue>() {\n  function reducer(\n    throttledProgressAndState: ThrottledProgress<TValue>,\n    action: ThrottleActions<TValue>\n  ): ThrottledProgress<TValue> {\n    switch (action.type) {\n      case "initialise":\n        return createThrottledProgress(action.totalRequests);\n\n      case "requestSuccess":\n        return updateThrottledProgress(throttledProgressAndState, {\n          loading: false,\n          value: action.value,\n        });\n\n      case "requestFailed":\n        return updateThrottledProgress(throttledProgressAndState, {\n          loading: false,\n          error: action.error,\n        });\n    }\n  }\n\n  const [throttle, dispatch] = useReducer(\n    reducer,\n    createThrottledProgress<TValue>(/** totalRequests */ 0)\n  );\n\n  const updateThrottle = useMemo(() => {\n    /**\n     * Update the throttle with a successful request\n     * @param values from request\n     */\n    function requestSucceededWithData(value: TValue) {\n      return dispatch({\n        type: "requestSuccess",\n        value,\n      });\n    }\n\n    /**\n     * Update the throttle upon a failed request with an error message\n     * @param error error\n     */\n    function requestFailedWithError(error: Error) {\n      return dispatch({\n        type: "requestFailed",\n        error,\n      });\n    }\n\n    /**\n     * Given an array of requestsToMake and a limit on the number of max parallel requests\n     * queue up those requests and start firing them\n     * - based upon https://stackoverflow.com/a/48007240/761388\n     *\n     * @param requestsToMake\n     * @param maxParallelRequests the maximum number of requests to make - defaults to 6\n     */\n    function queueRequests(\n      requestsToMake: RequestToMake[],\n      maxParallelRequests = 6\n    ) {\n      dispatch({\n        type: "initialise",\n        totalRequests: requestsToMake.length,\n      });\n\n      return throttleRequests(requestsToMake, maxParallelRequests);\n    }\n\n    return {\n      queueRequests,\n      requestSucceededWithData,\n      requestFailedWithError,\n    };\n  }, [dispatch]);\n\n  return {\n    throttle,\n    updateThrottle,\n  };\n}\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useThrottleRequests")," hook returns 2 properties:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"throttle")," ","-"," a ",Object(a.b)("inlineCode",{parentName:"p"},"ThrottledProgress&lt;TData&gt;")," that contains the following data:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"totalRequests")," ","-"," the number of requests that will be made")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"errors")," ","-"," the errors that came from failed requests")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"values")," ","-"," the responses that came from successful requests")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"percentageLoaded")," ","-"," a value between 0 and 100 which represents the percentage of requests that have been completed (whether successfully or not)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"loading")," ","-"," whether the throttle is currently processing requests")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"updateThrottle")," ","-"," an object which exposes 3 functions:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"queueRequests")," ","-"," the function to which you pass the requests that should be queued and executed in a throttled fashion")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"requestSucceededWithData")," ","-"," the function which is called if a request succeeds to provide the data")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"requestFailedWithError")," ","-"," the function which is called if a request fails to provide the error"))))),Object(a.b)("p",null,"That's a lot of words to describe our ",Object(a.b)("inlineCode",{parentName:"p"},"useThrottleRequests")," hook. Let's look at what it looks like by migrating our ",Object(a.b)("inlineCode",{parentName:"p"},"use10_000Requests")," hook to (no pun intended) use it. Here's a new implementation of ",Object(a.b)("inlineCode",{parentName:"p"},"App.tsx"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useAsync } from "react-use";\nimport { useThrottleRequests } from "./useThrottleRequests";\nimport "./App.css";\n\nfunction use10_000Requests(startedAt: string) {\n  const { throttle, updateThrottle } = useThrottleRequests();\n  const [progressMessage, setProgressMessage] = useState("not started");\n\n  useAsync(async() => {\n      if (!startedAt) return;\n\n      setProgressMessage("preparing");\n\n      const requestsToMake = Array.from(Array(10_000)).map(\n        (_, index) => async () => {\n          try {\n            setProgressMessage(`loading ${index}...`);\n\n            const response = await fetch(\n              `/manifest.json?querystringValueToPreventCaching=${startedAt}_request-${index}`\n            );\n            const json = await response.json();\n\n            updateThrottle.requestSucceededWithData(json);\n          } catch (error) {\n            console.error(`failed to load ${index}`, error);\n            updateThrottle.requestFailedWithError(error);\n          }\n        }\n      );\n\n      await updateThrottle.queueRequests(requestsToMake);\n\n  }, [startedAt, updateThrottle, setProgressMessage]);\n\n  return { throttle, progressMessage };\n}\n\nfunction App() {\n  const [startedAt, setStartedAt] = useState("");\n\n  const { progressMessage, throttle } = use10_000Requests(startedAt);\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>The HTTP request machine</h1>\n        <button\n          className="App-button"\n          onClick={(_) => setStartedAt(new Date().toISOString())}\n        >\n          Make 10,000 requests\n        </button>\n        {throttle.loading && <div>{progressMessage}</div>}\n        {throttle.values.length > 0 && (\n          <div className="App-results">\n            {throttle.values.length} requests completed successfully\n          </div>\n        )}\n        {throttle.errors.length > 0 && (\n          <div className="App-results">\n            {throttle.errors.length} requests errored\n          </div>\n        )}\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),Object(a.b)("p",null,"Looking at the new ",Object(a.b)("inlineCode",{parentName:"p"},"use10_000Requests")," hook, there's a few subtle differences to our prior implementation. First of all, we're now exposing the ",Object(a.b)("inlineCode",{parentName:"p"},"throttle"),"; a ",Object(a.b)("inlineCode",{parentName:"p"},"ThrottleProgress&lt;TData&gt;"),". Our updated hook also exposes a ",Object(a.b)("inlineCode",{parentName:"p"},"progressMessage")," which is a simple ",Object(a.b)("inlineCode",{parentName:"p"},"string")," stored with ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," that we update as our throttle runs. In truth the information being surfaced here isn't that interesting. The ",Object(a.b)("inlineCode",{parentName:"p"},"progressMessage")," is in place just to illustrate that you could capture some data from your requests as they complete for display purposes; a running total for instance."),Object(a.b)("p",null,"So, how does our new hook approach perform?"),Object(a.b)("p",null,Object(a.b)("img",{src:n(1174).default})),Object(a.b)("p",null,"Very well indeed! Please note that the above GIF has again been edited for brevity. If we look back at the problems we faced with the prior approach, how do we compare?"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("del",{parentName:"li"},"the browser becoming unresponsive")," ","-"," the browser remains responsive."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("del",{parentName:"li"},"failing HTTP requests due to insufficient resources")," ","-"," the browser does not experience failing HTTP requests."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("del",{parentName:"li"},"no information displayable to the user around progress")," ","-"," details of progress are displayed to the user throughout.")),Object(a.b)("p",null,"Tremendous!"),Object(a.b)("h2",{id:"what-shall-we-build"},"What shall we build?"),Object(a.b)("p",null,"Our current example is definitely contrived. Let's try and apply our ",Object(a.b)("inlineCode",{parentName:"p"},"useThrottleRequests")," hook to a more realistic scenario. We're going to build an application which, given a repo on GitHub, lists all the contributors blogs. (You can specify a blog URL on your GitHub profile; many people use this to specify their Twitter profile.)"),Object(a.b)("p",null,"We can build this thanks to the excellent ",Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/rest"},"GitHub REST API"),". It exposes two endpoints of interest given our goal."),Object(a.b)("h3",{id:"1-list-repository-contributors"},"1","."," List repository contributors"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-contributors"},"List repository contributors")," lists contributors to the specified repository at this URL: ",Object(a.b)("inlineCode",{parentName:"p"},"GET https://api.github.com/repos/{owner}/{repo}/contributors"),". The response is an array of objects, crucially featuring a ",Object(a.b)("inlineCode",{parentName:"p"},"url")," property that points to the user in question's API endpoint:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'[\n  // ...\n  {\n    // ...\n    "url": "https://api.github.com/users/octocat",\n    // ...\n  },\n  // ...\n]\n')),Object(a.b)("h3",{id:"2-get-a-user"},"2","."," Get a user"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/users#get-a-user"},"Get a user")," is the API that the ",Object(a.b)("inlineCode",{parentName:"p"},"url")," property above is referring to. When called it returns an object representing the publicly available information about a user:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'{\n  // ...\n  "name": "The Octocat",\n  // ...\n  "blog": "https://github.blog",\n  // ...\n}\n')),Object(a.b)("h2",{id:"blogging-devs-v10"},"Blogging devs v1.0"),Object(a.b)("p",null,"We're now ready to build our blogging devs app; let's replace the existing ",Object(a.b)("inlineCode",{parentName:"p"},"App.tsx")," with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import React, { useCallback, useMemo, useState } from "react";\nimport { useAsync } from "react-use";\nimport { useThrottleRequests } from "./useThrottleRequests";\nimport "./App.css";\n\ntype GitHubUser = { name: string; blog?: string };\n\nfunction timeout(ms: number) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\nfunction useContributors(contributorsUrlToLoad: string) {\n  const { throttle, updateThrottle } = useThrottleRequests<GitHubUser>();\n  const [progressMessage, setProgressMessage] = useState("");\n\n  useAsync(async () => {\n    if (!contributorsUrlToLoad) return;\n\n    setProgressMessage("loading contributors");\n\n    // load contributors from GitHub\n    const contributorsResponse = await fetch(contributorsUrlToLoad);\n    const contributors: { url: string }[] = await contributorsResponse.json();\n\n    setProgressMessage(`loading ${contributors.length} contributors...`);\n\n    // For each entry in result, retrieve the given user from GitHub\n    const requestsToMake = contributors.map(({ url }, index) => async () => {\n      try {\n        setProgressMessage(\n          `loading ${index} / ${contributors.length}: ${url}...`\n        );\n\n        const response = await fetch(url);\n        const json: GitHubUser = await response.json();\n\n        // wait for 1 second before completing the request\n        // - makes for better demos\n        await timeout(1000);\n\n        updateThrottle.requestSucceededWithData(json);\n      } catch (error) {\n        console.error(`failed to load ${url}`, error);\n        updateThrottle.requestFailedWithError(error);\n      }\n    });\n\n    await updateThrottle.queueRequests(requestsToMake);\n\n    setProgressMessage("");\n  }, [contributorsUrlToLoad, updateThrottle, setProgressMessage]);\n\n  return { throttle, progressMessage };\n}\n\nfunction App() {\n  // The owner and repo to query; we\'re going to default\n  // to using DefinitelyTyped as an example repo as it\n  // is one of the most contributed to repos on GitHub\n  const [owner, setOwner] = useState("DefinitelyTyped");\n  const [repo, setRepo] = useState("DefinitelyTyped");\n  const handleOwnerChange = useCallback(\n    (event: React.ChangeEvent<HTMLInputElement>) =>\n      setOwner(event.target.value),\n    [setOwner]\n  );\n  const handleRepoChange = useCallback(\n    (event: React.ChangeEvent<HTMLInputElement>) => setRepo(event.target.value),\n    [setRepo]\n  );\n\n  const contributorsUrl = `https://api.github.com/repos/${owner}/${repo}/contributors`;\n\n  const [contributorsUrlToLoad, setUrlToLoad] = useState("");\n  const { progressMessage, throttle } = useContributors(contributorsUrlToLoad);\n\n  const bloggers = useMemo(\n    () => throttle.values.filter((contributor) => contributor.blog),\n    [throttle]\n  );\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>Blogging devs</h1>\n\n        <p>\n          Show me the{" "}\n          <a\n            className="App-link"\n            href={contributorsUrl}\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n            contributors for {owner}/{repo}\n          </a>{" "}\n          who have blogs.\n        </p>\n\n        <div className="App-labelinput">\n          <label htmlFor="owner">GitHub Owner</label>\n          <input\n            id="owner"\n            type="text"\n            value={owner}\n            onChange={handleOwnerChange}\n          />\n          <label htmlFor="repo">GitHub Repo</label>\n          <input\n            id="repo"\n            type="text"\n            value={repo}\n            onChange={handleRepoChange}\n          />\n        </div>\n\n        <button\n          className="App-button"\n          onClick={(e) => setUrlToLoad(contributorsUrl)}\n        >\n          Load bloggers from GitHub\n        </button>\n\n        {progressMessage && (\n          <div className="App-progress">{progressMessage}</div>\n        )}\n\n        {throttle.percentageLoaded > 0 && (\n          <>\n            <h3>Behold {bloggers.length} bloggers:</h3>\n            <div className="App-results">\n              {bloggers.map((blogger) => (\n                <div key={blogger.name}>\n                  <div>{blogger.name}</div>\n                  <a\n                    className="App-link"\n                    href={blogger.blog}\n                    target="_blank"\n                    rel="noopener noreferrer"\n                  >\n                    {blogger.blog}\n                  </a>\n                </div>\n              ))}\n            </div>\n          </>\n        )}\n\n        {throttle.errors.length > 0 && (\n          <div className="App-results">\n            {throttle.errors.length} requests errored\n          </div>\n        )}\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),Object(a.b)("p",null,"The application gives users the opportunity to enter the organisation and repository of a GitHub project. Then, when the button is clicked, it:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"loads the contributors"),Object(a.b)("li",{parentName:"ul"},"for each contributor it loads the individual user (separate HTTP request for each)"),Object(a.b)("li",{parentName:"ul"},"as it loads it communicates how far through the loading progress it has got"),Object(a.b)("li",{parentName:"ul"},"as users are loaded, it renders a tile for each user with a listed blog")),Object(a.b)("p",null,"Just to make the demo a little clearer we've artificially slowed the duration of each request by a second. What does it look like when you put it together? Well like this:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(1175).default})),Object(a.b)("p",null,"We have built a React Hook which allows us to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"gradually load data"),Object(a.b)("li",{parentName:"ul"},"without blocking the UI of the browser"),Object(a.b)("li",{parentName:"ul"},"and which provides progress data to keep users informed.")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://blog.logrocket.com/throttling-data-requests-with-react-hooks/"},"This post was originally published on LogRocket.")))}c.isMDXComponent=!0},1160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=s.a.createContext({}),c=function(e){var t=s.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return s.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||h[b]||a;return n?s.a.createElement(d,i(i({ref:t},u),{},{components:n})):s.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1173:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/i-want-it-all-e176d613679f50f13cd2400670adb53c.gif"},1174:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/i-want-it-all-with-hook-ca559fe74b7320ff0abffcd4f2fd88b9.gif"},1175:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/blogging-devs-13c9f0dd7dd8023b0d2130037a41d27d.gif"}}]);
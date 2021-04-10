(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{1189:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),m=o,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return t?r.a.createElement(d,l(l({ref:n},c),{},{components:t})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(4),r=t(10),a=(t(0),t(1189)),i={title:"Web Workers, comlink, TypeScript and React",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},l={permalink:"/2020/02/21/web-workers-comlink-typescript-and-react",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-02-21-web-workers-comlink-typescript-and-react.md",source:"@site/blog/2020-02-21-web-workers-comlink-typescript-and-react.md",description:"JavaScript is famously single threaded. However, if you're developing for the web, you may well know that this is not quite accurate. There are Web Workers:",date:"2020-02-21T00:00:00.000Z",formattedDate:"February 21, 2020",tags:[],title:"Web Workers, comlink, TypeScript and React",readingTime:9.69,truncated:!1,prevItem:{title:"Dual boot authentication with ASP.Net Core",permalink:"/2020/03/22/dual-boot-authentication-with-aspnetcore"},nextItem:{title:"From create-react-app to PWA",permalink:"/2020/01/31/from-create-react-app-to-pwa"}},s=[{value:"A use case for a Web Worker",id:"a-use-case-for-a-web-worker",children:[]},{value:"Hello <code>worker-plugin</code> and <code>comlink</code>",id:"hello-worker-plugin-and-comlink",children:[]},{value:"Workerize our slow process",id:"workerize-our-slow-process",children:[]},{value:"Using Web Workers in React",id:"using-web-workers-in-react",children:[]}],c={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"JavaScript is famously single threaded. However, if you're developing for the web, you may well know that this is not quite accurate. There are ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"},Object(a.b)("inlineCode",{parentName:"a"},"Web Workers")),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A worker is an object created using a constructor (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"Worker()"),") that runs a named JavaScript file \u2014 this file contains the code that will run in the worker thread; workers run in another global context that is different from the current window.")),Object(a.b)("p",null,"Given that there is a way to use other threads for background processing, why doesn't this happen all the time? Well there's a number of reasons; not the least of which is the ceremony involved in interacting with Web Workers. Consider the following example that illustrates moving a calculation into a worker:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// main.js\nfunction add2NumbersUsingWebWorker() {\n    const myWorker = new Worker(\"worker.js\");\n\n    myWorker.postMessage([42, 7]);\n    console.log('Message posted to worker');\n\n    myWorker.onmessage = function(e) {\n        console.log('Message received from worker', e.data);\n    }\n}\n\nadd2NumbersUsingWebWorker();\n\n// worker.js\nonmessage = function(e) {\n  console.log('Worker: Message received from main script');\n  const result = e.data[0] * e.data[1];\n  if (isNaN(result)) {\n    postMessage('Please write two numbers');\n  } else {\n    const workerResult = 'Result: ' + result;\n    console.log('Worker: Posting message back to main script');\n    postMessage(workerResult);\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"This is not simple.")," It's hard to understand what's happening. Also, this approach only supports a single method call. I'd much rather write something that looked more like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// main.js\nfunction add2NumbersUsingWebWorker() {\n    const myWorker = new Worker(\"worker.js\");\n\n    const total = myWorker.add2Numbers([42, 7]);\n    console.log('Message received from worker', total);\n}\n\nadd2NumbersUsingWebWorker();\n\n// worker.js\nexport function add2Numbers(firstNumber, secondNumber) {\n  const result = firstNumber + secondNumber;\n  return (isNaN(result))\n    ? 'Please write two numbers'\n    : 'Result: ' + result;\n}\n")),Object(a.b)("p",null,"There's a way to do this using a library made by Google called ",Object(a.b)("a",{parentName:"p",href:"https://github.com/GoogleChromeLabs/comlink"},"comlink"),". This post will demonstrate how we can use this. We'll use TypeScript and webpack. We'll also examine how to integrate this approach into a React app."),Object(a.b)("h2",{id:"a-use-case-for-a-web-worker"},"A use case for a Web Worker"),Object(a.b)("p",null,"Let's make ourselves a TypeScript web app. We're going to use ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app")," for this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app webworkers-comlink-typescript-react --template typescript\n")),Object(a.b)("p",null,"Create a ",Object(a.b)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething.ts")," file alongside ",Object(a.b)("inlineCode",{parentName:"p"},"index.tsx"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"export function takeALongTimeToDoSomething() {\n    console.log('Start our long running job...');\n    const seconds = 5;\n    const start = new Date().getTime();\n    const delay = seconds * 1000;\n\n    while (true) {\n        if ((new Date().getTime() - start) > delay) {\n            break;\n        }\n    }\n    console.log('Finished our long running job');\n}\n")),Object(a.b)("p",null,"To ",Object(a.b)("inlineCode",{parentName:"p"},"index.tsx")," add this code:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { takeALongTimeToDoSomething } from './takeALongTimeToDoSomething';\n\n// ...\n\nconsole.log('Do something');\ntakeALongTimeToDoSomething();\nconsole.log('Do another thing');\n")),Object(a.b)("p",null,"When our application runs we see this behaviour:"),Object(a.b)("p",null," ",Object(a.b)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-1NFBdptu-Mo/XjUqgCVVisI/AAAAAAAATa8/eYCZ_5XcmZoTAlykNW4Lp4m5uhXnr7KogCPcBGAYYCw/s640/blocking.gif",alt:null})),Object(a.b)("p",null,"The app starts and logs ",Object(a.b)("inlineCode",{parentName:"p"},"Do something")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Start our long running job...")," to the console. It then blocks the UI until the ",Object(a.b)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething")," function has completed running. During this time the screen is empty and unresponsive. This is a poor user experience."),Object(a.b)("h2",{id:"hello-worker-plugin-and-comlink"},"Hello ",Object(a.b)("inlineCode",{parentName:"h2"},"worker-plugin")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"comlink")),Object(a.b)("p",null,"To start using comlink we're going to need to eject our ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app")," application. The way ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app")," works is by giving you a setup that handles a high percentage of the needs for a typical web app. When you encounter an unsupported use case, you can run the ",Object(a.b)("inlineCode",{parentName:"p"},"yarn eject")," command to get direct access to the configuration of your setup."),Object(a.b)("p",null,"Web Workers are not that commonly used in day to day development at present. Consequently there isn't yet a \"plug'n'play\" solution for workers supported by ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app"),". There's a number of potential ways to support this use case and you can track the various discussions happening against ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app")," that covers this. For now, let's eject with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn eject\n")),Object(a.b)("p",null,"Then let's install the packages we're going to be using:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/GoogleChromeLabs/worker-plugin"},Object(a.b)("inlineCode",{parentName:"a"},"worker-plugin"))," ","-"," this webpack plugin automatically compiles modules loaded in Web Workers"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"comlink")," ","-"," this library provides the RPC-like experience that we want from our workers")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn add comlink worker-plugin\n")),Object(a.b)("p",null,"We now need to tweak our ",Object(a.b)("inlineCode",{parentName:"p"},"webpack.config.js")," to use the ",Object(a.b)("inlineCode",{parentName:"p"},"worker-plugin"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const WorkerPlugin = require('worker-plugin');\n\n// ....\n\n    plugins: [\n      new WorkerPlugin(),\n\n// ....\n")),Object(a.b)("p",null,"Do note that there's a number of ",Object(a.b)("inlineCode",{parentName:"p"},"plugins")," statements in the ",Object(a.b)("inlineCode",{parentName:"p"},"webpack.config.js"),". You want the top level one; look out for the ",Object(a.b)("inlineCode",{parentName:"p"},"new HtmlWebpackPlugin")," statement and place your ",Object(a.b)("inlineCode",{parentName:"p"},"new WorkerPlugin(),")," before that."),Object(a.b)("h2",{id:"workerize-our-slow-process"},"Workerize our slow process"),Object(a.b)("p",null,"Now we're ready to take our long running process and move it into a worker. Inside the ",Object(a.b)("inlineCode",{parentName:"p"},"src")," folder, create a new folder called ",Object(a.b)("inlineCode",{parentName:"p"},"my-first-worker"),". Our worker is going to live in here. Into this folder we're going to add a ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n  "compilerOptions": {\n    "strict": true,\n    "target": "esnext",\n    "module": "esnext",\n    "lib": [\n      "webworker",\n      "esnext"\n    ],\n    "moduleResolution": "node",\n    "noUnusedLocals": true,\n    "sourceMap": true,\n    "allowJs": false,\n    "baseUrl": "."\n  }\n}\n')),Object(a.b)("p",null,"This file exists to tell TypeScript that this is a Web Worker. Do note the ",Object(a.b)("inlineCode",{parentName:"p"},'"lib": [ "webworker"')," usage which does exactly that."),Object(a.b)("p",null,"Alongside the ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file, let's create an ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts")," file. This will be our worker:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { expose } from 'comlink';\nimport { takeALongTimeToDoSomething } from '../takeALongTimeToDoSomething';\n\nconst exports = {\n    takeALongTimeToDoSomething\n};\nexport type MyFirstWorker = typeof exports;\n\nexpose(exports);\n")),Object(a.b)("p",null,"There's a number of things happening in our small worker file. Let's go through this statement by statement:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { expose } from 'comlink';\n")),Object(a.b)("p",null,"Here we're importing the ",Object(a.b)("inlineCode",{parentName:"p"},"expose")," method from comlink. Comlink\u2019s goal is to make ",Object(a.b)("em",{parentName:"p"},"expose"),"d values from one thread available in the other. The ",Object(a.b)("inlineCode",{parentName:"p"},"expose")," method can be viewed as the comlink equivalent of ",Object(a.b)("inlineCode",{parentName:"p"},"export"),". It is used to export the RPC style signature of our worker. We'll see it's use later."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { takeALongTimeToDoSomething } from '../takeALongTimeToDoSomething';\n")),Object(a.b)("p",null,"Here we're going to import our ",Object(a.b)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething")," function that we wrote previously, so we can use it in our worker."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const exports = {\n    takeALongTimeToDoSomething\n};\n")),Object(a.b)("p",null,"Here we're creating the public facing API that we're going to expose."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"export type MyFirstWorker = typeof exports;\n")),Object(a.b)("p",null,"We're going to want our worker to be strongly typed. This line creates a type called ",Object(a.b)("inlineCode",{parentName:"p"},"MyFirstWorker")," which is derived from our ",Object(a.b)("inlineCode",{parentName:"p"},"exports")," object literal."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"expose(exports);\n")),Object(a.b)("p",null,"Finally we expose the ",Object(a.b)("inlineCode",{parentName:"p"},"exports")," using comlink. We're done; that's our worker finished. Now let's consume it. Let's change our ",Object(a.b)("inlineCode",{parentName:"p"},"index.tsx")," file to use it. Replace our import of ",Object(a.b)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { takeALongTimeToDoSomething } from './takeALongTimeToDoSomething';\n")),Object(a.b)("p",null,"With an import of ",Object(a.b)("inlineCode",{parentName:"p"},"wrap")," from comlink that creates a local ",Object(a.b)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething")," function that wraps interacting with our worker:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { wrap } from 'comlink';\n\nfunction takeALongTimeToDoSomething() {\n    const worker = new Worker('./my-first-worker', { name: 'my-first-worker', type: 'module' });\n    const workerApi = wrap<import('./my-first-worker').MyFirstWorker>(worker);\n    workerApi.takeALongTimeToDoSomething();    \n}\n")),Object(a.b)("p",null,"Now we're ready to demo our application using our function offloaded into a Web Worker. It now behaves like this:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-UDxm0xHbJpY/XjUrg4BwgTI/AAAAAAAATbE/F2jZ2F4nI9c05puL6zP8n6VYvrPsEOjIQCLcBGAsYHQ/s640/non-blocking.gif",alt:null})),Object(a.b)("p",null,"There's a number of exciting things to note here:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The application is now non-blocking. Our long running function is now not preventing the UI from updating"),Object(a.b)("li",{parentName:"ol"},"The functionality is lazily loaded via a ",Object(a.b)("inlineCode",{parentName:"li"},"my-first-worker.chunk.worker.js")," that has been created by the ",Object(a.b)("inlineCode",{parentName:"li"},"worker-plugin")," and ",Object(a.b)("inlineCode",{parentName:"li"},"comlink"),".")),Object(a.b)("h2",{id:"using-web-workers-in-react"},"Using Web Workers in React"),Object(a.b)("p",null,"The example we've showed so far demostrates how you could use Web Workers and why you might want to. However, it's a far cry from a real world use case. Let's take the next step and plug our Web Worker usage into our React application. What would that look like? Let's find out."),Object(a.b)("p",null,"We'll return ",Object(a.b)("inlineCode",{parentName:"p"},"index.tsx")," back to it's initial state. Then we'll make a simple adder function that takes some values and returns their total. To our ",Object(a.b)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething.ts")," module let's add:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"export function takeALongTimeToAddTwoNumbers(number1: number, number2: number) {\n    console.log('Start to add...');\n    const seconds = 5;\n    const start = new Date().getTime();\n    const delay = seconds * 1000;\n    while (true) {\n        if ((new Date().getTime() - start) > delay) {\n            break;\n        }\n    }\n    const total = number1 + number2;\n    console.log('Finished adding');\n    return total;\n}\n")),Object(a.b)("p",null,"Let's start using our long running calculator in a React component. We'll update our ",Object(a.b)("inlineCode",{parentName:"p"},"App.tsx")," to use this function and create a simple adder component:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport "./App.css";\nimport { takeALongTimeToAddTwoNumbers } from "./takeALongTimeToDoSomething";\n\nconst App: React.FC = () => {\n  const [number1, setNumber1] = useState(1);\n  const [number2, setNumber2] = useState(2);\n\n  const total = takeALongTimeToAddTwoNumbers(number1, number2);\n\n  return (\n    <div className="App">\n      <h1>Web Workers in action!</h1>\n\n      <div>\n        <label>Number to add: </label>\n        <input\n          type="number"\n          onChange={e => setNumber1(parseInt(e.target.value))}\n          value={number1}\n        />\n      </div>\n      <div>\n        <label>Number to add: </label>\n        <input\n          type="number"\n          onChange={e => setNumber2(parseInt(e.target.value))}\n          value={number2}\n        />\n      </div>\n      <h2>Total: {total}</h2>\n    </div>\n  );\n};\n\nexport default App;\n')),Object(a.b)("p",null,"When you try it out you'll notice that entering a single digit locks the UI for 5 seconds whilst it adds the numbers. From the moment the cursor stops blinking to the moment the screen updates the UI is non-responsive:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-ngQ_wdVxKYw/XjUr33bOiWI/AAAAAAAATbM/kkMzEWKCu8w0NrD6CZeyNRW8CYQ78eRzgCLcBGAsYHQ/s640/blocking-react.gif",alt:null})),Object(a.b)("p",null,"So far, so classic. Let's Web Workerify this!"),Object(a.b)("p",null,"We'll update our ",Object(a.b)("inlineCode",{parentName:"p"},"my-first-worker/index.ts")," to import this new function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { expose } from "comlink";\nimport {\n  takeALongTimeToDoSomething,\n  takeALongTimeToAddTwoNumbers\n} from "../takeALongTimeToDoSomething";\n\nconst exports = {\n  takeALongTimeToDoSomething,\n  takeALongTimeToAddTwoNumbers\n};\nexport type MyFirstWorker = typeof exports;\n\nexpose(exports);\n')),Object(a.b)("p",null,"Alongside our ",Object(a.b)("inlineCode",{parentName:"p"},"App.tsx")," file let's create an ",Object(a.b)("inlineCode",{parentName:"p"},"App.hooks.ts")," file."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { wrap, releaseProxy } from "comlink";\nimport { useEffect, useState, useMemo } from "react";\n\n/**\n * Our hook that performs the calculation on the worker\n */\nexport function useTakeALongTimeToAddTwoNumbers(\n  number1: number,\n  number2: number\n) {\n  // We\'ll want to expose a wrapping object so we know when a calculation is in progress\n  const [data, setData] = useState({\n    isCalculating: false,\n    total: undefined as number | undefined\n  });\n\n  // acquire our worker\n  const { workerApi } = useWorker();\n\n  useEffect(() => {\n    // We\'re starting the calculation here\n    setData({ isCalculating: true, total: undefined });\n\n    workerApi\n      .takeALongTimeToAddTwoNumbers(number1, number2)\n      .then(total => setData({ isCalculating: false, total })); // We receive the result here\n  }, [workerApi, setData, number1, number2]);\n\n  return data;\n}\n\nfunction useWorker() {\n  // memoise a worker so it can be reused; create one worker up front\n  // and then reuse it subsequently; no creating new workers each time\n  const workerApiAndCleanup = useMemo(() => makeWorkerApiAndCleanup(), []);\n\n  useEffect(() => {\n    const { cleanup } = workerApiAndCleanup;\n\n    // cleanup our worker when we\'re done with it\n    return () => {\n      cleanup();\n    };\n  }, [workerApiAndCleanup]);\n\n  return workerApiAndCleanup;\n}\n\n/**\n * Creates a worker, a cleanup function and returns it\n */\nfunction makeWorkerApiAndCleanup() {\n  // Here we create our worker and wrap it with comlink so we can interact with it\n  const worker = new Worker("./my-first-worker", {\n    name: "my-first-worker",\n    type: "module"\n  });\n  const workerApi = wrap<import("./my-first-worker").MyFirstWorker>(worker);\n\n  // A cleanup function that releases the comlink proxy and terminates the worker\n  const cleanup = () => {\n    workerApi[releaseProxy]();\n    worker.terminate();\n  };\n\n  const workerApiAndCleanup = { workerApi, cleanup };\n\n  return workerApiAndCleanup;\n}\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useWorker")," and ",Object(a.b)("inlineCode",{parentName:"p"},"makeWorkerApiAndCleanup")," functions make up the basis of a shareable worker hooks approach. It would take very little work to paramaterise them so this could be used elsewhere. That's outside the scope of this post but would be extremely straightforward to accomplish."),Object(a.b)("p",null,"Time to test! We'll change our ",Object(a.b)("inlineCode",{parentName:"p"},"App.tsx")," to use the new ",Object(a.b)("inlineCode",{parentName:"p"},"useTakeALongTimeToAddTwoNumbers")," hook:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport "./App.css";\nimport { useTakeALongTimeToAddTwoNumbers } from "./App.hooks";\n\nconst App: React.FC = () => {\n  const [number1, setNumber1] = useState(1);\n  const [number2, setNumber2] = useState(2);\n\n  const total = useTakeALongTimeToAddTwoNumbers(number1, number2);\n\n  return (\n    <div className="App">\n      <h1>Web Workers in action!</h1>\n\n      <div>\n        <label>Number to add: </label>\n        <input\n          type="number"\n          onChange={e => setNumber1(parseInt(e.target.value))}\n          value={number1}\n        />\n      </div>\n      <div>\n        <label>Number to add: </label>\n        <input\n          type="number"\n          onChange={e => setNumber2(parseInt(e.target.value))}\n          value={number2}\n        />\n      </div>\n      <h2>\n        Total:{" "}\n        {total.isCalculating ? (\n          <em>Calculating...</em>\n        ) : (\n          <strong>{total.total}</strong>\n        )}\n      </h2>\n    </div>\n  );\n};\n\nexport default App;\n')),Object(a.b)("p",null,"Now our calculation takes place off the main thread and the UI is no longer blocked!"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-WOTMRZzhaVk/XjUsJTMXBxI/AAAAAAAATbU/6WXtrpk66mY6aFyxBcgvBktQScq_AhyZwCLcBGAsYHQ/s640/non-blocking-react.gif",alt:null})),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://blog.logrocket.com/integrating-web-workers-in-a-react-app-with-comlink/"},"This post was originally published on LogRocket.")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/webworkers-comlink-typescript-react"},"The source code for this project can be found here.")))}p.isMDXComponent=!0}}]);
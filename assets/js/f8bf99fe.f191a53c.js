(window.webpackJsonp=window.webpackJsonp||[]).push([[1093],{1187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(4),o=n(10),i=(n(0),n(1211)),r={title:"Offline storage in a PWA",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},l={permalink:"/2020/03/29/offline-storage-in-pwa",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-03-29-offline-storage-in-pwa.md",source:"@site/blog/2020-03-29-offline-storage-in-pwa.md",title:"Offline storage in a PWA",description:"When you are building any kind of application it's typical to want to store information which persists beyond a single user session. Sometimes that will be information that you'll want to live in some kind of centralised database, but not always.",date:"2020-03-29T00:00:00.000Z",formattedDate:"March 29, 2020",tags:[],readingTime:9.03,truncated:!1,prevItem:{title:"Up to the clouds!",permalink:"/2020/04/04/up-to-clouds"},nextItem:{title:"Dual boot authentication with ASP.Net Core",permalink:"/2020/03/22/dual-boot-authentication-with-aspnetcore"}},s=[{value:"The problem with <code>localStorage</code>",id:"the-problem-with-localstorage",children:[]},{value:"IndexedDB to the rescue?",id:"indexeddb-to-the-rescue",children:[]},{value:"IDB-Keyval to the rescue!",id:"idb-keyval-to-the-rescue",children:[]},{value:"Simple usage",id:"simple-usage",children:[]},{value:"Usage in React",id:"usage-in-react",children:[]},{value:"Usage as a React hook",id:"usage-as-a-react-hook",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you are building any kind of application it's typical to want to store information which persists beyond a single user session. Sometimes that will be information that you'll want to live in some kind of centralised database, but not always."),Object(i.b)("p",null,"Also, you may want that data to still be available if your user is offline. Even if they can't connect to the network, the user may still be able to use the app to do meaningful tasks; but the app will likely require a certain amount of data to drive that."),Object(i.b)("p",null,"How can we achieve this in the context of a PWA?"),Object(i.b)("h2",{id:"the-problem-with-localstorage"},"The problem with ",Object(i.b)("inlineCode",{parentName:"h2"},"localStorage")),Object(i.b)("p",null,"If you were building a classic web app you'd probably be reaching for ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},Object(i.b)("inlineCode",{parentName:"a"},"Window.localStorage"))," at this point. ",Object(i.b)("inlineCode",{parentName:"p"},"Window.localStorage")," is a long existing API that stores data beyond a single session. It has a simple API and is very easy to use. However, it has a couple of problems:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Window.localStorage")," is synchronous. Not a tremendous problem for every app, but if you're building something that has significant performance needs then this could become an issue."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Window.localStorage")," cannot be used in the context of a ",Object(i.b)("inlineCode",{parentName:"li"},"Worker")," or a ",Object(i.b)("inlineCode",{parentName:"li"},"ServiceWorker"),". The APIs are not available there."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Window.localStorage")," stores only ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"s. Given ",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},Object(i.b)("inlineCode",{parentName:"a"},"JSON.stringify"))," and ",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},Object(i.b)("inlineCode",{parentName:"a"},"JSON.parse"))," that's not a big problem. But it's an inconvenience.")),Object(i.b)("p",null,"The second point here is the significant one. If we've a need to access our offline data in the context of a ",Object(i.b)("inlineCode",{parentName:"p"},"ServiceWorker")," (and if you're offline you'll be using a ",Object(i.b)("inlineCode",{parentName:"p"},"ServiceWorker"),") then what do you do?"),Object(i.b)("h2",{id:"indexeddb-to-the-rescue"},"IndexedDB to the rescue?"),Object(i.b)("p",null,"Fortunately, ",Object(i.b)("inlineCode",{parentName:"p"},"localStorage")," is not the only game in town. There's alternative offline storage mechanism available in browsers with the curious name of ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDB"),". To quote the docs:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"IndexedDB is a transactional database system, like an SQL-based RDBMS. However, unlike SQL-based RDBMSes, which use fixed-column tables, IndexedDB is a JavaScript-based object-oriented database. IndexedDB lets you store and retrieve objects that are indexed with a key; any objects supported by the structured clone algorithm can be stored. You need to specify the database schema, open a connection to your database, and then retrieve and update data within a series of transactions.")),Object(i.b)("p",null,"It's clear that IndexedDB is ",Object(i.b)("em",{parentName:"p"},"very")," powerful. But it doesn't sound very simple. A further look at the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mdn/to-do-notifications/blob/8b3e1708598e42062b0136608b1c5fbb66520f0a/scripts/todo.js#L48"},"MDN example")," of how to interact with IndexedDB does little to remove that thought."),Object(i.b)("p",null,"We'd like to be able to access data offline; but in a simple fashion. Like we could with ",Object(i.b)("inlineCode",{parentName:"p"},"localStorage")," which has a wonderfully straightforward API. If only someone would build an astraction on top of IndexedDB to make our lives easier..."),Object(i.b)("p",null,"Someone did."),Object(i.b)("h2",{id:"idb-keyval-to-the-rescue"},"IDB-Keyval to the rescue!"),Object(i.b)("p",null,"The excellent ",Object(i.b)("a",{parentName:"p",href:"https://twitter.com/jaffathecake"},"Jake Archibald")," of Google has written ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jakearchibald/idb-keyval"},"IDB-Keyval")," which is:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A super-simple-small promise-based keyval store implemented with IndexedDB")),Object(i.b)("p",null,"The API is essentially equivalent to ",Object(i.b)("inlineCode",{parentName:"p"},"localStorage")," with a few lovely differences:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The API is promise based; all functions return a ",Object(i.b)("inlineCode",{parentName:"li"},"Promise"),"; this makes it a non-blocking API."),Object(i.b)("li",{parentName:"ol"},"The API is not restricted to ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"s as ",Object(i.b)("inlineCode",{parentName:"li"},"localStorage")," is. To quote the docs: ",Object(i.b)("em",{parentName:"li"},"this is IDB-backed, you can store anything structured-clonable (numbers, arrays, objects, dates, blobs etc)")),Object(i.b)("li",{parentName:"ol"},"Because this is abstraction built on top of IndexedDB, it can be used both in the context of a typical web app and also in a ",Object(i.b)("inlineCode",{parentName:"li"},"Worker")," or a ",Object(i.b)("inlineCode",{parentName:"li"},"ServiceWorker")," if required.")),Object(i.b)("h2",{id:"simple-usage"},"Simple usage"),Object(i.b)("p",null,"Let's take a look at what usage of ",Object(i.b)("inlineCode",{parentName:"p"},"IDB-Keyval")," might be like. For that we're going to need an application. It would be good to be able to demonstrate both simple usage and also how usage in the context of an application might look."),Object(i.b)("p",null,"Let's spin up a TypeScript React app with ",Object(i.b)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app offline-storage-in-a-pwa --template typescript\n")),Object(i.b)("p",null,"This creates us a simple app. Now let's add IDB-Keyval to it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn add idb-keyval\n")),Object(i.b)("p",null,"Then, let's update the ",Object(i.b)("inlineCode",{parentName:"p"},"index.tsx")," file to add a function that tests using IDB-Keyval:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { set, get } from 'idb-keyval';\nimport './index.css';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(<App />, document.getElementById('root'));\n\nserviceWorker.register();\n\nasync function testIDBKeyval() {\n    await set('hello', 'world');\n    const whatDoWeHave = await get('hello');\n    console.log(`When we queried idb-keyval for 'hello', we found: ${whatDoWeHave}`);\n}\n\ntestIDBKeyval();\n")),Object(i.b)("p",null,"As you can see, we've added a ",Object(i.b)("inlineCode",{parentName:"p"},"testIDBKeyval")," function which does the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Adds a value of ",Object(i.b)("inlineCode",{parentName:"li"},"'world'")," to IndexedDB using IDB-Keyval for the key of ",Object(i.b)("inlineCode",{parentName:"li"},"'hello'")),Object(i.b)("li",{parentName:"ol"},"Queries IndexedDB using IDB-Keyval for the key of ",Object(i.b)("inlineCode",{parentName:"li"},"'hello'")," and stores it in the variable ",Object(i.b)("inlineCode",{parentName:"li"},"whatDoWeHave")),Object(i.b)("li",{parentName:"ol"},"Logs out what we found.")),Object(i.b)("p",null,"You'll also note that ",Object(i.b)("inlineCode",{parentName:"p"},"testIDBKeyval")," is an ",Object(i.b)("inlineCode",{parentName:"p"},"async")," function. This is so that we can use ",Object(i.b)("inlineCode",{parentName:"p"},"await")," when we're interacting with IDB-Keyval. Given that its API is ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," based, it is ",Object(i.b)("inlineCode",{parentName:"p"},"await")," friendly. Where you're performing more than an a single asynchronous operation at a time, it's often valuable to use ",Object(i.b)("inlineCode",{parentName:"p"},"async")," / ",Object(i.b)("inlineCode",{parentName:"p"},"await")," to increase the readability of your codebase."),Object(i.b)("p",null,"What happens when we run our application with ",Object(i.b)("inlineCode",{parentName:"p"},"yarn start"),"? Let's do that and take a look at the devtools:"),Object(i.b)("p",null," ",Object(i.b)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-b9-GrL0IXaY/Xmqj4GRhKXI/AAAAAAAAT5s/ZoceUInSY5EWXeCr2LkGV9Zvea8S6-mUgCPcBGAYYCw/s640/hello_world_idb_keyval.png",alt:null})),Object(i.b)("p",null,"We successfully wrote something into IndexedDB, read it back and printed that value to the console. Amazing!"),Object(i.b)("h2",{id:"usage-in-react"},"Usage in React"),Object(i.b)("p",null,"What we've done so far is slightly abstract. It would be good to implement a real-world use case. Let's create an application which gives users the choice between using a \"Dark mode\" version of the app or not. To do that we'll replace our ",Object(i.b)("inlineCode",{parentName:"p"},"App.tsx")," with this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport "./App.css";\n\nconst sharedStyles = {\n  height: "30rem",\n  fontSize: "5rem",\n  textAlign: "center"\n} as const;\n\nfunction App() {\n  const [darkModeOn, setDarkModeOn] = useState(true)\n  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setDarkModeOn(target.checked);\n\n  const styles = {\n    ...sharedStyles,\n    ...(darkModeOn\n      ? {\n          backgroundColor: "black",\n          color: "white"\n        }\n      : {\n          backgroundColor: "white",\n          color: "black"\n        })\n  };\n\n  return (\n    <div style={styles}>\n      <input\n        type="checkbox"\n        value="darkMode"\n        checked={darkModeOn}\n        id="darkModeOn"\n        name="darkModeOn"\n        style={{ width: "3rem", height: "3rem" }}\n        onChange={handleOnChange}\n      />\n      <label htmlFor="darkModeOn">Use dark mode?</label>\n    </div>\n  );\n}\n\nexport default App;\n')),Object(i.b)("p",null,"When you run the app you can see how it works:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-xS6AYMXkqfw/Xmqk4QZQx0I/AAAAAAAAT54/ACHaHu6I9BsKSqQAIW7IgBH9D-UP6iHuACPcBGAYYCw/s640/use-dark-mode.gif",alt:null})),Object(i.b)("p",null,"Looking at the code you'll be able to see that this is implemented using React's ",Object(i.b)("inlineCode",{parentName:"p"},"useState")," hook. So any user preference selected will be lost on a page refresh. Let's see if we can take this state and move it into IndexedDB using ",Object(i.b)("inlineCode",{parentName:"p"},"IDB-Keyval"),"."),Object(i.b)("p",null,"We'll change the code like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState, useEffect } from "react";\nimport { set, get } from "idb-keyval";\nimport "./App.css";\n\nconst sharedStyles = {\n  height: "30rem",\n  fontSize: "5rem",\n  textAlign: "center"\n} as const;\n\nfunction App() {\n  const [darkModeOn, setDarkModeOn] = useState<boolean | undefined>(undefined);\n\n  useEffect(() => {\n    get<boolean>("darkModeOn").then(value =>\n      // If a value is retrieved then use it; otherwise default to true\n      setDarkModeOn(value ?? true)\n    );\n  }, [setDarkModeOn]);\n\n  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {\n    setDarkModeOn(target.checked);\n\n    set("darkModeOn", target.checked);\n  };\n\n  const styles = {\n    ...sharedStyles,\n    ...(darkModeOn\n      ? {\n          backgroundColor: "black",\n          color: "white"\n        }\n      : {\n          backgroundColor: "white",\n          color: "black"\n        })\n  };\n\n  return (\n    <div style={styles}>\n      {darkModeOn === undefined ? (\n        <>Loading preferences...</>\n      ) : (\n        <>\n          <input\n            type="checkbox"\n            value="darkMode"\n            checked={darkModeOn}\n            id="darkModeOn"\n            name="darkModeOn"\n            style={{ width: "3rem", height: "3rem" }}\n            onChange={handleOnChange}\n          />\n          <label htmlFor="darkModeOn">Use dark mode?</label>\n        </>\n      )}\n    </div>\n  );\n}\n\nexport default App;\n')),Object(i.b)("p",null,"The changes here are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"darkModeOn")," is now initialised to ",Object(i.b)("inlineCode",{parentName:"li"},"undefined")," and the app displays a loading message until ",Object(i.b)("inlineCode",{parentName:"li"},"darkModeOn")," has a value."),Object(i.b)("li",{parentName:"ol"},"The app attempts to app load a value from IDB-Keyval with the key ",Object(i.b)("inlineCode",{parentName:"li"},"'darkModeOn'")," and set ",Object(i.b)("inlineCode",{parentName:"li"},"darkModeOn")," with the retrieved value. If no value is retrieved then it sets ",Object(i.b)("inlineCode",{parentName:"li"},"darkModeOn")," to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ol"},"When the checkbox is changed, the corresponding value is both applied to ",Object(i.b)("inlineCode",{parentName:"li"},"darkModeOn")," and saved to IDB-Keyval with the key ",Object(i.b)("inlineCode",{parentName:"li"},"'darkModeOn'"))),Object(i.b)("p",null,"As you can see, this means that we are persisting preferences beyond page refresh in a fashion that will work both online ",Object(i.b)("em",{parentName:"p"},"and")," offline!"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://1.bp.blogspot.com/-ZBsWsQNFDVk/XmqledYAp4I/AAAAAAAAT6E/3ShBesSOuxsrJ34r1QIs0R3HsXGRFBBzgCPcBGAYYCw/s640/use-dark-mode-with-idb-keyval.gif",alt:null})),Object(i.b)("h2",{id:"usage-as-a-react-hook"},"Usage as a React hook"),Object(i.b)("p",null,"Finally it's time for bonus points. Wouldn't it be nice if we could move this functionality into a reusable React hook? Let's do it!"),Object(i.b)("p",null,"Let's create a new ",Object(i.b)("inlineCode",{parentName:"p"},"usePersistedState.ts")," file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'import { useState, useEffect, useCallback } from "react";\nimport { set, get } from "idb-keyval";\n\nexport function usePersistedState<TState>(keyToPersistWith: string, defaultState: TState) {\n    const [state, setState] = useState<TState | undefined>(undefined);\n\n    useEffect(() => {\n        get<TState>(keyToPersistWith).then(retrievedState =>\n            // If a value is retrieved then use it; otherwise default to defaultValue\n            setState(retrievedState ?? defaultState));\n    }, [keyToPersistWith, setState, defaultState]);\n    \n    const setPersistedValue = useCallback((newValue: TState) => {\n        setState(newValue);\n        set(keyToPersistWith, newValue);\n    }, [keyToPersistWith, setState]);\n    \n    return [state, setPersistedValue] as const;\n}\n')),Object(i.b)("p",null,"This new hook is modelled after the API of ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usestate"},Object(i.b)("inlineCode",{parentName:"a"},"useState"))," and is named ",Object(i.b)("inlineCode",{parentName:"p"},"usePersistentState"),". It requires that a key be supplied which is the key that will be used to save the data. It also requires a default value to use in the case that nothing is found during the lookup."),Object(i.b)("p",null,"It returns (just like ",Object(i.b)("inlineCode",{parentName:"p"},"useState"),") a stateful value, and a function to update it. Finally, let's switch over our ",Object(i.b)("inlineCode",{parentName:"p"},"App.tsx")," to use our shiny new hook:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport "./App.css";\nimport { usePersistedState } from "./usePersistedState";\n\nconst sharedStyles = {\n  height: "30rem",\n  fontSize: "5rem",\n  textAlign: "center"\n} as const;\n\nfunction App() {\n  const [darkModeOn, setDarkModeOn] = usePersistedState<boolean>("darkModeOn", true);\n\n  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>\n    setDarkModeOn(target.checked);\n\n  const styles = {\n    ...sharedStyles,\n    ...(darkModeOn\n      ? {\n        backgroundColor: "black",\n        color: "white"\n      }\n      : {\n        backgroundColor: "white",\n        color: "black"\n      })\n  };\n\n  return (\n    <div style={styles}>\n      {darkModeOn === undefined ? (\n        <>Loading preferences...</>\n      ) : (\n          <>\n            <input\n              type="checkbox"\n              value="darkMode"\n              checked={darkModeOn}\n              id="darkModeOn"\n              name="darkModeOn"\n              style={{ width: "3rem", height: "3rem" }}\n              onChange={handleOnChange}\n            />\n            <label htmlFor="darkModeOn">Use dark mode?</label>\n          </>\n        )}\n    </div>\n  );\n}\n\nexport default App;\n')),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"This post has demonstrate how a web application or a PWA can safely store data that is persisted between sessions using native browser capabilities easily. IndexedDB powered the solution we've built. We used used ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jakearchibald/idb-keyval"},"IDB-Keyval")," for the delightful and familiar abstraction it offers over IndexedDB. It's allowed us to come up with a solution with a similarly lovely API. It's worth knowing that there are alternatives to IDB-Keyval available such as ",Object(i.b)("a",{parentName:"p",href:"https://github.com/localForage/localForage"},"localForage"),". If you are building for older browsers which may lack good IndexedDB support then this would be a good choice. But be aware that with greater backwards compatibility comes greater download size. Do consider this and make the tradeoffs that make sense for you."),Object(i.b)("p",null,"Finally, I've finished this post illustrating what usage would look like in a React context. Do be aware that there's nothing React specific about our offline storage mechanism. So if you're rolling with Vue, Angular or something else entirely: ",Object(i.b)("em",{parentName:"p"},"this is for you too"),"! Offline storage is a feature that provide much greater user experiences. Please do consider making use of it in your applications."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://blog.logrocket.com/offline-storage-for-pwas/"},"This post was originally published on LogRocket.")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/offline-storage-in-a-pwa"},"The source code for this project can be found here.")))}d.isMDXComponent=!0},1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,h=b["".concat(r,".").concat(u)]||b[u]||p[u]||i;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[17674],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,k=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87898:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r={title:"Offline storage in a PWA",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},l={permalink:"/2020/03/29/offline-storage-in-pwa",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-03-29-offline-storage-in-pwa.md",source:"@site/blog/2020-03-29-offline-storage-in-pwa.md",title:"Offline storage in a PWA",description:"When you are building any kind of application it's typical to want to store information which persists beyond a single user session. Sometimes that will be information that you'll want to live in some kind of centralised database, but not always.",date:"2020-03-29T00:00:00.000Z",formattedDate:"March 29, 2020",tags:[],readingTime:9.03,truncated:!1,prevItem:{title:"Up to the clouds!",permalink:"/2020/04/04/up-to-clouds"},nextItem:{title:"Dual boot authentication with ASP.Net Core",permalink:"/2020/03/22/dual-boot-authentication-with-aspnetcore"}},s=[{value:"The problem with <code>localStorage</code>",id:"the-problem-with-localstorage",children:[]},{value:"IndexedDB to the rescue?",id:"indexeddb-to-the-rescue",children:[]},{value:"IDB-Keyval to the rescue!",id:"idb-keyval-to-the-rescue",children:[]},{value:"Simple usage",id:"simple-usage",children:[]},{value:"Usage in React",id:"usage-in-react",children:[]},{value:"Usage as a React hook",id:"usage-as-a-react-hook",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you are building any kind of application it's typical to want to store information which persists beyond a single user session. Sometimes that will be information that you'll want to live in some kind of centralised database, but not always."),(0,i.kt)("p",null,"Also, you may want that data to still be available if your user is offline. Even if they can't connect to the network, the user may still be able to use the app to do meaningful tasks; but the app will likely require a certain amount of data to drive that."),(0,i.kt)("p",null,"How can we achieve this in the context of a PWA?"),(0,i.kt)("h2",{id:"the-problem-with-localstorage"},"The problem with ",(0,i.kt)("inlineCode",{parentName:"h2"},"localStorage")),(0,i.kt)("p",null,"If you were building a classic web app you'd probably be reaching for ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},(0,i.kt)("inlineCode",{parentName:"a"},"Window.localStorage"))," at this point. ",(0,i.kt)("inlineCode",{parentName:"p"},"Window.localStorage")," is a long existing API that stores data beyond a single session. It has a simple API and is very easy to use. However, it has a couple of problems:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Window.localStorage")," is synchronous. Not a tremendous problem for every app, but if you're building something that has significant performance needs then this could become an issue."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Window.localStorage")," cannot be used in the context of a ",(0,i.kt)("inlineCode",{parentName:"li"},"Worker")," or a ",(0,i.kt)("inlineCode",{parentName:"li"},"ServiceWorker"),". The APIs are not available there."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Window.localStorage")," stores only ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"s. Given ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON.stringify"))," and ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON.parse"))," that's not a big problem. But it's an inconvenience.")),(0,i.kt)("p",null,"The second point here is the significant one. If we've a need to access our offline data in the context of a ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceWorker")," (and if you're offline you'll be using a ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceWorker"),") then what do you do?"),(0,i.kt)("h2",{id:"indexeddb-to-the-rescue"},"IndexedDB to the rescue?"),(0,i.kt)("p",null,"Fortunately, ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage")," is not the only game in town. There's alternative offline storage mechanism available in browsers with the curious name of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDB"),". To quote the docs:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IndexedDB is a transactional database system, like an SQL-based RDBMS. However, unlike SQL-based RDBMSes, which use fixed-column tables, IndexedDB is a JavaScript-based object-oriented database. IndexedDB lets you store and retrieve objects that are indexed with a key; any objects supported by the structured clone algorithm can be stored. You need to specify the database schema, open a connection to your database, and then retrieve and update data within a series of transactions.")),(0,i.kt)("p",null,"It's clear that IndexedDB is ",(0,i.kt)("em",{parentName:"p"},"very")," powerful. But it doesn't sound very simple. A further look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mdn/to-do-notifications/blob/8b3e1708598e42062b0136608b1c5fbb66520f0a/scripts/todo.js#L48"},"MDN example")," of how to interact with IndexedDB does little to remove that thought."),(0,i.kt)("p",null,"We'd like to be able to access data offline; but in a simple fashion. Like we could with ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage")," which has a wonderfully straightforward API. If only someone would build an astraction on top of IndexedDB to make our lives easier..."),(0,i.kt)("p",null,"Someone did."),(0,i.kt)("h2",{id:"idb-keyval-to-the-rescue"},"IDB-Keyval to the rescue!"),(0,i.kt)("p",null,"The excellent ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/jaffathecake"},"Jake Archibald")," of Google has written ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jakearchibald/idb-keyval"},"IDB-Keyval")," which is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A super-simple-small promise-based keyval store implemented with IndexedDB")),(0,i.kt)("p",null,"The API is essentially equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage")," with a few lovely differences:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The API is promise based; all functions return a ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise"),"; this makes it a non-blocking API."),(0,i.kt)("li",{parentName:"ol"},"The API is not restricted to ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"s as ",(0,i.kt)("inlineCode",{parentName:"li"},"localStorage")," is. To quote the docs: ",(0,i.kt)("em",{parentName:"li"},"this is IDB-backed, you can store anything structured-clonable (numbers, arrays, objects, dates, blobs etc)")),(0,i.kt)("li",{parentName:"ol"},"Because this is abstraction built on top of IndexedDB, it can be used both in the context of a typical web app and also in a ",(0,i.kt)("inlineCode",{parentName:"li"},"Worker")," or a ",(0,i.kt)("inlineCode",{parentName:"li"},"ServiceWorker")," if required.")),(0,i.kt)("h2",{id:"simple-usage"},"Simple usage"),(0,i.kt)("p",null,"Let's take a look at what usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"IDB-Keyval")," might be like. For that we're going to need an application. It would be good to be able to demonstrate both simple usage and also how usage in the context of an application might look."),(0,i.kt)("p",null,"Let's spin up a TypeScript React app with ",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app offline-storage-in-a-pwa --template typescript\n")),(0,i.kt)("p",null,"This creates us a simple app. Now let's add IDB-Keyval to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add idb-keyval\n")),(0,i.kt)("p",null,"Then, let's update the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.tsx")," file to add a function that tests using IDB-Keyval:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { set, get } from 'idb-keyval';\nimport './index.css';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(<App />, document.getElementById('root'));\n\nserviceWorker.register();\n\nasync function testIDBKeyval() {\n    await set('hello', 'world');\n    const whatDoWeHave = await get('hello');\n    console.log(`When we queried idb-keyval for 'hello', we found: ${whatDoWeHave}`);\n}\n\ntestIDBKeyval();\n")),(0,i.kt)("p",null,"As you can see, we've added a ",(0,i.kt)("inlineCode",{parentName:"p"},"testIDBKeyval")," function which does the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Adds a value of ",(0,i.kt)("inlineCode",{parentName:"li"},"'world'")," to IndexedDB using IDB-Keyval for the key of ",(0,i.kt)("inlineCode",{parentName:"li"},"'hello'")),(0,i.kt)("li",{parentName:"ol"},"Queries IndexedDB using IDB-Keyval for the key of ",(0,i.kt)("inlineCode",{parentName:"li"},"'hello'")," and stores it in the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"whatDoWeHave")),(0,i.kt)("li",{parentName:"ol"},"Logs out what we found.")),(0,i.kt)("p",null,"You'll also note that ",(0,i.kt)("inlineCode",{parentName:"p"},"testIDBKeyval")," is an ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," function. This is so that we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," when we're interacting with IDB-Keyval. Given that its API is ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," based, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," friendly. Where you're performing more than an a single asynchronous operation at a time, it's often valuable to use ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," to increase the readability of your codebase."),(0,i.kt)("p",null,"What happens when we run our application with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start"),"? Let's do that and take a look at the devtools:"),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-b9-GrL0IXaY/Xmqj4GRhKXI/AAAAAAAAT5s/ZoceUInSY5EWXeCr2LkGV9Zvea8S6-mUgCPcBGAYYCw/s640/hello_world_idb_keyval.png",alt:null})),(0,i.kt)("p",null,"We successfully wrote something into IndexedDB, read it back and printed that value to the console. Amazing!"),(0,i.kt)("h2",{id:"usage-in-react"},"Usage in React"),(0,i.kt)("p",null,"What we've done so far is slightly abstract. It would be good to implement a real-world use case. Let's create an application which gives users the choice between using a \"Dark mode\" version of the app or not. To do that we'll replace our ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," with this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport "./App.css";\n\nconst sharedStyles = {\n  height: "30rem",\n  fontSize: "5rem",\n  textAlign: "center"\n} as const;\n\nfunction App() {\n  const [darkModeOn, setDarkModeOn] = useState(true)\n  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setDarkModeOn(target.checked);\n\n  const styles = {\n    ...sharedStyles,\n    ...(darkModeOn\n      ? {\n          backgroundColor: "black",\n          color: "white"\n        }\n      : {\n          backgroundColor: "white",\n          color: "black"\n        })\n  };\n\n  return (\n    <div style={styles}>\n      <input\n        type="checkbox"\n        value="darkMode"\n        checked={darkModeOn}\n        id="darkModeOn"\n        name="darkModeOn"\n        style={{ width: "3rem", height: "3rem" }}\n        onChange={handleOnChange}\n      />\n      <label htmlFor="darkModeOn">Use dark mode?</label>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,i.kt)("p",null,"When you run the app you can see how it works:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-xS6AYMXkqfw/Xmqk4QZQx0I/AAAAAAAAT54/ACHaHu6I9BsKSqQAIW7IgBH9D-UP6iHuACPcBGAYYCw/s640/use-dark-mode.gif",alt:null})),(0,i.kt)("p",null,"Looking at the code you'll be able to see that this is implemented using React's ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," hook. So any user preference selected will be lost on a page refresh. Let's see if we can take this state and move it into IndexedDB using ",(0,i.kt)("inlineCode",{parentName:"p"},"IDB-Keyval"),"."),(0,i.kt)("p",null,"We'll change the code like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState, useEffect } from "react";\nimport { set, get } from "idb-keyval";\nimport "./App.css";\n\nconst sharedStyles = {\n  height: "30rem",\n  fontSize: "5rem",\n  textAlign: "center"\n} as const;\n\nfunction App() {\n  const [darkModeOn, setDarkModeOn] = useState<boolean | undefined>(undefined);\n\n  useEffect(() => {\n    get<boolean>("darkModeOn").then(value =>\n      // If a value is retrieved then use it; otherwise default to true\n      setDarkModeOn(value ?? true)\n    );\n  }, [setDarkModeOn]);\n\n  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {\n    setDarkModeOn(target.checked);\n\n    set("darkModeOn", target.checked);\n  };\n\n  const styles = {\n    ...sharedStyles,\n    ...(darkModeOn\n      ? {\n          backgroundColor: "black",\n          color: "white"\n        }\n      : {\n          backgroundColor: "white",\n          color: "black"\n        })\n  };\n\n  return (\n    <div style={styles}>\n      {darkModeOn === undefined ? (\n        <>Loading preferences...</>\n      ) : (\n        <>\n          <input\n            type="checkbox"\n            value="darkMode"\n            checked={darkModeOn}\n            id="darkModeOn"\n            name="darkModeOn"\n            style={{ width: "3rem", height: "3rem" }}\n            onChange={handleOnChange}\n          />\n          <label htmlFor="darkModeOn">Use dark mode?</label>\n        </>\n      )}\n    </div>\n  );\n}\n\nexport default App;\n')),(0,i.kt)("p",null,"The changes here are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"darkModeOn")," is now initialised to ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," and the app displays a loading message until ",(0,i.kt)("inlineCode",{parentName:"li"},"darkModeOn")," has a value."),(0,i.kt)("li",{parentName:"ol"},"The app attempts to app load a value from IDB-Keyval with the key ",(0,i.kt)("inlineCode",{parentName:"li"},"'darkModeOn'")," and set ",(0,i.kt)("inlineCode",{parentName:"li"},"darkModeOn")," with the retrieved value. If no value is retrieved then it sets ",(0,i.kt)("inlineCode",{parentName:"li"},"darkModeOn")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ol"},"When the checkbox is changed, the corresponding value is both applied to ",(0,i.kt)("inlineCode",{parentName:"li"},"darkModeOn")," and saved to IDB-Keyval with the key ",(0,i.kt)("inlineCode",{parentName:"li"},"'darkModeOn'"))),(0,i.kt)("p",null,"As you can see, this means that we are persisting preferences beyond page refresh in a fashion that will work both online ",(0,i.kt)("em",{parentName:"p"},"and")," offline!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://1.bp.blogspot.com/-ZBsWsQNFDVk/XmqledYAp4I/AAAAAAAAT6E/3ShBesSOuxsrJ34r1QIs0R3HsXGRFBBzgCPcBGAYYCw/s640/use-dark-mode-with-idb-keyval.gif",alt:null})),(0,i.kt)("h2",{id:"usage-as-a-react-hook"},"Usage as a React hook"),(0,i.kt)("p",null,"Finally it's time for bonus points. Wouldn't it be nice if we could move this functionality into a reusable React hook? Let's do it!"),(0,i.kt)("p",null,"Let's create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"usePersistedState.ts")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useState, useEffect, useCallback } from "react";\nimport { set, get } from "idb-keyval";\n\nexport function usePersistedState<TState>(keyToPersistWith: string, defaultState: TState) {\n    const [state, setState] = useState<TState | undefined>(undefined);\n\n    useEffect(() => {\n        get<TState>(keyToPersistWith).then(retrievedState =>\n            // If a value is retrieved then use it; otherwise default to defaultValue\n            setState(retrievedState ?? defaultState));\n    }, [keyToPersistWith, setState, defaultState]);\n    \n    const setPersistedValue = useCallback((newValue: TState) => {\n        setState(newValue);\n        set(keyToPersistWith, newValue);\n    }, [keyToPersistWith, setState]);\n    \n    return [state, setPersistedValue] as const;\n}\n')),(0,i.kt)("p",null,"This new hook is modelled after the API of ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usestate"},(0,i.kt)("inlineCode",{parentName:"a"},"useState"))," and is named ",(0,i.kt)("inlineCode",{parentName:"p"},"usePersistentState"),". It requires that a key be supplied which is the key that will be used to save the data. It also requires a default value to use in the case that nothing is found during the lookup."),(0,i.kt)("p",null,"It returns (just like ",(0,i.kt)("inlineCode",{parentName:"p"},"useState"),") a stateful value, and a function to update it. Finally, let's switch over our ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," to use our shiny new hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport "./App.css";\nimport { usePersistedState } from "./usePersistedState";\n\nconst sharedStyles = {\n  height: "30rem",\n  fontSize: "5rem",\n  textAlign: "center"\n} as const;\n\nfunction App() {\n  const [darkModeOn, setDarkModeOn] = usePersistedState<boolean>("darkModeOn", true);\n\n  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>\n    setDarkModeOn(target.checked);\n\n  const styles = {\n    ...sharedStyles,\n    ...(darkModeOn\n      ? {\n        backgroundColor: "black",\n        color: "white"\n      }\n      : {\n        backgroundColor: "white",\n        color: "black"\n      })\n  };\n\n  return (\n    <div style={styles}>\n      {darkModeOn === undefined ? (\n        <>Loading preferences...</>\n      ) : (\n          <>\n            <input\n              type="checkbox"\n              value="darkMode"\n              checked={darkModeOn}\n              id="darkModeOn"\n              name="darkModeOn"\n              style={{ width: "3rem", height: "3rem" }}\n              onChange={handleOnChange}\n            />\n            <label htmlFor="darkModeOn">Use dark mode?</label>\n          </>\n        )}\n    </div>\n  );\n}\n\nexport default App;\n')),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This post has demonstrate how a web application or a PWA can safely store data that is persisted between sessions using native browser capabilities easily. IndexedDB powered the solution we've built. We used used ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jakearchibald/idb-keyval"},"IDB-Keyval")," for the delightful and familiar abstraction it offers over IndexedDB. It's allowed us to come up with a solution with a similarly lovely API. It's worth knowing that there are alternatives to IDB-Keyval available such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/localForage/localForage"},"localForage"),". If you are building for older browsers which may lack good IndexedDB support then this would be a good choice. But be aware that with greater backwards compatibility comes greater download size. Do consider this and make the tradeoffs that make sense for you."),(0,i.kt)("p",null,"Finally, I've finished this post illustrating what usage would look like in a React context. Do be aware that there's nothing React specific about our offline storage mechanism. So if you're rolling with Vue, Angular or something else entirely: ",(0,i.kt)("em",{parentName:"p"},"this is for you too"),"! Offline storage is a feature that provide much greater user experiences. Please do consider making use of it in your applications."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/offline-storage-for-pwas/"},"This post was originally published on LogRocket.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/offline-storage-in-a-pwa"},"The source code for this project can be found here.")))}p.isMDXComponent=!0}}]);
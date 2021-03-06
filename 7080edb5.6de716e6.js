(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{472:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(7),r=(n(0),n(958)),i={title:"From create-react-app to PWA",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},l={permalink:"/2020/01/31/from-create-react-app-to-pwa",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-01-31-from-create-react-app-to-pwa.md",source:"@site/blog/2020-01-31-from-create-react-app-to-pwa.md",description:"Progressive Web Apps are a (terribly named) wonderful idea. You can build an app once using web technologies which serves all devices and form factors. It can be accessible over the web, but also surface on the home screen of your Android / iOS device. That app can work offline, have a splash screen when it launches and have notifications too.",date:"2020-01-31T00:00:00.000Z",tags:[],title:"From create-react-app to PWA",readingTime:10.675,truncated:!1,prevItem:{title:"Web Workers, comlink, TypeScript and React",permalink:"/2020/02/21/web-workers-comlink-typescript-and-react"},nextItem:{title:"LICENSE to kill your PWA",permalink:"/2020/01/21/license-to-kill-your-pwa"}},p=[{value:"From console to web app",id:"from-console-to-web-app",children:[]},{value:"From web app to PWA",id:"from-web-app-to-pwa",children:[]},{value:"Icons and splash screens and A2HS, oh my!",id:"icons-and-splash-screens-and-a2hs-oh-my",children:[]},{value:"Where are we?",id:"where-are-we",children:[]},{value:"Code splitting",id:"code-splitting",children:[]},{value:"Deploy your PWA",id:"deploy-your-pwa",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Progressive Web Apps are a (terribly named) wonderful idea. You can build an app ",Object(r.b)("em",{parentName:"p"},"once")," using web technologies which serves all devices and form factors. It can be accessible over the web, but also surface on the home screen of your Android / iOS device. That app can work offline, have a splash screen when it launches and have notifications too."),Object(r.b)("p",null,"PWAs can be a money saver for your business. The alternative, should you want an app experience for your users, is building the same application using three different technologies (one for web, one for Android and one for iOS). When you take this path it's hard to avoid a multiplication of cost and complexity. It often leads to dividing up the team as each works on a different stack. It's common to lose a certain amount of focus as a consequence. PWAs can help here; they are a compelling alternative, not just from a developers standpoint, but from a resourcing one too."),Object(r.b)("p",null,"However, the downside of PWAs is that they are more complicated than normal web apps. Writing one from scratch is just less straightforward than a classic web app. There are easy onramps to building a PWA that help you fall into the pit of success. This post will highlight one of these. How you can travel from zero to a PWA of your very own using React and TypeScript."),Object(r.b)("p",null,"This post presumes knowledge of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"React"),Object(r.b)("li",{parentName:"ul"},"TypeScript"),Object(r.b)("li",{parentName:"ul"},"Node")),Object(r.b)("h2",{id:"from-console-to-web-app"},"From console to web app"),Object(r.b)("p",null,"To create our PWA we're going to use ",Object(r.b)("a",{parentName:"p",href:"https://create-react-app.dev/"},Object(r.b)("inlineCode",{parentName:"a"},"create-react-app")),". This excellent project has long had inbuilt support for making PWAs. In recent months that support has matured to a very satisfactory level. To create ourselves a TypeScript React app using ",Object(r.b)("inlineCode",{parentName:"p"},"create-react-app")," enter this ",Object(r.b)("inlineCode",{parentName:"p"},"npx")," command at the console:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app pwa-react-typescript --template typescript\n")),Object(r.b)("p",null,"This builds you a react web app built with TypeScript; it can be tested locally with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cd pwa-react-typescript\nyarn start\n")),Object(r.b)("h2",{id:"from-web-app-to-pwa"},"From web app to PWA"),Object(r.b)("p",null,"From web app to PWA is incredibly simple; it\u2019s just a question of opting in to offline behaviour. If you open up the ",Object(r.b)("inlineCode",{parentName:"p"},"index.tsx")," file in your newly created project you'll find this code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\nserviceWorker.unregister();\n")),Object(r.b)("p",null,"As the hint suggests, swap ",Object(r.b)("inlineCode",{parentName:"p"},"serviceWorker.unregister()")," for ",Object(r.b)("inlineCode",{parentName:"p"},"serviceWorker.register()")," and you now have a PWA. Amazing! What does this mean? Well to ",Object(r.b)("a",{parentName:"p",href:"https://create-react-app.dev/docs/making-a-progressive-web-app/#why-opt-in"},"quote the docs"),":"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"All static site assets are cached so that your page loads fast on subsequent visits, regardless of network connectivity (such as 2G or 3G). Updates are downloaded in the background."),Object(r.b)("li",{parentName:"ul"},"Your app will work regardless of network state, even if offline. This means your users will be able to use your app at 10,000 feet and on the subway.")),Object(r.b)("p",{parentName:"blockquote"},"... it will take care of generating a service worker file that will automatically precache all of your local assets and keep them up to date as you deploy updates. The service worker will use a ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network"},"cache-first strategy"),"for handling all requests for local assets, including ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests"},"navigation requests")," for your HTML, ensuring that your web app is consistently fast, even on a slow or unreliable network.")),Object(r.b)("p",null,"Under the bonnet, ",Object(r.b)("inlineCode",{parentName:"p"},"create-react-app")," is achieving this through the use of technology called ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox"},'"Workbox"'),". Workbox describes itself as:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"a set of libraries and Node modules that make it easy to cache assets and take full advantage of features used to build ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/web/progressive-web-apps/"},"Progressive Web Apps"),".")),Object(r.b)("p",null,"The good folks of Google are aware that writing your own PWA can be tricky. There's much new behaviour to configure and be aware of; it's easy to make mistakes. Workbox is there to help ease the way forward by implementing default strategies for caching / offline behaviour which can be controlled through configuration."),Object(r.b)("p",null,"A downside of the usage of ",Object(r.b)("inlineCode",{parentName:"p"},"Workbox")," in ",Object(r.b)("inlineCode",{parentName:"p"},"create-react-app")," is that (as with most things ",Object(r.b)("inlineCode",{parentName:"p"},"create-react-app"),") there's little scope for configuration of your own if the defaults don't serve your purpose. This may change in the future, indeed ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/pull/5369"},"there's an open PR that adds this support"),"."),Object(r.b)("h2",{id:"icons-and-splash-screens-and-a2hs-oh-my"},"Icons and splash screens and A2HS, oh my!"),Object(r.b)("p",null,"But it's not just an offline experience that makes this a PWA. Other important factors are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'That the app can be added to your home screen (A2HS AKA "installed").'),Object(r.b)("li",{parentName:"ul"},"That the app has a name and an icon which can be customised."),Object(r.b)("li",{parentName:"ul"},"That there's a splash screen displayed to the user as the app starts up.")),Object(r.b)("p",null,'All of the above is "in the box" with ',Object(r.b)("inlineCode",{parentName:"p"},"create-react-app"),". Let's start customizing these."),Object(r.b)("p",null,"First of all, we'll give our app a name. Fire up ",Object(r.b)("inlineCode",{parentName:"p"},"index.html")," and replace ",Object(r.b)("inlineCode",{parentName:"p"},"&lt;title&gt;React App&lt;/title&gt;")," with ",Object(r.b)("inlineCode",{parentName:"p"},"&lt;title&gt;My PWA&lt;/title&gt;"),". (Feel free to concoct a more imaginative name than the one I've suggested.) Next open up ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")," and replace:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"short_name": "React App",\n  "name": "Create React App Sample",\n')),Object(r.b)("p",null,"with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"short_name": "My PWA",\n  "name": "My PWA",\n')),Object(r.b)("p",null,"Your app now has a name. The question you might be asking is: what is this ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")," file? Well to ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/web-app-manifest"},"quote the good folks of Google"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},"web app manifest")," is a simple JSON file that tells the browser about your web application and how it should behave when 'installed' on the user's mobile device or desktop. Having a manifest is required by Chrome to show the ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/app-install-banners/"},"Add to Home Screen prompt"),"."),Object(r.b)("p",{parentName:"blockquote"},"A typical manifest file includes information about the app name, icons it should use, the start","_","url it should start at when launched, and more.")),Object(r.b)("p",null,"So the ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")," is essentially metadata about your app. Here's what it should look like right now:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "short_name": "My PWA",\n  "name": "My PWA",\n  "icons": [\n    {\n      "src": "favicon.ico",\n      "sizes": "64x64 32x32 24x24 16x16",\n      "type": "image/x-icon"\n    },\n    {\n      "src": "logo192.png",\n      "type": "image/png",\n      "sizes": "192x192"\n    },\n    {\n      "src": "logo512.png",\n      "type": "image/png",\n      "sizes": "512x512"\n    }\n  ],\n  "start_url": ".",\n  "display": "standalone",\n  "theme_color": "#000000",\n  "background_color": "#ffffff"\n}\n')),Object(r.b)("p",null,"You can use the above properties (and others not yet configured) to control how your app behaves. For instance, if you want to replace icons your app uses then it's a simple matter of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"placing new logo files in the ",Object(r.b)("inlineCode",{parentName:"li"},"public")," folder"),Object(r.b)("li",{parentName:"ul"},"updating references to them in the ",Object(r.b)("inlineCode",{parentName:"li"},"manifest.json")),Object(r.b)("li",{parentName:"ul"},"finally, for older Apple devices, updating the ",Object(r.b)("inlineCode",{parentName:"li"},'&lt;link rel="apple-touch-icon" ... /&gt;')," in the ",Object(r.b)("inlineCode",{parentName:"li"},"index.html"),".")),Object(r.b)("h2",{id:"where-are-we"},"Where are we?"),Object(r.b)("p",null,"So far, we have a basic PWA in place. It's installable. You can run it locally and develop it with ",Object(r.b)("inlineCode",{parentName:"p"},"yarn start"),". You can build it for deployment with ",Object(r.b)("inlineCode",{parentName:"p"},"yarn build"),"."),Object(r.b)("p",null,"What this isn't, is recognisably a web app. In the sense that it doesn't have support for different pages / URLs. We're typically going to want to break up our application this way. Let's do that now. We're going to use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ReactTraining/react-router"},Object(r.b)("inlineCode",{parentName:"a"},"react-router")),"; the de facto routing solution for React. To add it to our project (and the required type definitions for TypeScript) we use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"yarn add react-router-dom @types/react-router-dom\n")),Object(r.b)("p",null,"Now let's split up our app into a couple of pages. We'll replace the existing ",Object(r.b)("inlineCode",{parentName:"p"},"App.tsx")," with this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";\nimport About from "./About";\nimport Home from "./Home";\n\nconst App: React.FC = () => (\n  <Router>\n    <nav>\n      <ul>\n        <li>\n          <Link to="/">Home</Link>\n        </li>\n        <li>\n          <Link to="/about">About</Link>\n        </li>\n      </ul>\n    </nav>\n    <Switch>\n      <Route path="/about">\n        <About />\n      </Route>\n      <Route path="/">\n        <Home />\n      </Route>\n    </Switch>\n  </Router>\n);\n\nexport default App;\n')),Object(r.b)("p",null,"This will be our root page. It has the responsiblity of using ",Object(r.b)("inlineCode",{parentName:"p"},"react-router")," to render the pages we want to serve, and also to provide the links that allow users to navigate to those pages. In making our changes we'll have broken our test (which checked for a link we've now deleted), so we'll fix it like so:"),Object(r.b)("p",null,"Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"App.test.tsx")," with this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { render } from '@testing-library/react';\nimport App from './App';\n\ntest('renders about link', () => {\n  const { getByText } = render(<App />);\n  const linkElement = getByText(/about/i);\n  expect(linkElement).toBeInTheDocument();\n});\n")),Object(r.b)("p",null,"You'll have noticed that in our new ",Object(r.b)("inlineCode",{parentName:"p"},"App.tsx")," we import two new components (or pages); ",Object(r.b)("inlineCode",{parentName:"p"},"About")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Home"),". Let's create those. First ",Object(r.b)("inlineCode",{parentName:"p"},"About.tsx"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nconst About: React.FC = () => (\n  <h1>This is a PWA</h1>\n);\n\nexport default About;\n')),Object(r.b)("p",null,"Then ",Object(r.b)("inlineCode",{parentName:"p"},"Home.tsx"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nconst Home: React.FC = () => (\n  <h1>Welcome to your PWA!</h1>\n);\n\nexport default Home;\n')),Object(r.b)("h2",{id:"code-splitting"},"Code splitting"),Object(r.b)("p",null,"Now we've split up our app into multiple sections, we're going to split the code too. A good way to improve loading times for PWAs is to ensure that the code is not built into big files. At the moment our app builds a ",Object(r.b)("inlineCode",{parentName:"p"},"single-file.js"),". If you run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn build")," you'll see what this looks like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"47.88 KB  build/static/js/2.89bc6648.chunk.js\n  784 B     build/static/js/runtime-main.9c116153.js\n  555 B     build/static/js/main.bc740179.chunk.js\n  269 B     build/static/css/main.5ecd60fb.chunk.css\n")),Object(r.b)("p",null,"Notice the ",Object(r.b)("inlineCode",{parentName:"p"},"build/static/js/main.bc740179.chunk.js")," file. This is our ",Object(r.b)("inlineCode",{parentName:"p"},"single-file.js"),". It represents the compiled output of building the TypeScript files that make up our app. It will grow and grow as our app grows, eventually becoming problematic from a user loading speed perspective."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"create-react-app")," is built upon webpack. There is excellent support for code splitting in webpack and hence ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#code-splitting"},"create-react-app supports it by default"),". Let's apply it to our app. Again we're going to change ",Object(r.b)("inlineCode",{parentName:"p"},"App.tsx"),"."),Object(r.b)("p",null,"Where we previously had:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'import About from "./About";\nimport Home from "./Home";\n')),Object(r.b)("p",null,"Let's replace with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"const About = lazy(() => import('./About'));\nconst Home = lazy(() => import('./Home'));\n")),Object(r.b)("p",null,"This is the syntax to lazily load components in React. You'll note that it internally uses the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"dynamic ",Object(r.b)("inlineCode",{parentName:"a"},"import()")," syntax"),' which webpack uses as a "split point".'),Object(r.b)("p",null,"Let's also give React something to render whilst it waits for the dynamic imports to be resolved. Just inside our ",Object(r.b)("inlineCode",{parentName:"p"},"&lt;Router&gt;")," component we'll add a ",Object(r.b)("inlineCode",{parentName:"p"},"&lt;Suspense&gt;")," component too:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"<Router>\n    <Suspense fallback={<div>Loading...</div>}>\n    {/*...*/}\n    </Suspense>\n  </Router>\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"&lt;Suspense&gt;")," component will render the ",Object(r.b)("inlineCode",{parentName:"p"},"&lt;div&gt;Loading...&lt;/div&gt;")," whilst it waits for a routes code to be dynamically loaded. So our final ",Object(r.b)("inlineCode",{parentName:"p"},"App.tsx")," component ends up looking like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'import React, { lazy, Suspense } from "react";\nimport { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";\nconst About = lazy(() => import("./About"));\nconst Home = lazy(() => import("./Home"));\n\nconst App: React.FC = () => (\n  <Router>\n    <Suspense fallback={<div>Loading...</div>}>\n      <nav>\n        <ul>\n          <li>\n            <Link to="/">Home</Link>\n          </li>\n          <li>\n            <Link to="/about">About</Link>\n          </li>\n        </ul>\n      </nav>\n      <Switch>\n        <Route path="/about">\n          <About />\n        </Route>\n        <Route path="/">\n          <Home />\n        </Route>\n      </Switch>\n    </Suspense>\n  </Router>\n);\n\nexport default App;\n')),Object(r.b)("p",null,"This is now a code split application. How can we tell? If we run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn build")," again we'll see something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"47.88 KB          build/static/js/2.89bc6648.chunk.js\n  1.18 KB (+428 B)  build/static/js/runtime-main.415ab5ea.js\n  596 B (+41 B)     build/static/js/main.e60948bb.chunk.js\n  269 B             build/static/css/main.5ecd60fb.chunk.css\n  233 B             build/static/js/4.0c85e1cb.chunk.js\n  228 B             build/static/js/3.eed49094.chunk.js\n")),Object(r.b)("p",null,"Note that we now have multiple ",Object(r.b)("inlineCode",{parentName:"p"},"*.chunk.js")," files. Our initial ",Object(r.b)("inlineCode",{parentName:"p"},"main.*.chunk.js")," and then ",Object(r.b)("inlineCode",{parentName:"p"},"3.*.chunk.js")," representing ",Object(r.b)("inlineCode",{parentName:"p"},"Home.tsx")," and ",Object(r.b)("inlineCode",{parentName:"p"},"4.*.chunk.js")," representing ",Object(r.b)("inlineCode",{parentName:"p"},"About.tsx"),"."),Object(r.b)("p",null,"As we continue to build out our app from this point we'll have a great approach in place to ensure that users load files as they need to and that those files should not be too large. Great performance which will scale."),Object(r.b)("h2",{id:"deploy-your-pwa"},"Deploy your PWA"),Object(r.b)("p",null,"Now that we have our basic PWA in place, let's deploy it so the outside world can appreciate it. We're going to use ",Object(r.b)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify")," for this."),Object(r.b)("p",null,"The source code of our PWA lives on GitHub here: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/pwa-react-typescript"},"https://github.com/johnnyreilly/pwa-react-typescript")),Object(r.b)("p",null,"We're going to log into Netlify, click on the \"Create a new site\" option and select GitHub as the provider. We'll need to authorize Netlify to access our GitHub."),Object(r.b)("p",null," ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/netlify-auth.png"},"![null]","(<https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/netlify-auth.png> =485x640)"),'You may need to click the "Configure Netlify on GitHub" button to grant permissions for Netlify to access your repo like so:'),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/netlify-repo-permissions.png"},"![null]","(<https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/netlify-repo-permissions.png> =474x640)"),"Then you can select your repo from within Netlify. All of the default settings that Netlify provides should work for our use case:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/netlify-deploy-settings.png"},"![null]","(<https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/netlify-deploy-settings.png> =633x640)"),"Let's hit the magic \"Deploy site\" button! In a matter of minutes you'll find that Netlify has deployed your PWA."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/netlify-deployed.png"},"![null]","(<https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/netlify-deployed.png> =640x214)"),"If we browse to the URL provided by Netlify we'll be able to see the deployed PWA in action. (You also have the opportunity to set up a custom domain name that you would typically want outside of a simple demo such as this.) Importantly this will be served over HTTPS which will allow our Service Worker to operate."),Object(r.b)("p",null,"Now that we know it's there, let's see how what we've built holds up according to the professionals. We're going to run the Google Chrome Developer Tools Audit against our PWA:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/pwa-audit.png"},"![null]","(<https://raw.githubusercontent.com/johnnyreilly/pwa-react-typescript/master/pwa-audit.png> =640x126)"),"That is a good start for our PWA!"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://blog.logrocket.com/from-create-react-app-to-pwa/"},"This post was originally published on LogRocket.")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/pwa-react-typescript"},"The source code for this project can be found here.")))}c.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(n),h=a,m=b["".concat(i,".").concat(h)]||b[h]||u[h]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
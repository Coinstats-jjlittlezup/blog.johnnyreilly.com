(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(4),i=n(10),r=(n(0),n(1211)),o={title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["TypeScript","$http","AngularJS","interceptors","caching"],hide_table_of_contents:!1},s={permalink:"/2014/10/06/caching-and-cache-busting-in-angularjs-with-http-interceptors",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-10-06-caching-and-cache-busting-in-angularjs-with-http-interceptors.md",source:"@site/blog/2014-10-06-caching-and-cache-busting-in-angularjs-with-http-interceptors.md",title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",description:"Loading On-Demand and Caching",date:"2014-10-06T00:00:00.000Z",formattedDate:"October 6, 2014",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"$http",permalink:"/tags/http"},{label:"AngularJS",permalink:"/tags/angular-js"},{label:"interceptors",permalink:"/tags/interceptors"},{label:"caching",permalink:"/tags/caching"}],readingTime:4.06,truncated:!1,prevItem:{title:"Using Gulp in Visual Studio instead of Web Optimization",permalink:"/2014/11/04/using-gulp-in-visual-studio-instead-of-web-optimization"},nextItem:{title:"He tasks me; he heaps me.... I will wreak that MOQ upon him.",permalink:"/2014/10/03/he-tasks-me-he-heaps-me-i-will-wreak"}},c=[{value:"Loading On-Demand and Caching",id:"loading-on-demand-and-caching",children:[]},{value:"Loading Views in AngularJS Using this Approach",id:"loading-views-in-angularjs-using-this-approach",children:[]},{value:"Interesting technique.... How do I apply it?",id:"interesting-technique-how-do-i-apply-it",children:[]}],l={toc:c};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"loading-on-demand-and-caching"},"Loading On-Demand and Caching"),Object(r.b)("p",null," ",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2014/03/caching-and-cache-busting-with-requirejs.html"},"I've written before about my own needs for caching and cache-busting when using RequireJS.")," Long story short, when I'm loading ",Object(r.b)("em",{parentName:"p"},"static")," resources (scripts / views etc) on demand from the server I want to do a little URL fiddling along the way. I want to do that to cater for these 2 scenarios:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"In Development")," ","-",' I want my URLs for static resources to have a unique querystring with each request to ensure that resources are loaded afresh each time. (eg so a GET request URL might look like this: "/app/layout/sidebar.html?v=IAmRandomYesRandomRandomIsWhatIAm58965782")'),Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"In Production")," ","-",' I want my URLs for static resources to have a querystring with that is driven by the application version number. This means that static resources can potentially be cached with a given querystring - subsequent requests should result in a 304 status code (indicating \u201cNot Modified\u201d) and local cache should be used. But when a new version of the app is rolled out and the app version is incremented then the querystring will change and resources will be loaded anew. (eg a GET request URL might look like this: "/app/layout/sidebar.html?v=1.0.5389.16180")')),Object(r.b)("h2",{id:"loading-views-in-angularjs-using-this-approach"},"Loading Views in AngularJS Using this Approach"),Object(r.b)("p",null,"I have exactly the same use cases when I'm using AngularJS for views. Out of the box with AngularJS 1.x views are loaded lazily (unlike controllers, services etc). For that reason I want to use the same approach I've outlined above to load my views. Also, I want to prepend my URLs with the root of my application - this allows me to cater for my app being deployed in a virtual folder."),Object(r.b)("p",null,"It turns out that's pretty easy thanks to ",Object(r.b)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/service/$http#interceptors"},"HTTP interceptors"),". They allow you to step into the pipeline and access and modify requests and responses made by your application. When AngularJS loads a view it's the HTTP service doing the heavy lifting. So to deal with my own use case, I just need to add in an HTTP interceptor that amends the get request. This is handled in the example that follows in the ",Object(r.b)("inlineCode",{parentName:"p"},"configureHttpProvider")," function: (The example that follows is TypeScript - though if you just chopped out the interface and the type declarations you'd find this is pretty much idiomatic JavaScript)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'interface config {\n    appRoot: string;              // eg "/"\n    inDebug: boolean;             // eg true or false\n    urlCacheBusterSuffix: string; // if in debug this might look like this: "v=1412608547047", \n                                  // if not in debug this might look like this: "v=1.0.5389.16180"\n}\n\nfunction configureHttpProvider() {\n\n    // This is the name of our HTTP interceptor \n    var serviceId = "urlInterceptor"; \n\n    // We\'re going to create a service factory which will be our HTTP interceptor\n    // It will be injected with a config object which is represented by the config interface above\n    app.factory(serviceId, ["$templateCache", "config", \n        function ($templateCache: ng.ITemplateCacheService, config: config) {\n\n        // We\'re returning an object literal with a single function; the "request" function\n        var service = {\n            request: request\n        };\n\n        return service;\n\n        // Request will be called with a request config object which includes the URL which we will amend\n        function request(requestConfig: ng.IRequestConfig) {\n\n            // For the loading of HTML templates we want the appRoot to be prefixed to the path\n            // and we want a suffix to either allow caching or prevent caching \n            // (depending on whether in debug mode or not)\n            if (requestConfig.method === "GET" && endsWith(requestConfig.url, ".html")) {\n\n                // If this has already been placed into a primed template cache then we should leave the URL as is\n                // so that the version in templateCache is served.  If we tweak the URL then it will not be found\n                var cachedAlready = $templateCache.get(requestConfig.url);\n                if (!cachedAlready) {\n                    // THIS IS THE MAGIC!!!!!!!!!!!!!!!\n\n                    requestConfig.url = config.appRoot + requestConfig.url + config.urlCacheBusterSuffix;\n                \n                    // WE NOW HAVE A URL WHICH IS CACHE-FRIENDLY FOR OUR PURPOSES - REJOICE!!!!!!!!!!!\n                }\n            }\n\n            return requestConfig;\n        }\n\n        // <a href="http://stackoverflow.com/a/2548133/761388">a simple JavaScript string "endswith" implementation</a>\n        function endsWith(str: string, suffix: string) {\n            return str.indexOf(suffix, str.length - suffix.length) !== -1;\n        }\n    }]);\n\n    // This adds our service factory interceptor into the pipeline\n    app.config(["$httpProvider", function ($httpProvider: ng.IHttpProvider) {\n        $httpProvider.interceptors.push(serviceId);\n    }]);\n}\n')),Object(r.b)("p",null,"This interceptor steps in and amends each ajax request when all the following conditions hold true:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"It's a GET request."),Object(r.b)("li",{parentName:"ol"},'It\'s requesting a file that ends ".html" - a template basically.'),Object(r.b)("li",{parentName:"ol"},"The template cache does not already contain the template. I left this out at first and got bitten when I found that the contents of the template cache were being ignored for pre-primed templates. Ugly.")),Object(r.b)("h2",{id:"interesting-technique-how-do-i-apply-it"},"Interesting technique.... How do I apply it?"),Object(r.b)("p",null,"Isn't it always much more helpful when you can see an example of code in the context of which it is actually used? Course it is! If you want that then take a look at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Proverb/blob/master/Proverb.Web/app/app.ts"},Object(r.b)("inlineCode",{parentName:"a"},"app.ts"))," on GitHub. And if you'd like the naked JavaScript well ",Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Proverb/blob/master/Proverb.Web/app/app.js"},"that's there too"),"."))}h.isMDXComponent=!0},1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),h=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=h(n),d=a,g=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return n?i.a.createElement(g,s(s({ref:t},l),{},{components:n})):i.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
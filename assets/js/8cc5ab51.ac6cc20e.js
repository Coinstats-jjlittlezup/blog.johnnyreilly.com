(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{1161:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),b=n,d=h["".concat(i,".").concat(b)]||h[b]||p[b]||o;return a?r.a.createElement(d,l(l({ref:t},c),{},{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},224:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),o=(a(0),a(1161)),i={title:"UseStaticFiles for ASP.Net vOld",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["HTML5 History API","Single Page Applications","UseStaticFiles","Routing","URL Rewrite"],hide_table_of_contents:!1},l={permalink:"/2016/01/01/usestaticfiles-for-aspnet-vold",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-01-01-usestaticfiles-for-aspnet-vold.md",source:"@site/blog/2016-01-01-usestaticfiles-for-aspnet-vold.md",description:"That's what we're calling the original ASP.Net now, right? This is a guide on how not",date:"2016-01-01T00:00:00.000Z",formattedDate:"January 1, 2016",tags:[{label:"HTML5 History API",permalink:"/tags/html-5-history-api"},{label:"Single Page Applications",permalink:"/tags/single-page-applications"},{label:"UseStaticFiles",permalink:"/tags/use-static-files"},{label:"Routing",permalink:"/tags/routing"},{label:"URL Rewrite",permalink:"/tags/url-rewrite"}],title:"UseStaticFiles for ASP.Net vOld",readingTime:6.13,truncated:!1,prevItem:{title:"Coded UI and the Curse of the Docking Station",permalink:"/2016/01/14/coded-ui-and-curse-of-docking-station"},nextItem:{title:"Live Reload Considered Harmful",permalink:"/2015/12/20/live-reload-considered-harmful"}},s=[{value:"Support for HTML5 History API!",id:"support-for-html5-history-api",children:[]},{value:"UseStaticFiles",id:"usestaticfiles",children:[]},{value:"&quot;I am SPArtucus&quot;",id:"i-am-spartucus",children:[]},{value:"Data! Data! Data!.. I can&#39;t make bricks without clay.",id:"data-data-data-i-cant-make-bricks-without-clay",children:[]}],c={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"That's what we're calling the original ASP.Net now, right? This is a guide on how ",Object(o.b)("u",null,"not")),Object(o.b)("p",null," to expose all your static files to the world at large when working with the old (well, current) ASP.Net stack. How to move from a blacklisting approach to a whitelisting approach. Not clear? Stick around; I'll get better."),Object(o.b)("p",null," Oh and that's not all, we've also got.... drumroll:"),Object(o.b)("h2",{id:"support-for-html5-history-api"},"Support for ",Object(o.b)("a",{parentName:"h2",href:"https://html.spec.whatwg.org/multipage/browsers.html#the-history-interface"},"HTML5 History API"),"!"),Object(o.b)("p",null,"What that means, in as close to English as I can get it, is real URLs for Single Page Applications. None of that hash-based routing malarkey. So, ",Object(o.b)("inlineCode",{parentName:"p"},"https://i-am-your-domain.com/i-am-your-route")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"https://i-am-your-domain.com/<em>#/</em>i-am-your-route"),". (For a more in depth look at the different sorts of routing SPA's can use then take a look at the ",Object(o.b)("a",{parentName:"p",href:"http://rackt.org/history/stable/GettingStarted.html"},"excellent docs")," by the folk behind ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rackt/react-router"},"React Router"),". These concepts are not React specific and can be applied to any SPA technology.)"),Object(o.b)("h2",{id:"usestaticfiles"},"UseStaticFiles"),Object(o.b)("p",null,"You may be aware that historically ASP.Net has been somewhat unusual in its approach to serving static files. Essentially, all the files in a project are theoretically servable. Okay, that's not entirely true; things like the ",Object(o.b)("inlineCode",{parentName:"p"},"web.config")," files etc are not going to be handed over to someone browsing your site. But other files that you might well want kept away from prying eyes may be. So your ",Object(o.b)("a",{parentName:"p",href:"http://www.typescriptlang.org/"},"TypeScript")," files, your ",Object(o.b)("a",{parentName:"p",href:"http://lesscss.org/"},"Less")," files are all up for grabs unless you take action to block access to them. This is, and has always been, bad."),Object(o.b)("p",null,'The ASP.Net team know this and things are changing with ASP.Net 5. With the new stack you have to say "these are the static files we want people to access" in the form of an ',Object(o.b)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-us/library/dn782589(v=vs.113).aspx">app.UseStaticFiles()</a>')," declaration. This is mighty similar to how you do things in other frameworks such as ",Object(o.b)("a",{parentName:"p",href:"http://expressjs.com/en/starter/static-files.html"},"Express"),". To quote the ",Object(o.b)("a",{parentName:"p",href:"https://docs.asp.net/en/latest/fundamentals/static-files.html#serving-static-files"},"docs"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"By default, static files are stored in the webroot of your project. The location of the webroot is defined in the project\u2019s ",Object(o.b)("inlineCode",{parentName:"p"},"project.json")," file where the default is wwwroot."),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'"webroot": "wwwroot"\n')),Object(o.b)("p",{parentName:"blockquote"},"Static files can be stored in any folder under the webroot and accessed with a relative path to that root. For example, when you create a default Web application project using Visual Studio, there are several folders created within the webroot folder - ",Object(o.b)("inlineCode",{parentName:"p"},"css"),", ",Object(o.b)("inlineCode",{parentName:"p"},"images")," and ",Object(o.b)("inlineCode",{parentName:"p"},"js"),". In order to directly access an image in the images subfolder, the URL would look like the following:"),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"http://&lt;yourApp&gt;/images/&lt;imageFileName&gt;"))),Object(o.b)("p",null,"So how do we get this behaviour with ASP.Net vOld? Well, it's just a matter of ",Object(o.b)("inlineCode",{parentName:"p"},"web.config")," URL rewrite twiddling:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n  \x3c!-- other config --\x3e\n\n  <system.webServer>\n    <rewrite>\n      <rules>\n        <rule name="Map empty URLs to the index.html">\n          <match url="^$" />\n          <action type="Rewrite" url="/index.html" />\n        </rule>\n        <rule name="Map all requests with a \'.\' in to the \'build\' directory" stopProcessing="true">\n          <match url="^(.*[.].*)$" />\n          <action type="Rewrite" url="/build/{R:1}" />\n        </rule>\n      </rules>\n    </rewrite>\n  </system.webServer>\n</configuration>\n')),Object(o.b)("p",null,"My ",Object(o.b)("inlineCode",{parentName:"p"},"webroot")," is named ",Object(o.b)("inlineCode",{parentName:"p"},"build")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"wwwroot"),". The 2 URL rewrite rules above do the following:"),Object(o.b)("dl",null,Object(o.b)("dt",null,"Map empty URLs to the index.html"),Object(o.b)("dd",null,"Empty URLs (ie the URL for the root of your site) are mapped to ",Object(o.b)("code",null,"index.html"),". The ",Object(o.b)("code",null,"index.html")," in the ",Object(o.b)("code",null,"build")," folder is the home page of this particular site and the next rule will make sure that we hit that. (Since we haven't set ",Object(o.b)("code",null,"stopProcessing")," to ",Object(o.b)("code",null,"true")," for this particular rule the next rule will be processed after this one.)"),Object(o.b)("dt",null,"Map all requests with a '.' in to the 'build' directory"),Object(o.b)("dd",null,'All URLs with a "." in the title (including ',Object(o.b)("code",null,"index.html"),") are redirected to the ",Object(o.b)("code",null,"build"),' folder. All static files have a "." in them because filenames have suffixes. This essentially means all requests for files are served from the ',Object(o.b)("code",null,"build")," folder. In this case we have set ",Object(o.b)("code",null,"stopProcessing")," to ",Object(o.b)("code",null,"true")," which means that any URLs that matched this rule will be not be affected by any subsequent rules.")),Object(o.b)("p",null,"So if anyone sneakily tries to sneakily browse to say, ",Object(o.b)("inlineCode",{parentName:"p"},"http://&lt;yourApp&gt;/js/app.ts")," then they'll be nicely redirected to the non-existent ",Object(o.b)("inlineCode",{parentName:"p"},"build/js/app.ts"),". 404 in your face!"),Object(o.b)("h2",{id:"i-am-spartucus"},'"I am SPArtucus"'),Object(o.b)("p",null,"When you have a Single Page Application you want the same web experience as a server side rendered web app. What I mean by this is: routing just works. You want people to be able to go to ",Object(o.b)("inlineCode",{parentName:"p"},"https://i-am-your-domain.com/i-am-your-route")," and get your site at the specified route. Happily, whether you're using React Router, Angular UI Router or something else, the client side is covered. They can be configured to detect the route that you enter at and serve up the SPA in the relevant state. But you have to meet them halfway; the server needs to do its bit."),Object(o.b)("p",null,"When a URL is requested that doesn't look like a request for a static file, let's make the (reasonable) assumption that this is a route URL and serve up the shell SPA page. So, for my own example of an Angular 1.x app I want the server to hand over ",Object(o.b)("inlineCode",{parentName:"p"},"/build/index.html"),"."),Object(o.b)("p",null,'This is the magic that makes real URLs and SPAs work. Provided the client hasn\'t requested a static file, every request to the server will be responded to with our very own "I am SPArtucus"; the shell SPA page. This is catered for by the addition of another new rule to our ',Object(o.b)("inlineCode",{parentName:"p"},"web.config"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n  \x3c!-- other config --\x3e\n\n  <system.webServer>\n    <rewrite>\n      <rules>\n        <rule name="Map empty URLs to the index.html">\n          <match url="^$" />\n          <action type="Rewrite" url="/index.html" />\n        </rule>\n        <rule name="Map all requests with a \'.\' in to the \'build\' directory" stopProcessing="true">\n          <match url="^(.*[.].*)$" />\n          <action type="Rewrite" url="/build/{R:1}" />\n        </rule>\n        <rule name="Map all other URLs to the index.html - this to support our SPA routes">\n          <match url="^.*$" />\n          <action type="Rewrite" url="/build/index.html" />\n        </rule>\n      </rules>\n    </rewrite>\n  </system.webServer>\n</configuration>\n')),Object(o.b)("dl",null,Object(o.b)("dt",null,"Map all other URLs to the index.html - this to support our SPA routes"),Object(o.b)("dd",null,"Our new rule says \"whatever URL turns up, if it hasn't been catered for by an existing rule, well it must be a SPA route, so we'll serve up the shell SPA page of ",Object(o.b)("code",null,"build/index.html"),'".')),Object(o.b)("h2",{id:"data-data-data-i-cant-make-bricks-without-clay"},"Data! Data! Data!.. I can't make bricks without clay."),Object(o.b)("p",null,"Sherlock Holmes was onto something; most applications are nothing without data. What you've got at present is an application that carefully restricts access to static files and, for all other requests, serves up our shell SPA page. So let's relax our final rule a little to make data access a thing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n  \x3c!-- other config --\x3e\n\n  <system.webServer>\n    <rewrite>\n      <rules>\n        <rule name="Map empty URLs to the index.html">\n          <match url="^$" />\n          <action type="Rewrite" url="/index.html" />\n        </rule>\n        <rule name="Map all requests with a \'.\' in to the \'build\' directory" stopProcessing="true">\n          <match url="^(.*[.].*)$" />\n          <action type="Rewrite" url="/build/{R:1}" />\n        </rule>\n        <rule name="Map non-api URLs to the index.html - this to support our SPA routes">\n          <match url="^(api/).*$" negate="true" ignoreCase="true" />\n          <action type="Rewrite" url="/build/index.html" />\n        </rule>\n      </rules>\n    </rewrite>\n  </system.webServer>\n</configuration>\n')),Object(o.b)("dl",null,Object(o.b)("dt",null,"Map non-api URLs to the index.html - this to support our SPA routes"),Object(o.b)("dd",null,'This amended rule says "whatever URL turns up, ',Object(o.b)("em",null,"unless it begins ",Object(o.b)("code",null,'"api/"')),", if it hasn't been catered for by an existing rule, well it must be a SPA route, so we'll serve up the shell SPA page of ",Object(o.b)("code",null,"build/index.html"),'".')),Object(o.b)("p",null,"This allows us to perform data access by prefixing all the Web API routes with ",Object(o.b)("inlineCode",{parentName:"p"},'"api/"'),". I've picked this because it is the default location for ASP.Net Web API routes. It is (like most things) entirely configurable. To see a working implementation of this complete approach then take a look at the PoorClaresAngular project ",Object(o.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/poorclaresarundel/tree/15e7d4ddc0f1c06fe326b44c3bdc71ceb554bf73"},"here"),"."))}u.isMDXComponent=!0}}]);
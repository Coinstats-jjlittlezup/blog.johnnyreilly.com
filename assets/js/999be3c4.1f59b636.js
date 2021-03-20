(window.webpackJsonp=window.webpackJsonp||[]).push([[686],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,b=h["".concat(i,".").concat(p)]||h[p]||c[p]||r;return n?a.a.createElement(b,s(s({ref:t},d),{},{components:n})):a.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(8),r=(n(0),n(1176)),i={title:"Pretending to be someone you're not and the dark pit of despair",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["IE 11","runas","Coded UI","nomerge","Internet Exporer"],hide_table_of_contents:!1},s={permalink:"/2014/11/26/Coded-UI-IE-11-and-the-runas-problem",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-11-26-Coded-UI-IE-11-and-the-runas-problem.md",source:"@site/blog/2014-11-26-Coded-UI-IE-11-and-the-runas-problem.md",description:'(Coded UI, IE 11 and the "runas" problem)',date:"2014-11-26T00:00:00.000Z",formattedDate:"November 26, 2014",tags:[{label:"IE 11",permalink:"/tags/ie-11"},{label:"runas",permalink:"/tags/runas"},{label:"Coded UI",permalink:"/tags/coded-ui"},{label:"nomerge",permalink:"/tags/nomerge"},{label:"Internet Exporer",permalink:"/tags/internet-exporer"}],title:"Pretending to be someone you're not and the dark pit of despair",readingTime:10.445,truncated:!1,prevItem:{title:"What's in a (Domain) Name?",permalink:"/2014/12/05/whats-in-a-name"},nextItem:{title:"Using Gulp in Visual Studio instead of Web Optimization",permalink:"/2014/11/04/using-gulp-in-visual-studio-instead-of-web-optimization"}},l=[{value:"<sub>(Coded UI, IE 11 and the &quot;runas&quot; problem)</sub>",id:"coded-ui-ie-11-and-the-runas-problem",children:[]},{value:"Sounds brilliant right? How could someone not love this?",id:"sounds-brilliant-right-how-could-someone-not-love-this",children:[]},{value:"And yet, and yet...",id:"and-yet-and-yet",children:[]},{value:"The &quot;runas&quot; Problem",id:"the-runas-problem",children:[]},{value:"The <strike>hack</strike>",id:"the-hack",children:[]},{value:"What do I think of the workaround?",id:"what-do-i-think-of-the-workaround",children:[]}],d={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"coded-ui-ie-11-and-the-runas-problem"},Object(r.b)("sub",null,'(Coded UI, IE 11 and the "runas" problem)')),Object(r.b)("p",null," \"I'm not angry, I'm just disappointed.\""),Object(r.b)("p",null,"That's kind of how I feel about Coded UI tests. It may well be that you've never heard of them - in my experience very few people seem to be aware of them. What are they? Well, I've never used ",Object(r.b)("a",{parentName:"p",href:"http://www.seleniumhq.org/"},"Selenium")," but as best I understand Coded UI is Microsoft's own version of that. Namely it's a way to automate testing, in my case browser-based testing. You can write a suite of tests that will spin up your application and test it out, going from screen to screen, URL to URL and asserting all is as you would expect."),Object(r.b)("p",null,"The project that I'm currently working on has a pretty comprehensive set of tests covering the use of the application. Each night as the clock strikes midnight a lonely computer in the West End of London whirrs into life and runs the full suite. It takes about 8 hours and at the end a report slips into your inbox letting you know of any failures."),Object(r.b)("h2",{id:"sounds-brilliant-right-how-could-someone-not-love-this"},"Sounds brilliant right? How could someone not love this?"),Object(r.b)("p",null,"Well a number of reasons. First of all, ",Object(r.b)("em",{parentName:"p"},"it takes 8 hours"),"!!!! That's a long time; I'd rather learn what I broke today rather than tomorrow."),Object(r.b)("p",null,"Also, and this is probably more significant, Coded UI tests are pretty flaky. Let me qualify that. For a test to be particularly useful it has to be quick, repeatable and reliable. As I've said, Coded UI tests are not quick."),Object(r.b)("p",null,"By their very nature integration tests (of which Coded UI tests are a type) can never be entirely reliably repeatable. They test your app in it's entirety. So, for example, if a 3rd party service goes down for 5 minutes then you will get failed tests. You'll burn time investigating these false positives."),Object(r.b)("p",null,"Further to that, Coded UI tests are repeatable, except when they're not. I've seen colleagues reduced to near tears by incredible sensitivity of Coded UI tests. Out of the box Coded UI tests appear to ship with the ",Object(r.b)("a",{parentName:"p",href:"http://blog.codinghorror.com/the-works-on-my-machine-certification-program/"},'"Works on my machine"')," guarantee. It requires far more effort that you'd expect to come up with tests that can be reliably expected to pass. They will fail for surprising reasons. For instance, did you know that using the 2.x branch of jQuery won't work with Coded UI? ",Object(r.b)("a",{parentName:"p",href:"https://connect.microsoft.com/VisualStudio/Feedback/Details/794841"},"Neither did I.")," I've lost track of the time that has been wasted running the same test in multiple different environments trying to identify what exactly is upsetting Coded UI about the environment this time."),Object(r.b)("p",null,"It is sad but true that with Coded UI tests you can spend an ",Object(r.b)("em",{parentName:"p"},"enormous")," amount of time maintaining the test pack on a day to day basis. As infrastructure and project dependencies are upgraded you will sadly discover Coded UI has once again gone into the foetal position and has to tempted back to normal functioning by whispering sweet nothings in it's ear. (",Object(r.b)("em",{parentName:"p"},'"It\'s not true that they\'ve ended support for Windows XP" / "IE 6 will live forever"')," and so on)"),Object(r.b)("p",null,"Coded UI also appears to be badly supported by Microsoft. Documentation is pretty sparse and, as we'll come back to in a minute, Coded UI is sometimes broken or damaged by other products shipped by Microsoft. This makes it hard to have faith in Coded UI. Indeed, if you're thinking of automating your QA testing my advice would be \"look into Selenium\". Not because I've used it (I haven't) but those I've met who have used Selenium and Coded UI say Selenium wins hands down."),Object(r.b)("h2",{id:"and-yet-and-yet"},"And yet, and yet..."),Object(r.b)("p",null,"All of the above said, if you have a Coded UI test suite it can still pay dividends. Significant dividends. As I mentioned, my current project has a significant coverage of Coded UI tests. We've crawled over a lot of broken glass to put these together. But now they're there it is undeniably useful."),Object(r.b)("p",null,"Every now and then we'll do a significant refactor of part of the application. For instance, we've entirely changed our persistence strategy in the app but been able to check the code in with a high degree of confidence gleaned from running our test suite using the refactored codebase."),Object(r.b)("p",null,"Let me be clear: Coded UI tests can be useful."),Object(r.b)("h2",{id:"the-runas-problem"},'The "runas" Problem'),Object(r.b)("p",null,'Long preamble over, this post is about how to work around the latest issue Coded UI has thrown in our direction. I call it the "runas" problem. Our application is a Knockout / ASP.Net MVC web app built to be used in an intranet environment. By that I mean that identity is handled by Active Directory / ',Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Integrated_Windows_Authentication"},"Windows Authentication"),". When someone logs into our app we know who they are without them having to directly supply us with a username and password. No, by logging into their computer they have announced just who they are and Internet Explorer (for it is he) will pass along the credentials. (The app can be used with pretty much any browser but we're only mandated to support IE 9+.)"),Object(r.b)("p",null,"In order that we can test the app we have a number of test accounts set up in Active Directory. These test accounts have been assigned various roles (viewer / editor / administrator etc). Our tests are designed to run using these accounts in order that all scenarios can be adequately tested."),Object(r.b)("p",null,"To achieve this lofty goal the following code (or something very like it) is executed as the first step in any Coded UI test:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'string browserLocation = "C:\\\\Program Files\\\\Internet Explorer\\\\iexplore.exe";\nstring url = "http://localhost:12345/";\nstring username = "test.editor";\nstring domain = "theDomain";\nvar password = new SecureString();\nforeach (char c in "test.editor.password")\n{\n    password.AppendChar(c);\n}\n\nApplicationUnderTest.Launch(browserLocation, null, url, username, password, domain);\n')),Object(r.b)("p",null,'What this does is fire up Internet Explorer as the supplied user of theDomain\\test.editor, and navigate to the home page. With that as our starting place we could dependably then run a test as this test user. This was a solution not without quirks (on occasion Coded UI tests would "stutter" - repeating each keypress 3 times with calamitous effects). But generally, this worked.'),Object(r.b)("p",null,"Until that is either Visual Studio 2013 Update 3 or Internet Explorer 11 was installed. One of these (and it appears to be hotly contested) broke the ability to run the above code successfully. After these were installed running the above code resulted in the following error message:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'"The application cannot be started. This could be due to one of the following reasons:'),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"Another instance of the application is already running and only one instance can be running at a time."),Object(r.b)("li",{parentName:"ol"},"The application started another process and has now stopped. You may need to launch the process directly."),Object(r.b)("li",{parentName:"ol"},'You do not have sufficient privileges for this application." File: C:\\Program Files\\Internet Explorer\\iexplore.exe."'))),Object(r.b)("p",null,"Lamentably, this was pretty much unresolvable and ",Object(r.b)("a",{parentName:"p",href:"https://connect.microsoft.com/VisualStudio/feedbackdetail/view/949049/coded-ui-cannot-run-as-a-different-user-with-visual-studio-2013-update-3"},"logging it with Microsoft yielded nothing helpful"),". This is what I mean about Coded UI being badly supported by Microsoft. Despite my best efforts to report this issue both to Connect and ",Object(r.b)("a",{parentName:"p",href:"http://social.msdn.microsoft.com/Forums/vstudio/en-US/f48665e4-569a-4b67-9bdb-5522b2adffb2/cannot-run-coded-ui-tests-as-different-user-on-windows-81?forum=vsmantest#28c9decb-b579-4848-a7a9-f41c57584d59"},"elsewhere")," and in the end nothing useful happened."),Object(r.b)("p",null,"So what to do? I still have Coded UI tests, I still need to be able to run them. And crucially I need to be able to run them impersonating a different user. What to do indeed...."),Object(r.b)("h2",{id:"the-hack"},"The ",Object(r.b)("strike",null,"hack")),Object(r.b)("p",null," workaround"),Object(r.b)("p",null,"After IE 11 / Visual Studio Update 3 / whatev's was installed I was left with a setup that allowed me to run Coded UI tests, ",Object(r.b)("u",null,"but only")),Object(r.b)("p",null," as the current user. On that basis I started looking into a little MVC jiggery pokery. All my controllers inherit from a single base controller. Inside there I placed the following extra override:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'public abstract class BaseController : System.Web.Mvc.Controller\n{\n  //...\n\n  protected override void OnAuthorization(AuthorizationContext filterContext)\n  {\n#if DEBUG\n    if (filterContext.HttpContext.IsDebuggingEnabled)// Is compilation debug="true" set in the web.config?\n    {\n      var userToImpersonate = Session["UserToImpersonate"] as string;\n      if (!string.IsNullOrEmpty(userToImpersonate))\n      {\n        // userToImpersonate example: "test.editor@theDomain.com"\n        filterContext.HttpContext.User = new RolePrincipal(new WindowsIdentity(userToImpersonate));\n      }\n    }\n#endif\n      base.OnAuthorization(filterContext);\n  }\n\n  //...\n}\n')),Object(r.b)("p",null,"Each request will trigger this method as one of the first steps in the MVC pipeline. What it does is checks the ",Object(r.b)("inlineCode",{parentName:"p"},"Session")," for a user to impersonate. (Yes I'm as wary of Session as the next chap - but in this case it's the right tool for the job.) If a user has been specified then it replaces the current user with the ",Object(r.b)("inlineCode",{parentName:"p"},"Session")," user. From this point forwards the app is effectively running as that user. That's great!"),Object(r.b)("p",null,'In order that Coded UI can make use of this mechanism we need to introduce a "hook". This is going to look a bit hacky - bear with me. Inside ',Object(r.b)("inlineCode",{parentName:"p"},"Global.asax.cs")," we're going to add a ",Object(r.b)("inlineCode",{parentName:"p"},"Session_Start")," method:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'protected void Session_Start(object sender, EventArgs eventArgs)\n{\n#if DEBUG\n    // If a user to impersonate has been supplied then add this user to the session\n    // Impersonation will happen in the OnAuthorization method of our base MVC controller\n    // Note, this is only allowed in debug mode - not in release mode\n    // This exists purely to support coded ui tests\n    if (Context.IsDebuggingEnabled)  // Is compilation debug="true" set in the web.config?\n    {\n        var userToImpersonate = Request.QueryString["UserToImpersonate"] as string;\n        if (!string.IsNullOrEmpty(userToImpersonate))\n        {\n            Session.Add("UserToImpersonate", userToImpersonate);\n        }\n    }\n#endif\n}\n')),Object(r.b)("p",null,"For the first Request in a Session this checks the ",Object(r.b)("inlineCode",{parentName:"p"},"QueryString")," for a parameter called ",Object(r.b)("inlineCode",{parentName:"p"},"UserToImpersonate"),". If it's found then it's placed into ",Object(r.b)("inlineCode",{parentName:"p"},"Session"),". With this hook exposed we can now amend the first step that all our Coded UI tests follow:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'// Various lines commented out as doesn\'t work with IE 11 - left as an example of how it could be done in the past\n//string browserLocation = "C:\\\\Program Files\\\\Internet Explorer\\\\iexplore.exe";\nstring url = "http://localhost:12345/";\nstring username = "test.editor";\nstring domain = "theDomain.com";\n//var password = new SecureString();\n//foreach (char c in "test.editor.password")\n//{\n//    password.AppendChar(c);\n//}\n\n//ApplicationUnderTest.Launch(browserLocation, null, url, username, password, domain);\n\n// Suffixing url with UrlToImpersonate which will be picked up in Session_Start and used to impersonate\n// in OnAuthorization in BaseController.  Also no longer using ApplicationUnderTest.Launch; switched to \n// BrowserWindow.Launch\n// No longer used parameters: browserLocation, password\nvar userToImpersonate = username + "@" + domain; // eg "test.editor@theDomain.com"\nvar urlWithUser = url + "?UserToImpersonate=" + HttpUtility.UrlEncode(userToImpersonate);\nvar browser = BrowserWindow.Launch(urlWithUser, "-nomerge"); // "-nomerge" flag forces a new session\n')),Object(r.b)("p",null,"As you can see we actually need less when we're using this approach. We no longer need to directly specify the password or the browser location. And the user to impersonate is now passed in as the part of the initial URL used to launch the test."),Object(r.b)("p",null,'Pay careful attention to the "-nomerge" flag that is passed in. This ensures that when another browser instance is opened a new session will be started. This is essential for "multi-user" tests that run tests for ',Object(r.b)("em",{parentName:"p"},"different"),' users as part of the same test. It ensures that "test.editor" and "test.different.editor" can co-exist happily.'),Object(r.b)("h2",{id:"what-do-i-think-of-the-workaround"},"What do I think of the workaround?"),Object(r.b)("p",null,"This approach works reliably and dependably. More so than the original approach which on occasion wouldn't work or would \"stutter\" keypresses. That's the good news."),Object(r.b)("p",null,"The not so good news is that this approach is, in my view, a bit of hack. I want you to know that this isn't my ideal."),Object(r.b)("p",null,"I ",Object(r.b)("em",{parentName:"p"},"really"),' don\'t like having to change the actual system code to facilitate the impersonation requirement. Naturally we only ship the release and not the debug builds to Production so the "back door" that this approach provides will not exist in our Production builds. It will only be accessible in our development environments and on our Coded UI test server. But it feels oh so wrong that there is an effective potential back door in the system now. Well, only if the stars were to align in a really terrible (and admittedly rather unlikely) way. But still, you take my point. Caveat emptor and all that. This is something of a cutdown example to illustrate the point. If anyone else intends to use this then I\'d suggest doing more to safeguard your approach. Implementing impersonation whitelists so "any" user cannot be impersonated would be a sensible precaution to start with.'),Object(r.b)("p",null,"Perhaps this is just one more reason that I'm not that enamoured of Coded UI. Once again it is useful but I've had to compromise more than I'd like to keep it's use. If anyone out there has a better solution I would ",Object(r.b)("em",{parentName:"p"},"love")," to hear from you."))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,b=h["".concat(r,".").concat(d)]||h[d]||p[d]||i;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},915:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),i=(n(0),n(1159)),r={title:"Auth0, TypeScript and ASP.NET Core",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["ASP.Net Core","Auth0","TypeScript","OAuth","React"],hide_table_of_contents:!1},s={permalink:"/2018/01/14/auth0-typescript-and-aspnet-core",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-01-14-auth0-typescript-and-aspnet-core.md",source:"@site/blog/2018-01-14-auth0-typescript-and-aspnet-core.md",description:"Most applications I write have some need for authentication and perhaps authorisation too. In fact, most apps most people write fall into that bracket. Here's the thing: Auth done well is a \\big\\ chunk of work. And the minute you start thinking about that you almost invariably lose focus on the thing you actually want to build and ship.",date:"2018-01-14T00:00:00.000Z",tags:[{label:"ASP.Net Core",permalink:"/tags/asp-net-core"},{label:"Auth0",permalink:"/tags/auth-0"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"OAuth",permalink:"/tags/o-auth"},{label:"React",permalink:"/tags/react"}],title:"Auth0, TypeScript and ASP.NET Core",readingTime:9.405,truncated:!1,prevItem:{title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",permalink:"/2018/01/28/webpack-4-ts-loader-fork-ts-checker"},nextItem:{title:"ts-loader 2017 retrospective",permalink:"/2017/12/24/ts-loader-2017-retrospective"}},c=[{value:"What I wanted to build",id:"what-i-wanted-to-build",children:[]},{value:"Boil a Plate",id:"boil-a-plate",children:[]},{value:"The Walkthrough",id:"the-walkthrough",children:[]},{value:"Setup Auth0",id:"setup-auth0",children:[{value:"Client",id:"client",children:[]},{value:"API",id:"api",children:[]}]},{value:"Running the App",id:"running-the-app",children:[{value:"Production build",id:"production-build",children:[]},{value:"Debugging",id:"debugging",children:[]}]},{value:"The Tour",id:"the-tour",children:[{value:"authStore.ts",id:"authstorets",children:[]},{value:"UserController.cs",id:"usercontrollercs",children:[]},{value:"UserController.cs",id:"usercontrollercs-1",children:[]},{value:"Startup.cs",id:"startupcs",children:[]}]},{value:"Authorization",id:"authorization",children:[{value:"UserController.cs",id:"usercontrollercs-2",children:[]},{value:"Scopes.cs",id:"scopescs",children:[]},{value:"Startup.cs",id:"startupcs-1",children:[]},{value:"HasScopeHandler.cs",id:"hasscopehandlercs",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Most applications I write have some need for authentication and perhaps authorisation too. In fact, most apps most people write fall into that bracket. Here's the thing: Auth done well is a ","*","big","*"," chunk of work. And the minute you start thinking about that you almost invariably lose focus on the thing you actually want to build and ship."),Object(i.b)("p",null," So this Christmas I decided it was time to take a look into offloading that particular problem onto someone else. I knew there were third parties who provided Auth-As-A-Service - time to give them a whirl. On the recommendation of a friend, I made Auth0 my first port of call. Lest you be expecting a full breakdown of the various players in this space, let me stop you now; I liked Auth0 so much I strayed no further. Auth0 kicks AAAS. (I'm so sorry)"),Object(i.b)("h2",{id:"what-i-wanted-to-build"},"What I wanted to build"),Object(i.b)("p",null,'My criteria for "auth success" was this:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"I want to build a SPA, specifically a React SPA. Ideally, I shouldn't need a back end of my own at all"),Object(i.b)("li",{parentName:"ul"},"I want to use TypeScript on my client.")),Object(i.b)("p",null,"But, for when I do implement a back end:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"I want that to be able to use the client side's Auth tokens to allow access to Auth routes on my server."),Object(i.b)("li",{parentName:"ul"},"\u200eI want to able to identify the user, given the token, to provide targeted data"),Object(i.b)("li",{parentName:"ul"},"Oh, and I want to use .NET Core 2 for my server.")),Object(i.b)("p",null,"And in achieving all of the I want to add minimal code to my app. Not War and Peace. My code should remain focused on doing what it does."),Object(i.b)("h2",{id:"boil-a-plate"},"Boil a Plate"),Object(i.b)("p",null,"I ended up with unqualified ticks for all my criteria, but it took some work to find out. I will say that Auth0 do travel the extra mile in terms of getting you up and running. When you create a new Client in Auth0 you're given the option to download a quick start using the technology of your choice."),Object(i.b)("p",null,"This was a massive plus for me. I took the quickstart provided and ran with it to get me to the point of meeting my own criteria. You can use this boilerplate for your own ends. Herewith, a walkthrough:"),Object(i.b)("h2",{id:"the-walkthrough"},"The Walkthrough"),Object(i.b)("p",null,"Fork and clone the repo at this location: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/auth0-react-typescript-asp-net-core"},"https://github.com/johnnyreilly/auth0-react-typescript-asp-net-core"),"."),Object(i.b)("p",null,"What have we got? 2 folders, ClientApp contains the React app, Web contains the ASP.NET Core app. Now we need to get setup with Auth0 and customise our config."),Object(i.b)("h2",{id:"setup-auth0"},"Setup Auth0"),Object(i.b)("p",null,"Here's how to get the app set up with Auth0; you're going to need to sign up for a (free) Auth0 account. Then login into Auth0 and go to the management portal."),Object(i.b)("h3",{id:"client"},"Client"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a Client with the name of your choice and use the Single Page Web Applications template."),Object(i.b)("li",{parentName:"ul"},"From the new Client Settings page take the Domain and Client ID and update the similarly named properties in the ",Object(i.b)("inlineCode",{parentName:"li"},"appsettings.Development.json")," and ",Object(i.b)("inlineCode",{parentName:"li"},"appsettings.Production.json")," files with these settings."),Object(i.b)("li",{parentName:"ul"},"To the Allowed Callback URLs setting add the URLs: ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:3000/callback,http://localhost:5000/callback")," ","-"," the first of these faciliates running in Debug mode, the second in Production mode. If you were to deploy this you'd need to add other callback URLs in here too.")),Object(i.b)("h3",{id:"api"},"API"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create an API with the name of your choice (I recommend the same as the Client to avoid confusion), an identifier which can be anything you like; I like to use the URL of my app but it's your call."),Object(i.b)("li",{parentName:"ul"},"From the new API Settings page take the Identifier and update the Audience property in the ",Object(i.b)("inlineCode",{parentName:"li"},"appsettings.Development.json")," and ",Object(i.b)("inlineCode",{parentName:"li"},"appsettings.Production.json")," files with that value.")),Object(i.b)("h2",{id:"running-the-app"},"Running the App"),Object(i.b)("h3",{id:"production-build"},"Production build"),Object(i.b)("p",null,"Build the client app with ",Object(i.b)("inlineCode",{parentName:"p"},"yarn build")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"ClientApp")," folder. (Don't forget to ",Object(i.b)("inlineCode",{parentName:"p"},"yarn install")," first.) Then, in the ",Object(i.b)("inlineCode",{parentName:"p"},"Web")," folder ",Object(i.b)("inlineCode",{parentName:"p"},"dotnet restore"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dotnet run")," and open your browser to ",Object(i.b)("a",{parentName:"p",href:"http://localhost:5000"},Object(i.b)("inlineCode",{parentName:"a"},"http://localhost:5000"))),Object(i.b)("h3",{id:"debugging"},"Debugging"),Object(i.b)("p",null,"Run the client app using webpack-dev-server using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn start")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"ClientApp")," folder. Fire up VS Code in the root of the repo and hit F5 to debug the server. Then open your browser to ",Object(i.b)("a",{parentName:"p",href:"http://localhost:3000"},Object(i.b)("inlineCode",{parentName:"a"},"http://localhost:3000"))),Object(i.b)("h2",{id:"the-tour"},"The Tour"),Object(i.b)("p",null,'When you fire up the app you\'re presented with "you are not logged in!" message and the option to login. Do it, it\'ll take you to the Auth0 "lock" screen where you can sign up / login. Once you do that you\'ll be asked to confirm access:'),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://2.bp.blogspot.com/-gNCT_tnatho/Wlr776dvpeI/AAAAAAAAIEo/Fb4c9ViaXwEHwGR95eXW9CzpjWsHiPuvgCLcBGAs/s1600/Screenshot%2B2018-01-13%2B18.40.21.png"},"![null]","(<https://2.bp.blogspot.com/-gNCT_tnatho/Wlr776dvpeI/AAAAAAAAIEo/Fb4c9ViaXwEHwGR95eXW9CzpjWsHiPuvgCLcBGAs/s400/Screenshot%2B2018-01-13%2B18.40.21.png> =395x400)"),"All this is powered by Auth0's ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/auth0-js"},"auth0-js")," npm package. (Excellent type definition files are available from Definitely Typed; I'm using the ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@types/auth0-js"},"@types/auth0-js")," package DT publishes.) Usage of which is super simple; it exposes an ",Object(i.b)("inlineCode",{parentName:"p"},"authorize")," method that when called triggers the Auth0 lock screen. Once you've \"okayed\" you'll be taken back to the app which will use the ",Object(i.b)("inlineCode",{parentName:"p"},"parseHash")," method to extract the access token that Auth0 has provided. Take a look at how our ",Object(i.b)("inlineCode",{parentName:"p"},"authStore")," makes use of auth0-js: (don't be scared; it uses mobx - but you could use anything)"),Object(i.b)("h3",{id:"authstorets"},"authStore.ts"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { Auth0UserProfile, WebAuth } from 'auth0-js';\nimport { action, computed, observable, runInAction } from 'mobx';\nimport { IAuth0Config } from '../../config';\nimport { StorageFacade } from '../storageFacade';\n\ninterface IStorageToken {\n  accessToken: string;\n  idToken: string;\n  expiresAt: number;\n}\n\nconst STORAGE_TOKEN = 'storage_token';\n\nexport class AuthStore {\n  @observable.ref auth0: WebAuth;\n  @observable.ref userProfile: Auth0UserProfile;\n  @observable.ref token: IStorageToken;\n\n  constructor(config: IAuth0Config, private storage: StorageFacade) {\n    this.auth0 = new WebAuth({\n      domain: config.domain,\n      clientID: config.clientId,\n      redirectUri: config.redirectUri,\n      audience: config.audience,\n      responseType: 'token id_token',\n      scope: 'openid email profile do:admin:thing' // the do:admin:thing scope is custom and defined in the scopes section of our API in the Auth0 dashboard\n    });\n  }\n\n  initialise() {\n    const token = this.parseToken(this.storage.getItem(STORAGE_TOKEN));\n    if (token) {\n      this.setSession(token);\n    }\n    this.storage.addEventListener(this.onStorageChanged);\n  }\n\n  parseToken(tokenString: string) {\n    const token = JSON.parse(tokenString || '{}');\n    return token;\n  }\n\n  onStorageChanged = (event: StorageEvent) => {\n    if (event.key === STORAGE_TOKEN) {\n      this.setSession(this.parseToken(event.newValue));\n    }\n  }\n\n  @computed get isAuthenticated() {\n    // Check whether the current time is past the \n    // access token's expiry time\n    return this.token && new Date().getTime() < this.token.expiresAt;\n  }\n\n  login = () => {\n    this.auth0.authorize();\n  }\n\n  handleAuthentication = () => {\n    this.auth0.parseHash((err, authResult) => {\n      if (authResult && authResult.accessToken && authResult.idToken) {\n        const token = {\n          accessToken: authResult.accessToken,\n          idToken: authResult.idToken,\n          // Set the time that the access token will expire at\n          expiresAt: authResult.expiresIn * 1000 + new Date().getTime()\n        };\n\n        this.setSession(token);\n      } else if (err) {\n        // tslint:disable-next-line:no-console\n        console.log(err);\n        alert(`Error: ${err.error}. Check the console for further details.`);\n      }\n    });\n  }\n\n  @action\n  setSession(token: IStorageToken) {\n    this.token = token;\n    this.storage.setItem(STORAGE_TOKEN, JSON.stringify(token));\n  }\n\n  getAccessToken = () => {\n    const accessToken = this.token.accessToken;\n    if (!accessToken) {\n      throw new Error('No access token found');\n    }\n    return accessToken;\n  }\n\n  @action\n  loadProfile = async () => {\n    const accessToken = this.token.accessToken;\n    if (!accessToken) {\n      return;\n    }\n\n    this.auth0.client.userInfo(accessToken, (err, profile) => {\n      if (err) { throw err; }\n\n      if (profile) {\n        runInAction(() => this.userProfile = profile);\n        return profile;\n      }\n\n      return undefined;\n    });\n  }\n\n  @action\n  logout = () => {\n    // Clear access token and ID token from local storage\n    this.storage.removeItem(STORAGE_TOKEN);\n    \n    this.token = null;\n    this.userProfile = null;\n  }\n}\n")),Object(i.b)("p",null,'Once you\'re logged in the app offers you more in the way of navigation options. A "Profile" screen shows you the details your React app has retrieved from Auth0 about you. This is backed by the ',Object(i.b)("inlineCode",{parentName:"p"},"client.userInfo")," method on ",Object(i.b)("inlineCode",{parentName:"p"},"auth0-js"),'. There\'s also a "Ping" screen which is where your React app talks to your ASP.NET Core server. The screenshot below illustrates the result of hitting the "Get Private Data" button:'),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-g42g4gnwNYw/Wlr8HRlfdfI/AAAAAAAAIEs/5nvEnHIbvXst4KhBc_2NKMiBBDyfMR1RACPcBGAYYCw/s1600/Screenshot%2B2018-01-13%2B18.47.49.png"},"![null]","(<https://3.bp.blogspot.com/-g42g4gnwNYw/Wlr8HRlfdfI/AAAAAAAAIEs/5nvEnHIbvXst4KhBc_2NKMiBBDyfMR1RACPcBGAYYCw/s400/Screenshot%2B2018-01-13%2B18.47.49.png> =400x340)"),"The \"Get Server to Retrieve Profile Data\" button is interesting as it illustrates that the server can get access to your profile data as well. There's nothing insecure here; it gets the details using the access token retrieved from Auth0 by the ClientApp and passed to the server. It's the API we set up in Auth0 that is in play here. The app uses the Domain and the access token to talk to Auth0 like so:"),Object(i.b)("h3",{id:"usercontrollercs"},"UserController.cs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'// Retrieve the access_token claim which we saved in the OnTokenValidated event\n    var accessToken = User.Claims.FirstOrDefault(c => c.Type == "access_token").Value;\n            \n    // If we have an access_token, then retrieve the user\'s information\n    if (!string.IsNullOrEmpty(accessToken))\n    {\n        var domain = _config["Auth0:Domain"];\n        var apiClient = new AuthenticationApiClient(domain);\n        var userInfo = await apiClient.GetUserInfoAsync(accessToken);\n\n        return Ok(userInfo);\n    }\n')),Object(i.b)("p",null,"We can also access the ",Object(i.b)("inlineCode",{parentName:"p"},"sub")," claim, which uniquely identifies the user:"),Object(i.b)("h3",{id:"usercontrollercs-1"},"UserController.cs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"// We're not doing anything with this, but hey! It's useful to know where the user id lives\n    var userId = User.Claims.FirstOrDefault(c => c.Type == System.Security.Claims.ClaimTypes.NameIdentifier).Value; // our userId is the sub value\n")),Object(i.b)("p",null,"The reason our ASP.NET Core app works with Auth0 and that we have access to the access token here in the first place is because of our startup code:"),Object(i.b)("h3",{id:"startupcs"},"Startup.cs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'public void ConfigureServices(IServiceCollection services)\n    {\n        var domain = $"https://{Configuration["Auth0:Domain"]}/";\n        services.AddAuthentication(options =>\n        {\n            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;\n            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;\n        }).AddJwtBearer(options =>\n        {\n            options.Authority = domain;\n            options.Audience = Configuration["Auth0:Audience"];\n            options.Events = new JwtBearerEvents\n            {\n                OnTokenValidated = context =>\n                {\n                    if (context.SecurityToken is JwtSecurityToken token)\n                    {\n                        if (context.Principal.Identity is ClaimsIdentity identity)\n                        {\n                            identity.AddClaim(new Claim("access_token", token.RawData));\n                        }\n                    }\n\n                    return Task.FromResult(0);\n                }\n            };\n        });\n\n        // ....\n')),Object(i.b)("h2",{id:"authorization"},"Authorization"),Object(i.b)("p",null,"We're pretty much done now; just one magic button to investigate: \"Get Admin Data\". If you presently try and access the admin data you'll get a ",Object(i.b)("inlineCode",{parentName:"p"},"403 Forbidden"),". It's forbidden because that endpoint relies on the ",Object(i.b)("inlineCode",{parentName:"p"},'"do:admin:thing"')," scope in our claims:"),Object(i.b)("h3",{id:"usercontrollercs-2"},"UserController.cs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'[Authorize(Scopes.DoAdminThing)]\n    [HttpGet("api/userDoAdminThing")]\n    public IActionResult GetUserDoAdminThing()\n    {\n        return Ok("Admin endpoint");\n    }\n')),Object(i.b)("h3",{id:"scopescs"},"Scopes.cs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'public static class Scopes\n    {\n         // the do:admin:thing scope is custom and defined in the scopes section of our API in the Auth0 dashboard\n        public const string DoAdminThing = "do:admin:thing";\n    }\n')),Object(i.b)("p",null,"This wired up in our ASP.NET Core app like so:"),Object(i.b)("h3",{id:"startupcs-1"},"Startup.cs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'services.AddAuthorization(options =>\n    {\n        options.AddPolicy(Scopes.DoAdminThing, policy => policy.Requirements.Add(new HasScopeRequirement(Scopes.DoAdminThing, domain)));\n    });\n\n    // register the scope authorization handler\n    services.AddSingleton<iauthorizationhandler, hasscopehandler="">();\n</iauthorizationhandler,>\n')),Object(i.b)("h3",{id:"hasscopehandlercs"},"HasScopeHandler.cs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'public class HasScopeHandler : AuthorizationHandler<hasscoperequirement>\n    {\n        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, HasScopeRequirement requirement)\n        {\n            // If user does not have the scope claim, get out of here\n            if (!context.User.HasClaim(c => c.Type == "scope" && c.Issuer == requirement.Issuer))\n                return Task.CompletedTask;\n\n            // Split the scopes string into an array\n            var scopes = context.User.FindFirst(c => c.Type == "scope" && c.Issuer == requirement.Issuer).Value.Split(\' \');\n\n            // Succeed if the scope array contains the required scope\n            if (scopes.Any(s => s == requirement.Scope))\n                context.Succeed(requirement);\n\n            return Task.CompletedTask;\n        }\n    }\n</hasscoperequirement>\n')),Object(i.b)("p",null,"The reason we're 403ing at present is because when our ",Object(i.b)("inlineCode",{parentName:"p"},"HasScopeHandler")," executes, ",Object(i.b)("inlineCode",{parentName:"p"},"requirement.Scope")," has the value of ",Object(i.b)("inlineCode",{parentName:"p"},'"do:admin:thing"')," and our ",Object(i.b)("inlineCode",{parentName:"p"},"scopes")," do not contain that value. To add it, go to your API in the Auth0 management console and add it:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://1.bp.blogspot.com/-XWDZYx9Y9yU/WlsUqI_Tk0I/AAAAAAAAIE8/r2ksEOsqG8cf2mvza-1TuFFWXFaZusykACLcBGAs/s1600/Screenshot%2B2018-01-14%2B08.26.54.png"},"![null]","(<https://1.bp.blogspot.com/-XWDZYx9Y9yU/WlsUqI_Tk0I/AAAAAAAAIE8/r2ksEOsqG8cf2mvza-1TuFFWXFaZusykACLcBGAs/s400/Screenshot%2B2018-01-14%2B08.26.54.png> =400x261)")),Object(i.b)("p",null,'Note that you can control how this scope is acquired using "Rules" in the Auth0 management portal.'),Object(i.b)("p",null,"You won't be able to access the admin endpoint yet because you're still rocking with the old access token; pre-newly-added scope. But when you next login to Auth0 you'll see a prompt like this:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-Bqom1m6bb9o/WlsV-lSG5QI/AAAAAAAAIFI/L4cCLbxjmmktBVAfXxsNsF-LXtaqNC5XACLcBGAs/s1600/Screenshot%2B2018-01-14%2B08.32.59.png"},"![null]","(<https://3.bp.blogspot.com/-Bqom1m6bb9o/WlsV-lSG5QI/AAAAAAAAIFI/L4cCLbxjmmktBVAfXxsNsF-LXtaqNC5XACLcBGAs/s400/Screenshot%2B2018-01-14%2B08.32.59.png> =327x400)"),"Which demonstrates that you're being granted an extra scope. With your new shiny access token you can now access the oh-so-secret Admin endpoint."),Object(i.b)("p",null,"I had some more questions about Auth0 as I'm still new to it myself. To see my question (and the very helpful answer!) go here: ",Object(i.b)("a",{parentName:"p",href:"https://community.auth0.com/questions/13786/get-user-data-server-side-what-is-a-good-approach"},"https://community.auth0.com/questions/13786/get-user-data-server-side-what-is-a-good-approach")))}u.isMDXComponent=!0}}]);
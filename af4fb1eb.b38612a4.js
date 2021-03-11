(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||h[b]||r;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},819:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(1159)),i={title:"Cypress and Auth0",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["auth0-js","Auth0","cypress","login"],hide_table_of_contents:!1},s={permalink:"/2018/07/09/cypress-and-auth0",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-07-09-cypress-and-auth0.md",source:"@site/blog/2018-07-09-cypress-and-auth0.md",description:"Cypress is a fantastic way to write UI tests for your web apps. Just world class. Wait, no. Galaxy class. I'm going to go one further: universe class. You get my drift.",date:"2018-07-09T00:00:00.000Z",tags:[{label:"auth0-js",permalink:"/tags/auth-0-js"},{label:"Auth0",permalink:"/tags/auth-0"},{label:"cypress",permalink:"/tags/cypress"},{label:"login",permalink:"/tags/login"}],title:"Cypress and Auth0",readingTime:4.41,truncated:!1,prevItem:{title:"Docker and Configuration on Azure Web App for Containers: Whither Colons?",permalink:"/2018/07/28/configuring-docker-azure-web-app-containers"},nextItem:{title:"VSTS and EF Core Migrations",permalink:"/2018/06/24/vsts-and-ef-core-migrations"}},u=[{value:"Commanding Auth0",id:"commanding-auth0",children:[]},{value:"Using It",id:"using-it",children:[]},{value:"One More Thing...",id:"one-more-thing",children:[]}],c={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.cypress.io/"},"Cypress")," is a fantastic way to write UI tests for your web apps. Just world class. Wait, no. Galaxy class. I'm going to go one further: universe class. You get my drift."),Object(r.b)("p",null," Here's a pickle for you. You have functionality that lies only behind the walled garden of authentication. You want to write tests for these capabilities. Assuming that authentication takes place within your application that's no great shakes. Authentication is part of your app; it's no big deal using Cypress to automate logging in."),Object(r.b)("p",null,"Auth is a serious business and, as Cypress is best in class for UI testing, I'll say that Auth0 is romping home with the same title in the auth-as-a-service space. My app is using Auth0 for authentication. What's important to note about this is the flow. Typically when using auth-as-a-service, the user is redirected to the auth provider's site to authenticate and then be redirected back to the application post-login."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/brian-mann"},"Brian Mann")," (of Cypress fame) has been ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cypress-io/cypress/issues/1342#issuecomment-366747803"},"fairly clear when talking about testing with this sort of authentication flow"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You're trying to test SSO - and we have recipes showing you exactly how to do this."),Object(r.b)("p",{parentName:"blockquote"},"Also best practice is never to visit or test 3rd party sites not under your control. You don't control ",Object(r.b)("inlineCode",{parentName:"p"},"microsoftonline"),", so there's no reason to use the UI to test this. You can programmatically test the integration between it and your app with ",Object(r.b)("inlineCode",{parentName:"p"},"cy.request")," ","-"," which is far faster, more reliable, and still gives you 100% confidence.")),Object(r.b)("p",null,"I want to automate logging into Auth0 from my Cypress tests. But hopefully in a good way. Not a bad way. Wouldn't want to make Brian sad."),Object(r.b)("h2",{id:"commanding-auth0"},"Commanding Auth0"),Object(r.b)("p",null,"To automate our login, we're going to use the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/auth0/auth0.js"},"auth0-js client library"),". This is the same library the application uses; but we're going to do something subtly different with it."),Object(r.b)("p",null,"The application uses ",Object(r.b)("a",{parentName:"p",href:"https://github.com/auth0/auth0.js#api"},Object(r.b)("inlineCode",{parentName:"a"},"authorize"))," to log users in. This function redirects the user into the Auth0 lock screen, and then, post authentication, redirects the user back to the application with a token in the URL. The app parses the token (using the auth0 client library) and sets the token and the expiration of said token in the browser sessionStorage."),Object(r.b)("p",null,"What we're going to do is automate our login by using ",Object(r.b)("inlineCode",{parentName:"p"},"login")," instead. First of all, we need to add ",Object(r.b)("inlineCode",{parentName:"p"},"auth0-js")," as a dependency of our e2e tests:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"yarn add auth0-js --dev\n")),Object(r.b)("p",null,"Next, we're going to create ourselves a custom command called loginAsAdmin:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const auth0 = require('auth0-js');\n\nCypress.Commands.add('loginAsAdmin', (overrides = {}) => {\n    Cypress.log({\n        name: 'loginAsAdminBySingleSignOn'\n    });\n\n    const webAuth = new auth0.WebAuth({\n        domain: 'my-super-duper-domain.eu.auth0.com', // Get this from https://manage.auth0.com/#/applications and your application\n        clientID: 'myclientid', // Get this from https://manage.auth0.com/#/applications and your application\n        responseType: 'token id_token'\n    });\n\n    webAuth.client.login(\n        {\n            realm: 'Username-Password-Authentication',\n            username: 'mytestemail@something.co.uk',\n            password: 'SoVeryVeryVery$ecure',\n            audience: 'myaudience', // Get this from https://manage.auth0.com/#/apis and your api, use the identifier property\n            scope: 'openid email profile'\n        },\n        function(err, authResult) {\n            // Auth tokens in the result or an error\n            if (authResult && authResult.accessToken && authResult.idToken) {\n                const token = {\n                    accessToken: authResult.accessToken,\n                    idToken: authResult.idToken,\n                    // Set the time that the access token will expire at\n                    expiresAt: authResult.expiresIn * 1000 + new Date().getTime()\n                };\n\n                window.sessionStorage.setItem('my-super-duper-app:storage_token', JSON.stringify(token));\n            } else {\n                console.error('Problem logging into Auth0', err);\n    throw err;\n            }\n        }\n    );\n});\n")),Object(r.b)("p",null,"This command logs in using the ",Object(r.b)("inlineCode",{parentName:"p"},"auth0-js")," API and then sets the result into ",Object(r.b)("inlineCode",{parentName:"p"},"sessionStorage")," in the same way that our app does. This allows our app to read the value out of ",Object(r.b)("inlineCode",{parentName:"p"},"sessionStorage")," and use it. We're also going to put together one other command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Cypress.Commands.add('visitHome', (overrides = {}) => {\n    cy.visit('/', {\n        onBeforeLoad: win => {\n            win.sessionStorage.clear();\n        }\n    })\n});\n")),Object(r.b)("p",null,"This visits the root of our application and wipes the ",Object(r.b)("inlineCode",{parentName:"p"},"sessionStorage"),". This is necessary because Cypress doesn't clear down ",Object(r.b)("inlineCode",{parentName:"p"},"sessionStorage")," between tests. (",Object(r.b)("a",{parentName:"p",href:"https://github.com/cypress-io/cypress/issues/413"},"That's going to change though."),")"),Object(r.b)("h2",{id:"using-it"},"Using It"),Object(r.b)("p",null,"Let's write a test that uses our new commands to see if it gets access to our admin functionality:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"describe('access secret admin functionality', () => {\n    it('should be able to navigate to', () => {\n        cy.visitHome()\n            .loginAsAdmin()\n            .get('[href=\"/secret-adminny-stuff\"]') // This link should only be visible to admins\n            .click()\n            .url()\n            .should('contain', 'secret-adminny-stuff/'); // non-admins should be redirected away from this url\n    });\n});\n")),Object(r.b)("p",null,"Well, the test looks good but it's failing. If I fire up the Chrome Dev Tools in Cypress (did I mention that Cypress is absolutely fabulous?) then I see this response tucked away in the network tab:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{error: "unauthorized_client",\u2026} error : "unauthorized_client" error_description : "Grant type \'http://auth0.com/oauth/grant-type/password-realm\' not allowed for the client."\n')),Object(r.b)("p",null,"Hmmm... So sad. If you go to ",Object(r.b)("a",{parentName:"p",href:"https://manage.auth0.com/#/applications"},"https://manage.auth0.com/#/applications"),", select your application, ",Object(r.b)("inlineCode",{parentName:"p"},"Show Advanced Settings")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Grant Types")," you'll see a ",Object(r.b)("inlineCode",{parentName:"p"},"Password")," option is unselected."),Object(r.b)("p",null,"Select it, Save Changes and try again."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://4.bp.blogspot.com/-RhUKING4eYU/W0RxKvVMg2I/AAAAAAAALLM/QohX5jP5rZogoH27UGxVxYxAfTxgcUDXwCPcBGAYYCw/s1600/auth0-enable-password-grant-type.png"},"![null]","(<https://4.bp.blogspot.com/-RhUKING4eYU/W0RxKvVMg2I/AAAAAAAALLM/QohX5jP5rZogoH27UGxVxYxAfTxgcUDXwCPcBGAYYCw/s640/auth0-enable-password-grant-type.png> =640x449)"),"You now have a test which automates your Auth0 login using Cypress and goes on to test your application functionality with it!"),Object(r.b)("h2",{id:"one-more-thing"},"One More Thing..."),Object(r.b)("p",null,"It's worth saying that it's worth setting up different tenants in Auth0 to support your testing scenarios. This is generally a good idea so you can separate your testing accounts from Production accounts. Further to that, you don't need to have your Production setup supporting the ",Object(r.b)("inlineCode",{parentName:"p"},"Password``Grant Type"),"."),Object(r.b)("p",null,"Also, if you're curious about what the application under test is like then read ",Object(r.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2018/01/auth0-typescript-and-aspnet-core.html"},"this"),"."))}l.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var i=n(3),a=n(7),r=(n(0),n(958)),o={title:"Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["migrating","jquery.validate.unobtrusive.js","getting started","jQuery.Validation.Unobtrusive.Native","jQuery Validation"],hide_table_of_contents:!1},l={permalink:"/2013/10/04/migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-10-04-migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native.md",source:"@site/blog/2013-10-04-migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native.md",description:"So, you're looking at jQuery.Validation.Unobtrusive.Native. You're thinking to yourself \"Yeah, I'd really like to use the native unobtrusive support in jQuery Validation. But I've already got this app which is using jquery.validate.unobtrusive.js \\- actually how easy is switching over?\" Well I'm here to tell you that it's pretty straightforward - here's a walkthrough of how it might be done.",date:"2013-10-04T00:00:00.000Z",tags:[{label:"migrating",permalink:"/tags/migrating"},{label:"jquery.validate.unobtrusive.js",permalink:"/tags/jquery-validate-unobtrusive-js"},{label:"getting started",permalink:"/tags/getting-started"},{label:"jQuery.Validation.Unobtrusive.Native",permalink:"/tags/j-query-validation-unobtrusive-native"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"}],title:"Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native",readingTime:3.83,truncated:!1,prevItem:{title:"Getting TypeScript Compile-on-Save and Continuous Integration to play nice",permalink:"/2013/10/30/getting-typescript-compile-on-save-and-continous-integration-to-play-nice"},nextItem:{title:"Using Bootstrap Tooltips to display jQuery Validation error messages",permalink:"/2013/08/17/using-bootstrap-tooltips-to-display"}},s=[{value:"I need something to migrate",id:"i-need-something-to-migrate",children:[]},{value:"Hit me up NuGet!",id:"hit-me-up-nuget",children:[]},{value:"Migrating...",id:"migrating",children:[]},{value:"Rounding off",id:"rounding-off",children:[]}],u={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"So, you're looking at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"jQuery.Validation.Unobtrusive.Native"),". You're thinking to yourself \"Yeah, I'd really like to use the native unobtrusive support in jQuery Validation. But I've already got this app which is using ",Object(r.b)("a",{parentName:"p",href:"https://www.nuget.org/packages/jQuery.Validation.Unobtrusive/"},"jquery.validate.unobtrusive.js")," ","-"," actually how easy is switching over?\" Well I'm here to tell you that it's pretty straightforward - here's a walkthrough of how it might be done."),Object(r.b)("h2",{id:"i-need-something-to-migrate"},"I need something to migrate"),Object(r.b)("p",null,'So let\'s File > New Project ourselves a new MVC 4 application using the Internet Application template. I\'ve picked this template as I know it ships with account registration / login screens in place which make use of jquery.validate.unobtrusive.js. To demo this just run the project, click the "Log in" link and then click the "Log in" button - you should see something like this:'),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-7JxyO2uaVow/Uk5373yDbaI/AAAAAAAAAdk/gD8h47ObQcg/s400/BeforeLoginScreen.png",alt:null})),Object(r.b)("p",null,"What you've just witnessed is jquery.validate.unobtrusive.js doing its thing. Both the ",Object(r.b)("inlineCode",{parentName:"p"},"UserName")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Password")," properties on the ",Object(r.b)("inlineCode",{parentName:"p"},"LoginModel")," are decorated with the ",Object(r.b)("inlineCode",{parentName:"p"},"Required")," data annotation which, in the above scenario, causes the validation to be triggered on the client thanks to MVC rendering data attributes in the HTML which jquery.validate.unobtrusive.js picks up on. The question is, how can we take the log in screen above and migrate it across to to using jQuery.Validation.Unobtrusive.Native?"),Object(r.b)("h2",{id:"hit-me-up-nuget"},"Hit me up NuGet!"),Object(r.b)("p",null,"Time to dive into NuGet and install jQuery.Validation.Unobtrusive.Native. We'll install the MVC 4 version using this command:"),Object(r.b)("div",{class:"nuget-badge"},Object(r.b)("p",null,Object(r.b)("code",null,"PM> Install-Package jQuery.Validation.Unobtrusive.Native.MVC4"))),Object(r.b)("p",null,"What has this done to my project? Well 2 things"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"It's upgraded jQuery Validation (",Object(r.b)("a",{parentName:"li",href:"http://jqueryvalidation.org/"},"jquery.validate.js"),") from v1.10.0 (the version that is currently part of the MVC 4 template) to v1.11.1 (the latest and greatest jQuery Validation as of the time of writing)"),Object(r.b)("li",{parentName:"ol"},"It's added a reference to the jQuery.Validation.Unobtrusive.Native.MVC4 assembly, like so:")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-V-21V1Ypo3E/Uk583DTbegI/AAAAAAAAAd0/O0nv7w6kmew/s400/NewReference.png",alt:null})),Object(r.b)("p",null,"In case you were wondering, doing this hasn't broken the existing jquery.validate.unobtrusive.js - if you head back to the Log in screen you'll still see the same behaviour as before."),Object(r.b)("h2",{id:"migrating"},"Migrating..."),Object(r.b)("p",null,"We need to switch our TextBox and Password helpers over to using jQuery.Validation.Unobtrusive.Native, which we achieve by simply passing a second argument of ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to ",Object(r.b)("inlineCode",{parentName:"p"},"useNativeUnobtrusiveAttributes"),". So we go from this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"// ...\n@Html.TextBoxFor(m => m.UserName)\n// ...\n@Html.PasswordFor(m => m.Password)\n// ...\n")),Object(r.b)("p",null,"To this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"// ...\n@Html.TextBoxFor(m => m.UserName, true)\n// ...\n@Html.PasswordFor(m => m.Password, true)\n// ...\n")),Object(r.b)("p",null,"With these minor tweaks in place the natively supported jQuery Validation data attributes will be rendered into the textbox / password elements instead of the jquery.validate.unobtrusive.js ones."),Object(r.b)("p",null,"Next lets do the JavaScript. If you take a look at the bottom of the ",Object(r.b)("inlineCode",{parentName:"p"},"Login.cshtml")," view you'll see this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'@section Scripts {\n    @Scripts.Render("~/bundles/jqueryval")\n}\n')),Object(r.b)("p",null,"Which renders the following scripts:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<script src="/Scripts/jquery.unobtrusive-ajax.js"><\/script>\n<script src="/Scripts/jquery.validate.js"><\/script>\n<script src="/Scripts/jquery.validate.unobtrusive.js"><\/script>\n')),Object(r.b)("p",null,"In our brave new world we're only going to need jquery.validate.js - so let's create ourselves a new bundle in ",Object(r.b)("inlineCode",{parentName:"p"},"BundleConfig.cs")," which only contains that single file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'bundles.Add(new ScriptBundle("~/bundles/jqueryvalnative")\n    .Include("~/Scripts/jquery.validate.js"));\n')),Object(r.b)("p",null,"To finish off our migrated screen we need to do 2 things. First we need to switch over the ",Object(r.b)("inlineCode",{parentName:"p"},"Login.cshtml")," view to only render the jquery.validate.js script (in the form of our new bundle). Secondly, the other thing that jquery.validate.unobtrusive.js did was to trigger validation for the current form. So we need to do that ourselves now. So our finished Scripts section looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'@section Scripts {\n    @Scripts.Render("~/bundles/jqueryvalnative")\n    <script>\n        $("form").validate();\n    <\/script>\n}\n')),Object(r.b)("p",null,"Which renders the following script:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<script src="/Scripts/jquery.validate.js"><\/script>\n<script>\n    $("form").validate();\n<\/script>\n')),Object(r.b)("p",null,"And, pretty much, that's it. If you run the app now and go to the Log in screen and try to log in without credentials you'll get this:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-nD3-3jW1_Yo/Uk7G5sTpsGI/AAAAAAAAAeE/NDNf4jqhJSk/s400/AfterLoginScreen.png",alt:null})),Object(r.b)("p",null,"Which is functionally exactly the same as previously. The eagle eyed will notice some styling differences but that's all it comes down to really; style. And if you were so inclined you could easily style this up as you liked using CSS and the options you can pass to jQuery Validation (in fact a quick rummage through jquery.validate.unobtrusive.js should give you everything you need)."),Object(r.b)("h2",{id:"rounding-off"},"Rounding off"),Object(r.b)("p",null,"Before I sign off I'd like to illustrate how little we've had to change the code to start using jQuery.Validation.Unobtrusive.Native. Just take a look at this code comparison:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-vnA84f1JXHw/Uk7HoDPGqMI/AAAAAAAAAeM/qZVlRak92_o/s400/WhatsTheDifference.png",alt:null})),Object(r.b)("p",null,"As you see, it takes very little effort to migrate from one approach to the other. And it's ","*",Object(r.b)("strong",{parentName:"p"},"your"),"*"," choice. If you want to have one screen that uses jQuery.Validation.Unobtrusive.Native and one screen that uses jquery.validation.unobtrusive.js then you can! Including jQuery.Validation.Unobtrusive.Native in your project gives you the ",Object(r.b)("strong",{parentName:"p"},"option")," to use it. It doesn't force you to, you can do so as you need to and when you want to. It's down to you."))}c.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(h,l(l({ref:t},u),{},{components:n})):a.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
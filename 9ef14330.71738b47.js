(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{632:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(958)),i={title:"Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Jasmine","Visual Studio","Continuous Integration","Team Foundation Server","Chutzpah"],hide_table_of_contents:!1},s={permalink:"/blog.johnnyreilly.com/2014/05/15/team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-05-15-team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project.md",source:"@site/blog/2014-05-15-team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project.md",description:"Do you like to separate out your unit tests from the project you are testing? I imagine so. My own practice when creating a new project in Visual Studio is to create a separate unit test project alongside whose responsibility is to house unit tests for that new project.",date:"2014-05-15T00:00:00.000Z",tags:[{label:"Jasmine",permalink:"/blog.johnnyreilly.com/tags/jasmine"},{label:"Visual Studio",permalink:"/blog.johnnyreilly.com/tags/visual-studio"},{label:"Continuous Integration",permalink:"/blog.johnnyreilly.com/tags/continuous-integration"},{label:"Team Foundation Server",permalink:"/blog.johnnyreilly.com/tags/team-foundation-server"},{label:"Chutzpah",permalink:"/blog.johnnyreilly.com/tags/chutzpah"}],title:"Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests",readingTime:2.655,truncated:!1,prevItem:{title:"Migrating from AngularJS to AngularTS - a walkthrough",permalink:"/blog.johnnyreilly.com/2014/06/01/migrating-from-angularjs-to-angularts"},nextItem:{title:"TypeScript, JSDoc and Intellisense",permalink:"/blog.johnnyreilly.com/2014/05/05/typescript-jsdoc-and-intellisense"}},c=[{value:"Points #1 and #2 in short order",id:"points-1-and-2-in-short-order",children:[]}],l={toc:c};function u(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Do you like to separate out your unit tests from the project you are testing? I imagine so. My own practice when creating a new project in Visual Studio is to create a separate unit test project alongside whose responsibility is to house unit tests for that new project."),Object(a.b)("p",null," When I check in code for that project I expect the continuous integration build to kick off and, as part of that, the unit tests to be run. When it comes to running .NET tests then Team Foundation Server (and it's cloud counterpart Visual Studio Online) has your back. When it comes to running JavaScript tests then... not so much."),Object(a.b)("p",null,"This post will set out:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"How to get JavaScript tests to run on TFS / VSO in a continuous integration scenario."),Object(a.b)("li",{parentName:"ol"},"How to achieve this ","*",Object(a.b)("strong",{parentName:"li"},"without"),"*"," having to include your tests as part of web project.")),Object(a.b)("p",null,'To do this I will lean heavily (that\'s fancy language for "rip off entirely") on an ',Object(a.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx"},"excellent blog post by Mathew Aniyan")," which covers point #1. My contribution is point #2."),Object(a.b)("h2",{id:"points-1-and-2-in-short-order"},"Points #1 and #2 in short order"),Object(a.b)("p",null,"First of all, install Chutzpah on TFS / VSO. You can do this by following ",Object(a.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx"},"Steps 1 - 6 from Mathew Aniyan's post"),". Instead of following steps 7 and 8 create a new unit test project in your solution."),Object(a.b)("aside",null,"This unit test project will effectively be a C# project that hosts no real C# code at all. Instead we're going to use it to house JavaScript tests. If there is another way to have a separate project which TFS / VSO can pick up on and run tests in then please let me know. As far as I'm aware though, this is the only game in town."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Edit 29/05/2014:")," Matthew Manela (creator of Chutzpah) has confirmed that this is the correct approach - thanks chap!"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly"},"@johnny","_","reilly")," Nope that is pretty much what you need to do."),Object(a.b)("p",{parentName:"blockquote"},"\u2014 Matthew Manela (@mmanela) ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/mmanela/statuses/466962743400996864"},"May 15, 2014"))),Object(a.b)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),Object(a.b)("p",null,'To our unit test project add your JavaScript unit tests. These should be marked in Visual Studio with a Build Action of "Content" and a Copy to Output Directory of "Do not copy". You should be able to run these tests locally using the Visual Studio Chutzpah extension - or indeed in some other JavaScript test runner. Then, and this is the important part, edit the csproj file of your unit test project and add this ',Object(a.b)("inlineCode",{parentName:"p"},"Import Project")," statement:"),Object(a.b)("pre",null,"  <Import Project=\"$(VSToolsPath)\\WebApplications\\Microsoft.WebApplication.targets\" Condition=\"'$(VSToolsPath)' != ''\" />"),Object(a.b)("p",null,"Ordering is important in this case. It matters that this new statement sits after the other ",Object(a.b)("inlineCode",{parentName:"p"},"Import Project")," statements. So you should end up with a csproj file that looks in part like this: (comments added by me for clarity)"),Object(a.b)("pre",null,'  \x3c!-- Pre-existing Import Project statements start --\x3e <Import Project="$(VSToolsPath)\\TeamTest\\Microsoft.TestTools.targets" Condition="Exists(\'$(VSToolsPath)\\TeamTest\\Microsoft.TestTools.targets\')" /> <Import Project="$(MSBuildToolsPath)\\Microsoft.CSharp.targets" /> \x3c!-- Pre-existing Import Project statements end --\x3e \x3c!-- New addition start --\x3e <Import Project="$(VSToolsPath)\\WebApplications\\Microsoft.WebApplication.targets" Condition="\'$(VSToolsPath)\' != \'\'" /> \x3c!-- New addition end --\x3e'),Object(a.b)("p",null,"Check in your amended csproj and the unit tests to TFS / VSO. You should see the JavaScript unit tests being run as part of the build."))}u.isMDXComponent=!0},958:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),u=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||h[b]||a;return n?r.a.createElement(m,s(s({ref:e},l),{},{components:n})):r.a.createElement(m,s({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
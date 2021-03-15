(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1166:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=i.a.createContext({}),c=function(t){var e=i.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return i.a.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},b=i.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,r=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(n),b=a,d=u["".concat(r,".").concat(b)]||u[b]||h[b]||o;return n?i.a.createElement(d,l(l({ref:e},p),{},{components:n})):i.a.createElement(d,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=b;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return l})),n.d(e,"toc",(function(){return s})),n.d(e,"default",(function(){return c}));var a=n(3),i=n(8),o=(n(0),n(1166)),r={title:"The Surprisingly Happy Tale of Visual Studio Online, Continous Integration and Chutzpah",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Jasmine","TFS","unit testing","javascript","Continuous Integration"],hide_table_of_contents:!1},l={permalink:"/2014/03/17/the-surprisingly-happy-tale-of-visual",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-03-17-the-surprisingly-happy-tale-of-visual.md",source:"@site/blog/2014-03-17-the-surprisingly-happy-tale-of-visual.md",description:"Going off piste",date:"2014-03-17T00:00:00.000Z",formattedDate:"March 17, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"TFS",permalink:"/tags/tfs"},{label:"unit testing",permalink:"/tags/unit-testing"},{label:"javascript",permalink:"/tags/javascript"},{label:"Continuous Integration",permalink:"/tags/continuous-integration"}],title:"The Surprisingly Happy Tale of Visual Studio Online, Continous Integration and Chutzpah",readingTime:5.865,truncated:!1,prevItem:{title:"TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)",permalink:"/2014/04/01/typescript-instance-methods"},nextItem:{title:"Knockout + Globalize = valueNumber Binding Handler",permalink:"/2014/03/11/knockout-globalize-valuenumber-binding"}},s=[{value:"Going off piste",id:"going-off-piste",children:[]},{value:"...Try, try, try again...",id:"try-try-try-again",children:[]}],p={toc:s};function c(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"going-off-piste"},"Going off piste"),Object(o.b)("p",null," The post that follows is a slightly rambly affair which is pretty much my journal of the first steps of getting up and running with JavaScript unit testing. I will not claim that much of this blog is down to me. In fact in large part is me working my way through ",Object(o.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx"},"Mathew Aniyan's excellent blog post on integrating Chutzpah with TFS"),". But a few deviations from this post have made me think it worth keeping hold of this record for my benefit (if no-one else's)."),Object(o.b)("p",null,"That's the disclaimers out of the way now..."),Object(o.b)("h2",{id:"try-try-try-again"},"...Try, try, try again..."),Object(o.b)("p",null,"Getting started with JavaScript unit testing has not been the breeze I\u2019d expected. Frankly I\u2019ve found the docs out there not particularly helpful. But if at first you don't succeed then try, try, try again."),Object(o.b)("p",null,"So after a number of failed attempts I\u2019m going to give it another go. ",Object(o.b)("a",{parentName:"p",href:"http://www.hanselminutes.com/412/getting-started-with-javascript-unit-testing-with-jasmine-and-rushaine-mcbean"},"Rushaine McBean")," says Jasmine is easiest so I'm going to follow her lead and give it a go."),Object(o.b)("p",null,"Let\u2019s new up a new (empty) ASP.NET project. Yes, I know ASP.NET has nothing to do with JavaScript unit testing but my end goal is to be able to run JS unit tests in Visual Studio and as part of Continuous Integration. Further to that, I'm anticipating a future where I have a solution that contains JavaScript unit tests and C# unit tests as well. It is indeed a bold and visionary Brave New World. We'll see how far we get."),Object(o.b)("p",null,"First up, download Jasmine from ",Object(o.b)("a",{parentName:"p",href:"http://jasmine.github.io/"},"GitHub")," ","-"," I'll use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pivotal/jasmine/blob/master/dist/jasmine-standalone-2.0.0.zip"},"v2.0"),". Unzip it and fire up SpecRunner.html and whaddya know... It works!"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://4.bp.blogspot.com/-M-Qct1e8Ofo/UxiT5wHICLI/AAAAAAAAAiY/tHUQemETCGI/s1600/LookItWorksRightOutTheBox.png"},Object(o.b)("img",{parentName:"a",src:"http://4.bp.blogspot.com/-M-Qct1e8Ofo/UxiT5wHICLI/AAAAAAAAAiY/tHUQemETCGI/s320/LookItWorksRightOutTheBox.png",alt:"null"})),"As well it might. I\u2019d be worried if it didn\u2019t. So I\u2019ll move the contents of the release package into my empty project. Now let\u2019s see if we can get those tests running inside Visual Studio. I\u2019d heard of ",Object(o.b)("a",{parentName:"p",href:"https://chutzpah.codeplex.com/"},"Chutzpah")," which describes itself thusly:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"\u201cChutzpah is an open source JavaScript test runner which enables you to run unit tests using QUnit, Jasmine, Mocha, CoffeeScript and TypeScript.\u201d "))),Object(o.b)("p",null,"What I\u2019m after is the Chutzpah test adapter for Visual Studio 2012/2013 which can be found ",Object(o.b)("a",{parentName:"p",href:"http://visualstudiogallery.msdn.microsoft.com/f8741f04-bae4-4900-81c7-7c9bfb9ed1fe"},"here"),". I download the VSIX and install. Pretty painless. Once I restart Visual Studio I can see my unit tests in the test explorer. Nice! Run them and..."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://2.bp.blogspot.com/-Ns9-ZoCzyxU/UxiVe83GQAI/AAAAAAAAAik/9rJiv7c3gOA/s1600/EverythingFails.png"},Object(o.b)("img",{parentName:"a",src:"http://2.bp.blogspot.com/-Ns9-ZoCzyxU/UxiVe83GQAI/AAAAAAAAAik/9rJiv7c3gOA/s320/EverythingFails.png",alt:"null"})),"All fail. This makes me sad. All the errors say \u201cCan\u2019t find variable: Player in file\u201d. Hmmm. Why? Dammit I\u2019m actually going to have to read the ",Object(o.b)("a",{parentName:"p",href:"https://chutzpah.codeplex.com/wikipage?title=Chutzpah%20File%20References&referringTitle=Documentation"},"documentation"),"... It turns out the issue can be happily resolved by adding these 3 references to the top of PlayerSpec.js:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'/// <reference path="../src/Player.js" />\n/// <reference path="../src/Song.js" />\n/// <reference path="SpecHelper.js" />\n')),Object(o.b)("p",null,"Now the tests pass:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://1.bp.blogspot.com/-n020yJN-tpA/UxiWLRegm5I/AAAAAAAAAis/TJHqYn08MZ4/s1600/EverythingPasses.png"},Object(o.b)("img",{parentName:"a",src:"http://1.bp.blogspot.com/-n020yJN-tpA/UxiWLRegm5I/AAAAAAAAAis/TJHqYn08MZ4/s320/EverythingPasses.png",alt:"null"})),"The question is: can we get this working with Visual Studio Online?"),Object(o.b)("p",null,"Fortunately another has gone before me. Mathew Aniyan has written a ",Object(o.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx"},'superb blog post called "Javascript Unit Tests on Team Foundation Service with Chutzpah"'),". Using this post as a guide (it was written 18 months ago which is frankly aeons in the world of the web) I'm hoping that I'll be able to, without too many tweaks, get Javascript unit tests running on Team Foundation Service / Visual Studio Online ( / insert this weeks rebranding here)."),Object(o.b)("p",null,'First of all in Visual Studio Online I\u2019ll create a new project called "GettingStartedWithJavaScriptUnitTesting" (using all the default options). Apparently ',Object(o.b)("em",{parentName:"p"},"\u201cYour project is created and your team is going to absolutely love this.\u201d")," Hmmmm... I think I\u2019ll be judge of that."),Object(o.b)("p",null,"Let's navigate to the project. I'll fire up Visual Studio by clicking on the \u201cOpen in Visual Studio\u201d link. Once fired up and all the workspace mapping is sorted I\u2019ll move my project into the GettingStartedWithJavaScriptUnitTesting folder that now exists on my machine and add this to source control."),Object(o.b)("p",null,"Back to Mathew's blog. It suggests renaming Chutzpah.VS2012.vsix to Chutzpah.VS2012.zip and checking certain files into TFS. I think Chutzpah has changed a certain amount since this was written. To be on the safe side I\u2019ll create a new folder in the root of my project called Chutzpah.VS2012 and put the contents of Chutzpah.VS2012.zip in there and add it to TFS (being careful to ensure that no dll\u2019s are excluded)."),Object(o.b)("p",null,"Then I'll follow steps 3 and 4 from the blog post:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"*3","."," In Visual Studio, Open Team Explorer & connect to Team Foundation Service. Bring up the Manage Build Controllers dialog. ","[Build \u2013> Manage Build Controllers]"," Select Hosted Build Controller Click on Properties button to bring up the Build Controller Properties dialog."),Object(o.b)("p",{parentName:"blockquote"},"4","."," Change Version Control Path to custom Assemblies to refer to the folder where you checked in the binaries in step 2."),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"}))),Object(o.b)("p",null,"In step 5 the blog tells me to edit my build definition. Well I don\u2019t have one in this new project so let\u2019s click on \u201cNew Build Definition\u201d, create one and then follow step 5:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"*5","."," In Team Explorer, go to the Builds section and Edit your Build Definition which will run the javascript tests. Click on the Process tab Select the row named Automated Tests. Click on \u2026 button next to the value."),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"}))),Object(o.b)("p",null,'Rather than following step 6 (which essentially nukes the running of any .NET tests you might have) I chose to add another row by clicking "Add". In the dialog presented I changed the Test assembly specification to ',"*","*","\\",'*.js and checked the "Fail build on test failure" checkbox.'),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://3.bp.blogspot.com/-4lbMIsT9jFQ/Ux3ATwBrPgI/AAAAAAAAAjY/4XSY0u0RpOE/s1600/AutomatedTests.png"},Object(o.b)("img",{parentName:"a",src:"http://3.bp.blogspot.com/-4lbMIsT9jFQ/Ux3ATwBrPgI/AAAAAAAAAjY/4XSY0u0RpOE/s320/AutomatedTests.png",alt:"null"})),"Step 7 says:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"*7","."," Create your Web application in Visual Studio and add your Qunit or Jasmine unit tests to them. ",Object(o.b)("u",null,"Make sure that the js files (that contain the tests) are getting copied to the build output directory.")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"}))),Object(o.b)("p",null,"The picture below step 7 suggests that you should be setting your test / spec files to have a ",Object(o.b)("inlineCode",{parentName:"p"},"Copy to Output Directory")," setting of ",Object(o.b)("inlineCode",{parentName:"p"},"Copy always"),". ",Object(o.b)("strong",{parentName:"p"},"This did not work for me!!!")," Instead, setting a ",Object(o.b)("inlineCode",{parentName:"p"},"Build Action")," of ",Object(o.b)("inlineCode",{parentName:"p"},"Content")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"Copy to Output Directory")," setting of ",Object(o.b)("inlineCode",{parentName:"p"},"Do not copy")," did work."),Object(o.b)("p",null,"Finally I checked everything into source control and queued a build. I honestly did not expect this to work. It couldn\u2019t be this easy could it? And..."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://2.bp.blogspot.com/-gEDIyMV7M_g/Uxibt99tuwI/AAAAAAAAAi8/G4I6XQp0aN0/s1600/ItOnlyBlimminWellWorked.png"},Object(o.b)("img",{parentName:"a",src:"http://2.bp.blogspot.com/-gEDIyMV7M_g/Uxibt99tuwI/AAAAAAAAAi8/G4I6XQp0aN0/s320/ItOnlyBlimminWellWorked.png",alt:"null"})),"Wow! It did! Here\u2019s me cynically expecting some kind of \u201cpermission denied\u201d error and it actually works! Brilliant! Look up in the cloud it says the same thing!"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://2.bp.blogspot.com/-A67cTSkzIDg/Uxib6wVnaWI/AAAAAAAAAjE/ZwbUdBJmi0w/s1600/InTheCloudToo.png"},Object(o.b)("img",{parentName:"a",src:"http://2.bp.blogspot.com/-A67cTSkzIDg/Uxib6wVnaWI/AAAAAAAAAjE/ZwbUdBJmi0w/s320/InTheCloudToo.png",alt:"null"})),"Fantastic!"),Object(o.b)("p",null,"I realise that I haven\u2019t yet written a single JavaScript unit test of my own and so I\u2019ve still a way to go. What I have done is quietened those voices in my head that said \u201cthere\u2019s not too much point having a unit test suite that isn\u2019t plugged into continuous integration\u201d. Although it's not documented here I'm happy to be able to report that I have been able to follow the self-same instructions for Team Foundation Service / Visual Studio Online and get CI working with TFS 2012 on our build server as well."),Object(o.b)("p",null,"Having got up and running off the back of other peoples hard work I best try and write some of my own tests now...."))}c.isMDXComponent=!0}}]);
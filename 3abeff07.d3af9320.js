(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{281:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(966)),s={title:"How I'm Using Cassette part 2:Get Cassette to Serve Scripts in Dependency Order",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["script references","RequireJS","cassette"],hide_table_of_contents:!1},o={permalink:"/2013/06/06/how-im-using-cassette-part-2",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-06-06-how-im-using-cassette-part-2.md",source:"@site/blog/2013-06-06-how-im-using-cassette-part-2.md",description:"Last time I wrote about Cassette I was talking about how to generally get up and running. How to use Cassette within an ASP.Net MVC project. What I want to write about now is (in my eyes) the most useful feature of Cassette by a country mile. This is Cassettes ability to ensure scripts are served in dependency order.",date:"2013-06-06T00:00:00.000Z",tags:[{label:"script references",permalink:"/tags/script-references"},{label:"RequireJS",permalink:"/tags/require-js"},{label:"cassette",permalink:"/tags/cassette"}],title:"How I'm Using Cassette part 2:Get Cassette to Serve Scripts in Dependency Order",readingTime:7.165,truncated:!1,prevItem:{title:"jQuery Validate - Native Unobtrusive Validation Support!",permalink:"/2013/06/26/jquery-validate-native-unobtrusive-validation"},nextItem:{title:"How I'm Using Cassette part 1:Getting Up and Running",permalink:"/2013/05/04/how-im-using-cassette"}},l=[{value:"Why does this matter?",id:"why-does-this-matter",children:[]},{value:"It Depends",id:"it-depends",children:[]},{value:"Enter Cassette, riding a white horse",id:"enter-cassette-riding-a-white-horse",children:[]},{value:"Declaring References Server-Side",id:"declaring-references-server-side",children:[]},{value:"Declaring References in your JavaScript itself",id:"declaring-references-in-your-javascript-itself",children:[]},{value:"Avoiding the Gotcha",id:"avoiding-the-gotcha",children:[]},{value:"Go Forth and Reference",id:"go-forth-and-reference",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2013/05/how-im-using-cassette.html"},"Last time")," I wrote about Cassette I was talking about how to generally get up and running. How to use Cassette within an ASP.Net MVC project. What I want to write about now is (in my eyes) the most useful feature of Cassette by a country mile. This is Cassettes ability to ensure scripts are served in dependency order."),Object(i.b)("h2",{id:"why-does-this-matter"},"Why does this matter?"),Object(i.b)("p",null,"You might well ask. If we go back 10 years or so then really this wasn't a problem. No-one was doing a great deal with JavaScript. And if they did anything it tended to be code snippets in amongst the HTML; nothing adventurous. But unless you've had your head in the sand for the last 3 years then you will have clearly noticed that JavaScript is in rude health and being used for all kinds of things you'd never have imagined. In fact some would have it that it's the ",Object(i.b)("a",{parentName:"p",href:"http://www.hanselman.com/blog/JavaScriptisAssemblyLanguagefortheWebPart2MadnessorjustInsanity.aspx"},"assembly language of the web"),"."),Object(i.b)("p",null,"For my part, I've been doing more and more with JavaScript. And as I do more and more with it I seek to modularise my code; (",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Separation_of_concerns"},"like any good developer would"),") breaking it up into discrete areas of functionality. I aim to only serve up the JavaScript that I need on a given page. And that would be all well and good but for one of the languages shortcomings. Modules. JavaScript doesn't yet have a good module loading story to tell. (Apparently one's coming in ",Object(i.b)("a",{parentName:"p",href:"http://wiki.ecmascript.org/doku.php?id=harmony:modules"},"EcmaScript 6"),"). (I don't want to get diverted into this topic as it's a big area. But if you're interested then you can read up a little on different approaches being used ",Object(i.b)("a",{parentName:"p",href:"http://requirejs.org/docs/whyamd.html#today"},"here"),". The ongoing contest between RequireJS and CommonJS frankly makes me want to keep my distance for now.)"),Object(i.b)("h2",{id:"it-depends"},"It Depends"),Object(i.b)("p",null,"Back to my point, JavaScripts native handling of script dependencies is non-existent. It's real \"here be dragons\" territory. If you serve up, for example, Slave.js that depends on things set up in Master.js before you've actually served up Master.js, well it's not a delightful debugging experience. The errors tend be obscure and it's not always obvious what the correct ordering should be."),Object(i.b)("p",null,"Naturally this creates something of a headache around my own JavaScript modules. A certain amount of jiggery-pokery is required to ensure that scripts are served in the correct order so that they run as expected. And as your application becomes more complicated / modular, the number of problems around this area increase exponentially. It's ",Object(i.b)("strong",{parentName:"p"},"really")," tedious. I don't want to be thinking about managing that as I'm developing - I want to be focused on solving the problem at hand."),Object(i.b)("p",null,"In short, what I want to do is reference a script file somewhere in my server-side pipeline. I could be in a view, a layout, a controller, a partial view, a HTML helper... - I just want to know that that script is going to turn up at the client in the right place in the HTML so it works. Always. And I don't want to have to think about it any further than that."),Object(i.b)("h2",{id:"enter-cassette-riding-a-white-horse"},"Enter Cassette, riding a white horse"),Object(i.b)("p",null,"And this is where Cassette takes the pain away. To quote the documentation:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"',Object(i.b)("em",{parentName:"p"},"Some assets must be included in a page before others. For example, your code may use jQuery, so the jQuery script must be included first. Cassette will sort all assets based on references they declare."),'"')),Object(i.b)("p",null,"Just the ticket!"),Object(i.b)("h2",{id:"declaring-references-server-side"},"Declaring References Server-Side"),Object(i.b)("p",null,"What does this look like in reality? Let's build on what I did last time to demonstrate how I make use of Asset References to ensure my scripts turn up in the order I require."),Object(i.b)("p",null,"In my ",Object(i.b)("inlineCode",{parentName:"p"},"_Layout.cshtml")," file I'm going to remove the following reference from the head of the file:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'Bundles.Reference("~/bundles/core");')),Object(i.b)("p",null,"I'm pulling this out of my layout page because it's presence means that ",Object(i.b)("strong",{parentName:"p"},"every")," page MVC serves up is also serving up jQuery and jQuery UI (which is what ",Object(i.b)("inlineCode",{parentName:"p"},"~/bundles/core")," is). If a page doesn't actually make use of jQuery and / or jQuery UI then there's no point in doing this."),Object(i.b)("p",null,'"',Object(i.b)("em",{parentName:"p"},"But wait!"),'", I hear you cry, "',Object(i.b)("em",{parentName:"p"},"Haven't you just caused a bug with your reckless action? I distinctly recall that the ",Object(i.b)("inlineCode",{parentName:"em"},"Login.cshtml")," page has the following code in place:"),'"'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'Bundles.Reference("~/bundles/validate");')),Object(i.b)("p",null,'"',Object(i.b)("em",{parentName:"p"},"And now with your foolhardy, nay, reckless attitude to the ",Object(i.b)("inlineCode",{parentName:"em"},"~/bundles/core")," bundle you've broken your Login screen. How can jQuery Validation be expected to work if there's no jQuery there to extend?"),'"'),Object(i.b)("p",null,"Well, I understand your concerns but really you needn't worry - Cassette's got my back. Look closely at the code below:"),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5693071.js?file=ReferencesValidateDependesOnCoreCassetteConfiguration.cs"}),Object(i.b)("p",null,"See it? The ",Object(i.b)("inlineCode",{parentName:"p"},"~/bundles/validate")," bundle declares a reference to the ",Object(i.b)("inlineCode",{parentName:"p"},"~/bundles/core")," bundle. The upshot of this is, that if you tell Cassette to reference ",Object(i.b)("inlineCode",{parentName:"p"},"~/bundles/validate")," it will ensure that before it renders that bundle it first renders any bundles that bundle depends on (in this case the ",Object(i.b)("inlineCode",{parentName:"p"},"~/bundles/core")," bundle)."),Object(i.b)("p",null,"This is a very simple demonstration of the feature but I can't underplay just how useful I find this."),Object(i.b)("h2",{id:"declaring-references-in-your-javascript-itself"},"Declaring References in your JavaScript itself"),Object(i.b)("p",null,"And the good news doesn't stop there. Let's say you ",Object(i.b)("strong",{parentName:"p"},"don't")," want to maintain your references in a separate file. You'd rather declare references inside your JavaScript files themselves. Well - you can. Cassette caters for this through the usage of ",Object(i.b)("a",{parentName:"p",href:"http://getcassette.net/documentation/v1/AssetReferences"},"Asset References"),"."),Object(i.b)("p",null,"Let's demo this. First of all add the following file at this location in the project: ",Object(i.b)("inlineCode",{parentName:"p"},"~/Scripts/Views/Home/Index.js")),Object(i.b)("script",{src:"https://gist.github.com/johnnyreilly/5693071.js?file=Index.js"}),Object(i.b)("p",null,"The eagle-eyed amongst you will have noticed"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"I'm mirroring the MVC folder structure inside the Scripts directory. (There's nothing special about that by the way - it's just a file structure I've come to find useful. It's very easy to find the script associated with a View if the scripts share the same organisational approach as the Views.)."),Object(i.b)("li",{parentName:"ol"},"The purpose of the script is very simple, it fades out the main body of the screen, re-writes the HTML in that tag and then fades back in. It's purpose is just to do something that is obvious to the user - so they can see the evidence of JavaScript executing."),Object(i.b)("li",{parentName:"ol"},"Lastly and most importantly, do you notice that ",Object(i.b)("inlineCode",{parentName:"li"},"// @reference ~/bundles/core")," is the first line of the file? This is our script reference. It's this that Cassette will be reading to pick up references.")),Object(i.b)("p",null,"To make sure Cassette is picking up our brand new file let's take a look at ",Object(i.b)("inlineCode",{parentName:"p"},"CassetteConfiguration.cs")," and uncomment the line of code below:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'bundles.AddPerIndividualFile<scriptbundle>("~/Scripts/Views");</scriptbundle>')),Object(i.b)("p",null,"With this in place Cassette will render out a bundle for each script in the Views subdirectory. Let's see if it works. Add the following reference to our new JavaScript file in ",Object(i.b)("inlineCode",{parentName:"p"},"~/Views/Home/Index.cshtml"),":"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'Bundles.Reference("~/Scripts/Views/Home/Index.js");')),Object(i.b)("p",null,"If you browse to the home page of the application this is what you should now see:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://2.bp.blogspot.com/-tGZTEhhkGz8/Ua7xlgl3n5I/AAAAAAAAAcs/miNZsysrJeY/s1600/Index.js.png"},Object(i.b)("img",{parentName:"a",src:"http://2.bp.blogspot.com/-tGZTEhhkGz8/Ua7xlgl3n5I/AAAAAAAAAcs/miNZsysrJeY/s320/Index.js.png",alt:"null"})),"What this means is, ",Object(i.b)("inlineCode",{parentName:"p"},"Index.js")," was served up by Cassette. And more importantly before ",Object(i.b)("inlineCode",{parentName:"p"},"Index.js")," was served the referenced ",Object(i.b)("inlineCode",{parentName:"p"},"~/bundles/core")," was served too."),Object(i.b)("h2",{id:"avoiding-the-gotcha"},"Avoiding the Gotcha"),Object(i.b)("p",null,"There is a gotcha which I've discovered whilst using Cassette's Asset References. Strictly speaking it's a Visual Studio gotcha rather than a Cassette gotcha. It concerns Cassette's support for Visual Studio XML style reference comments. In the example above I could have written this:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'/// &lt;reference path="~/bundles/core" /&gt;')),Object(i.b)("p",null,"Instead of this:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"// @reference ~/bundles/core")),Object(i.b)("p",null,"It would fulfil exactly the same purpose and would work identically. But there's a problem. Using Visual Studio XML style reference comments to refer to Cassette bundles appears to trash the Visual Studios JavaScript Intellisense. You'll lose the Intellisense that's driven by ",Object(i.b)("inlineCode",{parentName:"p"},"~/Scripts/_references.js")," in VS 2012. So if you value your Intellisense (and I do) my advice is to stick to using the standard Cassette references style instead."),Object(i.b)("h2",{id:"go-forth-and-reference"},"Go Forth and Reference"),Object(i.b)("p",null,"There is also support in Cassette for CSS referencing (as well as other types of referencing relating to LESS and even CoffeeScript). I haven't made use of CSS referencing myself as, in stark contrast to my JS, my CSS is generally one bundle of styles which I'm happy to be rendered on each page. But it's nice to know the option is there if I wanted it."),Object(i.b)("p",null,"Finally, as last time you can see what I've done in this post by just looking at the repository on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/CassetteDemo/tree/References"},"GitHub"),". The changes I made are on the References branch of that particular repository."))}u.isMDXComponent=!0},966:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.a.createElement(b,o(o({ref:t},c),{},{components:n})):r.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
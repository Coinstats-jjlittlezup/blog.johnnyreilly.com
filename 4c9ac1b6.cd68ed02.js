(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),b=a,d=h["".concat(i,".").concat(b)]||h[b]||p[b]||r;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},398:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(1159)),i={title:"TypeScript, JSDoc and Intellisense",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["jquery","JSDoc","TypeScript","Intellisense","jQuery.d.ts"],hide_table_of_contents:!1},l={permalink:"/2014/05/05/typescript-jsdoc-and-intellisense",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-05-05-typescript-jsdoc-and-intellisense.md",source:"@site/blog/2014-05-05-typescript-jsdoc-and-intellisense.md",description:"Days of Yore",date:"2014-05-05T00:00:00.000Z",tags:[{label:"jquery",permalink:"/tags/jquery"},{label:"JSDoc",permalink:"/tags/js-doc"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Intellisense",permalink:"/tags/intellisense"},{label:"jQuery.d.ts",permalink:"/tags/j-query-d-ts"}],title:"TypeScript, JSDoc and Intellisense",readingTime:14.4,truncated:!1,prevItem:{title:"Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests",permalink:"/2014/05/15/team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project"},nextItem:{title:"TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)",permalink:"/2014/04/01/typescript-instance-methods"}},s=[{value:"Days of Yore",id:"days-of-yore",children:[]},{value:"Definitely Intellisensed",id:"definitely-intellisensed",children:[]},{value:"Turning API documentation into JSDoc",id:"turning-api-documentation-into-jsdoc",children:[]},{value:"1. You have 20 seconds to comply (with the API)",id:"1-you-have-20-seconds-to-comply-with-the-api",children:[]},{value:"2. <code>String</code> and <code>Array of String</code> setters",id:"2-string-and-array-of-string-setters",children:[]},{value:"3. Getter",id:"3-getter",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"days-of-yore"},"Days of Yore"),Object(r.b)("p",null,' It was my first job. The web was alive and well at this point but still very much in it\'s infancy. Newspapers had only recently moved on from calling it "the information superhighway". No-one was doing ',Object(r.b)("em",{parentName:"p"},"real")," programming for the web - the desktop was where it was at."),Object(r.b)("p",null,"As for me, I was writing call centre software. It was all very exciting. Here was the idea: the phone on your desk would start ringing and through the magic of ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Telephony_Application_Programming_Interface"},"TAPI"),' our app would be presented with the telephone number of the dialer. It would then look up that telephone number in the appropriate CRM application and pop the callers details on the screen. You\'d pick up the phone and bellow "why hello Mr Jones!" and either impress the caller with your incredible fore-knowledge of who had rung you or perhaps terrify them with our ',Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Nineteen_Eighty-Four"},"Brave New Orwellian World"),"."),Object(r.b)("p",null,"My job was to work out how to call into the APIs of the various CRM applications / databases being used and extract the relevant information. So it goes without saying that I have spent a lot of time with badly documented APIs. Or in fact ",Object(r.b)("em",{parentName:"p"},"undocumented")," APIs. I know pain my friend..."),Object(r.b)("p",null,"Hours and days were spent debugging and walking APIs just to find out what they could do and what information they exposed. This, I need hardly say, was dull and tedious work. Having spent longer than I care to remember with no more information on an API than method names has left its mark on me. I am consequently keener than your average dev on documentation and intellisense. When you've stared at the coalface of the ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/IBM_Notes"},"Lotus Notes")," API for 2 weeks with only Dephi 3 as your constant companion you'd feel the same way too. (This was ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/AltaVista"},"before the days of Google")," and actually being able to find stuff on the internet.)"),Object(r.b)("p",null,"If you can convey information about the API that you're building then I'd say you're duty-bound to do so. Or at least that it's good manners."),Object(r.b)("h2",{id:"definitely-intellisensed"},"Definitely Intellisensed"),Object(r.b)("p",null,"When I started getting involved with the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped"},"Definitely Typed project"),' my focus was on giving good Intellisense. Where there was documentation for an API I wanted to get that popping in front of users when they hit the "." key:'),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://blogs.msdn.com/cfs-filesystemfile.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-01-56-67/1200.JSDoc_5F00_in_5F00_VS.png"},Object(r.b)("img",{parentName:"a",src:"http://blogs.msdn.com/cfs-filesystemfile.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-01-56-67/1200.JSDoc_5F00_in_5F00_VS.png",alt:"null"})),"As the above screenshot demonstrates ",Object(r.b)("a",{parentName:"p",href:"http://blogs.msdn.com/b/typescript/archive/2013/01/21/announcing-typescript-0-8-2.aspx"},"TypeScript supports Intellisense")," through a slightly tweaked implementation of ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/JSDoc"},"JSDoc"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"With 0.8.2, the TypeScript compiler and tools now support JSDoc comments."),Object(r.b)("p",{parentName:"blockquote"},"In the TypeScript implementation, because types are already part of the system, we allow the JSDoc type annotation to be elided, as in the example above."),Object(r.b)("p",{parentName:"blockquote"},"You can now document a variety of language constructs (including classes, modules, interfaces, and functions) with comments that become part of the information displayed to the user. We\u2019ve also started extending lib.d.ts, the default JS and DOM API library, with JSDoc comments.")),Object(r.b)("p",null,"Partly as an exercise in getting better acquainted with TypeScript and partly responding to my instinctive need to have nicely documented APIs I decided to start adding JSDoc comments to the world's most popular typings file ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="https://github.com/borisyankov/DefinitelyTyped/blob/master/jquery/jquery.d.ts">jquery.d.ts</a>'),"."),Object(r.b)("div",{class:"digression getOutOfMySight"},Object(r.b)("h4",null,"Why ",Object(r.b)("code",null,"jquery.d.ts"),"?"),Object(r.b)("p",null,"Well a number of reasons:"),Object(r.b)("ol",null,Object(r.b)("li",null,"I used ",Object(r.b)("code",null,"jquery.d.ts")," already myself and I'm a firm believer in ",Object(r.b)("a",{href:"http://en.wikipedia.org/wiki/Eating_your_own_dog_food"},"eating your own dogfood")),Object(r.b)("li",null,"jQuery is well documented. I needed a source of information to power my JSDoc and ",Object(r.b)("a",{href:"//api.jquery.com"},"api.jquery.com")," had my back."),Object(r.b)("li",null,Object(r.b)("code",null,"jquery.d.ts")," was widely used. Given how ubiquitous jQuery has become this typing file was unsurprisingly the most popular in the world. That was key for me as I wanted feedback - if I was making a mess of the typings I wanted someone to pitch in and tell me.")),Object(r.b)("p",null,"Just to digress once more, points #2 and #3 turned out to be of particular note."),Object(r.b)("p",null,"Concerning point #2, I did find the occasional ",Object(r.b)("a",{href:"https://github.com/borisyankov/DefinitelyTyped/pull/1471#issuecomment-31204115"},"error")," or ",Object(r.b)("a",{href:"https://github.com/borisyankov/DefinitelyTyped/pull/1835#issuecomment-37533088"},"inconsistency")," in the jQuery API documentation. These were definitely the exception rather than the rule though. And thanks to the very helpful ",Object(r.b)("a",{href:"https://github.com/dmethvin"},"Dave Methvin")," these actually lead to ",Object(r.b)("a",{href:"https://github.com/jquery/api.jquery.com/pull/460"},"minor improvements to the jQuery API documentation"),"."),Object(r.b)("blockquote",{class:"twitter-tweet",lang:"en"},Object(r.b)("p",null,Object(r.b)("a",{href:"https://twitter.com/search?q=%23TypeScript&src=hash"},"#TypeScript")," definitions pointing out errors in JavaScript docs of a project ",Object(r.b)("a",{href:"https://twitter.com/search?q=%23Jquery&src=hash"},"#Jquery")," : ",Object(r.b)("a",{href:"https://t.co/v6rzCdBwmi"},"https://t.co/v6rzCdBwmi")," caught by ",Object(r.b)("a",{href:"https://twitter.com/johnny_reilly"},"@johnny_reilly")),"\u2014 basarat (@basarat) ",Object(r.b)("a",{href:"https://twitter.com/basarat/statuses/416309213430689792"},"December 26, 2013")),Object(r.b)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),Object(r.b)("p",null,"Concerning point #3 I did indeed get feedback. As well as enriching ",Object(r.b)("code",null,"jquery.d.ts")," with JSDoc goodness I also found myself fixing slight errors in the typings. Here and there I would find examples where ",Object(r.b)("code",null,"jquery.d.ts")," was out of line the with API documentation. Where this was the case I would amend the typings to bring them into line - trying to make ",Object(r.b)("code",null,"jquery.d.ts")," entirely API-compliant. This was ",Object(r.b)("a",{href:"https://github.com/borisyankov/DefinitelyTyped/issues/1499"},"not always popular"),". But despite the heat it generated I think it ended up leading to a better typing file. I'm again grateful for Dave Methvin's thoughtful contributions.")),Object(r.b)("h2",{id:"turning-api-documentation-into-jsdoc"},"Turning API documentation into JSDoc"),Object(r.b)("p",null,"I wanted to take an example of API documentation and demonstrate how that can be applied to a typing file with particular focus on how JSDoc comments can be created to drive Intellisense. So let's take everyone's favourite jQuery method: ",Object(r.b)("inlineCode",{parentName:"p"},"val"),". The documentation of ",Object(r.b)("inlineCode",{parentName:"p"},"val")," can be found here: ",Object(r.b)("a",{parentName:"p",href:"http://api.jquery.com/val"},"api.jquery.com/val")),Object(r.b)("p",null,"By the way, check out the ","*",Object(r.b)("em",{parentName:"p"},"entirely"),"*"," intuitive URL. Now you've clocked just how straightforward that is you've probably a fair idea how you could find pretty much any jQuery documentation you might need without recourse to Google. Brilliant!"),Object(r.b)("p",null,"Let's take a look at what ",Object(r.b)("inlineCode",{parentName:"p"},"val")," looked like ",Object(r.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/blob/c98eebb13724b5156f12318b68fc2d875ca6e4a3/jquery/jquery.d.ts#L364-L368"},"before JSDoc")," in the first version of the typing available on GitHub. (By the way, remember the original ",Object(r.b)("inlineCode",{parentName:"p"},"jquery.d.ts"),Object(r.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/sourcecontrol/latest#samples/jquery/jquery.d.ts"}," came out of the TypeScript team"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"val(): any;\n    val(value: string[]): JQuery;\n    val(value: string): JQuery;\n    val(value: number): JQuery;\n    val(func: (index: any, value: any) => any): JQuery;\n")),Object(r.b)("p",null,"And now let's look at ",Object(r.b)("inlineCode",{parentName:"p"},"jquery.d.ts"),Object(r.b)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/blob/c259dba094121a389b41c573d5000dda7bdf2092/jquery/jquery.d.ts#L1494-L1545"},"after JSDoc"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Get the current value of the first element in the set of matched elements.\n     */\n    val(): any;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string[]): JQuery;\n")),Object(r.b)("p",null,"Many changes yes? Let's break it down a little."),Object(r.b)("h2",{id:"1-you-have-20-seconds-to-comply-with-the-api"},"1","."," You have 20 seconds to comply (with the API)"),Object(r.b)("p",null,"The first thing to note is the ",Object(r.b)("inlineCode",{parentName:"p"},"number")," setter method:"),Object(r.b)("pre",null,"    val(value: number): JQuery;"),Object(r.b)("p",null,"Let's have a look at the jQuery documentation for the simple setter:"),Object(r.b)("blockquote",null,Object(r.b)("h2",{parentName:"blockquote",id:""},"[",Object(r.b)("span",{class:"icon-link"})),Object(r.b)("p",{parentName:"blockquote"},".val( value )](",Object(r.b)("a",{parentName:"p",href:"http://api.jquery.com/val/#val-value"},"http://api.jquery.com/val/#val-value"),")"),Object(r.b)("div",null,Object(r.b)("strong",null,"value")),Object(r.b)("div",null,"Type: ",Object(r.b)("a",{href:"http://api.jquery.com/Types/#String"},"String")," or ",Object(r.b)("a",{href:"http://api.jquery.com/Types/#Array"},"Array")),Object(r.b)("div",null,"A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.")),Object(r.b)("p",null,"See the problem? There is ","*",Object(r.b)("em",{parentName:"p"},"no"),"*"," ",Object(r.b)("inlineCode",{parentName:"p"},"number")," setter. The typings are wrong. So let's remedy this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"<strike>val(value: number): JQuery;</strike>\n")),Object(r.b)("h2",{id:"2-string-and-array-of-string-setters"},"2","."," ",Object(r.b)("inlineCode",{parentName:"h2"},"String")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"Array of String")," setters"),Object(r.b)("p",null,"The documentation states that we have setters which accept ",Object(r.b)("inlineCode",{parentName:"p"},"String")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Array of String"),". These are already modeled in the existing typings by the ",Object(r.b)("inlineCode",{parentName:"p"},"string")," and ",Object(r.b)("inlineCode",{parentName:"p"},"string[]")," overloads:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"val(value: string[]): JQuery;\n    val(value: string): JQuery;\n")),Object(r.b)("p",null,"So let's enrich these typings with some JSDoc:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string[]): JQuery;\n")),Object(r.b)("p",null,"If you look you can see we've added a related JSDoc style comment block prior to each overload. The first part of the comment (",Object(r.b)("em",{parentName:"p"},'"Set the value of..."'),") is the overarching Intellisense that is displayed. Each of the ",Object(r.b)("inlineCode",{parentName:"p"},"@param")," statements represents each of the parameters and it's associated comment. By comparing the ",Object(r.b)("a",{parentName:"p",href:"http://api.jquery.com/val/#val-value"},"API documentation")," to the JSDoc it's pretty clear how the API has been transformed into useful JSDoc."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://2.bp.blogspot.com/-ljw2HiAp0qE/U2D915IIcaI/AAAAAAAAAkk/DVPv-TolEJw/s1600/Intellisense-Setter-String.png"},Object(r.b)("img",{parentName:"a",src:"http://2.bp.blogspot.com/-ljw2HiAp0qE/U2D915IIcaI/AAAAAAAAAkk/DVPv-TolEJw/s640/Intellisense-Setter-String.png",alt:"null"})),"It's worth noting that I could have taken the choice to customise the ",Object(r.b)("inlineCode",{parentName:"p"},"@param value")," comments based on the overload I was JSDoc-ing. Arguably it would have been more useful to have something like this instead:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text <strike>or an array of strings</strike> corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value <strike>A string of text or</strike> an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string[]): JQuery;\n")),Object(r.b)("p",null,"After some pondering I decided not to take this approach, just to maintain that close relationship between ",Object(r.b)("inlineCode",{parentName:"p"},"jquery.d.ts")," and ",Object(r.b)("a",{parentName:"p",href:"http://api.jquery.com/"},"api.jquery.com"),". It's open to debate how useful that relationship actually is so I thought I'd just highlight this as a choice I made."),Object(r.b)("h2",{id:"3-getter"},"3","."," Getter"),Object(r.b)("p",null,"The jQuery documentation for the getter looks like this:"),Object(r.b)("blockquote",null,Object(r.b)("h2",{parentName:"blockquote",id:"-1"},"[",Object(r.b)("span",{class:"icon-link"})),Object(r.b)("span",{class:"name"},".val()"),Object(r.b)("p",{parentName:"blockquote"},"](",Object(r.b)("a",{parentName:"p",href:"http://api.jquery.com/val/#val"},"http://api.jquery.com/val/#val"),")",Object(r.b)("span",{class:"returns"},"Returns: ",Object(r.b)("a",{href:"http://api.jquery.com/Types/#String"},"String")," or ",Object(r.b)("a",{href:"http://api.jquery.com/Types/#Number"},"Number")," or ",Object(r.b)("a",{href:"http://api.jquery.com/Types/#Array"},"Array"))),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Description: "),"Get the current value of the first element in the set of matched elements.")),Object(r.b)("p",null,"So the ",Object(r.b)("inlineCode",{parentName:"p"},"val()")," overload can return a ",Object(r.b)("inlineCode",{parentName:"p"},"string"),", a ",Object(r.b)("inlineCode",{parentName:"p"},"number")," or a ",Object(r.b)("inlineCode",{parentName:"p"},"string[]"),". Unfortunately there is no real way to model that in TypeScript at present due to the absence of ",Object(r.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1364"},'"union types"'),". Union types are being ",Object(r.b)("a",{parentName:"p",href:"https://typescript.codeplex.com/discussions/543598#PostDetailsCell_1239340"},"discussed at present")," but in TypeScript v1.0 world the only viable approach is returning the ",Object(r.b)("inlineCode",{parentName:"p"},"any")," type. This implies ",Object(r.b)("inlineCode",{parentName:"p"},"val()")," returns any possible JavaScript value from ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," to ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," and straight on 'til morning. So clearly this isn't accurate but importantly it also allows for the possibility of ",Object(r.b)("inlineCode",{parentName:"p"},"val()")," returning ",Object(r.b)("inlineCode",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"number")," or ",Object(r.b)("inlineCode",{parentName:"p"},"string[]"),"."),Object(r.b)("p",null,"The final getter typing with JSDoc applied ends up looking like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Get the current value of the first element in the set of matched elements.\n     */\n    val(): any;\n")),Object(r.b)("p",null,"As you can see the ",Object(r.b)("em",{parentName:"p"},'"Get the current value..."')," from the API docs has been used as the overarching Intellisense that is displayed for the getter."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://4.bp.blogspot.com/-7PG3jVXPWdM/U2D-BvxwYYI/AAAAAAAAAks/_ZTRQWBt7L8/s1600/Intellisense-Getter.png"},Object(r.b)("img",{parentName:"a",src:"http://4.bp.blogspot.com/-7PG3jVXPWdM/U2D-BvxwYYI/AAAAAAAAAks/_ZTRQWBt7L8/s640/Intellisense-Getter.png",alt:"null"})),"## 4","."," The ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," setter"),Object(r.b)("p",null,"Finally we're going to take a look at the ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," setter which is documented as follows:"),Object(r.b)("blockquote",null,Object(r.b)("h2",{parentName:"blockquote",id:"-2"},"[",Object(r.b)("span",{class:"icon-link"})),Object(r.b)("p",{parentName:"blockquote"},".val( function(index, value) )](",Object(r.b)("a",{parentName:"p",href:"http://api.jquery.com/val/#val-functionindex--value"},"http://api.jquery.com/val/#val-functionindex--value"),")"),Object(r.b)("div",null,Object(r.b)("strong",null,"function(index, value)")),Object(r.b)("div",null,"Type: ",Object(r.b)("a",{href:"http://api.jquery.com/Types/#Function"},"Function"),"()"),Object(r.b)("div",null,"A function returning the value to set. ",Object(r.b)("code",null,"this")," is the current element. Receives the index position of the element in the set and the old value as arguments.")),Object(r.b)("p",null,"If you cast your eyes back to the original typings for the ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," setter you'll see they look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"val(func: (index: any, value: any) => any): JQuery;\n")),Object(r.b)("p",null,"This is a good start but it's less accurate than it could be in a number of ways:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"index")," is a ",Object(r.b)("inlineCode",{parentName:"li"},"number")," ","-"," we needn't keep it as an ",Object(r.b)("inlineCode",{parentName:"li"},"any")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"value")," is the old value - we know from our getter that this can be a ",Object(r.b)("inlineCode",{parentName:"li"},"string"),", ",Object(r.b)("inlineCode",{parentName:"li"},"number")," or ",Object(r.b)("inlineCode",{parentName:"li"},"string[]"),". So we can lose the ",Object(r.b)("inlineCode",{parentName:"li"},"any")," in favour of overloads which specify different types for ",Object(r.b)("inlineCode",{parentName:"li"},"value")," in each."),Object(r.b)("li",{parentName:"ol"},"The return value of the function is the value that should be set. We know from our other setters that the possible types allowed here are ",Object(r.b)("inlineCode",{parentName:"li"},"string")," and ",Object(r.b)("inlineCode",{parentName:"li"},"string[]"),". (And yes I'm as puzzled as you are that the getter can return a ",Object(r.b)("inlineCode",{parentName:"li"},"number")," but the setter can't set one.) That being the case it makes sense for us to have overloads with functions that return both ",Object(r.b)("inlineCode",{parentName:"li"},"string")," and ",Object(r.b)("inlineCode",{parentName:"li"},"string[]"))),Object(r.b)("p",null,"So, we've got a little tidy up to do for #1 and extra overloads to add for #2 and #3. We're going to replace the single ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," setter with 3 overloads to cater for #2. Then for #3 we're going to take each of the 3 overloads we've just created and make 2 overloads place of each to handle the different return types. This will lead us with the grand total of 6 overloads to model our ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," setter!"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string[]): JQuery;\n")),Object(r.b)("p",null,"A cursory glance shows that each of the overloads above shares the same JSDoc. Each has the ",Object(r.b)("em",{parentName:"p"},'"Set the value..."')," from the API docs as the overarching Intellisense that is displayed for the ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," setter. And each has the same ",Object(r.b)("inlineCode",{parentName:"p"},"@param func")," comment as well."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://1.bp.blogspot.com/-9wwPOZIiwcs/U2D-Ngw9CrI/AAAAAAAAAk0/V32FCsotPTQ/s1600/Intellisense-Setter-Function.png"},Object(r.b)("img",{parentName:"a",src:"http://1.bp.blogspot.com/-9wwPOZIiwcs/U2D-Ngw9CrI/AAAAAAAAAk0/V32FCsotPTQ/s640/Intellisense-Setter-Function.png",alt:"null"})),"## It could be you..."),Object(r.b)("p",null,"This post is much longer than I ever intended it to be. But I wanted to show how easy it is to create typings with JSDoc to drive Intellisense. For no obvious reason people generally don't make a great deal of use of JSDoc when creating typings. Perhaps the creators have no good source of documentation (a common problem). Or perhaps people are not even aware it's a possibility - they don't know about the TypeScript support of JSDoc. In case it's the latter I think this post was worth writing."))}u.isMDXComponent=!0}}]);
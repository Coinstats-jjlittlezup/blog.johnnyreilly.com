"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[30414],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return h},default:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"TypeScript, JSDoc and Intellisense",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["jquery","JSDoc","TypeScript","Intellisense","jQuery.d.ts"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2014/05/05/typescript-jsdoc-and-intellisense",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-05-05-typescript-jsdoc-and-intellisense.md",source:"@site/blog/2014-05-05-typescript-jsdoc-and-intellisense.md",title:"TypeScript, JSDoc and Intellisense",description:"Days of Yore",date:"2014-05-05T00:00:00.000Z",formattedDate:"May 5, 2014",tags:[{label:"jquery",permalink:"/tags/jquery"},{label:"JSDoc",permalink:"/tags/js-doc"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Intellisense",permalink:"/tags/intellisense"},{label:"jQuery.d.ts",permalink:"/tags/j-query-d-ts"}],readingTime:14.39,truncated:!1,prevItem:{title:"Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests",permalink:"/2014/05/15/team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project"},nextItem:{title:"TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)",permalink:"/2014/04/01/typescript-instance-methods"}},h=[{value:"Days of Yore",id:"days-of-yore",children:[]},{value:"Definitely Intellisensed",id:"definitely-intellisensed",children:[]},{value:"Turning API documentation into JSDoc",id:"turning-api-documentation-into-jsdoc",children:[]},{value:"1. You have 20 seconds to comply (with the API)",id:"1-you-have-20-seconds-to-comply-with-the-api",children:[]},{value:"2. <code>String</code> and <code>Array of String</code> setters",id:"2-string-and-array-of-string-setters",children:[]},{value:"3. Getter",id:"3-getter",children:[]},{value:"4. The <code>Function</code> setter",id:"4-the-function-setter",children:[]},{value:"It could be you...",id:"it-could-be-you",children:[]}],p={toc:h};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"days-of-yore"},"Days of Yore"),(0,r.kt)("p",null,' It was my first job. The web was alive and well at this point but still very much in it\'s infancy. Newspapers had only recently moved on from calling it "the information superhighway". No-one was doing ',(0,r.kt)("em",{parentName:"p"},"real")," programming for the web - the desktop was where it was at."),(0,r.kt)("p",null,"As for me, I was writing call centre software. It was all very exciting. Here was the idea: the phone on your desk would start ringing and through the magic of ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Telephony_Application_Programming_Interface"},"TAPI"),' our app would be presented with the telephone number of the dialer. It would then look up that telephone number in the appropriate CRM application and pop the callers details on the screen. You\'d pick up the phone and bellow "why hello Mr Jones!" and either impress the caller with your incredible fore-knowledge of who had rung you or perhaps terrify them with our ',(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Nineteen_Eighty-Four"},"Brave New Orwellian World"),"."),(0,r.kt)("p",null,"My job was to work out how to call into the APIs of the various CRM applications / databases being used and extract the relevant information. So it goes without saying that I have spent a lot of time with badly documented APIs. Or in fact ",(0,r.kt)("em",{parentName:"p"},"undocumented")," APIs. I know pain my friend..."),(0,r.kt)("p",null,"Hours and days were spent debugging and walking APIs just to find out what they could do and what information they exposed. This, I need hardly say, was dull and tedious work. Having spent longer than I care to remember with no more information on an API than method names has left its mark on me. I am consequently keener than your average dev on documentation and intellisense. When you've stared at the coalface of the ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/IBM_Notes"},"Lotus Notes")," API for 2 weeks with only Dephi 3 as your constant companion you'd feel the same way too. (This was ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/AltaVista"},"before the days of Google")," and actually being able to find stuff on the internet.)"),(0,r.kt)("p",null,"If you can convey information about the API that you're building then I'd say you're duty-bound to do so. Or at least that it's good manners."),(0,r.kt)("h2",{id:"definitely-intellisensed"},"Definitely Intellisensed"),(0,r.kt)("p",null,"When I started getting involved with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped"},"Definitely Typed project"),' my focus was on giving good Intellisense. Where there was documentation for an API I wanted to get that popping in front of users when they hit the "." key:'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://blogs.msdn.com/cfs-filesystemfile.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-01-56-67/1200.JSDoc_5F00_in_5F00_VS.png",alt:null})),(0,r.kt)("p",null,"As the above screenshot demonstrates ",(0,r.kt)("a",{parentName:"p",href:"http://blogs.msdn.com/b/typescript/archive/2013/01/21/announcing-typescript-0-8-2.aspx"},"TypeScript supports Intellisense")," through a slightly tweaked implementation of ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/JSDoc"},"JSDoc"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"With 0.8.2, the TypeScript compiler and tools now support JSDoc comments."),(0,r.kt)("p",{parentName:"blockquote"},"In the TypeScript implementation, because types are already part of the system, we allow the JSDoc type annotation to be elided, as in the example above."),(0,r.kt)("p",{parentName:"blockquote"},"You can now document a variety of language constructs (including classes, modules, interfaces, and functions) with comments that become part of the information displayed to the user. We\u2019ve also started extending lib.d.ts, the default JS and DOM API library, with JSDoc comments.")),(0,r.kt)("p",null,"Partly as an exercise in getting better acquainted with TypeScript and partly responding to my instinctive need to have nicely documented APIs I decided to start adding JSDoc comments to the world's most popular typings file ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="https://github.com/borisyankov/DefinitelyTyped/blob/master/jquery/jquery.d.ts">jquery.d.ts</a>'),"."),(0,r.kt)("div",{class:"digression getOutOfMySight"},(0,r.kt)("h4",null,"Why ",(0,r.kt)("code",null,"jquery.d.ts"),"?"),(0,r.kt)("p",null,"Well a number of reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"I used ",(0,r.kt)("code",null,"jquery.d.ts")," already myself and I'm a firm believer in ",(0,r.kt)("a",{href:"http://en.wikipedia.org/wiki/Eating_your_own_dog_food"},"eating your own dogfood")),(0,r.kt)("li",null,"jQuery is well documented. I needed a source of information to power my JSDoc and ",(0,r.kt)("a",{href:"//api.jquery.com"},"api.jquery.com")," had my back."),(0,r.kt)("li",null,(0,r.kt)("code",null,"jquery.d.ts")," was widely used. Given how ubiquitous jQuery has become this typing file was unsurprisingly the most popular in the world. That was key for me as I wanted feedback - if I was making a mess of the typings I wanted someone to pitch in and tell me.")),(0,r.kt)("p",null,"Just to digress once more, points #2 and #3 turned out to be of particular note."),(0,r.kt)("p",null,"Concerning point #2, I did find the occasional ",(0,r.kt)("a",{href:"https://github.com/borisyankov/DefinitelyTyped/pull/1471#issuecomment-31204115"},"error")," or ",(0,r.kt)("a",{href:"https://github.com/borisyankov/DefinitelyTyped/pull/1835#issuecomment-37533088"},"inconsistency")," in the jQuery API documentation. These were definitely the exception rather than the rule though. And thanks to the very helpful ",(0,r.kt)("a",{href:"https://github.com/dmethvin"},"Dave Methvin")," these actually lead to ",(0,r.kt)("a",{href:"https://github.com/jquery/api.jquery.com/pull/460"},"minor improvements to the jQuery API documentation"),"."),(0,r.kt)("blockquote",{class:"twitter-tweet",lang:"en"},(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://twitter.com/search?q=%23TypeScript&src=hash"},"#TypeScript")," definitions pointing out errors in JavaScript docs of a project ",(0,r.kt)("a",{href:"https://twitter.com/search?q=%23Jquery&src=hash"},"#Jquery")," : ",(0,r.kt)("a",{href:"https://t.co/v6rzCdBwmi"},"https://t.co/v6rzCdBwmi")," caught by ",(0,r.kt)("a",{href:"https://twitter.com/johnny_reilly"},"@johnny_reilly")),"\u2014 basarat (@basarat) ",(0,r.kt)("a",{href:"https://twitter.com/basarat/statuses/416309213430689792"},"December 26, 2013")),(0,r.kt)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,r.kt)("p",null,"Concerning point #3 I did indeed get feedback. As well as enriching ",(0,r.kt)("code",null,"jquery.d.ts")," with JSDoc goodness I also found myself fixing slight errors in the typings. Here and there I would find examples where ",(0,r.kt)("code",null,"jquery.d.ts")," was out of line the with API documentation. Where this was the case I would amend the typings to bring them into line - trying to make ",(0,r.kt)("code",null,"jquery.d.ts")," entirely API-compliant. This was ",(0,r.kt)("a",{href:"https://github.com/borisyankov/DefinitelyTyped/issues/1499"},"not always popular"),". But despite the heat it generated I think it ended up leading to a better typing file. I'm again grateful for Dave Methvin's thoughtful contributions.")),(0,r.kt)("h2",{id:"turning-api-documentation-into-jsdoc"},"Turning API documentation into JSDoc"),(0,r.kt)("p",null,"I wanted to take an example of API documentation and demonstrate how that can be applied to a typing file with particular focus on how JSDoc comments can be created to drive Intellisense. So let's take everyone's favourite jQuery method: ",(0,r.kt)("inlineCode",{parentName:"p"},"val"),". The documentation of ",(0,r.kt)("inlineCode",{parentName:"p"},"val")," can be found here: ",(0,r.kt)("a",{parentName:"p",href:"http://api.jquery.com/val"},"api.jquery.com/val")),(0,r.kt)("p",null,"By the way, check out the ","*",(0,r.kt)("em",{parentName:"p"},"entirely"),"*"," intuitive URL. Now you've clocked just how straightforward that is you've probably a fair idea how you could find pretty much any jQuery documentation you might need without recourse to Google. Brilliant!"),(0,r.kt)("p",null,"Let's take a look at what ",(0,r.kt)("inlineCode",{parentName:"p"},"val")," looked like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/blob/c98eebb13724b5156f12318b68fc2d875ca6e4a3/jquery/jquery.d.ts#L364-L368"},"before JSDoc")," in the first version of the typing available on GitHub. (By the way, remember the original ",(0,r.kt)("inlineCode",{parentName:"p"},"jquery.d.ts"),(0,r.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/sourcecontrol/latest#samples/jquery/jquery.d.ts"}," came out of the TypeScript team"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"val(): any;\n    val(value: string[]): JQuery;\n    val(value: string): JQuery;\n    val(value: number): JQuery;\n    val(func: (index: any, value: any) => any): JQuery;\n")),(0,r.kt)("p",null,"And now let's look at ",(0,r.kt)("inlineCode",{parentName:"p"},"jquery.d.ts"),(0,r.kt)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/blob/c259dba094121a389b41c573d5000dda7bdf2092/jquery/jquery.d.ts#L1494-L1545"},"after JSDoc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Get the current value of the first element in the set of matched elements.\n     */\n    val(): any;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string[]): JQuery;\n")),(0,r.kt)("p",null,"Many changes yes? Let's break it down a little."),(0,r.kt)("h2",{id:"1-you-have-20-seconds-to-comply-with-the-api"},"1","."," You have 20 seconds to comply (with the API)"),(0,r.kt)("p",null,"The first thing to note is the ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," setter method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"val(value: number): JQuery;\n")),(0,r.kt)("p",null,"Let's have a look at the jQuery documentation for the simple setter:"),(0,r.kt)("blockquote",null,(0,r.kt)("h2",{parentName:"blockquote",id:"val-value-"},(0,r.kt)("a",{parentName:"h2",href:"http://api.jquery.com/val/#val-value"},".val( value )")),(0,r.kt)("div",null,(0,r.kt)("strong",null,"value")),(0,r.kt)("div",null,"Type: ",(0,r.kt)("a",{href:"http://api.jquery.com/Types/#String"},"String")," or ",(0,r.kt)("a",{href:"http://api.jquery.com/Types/#Array"},"Array")),(0,r.kt)("div",null,"A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.")),(0,r.kt)("p",null,"See the problem? There is ","*",(0,r.kt)("em",{parentName:"p"},"no"),"*"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," setter. The typings are wrong. So let's remedy this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"<strike>val(value: number): JQuery;</strike>\n")),(0,r.kt)("h2",{id:"2-string-and-array-of-string-setters"},"2","."," ",(0,r.kt)("inlineCode",{parentName:"h2"},"String")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"Array of String")," setters"),(0,r.kt)("p",null,"The documentation states that we have setters which accept ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array of String"),". These are already modeled in the existing typings by the ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"string[]")," overloads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"val(value: string[]): JQuery;\n    val(value: string): JQuery;\n")),(0,r.kt)("p",null,"So let's enrich these typings with some JSDoc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string[]): JQuery;\n")),(0,r.kt)("p",null,"If you look you can see we've added a related JSDoc style comment block prior to each overload. The first part of the comment (",(0,r.kt)("em",{parentName:"p"},'"Set the value of..."'),") is the overarching Intellisense that is displayed. Each of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@param")," statements represents each of the parameters and it's associated comment. By comparing the ",(0,r.kt)("a",{parentName:"p",href:"http://api.jquery.com/val/#val-value"},"API documentation")," to the JSDoc it's pretty clear how the API has been transformed into useful JSDoc."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-ljw2HiAp0qE/U2D915IIcaI/AAAAAAAAAkk/DVPv-TolEJw/s640/Intellisense-Setter-String.png",alt:null})),(0,r.kt)("p",null,"It's worth noting that I could have taken the choice to customise the ",(0,r.kt)("inlineCode",{parentName:"p"},"@param value")," comments based on the overload I was JSDoc-ing. Arguably it would have been more useful to have something like this instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text <strike>or an array of strings</strike> corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value <strike>A string of text or</strike> an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string[]): JQuery;\n")),(0,r.kt)("p",null,"After some pondering I decided not to take this approach, just to maintain that close relationship between ",(0,r.kt)("inlineCode",{parentName:"p"},"jquery.d.ts")," and ",(0,r.kt)("a",{parentName:"p",href:"http://api.jquery.com/"},"api.jquery.com"),". It's open to debate how useful that relationship actually is so I thought I'd just highlight this as a choice I made."),(0,r.kt)("h2",{id:"3-getter"},"3","."," Getter"),(0,r.kt)("p",null,"The jQuery documentation for the getter looks like this:"),(0,r.kt)("blockquote",null,(0,r.kt)("h2",{parentName:"blockquote",id:""},"[",(0,r.kt)("span",{class:"icon-link"})),(0,r.kt)("span",{class:"name"},".val()"),(0,r.kt)("p",{parentName:"blockquote"},"](",(0,r.kt)("a",{parentName:"p",href:"http://api.jquery.com/val/#val"},"http://api.jquery.com/val/#val"),")",(0,r.kt)("span",{class:"returns"},"Returns: ",(0,r.kt)("a",{href:"http://api.jquery.com/Types/#String"},"String")," or ",(0,r.kt)("a",{href:"http://api.jquery.com/Types/#Number"},"Number")," or ",(0,r.kt)("a",{href:"http://api.jquery.com/Types/#Array"},"Array"))),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description: "),"Get the current value of the first element in the set of matched elements.")),(0,r.kt)("p",null,"So the ",(0,r.kt)("inlineCode",{parentName:"p"},"val()")," overload can return a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"string[]"),". Unfortunately there is no real way to model that in TypeScript at present due to the absence of ",(0,r.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1364"},'"union types"'),". Union types are being ",(0,r.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/discussions/543598#PostDetailsCell_1239340"},"discussed at present")," but in TypeScript v1.0 world the only viable approach is returning the ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," type. This implies ",(0,r.kt)("inlineCode",{parentName:"p"},"val()")," returns any possible JavaScript value from ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," and straight on 'til morning. So clearly this isn't accurate but importantly it also allows for the possibility of ",(0,r.kt)("inlineCode",{parentName:"p"},"val()")," returning ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"string[]"),"."),(0,r.kt)("p",null,"The final getter typing with JSDoc applied ends up looking like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Get the current value of the first element in the set of matched elements.\n     */\n    val(): any;\n")),(0,r.kt)("p",null,"As you can see the ",(0,r.kt)("em",{parentName:"p"},'"Get the current value..."')," from the API docs has been used as the overarching Intellisense that is displayed for the getter."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-7PG3jVXPWdM/U2D-BvxwYYI/AAAAAAAAAks/_ZTRQWBt7L8/s640/Intellisense-Getter.png",alt:null})),(0,r.kt)("h2",{id:"4-the-function-setter"},"4","."," The ",(0,r.kt)("inlineCode",{parentName:"h2"},"Function")," setter"),(0,r.kt)("p",null,"Finally we're going to take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," setter which is documented as follows:"),(0,r.kt)("blockquote",null,(0,r.kt)("h2",{parentName:"blockquote",id:"-1"},"[",(0,r.kt)("span",{class:"icon-link"})),(0,r.kt)("p",{parentName:"blockquote"},".val( function(index, value) )](",(0,r.kt)("a",{parentName:"p",href:"http://api.jquery.com/val/#val-functionindex--value"},"http://api.jquery.com/val/#val-functionindex--value"),")"),(0,r.kt)("div",null,(0,r.kt)("strong",null,"function(index, value)")),(0,r.kt)("div",null,"Type: ",(0,r.kt)("a",{href:"http://api.jquery.com/Types/#Function"},"Function"),"()"),(0,r.kt)("div",null,"A function returning the value to set. ",(0,r.kt)("code",null,"this")," is the current element. Receives the index position of the element in the set and the old value as arguments.")),(0,r.kt)("p",null,"If you cast your eyes back to the original typings for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," setter you'll see they look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"val(func: (index: any, value: any) => any): JQuery;\n")),(0,r.kt)("p",null,"This is a good start but it's less accurate than it could be in a number of ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"index")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," ","-"," we needn't keep it as an ",(0,r.kt)("inlineCode",{parentName:"li"},"any")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," is the old value - we know from our getter that this can be a ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"),". So we can lose the ",(0,r.kt)("inlineCode",{parentName:"li"},"any")," in favour of overloads which specify different types for ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," in each."),(0,r.kt)("li",{parentName:"ol"},"The return value of the function is the value that should be set. We know from our other setters that the possible types allowed here are ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"),". (And yes I'm as puzzled as you are that the getter can return a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," but the setter can't set one.) That being the case it makes sense for us to have overloads with functions that return both ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"))),(0,r.kt)("p",null,"So, we've got a little tidy up to do for #1 and extra overloads to add for #2 and #3. We're going to replace the single ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," setter with 3 overloads to cater for #2. Then for #3 we're going to take each of the 3 overloads we've just created and make 2 overloads place of each to handle the different return types. This will lead us with the grand total of 6 overloads to model our ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," setter!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string[]): JQuery;\n")),(0,r.kt)("p",null,"A cursory glance shows that each of the overloads above shares the same JSDoc. Each has the ",(0,r.kt)("em",{parentName:"p"},'"Set the value..."')," from the API docs as the overarching Intellisense that is displayed for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," setter. And each has the same ",(0,r.kt)("inlineCode",{parentName:"p"},"@param func")," comment as well."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-9wwPOZIiwcs/U2D-Ngw9CrI/AAAAAAAAAk0/V32FCsotPTQ/s640/Intellisense-Setter-Function.png",alt:null})),(0,r.kt)("h2",{id:"it-could-be-you"},"It could be you..."),(0,r.kt)("p",null,"This post is much longer than I ever intended it to be. But I wanted to show how easy it is to create typings with JSDoc to drive Intellisense. For no obvious reason people generally don't make a great deal of use of JSDoc when creating typings. Perhaps the creators have no good source of documentation (a common problem). Or perhaps people are not even aware it's a possibility - they don't know about the TypeScript support of JSDoc. In case it's the latter I think this post was worth writing."))}c.isMDXComponent=!0}}]);
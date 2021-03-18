(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{1170:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=i.a.createContext({}),c=function(t){var e=i.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},d=function(t){var e=c(t.components);return i.a.createElement(u.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},p=i.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,r=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),p=a,b=d["".concat(r,".").concat(p)]||d[p]||h[p]||o;return n?i.a.createElement(b,s(s({ref:e},u),{},{components:n})):i.a.createElement(b,s({ref:e},u))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},133:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return c}));var a=n(3),i=n(8),o=(n(0),n(1170)),r={title:"Instant Stubs with JSON.Net (just add hot water)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["unit testing","stub data","json.net","mock data"],hide_table_of_contents:!1},s={permalink:"/2016/04/25/instant-stubs-with-jsonnet",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-04-25-instant-stubs-with-jsonnet.md",source:"@site/blog/2016-04-25-instant-stubs-with-jsonnet.md",description:"I'd like you to close your eyes and imagine a scenario. You're handed a prototype system. You're told it works. It has no documentation. It has 0 unit tests. The hope is that you can take it on, refactor it, make it better and (crucially) not break it. Oh, and you don't really understand what the code does or why it does it either; information on that front is, alas, sorely lacking.",date:"2016-04-25T00:00:00.000Z",formattedDate:"April 25, 2016",tags:[{label:"unit testing",permalink:"/tags/unit-testing"},{label:"stub data",permalink:"/tags/stub-data"},{label:"json.net",permalink:"/tags/json-net"},{label:"mock data",permalink:"/tags/mock-data"}],title:"Instant Stubs with JSON.Net (just add hot water)",readingTime:4.045,truncated:!1,prevItem:{title:"Inlining Angular Templates with WebPack and TypeScript",permalink:"/2016/05/13/inlining-angular-templates-with-webpack"},nextItem:{title:"Elvis and King Concat",permalink:"/2016/03/22/elvis-and-king-concat"}},l=[{value:"Instant Stubs",id:"instant-stubs",children:[]},{value:"Using your JSON",id:"using-your-json",children:[]}],u={toc:l};function c(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I'd like you to close your eyes and imagine a scenario. You're handed a prototype system. You're told it works. It has no documentation. It has 0 unit tests. The hope is that you can take it on, refactor it, make it better and (crucially) not break it. Oh, and you don't really understand what the code does or why it does it either; information on that front is, alas, sorely lacking."),Object(o.b)("p",null," This has happened to me; it's alas not that unusual. The common advice handed out in this situation is: \"add unit tests before you change it\". That's good advice. We need to take the implementation that embodies the correctness of the system and create unit tests that set that implementation in stone. However, what say the system that you're hoping to add tests to takes a number of large and complex inputs from some external source and produces a similarly large and complex output?"),Object(o.b)("p",null,"You could start with integration tests. They're good but slow and crucially they depend upon the external inputs being available and unchanged (which is perhaps unlikely). What you could do (what I have done) is debug a working working system. At each point that an input is obtained I have painstakingly transcribed the data which allows me to subsequently hand code stub data. There comes a point when this is plainly untenable; it's just too much data to transcribe. At this point the temptation is to think \"it's okay; I can live without the tests. I'll just be super careful with my refactoring... It'll be fine It'll be fine It'll be fine It'll be fine\"."),Object(o.b)("p",null,"Actually, it probably won't be fine. And even if it is (miracles do happen) you're going to be fairly stressed as you wonder if you've been careful enough. What if there was another way? A way that wasn't quite so hard but that allowed you to add tests without requiring 3 months hand coding...."),Object(o.b)("h2",{id:"instant-stubs"},"Instant Stubs"),Object(o.b)("p",null,"What I've come up with is a super simple utility class for creating stubs / fakes. (I'm aware the naming of such things ",Object(o.b)("a",{parentName:"p",href:"http://martinfowler.com/articles/mocksArentStubs.html"},"can be a little contentious"),".)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'using Newtonsoft.Json;\nusing System;\nusing System.IO;\n\nnamespace MakeFakeData.UnitTests\n{\n  public static class Stubs\n  {\n    private static JsonSerializer _serializer = new JsonSerializer { NullValueHandling = NullValueHandling.Ignore };\n\n    public static void Make<T>(string stubPath, T data)\n    {\n      try\n      {\n        if (string.IsNullOrEmpty(stubPath))\n          throw new ArgumentNullException(nameof(stubPath));\n        if (data == null)\n          throw new ArgumentNullException(nameof(data));\n\n        using (var sw = new StreamWriter(stubPath))\n        using (var writer = new JsonTextWriter(sw) { \n            Formatting = Formatting.Indented, \n            IndentChar = \' \', \n            Indentation = 2})\n        {\n          _serializer.Serialize(writer, data);\n        }\n      }\n      catch (Exception exc)\n      {\n        throw new Exception($"Failed to make {stubPath}", exc);\n      }\n    }\n\n    public static T Load<T>(string stubPath)\n    {\n      try\n      {\n        if (string.IsNullOrEmpty(stubPath))\n          throw new ArgumentNullException(nameof(stubPath));\n\n        using (var file = File.OpenText(stubPath))\n        using (var reader = new JsonTextReader(file))\n        {\n          return _serializer.Deserialize<T>(reader);\n        }\n      }\n      catch (Exception exc)\n      {\n        throw new Exception($"Failed to load {stubPath}", exc);\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,"As you can see this class uses ",Object(o.b)("a",{parentName:"p",href:"http://www.newtonsoft.com/json"},"JSON.Net")," and exposes 2 methods:"),Object(o.b)("dl",null,Object(o.b)("dt",null,"Make"),Object(o.b)("dd",null,"Takes a given piece of data and uses JSON.Net to serialise it as JSON to a file. (nb I choose to format the JSON for readability and exclude null values; both totally optional)"),Object(o.b)("dt",null,"Load"),Object(o.b)("dd",null,"Takes the given path and loads the associated JSON file and deserialises it back into an object.")),Object(o.b)("p",null,"The idea is this: we take our working implementation and, wherever it extracts data from an external source, we insert a temporary statement like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'var data = _dataService.GetComplexData();\n\n    // Just inserted so we can generate the stub data...\n    Stubs.Make($"{System.AppDomain.CurrentDomain.BaseDirectory}\\\\data.json", data);\n')),Object(o.b)("p",null,"The next time you run the implementation you'll find the app generates a ",Object(o.b)("inlineCode",{parentName:"p"},"data.json")," file containing the complex data serialized to JSON. Strip out your ",Object(o.b)("inlineCode",{parentName:"p"},"Stubs.Make")," statements from the implementation and we're ready for the next stage."),Object(o.b)("h2",{id:"using-your-json"},"Using your JSON"),Object(o.b)("p",null,"What you need to do now is to take the new and shiny ",Object(o.b)("inlineCode",{parentName:"p"},"data.json")," file and move it to your unit test project. It needs to be included within the unit test project. Also, for each JSON file you have, the ",Object(o.b)("inlineCode",{parentName:"p"},"Build Action")," in VS needs to be set to ",Object(o.b)("inlineCode",{parentName:"p"},"Content")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"Copy to Output Directory")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Copy if newer"),"."),Object(o.b)("p",null,"Then within your unit tests you can write code like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'var dummyData = Stubs.Load<ComplexDataType>("Stubs/data.json");\n')),Object(o.b)("p",null,"Which pulls in your data from the JSON file and deserialises it into the original types. With this in hand you can plug together a unit test based on an existing implementation which depends on external data much faster than the hand-cranked method of old."),Object(o.b)("p",null,"Finally, before the wildebeest of TDD descend upon me howling and wailing, let me say again; I anticipate this being useful when you're trying to add tests to something that already exists but is untested. Clearly it would be better not to be in this situaion in the first place."))}c.isMDXComponent=!0}}]);
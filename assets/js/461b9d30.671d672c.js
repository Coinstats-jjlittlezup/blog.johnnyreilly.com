"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[30717],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,m=c["".concat(p,".").concat(d)]||c[d]||h[d]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return u},toc:function(){return h},default:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={title:"Snapshot Testing for C#",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["snapshot testing","c#","jest"],hide_table_of_contents:!1},p=void 0,l={permalink:"/2018/11/17/snapshot-testing-for-c",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-11-17-snapshot-testing-for-c.md",source:"@site/blog/2018-11-17-snapshot-testing-for-c.md",title:"Snapshot Testing for C#",description:"If you're a user of Jest, you've no doubt heard of and perhaps made use of snapshot testing.",date:"2018-11-17T00:00:00.000Z",formattedDate:"November 17, 2018",tags:[{label:"snapshot testing",permalink:"/tags/snapshot-testing"},{label:"c#",permalink:"/tags/c"},{label:"jest",permalink:"/tags/jest"}],readingTime:5.685,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"Cache Rules Everything Around Me",permalink:"/2018/12/10/cache-rules-everything-around-me"},nextItem:{title:"Making a Programmer",permalink:"/2018/10/27/making-a-programmer"}},u={authorsImageUrls:[void 0]},h=[{value:"Putting the Snapshot into C#",id:"putting-the-snapshot-into-c",children:[]},{value:"Taking Snapshot for a Spin",id:"taking-snapshot-for-a-spin",children:[]},{value:"Time Passes...",id:"time-passes",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],c={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you're a user of Jest, you've no doubt heard of and perhaps made use of ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing"},"snapshot testing"),"."),(0,r.kt)("p",null," Snapshot testing is an awesome tool that is generally discussed in the context of JavaScript React UI testing. But snapshot testing has a wider application than that. Essentially it is profoundly useful where you have functions which produce a complex structured output. It could be a React UI, it could be a list of FX prices. The type of data is immaterial; it's the amount of it that's key."),(0,r.kt)("p",null,"Typically there's a direct correlation between the size and complexity of the output of a method and the length of the tests that will be written for it. Let's say you're outputting a class that contains 20 properties. Congratulations! You get to write 20 assertions in one form or another for each test case. Or a single assertion whereby you supply the expected output by hand specifying each of the 20 properties. Either way, that's not going to be fun. And just imagine the time it would take to update multiple test cases if you wanted to change the behaviour of the method in question. Ouchy."),(0,r.kt)("p",null,"Time is money kid. What you need is snapshot testing. Say goodbye to handcrafted assertions and hello to JSON serialised output checked into source control. Let's unpack that a little bit. The usefulness of snapshot testing that I want in C# is predominantly about removing the need to write and maintain multiple assertions. Instead you write tests that compare the output of a call to your method with JSON serialised output you've generated on a previous occasion."),(0,r.kt)("p",null,"This approach takes less time to write, less time to maintain and the solid readability of JSON makes it more likely you'll pick up on bugs. It's so much easier to scan JSON than it is a list of assertions."),(0,r.kt)("h2",{id:"putting-the-snapshot-into-c"},"Putting the Snapshot into C#"),(0,r.kt)("p",null,"Now if you're writing tests in JavaScript or TypeScript then Jest already has your back with CLI snapshot generation and ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldMatchSnapshot"),". However getting to nearly the same place in C# is delightfully easy. What are we going to need?"),(0,r.kt)("p",null,"First up, a serializer which can take your big bad data structures and render them as JSON. Also we'll use it to rehydrate our data structure into an object ready for comparison. We're going to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.newtonsoft.com/json"},"Json.NET"),"."),(0,r.kt)("p",null,"Next up we need a way to compare our outputs with our rehydrated snapshots - we need a C# ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldMatchSnapshot"),". There's many choices out there, but for my money ",(0,r.kt)("a",{parentName:"p",href:"https://fluentassertions.com"},"Fluent Assertions")," is king of the hill."),(0,r.kt)("p",null,"Finally we're going to need Snapshot, a little helper utility I put together:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing Newtonsoft.Json;\nusing Newtonsoft.Json.Serialization;\n\nnamespace Test.Utilities {\n    public static class Snapshot {\n        private static readonly JsonSerializer StubSerializer = new JsonSerializer { \n            ContractResolver = new CamelCasePropertyNamesContractResolver(),\n            NullValueHandling = NullValueHandling.Ignore \n        };\n\n        private static JsonTextWriter MakeJsonTextWriter(TextWriter sw) => new JsonTextWriter(sw) {\n            Formatting = Formatting.Indented,\n            IndentChar = \' \',\n            Indentation = 2\n        };\n\n        /// <summary>\n        /// Make yourself some JSON! Usage looks like this:\n        /// Stubs.Make($"{System.AppDomain.CurrentDomain.BaseDirectory}..\\\\..\\\\..\\\\data.json", myData);\n        /// </summary>\n        public static void Make<T>(string stubPath, T data) {\n            try {\n                if (string.IsNullOrEmpty(stubPath))\n                    throw new ArgumentNullException(nameof(stubPath));\n                if (data == null)\n                    throw new ArgumentNullException(nameof(data));\n\n                using(var sw = new StreamWriter(stubPath))\n                using(var writer = MakeJsonTextWriter(sw)) {\n                    StubSerializer.Serialize(writer, data);\n                }\n            } catch (Exception exc) {\n                throw new Exception($"Failed to make {stubPath}", exc);\n            }\n        }\n\n        public static string Serialize<T>(T data) {\n            using (var sw = new StringWriter())\n            using(var writer = MakeJsonTextWriter(sw)) {\n                StubSerializer.Serialize(writer, data);\n                return sw.ToString();\n            }\n        }\n\n        public static string Load(string filename) {\n            var content = new StreamReader(\n                File.OpenRead(filename)\n            ).ReadToEnd();\n\n            return content;\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Let's look at the methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"Make")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Load"),". Make is what we're going to use to create our snapshots. Load is what we're going to use to, uh, load our snapshots."),(0,r.kt)("p",null,"What does usage look like? Great question. Let's go through the process of writing a C# snapshot test."),(0,r.kt)("h2",{id:"taking-snapshot-for-a-spin"},"Taking Snapshot for a Spin"),(0,r.kt)("p",null,"First of all, we're going to need a method to test that outputs a data structure which is more than just a scalar value. Let's use this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class Leopard {\n    public string Name { get; set; }\n    public int Spots { get; set; }\n}\n\npublic class LeopardService {\n    public Leopard[] GetTheLeopards() {\n        return new Leopard[] {\n            new Leopard { Spots = 42, Name = "Nimoy" },\n            new Leopard { Spots = 900, Name = "Dotty" }\n        };\n    }\n}\n')),(0,r.kt)("p",null,"Yes - our trusty ",(0,r.kt)("inlineCode",{parentName:"p"},"LeopardService"),". As you can see, the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetTheLeopards")," method returns an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Leopard"),"s. For now, let's write a test using ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot"),": (ours is an XUnit test; but ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot")," is agnostic of this)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[Fact]\npublic void GetTheLeopards_should_return_expected_Leopards() {\n    // Arrange\n    var leopardService = new LeopardService();\n\n    // Act\n    var leopards = leopardService.GetTheLeopards();\n    \n    // UNCOMMENT THE LINE BELOW *ONLY* WHEN YOU WANT TO GENERATE THE SNAPSHOT\n    Snapshot.Make($"{System.AppDomain.CurrentDomain.BaseDirectory}..\\\\..\\\\..\\\\Snapshots\\\\leopardsSnapshot.json", leopards);\n\n    // Assert\n    var snapshotLeopards = JsonConvert.DeserializeObject<leopard[]>(Snapshot.Load("Snapshots/leopardsSnapshot.json"));\n    snapshotLeopards.Should().BeEquivalentTo(leopards);\n}\n</leopard[]>\n')),(0,r.kt)("p",null,"Before we run this for the first time we need to setup our testing project to be ready for snapshots. First of all we add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot")," folder to the test project. The we also add the following to the ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<ItemGroup>\n    <Content Include="Snapshots\\**">\n      <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n    </Content>\n  </ItemGroup>\n')),(0,r.kt)("p",null,"This includes the snapshots in the compile output for when tests are being run."),(0,r.kt)("p",null,"Now let's run the test. It will generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"leopardsSnapshot.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Nimoy",\n    "spots": 42\n  },\n  {\n    "name": "Dotty",\n    "spots": 900\n  }\n]\n')),(0,r.kt)("p",null,"With our snapshot in place, we comment out the ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot.Make...")," line and we have a passing test. Let's commit our code, push and go about our business."),(0,r.kt)("h2",{id:"time-passes"},"Time Passes..."),(0,r.kt)("p",null,"Someone decides that the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"GetTheLeopards")," needs to change. Defying expectations it seems that Dotty the leopard should now have 90 spots. I know... Business requirements, right?"),(0,r.kt)("p",null,"If we make that change we'd ideally expect our trusty test to fail. Let's see what happens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"----- Test Execution Summary -----\n\nLeopard.Tests.Services.LeopardServiceTests.GetTheLeopards_should_return_expected_Leopards:\n    Outcome: Failed\n    Error Message:\n    Expected item[1].Spots to be 90, but found 900.\n")),(0,r.kt)("p",null,"Boom! We are protected!"),(0,r.kt)("p",null,"Since this is a change we're completely happy with we want to update our ",(0,r.kt)("inlineCode",{parentName:"p"},"leopardsSnapshot.json")," file. We could make our test pass by manually updating the JSON. That'd be fine. But why work when you don't have to? Let's uncomment our ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot.Make...")," line and run the test the once."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Nimoy",\n    "spots": 42\n  },\n  {\n    "name": "Dotty",\n    "spots": 90\n  }\n]\n')),(0,r.kt)("p",null,"That's right, we have an updated snapshot! Minimal effort."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"This is a basic approach to getting the goodness of snapshot testing in C#. It could be refined further. To my mind the uncommenting / commenting of code is not the most elegant way to approach this and so there's some work that could be done around this area."),(0,r.kt)("p",null,"Happy snapshotting!"))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,b=c["".concat(s,".").concat(d)]||c[d]||h[d]||r;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},491:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(8),r=(n(0),n(1166)),s={title:"Snapshot Testing for C#",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["snapshot testing","c#","jest"],hide_table_of_contents:!1},i={permalink:"/2018/11/17/snapshot-testing-for-c",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-11-17-snapshot-testing-for-c.md",source:"@site/blog/2018-11-17-snapshot-testing-for-c.md",description:"If you're a user of Jest, you've no doubt heard of and perhaps made use of snapshot testing.",date:"2018-11-17T00:00:00.000Z",formattedDate:"November 17, 2018",tags:[{label:"snapshot testing",permalink:"/tags/snapshot-testing"},{label:"c#",permalink:"/tags/c"},{label:"jest",permalink:"/tags/jest"}],title:"Snapshot Testing for C#",readingTime:5.685,truncated:!1,prevItem:{title:"Cache Rules Everything Around Me",permalink:"/2018/12/10/cache-rules-everything-around-me"},nextItem:{title:"Making a Programmer",permalink:"/2018/10/27/making-a-programmer"}},p=[{value:"Putting the Snapshot into C#",id:"putting-the-snapshot-into-c",children:[]},{value:"Taking Snapshot for a Spin",id:"taking-snapshot-for-a-spin",children:[]},{value:"Time Passes...",id:"time-passes",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you're a user of Jest, you've no doubt heard of and perhaps made use of ",Object(r.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing"},"snapshot testing"),"."),Object(r.b)("p",null," Snapshot testing is an awesome tool that is generally discussed in the context of JavaScript React UI testing. But snapshot testing has a wider application than that. Essentially it is profoundly useful where you have functions which produce a complex structured output. It could be a React UI, it could be a list of FX prices. The type of data is immaterial; it's the amount of it that's key."),Object(r.b)("p",null,"Typically there's a direct correlation between the size and complexity of the output of a method and the length of the tests that will be written for it. Let's say you're outputting a class that contains 20 properties. Congratulations! You get to write 20 assertions in one form or another for each test case. Or a single assertion whereby you supply the expected output by hand specifying each of the 20 properties. Either way, that's not going to be fun. And just imagine the time it would take to update multiple test cases if you wanted to change the behaviour of the method in question. Ouchy."),Object(r.b)("p",null,"Time is money kid. What you need is snapshot testing. Say goodbye to handcrafted assertions and hello to JSON serialised output checked into source control. Let's unpack that a little bit. The usefulness of snapshot testing that I want in C# is predominantly about removing the need to write and maintain multiple assertions. Instead you write tests that compare the output of a call to your method with JSON serialised output you've generated on a previous occasion."),Object(r.b)("p",null,"This approach takes less time to write, less time to maintain and the solid readability of JSON makes it more likely you'll pick up on bugs. It's so much easier to scan JSON than it is a list of assertions."),Object(r.b)("h2",{id:"putting-the-snapshot-into-c"},"Putting the Snapshot into C#"),Object(r.b)("p",null,"Now if you're writing tests in JavaScript or TypeScript then Jest already has your back with CLI snapshot generation and ",Object(r.b)("inlineCode",{parentName:"p"},"shouldMatchSnapshot"),". However getting to nearly the same place in C# is delightfully easy. What are we going to need?"),Object(r.b)("p",null,"First up, a serializer which can take your big bad data structures and render them as JSON. Also we'll use it to rehydrate our data structure into an object ready for comparison. We're going to use ",Object(r.b)("a",{parentName:"p",href:"https://www.newtonsoft.com/json"},"Json.NET"),"."),Object(r.b)("p",null,"Next up we need a way to compare our outputs with our rehydrated snapshots - we need a C# ",Object(r.b)("inlineCode",{parentName:"p"},"shouldMatchSnapshot"),". There's many choices out there, but for my money ",Object(r.b)("a",{parentName:"p",href:"https://fluentassertions.com"},"Fluent Assertions")," is king of the hill."),Object(r.b)("p",null,"Finally we're going to need Snapshot, a little helper utility I put together:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing Newtonsoft.Json;\nusing Newtonsoft.Json.Serialization;\n\nnamespace Test.Utilities {\n    public static class Snapshot {\n        private static readonly JsonSerializer StubSerializer = new JsonSerializer { \n            ContractResolver = new CamelCasePropertyNamesContractResolver(),\n            NullValueHandling = NullValueHandling.Ignore \n        };\n\n        private static JsonTextWriter MakeJsonTextWriter(TextWriter sw) => new JsonTextWriter(sw) {\n            Formatting = Formatting.Indented,\n            IndentChar = \' \',\n            Indentation = 2\n        };\n\n        /// <summary>\n        /// Make yourself some JSON! Usage looks like this:\n        /// Stubs.Make($"{System.AppDomain.CurrentDomain.BaseDirectory}..\\\\..\\\\..\\\\data.json", myData);\n        /// </summary>\n        public static void Make<T>(string stubPath, T data) {\n            try {\n                if (string.IsNullOrEmpty(stubPath))\n                    throw new ArgumentNullException(nameof(stubPath));\n                if (data == null)\n                    throw new ArgumentNullException(nameof(data));\n\n                using(var sw = new StreamWriter(stubPath))\n                using(var writer = MakeJsonTextWriter(sw)) {\n                    StubSerializer.Serialize(writer, data);\n                }\n            } catch (Exception exc) {\n                throw new Exception($"Failed to make {stubPath}", exc);\n            }\n        }\n\n        public static string Serialize<T>(T data) {\n            using (var sw = new StringWriter())\n            using(var writer = MakeJsonTextWriter(sw)) {\n                StubSerializer.Serialize(writer, data);\n                return sw.ToString();\n            }\n        }\n\n        public static string Load(string filename) {\n            var content = new StreamReader(\n                File.OpenRead(filename)\n            ).ReadToEnd();\n\n            return content;\n        }\n    }\n}\n')),Object(r.b)("p",null,"Let's look at the methods: ",Object(r.b)("inlineCode",{parentName:"p"},"Make")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Load"),". Make is what we're going to use to create our snapshots. Load is what we're going to use to, uh, load our snapshots."),Object(r.b)("p",null,"What does usage look like? Great question. Let's go through the process of writing a C# snapshot test."),Object(r.b)("h2",{id:"taking-snapshot-for-a-spin"},"Taking Snapshot for a Spin"),Object(r.b)("p",null,"First of all, we're going to need a method to test that outputs a data structure which is more than just a scalar value. Let's use this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'public class Leopard {\n    public string Name { get; set; }\n    public int Spots { get; set; }\n}\n\npublic class LeopardService {\n    public Leopard[] GetTheLeopards() {\n        return new Leopard[] {\n            new Leopard { Spots = 42, Name = "Nimoy" },\n            new Leopard { Spots = 900, Name = "Dotty" }\n        };\n    }\n}\n')),Object(r.b)("p",null,"Yes - our trusty ",Object(r.b)("inlineCode",{parentName:"p"},"LeopardService"),". As you can see, the ",Object(r.b)("inlineCode",{parentName:"p"},"GetTheLeopards")," method returns an array of ",Object(r.b)("inlineCode",{parentName:"p"},"Leopard"),"s. For now, let's write a test using ",Object(r.b)("inlineCode",{parentName:"p"},"Snapshot"),": (ours is an XUnit test; but ",Object(r.b)("inlineCode",{parentName:"p"},"Snapshot")," is agnostic of this)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Fact]\npublic void GetTheLeopards_should_return_expected_Leopards() {\n    // Arrange\n    var leopardService = new LeopardService();\n\n    // Act\n    var leopards = leopardService.GetTheLeopards();\n    \n    // UNCOMMENT THE LINE BELOW *ONLY* WHEN YOU WANT TO GENERATE THE SNAPSHOT\n    Snapshot.Make($"{System.AppDomain.CurrentDomain.BaseDirectory}..\\\\..\\\\..\\\\Snapshots\\\\leopardsSnapshot.json", leopards);\n\n    // Assert\n    var snapshotLeopards = JsonConvert.DeserializeObject<leopard[]>(Snapshot.Load("Snapshots/leopardsSnapshot.json"));\n    snapshotLeopards.Should().BeEquivalentTo(leopards);\n}\n</leopard[]>\n')),Object(r.b)("p",null,"Before we run this for the first time we need to setup our testing project to be ready for snapshots. First of all we add a ",Object(r.b)("inlineCode",{parentName:"p"},"Snapshot")," folder to the test project. The we also add the following to the ",Object(r.b)("inlineCode",{parentName:"p"},".csproj"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<ItemGroup>\n    <Content Include="Snapshots\\**">\n      <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n    </Content>\n  </ItemGroup>\n')),Object(r.b)("p",null,"This includes the snapshots in the compile output for when tests are being run."),Object(r.b)("p",null,"Now let's run the test. It will generate a ",Object(r.b)("inlineCode",{parentName:"p"},"leopardsSnapshot.json")," file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Nimoy",\n    "spots": 42\n  },\n  {\n    "name": "Dotty",\n    "spots": 900\n  }\n]\n')),Object(r.b)("p",null,"With our snapshot in place, we comment out the ",Object(r.b)("inlineCode",{parentName:"p"},"Snapshot.Make...")," line and we have a passing test. Let's commit our code, push and go about our business."),Object(r.b)("h2",{id:"time-passes"},"Time Passes..."),Object(r.b)("p",null,"Someone decides that the implementation of ",Object(r.b)("inlineCode",{parentName:"p"},"GetTheLeopards")," needs to change. Defying expectations it seems that Dotty the leopard should now have 90 spots. I know... Business requirements, right?"),Object(r.b)("p",null,"If we make that change we'd ideally expect our trusty test to fail. Let's see what happens:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"----- Test Execution Summary -----\n\nLeopard.Tests.Services.LeopardServiceTests.GetTheLeopards_should_return_expected_Leopards:\n    Outcome: Failed\n    Error Message:\n    Expected item[1].Spots to be 90, but found 900.\n")),Object(r.b)("p",null,"Boom! We are protected!"),Object(r.b)("p",null,"Since this is a change we're completely happy with we want to update our ",Object(r.b)("inlineCode",{parentName:"p"},"leopardsSnapshot.json")," file. We could make our test pass by manually updating the JSON. That'd be fine. But why work when you don't have to? Let's uncomment our ",Object(r.b)("inlineCode",{parentName:"p"},"Snapshot.Make...")," line and run the test the once."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Nimoy",\n    "spots": 42\n  },\n  {\n    "name": "Dotty",\n    "spots": 90\n  }\n]\n')),Object(r.b)("p",null,"That's right, we have an updated snapshot! Minimal effort."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"This is a basic approach to getting the goodness of snapshot testing in C#. It could be refined further. To my mind the uncommenting / commenting of code is not the most elegant way to approach this and so there's some work that could be done around this area."),Object(r.b)("p",null,"Happy snapshotting!"))}u.isMDXComponent=!0}}]);
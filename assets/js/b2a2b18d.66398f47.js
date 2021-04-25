(window.webpackJsonp=window.webpackJsonp||[]).push([[786],{1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(u,s(s({ref:t},c),{},{components:n})):r.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},927:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(4),r=n(10),i=(n(0),n(1219)),o={title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["unit testing","InternalsVisibleTo","MOQ","mocking"],hide_table_of_contents:!1},s={permalink:"/2012/04/16/simple-technique-for-initialising",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-04-16-simple-technique-for-initialising.md",source:"@site/blog/2012-04-16-simple-technique-for-initialising.md",title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",description:"I was recently working with my colleagues on refactoring a legacy application. We didn't have an immense amount of time available for this but the plan was to try and improve what was there as much as possible. In its initial state the application had no unit tests in place at all and so the plan was to refactor the code base in such a way as to make testing it a realistic proposition. To that end the domain layer was being heavily adjusted and the GUI was being migrated from WebForms to MVC 3. The intention was to build up a pretty solid collection of unit tests. However, as we were working on this we realised we had a problem with properties on our models with internal setters...",date:"2012-04-16T00:00:00.000Z",formattedDate:"April 16, 2012",tags:[{label:"unit testing",permalink:"/tags/unit-testing"},{label:"InternalsVisibleTo",permalink:"/tags/internals-visible-to"},{label:"MOQ",permalink:"/tags/moq"},{label:"mocking",permalink:"/tags/mocking"}],readingTime:5.715,truncated:!1,prevItem:{title:"JSHint - Customising your hurt feelings",permalink:"/2012/04/23/jshint-customising-your-hurt-feelings"},nextItem:{title:"Making PDFs from HTML in C# using WKHTMLtoPDF",permalink:"/2012/04/05/making-pdfs-from-html-in-c-using"}},l=[{value:"Background",id:"background",children:[]},{value:"What&#39;s our problem?",id:"whats-our-problem",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I was recently working with my colleagues on refactoring a legacy application. We didn't have an immense amount of time available for this but the plan was to try and improve what was there as much as possible. In its initial state the application had no unit tests in place at all and so the plan was to refactor the code base in such a way as to make testing it a realistic proposition. To that end the ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Domain_layer"},"domain layer")," was being heavily adjusted and the GUI was being migrated from WebForms to MVC 3. The intention was to build up a pretty solid collection of unit tests. However, as we were working on this we realised we had a problem with properties on our models with ",Object(i.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/7c5ka91b(v=vs.80).aspx"},Object(i.b)("inlineCode",{parentName:"a"},"internal"))," setters..."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("p",null,"The entities of the project in question used an approach which would store pertinent bits of ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Database_normalization"},"normalised")," data for read-only purposes in related entities. I've re-read that sentence and realise it's as clear as mud. Here is an example to clarify:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"public class Person\n{\n  public int Id { get; set; }\n  public string FirstName { get; set; }\n  public string LastName { get; set; }\n  public string Address { get; set; }\n  public DateTime DateOfBirth { get; set; }\n  /* Other fascinating properties... */\n}\n\npublic class Order\n{\n  public int Id { get; set; }\n  public string ProductOrdered { get; set; }\n  public string OrderedById { get; set; }\n  public string OrderedByFirstName { get; internal set; }\n  public string OrderedByLastName { get; internal set; }\n}\n")),Object(i.b)("p",null,"In the example above you have 2 types of entity: ",Object(i.b)("inlineCode",{parentName:"p"},"Person")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Order"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"Order")," entity makes use of the the ",Object(i.b)("inlineCode",{parentName:"p"},"Id"),", ",Object(i.b)("inlineCode",{parentName:"p"},"FirstName")," and ",Object(i.b)("inlineCode",{parentName:"p"},"LastName")," properties of the ",Object(i.b)("inlineCode",{parentName:"p"},"Person")," entity in the properties ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedById"),", ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedByFirstName")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedByLastName"),". For persistence (ie saving to the database) purposes the only necessary ",Object(i.b)("inlineCode",{parentName:"p"},"Person")," property is ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedById")," identity. ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedByFirstName")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedByLastName"),' are just "nice to haves" - essentially present to make implementing the GUI more straightforward.'),Object(i.b)("p",null,"To express this behaviour / intention in the object model the setters for ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedByFirstName")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedByLastName")," are marked as ",Object(i.b)("inlineCode",{parentName:"p"},"internal"),'. The implication of this is that properties like this can only be initialised within the current assembly - or any explicitly associated "friend" assemblies. In practice this meant that internally set properties were only populated when an object was read in from the database. It wasn\'t possible to set these properties in other assemblies which meant less code was written (',Object(i.b)("u",null,"a good thing")),Object(i.b)("p",null,") - after all, why set a property when you don't need to?"),Object(i.b)("p",null,"Background explanation over. It may still be a little unclear but I hope you get the gist."),Object(i.b)("h2",{id:"whats-our-problem"},"What's our problem?"),Object(i.b)("p",null,"I was writing unit tests for the controllers in our main web application and was having problems with my arrangements. I was mocking the database calls in my controllers much in the manner that you might expect:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'// Arrange\n  var orderDb = new Mock<IOrderDb>();\n  orderDb\n    .Setup(x => x.GetOrder(It.IsAny<int>()))\n    .Returns(new Order{\n      Id = 123,\n      ProductOrdered = "Packet of coffee",\n      OrderedById = 987456,\n      OrderedByFirstName = "John",\n      OrderedByLastName = "Reilly"\n    });\n}\n')),Object(i.b)("p",null,"All looks fine doesn't it? It's not. Because ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedByFirstName")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OrderedByLastName")," have internal setters we are ",Object(i.b)("u",null,"unable")),Object(i.b)("p",null," to initialise them from within the context of our test project. So what to do?"),Object(i.b)("p",null,"We toyed with 3 approaches and since each has merits I thought it worth going through each of them:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To the MOQumentation Batman!: ",Object(i.b)("a",{parentName:"p",href:"http://code.google.com/p/moq/wiki/QuickStart"},"http://code.google.com/p/moq/wiki/QuickStart"),"! Looking at the MOQ documentation it states the following:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Mocking internal types of another project: add the following assembly attributes (typically to the AssemblyInfo.cs) to the project containing the internal types:")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-cs"},'// This assembly is the default dynamic assembly generated Castle DynamicProxy, \n// used by Moq. Paste in a single line.\n[assembly:InternalsVisibleTo("DynamicProxyGenAssembly2,PublicKey=0024000004800000940000000602000000240000525341310004000001000100c547cac37abd99c8db225ef2f6c8a3602f3b3606cc9891605d02baa56104f4cfc0734aa39b93bf7852f7d9266654753cc297e7d2edfe0bac1cdcf9f717241550e0a7b191195b7667bb4f64bcb8e2121380fd1d9d46ad2d92d2d15605093924cceaf74c4861eff62abf69b9291ed0a340e113be11e6a7d3113e92484cf7045cc7")]\n[assembly: InternalsVisibleTo("The.NameSpace.Of.Your.Unit.Test")] //I\'d hope it was shorter than that...\n')),Object(i.b)("p",{parentName:"li"},"This looked to be exactly what we needed and in most situations it would make sense to go with this. Unfortunately for us there was a gotcha. Certain core shared parts of our application platform were ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Global_Assembly_Cache"},"GAC"),"'d. A requirement for GAC-ing an assembly is that it is ",Object(i.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/xc31ft41.aspx"},"signed"),"."),Object(i.b)("p",{parentName:"li"},"The upshot of this was that if we wanted to use the ",Object(i.b)("inlineCode",{parentName:"p"},"InternalsVisibleTo")," approach then we would need to sign our web application test project. We weren't particularly averse to that and initially did so without much thought. It was then we remembered that every assembly referenced by a signed assembly must also be signed as well. We didn't really want to sign our main web application purely for testing purposes. We could and if there weren't viable alternatives we well might have. But it just seemed like the wrong reason to be taking that decision. Like using a sledgehammer to crack a nut.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The next approach we took was using mock objects. Instead of using our objects straight we would mock them as below:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-cs"},'//Create mock and set internal properties\n      var orderMock = new Mock<Order>();\n      orderMock.SetupGet(x => x.OrderedByFirstName).Returns("John");\n      orderMock.SetupGet(x => x.OrderedByLastName).Returns("Reilly");\n\n      //Set up standard properties\n      orderMock.SetupAllProperties();\n      var orderStub = orderMock.Object;\n      orderStub.Id = 123;\n      orderStub.ProductOrdered = "Packet of coffee";\n      orderStub.OrderedById = 987456;\n')),Object(i.b)("p",{parentName:"li"},"Now this approach worked fine but had a couple of snags:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"As you can see it's pretty verbose and much less clear to read than it was previously.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It required that we add the ",Object(i.b)("inlineCode",{parentName:"p"},"virtual")," keyword to all our internally set properties like so: "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-cs"},"public class Order\n{\n  // ....\n  public virtual string OrderedByFirstName { get; internal set; }\n  public virtual string OrderedByLastName { get; internal set; }\n  // ...\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Our standard constructor already initialised the value of our internally set properties. So adding ",Object(i.b)("inlineCode",{parentName:"p"},"virtual")," to the internally set properties generated ",Object(i.b)("a",{parentName:"p",href:"http://www.jetbrains.com/resharper/"},"ReSharper")," warnings aplenty about virtual properties being initialised in the constructor. Fair enough."))),Object(i.b)("p",{parentName:"li"},"Because of the snags it still felt like we were in nutcracking territory...")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"... and this took us to the approach that we ended up adopting: a special mocking constructor for each class we wanted to test, for example: ```cs\n/// ",Object(i.b)("summary",null,"\n/// Mocking constructor used to initialise internal properties\n/// "),"\npublic Order(string orderedByFirstName = null, string orderedByLastName = null)\n: this()\n{\nOrderedByFirstName = orderedByFirstName;\nOrderedByLastName = orderedByLastName;\n}"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'\nThanks to the ever lovely [Named and Optional Arguments](<http://msdn.microsoft.com/en-us/library/dd264739.aspx>) feature of C# combined with [Object Initializers](<http://msdn.microsoft.com/en-us/library/bb397680.aspx>) it meant it was possible to write quite expressive, succinct code using this approach; for example:\n\n```cs\nvar order = new Order(\n        orderedByFirstName: "John",\n        orderedByLastName: "Reilly"\n      )\n      {\n        Id = 123,\n        ProductOrdered = "Packet of coffee",\n        OrderedById = 987456\n      };\n')),Object(i.b)("p",{parentName:"li"},"Here we're calling the mocking constructor to set the internally set properties and subsequently initialising the other properties using the object initialiser mechanism."),Object(i.b)("p",{parentName:"li"},"Implementing these custom constructors wasn't a massive piece of work and so we ended up settling on this technique for initialising internal properties."))))}p.isMDXComponent=!0}}]);
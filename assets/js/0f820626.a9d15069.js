(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[27699],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81889:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["unit testing","InternalsVisibleTo","MOQ","mocking"],hide_table_of_contents:!1},s={permalink:"/2012/04/16/simple-technique-for-initialising",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-04-16-simple-technique-for-initialising.md",source:"@site/blog/2012-04-16-simple-technique-for-initialising.md",title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",description:"I was recently working with my colleagues on refactoring a legacy application. We didn't have an immense amount of time available for this but the plan was to try and improve what was there as much as possible. In its initial state the application had no unit tests in place at all and so the plan was to refactor the code base in such a way as to make testing it a realistic proposition. To that end the domain layer was being heavily adjusted and the GUI was being migrated from WebForms to MVC 3. The intention was to build up a pretty solid collection of unit tests. However, as we were working on this we realised we had a problem with properties on our models with internal.aspx) setters...",date:"2012-04-16T00:00:00.000Z",formattedDate:"April 16, 2012",tags:[{label:"unit testing",permalink:"/tags/unit-testing"},{label:"InternalsVisibleTo",permalink:"/tags/internals-visible-to"},{label:"MOQ",permalink:"/tags/moq"},{label:"mocking",permalink:"/tags/mocking"}],readingTime:5.695,truncated:!1,prevItem:{title:"JSHint - Customising your hurt feelings",permalink:"/2012/04/23/jshint-customising-your-hurt-feelings"},nextItem:{title:"Making PDFs from HTML in C# using WKHTMLtoPDF",permalink:"/2012/04/05/making-pdfs-from-html-in-c-using"}},l=[{value:"Background",id:"background",children:[]},{value:"What&#39;s our problem?",id:"whats-our-problem",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I was recently working with my colleagues on refactoring a legacy application. We didn't have an immense amount of time available for this but the plan was to try and improve what was there as much as possible. In its initial state the application had no unit tests in place at all and so the plan was to refactor the code base in such a way as to make testing it a realistic proposition. To that end the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Domain_layer"},"domain layer")," was being heavily adjusted and the GUI was being migrated from WebForms to MVC 3. The intention was to build up a pretty solid collection of unit tests. However, as we were working on this we realised we had a problem with properties on our models with ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/7c5ka91b(v=vs.80).aspx"},(0,i.kt)("inlineCode",{parentName:"a"},"internal"))," setters..."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"The entities of the project in question used an approach which would store pertinent bits of ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Database_normalization"},"normalised")," data for read-only purposes in related entities. I've re-read that sentence and realise it's as clear as mud. Here is an example to clarify:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public class Person\n{\n  public int Id { get; set; }\n  public string FirstName { get; set; }\n  public string LastName { get; set; }\n  public string Address { get; set; }\n  public DateTime DateOfBirth { get; set; }\n  /* Other fascinating properties... */\n}\n\npublic class Order\n{\n  public int Id { get; set; }\n  public string ProductOrdered { get; set; }\n  public string OrderedById { get; set; }\n  public string OrderedByFirstName { get; internal set; }\n  public string OrderedByLastName { get; internal set; }\n}\n")),(0,i.kt)("p",null,"In the example above you have 2 types of entity: ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Order"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Order")," entity makes use of the the ",(0,i.kt)("inlineCode",{parentName:"p"},"Id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FirstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LastName")," properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," entity in the properties ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedById"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedByFirstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedByLastName"),". For persistence (ie saving to the database) purposes the only necessary ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," property is ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedById")," identity. ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedByFirstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedByLastName"),' are just "nice to haves" - essentially present to make implementing the GUI more straightforward.'),(0,i.kt)("p",null,"To express this behaviour / intention in the object model the setters for ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedByFirstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedByLastName")," are marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"internal"),'. The implication of this is that properties like this can only be initialised within the current assembly - or any explicitly associated "friend" assemblies. In practice this meant that internally set properties were only populated when an object was read in from the database. It wasn\'t possible to set these properties in other assemblies which meant less code was written (',(0,i.kt)("u",null,"a good thing")),(0,i.kt)("p",null,") - after all, why set a property when you don't need to?"),(0,i.kt)("p",null,"Background explanation over. It may still be a little unclear but I hope you get the gist."),(0,i.kt)("h2",{id:"whats-our-problem"},"What's our problem?"),(0,i.kt)("p",null,"I was writing unit tests for the controllers in our main web application and was having problems with my arrangements. I was mocking the database calls in my controllers much in the manner that you might expect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Arrange\n  var orderDb = new Mock<IOrderDb>();\n  orderDb\n    .Setup(x => x.GetOrder(It.IsAny<int>()))\n    .Returns(new Order{\n      Id = 123,\n      ProductOrdered = "Packet of coffee",\n      OrderedById = 987456,\n      OrderedByFirstName = "John",\n      OrderedByLastName = "Reilly"\n    });\n}\n')),(0,i.kt)("p",null,"All looks fine doesn't it? It's not. Because ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedByFirstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedByLastName")," have internal setters we are ",(0,i.kt)("u",null,"unable")),(0,i.kt)("p",null," to initialise them from within the context of our test project. So what to do?"),(0,i.kt)("p",null,"We toyed with 3 approaches and since each has merits I thought it worth going through each of them:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To the MOQumentation Batman!: ",(0,i.kt)("a",{parentName:"p",href:"http://code.google.com/p/moq/wiki/QuickStart"},"http://code.google.com/p/moq/wiki/QuickStart"),"! Looking at the MOQ documentation it states the following:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Mocking internal types of another project: add the following assembly attributes (typically to the AssemblyInfo.cs) to the project containing the internal types:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// This assembly is the default dynamic assembly generated Castle DynamicProxy, \n// used by Moq. Paste in a single line.\n[assembly:InternalsVisibleTo("DynamicProxyGenAssembly2,PublicKey=0024000004800000940000000602000000240000525341310004000001000100c547cac37abd99c8db225ef2f6c8a3602f3b3606cc9891605d02baa56104f4cfc0734aa39b93bf7852f7d9266654753cc297e7d2edfe0bac1cdcf9f717241550e0a7b191195b7667bb4f64bcb8e2121380fd1d9d46ad2d92d2d15605093924cceaf74c4861eff62abf69b9291ed0a340e113be11e6a7d3113e92484cf7045cc7")]\n[assembly: InternalsVisibleTo("The.NameSpace.Of.Your.Unit.Test")] //I\'d hope it was shorter than that...\n')),(0,i.kt)("p",{parentName:"li"},"This looked to be exactly what we needed and in most situations it would make sense to go with this. Unfortunately for us there was a gotcha. Certain core shared parts of our application platform were ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Global_Assembly_Cache"},"GAC"),"'d. A requirement for GAC-ing an assembly is that it is ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/xc31ft41.aspx"},"signed"),"."),(0,i.kt)("p",{parentName:"li"},"The upshot of this was that if we wanted to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"InternalsVisibleTo")," approach then we would need to sign our web application test project. We weren't particularly averse to that and initially did so without much thought. It was then we remembered that every assembly referenced by a signed assembly must also be signed as well. We didn't really want to sign our main web application purely for testing purposes. We could and if there weren't viable alternatives we well might have. But it just seemed like the wrong reason to be taking that decision. Like using a sledgehammer to crack a nut.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The next approach we took was using mock objects. Instead of using our objects straight we would mock them as below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'//Create mock and set internal properties\n      var orderMock = new Mock<Order>();\n      orderMock.SetupGet(x => x.OrderedByFirstName).Returns("John");\n      orderMock.SetupGet(x => x.OrderedByLastName).Returns("Reilly");\n\n      //Set up standard properties\n      orderMock.SetupAllProperties();\n      var orderStub = orderMock.Object;\n      orderStub.Id = 123;\n      orderStub.ProductOrdered = "Packet of coffee";\n      orderStub.OrderedById = 987456;\n')),(0,i.kt)("p",{parentName:"li"},"Now this approach worked fine but had a couple of snags:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As you can see it's pretty verbose and much less clear to read than it was previously.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It required that we add the ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual")," keyword to all our internally set properties like so: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public class Order\n{\n  // ....\n  public virtual string OrderedByFirstName { get; internal set; }\n  public virtual string OrderedByLastName { get; internal set; }\n  // ...\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Our standard constructor already initialised the value of our internally set properties. So adding ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual")," to the internally set properties generated ",(0,i.kt)("a",{parentName:"p",href:"http://www.jetbrains.com/resharper/"},"ReSharper")," warnings aplenty about virtual properties being initialised in the constructor. Fair enough."))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Because of the snags it still felt like we were in nutcracking territory...\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"... and this took us to the approach that we ended up adopting: a special mocking constructor for each class we wanted to test, for example: ```cs\n/// ",(0,i.kt)("summary",null,"\n/// Mocking constructor used to initialise internal properties\n/// "),"\npublic Order(string orderedByFirstName = null, string orderedByLastName = null)\n: this()\n{\nOrderedByFirstName = orderedByFirstName;\nOrderedByLastName = orderedByLastName;\n}"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'\nThanks to the ever lovely [Named and Optional Arguments](http://msdn.microsoft.com/en-us/library/dd264739.aspx) feature of C# combined with [Object Initializers](http://msdn.microsoft.com/en-us/library/bb397680.aspx) it meant it was possible to write quite expressive, succinct code using this approach; for example:\n\n```cs\nvar order = new Order(\n        orderedByFirstName: "John",\n        orderedByLastName: "Reilly"\n      )\n      {\n        Id = 123,\n        ProductOrdered = "Packet of coffee",\n        OrderedById = 987456\n      };\n')),(0,i.kt)("p",{parentName:"li"},"Here we're calling the mocking constructor to set the internally set properties and subsequently initialising the other properties using the object initialiser mechanism."),(0,i.kt)("p",{parentName:"li"},"Implementing these custom constructors wasn't a massive piece of work and so we ended up settling on this technique for initialising internal properties."))))}d.isMDXComponent=!0}}]);
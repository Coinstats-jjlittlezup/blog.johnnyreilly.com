(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1189:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,m=p["".concat(s,".").concat(g)]||p[g]||b[g]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},425:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(4),r=n(10),i=(n(0),n(1189)),s={title:"He tasks me; he heaps me.... I will wreak that MOQ upon him.",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["unit testing","async","MOQ","metaphysics"],hide_table_of_contents:!1},o={permalink:"/2014/10/03/he-tasks-me-he-heaps-me-i-will-wreak",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-10-03-he-tasks-me-he-heaps-me-i-will-wreak.md",source:"@site/blog/2014-10-03-he-tasks-me-he-heaps-me-i-will-wreak.md",description:"Enough with the horrific misquotes - this is about Moq and async (that's my slight justification for robbing Herman Melville).",date:"2014-10-03T00:00:00.000Z",formattedDate:"October 3, 2014",tags:[{label:"unit testing",permalink:"/tags/unit-testing"},{label:"async",permalink:"/tags/async"},{label:"MOQ",permalink:"/tags/moq"},{label:"metaphysics",permalink:"/tags/metaphysics"}],title:"He tasks me; he heaps me.... I will wreak that MOQ upon him.",readingTime:3.04,truncated:!1,prevItem:{title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",permalink:"/2014/10/06/caching-and-cache-busting-in-angularjs-with-http-interceptors"},nextItem:{title:"Journalling the Migration of Jasmine Tests to TypeScript",permalink:"/2014/09/13/migrating-jasmine-tests-to-typescript"}},l=[{value:"But wait.... What if there&#39;s like... Nothing?",id:"but-wait-what-if-theres-like-nothing",children:[]},{value:"Here&#39;s one I made earlier...",id:"heres-one-i-made-earlier",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Enough with the horrific misquotes - this is about Moq and async (that's my slight justification for robbing Herman Melville)."),Object(i.b)("p",null," It's pretty straightforward to use Moq to do async testing thanks to it's marvellous ",Object(i.b)("inlineCode",{parentName:"p"},"ReturnsAsync")," method. That means it's really easy to test a class that consumes an async API. Below is an example of a class that does just that: (it so happens that this class is a Web API controller but that's pretty irrelevant to be honest)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"namespace Proverb.Web.Controllers\n{\n    // ISageService included inline for ease of explanation\n    public interface ISageService\n    {\n        Task<int> DeleteAsync(int id);\n    }\n\n    public class SageController : ApiController\n    {\n        ISageService _sageService;\n\n        public SageController(ISageService userService) \n        {\n            _sageService = userService;\n        }\n\n        public async Task<IHttpActionResult> Delete(int id)\n        {\n            int deleteCount = await _sageService.DeleteAsync(id);\n\n            if (deleteCount == 0)\n                return NotFound();\n            else\n                return Ok();\n        }\n   }\n}\n")),Object(i.b)("p",null,"To mock the ",Object(i.b)("inlineCode",{parentName:"p"},"_sageService.DeleteAsync")," method it's as easy as this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"namespace Proverb.Web.Tests.ASPNet.Controllers\n{\n    [TestClass]\n    public class SageControllerTests\n    {\n        private Mock<ISageService> _sageServiceMock;\n        private SageController _controller;\n\n        [TestInitialize]\n        public void Initialise()\n        {\n            _sageServiceMock = new Mock<ISageService>();\n\n            _controller = new SageController(_sageServiceMock.Object);\n        }\n\n        [TestMethod]\n        public async Task Delete_returns_a_NotFound()\n        {\n            _sageServiceMock\n                .Setup(x => x.DeleteAsync(_sage.Id))\n                .ReturnsAsync(0); // This makes me *so* happy...\n\n            IHttpActionResult result = await _controller.Delete(_sage.Id);\n\n            var notFound = result as NotFoundResult;\n            Assert.IsNotNull(notFound);\n            _sageServiceMock.Verify(x => x.DeleteAsync(_sage.Id));\n        }\n\n        [TestMethod]\n        public async Task Delete_returns_an_Ok()\n        {\n            _sageServiceMock\n                .Setup(x => x.DeleteAsync(_sage.Id))\n                .ReturnsAsync(1); // I'm still excited now!\n\n            IHttpActionResult result = await _controller.Delete(_sage.Id);\n\n            var ok = result as OkResult;\n            Assert.IsNotNull(ok);\n            _sageServiceMock.Verify(x => x.DeleteAsync(_sage.Id));\n        }\n    }\n}\n")),Object(i.b)("h2",{id:"but-wait-what-if-theres-like-nothing"},"But wait.... What if there's like... Nothing?"),Object(i.b)("p",null,"Nope, I'm not getting into metaphysics. Something more simple. What if the ",Object(i.b)("inlineCode",{parentName:"p"},"async")," API you're consuming returns just a ",Object(i.b)("inlineCode",{parentName:"p"},"Task"),"? Not a ",Object(i.b)("inlineCode",{parentName:"p"},"Task")," of ",Object(i.b)("inlineCode",{parentName:"p"},"int")," but a simple old humble ",Object(i.b)("inlineCode",{parentName:"p"},"Task"),"."),Object(i.b)("p",null,"So to take our example we're going from this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"public interface ISageService\n    {\n        Task<int> DeleteAsync(int id);\n    }\n")),Object(i.b)("p",null,"To this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"public interface ISageService\n    {\n        Task DeleteAsync(int id);\n    }\n")),Object(i.b)("p",null,"Your initial thought might be \"well that's okay, I'll just lop off the ",Object(i.b)("inlineCode",{parentName:"p"},"ReturnsAsync")," statements and I'm home free\". That's what I thought anyway.... And I was ","*",Object(i.b)("strong",{parentName:"p"},"WRONG"),"*","! A moments thought and you realise that there's still a return type - it's just ",Object(i.b)("inlineCode",{parentName:"p"},"Task")," now. What you want to do is something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"_sageServiceMock\n                .Setup(x => x.DeleteAsync(_sage.Id))\n                .ReturnsAsync(void); // This'll definitely work... Probably\n")),Object(i.b)("p",null,"No it won't - ",Object(i.b)("inlineCode",{parentName:"p"},"void")," is not a real type and much as you might like it to, this is not going to work."),Object(i.b)("p",null,"So right now you're thinking, well Moq probably has my back - it'll have something like ",Object(i.b)("inlineCode",{parentName:"p"},"ReturnsTask"),", right? Wrong! It's intentional it turns out - there's a discussion on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Moq/moq4/issues/117"},"GitHub about the issue"),". And in that discussion there's just what we need. We can use ",Object(i.b)("inlineCode",{parentName:"p"},"Task.Delay")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Task.FromResult")," alongside Moq's good old ",Object(i.b)("inlineCode",{parentName:"p"},"Returns")," method and we're home free!"),Object(i.b)("h2",{id:"heres-one-i-made-earlier"},"Here's one I made earlier..."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"namespace Proverb.Web.Controllers\n{\n    // ISageService again included inline for ease of explanation\n    public interface ISageService\n    {\n        Task DeleteAsync(int id);\n    }\n\n    public class SageController : ApiController\n    {\n        ISageService _sageService;\n\n        public SageController(ISageService userService) \n        {\n            _sageService = userService;\n        }\n\n        public async Task<IHttpActionResult> Delete(int id)\n        {\n            await _sageService.DeleteAsync(id);\n\n            return Ok();\n        }\n   }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"namespace Proverb.Web.Tests.ASPNet.Controllers\n{\n    [TestClass]\n    public class SageControllerTests\n    {\n        private Mock<ISageService> _sageServiceMock;\n        private SageController _controller;\n\n        readonly Task TaskOfNowt = Task.Delay(0);\n        // Or you could use this equally valid but slightly more verbose approach:\n        //readonly Task TaskOfNowt = Task.FromResult<object>(null);\n\n        [TestInitialize]\n        public void Initialise()\n        {\n            _sageServiceMock = new Mock<ISageService>();\n\n            _controller = new SageController(_sageServiceMock.Object);\n        }\n\n        [TestMethod]\n        public async Task Delete_returns_an_Ok()\n        {\n            _sageServiceMock\n                .Setup(x => x.DeleteAsync(_sage.Id))\n                .Returns(TaskOfNowt); // Feels good doesn't it?\n\n            IHttpActionResult result = await _controller.Delete(_sage.Id);\n\n            var ok = result as OkResult;\n            Assert.IsNotNull(ok);\n            _sageServiceMock.Verify(x => x.DeleteAsync(_sage.Id));\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);
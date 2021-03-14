(window.webpackJsonp=window.webpackJsonp||[]).push([[1050],{1125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(8),o=(n(0),n(1161)),r={title:"Tonight I'll Start an Open Source Project...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["asp.net mvc","validation","AngularJS"],hide_table_of_contents:!1},l={permalink:"/2015/04/24/tonight-ill-start-open-source-project",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-04-24-tonight-ill-start-open-source-project.md",source:"@site/blog/2015-04-24-tonight-ill-start-open-source-project.md",description:"Further posts on this topic",date:"2015-04-24T00:00:00.000Z",formattedDate:"April 24, 2015",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"validation",permalink:"/tags/validation"},{label:"AngularJS",permalink:"/tags/angular-js"}],title:"Tonight I'll Start an Open Source Project...",readingTime:5.06,truncated:!1,prevItem:{title:"A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API",permalink:"/2015/05/05/a-tale-of-angular-html5mode-aspnet-mvc"},nextItem:{title:"How to activate your emoji keyboard on Android 5.0 (Lollipop)",permalink:"/2015/04/17/how-to-activate-your-emoji-keyboard-on"}},s=[{value:"Further posts on this topic",id:"further-posts-on-this-topic",children:[]},{value:"The Idea",id:"the-idea",children:[]},{value:"The Aim",id:"the-aim",children:[]},{value:"The Approach",id:"the-approach",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"further-posts-on-this-topic"},"Further posts on this topic"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://blog.johnnyreilly.com/2015/05/ngvalidationfor-baby-steps.html"},"NgValidationFor Baby Steps"))),Object(o.b)("p",null,"I'm excited. Are you? I'm babysitting for a friend, I've my laptop, time to kill and (crucially) an idea..."),Object(o.b)("h2",{id:"the-idea"},"The Idea"),Object(o.b)("p",null,"You're likely aware of the various form element directives that AngularJS offers. For instance the ",Object(o.b)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/directive/input"},"input directive"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"HTML input element control. When used together with ngModel, it provides data-binding, input state control, and ",Object(o.b)("em",{parentName:"p"},"validation"),".")),Object(o.b)("p",null,"You'll notice that I emphasised the word \"validation\" there. That's important - that's my idea. I'm using AngularJS to build SPA's and for the server side I'm using ASP.Net MVC / Web API. Crucially, my templates are actually ASP.Net MVC Partial Views. That's key."),Object(o.b)("p",null,"When I send data back from my SPA back to the server it gets unmarshalled / deserialized into a C# class (view model) of some kind. When data goes the other way it's flowing back from a JSON'd view model and being used by my Angular code."),Object(o.b)("p",null,"Now historically if I was building a fairly vanilla MVC app then I'd be making use of all the ",Object(o.b)("inlineCode",{parentName:"p"},"TextboxFor")," extension methods etc to generate my input elements. For example, with a view model like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"using System.ComponentModel.DataAnnotations;\n\nnamespace App.ViewModels\n{\n public class RequiredModel\n {\n  [Required]\n  public string RequiredField{ get; set; }\n }\n}\n")),Object(o.b)("p",null,"I'd have a view like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'@model App.ViewModels.RequiredModel\n@using (Html.BeginForm())\n{\n <div class="row">\n  @Html.LabelFor(x => x.TextBox, "Something must be entered:")\n  @Html.TextBoxFor(x => x.TextBox, true)\n </div>\n}\n')),Object(o.b)("p",null,"And that would generate HTML like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<form action="/Demo/Required" method="post">\n <div class="row">\n  <label for="TextBox">Something must be entered:</label>\n  <input data-msg-required="The TextBox field is required." \n      data-rule-required="true" \n      id="TextBox" name="TextBox" type="text" value="" />\n </div>\n</form>\n')),Object(o.b)("p",null,"If you look at the HTML you'll see that the ",Object(o.b)("inlineCode",{parentName:"p"},"Required")," data annotations have been propogated into the HTML in the HTML in the form of ",Object(o.b)("inlineCode",{parentName:"p"},"data-rule-*")," and ",Object(o.b)("inlineCode",{parentName:"p"},"data-msg-*")," attributes. The code above is built using my ",Object(o.b)("a",{parentName:"p",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/"},"jQuery.Validation.Unobtrusive.Native project")," which in turn was inspired by / based upon the ",Object(o.b)("a",{parentName:"p",href:"http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html"},"Unobtrusive Client Validation in ASP.NET MVC"),". That's right - I've done this before - or at least something quite like it."),Object(o.b)("p",null,"There's clearly a strong crossover between AngularJS's input directive parameters and unobtrusive client validation. I'm planning to take the principles (and maybe some of the code) that I used on that project and see if I can't make something useful with it here. ",Object(o.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2014/08/angularjs-meet-aspnet-server-validation.html"},"Server side validation is jolly important")," but I can probably save a few compute cycles on the server by making use of client side validation as well. If I'm right then I should able to come up with a mechanism that saves me from manually duplicating my server validation on the client."),Object(o.b)("h2",{id:"the-aim"},"The Aim"),Object(o.b)("p",null,"I want to be able to use HTML Helpers to propogate validation metadata from the server view models into angular form validation directive attributes. Quite a mouthful I know. What does that actually mean? Well I've got 2 ideas. Possibly I want to be able to code something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'@model App.ViewModels.RequiredModel\n@using (Html.BeginForm())\n{\n <div class="row">\n  @Html.LabelFor(x => x.TextBox, "Something must be entered:")\n  @Html.NgTextBoxFor(x => x.TextBox)\n </div>\n}\n')),Object(o.b)("p",null,"And have HTML like this generated:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<form action="/Demo/Required" method="post">\n <div class="row">\n  <label for="TextBox">Something must be entered:</label>\n  <input\n      ng-required="true" \n      id="TextBox" name="TextBox" type="text" value="" />\n </div>\n</form>\n')),Object(o.b)("p",null,"The reservation I have about this approach is that it rather takes you away from the HTML. Yes it works (and to your seasoned MVC-er it will feel quite natural in some ways) but it feels rather heavy handed. But I'd like what I'm building to be easy for users to plug into existing code without a ton of rework. So, the other idea I'm toying with is having HTML helpers that just return a string of attributes. So if I had an angular form that looked like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div ng-controller="ExampleController">\n<form>\n <div class="row">\n  <label>Something must be entered: \n    <input name="RequiredField" type="text" value="" />\n  </label>\n </div>\n</form>\n')),Object(o.b)("p",null,"I could tweak it to push in the validation directive attributes like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'@model App.ViewModels.RequiredModel\n<div ng-controller="ExampleController">\n<form>\n <div class="row">\n  <label>Something must be entered: \n    <input name="RequiredField" type="text" value="" @Html.NgValidationFor(x => x.RequiredField) />\n  </label>\n </div>\n</form>\n')),Object(o.b)("p",null,"And end up with HTML like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div ng-controller="ExampleController">\n<form>\n <div class="row">\n  <label>Something must be entered: \n    <input name="RequiredField" type="text" value="" ng-required="true" />\n  </label>\n </div>\n</form>\n')),Object(o.b)("p",null,"This is a simplified example of course - it's likely that any number of validation directive attributes might be returned from ",Object(o.b)("inlineCode",{parentName:"p"},"NgValidationFor"),". And crucially if these attributes were changed on the server view model then the validation changes would automatically end up in the client HTML with this approach."),Object(o.b)("h2",{id:"the-approach"},"The Approach"),Object(o.b)("p",null,"At least to start off with I'm going to aim at creating the second of my approaches. I may come back and implement the first at some point but I think the second is a better place to start."),Object(o.b)("p",null,"I'm kind of surprised no-one else has built this already actually - but I'm not aware of anything. I've had a little duckduckgo around and found no takers. The closest I've come is the excellent ",Object(o.b)("a",{parentName:"p",href:"http://www.breezejs.com/sites/all/apidocs/classes/Validator.html"},"BreezeJS"),". BreezeJS does way more than I want it to - I'm planning to restrict the scope of this project to simply turning data annotations on my ASP.Net MVC server models into ",Object(o.b)("inlineCode",{parentName:"p"},"ng-*")," directive attributes in HTML. That's it."),Object(o.b)("p",null,"So, general housekeeping.... I'm going to host this project on ",Object(o.b)("a",{parentName:"p",href:"http://www.github.com"},"GitHub"),", I'm going to have Continuous Integration with ",Object(o.b)("a",{parentName:"p",href:"http://www.appveyor.com/"},"AppVeyor")," and I'm planning to publish this via ",Object(o.b)("a",{parentName:"p",href:"http://www.nuget.org/"},"NuGet")," (when and if I've created something useful)."),Object(o.b)("p",null,"I just need a name and I'll begin. What shall I call it? Some options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Angular ASP.Net MVC Extensions"),Object(o.b)("li",{parentName:"ul"},"angular-aspnet-mvc-extensions"),Object(o.b)("li",{parentName:"ul"},"Angular MVC Element Extensions"),Object(o.b)("li",{parentName:"ul"},"Angular Validation Html Helpers"),Object(o.b)("li",{parentName:"ul"},"NgValidationFor (the name of the HTML helper I made up)")),Object(o.b)("p",null,"Hmmmm.... None of them is particularly lighting my fire. The first four are all a bit ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ronseal"},"RonSeal")," ","-"," which is fine.... Ug. The last one... It's a bit more pithy. Okay - I'll go with \"NgValidationFor\" at least for now. If something better occurs I can always change my mind."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/NgValidationFor"},"And we're off!")))}u.isMDXComponent=!0},1161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return n?i.a.createElement(b,l(l({ref:t},c),{},{components:n})):i.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
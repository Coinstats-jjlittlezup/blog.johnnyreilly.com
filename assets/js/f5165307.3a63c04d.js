(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[87366],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(c,r(r({ref:t},p),{},{components:n})):a.createElement(c,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26146:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r=["components"],l={title:"Tonight I'll Start an Open Source Project...",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["asp.net mvc","validation","AngularJS"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2015/04/24/tonight-ill-start-open-source-project",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-04-24-tonight-ill-start-open-source-project.md",source:"@site/blog/2015-04-24-tonight-ill-start-open-source-project.md",title:"Tonight I'll Start an Open Source Project...",description:"Further posts on this topic",date:"2015-04-24T00:00:00.000Z",formattedDate:"April 24, 2015",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"validation",permalink:"/tags/validation"},{label:"AngularJS",permalink:"/tags/angular-js"}],readingTime:5.04,truncated:!1,prevItem:{title:"A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API",permalink:"/2015/05/05/a-tale-of-angular-html5mode-aspnet-mvc"},nextItem:{title:"How to activate your emoji keyboard on Android 5.0 (Lollipop)",permalink:"/2015/04/17/how-to-activate-your-emoji-keyboard-on"}},p=[{value:"Further posts on this topic",id:"further-posts-on-this-topic",children:[]},{value:"The Idea",id:"the-idea",children:[]},{value:"The Aim",id:"the-aim",children:[]},{value:"The Approach",id:"the-approach",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"further-posts-on-this-topic"},"Further posts on this topic"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.johnnyreilly.com/2015/05/ngvalidationfor-baby-steps.html"},"NgValidationFor Baby Steps"))),(0,o.kt)("p",null,"I'm excited. Are you? I'm babysitting for a friend, I've my laptop, time to kill and (crucially) an idea..."),(0,o.kt)("h2",{id:"the-idea"},"The Idea"),(0,o.kt)("p",null,"You're likely aware of the various form element directives that AngularJS offers. For instance the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/directive/input"},"input directive"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HTML input element control. When used together with ngModel, it provides data-binding, input state control, and ",(0,o.kt)("em",{parentName:"p"},"validation"),".")),(0,o.kt)("p",null,"You'll notice that I emphasised the word \"validation\" there. That's important - that's my idea. I'm using AngularJS to build SPA's and for the server side I'm using ASP.Net MVC / Web API. Crucially, my templates are actually ASP.Net MVC Partial Views. That's key."),(0,o.kt)("p",null,"When I send data back from my SPA back to the server it gets unmarshalled / deserialized into a C# class (view model) of some kind. When data goes the other way it's flowing back from a JSON'd view model and being used by my Angular code."),(0,o.kt)("p",null,"Now historically if I was building a fairly vanilla MVC app then I'd be making use of all the ",(0,o.kt)("inlineCode",{parentName:"p"},"TextboxFor")," extension methods etc to generate my input elements. For example, with a view model like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using System.ComponentModel.DataAnnotations;\n\nnamespace App.ViewModels\n{\n public class RequiredModel\n {\n  [Required]\n  public string RequiredField{ get; set; }\n }\n}\n")),(0,o.kt)("p",null,"I'd have a view like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@model App.ViewModels.RequiredModel\n@using (Html.BeginForm())\n{\n <div class="row">\n  @Html.LabelFor(x => x.TextBox, "Something must be entered:")\n  @Html.TextBoxFor(x => x.TextBox, true)\n </div>\n}\n')),(0,o.kt)("p",null,"And that would generate HTML like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/Demo/Required" method="post">\n <div class="row">\n  <label for="TextBox">Something must be entered:</label>\n  <input data-msg-required="The TextBox field is required." \n      data-rule-required="true" \n      id="TextBox" name="TextBox" type="text" value="" />\n </div>\n</form>\n')),(0,o.kt)("p",null,"If you look at the HTML you'll see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Required")," data annotations have been propogated into the HTML in the HTML in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"data-rule-*")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data-msg-*")," attributes. The code above is built using my ",(0,o.kt)("a",{parentName:"p",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/"},"jQuery.Validation.Unobtrusive.Native project")," which in turn was inspired by / based upon the ",(0,o.kt)("a",{parentName:"p",href:"http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html"},"Unobtrusive Client Validation in ASP.NET MVC"),". That's right - I've done this before - or at least something quite like it."),(0,o.kt)("p",null,"There's clearly a strong crossover between AngularJS's input directive parameters and unobtrusive client validation. I'm planning to take the principles (and maybe some of the code) that I used on that project and see if I can't make something useful with it here. ",(0,o.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2014/08/angularjs-meet-aspnet-server-validation.html"},"Server side validation is jolly important")," but I can probably save a few compute cycles on the server by making use of client side validation as well. If I'm right then I should able to come up with a mechanism that saves me from manually duplicating my server validation on the client."),(0,o.kt)("h2",{id:"the-aim"},"The Aim"),(0,o.kt)("p",null,"I want to be able to use HTML Helpers to propogate validation metadata from the server view models into angular form validation directive attributes. Quite a mouthful I know. What does that actually mean? Well I've got 2 ideas. Possibly I want to be able to code something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@model App.ViewModels.RequiredModel\n@using (Html.BeginForm())\n{\n <div class="row">\n  @Html.LabelFor(x => x.TextBox, "Something must be entered:")\n  @Html.NgTextBoxFor(x => x.TextBox)\n </div>\n}\n')),(0,o.kt)("p",null,"And have HTML like this generated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/Demo/Required" method="post">\n <div class="row">\n  <label for="TextBox">Something must be entered:</label>\n  <input\n      ng-required="true" \n      id="TextBox" name="TextBox" type="text" value="" />\n </div>\n</form>\n')),(0,o.kt)("p",null,"The reservation I have about this approach is that it rather takes you away from the HTML. Yes it works (and to your seasoned MVC-er it will feel quite natural in some ways) but it feels rather heavy handed. But I'd like what I'm building to be easy for users to plug into existing code without a ton of rework. So, the other idea I'm toying with is having HTML helpers that just return a string of attributes. So if I had an angular form that looked like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div ng-controller="ExampleController">\n<form>\n <div class="row">\n  <label>Something must be entered: \n    <input name="RequiredField" type="text" value="" />\n  </label>\n </div>\n</form>\n')),(0,o.kt)("p",null,"I could tweak it to push in the validation directive attributes like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@model App.ViewModels.RequiredModel\n<div ng-controller="ExampleController">\n<form>\n <div class="row">\n  <label>Something must be entered: \n    <input name="RequiredField" type="text" value="" @Html.NgValidationFor(x => x.RequiredField) />\n  </label>\n </div>\n</form>\n')),(0,o.kt)("p",null,"And end up with HTML like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div ng-controller="ExampleController">\n<form>\n <div class="row">\n  <label>Something must be entered: \n    <input name="RequiredField" type="text" value="" ng-required="true" />\n  </label>\n </div>\n</form>\n')),(0,o.kt)("p",null,"This is a simplified example of course - it's likely that any number of validation directive attributes might be returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"NgValidationFor"),". And crucially if these attributes were changed on the server view model then the validation changes would automatically end up in the client HTML with this approach."),(0,o.kt)("h2",{id:"the-approach"},"The Approach"),(0,o.kt)("p",null,"At least to start off with I'm going to aim at creating the second of my approaches. I may come back and implement the first at some point but I think the second is a better place to start."),(0,o.kt)("p",null,"I'm kind of surprised no-one else has built this already actually - but I'm not aware of anything. I've had a little duckduckgo around and found no takers. The closest I've come is the excellent ",(0,o.kt)("a",{parentName:"p",href:"http://www.breezejs.com/sites/all/apidocs/classes/Validator.html"},"BreezeJS"),". BreezeJS does way more than I want it to - I'm planning to restrict the scope of this project to simply turning data annotations on my ASP.Net MVC server models into ",(0,o.kt)("inlineCode",{parentName:"p"},"ng-*")," directive attributes in HTML. That's it."),(0,o.kt)("p",null,"So, general housekeeping.... I'm going to host this project on ",(0,o.kt)("a",{parentName:"p",href:"http://www.github.com"},"GitHub"),", I'm going to have Continuous Integration with ",(0,o.kt)("a",{parentName:"p",href:"http://www.appveyor.com/"},"AppVeyor")," and I'm planning to publish this via ",(0,o.kt)("a",{parentName:"p",href:"http://www.nuget.org/"},"NuGet")," (when and if I've created something useful)."),(0,o.kt)("p",null,"I just need a name and I'll begin. What shall I call it? Some options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Angular ASP.Net MVC Extensions"),(0,o.kt)("li",{parentName:"ul"},"angular-aspnet-mvc-extensions"),(0,o.kt)("li",{parentName:"ul"},"Angular MVC Element Extensions"),(0,o.kt)("li",{parentName:"ul"},"Angular Validation Html Helpers"),(0,o.kt)("li",{parentName:"ul"},"NgValidationFor (the name of the HTML helper I made up)")),(0,o.kt)("p",null,"Hmmmm.... None of them is particularly lighting my fire. The first four are all a bit ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ronseal"},"RonSeal")," ","-"," which is fine.... Ug. The last one... It's a bit more pithy. Okay - I'll go with \"NgValidationFor\" at least for now. If something better occurs I can always change my mind."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/NgValidationFor"},"And we're off!")))}d.isMDXComponent=!0}}]);
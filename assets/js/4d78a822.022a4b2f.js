"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[38036],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60688:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"jQuery Unobtrusive Validation (+ associated gotchas)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["jquery unobtrusive validation"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2012/08/06/jquery-unobtrusive-validation",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-08-06-jquery-unobtrusive-validation.md",source:"@site/blog/2012-08-06-jquery-unobtrusive-validation.md",title:"jQuery Unobtrusive Validation (+ associated gotchas)",description:"I was recently working on a project which had client side validation manually set up which essentially duplicated the same logic on the server. Like many things this had started out small and grown and grown until it became arduos and tedious to maintain.",date:"2012-08-06T00:00:00.000Z",formattedDate:"August 6, 2012",tags:[{label:"jquery unobtrusive validation",permalink:"/tags/jquery-unobtrusive-validation"}],readingTime:4.475,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"ClosedXML - the real SDK for Excel",permalink:"/2012/08/16/closedxml-real-sdk-for-excel"},nextItem:{title:"Rendering Partial View to a String",permalink:"/2012/07/16/rendering-partial-view-to-string"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I was recently working on a project which had client side validation manually set up which essentially duplicated the same logic on the server. Like many things this had started out small and grown and grown until it became arduos and tedious to maintain."),(0,a.kt)("p",null," Time to break out the unobtrusive jQuery validation."),(0,a.kt)("p",null,"If you\u2019re not aware of this, as part of MVC 3 Microsoft leveraged the pre-existing ",(0,a.kt)("a",{parentName:"p",href:"http://bassistance.de/jquery-plugins/jquery-plugin-validation/"},"jQuery Validate library")," and introduced an \u201cunobtrusive\u201d extension to this which allows the library to be driven by HTML 5 data attributes. I have mentioned this lovely extension before but I haven't been using it for the last 6 months or so. And coming back to it I realised that I had forgotten a few of the details / quirks."),(0,a.kt)("p",null,'First up, "where do these HTML 5 data attributes come from?" I hear you cry. Why from the ',(0,a.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute.aspx"},"Validation attributes that live in System.ComponentModel.DataAnnotations"),"."),(0,a.kt)("p",null,"Let me illustrate. This decoration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'[Required(),\n   Range(0.01, Double.MaxValue, ErrorMessage = "A positive value is required for Price"),\n   Display(Name = "My Price")]\n  public double Price { get; set; }\n')),(0,a.kt)("p",null,"specifies that the Price field on the model is required, that it requires a positive numeric value and that it\u2019s official name is \u201cMy Price\u201d. As a result of this decoration, when you use syntax like this in your view:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'@Html.LabelFor(x => x.Price)\n  @Html.TextBoxFor(x => x.Price, new { id = "itsMyPrice", type = "number" })\n')),(0,a.kt)("p",null,"You end up with this HTML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<label for="Price">My Price</label>\n  <input data-val="true" data-val-number="The field My Price must be a number." data-val-range="A positive value is required for My Price" data-val-range-max="1.79769313486232E+308" data-val-range-min="0.01" data-val-required="The My Price field is required." id="itsMyPrice" name="Price" type="number" value="">\n')),(0,a.kt)("p",null,"As you can see MVC has done the hard work of translating these data annotations into HTML 5 data attributes so you don\u2019t have to. With this in place you can apply your validation in 1 place (the model) and 1 place only. This reduces the code you need to write exponentially. It also reduces duplication and therefore reduces the likelihood of mistakes."),(0,a.kt)("p",null,"To validate a form it\u2019s as simple as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'$("form").validate();\n')),(0,a.kt)("p",null,"Or if you wanted to validate a single element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'$("form").validate().element("elementSelector")\n')),(0,a.kt)("p",null,"Or if you wanted to prevent default form submission until validation was passed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'$("form").submit(function (event) {\n\n    var isValid = $(this).validate().valid();\n\n    return isValid; //True will allow submission, false will not\n        \n  });\n')),(0,a.kt)("p",null,"See what I mean? Simple!"),(0,a.kt)("p",null,"If you want to read up on this further I recommend these links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://bassistance.de/jquery-plugins/jquery-plugin-validation/"},"The home of jQuery Validate")," ","-"," by the way it seems to be important to work with the latest version (1.9 at time of writing). I found some strange AJAX issues when using 1.7..."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html"},"Brad Wilson's walkthrough of unobtrusive client validation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.devtrends.co.uk/blog/the-complete-guide-to-validation-in-asp.net-mvc-3-part-2"},"An example of how to implement your own custom validation both server side ","*","and","*"," client side")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://xhalent.wordpress.com/2011/01/24/applying-unobtrusive-validation-to-dynamic-content/"},"How to apply unobtrusive jQuery validation to dynamic content")," ","-"," handy if you're creating HTML on the client which you want to be validated."),(0,a.kt)("li",{parentName:"ul"},"And finally, a workaround for ",(0,a.kt)("a",{parentName:"li",href:"http://aspnet.codeplex.com/workitem/7629"},"a bug in MVC 3")," which means that data attributes aren\u2019t emitted when using DropDownListFor for nested objects: ",(0,a.kt)("a",{parentName:"li",href:"http://forums.asp.net/t/1649193.aspx/1/10"},"http://forums.asp.net/t/1649193.aspx/1/10"),". In fact because I've only seen this on a forum I've copied and the pasted the code there to below because I feared it being lost: ",(0,a.kt)("strong",{parentName:"li"},"Update: It turns out the self-same issue exists for TextAreaFor as well. Details of this and a workaround can be found ",(0,a.kt)("a",{parentName:"strong",href:"http://aspnet.codeplex.com/workitem/8576"},"here"),"... "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n    /// MVC HtmlHelper extension methods - html element extensions\n    /// These are drop down list extensions that work round a bug in MVC 3: http://aspnet.codeplex.com/workitem/7629\n    /// These workarounds were taken from here: http://forums.asp.net/t/1649193.aspx/1/10\n    /// </summary>\n    public static class DropDownListExtensions\n    {\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, null /* optionLabel */, null /* htmlAttributes */);\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, object htmlAttributes)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, null /* optionLabel */, new RouteValueDictionary(htmlAttributes));\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, IDictionary<string, object> htmlAttributes)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, null /* optionLabel */, htmlAttributes);\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, string optionLabel)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, optionLabel, null /* htmlAttributes */);\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, string optionLabel, object htmlAttributes)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, optionLabel, new RouteValueDictionary(htmlAttributes));\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1011:ConsiderPassingBaseTypesAsParameters", Justification = "Users cannot use anonymous methods with the LambdaExpression type")]\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, string optionLabel, IDictionary<string, object> htmlAttributes)\n        {\n            if (expression == null)\n            {\n                throw new ArgumentNullException("expression");\n            }\n\n\n            ModelMetadata metadata = ModelMetadata.FromLambdaExpression(expression, htmlHelper.ViewData);\n\n\n            IDictionary<string, object> validationAttributes = htmlHelper\n                .GetUnobtrusiveValidationAttributes(ExpressionHelper.GetExpressionText(expression), metadata);\n\n\n            if (htmlAttributes == null)\n                htmlAttributes = validationAttributes;\n            else\n                htmlAttributes = htmlAttributes.Concat(validationAttributes).ToDictionary(k => k.Key, v => v.Value);\n\n\n            return SelectExtensions.DropDownListFor(htmlHelper, expression, selectList, optionLabel, htmlAttributes);\n        }\n    }\n')))}d.isMDXComponent=!0}}]);
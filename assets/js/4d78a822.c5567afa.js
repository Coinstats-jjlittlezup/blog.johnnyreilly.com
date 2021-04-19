(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{1210:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||a;return n?i.a.createElement(d,s(s({ref:t},u),{},{components:n})):i.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(4),i=n(10),a=(n(0),n(1210)),o={title:"jQuery Unobtrusive Validation (+ associated gotchas)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["jquery unobtrusive validation"],hide_table_of_contents:!1},s={permalink:"/2012/08/06/jquery-unobtrusive-validation",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-08-06-jquery-unobtrusive-validation.md",source:"@site/blog/2012-08-06-jquery-unobtrusive-validation.md",title:"jQuery Unobtrusive Validation (+ associated gotchas)",description:"I was recently working on a project which had client side validation manually set up which essentially duplicated the same logic on the server. Like many things this had started out small and grown and grown until it became arduos and tedious to maintain.",date:"2012-08-06T00:00:00.000Z",formattedDate:"August 6, 2012",tags:[{label:"jquery unobtrusive validation",permalink:"/tags/jquery-unobtrusive-validation"}],readingTime:4.485,truncated:!1,prevItem:{title:"ClosedXML - the real SDK for Excel",permalink:"/2012/08/16/closedxml-real-sdk-for-excel"},nextItem:{title:"Rendering Partial View to a String",permalink:"/2012/07/16/rendering-partial-view-to-string"}},l=[],u={toc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I was recently working on a project which had client side validation manually set up which essentially duplicated the same logic on the server. Like many things this had started out small and grown and grown until it became arduos and tedious to maintain."),Object(a.b)("p",null," Time to break out the unobtrusive jQuery validation."),Object(a.b)("p",null,"If you\u2019re not aware of this, as part of MVC 3 Microsoft leveraged the pre-existing ",Object(a.b)("a",{parentName:"p",href:"http://bassistance.de/jquery-plugins/jquery-plugin-validation/"},"jQuery Validate library")," and introduced an \u201cunobtrusive\u201d extension to this which allows the library to be driven by HTML 5 data attributes. I have mentioned this lovely extension before but I haven't been using it for the last 6 months or so. And coming back to it I realised that I had forgotten a few of the details / quirks."),Object(a.b)("p",null,'First up, "where do these HTML 5 data attributes come from?" I hear you cry. Why from the ',Object(a.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute.aspx"},"Validation attributes that live in System.ComponentModel.DataAnnotations"),"."),Object(a.b)("p",null,"Let me illustrate. This decoration:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'[Required(),\n   Range(0.01, Double.MaxValue, ErrorMessage = "A positive value is required for Price"),\n   Display(Name = "My Price")]\n  public double Price { get; set; }\n')),Object(a.b)("p",null,"specifies that the Price field on the model is required, that it requires a positive numeric value and that it\u2019s official name is \u201cMy Price\u201d. As a result of this decoration, when you use syntax like this in your view:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'@Html.LabelFor(x => x.Price)\n  @Html.TextBoxFor(x => x.Price, new { id = "itsMyPrice", type = "number" })\n')),Object(a.b)("p",null,"You end up with this HTML:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<label for="Price">My Price</label>\n  <input data-val="true" data-val-number="The field My Price must be a number." data-val-range="A positive value is required for My Price" data-val-range-max="1.79769313486232E+308" data-val-range-min="0.01" data-val-required="The My Price field is required." id="itsMyPrice" name="Price" type="number" value="">\n')),Object(a.b)("p",null,"As you can see MVC has done the hard work of translating these data annotations into HTML 5 data attributes so you don\u2019t have to. With this in place you can apply your validation in 1 place (the model) and 1 place only. This reduces the code you need to write exponentially. It also reduces duplication and therefore reduces the likelihood of mistakes."),Object(a.b)("p",null,"To validate a form it\u2019s as simple as this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'$("form").validate();\n')),Object(a.b)("p",null,"Or if you wanted to validate a single element:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'$("form").validate().element("elementSelector")\n')),Object(a.b)("p",null,"Or if you wanted to prevent default form submission until validation was passed:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'$("form").submit(function (event) {\n\n    var isValid = $(this).validate().valid();\n\n    return isValid; //True will allow submission, false will not\n        \n  });\n')),Object(a.b)("p",null,"See what I mean? Simple!"),Object(a.b)("p",null,"If you want to read up on this further I recommend these links:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://bassistance.de/jquery-plugins/jquery-plugin-validation/"},"The home of jQuery Validate")," ","-"," by the way it seems to be important to work with the latest version (1.9 at time of writing). I found some strange AJAX issues when using 1.7..."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html"},"Brad Wilson's walkthrough of unobtrusive client validation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://www.devtrends.co.uk/blog/the-complete-guide-to-validation-in-asp.net-mvc-3-part-2"},"An example of how to implement your own custom validation both server side ","*","and","*"," client side")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://xhalent.wordpress.com/2011/01/24/applying-unobtrusive-validation-to-dynamic-content/"},"How to apply unobtrusive jQuery validation to dynamic content")," ","-"," handy if you're creating HTML on the client which you want to be validated."),Object(a.b)("li",{parentName:"ul"},"And finally, a workaround for ",Object(a.b)("a",{parentName:"li",href:"http://aspnet.codeplex.com/workitem/7629"},"a bug in MVC 3")," which means that data attributes aren\u2019t emitted when using DropDownListFor for nested objects: ",Object(a.b)("a",{parentName:"li",href:"http://forums.asp.net/t/1649193.aspx/1/10"},"http://forums.asp.net/t/1649193.aspx/1/10"),". In fact because I've only seen this on a forum I've copied and the pasted the code there to below because I feared it being lost: ",Object(a.b)("strong",{parentName:"li"},"Update: It turns out the self-same issue exists for TextAreaFor as well. Details of this and a workaround can be found ",Object(a.b)("a",{parentName:"strong",href:"http://aspnet.codeplex.com/workitem/8576"},"here"),"... "))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n    /// MVC HtmlHelper extension methods - html element extensions\n    /// These are drop down list extensions that work round a bug in MVC 3: http://aspnet.codeplex.com/workitem/7629\n    /// These workarounds were taken from here: http://forums.asp.net/t/1649193.aspx/1/10\n    /// </summary>\n    public static class DropDownListExtensions\n    {\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, null /* optionLabel */, null /* htmlAttributes */);\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, object htmlAttributes)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, null /* optionLabel */, new RouteValueDictionary(htmlAttributes));\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, IDictionary<string, object> htmlAttributes)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, null /* optionLabel */, htmlAttributes);\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, string optionLabel)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, optionLabel, null /* htmlAttributes */);\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, string optionLabel, object htmlAttributes)\n        {\n            return SelectListFor(htmlHelper, expression, selectList, optionLabel, new RouteValueDictionary(htmlAttributes));\n        }\n\n\n        [SuppressMessage("Microsoft.Design", "CA1011:ConsiderPassingBaseTypesAsParameters", Justification = "Users cannot use anonymous methods with the LambdaExpression type")]\n        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]\n        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, string optionLabel, IDictionary<string, object> htmlAttributes)\n        {\n            if (expression == null)\n            {\n                throw new ArgumentNullException("expression");\n            }\n\n\n            ModelMetadata metadata = ModelMetadata.FromLambdaExpression(expression, htmlHelper.ViewData);\n\n\n            IDictionary<string, object> validationAttributes = htmlHelper\n                .GetUnobtrusiveValidationAttributes(ExpressionHelper.GetExpressionText(expression), metadata);\n\n\n            if (htmlAttributes == null)\n                htmlAttributes = validationAttributes;\n            else\n                htmlAttributes = htmlAttributes.Concat(validationAttributes).ToDictionary(k => k.Key, v => v.Value);\n\n\n            return SelectExtensions.DropDownListFor(htmlHelper, expression, selectList, optionLabel, htmlAttributes);\n        }\n    }\n')))}c.isMDXComponent=!0}}]);
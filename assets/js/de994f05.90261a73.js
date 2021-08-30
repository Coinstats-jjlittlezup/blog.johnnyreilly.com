"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[10588],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=i,c=m["".concat(l,".").concat(p)]||m[p]||h[p]||o;return a?n.createElement(c,r(r({ref:t},d),{},{components:a})):n.createElement(c,r({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63957:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return d},toc:function(){return h},default:function(){return p}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],s={title:"jQuery Unobtrusive Remote Validation",authors:"johnnyreilly",tags:["jquery","jquery remote validation","jquery unobtrusive validation"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2012/03/03/jquery-unobtrusive-remote-validation",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-03-03-jquery-unobtrusive-remote-validation.md",source:"@site/blog/2012-03-03-jquery-unobtrusive-remote-validation.md",title:"jQuery Unobtrusive Remote Validation",description:"Just recently I have been particularly needing to make use of remote / server-side validation in my ASP.NET MVC application and found that the unobtrusive way of using this seemed to be rather inadequately documented (of course it's possible that it's well documented and I just didn't find the resources). Anyway I've rambled on much longer than I intended to in this post so here's the TL;DR:",date:"2012-03-03T00:00:00.000Z",formattedDate:"March 3, 2012",tags:[{label:"jquery",permalink:"/tags/jquery"},{label:"jquery remote validation",permalink:"/tags/jquery-remote-validation"},{label:"jquery unobtrusive validation",permalink:"/tags/jquery-unobtrusive-validation"}],readingTime:8.99,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Striving for (JavaScript) Convention",permalink:"/2012/03/12/striving-for-javascript-convention"},nextItem:{title:"The Joy of JSON",permalink:"/2012/02/23/joy-of-json"}},d={authorsImageUrls:[void 0]},h=[],m={toc:h};function p(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Just recently I have been particularly needing to make use of remote / server-side validation in my ASP.NET MVC application and found that the unobtrusive way of using this seemed to be rather inadequately documented (of course it's possible that it's well documented and I just didn't find the resources). Anyway I've rambled on much longer than I intended to in this post so here's the TL;DR:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You ","*",(0,o.kt)("strong",{parentName:"li"},"can"),"*"," use remote validation driven by unobtrusive data attributes"),(0,o.kt)("li",{parentName:"ul"},"Using remote validation you can supply ","*",(0,o.kt)("strong",{parentName:"li"},"multiple"),"*"," parameters to be evaluated"),(0,o.kt)("li",{parentName:"ul"},"It is possible to block validation and force it to be re-evaluted - although using a slightly hacky method which I document here. For what it's worth I acknowledge up front that this is ","*",(0,o.kt)("strong",{parentName:"li"},"not"),"*"," an ideal solution but it does seem to work. I really hope there is a better solution out there and if anyone knows about it then please get in contact and let me know.")),(0,o.kt)("p",null,"Off we go... So, jQuery unobtrusive validation; clearly the new cool right?"),(0,o.kt)("p",null,"I'd never been particularly happy with the validation that I had traditionally been using with ASP.NET classic. It worked... but it always seemed a little... clunky? I realise that's not the most well expressed concern. For basic scenarios it seemed fine, but I have recollections of going through some pain as soon as I stepped outside of the basic form validation. Certainly when it came to validating custom controls that we had developed it never seemed entirely straightforward to get validation to play nice."),(0,o.kt)("p",null,"Based on this I was keen to try something new and the opportunity presented itself when we started integrating MVC into our classic WebForms app. (By the way if you didn't know that MVC and ASP.NET could live together in perfect harmony, well, they can! And a good explanation on how to achieve it is offered by Colin Farr ",(0,o.kt)("a",{parentName:"p",href:"http://www.britishdeveloper.co.uk/2011/05/convert-web-forms-mvc3-how-to.html"},"here"),".)"),(0,o.kt)("p",null,"J\xf6rn Zaefferer came out with the ",(0,o.kt)("a",{parentName:"p",href:"http://bassistance.de/jquery-plugins/jquery-plugin-validation/"},"jQuery validation plug-in")," way back in 2006. And mighty fine it is too. Microsoft (gor' bless 'em) really brought something new to the jQuery validation party when they came out with their unobtrusive javascript validation library along with MVC 3. What this library does, in short, is allows for jQuery validation to be driven by ",(0,o.kt)("inlineCode",{parentName:"p"},"data-val-*")," attributes alone as long as the ",(0,o.kt)("a",{parentName:"p",href:"http://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.js"},"jquery.validate.js")," and ",(0,o.kt)("a",{parentName:"p",href:"http://ajax.aspnetcdn.com/ajax/mvc/3.0/jquery.validate.unobtrusive.js"},"jquery.validate.unobtrusive.js")," libraries are included in the screen (I have assumed you are already including jQuery). I know; powerful stuff!"),(0,o.kt)("p",null,"A good explanation of unobtrusive validation is given by Brad Wilson ",(0,o.kt)("a",{parentName:"p",href:"http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html"},"here"),"."),(0,o.kt)("p",null,"Anyway, to my point: what about remote validation? That is to say, what about validation which needs to go back to the server to perform the necessary tests? Well I struggled to find decent examples of how to use this. Those that I did find seemed to universally be php examples; not so useful for an ASP.NET user. Also, when I did root out an ASP.NET example there seemed to be a fundamental flaw. Namely, if remote validation hadn't been triggered and completed successfully then the submit could fire anyway. This seems to be down to the asynchronous nature of the test; ie because it is ","*",(0,o.kt)("strong",{parentName:"p"},"not"),"*",' synchronous there is no "block" to the submit. And out of the box with unobtrusive validation there seems no way to make this synchronous. I could of course wire this up manually and simply side-step the restrictions of unobtrusive validation but that wasn\'t what I wanted.'),(0,o.kt)("p",null,"***Your mission John, should you decide to accept it, is this: ",(0,o.kt)("u",null,"block the submit until remote validation has completed successfully")),(0,o.kt)("p",null,". As always, should you or any of your I.M. Force be caught or killed, the Secretary will disavow any knowledge of your actions.***"),(0,o.kt)("p",null,"So that's what I wanted to do. Make it act like it's synchronous even though it's asynchronous. Bit horrible but I had a deadline to meet and so this is my pragmatic solution. There may be better alternatives but this worked for me."),(0,o.kt)("p",null,"First of all the HTML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/Dummy/ValidationDemo.mvc/SaveUser" \n    id="ValidationForm" method="post">  \n\n  First name: \n  <input data-val="true" data-val-required="First Name required" \n      id="FirstName" name="FirstName" type="text" value="" />\n\n  Last name: \n  <input data-val="true" data-val-required="Last Name required" \n      id="LastName" name="LastName" type="text" value="" />\n\n  User name: \n  <input id="UserName" name="UserName" type="text" value=""\n    data-val="true" \n    data-val-required="You must enter a user name before we can validate it remotely"\n    data-val-remote="&amp;#39;UserNameInput&amp;#39; is invalid." \n    data-val-remote-additionalfields="*.FirstName,*.LastName" \n    data-val-remote-url="/Dummy/ValidationDemo/IsUserNameValid" />\n\n  <input id="SaveMyDataButton" name="SaveMyDataButton" \n      type="button" value="Click to Save" />\n</form>\n')),(0,o.kt)("p",null,"I should mention that on my actual page (a cshtml partial view) the HTML for the inputs is generated by the use of the ",(0,o.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.web.mvc.html.inputextensions.textboxfor.aspx"},"InputExtensions.TextBoxFor")," method which is lovely. It takes your model and using the validation attributes that decorate your models properties it generates the relevant jQuery unobtrusive validation data attributes so you don't have to do it manually."),(0,o.kt)("p",null,"But for the purposes of seeing what's \"under the bonnet\" I thought it would be more useful to post the raw HTML so it's entirely clear what is being used. Also there doesn't appear to be a good way (that I've yet seen) for automatically generating Remote validation data attributes in the way that I've found works. So I'm manually specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"data-val-remote-*")," attributes using the htmlAttributes parameter of the TextBoxFor (",(0,o.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/4844001/html5-data-with-asp-net-mvc-textboxfor-html-attributes"},'using "',"_",'" to replace "-"')," obviously)."),(0,o.kt)("p",null,"Next the JavaScript that performs the validation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'$(document).ready(function () {\n\n  var intervalId = null,\n\n  //\n  // DECLARE FUNCTION EXPRESSIONS\n  //\n\n  //======================================================\n  // function that triggers update when remote validation \n  // completes successfully\n  //======================================================\n  pendingValidationComplete = function () {\n\n    var i, errorList, errorListForUsers;\n    var $ValidationForm = $("#ValidationForm");\n    if ($ValidationForm.data("validator").pendingRequest === 0) {\n\n      clearInterval(intervalId);\n\n      //Force validation to present to user \n      //(this will *not* retrigger remote validation)\n      if ($ValidationForm.valid()) {\n\n        alert("Validation has succeeded - you can now submit");\n      }\n      else {\n\n        //Validation failed! \n        errorList = $ValidationForm.data("validator").errorList;\n        errorListForUsers = [];\n        for (i = 0; i < errorList.length; i++) {\n          errorListForUsers.push(errorList[i].message);\n        }\n\n        alert(errorListForUsers.join("\\r\\n"));\n      }\n    }\n  },\n\n  //======================================================\n  // Trigger validation\n  //======================================================\n  triggerValidation = function (evt) {\n\n    //Removed cached values where remote is concerned\n    // so remote validation is retriggered\n    $("#UserName").removeData("previousValue");\n\n    //Trigger validation\n    $("#ValidationForm").valid();\n\n    //Setup interval which will evaluate validation \n    //(this approach because of remote validation)\n    intervalId = setInterval(pendingValidationComplete, 50);\n  };\n\n  //\n  //ASSIGN EVENT HANDLERS\n  //\n  $("#SaveMyDataButton").click(triggerValidation);\n});\n')),(0,o.kt)("p",null,"And finally the Controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public JsonResult IsUserNameValid(string UserName,\n                                  string FirstName, \n                                  string LastName)\n{\n  var userNameIsUnique = IsUserNameUnique(UserName);\n  if (userNameIsUnique)\n    return Json(true, JsonRequestBehavior.AllowGet);\n  else\n    return Json(string.Format(\n                  "{0} is already taken I\'m afraid {1} {2}",\n                  UserName, FirstName, LastName), \n                JsonRequestBehavior.AllowGet);\n}\n\nprivate bool IsUserNameUnique(string potentialUserName)\n{\n  return false;\n}\n')),(0,o.kt)("p",null,"So what happens here exactly? Well it's like this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'The user enters their first name, last name and desired user name and hits the "Click to Save" button. '),(0,o.kt)("li",{parentName:"ol"},"This forces validation by first removing any cached validation values stored in ",(0,o.kt)("inlineCode",{parentName:"li"},"previousValue")," data attribute and then triggering the ",(0,o.kt)("inlineCode",{parentName:"li"},"valid")," method. Disclaimer: I KNOW THIS IS A LITTLE HACKY. I would have expected there would be some way in the API to manually re-force validation. Unless I've missed something there doesn't appear to be. (",(0,o.kt)("a",{parentName:"li",href:"http://stackoverflow.com/a/3797712/761388"},"And the good citizens of Stack Overflow would seem to concur."),") I would guess that the underlying assumption is that if nothing has changed on the client then that's all that matters. Clearly that's invalid for our remote example given that a username could be \"claimed\" at any time; eg in between people first entering their username (when validation should have fired automatically) and actually submitting the form. Anyway - this approach seems to get us round the problem. "),(0,o.kt)("li",{parentName:"ol"},"When validation takes place the IsUserNameValid action / method on our controller will be called. It's important to note that I have set up a method that takes 3 inputs; UserName, which is supplied by default as the UserName input is the one which is decorated with remote validation attributes as well as the 2 extra inputs of FirstName and LastName. In the example I've given I don't actually need these extra attributes. I'm doing this because I know that I have situations in remote validation where I ","*",(0,o.kt)("strong",{parentName:"li"},"need"),"*"," to supply multiple inputs and so essentially I did it here as a proof of concept. The addition of these 2 extra inputs was achieved through the use of the ",(0,o.kt)("inlineCode",{parentName:"li"},"data-val-remote-additionalfields")," attribute. When searching for documentation about this I found absolutely ",(0,o.kt)("u",null,"none"))),(0,o.kt)("p",null,". I assume there is some out there - if anyone knows then I'd very pleased to learn about it. I only learned about it in the end by finding an example of someone using this out in the great wide world and understanding how to use it based on their example. To understand how the ",(0,o.kt)("inlineCode",{parentName:"p"},"data-val-remote-additionalfields")," attribute works you can look at jquery.validate.unobtrusive.js. If you're just looking to get up and running then I found that the following works: ",(0,o.kt)("inlineCode",{parentName:"p"},'data-val-remote-additionalfields="*.FirstName,*.LastName"')," You will notice that: - Each parameter is supplied in the format ",(0,o.kt)("em",{parentName:"p"},"*",".","[InputName]"),' and inputs are delimited by ","\'s - Name is a ',(0,o.kt)("u",null,"required")),(0,o.kt)("p",null," attribute for an input if you wish it to be evaluated with unobtrusive validation. (Completely obvious statement I realise; I'm writing that sentence more for my benefit than yours) - Finally, our validation always fails. That's deliberate - I just wanted to be clear on the approach used to get remote unobtrusive validation with extra parameters up and running.\n4. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval")," we intend to trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"pendingValidationComplete")," function to check if remote validation has completed every 50ms - again I try to avoid setInterval wherever possible but this seems to be the most sensible solution in this case.\n5. When the remote request finally completes (ie when ",(0,o.kt)("inlineCode",{parentName:"p"},"pendingRequest")," has a value of 0) then we can safely proceed on the basis of our validation results. In the example above I'm simply alerting to the screen based on my results; this is ","*",(0,o.kt)("strong",{parentName:"p"},"not"),"*"," advised for any finished work; I'm just using this mechanism here to demonstrate the principle."),(0,o.kt)("p",null,"Validation in action:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(21670).Z})),(0,o.kt)("p",null,"Well I've gone on for far too long but I am happy to have an approach that does what I need. It does feel like a slightly hacky solution and I expect that there is a better approach for this that I'm not aware of. As much as anything else I've written this post in the hope that someone who knows this better approach will set me straight. In summary, this works. But if you're aware of a better solution then please do get in contact - I'd love to know!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PS:"),"Just in case you're in the process of initially getting up and running with unobtrusive validation I've listed below a couple of general helpful bits of config etc:"),(0,o.kt)("p",null,"The following setting is essential for Application","_","Start in Global.asax.cs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"DataAnnotationsModelValidatorProvider.AddImplicitRequiredAttributeForValueTypes = false;\n")),(0,o.kt)("p",null,"The following settings should be used in your Web.Config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<appSettings>\n  <add key="ClientValidationEnabled" value="true" />\n  <add key="UnobtrusiveJavaScriptEnabled" value="true "/>\n</appSettings>\n')),(0,o.kt)("p",null,"My example used the following scripts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="Scripts/jquery-1.7.1.js"><\/script>\n<script src="Scripts/jquery.validate.js"><\/script>\n<script src="Scripts/jquery.validate.unobtrusive.js"><\/script>\n<script src="Scripts/ValidationDemo.js"><\/script>\n')))}p.isMDXComponent=!0},21670:function(e,t,a){t.Z=a.p+"assets/images/validation-screenshot2-bb95801f6c675280787ddd7ea0788bce.png"}}]);
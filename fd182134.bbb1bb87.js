(window.webpackJsonp=window.webpackJsonp||[]).push([[885],{1011:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/validation-screenshot2-c75182f9ca0cb7f729b344ee31f67637.png"},949:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),o=(a(0),a(958)),r={title:"jQuery Unobtrusive Remote Validation",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["jquery","jquery remote validation","jquery unobtrusive validation"],hide_table_of_contents:!1},s={permalink:"/2012/03/03/jquery-unobtrusive-remote-validation",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-03-03-jquery-unobtrusive-remote-validation.md",source:"@site/blog/2012-03-03-jquery-unobtrusive-remote-validation.md",description:"Just recently I have been particularly needing to make use of remote / server-side validation in my ASP.NET MVC application and found that the unobtrusive way of using this seemed to be rather inadequately documented (of course it's possible that it's well documented and I just didn't find the resources). Anyway I've rambled on much longer than I intended to in this post so here's the TL;DR:",date:"2012-03-03T00:00:00.000Z",tags:[{label:"jquery",permalink:"/tags/jquery"},{label:"jquery remote validation",permalink:"/tags/jquery-remote-validation"},{label:"jquery unobtrusive validation",permalink:"/tags/jquery-unobtrusive-validation"}],title:"jQuery Unobtrusive Remote Validation",readingTime:8.145,truncated:!1,prevItem:{title:"Striving for (JavaScript) Convention",permalink:"/2012/03/12/striving-for-javascript-convention"},nextItem:{title:"The Joy of JSON",permalink:"/2012/02/23/joy-of-json"}},l=[],u={toc:l};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Just recently I have been particularly needing to make use of remote / server-side validation in my ASP.NET MVC application and found that the unobtrusive way of using this seemed to be rather inadequately documented (of course it's possible that it's well documented and I just didn't find the resources). Anyway I've rambled on much longer than I intended to in this post so here's the TL;DR:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You ","*",Object(o.b)("strong",{parentName:"li"},"can"),"*"," use remote validation driven by unobtrusive data attributes"),Object(o.b)("li",{parentName:"ul"},"Using remote validation you can supply ","*",Object(o.b)("strong",{parentName:"li"},"multiple"),"*"," parameters to be evaluated"),Object(o.b)("li",{parentName:"ul"},"It is possible to block validation and force it to be re-evaluted - although using a slightly hacky method which I document here. For what it's worth I acknowledge up front that this is ","*",Object(o.b)("strong",{parentName:"li"},"not"),"*"," an ideal solution but it does seem to work. I really hope there is a better solution out there and if anyone knows about it then please get in contact and let me know.")),Object(o.b)("p",null,"Off we go... So, jQuery unobtrusive validation; clearly the new cool right?"),Object(o.b)("p",null,"I'd never been particularly happy with the validation that I had traditionally been using with ASP.NET classic. It worked... but it always seemed a little... clunky? I realise that's not the most well expressed concern. For basic scenarios it seemed fine, but I have recollections of going through some pain as soon as I stepped outside of the basic form validation. Certainly when it came to validating custom controls that we had developed it never seemed entirely straightforward to get validation to play nice."),Object(o.b)("p",null,"Based on this I was keen to try something new and the opportunity presented itself when we started integrating MVC into our classic WebForms app. (By the way if you didn't know that MVC and ASP.NET could live together in perfect harmony, well, they can! And a good explanation on how to achieve it is offered by Colin Farr ",Object(o.b)("a",{parentName:"p",href:"http://www.britishdeveloper.co.uk/2011/05/convert-web-forms-mvc3-how-to.html"},"here"),".)"),Object(o.b)("p",null,"J\xf6rn Zaefferer came out with the ",Object(o.b)("a",{parentName:"p",href:"http://bassistance.de/jquery-plugins/jquery-plugin-validation/"},"jQuery validation plug-in")," way back in 2006. And mighty fine it is too. Microsoft (gor' bless 'em) really brought something new to the jQuery validation party when they came out with their unobtrusive javascript validation library along with MVC 3. What this library does, in short, is allows for jQuery validation to be driven by ",Object(o.b)("inlineCode",{parentName:"p"},"data-val-*")," attributes alone as long as the ",Object(o.b)("a",{parentName:"p",href:"http://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.js"},"jquery.validate.js")," and ",Object(o.b)("a",{parentName:"p",href:"http://ajax.aspnetcdn.com/ajax/mvc/3.0/jquery.validate.unobtrusive.js"},"jquery.validate.unobtrusive.js")," libraries are included in the screen (I have assumed you are already including jQuery). I know; powerful stuff!"),Object(o.b)("p",null,"A good explanation of unobtrusive validation is given by Brad Wilson ",Object(o.b)("a",{parentName:"p",href:"http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html"},"here"),"."),Object(o.b)("p",null,"Anyway, to my point: what about remote validation? That is to say, what about validation which needs to go back to the server to perform the necessary tests? Well I struggled to find decent examples of how to use this. Those that I did find seemed to universally be php examples; not so useful for an ASP.NET user. Also, when I did root out an ASP.NET example there seemed to be a fundamental flaw. Namely, if remote validation hadn't been triggered and completed successfully then the submit could fire anyway. This seems to be down to the asynchronous nature of the test; ie because it is ","*",Object(o.b)("strong",{parentName:"p"},"not"),"*",' synchronous there is no "block" to the submit. And out of the box with unobtrusive validation there seems no way to make this synchronous. I could of course wire this up manually and simply side-step the restrictions of unobtrusive validation but that wasn\'t what I wanted.'),Object(o.b)("p",null,"***Your mission John, should you decide to accept it, is this: ",Object(o.b)("u",null,"block the submit until remote validation has completed successfully")),Object(o.b)("p",null,". As always, should you or any of your I.M. Force be caught or killed, the Secretary will disavow any knowledge of your actions.***"),Object(o.b)("p",null,"So that's what I wanted to do. Make it act like it's synchronous even though it's asynchronous. Bit horrible but I had a deadline to meet and so this is my pragmatic solution. There may be better alternatives but this worked for me."),Object(o.b)("p",null,"First of all the HTML:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<form action="/Dummy/ValidationDemo.mvc/SaveUser" \n    id="ValidationForm" method="post">  \n\n  First name: \n  <input data-val="true" data-val-required="First Name required" \n      id="FirstName" name="FirstName" type="text" value="" />\n\n  Last name: \n  <input data-val="true" data-val-required="Last Name required" \n      id="LastName" name="LastName" type="text" value="" />\n\n  User name: \n  <input id="UserName" name="UserName" type="text" value=""\n    data-val="true" \n    data-val-required="You must enter a user name before we can validate it remotely"\n    data-val-remote="&amp;#39;UserNameInput&amp;#39; is invalid." \n    data-val-remote-additionalfields="*.FirstName,*.LastName" \n    data-val-remote-url="/Dummy/ValidationDemo/IsUserNameValid" />\n\n  <input id="SaveMyDataButton" name="SaveMyDataButton" \n      type="button" value="Click to Save" />\n</form>\n')),Object(o.b)("p",null,"I should mention that on my actual page (a cshtml partial view) the HTML for the inputs is generated by the use of the ",Object(o.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.web.mvc.html.inputextensions.textboxfor.aspx"},"InputExtensions.TextBoxFor")," method which is lovely. It takes your model and using the validation attributes that decorate your models properties it generates the relevant jQuery unobtrusive validation data attributes so you don't have to do it manually."),Object(o.b)("p",null,"But for the purposes of seeing what's \"under the bonnet\" I thought it would be more useful to post the raw HTML so it's entirely clear what is being used. Also there doesn't appear to be a good way (that I've yet seen) for automatically generating Remote validation data attributes in the way that I've found works. So I'm manually specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"data-val-remote-*")," attributes using the htmlAttributes parameter of the TextBoxFor (",Object(o.b)("a",{parentName:"p",href:"http://stackoverflow.com/questions/4844001/html5-data-with-asp-net-mvc-textboxfor-html-attributes"},'using "',"_",'" to replace "-"')," obviously)."),Object(o.b)("p",null,"Next the JavaScript that performs the validation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'$(document).ready(function () {\n\n  var intervalId = null,\n\n  //\n  // DECLARE FUNCTION EXPRESSIONS\n  //\n\n  //======================================================\n  // function that triggers update when remote validation \n  // completes successfully\n  //======================================================\n  pendingValidationComplete = function () {\n\n    var i, errorList, errorListForUsers;\n    var $ValidationForm = $("#ValidationForm");\n    if ($ValidationForm.data("validator").pendingRequest === 0) {\n\n      clearInterval(intervalId);\n\n      //Force validation to present to user \n      //(this will *not* retrigger remote validation)\n      if ($ValidationForm.valid()) {\n\n        alert("Validation has succeeded - you can now submit");\n      }\n      else {\n\n        //Validation failed! \n        errorList = $ValidationForm.data("validator").errorList;\n        errorListForUsers = [];\n        for (i = 0; i < errorList.length; i++) {\n          errorListForUsers.push(errorList[i].message);\n        }\n\n        alert(errorListForUsers.join("\\r\\n"));\n      }\n    }\n  },\n\n  //======================================================\n  // Trigger validation\n  //======================================================\n  triggerValidation = function (evt) {\n\n    //Removed cached values where remote is concerned\n    // so remote validation is retriggered\n    $("#UserName").removeData("previousValue");\n\n    //Trigger validation\n    $("#ValidationForm").valid();\n\n    //Setup interval which will evaluate validation \n    //(this approach because of remote validation)\n    intervalId = setInterval(pendingValidationComplete, 50);\n  };\n\n  //\n  //ASSIGN EVENT HANDLERS\n  //\n  $("#SaveMyDataButton").click(triggerValidation);\n});\n')),Object(o.b)("p",null,"And finally the Controller:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'public JsonResult IsUserNameValid(string UserName,\n                                  string FirstName, \n                                  string LastName)\n{\n  var userNameIsUnique = IsUserNameUnique(UserName);\n  if (userNameIsUnique)\n    return Json(true, JsonRequestBehavior.AllowGet);\n  else\n    return Json(string.Format(\n                  "{0} is already taken I\'m afraid {1} {2}",\n                  UserName, FirstName, LastName), \n                JsonRequestBehavior.AllowGet);\n}\n\nprivate bool IsUserNameUnique(string potentialUserName)\n{\n  return false;\n}\n')),Object(o.b)("p",null,"So what happens here exactly? Well it's like this:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'The user enters their first name, last name and desired user name and hits the "Click to Save" button. '),Object(o.b)("li",{parentName:"ol"},"This forces validation by first removing any cached validation values stored in ",Object(o.b)("inlineCode",{parentName:"li"},"previousValue")," data attribute and then triggering the ",Object(o.b)("inlineCode",{parentName:"li"},"valid")," method. Disclaimer: I KNOW THIS IS A LITTLE HACKY. I would have expected there would be some way in the API to manually re-force validation. Unless I've missed something there doesn't appear to be. (",Object(o.b)("a",{parentName:"li",href:"http://stackoverflow.com/a/3797712/761388"},"And the good citizens of Stack Overflow would seem to concur."),") I would guess that the underlying assumption is that if nothing has changed on the client then that's all that matters. Clearly that's invalid for our remote example given that a username could be \"claimed\" at any time; eg in between people first entering their username (when validation should have fired automatically) and actually submitting the form. Anyway - this approach seems to get us round the problem. "),Object(o.b)("li",{parentName:"ol"},"When validation takes place the IsUserNameValid action / method on our controller will be called. It's important to note that I have set up a method that takes 3 inputs; UserName, which is supplied by default as the UserName input is the one which is decorated with remote validation attributes as well as the 2 extra inputs of FirstName and LastName. In the example I've given I don't actually need these extra attributes. I'm doing this because I know that I have situations in remote validation where I ","*",Object(o.b)("strong",{parentName:"li"},"need"),"*"," to supply multiple inputs and so essentially I did it here as a proof of concept. The addition of these 2 extra inputs was achieved through the use of the ",Object(o.b)("inlineCode",{parentName:"li"},"data-val-remote-additionalfields")," attribute. When searching for documentation about this I found absolutely ",Object(o.b)("u",null,"none"))),Object(o.b)("p",null,". I assume there is some out there - if anyone knows then I'd very pleased to learn about it. I only learned about it in the end by finding an example of someone using this out in the great wide world and understanding how to use it based on their example. To understand how the ",Object(o.b)("inlineCode",{parentName:"p"},"data-val-remote-additionalfields")," attribute works you can look at jquery.validate.unobtrusive.js. If you're just looking to get up and running then I found that the following works: ",Object(o.b)("inlineCode",{parentName:"p"},'data-val-remote-additionalfields="*.FirstName,*.LastName"')," You will notice that: - Each parameter is supplied in the format ",Object(o.b)("em",{parentName:"p"},"*",".","[InputName]"),' and inputs are delimited by ","\'s - Name is a ',Object(o.b)("u",null,"required")),Object(o.b)("p",null," attribute for an input if you wish it to be evaluated with unobtrusive validation. (Completely obvious statement I realise; I'm writing that sentence more for my benefit than yours) - Finally, our validation always fails. That's deliberate - I just wanted to be clear on the approach used to get remote unobtrusive validation with extra parameters up and running.\n4. Using ",Object(o.b)("inlineCode",{parentName:"p"},"setInterval")," we intend to trigger the ",Object(o.b)("inlineCode",{parentName:"p"},"pendingValidationComplete")," function to check if remote validation has completed every 50ms - again I try to avoid setInterval wherever possible but this seems to be the most sensible solution in this case.\n5. When the remote request finally completes (ie when ",Object(o.b)("inlineCode",{parentName:"p"},"pendingRequest")," has a value of 0) then we can safely proceed on the basis of our validation results. In the example above I'm simply alerting to the screen based on my results; this is ","*",Object(o.b)("strong",{parentName:"p"},"not"),"*"," advised for any finished work; I'm just using this mechanism here to demonstrate the principle."),Object(o.b)("p",null,Object(o.b)("img",{src:a(1011).default})))}d.isMDXComponent=!0},958:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return p}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=i.a.createContext({}),d=function(e){var t=i.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,p=c["".concat(r,".").concat(m)]||c[m]||h[m]||o;return a?i.a.createElement(p,s(s({ref:t},u),{},{components:a})):i.a.createElement(p,s({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
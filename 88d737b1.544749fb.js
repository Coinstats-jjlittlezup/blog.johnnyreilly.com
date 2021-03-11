(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{1159:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,b=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return a?i.a.createElement(b,l(l({ref:t},p),{},{components:a})):i.a.createElement(b,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},668:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),i=a(7),r=(a(0),a(1159)),o={title:"A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Date","DateTime","Moment.JS","DataAnnotations","ValidationAttribute"],hide_table_of_contents:!1},l={permalink:"/2014/06/20/dates-DataAnnotations-and-data-impedance-mismatch",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-06-20-dates-DataAnnotations-and-data-impedance-mismatch.md",source:"@site/blog/2014-06-20-dates-DataAnnotations-and-data-impedance-mismatch.md",description:"If you ever take a step back from what you're doing it can sometimes seem pretty abstract. Here's an example. I was looking at an issue in an app that I was supporting. The problem concerned a field which was to store a date value. Let's call it, for the sake of argument, valuation_date. (Clearly in reality the field name was entirely different... Probably.) This field was supposed to represent a specific date, like June 15th 2012 or 19th August 2014. To be clear, a date and \\*not\\* in any way, a time.",date:"2014-06-20T00:00:00.000Z",tags:[{label:"Date",permalink:"/tags/date"},{label:"DateTime",permalink:"/tags/date-time"},{label:"Moment.JS",permalink:"/tags/moment-js"},{label:"DataAnnotations",permalink:"/tags/data-annotations"},{label:"ValidationAttribute",permalink:"/tags/validation-attribute"}],title:"A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch",readingTime:4.085,truncated:!1,prevItem:{title:"HotTowel-Angular meet TypeScript",permalink:"/2014/07/03/hottowel-angular-meet-typescript"},nextItem:{title:"Migrating from AngularJS to AngularTS - a walkthrough",permalink:"/2014/06/01/migrating-from-angularjs-to-angularts"}},s=[{value:"A Primitive Problem",id:"a-primitive-problem",children:[]},{value:"An Attribute Solution",id:"an-attribute-solution",children:[]}],p={toc:s};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you ever take a step back from what you're doing it can sometimes seem pretty abstract. Here's an example. I was looking at an issue in an app that I was supporting. The problem concerned a field which was to store a date value. Let's call it, for the sake of argument, ",Object(r.b)("inlineCode",{parentName:"p"},"valuation_date"),". (Clearly in reality the field name was entirely different... Probably.) This field was supposed to represent a specific date, like June 15th 2012 or 19th August 2014. To be clear, a date and ","*",Object(r.b)("strong",{parentName:"p"},"not"),"*"," in any way, a time."),Object(r.b)("p",null," ",Object(r.b)("inlineCode",{parentName:"p"},"valuation_date")," was stored in a SQL database as a ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-gb/library/ms187819.aspx">datetime</a>'),". That's right a date with a time portion. I've encountered this sort of scenario many times on systems I've inherited. Although there is a ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-gb/library/bb630352.aspx">date</a>')," type in SQL it's pretty rarely used. I think it only shipped in SQL Server with 2008 which may go some way to explaining this. Anyway, I digress..."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"valuation_date")," was read into a field in a C# application called ",Object(r.b)("inlineCode",{parentName:"p"},"ValuationDate")," which was of type ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-us/library/system.datetime.aspx">DateTime</a>'),". As the name suggests this is also a date with a time portion. After a travelling through various layers of application this ended up being serialized as JSON and sent across the wire where it became a JavaScript variable by the name of ",Object(r.b)("inlineCode",{parentName:"p"},"valuationDate")," which had the type ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>'),". Despite the deceptive name this is also, you guessed it, a date with a time portion. (Fine naming work there JavaScript!)"),Object(r.b)("p",null,"You can probably guess where I'm going with this... Despite our (cough) rock solid naming convention, the situation had arisen where actual datetimes had snuck in. That's right, in the wilds of production, records with ",Object(r.b)("inlineCode",{parentName:"p"},"valuation_date"),"s with time components had been spotted. My mission was to hunt them, kill them and stop them reproducing..."),Object(r.b)("h2",{id:"a-primitive-problem"},"A Primitive Problem"),Object(r.b)("p",null,"Dates is a sticky topic in many languages. As I mentioned, SQL Server has a ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-gb/library/bb630352.aspx">date</a>')," data type. C# has ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-gb/library/system.datetime.aspx">DateTime</a>'),". If you want to operate on Dates alone then you're best off talking looking at Jon Skeet's ",Object(r.b)("a",{parentName:"p",href:"http://nodatime.org/"},"NodaTime")," ","-"," though most people start with ",Object(r.b)("inlineCode",{parentName:"p"},"DateTime")," and stick with it. (After all, it's native.) As to JavaScript, well primitive-wise there's no alternative to ",Object(r.b)("inlineCode",{parentName:"p"},"Date")," ","-"," but ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="http://momentjs.com/">Moment.js</a>')," may help."),Object(r.b)("p",null,"My point is that it is a long standing issue in the development world. We represent data in types that aren't entirely meant for the purpose that they are used. It's not just restricted to dates, numbers have a comparable story around the issue of ",Object(r.b)("a",{parentName:"p",href:"http://csharpindepth.com/Articles/General/Decimal.aspx"},"decimals and doubles"),". As a result of data type issues, developers experience problems. Like the one I was facing."),Object(r.b)("h2",{id:"an-attribute-solution"},"An Attribute Solution"),Object(r.b)("p",null,"The source of the problem turned out to be the string JavaScript ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date constructor</a>')," in an earlier version of Internet Explorer. The fix was switching away from using the JavaScript Date constructor in favour of using Moment.js's more dependable ability to parse strings into dates. Happy days we're working once more! Some quick work to put together a SQL script to fix up the data and we have ourselves our patch!"),Object(r.b)("p",null,"But we didn't want to get bitten again. We wanted ourselves a little ",Object(r.b)("a",{parentName:"p",href:"http://dictionary.cambridge.org/dictionary/british/belt-and-braces"},"belts and braces"),". What do do? Hang on a minute, lads \u2013 I've got a great idea... It's ",Object(r.b)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute(v=vs.110).aspx">ValidationAttribute</a>')," time!"),Object(r.b)("p",null,"We whipped ourselves up an attribute that looked like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.ComponentModel.DataAnnotations;\nusing System.Globalization;\n\nnamespace My.Attributes\n{\n    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, Inherited = false, AllowMultiple = false)]\n    public class DateOnlyAttribute: ValidationAttribute\n    {\n        protected override ValidationResult IsValid(object value, ValidationContext validationContext)\n        {\n            if (value != null)\n            {\n                if (value is DateTime)\n                {\n                    // Date but not Time check\n                    var date = (DateTime) value;\n                    if (date.TimeOfDay != TimeSpan.Zero)\n                    {\n                        return new ValidationResult(date.ToString("O", CultureInfo.InvariantCulture) + " is not a date - it is a date with a time", new[] { validationContext.MemberName });\n                    }\n                }\n                else\n                {\n                    return new ValidationResult("DateOnlyAttribute can only be used on DateTime? and DateTime", new[] { validationContext.MemberName });\n                }\n            }\n\n            return ValidationResult.Success;\n        }\n    }\n}\n')),Object(r.b)("p",null,"This attribute does 2 things:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Most importantly it fails validation for any ",Object(r.b)("inlineCode",{parentName:"li"},"DateTime")," or ",Object(r.b)("inlineCode",{parentName:"li"},"DateTime?")," that includes a time portion. It only allows through DateTimes where the clock strikes midnight. It's optimised for Cinderella."),Object(r.b)("li",{parentName:"ol"},"It fails validation if the attribute is applied to any property which is not a ",Object(r.b)("inlineCode",{parentName:"li"},"DateTime")," or ",Object(r.b)("inlineCode",{parentName:"li"},"DateTime?"),".")),Object(r.b)("p",null,"You can decorate ",Object(r.b)("inlineCode",{parentName:"p"},"DateTime")," or ",Object(r.b)("inlineCode",{parentName:"p"},"DateTime?")," properties on your model with this attribute like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"namespace My.Models\n{\n    public class ImAModelYouKnowWhatIMean\n    {\n        public int Id { get; set; }\n\n        [DateOnlyAttribute]\n        public DateTime ValuationDate { get; set; }\n\n        // Other properties...\n    }\n}\n")),Object(r.b)("p",null,"And if you're using MVC (or anything that makes use of the validation data annotations) then you'll now find that you are nicely protected from DateTimes masquerading as dates. Should they show up you'll find that ",Object(r.b)("inlineCode",{parentName:"p"},"ModelState.IsValid")," is false and you can kick them to the curb with alacrity!"))}c.isMDXComponent=!0}}]);
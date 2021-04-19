(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1210:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=o.a.createContext({}),m=function(e){var t=o.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},c=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(a),c=n,h=d["".concat(r,".").concat(c)]||d[c]||p[c]||l;return a?o.a.createElement(h,i(i({ref:t},u),{},{components:a})):o.a.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var u=2;u<l;u++)r[u]=a[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}c.displayName="MDXCreateElement"},316:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(4),o=a(10),l=(a(0),a(1210)),r={title:"jQuery Validation Globalize hits 1.0",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Globalize","jQuery Validation"],hide_table_of_contents:!1},i={permalink:"/2015/10/05/jquery-validation-globalize-hits-10",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-10-05-jquery-validation-globalize-hits-10.md",source:"@site/blog/2015-10-05-jquery-validation-globalize-hits-10.md",title:"jQuery Validation Globalize hits 1.0",description:"This is just a quick post - the tl;dr is this: jQuery Validation Globalize has been ported to Globalize 1.x. Yay! In one of those twists of fate I'm not actually using this plugin in my day job anymore but I thought it might be useful to other people. So here you go. You can read more about this plugin in an older post and you can see a demo of it in action here.",date:"2015-10-05T00:00:00.000Z",formattedDate:"October 5, 2015",tags:[{label:"Globalize",permalink:"/tags/globalize"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"}],readingTime:2.855,truncated:!1,prevItem:{title:"The Names Have Been Changed...",permalink:"/2015/10/23/the-names-have-been-changed"},nextItem:{title:"Definitely Typed Shouldn't Exist",permalink:"/2015/09/23/authoring-npm-modules-with-typescript"}},s=[],u={toc:s};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This is just a quick post - the tl;dr is this: jQuery Validation Globalize has been ported to Globalize 1.x. Yay! In one of those twists of fate I'm not actually using this plugin in my day job anymore but I thought it might be useful to other people. So here you go. You can read more about this plugin in an ",Object(l.b)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2012/09/globalize-and-jquery-validate.html"},"older post")," and you can see a demo of it in action ",Object(l.b)("a",{parentName:"p",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/AdvancedDemo/Globalize.html"},"here"),"."),Object(l.b)("p",null," The code did not change drastically - essentially it was just a question of swapping ",Object(l.b)("inlineCode",{parentName:"p"},"parseFloat")," for ",Object(l.b)("inlineCode",{parentName:"p"},"parseNumber")," and ",Object(l.b)("inlineCode",{parentName:"p"},"parseDate")," for a slightly different ",Object(l.b)("inlineCode",{parentName:"p"},"parseDate"),". So, we went from this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"(function ($, Globalize) {\n\n    // Clone original methods we want to call into\n    var originalMethods = {\n        min: $.validator.methods.min,\n        max: $.validator.methods.max,\n        range: $.validator.methods.range\n    };\n\n    // Tell the validator that we want numbers parsed using Globalize\n\n    $.validator.methods.number = function (value, element) {\n        var val = Globalize.parseFloat(value);\n        return this.optional(element) || ($.isNumeric(val));\n    };\n\n    // Tell the validator that we want dates parsed using Globalize\n\n    $.validator.methods.date = function (value, element) {\n        var val = Globalize.parseDate(value);\n        return this.optional(element) || (val instanceof Date);\n    };\n\n    // Tell the validator that we want numbers parsed using Globalize, \n    // then call into original implementation with parsed value\n\n    $.validator.methods.min = function (value, element, param) {\n        var val = Globalize.parseFloat(value);\n        return originalMethods.min.call(this, val, element, param);\n    };\n\n    $.validator.methods.max = function (value, element, param) {\n        var val = Globalize.parseFloat(value);\n        return originalMethods.max.call(this, val, element, param);\n    };\n\n    $.validator.methods.range = function (value, element, param) {\n        var val = Globalize.parseFloat(value);\n        return originalMethods.range.call(this, val, element, param);\n    };\n\n}(jQuery, Globalize));\n")),Object(l.b)("p",null,"To this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'(function ($, Globalize) {\n\n    // Clone original methods we want to call into\n    var originalMethods = {\n        min: $.validator.methods.min,\n        max: $.validator.methods.max,\n        range: $.validator.methods.range\n    };\n\n    // Globalize options - initially just the date format used for parsing\n    // Users can customise this to suit them\n    $.validator.methods.dateGlobalizeOptions = { dateParseFormat: { skeleton: "yMd" } };\n\n    // Tell the validator that we want numbers parsed using Globalize\n    $.validator.methods.number = function (value, element) {\n        var val = Globalize.parseNumber(value);\n        return this.optional(element) || ($.isNumeric(val));\n    };\n\n    // Tell the validator that we want dates parsed using Globalize\n    $.validator.methods.date = function (value, element) {\n        var val = Globalize.parseDate(value, $.validator.methods.dateGlobalizeOptions.dateParseFormat);\n        return this.optional(element) || (val instanceof Date);\n    };\n\n    // Tell the validator that we want numbers parsed using Globalize,\n    // then call into original implementation with parsed value\n\n    $.validator.methods.min = function (value, element, param) {\n        var val = Globalize.parseNumber(value);\n        return originalMethods.min.call(this, val, element, param);\n    };\n\n    $.validator.methods.max = function (value, element, param) {\n        var val = Globalize.parseNumber(value);\n        return originalMethods.max.call(this, val, element, param);\n    };\n\n    $.validator.methods.range = function (value, element, param) {\n        var val = Globalize.parseNumber(value);\n        return originalMethods.range.call(this, val, element, param);\n    };\n\n}(jQuery, Globalize));\n')),Object(l.b)("p",null,"All of which is pretty self-explanatory. The only thing I'd like to draw out is that Globalize 0.1.x didn't force you to specify a date parsing format and, as I recall, would attempt various methods of parsing. For that reason jQuery Validation Globalize 1.0 exposes a ",Object(l.b)("inlineCode",{parentName:"p"},"$.validator.methods.dateGlobalizeOptions")," which allows you to specify the data parsing format you want to use. This means, should you be using a different format than the out of the box one then you can tweak it like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"$.validator.methods.dateGlobalizeOptions.dateParseFormat = // your data parsing format goes here...\n")),Object(l.b)("p",null,"Theoretically, this functionality could be tweaked to allow the user to specify multiple possible date parsing formats to attempt. I'm not certain if that's a good idea though, so it remains unimplemented for now."))}m.isMDXComponent=!0}}]);
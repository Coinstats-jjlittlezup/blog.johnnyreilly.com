"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[10473],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,c=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return a?n.createElement(c,r(r({ref:t},m),{},{components:a})):n.createElement(c,r({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50933:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return m},toc:function(){return p},default:function(){return h}});var n=a(87462),o=a(63366),l=(a(67294),a(3905)),r=["components"],i={title:"jQuery Validation Globalize hits 1.0",authors:"johnnyreilly",tags:["Globalize","jQuery Validation"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2015/10/05/jquery-validation-globalize-hits-10",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-10-05-jquery-validation-globalize-hits-10.md",source:"@site/blog/2015-10-05-jquery-validation-globalize-hits-10.md",title:"jQuery Validation Globalize hits 1.0",description:"This is just a quick post - the tl;dr is this: jQuery Validation Globalize has been ported to Globalize 1.x. Yay! In one of those twists of fate I'm not actually using this plugin in my day job anymore but I thought it might be useful to other people. So here you go. You can read more about this plugin in an older post and you can see a demo of it in action here.",date:"2015-10-05T00:00:00.000Z",formattedDate:"October 5, 2015",tags:[{label:"Globalize",permalink:"/tags/globalize"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"}],readingTime:2.855,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"The Names Have Been Changed...",permalink:"/2015/10/23/the-names-have-been-changed"},nextItem:{title:"Definitely Typed Shouldn't Exist",permalink:"/2015/09/23/authoring-npm-modules-with-typescript"}},m={authorsImageUrls:[void 0]},p=[],d={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is just a quick post - the tl;dr is this: jQuery Validation Globalize has been ported to Globalize 1.x. Yay! In one of those twists of fate I'm not actually using this plugin in my day job anymore but I thought it might be useful to other people. So here you go. You can read more about this plugin in an ",(0,l.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2012/09/globalize-and-jquery-validate.html"},"older post")," and you can see a demo of it in action ",(0,l.kt)("a",{parentName:"p",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/AdvancedDemo/Globalize.html"},"here"),"."),(0,l.kt)("p",null," The code did not change drastically - essentially it was just a question of swapping ",(0,l.kt)("inlineCode",{parentName:"p"},"parseFloat")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"parseNumber")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"parseDate")," for a slightly different ",(0,l.kt)("inlineCode",{parentName:"p"},"parseDate"),". So, we went from this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"(function ($, Globalize) {\n\n    // Clone original methods we want to call into\n    var originalMethods = {\n        min: $.validator.methods.min,\n        max: $.validator.methods.max,\n        range: $.validator.methods.range\n    };\n\n    // Tell the validator that we want numbers parsed using Globalize\n\n    $.validator.methods.number = function (value, element) {\n        var val = Globalize.parseFloat(value);\n        return this.optional(element) || ($.isNumeric(val));\n    };\n\n    // Tell the validator that we want dates parsed using Globalize\n\n    $.validator.methods.date = function (value, element) {\n        var val = Globalize.parseDate(value);\n        return this.optional(element) || (val instanceof Date);\n    };\n\n    // Tell the validator that we want numbers parsed using Globalize, \n    // then call into original implementation with parsed value\n\n    $.validator.methods.min = function (value, element, param) {\n        var val = Globalize.parseFloat(value);\n        return originalMethods.min.call(this, val, element, param);\n    };\n\n    $.validator.methods.max = function (value, element, param) {\n        var val = Globalize.parseFloat(value);\n        return originalMethods.max.call(this, val, element, param);\n    };\n\n    $.validator.methods.range = function (value, element, param) {\n        var val = Globalize.parseFloat(value);\n        return originalMethods.range.call(this, val, element, param);\n    };\n\n}(jQuery, Globalize));\n")),(0,l.kt)("p",null,"To this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'(function ($, Globalize) {\n\n    // Clone original methods we want to call into\n    var originalMethods = {\n        min: $.validator.methods.min,\n        max: $.validator.methods.max,\n        range: $.validator.methods.range\n    };\n\n    // Globalize options - initially just the date format used for parsing\n    // Users can customise this to suit them\n    $.validator.methods.dateGlobalizeOptions = { dateParseFormat: { skeleton: "yMd" } };\n\n    // Tell the validator that we want numbers parsed using Globalize\n    $.validator.methods.number = function (value, element) {\n        var val = Globalize.parseNumber(value);\n        return this.optional(element) || ($.isNumeric(val));\n    };\n\n    // Tell the validator that we want dates parsed using Globalize\n    $.validator.methods.date = function (value, element) {\n        var val = Globalize.parseDate(value, $.validator.methods.dateGlobalizeOptions.dateParseFormat);\n        return this.optional(element) || (val instanceof Date);\n    };\n\n    // Tell the validator that we want numbers parsed using Globalize,\n    // then call into original implementation with parsed value\n\n    $.validator.methods.min = function (value, element, param) {\n        var val = Globalize.parseNumber(value);\n        return originalMethods.min.call(this, val, element, param);\n    };\n\n    $.validator.methods.max = function (value, element, param) {\n        var val = Globalize.parseNumber(value);\n        return originalMethods.max.call(this, val, element, param);\n    };\n\n    $.validator.methods.range = function (value, element, param) {\n        var val = Globalize.parseNumber(value);\n        return originalMethods.range.call(this, val, element, param);\n    };\n\n}(jQuery, Globalize));\n')),(0,l.kt)("p",null,"All of which is pretty self-explanatory. The only thing I'd like to draw out is that Globalize 0.1.x didn't force you to specify a date parsing format and, as I recall, would attempt various methods of parsing. For that reason jQuery Validation Globalize 1.0 exposes a ",(0,l.kt)("inlineCode",{parentName:"p"},"$.validator.methods.dateGlobalizeOptions")," which allows you to specify the data parsing format you want to use. This means, should you be using a different format than the out of the box one then you can tweak it like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"$.validator.methods.dateGlobalizeOptions.dateParseFormat = // your data parsing format goes here...\n")),(0,l.kt)("p",null,"Theoretically, this functionality could be tweaked to allow the user to specify multiple possible date parsing formats to attempt. I'm not certain if that's a good idea though, so it remains unimplemented for now."))}h.isMDXComponent=!0}}]);
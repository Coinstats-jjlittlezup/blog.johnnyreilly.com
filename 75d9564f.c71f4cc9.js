(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{495:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),i=(n(0),n(966)),a={title:"Rolling your own confirm mechanism using Promises and jQuery UI",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Q","jQuery UI","promises","confirm"],hide_table_of_contents:!1},l={permalink:"/2013/11/26/rolling-your-own-confirm-mechanism",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-11-26-rolling-your-own-confirm-mechanism.md",source:"@site/blog/2013-11-26-rolling-your-own-confirm-mechanism.md",description:"It is said that a picture speaks a thousand words. So here's two:",date:"2013-11-26T00:00:00.000Z",tags:[{label:"Q",permalink:"/tags/q"},{label:"jQuery UI",permalink:"/tags/j-query-ui"},{label:"promises",permalink:"/tags/promises"},{label:"confirm",permalink:"/tags/confirm"}],title:"Rolling your own confirm mechanism using Promises and jQuery UI",readingTime:4.405,truncated:!1,prevItem:{title:"Simple fading in and out using CSS transitions and classes",permalink:"/2013/12/04/simple-fading-in-and-out-using-css-transitions"},nextItem:{title:"TypeScript: Don't forget Build Action for Implicit Referencing...",permalink:"/2013/11/04/typescript-dont-forget-build-action-for-implicit-referencing"}},c=[{value:"Making confirm 2.0",id:"making-confirm-20",children:[]},{value:"Going from <code>window.confirm</code> to <code>confirmDialog</code>",id:"going-from-windowconfirm-to-confirmdialog",children:[]},{value:"And finally a demo...",id:"and-finally-a-demo",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It is said that a picture speaks a thousand words. So here's two:"),Object(i.b)("p",null," ",Object(i.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-zZvqgKiP9CI/UpN7YtkFbnI/AAAAAAAAAe4/OUpA5uVpCl4/s400/Ugly.png",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-VVzJ7B0Uhys/UpN7vnX7diI/AAAAAAAAAe8/i3hlMT1ECB8/s400/Pretty.png",alt:null})),Object(i.b)("p",null,"That's right, we're here to talk about the ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window.confirm"},"confirm")," dialog. Or, more specifically, how we can make our own confirm dialog."),Object(i.b)("p",null,"JavaScript in the browser has had the ",Object(i.b)("inlineCode",{parentName:"p"},"window.confirm"),' method for the longest time. This method takes a string as an argument and displays it in the form of a dialog, giving the user the option to click on either an "OK" or a "Cancel" button. If the user clicks "OK" the method returns ',Object(i.b)("inlineCode",{parentName:"p"},"true"),', if the user clicks "Cancel" the method returns ',Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"window.confirm")," is wonderful in one way - it has a simple API which is easy to grok. But regardless of the browser, ",Object(i.b)("inlineCode",{parentName:"p"},"window.confirm")," is always as ugly as sin. Look at the first picture in this blog post; hideous. Or, put more dispassionately, it's not terribly configurable; want to change the button text? You can't. Want to change the styling of the dialog? You can't. You get the picture."),Object(i.b)("h2",{id:"making-confirm-20"},"Making confirm 2.0"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://jqueryui.com/dialog/#modal-confirmation"},"jQuery UI's dialog")," has been around for a long time. I've been using it for a long time. But, if you look at the API, you'll see it works in a very different way to ",Object(i.b)("inlineCode",{parentName:"p"},"window.confirm")," ","-"," basically it's all about the callbacks. My intention was to create a mechanism which allowed me to prompt the user with jQuery UI's tried and tested dialog, but to expose it in a way that embraced the simplicity of the ",Object(i.b)("inlineCode",{parentName:"p"},"window.confirm")," API."),Object(i.b)("p",null,"How to do this? Promises! To quote ",Object(i.b)("a",{parentName:"p",href:"http://martinfowler.com/bliki/JavascriptPromise.html"},"Martin Fowler")," (makes you look smart when you do that):"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},'"In Javascript, promises are objects which represent the pending result of an asynchronous operation. You can use these to schedule further activity after the asynchronous operation has completed by supplying a callback."'))),Object(i.b)("p",null,'When we show our dialog we are in asynchronous land; waiting for the user to click "OK" or "Cancel". When they do, we need to act on their response. So if our custom confirm dialog returns a promise of a boolean (',Object(i.b)("inlineCode",{parentName:"p"},"true"),' when the users click "OK", ',Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise) then that should be exactly what we need. I'm going to use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kriskowal/q"},"Q")," for promises. (Nothing particularly special about Q - it's one of many ",Object(i.b)("a",{parentName:"p",href:"https://github.com/promises-aplus/promises-spec/blob/master/implementations.md"},"Promises / A+")," compliant implementations available.)"),Object(i.b)("p",null,"Here's my custom confirm dialog:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'/**\n  * Show a "confirm" dialog to the user (using jQuery UI\'s dialog)\n  *\n  * @param {string} message The message to display to the user\n  * @param {string} okButtonText OPTIONAL - The OK button text, defaults to "Yes"\n  * @param {string} cancelButtonText OPTIONAL - The Cancel button text, defaults to "No"\n  * @param {string} title OPTIONAL - The title of the dialog box, defaults to "Confirm..."\n  * @returns {Q.Promise<boolean>} A promise of a boolean value\n  */\nfunction confirmDialog(message, okButtonText, cancelButtonText, title) {\n    okButtonText = okButtonText || "Yes";\n    cancelButtonText = cancelButtonText || "No";\n    title = title || "Confirm...";\n\n    var deferred = Q.defer();\n    $(\'<div title="\' + title + \'">\' + message + \'</div>\').dialog({\n        modal: true,\n        buttons: [{\n            // The OK button\n            text: okButtonText,\n            click: function () {\n                // Resolve the promise as true indicating the user clicked "OK"\n                deferred.resolve(true);\n                $(this).dialog("close");\n            }\n        }, {\n            // The Cancel button\n            text: cancelButtonText,\n            click: function () {\n                $(this).dialog("close");\n            }\n        }],\n        close: function (event, ui) {\n            // Destroy the jQuery UI dialog and remove it from the DOM\n            $(this).dialog("destroy").remove();\n            \n            // If the promise has not yet been resolved (eg the user clicked the close icon) \n            // then resolve the promise as false indicating the user did *not* click "OK"\n            if (deferred.promise.isPending()) {\n                deferred.resolve(false);\n            }\n        }\n    });\n\n    return deferred.promise;\n}\n')),Object(i.b)("p",null,"What's happening here? Well first of all, if ",Object(i.b)("inlineCode",{parentName:"p"},"okButtonText"),", ",Object(i.b)("inlineCode",{parentName:"p"},"cancelButtonText")," or ",Object(i.b)("inlineCode",{parentName:"p"},"title")," have false-y values then they are initialised to defaults. Next, we create a deferred object with Q. Then we create our modal dialog using jQuery UI. There's a few things worth noting about this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We're not dependent on the dialog markup being in our HTML from the off. We create a brand new element which gets added to the DOM when the dialog is created. (I draw attention to this as the jQuery UI dialog documentation doesn't mention that you can use this approach - and frankly I prefer it.)"),Object(i.b)("li",{parentName:"ul"},'The "OK" and "Cancel" buttons are initialised with the string values stored in ',Object(i.b)("inlineCode",{parentName:"li"},"okButtonText")," and ",Object(i.b)("inlineCode",{parentName:"li"},"cancelButtonText"),'. So by default, "Yes" and "No".'),Object(i.b)("li",{parentName:"ul"},'If the user clicks the "OK" button then the promise is resolved with a value of ',Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},"If the dialog closes and the promise has not been resolved then the promise is resolved with a value of ",Object(i.b)("inlineCode",{parentName:"li"},"false"),'. This covers people clicking on the "Cancel" button as well as closing the dialog through other means.')),Object(i.b)("p",null,"Finally we return the promise from our deferred object."),Object(i.b)("h2",{id:"going-from-windowconfirm-to-confirmdialog"},"Going from ",Object(i.b)("inlineCode",{parentName:"h2"},"window.confirm")," to ",Object(i.b)("inlineCode",{parentName:"h2"},"confirmDialog")),Object(i.b)("p",null,"It's very simple to move from using ",Object(i.b)("inlineCode",{parentName:"p"},"window.confirm")," to ",Object(i.b)("inlineCode",{parentName:"p"},"confirmDialog"),". Take this example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'if (window.confirm("Are you sure?")) {\n    // Do something\n}\n')),Object(i.b)("p",null,"Becomes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'confirmDialog("Are you sure?").then(function(confirmed) {\n    if (confirmed) {\n        // Do something\n    }\n});\n')),Object(i.b)("p",null,"There's no more to it than that."),Object(i.b)("h2",{id:"and-finally-a-demo"},"And finally a demo..."),Object(i.b)("p",null,'With the JSFiddle below you can create your own custom dialogs and see the result of clicking on either the "OK" or "Cancel" buttons.'),Object(i.b)("iframe",{width:"100%",height:"500",src:"http://jsfiddle.net/johnny_reilly/ARWL5/embedded/result,js,html,css",allowFullScreen:"allowFullScreen",frameBorder:"0"}))}u.isMDXComponent=!0},966:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,b=m["".concat(a,".").concat(d)]||m[d]||p[d]||i;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
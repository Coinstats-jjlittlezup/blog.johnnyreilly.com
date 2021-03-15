(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(h,l(l({ref:t},u),{},{components:n})):a.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},565:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(1166)),o={title:"Creating Angular UI Routes in the Controller",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["ng-href","UI Router","Angular","ui-sref"],hide_table_of_contents:!1},l={permalink:"/2016/02/29/creating-angular-ui-routes-in-controller",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-02-29-creating-angular-ui-routes-in-controller.md",source:"@site/blog/2016-02-29-creating-angular-ui-routes-in-controller.md",description:"So you're creating a link with the Angular UI Router. You're passing more than a few parameters and it's getting kinda big. Something like this:",date:"2016-02-29T00:00:00.000Z",formattedDate:"February 29, 2016",tags:[{label:"ng-href",permalink:"/tags/ng-href"},{label:"UI Router",permalink:"/tags/ui-router"},{label:"Angular",permalink:"/tags/angular"},{label:"ui-sref",permalink:"/tags/ui-sref"}],title:"Creating Angular UI Routes in the Controller",readingTime:1.865,truncated:!1,prevItem:{title:"TFS 2012 meet PowerShell, Karma and BuildNumber",permalink:"/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber"},nextItem:{title:"Visual Studio, tsconfig.json and external TypeScript compilation",permalink:"/2016/02/19/visual-studio-tsconfigjson-and-external"}},c=[{value:"<code>ui-sref</code> in the Controller",id:"ui-sref-in-the-controller",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"So you're creating a link with the Angular UI Router. You're passing more than a few parameters and it's getting kinda big. Something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<a class="contains-icon" \n      ui-sref="Entity.Edit({ entityId: (vm.selectedEntityId ? vm.selectedEntityId: null), initialData: vm.initialData })">\n        <i class="fa fa-pencil"></i>Edit\n   </a>\n')),Object(i.b)("p",null,"See? It's too long to fit on the screen without wrapping. It's clearly mad and bad."),Object(i.b)("p",null,"Generally I try to keep the logic in a view to a minimum. It makes the view harder to read, it makes behaviour of the app harder to reason about. Also, it's not testable and (if you're using some kind of static typing like TypeScript) it is entirely out of the realms that a compiler can catch. So what to do? Move the URL generation to the controller. That's what I decided to do after I had a typo in my view which I didn't catch until post-commit."),Object(i.b)("h2",{id:"ui-sref-in-the-controller"},Object(i.b)("inlineCode",{parentName:"h2"},"ui-sref")," in the Controller"),Object(i.b)("p",null,"Actually, that's not exactly what you want to do. If you look at the ",Object(i.b)("a",{parentName:"p",href:"http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref"},"Angular UI Router docs")," you will see that ",Object(i.b)("inlineCode",{parentName:"p"},"ui-sref")," is:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"...a directive that binds a link (",Object(i.b)("inlineCode",{parentName:"p"},"&lt;a&gt;")," tag) to a state. If the state has an associated URL, the directive will automatically generate & update the href attribute via the ",Object(i.b)("a",{parentName:"p",href:"http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state#methods_href"},Object(i.b)("inlineCode",{parentName:"a"},"$state.href()"))," method.")),Object(i.b)("p",null,"So what we actually want to do is use the ",Object(i.b)("inlineCode",{parentName:"p"},"$state.href()")," method in our controller. To take our example above we'll create another method on our controller called ",Object(i.b)("inlineCode",{parentName:"p"},"getEditUrl")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'export class EntityController {\n\n    $state: angular.ui.IStateService;\n\n    static $inject = ["$state"];\n    constructor($state: angular.ui.IStateService) {\n        this.$state = $state;\n    }\n\n    //... Other stuff\n\n    getEditUrl() {\n        return this.$state.href("Entity.Edit", { \n            selectedEntityId: this.selectedEntityId ? this.selectedEntityId: null, \n            initialData: this.initialData \n        });\n    }\n}\n')),Object(i.b)("p",null,"You can see I'm using TypeScript here; but feel free to strip out the type annotations and go with raw ES6 classes; that'll still give you testability if not static typing."),Object(i.b)("p",null,"Now we've added the ",Object(i.b)("inlineCode",{parentName:"p"},"getEditUrl")," method we just need to reference it in our view:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<a class="contains-icon" ng-href="{{vm.getEditUrl()}}"><i class="fa fa-pencil"></i>Edit</a>\n')),Object(i.b)("p",null,"Note we've ditched usage of the ",Object(i.b)("inlineCode",{parentName:"p"},"ui-sref")," directive and gone with Angular's native ",Object(i.b)("inlineCode",{parentName:"p"},'<a href="https://docs.angularjs.org/api/ng/directive/ngHref">ng-href</a>'),". Within that directive we execute our ",Object(i.b)("inlineCode",{parentName:"p"},"getEditUrl")," as an expression which gives us our route. As a bonus, our view is much less cluttered and comprehensible as a result. How lovely."))}s.isMDXComponent=!0}}]);
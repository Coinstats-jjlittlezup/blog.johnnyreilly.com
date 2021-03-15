(window.webpackJsonp=window.webpackJsonp||[]).push([[933],{1166:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return t?r.a.createElement(b,c(c({ref:n},s),{},{components:t})):r.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},257:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(8),i=(t(0),t(1166)),a={title:"EF Core 3.1 breaks left join with no navigation property",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},c={permalink:"/2020/01/02/ef-core-31-breaks-left-join-with-no-navigation-property",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-01-02-ef-core-31-breaks-left-join-with-no-navigation-property.md",source:"@site/blog/2020-01-02-ef-core-31-breaks-left-join-with-no-navigation-property.md",description:"Just recently my team took on the challenge of upgrading our codebase from .NET Core 2.2 to .NET Core 3.1. Along the way we encountered a quirky issue which caused us much befuddlement. Should you be befuddled too, then maybe this can help you.",date:"2020-01-02T00:00:00.000Z",formattedDate:"January 2, 2020",tags:[],title:"EF Core 3.1 breaks left join with no navigation property",readingTime:2.375,truncated:!1,prevItem:{title:"LICENSE to kill your PWA",permalink:"/2020/01/21/license-to-kill-your-pwa"},nextItem:{title:"Automating Teams Notifications",permalink:"/2019/12/18/automating-teams-notifications-recently"}},l=[{value:"Join me!",id:"join-me",children:[]},{value:"Navigation properties to the rescue!",id:"navigation-properties-to-the-rescue",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Just recently my team took on the challenge of upgrading our codebase from .NET Core 2.2 to .NET Core 3.1. Along the way we encountered a quirky issue which caused us much befuddlement. Should you be befuddled too, then maybe this can help you."),Object(i.b)("p",null," Whilst running our app, we started encountering an error with an Entity Framework Query that looked like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"var stuffWeCareAbout = await context.Things\n    .Include(thing => thing.ThisIsFine)\n    .Include(thing => thing.Problematic)\n    .Where(thing => thing.CreatedOn > startFromThisTime && thing.CreatedOn < endAtThisTime)\n    .OrderByDescending(thing => thing.CreatedOn)\n    .ToArrayAsync();\n")),Object(i.b)("h2",{id:"join-me"},"Join me!"),Object(i.b)("p",null,"As EF Core tried to join from the ",Object(i.b)("inlineCode",{parentName:"p"},"Things")," table to the ",Object(i.b)("inlineCode",{parentName:"p"},"Problematic")," table (some obfuscation in table names here), that which worked in .NET Core 2.2 was ",Object(i.b)("em",{parentName:"p"},"not")," working in .NET Core 3.1. Digging into the issue, we discovered EF Core was generating an invalid ",Object(i.b)("inlineCode",{parentName:"p"},"LEFT JOIN"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"fail: Microsoft.EntityFrameworkCore.Database.Command[20102]\n      Failed executing DbCommand (18ms) [Parameters=[@__startFromThisTime_0='?' (DbType = DateTime2), @__endAtThisTime_1='?' (DbType = DateTime2)], CommandType='Text', CommandTimeout='30']\n      SELECT [o].[ThingId], [o].[AnonymousId], [o].[CreatedOn],  [o].[Status], [o].[UpdatedOn], [o0].[Id], [o0].[ThingId], [o0].[Name], [o1].[ThingId], [o1].[Status], [o1].[CreatedOn], [o1].[ThingThingId], [o1].[SentOn]\n      FROM [Things] AS [o]\n      LEFT JOIN [ThisIsFines] AS [o0] ON [o].[ThingId] = [o0].[ThingId]\n      LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]\n      WHERE ([o].[CreatedOn] @__startFromThisTime_0) AND ([o].[CreatedOn] < @__endAtThisTime_1)\n      ORDER BY [o].[CreatedOn] DESC, [o].[ThingId], [o1].[ThingId], [o1].[Status]\nMicrosoft.EntityFrameworkCore.Database.Command: Error: Failed executing DbCommand (18ms) [Parameters=[@__startFromThisTime_0='?' (DbType = DateTime2), @__endAtThisTime_1='?' (DbType = DateTime2)], CommandType='Text', CommandTimeout='30']\nSELECT [o].[ThingId], [o].[AnonymousId], [o].[CreatedOn], [o].[Status], [o].[UpdatedOn], [o0].[Id], [o0].[ThingId], [o0].[Name], [o1].[ThingId], [o1].[Status], [o1].[CreatedOn], [o1].[ThingThingId], [o1].[SentOn]\nFROM [Things] AS [o]\nLEFT JOIN [ThisIsFines] AS [o0] ON [o].[ThingId] = [o0].[ThingId]\nLEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]\nWHERE ([o].[CreatedOn] @__startFromThisTime_0) AND ([o].[CreatedOn] < @__endAtThisTime_1)\nORDER BY [o].[CreatedOn] DESC, [o].[ThingId], [o1].[ThingId], [o1].[Status]\n")),Object(i.b)("p",null,"Do you see it? Probably not; it took us a while too... The issue lay here:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]\n")),Object(i.b)("p",null,"This should actually have been:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingId]\n")),Object(i.b)("p",null,"For some reason EF Core was looking for ",Object(i.b)("inlineCode",{parentName:"p"},"ThingThingId")," where it should have looked for ",Object(i.b)("inlineCode",{parentName:"p"},"ThingId"),". But why?"),Object(i.b)("h2",{id:"navigation-properties-to-the-rescue"},"Navigation properties to the rescue!"),Object(i.b)("p",null,"This was the ",Object(i.b)("inlineCode",{parentName:"p"},"Problematic")," class:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\n\nnamespace Treasury.Data.Entities\n{\n    public class Problematic\n    {\n        [ForeignKey("Thing")]\n        [Required]\n        public Guid ThingId { get; set; }\n        [Required]\n        public DateTime CreatedOn { get; set; }\n        public DateTime SentOn { get; set; }\n    }\n}\n')),Object(i.b)("p",null,"If you look closely you'll see it has a ",Object(i.b)("inlineCode",{parentName:"p"},"ForeignKey")," but ",Object(i.b)("em",{parentName:"p"},"no")," accompanying Navigation property. So let's add one:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\n\nnamespace Our.App\n{\n    public class Problematic\n    {\n        [ForeignKey("Thing")]\n        [Required]\n        public Guid ThingId { get; set; }\n        [Required]\n        public DateTime CreatedOn { get; set; }\n        public DateTime SentOn { get; set; }\n\n        /* THIS NAVIGATION PROPERTY IS WHAT WE NEEDED!!! */\n        public virtual Thing Thing { get; set; }\n    }\n}\n')),Object(i.b)("p",null,"With this in place our app starts generating the SQL we need."))}u.isMDXComponent=!0}}]);
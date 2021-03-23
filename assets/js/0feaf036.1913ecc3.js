(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,b=u["".concat(a,".").concat(h)]||u[h]||m[h]||o;return n?i.a.createElement(b,l(l({ref:t},c),{},{components:n})):i.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(4),i=n(10),o=(n(0),n(1186)),a={title:"Back to the Future with Code First Migrations",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Emmett Brown","Entity Framework","Code First Migrations"],hide_table_of_contents:!1},l={permalink:"/2015/06/19/Back-to-the-Future-with-Code-First-Migrations",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations.md",source:"@site/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations.md",description:"Code First Migrations. They look a little like this in Visual Studio:",date:"2015-06-19T00:00:00.000Z",formattedDate:"June 19, 2015",tags:[{label:"Emmett Brown",permalink:"/tags/emmett-brown"},{label:"Entity Framework",permalink:"/tags/entity-framework"},{label:"Code First Migrations",permalink:"/tags/code-first-migrations"}],title:"Back to the Future with Code First Migrations",readingTime:2.26,truncated:!1,prevItem:{title:"npm please stop hurting Visual Studio",permalink:"/2015/06/29/npm-please-stop-hurting-visual-studio"},nextItem:{title:"Angular UI Bootstrap Datepicker Weirdness",permalink:"/2015/05/23/angular-ui-bootstrap-datepicker-weirdness"}},s=[{value:"Great Scott! It&#39;s clearly filename driven",id:"great-scott-its-clearly-filename-driven",children:[]},{value:"Whoa, this is heavy! Gimme the project file",id:"whoa-this-is-heavy-gimme-the-project-file",children:[]},{value:"Designer.cs... Your kids are gonna love it",id:"designercs-your-kids-are-gonna-love-it",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Code First Migrations. They look a little like this in Visual Studio:"),Object(o.b)("p",null," ",Object(o.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-yTYSEsaVrT4/VYQBQrYVOoI/AAAAAAAAA2E/lNeZUc59gKc/s400/Migrations.png",alt:null})),Object(o.b)("p",null,"The thing I want you to notice about the image above is not the pithily named migrations. It isn't the natty opacity on everything but the migration files (which I can assure you took me to the very limits of my ",Object(o.b)("a",{parentName:"p",href:"http://www.gimp.org/"},"GIMP")," expertise). No, whilst exciting in themselves what I want you to think about is ",Object(o.b)("em",{parentName:"p"},"the order in which migrations are applied"),". Essentially how the ",Object(o.b)("inlineCode",{parentName:"p"},"__MigrationHistory")," table in SQL Server ends up being populated in this manner:"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-YWHwxvSeBUg/VYQEBPQCkAI/AAAAAAAAA2U/zZfPoosjyvo/s640/MigrationHistory.png",alt:null})),Object(o.b)("p",null,"Because, myself, I didn't really think about this until it came time for me to try and change the ordering of some migrations manually. Do you know how migrations end up the order they do? I bet you don't. But either way, let's watch and see what happens to the pre-enlightenment me as I attempt to take a migration which appears ",Object(o.b)("em",{parentName:"p"},"before")," a migration I have created locally and move it to ",Object(o.b)("em",{parentName:"p"},"after")," that same migration."),Object(o.b)("h2",{id:"great-scott-its-clearly-filename-driven"},"Great Scott! It's clearly filename driven"),Object(o.b)("p",null,"That's right - it's blindingly obvious to me. All I need do is take the migration I want to move forwards in time and rename it in Visual Studio. So take our old migration (\"2014 is so pass\xe9 darling\"):"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-bN_-9vlXed0/VYQG76jMOMI/AAAAAAAAA2c/kddjFvDeMv0/s400/Screenshot%2B2015-06-19%2B13.07.50.png",alt:null})),Object(o.b)("p",null,'And rename it to make it new and shiny ("2015! Gorgeous - I love it sweetie!"):'),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-9fmt1AGUiHI/VYQHY6Nvb7I/AAAAAAAAA2k/FpJYUAVr7E4/s400/Screenshot%2B2015-06-19%2B13.08.46.png",alt:null})),Object(o.b)("p",null,"Perfection right? Wrong! What you've done makes not the slightest jot of difference."),Object(o.b)("h2",{id:"whoa-this-is-heavy-gimme-the-project-file"},"Whoa, this is heavy! Gimme the project file"),Object(o.b)("p",null,"How could I be so dim? I mean it makes perfect sense - before the days of ",Object(o.b)("a",{parentName:"p",href:"http://blog.icanmakethiswork.io/2015/02/hey-tsconfigjson-where-have-you-been.html"},"TypeScript's tsconfig.json ")," the default ordering of ",Object(o.b)("inlineCode",{parentName:"p"},"*.ts")," files being passed to the TypeScript compiler was determined by the ordering of the ",Object(o.b)("inlineCode",{parentName:"p"},"*.ts")," files in the ",Object(o.b)("inlineCode",{parentName:"p"},".csproj")," file. It must be the same for Code First Migrations."),Object(o.b)("p",null,"So, simply spin up ",Object(o.b)("a",{parentName:"p",href:"https://notepad-plus-plus.org/"},"Notepad++")," and let's play hack the XML until each file is referenced in the required order."),Object(o.b)("p",null,"Well, I'm glad we sorted that out. A quick test to reassure myself of my astuteness. Drum roll.... Fail!! Things are just as they were. Shame on you John Reilly, shame on you."),Object(o.b)("h2",{id:"designercs-your-kids-are-gonna-love-it"},"Designer.cs... Your kids are gonna love it"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-pPdPAw6Ov5A/VYQPKPBKwNI/AAAAAAAAA20/-lJvO9PPIek/s640/Screenshot%2B2015-06-19%2B13.35.40.png",alt:null})),Object(o.b)("p",null,"I want you to look very carefully at this and tell me what you see. We're looking at the mysterious ",Object(o.b)("inlineCode",{parentName:"p"},"201508121401253_AddSagacityToSage.Designer.cs")," file that sits underneath the main ",Object(o.b)("inlineCode",{parentName:"p"},"201508121401253_AddSagacityToSage.cs")," file. What could it be.... Give in?"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"IMigrationMetadata.Id")," property is returning ",Object(o.b)("inlineCode",{parentName:"p"},"<u>201408121401253</u>_AddSagacityToSage"),". That is the ",Object(o.b)("em",{parentName:"p"},"old")," date! Remember? The pass\xe9 one. If you change that property to line up with the file name change you're done. It works."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/en/9/97/Doc_Brown.JPG",alt:null})),Object(o.b)("p",null,"Let's say it together: \"Automatic Migrations? Where we're going, we don't need Automatic Migrations.\""))}p.isMDXComponent=!0}}]);
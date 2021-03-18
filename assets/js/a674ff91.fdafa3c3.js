(window.webpackJsonp=window.webpackJsonp||[]).push([[719],{1170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),u=o,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||l;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},849:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(8),l=(n(0),n(1170)),r={title:"Upgrading to Globalize 1.x for Dummies",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"img/profile.jpg",tags:["Globalize","migration"],hide_table_of_contents:!1},i={permalink:"/2015/07/30/upgrading-to-globalize-1x-for-dummies",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-07-30-upgrading-to-globalize-1x-for-dummies.md",source:"@site/blog/2015-07-30-upgrading-to-globalize-1x-for-dummies.md",description:"Globalize has hit 1.0. Anyone who reads my blog will likely be aware that I'm a long time user of Globalize 0.1.x. I've been a little daunted by the leap that the move from 0.1.x to 1.x represents. It appears to be the very definition of \"breaking changes\". :-) But hey, this is Semantic Versioning being used correctly so how could I complain? Either way, I've decided to write up the migration here as I'm not expecting this to be easy.",date:"2015-07-30T00:00:00.000Z",formattedDate:"July 30, 2015",tags:[{label:"Globalize",permalink:"/tags/globalize"},{label:"migration",permalink:"/tags/migration"}],title:"Upgrading to Globalize 1.x for Dummies",readingTime:9.305,truncated:!1,prevItem:{title:"(Top One, Nice One) Get Sorted",permalink:"/2015/08/13/top-one-nice-one-get-sorted"},nextItem:{title:"npm please stop hurting Visual Studio",permalink:"/2015/06/29/npm-please-stop-hurting-visual-studio"}},c=[{value:"Update our Bower dependencies",id:"update-our-bower-dependencies",children:[]},{value:"We need fuel",id:"we-need-fuel",children:[]},{value:"Some bitching and moaning.",id:"some-bitching-and-moaning",children:[]},{value:"Take the modules and run",id:"take-the-modules-and-run",children:[{value:"Update 30/08/2015: Globalize \xb7 So What&#39;cha Want",id:"update-30082015-globalize-\xb7-so-whatcha-want",children:[]}]},{value:"The Actual Migration",id:"the-actual-migration",children:[]},{value:"Observations",id:"observations",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Globalize has hit 1.0. Anyone who reads my blog will likely be aware that I'm a long time user of ",Object(l.b)("a",{parentName:"p",href:"http://blog.icanmakethiswork.io/2012/05/globalizejs-number-and-date.html"},"Globalize 0.1.x"),". I've been a little daunted by the leap that the move from 0.1.x to 1.x represents. It appears to be the very definition of \"breaking changes\". :-) But hey, this is Semantic Versioning being used correctly so how could I complain? Either way, I've decided to write up the migration here as I'm not expecting this to be easy."),Object(l.b)("p",null," To kick things off I've set up a very ",Object(l.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/globalize-migration/tree/v0.1.x"},"simple repo")," that consists of a single page that depends upon Globalize 0.1.x to render a number and a date in German. It looks like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>Globalize demo</title>\n    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">\n  </head>\n  <body>\n    <div class="container-fluid">\n      <h4>Globalize demo for the <em id="locale"></em> culture / locale</h4>\n      <p>This is a the number <strong id="number"></strong> formatted by Globalize: \n          <strong id="numberFormatted"></strong></p>\n      <p>This is a the number <strong id="date"></strong> formatted by Globalize: \n          <strong id="dateFormatted"></strong></p>\n    </div>\n\n    <script src="bower_components/globalize/lib/globalize.js"><\/script>\n    <script src="bower_components/globalize/lib/cultures/globalize.culture.de-DE.js"><\/script>\n    <script>\n      var locale = \'de-DE\';\n      var number = 12345.67;\n      var date = new Date(2012, 5, 15);\n\n      Globalize.culture( locale );\n      document.querySelector(\'#locale\').innerText = locale;\n      document.querySelector(\'#number\').innerText = number;\n      document.querySelector(\'#date\').innerText = date;\n      document.querySelector(\'#numberFormatted\').innerText = Globalize.format(number, \'n2\');\n      document.querySelector(\'#dateFormatted\').innerText = Globalize.format(date, \'d\');\n    <\/script>\n  </body>\n</html>\n')),Object(l.b)("p",null,"When it's run it looks like this:"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-FPsorsaP9ek/VbheyWDCUbI/AAAAAAAAA3k/I_Wf5WVJ42s/s640/Screenshot%2B2015-07-29%2B06.03.04.png",alt:null})),Object(l.b)("p",null,"Let's see how we go about migrating this super simple example."),Object(l.b)("h2",{id:"update-our-bower-dependencies"},"Update our Bower dependencies"),Object(l.b)("p",null,"First things first, we want to move Globalize from 0.1.x to 1.x using Bower. To do that we update our ",Object(l.b)("inlineCode",{parentName:"p"},"bower.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'"dependencies": {\n    "globalize": "^1.0.0"\n  }\n')),Object(l.b)("p",null,"Now we enter: ",Object(l.b)("inlineCode",{parentName:"p"},"bower update"),". And we're off!"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"bower globalize#^1.0.0          cached git://github.com/jquery/globalize.git#1.0.0\nbower globalize#^1.0.0        validate 1.0.0 against git://github.com/jquery/globalize.git#^1.0.0\nbower cldr-data#>=25            cached git://github.com/rxaviers/cldr-data-bower.git#27.0.3\nbower cldr-data#>=25          validate 27.0.3 against git://github.com/rxaviers/cldr-data-bower.git#>=25\nbower cldrjs#0.4.1              cached git://github.com/rxaviers/cldrjs.git#0.4.1\nbower cldrjs#0.4.1            validate 0.4.1 against git://github.com/rxaviers/cldrjs.git#0.4.1\nbower globalize#^1.0.0         install globalize#1.0.0\nbower cldr-data#>=25           install cldr-data#27.0.3\nbower cldrjs#0.4.1             install cldrjs#0.4.1\n\nglobalize#1.0.0 bower_components\\globalize\n\u251c\u2500\u2500 cldr-data#27.0.3\n\u2514\u2500\u2500 cldrjs#0.4.1\n\ncldr-data#27.0.3 bower_components\\cldr-data\n\ncldrjs#0.4.1 bower_components\\cldrjs\n\u2514\u2500\u2500 cldr-data#27.0.3\n")),Object(l.b)("p",null,"This all looks happy enough. Except it's actually not."),Object(l.b)("h2",{id:"we-need-fuel"},"We need fuel"),Object(l.b)("p",null,'Or as I like to call it cldr-data. We just pulled down Globalize 1.x but we didn\'t pull down the data that Globalize 1.x relies upon. This is one of the differences between Globalize 0.1.x and 1.x. Globalize 1.x does not include the "culture" data. By which I mean all the ',Object(l.b)("inlineCode",{parentName:"p"},"globalize.culture.de-DE.js")," type files. Instead Globalize 1.x relies upon ",Object(l.b)("a",{parentName:"p",href:"http://cldr.unicode.org/"},"CLDR - Unicode Common Locale Data Repository"),". It does this in the form of ",Object(l.b)("a",{parentName:"p",href:"https://github.com/unicode-cldr/cldr-json"},"cldr-json"),"."),Object(l.b)("p",null,"Now before you start to worry, you shouldn't actually need to go and get this by yourself, the lovely ",Object(l.b)("a",{parentName:"p",href:"https://github.com/rxaviers"},"Rafael Xavier de Souza")," has saved you a job by putting together ",Object(l.b)("a",{parentName:"p",href:"https://github.com/rxaviers/cldr-data-bower"},"Bower")," and ",Object(l.b)("a",{parentName:"p",href:"https://github.com/rxaviers/cldr-data-npm"},"npm")," modules to do the hard work for you."),Object(l.b)("p",null,"I'm using Bower for my client side package management and so I'll use that. Looking at the Bower dependencies downloaded when I upgraded my package I can see there is a ",Object(l.b)("inlineCode",{parentName:"p"},"cldr-data")," package. Yay! However it appears to be missing the associated json files. Boo!"),Object(l.b)("p",null,"To the documentation Batman. It says you need a ",Object(l.b)("inlineCode",{parentName:"p"},".bowerrc")," file in your repo which contains this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'{\n  "scripts": {\n    "preinstall": "npm install cldr-data-downloader@0.2.x",\n    "postinstall": "node ./node_modules/cldr-data-downloader/bin/download.js -i bower_components/cldr-data/index.json -o bower_components/cldr-data/"\n  }\n}\n')),Object(l.b)("p",null,"Unfortunately, because I've already upgraded to v1 adding this file alone doesn't do anything for me. To get round that I delete my ",Object(l.b)("inlineCode",{parentName:"p"},"bower_components")," folder and enter ",Object(l.b)("inlineCode",{parentName:"p"},"bower install"),". Boom!"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"bower globalize#^1.0.0          cached git://github.com/jquery/globalize.git#1.0.0\nbower globalize#^1.0.0        validate 1.0.0 against git://github.com/jquery/globalize.git#^1.0.0\nbower cldrjs#0.4.1                        cached git://github.com/rxaviers/cldrjs.git#0.4.1\nbower cldrjs#0.4.1                      validate 0.4.1 against git://github.com/rxaviers/cldrjs.git#0.4.1\nbower cldr-data#>=25                      cached git://github.com/rxaviers/cldr-data-bower.git#27.0.3\nbower cldr-data#>=25                    validate 27.0.3 against git://github.com/rxaviers/cldr-data-bower.git#>=25\nbower                                 preinstall npm install cldr-data-downloader@0.2.x\nbower                                 preinstall cldr-data-downloader@0.2.3 node_modules\\cldr-data-downloader\nbower                                 preinstall \u251c\u2500\u2500 progress@1.1.8\nbower                                 preinstall \u251c\u2500\u2500 q@1.0.1\nbower                                 preinstall \u251c\u2500\u2500 request-progress@0.3.1 (throttleit@0.0.2)\nbower                                 preinstall \u251c\u2500\u2500 nopt@3.0.3 (abbrev@1.0.7)\nbower                                 preinstall \u251c\u2500\u2500 mkdirp@0.5.0 (minimist@0.0.8)\nbower                                 preinstall \u251c\u2500\u2500 adm-zip@0.4.4\nbower                                 preinstall \u251c\u2500\u2500 npmconf@2.0.9 (uid-number@0.0.5, ini@1.3.4, inherits@2.0.1, once@1.3.2, osenv@0.1.3, config-chain@1.1.9, semver@4.3.6)\nbower                                 preinstall \u2514\u2500\u2500 request@2.53.0 (caseless@0.9.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.4, tunnel-agent@0.4.1, oauth-sign@0.6.0, isstream@0.1.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.3, combined-stream@0.0.7, mime-types@2.0.14, form-data@0.2.0, tough-cookie@2.0.0, bl@0.9.4, http-signature@0.10.1, hawk@2.3.1)\nbower globalize#^1.0.0                   install globalize#1.0.0\nbower cldrjs#0.4.1                       install cldrjs#0.4.1\nbower cldr-data#>=25                     install cldr-data#27.0.3\nbower                                postinstall node ./node_modules/cldr-data-downloader/bin/download.js -i bower_components/cldr-data/index.json -o bower_components/cldr-data/\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-core/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-dates-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-buddhist-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-chinese-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-coptic-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-dangi-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-ethiopic-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-hebrew-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-indian-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-islamic-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-japanese-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-persian-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-cal-roc-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-localenames-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-misc-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-numbers-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-segments-modern/archive/27.0.3.zip`\nbower                                postinstall GET `https://github.com/unicode-cldr/cldr-units-modern/archive/27.0.3.zip`\nbower                                postinstall Received 28728K total.\nbower                                postinstall Received 28753K total.\nbower                                postinstall Unpacking it into `./bower_components\\cldr-data`\n\nglobalize#1.0.0 bower_components\\globalize\n\u251c\u2500\u2500 cldr-data#27.0.3\n\u2514\u2500\u2500 cldrjs#0.4.1\n\ncldrjs#0.4.1 bower_components\\cldrjs\n\u2514\u2500\u2500 cldr-data#27.0.3\n\ncldr-data#27.0.3 bower_components\\cldr-data\n")),Object(l.b)("p",null,"That's right - I'm golden. And if I didn't want to do that I could have gone straight to the command line and entered this: (look familiar?)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm install cldr-data-downloader@0.2.x\nnode ./node_modules/cldr-data-downloader/bin/download.js -i bower_components/cldr-data/index.json -o bower_components/cldr-data/\n")),Object(l.b)("h2",{id:"some-bitching-and-moaning"},"Some bitching and moaning."),Object(l.b)("p",null,"If, like me, you were a regular user of Globalize 0.1.x then you know that you needed very little to get going. As you can see from our example you just serve up ",Object(l.b)("inlineCode",{parentName:"p"},"Globalize.js")," and the culture files you are interested in (eg ",Object(l.b)("inlineCode",{parentName:"p"},"globalize.culture.de-DE.js"),"). That's it - you have all you need; job's a good'un. This is all very convenient and entirely lovely."),Object(l.b)("p",null,"Globalize 1.x has a different approach and one that (I have to be honest) I'm not entirely on board with. The thing that you need to know about the new Globalize is that ",Object(l.b)("em",{parentName:"p"},"nothing comes for free"),". It's been completely modularised and ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jquery/globalize#pick-the-modules-you-need"},"you have to include extra libraries depending on the functionality you require.")," On top of that you then have to work out the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jquery/globalize#2-cldr-content"},"portions of the cldr data that you require for those modules")," and supply them. This means that getting up and running with Globalize 1.x is much harder. Frankly I think it's a little painful."),Object(l.b)("p",null,"I realise this is a little ",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Who_Moved_My_Cheese%3F"},'"Who moved my cheese"'),". I'll get over it. I do actually see the logic of this. It is certainly good that the culture date is not frozen in aspic but will evolve as the world does. But it's undeniable that in our brave new world Globalize is no longer a doddle to pick up. Or at least right now."),Object(l.b)("h2",{id:"take-the-modules-and-run"},"Take the modules and run"),Object(l.b)("p",null,"So. What do we actually need? Well I've consulted the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jquery/globalize#pick-the-modules-you-need"},"documentation")," and I think I'm clear. Our simple demo cares about dates and numbers. So I'm going to guess that means I need:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'<a href="https://github.com/jquery/globalize#core-module">globalize.js</a>')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'<a href="https://github.com/jquery/globalize#date-module">globalize/date.js</a>')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'<a href="https://github.com/jquery/globalize#number-module">globalize/number.js</a>'))),Object(l.b)("p",null,"On top of that I'm also going to need the various cldr dependencies too. That's not all. Given that I've decided which modules I will use I now need to acquire the associated cldr data. According to the docs ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jquery/globalize#2-cldr-content"},"here")," we're going to need:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cldr/supplemental/likelySubtags.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cldr/main/<i>locale</i>/ca-gregorian.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cldr/main/<i>locale</i>/timeZoneNames.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cldr/supplemental/timeData.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cldr/supplemental/weekData.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cldr/main/locale/numbers.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cldr/supplemental/numberingSystems.json"))),Object(l.b)("p",null,"Figuring that all out felt like really hard work. But I think that now we're ready to do the actual migration."),Object(l.b)("h3",{id:"update-30082015-globalize-\xb7-so-whatcha-want"},"Update 30/08/2015: Globalize \xb7 So What'cha Want"),Object(l.b)("p",null,"To make working out what you need when using Globalize I've built ",Object(l.b)("a",{parentName:"p",href:"http://johnnyreilly.github.io/globalize-so-what-cha-want/"},"Globalize \xb7 So What'cha Want"),". You're so very welcome."),Object(l.b)("h2",{id:"the-actual-migration"},"The Actual Migration"),Object(l.b)("p",null,"To do this I'm going to lean heavily upon ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jquery/globalize/blob/master/examples/plain-javascript/index.html"},"an example put together by Rafael"),". The migrated code looks like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},"<html>\n  <head>\n    <title>Globalize demo</title>\n    <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\" rel=\"stylesheet\">\n  </head>\n  <body>\n    <div class=\"container-fluid\">\n      <h4>Globalize demo for the <em id=\"locale\"></em> culture / locale</h4>\n      <p>This is a the number <strong id=\"number\"></strong> formatted by Globalize: \n          <strong id=\"numberFormatted\"></strong></p>\n      <p>This is a the number <strong id=\"date\"></strong> formatted by Globalize: \n          <strong id=\"dateFormatted\"></strong></p>\n    </div>\n\n    \x3c!-- First, we load Globalize's dependencies (`cldrjs` and its supplemental module). --\x3e\n    <script src=\"bower_components/cldrjs/dist/cldr.js\"><\/script>\n    <script src=\"bower_components/cldrjs/dist/cldr/event.js\"><\/script>\n    <script src=\"bower_components/cldrjs/dist/cldr/supplemental.js\"><\/script>\n\n    \x3c!-- Next, we load Globalize and its modules. --\x3e\n    <script src=\"bower_components/globalize/dist/globalize.js\"><\/script>\n    <script src=\"bower_components/globalize/dist/globalize/number.js\"><\/script>\n\n    \x3c!-- Load after globalize/number.js --\x3e\n    <script src=\"bower_components/globalize/dist/globalize/date.js\"><\/script>\n\n    <script>\n\n        var locale = 'de';\n\n        Promise.all([\n          // Core\n          fetch('bower_components/cldr-data/supplemental/likelySubtags.json'),\n\n          // Date\n          fetch('bower_components/cldr-data/main/' + locale + '/ca-gregorian.json'),\n          fetch('bower_components/cldr-data/main/' + locale + '/timeZoneNames.json'),\n          fetch('bower_components/cldr-data/supplemental/timeData.json'),\n          fetch('bower_components/cldr-data/supplemental/weekData.json'),\n\n          // Number\n          fetch('bower_components/cldr-data/main/' + locale + '/numbers.json'),\n          fetch('bower_components/cldr-data/supplemental/numberingSystems.json'),\n        ])\n        .then(function(responses) {\n            return Promise.all(responses.map(function(response) {\n                return response.json();\n            }));\n        })\n        .then(Globalize.load)\n        .then(function() {\n            var number = 12345.67;\n            var date = new Date(2012, 5, 15);\n\n            var globalize = Globalize( locale );\n            document.querySelector('#locale').innerText = locale;\n            document.querySelector('#number').innerText = number;\n            document.querySelector('#date').innerText = date;\n            document.querySelector('#numberFormatted').innerText = globalize.formatNumber(number, {\n              minimumFractionDigits: 2, \n              useGrouping: true \n            });\n            document.querySelector('#dateFormatted').innerText = globalize.formatDate(date, { \n              date: 'medium' \n            });\n        })\n    <\/script>\n  </body>\n</html>\n")),Object(l.b)("p",null,"By the way, I'm using ",Object(l.b)("a",{parentName:"p",href:"http://jakearchibald.com/2015/thats-so-fetch/"},"fetch")," and ",Object(l.b)("a",{parentName:"p",href:"http://www.html5rocks.com/en/tutorials/es6/promises/"},"promises")," to load the cldr-data. This isn't mandatory - I use it because Chrome lets me. (I'm so bleeding edge.) Some standard jQuery ajax calls would do just as well. There's an example of that approach ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize"},"here"),"."),Object(l.b)("h2",{id:"observations"},"Observations"),Object(l.b)("p",null,"We've gone from not a lot of code to... well, more than a little. A medium amount. Almost all of that extra code relates to getting Globalize 1.x to spin up so it's ready to work. We've also gone from 2 HTTP requests to 13 which is unlucky for you. 6 of them took place via ajax after the page had loaded. It's worth noting that we're not even loading all of Globalize either. On top of that there's the old order-of-loading shenanigans to deal with. All of these can be mitigated by introducing a custom build step of your own to concatenate and minify the associated cldr / Globalize files."),Object(l.b)("p",null,"Loading the data via ajax isn't mandatory by the way. If you wanted to you could create your own style of ",Object(l.b)("inlineCode",{parentName:"p"},"globalize.culture.de.js")," files which would allow you load the page without recourse to post-page load HTTP requests. Something like this Gulp task I've knocked up would do the trick:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"gulp.task(\"make-globalize-culture-de-js\", function() {\n  var locale = 'de';\n  var jsonWeNeed = [\n    require('./bower_components/cldr-data/supplemental/likelySubtags.json'),\n    require('./bower_components/cldr-data/main/' + locale + '/ca-gregorian.json'),\n    require('./bower_components/cldr-data/main/' + locale + '/timeZoneNames.json'),\n    require('./bower_components/cldr-data/supplemental/timeData.json'),\n    require('./bower_components/cldr-data/supplemental/weekData.json'),\n    require('./bower_components/cldr-data/main/' + locale + '/numbers.json'),\n    require('./bower_components/cldr-data/supplemental/numberingSystems.json')\n  ];\n\n  var jsonStringWithLoad = 'Globalize.load(' + \n    jsonWeNeed.map(function(json){ return JSON.stringify(json); }).join(', ') + \n    ');';\n\n  var fs = require('fs');\n  fs.writeFile('./globalize.culture.' + locale + '.js', jsonStringWithLoad, function(err) {\n      if(err) {\n          console.log(err);\n      } else {\n          console.log(\"The file was created!\");\n      }\n  });\n})\n")),Object(l.b)("p",null,"The above is standard node/io type code by the way; just take the contents of the function and run in node and you should be fine. If you do use this approach then you're very much back to the simplicity of Globalize 0.1.x's approach."),Object(l.b)("p",null,"And here is the page in all its post migration glory:"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-cBx66MK1tYI/Vbp5Rvch6zI/AAAAAAAAA30/HBiaN6risRg/s640/Screenshot%2B2015-07-30%2B20.21.19.png",alt:null})),Object(l.b)("p",null,"It looks exactly the same except 'de-DE' has become simply 'de' (since that's how the cldr rolls)."),Object(l.b)("p",null,"The migrated code is ",Object(l.b)("a",{parentName:"p",href:"https://github.com/johnnyreilly/globalize-migration"},"there for the taking"),". Make sure you remember to ",Object(l.b)("inlineCode",{parentName:"p"},"bower install")," ","-"," and you'll need to host the demo on a simple server since it makes ajax calls."),Object(l.b)("p",null,"Before I finish off I wanted to say \"well done!\" to all the people who have worked on Globalize. It's an important project and I do apologise for my being a little critical of it here. I should say that I think it's just the getting started that's hard. Once you get over that hurdle you'll be fine. Hopefully this post will help people do just that. Pip, pip!"))}d.isMDXComponent=!0}}]);
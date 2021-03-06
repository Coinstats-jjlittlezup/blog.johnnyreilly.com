(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{289:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(958)),l={title:"Hands-free HTTPS",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["TLS","free","HTTPS","CloudFlare","Troy Hunt"],hide_table_of_contents:!1},i={permalink:"/blog.johnnyreilly.com/2017/02/01/hands-free-https",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-02-01-hands-free-https.md",source:"@site/blog/2017-02-01-hands-free-https.md",description:"I have had a \\*great\\* week. You? Take a look at this blog. Can you see what I can see? Here's a clue:",date:"2017-02-01T00:00:00.000Z",tags:[{label:"TLS",permalink:"/blog.johnnyreilly.com/tags/tls"},{label:"free",permalink:"/blog.johnnyreilly.com/tags/free"},{label:"HTTPS",permalink:"/blog.johnnyreilly.com/tags/https"},{label:"CloudFlare",permalink:"/blog.johnnyreilly.com/tags/cloud-flare"},{label:"Troy Hunt",permalink:"/blog.johnnyreilly.com/tags/troy-hunt"}],title:"Hands-free HTTPS",readingTime:1.63,truncated:!1,prevItem:{title:"@types is rogue",permalink:"/blog.johnnyreilly.com/2017/02/14/typescript-types-and-repeatable-builds"},nextItem:{title:"webpack: resolveLoader / alias with query / options",permalink:"/blog.johnnyreilly.com/2017/01/06/webpack-resolveloader-alias-with-query"}},s=[],c={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I have had a ","*",Object(a.b)("strong",{parentName:"p"},"great"),"*"," week. You? Take a look at this blog. Can you see what I can see? Here's a clue:"),Object(a.b)("p",null," ",Object(a.b)("a",{parentName:"p",href:"https://3.bp.blogspot.com/-kGUtF6RJR-s/WI4BUnWu4qI/AAAAAAAABDE/8wOD9eHikMwQz5envUcg1tpHXxcJzegngCPcB/s1600/Screenshot%2B2017-01-29%2B14.45.57.png"},"![null]","(<https://3.bp.blogspot.com/-kGUtF6RJR-s/WI4BUnWu4qI/AAAAAAAABDE/8wOD9eHikMwQz5envUcg1tpHXxcJzegngCPcB/s640/Screenshot%2B2017-01-29%2B14.45.57.png> =640x428)"),"Yup, look at the top left hand corner.... see that beautiful padlock? Yeah - that's what's thrilled me. You see I have a dream; that one day on the red hills of the internet, the sons of former certificates and the sons of former certificate authorities will be able to sit down together at the table of HTTPS. Peace, love and TLS for all."),Object(a.b)("p",null,"The world is turning and slowly but surely HTTPS is becoming the default of the web. ",Object(a.b)("a",{parentName:"p",href:"https://security.googleblog.com/2014/08/https-as-ranking-signal_6.html"},"Search results get ranked higher if they're HTTPS."),Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP/2#Encryption"},"HTTP/2 is, to all intents and purposes, a HTTPS-only game."),Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API"},"Service Workers are HTTPS-only.")),Object(a.b)("p",null,"I care about all of these. So it's ",Object(a.b)("em",{parentName:"p"},"essential")," that I have HTTPS. But. But. But... Certificates, the administration that goes with them. It's boring. I mean, it just is. I want to be building interesting apps, I don't want to be devoting my time to acquiring certificates and fighting my way through the (never simple) administration of them. I'm dimly aware that there's free certificates to be had thanks to the fine work of ",Object(a.b)("a",{parentName:"p",href:"https://letsencrypt.org/"},"LetsEncrypt"),". I believe that work is being done on reduce the onerous admin burden as well. And that's great. But I'm still avoiding it..."),Object(a.b)("p",null,"What if I told you you could have HTTPS on your blog, on your Azure websites, on your anywhere.... ",Object(a.b)("em",{parentName:"p"},"FOR FREE. IN FIVE MINUTES?"),". Well, you can thanks to ",Object(a.b)("a",{parentName:"p",href:"https://www.cloudflare.com/"},"CloudFlare"),". I did; you should too."),Object(a.b)("p",null,"This is where I point you off to a number of resources to help you on your HTTPS way:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://www.troyhunt.com/how-to-get-your-ssl-for-free-on-shared/"},'Read Troy Hunt\'s "How to get your SSL for free on a Shared Azure website with CloudFlare"')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://www.pluralsight.com/courses/cloudflare-security-getting-started"},'Watch Troy Hunt\'s Pluralsight course "Getting Started with CloudFlare\u2122 Security"')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://www.cloudflare.com/"},"Go to Cloudflare's website and sign up"))),Object(a.b)("p",null,"It just works. And that makes me very happy indeed."))}u.isMDXComponent=!0},958:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(l,".").concat(b)]||p[b]||h[b]||a;return r?o.a.createElement(f,i(i({ref:t},c),{},{components:r})):o.a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
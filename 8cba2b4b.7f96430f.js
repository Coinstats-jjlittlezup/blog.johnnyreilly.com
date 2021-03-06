(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{559:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var o=n(3),i=n(7),r=(n(0),n(958)),a={title:"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["clientCredentialType","Security","Windows","WCF","Authentication","the server has rejected the client credentials","NetTcpBinding"],hide_table_of_contents:!1},s={permalink:"/blog.johnnyreilly.com/2012/02/15/wcf-transport-windows-authentication",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-02-15-wcf-transport-windows-authentication.md",source:"@site/blog/2012-02-15-wcf-transport-windows-authentication.md",description:"Update",date:"2012-02-15T00:00:00.000Z",tags:[{label:"clientCredentialType",permalink:"/blog.johnnyreilly.com/tags/client-credential-type"},{label:"Security",permalink:"/blog.johnnyreilly.com/tags/security"},{label:"Windows",permalink:"/blog.johnnyreilly.com/tags/windows"},{label:"WCF",permalink:"/blog.johnnyreilly.com/tags/wcf"},{label:"Authentication",permalink:"/blog.johnnyreilly.com/tags/authentication"},{label:"the server has rejected the client credentials",permalink:"/blog.johnnyreilly.com/tags/the-server-has-rejected-the-client-credentials"},{label:"NetTcpBinding",permalink:"/blog.johnnyreilly.com/tags/net-tcp-binding"}],title:"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment",readingTime:4.545,truncated:!1,prevItem:{title:"The Joy of JSON",permalink:"/blog.johnnyreilly.com/2012/02/23/joy-of-json"},nextItem:{title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",permalink:"/blog.johnnyreilly.com/2012/02/05/potted-history-of-using-ajax-on"}},l=[{value:"Update",id:"update",children:[]}],c={toc:l};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"update"},"Update"),Object(r.b)("p",null,"Since I wrote this initial post I've taken thinks on a bit further. Take a look at this post to see what I mean: ",Object(r.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/03/wcf-moving-from-config-to-code-simple.html"},"http://icanmakethiswork.blogspot.com/2012/03/wcf-moving-from-config-to-code-simple.html")," I know I said I'd write about JSON this time. I will get to that but not this time. This time WCF authentication quirks. I've been working on a project that uses .NET Remoting to have a single central point to which web applications and Windows services can call into. This is used in an intranet environment and all the websites and Windows services were hosted on the same single server along with our .NET Remoting Windows service. (They could quite easily have been on different servers but there was no need in this case.) It was decided to \"embrace the new\" by migrating this .NET Remoting project over to WCF. The plan wasn't to do anything revolutionary, just to move from one approach to the other as easily as possible. I found the following useful article on MSDN: ",Object(r.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/aa730857%28v=vs.80%29.aspx"},"http://msdn.microsoft.com/en-us/library/aa730857%28v=vs.80%29.aspx")," This particular article was helpful and following the steps enclosed I was quickly up and running with a basic WCF service hosted in a Windows service. It was at this point I started thinking about security. The existing .NET Remoting approach had no security in place. This wasn't ideal but also probably wasn't the worry you might think. It was hosted in an intranet environment and hence not so exposed to the rigours of the Wild Wild Web. However, since I was looking at WCF I thought it would be a good opportunity to get some basic security in place. This generally pleases auditors. I opted to use ",Object(r.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/ms733089.aspx"},"Windows Transport authentication")," as this seemed pretty appropriate for an intranet environment. The idea being that we'd authenticate with Windows for an account in our domain. After headbutting Windows for some time I managed to get a successful client call going from the website running on my development machine to the (separate) development server that was hosting our WCF Window service using Transport Windows authentication. However, when deploying the website to the development server I discovered we would experience the following error when the website attempted to call the WCF service (on the same server). ```\nEvent Type:            Failure Audit\nEvent Source:         Security\nEvent Category:     Logon/Logoff\nEvent ID: 537\nDate:                       15/02/2012\nTime:                       16:32:04\nUser:                       NT AUTHORITY\\SYSTEM\nComputer:               MINE999\nDescription:\nLogon Failure:\nReason:                   An error occurred during logon\nLogon Type:            3\nLogon Process:         ^\nAuthentication Package:         NTLM\nStatus code:            0xC000006D"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n Not terribly helpful. At the end of the day it seemed we were suffering from a security "feature" introduced by Microsoft to prevent services calling services on the same box with a fully qualified name. An explanation of this can be found here: [http://developers.de/blogs/damir\\_dobric/archive/2009/08/28/authentication-problems-by-using-of-ntlm.aspx](<http://developers.de/blogs/damir_dobric/archive/2009/08/28/authentication-problems-by-using-of-ntlm.aspx>) Using method 1 in the enclosed link I initially worked round this by amending the registry and rebooting the server: [http://support.microsoft.com/kb/887993](<http://support.microsoft.com/kb/887993>) This was not a fantastic solution. Fortunately I subsequently found a better one but since the resources on the web are \\***ATROCIOUS**\\* on this point I thought I should take the time to note down the full explanation since otherwise it\'ll be lost in the mists of time. Here we go: The equivalent security to the previous .NET Remoting solution in WCF was to use this config setting on client and service: ```xml\n<security mode="None" />\n')),Object(r.b)("p",null,' As I\'ve said, this is an intranet environment and so having this "none" security setting in place is made less worrying by the fact that the network itself is secured. But obviously this is not ideal and unlikely to be audit compliant. To use Windows security you need this netTcpBinding config setting on client and service: ```xml'),Object(r.b)("security",{mode:"Transport"},Object(r.b)("transport",{clientCredentialType:"Windows"})),"```",Object(r.b)("p",null," To call the service with this setting in place you will need to be an authenticated Windows user. (Or at the very least impersonating one - but you knew that.) ",Object(r.b)("strong",{parentName:"p"},"NOW FOR THE MOST IMPORTANT BIT.....")," The endpoint addresses ","*",Object(r.b)("strong",{parentName:"p"},"must"),"*",' be "localhost" for ',Object(r.b)("u",null,"both")),Object(r.b)("p",null,' client and service when both are deployed to the same server. If this is not the case then you will suffer from the aforementioned security "feature" which will provide you with unhelpful "the server has rejected the client credentials" messages and ',"*",Object(r.b)("strong",{parentName:"p"},"nothing"),"*"," else. ",Object(r.b)("strong",{parentName:"p"},"OK FINISHED - MOVE ALONG NOW... NOTHING MORE TO SEE HERE"),' With WCF Windows Transport authentication in place you can interrogate the calling user id within the service methods by simply evaluating ServiceSecurityContext.Current.PrimaryIdentity.Name (which will be something like "myDomain\\myUserName"). So we you wanted to, we could have a simple step which evaluated if the calling user is on the "approved" / "authorised" list. I\'m sure this could be made more sophisticated by using groups etc I guess - though I haven\'t investigated it further as yet. In fact, I suspect Microsoft may have something even more sophisticated still available for use which I\'m unaware of - if anyone knows a simple explanation of this then please do let me know! In closing, I do think Microsoft could work on providing more helpful error messages than "the server has rejected the client credentials". Going by what I read as I researched this error many people seem to have struggled much as I did before eventually bailing out and ended up chancing it by turning security off in their applications. Clearly it is not desirable to have people so confused by errors that they give up and settle for a less secure solution.'))}h.isMDXComponent=!0},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),h=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=h(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(n),d=o,m=u["".concat(a,".").concat(d)]||u[d]||p[d]||r;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
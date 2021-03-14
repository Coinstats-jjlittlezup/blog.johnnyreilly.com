(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{1160:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(a,".").concat(d)]||h[d]||u[d]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},534:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),o=(n(0),n(1160)),a={title:"Devcontainers and SSL interception",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["devcontainer","mitm certificate","ssl interception"],hide_table_of_contents:!1},c={permalink:"/2020/07/11/devcontainers-and-ssl-interception",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-07-11-devcontainers-and-ssl-interception.md",source:"@site/blog/2020-07-11-devcontainers-and-ssl-interception.md",description:"Devcontainers are cool. They are the infrastructure as code equivalent for developing software.",date:"2020-07-11T00:00:00.000Z",formattedDate:"July 11, 2020",tags:[{label:"devcontainer",permalink:"/tags/devcontainer"},{label:"mitm certificate",permalink:"/tags/mitm-certificate"},{label:"ssl interception",permalink:"/tags/ssl-interception"}],title:"Devcontainers and SSL interception",readingTime:3.24,truncated:!1,prevItem:{title:"Devcontainers AKA performance in a secure sandbox",permalink:"/2020/08/09/devcontainers-aka-performance-in-secure"},nextItem:{title:"Task.WhenAll / Select is a footgun \ud83d\udc5f\ud83d\udd2b",permalink:"/2020/06/21/taskwhenall-select-is-footgun"}},s=[{value:"Certificates: I&#39;m starting with the man in the middle",id:"certificates-im-starting-with-the-man-in-the-middle",children:[]},{value:"&quot;Devcontainers don&#39;t work at work!&quot;",id:"devcontainers-dont-work-at-work",children:[]},{value:"Devcontainer + MITM cert = working",id:"devcontainer--mitm-cert--working",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers"},"Devcontainers")," are cool. They are the infrastructure as code equivalent for developing software."),Object(o.b)("p",null,"Imagine your new starter joins the team, you'd like them to be contributing code on ",Object(o.b)("em",{parentName:"p"},"day 1"),". But if the first thing that happens is you hand them a sheaf of paper upon which are the instructions for how to get their machines set up for development, well, maybe it's going to be a while. But if your project has a devcontainer then you're off to the races. One trusty ",Object(o.b)("inlineCode",{parentName:"p"},"git clone"),", fire up VS Code and they can get going."),Object(o.b)("p",null,"That's the dream right?"),Object(o.b)("p",null,"I've recently been doing some work getting a project I work on set up with a devcontainer. As I've worked on that I've become aware of some of the hurdles that might hamper your adoption of devcontainers in a corporate environment."),Object(o.b)("h2",{id:"certificates-im-starting-with-the-man-in-the-middle"},"Certificates: I'm starting with the man in the middle"),Object(o.b)("p",null,"It is a common practice in company networks to perform ",Object(o.b)("a",{parentName:"p",href:"https://docs.citrix.com/en-us/citrix-adc/13/forward-proxy/ssl-interception.html"},"SSL interception"),". Not SSL inception; that'd be more fun."),Object(o.b)("iframe",{src:"https://giphy.com/embed/l7JDTHpsXM26k",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:""}),Object(o.b)("p",null,"SSL interception is the practice of installing a \"man-in-the-middle\" (MITM) CA certificate on users machines. When SSL traffic takes place from a users machine, it goes through a proxy. That proxy performs the SSL on behalf of that user and, if it's happy, supplies another certificate back to the users machine which satisfies the MITM CA certificate. So rather than seeing, for example, Google's certificate from ",Object(o.b)("a",{parentName:"p",href:"https://google.com"},"https://google.com")," you'd see the one resulting from the SSL interception. You can read more ",Object(o.b)("a",{parentName:"p",href:"https://security.stackexchange.com/questions/107542/is-it-common-practice-for-companies-to-mitm-https-traffic"},"here"),"."),Object(o.b)("p",null,"Now this is a little known and less understood practice. I barely understand it myself. Certificates are ",Object(o.b)("em",{parentName:"p"},"hard"),". Even having read the above you may be none the wiser about why this is relevant. Let's get to the broken stuff."),Object(o.b)("h2",{id:"devcontainers-dont-work-at-work"},'"Devcontainers don\'t work at work!"'),Object(o.b)("p",null,"So, you're ready to get going with your first devcontainer. You fire up the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Microsoft/vscode-dev-containers"},"vscode-dev-containers")," repo and find the container that's going to work for you. Copy pasta the ",Object(o.b)("inlineCode",{parentName:"p"},".devcontainer")," into your repo, install the ",Object(o.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack"},"Remote Development")," extension into VS Code and enter the ",Object(o.b)("inlineCode",{parentName:"p"},"Remote-Containers: Reopen Folder in Container"),". Here comes the future!"),Object(o.b)("p",null,"But when it comes to performing SSL inside the devcontainer, trouble awaits. Here's what a ",Object(o.b)("inlineCode",{parentName:"p"},"yarn install")," results in:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'yarn install v1.22.4\n[1/4] Resolving packages...\n[2/4] Fetching packages...\nerror An unexpected error occurred: "https://registry.yarnpkg.com/@octokit/core/-/core-2.5.0.tgz: self signed certificate in certificate chain".\n')),Object(o.b)("p",null,"Oh no!"),Object(o.b)("p",null,"Gosh but it's okay - you're just bumping on the SSL interception. Why though? Well it's like this: when you fire up your devcontainer it builds a new Docker container. It's as well to imagine the container as a virtual operating system. So what's the difference between this operating system and the one our machine is running? Well a number of things, but crucially our host operating system has the MITM CA certificate installed. So when we SSL, we have the certificate that will match up with what the proxy sends back to us certificate-wise. And inside our trusty devcontainer we don't have that. Hence the sadness."),Object(o.b)("h2",{id:"devcontainer--mitm-cert--working"},"Devcontainer + MITM cert = working"),Object(o.b)("p",null,"We need to do two things to get this working:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Acquire the requisite CA certificate(s) from your friendly neighbourhood networking team. Place them in a ",Object(o.b)("inlineCode",{parentName:"li"},"certs")," folder inside your repo, in the ",Object(o.b)("inlineCode",{parentName:"li"},".devcontainer")," folder."),Object(o.b)("li",{parentName:"ol"},"Add the following lines to your ",Object(o.b)("inlineCode",{parentName:"li"},".devcontainer/Dockerfile"),", just after the initial ",Object(o.b)("inlineCode",{parentName:"li"},"FROM")," statement:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# Because MITM certificates\nCOPY certs/. /usr/local/share/ca-certificates/\nENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/mitm.pem\nRUN update-ca-certificates\n")),Object(o.b)("p",null,"Which does the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copies the certs into the devcontainer"),Object(o.b)("li",{parentName:"ul"},"This is a Node example and so we set an environment variable called ",Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file"},Object(o.b)("inlineCode",{parentName:"a"},"NODE_EXTRA_CA_CERTS"))," which points to the path of your MITM CA certificate file inside your devcontainer."),Object(o.b)("li",{parentName:"ul"},"updates the directory ",Object(o.b)("inlineCode",{parentName:"li"},"/etc/ssl/certs")," to hold SSL certificates and generates ",Object(o.b)("inlineCode",{parentName:"li"},"ca-certificates.crt"))),Object(o.b)("p",null,"With these in place then you should be able to build your devcontainer with no SSL trauma. Enjoy!"))}p.isMDXComponent=!0}}]);
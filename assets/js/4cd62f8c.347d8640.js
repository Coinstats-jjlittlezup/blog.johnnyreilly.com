"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[30671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39227:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"Devcontainers and SSL interception",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["devcontainer","mitm certificate","ssl interception"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2020/07/11/devcontainers-and-ssl-interception",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-07-11-devcontainers-and-ssl-interception.md",source:"@site/blog/2020-07-11-devcontainers-and-ssl-interception.md",title:"Devcontainers and SSL interception",description:"Devcontainers are cool. They are the infrastructure as code equivalent for developing software.",date:"2020-07-11T00:00:00.000Z",formattedDate:"July 11, 2020",tags:[{label:"devcontainer",permalink:"/tags/devcontainer"},{label:"mitm certificate",permalink:"/tags/mitm-certificate"},{label:"ssl interception",permalink:"/tags/ssl-interception"}],readingTime:3.22,truncated:!1,prevItem:{title:"Devcontainers AKA performance in a secure sandbox",permalink:"/2020/08/09/devcontainers-aka-performance-in-secure"},nextItem:{title:"Task.WhenAll / Select is a footgun \ud83d\udc5f\ud83d\udd2b",permalink:"/2020/06/21/taskwhenall-select-is-footgun"}},p=[{value:"Certificates: I&#39;m starting with the man in the middle",id:"certificates-im-starting-with-the-man-in-the-middle",children:[]},{value:"&quot;Devcontainers don&#39;t work at work!&quot;",id:"devcontainers-dont-work-at-work",children:[]},{value:"Devcontainer + MITM cert = working",id:"devcontainer--mitm-cert--working",children:[]}],h={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers"},"Devcontainers")," are cool. They are the infrastructure as code equivalent for developing software."),(0,o.kt)("p",null,"Imagine your new starter joins the team, you'd like them to be contributing code on ",(0,o.kt)("em",{parentName:"p"},"day 1"),". But if the first thing that happens is you hand them a sheaf of paper upon which are the instructions for how to get their machines set up for development, well, maybe it's going to be a while. But if your project has a devcontainer then you're off to the races. One trusty ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone"),", fire up VS Code and they can get going."),(0,o.kt)("p",null,"That's the dream right?"),(0,o.kt)("p",null,"I've recently been doing some work getting a project I work on set up with a devcontainer. As I've worked on that I've become aware of some of the hurdles that might hamper your adoption of devcontainers in a corporate environment."),(0,o.kt)("h2",{id:"certificates-im-starting-with-the-man-in-the-middle"},"Certificates: I'm starting with the man in the middle"),(0,o.kt)("p",null,"It is a common practice in company networks to perform ",(0,o.kt)("a",{parentName:"p",href:"https://docs.citrix.com/en-us/citrix-adc/13/forward-proxy/ssl-interception.html"},"SSL interception"),". Not SSL inception; that'd be more fun."),(0,o.kt)("iframe",{src:"https://giphy.com/embed/l7JDTHpsXM26k",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:""}),(0,o.kt)("p",null,"SSL interception is the practice of installing a \"man-in-the-middle\" (MITM) CA certificate on users machines. When SSL traffic takes place from a users machine, it goes through a proxy. That proxy performs the SSL on behalf of that user and, if it's happy, supplies another certificate back to the users machine which satisfies the MITM CA certificate. So rather than seeing, for example, Google's certificate from ",(0,o.kt)("a",{parentName:"p",href:"https://google.com"},"https://google.com")," you'd see the one resulting from the SSL interception. You can read more ",(0,o.kt)("a",{parentName:"p",href:"https://security.stackexchange.com/questions/107542/is-it-common-practice-for-companies-to-mitm-https-traffic"},"here"),"."),(0,o.kt)("p",null,"Now this is a little known and less understood practice. I barely understand it myself. Certificates are ",(0,o.kt)("em",{parentName:"p"},"hard"),". Even having read the above you may be none the wiser about why this is relevant. Let's get to the broken stuff."),(0,o.kt)("h2",{id:"devcontainers-dont-work-at-work"},'"Devcontainers don\'t work at work!"'),(0,o.kt)("p",null,"So, you're ready to get going with your first devcontainer. You fire up the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/vscode-dev-containers"},"vscode-dev-containers")," repo and find the container that's going to work for you. Copy pasta the ",(0,o.kt)("inlineCode",{parentName:"p"},".devcontainer")," into your repo, install the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack"},"Remote Development")," extension into VS Code and enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"Remote-Containers: Reopen Folder in Container"),". Here comes the future!"),(0,o.kt)("p",null,"But when it comes to performing SSL inside the devcontainer, trouble awaits. Here's what a ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," results in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'yarn install v1.22.4\n[1/4] Resolving packages...\n[2/4] Fetching packages...\nerror An unexpected error occurred: "https://registry.yarnpkg.com/@octokit/core/-/core-2.5.0.tgz: self signed certificate in certificate chain".\n')),(0,o.kt)("p",null,"Oh no!"),(0,o.kt)("p",null,"Gosh but it's okay - you're just bumping on the SSL interception. Why though? Well it's like this: when you fire up your devcontainer it builds a new Docker container. It's as well to imagine the container as a virtual operating system. So what's the difference between this operating system and the one our machine is running? Well a number of things, but crucially our host operating system has the MITM CA certificate installed. So when we SSL, we have the certificate that will match up with what the proxy sends back to us certificate-wise. And inside our trusty devcontainer we don't have that. Hence the sadness."),(0,o.kt)("h2",{id:"devcontainer--mitm-cert--working"},"Devcontainer + MITM cert = working"),(0,o.kt)("p",null,"We need to do two things to get this working:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Acquire the requisite CA certificate(s) from your friendly neighbourhood networking team. Place them in a ",(0,o.kt)("inlineCode",{parentName:"li"},"certs")," folder inside your repo, in the ",(0,o.kt)("inlineCode",{parentName:"li"},".devcontainer")," folder."),(0,o.kt)("li",{parentName:"ol"},"Add the following lines to your ",(0,o.kt)("inlineCode",{parentName:"li"},".devcontainer/Dockerfile"),", just after the initial ",(0,o.kt)("inlineCode",{parentName:"li"},"FROM")," statement:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Because MITM certificates\nCOPY certs/. /usr/local/share/ca-certificates/\nENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/mitm.pem\nRUN update-ca-certificates\n")),(0,o.kt)("p",null,"Which does the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copies the certs into the devcontainer"),(0,o.kt)("li",{parentName:"ul"},"This is a Node example and so we set an environment variable called ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file"},(0,o.kt)("inlineCode",{parentName:"a"},"NODE_EXTRA_CA_CERTS"))," which points to the path of your MITM CA certificate file inside your devcontainer."),(0,o.kt)("li",{parentName:"ul"},"updates the directory ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/ssl/certs")," to hold SSL certificates and generates ",(0,o.kt)("inlineCode",{parentName:"li"},"ca-certificates.crt"))),(0,o.kt)("p",null,"With these in place then you should be able to build your devcontainer with no SSL trauma. Enjoy!"))}u.isMDXComponent=!0}}]);
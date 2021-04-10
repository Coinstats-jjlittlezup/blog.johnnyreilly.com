(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1189:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?r.a.createElement(h,s(s({ref:n},l),{},{components:t})):r.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},532:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(4),r=t(10),a=(t(0),t(1189)),i={title:"Devcontainers AKA performance in a secure sandbox",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["git clone","devcontainer","performance","SSH"],hide_table_of_contents:!1},s={permalink:"/2020/08/09/devcontainers-aka-performance-in-secure",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-08-09-devcontainers-aka-performance-in-secure.md",source:"@site/blog/2020-08-09-devcontainers-aka-performance-in-secure.md",description:"Many corporate machines arrive in engineers hands with a preponderance of pre-installed background tools; from virus checkers to backup utilities to port blockers; the list is long.",date:"2020-08-09T00:00:00.000Z",formattedDate:"August 9, 2020",tags:[{label:"git clone",permalink:"/tags/git-clone"},{label:"devcontainer",permalink:"/tags/devcontainer"},{label:"performance",permalink:"/tags/performance"},{label:"SSH",permalink:"/tags/ssh"}],title:"Devcontainers AKA performance in a secure sandbox",readingTime:6.54,truncated:!1,prevItem:{title:"Why your team needs a newsfeed",permalink:"/2020/09/04/why-your-team-needs-newsfeed"},nextItem:{title:"Devcontainers and SSL interception",permalink:"/2020/07/11/devcontainers-and-ssl-interception"}},c=[{value:"&quot;Hide from the virus checkers*** in a devcontainer&quot;",id:"hide-from-the-virus-checkers-in-a-devcontainer",children:[]},{value:"Make me a devcontainer...",id:"make-me-a-devcontainer",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Many corporate machines arrive in engineers hands with a preponderance of pre-installed background tools; from virus checkers to backup utilities to port blockers; the list is long."),Object(a.b)("p",null,"The reason that these tools are installed is generally noble. However, the implementation can often be problematic. The tools may be set up in such a way as they impact and interfere with one another. Really powerful machines with 8 CPUs and hardy SSDs can be slowed to a crawl. Put simply: the good people responsible for ensuring security are rarely encouraged to incentivise performance alongside it. And so don't."),Object(a.b)("p",null,"The unfortunate consequence of considering the role of security without regard to performance is this: sluggish computers. The further consequence (and this is the one I want you to think long and hard about) is ",Object(a.b)("em",{parentName:"p"},"low developer productivity"),". And that sucks. It impacts what an organisation is able to do, how fast an organisation is able to move. Put simply: it can be the difference between success and failure."),Object(a.b)("p",null,"The most secure computer is off. But you won't ship much with it. Encouraging your organisation to consider tackling security with performance in mind is worthwhile. It's a long game though. In the meantime what can we do?"),Object(a.b)("h2",{id:"hide-from-the-virus-checkers-in-a-devcontainer"},'"Hide from the virus checkers*',"*",'* in a devcontainer"'),Object(a.b)("p",null,"Devcontainers, the infrastructure as code equivalent for developing software, have an underappreciated quality: unlocking your machine's performance."),Object(a.b)("p",null,"Devcontainers are isolated secure sandboxes in which you can build software. To quote the ",Object(a.b)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers"},"docs"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A ",Object(a.b)("inlineCode",{parentName:"p"},"devcontainer.json")," file in your project tells VS Code how to access (or create) a development container with a well-defined tool and runtime stack. This container can be used to run an application or to sandbox tools, libraries, or runtimes needed for working with a codebase."),Object(a.b)("p",{parentName:"blockquote"},"Workspace files are mounted from the local file system or copied or ",Object(a.b)("em",{parentName:"p"},"cloned into the container"),".")),Object(a.b)("p",null,"We're going to set up a devcontainer to code an ASP.NET Core application with a JavaScript (well TypeScript) front end. If there's one thing that's sure to catch a virus checkers beady eye, it's ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),". ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," contains more files than a black hole has mass. Consider a project with 5,000 source files. One trusty ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," later and the folder now has a tidy 250,000 files. The virus checker is now really sitting up and taking notice."),Object(a.b)("p",null,"Our project has a ",Object(a.b)("inlineCode",{parentName:"p"},"git commit")," hook set up with ",Object(a.b)("a",{parentName:"p",href:"https://github.com/typicode/husky"},"Husky")," that formats our TypeScript files with ",Object(a.b)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),". Every commit the files are formatted to align with the project standard. With all the virus checkers in place a ",Object(a.b)("inlineCode",{parentName:"p"},"git commit")," takes around 45 seconds. Inside a devcontainer we can drop this to 5 seconds. That's nine times faster. I'll repeat that: that's ",Object(a.b)("strong",{parentName:"p"},"nine times faster"),"!"),Object(a.b)("p",null,"The \"cloned into a container\" above is key to what we're going to do. We're ",Object(a.b)("em",{parentName:"p"},"not")," going to mount our local file system into the devcontainer. Oh no. We're going to build a devcontainer with ASP.NET CORE and JavaScript in. Then, inside there, we're going to clone our repo. Then we can develop, build and debug all inside the container. It will feel like we're working on our own machine because VS Code does such a damn fine job. In reality, we're connecting to another computer (a Linux computer to boot) that is running in isolation to our own. In our case that machine is sharing our hardware; but that's just an implementation detail. It could be anywhere (and in the future may well be)."),Object(a.b)("h2",{id:"make-me-a-devcontainer"},"Make me a devcontainer..."),Object(a.b)("p",null,"Enough talk... We're going to need a ",Object(a.b)("inlineCode",{parentName:"p"},".devcontainer/devcontainer.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my devcontainer",\n  "dockerComposeFile": "../docker-compose.devcontainer.yml",\n  "service": "my-devcontainer",\n  "workspaceFolder": "/workspace",\n\n  // Set *default* container specific settings.json values on container create.\n  "settings": {\n    "terminal.integrated.shell.linux": "/bin/zsh"\n  },\n\n  // Add the IDs of extensions you want installed when the container is created.\n  "extensions": [\n    "ms-dotnettools.csharp",\n    "dbaeumer.vscode-eslint",\n    "esbenp.prettier-vscode",\n    "ms-mssql.mssql",\n    "eamodio.gitlens",\n    "ms-azuretools.vscode-docker",\n    "k--kato.docomment",\n    "Leopotam.csharpfixformat"\n  ],\n\n  // Use \'postCreateCommand\' to clone the repo into the workspace folder when the devcontainer starts\n  // and copy in the .env file\n  "postCreateCommand": "git clone git@github.com:my-org/my-repo.git . && cp /.env /workspace/.env"\n\n  // "remoteUser": "vscode"\n}\n')),Object(a.b)("p",null," Now the ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.devcontainer.yml")," which lives in the root of the project. It provisions a SQL Server container (using the official image) and our devcontainer:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'version: "3.7"\nservices:\n  my-devcontainer:\n    image: my-devcontainer\n    build: \n      context: .\n      dockerfile: Dockerfile.devcontainer\n    command: /bin/zsh -c "while sleep 1000; do :; done"\n    volumes:\n      # mount .zshrc from home - make sure it doesn\'t contain Windows line endings\n      - ~/.zshrc:/root/.zshrc\n\n    # user: vscode\n    ports:\n      - "5000:5000"\n      - "8080:8080"\n    environment:\n      - CONNECTIONSTRINGS__MYDATABASECONNECTION\n    depends_on:\n      - db\n  db:\n    image: mcr.microsoft.com/mssql/server:2019-latest\n    privileged: true\n    ports:\n      - 1433:1433\n    environment:\n      SA_PASSWORD: "Your_password123"\n      ACCEPT_EULA: "Y"\n')),Object(a.b)("p",null,"The devcontainer will be built with the ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile.devcontainer")," in the root of our repo. It relies upon your SSH keys and a ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file being available to be copied in:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'#-----------------------------------------------------------------------------------------------------------\n# Based upon: https://github.com/microsoft/vscode-dev-containers/tree/master/containers/dotnetcore\n#-----------------------------------------------------------------------------------------------------------\nARG VARIANT="3.1-bionic"\nFROM mcr.microsoft.com/dotnet/core/sdk:${VARIANT}\n\n# Because MITM certificates\nCOPY ./docker/certs/. /usr/local/share/ca-certificates/\nENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/mitm.pem\nRUN update-ca-certificates \n\n# This Dockerfile adds a non-root user with sudo access. Use the "remoteUser"\n# property in devcontainer.json to use it. On Linux, the container user\'s GID/UIDs\n# will be updated to match your local UID/GID (when using the dockerFile property).\n# See https://aka.ms/vscode-remote/containers/non-root-user for details.\nARG USERNAME=vscode\nARG USER_UID=1000\nARG USER_GID=$USER_UID\n\n# Options for common package install script\nARG INSTALL_ZSH="true"\nARG UPGRADE_PACKAGES="true"\nARG COMMON_SCRIPT_SOURCE="https://raw.githubusercontent.com/microsoft/vscode-dev-containers/master/script-library/common-debian.sh"\nARG COMMON_SCRIPT_SHA="dev-mode"\n\n# Settings for installing Node.js.\nARG INSTALL_NODE="true"\nARG NODE_SCRIPT_SOURCE="https://raw.githubusercontent.com/microsoft/vscode-dev-containers/master/script-library/node-debian.sh"\nARG NODE_SCRIPT_SHA="dev-mode"\n\n# ARG NODE_VERSION="lts/*"\nARG NODE_VERSION="14"\nENV NVM_DIR=/usr/local/share/nvm\n\n# Have nvm create a "current" symlink and add to path to work around https://github.com/microsoft/vscode-remote-release/issues/3224\nENV NVM_SYMLINK_CURRENT=true\nENV PATH=${NVM_DIR}/current/bin:${PATH}\n\n# Configure apt and install packages\nRUN apt-get update \\\n    && export DEBIAN_FRONTEND=noninteractive \\\n    #\n    # Verify git, common tools / libs installed, add/modify non-root user, optionally install zsh\n    && apt-get -y install --no-install-recommends curl ca-certificates 2>&1 \\\n    && curl -sSL ${COMMON_SCRIPT_SOURCE} -o /tmp/common-setup.sh \\\n    && ([ "${COMMON_SCRIPT_SHA}" = "dev-mode" ] || (echo "${COMMON_SCRIPT_SHA} */tmp/common-setup.sh" | sha256sum -c -)) \\\n    && /bin/bash /tmp/common-setup.sh "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" \\\n    #\n    # Install Node.js\n    && curl -sSL ${NODE_SCRIPT_SOURCE} -o /tmp/node-setup.sh \\\n    && ([ "${NODE_SCRIPT_SHA}" = "dev-mode" ] || (echo "${COMMON_SCRIPT_SHA} */tmp/node-setup.sh" | sha256sum -c -)) \\\n    && /bin/bash /tmp/node-setup.sh "${NVM_DIR}" "${NODE_VERSION}" "${USERNAME}" \\\n    #\n    # Clean up\n    && apt-get autoremove -y \\\n    && apt-get clean -y \\\n    && rm -f /tmp/common-setup.sh /tmp/node-setup.sh \\\n    && rm -rf /var/lib/apt/lists/* \\\n    #\n    # Workspace\n    && mkdir workspace \\\n    && chown -R ${NONROOT_USER}:root workspace\n\n\n# Install Vim\nRUN apt-get update && apt-get install -y \\\n    vim \\\n    && rm -rf /var/lib/apt/lists/*\n\n# Set up a timezone in the devcontainer - necessary for anything timezone dependent\nENV TZ=Europe/London\nRUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone \\\n && apt-get update \\\n && apt-get install --no-install-recommends -y \\\n    apt-utils \\\n    tzdata  \\\n && apt-get autoremove -y \\\n && apt-get clean -y \\\n && rm -rf /var/lib/apt/lists/* \n\nENV DOTNET_RUNNING_IN_CONTAINER=true \n\n# Copy across SSH keys so you can git clone\nRUN mkdir /root/.ssh\nRUN chmod 700 /root/.ssh\n\nCOPY .ssh/id_rsa /root/.ssh\nRUN chmod 600 /root/.ssh/id_rsa\n\nCOPY .ssh/id_rsa.pub /root/.ssh\nRUN chmod 644 /root/.ssh/id_rsa.pub\n\nCOPY .ssh/known_hosts /root/.ssh\nRUN chmod 644 /root/.ssh/known_hosts  \n\n# Disable initial git clone prompt\nRUN echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config\n\n# Copy across .env file so you can customise environment variables\n# This will be copied into the root of the repo post git clone\nCOPY .env /.env\nRUN chmod 644 /.env  \n\n# Install dotnet entity framework tools\nRUN dotnet tool install dotnet-ef --tool-path /usr/local/bin --version 3.1.2\n')),Object(a.b)("p",null,"With this devcontainer you're good to go for an ASP.NET Core / JavaScript developer setup that is blazing fast! Remember to fire up Docker and give it goodly access to the resources of your host machine. All the CPUs, lots of memory and all the performance that there ought to be."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"*",' "virus checkers" is a euphemism here for all the background tools that may be running. It was that or calling them "we are legion"')))}p.isMDXComponent=!0}}]);
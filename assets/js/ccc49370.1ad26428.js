(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[46103],{7498:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(67294),l=a(47702),r=a(42902),o=a(66585),i=a(92511);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(4112),m=a(86010);var d=function(e,t,a){var l=(0,n.useState)(void 0),r=l[0],o=l[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,i=!1,s=document.getElementsByClassName(e);l<s.length&&!i;){var c=s[l],m=c.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),c.classList.add(t),o(c),i=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},v="tableOfContents_35-E",u="table-of-contents__link";function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return d(u,"table-of-contents__link--active",100),n.createElement("div",{className:(0,m.Z)(v,"thin-scrollbar")},n.createElement(g,{toc:t}))},b=a(94395);var f=function(e){var t=e.content,a=e.sidebar,o=t.frontMatter,i=t.metadata,m=i.title,d=i.description,v=i.nextItem,u=i.prevItem,g=o.hide_table_of_contents;return n.createElement(l.Z,{title:m,description:d,wrapperClassName:b.kM.wrapper.blogPages,pageClassName:b.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(c.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(r.Z,{frontMatter:o,metadata:i,isBlogPostPage:!0},n.createElement(t,null)),(v||u)&&n.createElement(s,{nextItem:v,prevItem:u})),!g&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(p,{toc:t.toc})))))}}}]);
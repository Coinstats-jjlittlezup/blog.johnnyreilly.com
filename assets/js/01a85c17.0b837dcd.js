"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[64013],{66165:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(63366),r=a(67294),l=a(86010),i=a(75658),s=a(92511),c="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",g=a(66585);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var b=function(e,t,a){var n=(0,r.useState)(void 0),l=n[0],i=n[1];(0,r.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,c=document.getElementsByClassName(e);r<c.length&&!s;){var o=c[r],m=o.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),o.classList.add(t),i(o),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},h="tableOfContents_35-E",E="table-of-contents__link";function p(e){var t=e.toc,a=e.isChild;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:E,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(p,{isChild:!0,toc:e.children}))}))):null}var N=function(e){var t=e.toc;return b(E,"table-of-contents__link--active",100),r.createElement("div",{className:(0,l.Z)(h,"thin-scrollbar")},r.createElement(p,{toc:t}))},k=["sidebar","toc","children"];var _=function(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,n.Z)(e,k),o=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(N,{toc:a})))))}},9488:function(e,t,a){a.r(t);var n=a(67294),r=a(92511),l=a(66165),i=a(66585),s=a(88626);t.default=function(e){var t=e.tags,a=e.sidebar,c=(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),o={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);o[t]=o[t]||[],o[t].push(e)}));var m=Object.entries(o).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){var a=e[0],l=e[1];return n.createElement("article",{key:a},n.createElement("h2",null,a),l.map((function(e){return n.createElement(r.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.createElement("hr",null))})).filter((function(e){return null!=e}));return n.createElement(l.Z,{title:c,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,c),n.createElement("section",{className:"margin-vert--lg"},m))}}}]);
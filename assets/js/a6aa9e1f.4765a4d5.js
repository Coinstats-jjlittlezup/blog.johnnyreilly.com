"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[93089],{79734:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var n=t(67294),i=t(39962),r=t(66165),l=t(27312),s=t(92511),o=t(66585);var g=function(e){var a=e.metadata,t=a.previousPage,i=a.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&n.createElement(s.Z,{className:"pagination-nav__link",to:i},n.createElement("div",{className:"pagination-nav__label"},n.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=t(88626);var p=function(e){var a=e.metadata,t=e.items,s=e.sidebar,o=(0,i.Z)().siteConfig.title,p=a.blogDescription,c=a.blogTitle,d="/"===a.permalink?o:c;return n.createElement(r.Z,{title:d,description:p,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return n.createElement(l.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.createElement(a,null))})),n.createElement(g,{metadata:a}))}}}]);
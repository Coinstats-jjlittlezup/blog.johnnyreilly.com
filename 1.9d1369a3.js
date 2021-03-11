/*! For license information please see 1.9d1369a3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1160:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1222);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var a=n(1226);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var o=n(1223);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return o.isDocsPluginEnabled}});var c=n(1227);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return c.isSamePath}});var i=n(1228);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return i.useTitleFormatter}});var l=n(1229);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return l.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return l.useDocsPreferredVersionByPluginId}});var s=n(1224);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return s.DocsPreferredVersionContextProvider}})},1162:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),c=n(1170),i=n(8),l=Object(r.createContext)({collectLink:function(){}}),s=n(1163),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,b=e.isActive,p=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,O=void 0===g||g,E=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,k=Object(r.useContext)(l),y=m||v,_=Object(c.a)(y),C=null==y?void 0:y.replace("pathname://",""),w=void 0!==C?(n=C,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,N=Object(r.useRef)(!1),P=f?o.c:o.b,D=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!D&&_&&window.docusaurus.prefetch(w),function(){D&&d&&d.disconnect()}}),[w,D,_]);var T=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,S=!w||!_||T;return w&&_&&!T&&!p&&k.collectLink(w),S?a.a.createElement("a",Object.assign({href:w},y&&!_&&{target:"_blank",rel:"noopener noreferrer"},E)):a.a.createElement(P,Object.assign({},E,{onMouseEnter:function(){N.current||(window.docusaurus.preload(w),N.current=!0)},innerRef:function(e){var t,n;D&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(w)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:w||""},f&&{isActive:b,activeClassName:h}))}},1163:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(19),a=n(1170);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},1164:function(e,t,n){try{e.exports=n(!function(){var e=new Error("Cannot find module '@theme-init/hooks/useDocs'");throw e.code="MODULE_NOT_FOUND",e}())}catch(r){e.exports={}}},1165:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1160),c=n(54),i=n.n(c);var l=function(){return a.a.createElement("nav",{"aria-label":"Skip navigation links"},a.a.createElement("button",{type:"button",tabIndex:0,className:i.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=n(1161),u=Object(r.createContext)(void 0);var d=function(){var e=Object(r.useContext)(u);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e},f=n(55),m=n.n(f);var v=function(){var e,t=d(),n=t.isAnnouncementBarClosed,r=t.closeAnnouncementBar,c=Object(s.useThemeConfig)().announcementBar;if(!c)return null;var i=c.content,l=c.backgroundColor,u=c.textColor,f=c.isCloseable;return!i||f&&n?null:a.a.createElement("div",{className:m.a.announcementBar,style:{backgroundColor:l,color:u},role:"banner"},a.a.createElement("div",{className:Object(o.a)(m.a.announcementBarContent,(e={},e[m.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:i}}),f?a.a.createElement("button",{type:"button",className:m.a.announcementBarClose,onClick:r,"aria-label":"Close"},a.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=n(3),b=function(){return null},p=n(1232),g=n.n(p),O=n(19),E=n(56),j=n.n(E),k=function(e){var t=e.icon,n=e.style;return a.a.createElement("span",{className:Object(o.a)(j.a.toggle,j.a.dark),style:n},t)},y=function(e){var t=e.icon,n=e.style;return a.a.createElement("span",{className:Object(o.a)(j.a.toggle,j.a.light),style:n},t)},_=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,i=Object(O.default)().isClient;return a.a.createElement(g.a,Object(h.a)({disabled:!i,icons:{checked:a.a.createElement(k,{icon:n,style:r}),unchecked:a.a.createElement(y,{icon:o,style:c})}},e))},C=n(1168),w=n(1169),N=n(8),P=function(){return{scrollX:N.a.canUseDOM?window.pageXOffset:0,scrollY:N.a.canUseDOM?window.pageYOffset:0}},D=function(e,t){void 0===t&&(t=[]);var n=Object(r.useState)(P()),a=n[0],o=n[1],c=function(){var t=P();o(t),e&&e(t)};return Object(r.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",c,e),function(){return window.removeEventListener("scroll",c,e)}}),t),a},T=function(e){var t=Object(w.a)(),n=Object(r.useState)(!e),a=n[0],o=n[1],c=Object(r.useRef)(!1),i=Object(r.useState)(0),l=i[0],s=i[1],u=Object(r.useState)(0),d=u[0],f=u[1],m=Object(r.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]);return D((function(t){var n=t.scrollY;if(e&&!(n<d)){if(c.current)return c.current=!1,o(!1),void s(n);l&&0===n&&o(!0);var r=document.documentElement.scrollHeight-d,a=window.innerHeight;l&&n>=l?o(!1):n+a<r&&o(!0),s(n)}}),[l,d,c]),Object(r.useEffect)((function(){e&&l&&o(!0)}),[t.pathname]),Object(r.useEffect)((function(){e&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}};var S=function(e){void 0===e&&(e=!0),Object(r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},I="desktop",L="mobile";var x=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?I:L}var n=Object(r.useState)(t),a=n[0],o=n[1];return Object(r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){o(t())}}),[]),a},V=n(7),A=n(1166);function B(e){var t=e.mobile,n=Object(V.a)(e,["mobile"]),r=Object(O.default)(),o=r.siteConfig.baseUrl,c=r.i18n,i=c.defaultLocale,l=c.currentLocale,s=c.locales,u=c.localeConfigs,d=Object(w.a)().pathname;function f(e){return u[e].label}var m=l===i?o:o.replace("/"+l+"/","/"),v=d.replace(o,"");var b=s.map((function(e){var t=""+function(e){return e===i?""+m:""+m+e+"/"}(e)+v;return{isNavLink:!0,label:f(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":""}})),p=t?"Languages":f(l);return a.a.createElement(A.a,Object(h.a)({},n,{mobile:t,label:p,items:b}))}var M={default:function(){return A.a},localeDropdown:function(){return B},docsVersion:function(){return n(1237).default},docsVersionDropdown:function(){return n(1238).default},doc:function(){return n(1239).default}};function U(e){var t=e.type,n=Object(V.a)(e,["type"]),r=function(e){void 0===e&&(e="default");var t=M[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return a.a.createElement(r,n)}var F=n(1162),R=n(57),H=n.n(R),X=function(e){var t=Object(O.default)().isClient,n=Object(C.a)().isDarkTheme,r=e.sources,c=e.className,i=e.alt,l=void 0===i?"":i,s=Object(V.a)(e,["sources","className","alt"]),u=t?n?["dark"]:["light"]:["light","dark"];return a.a.createElement(a.a.Fragment,null,u.map((function(e){return a.a.createElement("img",Object(h.a)({key:e,src:r[e],alt:l,className:Object(o.a)(H.a.themedImage,H.a["themedImage--"+e],c)},s))})))},G=n(1163),W=n(1170),Y=function(e){var t=Object(O.default)().isClient,n=Object(s.useThemeConfig)().navbar,r=n.title,o=n.logo,c=void 0===o?{src:""}:o,i=e.imageClassName,l=e.titleClassName,u=Object(V.a)(e,["imageClassName","titleClassName"]),d=Object(G.a)(c.href||"/"),f=c.target?{target:c.target}:Object(W.a)(d)?{}:{rel:"noopener noreferrer",target:"_blank"},m={light:Object(G.a)(c.src),dark:Object(G.a)(c.srcDark||c.src)};return a.a.createElement(F.a,Object(h.a)({to:d},u,f),c.src&&a.a.createElement(X,{key:t,className:i,sources:m,alt:c.alt||r||"Logo"}),null!=r&&a.a.createElement("strong",{className:l},r))},K=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,o=void 0===r?30:r,c=e.className,i=Object(V.a)(e,["width","height","className"]);return a.a.createElement("svg",Object(h.a)({"aria-label":"Menu",className:c,width:n,height:o,viewBox:"0 0 30 30",role:"img",focusable:"false"},i),a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},z=n(58),J=n.n(z),q="right";var Q=function(){var e,t,n=Object(s.useThemeConfig)(),c=n.navbar,i=c.items,l=c.hideOnScroll,u=c.style,d=n.colorMode.disableSwitch,f=Object(r.useState)(!1),m=f[0],v=f[1],p=Object(r.useState)(!1),g=p[0],O=p[1],E=Object(C.a)(),j=E.isDarkTheme,k=E.setLightTheme,y=E.setDarkTheme,w=T(l),N=w.navbarRef,P=w.isNavbarVisible;S(m);var D=Object(r.useCallback)((function(){v(!0)}),[v]),L=Object(r.useCallback)((function(){v(!1)}),[v]),V=Object(r.useCallback)((function(e){return e.target.checked?y():k()}),[k,y]),A=x();Object(r.useEffect)((function(){A===I&&v(!1)}),[A]);var B=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:q)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:q)}))}}(i),M=B.leftItems,F=B.rightItems;return a.a.createElement("nav",{ref:N,className:Object(o.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":m},e[J.a.navbarHideable]=l,e[J.a.navbarHidden]=!P,e))},a.a.createElement("div",{className:"navbar__inner"},a.a.createElement("div",{className:"navbar__items"},null!=i&&0!==i.length&&a.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},a.a.createElement(K,null)),a.a.createElement(Y,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(o.a)("navbar__title",(t={},t[J.a.hideLogoText]=g,t))}),M.map((function(e,t){return a.a.createElement(U,Object(h.a)({},e,{key:t}))}))),a.a.createElement("div",{className:"navbar__items navbar__items--right"},F.map((function(e,t){return a.a.createElement(U,Object(h.a)({},e,{key:t}))})),!d&&a.a.createElement(_,{className:J.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:j,onChange:V}),a.a.createElement(b,{handleSearchBarToggle:O,isSearchBarExpanded:g}))),a.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:L}),a.a.createElement("div",{className:"navbar-sidebar"},a.a.createElement("div",{className:"navbar-sidebar__brand"},a.a.createElement(Y,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:L}),!d&&m&&a.a.createElement(_,{"aria-label":"Dark mode toggle in sidebar",checked:j,onChange:V})),a.a.createElement("div",{className:"navbar-sidebar__items"},a.a.createElement("div",{className:"menu"},a.a.createElement("ul",{className:"menu__list"},i.map((function(e,t){return a.a.createElement(U,Object(h.a)({mobile:!0},e,{onClick:L,key:t}))})))))))},Z=n(59),$=n.n(Z);function ee(e){var t=e.to,n=e.href,r=e.label,o=e.prependBaseUrlToHref,c=Object(V.a)(e,["to","href","label","prependBaseUrlToHref"]),i=Object(G.a)(t),l=Object(G.a)(n,{forcePrependBaseUrl:!0});return a.a.createElement(F.a,Object(h.a)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:o?l:n}:{to:i},c),r)}var te=function(e){var t=e.url,n=e.alt;return a.a.createElement("img",{className:"footer__logo",alt:n,src:t})};var ne=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},n=t.copyright,r=t.links,c=void 0===r?[]:r,i=t.logo,l=void 0===i?{}:i,u=Object(G.a)(l.src);return e?a.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},a.a.createElement("div",{className:"container"},c&&c.length>0&&a.a.createElement("div",{className:"row footer__links"},c.map((function(e,t){return a.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.a.createElement(ee,e))}))):null)}))),(l||n)&&a.a.createElement("div",{className:"footer__bottom text--center"},l&&l.src&&a.a.createElement("div",{className:"margin-bottom--sm"},l.href?a.a.createElement("a",{href:l.href,target:"_blank",rel:"noopener noreferrer",className:$.a.footerLogoLink},a.a.createElement(te,{alt:l.alt,url:u})):a.a.createElement(te,{alt:l.alt,url:u})),n?a.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},re="light",ae="dark",oe=function(e){return e===ae?ae:re},ce=function(){return N.a.canUseDOM?oe(document.documentElement.getAttribute("data-theme")):re},ie=function(e){try{localStorage.setItem("theme",oe(e))}catch(t){console.error(t)}},le=function(){var e=Object(s.useThemeConfig)().colorMode,t=e.disableSwitch,n=e.respectPrefersColorScheme,a=Object(r.useState)(ce),o=a[0],c=a[1],i=Object(r.useCallback)((function(){c(re),ie(re)}),[]),l=Object(r.useCallback)((function(){c(ae),ie(ae)}),[]);return Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme",oe(o))}),[o]),Object(r.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(oe(e))}catch(n){console.error(n)}}),[c]),Object(r.useEffect)((function(){t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?ae:re)}))}),[]),{isDarkTheme:o===ae,setLightTheme:i,setDarkTheme:l}},se=n(1225);var ue=function(e){var t=le(),n=t.isDarkTheme,r=t.setLightTheme,o=t.setDarkTheme;return a.a.createElement(se.a.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:o}},e.children)},de="docusaurus.tab.",fe=function(){var e=Object(r.useState)({}),t=e[0],n=e[1],a=Object(r.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var r=localStorage.key(t);if(r.startsWith(de))e[r.substring(de.length)]=localStorage.getItem(r)}n(e)}catch(a){console.error(a)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},me="docusaurus.announcement.dismiss",ve="docusaurus.announcement.id",he=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(r.useState)(!0),n=t[0],a=t[1],o=Object(r.useCallback)((function(){localStorage.setItem(me,"true"),a(!0)}),[]);return Object(r.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(ve);"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;localStorage.setItem(ve,t),r&&localStorage.setItem(me,"false"),(r||"false"===localStorage.getItem(me))&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}};var be=function(e){var t=fe(),n=t.tabGroupChoices,r=t.setTabGroupChoices,o=he(),c=o.isAnnouncementBarClosed,i=o.closeAnnouncementBar;return a.a.createElement(u.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r,isAnnouncementBarClosed:c,closeAnnouncementBar:i}},e.children)};function pe(e){var t=e.children;return a.a.createElement(ue,null,a.a.createElement(be,null,a.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}var ge=n(21);function Oe(e){var t=e.locale,n=e.version,r=e.tag;return a.a.createElement(ge.a,null,t&&a.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&a.a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.a.createElement("meta",{name:"docusaurus_tag",content:r}))}function Ee(e){var t=Object(O.default)(),n=t.siteConfig,r=t.i18n.currentLocale,o=n.favicon,c=n.themeConfig,i=c.image,l=c.metadatas,u=n.url,d=e.title,f=e.description,m=e.image,v=e.keywords,b=e.permalink,p=e.searchMetadatas,g=Object(s.useTitleFormatter)(d),E=m||i,j=Object(G.a)(E,{absolute:!0}),k=Object(G.a)(o),y=r.split("-")[0];return a.a.createElement(a.a.Fragment,null,a.a.createElement(ge.a,null,a.a.createElement("html",{lang:y}),g&&a.a.createElement("title",null,g),g&&a.a.createElement("meta",{property:"og:title",content:g}),o&&a.a.createElement("link",{rel:"shortcut icon",href:k}),f&&a.a.createElement("meta",{name:"description",content:f}),f&&a.a.createElement("meta",{property:"og:description",content:f}),v&&v.length&&a.a.createElement("meta",{name:"keywords",content:v.join(",")}),E&&a.a.createElement("meta",{property:"og:image",content:j}),E&&a.a.createElement("meta",{name:"twitter:image",content:j}),E&&a.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),b&&a.a.createElement("meta",{property:"og:url",content:u+b}),b&&a.a.createElement("link",{rel:"canonical",href:u+b}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.a.createElement(Oe,Object(h.a)({tag:s.DEFAULT_SEARCH_TAG,locale:r},p)),a.a.createElement(ge.a,null,l.map((function(e,t){return a.a.createElement("meta",Object(h.a)({key:"metadata_"+t},e))}))))}n(60);var je=function(){Object(r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(61);t.a=function(e){var t=e.children,n=e.noFooter,r=e.wrapperClassName;return je(),a.a.createElement(pe,null,a.a.createElement(Ee,e),a.a.createElement(l,null),a.a.createElement(v,null),a.a.createElement(Q,null),a.a.createElement("div",{className:Object(o.a)("main-wrapper",r)},t),!n&&a.a.createElement(ne,null))}},1166:function(e,t,n){"use strict";var r=n(3),a=n(7),o=n(0),c=n.n(o),i=n(1160),l=n(1162),s=n(1163),u=n(1169),d=n(1161);function f(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,i=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,v=Object(a.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),h=Object(s.a)(o),b=Object(s.a)(t),p=Object(s.a)(i,{forcePrependBaseUrl:!0});return c.a.createElement(l.a,Object(r.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:m?p:i}:Object.assign({isNavLink:!0,activeClassName:f,to:h},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),v),u)}function m(e){var t=e.items,n=e.position,l=e.className,s=Object(a.a)(e,["items","position","className"]),u=Object(o.useRef)(null),d=Object(o.useRef)(null),m=Object(o.useState)(!1),v=m[0],h=m[1];Object(o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),Object(i.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?c.a.createElement("div",{ref:u,className:Object(i.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":v})},c.a.createElement(f,Object(r.a)({className:b(l)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),s.label),c.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,n){var o=e.className,i=Object(a.a)(e,["className"]);return c.a.createElement("li",{key:n},c.a.createElement(f,Object(r.a)({onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:b(o,!0)},i)))})))):c.a.createElement(f,Object(r.a)({className:b(l)},s))}function v(e){var t,n,l=e.items,s=e.className,m=(e.position,Object(a.a)(e,["items","className","position"])),v=Object(o.useRef)(null),h=Object(u.a)().pathname,b=Object(o.useState)((function(){var e;return null===(e=!(null!=l&&l.some((function(e){return Object(d.isSamePath)(e.to,h)}))))||void 0===e||e})),p=b[0],g=b[1],O=function(e,t){return void 0===t&&(t=!1),Object(i.a)("menu__link",{"menu__link--sublist":t},e)};if(!l)return c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(f,Object(r.a)({className:O(s)},m)));var E=null!==(t=v.current)&&void 0!==t&&t.scrollHeight?(null===(n=v.current)||void 0===n?void 0:n.scrollHeight)+"px":void 0;return c.a.createElement("li",{className:Object(i.a)("menu__list-item",{"menu__list-item--collapsed":p})},c.a.createElement(f,Object(r.a)({role:"button",className:O(s,!0)},m,{onClick:function(){g((function(e){return!e}))}}),m.label),c.a.createElement("ul",{className:"menu__list",ref:v,style:{height:p?void 0:E}},l.map((function(e,t){var n=e.className,o=Object(a.a)(e,["className"]);return c.a.createElement("li",{className:"menu__list-item",key:t},c.a.createElement(f,Object(r.a)({activeClassName:"menu__link--active",className:O(n)},o,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,r=Object(a.a)(e,["mobile"]),o=n?v:m;return c.a.createElement(o,r)}},1168:function(e,t,n){"use strict";var r=n(0),a=n(1225);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},1169:function(e,t,n){"use strict";var r=n(10);n.d(t,"a",(function(){return r.d}))},1170:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},1222:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var a=r(n(19));t.useThemeConfig=function(){return a.default().siteConfig.themeConfig}},1223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var r=n(1164);t.isDocsPluginEnabled=!!r.useAllDocsData},1224:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var i=o(n(0)),l=n(1222),s=n(1223),u=n(1164),d=c(n(1230));function f(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var a={};return t.forEach((function(e){a[e]=function(e){var t=d.default.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(d.default.clear(e,n),{preferredVersionName:null})}(e)})),a}function m(){var e=u.useAllDocsData(),t=l.useThemeConfig().docs.versionPersistence,n=i.useMemo((function(){return Object.keys(e)}),[e]),r=i.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),a=r[0],o=r[1];return i.useEffect((function(){o(f({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[a,i.useMemo((function(){return{savePreferredVersion:function(e,n){d.default.save(e,t,n),o((function(t){var r;return Object.assign(Object.assign({},t),((r={})[e]={preferredVersionName:n},r))}))}}}),[o])]}var v=i.createContext(null);function h(e){var t=e.children,n=m();return i.default.createElement(v.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return s.isDocsPluginEnabled?i.default.createElement(h,null,t):i.default.createElement(i.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=i.useContext(v);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},1225:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(void 0);t.a=a},1226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},1227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)}},1228:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var a=r(n(19));t.useTitleFormatter=function(e){var t=a.default().siteConfig,n=void 0===t?{}:t,r=n.title,o=n.titleDelimiter,c=void 0===o?"|":o;return e&&e.trim().length?e.trim()+" "+c+" "+r:r}},1229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var r=n(0),a=n(1224),o=n(1164),c=n(1231);t.useDocsPreferredVersion=function(e){void 0===e&&(e=c.DEFAULT_PLUGIN_ID);var t=o.useDocsData(e),n=a.useDocsPreferredVersionContext(),i=n[0],l=n[1],s=i[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:r.useCallback((function(t){l.savePreferredVersion(e,t)}),[l])}},t.useDocsPreferredVersionByPluginId=function(){var e=o.useAllDocsData(),t=a.useDocsPreferredVersionContext()[0],n=Object.keys(e),r={};return n.forEach((function(n){r[n]=function(n){var r=e[n],a=t[n].preferredVersionName;return a?r.versions.find((function(e){return e.name===a})):null}(n)})),r}},1230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"docs-preferred-version-"+e},a={save:function(e,t,n){"none"===t||window.localStorage.setItem(r(e),n)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(r(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(r(e))}};t.default=a},1231:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));var r="default"},1232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),c=f(o),i=f(n(1233)),l=f(n(1)),s=f(n(1234)),u=f(n(1235)),d=n(1236);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",r({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},1233:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},1234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},1236:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},1237:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=n(0),c=n.n(o),i=n(1166),l=n(1164),s=n(1161);function u(e){var t,n=e.label,o=e.to,u=e.docsPluginId,d=Object(a.a)(e,["label","to","docsPluginId"]),f=Object(l.useActiveVersion)(u),m=Object(s.useDocsPreferredVersion)(u).preferredVersion,v=Object(l.useLatestVersion)(u),h=null!==(t=null!=f?f:m)&&void 0!==t?t:v,b=null!=n?n:h.label,p=null!=o?o:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return c.a.createElement(i.a,Object(r.a)({},d,{label:b,to:p}))}},1238:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=n(0),c=n.n(o),i=n(1166),l=n(1164),s=n(1161),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,o=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,m=e.dropdownItemsBefore,v=e.dropdownItemsAfter,h=Object(a.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=Object(l.useActiveDocContext)(d),p=Object(l.useVersions)(d),g=Object(l.useLatestVersion)(d),O=Object(s.useDocsPreferredVersion)(d),E=O.preferredVersion,j=O.savePreferredVersionName;var k=null!==(t=null!==(n=b.activeVersion)&&void 0!==n?n:E)&&void 0!==t?t:g,y=o?"Versions":k.label,_=o?void 0:u(k).path;return c.a.createElement(i.a,Object(r.a)({},h,{mobile:o,label:y,to:_,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){j(e.name)}}})),t=[].concat(m,e,v);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},1239:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=n(0),c=n.n(o),i=n(1166),l=n(1164),s=n(1160),u=n(1161);function d(e){var t,n,o=e.docId,d=e.activeSidebarClassName,f=e.label,m=e.docsPluginId,v=Object(a.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),h=Object(l.useActiveDocContext)(m),b=h.activeVersion,p=h.activeDoc,g=Object(u.useDocsPreferredVersion)(m).preferredVersion,O=Object(l.useLatestVersion)(m),E=null!==(t=null!=b?b:g)&&void 0!==t?t:O,j=E.docs.find((function(e){return e.id===o}));if(!j)throw new Error("DocNavbarItem: couldn't find any doc with id="+o+" in version "+E.name+".\nAvailable docIds=\n- "+E.docs.join("\n- "));return c.a.createElement(i.a,Object(r.a)({exact:!0},v,{className:Object(s.a)(v.className,(n={},n[d]=p&&p.sidebar===j.sidebar,n)),label:null!=f?f:j.id,to:j.path}))}}}]);
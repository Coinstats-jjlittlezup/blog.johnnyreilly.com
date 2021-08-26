"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[75658],{92511:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(63366),a=n(67294),o=n(73727),l=n(39962),i=n(2735),c=n(36136),s=(0,a.createContext)({collectLink:function(){}}),u=n(79524),m=n(63905),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,b=e.activeClassName,g=e.isActive,p=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,Z=(0,r.Z)(e,d),_=(0,l.Z)().siteConfig,w=_.trailingSlash,y=_.baseUrl,N=(0,u.C)().withBaseUrl,C=(0,a.useContext)(s),L=v||h,I=(0,i.Z)(L),S=null==L?void 0:L.replace("pathname://",""),D=void 0!==S?(n=S,k&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0;D&&I&&(D=(0,m.applyTrailingSlash)(D,{trailingSlash:w,baseUrl:y}));var B,T=(0,a.useRef)(!1),U=f?o.OL:o.rU,A=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!A&&I&&null!=D&&window.docusaurus.prefetch(D),function(){A&&B&&B.disconnect()}}),[D,A,I]);var x=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,M=!D||!I||x;return D&&I&&!x&&!p&&C.collectLink(D),M?a.createElement("a",Object.assign({href:D},L&&!I&&{target:"_blank",rel:"noopener noreferrer"},Z)):a.createElement(U,Object.assign({},Z,{onMouseEnter:function(){T.current||null==D||(window.docusaurus.preload(D),T.current=!0)},innerRef:function(e){var t,n;A&&e&&I&&(t=e,n=function(){null!=D&&window.docusaurus.prefetch(D)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))}))).observe(t))},to:D||""},f&&{isActive:g,activeClassName:b}))}},23855:function(e,t){t.Z=function(){return null}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},79524:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(39962),a=n(2735);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},56681:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},75658:function(e,t,n){n.d(t,{Z:function(){return Se}});var r=n(67294),a=n(86010),o=n(5977),l=n(66585),i=n(85653),c="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,i.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,i.nT)(),n=t.isClosed,o=t.close,c=(0,i.LU)().announcementBar;if(!c)return null;var s=c.content,u=c.backgroundColor,h=c.textColor,b=c.isCloseable;return!s||b&&n?null:r.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,(e={},e[v]=b,e)),dangerouslySetInnerHTML:{__html:s}}),b?r.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:o,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(87462),g=n(23855),p=n(51048),E={toggle:"toggle_71bT"},k=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.dark),style:n},t)},Z=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.light),style:n},t)},_=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,i=e.onChange,c=(0,r.useState)(o),s=c[0],u=c[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function w(e){var t=(0,i.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,c=(0,p.Z)();return r.createElement(_,(0,b.Z)({disabled:!c,icons:{checked:r.createElement(k,{icon:n,style:a}),unchecked:r.createElement(Z,{icon:o,style:l})}},e))}var y=n(48002),N=n(36136),C=function(){return N.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null},L=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(C()),a=function(){var t=C();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)},I=function(e){var t=(0,o.TH)(),n=(0,r.useState)(e),a=n[0],l=n[1],c=(0,r.useRef)(!1),s=(0,r.useState)(0),u=s[0],m=s[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return L((function(t,n){var r=t.scrollY,a=null==n?void 0:n.scrollY;if(e)if(r<u)l(!0);else{if(c.current)return c.current=!1,void l(!1);a&&0===r&&l(!0);var o=document.documentElement.scrollHeight-u,i=window.innerHeight;a&&r>=a?l(!1):r+i<o&&l(!0)}}),[u,c]),(0,i.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}};var S=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},D="desktop",B="mobile",T="ssr";function U(){return N.Z.canUseDOM?window.innerWidth>996?D:B:T}var A=function(){var e=(0,r.useState)((function(){return U()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(U())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t},x=n(17849),M=n(25605),P=n(63366),R=n(92511),W={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},O=["sources","className","alt"],H=function(e){var t=(0,p.Z)(),n=(0,y.Z)().isDarkTheme,o=e.sources,l=e.className,i=e.alt,c=void 0===i?"":i,s=(0,P.Z)(e,O),u=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,u.map((function(e){return r.createElement("img",(0,b.Z)({key:e,src:o[e],alt:c,className:(0,a.Z)(W.themedImage,W["themedImage--"+e],l)},s))})))},V=n(79524),z=n(39962),j=["imageClassName","titleClassName"],q=function(e){var t=(0,z.Z)().siteConfig.title,n=(0,i.LU)().navbar,a=n.title,o=n.logo,l=void 0===o?{src:""}:o,c=e.imageClassName,s=e.titleClassName,u=(0,P.Z)(e,j),m=(0,V.Z)(l.href||"/"),d={light:(0,V.Z)(l.src),dark:(0,V.Z)(l.srcDark||l.src)};return r.createElement(R.Z,(0,b.Z)({to:m},u,l.target&&{target:l.target}),l.src&&r.createElement(H,{className:c,sources:d,alt:l.alt||a||t}),null!=a&&r.createElement("b",{className:s},a))},F=["width","height","className"],G=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,l=e.className,i=(0,P.Z)(e,F);return r.createElement("svg",(0,b.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},i),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},K="toggle_3Zt9",J="navbarHideable_2qcr",Q="navbarHidden_3yey",Y="right";function X(){return(0,i.LU)().navbar.items}function $(){var e=(0,i.LU)().colorMode.disableSwitch,t=(0,y.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function ee(e){var t=e.sidebarShown,n=e.toggleSidebar;S(t);var o=X(),c=$(),s=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,i.g8)())?void 0:t({toggleSidebar:a}),l=(0,i.D9)(o),c=(0,r.useState)((function(){return!1})),s=c[0],u=c[1];(0,r.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(q,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&t&&r.createElement(w,{checked:c.isDarkTheme,onChange:c.toggle})),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(M.Z,(0,b.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},r.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var te=function(){var e,t,n,o,l,c,s,u=(0,i.LU)().navbar,m=u.hideOnScroll,d=u.style,f=(t=A(),n="mobile"===t,o=(0,r.useState)(!1),l=o[0],c=o[1],s=(0,r.useCallback)((function(){c((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&c(!1)}),[t]),{shouldRender:n,toggle:s,shown:l}),v=$(),h=(0,x.gA)(),p=I(m),E=p.navbarRef,k=p.isNavbarVisible,Z=X(),_=Z.some((function(e){return"search"===e.type})),y=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:Y)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:Y)}))}}(Z),N=y.leftItems,C=y.rightItems;return r.createElement("nav",{ref:E,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===d,"navbar--primary":"primary"===d,"navbar-sidebar--show":f.shown},e[J]=m,e[Q]=m&&!k,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==Z?void 0:Z.length)>0||h)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f.toggle,onKeyDown:f.toggle},r.createElement(G,null)),r.createElement(q,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),N.map((function(e,t){return r.createElement(M.Z,(0,b.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},C.map((function(e,t){return r.createElement(M.Z,(0,b.Z)({},e,{key:t}))})),!v.disabled&&r.createElement(w,{className:K,checked:v.isDarkTheme,onChange:v.toggle}),!_&&r.createElement(g.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:f.toggle}),f.shouldRender&&r.createElement(ee,{sidebarShown:f.shown,toggleSidebar:f.toggle}))},ne=n(2735),re="footerLogoLink_MyFc",ae=n(56681),oe=["to","href","label","prependBaseUrlToHref"];function le(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,P.Z)(e,oe),i=(0,V.Z)(t),c=(0,V.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(R.Z,(0,b.Z)({className:"footer__link-item"},n?{href:o?c:n}:{to:i},l),n&&!(0,ne.Z)(n)?r.createElement("span",null,a,r.createElement(ae.Z,null)):a)}var ie=function(e){var t=e.sources,n=e.alt;return r.createElement(H,{className:"footer__logo",alt:n,sources:t})};var ce=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,c=t.logo,s=void 0===c?{}:c,u={light:(0,V.Z)(s.src),dark:(0,V.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(le,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(R.Z,{href:s.href,className:re},r.createElement(ie,{alt:s.alt,sources:u})):r.createElement(ie,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},se=(0,i.WA)("theme"),ue="light",me="dark",de=function(e){return e===me?me:ue},fe=function(e){(0,i.WA)("theme").set(de(e))},ve=function(){var e=(0,i.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return N.Z.canUseDOM?de(document.documentElement.getAttribute("data-theme")):de(e)}(t)),l=o[0],c=o[1],s=(0,r.useCallback)((function(){c(ue),fe(ue)}),[]),u=(0,r.useCallback)((function(){c(me),fe(me)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",de(l))}),[l]),(0,r.useEffect)((function(){if(!n)try{var e=se.get();null!==e&&c(de(e))}catch(t){console.error(t)}}),[c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?me:ue)}))}),[]),{isDarkTheme:l===me,setLightTheme:s,setDarkTheme:u}},he=n(25406);var be=function(e){var t=ve(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(he.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},ge="docusaurus.tab.",pe=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,i.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,i._f)().forEach((function(t){if(t.startsWith(ge)){var n=t.substring(ge.length);e[n]=(0,i.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},Ee=(0,r.createContext)(void 0);var ke=function(e){var t=pe(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(Ee.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function Ze(e){var t=e.children;return r.createElement(be,null,r.createElement(i.pl,null,r.createElement(ke,null,r.createElement(i.L5,null,r.createElement(i.Cn,null,t)))))}var _e=n(89584);function we(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(_e.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var ye=n(24175);function Ne(){var e=(0,z.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,i.l5)();return r.createElement(_e.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ce(e){var t=e.permalink,n=(0,z.Z)().siteConfig.url,a=function(){var e=(0,z.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,V.Z)(t)}(),l=t?""+n+t:a;return r.createElement(_e.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function Le(e){var t=(0,z.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,l=a.localeConfigs,c=(0,i.LU)(),s=c.metadatas,u=c.image,m=e.title,d=e.description,f=e.image,v=e.keywords,h=e.searchMetadatas,g=(0,V.Z)(n),p=(0,i.pe)(m),E=o,k=l[o].direction;return r.createElement(r.Fragment,null,r.createElement(_e.Z,null,r.createElement("html",{lang:E,dir:k}),n&&r.createElement("link",{rel:"shortcut icon",href:g}),r.createElement("title",null,p),r.createElement("meta",{property:"og:title",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&r.createElement(ye.Z,{image:u}),f&&r.createElement(ye.Z,{image:f}),r.createElement(ye.Z,{description:d,keywords:v}),r.createElement(Ce,null),r.createElement(Ne,null),r.createElement(we,(0,b.Z)({tag:i.HX,locale:o},h)),r.createElement(_e.Z,null,s.map((function(e,t){return r.createElement("meta",(0,b.Z)({key:"metadata_"+t},e))}))))}var Ie=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Se=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return Ie(),r.createElement(Ze,null,r.createElement(Le,e),r.createElement(u,null),r.createElement(h,null),r.createElement(te,null),r.createElement("div",{className:(0,a.Z)(i.kM.wrapper.main,o,l)},t),!n&&r.createElement(ce,null))}},36971:function(e,t,n){n.d(t,{O:function(){return b}});var r=n(87462),a=n(63366),o=n(67294),l=n(86010),i=n(92511),c=n(79524),s=n(56681),u=n(2735),m=n(25605),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function b(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,b=void 0===h?"":h,g=e.prependBaseUrlToHref,p=(0,a.Z)(e,d),E=(0,c.Z)(m),k=(0,c.Z)(n),Z=(0,c.Z)(f,{forcePrependBaseUrl:!0}),_=v&&f&&!(0,u.Z)(f),w="dropdown__link--active"===b;return o.createElement(i.Z,(0,r.Z)({},f?{href:g?Z:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=p.className)&&t.includes(b)?"":b,to:E},n||l?{isActive:function(e,t){return l?new RegExp(l).test(t.pathname):t.pathname.startsWith(k)}}:null),p),_?o.createElement("span",null,v,o.createElement(s.Z,w&&{width:12,height:12})):v)}function g(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,a.Z)(e,f),s=o.createElement(b,(0,r.Z)({className:(0,l.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?o.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,v));return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,r.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,l=(e.position,(0,a.Z)(e,h)),i=n?p:g;return o.createElement(i,(0,r.Z)({},l,{activeClassName:(0,m.E)(n)}))}},24520:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(63366),o=n(67294),l=n(36971),i=n(17849),c=n(86010),s=n(25605),u=n(85653),m=n(63905),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,d),b=(0,i.Iw)(v),g=b.activeVersion,p=b.activeDoc,E=(0,u.J)(v).preferredVersion,k=(0,i.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,m.uniq)([g,E,k].filter(Boolean)),n),_=(0,s.E)(h.mobile);return o.createElement(l.Z,(0,r.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(t={},t[_]=(null==p?void 0:p.sidebar)&&p.sidebar===Z.sidebar,t)),activeClassName:_,label:null!=f?f:Z.id,to:Z.path}))}},37999:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(63366),o=n(67294),l=n(36971),i=n(64510),c=n(17849),s=n(85653),u=n(66585),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,g=e.dropdownItemsAfter,p=(0,a.Z)(e,m),E=(0,c.Iw)(v),k=(0,c.gB)(v),Z=(0,c.yW)(v),_=(0,s.J)(v),w=_.preferredVersion,y=_.savePreferredVersionName;var N,C=(N=k.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(b,N,g)),L=null!=(t=null!=(n=E.activeVersion)?n:w)?t:Z,I=f&&C?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):L.label,S=f&&C?void 0:d(L).path;return C.length<=1?o.createElement(l.Z,(0,r.Z)({},p,{mobile:f,label:I,to:S,isActive:h?function(){return!1}:void 0})):o.createElement(i.Z,(0,r.Z)({},p,{mobile:f,label:I,to:S,items:C,isActive:h?function(){return!1}:void 0}))}},66028:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(87462),a=n(63366),o=n(67294),l=n(36971),i=n(17849),c=n(85653),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,i.zu)(m),v=(0,c.J)(m).preferredVersion,h=(0,i.yW)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.createElement(l.Z,(0,r.Z)({},d,{label:g,to:p}))}},64510:function(e,t,n){var r=n(87462),a=n(63366),o=n(67294),l=n(86010),i=n(85653),c=n(36971),s=n(25605),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,a.Z)(e,u),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),b=h[0],g=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":b})},o.createElement(c.O,(0,r.Z)({className:(0,l.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,i.be)(),h=f(n,v),b=(0,i.uR)({initialState:function(){return!h}}),g=b.collapsed,p=b.toggleCollapsed,E=b.setCollapsed;return(0,o.useEffect)((function(){h&&E(!h)}),[v,h]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement(c.O,(0,r.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),l=n?h:v;return o.createElement(l,r)}},25605:function(e,t,n){n.d(t,{Z:function(){return k},E:function(){return E}});var r=n(63366),a=n(67294),o=n(36971),l=n(64510),i=n(87462),c=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,s=(0,r.Z)(e,c);return a.createElement("svg",(0,i.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},s),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(39962),m=n(85653),d="iconLanguage_3vod",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,c=(0,r.Z)(e,f),v=(0,u.Z)().i18n,h=v.currentLocale,b=v.locales,g=v.localeConfigs,p=(0,m.l5)();function E(e){return g[e].label}var k=b.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,k,o),_=t?"Languages":E(h);return a.createElement(l.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(s,{className:d}),a.createElement("span",null,_)),items:Z}))}var h=n(23855);function b(e){return e.mobile?null:a.createElement(h.Z,null)}var g=["type"],p={default:function(){return o.Z},localeDropdown:function(){return v},search:function(){return b},dropdown:function(){return l.Z},docsVersion:function(){return n(66028).Z},docsVersionDropdown:function(){return n(37999).Z},doc:function(){return n(24520).Z}};var E=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,r.Z)(e,g),o=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return a.createElement(o,n)}},24175:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(89584),o=n(85653),l=n(79524);function i(e){var t=e.title,n=e.description,i=e.keywords,c=e.image,s=e.children,u=(0,o.pe)(t),m=(0,l.C)().withBaseUrl,d=c?m(c,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),i&&r.createElement("meta",{name:"keywords",content:Array.isArray(i)?i.join(","):i}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},25406:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},48002:function(e,t,n){var r=n(67294),a=n(25406);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},84136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],l="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,l)}},63905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(84136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(93509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},93509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);
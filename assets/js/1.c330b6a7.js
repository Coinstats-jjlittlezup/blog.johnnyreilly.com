(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1212:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1213:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a),c=/{\w+}/g,o="{}";function l(e,t){var n=[],a=e.replace(c,(function(e){var a=e.substr(1,e.length-2),c=null==t?void 0:t[a];if(void 0!==c){var l=r.a.isValidElement(c)?c:String(c);return n.push(l),o}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(o).reduce((function(e,t,a){var r;return e.concat(t).concat(null!==(r=n[a])&&void 0!==r?r:"")}),""):a.split(o).reduce((function(e,t,a){return[].concat(e,[r.a.createElement(r.a.Fragment,{key:a},t,n[a])])}),[])}function i(e){return l(e.children,e.values)}var s=n(28);function u(e){var t,n=e.id,a=e.message;return null!==(t=s[null!=n?n:a])&&void 0!==t?t:a}function m(e,t){var n,a=e.message;return l(null!==(n=u({message:a,id:e.id}))&&void 0!==n?n:a,t)}function d(e){var t,n=e.children,a=e.id,c=e.values,o=null!==(t=u({message:n,id:a}))&&void 0!==t?t:n;return r.a.createElement(i,{values:c},o)}},1214:function(e,t,n){"use strict";var a=n(10),r=n(0),c=n.n(r),o=n(13),l=n(1281),i=n(9),s=Object(r.createContext)({collectLink:function(){}}),u=n(1215);t.a=function(e){var t,n,m,d=e.isNavLink,f=e.to,b=e.href,v=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],p=e.autoAddBaseUrl,E=void 0===p||p,O=Object(a.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,k=Object(r.useContext)(s),w=f||b,y=Object(l.a)(w),C=null==w?void 0:w.replace("pathname://",""),N=void 0!==C?(n=C,E&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,_=Object(r.useRef)(!1),L=d?o.e:o.c,A=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&y&&null!=N&&window.docusaurus.prefetch(N),function(){A&&m&&m.disconnect()}}),[N,A,y]);var S=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,I=!N||!y||S;return N&&y&&!S&&!g&&k.collectLink(N),I?c.a.createElement("a",Object.assign({href:N},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},O)):c.a.createElement(L,Object.assign({},O,{onMouseEnter:function(){_.current||null==N||(window.docusaurus.preload(N),_.current=!0)},innerRef:function(e){var t,n;A&&e&&y&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),n())}))}))).observe(t))},to:N||""},d&&{isActive:h,activeClassName:v}))}},1215:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(11),r=n(1281);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,o=c.forcePrependBaseUrl,l=void 0!==o&&o,i=c.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},1216:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1212),o=n(1213),l=n(19),i=n(298),s=n.n(i);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var m=function(){var e=Object(a.useRef)(null),t=Object(l.useLocation)();return Object(a.useEffect)((function(){!t.hash&&e.current&&u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(o.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=n(25),f=Object(a.createContext)(void 0);var b=function(){var e=Object(a.useContext)(f);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e},v=n(299),h=n.n(v);var g=function(){var e,t=b(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,l=Object(d.useThemeConfig)().announcementBar;if(!l)return null;var i=l.content,s=l.backgroundColor,u=l.textColor,m=l.isCloseable;return!i||m&&n?null:r.a.createElement("div",{className:h.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},r.a.createElement("div",{className:Object(c.a)(h.a.announcementBarContent,(e={},e[h.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:i}}),m?r.a.createElement("button",{type:"button",className:h.a.announcementBarClose,onClick:a,"aria-label":Object(o.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},p=n(4),E=function(){return null},O=n(11),j=n(300),k=n.n(j),w=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(k.a.toggle,k.a.dark),style:n},t)},y=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(k.a.toggle,k.a.light),style:n},t)},C=Object(a.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,i=e.onChange,s=Object(a.useState)(o),u=s[0],m=s[1],d=Object(a.useState)(!1),f=d[0],b=d[1],v=Object(a.useRef)(null);return r.a.createElement("div",{className:Object(c.a)("react-toggle",t,{"react-toggle--checked":u,"react-toggle--focus":f,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)}},r.a.createElement("div",{className:"react-toggle-track"},r.a.createElement("div",{className:"react-toggle-track-check"},n.checked),r.a.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.a.createElement("div",{className:"react-toggle-thumb"}),r.a.createElement("input",{ref:v,checked:u,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onFocus:function(){return b(!0)},onBlur:function(){return b(!1)}}))})),N=function(e){var t=Object(d.useThemeConfig)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(O.default)().isClient;return r.a.createElement(C,Object(p.a)({disabled:!l,icons:{checked:r.a.createElement(w,{icon:n,style:a}),unchecked:r.a.createElement(y,{icon:c,style:o})}},e))},_=n(1278),L=n(9),A=function(){return{scrollX:L.a.canUseDOM?window.pageXOffset:0,scrollY:L.a.canUseDOM?window.pageYOffset:0}},S=function(e,t){void 0===t&&(t=[]);var n=Object(a.useRef)(A()),r=function(){var t=A();e&&e(t,n.current),n.current=t};Object(a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)},I=function(e){var t=Object(l.useLocation)(),n=Object(a.useState)(e),r=n[0],c=n[1],o=Object(a.useRef)(!1),i=Object(a.useState)(0),s=i[0],u=i[1],m=Object(a.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return S((function(t,n){var a=t.scrollY,r=n.scrollY;if(e)if(a<s)c(!0);else{if(o.current)return o.current=!1,void c(!1);r&&0===a&&c(!0);var l=document.documentElement.scrollHeight-s,i=window.innerHeight;r&&a>=r?c(!1):a+i<l&&c(!0)}}),[s,o]),Object(a.useEffect)((function(){e&&c(!0)}),[t.pathname]),Object(a.useEffect)((function(){e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}};var T=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},B="desktop",D="mobile";var x=function(){var e=L.a.canUseDOM;function t(){if(e)return window.innerWidth>996?B:D}var n=Object(a.useState)(t),r=n[0],c=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),r},U=n(10),P=n(1217),V=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,c=void 0===a?20:a,o=Object(U.a)(e,["width","height"]);return r.a.createElement("svg",Object(p.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:c},o),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function M(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,c=Object(U.a)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=Object(O.default)().i18n,l=o.currentLocale,i=o.locales,s=o.localeConfigs,u=Object(d.useAlternatePageUtils)();function m(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:m(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),b=[].concat(n,f,a),v=t?"Languages":m(l);return r.a.createElement(P.a,Object(p.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement(V,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,v)),items:b}))}var R=n(301),H=n.n(R);function W(e){return e.mobile?null:r.a.createElement("div",{className:H.a.searchWrapper},r.a.createElement(E,null))}var z={default:function(){return P.a},localeDropdown:function(){return M},search:function(){return W},docsVersion:function(){return n(1283).default},docsVersionDropdown:function(){return n(1284).default},doc:function(){return n(1285).default}};function F(e){var t=e.type,n=Object(U.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=z[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var G=n(1214),K=n(302),Y=n.n(K),Q=function(e){var t=Object(O.default)().isClient,n=Object(_.a)().isDarkTheme,a=e.sources,o=e.className,l=e.alt,i=void 0===l?"":l,s=Object(U.a)(e,["sources","className","alt"]),u=t?n?["dark"]:["light"]:["light","dark"];return r.a.createElement(r.a.Fragment,null,u.map((function(e){return r.a.createElement("img",Object(p.a)({key:e,src:a[e],alt:i,className:Object(c.a)(Y.a.themedImage,Y.a["themedImage--"+e],o)},s))})))},q=n(1215),J=function(e){var t=Object(O.default)().isClient,n=Object(d.useThemeConfig)().navbar,a=n.title,c=n.logo,o=void 0===c?{src:""}:c,l=e.imageClassName,i=e.titleClassName,s=Object(U.a)(e,["imageClassName","titleClassName"]),u=Object(q.a)(o.href||"/"),m={light:Object(q.a)(o.src),dark:Object(q.a)(o.srcDark||o.src)};return r.a.createElement(G.a,Object(p.a)({to:u},s,o.target&&{target:o.target}),o.src&&r.a.createElement(Q,{key:t,className:l,sources:m,alt:o.alt||a||"Logo"}),null!=a&&r.a.createElement("strong",{className:i},a))},X=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,c=void 0===a?30:a,o=e.className,l=Object(U.a)(e,["width","height","className"]);return r.a.createElement("svg",Object(p.a)({"aria-label":"Menu",className:o,width:n,height:c,viewBox:"0 0 30 30",role:"img",focusable:"false"},l),r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},$=n(303),Z=n.n($),ee="right";var te=function(){var e,t=Object(d.useThemeConfig)(),n=t.navbar,o=n.items,l=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=Object(a.useState)(!1),m=u[0],f=u[1],b=Object(_.a)(),v=b.isDarkTheme,h=b.setLightTheme,g=b.setDarkTheme,O=I(l),j=O.navbarRef,k=O.isNavbarVisible;T(m);var w=Object(a.useCallback)((function(){f(!0)}),[f]),y=Object(a.useCallback)((function(){f(!1)}),[f]),C=Object(a.useCallback)((function(e){return e.target.checked?g():h()}),[h,g]),L=x();Object(a.useEffect)((function(){L===B&&f(!1)}),[L]);var A=o.some((function(e){return"search"===e.type})),S=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:ee)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:ee)}))}}(o),D=S.leftItems,U=S.rightItems;return r.a.createElement("nav",{ref:j,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[Z.a.navbarHideable]=l,e[Z.a.navbarHidden]=l&&!k,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:w,onKeyDown:w},r.a.createElement(X,null)),r.a.createElement(J,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),D.map((function(e,t){return r.a.createElement(F,Object(p.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},U.map((function(e,t){return r.a.createElement(F,Object(p.a)({},e,{key:t}))})),!s&&r.a.createElement(N,{className:Z.a.displayOnlyInLargeViewport,checked:v,onChange:C}),!A&&r.a.createElement(E,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(J,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!s&&m&&r.a.createElement(N,{checked:v,onChange:C})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.a.createElement(F,Object(p.a)({mobile:!0},e,{onClick:y,key:t}))})))))))},ne=n(304),ae=n.n(ne);function re(e){var t=e.to,n=e.href,a=e.label,c=e.prependBaseUrlToHref,o=Object(U.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(q.a)(t),i=Object(q.a)(n,{forcePrependBaseUrl:!0});return r.a.createElement(G.a,Object(p.a)({className:"footer__link-item"},n?{href:c?i:n}:{to:l},o),a)}var ce=function(e){var t=e.sources,n=e.alt;return r.a.createElement(Q,{className:"footer__logo",alt:n,sources:t})};var oe=function(){var e=Object(d.useThemeConfig)().footer,t=e||{},n=t.copyright,a=t.links,o=void 0===a?[]:a,l=t.logo,i=void 0===l?{}:l,s={light:Object(q.a)(i.src),dark:Object(q.a)(i.srcDark||i.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(re,e))}))):null)}))),(i||n)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement(G.a,{href:i.href,className:ae.a.footerLogoLink},r.a.createElement(ce,{alt:i.alt,sources:s})):r.a.createElement(ce,{alt:i.alt,sources:s})),n?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},le=Object(d.createStorageSlot)("theme"),ie="light",se="dark",ue=function(e){return e===se?se:ie},me=function(e){Object(d.createStorageSlot)("theme").set(ue(e))},de=function(){var e=Object(d.useThemeConfig)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,c=Object(a.useState)(function(e){return L.a.canUseDOM?ue(document.documentElement.getAttribute("data-theme")):ue(e)}(t)),o=c[0],l=c[1],i=Object(a.useCallback)((function(){l(ie),me(ie)}),[]),s=Object(a.useCallback)((function(){l(se),me(se)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",ue(o))}),[o]),Object(a.useEffect)((function(){if(!n)try{var e=le.get();null!==e&&l(ue(e))}catch(t){console.error(t)}}),[l]),Object(a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?se:ie)}))}),[]),{isDarkTheme:o===se,setLightTheme:i,setDarkTheme:s}},fe=n(1280);var be=function(e){var t=de(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(fe.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)};function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function he(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ve(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var ge="docusaurus.tab.",pe=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){Object(d.createStorageSlot)("docusaurus.tab."+e).set(t)}),[]);return Object(a.useEffect)((function(){try{for(var e,t={},a=he(Object(d.listStorageKeys)());!(e=a()).done;){var r=e.value;if(r.startsWith(ge))t[r.substring(ge.length)]=Object(d.createStorageSlot)(r).get()}n(t)}catch(c){console.error(c)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},Ee=Object(d.createStorageSlot)("docusaurus.announcement.dismiss"),Oe=Object(d.createStorageSlot)("docusaurus.announcement.id"),je=function(){var e=Object(d.useThemeConfig)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){Ee.set("true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=Oe.get();"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;Oe.set(t),a&&Ee.set("false"),(a||"false"===Ee.get())&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}};var ke=function(e){var t=pe(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=je(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(f.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function we(e){var t=e.children;return r.a.createElement(be,null,r.a.createElement(ke,null,r.a.createElement(d.DocsPreferredVersionContextProvider,null,t)))}var ye=n(27);function Ce(e){var t=e.locale,n=e.version,a=e.tag;return r.a.createElement(ye.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&r.a.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.a.createElement("meta",{name:"docusaurus_tag",content:a}))}var Ne=n(1282);function _e(){var e=Object(O.default)().i18n,t=e.defaultLocale,n=e.locales,a=Object(d.useAlternatePageUtils)();return r.a.createElement(ye.a,null,n.map((function(e){return r.a.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.a.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Le(e){var t=e.permalink,n=Object(O.default)().siteConfig.url,a=function(){var e=Object(O.default)().siteConfig.url,t=Object(l.useLocation)().pathname;return e+Object(q.a)(t)}(),c=t?""+n+t:a;return r.a.createElement(ye.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function Ae(e){var t=Object(O.default)(),n=t.siteConfig,a=n.favicon,c=n.themeConfig.metadatas,o=t.i18n,l=o.currentLocale,i=o.localeConfigs,s=e.title,u=e.description,m=e.image,f=e.keywords,b=e.searchMetadatas,v=Object(q.a)(a),h=l,g=i[l].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,null,r.a.createElement("html",{lang:h,dir:g}),a&&r.a.createElement("link",{rel:"shortcut icon",href:v})),r.a.createElement(Ne.a,{title:s,description:u,keywords:f,image:m}),r.a.createElement(Le,null),r.a.createElement(_e,null),r.a.createElement(Ce,Object(p.a)({tag:d.DEFAULT_SEARCH_TAG,locale:l},b)),r.a.createElement(ye.a,null,c.map((function(e,t){return r.a.createElement("meta",Object(p.a)({key:"metadata_"+t},e))}))))}n(305);var Se=function(){Object(a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(306);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName,o=e.pageClassName;return Se(),r.a.createElement(we,null,r.a.createElement(Ae,e),r.a.createElement(m,null),r.a.createElement(g,null),r.a.createElement(te,null),r.a.createElement("div",{className:Object(c.a)(d.ThemeClassNames.wrapper.main,a,o)},t),!n&&r.a.createElement(oe,null))}},1217:function(e,t,n){"use strict";var a=n(4),r=n(10),c=n(0),o=n.n(c),l=n(1212),i=n(1214),s=n(1215),u=n(19),m=n(25);function d(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,f=e.prependBaseUrlToHref,b=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),h=Object(s.a)(t),g=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(a.a)({},l?{href:f?g:l}:Object.assign({isNavLink:!0,activeClassName:d,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(h)}}:null),b),u)}function f(e){var t,n=e.items,i=e.position,s=e.className,u=Object(r.a)(e,["items","position","className"]),m=Object(c.useRef)(null),f=Object(c.useRef)(null),b=Object(c.useState)(!1),v=b[0],h=b[1];Object(c.useEffect)((function(){var e=function(e){m.current&&!m.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]);var g=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.a.createElement("div",{ref:m,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":v})},o.a.createElement(d,Object(a.a)({className:g(s)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),null!==(t=u.children)&&void 0!==t?t:u.label),o.a.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:t},o.a.createElement(d,Object(a.a)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var a=m.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:g(c,!0)},l)))})))):o.a.createElement(d,Object(a.a)({className:g(s)},u))}function b(e){var t,n,i,s=e.items,f=e.className,b=(e.position,Object(r.a)(e,["items","className","position"])),v=Object(c.useRef)(null),h=Object(u.useLocation)().pathname,g=Object(c.useState)((function(){var e;return null===(e=!(null!=s&&s.some((function(e){return Object(m.isSamePath)(e.to,h)}))))||void 0===e||e})),p=g[0],E=g[1],O=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(d,Object(a.a)({className:O(f)},b)));var j=null!==(t=v.current)&&void 0!==t&&t.scrollHeight?(null===(n=v.current)||void 0===n?void 0:n.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":p})},o.a.createElement(d,Object(a.a)({role:"button",className:O(f,!0)},b,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!==(i=b.children)&&void 0!==i?i:b.label),o.a.createElement("ul",{className:"menu__list",ref:v,style:{height:p?void 0:j}},s.map((function(e,t){var n=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(d,Object(a.a)({activeClassName:"menu__link--active",className:O(n)},c,{onClick:b.onClick})))}))))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(r.a)(e,["mobile"]),c=n?b:f;return o.a.createElement(c,a)}},1278:function(e,t,n){"use strict";var a=n(0),r=n(1280);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},1280:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},1281:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},1282:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),c=n(27),o=n(25),l=n(1215);function i(e){var t=e.title,n=e.description,a=e.keywords,i=e.image,s=Object(o.useThemeConfig)().image,u=Object(o.useTitleFormatter)(t),m=Object(l.a)(i||s,{absolute:!0});return r.a.createElement(c.a,null,r.a.createElement("title",null,u),r.a.createElement("meta",{property:"og:title",content:u}),n&&r.a.createElement("meta",{name:"description",content:n}),n&&r.a.createElement("meta",{property:"og:description",content:n}),a&&r.a.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),m&&r.a.createElement("meta",{property:"og:image",content:m}),m&&r.a.createElement("meta",{name:"twitter:image",content:m}),m&&r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},1283:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(4),r=n(10),c=n(0),o=n.n(c),l=n(1217),i=n(20),s=n(25);function u(e){var t,n=e.label,c=e.to,u=e.docsPluginId,m=Object(r.a)(e,["label","to","docsPluginId"]),d=Object(i.useActiveVersion)(u),f=Object(s.useDocsPreferredVersion)(u).preferredVersion,b=Object(i.useLatestVersion)(u),v=null!==(t=null!=d?d:f)&&void 0!==t?t:b,h=null!=n?n:v.label,g=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(a.a)({},m,{label:h,to:g}))}},1284:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(4),r=n(10),c=n(0),o=n.n(c),l=n(1217),i=n(20),s=n(25),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,c=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,b=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),h=Object(i.useActiveDocContext)(m),g=Object(i.useVersions)(m),p=Object(i.useLatestVersion)(m),E=Object(s.useDocsPreferredVersion)(m),O=E.preferredVersion,j=E.savePreferredVersionName;var k=null!==(t=null!==(n=h.activeVersion)&&void 0!==n?n:O)&&void 0!==t?t:p,w=c?"Versions":k.label,y=c?void 0:u(k).path;return o.a.createElement(l.a,Object(a.a)({},v,{mobile:c,label:w,to:y,items:function(){var e=g.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){j(e.name)}}})),t=[].concat(f,e,b);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},1285:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(4),r=n(10),c=n(0),o=n.n(c),l=n(1217),i=n(20),s=n(1212),u=n(25);function m(e){var t,n,c=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,b=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(f),h=v.activeVersion,g=v.activeDoc,p=Object(u.useDocsPreferredVersion)(f).preferredVersion,E=Object(i.useLatestVersion)(f),O=null!==(t=null!=h?h:p)&&void 0!==t?t:E,j=O.docs.find((function(e){return e.id===c}));if(!j){var k=O.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+O.name+".\nAvailable docIds=\n- "+k)}return o.a.createElement(l.a,Object(a.a)({exact:!0},b,{className:Object(s.a)(b.className,(n={},n[m]=g&&g.sidebar===j.sidebar,n)),label:null!=d?d:j.id,to:j.path}))}}}]);
"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[41954],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85910:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return h}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"TypeScript 4.4 and more readable code",authors:"johnnyreilly",tags:["TypeScript","Control Flow Analysis of Aliased Conditions"],image:"blog/2021-08-14-typescript-4-4-more-readable-code/reactions-on-github.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/08/14/typescript-4-4-more-readable-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-08-14-typescript-4-4-more-readable-code.md",source:"@site/blog/2021-08-14-typescript-4-4-more-readable-code.md",title:"TypeScript 4.4 and more readable code",description:'An exciting feature is shipping with TypeScript 4.4. It has the name "Control Flow Analysis of Aliased Conditions" which is quite a mouthful. This post unpacks what this feature is, and demonstrates the contribution it makes to improving the readability of code.',date:"2021-08-14T00:00:00.000Z",formattedDate:"August 14, 2021",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"Control Flow Analysis of Aliased Conditions",permalink:"/tags/control-flow-analysis-of-aliased-conditions"}],readingTime:3.925,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",permalink:"/2021/08/15/bicep-azure-static-web-apps-azure-devops"},nextItem:{title:"TypeScript, abstract classes, and constructors",permalink:"/2021/08/01/typescript-abstract-classes-and-constructors"}},c={authorsImageUrls:[void 0]},d=[{value:"Indirect type narrowing via <code>const</code>",id:"indirect-type-narrowing-via-const",children:[]},{value:"The code we would like to write",id:"the-code-we-would-like-to-write",children:[]},{value:"Read more",id:"read-more",children:[]}],u={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An exciting feature is shipping with TypeScript 4.4. It has the name ",(0,i.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-beta/#cfa-aliased-conditions"},'"Control Flow Analysis of Aliased Conditions"')," which is quite a mouthful. This post unpacks what this feature is, and demonstrates the contribution it makes to improving the readability of code."),(0,i.kt)("h2",{id:"indirect-type-narrowing-via-const"},"Indirect type narrowing via ",(0,i.kt)("inlineCode",{parentName:"h2"},"const")),(0,i.kt)("p",null,'On June 24th 2021, an issue on the TypeScript GitHub repository with the title "Indirect type narrowing via ',(0,i.kt)("inlineCode",{parentName:"p"},"const"),'" was closed by ',(0,i.kt)("a",{parentName:"p",href:"https://www.twitter.com/ahejlsberg"},"Anders Hejlsberg"),". The issue had been open since 2016 and it was closed as it was covered by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/pull/44730"},"a pull request addressing control flow analysis of aliased conditional expressions and discriminants"),"."),(0,i.kt)("p",null,"It's fair to say that the TypeScript community was very excited about this, both judging from reactions on the issue:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/12184#issuecomment-867928408"},(0,i.kt)("img",{alt:"Screenshot of reactions on GitHub",src:n(65373).Z}))),(0,i.kt)("p",null,"And also the general delight on Twitter:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.twitter.com/johnny_reilly/status/1408162514504933378"},(0,i.kt)("img",{alt:"Screenshot of reactions on Twitter",src:n(40494).Z}))),(0,i.kt)("p",null,"What Zeh said is a great explanation of the significance of this feature:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lack of type narrowing with consts made me repeat code, or avoid helpfully namef consts, too many times")),(0,i.kt)("p",null,"With this feature we're going to have the possibility of more readable code, and less repetition. That's amazing!"),(0,i.kt)("h2",{id:"the-code-we-would-like-to-write"},"The code we would like to write"),(0,i.kt)("p",null,"Rather than starting with an explanation of what this new language feature is, let's instead start from the position of writing some code and seeing what's possible with TypeScript 4.4 that we couldn't tackle previously."),(0,i.kt)("p",null,"Here's a simple function that adds all the parameters it receives and returns the total. It's a tolerant function and will allow people to supply numbers in the form of strings as well; so it would successfully process ",(0,i.kt)("inlineCode",{parentName:"p"},"'2'")," as it would ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),". This is, of course, a slightly contrived example, but should be useful for demonstrating the new feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function add(...thingsToAdd: (string | number)[]): number {\n    let total = 0;\n    for (const thingToAdd of thingsToAdd) {\n        if (typeof thingToAdd === 'string') {\n            total += Number(thingToAdd);\n        } else {\n            total += thingToAdd;\n        }\n    }\n    return total;\n}\n\nconsole.log(add(1, '7', '3', 9))\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?ts=4.3.5#code/GYVwdgxgLglg9mABAQwCaoBQDodQBYxgDmAzgCpwCC6AXIhiVAE6FGIA+iYIAtgEYBTJgEoA2gF1hdbvyGIA3gChEKxABsBURFDhRkaxAF5EABgDcy1cDhN6EBI20FiFaqkRxgT1uSrphCpaqqjBeGFAAngAOAp7eLn7uhsmIAOSMLMSpAUrBeao6egYA1MYAcryCTOHORK7+FvkqAL6IAmokAoFNeYX6iKXxdYmNTc1BiOPBTJogTEh9ahbjivZgJHAaWGpwRBhomACMADRpAOypp6kAzJeIAJzCwkA"},"Try it out in the TypeScript playground.")),(0,i.kt)("p",null,"If we look at this function, whilst it works, it's not super expressive. The ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof thingToAdd === 'string'")," performs two purposes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It narrows the type from ",(0,i.kt)("inlineCode",{parentName:"li"},"string | number")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ol"},"It branches the logic, such that the ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," can be coerced into a ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," and added to the total.")),(0,i.kt)("p",null,"You can infer this from reading the code. However, what if we were to re-write it to capture intent? Let's try creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"shouldCoerceToNumber")," constant which expresses the action we need to take:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function add(...thingsToAdd: (string | number)[]): number {\n    let total = 0;\n    for (const thingToAdd of thingsToAdd) {\n        const shouldCoerceToNumber = typeof thingToAdd === 'string';\n        if (shouldCoerceToNumber) {\n            total += Number(thingToAdd);\n        } else {\n            total += thingToAdd;\n        }\n    }\n    return total;\n}\n\nconsole.log(add(1, '7', '3', 9))\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?ts=4.3.5#code/GYVwdgxgLglg9mABAQwCaoBQDodQBYxgDmAzgCpwCC6AXIhiVAE6FGIA+iYIAtgEYBTJgEoA2gF1hdbvyGIA3gChEKxABsBURFDhRkaxAF5EABgDcy1cDhN6EBI20FiFaqkRxgT1uSrphCpaqqvZgjiR4cCBqqADCcEIQAhQAcryCtsZQAJ4ADgKe3i5+7oZliADkjCzEFRbBwTBeDJHRcQlMSanpQgFKDQPauvqIANTGabJMGPisrv71gwC+iAJqJAKBgw06egbjRUTzqIsDS0GI58FMmiBMSLv6FueKoSRwGlhqcEQYaJgARgANJUAOwVEEVADMEMQAE5hMIgA"},"Try it out in the TypeScript playground.")),(0,i.kt)("p",null,"This is valid code; however TypeScript 4.3 is choking with an error:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the TypeScript playground running TypeScript 4.3 and throwing an error on our new code",src:n(23965).Z})),(0,i.kt)("p",null,"The error being surfaced is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"Operator '+=' cannot be applied to types 'number' and 'string | number'.(2365)"))),(0,i.kt)("p",null,"What's happening here, is TypeScript ",(0,i.kt)("em",{parentName:"p"},"does not remember")," that ",(0,i.kt)("inlineCode",{parentName:"p"},"shouldCoerceToNumber")," represents a type narrowing of ",(0,i.kt)("inlineCode",{parentName:"p"},"thingToAdd")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"string | number")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),".  So the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"thingToAdd")," remains unchanged from ",(0,i.kt)("inlineCode",{parentName:"p"},"string | number")," when we write code that depends upon it. "),(0,i.kt)("p",null,"This has terrible consequences.  It means we can't write this more expressive code that we're interested in, and would be better for maintainers of our codebase.  And this is what TypeScript 4.4, with our new feature, unlocks.  Let's change the playground to use TypeScript 4.4 instead:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the TypeScript playground running TypeScript 4.4 and working with our new code - it shows the `thingToAdd` variable has been narrowed to a `string`",src:n(4469).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?ts=4.4.0-beta#code/GYVwdgxgLglg9mABAQwCaoBQDodQBYxgDmAzgCpwCC6AXIhiVAE6FGIA+iYIAtgEYBTJgEoA2gF1hdbvyGIA3gChEKxABsBURFDhRkaxAF5EABgDcy1cDhN6EBI20FiFaqkRxgT1uSrphCpaqqvZgjiR4cCBqqADCcEIQAhQAcryCtsZQAJ4ADgKe3i5+7oZliADkjCzEFRbBwTBeDJHRcQlMSanpQgFKDQPauvqIANTGabJMGPisrv71gwC+iAJqJAKBgw06egbjRUTzqIsDS0GI58FMmiBMSLv6FueKoSRwGlhqcEQYaJgARgANJUAOwVEEVADMEMQAE5hMIgA"},"Try it out in the TypeScript playground.")),(0,i.kt)("p",null,"Delightfully, we no longer have errors now we've made the switch. And as the screenshot shows, the ",(0,i.kt)("inlineCode",{parentName:"p"},"thingToAdd")," variable has been narrowed to a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". This is because Control Flow Analysis of Aliased Conditions is now in play."),(0,i.kt)("p",null,"So we're now writing more expressive code, and TypeScript is willing us on our way."),(0,i.kt)("h2",{id:"read-more"},"Read more"),(0,i.kt)("p",null,"This feature is a tremendous addition to the TypeScript language.  It should have a significant long-term positive impact on how people write code with TypeScript."),(0,i.kt)("p",null,"To read more, do check out the excellent ",(0,i.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-beta/#cfa-aliased-conditions"},"TypeScript 4.4 beta release notes"),". There's also some other exciting feature shipping with this release as well. Thanks very much to the TypeScript team for once again improving the language, and making a real contribution to people being able to write readable code."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/typescript-4-4-and-more-readable-code/"},"This post was originally published on LogRocket.")))}h.isMDXComponent=!0},4469:function(e,t,n){t.Z=n.p+"assets/images/does-work-in-typescript-4-4-d206dec7772f54670f690c0be9e16051.png"},23965:function(e,t,n){t.Z=n.p+"assets/images/doesnt-work-in-typescript-4-3-fb7731935ab62eeb62ddf296d87e21d7.png"},65373:function(e,t,n){t.Z=n.p+"assets/images/reactions-on-github-55b2bc44e975abddbeb31c7e0878c57e.png"},40494:function(e,t,n){t.Z=n.p+"assets/images/reactions-on-twitter-c6d598ef6eb1e0727359a6198e4ad717.png"}}]);
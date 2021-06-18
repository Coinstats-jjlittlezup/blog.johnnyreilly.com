(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[49064],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18547:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={title:"From react-window to react-virtual",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["react-virtual","react-window","React"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2020/05/10/from-react-window-to-react-virtual",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-05-10-from-react-window-to-react-virtual.md",source:"@site/blog/2020-05-10-from-react-window-to-react-virtual.md",title:"From react-window to react-virtual",description:'The tremendous Tanner Linsley recently released react-virtual. react-virtual provides "hooks for virtualizing scrollable elements in React".',date:"2020-05-10T00:00:00.000Z",formattedDate:"May 10, 2020",tags:[{label:"react-virtual",permalink:"/tags/react-virtual"},{label:"react-window",permalink:"/tags/react-window"},{label:"React",permalink:"/tags/react"}],readingTime:2.53,truncated:!1,prevItem:{title:"Autofac, WebApplicationFactory and integration tests",permalink:"/2020/05/21/autofac-webapplicationfactory-integration-tests"},nextItem:{title:"Up to the clouds!",permalink:"/2020/04/04/up-to-clouds"}},c=[{value:"Make that change",id:"make-that-change",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The tremendous ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/tannerlinsley"},"Tanner Linsley")," recently released ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-virtual"},(0,o.kt)("inlineCode",{parentName:"a"},"react-virtual")),". ",(0,o.kt)("inlineCode",{parentName:"p"},"react-virtual"),' provides "hooks for virtualizing scrollable elements in React".'),(0,o.kt)("p",null,"I was already using the (also excellent) ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bvaughn/react-window"},(0,o.kt)("inlineCode",{parentName:"a"},"react-window"))," for this purpose. ",(0,o.kt)("inlineCode",{parentName:"p"},"react-window")," does the virtualising job and does it very well indeed However, I was both intrigued by the lure of the new shiny thing. I've also never been the biggest fan of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-window"),"'s API. So I tried switching over from ",(0,o.kt)("inlineCode",{parentName:"p"},"react-window")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"react-virtual")," as an experiment. To my delight, the experiment went so well I didn't look back!"),(0,o.kt)("p",null,"What did I get out of the switch?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simpler code / nicer developer ergonomics. The API for ",(0,o.kt)("inlineCode",{parentName:"li"},"react-virtual")," allowed me to simplify my code and lose a layer of components. "),(0,o.kt)("li",{parentName:"ul"},"TypeScript support in the box"),(0,o.kt)("li",{parentName:"ul"},"Improved perceived performance. I didn't run any specific tests to quantify this, but I can say that the same functionality now feels snappier.")),(0,o.kt)("p",null,"I tweeted my delight at this and Tanner asked if there was commit diff I could share. I couldn't as it's a private codebase, but I thought it could form the basis of a blogpost."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Nice! Do you have a commit diff we could see?"),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Tanner Linsley \u269b\ufe0f (@tannerlinsley) ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/tannerlinsley/status/1259503283103608832?ref_src=twsrc%5Etfw"},"May 10, 2020"))),(0,o.kt)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,o.kt)("p",null,"In case you hadn't guessed, this is that blog post..."),(0,o.kt)("h2",{id:"make-that-change"},"Make that change"),(0,o.kt)("p",null,"So what does the change look like? Well first remove ",(0,o.kt)("inlineCode",{parentName:"p"},"react-window")," from your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn remove react-window @types/react-window\n")),(0,o.kt)("p",null,"Add the dependency to ",(0,o.kt)("inlineCode",{parentName:"p"},"react-virtual"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add react-virtual\n")),(0,o.kt)("p",null,"Change your imports from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FixedSizeList, ListChildComponentProps } from 'react-window';\n")),(0,o.kt)("p",null,"to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { useVirtual } from 'react-virtual';\n")),(0,o.kt)("p",null,"Change your component code from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type ImportantDataListProps = {\n    classes: ReturnType<typeof useStyles>;\n    importants: ImportantData[];\n};\n\nconst ImportantDataList: React.FC<ImportantDataListProps> = React.memo(props => (\n    <FixedSizeList\n        height={400}\n        width={'100%'}\n        itemSize={80}\n        itemCount={props.importants.length}\n        itemData={props}\n    >\n        {RenderRow}\n    </FixedSizeList>\n));\n\ntype ListItemProps = {\n    classes: ReturnType<typeof useStyles>;\n    importants: ImportantData[];\n};\n\nfunction RenderRow(props: ListChildComponentProps) {\n    const { index, style } = props;\n    const { importants, classes } = props.data as ListItemProps;\n    const important = importants[index];\n\n    return (\n        <ListItem button style={style} key={index}>\n            <ImportantThing classes={classes} important={important} />\n        </ListItem>\n    );\n}\n")),(0,o.kt)("p",null,"Of the above you can delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItemProps")," type and the associate ",(0,o.kt)("inlineCode",{parentName:"p"},"RenderRow")," function. You won't need them again! There's no longer a need to pass down data to the child element and then extract it for usage; it all comes down into a single simpler component."),(0,o.kt)("p",null,"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"ImportantDataList")," component with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const ImportantDataList: React.FC<ImportantDataListProps> = React.memo(props => {\n    const parentRef = React.useRef<HTMLDivElement>(null);\n\n    const rowVirtualizer = useVirtual({\n        size: props.importants.length,\n        parentRef,\n        estimateSize: React.useCallback(() => 80, []), // This is just a best guess\n        overscan: 5\n    });\n\n    return (\n            <div\n                ref={parentRef}\n                style={{\n                    width: `100%`,\n                    height: `500px`,\n                    overflow: 'auto'\n                }}\n            >\n                <div\n                    style={{\n                        height: `${rowVirtualizer.totalSize}px`,\n                        width: '100%',\n                        position: 'relative'\n                    }}\n                >\n                    {rowVirtualizer.virtualItems.map(virtualRow => (\n                        <div\n                            key={virtualRow.index}\n                            ref={virtualRow.measureRef}\n                            className={props.classes.hoverRow}\n                            style={{\n                                position: 'absolute',\n                                top: 0,\n                                left: 0,\n                                width: '100%',\n                                height: `${virtualRow.size}px`,\n                                transform: `translateY(${virtualRow.start}px)`\n                            }}\n                        >\n                            <ImportantThing\n                                classes={props.classes}\n                                important={props.importants[virtualRow.index]}\n                            />\n                        </div>\n                    ))}\n                </div>\n            </div>\n    );\n});\n")),(0,o.kt)("p",null,"And you are done! Thanks Tanner for this tremendous library!"))}m.isMDXComponent=!0}}]);
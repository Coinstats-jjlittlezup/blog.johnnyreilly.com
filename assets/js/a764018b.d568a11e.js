(window.webpackJsonp=window.webpackJsonp||[]).push([[730],{1183:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},862:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(4),a=n(10),o=(n(0),n(1183)),i={title:"From react-window to react-virtual",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:[],hide_table_of_contents:!1},l={permalink:"/2020/05/10/from-react-window-to-react-virtual",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-05-10-from-react-window-to-react-virtual.md",source:"@site/blog/2020-05-10-from-react-window-to-react-virtual.md",description:'The tremendous Tanner Linsley recently released react-virtual. react-virtual provides "hooks for virtualizing scrollable elements in React".',date:"2020-05-10T00:00:00.000Z",formattedDate:"May 10, 2020",tags:[],title:"From react-window to react-virtual",readingTime:2.54,truncated:!1,prevItem:{title:"Autofac, WebApplicationFactory and integration tests",permalink:"/2020/05/21/autofac-webapplicationfactory-and"},nextItem:{title:"Up to the clouds!",permalink:"/2020/04/04/up-to-clouds"}},c=[{value:"Make that change",id:"make-that-change",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The tremendous ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/tannerlinsley"},"Tanner Linsley")," recently released ",Object(o.b)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-virtual"},Object(o.b)("inlineCode",{parentName:"a"},"react-virtual")),". ",Object(o.b)("inlineCode",{parentName:"p"},"react-virtual"),' provides "hooks for virtualizing scrollable elements in React".'),Object(o.b)("p",null,"I was already using the (also excellent) ",Object(o.b)("a",{parentName:"p",href:"https://github.com/bvaughn/react-window"},Object(o.b)("inlineCode",{parentName:"a"},"react-window"))," for this purpose. ",Object(o.b)("inlineCode",{parentName:"p"},"react-window")," does the virtualising job and does it very well indeed However, I was both intrigued by the lure of the new shiny thing. I've also never been the biggest fan of ",Object(o.b)("inlineCode",{parentName:"p"},"react-window"),"'s API. So I tried switching over from ",Object(o.b)("inlineCode",{parentName:"p"},"react-window")," to ",Object(o.b)("inlineCode",{parentName:"p"},"react-virtual")," as an experiment. To my delight, the experiment went so well I didn't look back!"),Object(o.b)("p",null,"What did I get out of the switch?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Simpler code / nicer developer ergonomics. The API for ",Object(o.b)("inlineCode",{parentName:"li"},"react-virtual")," allowed me to simplify my code and lose a layer of components. "),Object(o.b)("li",{parentName:"ul"},"TypeScript support in the box"),Object(o.b)("li",{parentName:"ul"},"Improved perceived performance. I didn't run any specific tests to quantify this, but I can say that the same functionality now feels snappier.")),Object(o.b)("p",null,"I tweeted my delight at this and Tanner asked if there was commit diff I could share. I couldn't as it's a private codebase, but I thought it could form the basis of a blogpost."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Nice! Do you have a commit diff we could see?"),Object(o.b)("p",{parentName:"blockquote"},"\u2014 Tanner Linsley \u269b\ufe0f (@tannerlinsley) ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/tannerlinsley/status/1259503283103608832?ref_src=twsrc%5Etfw"},"May 10, 2020"))),Object(o.b)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),Object(o.b)("p",null,"In case you hadn't guessed, this is that blog post..."),Object(o.b)("h2",{id:"make-that-change"},"Make that change"),Object(o.b)("p",null,"So what does the change look like? Well first remove ",Object(o.b)("inlineCode",{parentName:"p"},"react-window")," from your project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"yarn remove react-window @types/react-window\n")),Object(o.b)("p",null,"Add the dependency to ",Object(o.b)("inlineCode",{parentName:"p"},"react-virtual"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"yarn add react-virtual\n")),Object(o.b)("p",null,"Change your imports from:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { FixedSizeList, ListChildComponentProps } from 'react-window';\n")),Object(o.b)("p",null,"to:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { useVirtual } from 'react-virtual';\n")),Object(o.b)("p",null,"Change your component code from:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"type ImportantDataListProps = {\n    classes: ReturnType<typeof useStyles>;\n    importants: ImportantData[];\n};\n\nconst ImportantDataList: React.FC<ImportantDataListProps> = React.memo(props => (\n    <FixedSizeList\n        height={400}\n        width={'100%'}\n        itemSize={80}\n        itemCount={props.importants.length}\n        itemData={props}\n    >\n        {RenderRow}\n    </FixedSizeList>\n));\n\ntype ListItemProps = {\n    classes: ReturnType<typeof useStyles>;\n    importants: ImportantData[];\n};\n\nfunction RenderRow(props: ListChildComponentProps) {\n    const { index, style } = props;\n    const { importants, classes } = props.data as ListItemProps;\n    const important = importants[index];\n\n    return (\n        <ListItem button style={style} key={index}>\n            <ImportantThing classes={classes} important={important} />\n        </ListItem>\n    );\n}\n")),Object(o.b)("p",null,"Of the above you can delete the ",Object(o.b)("inlineCode",{parentName:"p"},"ListItemProps")," type and the associate ",Object(o.b)("inlineCode",{parentName:"p"},"RenderRow")," function. You won't need them again! There's no longer a need to pass down data to the child element and then extract it for usage; it all comes down into a single simpler component."),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"ImportantDataList")," component with this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const ImportantDataList: React.FC<ImportantDataListProps> = React.memo(props => {\n    const parentRef = React.useRef<HTMLDivElement>(null);\n\n    const rowVirtualizer = useVirtual({\n        size: props.importants.length,\n        parentRef,\n        estimateSize: React.useCallback(() => 80, []), // This is just a best guess\n        overscan: 5\n    });\n\n    return (\n            <div\n                ref={parentRef}\n                style={{\n                    width: `100%`,\n                    height: `500px`,\n                    overflow: 'auto'\n                }}\n            >\n                <div\n                    style={{\n                        height: `${rowVirtualizer.totalSize}px`,\n                        width: '100%',\n                        position: 'relative'\n                    }}\n                >\n                    {rowVirtualizer.virtualItems.map(virtualRow => (\n                        <div\n                            key={virtualRow.index}\n                            ref={virtualRow.measureRef}\n                            className={props.classes.hoverRow}\n                            style={{\n                                position: 'absolute',\n                                top: 0,\n                                left: 0,\n                                width: '100%',\n                                height: `${virtualRow.size}px`,\n                                transform: `translateY(${virtualRow.start}px)`\n                            }}\n                        >\n                            <ImportantThing\n                                classes={props.classes}\n                                important={props.importants[virtualRow.index]}\n                            />\n                        </div>\n                    ))}\n                </div>\n            </div>\n    );\n});\n")),Object(o.b)("p",null,"And you are done! Thanks Tanner for this tremendous library!"))}p.isMDXComponent=!0}}]);
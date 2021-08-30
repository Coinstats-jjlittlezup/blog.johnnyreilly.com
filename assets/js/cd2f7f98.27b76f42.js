"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[95322],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75985:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return g}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"From Blogger to Docusaurus",authors:"johnnyreilly",tags:["Blogger","Docusaurus"],image:"blog/2021-03-15-from-blogger-to-docusaurus/docusaurus.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/2021/03/15/from-blogger-to-docusaurus",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-03-15-from-blogger-to-docusaurus.md",source:"@site/blog/2021-03-15-from-blogger-to-docusaurus.md",title:"From Blogger to Docusaurus",description:"Docusaurus is, amongst other things, a Markdown powered blogging platform. My blog has lived happily on Blogger for the past decade.  I'm considering moving, but losing my historic content as part of the move was never an option. This post goes through what it would look like to move from Blogger to Docusaurus without losing your content.",date:"2021-03-15T00:00:00.000Z",formattedDate:"March 15, 2021",tags:[{label:"Blogger",permalink:"/tags/blogger"},{label:"Docusaurus",permalink:"/tags/docusaurus"}],readingTime:7.93,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"RSS update; we moved to Docusaurus",permalink:"/2021/03/17/rss-update-we-moved-to-docusaurus"},nextItem:{title:"Managed Identity, Azure SQL and Entity Framework",permalink:"/2021/03/10/managed-identity-azure-sql-entity-framework"}},u={authorsImageUrls:[void 0]},p=[{value:"Blog as code",id:"blog-as-code",children:[]},{value:"I want everything",id:"i-want-everything",children:[]},{value:"From HTML in XML to Markdown",id:"from-html-in-xml-to-markdown",children:[]},{value:"Bringing it all together",id:"bringing-it-all-together",children:[]},{value:"Making the move?",id:"making-the-move",children:[]}],m={toc:p};function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus")," is, amongst other things, a Markdown powered blogging platform. My blog has lived happily on ",(0,a.kt)("a",{parentName:"p",href:"https://www.blogger.com/"},"Blogger")," for the past decade.  I'm considering moving, but losing my historic content as part of the move was never an option. This post goes through what it would look like to move from Blogger to Docusaurus ",(0,a.kt)("em",{parentName:"p"},"without")," losing your content."),(0,a.kt)("p",null,"It is imperative that the world never forgets what I was doing with jQuery in 2012."),(0,a.kt)("h2",{id:"blog-as-code"},"Blog as code"),(0,a.kt)("p",null,'Everything is better when it\'s code.  Infrastructure as code. Awesome right? So naturally "blog as code" must be better than just a blog.  More seriously, ',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Markdown"},"Markdown"),' is a tremendous documentation format. Simple, straightforward and, like Goldilocks, "just right". For a long time I\'ve written everything as Markdown. My years of toil down the Open Source mines have preconditioned me to be very MD-disposed.'),(0,a.kt)("p",null,"I started out writing this blog a long time ago as pure HTML. Not the smoothest of writing formats. At some point I got into the habit of spinning up a new repo in GitHub for a new blogpost, writing it in Markdown and piping it through a variety of tools to convert it into HTML for publication on Blogger.  As time passed I felt I'd be a lot happier if I wasn't creating a repo each time. What if I did all my blogging in a single repo and used that as the code that represented my blog?"),(0,a.kt)("p",null,"Just having that thought laid the seeds for what was to follow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An investigation into importing my content from Blogger into a GitHub repo"),(0,a.kt)("li",{parentName:"ol"},"An experimental port to Docusaurus"),(0,a.kt)("li",{parentName:"ol"},"The automation of publication to Docusaurus and Blogger")),(0,a.kt)("p",null,"We're going to go through 1 and 2 now.  But before we do that, let's create ourselves a Docusaurus site for our blog:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx @docusaurus/init@latest init blog-website classic\n")),(0,a.kt)("h2",{id:"i-want-everything"},"I want everything"),(0,a.kt)("p",null,"The first thing to do, was obtain my blog content. This is a mass of HTML that lived inside Blogger's database. (One assumes they have a database; I haven't actually checked.) There's a \"Back up content\" option inside Blogger to allow this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download content from Blogger",src:n(80725).Z})),(0,a.kt)("p",null,"It provides you with an XML file with a dispiritingly small size. Ten years blogging? You'll get change out of 4Mb it turns out. "),(0,a.kt)("h2",{id:"from-html-in-xml-to-markdown"},"From HTML in XML to Markdown"),(0,a.kt)("p",null,"We now want to take that XML and:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extract each blog post (and it's associated metadata; title / tags and whatnot) "),(0,a.kt)("li",{parentName:"ul"},"Convert the HTML content of each blog post from HTML to Markdown and save it as a ",(0,a.kt)("inlineCode",{parentName:"li"},".md")," file"),(0,a.kt)("li",{parentName:"ul"},"Download the images used in the blogpost so they can be stored in the repo alongside")),(0,a.kt)("p",null,"To do this we're going to whip up a smallish TypeScript console app.  Let's initialise it with the packages we're going to need:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir from-blogger-to-docusaurus\ncd from-blogger-to-docusaurus\nnpx typescript --init\nyarn init\nyarn add @types/axios @types/he @types/jsdom @types/node @types/showdown axios fast-xml-parser he jsdom showdown ts-node typescript\n")),(0,a.kt)("p",null,"We're using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/NaturalIntelligence/fast-xml-parser"},(0,a.kt)("inlineCode",{parentName:"a"},"fast-xml-parser"))," to parse XML"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mathiasbynens/he"},(0,a.kt)("inlineCode",{parentName:"a"},"he")),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jsdom/jsdom"},"jsdom")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/showdownjs/showdown"},"showdown")," to convert HTML to Markdown"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/axios/axios"},(0,a.kt)("inlineCode",{parentName:"a"},"axios"))," to download images"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript"},(0,a.kt)("inlineCode",{parentName:"a"},"typescript"))," to code in and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/ts-node"},(0,a.kt)("inlineCode",{parentName:"a"},"ts-node"))," to make our TypeScript Node.js console app.")),(0,a.kt)("p",null,"Now we have all the packages we need, it's time to write our script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import fs from 'fs'\nimport path from 'path'\nimport showdown from 'showdown';\nimport he from 'he'\nimport jsdom from 'jsdom'\nimport axios from 'axios';\nimport fastXmlParser from 'fast-xml-parser';\n\nconst bloggerXmlPath = './blog-03-13-2021.xml';\nconst docusaurusDirectory = '../blog-website';\nconst notMarkdownable: string[] = [];\n\nasync function fromXmlToMarkDown() {\n    const posts = await getPosts();\n\n    for (const post of posts) {\n        await makePostIntoMarkDownAndDownloadImages(post);\n    }\n    if (notMarkdownable.length)\n        console.log('These blog posts could not be turned into MarkDown - go find out why!', notMarkdownable)\n}\n\nasync function getPosts(): Promise<Post[]> {\n    const xml = await fs.promises.readFile(bloggerXmlPath, 'utf-8');\n\n    const options = {\n        attributeNamePrefix: \"@_\",\n        attrNodeName: \"attr\", //default is 'false'\n        textNodeName: \"#text\",\n        ignoreAttributes: false,\n        ignoreNameSpace: false,\n        allowBooleanAttributes: true,\n        parseNodeValue: true,\n        parseAttributeValue: true,\n        trimValues: true,\n        cdataTagName: \"__cdata\", //default is 'false'\n        cdataPositionChar: \"\\\\c\",\n        parseTrueNumberOnly: false,\n        arrayMode: true, //\"strict\"\n        attrValueProcessor: (val: string, attrName: string) => he.decode(val, { isAttributeValue: true }),//default is a=>a\n        tagValueProcessor: (val: string, tagName: string) => he.decode(val), //default is a=>a\n    };\n\n    const traversalObj = fastXmlParser.getTraversalObj(xml, options);\n    const blog = fastXmlParser.convertToJson(traversalObj, options);\n\n\n    const postsRaw = blog.feed[0].entry\n        .filter((entry: any) =>\n            entry.category.some((category: any) => category.attr['@_term'] === \"http://schemas.google.com/blogger/2008/kind#post\") &&\n            entry.link.some((link: any) => link.attr[\"@_href\"] && link.attr[\"@_type\"] === \"text/html\") &&\n            entry.published < '2021-03-07'\n        );\n\n    const posts: Post[] = postsRaw.map((entry: any) => {\n        return {\n            title: entry.title[0]['#text'],\n            content: entry.content[0]['#text'],\n            published: entry.published,\n            link: entry.link.find((link: any) => link.attr[\"@_href\"] && link.attr[\"@_type\"] === \"text/html\")\n                ? entry.link.find((link: any) => link.attr[\"@_href\"] && link.attr[\"@_type\"] === \"text/html\").attr[\"@_href\"]\n                : undefined,\n            tags: Array.isArray(entry.category) && entry.category.some((category: any) => category.attr['@_scheme'] === \"http://www.blogger.com/atom/ns#\")\n                ? entry.category\n                    .filter((category: any) => category.attr['@_scheme'] === \"http://www.blogger.com/atom/ns#\" && category.attr[\"@_term\"] !== 'constructor') // 'constructor' will make docusaurus choke\n                    .map((category: any) => category.attr[\"@_term\"])\n                : []\n        };\n    })\n\n    for (const post of posts) {\n        const { content, ...others } = post;\n        console.log(others, content.length)\n        if (!content || !others.title || !others.published) throw new Error(\"No content\");\n    }\n\n    return posts.filter(post => post.link);\n}\n\nasync function makePostIntoMarkDownAndDownloadImages(post: Post) {\n    const converter = new showdown.Converter({\n        ghCodeBlocks: true\n    });\n    const linkSections = post.link.split('/');\n    const linkSlug = linkSections[linkSections.length - 1]\n    const filename = post.published.substr(0, 10) + '-' + linkSlug.replace('.html', '.md');\n\n    const contentProcessed = post.content\n        // remove stray <br /> tags \n        .replace(/<br\\s*\\/?>/gi, '\\n')\n        // translate <code class=\"lang-cs\" into <code class=\"language-cs\"> to be showdown friendly\n        .replace(/code class=\"lang-/gi, 'code class=\"language-');\n\n    const images: string[] = [];\n    const dom = new jsdom.JSDOM(contentProcessed);\n    let markdown = \"\";\n    try {\n        markdown = converter.makeMarkdown(contentProcessed, dom.window.document)\n            // bigger titles\n            .replace(/#### /g, '## ')\n            \n            // <div style=\"width:100%;height:0;padding-bottom:56%;position:relative;\"><iframe src=\"https://giphy.com/embed/l7JDTHpsXM26k\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameborder=\"0\" class=\"giphy-embed\" allowfullscreen=\"\"></iframe></div>\n            \n            // The mechanism below extracts the underlying iframe\n            .replace(/<div.*(<iframe.*\">).*<\\/div>/g, (replacer) => {\n                const dom = new jsdom.JSDOM(replacer);\n                const iframe = dom?.window?.document?.querySelector(\"iframe\");\n                return iframe?.outerHTML ?? '';\n            })\n            \n            // The mechanism below strips class and style attributes from iframes - react hates them\n            .replace(/<iframe.*<\\/iframe>/g, (replacer) => {\n                const dom = new jsdom.JSDOM(replacer);\n                const iframe = dom?.window?.document?.querySelector(\"iframe\");\n                iframe?.removeAttribute('class')\n                iframe?.removeAttribute('style')\n                return iframe?.outerHTML ?? '';\n            })\n            \n            // capitalise appropriately\n            .replace(/frameborder/g, 'frameBorder')\n            .replace(/allowfullscreen/g, 'allowFullScreen')\n            .replace(/charset/g, 'charSet')\n\n            // Deals with these:\n            // [![null](<https://4.bp.blogspot.com/-b9-GrL0IXaY/Xmqj4GRhKXI/AAAAAAAAT5s/ZoceUInSY5EWXeCr2LkGV9Zvea8S6-mUgCPcBGAYYCw/s640/hello_world_idb_keyval.png> =640x484)](<https://4.bp.blogspot.com/-b9-GrL0IXaY/Xmqj4GRhKXI/AAAAAAAAT5s/ZoceUInSY5EWXeCr2LkGV9Zvea8S6-mUgCPcBGAYYCw/s1600/hello_world_idb_keyval.png>)We successfully wrote something into IndexedDB, read it back and printed that value to the console. Amazing!\n            .replace(/\\[!\\[null\\]\\(<(.*?)>\\)/g, (match) => `![](${match.slice(match.indexOf('<') + 1, match.indexOf('>'))})\\n\\n`)\n\n            // Blogger tends to put images in HTML that looks like this:\n            // <div class=\"separator\" style=\"clear: both;\"><a href=\"https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s783/traffic-to-app-service.png\" style=\"display: block; padding: 1em 0; text-align: center; \"><img alt=\"traffic to app service\" border=\"0\" width=\"600\" data-original-height=\"753\" data-original-width=\"783\" src=\"https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s600/traffic-to-app-service.png\"></a></div>\n            \n            // The mechanism below extracts the underlying image path and it's alt text\n            .replace(/<div.*(<img.*\">).*<\\/div>/g, (replacer) => {\n                const div = new jsdom.JSDOM(replacer);\n                const img = div?.window?.document?.querySelector(\"img\");\n                const alt = img?.getAttribute('alt') ?? '';\n                const src = img?.getAttribute('src') ?? '';\n\n                if (src) images.push(src);\n\n                return `![${alt}](${src})`\n            });\n    }\n    catch (e) {\n        console.log(post.link)\n        console.log(e)\n        notMarkdownable.push(post.link)\n        return;\n    }\n\n    const imageDirectory = filename.replace('.md', '');\n    for (const url of images) {\n        try {\n            const localUrl = await downloadImage(url, imageDirectory);\n            markdown = markdown.replace(url, '../static/blog/' + localUrl);\n        } catch (e) {\n            console.error(`Failed to download ${url}`)\n        }\n    }\n\n    const content = `---\ntitle: \"${post.title}\"\nauthor: John Reilly\nauthor_url: https://github.com/johnnyreilly\nauthor_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4\ntags: [${post.tags.join(', ')}]\nhide_table_of_contents: false\n---\n${markdown}\n`;\n\n    await fs.promises.writeFile(path.resolve(docusaurusDirectory, 'blog', filename), content);\n}\n\nasync function downloadImage(url: string, directory: string) {\n    console.log(`Downloading ${url}`);\n    const pathParts = new URL(url).pathname.split('/');\n    const filename = pathParts[pathParts.length - 1];\n    const directoryTo = path.resolve(docusaurusDirectory, 'static', 'blog', directory);\n    const pathTo = path.resolve(docusaurusDirectory, 'static', 'blog', directory, filename);\n\n    if (!fs.existsSync(directoryTo)) {\n        fs.mkdirSync(directoryTo);\n    }\n\n    const writer = fs.createWriteStream(pathTo)\n\n    const response = await axios({\n        url,\n        method: 'GET',\n        responseType: 'stream'\n    })\n\n    response.data.pipe(writer)\n\n    return new Promise<string>((resolve, reject) => {\n        writer.on('finish', () => resolve(directory + '/' + filename))\n        writer.on('error', reject)\n    })\n}\n\n\ninterface Post { \n    title: string;\n    content: string;\n    published: string;\n    link: string;\n    tags: string[];\n}\n\n// do it!\nfromXmlToMarkDown();\n")),(0,a.kt)("p",null,"To summarise what the script does, it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parses the blog XML into an array of ",(0,a.kt)("inlineCode",{parentName:"li"},"Post"),"s"),(0,a.kt)("li",{parentName:"ul"},"each post is then converted from HTML into Markdown, a Docusaurus header is created and prepended, then the file is saved to the ",(0,a.kt)("inlineCode",{parentName:"li"},"blog-website/blog")," directory"),(0,a.kt)("li",{parentName:"ul"},"the images of each post are downloaded with Axios and saved to the ",(0,a.kt)("inlineCode",{parentName:"li"},"blog-website/static/blog/{POST NAME}")," directory")),(0,a.kt)("h2",{id:"bringing-it-all-together"},"Bringing it all together"),(0,a.kt)("p",null,"To run the script, we add the following script to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "scripts": {\n    "start": "ts-node index.ts"\n  },\n')),(0,a.kt)("p",null,"And have ourselves a merry little ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start")," to kick off the process. In a very short period of time, if you crack open the ",(0,a.kt)("inlineCode",{parentName:"p"},"blogs")," directory of your Docusaurus site you'll see a collection of Markdown files which represent your blog and are ready to power Docusaurus:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Markdown files",src:n(15991).Z})),(0,a.kt)("p",null,'I have slightly papered over some details here.  For my own case I discovered that I hadn\'t always written perfect HTML when blogging. I had to go in and fix the HTML in a number of historic blogs such that the mechanism would work. I also learned that a number of my screenshots that I use to illustrate posts have vanished from Blogger at some point.  This makes me all the more convinced that storing your blog in a repo is a good idea.  Things should not "go missing".'),(0,a.kt)("p",null,"Congratulations! We're now the proud owners of a Docusaurus blog site based upon our Blogger content that looks something like this: "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Blog in Docusaurus",src:n(76094).Z})),(0,a.kt)("h2",{id:"making-the-move"},"Making the move?"),(0,a.kt)("p",null,"Now that I've got the content, I'm theoretically safe to migrate from Blogger to Docusaurus.  I'm pondering this now and I have come up with a checklist of criteria to satisfy before I do.  You can have a read of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/blog.johnnyreilly.com#migrating-to-docusauras"},"criteria here"),"."),(0,a.kt)("p",null,"Odds are, I'm likely to make the move; it's probably just a matter of time."))}g.isMDXComponent=!0},80725:function(e,t,n){t.Z=n.p+"assets/images/blogger-back-up-your-content-1a715a2ba49fda4d315feb709708251d.png"},15991:function(e,t,n){t.Z=n.p+"assets/images/blogs-as-markdown-48fb7fbdf2add6b51b004e1b53aa5b77.png"},76094:function(e,t,n){t.Z=n.p+"assets/images/docusaurus-54980d7766e6c0e5acffdbbf70b8bac0.png"}}]);
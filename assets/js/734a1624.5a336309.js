(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{1211:function(e,n,i){"use strict";i.d(n,"a",(function(){return d})),i.d(n,"b",(function(){return m}));var t=i(0),a=i.n(t);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},d=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(i),b=t,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return i?a.a.createElement(m,l(l({ref:n},c),{},{components:i})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=i.length,o=new Array(r);o[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"},1261:function(e,n,i){"use strict";i.r(n),n.default=i.p+"assets/images/api-build-screenshot-ab49ee5e5ea7ce25c13f5aaba1022650.png"},1262:function(e,n,i){"use strict";i.r(n),n.default=i.p+"assets/images/about-page-220dea782e9493f89e65f9d68511d7b7.png"},722:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return o})),i.d(n,"metadata",(function(){return l})),i.d(n,"toc",(function(){return s})),i.d(n,"default",(function(){return u}));var t=i(4),a=i(10),r=(i(0),i(1211)),o={title:"Surfacing Azure Pipelines Build Info in a .NET React SPA",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["build information","azure pipelines"],hide_table_of_contents:!1},l={permalink:"/2021/01/29/surfacing-azure-pipelines-build-info-in",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-29-surfacing-azure-pipelines-build-info-in.md",source:"@site/blog/2021-01-29-surfacing-azure-pipelines-build-info-in.md",title:"Surfacing Azure Pipelines Build Info in a .NET React SPA",description:"The title of this post is hugely specific, but the idea is simple. We want to answer the question \"Hey! I'm version 1.2.3.4 of your app; built from this commit hash, I was built on Wednesday, I was the nineth build that day and I was built from the main branch. And I'm an Aries.\" Or something like that.",date:"2021-01-29T00:00:00.000Z",formattedDate:"January 29, 2021",tags:[{label:"build information",permalink:"/tags/build-information"},{label:"azure pipelines",permalink:"/tags/azure-pipelines"}],readingTime:6.415,truncated:!1,prevItem:{title:"ASP.NET, Serilog and Application Insights",permalink:"/2021/01/30/aspnet-serilog-and-application-insights"},nextItem:{title:"Azure Easy Auth and Roles with .NET and Microsoft.Identity.Web",permalink:"/2021/01/17/azure-easy-auth-and-roles-with-net-and-microsoft-identity-web"}},s=[{value:"Putting build info into <code>azure-pipelines.yml</code>",id:"putting-build-info-into-azure-pipelinesyml",children:[]},{value:"Surfacing the server build info",id:"surfacing-the-server-build-info",children:[]},{value:"Surfacing the client build info",id:"surfacing-the-client-build-info",children:[]}],c={toc:s};function u(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},c,o,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The title of this post is hugely specific, but the idea is simple. We want to answer the question: \"what codebase is running in Production right now?\" Many is the time where I've been pondering over why something isn't working as expected and burned a disappointing amount of time before realising that I'm playing with an old version of an app. Wouldn't it be great give our app a way to say: \"Hey! I'm version 1.2.3.4 of your app; built from this commit hash, I was built on Wednesday, I was the nineth build that day and I was built from the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," branch. And I'm an Aries.\" Or something like that."),Object(r.b)("p",null,"This post was inspired by ",Object(r.b)("a",{parentName:"p",href:"https://www.hanselman.com/blog/adding-a-git-commit-hash-and-azure-devops-build-number-and-build-id-to-an-aspnet-website"},"Scott Hanselman's similar post on the topic"),". Ultimately this ended up going in a fairly different direction and so seemed worthy of a post of its own."),Object(r.b)("p",null,'A particular difference is that this is targeting SPAs. Famously, cache invalidation is hard. It\'s possible for the HTML/JS/CSS of your app to be stale due to aggressive caching. So we\'re going to make it possible to see build information for both when the SPA (or "client") is built, as well as when the .NET app (or "server") is built. We\'re using a specific type of SPA here; a ',Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," SPA built with ",Object(r.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," and ",Object(r.b)("a",{parentName:"p",href:"https://material-ui.com/"},"Material UI"),", however the principles here are general; you could surface this up any which way you choose."),Object(r.b)("h2",{id:"putting-build-info-into-azure-pipelinesyml"},"Putting build info into ",Object(r.b)("inlineCode",{parentName:"h2"},"azure-pipelines.yml")),Object(r.b)("p",null,"The first thing we're going to do is to inject our build details into two identical ",Object(r.b)("inlineCode",{parentName:"p"},"buildinfo.json")," files; one that sits in the server codebase and which will be used to drive the server build information, and one that sits in the client codebase to drive the client equivalent. They'll end up looking something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "buildNumber": "20210130.1",\n    "buildId": "123456",\n    "branchName": "main",\n    "commitHash": "7089620222c30c1ad88e4b556c0a7908ddd34a8e"\n}\n')),Object(r.b)("p",null,"We generate this by adding the following ",Object(r.b)("inlineCode",{parentName:"p"},"yml")," to the beginning of our ",Object(r.b)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," (crucially before the client or server build take place):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},'- script: |\n            echo -e -n "{\\"buildNumber\\":\\"$(Build.BuildNumber)\\",\\"buildId\\":\\"$(Build.BuildId)\\",\\"branchName\\":\\"$(Build.SourceBranchName)\\",\\"commitHash\\":\\"$(Build.SourceVersion)\\"}" > "$(Build.SourcesDirectory)/src/client-app/src/buildinfo.json"\n            echo -e -n "{\\"buildNumber\\":\\"$(Build.BuildNumber)\\",\\"buildId\\":\\"$(Build.BuildId)\\",\\"branchName\\":\\"$(Build.SourceBranchName)\\",\\"commitHash\\":\\"$(Build.SourceVersion)\\"}" > "$(Build.SourcesDirectory)/src/server-app/Server/buildinfo.json"\n          displayName: "emit build details as JSON"\n          failOnStderr: true\n')),Object(r.b)("p",null,"As you can see, we're placing the following variables that are available at build time in Azure Pipelines, into the ",Object(r.b)("inlineCode",{parentName:"p"},"buildinfo.json"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BuildNumber")," ","-"," The name of the completed build; which usually takes the form of a date in the ",Object(r.b)("inlineCode",{parentName:"li"},"yyyyMMdd")," format, suffixed by ",Object(r.b)("inlineCode",{parentName:"li"},".x")," where ",Object(r.b)("inlineCode",{parentName:"li"},"x")," is a number that increments representing the number of builds that have taken place on the given day."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BuildId")," ","-"," The ID of the record for the completed build."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SourceVersion")," ","-"," This is the commit hash of the source code in Git"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SourceBranchName")," ","-"," The name of the branch in Git.")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml#build-variables-devops-services"},"There's many variables available in Azure Pipelines that can be used")," ","-"," we've picked out the ones most interesting to us."),Object(r.b)("h2",{id:"surfacing-the-server-build-info"},"Surfacing the server build info"),Object(r.b)("p",null,"Our pipeline is dropping the ",Object(r.b)("inlineCode",{parentName:"p"},"buildinfo.json")," over pre-existing stub ",Object(r.b)("inlineCode",{parentName:"p"},"buildinfo.json")," files in both our client and server codebases. The stub files look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "buildNumber": "yyyyMMdd.x",\n    "buildId": "xxxxxx",\n    "branchName": "",\n    "commitHash": "LOCAL_BUILD"\n}\n')),Object(r.b)("p",null,"In our .NET app, the ",Object(r.b)("inlineCode",{parentName:"p"},"buildinfo.json")," file has been dropped in the root of the app. And as luck would have it, all JSON files are automatically included in a .NET build and so it will be available at runtime. We want to surface this file through an API, and we also want to use it to stamp details into our logs."),Object(r.b)("p",null,"So we need to parse the file, and for that we'll use this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Text.Json;\n\nnamespace Server {\n    public record BuildInfo(string BranchName, string BuildNumber, string BuildId, string CommitHash);\n\n    public static class AppVersionInfo {\n        private const string _buildFileName = "buildinfo.json";\n        private static BuildInfo _fileBuildInfo = new(\n            BranchName: "",\n            BuildNumber: DateTime.UtcNow.ToString("yyyyMMdd") + ".0",\n            BuildId: "xxxxxx",\n            CommitHash: $"Not yet initialised - call {nameof(InitialiseBuildInfoGivenPath)}"\n        );\n\n        public static void InitialiseBuildInfoGivenPath(string path) {\n            var buildFilePath = Path.Combine(path, _buildFileName);\n            if (File.Exists(buildFilePath)) {\n                try {\n                    var buildInfoJson = File.ReadAllText(buildFilePath);\n                    var buildInfo = JsonSerializer.Deserialize<BuildInfo>(buildInfoJson, new JsonSerializerOptions {\n                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase\n                    });\n                    if (buildInfo == null) throw new Exception($"Failed to deserialise {_buildFileName}");\n\n                    _fileBuildInfo = buildInfo;\n                } catch (Exception) {\n                    _fileBuildInfo = new BuildInfo(\n                        BranchName: "",\n                        BuildNumber: DateTime.UtcNow.ToString("yyyyMMdd") + ".0",\n                        BuildId: "xxxxxx",\n                        CommitHash: "Failed to load build info from buildinfo.json"\n                    );\n                }\n            }\n        }\n\n        public static BuildInfo GetBuildInfo() => _fileBuildInfo;\n    }\n}\n')),Object(r.b)("p",null,"The above code reads the ",Object(r.b)("inlineCode",{parentName:"p"},"buildinfo.json")," file and deserialises it into a ",Object(r.b)("inlineCode",{parentName:"p"},"BuildInfo")," record which is then surfaced up by the ",Object(r.b)("inlineCode",{parentName:"p"},"GetBuildInfo")," method. We initialise this at the start of our ",Object(r.b)("inlineCode",{parentName:"p"},"Program.cs")," like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"public static int Main(string[] args) {\n            AppVersionInfo.InitialiseBuildInfoGivenPath(Directory.GetCurrentDirectory());\n            // Now we're free to call AppVersionInfo.GetBuildInfo()\n            // ....\n        }\n")),Object(r.b)("p",null,"Now we need a controller to surface this information up. We'll add ourselves a ",Object(r.b)("inlineCode",{parentName:"p"},"BuildInfoController.cs"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace Server.Controllers {\n    [ApiController]\n    public class BuildInfoController : ControllerBase {\n        [AllowAnonymous]\n        [HttpGet("api/build")]\n        public BuildInfo GetBuild() => AppVersionInfo.GetBuildInfo();\n    }\n}\n')),Object(r.b)("p",null,"This exposes an ",Object(r.b)("inlineCode",{parentName:"p"},"api/build")," endpoint in our .NET app that, when hit, will display the following JSON:"),Object(r.b)("p",null," ",Object(r.b)("img",{src:i(1261).default})),Object(r.b)("h2",{id:"surfacing-the-client-build-info"},"Surfacing the client build info"),Object(r.b)("p",null,"Our server now lets the world know which version it is running and this is tremendous. Now let's make our client do the same."),Object(r.b)("p",null,"Very little is required to achieve this. Again we have a ",Object(r.b)("inlineCode",{parentName:"p"},"buildinfo.json")," sat in the root of our codebase. We're able to import it as a module in TypeScript because we've set the following property in our ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"resolveJsonModule": true,\n')),Object(r.b)("p",null,"As a consequence, consumption is as simple as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"import clientBuildInfo from './buildinfo.json';\n")),Object(r.b)("p",null,"Which provides us with a ",Object(r.b)("inlineCode",{parentName:"p"},"clientBuildInfo")," which TypeScript automatically derives as this type:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"type ClientBuildInfo = {\n    buildNumber: string;\n    buildId: string;\n    branchName: string;\n    commitHash: string;\n}\n")),Object(r.b)("p",null,'How you choose to use that information is entirely your choice. We\'re going to add ourselves an "about" screen in our app, which displays both client info (loaded using the mechanism above) and server info (',Object(r.b)("inlineCode",{parentName:"p"},"fetch"),"ed from the ",Object(r.b)("inlineCode",{parentName:"p"},"/api/build")," endpoint)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Card,\n    CardContent,\n    CardHeader,\n    createStyles,\n    Grid,\n    makeStyles,\n    Theme,\n    Typography,\n    Zoom,\n} from \'@material-ui/core\';\nimport React from \'react\';\nimport clientBuildInfo from \'../../buildinfo.json\';\nimport { projectsPurple } from \'../shared/colors\';\nimport { Loading } from \'../shared/Loading\';\nimport { TransitionContainer } from \'../shared/TransitionContainer\';\n\nconst useStyles = (cardColor: string) =>\n    makeStyles((theme: Theme) =>\n        createStyles({\n            card: {\n                padding: theme.spacing(0),\n                backgroundColor: cardColor,\n                color: theme.palette.common.white,\n                minHeight: theme.spacing(28),\n            },\n            avatar: {\n                backgroundColor: theme.palette.getContrastText(cardColor),\n                color: cardColor,\n            },\n            main: {\n                padding: theme.spacing(2),\n            },\n        })\n    )();\n\ntype Styles = ReturnType<typeof useStyles>;\n\nconst AboutPage: React.FC = () => {\n    const [serverBuildInfo, setServerBuildInfo] = React.useState<typeof clientBuildInfo>();\n\n    React.useEffect(() => {\n        fetch(\'/api/build\')\n            .then((response) => response.json())\n            .then(setServerBuildInfo);\n    }, []);\n\n    const classes = useStyles(projectsPurple);\n\n    return (\n        <TransitionContainer>\n            <Grid container spacing={3}>\n                <Grid item xs={12} sm={12} container alignItems="center">\n                    <Grid item>\n                        <Typography variant="h4" component="h1">\n                            About\n                        </Typography>\n                    </Grid>\n                </Grid>\n            </Grid>\n            <Grid container spacing={1}>\n                <BuildInfo classes={classes} title="Client Version" {...clientBuildInfo} />\n            </Grid>\n            <br />\n            <Grid container spacing={1}>\n                {serverBuildInfo ? (\n                    <BuildInfo classes={classes} title="Server Version" {...serverBuildInfo} />\n                ) : (\n                    <Loading />\n                )}\n            </Grid>\n        </TransitionContainer>\n    );\n};\n\ninterface Props {\n    classes: Styles;\n    title: string;\n    branchName: string;\n    buildNumber: string;\n    buildId: string;\n    commitHash: string;\n}\n\nconst BuildInfo: React.FC<Props> = ({ classes, title, branchName, buildNumber, buildId, commitHash }) => (\n    <Zoom mountOnEnter unmountOnExit in={true}>\n        <Card className={classes.card}>\n            <CardHeader title={title} />\n            <CardContent className={classes.main}>\n                <Typography variant="body1" component="p">\n                    <b>Build Number</b> {buildNumber}\n                </Typography>\n                <Typography variant="body1" component="p">\n                    <b>Build Id</b> {buildId}\n                </Typography>\n                <Typography variant="body1" component="p">\n                    <b>Branch Name</b> {branchName}\n                </Typography>\n                <Typography variant="body1" component="p">\n                    <b>Commit Hash</b> {commitHash}\n                </Typography>\n            </CardContent>\n        </Card>\n    </Zoom>\n);\n\nexport default AboutPage;\n')),Object(r.b)("p",null,"When the above page is viewed it looks like this:"),Object(r.b)("p",null,Object(r.b)("img",{src:i(1262).default})),Object(r.b)("p",null,"And that's it! Our app is clearly telling us what version is being run, both on the server and in the client. Thanks to Scott Hanselman for his work which inspired this."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[45691],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"VSTS and EF Core Migrations",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["vsts","Entity Framework","ef core"],hide_table_of_contents:!1},l=void 0,c={permalink:"/2018/06/24/vsts-and-ef-core-migrations",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-06-24-vsts-and-ef-core-migrations.md",source:"@site/blog/2018-06-24-vsts-and-ef-core-migrations.md",title:"VSTS and EF Core Migrations",description:"Let me start by telling you a dirty secret. I have an ASP.Net Core project that I build with VSTS. It is deployed to Azure through a CI / CD setup in VSTS. That part I'm happy with. Proud of even. Now to the sordid hiddenness: try as I might, I've never found a nice way to deploy Entity Framework database migrations as part of the deployment flow. So I have [blushes with embarrassment] been using the Startup of my ASP.Net core app to run the migrations on my database. There. I said it. You all know. Absolutely filthy. Don't judge me.",date:"2018-06-24T00:00:00.000Z",formattedDate:"June 24, 2018",tags:[{label:"vsts",permalink:"/tags/vsts"},{label:"Entity Framework",permalink:"/tags/entity-framework"},{label:"ef core",permalink:"/tags/ef-core"}],readingTime:5.005,truncated:!1,authors:[{name:"John Reilly",url:"https://github.com/johnnyreilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg"}],prevItem:{title:"Cypress and Auth0",permalink:"/2018/07/09/cypress-and-auth0"},nextItem:{title:"VSTS... YAML up!",permalink:"/2018/06/16/vsts-yaml-up"}},u={authorsImageUrls:[void 0]},p=[{value:"Console Yourself",id:"console-yourself",children:[]},{value:"Build It!",id:"build-it",children:[]},{value:"Deploy It!",id:"deploy-it",children:[]},{value:"Give It A Whirl",id:"give-it-a-whirl",children:[]},{value:"Wrapping Up",id:"wrapping-up",children:[]}],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let me start by telling you a dirty secret. I have an ASP.Net Core project that I build with VSTS. It is deployed to Azure through a CI / CD setup in VSTS. That part I'm happy with. Proud of even. Now to the sordid hiddenness: try as I might, I've never found a nice way to deploy Entity Framework database migrations as part of the deployment flow. So I have ","[blushes with embarrassment]"," been using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," of my ASP.Net core app to run the migrations on my database. There. I said it. You all know. Absolutely filthy. Don't judge me."),(0,r.kt)("p",null," If you care to google, you'll find various discussions around this, and various ways to tackle it. Most of which felt like too much hard work and so I never attempted."),(0,r.kt)("p",null,"It's also worth saying that being on VSTS made me less likely to give these approaches a go. Why? Well, the feedback loop for debugging a CI / CD setup is truly sucky. Make a change. Wait for it to trickle through the CI / CD flow (10 mins at least). Spot a problem, try and fix. Start waiting again. Repeat until you succeed. Or, if you're using the free tier of VSTS, repeat until you run out of build minutes. You have a limited number of build minutes per month with VSTS. Last time I fiddled with the build, I bled my way through a full month's minutes in 2 days. I have now adopted the approach of only playing with the setup in the last week of the month. That way if I end up running out of minutes, at least I'll roll over to the new allowance in a matter of days."),(0,r.kt)("p",null,"Digression over. I could take the guilt of my EF migrations secret no longer, I decided to try and tackle it another way. I used the approach suggested by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broersa"},"Andre Broers"),(0,r.kt)("a",{parentName:"p",href:"https://github.com/aspnet/EntityFrameworkCore/issues/9841#issuecomment-395712061"},"here"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I worked around by adding a dotnetcore consoleapp project where I run the migration via the Context. In the Build I build this consoleapp in the release I execute it.")),(0,r.kt)("h2",{id:"console-yourself"},"Console Yourself"),(0,r.kt)("p",null,"First things first, we need a console app added to our solution. Fire up PowerShell in the root of your project and:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"md MyAwesomeProject.MigrateDatabase\ncd .\\MyAwesomeProject.MigrateDatabase\\\ndotnet new console\n")),(0,r.kt)("p",null,"Next we need that project to know about Entity Framework and also our DbContext (which I store in a dedicated project):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"dotnet add package Microsoft.EntityFrameworkCore.Design\ndotnet add package Microsoft.EntityFrameworkCore.SqlServer\ndotnet add reference ..\\MyAwesomeProject.Database\\MyAwesomeProject.Database.csproj\n")),(0,r.kt)("p",null,"Add our new project to our solution: (I always forget to do this)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd ../\ndotnet sln add .\\MyAwesomeProject.MigrateDatabase\\MyAwesomeProject.MigrateDatabase.csproj\n")),(0,r.kt)("p",null,"You should now be the proud possessor of a ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj")," file that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <OutputType>Exe</OutputType>\n    <TargetFramework>netcoreapp2.1</TargetFramework>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="2.1.1" />\n    <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="2.1.1" />\n  </ItemGroup>\n\n  <ItemGroup>\n    <ProjectReference Include="..\\MyAwesomeProject.Database\\MyAwesomeProject.Database.csproj" />\n  </ItemGroup>\n\n</Project>\n')),(0,r.kt)("p",null,"Replace the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," file with this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing MyAwesomeProject.Database;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace MyAwesomeProject.MigrateDatabase {\n    class Program {\n        // Example usage:\n        // dotnet MyAwesomeProject.MigrateDatabase.dll "Server=(localdb)\\\\mssqllocaldb;Database=MyAwesomeProject;Trusted_Connection=True;"\n        static void Main(string[] args) {\n            if (args.Length == 0)\n                throw new Exception("No connection string supplied!");\n\n            var myAwesomeProjectConnectionString = args[0];\n\n            // Totally optional debug information\n            Console.WriteLine("About to migrate this database:");\n            var connectionBits = myAwesomeProjectConnectionString.Split(";");\n            foreach (var connectionBit in connectionBits) {\n                if (!connectionBit.StartsWith("Password", StringComparison.CurrentCultureIgnoreCase))\n                    Console.WriteLine(connectionBit);\n            }\n\n            try {\n                var optionsBuilder = new DbContextOptionsBuilder<MyAwesomeProjectContext>();\n                optionsBuilder.UseSqlServer(myAwesomeProjectConnectionString);\n\n                using(var context = new MyAwesomeProjectContext(optionsBuilder.Options)) {\n                    context.Database.Migrate();\n                }\n                Console.WriteLine("This database is migrated like it\'s the Serengeti!");\n            } catch (Exception exc) {\n                var failedToMigrateException = new Exception("Failed to apply migrations!", exc);\n                Console.WriteLine($"Didn\'t succeed in applying migrations: {exc.Message}");\n                throw failedToMigrateException;\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"This code takes the database connection string passed as an argument, spins up a db context with that, and migrates like it's the Serengeti."),(0,r.kt)("h2",{id:"build-it"},"Build It!"),(0,r.kt)("p",null,"The next thing we need is to ensure that this is included as part of the build process in VSTS. The following commands need to be run during the build to include the MigrateDatabase project in the build output in a ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrateDatabase")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"cd MyAwesomeProject.MigrateDatabase\ndotnet build\ndotnet publish --configuration Release --output $(build.artifactstagingdirectory)/MigrateDatabase\n")),(0,r.kt)("p",null,"There's various ways to accomplish this which I wont reiterate now. ",(0,r.kt)("a",{parentName:"p",href:"/2018/06/16/vsts-yaml-up"},"I recommend YAML"),"."),(0,r.kt)("h2",{id:"deploy-it"},"Deploy It!"),(0,r.kt)("p",null,"Now to execute our console app as part of the deployment process we need to add a CommandLine task to our VSTS build definition. It should execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'dotnet MyAwesomeProject.MigrateDatabase.dll "$(ConnectionStrings.MyAwesomeProjectDatabaseConnection)"\n')),(0,r.kt)("p",null,"In the following folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"$(System.DefaultWorkingDirectory)/my-awesome-project-YAML/drop/MigrateDatabase\n")),(0,r.kt)("p",null,"Do note that the command uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionStrings.MyAwesomeProjectDatabaseConnection")," variable which you need to create and set to the value of your connection string."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64813).Z})),(0,r.kt)("h2",{id:"give-it-a-whirl"},"Give It A Whirl"),(0,r.kt)("p",null,"Let's find out what happens when the rubber hits the road. I'll add a new entity to my database project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\n\nnamespace MyAwesomeProject.Database.Entities {\n    public class NewHotness {\n        public Guid NewHotnessId { get; set; }\n    }\n}\n")),(0,r.kt)("p",null,"And reference it in my DbContext:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using MyAwesomeProject.Database.Entities;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace MyAwesomeProject.Database {\n    public class MyAwesomeProjectContext : DbContext {\n        public MyAwesomeProjectContext(DbContextOptions<MyAwesomeProjectContext> options) : base(options) { }\n\n        // ...\n  \n        public DbSet<NewHotness> NewHotnesses { get; set; }\n\n        // ...\n    }\n}\n")),(0,r.kt)("p",null,"Let's let EF know by adding a migration to my project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"dotnet ef migrations add TestOurMigrationsApproach\n")),(0,r.kt)("p",null,"Commit my change, push it to VSTS, wait for the build to run and a deployment to take place.... Okay. It's done. Looks good."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(20813).Z})),(0,r.kt)("p",null,"Let's take a look in the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"select * from NewHotnesses\ngo\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(80449).Z})),(0,r.kt)("p",null,"It's there! We are migrating our database upon deployment; and not in our ASP.Net Core app itself. I feel a burden lifted."),(0,r.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,r.kt)("p",null,"The EF Core team are aware of the lack of guidance around deploying migrations and have recently announced plans to fix that in the docs. You can track the progress of this issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aspnet/EntityFramework.Docs/issues/691"},"here"),". There's good odds that once they come out with this I'll find there's a better way than the approach I've outlined in this post. Until that glorious day!"))}m.isMDXComponent=!0},80449:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2018-06-24%2B08.59.00-7828b0a36371260cf5c914a171bd2cc9.png"},20813:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2018-06-24%2B09.02.22-a4ac12cfd1054f883d8ff3ff42635b8f.png"},64813:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2018-06-24%2B10.55.27-2b7dc38427272cc9bce0838236a371f8.png"}}]);
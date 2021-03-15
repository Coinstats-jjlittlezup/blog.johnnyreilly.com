(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,b=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1185:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-0d11295a182e25826af77915f0f1c321.png"},1186:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/use-generated-client-37998806f2c5b14790c76479439f4300.gif"},586:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(1166)),o={title:"Generate TypeScript and CSharp clients with NSwag based on an API",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:[],hide_table_of_contents:!1},l={permalink:"/2021/03/06/generate-typescript-and-csharp-clients-with-nswag",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-03-06-generate-typescript-and-csharp-clients-with-nswag.md",source:"@site/blog/2021-03-06-generate-typescript-and-csharp-clients-with-nswag.md",description:"Generating clients for APIs is a tremendous way to reduce the amount of work you have to do when you're building a project. Why handwrite that code when it can be auto-generated for you quickly and accurately by a tool like NSwag? To quote the docs:",date:"2021-03-06T00:00:00.000Z",formattedDate:"March 6, 2021",tags:[],title:"Generate TypeScript and CSharp clients with NSwag based on an API",readingTime:8.565,truncated:!1,prevItem:{title:"Managed Identity, Azure SQL and Entity Framework",permalink:"/2021/03/10/managed-identity-azure-sql-entity-framework"},nextItem:{title:"Goodbye Client Affinity, Hello Data Protection with Azure",permalink:"/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure"}},p=[{value:"Create an API",id:"create-an-api",children:[]},{value:"The client generator project",id:"the-client-generator-project",children:[]},{value:"Building a &quot;make a client&quot; script",id:"building-a-make-a-client-script",children:[]},{value:"Consume our generated API client",id:"consume-our-generated-api-client",children:[]}],c={toc:p};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Generating clients for APIs is a tremendous way to reduce the amount of work you have to do when you're building a project. Why handwrite that code when it can be auto-generated for you quickly and accurately by a tool like ",Object(i.b)("a",{parentName:"p",href:"https://github.com/RicoSuter/NSwag"},"NSwag"),"? To quote the docs:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The NSwag project provides tools to generate OpenAPI specifications from existing ASP.NET Web API controllers and client code from these OpenAPI specifications. The project combines the functionality of Swashbuckle (OpenAPI/Swagger generation) and AutoRest (client generation) in one toolchain.")),Object(i.b)("p",null,"There's some great posts out there that show you how to generate the clients with NSwag using an ",Object(i.b)("inlineCode",{parentName:"p"},"nswag.json")," file directly from a .NET project."),Object(i.b)("p",null,"However, what if you want to use NSwag purely for its client generation capabilities? You may have an API written with another language / platform that exposes a Swagger endpoint, that you simply wish to create a client for. How do you do that? Also, if you want to do some special customisation of the clients you're generating, you may find yourself struggling to configure that in ",Object(i.b)("inlineCode",{parentName:"p"},"nswag.json"),". In that case, it's possible to hook into NSwag directly to do this with a simple .NET console app."),Object(i.b)("p",null,"This post will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a .NET API which exposes a Swagger endpoint. (Alternatively, you could use any other Swagger endpoint; ",Object(i.b)("a",{parentName:"li",href:"https://blog.logrocket.com/documenting-your-express-api-with-swagger/"},"for example an Express API"),".)"),Object(i.b)("li",{parentName:"ul"},"Create a .NET console app which can create both TypeScript and CSharp clients from a Swagger endpoint."),Object(i.b)("li",{parentName:"ul"},"Create a script which, when run, creates a TypeScript client."),Object(i.b)("li",{parentName:"ul"},"Consume the API using the generated client in a simple TypeScript application.")),Object(i.b)("p",null,"You will need both ",Object(i.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," and the ",Object(i.b)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download"},".NET SDK")," installed."),Object(i.b)("h2",{id:"create-an-api"},"Create an API"),Object(i.b)("p",null,"We'll now create an API which exposes a ",Object(i.b)("a",{parentName:"p",href:"https://swagger.io/resources/open-api/"},"Swagger / Open API")," endpoint. Whilst we're doing that we'll create a TypeScript React app which we'll use later on. We'll drop to the command line and enter the following commands which use the .NET SDK, node and the ",Object(i.b)("inlineCode",{parentName:"p"},"create-react-app")," package:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"mkdir src\ncd src\nnpx create-react-app client-app --template typescript\nmkdir server-app\ncd server-app\ndotnet new api -o API\ncd API\ndotnet add package NSwag.AspNetCore\n")),Object(i.b)("p",null,"We now have a .NET API with a dependency on NSwag. We'll start to use it by replacing the ",Object(i.b)("inlineCode",{parentName:"p"},"Startup.cs")," that's been generated with the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace API\n{\n    public class Startup\n    {\n        const string ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY = "AllowDevelopmentSpecificOrigins";\n        const string LOCAL_DEVELOPMENT_URL = "http://localhost:3000";\n\n        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n\n        public IConfiguration Configuration { get; }\n\n        // This method gets called by the runtime. Use this method to add services to the container.\n        public void ConfigureServices(IServiceCollection services)\n        {\n\n            services.AddControllers();\n\n            services.AddCors(options => {\n                options.AddPolicy(name: ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY,\n                    builder => {\n                        builder.WithOrigins(LOCAL_DEVELOPMENT_URL)\n                            .AllowAnyMethod()\n                            .AllowAnyHeader()\n                            .AllowCredentials();\n                    });\n            });\n\n            // Register the Swagger services\n            services.AddSwaggerDocument();\n        }\n\n        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n        public void Configure (IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment())\n            {\n                app.UseDeveloperExceptionPage();\n            } \n            else\n            {\n                app.UseExceptionHandler("/Error");\n                app.UseHsts ();\n                app.UseHttpsRedirection();\n            }\n\n            app.UseDefaultFiles();\n            app.UseStaticFiles();\n\n            app.UseRouting();\n\n            app.UseAuthorization();\n\n            // Register the Swagger generator and the Swagger UI middlewares\n            app.UseOpenApi();\n            app.UseSwaggerUi3();\n\n            if (env.IsDevelopment())\n                app.UseCors(ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY);\n\n            app.UseEndpoints(endpoints =>\n            {\n                endpoints.MapControllers();\n            });\n        }\n    }\n}\n')),Object(i.b)("p",null,"The significant changes in the above ",Object(i.b)("inlineCode",{parentName:"p"},"Startup.cs")," are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Exposing a Swagger endpoint with ",Object(i.b)("inlineCode",{parentName:"li"},"UseOpenApi")," and ",Object(i.b)("inlineCode",{parentName:"li"},"UseSwaggerUi3"),". NSwag will automagically create Swagger endpoints in your application for all your controllers. The .NET template ships with a ",Object(i.b)("inlineCode",{parentName:"li"},"WeatherForecastController"),"."),Object(i.b)("li",{parentName:"ol"},"Allowing ",Object(i.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/aspnet/core/security/cors"},"Cross-Origin Requests (CORS)")," which is useful during development (and will facilitate a demo later).")),Object(i.b)("p",null,"Back in the root of our project we're going to initialise an npm project. We're going to use this to put in place a number of handy ",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/using-npm/scripts"},Object(i.b)("inlineCode",{parentName:"a"},"npm scripts"))," that will make our project easier to work with. So we'll ",Object(i.b)("inlineCode",{parentName:"p"},"npm init")," and accept all the defaults."),Object(i.b)("p",null,"Now we're going add some dependencies which our scripts will use: ",Object(i.b)("inlineCode",{parentName:"p"},"npm install cpx cross-env npm-run-all start-server-and-test")),Object(i.b)("p",null,"We'll also add ourselves some ",Object(i.b)("inlineCode",{parentName:"p"},"scripts")," to our ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "postinstall": "npm run install:client-app && npm run install:server-app",\n    "install:client-app": "cd src/client-app && npm install",\n    "install:server-app": "cd src/server-app/API && dotnet restore",\n    "build": "npm run build:client-app && npm run build:server-app",\n    "build:client-app": "cd src/client-app && npm run build",\n    "postbuild:client-app": "cpx \\"src/client-app/build/**/*.*\\" \\"src/server-app/API/wwwroot/\\"",\n    "build:server-app": "cd src/server-app/API && dotnet build --configuration release",\n    "start": "run-p start:client-app start:server-app",\n    "start:client-app": "cd src/client-app && npm start",\n    "start:server-app": "cross-env ASPNETCORE_URLS=http://*:5000 ASPNETCORE_ENVIRONMENT=Development dotnet watch --project src/server-app/API run --no-launch-profile"\n  }\n')),Object(i.b)("p",null,"Let's walk through what the above scripts provide us with:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Running ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")," in the root of our project will not only install dependencies for our root ",Object(i.b)("inlineCode",{parentName:"li"},"package.json"),", thanks to our ",Object(i.b)("inlineCode",{parentName:"li"},"postinstall"),", ",Object(i.b)("inlineCode",{parentName:"li"},"install:client-app")," and ",Object(i.b)("inlineCode",{parentName:"li"},"install:server-app")," scripts it will install the React app and .NET app dependencies as well."),Object(i.b)("li",{parentName:"ul"},"Running ",Object(i.b)("inlineCode",{parentName:"li"},"npm run build")," will build our client and server apps."),Object(i.b)("li",{parentName:"ul"},"Running ",Object(i.b)("inlineCode",{parentName:"li"},"npm run start")," will start both our React app and our .NET app. Our React app will be started at ",Object(i.b)("a",{parentName:"li",href:"http://localhost:3000"},"http://localhost:3000"),". Our .NET app will be started at ",Object(i.b)("a",{parentName:"li",href:"http://localhost:5000"},"http://localhost:5000")," (some environment variables are passed to it with ",Object(i.b)("a",{parentName:"li",href:"https://github.com/kentcdodds/cross-env"},Object(i.b)("inlineCode",{parentName:"a"},"cross-env"))," ).")),Object(i.b)("p",null,"Once ",Object(i.b)("inlineCode",{parentName:"p"},"npm run start")," has been run, you will find a Swagger endpoint at ",Object(i.b)("a",{parentName:"p",href:"http://localhost:5000/swagger"},"http://localhost:5000/swagger"),":"),Object(i.b)("p",null,Object(i.b)("img",{alt:"swagger screenshot",src:n(1185).default})),Object(i.b)("h2",{id:"the-client-generator-project"},"The client generator project"),Object(i.b)("p",null,"Now we've scaffolded our Swagger-ed API, we want to put together the console app that will generate our typed clients."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cd src/server-app\ndotnet new console -o APIClientGenerator\ncd APIClientGenerator\ndotnet add package NSwag.CodeGeneration.CSharp\ndotnet add package NSwag.CodeGeneration.TypeScript\ndotnet add package NSwag.Core\n")),Object(i.b)("p",null,"We now have a console app with dependencies on the code generation portions of NSwag. Now let's change up ",Object(i.b)("inlineCode",{parentName:"p"},"Program.cs")," to make use of this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Threading.Tasks;\nusing NJsonSchema;\nusing NJsonSchema.CodeGeneration.TypeScript;\nusing NJsonSchema.Visitors;\nusing NSwag;\nusing NSwag.CodeGeneration.CSharp;\nusing NSwag.CodeGeneration.TypeScript;\n\nnamespace APIClientGenerator\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            if (args.Length != 3)\n                throw new ArgumentException("Expecting 3 arguments: URL, generatePath, language");\n\n            var url = args[0];\n            var generatePath = Path.Combine(Directory.GetCurrentDirectory(), args[1]);\n            var language = args[2];\n\n            if (language != "TypeScript" && language != "CSharp")\n                throw new ArgumentException("Invalid language parameter; valid values are TypeScript and CSharp");\n\n            if (language == "TypeScript") \n                await GenerateTypeScriptClient(url, generatePath);\n            else\n                await GenerateCSharpClient(url, generatePath);\n        }\n\n        async static Task GenerateTypeScriptClient(string url, string generatePath) =>\n            await GenerateClient(\n                document: await OpenApiDocument.FromUrlAsync(url),\n                generatePath: generatePath,\n                generateCode: (OpenApiDocument document) =>\n                {\n                    var settings = new TypeScriptClientGeneratorSettings();\n\n                    settings.TypeScriptGeneratorSettings.TypeStyle = TypeScriptTypeStyle.Interface;\n                    settings.TypeScriptGeneratorSettings.TypeScriptVersion = 3.5M;\n                    settings.TypeScriptGeneratorSettings.DateTimeType = TypeScriptDateTimeType.String;\n\n                    var generator = new TypeScriptClientGenerator(document, settings);\n                    var code = generator.GenerateFile();\n\n                    return code;\n                }\n            );\n\n        async static Task GenerateCSharpClient(string url, string generatePath) =>\n            await GenerateClient(\n                document: await OpenApiDocument.FromUrlAsync(url),\n                generatePath: generatePath,\n                generateCode: (OpenApiDocument document) =>\n                {\n                    var settings = new CSharpClientGeneratorSettings\n                    {\n                        UseBaseUrl = false\n                    };\n\n                    var generator = new CSharpClientGenerator(document, settings);\n                    var code = generator.GenerateFile();\n                    return code;\n                }\n            );\n\n        private async static Task GenerateClient(OpenApiDocument document, string generatePath, Func<OpenApiDocument, string> generateCode)\n        {\n            Console.WriteLine($"Generating {generatePath}...");\n\n            var code = generateCode(document);\n\n            await System.IO.File.WriteAllTextAsync(generatePath, code);\n        }\n    }\n}\n')),Object(i.b)("p",null,"We've created ourselves a simple .NET console application that creates TypeScript and CSharp clients for a given Swagger URL. It expects three arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")," ","-"," the url of the ",Object(i.b)("inlineCode",{parentName:"li"},"swagger.json")," file to generate a client for."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"generatePath")," ","-"," the path where the generated client file should be placed, relative to this project."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"language")," ","-",' the language of the client to generate; valid values are "TypeScript" and "CSharp".')),Object(i.b)("p",null,"To create a TypeScript client with it then we'd use the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"dotnet run --project src/server-app/APIClientGenerator http://localhost:5000/swagger/v1/swagger.json src/client-app/src/clients.ts TypeScript\n")),Object(i.b)("p",null,"However, for this to run successfully, we'll first have to ensure the API is running. It would be great if we had a single command we could run that would:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"bring up the API"),Object(i.b)("li",{parentName:"ul"},"generate a client"),Object(i.b)("li",{parentName:"ul"},"bring down the API")),Object(i.b)("p",null,"Let's make that."),Object(i.b)("h2",{id:"building-a-make-a-client-script"},'Building a "make a client" script'),Object(i.b)("p",null,"In the root of the project we're going to add the following ",Object(i.b)("inlineCode",{parentName:"p"},"scripts"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"generate-client:server-app": "start-server-and-test generate-client:server-app:serve http-get://localhost:5000/swagger/v1/swagger.json generate-client:server-app:generate",\n    "generate-client:server-app:serve": "cross-env ASPNETCORE_URLS=http://*:5000 ASPNETCORE_ENVIRONMENT=Development dotnet run --project src/server-app/API --no-launch-profile",\n    "generate-client:server-app:generate": "dotnet run --project src/server-app/APIClientGenerator http://localhost:5000/swagger/v1/swagger.json src/client-app/src/clients.ts TypeScript",\n')),Object(i.b)("p",null,"Let's walk through what's happening here. Running ",Object(i.b)("inlineCode",{parentName:"p"},"npm run generate-client:server-app")," will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/bahmutov/start-server-and-test"},Object(i.b)("inlineCode",{parentName:"a"},"start-server-and-test"))," package to spin up our server-app by running the ",Object(i.b)("inlineCode",{parentName:"li"},"generate-client:server-app:serve")," script."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"start-server-and-test")," waits for the Swagger endpoint to start responding to requests. When it does start responding, ",Object(i.b)("inlineCode",{parentName:"li"},"start-server-and-test")," runs the ",Object(i.b)("inlineCode",{parentName:"li"},"generate-client:server-app:generate"),' script which runs our APIClientGenerator console app and provides it with the URL where our swagger can be found, the path of the file to generate and the language of "TypeScript"')),Object(i.b)("p",null,"If you were wanting to generate a C# client (say if you were writing a ",Object(i.b)("a",{parentName:"p",href:"https://blog.logrocket.com/js-free-frontends-blazor/"},"Blazor")," app) then you could change the ",Object(i.b)("inlineCode",{parentName:"p"},"generate-client:server-app:generate")," script as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"generate-client:server-app:generate": "dotnet run --project src/server-app/ApiClientGenerator http://localhost:5000/swagger/v1/swagger.json clients.cs CSharp",\n')),Object(i.b)("h2",{id:"consume-our-generated-api-client"},"Consume our generated API client"),Object(i.b)("p",null,"Let's run the ",Object(i.b)("inlineCode",{parentName:"p"},"npm run generate-client:server-app")," command. It creates a ",Object(i.b)("inlineCode",{parentName:"p"},"clients.ts")," file which nestles nicely inside our ",Object(i.b)("inlineCode",{parentName:"p"},"client-app"),". We're going to exercise that in a moment. First of all, let's enable proxying from our ",Object(i.b)("inlineCode",{parentName:"p"},"client-app")," to our ",Object(i.b)("inlineCode",{parentName:"p"},"server-app")," following the instructions in the ",Object(i.b)("a",{parentName:"p",href:"https://create-react-app.dev/docs/proxying-api-requests-in-development/"},"Create React App docs")," and adding the following to our ",Object(i.b)("inlineCode",{parentName:"p"},"client-app/package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"proxy": "http://localhost:5000"\n')),Object(i.b)("p",null,"Now let's start our apps with ",Object(i.b)("inlineCode",{parentName:"p"},"npm run start"),". We'll then replace the contents of ",Object(i.b)("inlineCode",{parentName:"p"},"App.tsx")," with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport "./App.css";\nimport { WeatherForecast, WeatherForecastClient } from "./clients";\n\nfunction App() {\n  const [weather, setWeather] = React.useState<WeatherForecast[] | null>();\n  React.useEffect(() => {\n    async function loadWeather() {\n      const weatherClient = new WeatherForecastClient(/* baseUrl */ "");\n      const forecast = await weatherClient.get();\n      setWeather(forecast);\n    }\n    loadWeather();\n  }, [setWeather]);\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        {weather ? (\n          <table>\n            <thead>\n              <tr>\n                <th>Date</th>\n                <th>Summary</th>\n                <th>Centigrade</th>\n                <th>Fahrenheit</th>\n              </tr>\n            </thead>\n            <tbody>\n              {weather.map(({ date, summary, temperatureC, temperatureF }) => (\n                <tr key={date}>\n                  <td>{new Date(date).toLocaleDateString()}</td>\n                  <td>{summary}</td>\n                  <td>{temperatureC}</td>\n                  <td>{temperatureF}</td>\n                </tr>\n              ))}\n            </tbody>\n          </table>\n        ) : (\n          <p>Loading weather...</p>\n        )}\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),Object(i.b)("p",null,"Inside the ",Object(i.b)("inlineCode",{parentName:"p"},"React.useEffect")," above you can see we create a new instance of the auto-generated ",Object(i.b)("inlineCode",{parentName:"p"},"WeatherForecastClient"),". We then call ",Object(i.b)("inlineCode",{parentName:"p"},"weatherClient.get()")," which sends the ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," request to the server to acquire the data and provides it in a strongly typed fashion (",Object(i.b)("inlineCode",{parentName:"p"},"get()")," returns an array of ",Object(i.b)("inlineCode",{parentName:"p"},"WeatherForecast"),"). This is then displayed on the page like so:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"load data from server",src:n(1186).default})),Object(i.b)("p",null,"As you an see we're loading data from the server using our auto-generated client. We're reducing the amount of code we have to write ",Object(i.b)("em",{parentName:"p"},"and")," we're reducing the likelihood of errors."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This post was originally posted on ",Object(i.b)("a",{parentName:"em",href:"https://blog.logrocket.com/generate-typescript-csharp-clients-nswag-api/"},"LogRocket"),".")))}s.isMDXComponent=!0}}]);
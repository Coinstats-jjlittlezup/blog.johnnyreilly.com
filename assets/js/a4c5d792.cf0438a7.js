(window.webpackJsonp=window.webpackJsonp||[]).push([[721],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=l(n),u=r,m=y["".concat(s,".").concat(u)]||y[u]||d[u]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},851:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(1176)),s={title:"Using Reflection to Identify Unwanted Dependencies",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["reflection","test","dependencies"],hide_table_of_contents:!1},i={permalink:"/2018/04/28/using-reflection-to-identify-unwanted-dependencies",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-04-28-using-reflection-to-identify-unwanted-dependencies.md",source:"@site/blog/2018-04-28-using-reflection-to-identify-unwanted-dependencies.md",description:"I having a web app which is fairly complex. It's made up of services, controllers and all sorts of things. So far, so unremarkable. However, I needed to ensure that the controllers did not attempt to access the database via any of their dependencies. Or their dependencies, dependencies. Or their dependencies. You get my point.",date:"2018-04-28T00:00:00.000Z",formattedDate:"April 28, 2018",tags:[{label:"reflection",permalink:"/tags/reflection"},{label:"test",permalink:"/tags/test"},{label:"dependencies",permalink:"/tags/dependencies"}],title:"Using Reflection to Identify Unwanted Dependencies",readingTime:2.54,truncated:!1,prevItem:{title:"Compromising: A Guide for Developers",permalink:"/2018/05/13/compromising-guide-for-developers"},nextItem:{title:"It's Not Dead 2: mobx-react-devtools and the undead",permalink:"/2018/03/26/its-not-dead-2-mobx-react-devtools-and-the-undead"}},p=[],c={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I having a web app which is fairly complex. It's made up of services, controllers and all sorts of things. So far, so unremarkable. However, I needed to ensure that the controllers did not attempt to access the database via any of their dependencies. Or their dependencies, dependencies. Or their dependencies. You get my point."),Object(o.b)("p",null," The why is not important here. What's significant is the idea of walking a dependency tree and identifying, via a reflection based test, when such unwelcome dependencies occur, and where."),Object(o.b)("p",null,"When they do occur the test should fail, like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"[xUnit.net 00:00:01.6766691]     My.Web.Tests.HousekeepingTests.My_Api_Controllers_do_not_depend_upon_the_database [FAIL]\n[xUnit.net 00:00:01.6782295]       Expected dependsUponTheDatabase.Any() to be False because My.Api.Controllers.ThingyController depends upon the database through My.Data.Services.OohItsAService, but found True.\n")),Object(o.b)("p",null,"What follows is an example of how you can accomplish this. It is exceedingly far from the most beautiful code I've ever written. But it works. One reservation I have about it is that it doesn't use the Dependency Injection mechanism used at runtime (AutoFac). If I had more time I would amend the code to use that instead; it would become an easier test to read if I did. Also it would better get round the limitations of the code below. Essentially the approach relies on the assumption of there being 1 interface and 1 implementation. That's often not true in complex systems. But this is good enough to roll with for now."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Reflection;\nusing FluentAssertions;\nusing My.Data;\nusing My.Web.Controllers;\nusing Xunit;\n\nnamespace My.Web.Tests {\n    public class OiYouThereGetOutTests {\n        [Fact]\n        public void My_Controllers_do_not_depend_upon_the_database() {\n            var myConcreteTypes = GetMyAssemblies()\n                .SelectMany(assembly => assembly.GetTypes())\n                .ToArray();\n\n            var controllerTypes = typeof(My.Web.Startup).Assembly.GetTypes()\n                .Where(myWebType =>\n                    myWebType != typeof(Microsoft.AspNetCore.Mvc.Controller) &&\n                    typeof(Microsoft.AspNetCore.Mvc.Controller).IsAssignableFrom(myWebType));\n\n            foreach (var controllerType in controllerTypes) {\n                var allTheTypes = GetDependentTypes(controllerType, myConcreteTypes);\n                allTheTypes.Count.Should().BeGreaterThan(0);\n                var dependsUponTheDatabase = allTheTypes.Where(keyValue => keyValue.Key == typeof(MyDbContext));\n                dependsUponTheDatabase.Any().Should().Be(false, because: $"{controllerType} depends upon the database through {string.Join(", ", dependsUponTheDatabase.Select(dod => dod.Value))}");\n            }\n        }\n\n        private static Dictionary<Type, Type> GetDependentTypes(Type type, Type[] typesToCheck, Dictionary<Type, Type> typesSoFar = null) {\n            var types = typesSoFar ?? new Dictionary<Type, Type>();\n            foreach (var constructor in type.GetConstructors().Where(ctor => ctor.IsPublic)) {\n                foreach (var parameter in constructor.GetParameters()) {\n                    if (parameter.ParameterType.IsInterface) {\n                        if (parameter.ParameterType.IsGenericType) {\n                            foreach (var genericType in parameter.ParameterType.GenericTypeArguments) {\n                                AddIfMissing(types, genericType, type);\n                            }\n                        } else {\n                            var typesImplementingInterface = TypesImplementingInterface(parameter.ParameterType, typesToCheck);\n                            foreach (var typeImplementingInterface in typesImplementingInterface) {\n                                AddIfMissing(types, typeImplementingInterface, type);\n                                AddIfMissing(types, GetDependentTypes(typeImplementingInterface, typesToCheck, types).Keys.ToList(), type);\n                            }\n                        }\n                    } else {\n                        AddIfMissing(types, parameter.ParameterType, type);\n                        AddIfMissing(types, GetDependentTypes(parameter.ParameterType, typesToCheck, types).Keys.ToList(), type);\n                    }\n                }\n            }\n            return types;\n        }\n\n        private static void AddIfMissing(Dictionary<Type, Type> types, Type typeToAdd, Type parentType) {\n            if (!types.Keys.Contains(typeToAdd))\n                types.Add(typeToAdd, parentType);\n        }\n\n        private static void AddIfMissing(Dictionary<Type, Type> types, IList<Type> typesToAdd, Type parentType) {\n            foreach (var typeToAdd in typesToAdd) {\n                AddIfMissing(types, typeToAdd, parentType);\n            }\n        }\n\n        private static Type[] TypesImplementingInterface(Type interfaceType, Type[] typesToCheck) =>\n            typesToCheck.Where(type => !type.IsInterface && interfaceType.IsAssignableFrom(type)).ToArray();\n\n        private static bool IsRealClass(Type testType) =>\n            testType.IsAbstract == false &&\n            testType.IsGenericType == false &&\n            testType.IsGenericTypeDefinition == false &&\n            testType.IsInterface == false;\n\n        private static Assembly[] GetMyAssemblies() =>\n            AppDomain\n            .CurrentDomain\n            .GetAssemblies()\n            // Not strictly necessary but it reduces the amount of types returned\n            .Where(assembly => assembly.GetName().Name.StartsWith("My")) \n            .ToArray();\n    }\n}\n')))}l.isMDXComponent=!0}}]);
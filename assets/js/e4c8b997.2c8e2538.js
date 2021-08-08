"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[37911],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(p,".").concat(u)]||d[u]||y[u]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19059:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Using Reflection to Identify Unwanted Dependencies",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["reflection","test","dependencies"],hide_table_of_contents:!1},p=void 0,l={permalink:"/2018/04/28/using-reflection-to-identify-unwanted-dependencies",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-04-28-using-reflection-to-identify-unwanted-dependencies.md",source:"@site/blog/2018-04-28-using-reflection-to-identify-unwanted-dependencies.md",title:"Using Reflection to Identify Unwanted Dependencies",description:"I having a web app which is fairly complex. It's made up of services, controllers and all sorts of things. So far, so unremarkable. However, I needed to ensure that the controllers did not attempt to access the database via any of their dependencies. Or their dependencies, dependencies. Or their dependencies. You get my point.",date:"2018-04-28T00:00:00.000Z",formattedDate:"April 28, 2018",tags:[{label:"reflection",permalink:"/tags/reflection"},{label:"test",permalink:"/tags/test"},{label:"dependencies",permalink:"/tags/dependencies"}],readingTime:2.54,truncated:!1,prevItem:{title:"Compromising: A Guide for Developers",permalink:"/2018/05/13/compromising-guide-for-developers"},nextItem:{title:"It's Not Dead 2: mobx-react-devtools and the undead",permalink:"/2018/03/26/its-not-dead-2-mobx-react-devtools-and-the-undead"}},c=[],y={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I having a web app which is fairly complex. It's made up of services, controllers and all sorts of things. So far, so unremarkable. However, I needed to ensure that the controllers did not attempt to access the database via any of their dependencies. Or their dependencies, dependencies. Or their dependencies. You get my point."),(0,a.kt)("p",null," The why is not important here. What's significant is the idea of walking a dependency tree and identifying, via a reflection based test, when such unwelcome dependencies occur, and where."),(0,a.kt)("p",null,"When they do occur the test should fail, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"[xUnit.net 00:00:01.6766691]     My.Web.Tests.HousekeepingTests.My_Api_Controllers_do_not_depend_upon_the_database [FAIL]\n[xUnit.net 00:00:01.6782295]       Expected dependsUponTheDatabase.Any() to be False because My.Api.Controllers.ThingyController depends upon the database through My.Data.Services.OohItsAService, but found True.\n")),(0,a.kt)("p",null,"What follows is an example of how you can accomplish this. It is exceedingly far from the most beautiful code I've ever written. But it works. One reservation I have about it is that it doesn't use the Dependency Injection mechanism used at runtime (AutoFac). If I had more time I would amend the code to use that instead; it would become an easier test to read if I did. Also it would better get round the limitations of the code below. Essentially the approach relies on the assumption of there being 1 interface and 1 implementation. That's often not true in complex systems. But this is good enough to roll with for now."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Reflection;\nusing FluentAssertions;\nusing My.Data;\nusing My.Web.Controllers;\nusing Xunit;\n\nnamespace My.Web.Tests {\n    public class OiYouThereGetOutTests {\n        [Fact]\n        public void My_Controllers_do_not_depend_upon_the_database() {\n            var myConcreteTypes = GetMyAssemblies()\n                .SelectMany(assembly => assembly.GetTypes())\n                .ToArray();\n\n            var controllerTypes = typeof(My.Web.Startup).Assembly.GetTypes()\n                .Where(myWebType =>\n                    myWebType != typeof(Microsoft.AspNetCore.Mvc.Controller) &&\n                    typeof(Microsoft.AspNetCore.Mvc.Controller).IsAssignableFrom(myWebType));\n\n            foreach (var controllerType in controllerTypes) {\n                var allTheTypes = GetDependentTypes(controllerType, myConcreteTypes);\n                allTheTypes.Count.Should().BeGreaterThan(0);\n                var dependsUponTheDatabase = allTheTypes.Where(keyValue => keyValue.Key == typeof(MyDbContext));\n                dependsUponTheDatabase.Any().Should().Be(false, because: $"{controllerType} depends upon the database through {string.Join(", ", dependsUponTheDatabase.Select(dod => dod.Value))}");\n            }\n        }\n\n        private static Dictionary<Type, Type> GetDependentTypes(Type type, Type[] typesToCheck, Dictionary<Type, Type> typesSoFar = null) {\n            var types = typesSoFar ?? new Dictionary<Type, Type>();\n            foreach (var constructor in type.GetConstructors().Where(ctor => ctor.IsPublic)) {\n                foreach (var parameter in constructor.GetParameters()) {\n                    if (parameter.ParameterType.IsInterface) {\n                        if (parameter.ParameterType.IsGenericType) {\n                            foreach (var genericType in parameter.ParameterType.GenericTypeArguments) {\n                                AddIfMissing(types, genericType, type);\n                            }\n                        } else {\n                            var typesImplementingInterface = TypesImplementingInterface(parameter.ParameterType, typesToCheck);\n                            foreach (var typeImplementingInterface in typesImplementingInterface) {\n                                AddIfMissing(types, typeImplementingInterface, type);\n                                AddIfMissing(types, GetDependentTypes(typeImplementingInterface, typesToCheck, types).Keys.ToList(), type);\n                            }\n                        }\n                    } else {\n                        AddIfMissing(types, parameter.ParameterType, type);\n                        AddIfMissing(types, GetDependentTypes(parameter.ParameterType, typesToCheck, types).Keys.ToList(), type);\n                    }\n                }\n            }\n            return types;\n        }\n\n        private static void AddIfMissing(Dictionary<Type, Type> types, Type typeToAdd, Type parentType) {\n            if (!types.Keys.Contains(typeToAdd))\n                types.Add(typeToAdd, parentType);\n        }\n\n        private static void AddIfMissing(Dictionary<Type, Type> types, IList<Type> typesToAdd, Type parentType) {\n            foreach (var typeToAdd in typesToAdd) {\n                AddIfMissing(types, typeToAdd, parentType);\n            }\n        }\n\n        private static Type[] TypesImplementingInterface(Type interfaceType, Type[] typesToCheck) =>\n            typesToCheck.Where(type => !type.IsInterface && interfaceType.IsAssignableFrom(type)).ToArray();\n\n        private static bool IsRealClass(Type testType) =>\n            testType.IsAbstract == false &&\n            testType.IsGenericType == false &&\n            testType.IsGenericTypeDefinition == false &&\n            testType.IsInterface == false;\n\n        private static Assembly[] GetMyAssemblies() =>\n            AppDomain\n            .CurrentDomain\n            .GetAssemblies()\n            // Not strictly necessary but it reduces the amount of types returned\n            .Where(assembly => assembly.GetName().Name.StartsWith("My")) \n            .ToArray();\n    }\n}\n')))}d.isMDXComponent=!0}}]);
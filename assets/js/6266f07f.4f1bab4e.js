(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1176:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),g=i,h=u["".concat(o,".").concat(g)]||u[g]||p[g]||a;return t?r.a.createElement(h,s(s({ref:n},l),{},{components:t})):r.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},629:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var i=t(3),r=t(8),a=(t(0),t(1176)),o={title:"WCF - moving from Config to Code, a simple WCF service harness (plus implementing your own Authorization)",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["ServiceAuthorizationManager","Windows Account","Windows Service","configuration","WCF","authorisation","NetTcpBinding"],hide_table_of_contents:!1},s={permalink:"/2012/03/22/wcf-moving-from-config-to-code-simple",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-03-22-wcf-moving-from-config-to-code-simple.md",source:"@site/blog/2012-03-22-wcf-moving-from-config-to-code-simple.md",description:"Last time I wrote about WCF I was getting up and running with WCF Transport Windows authentication using NetTcpBinding in an Intranet environment. I ended up with a WCF service hosted in a Windows Service which did pretty much what the previous post name implies.",date:"2012-03-22T00:00:00.000Z",formattedDate:"March 22, 2012",tags:[{label:"ServiceAuthorizationManager",permalink:"/tags/service-authorization-manager"},{label:"Windows Account",permalink:"/tags/windows-account"},{label:"Windows Service",permalink:"/tags/windows-service"},{label:"configuration",permalink:"/tags/configuration"},{label:"WCF",permalink:"/tags/wcf"},{label:"authorisation",permalink:"/tags/authorisation"},{label:"NetTcpBinding",permalink:"/tags/net-tcp-binding"}],title:"WCF - moving from Config to Code, a simple WCF service harness (plus implementing your own Authorization)",readingTime:10.66,truncated:!1,prevItem:{title:"Making PDFs from HTML in C# using WKHTMLtoPDF",permalink:"/2012/04/05/making-pdfs-from-html-in-c-using"},nextItem:{title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",permalink:"/2012/03/17/using-pubsub-observer-pattern-to"}},c=[{value:"Moving from Config to Code",id:"moving-from-config-to-code",children:[]},{value:"Show me your harness",id:"show-me-your-harness",children:[]},{value:"Locking down Authorization to a single Windows account",id:"locking-down-authorization-to-a-single-windows-account",children:[]}],l={toc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Last time I wrote about WCF I was getting up and running with ",Object(a.b)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/02/wcf-transport-windows-authentication.html"},"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment"),". I ended up with a WCF service hosted in a Windows Service which did pretty much what the previous post name implies."),Object(a.b)("p",null," Since writing that I've taken things on a bit further and I thought it worth recording my approach whilst it's still fresh in my mind. There's 3 things I want to go over:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'I\'ve moved away from the standard config driven WCF approach to a more "code-first" style'),Object(a.b)("li",{parentName:"ol"},"I've established a basic Windows Service hosted WCF service / client harness which is useful if you're trying to get up and running with a WCF service quickly"),Object(a.b)("li",{parentName:"ol"},"I've locked down the WCF authorization to a single Windows account through the use of my own ",Object(a.b)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/ms731774.aspx"},"ServiceAuthorizationManager"))),Object(a.b)("h2",{id:"moving-from-config-to-code"},"Moving from Config to Code"),Object(a.b)("p",null,"So, originally I was doing what all the cool kids are doing and driving the configuration of my WCF service and all its clients through config files. And why not? I'm in good company."),Object(a.b)("p",null,"Here's why not: it gets ","*",Object(a.b)("strong",{parentName:"p"},"very"),"*"," verbose ","*",Object(a.b)("strong",{parentName:"p"},"very"),"*"," quickly...."),Object(a.b)("p",null,"Okay - that's not the end of the world. My problem was that I had ","~","10 Windows Services and 3 Web applications that needed to call into my WCF Service. I didn't want to have to separately tweak 15 or so configs each time I wanted to make one standard change to WCF configuration settings. I wanted everything in one place."),Object(a.b)("p",null,"Now there's newer (and probably hipper) ways of achieving this. ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/a/2814286"},"Here's one possibility I happened upon on StackOverflow that looks perfectly fine.")),Object(a.b)("p",null,"Well I didn't use a hip new approach - no I went Old School with my old friend the ",Object(a.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/ms228154.aspx"},"appSettings file attribute"),". Remember that? It's just a simple way to have all your common appSettings configuration settings in a single file which can be linked to from as many other apps as you like. It's wonderful and I've been using it for a long time now. Unfortunately it's pretty basic in that it's only the appSettings section that can be shared out; no ",Object(a.b)("inlineCode",{parentName:"p"},"&lt;system.serviceModel&gt;")," or similar."),Object(a.b)("p",null,"But that wasn't really a problem from my perspective. I realised that there were actually very few things that needed to be configurable for my WCF service. Really I wanted a basic WCF harness that could be initialised in code which implicitly set all the basic configuration with settings that worked (ie it was set up with defaults like maximum message size which were sufficiently sized). On top of that I would allow myself to configure just those things that I needed to through the use of my own custom WCF config settings in the shared appSettings.config file."),Object(a.b)("p",null,"Once done I massively reduced the size of my configs from frankly gazillions of entries to just these appSettings.config entries which were shared across each of my WCF service clients and by my Windows Service harness:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<appSettings>\n  <add key="WcfBaseAddressForClient" value="net.tcp://localhost:9700/"/>\n  <add key="WcfWindowsSecurityApplied" value="true" />\n  <add key="WcfCredentialsUserName" value="myUserName" />\n  <add key="WcfCredentialsPassword" value="myPassword" />\n  <add key="WcfCredentialsDomain" value="myDomain" />\n  </appSettings>\n')),Object(a.b)("p",null,"And these config settings used only by my Windows Service harness:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<appSettings file="../Shared/AppSettings.config">\n    <add key="WcfBaseAddressForService" value="net.tcp://localhost:9700/"/>\n  </appSettings>\n')),Object(a.b)("h2",{id:"show-me-your-harness"},"Show me your harness"),Object(a.b)("p",null,'I ended up with a quite a nice basic "vanilla" framework that allowed me to quickly set up Windows Service hosted WCF services. The framework also provided me with a simple way to consume these WCF services with a minimum of code an configuration. No muss. No fuss. :-) So pleased with it was I that I thought I\'d go through it here much in the manner of a chef baking a cake...'),Object(a.b)("p",null,'To start with I created myself a Windows Service in Visual Studio which I grandly called "WcfWindowsService". The main service class looked like this:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'public class WcfWindowsService: ServiceBase\n  {\n    public static string WindowsServiceName = "WCF Windows Service";\n    public static string WindowsServiceDescription = "Windows service that hosts a WCF service.";\n    \n    private static readonly log4net.ILog _logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);\n\n    public List<ServiceHost> _serviceHosts = null;\n\n    public WcfWindowsService()\n    {\n      ServiceName = WindowsServiceName;\n    }\n\n    public static void Main()\n    {\n      ServiceBase.Run(new WcfWindowsService());\n    }\n\n    /// <summary>\n    /// The Windows Service is starting\n    /// </summary>\n    /// <param name="args"></param>\n    protected override void OnStart(string[] args)\n    {\n      try\n      {\n        CloseAndClearServiceHosts();\n\n        //Make log4net startup\n        XmlConfigurator.Configure();\n        _logger.Warn("WCF Windows Service starting...");\n        _logger.Info("Global.WcfWindowsSecurityApplied = " + Global.WcfWindowsSecurityApplied.ToString().ToLower());\n\n        if (Global.WcfWindowsSecurityApplied)\n        {\n          _logger.Info("Global.WcfOnlyAuthorizedForWcfCredentials = " + Global.WcfOnlyAuthorizedForWcfCredentials.ToString().ToLower());\n\n          if (Global.WcfOnlyAuthorizedForWcfCredentials)\n          {\n            _logger.Info("Global.WcfCredentialsDomain = " + Global.WcfCredentialsDomain);\n            _logger.Info("Global.WcfCredentialsUserName = " + Global.WcfCredentialsUserName);\n          }\n        }\n\n        //Create binding\n        var wcfBinding = WcfHelper.CreateBinding(Global.WcfWindowsSecurityApplied);\n\n        // Create a servicehost and endpoints for each service and open each\n        _serviceHosts = new List<ServiceHost>();\n        _serviceHosts.Add(WcfServiceFactory<IHello>.CreateAndOpenServiceHost(typeof(HelloService), wcfBinding));\n        _serviceHosts.Add(WcfServiceFactory<IGoodbye>.CreateAndOpenServiceHost(typeof(GoodbyeService), wcfBinding));\n\n        _logger.Warn("WCF Windows Service started.");\n      }\n      catch (Exception exc)\n      {\n        _logger.Error("Problem starting up", exc);\n\n        throw exc;\n      }\n    }\n\n    /// <summary>\n    /// The Windows Service is stopping\n    /// </summary>\n    protected override void OnStop()\n    {\n      CloseAndClearServiceHosts();\n\n      _logger.Warn("WCF Windows Service stopped");\n    }\n\n    /// <summary>\n    /// Close and clear service hosts in list and clear it down\n    /// </summary>\n    private void CloseAndClearServiceHosts()\n    {\n      if (_serviceHosts != null)\n      {\n        foreach (var serviceHost in _serviceHosts)\n        {\n          CloseAndClearServiceHost(serviceHost);\n        }\n\n        _serviceHosts.Clear();\n      }\n    }\n\n    /// <summary>\n    /// Close and clear the passed service host\n    /// </summary>\n    /// <param name="serviceHost"></param>\n    private void CloseAndClearServiceHost(ServiceHost serviceHost)\n    {\n      if (serviceHost != null)\n      {\n        _logger.Info(string.Join(", ", serviceHost.BaseAddresses) + " is closing...");\n\n        serviceHost.Close();\n\n        _logger.Info(string.Join(", ", serviceHost.BaseAddresses) + " is closed");\n      }\n    }\n  }\n')),Object(a.b)("p",null,"As you've no doubt noticed this makes use of ",Object(a.b)("a",{parentName:"p",href:"http://logging.apache.org/log4net/"},"Log4Net")," for logging purposes (I'll assume you're aware of it). My Windows Service implements such fantastic WCF services as HelloService and GoodbyeService. Each revolutionary in their own little way. To give you a taste of the joie de vivre that these services exemplify take a look at this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'// Implement the IHello service contract in a service class.\n  public class HelloService : WcfServiceAuthorizationManager, IHello\n  {\n    // Implement the IHello methods.\n    public string GreetMe(string thePersonToGreet)\n    {\n      return "well hello there " + thePersonToGreet;\n    }\n  }\n')),Object(a.b)("p",null,'Exciting! WcfWindowsService also references another class called "Global" which is a helper class - to be honest not much more than a wrapper for my config settings. It looks like this:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'static public class Global\n  {\n    #region Properties\n\n    // eg "net.tcp://localhost:9700/"\n    public static string WcfBaseAddressForService { get { return ConfigurationManager.AppSettings["WcfBaseAddressForService"]; } }\n\n    // eg true\n    public static bool WcfWindowsSecurityApplied { get { return bool.Parse(ConfigurationManager.AppSettings["WcfWindowsSecurityApplied"]); } }\n\n    // eg true\n    public static bool WcfOnlyAuthorizedForWcfCredentials { get { return bool.Parse(ConfigurationManager.AppSettings["WcfOnlyAuthorizedForWcfCredentials"]); } }\n\n    // eg "myDomain"\n    public static string WcfCredentialsDomain { get { return ConfigurationManager.AppSettings["WcfCredentialsDomain"]; } }\n\n    // eg "myUserName"\n    public static string WcfCredentialsUserName { get { return ConfigurationManager.AppSettings["WcfCredentialsUserName"]; } }\n\n    // eg "myPassword" - this should *never* be stored unencrypted and is only ever used by clients that are not already running with the approved Windows credentials\n    public static string WcfCredentialsPassword { get { return ConfigurationManager.AppSettings["WcfCredentialsPassword"]; } }\n\n    #endregion\n  }\n')),Object(a.b)("p",null,"WcfWindowsService creates and hosts a HelloService and a GoodbyeService when it starts up. It does this using my handy WcfServiceFactory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'public class WcfServiceFactory<TInterface>\n  {\n    private static readonly log4net.ILog _logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);\n\n    public static ServiceHost CreateAndOpenServiceHost(Type serviceType, NetTcpBinding wcfBinding)\n    {\n      var serviceHost = new ServiceHost(serviceType, new Uri(Global.WcfBaseAddressForService + ServiceHelper<TInterface>.GetServiceName()));\n      serviceHost.AddServiceEndpoint(typeof(TInterface), wcfBinding, "");\n      serviceHost.Authorization.ServiceAuthorizationManager = new WcfServiceAuthorizationManager(); // This allows us to control authorisation within WcfServiceAuthorizationManager\n      serviceHost.Open();\n\n      _logger.Info(string.Join(", ", serviceHost.BaseAddresses) + " is now listening.");\n\n      return serviceHost;\n    }\n  }\n')),Object(a.b)("p",null,"To do this it also uses my equally handy WcfHelper class:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'static public class WcfHelper\n  {\n    /// <summary>\n    /// Create a NetTcpBinding\n    /// </summary>\n    /// <param name="useWindowsSecurity"></param>\n    /// <returns></returns>\n    public static NetTcpBinding CreateBinding(bool useWindowsSecurity)\n    {\n      var wcfBinding = new NetTcpBinding();\n      if (useWindowsSecurity)\n      {\n        wcfBinding.Security.Mode = SecurityMode.Transport;\n        wcfBinding.Security.Transport.ClientCredentialType = TcpClientCredentialType.Windows;\n      }\n      else\n        wcfBinding.Security.Mode = SecurityMode.None;\n\n      wcfBinding.MaxBufferSize = int.MaxValue;\n      wcfBinding.MaxReceivedMessageSize = int.MaxValue;\n      wcfBinding.ReaderQuotas.MaxArrayLength = int.MaxValue;\n      wcfBinding.ReaderQuotas.MaxDepth = int.MaxValue;\n      wcfBinding.ReaderQuotas.MaxStringContentLength = int.MaxValue;\n      wcfBinding.ReaderQuotas.MaxBytesPerRead = int.MaxValue;\n\n      return wcfBinding;\n    }\n  }\n\n  /// <summary>\n  /// Create a WCF Client for use anywhere (be it Windows Service or ASP.Net web application)\n  /// nb Credential fields are optional and only likely to be needed by web applications\n  /// </summary>\n  /// <typeparam name="TInterface"></typeparam>\n  public class WcfClientFactory<TInterface>\n  {\n    public static TInterface CreateChannel(bool useWindowsSecurity, string wcfBaseAddress, string wcfCredentialsUserName = null, string wcfCredentialsPassword = null, string wcfCredentialsDomain = null)\n    {\n      //Create NetTcpBinding using universally\n      var wcfBinding = WcfHelper.CreateBinding(useWindowsSecurity);\n\n      //Get Service name from examining the ServiceNameAttribute decorating the interface\n      var serviceName = ServiceHelper<TInterface>.GetServiceName();\n\n      //Create the factory for creating your channel\n      var factory = new ChannelFactory<TInterface>(\n        wcfBinding,\n        new EndpointAddress(wcfBaseAddress + serviceName)\n        );\n\n      //if credentials have been supplied then use them\n      if (!string.IsNullOrEmpty(wcfCredentialsUserName))\n      {\n        factory.Credentials.Windows.ClientCredential = new System.Net.NetworkCredential(wcfCredentialsUserName, wcfCredentialsPassword, wcfCredentialsDomain);\n      }\n\n      //Create the channel\n      var channel = factory.CreateChannel();\n\n      return channel;\n    }\n  }\n')),Object(a.b)("p",null,"Now the above WcfHelper class and it's comrade-in-arms the WcfClientFactory don't live in the WcfWindowsService project with the other classes. No. They live in a separate project called the WcfWindowsServiceContracts project with their old mucker the ServiceHelper:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'public class ServiceHelper<T>\n  {\n    public static string GetServiceName()\n    {\n      var customAttributes = typeof(T).GetCustomAttributes(false);\n      if (customAttributes.Length > 0)\n      {\n        foreach (var customAttribute in customAttributes)\n        {\n          if (customAttribute is ServiceNameAttribute)\n          {\n            return ((ServiceNameAttribute)customAttribute).ServiceName;\n          }\n        }\n      }\n\n      throw new ArgumentException("Interface is missing ServiceNameAttribute");\n    }\n  }\n\n  [AttributeUsage(AttributeTargets.Interface, AllowMultiple = false)]\n  public class ServiceNameAttribute : System.Attribute\n  {\n    public ServiceNameAttribute(string serviceName)\n    {\n      this.ServiceName = serviceName;\n    }\n\n    public string ServiceName { get; set; }\n  }\n')),Object(a.b)("p",null,"Now can you guess what the WcfWindowsServiceContracts project might contain? Yes; contracts for your services (oh the excitement)! What might one of these contracts look like I hear you ask... Well, like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'[ServiceContract()]\n  [ServiceName("HelloService")]\n  public interface IHello\n  {\n    [OperationContract]\n    string GreetMe(string thePersonToGreet);\n  }\n')),Object(a.b)("p",null,"The WcfWindowsServiceContracts project is included in ","*",Object(a.b)("strong",{parentName:"p"},"any"),"*"," WCF client solution that wants to call your WCF services. It is also included in the WCF service solution. It facilitates the calling of services. What you're no doubt wondering is how this might be achieved. Well here's how, it uses our old friend the ",Object(a.b)("inlineCode",{parentName:"p"},"WcfClientFactory"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'var helloClient = WcfClientFactory<IHello>\n    .CreateChannel(\n      useWindowsSecurity:     Global.WcfWindowsSecurityApplied,  // eg true\n      wcfBaseAddress:         Global.WcfBaseAddressForClient,    // eg "net.tcp://localhost:9700/"\n      wcfCredentialsUserName: Global.WcfCredentialsUserName,     // eg "myUserName" - Optional parameter - only passed by web applications that need to impersonate the valid user\n      wcfCredentialsPassword: Global.WcfCredentialsPassword,     // eg "myPassword" - Optional parameter - only passed by web applications that need to impersonate the valid user\n      wcfCredentialsDomain:   Global.WcfCredentialsDomain        // eg "myDomain" - Optional parameter - only passed by web applications that need to impersonate the valid user\n    );\n  var greeting = helloClient.GreetMe("John"); //"well hello there John"\n')),Object(a.b)("p",null,'See? Simple as simple. The eagle eyed amongst you will have noticed that client example above is using "',Object(a.b)("inlineCode",{parentName:"p"},"Global"),'" which is essentially a copy of the ',Object(a.b)("inlineCode",{parentName:"p"},"Global")," class mentioned above that is part of the WcfWindowsService project."),Object(a.b)("h2",{id:"locking-down-authorization-to-a-single-windows-account"},"Locking down Authorization to a single Windows account"),Object(a.b)("p",null,"I can tell you think i've forgotten something. \"Tell me about this locking down to the single Windows account / what is this mysterious ",Object(a.b)("inlineCode",{parentName:"p"},"WcfServiceAuthorizationManager")," class that all your WCF services inherit from? Don't you fob me off now.... etc\""),Object(a.b)("p",null,"Well ensuring that only a single Windows account is authorised (yes dammit the original English spelling) to access our WCF services is achieved by implementing our own ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceAuthorizationManager")," class. This implementation is used for authorisation by your ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceHost")," and the logic sits in the overridden ",Object(a.b)("inlineCode",{parentName:"p"},"CheckAccessCore")," method. All of our WCF service classes will inherit from our ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceAuthorizationManager")," class and so trigger the ",Object(a.b)("inlineCode",{parentName:"p"},"CheckAccessCore")," authorisation each time they are called."),Object(a.b)("p",null,"As you can see from the code below, depending on our configuration, we lock down access to all our WCF services to a specific Windows account. This is far from the only approach that you might want to take to authorisation; it's simply the one that we've been using. However the power of being able to implement your own authorisation in the ",Object(a.b)("inlineCode",{parentName:"p"},"CheckAccessCore")," method allows you the flexibility to do pretty much anything you want:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'public class WcfServiceAuthorizationManager : ServiceAuthorizationManager\n  {\n    protected static readonly log4net.ILog _logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);\n\n    protected override bool CheckAccessCore(OperationContext operationContext)\n    {\n      if (Global.WcfWindowsSecurityApplied)\n      {\n        if ((operationContext.ServiceSecurityContext.IsAnonymous) ||\n          (operationContext.ServiceSecurityContext.PrimaryIdentity == null))\n        {\n          _logger.Error("WcfWindowsSecurityApplied = true but no credentials have been supplied");\n          return false;\n        }\n\n        if (Global.WcfOnlyAuthorizedForWcfCredentials)\n        {\n          if (operationContext.ServiceSecurityContext.PrimaryIdentity.Name.ToLower() == Global.WcfCredentialsDomain.ToLower() + "\\\\" + Global.WcfCredentialsUserName.ToLower())\n          {\n            _logger.Debug("WcfOnlyAuthorizedForWcfCredentials = true and the valid user (" + operationContext.ServiceSecurityContext.PrimaryIdentity.Name + ") has been supplied and access allowed");\n            return true;\n          }\n          else\n          {\n            _logger.Error("WcfOnlyAuthorizedForWcfCredentials = true and an invalid user (" + operationContext.ServiceSecurityContext.PrimaryIdentity.Name + ") has been supplied and access denied");\n            return false;\n          }\n        }\n        else\n        {\n          _logger.Debug("WcfOnlyAuthorizedForWcfCredentials = false, credentials were supplied (" + operationContext.ServiceSecurityContext.PrimaryIdentity.Name + ") so access allowed");\n          return true;\n        }\n      }\n      else\n      {\n        _logger.Info("WcfWindowsSecurityApplied = false so we are allowing unfettered access");\n        return true;\n      }\n    }\n  }\n')),Object(a.b)("p",null,"Phewwww... I know this has ended up as a bit of a brain dump but hopefully people will find it useful. At some point I'll try to put up the above solution on GitHub so people can grab it easily for themselves."))}d.isMDXComponent=!0}}]);
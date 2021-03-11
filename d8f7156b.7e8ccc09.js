(window.webpackJsonp=window.webpackJsonp||[]).push([[923],{1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=i,g=m["".concat(r,".").concat(b)]||m[b]||u[b]||a;return n?o.a.createElement(g,s(s({ref:t},l),{},{components:n})):o.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},988:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(7),a=(n(0),n(1159)),r={title:"Automating Teams Notifications",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4",tags:["Notifications","Microsoft Teams"],hide_table_of_contents:!1},s={permalink:"/2019/12/18/automating-teams-notifications-recently",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-12-18-automating-teams-notifications-recently.md",source:"@site/blog/2019-12-18-automating-teams-notifications-recently.md",description:"Recently, my team transitioned from using Slack to using Microsoft Teams. It's fair to say that the team had a lot of love for Slack. Teams is a poorer product from the perspective of UI / UX. Maybe as you read this in the future that's all changed. But here on December 18th 2019, Teams is a solid 2 stars out of 5.",date:"2019-12-18T00:00:00.000Z",tags:[{label:"Notifications",permalink:"/tags/notifications"},{label:"Microsoft Teams",permalink:"/tags/microsoft-teams"}],title:"Automating Teams Notifications",readingTime:3.66,truncated:!1,prevItem:{title:"EF Core 3.1 breaks left join with no navigation property",permalink:"/2020/01/02/ef-core-31-breaks-left-join-with-no-navigation-property"},nextItem:{title:"Definitely Typed: The Movie",permalink:"/2019/10/08/definitely-typed-movie"}},c=[{value:"Notifications via Webhooks",id:"notifications-via-webhooks",children:[]},{value:"MarkDown",id:"markdown",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Recently, my team transitioned from using Slack to using Microsoft Teams. It's fair to say that the team had a lot of love for Slack. Teams is a poorer product from the perspective of UI / UX. Maybe as you read this in the future that's all changed. But here on December 18th 2019, Teams is a solid 2 stars out of 5."),Object(a.b)("p",null," However, we are where we are, and the purpose of this post is not to complain. Because our team is now effectively using Microsoft Teams. And one of the things that's helped us make the move is automating various Teams notifications in a similar fashion to how we used to with Slack."),Object(a.b)("p",null,"This post will explain the following:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"How you can automate the sending of notifications using Teams."),Object(a.b)("li",{parentName:"ol"},"How Teams supports MarkDown in notifications."),Object(a.b)("li",{parentName:"ol"},"How you can use ASP.Net Core to automate sending notifications.")),Object(a.b)("h2",{id:"notifications-via-webhooks"},"Notifications via Webhooks"),Object(a.b)("p",null,"Now, it's not obvious from Teams that there is a simple webhooks integration for Teams, but there is. It's tucked away under \"Connectors\". If you want to create a webhook of your own, find your team, your channel, click on the menu, then connectors and create a hook. Like so:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://1.bp.blogspot.com/-vDUdt6EdpT4/XfotTYgHzfI/AAAAAAAASxc/YqMWUwUYp_wzIp_-abs1tKXvjwc_lOzZQCLcBGAsYHQ/s1600/teams-notification.gif"},Object(a.b)("img",{parentName:"a",src:"https://1.bp.blogspot.com/-vDUdt6EdpT4/XfotTYgHzfI/AAAAAAAASxc/YqMWUwUYp_wzIp_-abs1tKXvjwc_lOzZQCLcBGAsYHQ/s1600/teams-notification.gif",alt:"null"})),"With the URL you've just obtained, you are now free to send notifications to that channel via a simple ",Object(a.b)("inlineCode",{parentName:"p"},"curl"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'curl -H "Content-Type: application/json" -d "{\\"text\\": \\"Hello World\\"}" https://outlook.office.com/webhook/big-long-guid1/IncomingWebhook/big-long-guid2\n')),Object(a.b)("h2",{id:"markdown"},"MarkDown"),Object(a.b)("p",null,"Let's see if we can make this more interesting. It turns out that the the webhook can receive JSON as the body of the payload. And there's 3 properties we'd like our JSON to contain:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"title")," ","-"," this is optional and is the title of your notification if supplied."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"textFormat")," ","-"," provide the value ",Object(a.b)("inlineCode",{parentName:"li"},'"markdown"')," and then..."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"text")," ","-"," provide your markdown notification content!")),Object(a.b)("p",null,"So if we have a notification payload file called ",Object(a.b)("inlineCode",{parentName:"p"},"down.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "title": "Your Notification Title",\n    "textFormat": "markdown",\n    "text": "*Wow*\\nThis is [markdown](https://en.wikipedia.org/wiki/Markdown)!\\n![do a little dance!](https://media.giphy.com/media/YJ5OlVLZ2QNl6/giphy.gif)\\n**Huzzah**!"\n}\n')),Object(a.b)("p",null,"We can trigger it with this ",Object(a.b)("inlineCode",{parentName:"p"},"curl"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'curl -H "Content-Type: application/json" -d @down.json https://outlook.office.com/webhook/big-long-guid1/IncomingWebhook/big-long-guid2\n')),Object(a.b)("p",null,"As you can see from the example above, you can use all the qualities of MarkDown that you know and love. Text, bold text, italics, links and even images too. It's ",Object(a.b)("em",{parentName:"p"},"great"),"!"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://2.bp.blogspot.com/-_6XeGIucQ5Y/Xfos-w5_EZI/AAAAAAAASxU/fz_O5yT6T4Qp-_B_0TGesBviP1-3ftxswCLcBGAsYHQ/s1600/teams-notification-2.gif"},Object(a.b)("img",{parentName:"a",src:"https://2.bp.blogspot.com/-_6XeGIucQ5Y/Xfos-w5_EZI/AAAAAAAASxU/fz_O5yT6T4Qp-_B_0TGesBviP1-3ftxswCLcBGAsYHQ/s1600/teams-notification-2.gif",alt:"null"})),"## ASP.Net Core"),Object(a.b)("p",null,"Finally, I wanted to illustrate just how simple the WebHooks API makes plugging notifications into an existing app. In our case we're going to use ASP.Net Core, but really there's nothing particular about how we're going to do this."),Object(a.b)("p",null,"Here's a class called ",Object(a.b)("inlineCode",{parentName:"p"},"TeamsNotificationService"),". It exposes 2 methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SendNotification")," which allows the consumer to just provide a ",Object(a.b)("inlineCode",{parentName:"li"},"title")," and a ",Object(a.b)("inlineCode",{parentName:"li"},"message")," ","-"," you could consume this from anywhere in your app and use it to publish the notification of your choice."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SendExcitingNotification")," which actually uses ",Object(a.b)("inlineCode",{parentName:"li"},"SendNotification")," and illustrates how you might provide an exciting notification to publish out.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Net.Http;\nusing System.Net.Http.Headers;\nusing System.Threading.Tasks;\n\nnamespace My.Services {\n    public interface ITeamsNotificationService {\n        Task SendNotification(string title, string message);\n        Task SendExcitingNotification(Guid someAppId, string person);\n    }\n\n    public class TeamsNotificationService : ITeamsNotificationService {\n\n        // in Startup.ConfigureServices you\'re going to want to add this line:\n        // services.AddHttpClient(TeamsNotificationService.TEAMS_NOTIFIER_CLIENT);\n\n        public const string TEAMS_NOTIFIER_CLIENT = "TEAMS_NOTIFIER_CLIENT";\n\n        private readonly ILogger<TeamsNotificationService> logger;\n        private readonly IHttpClientFactory _clientFactory;\n\n \n        public TeamsNotificationService(\n            ILogger<TeamsNotificationService> logger,\n            IHttpClientFactory clientFactory\n        ) {\n            _logger = logger;\n            _clientFactory = clientFactory;\n        }\n\n        private HttpClient CreateClient() {\n            var client = _clientFactory.CreateClient(TEAMS_NOTIFIER);\n\n            client.DefaultRequestHeaders.Clear();\n            client.DefaultRequestHeaders.Accept.Clear();\n            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));\n\n            return client;\n        }\n\n        public async Task SendNotification(string title, string message) {\n            try {\n                var client = CreateClient();\n \n                var messageContents = string.IsNullOrEmpty(title)\n                    ? new JsonContent(new { text = message, textFormat = "markdown" })\n                    : new JsonContent(new { title = title, text = message, textFormat = "markdown" });\n\n                var webhookUrl = "https://outlook.office.com/webhook/big-long-guid1/IncomingWebhook/big-long-guid2";\n                var response = await client.PostAsync(webhookUrl, messageContents);\n\n                _logger.LogInformation("Sent {title} notification to Teams using {url}; received this response: {responseStatusCode}", title, url, response.StatusCode);\n            }\n            catch (Exception exc) {\n                _logger.LogError(exc, $"Failed to send {title} notification to Teams");\n            }\n        }\n\n        public async Task SendExcitingNotification(Guid someAppId, string person) {\n            var celebration = GetCelebration();\n            await SendNotification(\n                title: "Incredible Thing Alert!",\n                message: $@"**{person}** has done something incredible! &#x1F44B;\n\n![celebration time!]({celebration})\n\n[Go see for yourself](https://my.app/some-page/{someAppId})"\n            );\n        }\n\n        string GetCelebration() => GetRandomItem(_celebrations);\n        string GetRandomItem(string[] arrayOfStrings) => arrayOfStrings[new Random().Next(0, arrayOfStrings.Length)];\n\n        string[] _celebrations = new string[] {\n            "https://media.giphy.com/media/KYElw07kzDspaBOwf9/giphy.gif",\n            "https://media.giphy.com/media/GStLeae4F7VIs/giphy.gif",\n            "https://media.giphy.com/media/NbXTwsoD7hvag/giphy.gif",\n            "https://media.giphy.com/media/d86kftzaeizO8/giphy.gif",\n            "https://media.giphy.com/media/YJ5OlVLZ2QNl6/giphy.gif",\n            "https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif",\n            "https://media.giphy.com/media/KYElw07kzDspaBOwf9/giphy.gif",\n            "https://media.giphy.com/media/6nuiJjOOQBBn2/giphy.gif",\n            "https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif",\n            "https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif"\n        };\n    }\n}\n')),Object(a.b)("p",null,"It's as simple as that :-)"))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[13472],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=h(n),u=s,b=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var h=2;h<r;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40226:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return c},default:function(){return d}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),o=["components"],i={title:"Integration Tests with SQL Server Database Snapshots",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["Database Snapshots","Integration Testing","SQL Server"],hide_table_of_contents:!1},l=void 0,h={permalink:"/2016/09/12/integration-tests-with-sql-server",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-09-12-integration-tests-with-sql-server.md",source:"@site/blog/2016-09-12-integration-tests-with-sql-server.md",title:"Integration Tests with SQL Server Database Snapshots",description:"Once More With Feeling",date:"2016-09-12T00:00:00.000Z",formattedDate:"September 12, 2016",tags:[{label:"Database Snapshots",permalink:"/tags/database-snapshots"},{label:"Integration Testing",permalink:"/tags/integration-testing"},{label:"SQL Server",permalink:"/tags/sql-server"}],readingTime:5.135,truncated:!1,prevItem:{title:"TypeScript 2.0, ES2016 and Babel",permalink:"/2016/09/22/typescript-20-es2016-and-babel"},nextItem:{title:"The Ternary Operator <3 Destructuring",permalink:"/2016/08/19/the-ternary-operator-meets-destructuring"}},c=[{value:"Once More With Feeling",id:"once-more-with-feeling",children:[]},{value:"What&#39;s the Scenario?",id:"whats-the-scenario",children:[]},{value:"Talk is cheap, show me the code",id:"talk-is-cheap-show-me-the-code",children:[{value:"DatabaseSnapshot.cs",id:"databasesnapshotcs",children:[]},{value:"SetupAndTeardown.cs",id:"setupandteardowncs",children:[]},{value:"TestBase.cs",id:"testbasecs",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"once-more-with-feeling"},"Once More With Feeling"),(0,r.kt)("p",null," This is a topic that I have written about ",(0,r.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2014/01/integration-testing-with-entity.html"},"before"),".... But not well. I recently had cause to dust down my notes on how to use snapshotting in your integration tests. To my dismay, referring back to my original blog post was less helpful than I'd hoped. Now I've cracked the enigma code that my original scribings turned out to be, it's time to turn my relearnings back into something genuinely useful."),(0,r.kt)("h2",{id:"whats-the-scenario"},"What's the Scenario?"),(0,r.kt)("p",null,"You have a test database. You want to write integration tests. So what's the problem? Well, these tests will add records, delete records, update records within the tables of the database. They will mutate the data. And that's exactly what they ought to do; they're testing that our code uses the database in the way we would hope and expect."),(0,r.kt)("p",null,"So how do we handle this? Well, we could handle this by writing code at the end of each test that is responsible for reverting the database back to the state that it was in at the start of the test. So if we had a test that added a record and tested it, we'd need the test to be responsible for removing that record before any subsequent tests run. Now that's a totally legitimate approach but it adds tax. Each test becomes more complicated and requires more code."),(0,r.kt)("p",null,"So what's another approach? Perhaps we could take a backup of our database before our first test runs. Then, at the end of each test, we could restore our backup to roll the database back to its initial state. Perfect, right? Less code to write, less scope for errors. So what's the downside? Backups are slowwwww. Restores likewise. We could be waiting minutes between each test that runs. That's not acceptable."),(0,r.kt)("p",null,"There is another way though: ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/ms175158.aspx"},"database snapshots")," ","-"," a feature that's been nestling inside SQL Server for a goodly number of years. For our use case, to all intents and purposes, database snapshots offers the same functionality as backups and restores. You can backup a database (take a snapshot of a database at a point in time), you can restore a database (roll back the database to the point of the snapshot). More importantly, you can do either operation in ","*",(0,r.kt)("em",{parentName:"p"},"under a second"),"*",". As it happens, Microsoft advocate using this approach themselves:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In a testing environment, it can be useful when repeatedly running a test protocol for the database to contain identical data at the start of each round of testing. Before running the first round, an application developer or tester can create a database snapshot on the test database. After each test run, the database can be quickly returned to its prior state by reverting the database snapshot.")),(0,r.kt)("p",null,"Sold!"),(0,r.kt)("h2",{id:"talk-is-cheap-show-me-the-code"},"Talk is cheap, show me the code"),(0,r.kt)("p",null,"In the end it comes down to 3 classes; ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseSnapshot.cs")," which does the actual snapshotting work and 2 classes that make use of it."),(0,r.kt)("h3",{id:"databasesnapshotcs"},"DatabaseSnapshot.cs"),(0,r.kt)("p",null,"This is our ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseSnapshot")," class. Isn't it pretty?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Data;\nusing System.Data.SqlClient;\n\nnamespace Testing.Shared\n{\n    public class DatabaseSnapshot\n    {\n        private readonly string _dbName;\n        private readonly string _dbSnapShotPath;\n        private readonly string _dbSnapShotName;\n        private readonly string _dbConnectionString;\n\n        public DatabaseSnapshot(string dbName, string dbSnapshotPath, string dbSnapshotName, string dbConnectionString)\n        {\n            _dbName = dbName;\n            _dbSnapshotPath = dbSnapshotPath;\n            _dbSnapshotName = dbSnapshotName;\n            _dbConnectionString = dbConnectionString;\n        }\n\n        public void CreateSnapshot()\n        {\n            if (!System.IO.Directory.Exists(_dbSnapshotPath))\n                System.IO.Directory.CreateDirectory(_dbSnapshotPath);\n\n            var sql = $"CREATE DATABASE { _dbSnapshotName } ON (NAME=[{ _dbName }], FILENAME=\'{ _dbSnapshotPath }{ _dbSnapshotName }\') AS SNAPSHOT OF [{_dbName }]";\n\n            ExecuteSqlAgainstMaster(sql);\n        }\n\n        public void DeleteSnapshot()\n        {\n            var sql = $"DROP DATABASE { _dbSnapshotName }";\n\n            ExecuteSqlAgainstMaster(sql);\n        }\n\n        public void RestoreSnapshot()\n        {\n            var sql = "USE master;\\r\\n" +\n\n                $"ALTER DATABASE {_dbName} SET SINGLE_USER WITH ROLLBACK IMMEDIATE;\\r\\n" +\n\n                $"RESTORE DATABASE {_dbName}\\r\\n" +\n                $"FROM DATABASE_SNAPSHOT = \'{ _dbSnapshotName }\';\\r\\n" +\n\n                $"ALTER DATABASE {_dbName} SET MULTI_USER;\\r\\n";\n\n            ExecuteSqlAgainstMaster(sql);\n        }\n\n        private void ExecuteSqlAgainstMaster(string sql, params SqlParameter[] parameters)\n        {\n            using (var conn = new SqlConnection(_dbConnectionString))\n            {\n                conn.Open();\n                var cmd = new SqlCommand(sql, conn) { CommandType = CommandType.Text };\n                cmd.Parameters.AddRange(parameters);\n                cmd.ExecuteNonQuery();\n                conn.Close();\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"It exposes 3 methods:"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"CreateSnapshot"),(0,r.kt)("dd",null,"This method creates the snapshot of the database. We will run this right at the start, before any of our tests run."),(0,r.kt)("dt",null,"DeleteSnapshot"),(0,r.kt)("dd",null,"Deletes the snapshot we created. We will run this at the end, after all our tests have finished running."),(0,r.kt)("dt",null,"RestoreSnapshot"),(0,r.kt)("dd",null,"Restores the database back to the snapshot we took earlier. We run this after each test has completed. This method relies on a connection to the database (perhaps unsurprisingly). It switches the database in use away from the database that is being restored prior to actually running the restore. It happens to shift to the master database (I believe that's entirely incidental; although I haven't tested).")),(0,r.kt)("h3",{id:"setupandteardowncs"},"SetupAndTeardown.cs"),(0,r.kt)("p",null,"This class is responsible for setting up the snapshot we're going to use in our tests right before any of the tests have run (in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FixtureSetup")," method). It's also responsible for deleting the snapshot once all the tests have finished running (in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FixtureTearDown")," method). It should be noted that in this example I'm using NUnit and this class is written to depend on the hooks NUnit exposes for running code at the very beginning and end of the test cycle. All test frameworks have these hooks; if you're using something other than NUnit then it's just a case of swapping in the relevant attribute (everything tends to attribute driven in the test framework world)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using NUnit.Framework;\n\nnamespace Testing.Shared\n{\n   [SetUpFixture]\n   public class SetupAndTeardown\n   {\n      public static DatabaseSnapshot DatabaseSnapshot;\n\n      [SetUp]\n      public void FixtureSetup()\n      {\n         DatabaseSnapshot = new DatabaseSnapshot("MyDbName", "C:\\\\", "MySnapshot", "Data Source=.;initial catalog=MyDbName;integrated security=True;");\n\n         try\n         {\n            // Try to delete the snapshot in case it was left over from aborted test runs\n            DatabaseSnapshot.DeleteSnapShot();\n         }\n         catch { /* this should fail with snapshot does not exist */ }\n\n         DatabaseSnapshot.CreateSnapShot();\n      }\n\n      [TearDown]\n      public void FixtureTearDown()\n      {\n         DatabaseSnapshot.DeleteSnapShot();\n      }\n   }\n}\n')),(0,r.kt)("h3",{id:"testbasecs"},"TestBase.cs"),(0,r.kt)("p",null,"All of our test classes are made to inherit from this class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using NUnit.Framework;\n\nnamespace Testing.Shared\n{\n   public class TestBase\n   {\n      [TearDown]\n      public void TearDown()\n      {\n         SetupAndTeardown.DatabaseSnapshot.RestoreSnapShot();\n      }\n   }\n}\n")),(0,r.kt)("p",null,"Which restores the database back to the snapshot position at the end of each test. And that... Is that!"))}d.isMDXComponent=!0}}]);
(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[72259],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||s[h]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71117:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l=["components"],i={title:"Uploading Images to Cloudinary with the Fetch API",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["React Dropzone","Cloudinary","Fetch API"],hide_table_of_contents:!1},c=void 0,p={permalink:"/2018/03/25/uploading-images-to-cloudinary-with-fetch",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-03-25-uploading-images-to-cloudinary-with-fetch.md",source:"@site/blog/2018-03-25-uploading-images-to-cloudinary-with-fetch.md",title:"Uploading Images to Cloudinary with the Fetch API",description:"I was recently checking out a very good post which explained how to upload images using React Dropzone and SuperAgent to Cloudinary.",date:"2018-03-25T00:00:00.000Z",formattedDate:"March 25, 2018",tags:[{label:"React Dropzone",permalink:"/tags/react-dropzone"},{label:"Cloudinary",permalink:"/tags/cloudinary"},{label:"Fetch API",permalink:"/tags/fetch-api"}],readingTime:1.025,truncated:!1,prevItem:{title:"It's Not Dead 2: mobx-react-devtools and the undead",permalink:"/2018/03/26/its-not-dead-2-mobx-react-devtools-and-the-undead"},nextItem:{title:"It's Not Dead: webpack and dead code elimination limitations",permalink:"/2018/03/07/its-not-dead-webpack-and-dead-code"}},u=[],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I was recently checking out a ",(0,a.kt)("a",{parentName:"p",href:"https://css-tricks.com/image-upload-manipulation-react/"},"very good post")," which explained how to upload images using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/react-dropzone/react-dropzone"},"React Dropzone")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/superagent"},"SuperAgent")," to ",(0,a.kt)("a",{parentName:"p",href:"https://cloudinary.com/"},"Cloudinary"),"."),(0,a.kt)("p",null," It's a brilliant post; you should totally read it. Even if you hate images, uploads and JavaScript. However, there was one thing in there that I didn't want; SuperAgent. It's lovely but I'm a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")," guy. That's just how I roll. The question is, how do I do the below using Fetch?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"handleImageUpload(file) {\n    let upload = request.post(CLOUDINARY_UPLOAD_URL)\n                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)\n                     .field('file', file);\n\n    upload.end((err, response) => {\n      if (err) {\n        console.error(err);\n      }\n\n      if (response.body.secure_url !== '') {\n        this.setState({\n          uploadedFileCloudinaryUrl: response.body.secure_url\n        });\n      }\n    });\n  }\n")),(0,a.kt)("p",null,"Well it actually took me longer to work out than I'd like to admit. But now I have, let me save you the bother. To do the above using Fetch you just need this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"handleImageUpload(file) {\n    const formData = new FormData();\n    formData.append(\"file\", file);\n    formData.append(\"upload_preset\", CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own\n\n    fetch(CLOUDINARY_UPLOAD_URL, {\n      method: 'POST',\n      body: formData\n    })\n      .then(response => response.json())\n      .then(data => {\n        if (data.secure_url !== '') {\n          this.setState({\n            uploadedFileCloudinaryUrl: data.secure_url\n          });\n        }\n      })\n      .catch(err => console.error(err))\n  }\n")),(0,a.kt)("p",null,"To get a pre-canned project to try this with take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/damonbauer/react-cloudinary"},"Damon's repo"),"."))}d.isMDXComponent=!0}}]);
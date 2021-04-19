(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{1210:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||s[h]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(4),a=n(10),o=(n(0),n(1210)),i={title:"Uploading Images to Cloudinary with the Fetch API",author:"John Reilly",author_url:"https://github.com/johnnyreilly",author_image_url:"https://blog.johnnyreilly.com/img/profile.jpg",tags:["React Dropzone","Cloudinary","Fetch API"],hide_table_of_contents:!1},l={permalink:"/2018/03/25/uploading-images-to-cloudinary-with-fetch",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-03-25-uploading-images-to-cloudinary-with-fetch.md",source:"@site/blog/2018-03-25-uploading-images-to-cloudinary-with-fetch.md",title:"Uploading Images to Cloudinary with the Fetch API",description:"I was recently checking out a very good post which explained how to upload images using React Dropzone and SuperAgent to Cloudinary.",date:"2018-03-25T00:00:00.000Z",formattedDate:"March 25, 2018",tags:[{label:"React Dropzone",permalink:"/tags/react-dropzone"},{label:"Cloudinary",permalink:"/tags/cloudinary"},{label:"Fetch API",permalink:"/tags/fetch-api"}],readingTime:1.025,truncated:!1,prevItem:{title:"It's Not Dead 2: mobx-react-devtools and the undead",permalink:"/2018/03/26/its-not-dead-2-mobx-react-devtools-and-the-undead"},nextItem:{title:"It's Not Dead: webpack and dead code elimination limitations",permalink:"/2018/03/07/its-not-dead-webpack-and-dead-code"}},c=[],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I was recently checking out a ",Object(o.b)("a",{parentName:"p",href:"https://css-tricks.com/image-upload-manipulation-react/"},"very good post")," which explained how to upload images using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-dropzone/react-dropzone"},"React Dropzone")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/visionmedia/superagent"},"SuperAgent")," to ",Object(o.b)("a",{parentName:"p",href:"https://cloudinary.com/"},"Cloudinary"),"."),Object(o.b)("p",null," It's a brilliant post; you should totally read it. Even if you hate images, uploads and JavaScript. However, there was one thing in there that I didn't want; SuperAgent. It's lovely but I'm a ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")," guy. That's just how I roll. The question is, how do I do the below using Fetch?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"handleImageUpload(file) {\n    let upload = request.post(CLOUDINARY_UPLOAD_URL)\n                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)\n                     .field('file', file);\n\n    upload.end((err, response) => {\n      if (err) {\n        console.error(err);\n      }\n\n      if (response.body.secure_url !== '') {\n        this.setState({\n          uploadedFileCloudinaryUrl: response.body.secure_url\n        });\n      }\n    });\n  }\n")),Object(o.b)("p",null,"Well it actually took me longer to work out than I'd like to admit. But now I have, let me save you the bother. To do the above using Fetch you just need this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"handleImageUpload(file) {\n    const formData = new FormData();\n    formData.append(\"file\", file);\n    formData.append(\"upload_preset\", CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own\n\n    fetch(CLOUDINARY_UPLOAD_URL, {\n      method: 'POST',\n      body: formData\n    })\n      .then(response => response.json())\n      .then(data => {\n        if (data.secure_url !== '') {\n          this.setState({\n            uploadedFileCloudinaryUrl: data.secure_url\n          });\n        }\n      })\n      .catch(err => console.error(err))\n  }\n")),Object(o.b)("p",null,"To get a pre-canned project to try this with take a look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/damonbauer/react-cloudinary"},"Damon's repo"),"."))}u.isMDXComponent=!0}}]);
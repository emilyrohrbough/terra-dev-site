(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{998:function(n,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return c}));r(0);var t=r(215);function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}function a(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var i={};function c(n){var e=n.components,r=a(n,["components"]);return Object(t.mdx)("wrapper",o({},i,r,{components:e,mdxType:"MDXLayout"}),Object(t.mdx)("h1",{id:"scss"},"scss"),Object(t.mdx)("pre",null,Object(t.mdx)("code",o({parentName:"pre"},{className:"language-scss"}),'@import "compass/reset";\n\n// variables\n$colorGreen: #008000;\n$colorGreenDark: darken($colorGreen, 10);\n\ndiv,\n.navbar,\n#header,\ninput[type="input"] {\n    font-family: "Helvetica Neue", Arial, sans-serif;\n    width: auto;\n    margin: 0 auto;\n    display: block;\n    &:hover { color: $colorGreenDark; }\n    .home {\n          background: url(\'http://placehold.it/20\') scroll no-repeat 0 0;\n    }\n    padding: {\n        left: 5px; right: 5px;\n    }\n}\n\n@for $i from 1 through 5 {\n    .span#{$i} {\n        width: 20px*$i;\n    }\n}\n\n@mixin mobile {\n  @media screen and (max-width : 600px) {\n    @content;\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=85-c49fb7c7aa2bffe61f6e.js.map
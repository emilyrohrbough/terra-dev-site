(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{872:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(12));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i=function(e){var n=l({},e);return r.default.createElement(a.default,n,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;n.default=c},884:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(0)),a=i(t(1)),o=i(t(2)),l=i(t(894));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.default.bind(l.default),s={variant:a.default.oneOf(["light","dark"]),title:a.default.string},p=function(e){var n=e.variant,t=e.title,a=u(e,["variant","title"]),o=d(["placeholder",a.className]),l=d(["inner","is-".concat(n)]);return r.default.createElement("div",c({},a,{className:o}),r.default.createElement("div",{className:l},r.default.createElement("h2",null,t)))};p.propTypes=s,p.defaultProps={variant:"dark",title:""};var m=p;n.default=m},885:function(e,n,t){e.exports={"placeholder-wrapper":"ActionHeaderDocCommon__placeholder-wrapper___28QRm"}},887:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),a=t.n(r),o=t(868),l=t.n(o),i=function(e){var n=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-action-header",name:"terra-action-header",version:"2.52.0",url:n})}},888:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(51));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Default Action Header"}),r.default.createElement("br",null))};n.default=l},889:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(51));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Back Action Header",onBack:function(){return alert("You clicked back!")}}),r.default.createElement("br",null))};n.default=l},890:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(51));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Back Close Action Header",onClose:function(){return alert("You clicked close!")},onBack:function(){return alert("You clicked back!")}}),r.default.createElement("br",null))};n.default=l},891:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(51));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Close Action Header",onClose:function(){return alert("You clicked close!")}}),r.default.createElement("br",null))};n.default=l},892:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(51));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Maximize Close Action Header",onClose:function(){return alert("You clicked close!")},onMaximize:function(){return alert("You clicked maximize!")}}),r.default.createElement("br",null))};n.default=l},893:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(2)),o=c(t(51)),l=c(t(884)),i=c(t(885));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(i.default),d=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(o.default,{title:"Minimize Custom Button Action Header",onMinimize:function(){return alert("You clicked minimize!")},onClose:function(){return alert("You clicked close!")}},r.default.createElement(l.default,{className:u("placeholder-wrapper"),title:"Collapsible Menu View"})),r.default.createElement("br",null))};n.default=d},894:function(e,n,t){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}},895:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(51));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Back Close Previous Next Action Header",onClose:function(){return alert("You clicked close!")},onBack:function(){return alert("You clicked back!")},onPrevious:function(){return alert("You clicked previous!")},onNext:function(){return alert("You clicked next!")}}),r.default.createElement("br",null))};n.default=l},896:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(2)),o=c(t(51)),l=c(t(884)),i=c(t(885));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(i.default),d=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(o.default,{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci dolor, dignissim vitae risus vel, tristique egestas sapien. Vivamus blandit augue justo, id tincidunt justo luctus et. Morbi lacinia porttitor lacus, ac fermentum mauris tempus dapibus. Donec fringilla est ut ullamcorper consequat. Aliquam ornare efficitur ornare. Curabitur facilisis urna a congue gravida. Nulla accumsan non nisl sed elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",onMinimize:function(){return alert("You clicked minimize!")},onClose:function(){return alert("You clicked close!")}},r.default.createElement(l.default,{className:u("placeholder-wrapper"),title:"Collapsible Menu View"})),r.default.createElement("br",null))};n.default=d},897:function(e,n,t){"use strict";t(0);var r=t(215),a=t(881),o=t.n(a);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.a=function(){return Object(r.mdx)(o.a,{rows:[{name:"children",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Displays a single terra ",Object(r.mdx)("inlineCode",{parentName:"p"},"Collapsible Menu View")," (",Object(r.mdx)("em",{parentName:"p"},"Not provided by ",Object(r.mdx)("inlineCode",{parentName:"em"},"Action Header")),") child element on the right end of the header."))}return n.isMDXComponent=!0,n({})}},{name:"level",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"enum"),Object(r.mdx)("pre",null,Object(r.mdx)("code",l({parentName:"pre"},{className:"language-json"}),'[\n "1",\n "2",\n "3",\n "4",\n "5",\n "6"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"1",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Optionally sets the heading level. One of ",Object(r.mdx)("inlineCode",{parentName:"p"},"1"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"2"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"3"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"4"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"5"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"6"),". Default ",Object(r.mdx)("inlineCode",{parentName:"p"},"level=1"),". This helps screen readers to announce appropriate heading levels.\nChanging 'level' will not visually change the style of the content."))}return n.isMDXComponent=!0,n({})}},{name:"onClose",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the close button is clicked.\nOn small viewports, this will be triggered by a back button if onBack is not set."))}return n.isMDXComponent=!0,n({})}},{name:"onBack",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the back button is clicked. The back button will not display if this is not set."))}return n.isMDXComponent=!0,n({})}},{name:"onMaximize",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the expand button is clicked.\nThe expand button will not display if this is not set or on small viewports.\nOnly the expand button will be rendered if onMaximize and onMinimize are set."),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Note: If ",Object(r.mdx)("inlineCode",{parentName:"em"},"onBack")," is set, the maximize button will not appear and a custom maximize button must be provided\nas a child inside a ",Object(r.mdx)("inlineCode",{parentName:"em"},"Collapsible Menu View"),".")))}return n.isMDXComponent=!0,n({})}},{name:"onMinimize",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the minimize button is clicked.\nThe minimize button will not display if this is not set or on small viewports.\nOnly the expand button will be rendered if both onMaximize and onMinimize are set."),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Note: If ",Object(r.mdx)("inlineCode",{parentName:"em"},"onBack")," is set, the minimize button will not appear and a custom minimize button must be provided\nas a child inside a ",Object(r.mdx)("inlineCode",{parentName:"em"},"Collapsible Menu View"),".")))}return n.isMDXComponent=!0,n({})}},{name:"onNext",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the next button is clicked. The previous-next button group will display if either this or onPrevious is set but the button for the one not set will be disabled."))}return n.isMDXComponent=!0,n({})}},{name:"onPrevious",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the previous button is clicked. The previous-next button group will display if either this or onNext is set but the button for the one not set will be disabled."))}return n.isMDXComponent=!0,n({})}},{name:"title",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Text to be displayed as the title in the header bar."))}return n.isMDXComponent=!0,n({})}}]})}},898:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(888),l=t.n(o),i=t(215);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Default Action Header\"\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n\n")))}s.isMDXComponent=!0;var p=t(863),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Default Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},899:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(889),l=t.n(o),i=t(215);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Back Action Header\"\n      onBack={() => alert('You clicked back!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(863),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Back Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},900:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(896),l=t.n(o),i=t(215);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport classNames from 'classnames/bind';\nimport ActionHeader from 'terra-action-header';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport styles from './ActionHeaderDocCommon.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci dolor, dignissim vitae risus vel, tristique egestas sapien.\n      Vivamus blandit augue justo, id tincidunt justo luctus et. Morbi lacinia porttitor lacus, ac fermentum mauris tempus dapibus. Donec fringilla est ut ullamcorper consequat.\n      Aliquam ornare efficitur ornare. Curabitur facilisis urna a congue gravida.\n      Nulla accumsan non nisl sed elementum.\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n      onMinimize={() => alert('You clicked minimize!')}\n      onClose={() => alert('You clicked close!')}\n    >\n      <Placeholder className={cx('placeholder-wrapper')} title=\"Collapsible Menu View\" />\n    </ActionHeader>\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(863),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Long Wrapping Text Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},901:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(895),l=t.n(o),i=t(215);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Back Close Previous Next Action Header\"\n      onClose={() => alert('You clicked close!')}\n      onBack={() => alert('You clicked back!')}\n      onPrevious={() => alert('You clicked previous!')}\n      onNext={() => alert('You clicked next!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(863),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Back Previous Next Close Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},902:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(893),l=t.n(o),i=t(215);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport classNames from 'classnames/bind';\nimport ActionHeader from 'terra-action-header';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport styles from './ActionHeaderDocCommon.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader title=\"Minimize Custom Button Action Header\" onMinimize={() => alert('You clicked minimize!')} onClose={() => alert('You clicked close!')}>\n      <Placeholder className={cx('placeholder-wrapper')} title=\"Collapsible Menu View\" />\n    </ActionHeader>\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(863),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Minimize Custom Button Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},903:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(892),l=t.n(o),i=t(215);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Maximize Close Action Header\"\n      onClose={() => alert('You clicked close!')}\n      onMaximize={() => alert('You clicked maximize!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(863),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Maximize Close Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},904:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(891),l=t.n(o),i=t(215);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Close Action Header\"\n      onClose={() => alert('You clicked close!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(863),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Close Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},905:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(890),l=t.n(o),i=t(215);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Back Close Action Header\"\n      onClose={() => alert('You clicked close!')}\n      onBack={() => alert('You clicked back!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(863),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Back Close Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}}}]);
//# sourceMappingURL=1-edc960ba31b3e43c02c6.js.map
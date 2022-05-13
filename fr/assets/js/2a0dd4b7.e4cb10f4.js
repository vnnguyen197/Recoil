"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3183],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7708:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"graphQLMutationEffect()",sidebar_label:"graphQLMutationEffect()"},p=void 0,c={unversionedId:"recoil-relay/api/graphQLMutationEffect",id:"recoil-relay/api/graphQLMutationEffect",title:"graphQLMutationEffect()",description:"The underlying atom effect for causing a local update to an atom to iniate commiting a GraphQL mutation to the server.",source:"@site/docs/recoil-relay/api/graphQLMutationEffect.md",sourceDirName:"recoil-relay/api",slug:"/recoil-relay/api/graphQLMutationEffect",permalink:"/fr/docs/recoil-relay/api/graphQLMutationEffect",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/recoil-relay/api/graphQLMutationEffect.md",tags:[],version:"current",frontMatter:{title:"graphQLMutationEffect()",sidebar_label:"graphQLMutationEffect()"},sidebar:"recoil-relay",previous:{title:"graphQLSubscriptionEffect()",permalink:"/fr/docs/recoil-relay/api/graphQLSubscriptionEffect"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The underlying ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/atom-effects"},"atom effect")," for causing a local update to an atom to iniate commiting a ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/"},"GraphQL mutation")," to the server."),(0,i.kt)("p",null,"Note that if an atom has multiple atom effects which update its value then the other effects may cause ",(0,i.kt)("inlineCode",{parentName:"p"},"graphQLMutationEffect()")," to initiate a server mutation.  So, care should be taken if trying to combine with ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/graphQLQueryEffect"},(0,i.kt)("inlineCode",{parentName:"a"},"graphQLQueryEffect()")),".  If that is desired it may be easier to use ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/graphQLSelector"},(0,i.kt)("inlineCode",{parentName:"a"},"graphQLSelector()"))," instead."),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function graphQLMutationEffect<\n  TVariables: Variables,\n  T,\n  TResponse: $ReadOnly<{[string]: mixed}> = {},\n  TRawResponse = void,\n>({\n  environment: IEnvironment | EnvironmentKey,\n  mutation: Mutation<TVariables, TResponse, TRawResponse>,\n  variables: T => null | TVariables,\n\n  updater?: SelectorStoreUpdater<TResponse>,\n  optimisticUpdater?: SelectorStoreUpdater<TResponse>,\n  optimisticResponse?: TResponse,\n  uploadables?: UploadableMap,\n}): AtomEffect<T>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"environment"),": The Relay Environment or an ",(0,i.kt)("a",{parentName:"li",href:"/docs/recoil-relay/api/EnvironmentKey"},(0,i.kt)("inlineCode",{parentName:"a"},"EnvironmentKey"))," to match with the environment provided with ",(0,i.kt)("a",{parentName:"li",href:"/docs/recoil-relay/api/RecoilRelayEnvironment"},(0,i.kt)("inlineCode",{parentName:"a"},"<RecoilRelayEnvironemnt>")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutation"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://graphql.org/learn/queries/#mutations"},"GraphQL mutation"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variables"),": Callback provided the new atom value that returns the variables object provided as input to the GraphQL mutation.  If it returns ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," then the mutation is skipped.")),(0,i.kt)("p",null,"Optional options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updater"),": Optional ",(0,i.kt)("inlineCode",{parentName:"li"},"updater()")," function passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"commitMutation()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"optimisticUpdater"),": Optional ",(0,i.kt)("inlineCode",{parentName:"li"},"optimisticUpdater()")," function passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"commitMutation()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"optimisticResponse"),": Optional optimistic response passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"commitMutation()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uploadables"),": Optional ",(0,i.kt)("inlineCode",{parentName:"li"},"uploadables")," passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"commitMutation()"),".")),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);
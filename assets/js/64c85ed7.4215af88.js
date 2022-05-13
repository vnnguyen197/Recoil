"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[8454],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7289:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"graphQLSelector()",sidebar_label:"graphQLSelector()"},s=void 0,p={unversionedId:"recoil-relay/api/graphQLSelector",id:"recoil-relay/api/graphQLSelector",title:"graphQLSelector()",description:"graphQLSelector() creates a Recoil selector which syncs with the provided Relay environment and GraphQL query or subscription.  The selector will automatically update with any deferred data, live queries, or if any local commits or updates are performed which mutate that part of the graph.  The selector acts like a local cache with the server as the source of truth.  It is writable and can be configured to commit mutations to the server when updated as a write-through cache.",source:"@site/docs/recoil-relay/api/graphQLSelector.md",sourceDirName:"recoil-relay/api",slug:"/recoil-relay/api/graphQLSelector",permalink:"/docs/recoil-relay/api/graphQLSelector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/recoil-relay/api/graphQLSelector.md",tags:[],version:"current",frontMatter:{title:"graphQLSelector()",sidebar_label:"graphQLSelector()"},sidebar:"recoil-relay",previous:{title:"<RecoilRelayEnvironmentProvider>",permalink:"/docs/recoil-relay/api/RecoilRelayEnvironmentProvider"},next:{title:"graphQLSelectorFamily()",permalink:"/docs/recoil-relay/api/graphQLSelectorFamily"}},c=[{value:"Simple Example",id:"simple-example",children:[],level:3},{value:"Query Based on Recoil State",id:"query-based-on-recoil-state",children:[],level:3},{value:"Transform Response",id:"transform-response",children:[],level:3},{value:"Skip Query",id:"skip-query",children:[],level:3},{value:"Mutations",id:"mutations",children:[],level:3}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphQLSelector()")," creates a Recoil ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selector")," which syncs with the provided Relay environment and ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/"},"GraphQL query or subscription"),".  The selector will automatically update with any deferred data, live queries, or if any local commits or updates are performed which mutate that part of the graph.  The selector acts like a local cache with the server as the source of truth.  It is writable and can be configured to commit mutations to the server when updated as a write-through cache."),(0,i.kt)("p",null,"If you would like to pass a parameter from the consumer callsite to the query variables consider ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/graphQLSelectorFamily"},(0,i.kt)("inlineCode",{parentName:"a"},"graphQLSelectorFamily()")),"."),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function graphQLSelector<\n  TVariables: Variables,\n  TData: $ReadOnly<{[string]: mixed}>,\n  T = TData,\n  TRawResponse = void,\n  TMutationVariables: Variables = {},\n  TMutationData: $ReadOnly<{[string]: mixed}> = {},\n  TMutationRawResponse = void,\n>({\n  key: string,\n\n  environment: IEnvironment | EnvironmentKey,\n\n  query:\n    | Query<TVariables, TData, TRawResponse>\n    | GraphQLSubscription<TVariables, TData, TRawResponse>,\n\n  variables: null | TVariables | (({get: GetRecoilValue}) => (null | TVariables)),\n\n  mapReponse?: (TData, {get: GetRecoilValue}) => T,\n\n  default?: T,\n\n  mutations?: {\n    mutation: Mutation<TMutationVariables, TMudationData, TMutationRawResposne>,\n    variables: T => ?TMutationVariables,\n  },\n\n}): RecoilState<T>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"key"))," - A unique string used to identify the selector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"environment"))," - The Relay Environment or an ",(0,i.kt)("a",{parentName:"li",href:"/docs/recoil-relay/api/EnvironmentKey"},(0,i.kt)("inlineCode",{parentName:"a"},"EnvironmentKey"))," to match with an environment pprovided by a surrounding ",(0,i.kt)("a",{parentName:"li",href:"/docs/recoil-relay/api/RecoilRelayEnvironment"},(0,i.kt)("inlineCode",{parentName:"a"},"<RecoilRelayEnvironment>")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"query"))," - A ",(0,i.kt)("a",{parentName:"li",href:"https://graphql.org/learn/queries/"},"GraphQL Query or Subscription"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"variables"))," - Callback to provide the ",(0,i.kt)("a",{parentName:"li",href:"https://graphql.org/learn/queries/#variables"},"variables")," object to use for the query.  This may be the variables object directly or a callback which has a ",(0,i.kt)("inlineCode",{parentName:"li"},"get()")," function that allows the selector to reference other upstream Recoil atoms/selectors.  If ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," is provided as the variables then no query will be performed and the ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," value will be used instead."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"mapResponse"))," - Optional callbak to transform the GraphQL results for using as the value of the selector.  It is also provided a ",(0,i.kt)("inlineCode",{parentName:"li"},"get()")," function so it can reference other Recoil atoms/selectors to perform the transformation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"default"))," - The default value to use if ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," is provided as the ",(0,i.kt)("inlineCode",{parentName:"li"},"variables"),".  If ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," is not provided then the selector will remain in a pending state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"mutations"))," - Optional configuration of a ",(0,i.kt)("a",{parentName:"li",href:"https://graphql.org/learn/queries/#mutations"},"GraphQL Mutation")," and variables to commit if the selector is explicitly written to.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"simple-example"},"Simple Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const eventQuery = graphQLSelector({\n  key: 'EventQuery',\n  environment: myEnvironment,\n  query: graphql`\n    query MyEventQuery($id: ID!) {\n      myevent(id: $id) {\n        id\n        name\n      }\n    }\n  `,\n  variables: {id: 123},\n});\n")),(0,i.kt)("h3",{id:"query-based-on-recoil-state"},"Query Based on Recoil State"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," used for the query can depend on other upstreeam Recoil State.  The query will subscribe to this upstream state and will automatically update if the upstream state is changed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const eventQuery = graphQLSelector({\n  key: 'EventQuery',\n  environment: myEnvironment,\n  query: graphql`\n    query MyEventQuery($id: ID!) {\n      myevent(id: $id) {\n        id\n        name\n      }\n    }\n  `,\n  variables: ({get}) => ({id: get(currentIDAtom)}),\n});\n")),(0,i.kt)("h3",{id:"transform-response"},"Transform Response"),(0,i.kt)("p",null,"The response from the server can be transformed for the value to use for the selector by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapResponse")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const eventNameQuery = graphQLSelector({\n  key: 'EventNameQuery',\n  environment: myEnvironment,\n  query: graphql`\n    query MyEventQuery($id: ID!) {\n      myevent(id: $id) {\n        id\n        name\n      }\n    }\n  `,\n  variables: ({get}) => ({id: get(currentIDAtom)}),\n  mapResponse: data => data?.myevent?.name,\n});\n")),(0,i.kt)("p",null,"The transformation can also reference other Recoil atoms/selectors.  It will subscribe to that upstream state and automatically update if the upstream state changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const eventNameQuery = graphQLSelector({\n  key: 'EventNameQuery',\n  environment: myEnvironment,\n  query: graphql`\n    query MyEventQuery($id: ID!) {\n      myevent(id: $id) {\n        id\n        name\n      }\n    }\n  `,\n  variables: ({get}) => ({id: get(currentIDAtom)}),\n  mapResponse: (data, {get}) => get(prefixAtom) + ':' + data?.myevent?.name,\n});\n")),(0,i.kt)("h3",{id:"skip-query"},"Skip Query"),(0,i.kt)("p",null,"Because the variables can depend on dynamic upstream state it is possible that for some states you may not wish to issue a query.  You can always avoid a query from being issued by returning ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"variables"),".  In this case the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," value will be used.  If no ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," is provided then the selector will remain in a pending state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const eventNameQuery = graphQLSelector({\n  key: 'EventNameQuery',\n  environment: myEnvironment,\n  query: graphql`\n    query MyEventQuery($id: ID!) {\n      myevent(id: $id) {\n        id\n        name\n      }\n    }\n  `,\n  variables: ({get}) => {\n    const id = get(currentIDAtom);\n    if (!isIDValid(id)) {\n      return null;\n    } else {\n      return {id};\n    }\n  },\n  default: 'PLACEHOLDER NAME',\n  mapResponse: data => data?.myevent?.name,\n});\n")),(0,i.kt)("h3",{id:"mutations"},"Mutations"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphQLSelector()")," acts as a local cache for the GraphQL server state as the source of truth.  It is writable and can be configured to commit a mutation to the server if written to.  See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-selectors#write-through-cache"},"write-through cache example"),"."))}m.isMDXComponent=!0}}]);
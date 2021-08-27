"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[2722],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=i,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3936:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={title:"Recoil 0.4"},l=void 0,c={permalink:"/zh-hans/blog/2021/07/30/0.4.0-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2021-07-30-0.4.0-release.md",source:"@site/blog/2021-07-30-0.4.0-release.md",title:"Recoil 0.4",description:"We are pleased to announce the release of Recoil 0.4 with configurable selector caches, improved API for transactions with multiple atoms, and other optimizations and fixes.",date:"2021-07-30T00:00:00.000Z",formattedDate:"2021\u5e747\u670830\u65e5",tags:[],readingTime:3.96,truncated:!1,prevItem:{title:"Recoil 0.4.1",permalink:"/zh-hans/blog/2021/08/26/0.4.1-release"},nextItem:{title:"Recoil 0.3",permalink:"/zh-hans/blog/2021/05/14/0.3.0-released"}},s=[{value:"Configurable selector caches",id:"configurable-selector-caches",children:[]},{value:"Transactions with multiple atoms",id:"transactions-with-multiple-atoms",children:[{value:"Example",id:"example",children:[]},{value:"Reducer Example",id:"reducer-example",children:[]}]},{value:"Fixes and Optimizations",id:"fixes-and-optimizations",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are pleased to announce the release of Recoil 0.4 with configurable selector caches, improved API for transactions with multiple atoms, and other optimizations and fixes."),(0,o.kt)("h2",{id:"configurable-selector-caches"},"Configurable selector caches"),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector#cache-policy-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"cachePolicy_UNSTABLE"))," property in ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selectors")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/selectorFamily"},"selector families")," allows you to configure the caching behavior of a selector's internal cache.  This property can be useful for reducing memory in applications that have a large number of selectors or selectors that have a large number of changing dependencies."),(0,o.kt)("p",null,"Below is an example of how you might use this new property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const clockState = selector({\n  key: 'clockState',\n  get: ({get}) => {\n    const hour = get(hourState);\n    const minute = get(minuteState);\n    const second = get(secondState); // will re-run every second\n\n    return `${hour}:${minute}:${second}`;\n  },\n  cachePolicy_UNSTABLE: {\n    // Only store the most recent set of dependencies and their values\n    eviction: 'most-recent',\n  },\n});\n")),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"clockState")," recalculates every second, adding a new set of dependency values to the internal cache, which may lead to a memory issue over time as the internal cache grows indefinitely. Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"most-recent")," eviction policy, the internal selector cache will only retain the most recent set of dependencies and their values, along with the actual selector value based on those dependencies, thus solving the memory issue."),(0,o.kt)("p",null,"Current eviction options are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lru")," - evicts the least-recently-used value from the cache when the size exceeds ",(0,o.kt)("inlineCode",{parentName:"li"},"maxSize"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"most-recent")," - retains only the most recent value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keep-all")," (default) - keeps all entries in the cache and does not evict.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"))," ",(0,o.kt)("em",{parentName:"p"},"The default eviction policy (currently ",(0,o.kt)("inlineCode",{parentName:"em"},"keep-all"),") may change in the future."))),(0,o.kt)("h2",{id:"transactions-with-multiple-atoms"},"Transactions with multiple atoms"),(0,o.kt)("p",null,"Introducing an improved API for updating multiple atoms together as a single transaction.  The new ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilTransaction"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilTransaction_UNSTABLE()"))," hook is easier, more efficient, and safer than before.  This new hook should eventually replace most uses of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilCallback()")),", however this release is only an initial implementation with ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilTransaction#current-limitations-and-future-vision"},"certain limitations")," that will be addressed in future releases."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Suppose we have two atoms, ",(0,o.kt)("inlineCode",{parentName:"p"},"positionState")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"headingState"),", and we'd like to update them together as part of a single action, where the new value of ",(0,o.kt)("inlineCode",{parentName:"p"},"positionState")," is a function of ",(0,o.kt)("em",{parentName:"p"},"both")," the current value of ",(0,o.kt)("inlineCode",{parentName:"p"},"positionState")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"headingState"),".  You can accomplish this with a transaction, which must be a pure function without side-effects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const goForward = useRecoilTransaction_UNSTABLE(({get, set}) => (distance) => {\n  const heading = get(headingState);\n  const position = get(positionState);\n  set(positionAtom, {\n    x: position.x + cos(heading) * distance,\n    y: position.y + sin(heading) * distance,\n  });\n});\n")),(0,o.kt)("p",null,"Then you can execute the transaction by just calling ",(0,o.kt)("inlineCode",{parentName:"p"},"goForward(distance)")," in an event handler.  This will update state based on the ",(0,o.kt)("em",{parentName:"p"},"current")," values, not the state when the components rendered.  You can also read the values of previous writes during a transaction.  Because no other updates will be committed while the updater is executing, you will see a consistent store of state."),(0,o.kt)("p",null,"the previous approach using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilCallback()"))," might have looked like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const goForward = useRecoilCallback(({snapshot, gotoSnapshot}) => (distance) => {\n  const mutatedSnapshot = snapshot.map(({get, set}) => {\n    const heading = get(headingState);\n    const position = get(positionState);\n    set(positionState, {\n      x: position.x + cos(heading) * distance,\n      y: position.y + sin(heading) * distance,\n    });\n  });\n  gotoSnapshot(mutatedSnapshot);\n});\n")),(0,o.kt)("p",null,"This has the following drawbacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is performance overhead for managing the full generality of snapshots."),(0,o.kt)("li",{parentName:"ul"},"There is more opportunity for bugs:  The snapshot might be retained and used in the future.  Since a snapshot contains the complete set of Recoil state, not just a changeset, that could accidentally rewind changes that occurred between creating and committing the snapshot.")),(0,o.kt)("h3",{id:"reducer-example"},"Reducer Example"),(0,o.kt)("p",null,"You can also use this hook to create a reducer pattern of executing actions over multiple atoms:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const reducer = useRecoilTransaction_UNSTABLE(({get, set}) => action => {\n  switch(action.type) {\n    case 'goForward':\n      const heading = get(headingState);\n      set(positionState, position => {\n        x: position.x + cos(heading) * action.distance,\n        y: position.y + sin(heading) * action.distance,\n      });\n      break;\n\n    case 'turn':\n      set(headingState, action.heading);\n      break;\n  }\n});\n")),(0,o.kt)("h2",{id:"fixes-and-optimizations"},"Fixes and Optimizations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix TypeScript typing for ",(0,o.kt)("inlineCode",{parentName:"li"},"selectorFamily()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"getCallback()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"useGetRecoilValueInfo()"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"Snapshot#getNodes()")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1060"},"#1060"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1116"},"#1116"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1123"},"#1123"),")"),(0,o.kt)("li",{parentName:"ul"},"Allow mutable values in selectors (enabled via the ",(0,o.kt)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," selector option) to be used with ",(0,o.kt)("inlineCode",{parentName:"li"},"waitFor*()")," helpers such as ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/utils/waitForAll"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForAll()"))," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1074"},"#1074"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1096"},"#1096"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/atom-effects"},"Atom Effects")," fixes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Fix ",(0,o.kt)("inlineCode",{parentName:"li"},"onSet()")," handler to get the proper new value when an atom is reset or has an async default Promise that resolves (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1059"},"#1059"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1050"},"#1050"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/738"},"#738"),") (This is a slightly breaking change because the actual new value will be provided to the handler instead of a ",(0,o.kt)("inlineCode",{parentName:"li"},"DefaultValue")," placeholder)"),(0,o.kt)("li",{parentName:"ul"},"Fix support for multiple Atom Effects cleanup handlers (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1125"},"#1125"),")"),(0,o.kt)("li",{parentName:"ul"},"Fix selector subscriptions when atoms with effects are initialized via a ",(0,o.kt)("inlineCode",{parentName:"li"},"Snapshot")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1135"},"#1135"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1107"},"#1107"),")"))),(0,o.kt)("li",{parentName:"ul"},"Optimization for async selectors when dependencies resolve to cached values (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1037"},"#1037"),")"),(0,o.kt)("li",{parentName:"ul"},"Remove unnecessary warning message (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1034"},"#1034"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1062"},"#1062"),")")))}u.isMDXComponent=!0}}]);
(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n,a=c(1),r=c.n(a),s=c(5),i=c.n(s),o=(c(10),c(2)),u=(c(11),c(3)),j={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DEV_API_KEY},O=c(0),S={loading:!1,movies:[],errorMessage:""},E=r.a.createContext({});!function(e){e.SEARCH_MOVIES_REQUEST="SEARCH_MOVIES_REQUEST",e.SEARCH_MOVIES_SUCCESS="SEARCH_MOVIES_SUCCESS",e.SEARCH_MOVIES_FAILURE="SEARCH_MOVIES_FAILURE"}(n||(n={}));var l=function(e,t){switch(t.type){case n.SEARCH_MOVIES_REQUEST:return Object(o.a)(Object(o.a)({},e),{},{loading:!0});case n.SEARCH_MOVIES_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,movies:t.payload});case n.SEARCH_MOVIES_FAILURE:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:t.errorMessage});default:return e}},b=function(e){var t=Object(a.useReducer)(l,S),c=Object(u.a)(t,2),n=c[0],r=c[1];return Object(O.jsx)(E.Provider,{value:{state:n,dispatch:r},children:e.children})},d=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(a.useContext)(E).dispatch,i=Object(a.useCallback)((function(e){s({type:n.SEARCH_MOVIES_REQUEST,loading:!0}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=").concat(j.apiKey)).then((function(e){return e.json()})).then((function(e){"True"===e.Response?s({type:n.SEARCH_MOVIES_SUCCESS,payload:e.Search}):s({type:n.SEARCH_MOVIES_FAILURE,errorMessage:e.Error})}))}),[s]),o=Object(a.useCallback)((function(e){e.preventDefault(),i(c),r("")}),[i,c]),S=Object(a.useCallback)((function(e){r(e.target.value)}),[]);return Object(a.useEffect)((function(){i("SpiderMan")}),[i]),Object(a.useMemo)((function(){return Object(O.jsxs)("form",{className:"search",children:[Object(O.jsx)("input",{value:c,onChange:S,type:"text"}),Object(O.jsx)("input",{onClick:o,type:"submit",value:"SEARCH"})]})}),[o,S,c])},p=function(e){var t="N/A"===e.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":e.Poster;return Object(a.useMemo)((function(){return Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("h2",{children:e.Title}),Object(O.jsx)("div",{children:Object(O.jsx)("img",{width:"200",alt:"The movie titled: ".concat(e.Title),src:t})}),Object(O.jsxs)("p",{children:["(",e.Year,")"]})]})}),[e.Title,e.Year,t])};var _=function(){var e=Object(a.useContext)(E).state,t=e.loading,c=e.errorMessage,n=e.movies;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(d,{}),Object(O.jsx)("p",{className:"App-intro",children:"Sharing a few of our favourite movies"}),Object(O.jsx)("div",{className:"movies",children:t&&!c?Object(O.jsx)("span",{children:"loading..."}):c?Object(O.jsx)("div",{className:"errorMessage",children:c}):n.map((function(e,t){return Object(O.jsx)(p,Object(o.a)({},e),"".concat(t))}))})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(b,{children:Object(O.jsx)(_,{})})}),document.getElementById("root")),C()}},[[13,1,2]]]);
//# sourceMappingURL=main.7d201f51.chunk.js.map
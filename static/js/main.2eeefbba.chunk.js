(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),a=c(6),r=c(15),l=c(5),i=c(13),o=c(14),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4),b=function(e){return{type:"filter/QUERY",payload:{query:e}}},m=function(e){return{type:"filter/STATUS",payload:{status:e}}},O={query:"",status:"all"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload.query});case"filter/STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload.status});default:return e}},x=function(e){return{type:"currentTodos/SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"currentTodos/SET"===t.type?t.payload:e},v=Object(l.combineReducers)({currentTodo:j,filter:f,todos:p}),y=Object(l.createStore)(v,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),N=c(0),g=(c(23),c(24),c(9)),T=c.n(g),E=a.b,S=a.c,k=c(1),w=function(){var e=E(),t=S((function(e){return e.todos})),c=S((function(e){return e.filter})),n=S((function(e){return e.currentTodo})),s=Object(N.useMemo)((function(){return null===t||void 0===t?void 0:t.filter((function(e){var t,n=e.title.toLowerCase(),s=(null===(t=c.query)||void 0===t?void 0:t.toLowerCase())||"";switch(c.status){case"active":return!e.completed&&n.includes(s);case"completed":return e.completed&&n.includes(s);default:return n.includes(s)}}))}),[c]);return Object(k.jsx)(k.Fragment,{children:0!==(null===s||void 0===s?void 0:s.length)?Object(k.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("th",{children:"Title"}),Object(k.jsx)("th",{children:" "})]})}),Object(k.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((function(t){var c=t.id,s=t.title,a=t.completed,r=function(){return c===(null===n||void 0===n?void 0:n.id)};return Object(k.jsxs)("tr",{"data-cy":"todo",className:T()({'className="has-background-info-light':r()}),children:[Object(k.jsx)("td",{className:"is-vcentered",children:c}),Object(k.jsx)("td",{className:"is-vcentered",children:a&&Object(k.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("td",{className:"is-vcentered is-expanded",children:Object(k.jsx)("p",{className:T()("has-text-success",{"has-text-danger":!a}),children:s})}),Object(k.jsx)("td",{className:"has-text-right is-vcentered",children:Object(k.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){e(d(t))},children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:T()("far",{"fa-eye-slash":r()},{"fa-eye":!r()})})})})})]},c)}))})]}):Object(k.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},C=function(){var e=E(),t=S((function(e){return e.filter.query}));return Object(k.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(k.jsx)("p",{className:"control",children:Object(k.jsx)("span",{className:"select",children:Object(k.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){return e(m(t.target.value))},children:[Object(k.jsx)("option",{value:"all",children:"All"}),Object(k.jsx)("option",{value:"active",children:"Active"}),Object(k.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(k.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(k.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){return e(b(t.target.value))}}),Object(k.jsx)("span",{className:"icon is-left",children:Object(k.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(k.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(b(""))}})})})]})]})},q=c(3),R=(c(26),function(){return Object(k.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(k.jsx)("div",{className:"Loader__content"})})});function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var A=function(){var e=E(),t=S((function(e){return e.currentTodo})),c=Object(N.useState)(null),n=Object(q.a)(c,2),s=n[0],a=n[1],r=t||{},l=r.id,i=r.title,o=r.completed,d=r.userId,j=void 0===d?0:d;return Object(N.useEffect)((function(){(function(e){return _("/users/".concat(e))})(j).then(a)}),[]),Object(k.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(k.jsx)("div",{className:"modal-background"}),s?Object(k.jsxs)("div",{className:"modal-card",children:[Object(k.jsxs)("header",{className:"modal-card-head",children:[Object(k.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",l]}),Object(k.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){e(u())}})]}),Object(k.jsxs)("div",{className:"modal-card-body",children:[Object(k.jsx)("p",{className:"block","data-cy":"modal-title",children:i}),Object(k.jsxs)("p",{className:"block","data-cy":"modal-user",children:[o?Object(k.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(k.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(k.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]}):Object(k.jsx)(R,{})]})},L=function(){var e=E(),t=S((function(e){return e.todos})),c=S((function(e){return e.currentTodo}));return Object(N.useEffect)((function(){_("/todos").then((function(t){return e(x(t))}))}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"section",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("h1",{className:"title",children:"Todos:"}),Object(k.jsx)("div",{className:"block",children:Object(k.jsx)(C,{})}),t?Object(k.jsx)(w,{}):Object(k.jsx)(R,{}),Object(k.jsx)("div",{className:"block"})]})})}),c&&Object(k.jsx)(A,{})]})},M=function(){return Object(k.jsx)(a.a,{store:y,children:Object(k.jsx)(r.a,{children:Object(k.jsx)(L,{})})})};s.a.render(Object(k.jsx)(M,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2eeefbba.chunk.js.map
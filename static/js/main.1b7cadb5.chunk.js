(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),l=a(7),o=a.n(l),i=(a(13),a(5)),d=a(3);a(14);var r=function(e){var t=e.data,a=e.setData,n=e.setStatus,s=e.value,l=e.setValue;return Object(c.jsx)("div",{className:"form",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a([].concat(Object(i.a)(t),[{text:s,completed:!1,id:1e3*Math.random(),date_time:(new Date).toLocaleString()}])),l("")},children:[Object(c.jsx)("input",{onChange:function(e){l(e.target.value)},value:s,type:"text",required:!0,className:"todo-input"}),Object(c.jsx)("button",{className:"todo-button",type:"submit",children:Object(c.jsx)("i",{className:"fas fa-plus-square"})}),Object(c.jsx)("div",{class:"select",children:Object(c.jsxs)("select",{onChange:function(e){n(e.target.value)},name:"todos",className:"filter-todo",children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"completed",children:"Completed"}),Object(c.jsx)("option",{value:"incomplete",children:"Not completed"}),Object(c.jsx)("option",{value:"recent",children:"Recently Added"})]})})]})})};var u=function(e){e.key;var t=e.data,a=e.setData,n=e.alldata,s=(e.value,e.setValue);return Object(c.jsxs)("div",{id:t.id,className:"todo",children:[Object(c.jsxs)("li",{className:"todo-item ".concat(t.completed?"completed":""),children:[t.text," ",Object(c.jsx)("small",{className:"date",children:t.date_time})]}),Object(c.jsx)("button",{onClick:function(){var e=n.map((function(e){return e.id===t.id&&(e.completed=!e.completed),e}));a(e)},className:"complete-btn",children:Object(c.jsx)("i",{className:"".concat(t.completed?"far fa-window-close":"fas fa-check")})}),Object(c.jsx)("button",{onClick:function(){document.getElementById(t.id).classList.add("fall"),setTimeout((function(){return a(n.filter((function(e){return e.id!==t.id})))}),1e3)},className:"trash-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})}),Object(c.jsx)("button",{onClick:function(){var e=document.getElementById(t.id),c=document.getElementById(t.id).childNodes;document.getElementsByClassName("todo-input")[0].focus(),s(c[0].childNodes[0].nodeValue),setTimeout((function(){return a(n.filter((function(e){return e.id!==t.id})))}),1e3),e.classList.add("fall")},className:"edit-btn",children:Object(c.jsx)("i",{className:"fas fa-pencil"})})]})};var j=function(e){var t=e.data,a=e.setData,n=e.value,s=e.setValue;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(c.jsx)(u,{data:e,setData:a,alldata:t,value:n,setValue:s},e.id)}))})})};var m=function(){Object(n.useEffect)((function(){C()}),[]);var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),u=o[0],m=o[1],b=Object(n.useState)("all"),f=Object(d.a)(b,2),O=f[0],h=f[1],p=Object(n.useState)([]),x=Object(d.a)(p,2),v=x[0],N=x[1];Object(n.useEffect)((function(){S(),y()}),[O,a]);var g=Object(i.a)(a),S=function(){switch(O){case"completed":N(a.filter((function(e){return e.completed})));break;case"incomplete":N(a.filter((function(e){return!e.completed})));break;case"recent":g.sort((function(e,t){return new Date(t.date_time)-new Date(e.date_time)})),N(g);break;default:N(a)}},y=function(){localStorage.setItem("data",JSON.stringify(a))},C=function(){null===localStorage.getItem("data")?localStorage.setItem("data",JSON.stringify([])):s(JSON.parse(localStorage.getItem("data")))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Create Todo List"})}),Object(c.jsx)(r,{data:a,setData:s,setStatus:h,value:u,setValue:m}),Object(c.jsx)(j,{data:v,value:u,setValue:m,setData:s})]})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.1b7cadb5.chunk.js.map
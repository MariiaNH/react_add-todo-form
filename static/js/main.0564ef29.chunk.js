(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(3),c=a(6),o=a(1),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=(a(14),a(8)),u=a.n(d),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)(m.Fragment,{children:t&&Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:t.name}),Object(m.jsx)("p",{children:t.email})]})})},h=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user;return Object(m.jsxs)("div",{className:"todo__item",children:[Object(m.jsx)("h4",{className:"todo__item-title",children:a}),Object(m.jsx)(j,{user:i}),n?Object(m.jsx)("p",{children:" Complete "}):Object(m.jsx)("p",{children:" Not completed! "})]})},b=function(e){var t=e.preparedTodos;return Object(m.jsx)("ul",{className:"todos",children:t.map((function(e){return Object(m.jsxs)("li",{className:u()("todos__item","".concat(e.completed?"todos__item--completed":"todos__item--not_completed")),children:[Object(m.jsx)(h,{todo:e}),Object(m.jsx)(j,{user:e.user})]},e.id)}))})},p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:l.find((function(t){return t.id===e.userId}))||null})})),O=function(){var e=Object(o.useState)(p),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),d=c[0],u=c[1],j=Object(o.useState)("Choose a user"),h=Object(s.a)(j,2),O=h[0],f=h[1],x=Object(o.useState)(!1),v=Object(s.a)(x,2),_=v[0],y=v[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var t=a[a.length-1].id+1,i=l.find((function(e){return e.name===O})),s={userId:(null===i||void 0===i?void 0:i.id)||0,id:t,title:d,completed:!1,user:i||null};d.length>0&&"Choose a user"!==O?(n((function(e){return[].concat(Object(r.a)(e),[s])})),u(""),f("Choose a user"),y(!1)):y(!0)},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("span",{className:"error",children:"Title:"}),Object(m.jsx)("textarea",{name:"title","data-cy":"titleInput",value:d,placeholder:"title",onChange:function(e){var t=e.target;u(t.value)}}),_&&0===d.length&&"Please enter the title"]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("span",{className:"error",children:"User:"}),Object(m.jsxs)("select",{"data-cy":"userSelect",value:O,onChange:function(e){var t=e.target;f(t.value)},children:[Object(m.jsx)("option",{disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),_&&"Choose a user"===O&&"Please choose a user"]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(b,{preparedTodos:a})]})};i.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0564ef29.chunk.js.map
(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),i=a(9),r=a(2),c=a(6),o=a(1),l=(a(14),a(15),a(8)),d=a.n(l),u=(a(16),a(0)),m=function(e){var t=e.user;return Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:t.name}),Object(u.jsx)("a",{className:"UserInfo",href:"mailto:{user.email}",children:t.email})]})})},h=function(e){var t=e.todo;return Object(u.jsxs)("article",{className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(u.jsx)(m,{user:t.user})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)("div",{className:"list",children:Object(u.jsx)(h,{todo:e})},e.id)}))})},p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];var j=[{userId:1,id:1,title:"delectus aut autem",completed:!0},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:(t=e.userId,p.find((function(e){return e.id===t}))||null)});var t})),g=function(){var e=Object(o.useState)(j),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(o.useState)(""),c=Object(r.a)(s,2),l=c[0],d=c[1],m=Object(o.useState)("Choose a user"),h=Object(r.a)(m,2),g=h[0],y=h[1],f=Object(o.useState)(!0),O=Object(r.a)(f,2),x=O[0],v=O[1],S=Object(o.useState)(!0),w=Object(r.a)(S,2),C=w[0],k=w[1],N=Object(o.useState)(!0),z=Object(r.a)(N,2),P=z[0],I=z[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"title is-4",children:"Add todo form"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("div",{children:Object(u.jsxs)("label",{className:"label",children:[Object(u.jsx)("div",{children:"Task"}),C?Object(u.jsx)("p",{className:"help",children:"This field is required"}):Object(u.jsx)("p",{className:"help is-danger",children:"Please enter the title"}),Object(u.jsx)("input",{className:"myInput",type:"text","data-cy":"titleInput",placeholder:"Enter the title",value:l,onChange:function(e){var t=e.target.value;d(t),k(!0),I(!0)},required:!0})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{className:"label",children:[Object(u.jsx)("div",{children:"User"}),x?Object(u.jsx)("p",{className:"help",children:"This field is required"}):Object(u.jsx)("p",{className:"help is-danger",children:"Please choose a user"}),Object(u.jsxs)("select",{className:"select",name:"user","data-cy":"userSelect",value:g,onChange:function(e){var t=e.target.value;y(t),v(!0),I(!0)},children:[Object(u.jsx)("option",{value:"Choose a user",children:"Choose a user"}),p.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"button is-black",type:"submit",onClick:function(e){if(e.preventDefault(),"Choose a user"===g)return I(!1),void v(!1);if(""===l)return k(!1),void I(!1);if(P){var t=p.find((function(e){return e.name===g}));if(t){var a={id:j.length+1,userId:t.id,title:l,completed:!1,user:t};n((function(e){return[].concat(Object(i.a)(e),[a])})),y("Choose a user"),d("")}}},children:"Add"})})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Users: "}),p.length]}),Object(u.jsx)(b,{todos:a})]})};s.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e159472e.chunk.js.map
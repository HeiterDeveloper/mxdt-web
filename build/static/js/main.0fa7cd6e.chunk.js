(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{54:function(e,c,t){},55:function(e,c,t){},57:function(e,c,t){},63:function(e,c,t){},64:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){},67:function(e,c,t){"use strict";t.r(c);var s=t(1),r=t(20),n=t.n(r),a=t(21),o=t(22),l=t(25),i=t(24),j=(t(31),t(32),t(33),t(54),t(55),t(0)),d=function(){return Object(j.jsxs)("section",{className:"container",children:[Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:"https://static.thenounproject.com/png/158278-200.png",className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"Profissional"}),Object(j.jsx)("a",{href:"/listagem/profissional",className:"btn btn-primary",children:"Ir para cadastro"})]})]}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:"https://static.thenounproject.com/png/1924175-200.png",className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"Tipos de profissional"}),Object(j.jsx)("a",{href:"/listagem/tipoDeProfissional",className:"btn btn-primary",children:"Ir para cadastro"})]})]})]})},b=t(7),h=(t(57),function(){var e={menu:{width:"100%",height:"50px",backgroundColor:"#222",textAlign:"center"},navItem:{color:"#fff",marginTop:"5px"}};return Object(j.jsxs)("nav",{className:"nav justify-content-center",style:e.menu,children:[Object(j.jsx)("a",{className:"nav-link",href:"/",style:e.navItem,children:"Home"}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsx)("a",{className:"nav-link dropdown-toggle",style:e.navItem,"data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false",children:"Profissionais"}),Object(j.jsxs)("ul",{className:"dropdown-menu",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"/listagem/profissional",children:"Listagem"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"/cadastro/profissional",children:"Novo cadasatro"})})]})]}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsx)("a",{className:"nav-link dropdown-toggle",style:e.navItem,"data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false",children:"Tipos de profissional"}),Object(j.jsxs)("ul",{className:"dropdown-menu",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"/listagem/tipodeprofissional",children:"Listagem"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"/cadastro/tipodeprofissional",children:"Novo cadasatro"})})]})]})]})}),u="http://localhost:8090",m=function(e){var c=[];return Object.entries(e).forEach((function(e){c.push("".concat(e[0],"=").concat(e[1]))})),c.join("&")},f=t(2),O=function(){var e=Object(s.useState)([]),c=Object(b.a)(e,2),t=c[0],r=c[1],n=Object(s.useRef)(),a=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),i=Object(s.useRef)(),d=new URLSearchParams(Object(f.f)().search).get("id");return Object(s.useEffect)((function(){!function(){var e={descricao:"",situacao:1},c=m(e);fetch(u+"/tipoDeProfissional?"+c,e).then((function(e){return e.json()})).then((function(e){e.error?(r([]),alert(e.error)):r(e)}))}(),null!=d&&fetch(u+"/profissional/"+d).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):(n.current.value=e.nome,a.current.value=e.telefone,o.current.value=e.email,l.current.value=e.tipoDeProfissional,i.current.value=e.situacao?1:0)}))}),[0]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)("section",{className:"containerCadastro col-sm-6",children:[Object(j.jsx)("div",{className:"form-group col-sm-4",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Nome"}),Object(j.jsx)("input",{ref:n,className:"form-control",type:"text"})]})}),Object(j.jsx)("div",{className:"form-group col-sm-4",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Telefone"}),Object(j.jsx)("input",{ref:a,className:"form-control",type:"text"})]})}),Object(j.jsx)("div",{className:"form-group col-sm-4",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{ref:o,className:"form-control",type:"email"})]})}),Object(j.jsx)("div",{className:"form-group col-sm-6",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Tipo de profissional"}),Object(j.jsxs)("select",{ref:l,className:"form-select",children:[Object(j.jsx)("option",{value:"0",children:"Selecione"}),t.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.descricao},e.id)}))]})]})}),Object(j.jsx)("div",{className:"form-group col-sm-6",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Situa\xe7\xe3o"}),Object(j.jsxs)("select",{ref:i,className:"form-select",children:[Object(j.jsx)("option",{value:"1",children:"Ativo"}),Object(j.jsx)("option",{value:"0",children:"Inativo"})]})]})}),Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){var e={nome:n.current.value,telefone:a.current.value,email:o.current.value,tipoDeProfissional:l.current.value,situacao:i.current.value};fetch(u+"/profissional"+(null==d||""==d?"":"/"+d),{method:null==d||""==d?"POST":"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var c=e.success||e.error;alert(c)}))},children:"Salvar"}),null!==d&&""!==d?Object(j.jsx)("button",{className:"btn btn-danger",style:{marginTop:"20px"},onClick:function(){fetch(u+"/profissional/"+d,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){var c=e.success||e.error;alert(c)}))},children:"Deletar"}):""]})]})]})},x=(t(63),function(){var e=Object(s.useState)([]),c=Object(b.a)(e,2),t=c[0],r=c[1],n=Object(s.useState)([]),a=Object(b.a)(n,2),o=a[0],l=a[1],i=Object(s.useRef)(),d=Object(s.useRef)(),f=Object(s.useRef)(),O=Object(s.useRef)(),x=Object(s.useRef)();return Object(s.useEffect)((function(){var e={descricao:"",situacao:1},c=m(e);fetch(u+"/tipoDeProfissional?"+c,e).then((function(e){return e.json()})).then((function(e){e.error?(l([]),alert(e.error)):l(e)}))}),[0]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)("section",{className:"containerListagem",children:[Object(j.jsxs)("form",{id:"formSave",children:[Object(j.jsx)("div",{className:"form-group col-sm-3",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Nome"}),Object(j.jsx)("input",{ref:i,className:"form-control",type:"text"})]})}),Object(j.jsx)("div",{className:"form-group col-sm-2",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Telefone"}),Object(j.jsx)("input",{ref:d,className:"form-control",type:"text"})]})}),Object(j.jsx)("div",{className:"form-group col-sm-3",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{ref:f,className:"form-control",type:"email"})]})}),Object(j.jsx)("div",{className:"form-group col-sm-2",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Tipo de profissional"}),Object(j.jsxs)("select",{ref:O,className:"form-select",children:[Object(j.jsx)("option",{value:"",children:"Selecione"}),o.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.descricao},e.id)}))]})]})}),Object(j.jsx)("div",{className:"form-group col-sm-2",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Situa\xe7\xe3o"}),Object(j.jsxs)("select",{ref:x,className:"form-select",children:[Object(j.jsx)("option",{value:"",children:"Selecione"}),Object(j.jsx)("option",{value:"1",children:"Ativo"}),Object(j.jsx)("option",{value:"0",children:"Inativo"})]})]})})]}),Object(j.jsx)("div",{className:"col-form",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){var e={nome:i.current.value,telefone:d.current.value,email:f.current.value,tipoDeProfissional:O.current.value,situacao:x.current.value},c=m(e);fetch(u+"/profissional?"+c,e).then((function(e){return e.json()})).then((function(e){e.error?(r([]),alert(e.error)):r(e)}))},children:"Pesquisar"})}),Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"#"}),Object(j.jsx)("th",{scope:"col",children:"Nome"}),Object(j.jsx)("th",{scope:"col",children:"Telefone"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"Situa\xe7\xe3o"}),Object(j.jsx)("th",{scope:"col",children:"Data de cadastro"}),Object(j.jsx)("th",{scope:"col",children:"Editar"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,c){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:c+1}),Object(j.jsx)("td",{children:e.nome}),Object(j.jsx)("td",{children:e.telefone}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.situacao?"Ativo":"Inativo"}),Object(j.jsx)("td",{children:e.createdAt}),Object(j.jsx)("td",{children:Object(j.jsx)("a",{target:"_blank",href:"/cadastro/profissional?id="+e.id,children:"X"})})]},new Date*Math.random())}))})]})]})]})}),p=(t(64),function(){var e=Object(s.useRef)(),c=Object(s.useRef)(),t=new URLSearchParams(Object(f.f)().search).get("id");return Object(s.useEffect)((function(){fetch(u+"/tipoDeProfissional/"+t).then((function(e){return e.json()})).then((function(t){t.error?alert(t.error):(e.current.value=t.descricao,c.current.value=t.situacao?1:0)}))}),[0]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)("section",{className:"containerCadastro col-sm-6",children:[Object(j.jsx)("div",{className:"form-group col-sm-4",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Descri\xe7\xe3o"}),Object(j.jsx)("input",{ref:e,className:"form-control",type:"text"})]})}),Object(j.jsx)("div",{className:"form-group col-sm-6",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Situa\xe7\xe3o"}),Object(j.jsxs)("select",{ref:c,className:"form-select",children:[Object(j.jsx)("option",{value:"1",children:"Ativo"}),Object(j.jsx)("option",{value:"0",children:"Inativo"})]})]})}),Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){var s={descricao:e.current.value,situacao:c.current.value};fetch(u+"/tipoDeProfissional"+(null==t||""==t?"":"/"+t),{method:null==t||""==t?"POST":"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){var c=e.success||e.error;alert(c)}))},children:"Salvar"}),null!==t&&""!==t?Object(j.jsx)("button",{className:"btn btn-danger",style:{marginTop:"20px"},onClick:function(){fetch(u+"/tipoDeProfissional/"+t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){var c=e.success||e.error;alert(c)}))},children:"Deletar"}):""]})]})]})}),v=(t(65),function(){var e=Object(s.useState)([]),c=Object(b.a)(e,2),t=c[0],r=c[1],n=Object(s.useRef)(),a=Object(s.useRef)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)("section",{className:"containerListagem",children:[Object(j.jsx)("div",{className:"form-group col-sm-3",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Descri\xe7\xe3o"}),Object(j.jsx)("input",{ref:n,className:"form-control",type:"text"})]})}),Object(j.jsx)("div",{className:"form-group col-sm-2",children:Object(j.jsxs)("div",{className:"col-form",children:[Object(j.jsx)("label",{children:"Situa\xe7\xe3o"}),Object(j.jsxs)("select",{ref:a,className:"form-select",children:[Object(j.jsx)("option",{value:"1",children:"Ativo"}),Object(j.jsx)("option",{value:"0",children:"Inativo"})]})]})}),Object(j.jsx)("div",{className:"col-form",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){var e={descricao:n.current.value,situacao:a.current.value},c=m(e);fetch("http://localhost:8090/tipoDeProfissional?"+c,e).then((function(e){return e.json()})).then((function(e){e.error?(r([]),alert(e.error)):r(e)}))},children:"Pesquisar"})}),Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"#"}),Object(j.jsx)("th",{scope:"col",children:"Descri\xe7\xe3o"}),Object(j.jsx)("th",{scope:"col",children:"Situa\xe7\xe3o"}),Object(j.jsx)("th",{scope:"col",children:"Data de cadastro"}),Object(j.jsx)("th",{scope:"col",children:"Editar"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,c){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:c+1}),Object(j.jsx)("td",{children:e.descricao}),Object(j.jsx)("td",{children:e.situacao?"Ativo":"Inativo"}),Object(j.jsx)("td",{children:e.createdAt}),Object(j.jsx)("td",{children:Object(j.jsx)("a",{target:"_blank",href:"/cadastro/tipoDeProfissional?id="+e.id,children:"X"})})]},new Date*Math.random())}))})]})]})]})}),N=t(10),g=function(e){Object(l.a)(t,e);var c=Object(i.a)(t);function t(){return Object(a.a)(this,t),c.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(N.a,{children:Object(j.jsxs)(f.c,{children:[Object(j.jsx)(f.a,{path:"/listagem/tipoDeProfissional",children:Object(j.jsx)(v,{})}),Object(j.jsx)(f.a,{path:"/cadastro/tipoDeProfissional",children:Object(j.jsx)(p,{})}),Object(j.jsx)(f.a,{path:"/listagem/profissional",children:Object(j.jsx)(x,{})}),Object(j.jsx)(f.a,{path:"/cadastro/profissional",children:Object(j.jsx)(O,{})}),Object(j.jsx)(f.a,{path:"/",children:Object(j.jsx)(d,{})})]})})})}}]),t}(s.Component);t(66);n.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.0fa7cd6e.chunk.js.map
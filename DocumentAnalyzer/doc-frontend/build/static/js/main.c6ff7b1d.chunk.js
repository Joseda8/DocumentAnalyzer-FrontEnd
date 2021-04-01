(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){e.exports=a(233)},164:function(e,t,a){},166:function(e,t,a){},209:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(34),o=a.n(r),s=a(28),c=a(31),i=Object(c.a)(),u=a(151);function m(e){var t=e.component,a=e.isPrivate,n=Object(u.a)(e,["component","isPrivate"]);return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement(s.b,Object.assign({},n,{component:t}))}m.defaultProps={isPrivate:!1};var d=a(35),p=a(41),h=a(30),f=a(43),b=a(42),g=a(46),E=a(262),y=a(251),v=a(261),w=a(250),C=a(134),O=(a(164),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{className:this.props.numRow},l.a.createElement(C.a,{sm:this.props.numCol,className:"card text-white p-4"},this.props.children)))}}]),a}(n.Component)),j=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.onSubmit=n.onSubmit.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target.elements;this.setState({email:a.email.value,password:a.password.value},function(){t.props.history.push({pathname:"/files",state:{detail:t.state}})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{numCol:"4",numRow:"justify-content-center align-items-center h-100"},l.a.createElement("h2",{className:"h4"},"Iniciar sesi\xf3n"),l.a.createElement(E.a,{onSubmit:this.onSubmit},l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Correo electr\xf3nico"),l.a.createElement(E.a.Control,{type:"email",name:"email",placeholder:"Correo electr\xf3nico"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Contrase\xf1a"),l.a.createElement(E.a.Control,{type:"password",name:"password",placeholder:"Contrase\xf1a"})),l.a.createElement(y.a,{variant:"primary",type:"submit",block:!0},"Ingresar")),l.a.createElement(v.a,{variant:"info",className:"mt-3"},"\xbfNuevo usuario? ",l.a.createElement(g.a,{to:"/signup",className:"alert-link"},"Reg\xedstrese aqu\xed"))))}}]),a}(n.Component),N=(a(166),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bg-image"},this.props.children))}}]),a}(n.Component)),k=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={errorMessage:null,name:"",email:"",password1:"",password2:""},n.handleNameChange=n.handleNameChange.bind(Object(h.a)(n)),n.handleEmailChange=n.handleEmailChange.bind(Object(h.a)(n)),n.handlePassword1Change=n.handlePassword1Change.bind(Object(h.a)(n)),n.handlePassword2Change=n.handlePassword2Change.bind(Object(h.a)(n)),n.onSubmit=n.onSubmit.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),this.validateInputs(),this.props.history.push("/login")}},{key:"validateInputs",value:function(){this.setState({errorMessage:null});var e=this.state.name,t=this.state.email,a=this.state.password1,n=this.state.password2;return""===e||""===t||""===a||""===n?(this.setState({errorMessage:"Por favor ingrese toda la informaci\xf3n solicitada."}),!1):a===n||(this.setState({errorMessage:"Las contrase\xf1as no coinciden."}),!1)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null,l.a.createElement("h2",{className:"h4"},"Registro"),this.state.errorMessage&&l.a.createElement(v.a,{variant:"danger"},this.state.errorMessage),l.a.createElement(E.a,{onSubmit:this.onSubmit},l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Nombre completo"),l.a.createElement(E.a.Control,{type:"text",placeholder:"Nombre completo",onChange:this.handleNameChange})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Correo electr\xf3nico"),l.a.createElement(E.a.Control,{type:"email",placeholder:"Correo electr\xf3nico",onChange:this.handleEmailChange})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Contrase\xf1a"),l.a.createElement(E.a.Control,{type:"password",placeholder:"Contrase\xf1a",onChange:this.handlePassword1Change})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,null,"Repetir Contrase\xf1a"),l.a.createElement(E.a.Control,{type:"password",placeholder:"Contrase\xf1a",onChange:this.handlePassword2Change})),l.a.createElement(w.a,null,l.a.createElement(C.a,null,l.a.createElement(g.a,{to:"/",className:"btn btn-secondary btn-block"},"Cancelar")),l.a.createElement(C.a,null,l.a.createElement(y.a,{variant:"primary",type:"submit",block:!0},"Crear usuario"))))))}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassword1Change",value:function(e){this.setState({password1:e.target.value})}},{key:"handlePassword2Change",value:function(e){this.setState({password2:e.target.value})}}]),a}(n.Component),S=Object(s.h)(k),x=a(73),P=a.n(x),q=a(59),J=a(137),A=a(263),L=function e(){var t=this;Object(d.a)(this,e),this.uploadFiles=function(){var e=Object(J.a)(P.a.mark(function e(a,n){var l,r,o,s,c;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,l=[],r=Object(q.a)(a);try{for(r.s();!(o=r.n()).done;)s=o.value,c=t.containerClient.getBlockBlobClient(s.name),l.push(c.uploadBrowserData(s))}catch(i){r.e(i)}finally{r.f()}return e.t0=n,e.next=7,Promise.all(l);case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),n(e.t2.message);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,a){return e.apply(this,arguments)}}();var a=new A.a("https://soafiles.blob.core.windows.net/?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-04-25T13:35:04Z&st=2021-03-25T05:35:04Z&spr=https,http&sig=3pa3Q8quR2KbhVpXWwzOxENduRl6p8Fe3po9oXzgIMo%3D");this.containerClient=a.getContainerClient("files")},M=(a(209),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",files:null},n.objectStorage=new L,n.onSubmit=n.onSubmit.bind(Object(h.a)(n)),n.uploadFiles=n.uploadFiles.bind(Object(h.a)(n)),n.uploadFilesBlob=n.uploadFilesBlob.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"onSubmit",value:function(){console.log(this.props),document.getElementById("message_to_user").innerHTML="Loading"}},{key:"uploadFiles",value:function(e){var t=e.target.files;this.setState({files:t})}},{key:"uploadFilesBlob",value:function(){var e=this.state.files;console.log(e),document.getElementById("message_to_user").innerHTML="Loading...",this.objectStorage.uploadFiles(e,function(e){console.log(e[0]),document.getElementById("message_to_user").innerHTML="Files uploaded"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"center"},l.a.createElement("header",null,l.a.createElement("h1",null,"Upload files"),l.a.createElement("span",null,"This action will start the analysis")),l.a.createElement("br",null),l.a.createElement("input",{type:"file",multiple:!0,onChange:this.uploadFiles}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.uploadFilesBlob},"Upload files"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",{id:"message_to_user"}," "))}}]),a}(n.Component)),z=a(38),B=a(68),I=a(253),F=a(254),T=a(255),D=a(265),H=a(266),R=a(267),K=a(256),W=function(e){var t=e.page,a=e.pages,r=e.canPrevious,o=e.canNext,s=e.pageSizeOptions,c=e.showPageSizeOptions,i=e.showPageJump,u=e.defaultPageSize,m=e.onPageChange,d=e.onPageSizeChange,p=e.paginationMaxSize,h=Object(n.useState)(t),f=Object(z.a)(h,2),b=f[0],g=f[1],E=Object(n.useState)(u),y=Object(z.a)(E,2),v=y[0],w=y[1];Object(n.useEffect)(function(){g(t)},[t]);var C=function(e){var n=function(e){var n=e;return Number.isNaN(e)&&(n=t),Math.min(Math.max(n,0),a-1)}(e);n!==b&&(g(n),m(n))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-center"},i&&l.a.createElement("div",{className:"float-left pt-2"},l.a.createElement("span",null,"Page "),l.a.createElement(D.a,{className:"d-inline-block"},l.a.createElement(H.a,{caret:!0,color:"outline-primary",size:"xs"},b+1),l.a.createElement(R.a,{direction:"left"},function(){for(var e=[],t=function(t){e.push(l.a.createElement(T.a,{key:t,onClick:function(){return C(t)}},t+1))},n=0;n<a;n+=1)t(n);return e}())),l.a.createElement("span",null," of "),a),l.a.createElement(K.a,{className:"d-inline-block",size:"sm",listClassName:"justify-content-center","aria-label":"Page navigation example"},l.a.createElement(I.a,{className:"".concat(!r&&"disabled")},l.a.createElement(F.a,{className:"prev",onClick:function(){r&&C(t-1)},disabled:!r},l.a.createElement("i",{className:"simple-icon-arrow-left"}))),function(){var e=a,t=a,n=b,r=0,o=p;o&&t>o&&((t=(r=Math.max(n+1-Math.floor(o/2),1))+o-1)>e&&(r=(t=e)-o+1),r-=1);for(var s=[],c=function(e){var t=n===e;s.push(l.a.createElement(I.a,{key:e,active:t},l.a.createElement(F.a,{onClick:function(){C(e)}},e+1)))},i=r;i<t;i+=1)c(i);return s}(),l.a.createElement(I.a,{className:"".concat(!o&&"disabled")},l.a.createElement(F.a,{className:"next",onClick:function(){o&&C(t+1)},disabled:!o},l.a.createElement("i",{className:"simple-icon-arrow-right"})))),c&&l.a.createElement("div",{className:"float-right pt-2"},l.a.createElement("span",{className:"text-muted text-small mr-1"},"Items "),l.a.createElement(D.a,{className:"d-inline-block"},l.a.createElement(H.a,{caret:!0,color:"outline-primary",size:"xs"},v),l.a.createElement(R.a,{right:!0},s.map(function(e,t){return l.a.createElement(T.a,{key:t,onClick:function(){return function(e){d(e),w(e)}(e)}},e)}))))))};a(89);function G(e){var t=e.columns,a=e.data,r=e.filterBy,o=Object(n.useState)(""),s=Object(z.a)(o,2),c=s[0],i=s[1],u=Object(B.useTable)({columns:t,data:a,initialState:{pageIndex:0,pageSize:3}},B.useFilters,B.useSortBy,B.usePagination),m=u.getTableProps,d=u.getTableBodyProps,p=u.headerGroups,h=u.prepareRow,f=u.setFilter,b=u.page,g=u.canPreviousPage,E=u.canNextPage,y=u.pageCount,v=u.gotoPage,w=u.setPageSize,C=u.state,O=C.pageIndex,j=C.pageSize;return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{value:c,onChange:function(e){var t=e.target.value||void 0;f(r,t),i(t)},placeholder:"Search name"}),l.a.createElement("table",m(),l.a.createElement("thead",null,p.map(function(e){return l.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{style:{alignItems:"center",justifyContent:"center"}}),e.headers.map(function(e){return l.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:e.isSorted?e.isSortedDesc?"sort-desc":"sort-asc":""}),e.render("Header"))}))})),l.a.createElement("tbody",d(),b.map(function(e){return h(e),l.a.createElement("tr",e.getRowProps(),e.cells.map(function(e){return l.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))),l.a.createElement(W,{page:O,pages:y,canPrevious:g,canNext:E,pageSizeOptions:[4,10,20,30,40,50],showPageSizeOptions:!1,showPageJump:!1,defaultPageSize:j,onPageChange:function(e){return v(e)},onPageSizeChange:function(e){return w(e)},paginationMaxSize:y}))}var _=a(257),U=a(145),V=a(264),X=a(258),Z=a(259),Q=a(260),Y=function(e){var t,a=e.buttonLabel,r=e.className,o=e.references,s=Object(n.useState)(!1),c=Object(z.a)(s,2),i=c[0],u=c[1],m=function(){return u(!i)},d=[],p=Object(q.a)(o);try{for(p.s();!(t=p.n()).done;){var h=t.value;d.push(l.a.createElement("div",{key:h.name},l.a.createElement(_.a,null,h.name,": ",h.qty)))}}catch(f){p.e(f)}finally{p.f()}return l.a.createElement("div",null,l.a.createElement(U.a,{color:"primary",onClick:m},a),l.a.createElement(V.a,{isOpen:i,toggle:m,className:r,wrapClassName:"modal-right",backdrop:"static"},l.a.createElement(X.a,{toggle:m},"Employee reference in document"),l.a.createElement(Z.a,null," ",d," "),l.a.createElement(Q.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-4"}),l.a.createElement("div",{className:"col-xs-4"},l.a.createElement(U.a,{color:"danger",onClick:m}," Close ")))))))},$=[{id:1,title:"Speech.pdf",status:!0,url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Jos\xe9 Montoya",qty:8},{name:"Kurt Cobain",qty:27}],owner:"John Doe"},{id:2,title:"LoveLetter.txt",status:!0,url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Jos\xe9 Montoya",qty:8},{name:"Billie Joe Armstrong",qty:15},{name:"Ash Ketchum",qty:200}],owner:"Jane Doe"},{id:3,title:"AnotherLetter.docx",status:!1,url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Billie Joe Armstrong",qty:15},{name:"Ash Ketchum",qty:200}],owner:"Jane Doe"},{id:4,title:"LoveLetter.txt",status:!1,url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Jos\xe9 Montoya",qty:8},{name:"Billie Joe Armstrong",qty:15},{name:"Ash Ketchum",qty:200}],owner:"Jane Doe"},{id:5,title:"LoveLetter.txt",status:!0,url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Jos\xe9 Montoya",qty:8},{name:"Billie Joe Armstrong",qty:15},{name:"Ash Ketchum",qty:200}],owner:"Jane Doe"},{id:6,title:"El quijote.txt",status:!1,url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Jos\xe9 Montoya",qty:8},{name:"Billie Joe Armstrong",qty:15},{name:"Ash Ketchum",qty:200}],owner:"John Doe"},{id:7,title:"LoveLetter.txt",status:!1,url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Jos\xe9 Montoya",qty:8},{name:"Billie Joe Armstrong",qty:15},{name:"Ash Ketchum",qty:200}],owner:"Jane Doe"},{id:8,title:"LoveLetter.txt",status:!0,url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Jos\xe9 Montoya",qty:8},{name:"Billie Joe Armstrong",qty:15},{name:"Ash Ketchum",qty:200}],owner:"Jane Doe"},{id:9,title:"LoveLetter.txt",status:!0,url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Jos\xe9 Montoya",qty:8},{name:"Billie Joe Armstrong",qty:15},{name:"Ash Ketchum",qty:200}],owner:"Jane Doe"},{id:10,status:!0,title:"HolyBlible.pdf",url:"https://soafiles.blob.core.windows.net/files/WeeklyActivity4 - Ingl\xe9s especializado.pdf",references:[{name:"Dios",qty:8888}],owner:"Jhon"}],ee=function(){var e=Object(n.useState)($),t=Object(z.a)(e,2),a=t[0],r=t[1],o=l.a.useMemo(function(){return[{Header:"Filename",accessor:"title",cellClass:"text-muted w-10",Cell:function(e){return l.a.createElement("a",{href:e.row.original.url},e.row.original.title)},sortType:"basic"},{Header:"Owner",accessor:"owner",cellClass:"text-muted w-10",Cell:function(e){return l.a.createElement("p",null,e.row.original.owner)},sortType:"basic"},{Header:"Status",accessor:"status",cellClass:"text-muted w-10",Cell:function(e){return t=e.row.original.status,a=e.row.original.references,t?l.a.createElement(Y,{buttonLabel:"See results",references:a}):l.a.createElement("button",{className:"mb-2 btn btn-secondary"},"Not processed");var t,a}}]},[]);function s(){r([$[Math.floor(10*Math.random())]])}return Object(n.useEffect)(function(){var e=setInterval(function(){s()},1e3);return function(){return clearInterval(e)}},[]),l.a.createElement("div",null,l.a.createElement("button",{onClick:s}," Click me "),l.a.createElement("h2",null,"Files"),l.a.createElement("div",{className:"filesTable"},l.a.createElement(G,{columns:o,data:a,filterBy:"title"})))},te=[{id:7,name:"Ash Ketchum",qty:200,documents:[{name:"Kanto",ocurrences:300},{name:"Johto",ocurrences:250}]},{id:8,name:"Billie Joe Armstrong",qty:17,documents:[]},{id:9,name:"Jos\xe9 Montoya",qty:8,documents:[]},{id:10,name:"Dios",qty:8888,documents:[]}],ae=function(e){var t,a=e.buttonLabel,r=e.className,o=e.references,s=Object(n.useState)(!1),c=Object(z.a)(s,2),i=c[0],u=c[1],m=function(){return u(!i)},d=[],p=Object(q.a)(o);try{for(p.s();!(t=p.n()).done;){var h=t.value;d.push(l.a.createElement("div",{key:h.name},l.a.createElement(_.a,null,h.name,": ",h.ocurrences)))}}catch(f){p.e(f)}finally{p.f()}return l.a.createElement("div",null,l.a.createElement(U.a,{color:"primary",onClick:m},a),l.a.createElement(V.a,{isOpen:i,toggle:m,className:r,wrapClassName:"modal-right",backdrop:"static"},l.a.createElement(X.a,{toggle:m},"Employee references in document"),l.a.createElement(Z.a,null," ",d," "),l.a.createElement(Q.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-4"}),l.a.createElement("div",{className:"col-xs-4"},l.a.createElement(U.a,{color:"danger",onClick:m}," Close ")))))))};var ne=function(){var e=l.a.useMemo(function(){return[{Header:"Name",accessor:"name",cellClass:"text-muted w-10",Cell:function(e){return l.a.createElement("p",null,e.row.original.name)},sortType:"basic"},{Header:"Total Occurrences",accessor:"qty",cellClass:"text-muted w-10",Cell:function(e){return l.a.createElement("p",null,e.row.original.qty)},sortType:"basic"},{Header:"Ocurrences on document",accessor:"documents",cellClass:"text-muted w-10",Cell:function(e){return(t=e.row.original.documents).length>0?l.a.createElement(ae,{buttonLabel:"View details",references:t}):l.a.createElement("button",{className:"mb-2 btn btn-secondary"},"No occurrences");var t}}]},[]);return l.a.createElement("div",null,l.a.createElement("h2",null,"Employee References"),l.a.createElement("div",{className:"filesTable"},l.a.createElement(G,{columns:e,data:te,filterBy:"name"})))},le=function(e){var t=Object(s.g)();return Object(n.useEffect)(function(){console.log("PATHNAME"),console.log(t.pathname),console.log("SEARCH"),console.log(t.search),console.log("INFO"),console.log(t.state.detail)},[t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{to:{pathname:"/"}}," Logout "),l.a.createElement(O,{numCol:"4",numRow:"justify-content-center align-items-center h-50"},l.a.createElement(M,{props:t.state.detail})),l.a.createElement(O,{numCol:"8",numRow:"justify-content-center align-items-center h-50"},l.a.createElement(ee,null)),l.a.createElement(O,{numCol:"8",numRow:"justify-content-center align-items-center h-50"},l.a.createElement(ne,null)),l.a.createElement("hr",null))};function re(){return l.a.createElement(s.d,null,l.a.createElement(m,{path:"/",exact:!0,component:j}),l.a.createElement(m,{path:"/signup",component:S}),l.a.createElement(m,{path:"/files",component:le}),l.a.createElement(m,{component:j}))}a(232);var oe=function(){return l.a.createElement(N,null,l.a.createElement(s.c,{history:i},l.a.createElement(re,null)))};o.a.render(l.a.createElement(oe,null),document.getElementById("root"))},89:function(e,t,a){},93:function(e,t){}},[[155,1,2]]]);
//# sourceMappingURL=main.c6ff7b1d.chunk.js.map
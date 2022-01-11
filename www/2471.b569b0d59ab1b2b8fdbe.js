(self.webpackChunkKaeser_Ventas=self.webpackChunkKaeser_Ventas||[]).push([[2471],{1855:(i,t,o)=>{"use strict";function e(i,t,o,e){return new(o||(o=Promise))(function(n,r){function s(i){try{l(e.next(i))}catch(t){r(t)}}function d(i){try{l(e.throw(i))}catch(t){r(t)}}function l(i){var t;i.done?n(i.value):(t=i.value,t instanceof o?t:new o(function(i){i(t)})).then(s,d)}l((e=e.apply(i,t||[])).next())})}o.d(t,{mG:()=>e})},7242:(i,t,o)=>{"use strict";o.d(t,{r:()=>d});var e=o(1855),n=o(7272),r=o(2604),s=o(4683);let d=(()=>{class i{constructor(i,t){this.storage=i,this.toastController=t,this.URL="https://localhost/kaeserVentas/api/req/"}getDBItem(i){return(0,e.mG)(this,void 0,void 0,function*(){this.storage.create();var t=yield this.storage.get(i);return null==t?[]:t})}setDBItem(i,t){return(0,e.mG)(this,void 0,void 0,function*(){yield this.storage.create(),yield this.storage.set(i,t)})}cleanDBItem(i){return(0,e.mG)(this,void 0,void 0,function*(){yield this.storage.create(),yield this.storage.remove(i)})}showToast(i,t){return(0,e.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({color:"dark",message:i,header:t,position:"top",duration:1500})).present()})}login(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParamsWithOutAData(this.URL+"login/login.php",i)})}getInfoUser(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParams(this.URL+"login/validate_token.php",i)})}getTiposEquipo(){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitud(this.URL+"TiposEquipo/read.php")})}getTipoEquipoById(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParamsReturnOne(this.URL+"TiposEquipo/readById.php",i)})}getModelosByTipoEquipo(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParams(this.URL+"Modelo/readByIdTipoEquipo.php",i)})}readCotizacionAll(){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitud(this.URL+"Cotizaciones/read.php")})}readCotizacion(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParams(this.URL+"Cotizaciones/readByEstado.php",i)})}saveCotizacion(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParamsWithOutAData(this.URL+"Cotizaciones/create.php",i)})}modificarCotizacion(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParams(this.URL+"Cotizaciones/updateById.php",i)})}modificarUsuario(i){return(0,e.mG)(this,void 0,void 0,function*(){var t=yield this.getDBItem("JWT"),o=Object.assign(Object.assign({},i),{jwt:t});return yield this.resolverSolicitudParams(this.URL+"user/updateUser.php",o)})}updatePassword(i){return(0,e.mG)(this,void 0,void 0,function*(){var t=yield this.getDBItem("JWT"),o=Object.assign(Object.assign({},i),{jwt:t});return yield this.resolverSolicitudParamsWithOutAData(this.URL+"user/updateUserPassword.php",o)})}loadFile(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudSinJSON(this.URL+"upload.php",i)})}getFile(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParams(this.URL+"verificar.php",i)})}createPDF(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParamsWithOutParse(this.URL+"pdf/pdfCreation.php",i)})}sendMail(i){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.resolverSolicitudParams(this.URL+"email/"+i.url,i)})}resolverSolicitud(i){return(0,e.mG)(this,void 0,void 0,function*(){var t=yield fetch(i),o=yield t.json();return 1==o.status?o.data:[]})}resolverSolicitudParams(i,t){return(0,e.mG)(this,void 0,void 0,function*(){var o=yield fetch(i,{method:"POST",body:JSON.stringify(t)});return(yield o.json()).data})}resolverSolicitudParamsReturnOne(i,t){return(0,e.mG)(this,void 0,void 0,function*(){var o=yield fetch(i,{method:"POST",body:JSON.stringify(t)});return(yield o.json()).data[0]})}resolverSolicitudParamsWithOutAData(i,t){return(0,e.mG)(this,void 0,void 0,function*(){var o=yield fetch(i,{method:"POST",body:JSON.stringify(t)});return yield o.json()})}resolverSolicitudSinJSON(i,t){return(0,e.mG)(this,void 0,void 0,function*(){var o=yield fetch(i,{method:"POST",body:t});return(yield o.json()).data})}resolverSolicitudParamsWithOutParse(i,t){return(0,e.mG)(this,void 0,void 0,function*(){var o=yield fetch(i,{method:"POST",body:JSON.stringify(t)}),e=yield o.text();window.open("").document.write("<iframe width='100%' height='100%' src='"+e+"'></iframe>")})}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(r.K),n.LFG(s.yF))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},2471:(i,t,o)=>{"use strict";o.d(t,{l:()=>c});var e=o(1855),n=o(7272),r=o(4683),s=o(7242),d=o(6274);function l(i,t){if(1&i){const i=n.EpF();n.TgZ(0,"ion-grid",13),n.TgZ(1,"ion-row"),n.TgZ(2,"ion-col",14),n.TgZ(3,"ion-item",15),n.TgZ(4,"ion-label",16),n._uU(5,"CFM:"),n.qZA(),n.TgZ(6,"ion-input",17),n.NdJ("input",function(t){return n.CHM(i),n.oxw().filter(t.target)}),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"ion-col",14),n.TgZ(8,"ion-item",15),n.TgZ(9,"ion-label",16),n._uU(10,"PSI:"),n.qZA(),n.TgZ(11,"ion-select",18),n.NdJ("ionChange",function(t){return n.CHM(i),n.oxw().filter(t.target)}),n.TgZ(12,"ion-select-option",19),n._uU(13,"Todos"),n.qZA(),n.TgZ(14,"ion-select-option",20),n._uU(15,"87"),n.qZA(),n.TgZ(16,"ion-select-option",21),n._uU(17,"125"),n.qZA(),n.TgZ(18,"ion-select-option",22),n._uU(19,"130"),n.qZA(),n.TgZ(20,"ion-select-option",23),n._uU(21,"160"),n.qZA(),n.TgZ(22,"ion-select-option",24),n._uU(23,"174"),n.qZA(),n.TgZ(24,"ion-select-option",25),n._uU(25,"217"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(26,"ion-col",14),n.TgZ(27,"ion-item",15),n.TgZ(28,"ion-label",16),n._uU(29,"VOLTAJE:"),n.qZA(),n.TgZ(30,"ion-select",26),n.NdJ("ionChange",function(t){return n.CHM(i),n.oxw().filter(t.target)}),n.TgZ(31,"ion-select-option",19),n._uU(32,"Todos"),n.qZA(),n.TgZ(33,"ion-select-option",27),n._uU(34,"Trivoltaje (208/240/460 VAC 60HZ) "),n.qZA(),n.TgZ(35,"ion-select-option",28),n._uU(36,"240 VAC 60HZ"),n.qZA(),n.TgZ(37,"ion-select-option",29),n._uU(38,"460 VAC 60HZ"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}}function a(i,t){if(1&i&&(n.TgZ(0,"ion-row"),n.TgZ(1,"ion-col",39),n.TgZ(2,"strong",40),n._uU(3," CFM: "),n.qZA(),n.TgZ(4,"strong"),n._uU(5),n.qZA(),n.qZA(),n.TgZ(6,"ion-col",14),n.TgZ(7,"strong",40),n._uU(8," PSI: "),n.qZA(),n.TgZ(9,"strong"),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"ion-col",41),n.TgZ(12,"strong",40),n._uU(13," VOLTAJE: "),n.qZA(),n.TgZ(14,"strong"),n._uU(15),n.qZA(),n.qZA(),n.qZA()),2&i){const i=n.oxw().$implicit;n.xp6(5),n.hij(" ",i.CFM," "),n.xp6(5),n.hij(" ",i.PSI," "),n.xp6(5),n.hij(" ",i.VOLTAJE," ")}}function u(i,t){if(1&i){const i=n.EpF();n.TgZ(0,"ion-item",30),n.TgZ(1,"ion-grid"),n.TgZ(2,"ion-row"),n.TgZ(3,"ion-col",14),n.TgZ(4,"strong",31),n._uU(5),n.qZA(),n.qZA(),n.qZA(),n.YNc(6,a,16,3,"ion-row",32),n.TgZ(7,"ion-row"),n.TgZ(8,"ion-col",33),n.TgZ(9,"ion-button",34),n.NdJ("click",function(){const t=n.CHM(i).$implicit;return n.oxw().restar(t)}),n._uU(10,"- "),n.qZA(),n.qZA(),n.TgZ(11,"ion-col",35),n.TgZ(12,"h1",36),n._uU(13),n.qZA(),n.qZA(),n.TgZ(14,"ion-col",37),n.TgZ(15,"ion-button",38),n.NdJ("click",function(){const t=n.CHM(i).$implicit;return n.oxw().sumar(t)}),n._uU(16,"+ "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&i){const i=t.$implicit,o=n.oxw();n.xp6(5),n.hij(" ",i.modelo," "),n.xp6(1),n.Q6J("ngIf",1==o.id),n.xp6(7),n.hij(" ",i.cantidad,"")}}let c=(()=>{class i{constructor(i,t){this.modalCtrl=i,this.api=t,this.tipoEquipo={tipo:""},this.modelos=[],this.modelosAll=[],this.modelosAgregados=[]}ngOnInit(){return(0,e.mG)(this,void 0,void 0,function*(){this.modelos=yield this.api.getModelosByTipoEquipo({idTipoEquipo:this.id}),this.modelos=this.modelos.map(i=>Object.assign(Object.assign({},i),{cantidad:0})),this.modelosAll=this.modelos.filter(i=>i.modelo.includes("")),this.tipoEquipo=yield this.api.getTipoEquipoById({id:this.id}),this.modelosAgregados=yield this.api.getDBItem("modelos"),this.modelosAgregados.forEach(i=>{i.idTipoEquipo==this.id&&this.upsert(this.modelos,i)})})}dismissModal(){return(0,e.mG)(this,void 0,void 0,function*(){this.api.setDBItem("modelos",this.modelosAgregados),yield this.modalCtrl.dismiss()})}filter(i){"BUSQUEDA"==i.name&&(this.modelos=this.modelosAll.filter(t=>t.modelo.includes(i.value))),"CFM"==i.name&&(this.modelos=this.modelosAll.filter(t=>t.CFM.includes(i.value))),"PSI"==i.name&&(this.modelos=this.modelosAll.filter(t=>t.PSI.includes(i.value))),"VOLTAJE"==i.name&&(this.modelos=this.modelosAll.filter(t=>t.VOLTAJE.includes(i.value)))}sumar(i){i.cantidad++,this.upsert(this.modelosAgregados,i)}restar(i){0!=i.cantidad&&(i.cantidad--,this.upsert(this.modelosAgregados,i))}upsert(i,t){const o=i.findIndex(i=>i.id===t.id);0==t.cantidad?i.splice(o,1):o>-1?i[o]=t:i.push(t)}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(r.IN),n.Y36(s.r))},i.\u0275cmp=n.Xpm({type:i,selectors:[["ng-component"]],decls:18,vars:3,consts:[[2,"--background","rgba(255, 255, 255, 0.85)","border-bottom","#4C7176 solid","border-width","3px","border-top","solid 5px #4C7176","--min-height","35px"],["slot","end"],[3,"click"],[2,"--min-height","35px","--background","rgba(255, 255, 255, 0.85)","border-bottom","#4C7176 solid","border-width","3px","border-top","solid 5px #4C7176"],[2,"text-align","-webkit-center"],[1,"roundedInput",2,"width","90%","--min-height","16px"],["name","BUSQUEDA","clearInput","true","type","text","placeholder","Busqueda",1,"roundedInput",3,"input"],["style","width:90%;",4,"ngIf"],["fullscreen",""],[2,"--background","#E6E7E7"],[2,"text-align","justify","line-height","1","font-size","14px"],[2,"margin-top","20px","--background","#E6E7E7","color","#59595C","border","solid #4C7176 1px"],["style","--background: #E6E7E7; color:#59595C; border-bottom: dashed #4C7176 1px;",4,"ngFor","ngForOf"],[2,"width","90%"],[2,"text-align","center"],[1,"roundedInput"],["position","floating"],["name","CFM","clearInput","true",3,"input"],["name","PSI","clearInput","true",3,"ionChange"],["value",""],["value","87"],["value","125"],["value","130"],["value","160"],["value","174"],["value","217"],["name","VOLTAJE","clearInput","true",3,"ionChange"],["value","Trivoltaje (208/240/460 VAC 60HZ)"],["value"," 240 VAC 60HZ"],["value"," 460 VAC 60HZ"],[2,"--background","#E6E7E7","color","#59595C","border-bottom","dashed #4C7176 1px"],[2,"color","#4C7176","font-size","20px"],[4,"ngIf"],["size-xs","4",2,"text-align","right"],[2,"--border-radius","25px","--padding","0 0px","--background","#59595C","font-size","15px",3,"click"],["size-xs","4",2,"text-align","center"],[2,"--border-radius","25px","--padding","0 25px","--background","#59595C","font-size","20px"],["size-xs","4",2,"text-align","left"],[2,"--border-radius","25px","--padding","0 0px","--background","#4C7176","font-size","15px",3,"click"],[2,"text-align","right"],[2,"color","#4C7176"],[2,"text-align","left"]],template:function(i,t){1&i&&(n.TgZ(0,"ion-header"),n.TgZ(1,"ion-toolbar",0),n.TgZ(2,"ion-title"),n._uU(3),n.qZA(),n.TgZ(4,"ion-buttons",1),n.TgZ(5,"ion-button",2),n.NdJ("click",function(){return t.dismissModal()}),n._uU(6,"X"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"ion-toolbar",3),n.TgZ(8,"div",4),n.TgZ(9,"ion-item",5),n.TgZ(10,"ion-input",6),n.NdJ("input",function(i){return t.filter(i.target)}),n.qZA(),n.qZA(),n.qZA(),n.TgZ(11,"div",4),n.YNc(12,l,39,0,"ion-grid",7),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"ion-content",8),n.TgZ(14,"ion-card",9),n.TgZ(15,"ion-card-content",10),n.TgZ(16,"div",11),n.YNc(17,u,17,3,"ion-item",12),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&i&&(n.xp6(3),n.Oqu(t.tipoEquipo.tipo.toUpperCase()),n.xp6(9),n.Q6J("ngIf",1==t.id),n.xp6(5),n.Q6J("ngForOf",t.modelos))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.YG,r.Ie,r.pK,r.j9,d.O5,r.W2,r.PM,r.FN,d.sg,r.jY,r.Nd,r.wI,r.Q$,r.t9,r.QI,r.n0],styles:["ion-content[_ngcontent-%COMP%]{--background:url(/assets/img/login/background.png) no-repeat center center/cover}h1[_ngcontent-%COMP%]{font-size:larger}.roundedInput[_ngcontent-%COMP%]{--border-color:var(--ion-color-medium-shade);margin-top:5px;--border-radius:25px;--border-width:2px;--box-shadow:0px gray;--color:#000;--highlight-height:0;--background:#0000}ion-col[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%]{padding:0}ion-item[_ngcontent-%COMP%]{margin:3px}ion-card-content[_ngcontent-%COMP%]{padding-top:3px}.item-native[_ngcontent-%COMP%]{min-height:25px!important;height:25px!important}"]}),i})()}}]);
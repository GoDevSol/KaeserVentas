(self.webpackChunkKaeser_Ventas=self.webpackChunkKaeser_Ventas||[]).push([[4164],{4164:(o,n,e)=>{"use strict";e.r(n),e.d(n,{PostVentaPageModule:()=>v});var t=e(6274),i=e(4988),r=e(4683),a=e(4337),c=e(1855),s=e(7272),l=e(7242);function d(o,n){if(1&o&&(s.TgZ(0,"p",37),s._uU(1),s.qZA()),2&o){const o=n.$implicit;s.xp6(1),s.hij(" - ",o.modelo," ")}}function u(o,n){1&o&&s._UZ(0,"ion-icon",38)}function g(o,n){1&o&&s._UZ(0,"ion-icon",39)}function h(o,n){1&o&&s._UZ(0,"ion-icon",40)}function p(o,n){1&o&&(s.TgZ(0,"h6",41),s._uU(1,"POST VENTA"),s.qZA())}function Z(o,n){1&o&&(s.TgZ(0,"h6",41),s._uU(1,"PENDIENTE"),s.qZA())}function f(o,n){1&o&&(s.TgZ(0,"h6",41),s._uU(1,"EJECUTADA"),s.qZA())}function m(o,n){if(1&o){const o=s.EpF();s.TgZ(0,"ion-item",28),s.TgZ(1,"ion-grid"),s.TgZ(2,"ion-row",29),s.NdJ("click",function(){const n=s.CHM(o).$implicit;return s.oxw().goToPostVenta(n.estado,n)}),s.TgZ(3,"ion-col",13),s.TgZ(4,"strong",4),s._uU(5," Cotizaci\xf2n "),s.qZA(),s.TgZ(6,"h6",30),s._uU(7),s.YNc(8,d,2,1,"p",31),s._UZ(9,"p"),s.qZA(),s.qZA(),s.TgZ(10,"ion-col",32),s.NdJ("click",function(){const n=s.CHM(o).$implicit;return s.oxw().goToPostVenta(n.estado,n)}),s.YNc(11,u,1,0,"ion-icon",33),s.YNc(12,g,1,0,"ion-icon",34),s.YNc(13,h,1,0,"ion-icon",35),s.YNc(14,p,2,0,"h6",36),s.YNc(15,Z,2,0,"h6",36),s.YNc(16,f,2,0,"h6",36),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&o){const o=n.$implicit;s.xp6(7),s.AsE("",o.datosForm.idCliente," - solicitud de cotizaci\xf3n - ",o.datosForm.nombreCliente," - "),s.xp6(1),s.Q6J("ngForOf",o.datosModelos),s.xp6(3),s.Q6J("ngIf",1==o.estado),s.xp6(1),s.Q6J("ngIf",2==o.estado),s.xp6(1),s.Q6J("ngIf",3==o.estado),s.xp6(1),s.Q6J("ngIf",1==o.estado),s.xp6(1),s.Q6J("ngIf",2==o.estado),s.xp6(1),s.Q6J("ngIf",3==o.estado)}}const T=[{path:"",component:(()=>{class o{constructor(o,n){this.navCtrl=o,this.api=n,this.modelos=[],this.modelosAll=[],this.estado=0}ngOnInit(){return(0,c.mG)(this,void 0,void 0,function*(){this.modelos=yield this.api.readCotizacionAll(),this.modelosAll=yield this.modelos.map(o=>(o.datosForm=JSON.parse(o.datosForm.replaceAll("&quot;",'"')),o.datosModelos=JSON.parse(o.datosModelos.replaceAll("&quot;",'"')),o))})}goTo(o){return(0,c.mG)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("menu/"+o)})}createPDF(){return(0,c.mG)(this,void 0,void 0,function*(){var o=-1;null!=this.fecha&&(isNaN(this.fecha.valueOf())||(o=this.fecha)),this.api.createPDF({modelos:this.modelos,fecha:o,estado:this.estado})})}createPDFDetalle(){return(0,c.mG)(this,void 0,void 0,function*(){var o=-1;null!=this.fecha&&(isNaN(this.fecha.valueOf())||(o=this.fecha)),this.api.createPDFDetalle({modelos:this.modelos,fecha:o,estado:this.estado})})}onChange(o){"ESTADO"==o.name?this.estado=o.value:"DATE"==o.name&&(this.fecha=new Date(o.value.replace(/-/g,"/"))),this.modelos=this.modelosAll.filter(o=>{var n=!0;if(null!=this.fecha&&!isNaN(this.fecha.valueOf())){var e=new Date(o.date);(e=e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate())!=this.fecha.getFullYear()+"/"+(this.fecha.getMonth()+1)+"/"+this.fecha.getDate()&&(n=!1)}return""==this.estado?n:o.estado.includes(this.estado)})}goToPostVenta(o,n){return(0,c.mG)(this,void 0,void 0,function*(){yield this.api.setDBItem("return",!0),yield this.api.setDBItem("postVenta",n),1==o&&this.navCtrl.navigateForward("menu/postVentaView"),2==o&&this.navCtrl.navigateForward("menu/solicitudesView"),3==o&&this.navCtrl.navigateForward("menu/ejecutado-view"),console.log(o),console.log(n)})}}return o.\u0275fac=function(n){return new(n||o)(s.Y36(r.SH),s.Y36(l.r))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-postVenta"]],decls:46,vars:3,consts:[[3,"translucent"],[2,"--background","none","border-bottom","#4C7176 solid","border-width","3px","border-top","solid 5px #4C7176"],["slot","start","src","assets/img/principal/logo.png",2,"height","50px","margin","5px"],["slot","end"],[2,"color","#4C7176"],[3,"fullscreen"],[2,"--background","none","border","none"],["src","assets/img/back.png",2,"height","25px","display","inline","width","20px","vertical-align","super",3,"click"],[2,"--border-radius","25px","--padding","0 25px","--background","#4C7176","height","25px","vertical-align","super",3,"click"],[2,"--background","#E6E7E7"],[2,"text-align","justify","line-height","1","font-size","14px"],[2,"background","black"],[2,"padding","0px"],[2,"text-align","left"],[1,"roundedInput"],["clearInput","true","name","ESTADO",3,"ionChange"],["value",""],["value","1"],["value","2"],["value","3"],[2,"text-align","center"],["clearInput"," true","type","date","placeholder","Fecha de Solicitud","clearInput","true","name","DATE",3,"ionChange"],["style","--background: #E6E7E7; color:#59595C; border-bottom: dashed #4C7176 1px;",4,"ngFor","ngForOf"],[2,"text-align","-webkit-center"],[2,"--border-radius","25px","--padding","0 25px","--background","#4C7176",3,"click"],["text-center","","no-border","","transparent","",2,"background","white"],[2,"text-align","-webkit-center","border-top","2px solid #4C7176"],["src","assets/img/footer/footer.png",2,"width","225px"],[2,"--background","#E6E7E7","color","#59595C","border-bottom","dashed #4C7176 1px"],[2,"padding","0px",3,"click"],[2,"margin","0px"],["style","display: inline;",4,"ngFor","ngForOf"],["size","3",2,"text-align","center",3,"click"],["name","document-outline",4,"ngIf"],["name","timer-outline",4,"ngIf"],["name","checkmark-done-outline",4,"ngIf"],["style","margin: 0; font-size: 13px;",4,"ngIf"],[2,"display","inline"],["name","document-outline"],["name","timer-outline"],["name","checkmark-done-outline"],[2,"margin","0","font-size","13px"]],template:function(o,n){1&o&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar",1),s._UZ(2,"ion-img",2),s.TgZ(3,"ion-buttons",3),s._UZ(4,"ion-menu-button",4),s.qZA(),s.qZA(),s.qZA(),s.TgZ(5,"ion-content",5),s.TgZ(6,"ion-toolbar",6),s.TgZ(7,"div"),s.TgZ(8,"img",7),s.NdJ("click",function(){return n.goTo("historialMenu")}),s.qZA(),s.TgZ(9,"ion-button",8),s.NdJ("click",function(){return n.goTo("historialMenu")}),s._uU(10," SOLICITUDES"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(11,"ion-card",9),s.TgZ(12,"ion-card-content",10),s._uU(13," LISTADO DE SOLICITUDES "),s.qZA(),s._UZ(14,"hr",11),s.TgZ(15,"ion-grid"),s.TgZ(16,"ion-row",12),s.TgZ(17,"ion-col",13),s.TgZ(18,"ion-item",14),s.TgZ(19,"ion-label"),s._uU(20,"ESTADO"),s.qZA(),s.TgZ(21,"ion-select",15),s.NdJ("ionChange",function(o){return n.onChange(o.target)}),s.TgZ(22,"ion-select-option",16),s._uU(23,"TODOS"),s.qZA(),s.TgZ(24,"ion-select-option",17),s._uU(25,"POST VENTA"),s.qZA(),s.TgZ(26,"ion-select-option",18),s._uU(27,"PENDIENTE"),s.qZA(),s.TgZ(28,"ion-select-option",19),s._uU(29,"EJECUTADA"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(30,"ion-col",20),s.TgZ(31,"ion-item",14),s.TgZ(32,"ion-input",21),s.NdJ("ionChange",function(o){return n.onChange(o.target)}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(33,"hr",11),s.YNc(34,m,17,9,"ion-item",22),s.TgZ(35,"div",23),s.TgZ(36,"ion-button",24),s.NdJ("click",function(){return n.createPDF()}),s._uU(37," CREAR REPORTE ESTADOS"),s.qZA(),s.TgZ(38,"ion-button",24),s.NdJ("click",function(){return n.createPDFDetalle()}),s._uU(39," CREAR REPORTE DETALLE"),s.qZA(),s.qZA(),s.TgZ(40,"div",23),s.TgZ(41,"ion-button",24),s.NdJ("click",function(){return n.goTo("historialMenu")}),s._uU(42," REGRESAR"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(43,"ion-footer",25),s.TgZ(44,"div",26),s._UZ(45,"ion-img",27),s.qZA(),s.qZA()),2&o&&(s.Q6J("translucent",!0),s.xp6(5),s.Q6J("fullscreen",!0),s.xp6(29),s.Q6J("ngForOf",n.modelos))},directives:[r.Gu,r.sr,r.Xz,r.Sm,r.fG,r.W2,r.YG,r.PM,r.FN,r.jY,r.Nd,r.wI,r.Ie,r.Q$,r.t9,r.QI,r.n0,r.pK,r.j9,t.sg,r.fr,t.O5,r.gu],styles:["ion-content[_ngcontent-%COMP%]{--background:url(/assets/img/login/background.png) no-repeat center center/cover}.roundedInput[_ngcontent-%COMP%]{--border-color:var(--ion-color-medium-shade);--background:#e6e7e7;margin-top:5px;padding:0 15px;font-size:14px;--border-radius:15px;--border-width:1px;--box-shadow:5px #fff;--color:#000;--highlight-height:0}.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}ion-icon[_ngcontent-%COMP%]{font-size:35px}"]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[a.Bz.forChild(T)],a.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[t.ez,i.u5,i.UX,r.Pc,A]]}),o})()}}]);
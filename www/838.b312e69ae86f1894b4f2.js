(self.webpackChunkKaeser_Ventas=self.webpackChunkKaeser_Ventas||[]).push([[838],{838:(o,t,n)=>{"use strict";n.r(t),n.d(t,{PostVentaPageModule:()=>h});var e=n(6274),i=n(4988),r=n(4683),s=n(4337),d=n(1855),a=n(7272),c=n(7242);function l(o,t){if(1&o&&(a.TgZ(0,"p",26),a._uU(1),a.qZA()),2&o){const o=t.$implicit;a.xp6(1),a.hij(" - ",o.modelo," ")}}function u(o,t){if(1&o){const o=a.EpF();a.TgZ(0,"ion-item",18),a.TgZ(1,"ion-grid"),a.TgZ(2,"ion-row",19),a.TgZ(3,"ion-col",20),a.TgZ(4,"strong",4),a._uU(5," Cotizaci\xf2n "),a.qZA(),a.TgZ(6,"h6",21),a._uU(7),a.YNc(8,l,2,1,"p",22),a._UZ(9,"p"),a.qZA(),a.qZA(),a.TgZ(10,"ion-col",23),a.TgZ(11,"ion-button",24),a.NdJ("click",function(){const t=a.CHM(o).$implicit;return a.oxw().goToPostVenta("postVentaView",t)}),a._uU(12," Procesar"),a.qZA(),a.TgZ(13,"div",25),a.TgZ(14,"ion-button",24),a.NdJ("click",function(){const t=a.CHM(o).$implicit;return a.oxw().ejecutarCotizacion("postVentaView",t)}),a._uU(15," Ejecutar en C4C"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&o){const o=t.$implicit,n=a.oxw();a.xp6(7),a.AsE("",o.datosForm.idCliente," - solicitud de cotizaci\xf3n - ",o.datosForm.nombreCliente," - "),a.xp6(1),a.Q6J("ngForOf",o.datosModelos),a.xp6(3),a.Q6J("hidden",1!=n.user.rol),a.xp6(2),a.Q6J("hidden",1==o.estadoC4C),a.xp6(1),a.Q6J("hidden",1==n.user.rol&&1!=o.estadoC4C)}}const g=[{path:"",component:(()=>{class o{constructor(o,t){this.navCtrl=o,this.api=t,this.modelos=[],this.user={}}ngOnInit(){return(0,d.mG)(this,void 0,void 0,function*(){const o=yield this.api.getDBItem("User");this.user=o,this.modelos=yield this.api.readCotizacion({estado:1}),this.modelos=yield this.modelos.map(o=>(o.datosForm=JSON.parse(o.datosForm.replaceAll("&quot;",'"')),o.datosModelos=JSON.parse(o.datosModelos.replaceAll("&quot;",'"')),o))})}goTo(o){return(0,d.mG)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("menu/"+o)})}goToPostVenta(o,t){return(0,d.mG)(this,void 0,void 0,function*(){console.log(t),yield this.api.setDBItem("postVenta",t),yield this.api.setDBItem("ejecutar",!1),this.navCtrl.navigateForward("menu/"+o)})}ejecutarCotizacion(o,t){return(0,d.mG)(this,void 0,void 0,function*(){console.log(t),yield this.api.setDBItem("postVenta",t),yield this.api.setDBItem("ejecutar",!0),this.navCtrl.navigateForward("menu/"+o)})}}return o.\u0275fac=function(t){return new(t||o)(a.Y36(r.SH),a.Y36(c.r))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-postVenta"]],decls:22,vars:3,consts:[[3,"translucent"],[2,"--background","none","border-bottom","#4C7176 solid","border-width","3px","border-top","solid 5px #4C7176"],["slot","start","src","assets/img/principal/logo.png",2,"height","50px","margin","5px"],["slot","end"],[2,"color","#4C7176"],[3,"fullscreen"],[2,"--background","none","border","none"],["src","assets/img/back.png",2,"height","25px","display","inline","width","20px","vertical-align","super",3,"click"],[2,"--border-radius","25px","--padding","0 25px","--background","#4C7176","height","25px","vertical-align","super",3,"click"],[2,"--background","#E6E7E7"],[2,"text-align","justify","line-height","1","font-size","14px"],[2,"background","black"],["style","--background: #E6E7E7; color:#59595C; border-bottom: dashed #4C7176 1px;",4,"ngFor","ngForOf"],[2,"text-align","-webkit-center"],[2,"--border-radius","25px","--padding","0 25px","--background","#4C7176",3,"click"],["text-center","","no-border","","transparent","",2,"background","white"],[2,"text-align","-webkit-center","border-top","2px solid #4C7176"],["src","assets/img/footer/footer.png",2,"width","225px"],[2,"--background","#E6E7E7","color","#59595C","border-bottom","dashed #4C7176 1px"],[2,"padding","0px"],[2,"text-align","left"],[2,"margin","0px"],["style","display: inline;",4,"ngFor","ngForOf"],["size","3",2,"text-align","center"],[2,"--border-radius","25px","--padding","0 20px","--background","#4C7176","font-size","12px",3,"hidden","click"],[3,"hidden"],[2,"display","inline"]],template:function(o,t){1&o&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar",1),a._UZ(2,"ion-img",2),a.TgZ(3,"ion-buttons",3),a._UZ(4,"ion-menu-button",4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(5,"ion-content",5),a.TgZ(6,"ion-toolbar",6),a.TgZ(7,"div"),a.TgZ(8,"img",7),a.NdJ("click",function(){return t.goTo("register")}),a.qZA(),a.TgZ(9,"ion-button",8),a.NdJ("click",function(){return t.goTo("register")}),a._uU(10," POST VENTA"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"ion-card",9),a.TgZ(12,"ion-card-content",10),a._uU(13," COTIZACIONES A PROCESAR "),a.qZA(),a._UZ(14,"hr",11),a.YNc(15,u,16,6,"ion-item",12),a.TgZ(16,"div",13),a.TgZ(17,"ion-button",14),a.NdJ("click",function(){return t.goTo("register")}),a._uU(18," REGRESAR"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(19,"ion-footer",15),a.TgZ(20,"div",16),a._UZ(21,"ion-img",17),a.qZA(),a.qZA()),2&o&&(a.Q6J("translucent",!0),a.xp6(5),a.Q6J("fullscreen",!0),a.xp6(10),a.Q6J("ngForOf",t.modelos))},directives:[r.Gu,r.sr,r.Xz,r.Sm,r.fG,r.W2,r.YG,r.PM,r.FN,e.sg,r.fr,r.Ie,r.jY,r.Nd,r.wI],styles:["ion-content[_ngcontent-%COMP%]{--background:url(/assets/img/login/background.png) no-repeat center center/cover}.roundedInput[_ngcontent-%COMP%]{--border-color:var(--ion-color-medium-shade);--background:#e6e7e7;margin-top:5px;padding:0 15px;font-size:14px;--border-radius:15px;--border-width:1px;--box-shadow:5px #fff;--color:#000;--highlight-height:0}.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}"]}),o})()}];let p=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[e.ez,i.u5,i.UX,r.Pc,p]]}),o})()}}]);
(self.webpackChunkKaeser_Ventas=self.webpackChunkKaeser_Ventas||[]).push([[1617],{1617:(e,o,t)=>{"use strict";t.r(o),t.d(o,{AdaPageModule:()=>p});var n=t(6274),r=t(4988),i=t(4683),c=t(4337),a=t(1855),d=t(7272),u=t(7242);const s=[{path:"",component:(()=>{class e{constructor(e,o,t){this.formBuilder=e,this.navCtrl=o,this.api=t,this.formRegister=this.formBuilder.group({oportunidad:new r.NI("",r.kI.compose([r.kI.required])),oferta:new r.NI("",r.kI.compose([r.kI.required])),idCliente:new r.NI("",r.kI.compose([r.kI.required])),nombreCliente:new r.NI("",r.kI.compose([r.kI.required])),direccion:new r.NI("",r.kI.compose([r.kI.required])),contacto:new r.NI("",r.kI.compose([r.kI.required])),condicionPago:new r.NI("",r.kI.compose([r.kI.required])),moneda:new r.NI("",r.kI.compose([r.kI.required])),porcentajeDescuento:new r.NI("",r.kI.compose([r.kI.required])),correoCliente:new r.NI("",r.kI.compose([r.kI.required]))})}ngOnInit(){return(0,a.mG)(this,void 0,void 0,function*(){var e=this.api.getDBItem("datosForm");this.formRegister.controls.oportunidad.setValue(e.oportunidad),this.formRegister.controls.oferta.setValue(e.oferta),this.formRegister.controls.idCliente.setValue(e.idCliente),this.formRegister.controls.nombreCliente.setValue(e.nombreCliente),this.formRegister.controls.direccion.setValue(e.direccion),this.formRegister.controls.contacto.setValue(e.contacto),this.formRegister.controls.condicionPago.setValue(e.condicionPago),this.formRegister.controls.moneda.setValue(e.moneda),this.formRegister.controls.porcentajeDescuento.setValue(e.porcentajeDescuento),this.formRegister.controls.correoCliente.setValue(e.correoCliente)})}goTo(e){return(0,a.mG)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("menu/"+e)})}goForward(e){return(0,a.mG)(this,void 0,void 0,function*(){this.api.setDBItem("datosForm",this.formRegister.value),this.navCtrl.navigateForward("menu/"+e)})}}return e.\u0275fac=function(o){return new(o||e)(d.Y36(r.qu),d.Y36(i.SH),d.Y36(u.r))},e.\u0275cmp=d.Xpm({type:e,selectors:[["ada"]],decls:46,vars:3,consts:[[3,"translucent"],[2,"--background","none","border-bottom","#4C7176 solid","border-width","3px","border-top","solid 5px #4C7176"],["slot","start","src","assets/img/principal/logo.png",2,"height","50px","margin","5px"],["slot","end"],[2,"color","#4C7176"],[3,"fullscreen"],[2,"--background","none","border","none"],["src","assets/img/back.png",2,"height","25px","display","inline","width","20px","vertical-align","super",3,"click"],[2,"--border-radius","25px","--padding","0 25px","--background","#4C7176","height","25px","vertical-align","super",3,"click"],[2,"--background","#E6E7E7"],[2,"text-align","justify","line-height","1","font-size","14px"],[2,"text-align","-webkit-center"],[1,"rounded"],[3,"formGroup"],[1,"roundedInput"],["clearInput","true","formControlName","oportunidad","type","number","clearInput","true","placeholder","No. de oportunidad"],["clearInput","true","formControlName","oferta","type","number","placeholder","No. de oferta","clearInput","true"],["clearInput","true","formControlName","idCliente","type","number","placeholder","Id Cliente","clearInput","true"],["clearInput","true","formControlName","nombreCliente","type","name","name","name","placeholder","Nombre del cliente","clearInput","true"],["clearInput","true","formControlName","direccion","placeholder","Direcci\xf3n de entrega","clearInput","true"],["clearInput","true","formControlName","contacto","type","tel","name","tel","placeholder","Telefono Contacto","clearInput","true"],["clearInput","true","formControlName","condicionPago","placeholder","Condiciones de pago","clearInput","true"],["clearInput","true","formControlName","moneda","type","transaction-currency","name","transaction-currency","placeholder","Moneda","clearInput","true"],["clearInput","true","formControlName","porcentajeDescuento","placeholder","Porcentaje de descuento","clearInput","true"],["clearInput","true","formControlName","correoCliente","multiple","true","type","email","placeholder","Correo electr\xf3nico del cliente","clearInput","true"],["type","submit",2,"--border-radius","25px","--padding","0 25px","--background","#4C7176",3,"click"],["text-center","","no-border","","transparent","",2,"background","white"],[2,"text-align","-webkit-center","border-top","2px solid #4C7176"],["src","assets/img/footer/footer.png",2,"width","225px"]],template:function(e,o){1&e&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar",1),d._UZ(2,"ion-img",2),d.TgZ(3,"ion-buttons",3),d._UZ(4,"ion-menu-button",4),d.qZA(),d.qZA(),d.qZA(),d.TgZ(5,"ion-content",5),d.TgZ(6,"ion-toolbar",6),d.TgZ(7,"div"),d.TgZ(8,"img",7),d.NdJ("click",function(){return o.goTo("ada")}),d.qZA(),d.TgZ(9,"ion-button",8),d.NdJ("click",function(){return o.goTo("ada")}),d._uU(10," Soliictud de Estudios ADA"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(11,"ion-card",9),d.TgZ(12,"ion-card-content",10),d._uU(13," Ingresa tus datos y seleeciona los productos "),d.qZA(),d.TgZ(14,"div",11),d.TgZ(15,"div",12),d._uU(16," QUSEMF-030754-GUA-Pol\xedticas de Medici\xf3n y Estudios ADA "),d.qZA(),d.qZA(),d.TgZ(17,"form",13),d.TgZ(18,"ion-item",14),d._UZ(19,"ion-input",15),d.qZA(),d.TgZ(20,"ion-item",14),d._UZ(21,"ion-input",16),d.qZA(),d.TgZ(22,"ion-item",14),d._UZ(23,"ion-input",17),d.qZA(),d.TgZ(24,"ion-item",14),d._UZ(25,"ion-input",18),d.qZA(),d.TgZ(26,"ion-item",14),d._UZ(27,"ion-input",19),d.qZA(),d.TgZ(28,"ion-item",14),d._UZ(29,"ion-input",20),d.qZA(),d.TgZ(30,"ion-item",14),d._UZ(31,"ion-input",21),d.qZA(),d.TgZ(32,"ion-item",14),d._UZ(33,"ion-input",22),d.qZA(),d.TgZ(34,"ion-item",14),d._UZ(35,"ion-input",23),d.qZA(),d.TgZ(36,"ion-item",14),d._UZ(37,"ion-input",24),d.qZA(),d.TgZ(38,"div",11),d.TgZ(39,"ion-button",25),d.NdJ("click",function(){return o.goForward("ada")}),d._uU(40,"REGRESAR"),d.qZA(),d.TgZ(41,"ion-button",25),d.NdJ("click",function(){return o.goForward("ada-second")}),d._uU(42,"SIGUIENTE"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(43,"ion-footer",26),d.TgZ(44,"div",27),d._UZ(45,"ion-img",28),d.qZA(),d.qZA()),2&e&&(d.Q6J("translucent",!0),d.xp6(5),d.Q6J("fullscreen",!0),d.xp6(12),d.Q6J("formGroup",o.formRegister))},directives:[i.Gu,i.sr,i.Xz,i.Sm,i.fG,i.W2,i.YG,i.PM,i.FN,r._Y,r.JL,r.sg,i.Ie,i.pK,i.as,r.JJ,r.u,i.j9,i.fr],styles:["ion-content[_ngcontent-%COMP%]{--background:url(/assets/img/login/background.png) no-repeat center center/cover}.roundedInput[_ngcontent-%COMP%]{--border-color:var(--ion-color-medium-shade);--background:#e6e7e7;margin-top:5px;padding:0 15px;font-size:14px;--border-radius:15px;--border-width:1px;--box-shadow:5px #fff;--color:#000;--highlight-height:0}.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.rounded[_ngcontent-%COMP%]{width:90%;border-radius:25px;border:3px solid #4c7176}.rounded[_ngcontent-%COMP%], .rounded-text[_ngcontent-%COMP%]{margin-top:5px;padding:10px;box-shadow:0 gray;color:#000}.rounded-text[_ngcontent-%COMP%]{border-style:solid;width:95%;border-radius:10px;background-color:#a3a3a3;border-width:1px}.widhte[_ngcontent-%COMP%]{width:95%}"]}),e})()}];let l=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[c.Bz.forChild(s)],c.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[n.ez,r.u5,r.UX,i.Pc,l]]}),e})()}}]);
(self.webpackChunkKaeser_Ventas=self.webpackChunkKaeser_Ventas||[]).push([[4660],{4660:(o,n,e)=>{"use strict";e.r(n),e.d(n,{AdaPageModule:()=>l});var t=e(6274),r=e(4988),i=e(4683),d=e(4337),a=e(1855),c=e(7272),u=e(7242);const s=[{path:"",component:(()=>{class o{constructor(o,n,e){this.formBuilder=o,this.navCtrl=n,this.api=e,this.formRegister=this.formBuilder.group({oportunidad:new r.NI("",r.kI.compose([r.kI.required])),oferta:new r.NI("",r.kI.compose([r.kI.required])),idCliente:new r.NI("",r.kI.compose([r.kI.required]))})}ngOnInit(){return(0,a.mG)(this,void 0,void 0,function*(){var o=this.api.getDBItem("datosForm");this.formRegister.controls.oportunidad.setValue(o.oportunidad),this.formRegister.controls.oferta.setValue(o.oferta),this.formRegister.controls.idCliente.setValue(o.idCliente)})}goTo(o){return(0,a.mG)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("menu/"+o)})}goForward(o){return(0,a.mG)(this,void 0,void 0,function*(){this.api.setDBItem("datosForm",this.formRegister.value),this.navCtrl.navigateForward("menu/"+o)})}}return o.\u0275fac=function(n){return new(n||o)(c.Y36(r.qu),c.Y36(i.SH),c.Y36(u.r))},o.\u0275cmp=c.Xpm({type:o,selectors:[["ada"]],decls:60,vars:4,consts:[[3,"translucent"],[2,"--background","none","border-bottom","#4C7176 solid","border-width","3px","border-top","solid 5px #4C7176"],["slot","start","src","assets/img/principal/logo.png",2,"height","50px","margin","5px"],["slot","end"],[2,"color","#4C7176"],[3,"fullscreen"],[2,"--background","none","border","none"],["src","assets/img/back.png",2,"height","25px","display","inline","width","20px","vertical-align","super",3,"click"],[2,"--border-radius","25px","--padding","0 25px","--background","#4C7176","height","25px","vertical-align","super",3,"click"],[2,"--background","#E6E7E7"],[2,"text-align","-webkit-center"],[1,"rounded"],[3,"formGroup"],[2,"text-align","center"],[1,"roundedInput"],["position","floating"],["clearInput","true","formControlName","oportunidad","type","text","clearInput","true","placeholder","Ing. de Ventas"],["clearInput","true"],["value","Urgente"],["value","Normal"],["clearInput","true","formControlName","idCliente","type","date","placeholder","Fecha de Solicitud","clearInput","true"],[2,"text-align","-webkit-center","margin-top","30px"],["type","submit",2,"--border-radius","25px","--padding","0 25px","--background","#4C7176",3,"click"],["text-center","","no-border","","transparent","",2,"background","white"],[2,"text-align","-webkit-center","border-top","2px solid #4C7176"],["src","assets/img/footer/footer.png",2,"width","225px"]],template:function(o,n){1&o&&(c.TgZ(0,"ion-header",0),c.TgZ(1,"ion-toolbar",1),c._UZ(2,"ion-img",2),c.TgZ(3,"ion-buttons",3),c._UZ(4,"ion-menu-button",4),c.qZA(),c.qZA(),c.qZA(),c.TgZ(5,"ion-content",5),c.TgZ(6,"ion-toolbar",6),c.TgZ(7,"div"),c.TgZ(8,"img",7),c.NdJ("click",function(){return n.goTo("ada")}),c.qZA(),c.TgZ(9,"ion-button",8),c.NdJ("click",function(){return n.goTo("ada")}),c._uU(10," Solictud de Estudios ADA"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(11,"ion-card",9),c.TgZ(12,"div",10),c.TgZ(13,"div",11),c._uU(14," Informacion de ingeniero(a) de Ventas "),c.qZA(),c.qZA(),c.TgZ(15,"form",12),c.TgZ(16,"ion-grid"),c.TgZ(17,"ion-row"),c.TgZ(18,"ion-col",13),c.TgZ(19,"ion-item",14),c.TgZ(20,"ion-label",15),c._uU(21,"Nombre:"),c.qZA(),c._UZ(22,"ion-input",16),c.qZA(),c.qZA(),c.qZA(),c.TgZ(23,"ion-row"),c.TgZ(24,"ion-col",13),c.TgZ(25,"ion-item",14),c.TgZ(26,"ion-label",15),c._uU(27,"Prioridad:"),c.qZA(),c.TgZ(28,"ion-select",17),c.TgZ(29,"ion-select-option",18),c._uU(30,"Urgente"),c.qZA(),c.TgZ(31,"ion-select-option",19),c._uU(32,"Normal"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(33,"ion-col",13),c.TgZ(34,"ion-item",14),c.TgZ(35,"ion-label",15),c._uU(36,"Fecha:"),c.qZA(),c._UZ(37,"ion-input",20),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(38,"div",21),c.TgZ(39,"div",11),c._uU(40," Informaci\xf3n del Cliente "),c.qZA(),c.qZA(),c.TgZ(41,"form",12),c.TgZ(42,"ion-item",14),c._UZ(43,"ion-input",16),c.qZA(),c.TgZ(44,"ion-item",14),c._UZ(45,"ion-input",16),c.qZA(),c.TgZ(46,"ion-item",14),c._UZ(47,"ion-input",16),c.qZA(),c.TgZ(48,"ion-item",14),c._UZ(49,"ion-input",16),c.qZA(),c.TgZ(50,"ion-item",14),c._UZ(51,"ion-input",16),c.qZA(),c.qZA(),c.TgZ(52,"div",10),c.TgZ(53,"ion-button",22),c.NdJ("click",function(){return n.goForward("ada")}),c._uU(54,"REGRESAR"),c.qZA(),c.TgZ(55,"ion-button",22),c.NdJ("click",function(){return n.goForward("ada-second")}),c._uU(56,"SIGUIENTE"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(57,"ion-footer",23),c.TgZ(58,"div",24),c._UZ(59,"ion-img",25),c.qZA(),c.qZA()),2&o&&(c.Q6J("translucent",!0),c.xp6(5),c.Q6J("fullscreen",!0),c.xp6(10),c.Q6J("formGroup",n.formRegister),c.xp6(26),c.Q6J("formGroup",n.formRegister))},directives:[i.Gu,i.sr,i.Xz,i.Sm,i.fG,i.W2,i.YG,i.PM,r._Y,r.JL,r.sg,i.jY,i.Nd,i.wI,i.Ie,i.Q$,i.pK,i.j9,r.JJ,r.u,i.t9,i.QI,i.n0,i.fr],styles:["ion-content[_ngcontent-%COMP%]{--background:url(/assets/img/login/background.png) no-repeat center center/cover}.roundedInput[_ngcontent-%COMP%]{--border-color:var(--ion-color-medium-shade);--background:#e6e7e7;margin-top:5px;padding:0 15px;font-size:14px;--border-radius:15px;--border-width:1px;--box-shadow:5px #fff;--color:#000;--highlight-height:0}.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.rounded[_ngcontent-%COMP%]{width:90%;border-radius:25px;border:3px solid #4c7176}.rounded[_ngcontent-%COMP%], .rounded-text[_ngcontent-%COMP%]{margin-top:5px;padding:10px;box-shadow:0 gray;color:#000}.rounded-text[_ngcontent-%COMP%]{border-style:solid;width:95%;border-radius:10px;background-color:#a3a3a3;border-width:1px}.widhte[_ngcontent-%COMP%]{width:95%}ion-item.item-has-focus[_ngcontent-%COMP%] > ion-label[_ngcontent-%COMP%]{color:#4c7176!important}"]}),o})()}];let g=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[d.Bz.forChild(s)],d.Bz]}),o})(),l=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[t.ez,r.u5,r.UX,i.Pc,g]]}),o})()}}]);
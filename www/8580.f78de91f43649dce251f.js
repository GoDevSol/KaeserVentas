(self.webpackChunkKaeser_Ventas=self.webpackChunkKaeser_Ventas||[]).push([[8580],{8580:(o,e,r)=>{"use strict";r.r(e),r.d(e,{ArranquesPageModule:()=>p});var t=r(6274),n=r(4988),i=r(4683),a=r(4337),s=r(1855),d=r(7272),c=r(7242);const u=[{path:"",component:(()=>{class o{constructor(o,e,r){this.formBuilder=o,this.navCtrl=e,this.api=r,this.formUser=this.formBuilder.group({user:new n.NI({value:"",disabled:!0},n.kI.compose([n.kI.required])),nombres:new n.NI("",n.kI.compose([n.kI.required])),correo:new n.NI("",n.kI.compose([n.kI.required])),pais:new n.NI("",n.kI.compose([n.kI.required])),puesto:new n.NI("",n.kI.compose([n.kI.required]))}),this.formPassword=this.formBuilder.group({password:new n.NI("",n.kI.compose([n.kI.required])),passwordConfirm:new n.NI("",n.kI.compose([n.kI.required])),passwordOld:new n.NI("",n.kI.compose([n.kI.required]))})}ngOnInit(){return(0,s.mG)(this,void 0,void 0,function*(){this.datosForm=yield this.api.getDBItem("User"),this.formUser.controls.user.setValue(this.datosForm.user),this.formUser.controls.nombres.setValue(this.datosForm.nombres),this.formUser.controls.correo.setValue(this.datosForm.correo),this.formUser.controls.pais.setValue(this.datosForm.pais),this.formUser.controls.puesto.setValue(this.datosForm.puesto)})}goTo(o){return(0,s.mG)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("menu/"+o)})}goForward(o){return(0,s.mG)(this,void 0,void 0,function*(){this.navCtrl.navigateForward("menu/"+o)})}modificar(o){return(0,s.mG)(this,void 0,void 0,function*(){var e=yield this.api.modificarUsuario(this.formUser.value);this.datosForm.correo=e.correo,this.datosForm.nombres=e.nombres,this.datosForm.pais=e.pais,this.datosForm.puesto=e.puesto,yield this.api.setDBItem("User",this.datosForm),this.api.showToast("Se ha modificado la informacion exitosamente.","Datos Usuario"),this.navCtrl.navigateBack("menu/"+o)})}contrasena(o){return(0,s.mG)(this,void 0,void 0,function*(){var e=yield this.api.updatePassword(this.formPassword.value);try{1==e.status?(this.api.showToast("Se ha modificado la contrase\xf1a exitosamente.","Datos Usuario"),this.navCtrl.navigateBack("menu/"+o)):this.api.showToast("No se ha podido actualizar la contrase\xf1a.","Error")}catch(r){this.api.showToast("No se ha podido actualizar la contrase\xf1a.","Error")}})}}return o.\u0275fac=function(e){return new(e||o)(d.Y36(n.qu),d.Y36(i.SH),d.Y36(c.r))},o.\u0275cmp=d.Xpm({type:o,selectors:[["arranques"]],decls:86,vars:4,consts:[[3,"translucent"],[2,"--background","none","border-bottom","#4C7176 solid","border-width","3px","border-top","solid 5px #4C7176"],["slot","start","src","assets/img/principal/logo.png",2,"height","50px","margin","5px"],["slot","end"],[2,"color","#4C7176"],[3,"fullscreen"],[2,"--background","none","border","none"],["src","assets/img/back.png",2,"height","25px","display","inline","width","20px","vertical-align","super",3,"click"],[2,"--border-radius","25px","--padding","0 25px","--background","#4C7176","height","25px","vertical-align","super",3,"click"],[2,"--background","#E6E7E7"],[2,"text-align","justify","line-height","1","font-size","14px"],[2,"text-align","-webkit-center"],[1,"rounded"],[3,"formGroup"],[2,"text-align","center"],[1,"roundedInput"],["position","floating"],["formControlName","user","clearInput","true","type","text","placeholder","User (Codigo Empleado):"],["position","floating",1,"colorGreen"],["formControlName","nombres","clearInput","true","type","text","placeholder","Nombre Y Apellido"],["formControlName","correo","clearInput","true","type","text","placeholder","Correo Electronico","clearInput","true"],["formControlName","pais","clearInput","true"],["value","GTQ"],["value","CRI"],["value","SLV"],["value","HNL"],["value","PAN"],["formControlName","puesto","clearInput","true","type","text","placeholder","Puesto","clearInput","true"],["type","submit",2,"--border-radius","25px","--padding","0 25px","--background","#4C7176",3,"click"],[2,"text-align","-webkit-center","margin-top","25px"],["formControlName","passwordOld","clearInput","true","type","password","placeholder","Contrase\xf1a Actual"],["formControlName","password","clearInput","true","type","password","placeholder","Contrase\xf1a Nueva"],["formControlName","passwordConfirm","clearInput","true","type","password","placeholder","Confirmacion de Contrase\xf1a"],["text-center","","no-border","","transparent","",2,"background","white"],[2,"text-align","-webkit-center","border-top","2px solid #4C7176"],["src","assets/img/footer/footer.png",2,"width","225px"]],template:function(o,e){1&o&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar",1),d._UZ(2,"ion-img",2),d.TgZ(3,"ion-buttons",3),d._UZ(4,"ion-menu-button",4),d.qZA(),d.qZA(),d.qZA(),d.TgZ(5,"ion-content",5),d.TgZ(6,"ion-toolbar",6),d.TgZ(7,"div"),d.TgZ(8,"img",7),d.NdJ("click",function(){return e.goTo("register")}),d.qZA(),d.TgZ(9,"ion-button",8),d.NdJ("click",function(){return e.goTo("register")}),d._uU(10," Modificar Perfil"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(11,"ion-card",9),d._UZ(12,"ion-card-content",10),d.TgZ(13,"div",11),d.TgZ(14,"div",12),d._uU(15," DATOS DE USUARIO "),d.qZA(),d.qZA(),d.TgZ(16,"form",13),d.TgZ(17,"ion-grid"),d.TgZ(18,"ion-row"),d.TgZ(19,"ion-col",14),d.TgZ(20,"ion-item",15),d.TgZ(21,"ion-label",16),d._uU(22,"User (Codigo Empleado):"),d.qZA(),d._UZ(23,"ion-input",17),d.qZA(),d.qZA(),d.TgZ(24,"ion-col",14),d.TgZ(25,"ion-item",15),d.TgZ(26,"ion-label",18),d._uU(27,"Nombre Y Apellido:"),d.qZA(),d._UZ(28,"ion-input",19),d.qZA(),d.qZA(),d.qZA(),d.TgZ(29,"ion-row"),d.TgZ(30,"ion-col",14),d.TgZ(31,"ion-item",15),d.TgZ(32,"ion-label",18),d._uU(33,"Correo Electronico:"),d.qZA(),d._UZ(34,"ion-input",20),d.qZA(),d.qZA(),d.TgZ(35,"ion-col",14),d.TgZ(36,"ion-item",15),d.TgZ(37,"ion-label",16),d._uU(38,"Pais:"),d.qZA(),d.TgZ(39,"ion-select",21),d.TgZ(40,"ion-select-option",22),d._uU(41,"Guatemala"),d.qZA(),d.TgZ(42,"ion-select-option",23),d._uU(43,"Costa Rica"),d.qZA(),d.TgZ(44,"ion-select-option",24),d._uU(45,"El Salvador"),d.qZA(),d.TgZ(46,"ion-select-option",25),d._uU(47,"Honduras"),d.qZA(),d.TgZ(48,"ion-select-option",26),d._uU(49,"Panama"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(50,"ion-row"),d.TgZ(51,"ion-col",14),d.TgZ(52,"ion-item",15),d.TgZ(53,"ion-label",16),d._uU(54,"Puesto:"),d.qZA(),d._UZ(55,"ion-input",27),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(56,"div",11),d.TgZ(57,"ion-button",28),d.NdJ("click",function(){return e.modificar("register")}),d._uU(58,"MODIFICAR DATOS"),d.qZA(),d.qZA(),d.TgZ(59,"div",29),d.TgZ(60,"div",12),d._uU(61," MODIFICAR CONTRASE\xd1A "),d.qZA(),d.qZA(),d.TgZ(62,"form",13),d.TgZ(63,"ion-grid"),d.TgZ(64,"ion-row"),d.TgZ(65,"ion-col",14),d.TgZ(66,"ion-item",15),d.TgZ(67,"ion-label",16),d._uU(68,"Contrase\xf1a Actual:"),d.qZA(),d._UZ(69,"ion-input",30),d.qZA(),d.qZA(),d.TgZ(70,"ion-col",14),d.TgZ(71,"ion-item",15),d.TgZ(72,"ion-label",18),d._uU(73,"Contrase\xf1a Nueva:"),d.qZA(),d._UZ(74,"ion-input",31),d.qZA(),d.qZA(),d.TgZ(75,"ion-col",14),d.TgZ(76,"ion-item",15),d.TgZ(77,"ion-label",18),d._uU(78,"Confirmacion de Contrase\xf1a:"),d.qZA(),d._UZ(79,"ion-input",32),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(80,"div",11),d.TgZ(81,"ion-button",28),d.NdJ("click",function(){return e.contrasena("register")}),d._uU(82,"Actualizar contrase\xf1a"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(83,"ion-footer",33),d.TgZ(84,"div",34),d._UZ(85,"ion-img",35),d.qZA(),d.qZA()),2&o&&(d.Q6J("translucent",!0),d.xp6(5),d.Q6J("fullscreen",!0),d.xp6(11),d.Q6J("formGroup",e.formUser),d.xp6(46),d.Q6J("formGroup",e.formPassword))},directives:[i.Gu,i.sr,i.Xz,i.Sm,i.fG,i.W2,i.YG,i.PM,i.FN,n._Y,n.JL,n.sg,i.jY,i.Nd,i.wI,i.Ie,i.Q$,i.pK,i.j9,n.JJ,n.u,i.t9,i.QI,i.n0,i.fr],styles:["ion-content[_ngcontent-%COMP%]{--background:url(/assets/img/login/background.png) no-repeat center center/cover}.roundedInput[_ngcontent-%COMP%]{--border-color:var(--ion-color-medium-shade);--background:#e6e7e7;margin-top:5px;padding:0 15px;font-size:14px;--border-radius:15px;--border-width:1px;--box-shadow:5px #fff;--color:#000;--highlight-height:0}.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.rounded[_ngcontent-%COMP%]{width:90%;border-radius:25px;border:3px solid #4c7176}.rounded[_ngcontent-%COMP%], .rounded-text[_ngcontent-%COMP%]{margin-top:5px;padding:10px;box-shadow:0 gray;color:#000}.rounded-text[_ngcontent-%COMP%]{border-style:solid;width:95%;border-radius:10px;background-color:#a3a3a3;border-width:1px}.widhte[_ngcontent-%COMP%]{width:95%}ion-item.item-has-focus[_ngcontent-%COMP%] > ion-label[_ngcontent-%COMP%]{color:#4c7176!important}"]}),o})()}];let l=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[[a.Bz.forChild(u)],a.Bz]}),o})(),p=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[[t.ez,n.u5,n.UX,i.Pc,l]]}),o})()}}]);
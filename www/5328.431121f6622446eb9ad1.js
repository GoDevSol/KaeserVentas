(self.webpackChunkKaeser_Ventas=self.webpackChunkKaeser_Ventas||[]).push([[5328],{5328:(o,e,r)=>{"use strict";r.r(e),r.d(e,{ArranquesPageModule:()=>p});var t=r(6274),n=r(4988),i=r(4683),s=r(4337),a=r(1855),u=r(7272),l=r(7242);function d(o,e){if(1&o&&(u.TgZ(0,"ion-select-option",41),u._uU(1),u.qZA()),2&o){const o=e.$implicit;u.Q6J("value",o.id),u.xp6(1),u.Oqu(o.nombres)}}const c=[{path:"",component:(()=>{class o{constructor(o,e,r){this.formBuilder=o,this.navCtrl=e,this.api=r,this.formUser=this.formBuilder.group({user:new n.NI({value:"",disabled:!0},n.kI.compose([n.kI.required])),nombres:new n.NI("",n.kI.compose([n.kI.required])),correo:new n.NI("",n.kI.compose([n.kI.required])),pais:new n.NI("",n.kI.compose([n.kI.required])),puesto:new n.NI("",n.kI.compose([n.kI.required])),rol:new n.NI("",n.kI.compose([n.kI.required]))}),this.formPassword=this.formBuilder.group({password:new n.NI("",n.kI.compose([n.kI.required])),passwordConfirm:new n.NI("",n.kI.compose([n.kI.required]))})}ngOnInit(){return(0,a.mG)(this,void 0,void 0,function*(){this.usersAll=yield this.api.getAllUser()})}goTo(o){return(0,a.mG)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("menu/"+o)})}onChange(o){return(0,a.mG)(this,void 0,void 0,function*(){var e=this.usersAll.filter(e=>e.id==o.value);this.datosForm=e[0],this.formUser.controls.user.setValue(this.datosForm.user),this.formUser.controls.nombres.setValue(this.datosForm.nombres),this.formUser.controls.correo.setValue(this.datosForm.correo),this.formUser.controls.pais.setValue(this.datosForm.pais),this.formUser.controls.puesto.setValue(this.datosForm.puesto),this.formUser.controls.rol.setValue(this.datosForm.rol)})}goForward(o){return(0,a.mG)(this,void 0,void 0,function*(){this.navCtrl.navigateForward("menu/"+o)})}modificar(o){return(0,a.mG)(this,void 0,void 0,function*(){this.datosForm.correo=this.formUser.value.correo,this.datosForm.nombres=this.formUser.value.nombres,this.datosForm.pais=this.formUser.value.pais,this.datosForm.puesto=this.formUser.value.puesto,this.datosForm.rol=this.formUser.value.rol,yield this.api.modificarUsuarioJWT(this.datosForm),this.api.showToast("Se ha modificado la informacion exitosamente.","Datos Usuario"),this.navCtrl.navigateBack("menu/"+o)})}contrasena(o){return(0,a.mG)(this,void 0,void 0,function*(){var e=yield this.api.updatePasswordJWT(Object.assign(Object.assign({},this.formPassword.value),{user:this.datosForm}));try{1==e.status?(this.api.showToast("Se ha modificado la contrase\xf1a exitosamente.","Datos Usuario"),this.navCtrl.navigateBack("menu/"+o)):this.api.showToast("No se ha podido actualizar la contrase\xf1a.","Error")}catch(r){this.api.showToast("No se ha podido actualizar la contrase\xf1a.","Error")}})}}return o.\u0275fac=function(e){return new(e||o)(u.Y36(n.qu),u.Y36(i.SH),u.Y36(l.r))},o.\u0275cmp=u.Xpm({type:o,selectors:[["arranques"]],decls:100,vars:6,consts:[[3,"translucent"],[2,"--background","none","border-bottom","#4C7176 solid","border-width","3px","border-top","solid 5px #4C7176"],["slot","start","src","assets/img/principal/logo.png",2,"height","50px","margin","5px"],["slot","end"],[2,"color","#4C7176"],[3,"fullscreen"],[2,"--background","none","border","none"],["src","assets/img/back.png",2,"height","25px","display","inline","width","20px","vertical-align","super",3,"click"],[2,"--border-radius","25px","--padding","0 25px","--background","#4C7176","height","25px","vertical-align","super",3,"click"],[2,"--background","#E6E7E7","padding-bottom","20px"],[2,"text-align","-webkit-center"],[1,"rounded"],[1,"roundedInput"],["position","floating"],["clearInput","true",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[2,"--background","#E6E7E7",3,"hidden"],[3,"formGroup"],[2,"text-align","center"],["formControlName","user","clearInput","true","type","text","placeholder","User (Codigo Empleado):"],["position","floating",1,"colorGreen"],["formControlName","nombres","clearInput","true","type","text","placeholder","Nombre Y Apellido"],["formControlName","correo","clearInput","true","type","text","placeholder","Correo Electronico","clearInput","true"],["formControlName","pais","clearInput","true"],["value","GTQ"],["value","CRI"],["value","SLV"],["value","HNL"],["value","PAN"],["formControlName","puesto","clearInput","true","type","text","placeholder","Puesto","clearInput","true"],["formControlName","rol","clearInput","true"],["value","1"],["value","2"],["value","3"],["type","submit",2,"--border-radius","25px","--padding","0 25px","--background","#4C7176",3,"click"],[2,"text-align","-webkit-center","margin-top","25px"],["formControlName","password","clearInput","true","type","password","placeholder","Contrase\xf1a Nueva"],["formControlName","passwordConfirm","clearInput","true","type","password","placeholder","Confirmacion de Contrase\xf1a"],["text-center","","no-border","","transparent","",2,"background","white"],[2,"text-align","-webkit-center","border-top","2px solid #4C7176"],["src","assets/img/footer/footer.png",2,"width","225px"],[3,"value"]],template:function(o,e){1&o&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar",1),u._UZ(2,"ion-img",2),u.TgZ(3,"ion-buttons",3),u._UZ(4,"ion-menu-button",4),u.qZA(),u.qZA(),u.qZA(),u.TgZ(5,"ion-content",5),u.TgZ(6,"ion-toolbar",6),u.TgZ(7,"div"),u.TgZ(8,"img",7),u.NdJ("click",function(){return e.goTo("register")}),u.qZA(),u.TgZ(9,"ion-button",8),u.NdJ("click",function(){return e.goTo("register")}),u._uU(10," Modificar Perfil"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(11,"ion-card",9),u.TgZ(12,"div",10),u.TgZ(13,"div",11),u._uU(14," SELECCIONE USUARIO "),u.qZA(),u.qZA(),u.TgZ(15,"ion-item",12),u.TgZ(16,"ion-label",13),u._uU(17,"Usuario:"),u.qZA(),u.TgZ(18,"ion-select",14),u.NdJ("ionChange",function(o){return e.onChange(o.target)}),u.YNc(19,d,2,2,"ion-select-option",15),u.qZA(),u.qZA(),u.qZA(),u.TgZ(20,"ion-card",16),u.TgZ(21,"div",10),u.TgZ(22,"div",11),u._uU(23," DATOS DE USUARIO "),u.qZA(),u.qZA(),u.TgZ(24,"form",17),u.TgZ(25,"ion-grid"),u.TgZ(26,"ion-row"),u.TgZ(27,"ion-col",18),u.TgZ(28,"ion-item",12),u.TgZ(29,"ion-label",13),u._uU(30,"User (Codigo Empleado):"),u.qZA(),u._UZ(31,"ion-input",19),u.qZA(),u.qZA(),u.TgZ(32,"ion-col",18),u.TgZ(33,"ion-item",12),u.TgZ(34,"ion-label",20),u._uU(35,"Nombre Y Apellido:"),u.qZA(),u._UZ(36,"ion-input",21),u.qZA(),u.qZA(),u.qZA(),u.TgZ(37,"ion-row"),u.TgZ(38,"ion-col",18),u.TgZ(39,"ion-item",12),u.TgZ(40,"ion-label",20),u._uU(41,"Correo Electronico:"),u.qZA(),u._UZ(42,"ion-input",22),u.qZA(),u.qZA(),u.TgZ(43,"ion-col",18),u.TgZ(44,"ion-item",12),u.TgZ(45,"ion-label",13),u._uU(46,"Pais:"),u.qZA(),u.TgZ(47,"ion-select",23),u.TgZ(48,"ion-select-option",24),u._uU(49,"Guatemala"),u.qZA(),u.TgZ(50,"ion-select-option",25),u._uU(51,"Costa Rica"),u.qZA(),u.TgZ(52,"ion-select-option",26),u._uU(53,"El Salvador"),u.qZA(),u.TgZ(54,"ion-select-option",27),u._uU(55,"Honduras"),u.qZA(),u.TgZ(56,"ion-select-option",28),u._uU(57,"Panama"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(58,"ion-row"),u.TgZ(59,"ion-col",18),u.TgZ(60,"ion-item",12),u.TgZ(61,"ion-label",13),u._uU(62,"Puesto:"),u.qZA(),u._UZ(63,"ion-input",29),u.qZA(),u.qZA(),u.TgZ(64,"ion-col",18),u.TgZ(65,"ion-item",12),u.TgZ(66,"ion-label",13),u._uU(67,"Rol Usuario:"),u.qZA(),u.TgZ(68,"ion-select",30),u.TgZ(69,"ion-select-option",31),u._uU(70,"General"),u.qZA(),u.TgZ(71,"ion-select-option",32),u._uU(72,"Asistente Ventas"),u.qZA(),u.TgZ(73,"ion-select-option",33),u._uU(74,"Master"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(75,"div",10),u.TgZ(76,"ion-button",34),u.NdJ("click",function(){return e.modificar("register")}),u._uU(77,"MODIFICAR DATOS"),u.qZA(),u.qZA(),u.TgZ(78,"div",35),u.TgZ(79,"div",11),u._uU(80," MODIFICAR CONTRASE\xd1A "),u.qZA(),u.qZA(),u.TgZ(81,"form",17),u.TgZ(82,"ion-grid"),u.TgZ(83,"ion-row"),u.TgZ(84,"ion-col",18),u.TgZ(85,"ion-item",12),u.TgZ(86,"ion-label",20),u._uU(87,"Contrase\xf1a Nueva:"),u.qZA(),u._UZ(88,"ion-input",36),u.qZA(),u.qZA(),u.TgZ(89,"ion-col",18),u.TgZ(90,"ion-item",12),u.TgZ(91,"ion-label",20),u._uU(92,"Confirmacion de Contrase\xf1a:"),u.qZA(),u._UZ(93,"ion-input",37),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(94,"div",10),u.TgZ(95,"ion-button",34),u.NdJ("click",function(){return e.contrasena("register")}),u._uU(96,"Actualizar contrase\xf1a"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(97,"ion-footer",38),u.TgZ(98,"div",39),u._UZ(99,"ion-img",40),u.qZA(),u.qZA()),2&o&&(u.Q6J("translucent",!0),u.xp6(5),u.Q6J("fullscreen",!0),u.xp6(14),u.Q6J("ngForOf",e.usersAll),u.xp6(1),u.Q6J("hidden",!e.datosForm),u.xp6(4),u.Q6J("formGroup",e.formUser),u.xp6(57),u.Q6J("formGroup",e.formPassword))},directives:[i.Gu,i.sr,i.Xz,i.Sm,i.fG,i.W2,i.YG,i.PM,i.Ie,i.Q$,i.t9,i.QI,t.sg,n._Y,n.JL,n.sg,i.jY,i.Nd,i.wI,i.pK,i.j9,n.JJ,n.u,i.n0,i.fr],styles:["ion-content[_ngcontent-%COMP%]{--background:url(/assets/img/login/background.png) no-repeat center center/cover}.roundedInput[_ngcontent-%COMP%]{--border-color:var(--ion-color-medium-shade);--background:#e6e7e7;margin-top:5px;padding:0 15px;font-size:14px;--border-radius:15px;--border-width:1px;--box-shadow:5px #fff;--color:#000;--highlight-height:0}.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.rounded[_ngcontent-%COMP%]{width:90%;border-radius:25px;border:3px solid #4c7176}.rounded[_ngcontent-%COMP%], .rounded-text[_ngcontent-%COMP%]{margin-top:5px;padding:10px;box-shadow:0 gray;color:#000}.rounded-text[_ngcontent-%COMP%]{border-style:solid;width:95%;border-radius:10px;background-color:#a3a3a3;border-width:1px}.widhte[_ngcontent-%COMP%]{width:95%}ion-item.item-has-focus[_ngcontent-%COMP%] > ion-label[_ngcontent-%COMP%]{color:#4c7176!important}"]}),o})()}];let g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[s.Bz.forChild(c)],s.Bz]}),o})(),p=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[t.ez,n.u5,n.UX,i.Pc,g]]}),o})()}}]);
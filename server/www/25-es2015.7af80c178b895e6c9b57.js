(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{zYH4:function(e,n,t){"use strict";t.r(n),t.d(n,"ProfilePageModule",(function(){return J}));var i=t("ofXK"),o=t("3Pt+"),r=t("TEn/"),a=t("tyNb"),l=t("mrSG"),b=t("2hxB"),c=t("4W+j"),s=t("J31/"),u=t("fXoL"),d=t("qfBg"),g=t("pYtu");function p(e,n){if(1&e&&(u.Kb(0,"ion-item"),u.Kb(1,"ion-label"),u.Kb(2,"ion-text",20),u.ic(3),u.Jb(),u.Kb(4,"ion-text",22),u.ic(5),u.Jb(),u.Jb(),u.Jb()),2&e){const e=n.$implicit;u.xb(3),u.kc(" ",e.name," "),u.xb(2),u.kc(" "," ("+e.description+")","")}}const m=[{path:"",component:(()=>{class e{constructor(e,n,t,i){this.userService=e,this.toastController=n,this.skillService=t,this.router=i,this.user=new b.a,this.skill=new c.a}ngOnInit(){}ionViewWillEnter(){this.user=s.a.getStorageUser(),this.getSkill()}toastMessage(e){return Object(l.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:1500})).present()}))}updateUser(){this.userService.updateUser(this.user).subscribe(e=>{e.status?(this.user=e.data,s.a.setStorageUser(this.user),this.toastMessage("Se actualizo la informacion del usuario")):this.toastMessage("Hubo un problema al actualizar la infomacion del usuario")},e=>{this.toastMessage("Problema al conectar con el servidor.")})}getSkill(){this.skillService.getSkill(this.user._id).subscribe(e=>{e.status?this.skill=e.data:this.toastMessage("Hubo un problema al obtener la infomaci\xf3n del usuario")},e=>{this.toastMessage("Problema al conectar con el servidor.")})}editSkills(){this.router.navigate(["/skill-update/"+this.user._id])}enableInput(e){e.readOnly=!1,e.style.color="rgb(20, 54, 119)"}}return e.\u0275fac=function(n){return new(n||e)(u.Hb(d.a),u.Hb(r.Y),u.Hb(g.a),u.Hb(a.f))},e.\u0275cmp=u.Bb({type:e,selectors:[["app-profile"]],decls:63,vars:10,consts:[["color","headerColor"],["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],[1,"center-content"],[1,"big-size"],["src","assets/icon/avatar.png"],["userForm","ngForm"],[1,"text-label"],["type","text","name","name","readonly","","required","",1,"text-input",3,"ngModel","dblclick","ngModelChange"],["type","text","name","lastName","required","","readonly","",1,"text-input",3,"ngModel","dblclick","ngModelChange"],["type","email","name","email","disabled","",1,"text-input",3,"ngModel","ngModelChange"],["type","text","name","age","required","","readonly","",1,"text-input",3,"ngModel","dblclick","ngModelChange"],["type","text","name","code","required","","readonly","",1,"text-input",3,"ngModel","dblclick","ngModelChange"],["type","text","name","career","required","","readonly","",1,"text-input",3,"ngModel","dblclick","ngModelChange"],["type","password","name","password","required","","readonly","",1,"text-input",3,"ngModel","dblclick","ngModelChange"],["expand","full","color","myPrimaryDark",2,"font-family","Arial, Helvetica, sans-serif",3,"disabled","click"],["slot","end","color","success",3,"click"],["name","create",1,"icon"],["color","dark"],[4,"ngFor","ngForOf"],["color","medium"]],template:function(e,n){if(1&e&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar",0),u.Kb(2,"ion-title"),u.ic(3),u.Jb(),u.Kb(4,"ion-buttons",1),u.Ib(5,"ion-menu-button",2),u.Jb(),u.Kb(6,"ion-buttons",3),u.Ib(7,"ion-back-button",4),u.Jb(),u.Jb(),u.Jb(),u.Kb(8,"ion-content"),u.Kb(9,"ion-grid"),u.Kb(10,"ion-row"),u.Kb(11,"ion-col"),u.Kb(12,"div",5),u.Kb(13,"ion-avatar",6),u.Ib(14,"img",7),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(15,"form",null,8),u.Kb(17,"ion-card"),u.Kb(18,"ion-item"),u.Kb(19,"ion-label",9),u.ic(20," Nombre: "),u.Jb(),u.Kb(21,"ion-input",10),u.Sb("dblclick",(function(e){return n.enableInput(e.target)}))("ngModelChange",(function(e){return n.user.name=e})),u.Jb(),u.Jb(),u.Jb(),u.Kb(22,"ion-card"),u.Kb(23,"ion-item"),u.Kb(24,"ion-label",9),u.ic(25," Apellidos: "),u.Jb(),u.Kb(26,"ion-input",11),u.Sb("dblclick",(function(e){return n.enableInput(e.target)}))("ngModelChange",(function(e){return n.user.lastName=e})),u.Jb(),u.Jb(),u.Jb(),u.Kb(27,"ion-card"),u.Kb(28,"ion-item"),u.Kb(29,"ion-label",9),u.ic(30," Email: "),u.Jb(),u.Kb(31,"ion-input",12),u.Sb("ngModelChange",(function(e){return n.user.email=e})),u.Jb(),u.Jb(),u.Jb(),u.Kb(32,"ion-card"),u.Kb(33,"ion-item"),u.Kb(34,"ion-label",9),u.ic(35," Edad: "),u.Jb(),u.Kb(36,"ion-input",13),u.Sb("dblclick",(function(e){return n.enableInput(e.target)}))("ngModelChange",(function(e){return n.user.age=e})),u.Jb(),u.Jb(),u.Jb(),u.Kb(37,"ion-card"),u.Kb(38,"ion-item"),u.Kb(39,"ion-label",9),u.ic(40," Codigo: "),u.Jb(),u.Kb(41,"ion-input",14),u.Sb("dblclick",(function(e){return n.enableInput(e.target)}))("ngModelChange",(function(e){return n.user.code=e})),u.Jb(),u.Jb(),u.Jb(),u.Kb(42,"ion-card"),u.Kb(43,"ion-item"),u.Kb(44,"ion-label",9),u.ic(45," Carrera: "),u.Jb(),u.Kb(46,"ion-input",15),u.Sb("dblclick",(function(e){return n.enableInput(e.target)}))("ngModelChange",(function(e){return n.user.career=e})),u.Jb(),u.Jb(),u.Jb(),u.Kb(47,"ion-card"),u.Kb(48,"ion-item"),u.Kb(49,"ion-label",9),u.ic(50," Contrase\xf1a: "),u.Jb(),u.Kb(51,"ion-input",16),u.Sb("dblclick",(function(e){return n.enableInput(e.target)}))("ngModelChange",(function(e){return n.user.password=e})),u.Jb(),u.Jb(),u.Jb(),u.Kb(52,"ion-button",17),u.Sb("click",(function(){return n.updateUser()})),u.ic(53,"Actualizar "),u.Jb(),u.Jb(),u.Kb(54,"ion-item"),u.Kb(55,"ion-button",18),u.Sb("click",(function(){return n.editSkills()})),u.ic(56,"Editar "),u.Ib(57,"ion-icon",19),u.Jb(),u.Kb(58,"ion-label"),u.Kb(59,"ion-text",20),u.ic(60," Tus habilidades: "),u.Jb(),u.Jb(),u.Jb(),u.Kb(61,"ion-list"),u.gc(62,p,6,2,"ion-item",21),u.Jb(),u.Jb()),2&e){const e=u.cc(16);u.xb(3),u.kc("Mi perfil ",1==n.user.permission?"(Admin)":""," "),u.xb(18),u.ac("ngModel",n.user.name),u.xb(5),u.ac("ngModel",n.user.lastName),u.xb(5),u.ac("ngModel",n.user.email),u.xb(5),u.ac("ngModel",n.user.age),u.xb(5),u.ac("ngModel",n.user.code),u.xb(5),u.ac("ngModel",n.user.career),u.xb(5),u.ac("ngModel",n.user.password),u.xb(1),u.ac("disabled",!e.valid),u.xb(10),u.ac("ngForOf",n.skill.skills)}},directives:[r.w,r.R,r.Q,r.i,r.D,r.f,r.g,r.q,r.v,r.I,r.p,r.e,o.k,o.f,o.g,r.j,r.z,r.A,r.y,r.X,o.j,o.e,o.h,r.h,r.x,r.N,r.B,i.i],styles:[".center-content[_ngcontent-%COMP%]{justify-content:center;align-items:center;display:flex}.big-size[_ngcontent-%COMP%]{width:150px;height:150px}.text-label[_ngcontent-%COMP%]{font-size:18px}.text-input[_ngcontent-%COMP%]{font-size:16px;color:#143677}.text-input[readonly][_ngcontent-%COMP%]{color:#919191}ion-content[_ngcontent-%COMP%]{--background:#fff}.icon[_ngcontent-%COMP%]{padding-bottom:2px;padding-left:2px}"]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=u.Fb({type:e}),e.\u0275inj=u.Eb({factory:function(n){return new(n||e)},imports:[[a.i.forChild(m)],a.i]}),e})(),J=(()=>{class e{}return e.\u0275mod=u.Fb({type:e}),e.\u0275inj=u.Eb({factory:function(n){return new(n||e)},imports:[[i.b,o.a,r.S,f]]}),e})()}}]);
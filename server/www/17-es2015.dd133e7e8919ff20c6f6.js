(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{HV6F:function(e,t,n){"use strict";n.r(t),n.d(t,"QuestionViewPageModule",(function(){return q}));var i=n("ofXK"),s=n("3Pt+"),o=n("TEn/"),r=n("tyNb"),a=n("mrSG"),c=n("P+PR"),l=n("2hxB");class b{constructor(){this.user=new l.a}}var u=n("J31/"),d=n("QYMr"),g=n("fXoL"),p=n("UcdY"),m=n("lBcp");function h(e,t){if(1&e){const e=g.Lb();g.Kb(0,"ion-label",2),g.Kb(1,"ion-button",17),g.Sb("click",(function(){g.dc(e);const t=g.Ub();return t.closeQuestion(t.question._id)})),g.Kb(2,"ion-label"),g.ic(3,"CERRAR"),g.Jb(),g.Ib(4,"ion-icon",18),g.Jb(),g.Jb()}}function f(e,t){if(1&e&&(g.Kb(0,"ion-chip",19),g.Kb(1,"ion-label",20),g.ic(2),g.Vb(3,"slice"),g.Jb(),g.Ib(4,"br"),g.Jb()),2&e){const e=t.$implicit;g.xb(2),g.jc(g.Xb(3,1,e.name,0,3))}}function R(e,t){if(1&e){const e=g.Lb();g.Kb(0,"ion-button",23),g.Sb("click",(function(){g.dc(e);const t=g.Ub().$implicit;return g.Ub().confirmRemoveReply(t._id)})),g.Ib(1,"ion-icon",24),g.Jb()}}function y(e,t){if(1&e&&(g.Kb(0,"ion-item"),g.Kb(1,"ion-avatar",0),g.Ib(2,"img",6),g.Jb(),g.gc(3,R,2,0,"ion-button",21),g.Kb(4,"ion-label",20),g.Kb(5,"ion-text",10),g.Kb(6,"h2"),g.Kb(7,"strong"),g.ic(8),g.Jb(),g.Jb(),g.Jb(),g.Kb(9,"ion-text"),g.Kb(10,"p",9),g.ic(11),g.Vb(12,"date"),g.Jb(),g.Jb(),g.Kb(13,"ion-text",22),g.Kb(14,"span"),g.ic(15),g.Jb(),g.Jb(),g.Jb(),g.Jb()),2&e){const e=t.$implicit,n=g.Ub();g.xb(3),g.ac("ngIf",e.user._id==n.user._id),g.xb(5),g.kc(" ",e.user.name+" "+e.user.lastName," "),g.xb(3),g.jc(g.Wb(12,4,e.date,"MMM d, y - H:mm")),g.xb(4),g.jc(e.reply)}}function v(e,t){if(1&e){const e=g.Lb();g.Kb(0,"form",null,25),g.Kb(2,"ion-item"),g.Kb(3,"ion-avatar",0),g.Ib(4,"img",6),g.Jb(),g.Kb(5,"ion-textarea",26),g.Sb("ngModelChange",(function(t){return g.dc(e),g.Ub().reply.reply=t})),g.Jb(),g.Kb(6,"ion-button",27),g.Sb("click",(function(){return g.dc(e),g.Ub().confirmAddReply()})),g.Ib(7,"ion-icon",28),g.Jb(),g.Jb(),g.Jb()}if(2&e){const e=g.cc(1),t=g.Ub();g.xb(5),g.ac("ngModel",t.reply.reply),g.xb(1),g.ac("disabled",!e.valid)}}function K(e,t){1&e&&(g.Kb(0,"ion-text",29),g.Kb(1,"div",30),g.ic(2," Pregunta cerrada, no puedes responder a esta pregunta. "),g.Jb(),g.Jb())}const J=[{path:"",component:(()=>{class e{constructor(e,t,n,i,s,o,r){this.activatedRoute=e,this.questionService=t,this.tagService=n,this.router=i,this.alertController=s,this.toastController=o,this.loadingController=r,this.user=new l.a,this.question=new c.a,this.tag=new d.a,this.reply=new b}ngOnInit(){}ionViewWillEnter(){this.questionId=this.activatedRoute.snapshot.params.id,this.getQuestion(this.questionId),this.getTag(this.questionId),this.user=u.a.getStorageUser()}navigateAlert(e,t,n,i){return Object(a.a)(this,void 0,void 0,(function*(){yield this.alertController.create({header:e,subHeader:t,buttons:[{text:n,handler:()=>{this.router.navigate(["/"+i+"/"])}}]})}))}closeQuestion(e){this.questionService.closeQuestion(e).subscribe(e=>{e.status?this.question.open=!1:this.navigateAlert("\xa1ERROR AL CERRAR!","Hubo un problema al intentar obtener la informacion de esta pregunta","OK","questions")},e=>{this.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","questions")})}getQuestion(e){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({message:"Porfavor espere..."});yield t.present(),this.questionService.getQuestionById(e).subscribe(e=>{e.status?this.question=e.data:this.navigateAlert("\xa1ERROR AL OBTENER!","Hubo un problema al intentar obtener la informacion de esta pregunta","OK","questions"),t.dismiss()},e=>{this.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","questions"),t.dismiss()})}))}getReloadQsn(e){this.questionService.getQuestionById(this.questionId).subscribe(t=>{t.status?this.question=t.data:this.navigateAlert("\xa1ERROR AL OBTENER!","Hubo un problema al intentar obtener la informacion de esta pregunta","OK","questions"),e.target.complete()},t=>{this.navigateAlert("ERROR DE SERVIDOR",t.message,"OK","questions"),e.target.complete()})}getTag(e){this.tagService.getTagByQuestionId(e).subscribe(e=>{e.status&&(this.tag=e.data)},e=>{console.log(e)})}addReply(){return Object(a.a)(this,void 0,void 0,(function*(){this.reply.user._id=this.user._id,this.reply.date=new Date,this.reply.score=0,this.questionService.addReply(this.questionId,this.reply).subscribe(e=>{e.status?(this.question=e.data,this.reply=new b):this.navigateAlert("\xa1ERROR AL OBTENER!","Hubo un problema al intentar agregar esta pregunta","OK","questions")},e=>{this.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","questions")})}))}removeReply(e){this.questionService.removeReply(this.questionId,e).subscribe(e=>{if(e.status){const t=this.question.replys.findIndex(t=>t._id===e.data);this.question.replys.splice(t,1)}else this.navigateAlert("\xa1ERROR AL OBTENER!","Hubo un problema al intentar remover esta respuesta","OK","questions")},e=>{this.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","questions")})}confirmRemoveReply(e){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"\xa1CONFIRMAR!",message:"\xbfEstas seguro que deseas eliminar esta respuesta?",buttons:[{text:"No",role:"cancel",cssClass:"secondary"},{text:"Si",cssClass:"success",handler:()=>{this.removeReply(e)}}]});yield t.present()}))}confirmAddReply(){return Object(a.a)(this,void 0,void 0,(function*(){if(this.reply.reply=this.reply.reply.trim(),this.reply.reply.trim()){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"\xa1CONFIRMAR!",message:"\xbfEsta seguro de enviar esta respuesta?",buttons:[{text:"No",role:"cancel",cssClass:"secondary"},{text:"Si",cssClass:"success",handler:()=>{this.addReply()}}]});yield e.present()}else(yield this.toastController.create({message:"No puedes enviar una respuesta vacia.",duration:1500})).present(),this.reply.reply=""}))}}return e.\u0275fac=function(t){return new(t||e)(g.Hb(r.a),g.Hb(p.a),g.Hb(m.a),g.Hb(r.f),g.Hb(o.b),g.Hb(o.Z),g.Hb(o.U))},e.\u0275cmp=g.Bb({type:e,selectors:[["app-question-view"]],decls:41,vars:14,consts:[["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],["slot","fixed",3,"ionRefresh"],["color","myPrimary"],["src","assets/icon/avatar.png"],["slot","end",4,"ngIf"],["color","myPrimaryText"],[1,"date"],["color","myPrimaryTextColor"],["color","primary",4,"ngFor","ngForOf"],["lines","full"],["color","myPrimaryDark"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["elseForm",""],["color","danger",3,"click"],["slot","end","name","close-circle"],["color","primary"],[1,"ion-text-wrap"],["slot","end","color","danger",3,"click",4,"ngIf"],["color","myPrimaryTextColor",2,"font-size","medium"],["slot","end","color","danger",3,"click"],["name","trash"],["formReply","ngForm"],["rows","3","placeholder","Respoder a esta pregunta","name","reply","minlength","2","required","",3,"ngModel","ngModelChange"],["slot","end","color","light",2,"margin-top","25px",3,"disabled","click"],["name","send","color","primary"],["color","medium"],[1,"ion-text-center"]],template:function(e,t){if(1&e&&(g.Kb(0,"ion-header"),g.Kb(1,"ion-toolbar"),g.Kb(2,"ion-title"),g.ic(3),g.Jb(),g.Kb(4,"ion-buttons",0),g.Ib(5,"ion-menu-button",1),g.Jb(),g.Kb(6,"ion-buttons",2),g.Ib(7,"ion-back-button",3),g.Jb(),g.Jb(),g.Jb(),g.Kb(8,"ion-content"),g.Kb(9,"ion-refresher",4),g.Sb("ionRefresh",(function(e){return t.getReloadQsn(e)})),g.Ib(10,"ion-refresher-content"),g.Jb(),g.Kb(11,"ion-card"),g.Kb(12,"ion-item",5),g.Kb(13,"ion-avatar",0),g.Ib(14,"img",6),g.Jb(),g.gc(15,h,5,0,"ion-label",7),g.Kb(16,"ion-label"),g.Kb(17,"ion-text",8),g.Kb(18,"h2"),g.Kb(19,"strong"),g.ic(20),g.Jb(),g.Jb(),g.Jb(),g.Kb(21,"ion-text",8),g.Kb(22,"p",9),g.ic(23),g.Vb(24,"date"),g.Jb(),g.Jb(),g.Jb(),g.Jb(),g.Kb(25,"ion-card-header"),g.Kb(26,"ion-card-title",10),g.Kb(27,"strong"),g.ic(28),g.Jb(),g.Jb(),g.Jb(),g.Kb(29,"ion-card-content"),g.ic(30),g.Jb(),g.gc(31,f,5,5,"ion-chip",11),g.Jb(),g.Kb(32,"ion-list"),g.Kb(33,"ion-item",12),g.Kb(34,"ion-text",13),g.ic(35),g.Jb(),g.Jb(),g.gc(36,y,16,7,"ion-item",14),g.Jb(),g.Jb(),g.Kb(37,"ion-footer"),g.gc(38,v,8,2,"form",15),g.gc(39,K,3,0,"ng-template",null,16,g.hc),g.Jb()),2&e){const e=g.cc(40);g.xb(3),g.kc("Pregunta - ",t.question.open?"Abierta":"Cerrada"," "),g.xb(12),g.ac("ngIf",t.question.open&&1==t.user.permission),g.xb(5),g.jc(t.question.user.name+" "+t.question.user.lastName),g.xb(3),g.jc(g.Wb(24,11,t.question.date,"MMM d, y")),g.xb(5),g.kc(" ",t.question.title," "),g.xb(2),g.kc(" ",t.question.body," "),g.xb(1),g.ac("ngForOf",t.tag.tags),g.xb(4),g.kc(" ",t.question.replys.length<1?"Nadie a respondido a esta pregunta todavia.":"Respuestas:",""),g.xb(1),g.ac("ngForOf",t.question.replys),g.xb(2),g.ac("ngIf",t.question.open)("ngIfElse",e)}},directives:[o.w,o.R,o.Q,o.i,o.D,o.f,o.g,o.q,o.F,o.G,o.j,o.z,o.e,i.j,o.A,o.N,o.l,o.m,o.k,i.i,o.B,o.u,o.h,o.x,o.o,s.k,s.f,s.g,o.O,o.Y,s.b,s.j,s.e,s.h],pipes:[i.d,i.m],styles:["ion-content[_ngcontent-%COMP%]{--background:#fff}ion-title[_ngcontent-%COMP%]{--color:#fff;font-family:Arial,Helvetica,sans-serif}ion-toolbar[_ngcontent-%COMP%]{--background:#00796b;--color:#fff}ion-card[_ngcontent-%COMP%]{--background:#f5f5f5}ion-card-content[_ngcontent-%COMP%], ion-card-title[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}ion-card-content[_ngcontent-%COMP%]{color:#000;font-size:15px}.date[_ngcontent-%COMP%]{font-size:13px;font-family:Arial,Helvetica,sans-serif}"]}),e})()}];let O=(()=>{class e{}return e.\u0275mod=g.Fb({type:e}),e.\u0275inj=g.Eb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(J)],r.i]}),e})(),q=(()=>{class e{}return e.\u0275mod=g.Fb({type:e}),e.\u0275inj=g.Eb({factory:function(t){return new(t||e)},imports:[[i.b,s.a,o.S,O]]}),e})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{FEd2:function(e,t,n){"use strict";n.r(t),n.d(t,"EventsPageModule",(function(){return p}));var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),c=n("mrSG"),a=n("2hxB"),l=n("J31/"),b=n("fXoL"),d=n("fTLw");function u(e,t){1&e&&(b.Kb(0,"ion-text",6),b.Kb(1,"div",14),b.ic(2," No hay eventos disponibles. "),b.Jb(),b.Jb())}function f(e,t){if(1&e){const e=b.Lb();b.Kb(0,"ion-footer"),b.Kb(1,"ion-row"),b.Kb(2,"ion-col",22),b.Kb(3,"ion-button",23),b.Sb("click",(function(){b.dc(e);const t=b.Ub().$implicit;return b.Ub().editEvent(t._id)})),b.Kb(4,"ion-label"),b.ic(5," EDITAR "),b.Jb(),b.Ib(6,"ion-icon",24),b.Jb(),b.Jb(),b.Kb(7,"ion-col",22),b.Kb(8,"ion-button",25),b.Sb("click",(function(){b.dc(e);const t=b.Ub().$implicit;return b.Ub().confirmClose(t._id)})),b.ic(9," CERRAR "),b.Ib(10,"ion-icon",26),b.Jb(),b.Jb(),b.Jb(),b.Jb()}}function v(e,t){if(1&e&&(b.Kb(0,"ion-card"),b.Kb(1,"ion-item",15),b.Kb(2,"ion-avatar",0),b.Ib(3,"img",16),b.Jb(),b.Kb(4,"ion-label"),b.Kb(5,"h3",17),b.Kb(6,"ion-text",18),b.ic(7),b.Jb(),b.Jb(),b.Kb(8,"p",19),b.Kb(9,"ion-text",18),b.ic(10),b.Vb(11,"date"),b.Jb(),b.Jb(),b.Jb(),b.Kb(12,"ion-label",20),b.Kb(13,"strong"),b.ic(14," Fin: "),b.Jb(),b.Kb(15,"ion-text"),b.ic(16),b.Vb(17,"date"),b.Jb(),b.Jb(),b.Jb(),b.Kb(18,"ion-card-header"),b.Kb(19,"ion-card-title"),b.ic(20),b.Jb(),b.Jb(),b.Kb(21,"ion-card-content"),b.ic(22),b.Jb(),b.gc(23,f,11,0,"ion-footer",21),b.Jb()),2&e){const e=t.$implicit,n=b.Ub();b.xb(7),b.kc(" ",e.user.name+" "+e.user.lastName," "),b.xb(3),b.kc(" ",b.Xb(11,6,e.dateStart,"MMM d, y","UTC")," "),b.xb(6),b.kc(" ",b.Xb(17,10,e.dateEnd,"MMM d, y","UTC")," "),b.xb(4),b.jc(e.title),b.xb(2),b.kc(" ",e.body," "),b.xb(1),b.ac("ngIf",e.user._id==n.user._id||1==n.user.permission)}}const m=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i){this.eventService=e,this.router=t,this.alertController=n,this.toastController=o,this.loadingController=i,this.user=new a.a,this.router.routeReuseStrategy.shouldReuseRoute=()=>!1}ngOnInit(){}ionViewWillEnter(){this.user=l.a.getStorageUser(),this.getEvents()}toast(e){return Object(c.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:1500})).present()}))}confirmClose(e){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"\xa1CONFIRMAR!",message:"\xbfEsta seguro que desea cerrar este evento?",buttons:[{text:"No",role:"cancel",cssClass:"secondary"},{text:"Si",cssClass:"success",handler:()=>{this.closeEvent(e)}}]});yield t.present()}))}getEvents(){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield this.loadingController.create({message:"Porfavor espere..."});yield e.present(),this.eventService.getEvents().subscribe(t=>Object(c.a)(this,void 0,void 0,(function*(){this.eventService.eventList=t.data,yield e.dismiss()})),t=>Object(c.a)(this,void 0,void 0,(function*(){this.toast("Problema al conectar la servidor."),yield e.dismiss()})))}))}getReloadEvents(e){this.eventService.getEvents().subscribe(t=>{this.eventService.eventList=t.data,e.target.complete()},t=>{this.toast("Problema al conectar la servidor."),e.target.complete()})}editEvent(e){this.router.navigate(["/event-form/"+e])}closeEvent(e){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({message:"Porfavor espere..."});yield t.present(),this.eventService.closeEvent(e).subscribe(n=>Object(c.a)(this,void 0,void 0,(function*(){const n=this.eventService.eventList.findIndex(t=>t._id===e);this.eventService.eventList.splice(n,1),this.toast("El evento se ha cerrado."),yield t.dismiss()})),e=>Object(c.a)(this,void 0,void 0,(function*(){this.toast("No se pudo cerrar el evento, revise su conexi\xf3n."),yield t.dismiss()})))}))}mostrarOcultar(){"none"===document.getElementById("mostrarOcultar").style.display?document.getElementById("mostrarOcultar").style.display="block":"block"===document.getElementById("mostrarOcultar").style.display&&(document.getElementById("mostrarOcultar").style.display="none")}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(d.a),b.Hb(s.f),b.Hb(r.b),b.Hb(r.Z),b.Hb(r.U))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-events"]],decls:25,vars:2,consts:[["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],[1,"leyenda"],[3,"click"],["color","medium"],["id","mostrarOcultar",2,"display","none"],["slot","fixed",3,"ionRefresh"],["color","medium",4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["size","small","color","success","routerLink","/event-form/0"],["name","add"],[1,"ion-text-center",2,"font-size","24px"],["color","headerColor"],["src","assets/icon/avatar.png"],[1,"user"],["color","myPrimaryText"],[1,"date"],["color","light","slot","end"],[4,"ngIf"],[1,"ion-text-center"],["color","myPrimary",3,"click"],["slot","end","name","create",1,"iconEdit"],["color","danger",1,"btnCerrar",3,"click"],["name","close-circle",1,"iconClose"]],template:function(e,t){1&e&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-title"),b.ic(3,"Eventos"),b.Jb(),b.Kb(4,"ion-buttons",0),b.Ib(5,"ion-menu-button",1),b.Jb(),b.Kb(6,"ion-buttons",2),b.Ib(7,"ion-back-button",3),b.Jb(),b.Jb(),b.Jb(),b.Kb(8,"ion-content"),b.Kb(9,"ion-item",4),b.Kb(10,"p",5),b.Sb("click",(function(){return t.mostrarOcultar()})),b.Kb(11,"ion-text",6),b.ic(12," \xbfQu\xe9 es esto?"),b.Jb(),b.Jb(),b.Jb(),b.Kb(13,"div",7),b.Kb(14,"ion-card"),b.Kb(15,"ion-card-content"),b.ic(16," La secci\xf3n de eventos te permite ver los eventos pr\xf3ximos en la comunidad de Cucei as\xed como poder crear un evento propio para invitar a quien lo vea a participar en el. "),b.Jb(),b.Jb(),b.Jb(),b.Kb(17,"ion-refresher",8),b.Sb("ionRefresh",(function(e){return t.getReloadEvents(e)})),b.Ib(18,"ion-refresher-content"),b.Jb(),b.Kb(19,"ion-list"),b.gc(20,u,3,0,"ion-text",9),b.gc(21,v,24,14,"ion-card",10),b.Jb(),b.Kb(22,"ion-fab",11),b.Kb(23,"ion-fab-button",12),b.Ib(24,"ion-icon",13),b.Jb(),b.Jb(),b.Jb()),2&e&&(b.xb(20),b.ac("ngIf",t.eventService.eventList.length<1),b.xb(1),b.ac("ngForOf",t.eventService.eventList))},directives:[r.w,r.R,r.Q,r.i,r.D,r.f,r.g,r.q,r.z,r.N,r.j,r.k,r.F,r.G,r.B,o.j,o.i,r.s,r.t,r.W,s.g,r.x,r.e,r.A,r.l,r.m,r.u,r.I,r.p,r.h],pipes:[o.d],styles:["ion-content[_ngcontent-%COMP%]{--background:#fff}ion-title[_ngcontent-%COMP%]{--color:#fff;font-family:Arial,Helvetica,sans-serif}ion-toolbar[_ngcontent-%COMP%]{--background:#607d8b;--color:#fff}.leyenda[_ngcontent-%COMP%]{--background:#f5f5f5}ion-card[_ngcontent-%COMP%]{--background:#fafafa}ion-item[_ngcontent-%COMP%]{--background:#f5f5f5;--color:#000}ion-card-title[_ngcontent-%COMP%]{--color:#607d8b}ion-card-content[_ngcontent-%COMP%], ion-card-title[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}ion-card-content[_ngcontent-%COMP%]{color:#000;font-size:15px}.iconClose[_ngcontent-%COMP%], .iconEdit[_ngcontent-%COMP%]{padding-left:4px;padding-bottom:2px}.btnEdit[_ngcontent-%COMP%]{width:110px}.btnClose[_ngcontent-%COMP%], .btnEdit[_ngcontent-%COMP%]{height:35px;font-family:Arial,Helvetica,sans-serif;color:#fff}.btnClose[_ngcontent-%COMP%]{width:105px}.user[_ngcontent-%COMP%]{color:#3880ff;font-size:18px}.date[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}.date[_ngcontent-%COMP%]{color:#000;font-size:15px}"]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(m)],s.i]}),e})(),p=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[o.b,i.a,r.S,g]]}),e})()}}]);
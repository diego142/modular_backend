(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{M0TU:function(t,n,e){"use strict";e.r(n),e.d(n,"BranchesPageModule",(function(){return m}));var o=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),c=e("tyNb"),s=e("mrSG"),a=e("2hxB"),b=e("J31/"),l=e("fXoL"),d=e("EQut");function u(t,n){if(1&t){const t=l.Lb();l.Kb(0,"ion-card"),l.Kb(1,"ion-card-header",9),l.Kb(2,"ion-card-title"),l.Kb(3,"ion-text",10),l.Kb(4,"strong"),l.ic(5),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"ion-card-content",11),l.ic(7),l.Jb(),l.Kb(8,"ion-footer"),l.Kb(9,"ion-row"),l.Kb(10,"ion-col",12),l.Kb(11,"ion-button",13),l.Sb("click",(function(){l.dc(t);const e=n.$implicit;return l.Ub().editBranch(e._id)})),l.ic(12," EDITAR "),l.Ib(13,"ion-icon",14),l.Jb(),l.Jb(),l.Kb(14,"ion-col",12),l.Kb(15,"ion-button",15),l.Sb("click",(function(){l.dc(t);const e=n.$implicit;return l.Ub().confirmClose(e._id)})),l.ic(16," ELIMINAR "),l.Ib(17,"ion-icon",16),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()}if(2&t){const t=n.$implicit;l.xb(5),l.kc(" ",t.name," "),l.xb(2),l.kc(" ",t.description," ")}}const h=[{path:"",component:(()=>{class t{constructor(t,n,e){this.branchService=t,this.alertController=n,this.router=e,this.user=new a.a,this.branchList=new Array}ngOnInit(){}ionViewWillEnter(){this.user=b.a.getStorageUser(),this.getBranches()}getBranches(){this.branchService.getBranches().subscribe(t=>{t.status&&(this.branchList=t.data)},t=>{console.log(t)})}deleteBranch(t){this.branchService.deleteBranch(t).subscribe(t=>{if(t.status){const n=this.branchList.findIndex(n=>n._id===t.data._id);this.branchList.splice(n,1)}},t=>{console.log(t)})}editBranch(t){this.router.navigate(["/branch-form/"+t])}confirmClose(t){return Object(s.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"\xa1CONFIRMAR!",message:"\xbfEsta seguro que desea eliminar esta rama, ya no se podra recuperar.",buttons:[{text:"No",role:"cancel",cssClass:"secondary"},{text:"Si",cssClass:"success",handler:()=>{this.deleteBranch(t)}}]});yield n.present()}))}}return t.\u0275fac=function(n){return new(n||t)(l.Hb(d.a),l.Hb(r.b),l.Hb(c.g))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-branches"]],decls:13,vars:1,consts:[["color","headerColor"],["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["size","small","color","success","routerLink","/branch-form/0"],["name","add"],["color","headerColor",2,"margin-bottom","10px","padding","10px"],[2,"font-size","16px"],["color","light",2,"font-size","16px"],[1,"ion-text-center"],["color","myPrimary",3,"click"],["name","create",2,"padding-left","4px"],["color","danger",3,"click"],["name","close-circle",2,"padding-left","2px"]],template:function(t,n){1&t&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar",0),l.Kb(2,"ion-title"),l.ic(3,"Ramas (Admin) "),l.Jb(),l.Kb(4,"ion-buttons",1),l.Ib(5,"ion-menu-button",2),l.Jb(),l.Kb(6,"ion-buttons",3),l.Ib(7,"ion-back-button",4),l.Jb(),l.Jb(),l.Jb(),l.Kb(8,"ion-content"),l.gc(9,u,18,2,"ion-card",5),l.Kb(10,"ion-fab",6),l.Kb(11,"ion-fab-button",7),l.Ib(12,"ion-icon",8),l.Jb(),l.Jb(),l.Jb()),2&t&&(l.xb(9),l.ac("ngForOf",n.branchList))},directives:[r.w,r.R,r.Q,r.i,r.D,r.f,r.g,r.q,o.i,r.s,r.t,r.V,c.h,r.x,r.j,r.l,r.m,r.N,r.k,r.u,r.I,r.p,r.h],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(n){return new(n||t)},imports:[[c.j.forChild(h)],c.j]}),t})(),m=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,r.S,f]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{UMgg:function(t,n,e){"use strict";e.r(n),e.d(n,"QuestionsPageModule",(function(){return f}));var i=e("ofXK"),o=e("3Pt+"),s=e("TEn/"),r=e("tyNb"),c=e("fXoL"),b=e("UcdY");function a(t,n){1&t&&(c.Kb(0,"ion-text",6),c.Kb(1,"div",13),c.ic(2," No hay preguntas disponibles. "),c.Jb(),c.Jb())}function l(t,n){if(1&t){const t=c.Lb();c.Kb(0,"ion-item",5),c.Sb("click",(function(){c.dc(t);const e=n.$implicit;return c.Ub().viewQuestion(e._id)})),c.Kb(1,"ion-avatar",0),c.Ib(2,"img",14),c.Jb(),c.Kb(3,"ion-text",15),c.ic(4),c.Vb(5,"date"),c.Jb(),c.Kb(6,"ion-label"),c.Kb(7,"ion-text",16),c.Kb(8,"h2",17),c.ic(9),c.Jb(),c.Jb(),c.Kb(10,"h2"),c.Kb(11,"ion-text",18),c.Kb(12,"strong"),c.ic(13),c.Jb(),c.Jb(),c.Jb(),c.Kb(14,"ion-text",6),c.Kb(15,"span"),c.ic(16),c.Jb(),c.Jb(),c.Jb(),c.Jb()}if(2&t){const t=n.$implicit;c.xb(4),c.kc(" ",c.Wb(5,4,t.date,"d/M/yyyy")," "),c.xb(5),c.jc(t.user.name+" "+t.user.lastName),c.xb(4),c.kc(" ",t.title," "),c.xb(3),c.kc(" ",t.body," ")}}const u=[{path:"",component:(()=>{class t{constructor(t,n){this.questionService=t,this.router=n,this.questionList=new Array,this.questionFilterList=new Array}ngOnInit(){}ionViewWillEnter(){this.getQuestions()}getQuestions(){this.questionService.getQuestions().subscribe(t=>{t.status&&(this.questionList=t.data.reverse(),this.questionFilterList=this.questionList)},t=>{console.log(t)})}findQuestion(t){t=t.trim();const n=new RegExp(t,"i");this.questionFilterList=[];for(const e of this.questionList)e.title.match(n)&&this.questionFilterList.push(e)}viewQuestion(t){this.router.navigate(["/question-view/"+t])}showHide(){"none"===document.getElementById("showHide").style.display?document.getElementById("showHide").style.display="block":"block"===document.getElementById("showHide").style.display&&(document.getElementById("showHide").style.display="none")}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(b.a),c.Hb(r.f))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-questions"]],decls:24,vars:2,consts:[["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],[1,"leyenda"],[3,"click"],["color","medium"],["slot","end","color","light",2,"margin","0px","width","70%"],["color","primary",2,"margin-right","10px"],[1,"findInput",3,"keyup"],["id","showHide",2,"display","none"],["color","medium",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[1,"ion-text-center",2,"font-size","24px"],["src","assets/icon/avatar.png"],["slot","end","color","myPrimary"],["color","primary"],[1,"user"],[1,"title"]],template:function(t,n){1&t&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-title"),c.ic(3,"Preguntas "),c.Jb(),c.Kb(4,"ion-buttons",0),c.Ib(5,"ion-menu-button",1),c.Jb(),c.Kb(6,"ion-buttons",2),c.Ib(7,"ion-back-button",3),c.Jb(),c.Jb(),c.Jb(),c.Kb(8,"ion-content"),c.Kb(9,"ion-item",4),c.Kb(10,"p",5),c.Sb("click",(function(){return n.showHide()})),c.Kb(11,"ion-text",6),c.ic(12," \xbfQu\xe9 es esto?"),c.Jb(),c.Jb(),c.Kb(13,"ion-item",7),c.Kb(14,"ion-label",8),c.ic(15,"Buscar: "),c.Jb(),c.Kb(16,"ion-input",9),c.Sb("keyup",(function(t){return n.findQuestion(t.target.value)})),c.Jb(),c.Jb(),c.Jb(),c.Kb(17,"div",10),c.Kb(18,"ion-card"),c.Kb(19,"ion-card-content"),c.ic(20," En esta secci\xf3n podr\xe1s ver todas las preguntas que se han realizado en todo el foro. Las preguntas aqu\xed abarcan los temas en general. "),c.Jb(),c.Jb(),c.Jb(),c.Kb(21,"ion-list"),c.gc(22,a,3,0,"ion-text",11),c.gc(23,l,17,7,"ion-item",12),c.Jb(),c.Jb()),2&t&&(c.xb(22),c.ac("ngIf",n.questionFilterList.length<1),c.xb(1),c.ac("ngForOf",n.questionFilterList))},directives:[s.w,s.R,s.Q,s.i,s.D,s.f,s.g,s.q,s.z,s.N,s.A,s.y,s.Y,s.j,s.k,s.B,i.j,i.i,s.e],pipes:[i.d],styles:[".select[_ngcontent-%COMP%]:hover{cursor:pointer}ion-content[_ngcontent-%COMP%]{--background:#fff}ion-toolbar[_ngcontent-%COMP%]{--background:#00796b;--color:#fff}ion-card-content[_ngcontent-%COMP%]{color:#000;font-family:Arial,Helvetica,sans-serif;font-size:15px}.leyenda[_ngcontent-%COMP%]{--background:#f5f5f5}.user[_ngcontent-%COMP%]{color:#3880ff;font-size:18px}.title[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}.title[_ngcontent-%COMP%]{color:#607d8b}.findInput[_ngcontent-%COMP%]{color:#107aac;background-color:#fbfbfb}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(u)],r.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[i.b,o.a,s.S,d]]}),t})()}}]);
!function(){function t(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(u)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8EBI":function(e,o,r){"use strict";r.r(o),r.d(o,"QuestionFormPageModule",(function(){return O}));var a=r("ofXK"),s=r("3Pt+"),u=r("TEn/"),c=r("tyNb"),l=r("mrSG"),b=r("P+PR"),f=r("2hxB"),d=r("J31/"),g=r("fXoL"),h=r("UcdY"),m=r("K1j1");function v(t,e){if(1&t){var n=g.Lb();g.Kb(0,"ion-button",12),g.Sb("click",(function(){return g.dc(n),g.Ub().createQuestion()})),g.ic(1," PREGUNTAR "),g.Jb()}if(2&t){g.Ub();var i=g.cc(10);g.ac("disabled",!i.valid)}}function y(t,e){if(1&t){var n=g.Lb();g.Kb(0,"ion-button",12),g.Sb("click",(function(){return g.dc(n),g.Ub().updateQuestion()})),g.ic(1," ACTUALIZAR "),g.Jb()}if(2&t){g.Ub();var i=g.cc(10);g.ac("disabled",!i.valid)}}function p(t,e){if(1&t){var n=g.Lb();g.Kb(0,"ion-item"),g.Kb(1,"ion-button",16),g.Sb("click",(function(){g.dc(n);var t=e.$implicit;return g.Ub(2).getQuestions(t.ref)})),g.ic(2),g.Jb(),g.Kb(3,"ion-text",17),g.ic(4,"Mostrar sugerencias."),g.Jb(),g.Jb()}if(2&t){var i=e.$implicit;g.xb(2),g.jc(i.name)}}function K(t,e){if(1&t){var n=g.Lb();g.Kb(0,"ion-item",18),g.Sb("click",(function(){g.dc(n);var t=e.$implicit;return g.Ub(2).viewQuestion(t._id)})),g.Kb(1,"ion-text",19),g.ic(2),g.Vb(3,"date"),g.Jb(),g.Kb(4,"ion-label"),g.Kb(5,"h2"),g.Kb(6,"strong"),g.ic(7),g.Jb(),g.Jb(),g.Kb(8,"ion-text",20),g.Kb(9,"span"),g.ic(10),g.Jb(),g.Jb(),g.Jb(),g.Jb()}if(2&t){var i=e.$implicit;g.xb(2),g.kc(" ",g.Wb(3,3,i.date,"d/M/yyyy")," "),g.xb(5),g.kc(" ",i.title," "),g.xb(3),g.kc(" ",i.body," ")}}function q(t,e){if(1&t&&(g.Kb(0,"div"),g.Kb(1,"ion-list"),g.Kb(2,"ion-text",13),g.ic(3,"Tu pregunta es de tipo:"),g.Jb(),g.gc(4,p,5,1,"ion-item",14),g.Jb(),g.Kb(5,"ion-list"),g.gc(6,K,11,6,"ion-item",15),g.Jb(),g.Jb()),2&t){var n=g.Ub();g.xb(4),g.ac("ngForOf",n.labels),g.xb(2),g.ac("ngForOf",n.questionList)}}var R,w,A,J=[{path:"",component:(R=function(){function e(t,i,o,r,a){n(this,e),this.activatedRoute=t,this.questionService=i,this.router=o,this.alertController=r,this.nlService=a,this.question=new b.a,this.user=new f.a,this.today=(new Date).toISOString()}var o,r,a;return o=e,(r=[{key:"ngOnInit",value:function(){this.characters=[" ",".","?"]}},{key:"ionViewWillEnter",value:function(){this.question=new b.a,this.questionId=this.activatedRoute.snapshot.params.id,this.user=d.a.getStorageUser(),this.getQuestion(this.questionId),this.show=!1,this.questionList=Array(),this.labels=new Array}},{key:"navigateAlert",value:function(t,e,n,i){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var r,a=this;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.alertController.create({header:t,subHeader:e,buttons:[{text:n,handler:function(){a.router.navigate(["/"+i+"/"])}}]});case 2:return r=o.sent,o.next=5,r.present();case 5:case"end":return o.stop()}}),o,this)})))}},{key:"createQuestion",value:function(){var t=this;this.question.user._id=this.user._id,this.question.date=new Date,this.question.open=!0,this.questionService.createQuestion(this.question).subscribe((function(e){e.status?t.router.navigate(["/tag-form/"+e.data._id],{queryParams:{labels:t.labels.map((function(t){return t.ref}))}}):t.navigateAlert("\xa1ERROR AL CREAR!","Hubo un problema al intentar crear esta pregunta","OK","my-questions")}),(function(e){t.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","my-questions")}))}},{key:"updateQuestion",value:function(){var t=this;this.questionService.updateQuestion(this.question).subscribe((function(e){e.status?t.navigateAlert("\xa1PREGUNTA ACTUALIZADA!","Actualizaste esta pregunta","OK","my-questions"):t.navigateAlert("\xa1ERROR AL ACTULIZAR!","Hubo un problema al intentar actualizar estra pregunta","OK","my-questions")}),(function(e){t.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","events")}))}},{key:"getQuestion",value:function(t){var e=this;"0"!==t?this.questionService.getQuestionById(t).subscribe((function(t){t.status?e.question=t.data:e.navigateAlert("\xa1ERROR AL OBTENER!","Hubo un problema al intentar obtener la informacion de esta pregunta","OK","my-questions")}),(function(t){e.navigateAlert("ERROR DE SERVIDOR",t.message,"OK","my-questions")})):this.question=new b.a}},{key:"getClassifications",value:function(t){var e=this;(this.question.title?this.question.title.length:0)<10?(this.labels=[],this.show=!1,this.questionList=new Array):this.characters.find((function(e){return t===e}))&&this.nlService.getClassify(this.question).subscribe((function(t){t.data.length&&(e.labels=t.data,e.show=!0)}),(function(t){console.log(t)}))}},{key:"getQuestions",value:function(e){var n=this;this.nlService.getQuestions(e).subscribe((function(e){if(e.status){n.questionList=new Array;var i,o=t(e.data);try{for(o.s();!(i=o.n()).done;){var r=i.value;n.questionList.push(r.question)}}catch(a){o.e(a)}finally{o.f()}}}),(function(t){console.log(t)}))}},{key:"viewQuestion",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"my-custom-class",header:"\xbfSalir de la edici\xf3n?",message:"Si continuas se perdera el progreso de tu pregunta.",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary"},{text:"Continuar",cssClass:"success",handler:function(){i.router.navigate(["/question-view/"+t])}}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}}])&&i(o.prototype,r),a&&i(o,a),e}(),R.\u0275fac=function(t){return new(t||R)(g.Hb(c.a),g.Hb(h.a),g.Hb(c.f),g.Hb(u.b),g.Hb(m.a))},R.\u0275cmp=g.Bb({type:R,selectors:[["app-question-form"]],decls:29,vars:6,consts:[["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],["formQuestion","ngForm"],["displayFormat","MMMM DD, YYYY","display-timezone","utc","readonly","",3,"value"],["position","floating","color","medium"],["type","text","name","title","minlength","10","required","",3,"ngModel","ngModelChange","keyup"],["name","body","minlength","8","required","",3,"ngModel","ngModelChange","ionFocus"],["expand","full","color","myPrimary",3,"disabled","click",4,"ngIf","ngIfElse"],["elseBtn",""],[4,"ngIf"],["expand","full","color","myPrimary",3,"disabled","click"],[1,"ion-margin-start"],[4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"],["expand","full","color","myPrimary",3,"click"],["color","medium","slot","end"],[3,"click"],["slot","end","color","myPrimaryDark"],["color","myPrimaryTextColor"]],template:function(t,e){if(1&t&&(g.Kb(0,"ion-header"),g.Kb(1,"ion-toolbar"),g.Kb(2,"ion-title"),g.ic(3,"Nueva pregunta "),g.Jb(),g.Kb(4,"ion-buttons",0),g.Ib(5,"ion-menu-button",1),g.Jb(),g.Kb(6,"ion-buttons",2),g.Ib(7,"ion-back-button",3),g.Jb(),g.Jb(),g.Jb(),g.Kb(8,"ion-content"),g.Kb(9,"form",null,4),g.Kb(11,"ion-list"),g.Kb(12,"ion-item"),g.Kb(13,"ion-label"),g.ic(14,"Fecha:"),g.Jb(),g.Ib(15,"ion-datetime",5),g.Jb(),g.Kb(16,"ion-item"),g.Kb(17,"ion-label",6),g.ic(18,"Tu pregunta:"),g.Jb(),g.Kb(19,"ion-input",7),g.Sb("ngModelChange",(function(t){return e.question.title=t}))("keyup",(function(t){return e.getClassifications(t.key)})),g.Jb(),g.Jb(),g.Kb(20,"ion-item"),g.Kb(21,"ion-label",6),g.ic(22,"Agrega mas detalles sobre la pregunta:"),g.Jb(),g.Kb(23,"ion-textarea",8),g.Sb("ngModelChange",(function(t){return e.question.body=t}))("ionFocus",(function(){return e.getClassifications("?")})),g.Jb(),g.Jb(),g.Jb(),g.Jb(),g.Kb(24,"section"),g.gc(25,v,2,1,"ion-button",9),g.gc(26,y,2,1,"ng-template",null,10,g.hc),g.Jb(),g.gc(28,q,7,2,"div",11),g.Jb()),2&t){var n=g.cc(27);g.xb(15),g.ac("value",e.today),g.xb(4),g.ac("ngModel",e.question.title),g.xb(4),g.ac("ngModel",e.question.body),g.xb(2),g.ac("ngIf","0"==e.questionId)("ngIfElse",n),g.xb(3),g.ac("ngIf",e.show)}},directives:[u.w,u.R,u.Q,u.i,u.D,u.f,u.g,u.q,s.k,s.f,s.g,u.B,u.z,u.A,u.r,u.X,u.y,u.Y,s.b,s.j,s.e,s.h,u.O,a.j,u.h,u.N,a.i],pipes:[a.d],styles:["ion-content[_ngcontent-%COMP%]{--background:#fff}ion-title[_ngcontent-%COMP%]{--color:#fff;font-family:Arial,Helvetica,sans-serif}ion-toolbar[_ngcontent-%COMP%]{--background:#00796b;--color:#fff}ion-button[_ngcontent-%COMP%]{--color:#fff;font-family:Arial,Helvetica,sans-serif}"]}),R)}],k=((A=function t(){n(this,t)}).\u0275mod=g.Fb({type:A}),A.\u0275inj=g.Eb({factory:function(t){return new(t||A)},imports:[[c.i.forChild(J)],c.i]}),A),O=((w=function t(){n(this,t)}).\u0275mod=g.Fb({type:w}),w.\u0275inj=g.Eb({factory:function(t){return new(t||w)},imports:[[a.b,s.a,u.S,k]]}),w)}}])}();
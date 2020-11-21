!function(){function t(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){c=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(c)throw s}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{UMgg:function(e,o,r){"use strict";r.r(o),r.d(o,"QuestionsPageModule",(function(){return w}));var s=r("ofXK"),a=r("3Pt+"),c=r("TEn/"),u=r("tyNb"),l=r("mrSG"),b=r("fXoL"),f=r("UcdY");function d(t,e){1&t&&(b.Kb(0,"ion-text",6),b.Kb(1,"div",14),b.ic(2," No hay preguntas disponibles. "),b.Jb(),b.Jb())}function g(t,e){if(1&t){var n=b.Lb();b.Kb(0,"ion-item",5),b.Sb("click",(function(){b.dc(n);var t=e.$implicit;return b.Ub().viewQuestion(t._id)})),b.Kb(1,"ion-avatar",0),b.Ib(2,"img",15),b.Jb(),b.Kb(3,"ion-text",16),b.ic(4),b.Vb(5,"date"),b.Jb(),b.Kb(6,"ion-label"),b.Kb(7,"ion-text",17),b.Kb(8,"h2",18),b.ic(9),b.Jb(),b.Jb(),b.Kb(10,"h2"),b.Kb(11,"ion-text",19),b.Kb(12,"strong"),b.ic(13),b.Jb(),b.Jb(),b.Jb(),b.Kb(14,"ion-text",6),b.Kb(15,"span"),b.ic(16),b.Jb(),b.Jb(),b.Jb(),b.Jb()}if(2&t){var i=e.$implicit;b.xb(4),b.kc(" ",b.Wb(5,4,i.date,"d/M/yyyy")," "),b.xb(5),b.jc(i.user.name+" "+i.user.lastName),b.xb(4),b.kc(" ",i.title," "),b.xb(3),b.kc(" ",i.body," ")}}var y,p,m,h=[{path:"",component:(y=function(){function e(t,i,o){n(this,e),this.questionService=t,this.router=i,this.loadingController=o,this.questionList=new Array,this.questionFilterList=new Array}var o,r,s;return o=e,(r=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.getQuestions()}},{key:"getQuestions",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:"Porfavor espere..."});case 2:return e=t.sent,t.next=5,e.present();case 5:this.questionService.getQuestions().subscribe((function(t){t.status&&(n.questionList=t.data.reverse(),n.questionFilterList=n.questionList),e.dismiss()}),(function(t){console.log(t),e.dismiss()}));case 6:case"end":return t.stop()}}),t,this)})))}},{key:"getReloadQns",value:function(t){var e=this;this.questionService.getQuestions().subscribe((function(n){n.status&&(e.questionList=n.data.reverse(),e.questionFilterList=e.questionList,t.target.complete())}),(function(e){t.target.complete(),console.log(e)}))}},{key:"findQuestion",value:function(e){e=e.trim();var n=new RegExp(e,"i");this.questionFilterList=[];var i,o=t(this.questionList);try{for(o.s();!(i=o.n()).done;){var r=i.value;r.title.match(n)&&this.questionFilterList.push(r)}}catch(s){o.e(s)}finally{o.f()}}},{key:"viewQuestion",value:function(t){this.router.navigate(["/question-view/"+t])}},{key:"showHide",value:function(){"none"===document.getElementById("showHide").style.display?document.getElementById("showHide").style.display="block":"block"===document.getElementById("showHide").style.display&&(document.getElementById("showHide").style.display="none")}}])&&i(o.prototype,r),s&&i(o,s),e}(),y.\u0275fac=function(t){return new(t||y)(b.Hb(f.a),b.Hb(u.f),b.Hb(c.U))},y.\u0275cmp=b.Bb({type:y,selectors:[["app-questions"]],decls:26,vars:2,consts:[["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],[1,"leyenda"],[3,"click"],["color","medium"],["slot","end","color","light",2,"margin","0px","width","70%"],["color","primary",2,"margin-right","10px"],[1,"findInput",3,"keyup"],["id","showHide",2,"display","none"],["slot","fixed",3,"ionRefresh"],["color","medium",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[1,"ion-text-center",2,"font-size","24px"],["src","assets/icon/avatar.png"],["slot","end","color","myPrimary"],["color","primary"],[1,"user"],[1,"title"]],template:function(t,e){1&t&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-title"),b.ic(3,"Preguntas "),b.Jb(),b.Kb(4,"ion-buttons",0),b.Ib(5,"ion-menu-button",1),b.Jb(),b.Kb(6,"ion-buttons",2),b.Ib(7,"ion-back-button",3),b.Jb(),b.Jb(),b.Jb(),b.Kb(8,"ion-content"),b.Kb(9,"ion-item",4),b.Kb(10,"p",5),b.Sb("click",(function(){return e.showHide()})),b.Kb(11,"ion-text",6),b.ic(12," \xbfQu\xe9 es esto?"),b.Jb(),b.Jb(),b.Kb(13,"ion-item",7),b.Kb(14,"ion-label",8),b.ic(15,"Buscar: "),b.Jb(),b.Kb(16,"ion-input",9),b.Sb("keyup",(function(t){return e.findQuestion(t.target.value)})),b.Jb(),b.Jb(),b.Jb(),b.Kb(17,"div",10),b.Kb(18,"ion-card"),b.Kb(19,"ion-card-content"),b.ic(20," En esta secci\xf3n podr\xe1s ver todas las preguntas que se han realizado en todo el foro. Las preguntas aqu\xed abarcan los temas en general. "),b.Jb(),b.Jb(),b.Jb(),b.Kb(21,"ion-refresher",11),b.Sb("ionRefresh",(function(t){return e.getReloadQns(t)})),b.Ib(22,"ion-refresher-content"),b.Jb(),b.Kb(23,"ion-list"),b.gc(24,d,3,0,"ion-text",12),b.gc(25,g,17,7,"ion-item",13),b.Jb(),b.Jb()),2&t&&(b.xb(24),b.ac("ngIf",e.questionFilterList.length<1),b.xb(1),b.ac("ngForOf",e.questionFilterList))},directives:[c.w,c.R,c.Q,c.i,c.D,c.f,c.g,c.q,c.z,c.N,c.A,c.y,c.Y,c.j,c.k,c.F,c.G,c.B,s.j,s.i,c.e],pipes:[s.d],styles:[".select[_ngcontent-%COMP%]:hover{cursor:pointer}ion-content[_ngcontent-%COMP%]{--background:#fff}ion-toolbar[_ngcontent-%COMP%]{--background:#00796b;--color:#fff}ion-card-content[_ngcontent-%COMP%]{color:#000;font-family:Arial,Helvetica,sans-serif;font-size:15px}.leyenda[_ngcontent-%COMP%]{--background:#f5f5f5}.user[_ngcontent-%COMP%]{color:#3880ff;font-size:18px}.title[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}.title[_ngcontent-%COMP%]{color:#607d8b}.findInput[_ngcontent-%COMP%]{color:#107aac;background-color:#fbfbfb}"]}),y)}],v=((m=function t(){n(this,t)}).\u0275mod=b.Fb({type:m}),m.\u0275inj=b.Eb({factory:function(t){return new(t||m)},imports:[[u.i.forChild(h)],u.i]}),m),w=((p=function t(){n(this,t)}).\u0275mod=b.Fb({type:p}),p.\u0275inj=b.Eb({factory:function(t){return new(t||p)},imports:[[s.b,a.a,c.S,v]]}),p)}}])}();
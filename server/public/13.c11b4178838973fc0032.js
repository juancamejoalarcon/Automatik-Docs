(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{cfIE:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),s=u("SizQ"),i=u("f1M8"),a=u("KCa2"),r=u("g6Sl"),c=u("pUM3"),g=u("2xeN"),b=u("SK3e"),d=u("a+cq"),p=u("gIcY"),m=u("NP9A"),h=u("p8ln"),v=u("Ip0R"),A=u("ey9i"),f=function(){function l(l,n,u,t){this.router=l,this.userService=n,this.fb=u,this.toastr=t,this.user=new A.d,this.errors={},this.isSubmitting=!1,this.settingsForm=this.fb.group({image:"",username:"",email:"",description:"",nameAndSurname:"",contactInformation:"",dateOfBirth:"",companyName:""})}return l.prototype.ngOnInit=function(){Object.assign(this.user,this.userService.getCurrentUser()),console.log(this.user),this.settingsForm.patchValue(this.user)},l.prototype.onFileChange=function(l){var n=this,u=new FileReader;if(l.target.files&&l.target.files.length){var t=l.target.files[0],o=t.size/1024/1024;this.hasExtension(l.target.value,[".jpg",".gif",".png"])?o>1?(l.target.value="",this.toastr.error("File is bigger than 1 MB","Error",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"})):(u.readAsDataURL(t),u.onload=function(t){var o=new Image;o.src=t.target.result,o.onload=function(){o.height===o.width?(n.settingsForm.patchValue({image:u.result}),n.imageSrc.nativeElement.src=u.result):(l.target.value="",n.toastr.error("Size error width and height must be equal","Error",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}))}}):(l.target.value="",this.toastr.error("File must be of type jpg gif or png","Error",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}))}},l.prototype.hasExtension=function(l,n){return new RegExp("("+n.join("|").replace(/\./g,"\\.")+")$").test(l)},l.prototype.submitForm=function(){var l=this;this.isSubmitting=!0;var n=this.validation(this.settingsForm.value);console.log(n),this.userService.update(n).subscribe(function(n){l.toastr.success("User updated","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"})},function(n){l.errors=n,l.isSubmitting=!1})},l.prototype.validation=function(l){for(var n={},u=0,t=Object.entries(l);u<t.length;u++){var o=t[u],e=o[0],s=o[1];l[e]!==this.user[e]&&(n[e]=s,this.user[e]=s)}return n},l.prototype.toggleModal=function(l){void 0===l&&(l=""),this.modalStatus=l,this.modal.nativeElement.classList.toggle("show-modal")},l.prototype.changePassword=function(l,n){var u=this;l===n?this.toastr.error("Old and new password are the same","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}):""===l||""===n?this.toastr.error("Fields cannot be empty","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}):this.userService.changePassword({oldPassword:l,newPassword:n}).subscribe(function(l){l.invalidPassword?u.toastr.error("Current password is wrong","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}):(u.toggleModal(),u.toastr.success("User updated","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}))},function(l){u.errors=l,u.isSubmitting=!1})},l.prototype.removeAccount=function(l){var n=this;confirm("\xbfSeguro que deseas eliminar tu usuario? Una vez eliminado no habr\xe1 posibilidad de recuperarlo, as\xed como tampoco podr\xe1s recuperar ninguno de los documentos creados con este usuario")&&this.userService.removeAccount(l).subscribe(function(l){l.invalidPassword?n.toastr.error("Contrase\xf1a incorrecta","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}):l.userRemoved&&(n.toastr.success("Usuario eliminado","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}),n.logout())},function(l){n.errors=l,n.isSubmitting=!1})},l.prototype.logout=function(){this.userService.purgeAuth(),this.router.navigateByUrl("/")},l}(),C=u("ZYCi"),_=u("9D3k"),y=u("SZbH"),q=t.ob({encapsulation:2,styles:[],data:{}});function I(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,5,"input",[["placeholder","Contrase\xf1a actual"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,e=l.component;return"input"===n&&(o=!1!==t.Ab(l,1)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,1).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,1)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,1)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.oldPass=u)&&o),o},null,null)),t.pb(1,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(3,671744,null,0,p.q,[[8,null],[8,null],[8,null],[6,p.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,p.m,null,[p.q]),t.pb(5,16384,null,0,p.n,[[4,p.m]],null,null)],function(l,n){l(n,3,0,n.component.oldPass)},function(l,n){l(n,0,0,t.Ab(n,5).ngClassUntouched,t.Ab(n,5).ngClassTouched,t.Ab(n,5).ngClassPristine,t.Ab(n,5).ngClassDirty,t.Ab(n,5).ngClassValid,t.Ab(n,5).ngClassInvalid,t.Ab(n,5).ngClassPending)})}function P(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,5,"input",[["placeholder","Contrase\xf1a nueva"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,e=l.component;return"input"===n&&(o=!1!==t.Ab(l,1)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,1).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,1)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,1)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.newPass=u)&&o),o},null,null)),t.pb(1,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(3,671744,null,0,p.q,[[8,null],[8,null],[8,null],[6,p.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,p.m,null,[p.q]),t.pb(5,16384,null,0,p.n,[[4,p.m]],null,null)],function(l,n){l(n,3,0,n.component.newPass)},function(l,n){l(n,0,0,t.Ab(n,5).ngClassUntouched,t.Ab(n,5).ngClassTouched,t.Ab(n,5).ngClassPristine,t.Ab(n,5).ngClassDirty,t.Ab(n,5).ngClassValid,t.Ab(n,5).ngClassInvalid,t.Ab(n,5).ngClassPending)})}function S(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,5,"input",[["placeholder","Contrase\xf1a"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,e=l.component;return"input"===n&&(o=!1!==t.Ab(l,1)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,1).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,1)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,1)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.removeAccountPass=u)&&o),o},null,null)),t.pb(1,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(3,671744,null,0,p.q,[[8,null],[8,null],[8,null],[6,p.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,p.m,null,[p.q]),t.pb(5,16384,null,0,p.n,[[4,p.m]],null,null)],function(l,n){l(n,3,0,n.component.removeAccountPass)},function(l,n){l(n,0,0,t.Ab(n,5).ngClassUntouched,t.Ab(n,5).ngClassTouched,t.Ab(n,5).ngClassPristine,t.Ab(n,5).ngClassDirty,t.Ab(n,5).ngClassValid,t.Ab(n,5).ngClassInvalid,t.Ab(n,5).ngClassPending)})}function w(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"button",[["class","button-filled"],["id","modal-button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.changePassword(o.oldPass.value,o.newPass.value)&&t),t},null,null)),(l()(),t.Ib(-1,null,["Guardar"]))],null,null)}function F(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"button",[["class","button-filled"],["id","modal-button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.removeAccount(o.removeAccountPass)&&t),t},null,null)),(l()(),t.Ib(-1,null,["Eliminar"]))],null,null)}function E(l){return t.Kb(0,[t.Gb(402653184,1,{modal:0}),t.Gb(402653184,2,{imageSrc:0}),(l()(),t.qb(2,0,null,null,4,"div",[["class","sub-menu"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,3,"div",[["class","sub-menu__container"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,2,"ul",[["class","sub-menu__nav sub-menu__nav--my-forms"],["style","justify-content: center;"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"li",[["class","sub-menu__nav__button sub-menu__nav__button--without-hover"]],null,null,null,null,null)),(l()(),t.Ib(6,null,[" "," "])),(l()(),t.qb(7,0,null,null,72,"div",[["class","settings"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"app-list-errors",[],null,null,null,m.b,m.a)),t.pb(9,49152,null,0,h.a,[],{errors:[0,"errors"]},null),(l()(),t.qb(10,0,null,null,69,"form",[["class","settings__container"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,e=l.component;return"submit"===n&&(o=!1!==t.Ab(l,12).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Ab(l,12).onReset()&&o),"ngSubmit"===n&&(o=!1!==e.submitForm()&&o),o},null,null)),t.pb(11,16384,null,0,p.v,[],null,null),t.pb(12,540672,null,0,p.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Fb(2048,null,p.c,null,[p.i]),t.pb(14,16384,null,0,p.o,[[4,p.c]],null,null),(l()(),t.qb(15,0,null,null,7,"div",[["class","settings__profile-image"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,6,"div",[["class","settings__profile-image__container"]],null,null,null,null,null)),(l()(),t.qb(17,0,null,null,1,"div",[["class","settings__profile__image__img"]],null,null,null,null,null)),(l()(),t.qb(18,0,[[2,0],["imageSrc",1]],null,0,"img",[["alt","profile image"]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(19,0,null,null,3,"fieldset",[["class","settings__profile__image__input"]],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,2,"label",[["class","input-file"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Cambiar imagen de perfil "])),(l()(),t.qb(22,0,null,null,0,"input",[["name","profile-image"],["type","file"]],null,[[null,"change"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.onFileChange(u)&&t),t},null,null)),(l()(),t.qb(23,0,null,null,47,"div",[["class","settings__form"]],null,null,null,null,null)),(l()(),t.qb(24,0,null,null,46,"div",[["class","settings__form__container"]],null,null,null,null,null)),(l()(),t.qb(25,0,null,null,18,"fieldset",[["class","settings__form__group"]],null,null,null,null,null)),(l()(),t.qb(26,0,null,null,5,"input",[["formControlName","username"],["placeholder","Nombre de usuario"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,27)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,27).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,27)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,27)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(27,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(29,671744,null,0,p.h,[[3,p.c],[8,null],[8,null],[6,p.l],[2,p.x]],{name:[0,"name"]},null),t.Fb(2048,null,p.m,null,[p.h]),t.pb(31,16384,null,0,p.n,[[4,p.m]],null,null),(l()(),t.qb(32,0,null,null,5,"input",[["formControlName","nameAndSurname"],["placeholder","Nombre y apellidos"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,33)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,33).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,33)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,33)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(33,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(35,671744,null,0,p.h,[[3,p.c],[8,null],[8,null],[6,p.l],[2,p.x]],{name:[0,"name"]},null),t.Fb(2048,null,p.m,null,[p.h]),t.pb(37,16384,null,0,p.n,[[4,p.m]],null,null),(l()(),t.qb(38,0,null,null,5,"input",[["formControlName","email"],["placeholder","Corren electr\xf3nico"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,39)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,39).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,39)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,39)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(39,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(41,671744,null,0,p.h,[[3,p.c],[8,null],[8,null],[6,p.l],[2,p.x]],{name:[0,"name"]},null),t.Fb(2048,null,p.m,null,[p.h]),t.pb(43,16384,null,0,p.n,[[4,p.m]],null,null),(l()(),t.qb(44,0,null,null,24,"fieldset",[["class","settings__form__group"]],null,null,null,null,null)),(l()(),t.qb(45,0,null,null,5,"textarea",[["cols","30"],["formControlName","description"],["name","description"],["placeholder","Description"],["rows","10"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,46)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,46).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,46)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,46)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(46,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(48,671744,null,0,p.h,[[3,p.c],[8,null],[8,null],[6,p.l],[2,p.x]],{name:[0,"name"]},null),t.Fb(2048,null,p.m,null,[p.h]),t.pb(50,16384,null,0,p.n,[[4,p.m]],null,null),(l()(),t.qb(51,0,null,null,5,"input",[["formControlName","dateOfBirth"],["placeholder","Fecha de nacimiento"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,52)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,52).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,52)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,52)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(52,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(54,671744,null,0,p.h,[[3,p.c],[8,null],[8,null],[6,p.l],[2,p.x]],{name:[0,"name"]},null),t.Fb(2048,null,p.m,null,[p.h]),t.pb(56,16384,null,0,p.n,[[4,p.m]],null,null),(l()(),t.qb(57,0,null,null,5,"input",[["formControlName","companyName"],["placeholder","Empresa"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,58)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,58).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,58)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,58)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(58,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(60,671744,null,0,p.h,[[3,p.c],[8,null],[8,null],[6,p.l],[2,p.x]],{name:[0,"name"]},null),t.Fb(2048,null,p.m,null,[p.h]),t.pb(62,16384,null,0,p.n,[[4,p.m]],null,null),(l()(),t.qb(63,0,null,null,5,"input",[["formControlName","contactInformation"],["placeholder","Contacto"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,64)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,64).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,64)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,64)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(64,16384,null,0,p.d,[t.E,t.k,[2,p.a]],null,null),t.Fb(1024,null,p.l,function(l){return[l]},[p.d]),t.pb(66,671744,null,0,p.h,[[3,p.c],[8,null],[8,null],[6,p.l],[2,p.x]],{name:[0,"name"]},null),t.Fb(2048,null,p.m,null,[p.h]),t.pb(68,16384,null,0,p.n,[[4,p.m]],null,null),(l()(),t.qb(69,0,null,null,1,"div",[["class","settings__form__button-container"]],null,null,null,null,null)),(l()(),t.qb(70,0,null,null,0,"button",[["class","button-filled icon icon-save-solid"],["type","submit"]],null,null,null,null,null)),(l()(),t.qb(71,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.qb(72,0,null,null,7,"div",[["class","settings__buttons"]],null,null,null,null,null)),(l()(),t.qb(73,0,null,null,6,"div",[["class","settings__buttons__container"]],null,null,null,null,null)),(l()(),t.qb(74,0,null,null,1,"button",[["class","button-filled trigger"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleModal("changePass")&&t),t},null,null)),(l()(),t.Ib(-1,null,[" Cambiar contrase\xf1a "])),(l()(),t.qb(76,0,null,null,1,"button",[["class","button-filled"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t},null,null)),(l()(),t.Ib(-1,null,[" Cerrar sesi\xf3n "])),(l()(),t.qb(78,0,null,null,1,"button",[["class","button-filled"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleModal("remove")&&t),t},null,null)),(l()(),t.Ib(-1,null,[" Eliminar cuenta "])),(l()(),t.qb(80,0,[[1,0],["modal",1]],null,16,"div",[["class","modal"]],null,null,null,null,null)),(l()(),t.qb(81,0,null,null,15,"div",[["class","modal__content"],["style","padding: 2rem"]],null,null,null,null,null)),(l()(),t.qb(82,0,null,null,7,"div",[["class","modal__content__modal-middle modal__content__modal-middle--change-password"]],null,null,null,null,null)),(l()(),t.qb(83,0,null,null,6,"div",[["class","modal__content__modal-middle__container"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,I)),t.pb(85,16384,null,0,v.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,P)),t.pb(87,16384,null,0,v.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,S)),t.pb(89,16384,null,0,v.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(90,0,null,null,6,"div",[["class","modal__content__modal-bottom"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,w)),t.pb(92,16384,null,0,v.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,F)),t.pb(94,16384,null,0,v.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(95,0,null,null,1,"button",[["class","button-filled"],["id","modal-button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleModal()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Cancelar"]))],function(l,n){var u=n.component;l(n,9,0,u.errors),l(n,12,0,u.settingsForm),l(n,29,0,"username"),l(n,35,0,"nameAndSurname"),l(n,41,0,"email"),l(n,48,0,"description"),l(n,54,0,"dateOfBirth"),l(n,60,0,"companyName"),l(n,66,0,"contactInformation"),l(n,85,0,"changePass"===u.modalStatus),l(n,87,0,"changePass"===u.modalStatus),l(n,89,0,"remove"===u.modalStatus),l(n,92,0,"changePass"===u.modalStatus),l(n,94,0,"remove"===u.modalStatus)},function(l,n){var u=n.component;l(n,6,0,u.user.username),l(n,10,0,t.Ab(n,14).ngClassUntouched,t.Ab(n,14).ngClassTouched,t.Ab(n,14).ngClassPristine,t.Ab(n,14).ngClassDirty,t.Ab(n,14).ngClassValid,t.Ab(n,14).ngClassInvalid,t.Ab(n,14).ngClassPending),l(n,18,0,t.sb(1,"",u.user.image,"")),l(n,26,0,t.Ab(n,31).ngClassUntouched,t.Ab(n,31).ngClassTouched,t.Ab(n,31).ngClassPristine,t.Ab(n,31).ngClassDirty,t.Ab(n,31).ngClassValid,t.Ab(n,31).ngClassInvalid,t.Ab(n,31).ngClassPending),l(n,32,0,t.Ab(n,37).ngClassUntouched,t.Ab(n,37).ngClassTouched,t.Ab(n,37).ngClassPristine,t.Ab(n,37).ngClassDirty,t.Ab(n,37).ngClassValid,t.Ab(n,37).ngClassInvalid,t.Ab(n,37).ngClassPending),l(n,38,0,t.Ab(n,43).ngClassUntouched,t.Ab(n,43).ngClassTouched,t.Ab(n,43).ngClassPristine,t.Ab(n,43).ngClassDirty,t.Ab(n,43).ngClassValid,t.Ab(n,43).ngClassInvalid,t.Ab(n,43).ngClassPending),l(n,45,0,t.Ab(n,50).ngClassUntouched,t.Ab(n,50).ngClassTouched,t.Ab(n,50).ngClassPristine,t.Ab(n,50).ngClassDirty,t.Ab(n,50).ngClassValid,t.Ab(n,50).ngClassInvalid,t.Ab(n,50).ngClassPending),l(n,51,0,t.Ab(n,56).ngClassUntouched,t.Ab(n,56).ngClassTouched,t.Ab(n,56).ngClassPristine,t.Ab(n,56).ngClassDirty,t.Ab(n,56).ngClassValid,t.Ab(n,56).ngClassInvalid,t.Ab(n,56).ngClassPending),l(n,57,0,t.Ab(n,62).ngClassUntouched,t.Ab(n,62).ngClassTouched,t.Ab(n,62).ngClassPristine,t.Ab(n,62).ngClassDirty,t.Ab(n,62).ngClassValid,t.Ab(n,62).ngClassInvalid,t.Ab(n,62).ngClassPending),l(n,63,0,t.Ab(n,68).ngClassUntouched,t.Ab(n,68).ngClassTouched,t.Ab(n,68).ngClassPristine,t.Ab(n,68).ngClassDirty,t.Ab(n,68).ngClassValid,t.Ab(n,68).ngClassInvalid,t.Ab(n,68).ngClassPending)})}function k(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-settings",[],null,null,null,E,q)),t.pb(1,114688,null,0,f,[C.l,_.a,p.e,y.j],null,null)],function(l,n){l(n,1,0)},null)}var M=t.mb("app-settings",f,k,{},{},[]),T=u("TO6B"),x=u("KI0p"),U=u("yIEL"),B=u("Z+Mw"),N=u("PCNd"),D=function(){return function(){}}(),V=u("lpxy");u.d(n,"SettingsModuleNgFactory",function(){return j});var j=t.nb(o,[],function(l){return t.xb([t.yb(512,t.j,t.cb,[[8,[e.a,s.a,i.a,a.a,r.a,c.a,g.a,b.a,d.a,M]],[3,t.j],t.y]),t.yb(4608,v.m,v.l,[t.v,[2,v.t]]),t.yb(4608,p.w,p.w,[]),t.yb(4608,p.e,p.e,[]),t.yb(4608,T.a,T.a,[x.a]),t.yb(4608,U.a,U.a,[]),t.yb(1073742336,v.b,v.b,[]),t.yb(1073742336,p.u,p.u,[]),t.yb(1073742336,p.j,p.j,[]),t.yb(1073742336,p.s,p.s,[]),t.yb(1073742336,B.c,B.c,[]),t.yb(1073742336,C.p,C.p,[[2,C.v],[2,C.l]]),t.yb(1073742336,N.a,N.a,[]),t.yb(1073742336,D,D,[]),t.yb(1073742336,o,o,[]),t.yb(256,B.a,{modules:B.d},[]),t.yb(1024,C.j,function(){return[[{path:"",component:f,canActivate:[V.a]}]]},[])])})}}]);
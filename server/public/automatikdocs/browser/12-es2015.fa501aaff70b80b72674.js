(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{pU93:function(t,e,o){"use strict";o.r(e),o.d(e,"SettingsModule",(function(){return P}));var s=o("ofXK"),r=o("M0ag"),n=o("tyNb"),i=o("ey9i"),a=o("fXoL"),c=o("3Pt+"),l=o("5eHb"),u=o("p8ln");const b=["modal"],d=["imageSrc"];function g(t,e){if(1&t){const t=a.Rb();a.Qb(0,"input",42),a.Zb("ngModelChange",(function(e){return a.rc(t),a.dc().oldPass=e})),a.Pb()}if(2&t){const t=a.dc();a.ic("ngModel",t.oldPass)}}function m(t,e){if(1&t){const t=a.Rb();a.Qb(0,"input",43),a.Zb("ngModelChange",(function(e){return a.rc(t),a.dc().newPass=e})),a.Pb()}if(2&t){const t=a.dc();a.ic("ngModel",t.newPass)}}function p(t,e){if(1&t){const t=a.Rb();a.Qb(0,"input",44),a.Zb("ngModelChange",(function(e){return a.rc(t),a.dc().removeAccountPass=e})),a.Pb()}if(2&t){const t=a.dc();a.ic("ngModel",t.removeAccountPass)}}function h(t,e){if(1&t){const t=a.Rb();a.Qb(0,"button",41),a.Zb("click",(function(){a.rc(t);const e=a.dc();return e.changePassword(e.oldPass.value,e.newPass.value)})),a.zc(1,"Guardar"),a.Pb()}}function f(t,e){if(1&t){const t=a.Rb();a.Qb(0,"button",41),a.Zb("click",(function(){a.rc(t);const e=a.dc();return e.removeAccount(e.removeAccountPass)})),a.zc(1,"Eliminar"),a.Pb()}}const _=[{path:"",component:(()=>{class t{constructor(t,e,o,s,r,n){this.router=t,this.route=e,this.userService=o,this.fb=s,this.toastr=r,this.commonsService=n,this.user=new i.u,this.errors={},this.isSubmitting=!1,this.settingsForm=this.fb.group({image:"",username:"",email:"",description:"",nameAndSurname:"",contactInformation:"",dateOfBirth:"",companyName:""})}ngOnInit(){this.route.snapshot.data.initedInServer?this.userService.isAuthenticated.subscribe(t=>{this.initialValue()}):this.initialValue()}initialValue(){Object.assign(this.user,this.userService.getCurrentUser()),this.settingsForm.patchValue(this.user)}onFileChange(t){const e=new FileReader;if(t.target.files&&t.target.files.length){const[o]=t.target.files,s=o.size/1024/1024;this.hasExtension(t.target.value,[".jpg",".gif",".png"])?s>1?(t.target.value="",this.toastr.error("File is bigger than 1 MB","Error",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"})):(e.readAsDataURL(o),e.onload=o=>{var s=new Image;s.src=o.target.result,s.onload=()=>{s.height===s.width?(this.settingsForm.patchValue({image:e.result}),this.imageSrc.nativeElement.src=e.result):(t.target.value="",this.toastr.error("Size error width and height must be equal","Error",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}))}}):(t.target.value="",this.toastr.error("File must be of type jpg gif or png","Error",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}))}}hasExtension(t,e){return new RegExp("("+e.join("|").replace(/\./g,"\\.")+")$").test(t)}submitForm(){this.isSubmitting=!0;const t=this.validation(this.settingsForm.value);console.log(t),this.userService.update(t).subscribe(t=>{this.toastr.success("User updated","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"})},t=>{this.errors=t,this.isSubmitting=!1})}validation(t){const e={},o=Object.entries(t);for(const[s,r]of o)t[s]!==this.user[s]&&(e[s]=r,this.user[s]=r);return e}toggleModal(t=""){this.modalStatus=t,this.modal.nativeElement.classList.toggle("show-modal")}changePassword(t,e){t===e?this.toastr.error("Old and new password are the same","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}):""===t||""===e?this.toastr.error("Fields cannot be empty","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}):this.userService.changePassword({oldPassword:t,newPassword:e}).subscribe(t=>{t.invalidPassword?this.toastr.error("Current password is wrong","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}):(this.toggleModal(),this.toastr.success("User updated","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}))},t=>{this.errors=t,this.isSubmitting=!1})}removeAccount(t){confirm("\xbfSeguro que deseas eliminar tu usuario? Una vez eliminado no habr\xe1 posibilidad de recuperarlo, as\xed como tampoco podr\xe1s recuperar ninguno de los documentos creados con este usuario")&&this.userService.removeAccount(t).subscribe(t=>{t.invalidPassword?this.toastr.error("Contrase\xf1a incorrecta","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}):t.userRemoved&&(this.toastr.success("Usuario eliminado","",{positionClass:"toast-bottom-right",progressBar:!0,progressAnimation:"decreasing"}),this.logout())},t=>{this.errors=t,this.isSubmitting=!1})}logout(){this.userService.purgeAuth(),this.router.navigateByUrl("/")}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(n.d),a.Lb(n.a),a.Lb(i.v),a.Lb(c.f),a.Lb(l.b),a.Lb(i.e))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-settings"]],viewQuery:function(t,e){var o;1&t&&(a.Dc(b,!0),a.Dc(d,!0)),2&t&&(a.oc(o=a.ac())&&(e.modal=o.first),a.oc(o=a.ac())&&(e.imageSrc=o.first))},decls:52,vars:9,consts:[[1,"sub-menu"],[1,"sub-menu__container"],[1,"sub-menu__nav","sub-menu__nav--my-forms",2,"justify-content","center"],[1,"sub-menu__nav__button","sub-menu__nav__button--without-hover"],[1,"settings"],[3,"errors"],[1,"settings__container",3,"formGroup","ngSubmit"],[1,"settings__profile-image"],[1,"settings__profile-image__container"],[1,"settings__profile__image__img"],["alt","profile image",3,"src"],["imageSrc",""],[1,"settings__profile__image__input"],[1,"input-file"],["type","file","name","profile-image",3,"change"],[1,"settings__form"],[1,"settings__form__container"],[1,"settings__form__group"],["type","text","placeholder","Nombre de usuario","formControlName","username"],["type","text","placeholder","Nombre y apellidos","formControlName","nameAndSurname"],["type","text","placeholder","Corren electr\xf3nico","formControlName","email"],["name","description","cols","30","rows","10","placeholder","Description","formControlName","description"],["type","date","placeholder","Fecha de nacimiento","formControlName","dateOfBirth"],["type","text","placeholder","Empresa","formControlName","companyName"],["type","text","placeholder","Contacto","formControlName","contactInformation"],[1,"settings__form__button-container"],["type","submit",1,"button-filled","icon","icon-save-solid"],[1,"settings__buttons"],[1,"settings__buttons__container"],["type","button",1,"button-filled","trigger",3,"click"],["type","button",1,"button-filled",3,"click"],[1,"modal"],["modal",""],[1,"modal__content",2,"padding","2rem"],[1,"modal__content__modal-middle","modal__content__modal-middle--change-password"],[1,"modal__content__modal-middle__container"],["type","password","placeholder","Contrase\xf1a actual",3,"ngModel","ngModelChange",4,"ngIf"],["type","password","placeholder","Contrase\xf1a nueva",3,"ngModel","ngModelChange",4,"ngIf"],["type","password","placeholder","Contrase\xf1a",3,"ngModel","ngModelChange",4,"ngIf"],[1,"modal__content__modal-bottom"],["class","button-filled","id","modal-button",3,"click",4,"ngIf"],["id","modal-button",1,"button-filled",3,"click"],["type","password","placeholder","Contrase\xf1a actual",3,"ngModel","ngModelChange"],["type","password","placeholder","Contrase\xf1a nueva",3,"ngModel","ngModelChange"],["type","password","placeholder","Contrase\xf1a",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"ul",2),a.Qb(3,"li",3),a.zc(4),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(5,"div",4),a.Mb(6,"app-list-errors",5),a.Qb(7,"form",6),a.Zb("ngSubmit",(function(){return e.submitForm()})),a.Qb(8,"div",7),a.Qb(9,"div",8),a.Qb(10,"div",9),a.Mb(11,"img",10,11),a.Pb(),a.Qb(13,"fieldset",12),a.Qb(14,"label",13),a.zc(15," Cambiar imagen de perfil "),a.Qb(16,"input",14),a.Zb("change",(function(t){return e.onFileChange(t)})),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(17,"div",15),a.Qb(18,"div",16),a.Qb(19,"fieldset",17),a.Mb(20,"input",18),a.Mb(21,"input",19),a.Mb(22,"input",20),a.Pb(),a.Qb(23,"fieldset",17),a.Mb(24,"textarea",21),a.Mb(25,"input",22),a.Mb(26,"input",23),a.Mb(27,"input",24),a.Pb(),a.Qb(28,"div",25),a.Mb(29,"button",26),a.Pb(),a.Pb(),a.Pb(),a.Mb(30,"hr"),a.Qb(31,"div",27),a.Qb(32,"div",28),a.Qb(33,"button",29),a.Zb("click",(function(){return e.toggleModal("changePass")})),a.zc(34," Cambiar contrase\xf1a "),a.Pb(),a.Qb(35,"button",30),a.Zb("click",(function(){return e.logout()})),a.zc(36," Cerrar sesi\xf3n "),a.Pb(),a.Qb(37,"button",30),a.Zb("click",(function(){return e.toggleModal("remove")})),a.zc(38," Eliminar cuenta "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(39,"div",31,32),a.Qb(41,"div",33),a.Qb(42,"div",34),a.Qb(43,"div",35),a.yc(44,g,1,1,"input",36),a.yc(45,m,1,1,"input",37),a.yc(46,p,1,1,"input",38),a.Pb(),a.Pb(),a.Qb(47,"div",39),a.yc(48,h,2,0,"button",40),a.yc(49,f,2,0,"button",40),a.Qb(50,"button",41),a.Zb("click",(function(){return e.toggleModal()})),a.zc(51,"Cancelar"),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.zb(4),a.Bc(" ",e.user.username," "),a.zb(2),a.ic("errors",e.errors),a.zb(1),a.ic("formGroup",e.settingsForm),a.zb(4),a.jc("src",e.user.image,a.tc),a.zb(33),a.ic("ngIf","changePass"===e.modalStatus),a.zb(1),a.ic("ngIf","changePass"===e.modalStatus),a.zb(1),a.ic("ngIf","remove"===e.modalStatus),a.zb(2),a.ic("ngIf","changePass"===e.modalStatus),a.zb(1),a.ic("ngIf","remove"===e.modalStatus))},directives:[u.a,c.G,c.r,c.j,c.c,c.q,c.i,s.t,c.t],encapsulation:2}),t})(),resolve:{initedInServer:i.b}}];let v=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[n.h.forChild(_)],n.h]}),t})(),P=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[s.c,r.a,v]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3Snx":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),a=function(){return function(){}}(),i=u("pMnS"),s=function(){function l(){}return l.prototype.ngOnInit=function(){},l.prototype.topMenuNav=function(l){l.preventDefault();var n=document.querySelectorAll(".sub-menu-button"),u=document.querySelector(".container"),e=document.querySelectorAll(".content");if("A"===l.target.tagName&&!l.target.classList.contains("current")){n.forEach(function(l){l.parentElement.classList.remove("current")}),l.target.parentElement.classList.add("current");var a=l.target.getAttribute("href");u.classList.add("animation-outro"),u.classList.remove("animation-intro"),setTimeout(function(){e.forEach(function(l){l.style.display=l.id===a?"flex":"none"}),u.classList.add("animation-intro"),u.classList.remove("animation-outro")},400)}},l}(),o=e.ob({encapsulation:2,styles:[],data:{}});function t(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,11,"div",[["id","sub-menu"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,10,"div",[["class","sub-menu-container sub-menu-container-myforms"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,9,"ul",[["class","sub-menu-nav"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.topMenuNav(u)&&e),e},null,null)),(l()(),e.qb(3,0,null,null,2,"li",[["class","current"]],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,1,"a",[["class","sub-menu-button"],["href","introduction"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Intro"])),(l()(),e.qb(6,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,1,"a",[["class","sub-menu-button"],["href","input-list"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Input list"])),(l()(),e.qb(9,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.qb(10,0,null,null,1,"a",[["class","sub-menu-button"],["href","other"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["FAQS and others"])),(l()(),e.qb(12,0,null,null,69,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.qb(13,0,null,null,10,"div",[["class","content"],["id","introduction"]],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,9,"div",[["class","introduction-container"]],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,8,"div",[["class","section"]],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,7,"div",[["class","section-container"]],null,null,null,null,null)),(l()(),e.qb(17,0,null,null,4,"div",[["class","text"]],null,null,null,null,null)),(l()(),e.qb(18,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Introduction"])),(l()(),e.qb(20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Form-Based Docs are documents or texts generated as a result of filling a form. Depending on your answers the text generated will vary. This app gives you the possibility to create both the form and the text. "])),(l()(),e.qb(22,0,null,null,1,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,0,"img",[["alt","formbaseddocs"],["src","assets/images/text.gif"]],null,null,null,null,null)),(l()(),e.qb(24,0,null,null,37,"div",[["class","content"],["id","input-list"]],null,null,null,null,null)),(l()(),e.qb(25,0,null,null,36,"div",[["class","input-list-container"]],null,null,null,null,null)),(l()(),e.qb(26,0,null,null,8,"div",[["class","section"]],null,null,null,null,null)),(l()(),e.qb(27,0,null,null,7,"div",[["class","section-container"]],null,null,null,null,null)),(l()(),e.qb(28,0,null,null,4,"div",[["class","text"]],null,null,null,null,null)),(l()(),e.qb(29,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Text input"])),(l()(),e.qb(31,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" The most simple input. Just locate the identifier right where you want to show the input of the user. The user will type in and the identifier will be replaced by the input. "])),(l()(),e.qb(33,0,null,null,1,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),e.qb(34,0,null,null,0,"img",[["alt","formbaseddocs"],["src","assets/images/text.gif"]],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,8,"div",[["class","section"]],null,null,null,null,null)),(l()(),e.qb(36,0,null,null,7,"div",[["class","section-container"]],null,null,null,null,null)),(l()(),e.qb(37,0,null,null,4,"div",[["class","text"]],null,null,null,null,null)),(l()(),e.qb(38,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Radio-a input"])),(l()(),e.qb(40,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Same as with the Text Input type, but in this case the identifier will be replaced by the value introduced right next to the radio button. "])),(l()(),e.qb(42,0,null,null,1,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),e.qb(43,0,null,null,0,"img",[["alt","formbaseddocs"],["src","assets/images/radio-a.gif"]],null,null,null,null,null)),(l()(),e.qb(44,0,null,null,8,"div",[["class","section"]],null,null,null,null,null)),(l()(),e.qb(45,0,null,null,7,"div",[["class","section-container"]],null,null,null,null,null)),(l()(),e.qb(46,0,null,null,4,"div",[["class","text"]],null,null,null,null,null)),(l()(),e.qb(47,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Radio-b input"])),(l()(),e.qb(49,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" This radio works very similar to the first radio, but now the identifier will be replaced, not with the value typed in next to the radio button, but with the value typed in the window that can be opened clicking on the icon next to it. "])),(l()(),e.qb(51,0,null,null,1,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),e.qb(52,0,null,null,0,"img",[["alt","formbaseddocs"],["src","assets/images/radio-b.gif"]],null,null,null,null,null)),(l()(),e.qb(53,0,null,null,8,"div",[["class","section"]],null,null,null,null,null)),(l()(),e.qb(54,0,null,null,7,"div",[["class","section-container"]],null,null,null,null,null)),(l()(),e.qb(55,0,null,null,4,"div",[["class","text"]],null,null,null,null,null)),(l()(),e.qb(56,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Radio-c input (conditional)"])),(l()(),e.qb(58,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" There will be times where you will want to prompt the user with different questions, depending on his or her answers. With this button, clicking on the icon next to it, a window will be shown where you will be able to set the questions that will be shown to the user when clicking on that particular radio button. The logic is the same as before. "])),(l()(),e.qb(60,0,null,null,1,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),e.qb(61,0,null,null,0,"img",[["alt","formbaseddocs"],["src","assets/images/radio-c.gif"]],null,null,null,null,null)),(l()(),e.qb(62,0,null,null,19,"div",[["class","content"],["id","other"]],null,null,null,null,null)),(l()(),e.qb(63,0,null,null,18,"div",[["class","other-container"]],null,null,null,null,null)),(l()(),e.qb(64,0,null,null,8,"div",[["class","section"]],null,null,null,null,null)),(l()(),e.qb(65,0,null,null,7,"div",[["class","section-container"]],null,null,null,null,null)),(l()(),e.qb(66,0,null,null,4,"div",[["class","text"]],null,null,null,null,null)),(l()(),e.qb(67,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Indications"])),(l()(),e.qb(69,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" In case you need to clarify or you need to set a couple of instructions on how to fill an specific field, use the right side menu to create the instructions. "])),(l()(),e.qb(71,0,null,null,1,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),e.qb(72,0,null,null,0,"img",[["alt","formbaseddocs"],["src","assets/images/indications.gif"]],null,null,null,null,null)),(l()(),e.qb(73,0,null,null,8,"div",[["class","section"]],null,null,null,null,null)),(l()(),e.qb(74,0,null,null,7,"div",[["class","section-container"]],null,null,null,null,null)),(l()(),e.qb(75,0,null,null,4,"div",[["class","text"]],null,null,null,null,null)),(l()(),e.qb(76,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Change the identifier"])),(l()(),e.qb(78,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" In order to make the form more confortable for you to manage, you can change the identifier. "])),(l()(),e.qb(80,0,null,null,1,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),e.qb(81,0,null,null,0,"img",[["alt","formbaseddocs"],["src","assets/images/newid.gif"]],null,null,null,null,null))],null,null)}function r(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-guide",[],null,null,null,t,o)),e.pb(1,114688,null,0,s,[],null,null)],function(l,n){l(n,1,0)},null)}var c=e.mb("app-guide",s,r,{},{},[]),d=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),b=e.ob({encapsulation:2,styles:[],data:{}});function p(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,4,"div",[["class","sub-menu"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,3,"div",[["class","sub-menu__container"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,2,"ul",[["class","sub-menu__nav sub-menu__nav--my-forms"],["style","justify-content: center;"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"li",[["class","sub-menu__nav__button sub-menu__nav__button--without-hover"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Condiciones Generales de Venta "])),(l()(),e.qb(5,0,null,null,112,"div",[["class","cgv"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,111,"div",[["class","cgv__container"]],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Juan Camejo Alarc\xf3n\xa0te informa sobre su Pol\xedtica de Privacidad respecto del tratamiento y protecci\xf3n de los datos de car\xe1cter personal de los usuarios y clientes que puedan ser recabados por la navegaci\xf3n o contrataci\xf3n de servicios a trav\xe9s del sitio Web\xa0www.formbaseddocs.com. En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protecci\xf3n de datos personales, reflejada en la Ley Org\xe1nica\xa015/1999, de 13 de diciembre, de Protecci\xf3n de Datos de Car\xe1cter Personal (LOPD), y al Real Decreto\xa01720/2007, de 21 de diciembre, conocido como el Reglamento de desarrollo de la LOPD. Cumple tambi\xe9n con el Reglamento (UE)\xa02016/679\xa0del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protecci\xf3n de las personas f\xedsicas (RGPD). El uso de sitio Web implica la aceptaci\xf3n de esta Pol\xedtica de Privacidad as\xed como las condiciones incluidas en el Aviso Legal. "])),(l()(),e.qb(9,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Identidad del responsable"])),(l()(),e.qb(11,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Titular:\xa0Juan Camejo Alarc\xf3n"])),(l()(),e.qb(14,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["NIF/CIF:\xa054113125J"])),(l()(),e.qb(16,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Correo electr\xf3nico:\xa0juancamejo93@gmail.com"])),(l()(),e.qb(18,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Sitio Web:\xa0juancamejoalarcon.com"])),(l()(),e.qb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Principios aplicados en el tratamiento de datos"])),(l()(),e.qb(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["En el tratamiento de tus datos personales, el Titular aplicar\xe1 los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protecci\xf3n de datos:"])),(l()(),e.qb(24,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e.qb(25,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Principio de licitud, lealtad y transparencia:\xa0El Titular siempre requerir\xe1 el consentimiento para el tratamiento de tus datos personales que puede ser para uno o varios fines espec\xedficos sobre los que te informar\xe1 previamente con absoluta transparencia."])),(l()(),e.qb(27,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Principio de minimizaci\xf3n de datos:\xa0El Titular te solicitar\xe1 solo los datos estrictamente necesarios para el fin o los fines que los solicita."])),(l()(),e.qb(29,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Principio de minimizaci\xf3n de datos:\xa0El Titular te solicitar\xe1 solo los datos estrictamente necesarios para el fin o los fines que los solicita."])),(l()(),e.qb(31,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Principio de limitaci\xf3n del plazo de conservaci\xf3n:\xa0Los datos se mantendr\xe1n durante el tiempo estrictamente necesario para el fin o los fines del tratamiento.?El Titular te informar\xe1 del plazo de conservaci\xf3n correspondiente seg\xfan la finalidad. En el caso de suscripciones, el Titular revisar\xe1 peri\xf3dicamente las listas y eliminar\xe1 aquellos registros inactivos durante un tiempo considerable."])),(l()(),e.qb(33,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Principio de integridad y confidencialidad:\xa0Tus datos ser\xe1n tratados de tal manera que su seguridad, confidencialidad e integridad est\xe9 garantizada.?Debes saber que el Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros."])),(l()(),e.qb(35,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Obtenci\xf3n de datos personales"])),(l()(),e.qb(37,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Para navegar por\xa0formbaseddocs no es necesario que facilites ning\xfan dato personal. Los casos en los que s\xed proporcionas tus datos personales son los de creaci\xf3n de una cuenta, y su modificaci\xf3n."])),(l()(),e.qb(39,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Tus derechos"])),(l()(),e.qb(41,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["El Titular te informa que sobre tus datos personales tienes derecho a:"])),(l()(),e.qb(43,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e.qb(44,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Solicitar el acceso a los datos almacenados."])),(l()(),e.qb(46,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Solicitar una rectificaci\xf3n o la cancelaci\xf3n."])),(l()(),e.qb(48,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Solicitar la limitaci\xf3n de su tratamiento."])),(l()(),e.qb(50,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Oponerte al tratamiento."])),(l()(),e.qb(52,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Solicitar la portabilidad de tus datos."])),(l()(),e.qb(54,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicit\xe1ndolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en alg\xfan momento puede dirigirse al Titular y pedir informaci\xf3n sobre los datos que tiene almacenados y c\xf3mo los ha obtenido, solicitar la rectificaci\xf3n de los mismos, solicitar la portabilidad de sus datos personales, oponerse al tratamiento, limitar su uso o solicitar la cancelaci\xf3n de esos datos en los ficheros del Titular. Para ejercitar tus derechos de acceso, rectificaci\xf3n, cancelaci\xf3n, portabilidad y oposici\xf3n tienes que enviar un correo electr\xf3nico a\xa0juancamejo93@gmail.com\xa0junto con la prueba v\xe1lida en derecho como una fotocopia del D.N.I. o equivalente. Tienes derecho a la tutela judicial efectiva y a presentar una reclamaci\xf3n ante la autoridad de control, en este caso, la Agencia Espa\xf1ola de Protecci\xf3n de Datos, si consideras que el tratamiento de datos personales que te conciernen infringe el Reglamento. "])),(l()(),e.qb(56,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Finalidad del tratamiento de datos personales"])),(l()(),e.qb(58,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Cuando te conectas al sitio Web para mandar un correo al Titular, creas una cuenta o realizas una contrataci\xf3n, est\xe1s facilitando informaci\xf3n de car\xe1cter personal de la que el responsable es el Titular. Esta informaci\xf3n puede incluir datos de car\xe1cter personal como pueden ser tu direcci\xf3n IP, nombre y apellidos, direcci\xf3n f\xedsica, direcci\xf3n de correo electr\xf3nico, n\xfamero de tel\xe9fono, y otra informaci\xf3n. Al facilitar esta informaci\xf3n, das tu consentimiento para que tu informaci\xf3n sea recopilada, utilizada, gestionada y almacenada por superadmin.es , s\xf3lo como se describe en el Aviso Legal y en la presente Pol\xedtica de Privacidad. Los datos personales y la finalidad del tratamiento por parte del Titular es diferente seg\xfan el sistema de captura de informaci\xf3n: Existen otras finalidades por las que el Titular trata tus datos personales:"])),(l()(),e.qb(60,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.qb(61,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Para garantizar el cumplimiento de las condiciones recogidas en el Aviso Legal y en la ley aplicable. Esto puede incluir el desarrollo de herramientas y algoritmos que ayuden a este sitio Web a garantizar la confidencialidad de los datos personales que recoge."])),(l()(),e.qb(63,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Para apoyar y mejorar los servicios que ofrece este sitio Web."])),(l()(),e.qb(65,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Para analizar la navegaci\xf3n. El Titular recoge otros datos no identificativos que se obtienen mediante el uso de cookies que se descargan en tu ordenador cuando navegas por el sitio Web cuyas caracter\xedsiticas y finalidad est\xe1n detalladas en la Pol\xedtica de Cookies ."])),(l()(),e.qb(67,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Para gestionar las redes sociales. el Titular tiene presencia en redes sociales. Si te haces seguidor en las redes sociales del Titular el tratamiento de los datos personales se regir\xe1 por este apartado, as\xed como por aquellas condiciones de uso, pol\xedticas de privacidad y normativas de acceso que pertenezcan a la red social que proceda en cada caso y que has aceptado previamente."])),(l()(),e.qb(69,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["El Titular tratar\xe1 tus datos personales con la finalidad de administrar correctamente su presencia en la red social, informarte de sus actividades, productos o servicios, as\xed como para cualquier otra finalidad que las normativas de las redes sociales permitan. En ning\xfan caso el Titular utilizar\xe1 los perfiles de seguidores en redes sociales para enviar publicidad de manera individual. "])),(l()(),e.qb(71,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Seguridad de los datos personales"])),(l()(),e.qb(73,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Para proteger tus datos personales, el Titular toma todas las precauciones razonables y sigue las mejores pr\xe1cticas de la industria para evitar su p\xe9rdida, mal uso, acceso indebido, divulgaci\xf3n, alteraci\xf3n o destrucci\xf3n de los mismos. El sitio Web est\xe1 alojado en\xa0PROVEEDOR DE ALOJAMIENTO WEB. La seguridad de tus datos est\xe1 garantizada, ya que toman todas las medidas de seguridad necesarias para ello. Puedes consultar su pol\xedtica de privacidad para tener m\xe1s informaci\xf3n. "])),(l()(),e.qb(75,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Contenido de otros sitios web"])),(l()(),e.qb(77,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Las p\xe1ginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, v\xeddeos, im\xe1genes, art\xedculos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubieras visitado la otra web. Estos sitios Web pueden recopilar datos sobre ti, utilizar cookies, incrustar un c\xf3digo de seguimiento adicional de terceros, y supervisar tu interacci\xf3n usando este c\xf3digo. "])),(l()(),e.qb(79,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Pol\xedtica de Cookies"])),(l()(),e.qb(81,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Para que este sitio Web funcione correctamente necesita utilizar cookies, que es una informaci\xf3n que se almacena en tu navegador web. En la p\xe1gina Pol\xedtica de Cookies puedes consultar toda la informaci\xf3n relativa a la pol\xedtica de recogida, la finalidad y el tratamiento de las cookies. "])),(l()(),e.qb(83,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Legitimaci\xf3n para el tratamiento de datos"])),(l()(),e.qb(85,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["La base legal para el tratamiento de tus datos es: el consentimiento. Para contactar con el Titular, suscribirte a un bolet\xedn o realizar comentarios en este sitio Web tienes que aceptar la presente Pol\xedtica de Privacidad. "])),(l()(),e.qb(87,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Categor\xedas de datos personales"])),(l()(),e.qb(89,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Las categor\xedas de datos personales que trata el Titular son:"])),(l()(),e.qb(91,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),e.qb(92,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Datos identificativos."])),(l()(),e.qb(94,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Conservaci\xf3n de datos personales"])),(l()(),e.qb(96,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Los datos personales que proporciones al Titular se conservar\xe1n hasta que solicites su supresi\xf3n."])),(l()(),e.qb(98,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Navegaci\xf3n Web"])),(l()(),e.qb(100,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Al navegar por\xa0www.formbaseddocs.com\xa0se pueden recoger datos no identificativos, que pueden incluir, la direcci\xf3n IP, geolocalizaci\xf3n, un registro de c\xf3mo se utilizan los servicios y sitios, h\xe1bitos de navegaci\xf3n y otros datos que no pueden ser utilizados para identificarte. El sitio Web utiliza los siguientes servicios de an\xe1lisis de terceros: El Titular utiliza la informaci\xf3n obtenida para obtener datos estad\xedsticos, analizar tendencias, administrar el sitio, estudiar patrones de navegaci\xf3n y para recopilar informaci\xf3n demogr\xe1fica. "])),(l()(),e.qb(102,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Exactitud y veracidad de los datos personales"])),(l()(),e.qb(104,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Te comprometes a que los datos facilitados al Titular sean correctos, completos, exactos y vigentes, as\xed como a mantenerlos debidamente actualizados. Como Usuario del sitio Web eres el \xfanico responsable de la veracidad y correcci\xf3n de los datos que remitas al sitio exonerando a el Titular de cualquier responsabilidad al respecto. "])),(l()(),e.qb(106,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Aceptaci\xf3n y consentimiento"])),(l()(),e.qb(108,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Como Usuario del sitio Web declaras haber sido informado de las condiciones sobre protecci\xf3n de datos de car\xe1cter personal, aceptas y consientes el tratamiento de los mismos por parte de el Titular en la forma y para las finalidades indicadas en esta Pol\xedtica de Privacidad."])),(l()(),e.qb(110,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Revocabilidad"])),(l()(),e.qb(112,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Para ejercitar tus derechos de acceso, rectificaci\xf3n, cancelaci\xf3n, portabilidad y oposici\xf3n tienes que enviar un correo electr\xf3nico a\xa0juancamejo93@gmail.com\xa0junto con la prueba v\xe1lida en derecho como una fotocopia del D.N.I. o equivalente. El ejercicio de tus derechos no incluye ning\xfan dato que el Titular est\xe9 obligado a conservar con fines administrativos, legales o de seguridad. "])),(l()(),e.qb(114,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Cambios en la Pol\xedtica de Privacidad"])),(l()(),e.qb(116,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["El Titular se reserva el derecho a modificar la presente Pol\xedtica de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, as\xed como a pr\xe1cticas de la industria. Estas pol\xedticas estar\xe1n vigentes hasta que sean modificadas por otras debidamente publicadas. "]))],null,null)}function m(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-cgv",[],null,null,null,p,b)),e.pb(1,114688,null,0,d,[],null,null)],function(l,n){l(n,1,0)},null)}var q=e.mb("app-cgv",d,m,{},{},[]),v=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),f=e.ob({encapsulation:2,styles:[],data:{}});function g(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,4,"div",[["class","sub-menu"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,3,"div",[["class","sub-menu__container"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,2,"ul",[["class","sub-menu__nav sub-menu__nav--my-forms"],["style","justify-content: center;"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"li",[["class","sub-menu__nav__button sub-menu__nav__button--without-hover"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Condiciones de uso "])),(l()(),e.qb(5,0,null,null,35,"div",[["class","condiciones"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,34,"div",[["class","condiciones__container"]],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Las presentes condiciones generales de uso de la p\xe1gina web, regulan los t\xe9rminos y condiciones de acceso y uso de www.direcci\xf3nweb.com, propiedad de (indicar el nombre de la empresa o profesional propietario de el portal), con domicilio en (indicar) y con C\xf3digo de Identificaci\xf3n Fiscal n\xfamero (indicar), en adelante, \xabla Empresa\xbb, que el usuario del Portal deber\xe1 de leer y aceptar para usar todos los servicios e informaci\xf3n que se facilitan desde el portal. El mero acceso y/o utilizaci\xf3n del portal, de todos o parte de sus contenidos y/o servicios significa la plena aceptaci\xf3n de las presentes condiciones generales de uso."])),(l()(),e.qb(9,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Condiciones de uso"])),(l()(),e.qb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Las presentes condiciones generales de uso del portal regulan el acceso y la utilizaci\xf3n del portal, incluyendo los contenidos y los servicios puestos a disposici\xf3n de los usuarios en y/o a trav\xe9s del portal, bien por el portal, bien por sus usuarios, bien por terceros. No obstante, el acceso y la utilizaci\xf3n de ciertos contenidos y/o servicios puede encontrarse sometido a determinadas condiciones espec\xedficas."])),(l()(),e.qb(13,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Modificaciones"])),(l()(),e.qb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["La empresa se reserva la facultad de modificar en cualquier momento las condiciones generales de uso del portal. En todo caso, se recomienda que consulte peri\xf3dicamente los presentes t\xe9rminos de uso del portal, ya que pueden ser modificados."])),(l()(),e.qb(17,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Obligaciones del Usuario"])),(l()(),e.qb(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["El usuario deber\xe1 respetar en todo momento los t\xe9rminos y condiciones establecidos en las presentes condiciones generales de uso del portal. De forma expresa el usuario manifiesta que utilizar\xe1 el portal de forma diligente y asumiendo cualquier responsabilidad que pudiera derivarse del incumplimiento de las normas."])),(l()(),e.qb(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["As\xed mismo, el usuario no podr\xe1 utilizar el portal para transmitir, almacenar, divulgar promover o distribuir datos o contenidos que sean portadores de virus o cualquier otro c\xf3digo inform\xe1tico, archivos o programas dise\xf1ados para interrumpir, destruir o perjudicar el funcionamiento de cualquier programa o equipo inform\xe1tico o de telecomunicaciones."])),(l()(),e.qb(23,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Responsabilidad del portal"])),(l()(),e.qb(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["El usuario conoce y acepta que el portal no otorga ninguna garant\xeda de cualquier naturaleza, ya sea expresa o impl\xedcita, sobre los datos, contenidos, informaci\xf3n y servicios que se incorporan y ofrecen desde el Portal."])),(l()(),e.qb(27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Exceptuando los casos que la Ley imponga expresamente lo contrario, y exclusivamente con la medida y extensi\xf3n en que lo imponga, el Portal no garantiza ni asume responsabilidad alguna respecto a los posibles da\xf1os y perjuicios causados por el uso y utilizaci\xf3n de la informaci\xf3n, datos y servicios del Portal."])),(l()(),e.qb(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["En todo caso, el Portal excluye cualquier responsabilidad por los da\xf1os y perjuicios que puedan deberse a la informaci\xf3n y/o servicios prestados o suministrados por terceros diferentes de la Empresa. Toda responsabilidad ser\xe1 del tercero ya sea proveedor o colaborador."])),(l()(),e.qb(31,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Propiedad intelectual e industrial"])),(l()(),e.qb(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Todos los contenidos, marcas, logos, dibujos, documentaci\xf3n, programas inform\xe1ticos o cualquier otro elemento susceptible de protecci\xf3n por la legislaci\xf3n de propiedad intelectual o industrial, que sean accesibles en el portal corresponden exclusivamente a la empresa o a sus leg\xedtimos titulares y quedan expresamente reservados todos los derechos sobre los mismos. Queda expresamente prohibida la creaci\xf3n de enlaces de hipertexto (links) a cualquier elemento integrante de las p\xe1ginas web del Portal sin la autorizaci\xf3n de la empresa, siempre que no sean a una p\xe1gina web del Portal que no requiera identificaci\xf3n o autenticaci\xf3n para su acceso, o el mismo est\xe9 restringido."])),(l()(),e.qb(35,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["En cualquier caso, el portal se reserva todos los derechos sobre los contenidos, informaci\xf3n datos y servicios que ostente sobre los mismos. El portal no concede ninguna licencia o autorizaci\xf3n de uso al usuario sobre sus contenidos, datos o servicios, distinta de la que expresamente se detalle en las presentes condiciones generales de uso del portal."])),(l()(),e.qb(37,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Legislaci\xf3n aplicable, jurisdicci\xf3n competente y notificaciones"])),(l()(),e.qb(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Las presentes condiciones se rigen y se interpretan de acuerdo con las Leyes de Espa\xf1a. Para cualquier reclamaci\xf3n ser\xe1n competentes los juzgados y tribunales de (indicar la ciudad). Todas las notificaciones, requerimientos, peticiones y otras comunicaciones que el Usuario desee efectuar a la Empresa titular del Portal deber\xe1n realizarse por escrito y se entender\xe1 que han sido correctamente realizadas cuando hayan sido recibidas en la siguiente direcci\xf3n (indicar direcci\xf3n de correo en la que se desean recibir las notificaciones)."]))],null,null)}function h(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-condiciones-uso",[],null,null,null,g,f)),e.pb(1,114688,null,0,v,[],null,null)],function(l,n){l(n,1,0)},null)}var _=e.mb("app-condiciones-uso",v,h,{},{},[]),y=u("ZYCi"),I=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),w=e.ob({encapsulation:2,styles:[],data:{}});function P(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,11,"div",[["class","profile"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,10,"div",[["class","profile__container"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"div",[["class","profile__image"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,0,"img",[["alt","avatar"],["src","assets/images/silvia-avatar.jpeg"]],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,7,"div",[["class","profile__info"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"span",[["class","profile__info__name"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Silvia Camejo Alarc\xf3n"])),(l()(),e.qb(7,0,null,null,0,"span",[["class","profile__info__description"]],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,1,"span",[["class","description"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" User has not added any description yet. "])),(l()(),e.qb(10,0,null,null,0,"span",[["class","profile__info__contact"]],null,null,null,null,null)),(l()(),e.qb(11,0,null,null,0,"span",[["class","profile__info__company-name"]],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,20,"div",[["class","search__container"]],null,null,null,null,null)),(l()(),e.qb(13,0,null,null,0,"div",[["class","search__button"]],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,1,"div",[["class","search__orderby"]],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,0,"div",[["class","search__orderby__container"]],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,16,"div",[["class","search__results"]],null,null,null,null,null)),(l()(),e.qb(17,0,null,null,15,"div",[["class","search__results__container"]],null,null,null,null,null)),(l()(),e.qb(18,0,null,null,14,"div",[["class","search__results__result"]],null,null,null,null,null)),(l()(),e.qb(19,0,null,null,12,"div",[["class","search__results__result__document"]],null,[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Ab(l,20).onClick()&&a),a},null,null)),e.pb(20,16384,null,0,y.m,[y.l,y.a,[8,null],e.E,e.k],{routerLink:[0,"routerLink"]},null),e.Bb(21,1),(l()(),e.qb(22,0,null,null,9,"div",[["class","search__results__result__document__container"]],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,2,"div",[["class","search__results__result__document__container__date"]],null,null,null,null,null)),(l()(),e.qb(24,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["20 abril 2019"])),(l()(),e.qb(26,0,null,null,2,"div",[["class","search__results__result__document__container__title"]],null,null,null,null,null)),(l()(),e.qb(27,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Contrato de compraventa de veh\xedculo usado entre particulares"])),(l()(),e.qb(29,0,null,null,2,"div",[["class","search__results__result__document__container__likes-views"]],null,null,null,null,null)),(l()(),e.qb(30,0,null,null,0,"div",[["class","search__results__result__document__container__likes-views__likes"]],null,null,null,null,null)),(l()(),e.qb(31,0,null,null,0,"div",[["class","search__results__result__document__container__likes-views__views"]],null,null,null,null,null)),(l()(),e.qb(32,0,null,null,0,"div",[["class","search__results__result__more-info"]],null,null,null,null,null))],function(l,n){var u=l(n,21,0,"/certified-forms/contrato-compraventa-vehiculo");l(n,20,0,u)},null)}function E(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-silvia-profile",[],null,null,null,P,w)),e.pb(1,114688,null,0,I,[],null,null)],function(l,n){l(n,1,0)},null)}var T=e.mb("app-silvia-profile",I,E,{},{},[]),x=u("Ip0R"),j=function(){return function(){}}();u.d(n,"StaticPagesModuleNgFactory",function(){return z});var z=e.nb(a,[],function(l){return e.xb([e.yb(512,e.j,e.db,[[8,[i.a,c,q,_,T]],[3,e.j],e.y]),e.yb(4608,x.m,x.l,[e.v,[2,x.u]]),e.yb(1073742336,x.b,x.b,[]),e.yb(1073742336,y.p,y.p,[[2,y.v],[2,y.l]]),e.yb(1073742336,j,j,[]),e.yb(1073742336,a,a,[]),e.yb(256,e.v,"en",[]),e.yb(1024,y.j,function(){return[[{path:"guide",component:s},{path:"cgv",component:d},{path:"condiciones-uso",component:v},{path:"silvia-profile",component:I}]]},[]),e.yb(256,e.M,"xlf",[])])})}}]);
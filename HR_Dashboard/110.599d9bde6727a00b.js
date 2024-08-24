"use strict";(self.webpackChunkanti_front=self.webpackChunkanti_front||[]).push([[110],{7110:(U,m,e)=>{e.r(m),e.d(m,{LoginModule:()=>k});var g=e(6814),r=e(6223),Z=e(9862),d=e(4828),t=e(5879),C=e(737),h=e(2939),a=e(9157),c=e(617),u=e(2032),l=e(2296);function w(o,b){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const s=t.oxw();t.xp6(1),t.Oqu(s.getErrorMessage())}}function x(o,b){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Password is required "),t.qZA())}function T(o,b){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Password should be at least 8 characters long "),t.qZA())}const y=[{path:"login",component:(()=>{class o{constructor(s,n,i){this.authService=s,this.router=n,this.snackBar=i,this.hide=!0,this.email=new r.NI("",[r.kI.required,r.kI.email]),this.password=new r.NI("",[r.kI.required,r.kI.minLength(8)]),this.errorMessage="",this.loading=!1,this.loadingMessage="Sign In"}submit(){this.email.valid&&this.password.valid&&(this.loading=!0,this.loadingMessage="Signing in...",this.authService.login({Username:this.email.value,Password:this.password.value}).subscribe(n=>{this.authService.setToken(n.token),this.redirectUser(),this.snackBar.open("Login successful!","Dismiss",{duration:2e3})},n=>{this.snackBar.open(n.error.message||"Login failed. Please try again.","Dismiss",{duration:2e3}),this.errorMessage=n.error.message||"",this.loading=!1,this.loadingMessage="Sign In"}))}getErrorMessage(){return this.email.hasError("required")?"Email is required":this.email.hasError("email")?"Not a valid email":""}getPasswordErrorMessage(){return this.password.hasError("required")?"Password is required":this.password.hasError("minlength")?"Password should be at least 8 characters long":""}redirectUser(){this.router.navigate(["dashboard"])}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(C.e),t.Y36(d.F0),t.Y36(h.ux))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:28,vars:9,consts:[[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-12","col-sm-10","col-md-6","col-lg-3"],[1,"form-container"],[1,"form-group"],[1,"text-center",2,"color","blue"],["appearance","outline",1,"user"],["matPrefix",""],[1,"material-icons"],["matInput","","placeholder","","required","",3,"formControl"],[4,"ngIf"],["appearance","outline",1,"pw"],["matInput","",3,"type","formControl"],["mat-icon-button","","matPrefix","",3,"click"],["mat-raised-button","",1,"full-width-button",2,"background-color","green","color","whitesmoke",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",4)(5,"h2",5)(6,"b"),t._uU(7,"Admin-HR Login"),t.qZA()(),t.TgZ(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"Enter your Username"),t.qZA(),t.TgZ(11,"mat-icon",7)(12,"i",8),t._uU(13,"person"),t.qZA()(),t._UZ(14,"input",9),t.YNc(15,w,2,1,"mat-error",10),t.qZA()(),t.TgZ(16,"div",4)(17,"mat-form-field",11)(18,"mat-label"),t._uU(19,"Enter your password"),t.qZA(),t._UZ(20,"input",12),t.YNc(21,x,2,0,"mat-error",10),t.YNc(22,T,2,0,"mat-error",10),t.TgZ(23,"button",13),t.NdJ("click",function(){return i.hide=!i.hide}),t.TgZ(24,"mat-icon"),t._uU(25),t.qZA()()()(),t.TgZ(26,"button",14),t.NdJ("click",function(){return i.submit()}),t._uU(27,"Sign In"),t.qZA()()()()()),2&n&&(t.xp6(14),t.Q6J("formControl",i.email),t.xp6(1),t.Q6J("ngIf",i.email.invalid),t.xp6(5),t.Q6J("type",i.hide?"password":"text")("formControl",i.password),t.xp6(1),t.Q6J("ngIf",i.password.hasError("required")),t.xp6(1),t.Q6J("ngIf",i.password.hasError("minlength")&&!i.password.hasError("required")),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",i.hide),t.xp6(2),t.Oqu(i.hide?"visibility_off":"visibility"))},dependencies:[g.O5,a.KE,a.hX,a.TO,a.qo,c.Hw,u.Nt,l.lW,l.RK,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.oH,r.F],styles:[".form-container[_ngcontent-%COMP%]{position:relative;background-color:#fff;top:22vh;padding:15px;display:flex;flex-direction:column;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 0 10px #6d6d6d80;border-radius:10px}.color-temp-bg[_ngcontent-%COMP%]{background-color:#e2e2e2;color:#fff}#admin[_ngcontent-%COMP%]{text-align:center}.user[_ngcontent-%COMP%], .pw[_ngcontent-%COMP%]{width:100%;display:block}.link[_ngcontent-%COMP%]{color:gray;text-decoration:none;margin-top:10px;size:5px;padding:2px}"]})}return o})()},{path:"",redirectTo:"login",pathMatch:"full"}];let p=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.oAB({type:o});static#r=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(y),d.Bz]})}return o})();var f=e(5195),v=e(1274),M=e(8034);let k=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.oAB({type:o});static#r=this.\u0275inj=t.cJS({imports:[g.ez,p,a.lN,f.QW,c.Ps,u.c,v.g0,l.ot,r.UX,r.u5,Z.JF,M.FA,h.ZX,p,c.Ps,u.c,f.QW,a.lN,v.g0,l.ot,r.u5,r.UX]})}return o})()}}]);
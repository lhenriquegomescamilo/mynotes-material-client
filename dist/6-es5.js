function _defineProperties(t,e){for(var r=0;r<e.length;r++){var s=e[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,e,r){"use strict";r.r(e);var s=r("ofXK"),o=r("3Pt+"),a=r("vvyD"),n=r("YUcS"),i=r("tyNb"),c=r("kt0X"),l=function(t){return t.LOGIN_REQUEST="[Auth LoginPage] Login Request",t.LOGIN_SUCCESS="[Auth API] Login Success",t.LOGIN_FAILURE="[Auth API] Login Failure",t.REGISTER_REQUEST="[Auth RegisterPage] Register Request",t.REGISTER_SUCCESS="[Auth API] Register Success",t.REGISTER_FAILURE="[Auth API] Register Failure",t}({}),u=function t(e){_classCallCheck(this,t),this.payload=e,this.type=l.LOGIN_REQUEST},p=function t(e){_classCallCheck(this,t),this.payload=e,this.type=l.LOGIN_SUCCESS},b=function t(e){_classCallCheck(this,t),this.payload=e,this.type=l.LOGIN_FAILURE},m=function t(e){_classCallCheck(this,t),this.payload=e,this.type=l.REGISTER_REQUEST},d=function t(e){_classCallCheck(this,t),this.payload=e,this.type=l.REGISTER_SUCCESS},h=function t(e){_classCallCheck(this,t),this.payload=e,this.type=l.REGISTER_FAILURE},g=Object(c.o)("auth"),f={isLoginRequestInProgress:!1,loginLastErrorMessage:null,isRegisterRequestInProgress:!1,registerLastErrorMessage:null};function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l.LOGIN_REQUEST:return Object.assign(Object.assign({},t),{isLoginRequestInProgress:!0,loginLastErrorMessage:null});case l.LOGIN_SUCCESS:return Object.assign(Object.assign({},t),{isLoginRequestInProgress:!1});case l.LOGIN_FAILURE:return Object.assign(Object.assign({},t),{isLoginRequestInProgress:!1,loginLastErrorMessage:e.payload.message});case l.REGISTER_REQUEST:return Object.assign(Object.assign({},t),{isRegisterRequestInProgress:!0,registerLastErrorMessage:null});case l.REGISTER_SUCCESS:return Object.assign(Object.assign({},t),{isRegisterRequestInProgress:!1});case l.REGISTER_FAILURE:return Object.assign(Object.assign({},t),{isRegisterRequestInProgress:!1,registerLastErrorMessage:e.payload.message});default:return t}}var E,O,y,w,S=Object(c.p)(g,(function(t){return t.isLoginRequestInProgress})),P=Object(c.p)(g,(function(t){return t.loginLastErrorMessage})),R=Object(c.p)(g,(function(t){return t.isRegisterRequestInProgress})),I=Object(c.p)(g,(function(t){return t.registerLastErrorMessage})),T=r("fXoL"),_=r("4MDz"),U=r("uBrG"),L=r("Wp6s"),j=r("NFeN"),M=r("XiUz"),v=r("kmnG"),k=r("qFsG"),q=r("bTqV"),B=r("TU8p"),N=r("Qu3c"),G=r("fFdG"),x=r("7xDd"),$=[{path:"login",component:(O=function(){function t(e,r,s,o){_classCallCheck(this,t),this.appProps=e,this.formBuilder=r,this.formValidationService=s,this.store=o,this.isInProgress$=this.store.select(S),this.lastErrorMessage$=this.store.select(P)}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({email:["",[o.q.required,o.q.email]],password:["",[o.q.required,o.q.minLength(this.appProps.userPasswordMinLength)]]})}},{key:"onSubmit",value:function(){this.form.valid&&this.store.dispatch(new u({request:this.form.value}))}},{key:"emailError",get:function(){return this.formValidationService.getValidationMessage(this.form.controls.email)}},{key:"passwordError",get:function(){return this.formValidationService.getValidationMessage(this.form.controls.password,{minlength:this.appProps.userPasswordMinLength})}}]),t}(),O.\u0275fac=function(t){return new(t||O)(T.Ob(_.a),T.Ob(o.c),T.Ob(U.b),T.Ob(c.h))},O.\u0275cmp=T.Ib({type:O,selectors:[["app-login"]],decls:28,vars:21,consts:[[1,"m-a"],["fxLayout","column",1,"pb-16",3,"formGroup","ngSubmit"],["type","email","matInput","","placeholder","Your email","formControlName","email",1,"form-control"],["type","password","matInput","","placeholder","Your password","formControlName","password",1,"form-control"],["type","submit","mat-raised-button","","color","primary","matBadge","!","matBadgeColor","warn",3,"matBadgeHidden","disabled","matTooltip"],["mat-button","","color","primary","routerLink","../register"]],template:function(t,e){1&t&&(T.Ub(0,"div",0),T.Ub(1,"mat-card"),T.Ub(2,"mat-icon"),T.Bc(3,"notes"),T.Tb(),T.Ub(4,"h1"),T.Bc(5),T.hc(6,"appProp"),T.Tb(),T.Ub(7,"form",1),T.cc("ngSubmit",(function(t){return e.onSubmit()})),T.Ub(8,"mat-form-field"),T.Pb(9,"input",2),T.Ub(10,"mat-error"),T.Bc(11),T.Tb(),T.Tb(),T.Ub(12,"mat-form-field"),T.Pb(13,"input",3),T.Ub(14,"mat-error"),T.Bc(15),T.Tb(),T.Tb(),T.Ub(16,"button",4),T.hc(17,"async"),T.hc(18,"async"),T.hc(19,"prefix"),T.hc(20,"async"),T.Bc(21," Sing in "),T.Tb(),T.Tb(),T.Ub(22,"mat-card-content"),T.Bc(23),T.hc(24,"appProp"),T.Ub(25,"a",5),T.Bc(26,"Create an account"),T.Tb(),T.Bc(27,". "),T.Tb(),T.Tb(),T.Tb()),2&t&&(T.Cb(5),T.Dc("Sign in to ",T.ic(6,8,"appName"),""),T.Cb(2),T.nc("formGroup",e.form),T.Cb(4),T.Cc(e.emailError),T.Cb(4),T.Cc(e.passwordError),T.Cb(1),T.nc("matBadgeHidden",!T.ic(17,10,e.lastErrorMessage$))("disabled",T.ic(18,12,e.isInProgress$))("matTooltip",T.jc(19,14,T.ic(20,17,e.lastErrorMessage$),"Last error: ")),T.Cb(7),T.Dc(" New to ",T.ic(24,19,"appName"),"? "))},directives:[L.a,j.a,o.r,o.m,M.c,o.g,v.b,k.a,o.b,o.l,o.e,v.a,q.b,B.a,N.a,L.d,q.a,i.g],pipes:[G.a,s.b,x.a],styles:[".pb-16[_ngcontent-%COMP%]{padding-bottom:16px}.m-a[_ngcontent-%COMP%]{margin:auto}[_nghost-%COMP%]{display:-webkit-box;display:flex;height:100vh;width:100vw;overflow-x:hidden}mat-card[_ngcontent-%COMP%]{width:270px;text-align:center}mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}h1[_ngcontent-%COMP%]{font-size:24px;font-weight:300;letter-spacing:-.5px}a[_ngcontent-%COMP%]{padding:0;min-width:0}"]}),O)},{path:"register",component:(E=function(){function t(e,r,s,o){_classCallCheck(this,t),this.appProps=e,this.formBuilder=r,this.formValidationService=s,this.store=o,this.isInProgress$=this.store.select(R),this.lastErrorMessage$=this.store.select(I),this.errorMatcher=new U.a(this.appProps.passwordCrossFieldValidatorErrorKey)}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({firstName:["",o.q.required],lastName:[""],email:["",[o.q.required,o.q.email]],password:["",[o.q.required,o.q.minLength(this.appProps.userPasswordMinLength)]],confirmPassword:""},{validator:this.formValidationService.getCrossFieldEqualityValidator("password","confirmPassword",this.appProps.passwordCrossFieldValidatorErrorKey)})}},{key:"onSubmit",value:function(){this.form.valid&&this.store.dispatch(new m({request:this.form.value}))}},{key:"firstNameError",get:function(){return this.formValidationService.getValidationMessage(this.form.controls.firstName)}},{key:"emailError",get:function(){return this.formValidationService.getValidationMessage(this.form.controls.email)}},{key:"passwordError",get:function(){return this.formValidationService.getValidationMessage(this.form.controls.password,{minlength:this.appProps.userPasswordMinLength})}},{key:"confirmPasswordError",get:function(){return this.formValidationService.getValidationMessage(this.form)}}]),t}(),E.\u0275fac=function(t){return new(t||E)(T.Ob(_.a),T.Ob(o.c),T.Ob(U.b),T.Ob(c.h))},E.\u0275cmp=T.Ib({type:E,selectors:[["app-register"]],decls:37,vars:21,consts:[[1,"m-a"],["fxLayout","column",1,"pb-16",3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Your first name","formControlName","firstName",1,"form-control"],["type","text","matInput","","placeholder","Your last name","formControlName","lastName",1,"form-control"],["type","email","matInput","","placeholder","Your email","formControlName","email",1,"form-control"],["type","password","matInput","","placeholder","Your password","formControlName","password",1,"form-control"],["type","password","matInput","","placeholder","Confirm password","formControlName","confirmPassword",1,"form-control",3,"errorStateMatcher"],["type","submit","mat-raised-button","","color","primary","matBadge","!","matBadgeColor","warn",3,"matBadgeHidden","disabled","matTooltip"],["mat-button","","color","primary","routerLink","../login"]],template:function(t,e){1&t&&(T.Ub(0,"div",0),T.Ub(1,"mat-card"),T.Ub(2,"mat-icon"),T.Bc(3,"how_to_reg"),T.Tb(),T.Ub(4,"h1"),T.Bc(5),T.hc(6,"appProp"),T.Tb(),T.Ub(7,"form",1),T.cc("ngSubmit",(function(t){return e.onSubmit()})),T.Ub(8,"mat-form-field"),T.Pb(9,"input",2),T.Ub(10,"mat-error"),T.Bc(11),T.Tb(),T.Tb(),T.Ub(12,"mat-form-field"),T.Pb(13,"input",3),T.Tb(),T.Ub(14,"mat-form-field"),T.Pb(15,"input",4),T.Ub(16,"mat-error"),T.Bc(17),T.Tb(),T.Tb(),T.Ub(18,"mat-form-field"),T.Pb(19,"input",5),T.Ub(20,"mat-error"),T.Bc(21),T.Tb(),T.Tb(),T.Ub(22,"mat-form-field"),T.Pb(23,"input",6),T.Ub(24,"mat-error"),T.Bc(25),T.Tb(),T.Tb(),T.Ub(26,"button",7),T.hc(27,"async"),T.hc(28,"async"),T.hc(29,"prefix"),T.hc(30,"async"),T.Bc(31," Sing up "),T.Tb(),T.Tb(),T.Ub(32,"mat-card-content"),T.Bc(33," Already registered? "),T.Ub(34,"a",8),T.Bc(35,"Log in"),T.Tb(),T.Bc(36,". "),T.Tb(),T.Tb(),T.Tb()),2&t&&(T.Cb(5),T.Dc("Sign up for ",T.ic(6,10,"appName"),""),T.Cb(2),T.nc("formGroup",e.form),T.Cb(4),T.Cc(e.firstNameError),T.Cb(6),T.Cc(e.emailError),T.Cb(4),T.Cc(e.passwordError),T.Cb(2),T.nc("errorStateMatcher",e.errorMatcher),T.Cb(2),T.Cc(e.confirmPasswordError),T.Cb(1),T.nc("matBadgeHidden",!T.ic(27,12,e.lastErrorMessage$))("disabled",T.ic(28,14,e.isInProgress$))("matTooltip",T.jc(29,16,T.ic(30,19,e.lastErrorMessage$),"Last error: ")))},directives:[L.a,j.a,o.r,o.m,M.c,o.g,v.b,k.a,o.b,o.l,o.e,v.a,q.b,B.a,N.a,L.d,q.a,i.g],pipes:[G.a,s.b,x.a],styles:[".pb-16[_ngcontent-%COMP%]{padding-bottom:16px}.m-a[_ngcontent-%COMP%]{margin:auto}[_nghost-%COMP%]{display:-webkit-box;display:flex;height:100vh;width:100vw;overflow-x:hidden}mat-card[_ngcontent-%COMP%]{width:270px;text-align:center}mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}h1[_ngcontent-%COMP%]{font-size:24px;font-weight:300;letter-spacing:-.5px}a[_ngcontent-%COMP%]{padding:0;min-width:0}"]}),E)},{path:"",pathMatch:"full",redirectTo:"login"}],F=((y=function t(){_classCallCheck(this,t)}).\u0275mod=T.Mb({type:y}),y.\u0275inj=T.Lb({factory:function(t){return new(t||y)},imports:[[i.h.forChild($)],i.h]}),y),A=r("snw9"),V=r("XqQ8"),Y=r("lJxs"),Q=r("JIr8"),D=r("vkgz"),z=r("LRne"),X=r("cDx5"),H=r("bUwk"),J=r("zkEj"),K=r("7dP1"),W=((w=function t(e,r,s,o){var a=this;_classCallCheck(this,t),this.actions$=e,this.http=r,this.snackBar=s,this.auth=o,this.loginRequest$=Object(A.c)((function(){return a.actions$.pipe(Object(A.d)(l.LOGIN_REQUEST),Object(V.a)((function(t){return a.http.postLoginRequest(t.payload.request).pipe(Object(Y.a)((function(t){return new p({response:t})})),Object(Q.a)((function(t){return Object(z.a)(new b({message:Object(_.b)(t,"Failed to sign in")}))})))})))})),this.loginSuccess$=Object(A.c)((function(){return a.actions$.pipe(Object(A.d)(l.LOGIN_SUCCESS),Object(Y.a)((function(t){return new X.e({principal:t.payload.response,tokenDecoded:a.auth.getDecodedToken(t.payload.response.token)})})))})),this.loginFailure$=Object(A.c)((function(){return a.actions$.pipe(Object(A.d)(l.LOGIN_FAILURE),Object(D.a)((function(t){return a.snackBar.openError(t.payload.message)})))}),{dispatch:!1}),this.registerRequest$=Object(A.c)((function(){return a.actions$.pipe(Object(A.d)(l.REGISTER_REQUEST),Object(V.a)((function(t){return a.http.postRegisterRequest(t.payload.request).pipe(Object(Y.a)((function(t){return new d({response:t})})),Object(Q.a)((function(t){return Object(z.a)(new h({message:Object(_.b)(t,"Failed to sign up")}))})))})))})),this.registerSuccess$=Object(A.c)((function(){return a.actions$.pipe(Object(A.d)(l.REGISTER_SUCCESS),Object(D.a)((function(){return a.snackBar.openSuccess("Your account has been created")})))}),{dispatch:!1}),this.registerFailure$=Object(A.c)((function(){return a.actions$.pipe(Object(A.d)(l.REGISTER_FAILURE),Object(D.a)((function(t){return a.snackBar.openError(t.payload.message)})))}),{dispatch:!1})}).\u0275fac=function(t){return new(t||w)(T.Yb(A.a),T.Yb(H.a),T.Yb(J.a),T.Yb(K.a))},w.\u0275prov=T.Kb({token:w,factory:w.\u0275fac}),w);r.d(e,"AuthModule",(function(){return tt}));var Z,tt=((Z=function t(){_classCallCheck(this,t)}).\u0275mod=T.Mb({type:Z}),Z.\u0275inj=T.Lb({factory:function(t){return new(t||Z)},imports:[[s.c,n.a,o.p,a.a,F,c.j.forFeature("auth",C),A.b.forFeature([W])]]}),Z)}}]);
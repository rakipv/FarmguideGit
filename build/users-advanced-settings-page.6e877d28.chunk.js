(self.webpackChunkfarm_guide=self.webpackChunkfarm_guide||[]).push([[9460],{62031:(C,A,d)=>{"use strict";C.exports=d(59525)},59525:function(C,A,d){(function(f,S){C.exports=S(d(67294),d(78384))})(this,function(f,S){return function(n){var c={};function t(i){if(c[i])return c[i].exports;var a=c[i]={i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=n,t.c=c,t.d=function(i,a,u){t.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:u})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,a){if(1&a&&(i=t(i)),8&a||4&a&&typeof i=="object"&&i&&i.__esModule)return i;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:i}),2&a&&typeof i!="string")for(var l in i)t.d(u,l,function(r){return i[r]}.bind(null,l));return u},t.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(a,"a",a),a},t.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},t.p="",t(t.s=110)}({0:function(n,c,t){n.exports=t(19)()},1:function(n,c){n.exports=f},10:function(n,c,t){var i=t(25),a=t(26),u=t(22),l=t(27);n.exports=function(r,p){return i(r)||a(r,p)||u(r,p)||l()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,c,t){"use strict";t.r(c),t.d(c,"Main",function(){return M}),t.d(c,"SkipToContent",function(){return W});var i,a=t(5),u=t.n(a),l=t(4),r=t.n(l),p=t(3),m=t.n(p),g=t(1),x=t.n(g),y=t(0),e=t.n(y),o=t(2),s=t.n(o),P=["labelledBy"],R=s.a.main(i||(i=m()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),M=function(T){var z=T.labelledBy,k=r()(T,P),H=z||"main-content-title";return x.a.createElement(R,u()({"aria-labelledby":H,id:"main-content",tabIndex:-1},k))};M.defaultProps={labelledBy:void 0},M.propTypes={labelledBy:e.a.string};var I,Q=t(6),N=s()(Q.Box)(I||(I=m()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(T){return T.theme.spaces[3]},function(T){return T.theme.spaces[3]}),W=function(T){var z=T.children;return x.a.createElement(N,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},z)};W.propTypes={children:e.a.node.isRequired}},13:function(n,c){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(a){return typeof a},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n.exports.default=n.exports,n.exports.__esModule=!0),t(i)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,c,t){"use strict";var i=t(20);function a(){}function u(){}u.resetWarningCache=a,n.exports=function(){function l(m,g,x,y,e,o){if(o!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function r(){return l}l.isRequired=l;var p={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:r,element:l,elementType:l,instanceOf:r,node:l,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:u,resetWarningCache:a};return p.PropTypes=p,p}},2:function(n,c){n.exports=S},20:function(n,c,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,c){n.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var a=0,u=new Array(i);a<i;a++)u[a]=t[a];return u},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,c,t){var i=t(21);n.exports=function(a,u){if(a){if(typeof a=="string")return i(a,u);var l=Object.prototype.toString.call(a).slice(8,-1);return l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set"?Array.from(a):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i(a,u):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,c){n.exports=function(t,i){if(t==null)return{};var a,u,l={},r=Object.keys(t);for(u=0;u<r.length;u++)a=r[u],i.indexOf(a)>=0||(l[a]=t[a]);return l},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,c){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,c){n.exports=function(t,i){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var u,l,r=[],p=!0,m=!1;try{for(a=a.call(t);!(p=(u=a.next()).done)&&(r.push(u.value),!i||r.length!==i);p=!0);}catch(g){m=!0,l=g}finally{try{p||a.return==null||a.return()}finally{if(m)throw l}}return r}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,c){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,c){n.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,c,t){var i=t(24);n.exports=function(a,u){if(a==null)return{};var l,r,p=i(a,u);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(r=0;r<m.length;r++)l=m[r],u.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(a,l)&&(p[l]=a[l])}return p},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,c){function t(){return n.exports=t=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var u=arguments[a];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(i[l]=u[l])}return i},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,c,t){"use strict";t.r(c),t.d(c,"Box",function(){return y});var i,a=t(3),u=t.n(a),l=t(0),r=t.n(l),p=t(2),m=t.n(p),g=t(7),x={color:!0},y=m.a.div.withConfig({shouldForwardProp:function(e,o){return!x[e]&&o(e)}})(i||(i=u()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,s=e.background;return o.colors[s]},function(e){var o=e.theme,s=e.color;return o.colors[s]},function(e){var o=e.theme,s=e.padding;return Object(g.a)("padding",s,o)},function(e){var o=e.theme,s=e.paddingTop;return Object(g.a)("padding-top",s,o)},function(e){var o=e.theme,s=e.paddingRight;return Object(g.a)("padding-right",s,o)},function(e){var o=e.theme,s=e.paddingBottom;return Object(g.a)("padding-bottom",s,o)},function(e){var o=e.theme,s=e.paddingLeft;return Object(g.a)("padding-left",s,o)},function(e){var o=e.theme,s=e.marginLeft;return Object(g.a)("margin-left",s,o)},function(e){var o=e.theme,s=e.marginRight;return Object(g.a)("margin-right",s,o)},function(e){var o=e.theme,s=e.marginTop;return Object(g.a)("margin-top",s,o)},function(e){var o=e.theme,s=e.marginBottom;return Object(g.a)("margin-bottom",s,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,s=e.hasRadius,P=e.borderRadius;return s?o.borderRadius:P},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,s=e.borderColor,P=e.borderStyle,R=e.borderWidth;if(s&&!P&&!R)return"1px solid ".concat(o.colors[s])},function(e){var o=e.theme,s=e.shadow;return o.shadows[s]},function(e){return e.pointerEvents},function(e){var o=e._hover,s=e.theme;return o?o(s):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});y.displayName="Box",y.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},y.propTypes={_hover:r.a.func,background:r.a.string,basis:r.a.oneOfType([r.a.string,r.a.string]),borderColor:r.a.string,children:r.a.oneOfType([r.a.node,r.a.string]),color:r.a.string,flex:r.a.oneOfType([r.a.string,r.a.string]),grow:r.a.oneOfType([r.a.string,r.a.string]),hasRadius:r.a.bool,hiddenS:r.a.bool,hiddenXS:r.a.bool,padding:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingBottom:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingLeft:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingRight:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingTop:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),shadow:r.a.string,shrink:r.a.oneOfType([r.a.string,r.a.string])}},7:function(n,c,t){"use strict";var i=t(10),a=t.n(i),u=t(13),l=t.n(u);c.a=function(r,p,m){var g=p;if(Array.isArray(p)||l()(p)!=="object"||(g=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),g!==void 0){if(Array.isArray(g)){var x=g,y=a()(x,3),e=y[0],o=y[1],s=y[2],P="".concat(r,": ").concat(m.spaces[e],";");return o!==void 0&&(P+="".concat(m.mediaQueries.tablet,`{
          `).concat(r,": ").concat(m.spaces[o],`;
        }`)),s!==void 0&&(P+="".concat(m.mediaQueries.mobile,`{
          `).concat(r,": ").concat(m.spaces[s],`;
        }`)),P}var R=m.spaces[g]||g;return"".concat(r,": ").concat(R,";")}}}})})},93084:(C,A,d)=>{"use strict";d.r(A),d.d(A,{default:()=>ae});var f=d(67294),S=d(23724),n=d(97132),c=d(80831),t=d(68547),i=d(84686),a=d(62031),u=d(78862),l=d(19408),r=d(5493),p=d(9008),m=d(43808),g=d(49425),x=d(34626),y=d(84734),e=d.n(y),o=d(51725),s=d(42722);const R=[{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,s.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,s.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,s.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var M=d(53209);const I=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),N=M.Ry().shape({email_confirmation_redirection:M.nK().when("email_confirmation",{is:!0,then:M.Z_().matches(I).required(),otherwise:M.Z_().nullable()}),email_reset_password:M.Z_(t.translatedErrors.string).matches(I,t.translatedErrors.regex).nullable()});var W=(v,b,h)=>new Promise((F,j)=>{var D=O=>{try{w(h.next(O))}catch(B){j(B)}},_=O=>{try{w(h.throw(O))}catch(B){j(B)}},w=O=>O.done?F(O.value):Promise.resolve(O.value).then(D,_);w((h=h.apply(v,b)).next())});const T=()=>W(void 0,null,function*(){const{data:v}=yield s.be.get((0,s.Gc)("advanced"));return v}),z=v=>s.be.put((0,s.Gc)("advanced"),v);var k=Object.defineProperty,H=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,X=(v,b,h)=>b in v?k(v,b,{enumerable:!0,configurable:!0,writable:!0,value:h}):v[b]=h,G=(v,b)=>{for(var h in b||(b={}))te.call(b,h)&&X(v,h,b[h]);if(K)for(var h of K(b))ne.call(b,h)&&X(v,h,b[h]);return v},$=(v,b)=>H(v,ee(b)),V=(v,b,h)=>new Promise((F,j)=>{var D=O=>{try{w(h.next(O))}catch(B){j(B)}},_=O=>{try{w(h.throw(O))}catch(B){j(B)}},w=O=>O.done?F(O.value):Promise.resolve(O.value).then(D,_);w((h=h.apply(v,b)).next())});const re=()=>f.createElement(t.CheckPagePermissions,{permissions:o.Z.readAdvancedSettings},f.createElement(oe,null)),oe=()=>{const{formatMessage:v}=(0,n.useIntl)(),b=(0,t.useNotification)(),{lockApp:h,unlockApp:F}=(0,t.useOverlayBlocker)(),{notifyStatus:j}=(0,i.useNotifyAT)(),D=(0,S.useQueryClient)();(0,t.useFocusWhenNavigate)();const _=(0,f.useMemo)(()=>({update:o.Z.updateAdvancedSettings}),[]),{isLoading:w,allowedActions:{canUpdate:O}}=(0,t.useRBAC)(_),{status:B,data:Y}=(0,S.useQuery)("advanced",()=>T(),{onSuccess:()=>{j(v({id:(0,s.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError:()=>{b({type:"warning",message:{id:(0,s.OB)("notification.error"),defaultMessage:"An error occured"}})}}),ie=w||B!=="success",J=(0,S.useMutation)(L=>z(L),{onSuccess:()=>V(void 0,null,function*(){yield D.invalidateQueries("advanced"),b({type:"success",message:{id:(0,s.OB)("notification.success.saved"),defaultMessage:"Saved"}}),F()}),onError:()=>{b({type:"warning",message:{id:(0,s.OB)("notification.error"),defaultMessage:"An error occured"}}),F()},refetchActive:!0}),{isLoading:se}=J,le=L=>V(void 0,null,function*(){h();const U=L.email_confirmation?L.email_confirmation_redirection:"";yield J.mutateAsync($(G({},L),{email_confirmation_redirection:U}))});return ie?f.createElement(a.Main,{"aria-busy":"true"},f.createElement(t.SettingsPageTitle,{name:v({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),f.createElement(u.HeaderLayout,{title:v({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),f.createElement(u.ContentLayout,null,f.createElement(t.LoadingIndicatorPage,null))):f.createElement(a.Main,{"aria-busy":se},f.createElement(t.SettingsPageTitle,{name:v({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),f.createElement(c.Formik,{onSubmit:le,initialValues:Y.settings,validateOnChange:!1,validationSchema:N,enableReinitialize:!0},({errors:L,values:U,handleChange:q,isSubmitting:ue})=>f.createElement(t.Form,null,f.createElement(u.HeaderLayout,{title:v({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:f.createElement(l.Button,{loading:ue,type:"submit",disabled:!O,startIcon:f.createElement(e(),null),size:"L"},v({id:"global.save",defaultMessage:"Save"}))}),f.createElement(u.ContentLayout,null,f.createElement(r.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},f.createElement(p.Stack,{spacing:4},f.createElement(g.Typography,{variant:"delta",as:"h2"},v({id:"global.settings",defaultMessage:"Settings"})),f.createElement(x.Grid,{gap:6},f.createElement(x.GridItem,{col:6,s:12},f.createElement(m.Select,{label:v({id:(0,s.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:U.default_role,hint:v({id:(0,s.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:E=>q({target:{name:"default_role",value:E}})},Y.roles.map(E=>f.createElement(m.Option,{key:E.type,value:E.type},E.name)))),R.map(E=>{let Z=U[E.name];return Z||(Z=E.type==="bool"?!1:""),f.createElement(x.GridItem,G({key:E.name},E.size),f.createElement(t.GenericInput,$(G({},E),{value:Z,error:L[E.name],disabled:E.name==="email_confirmation_redirection"&&U.email_confirmation===!1,onChange:q})))}))))))))},ae=re},65772:(C,A,d)=>{"use strict";d.d(A,{Z:()=>a});var f=d(9669),S=d.n(f),n=d(68547),c=d.n(n),t=(u,l,r)=>new Promise((p,m)=>{var g=e=>{try{y(r.next(e))}catch(o){m(o)}},x=e=>{try{y(r.throw(e))}catch(o){m(o)}},y=e=>e.done?p(e.value):Promise.resolve(e.value).then(g,x);y((r=r.apply(u,l)).next())});const i=S().create({baseURL:""});i.interceptors.request.use(u=>t(void 0,null,function*(){return u.headers={Authorization:`Bearer ${n.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},u}),u=>{Promise.reject(u)}),i.interceptors.response.use(u=>u,u=>{var l;throw((l=u.response)==null?void 0:l.status)===401&&(n.auth.clearAppStorage(),window.location.reload()),u});const a=i},42722:(C,A,d)=>{"use strict";d.d(A,{be:()=>f.Z,YX:()=>c,Gc:()=>a,OB:()=>u.Z});var f=d(65772),S=d(96486);const c=l=>Object.keys(l).reduce((r,p)=>{const m=l[p].controllers,g=Object.keys(m).reduce((x,y)=>((0,S.isEmpty)(m[y])||(x[y]=m[y]),x),{});return(0,S.isEmpty)(g)||(r[p]={controllers:g}),r},{});var t=d(83086);const a=l=>`/${t.Z}/${l}`;var u=d(97961)}}]);

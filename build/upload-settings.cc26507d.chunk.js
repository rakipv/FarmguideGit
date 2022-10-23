(self.webpackChunkfarm_guide=self.webpackChunkfarm_guide||[]).push([[695],{62031:(j,k,d)=>{"use strict";j.exports=d(59525)},59525:function(j,k,d){(function(f,P){j.exports=P(d(67294),d(78384))})(this,function(f,P){return function(n){var c={};function t(i){if(c[i])return c[i].exports;var a=c[i]={i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=n,t.c=c,t.d=function(i,a,l){t.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:l})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,a){if(1&a&&(i=t(i)),8&a||4&a&&typeof i=="object"&&i&&i.__esModule)return i;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:i}),2&a&&typeof i!="string")for(var s in i)t.d(l,s,function(r){return i[r]}.bind(null,s));return l},t.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(a,"a",a),a},t.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},t.p="",t(t.s=110)}({0:function(n,c,t){n.exports=t(19)()},1:function(n,c){n.exports=f},10:function(n,c,t){var i=t(25),a=t(26),l=t(22),s=t(27);n.exports=function(r,p){return i(r)||a(r,p)||l(r,p)||s()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,c,t){"use strict";t.r(c),t.d(c,"Main",function(){return z}),t.d(c,"SkipToContent",function(){return R});var i,a=t(5),l=t.n(a),s=t(4),r=t.n(s),p=t(3),h=t.n(p),g=t(1),O=t.n(g),y=t(0),e=t.n(y),o=t(2),u=t.n(o),S=["labelledBy"],v=u.a.main(i||(i=h()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),z=function(T){var A=T.labelledBy,U=r()(T,S),H=A||"main-content-title";return O.a.createElement(v,l()({"aria-labelledby":H,id:"main-content",tabIndex:-1},U))};z.defaultProps={labelledBy:void 0},z.propTypes={labelledBy:e.a.string};var I,w=t(6),N=u()(w.Box)(I||(I=h()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(T){return T.theme.spaces[3]},function(T){return T.theme.spaces[3]}),R=function(T){var A=T.children;return O.a.createElement(N,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},A)};R.propTypes={children:e.a.node.isRequired}},13:function(n,c){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(a){return typeof a},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n.exports.default=n.exports,n.exports.__esModule=!0),t(i)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,c,t){"use strict";var i=t(20);function a(){}function l(){}l.resetWarningCache=a,n.exports=function(){function s(h,g,O,y,e,o){if(o!==i){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function r(){return s}s.isRequired=s;var p={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:r,element:s,elementType:s,instanceOf:r,node:s,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:l,resetWarningCache:a};return p.PropTypes=p,p}},2:function(n,c){n.exports=P},20:function(n,c,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,c){n.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var a=0,l=new Array(i);a<i;a++)l[a]=t[a];return l},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,c,t){var i=t(21);n.exports=function(a,l){if(a){if(typeof a=="string")return i(a,l);var s=Object.prototype.toString.call(a).slice(8,-1);return s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set"?Array.from(a):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?i(a,l):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,c){n.exports=function(t,i){if(t==null)return{};var a,l,s={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],i.indexOf(a)>=0||(s[a]=t[a]);return s},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,c){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,c){n.exports=function(t,i){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var l,s,r=[],p=!0,h=!1;try{for(a=a.call(t);!(p=(l=a.next()).done)&&(r.push(l.value),!i||r.length!==i);p=!0);}catch(g){h=!0,s=g}finally{try{p||a.return==null||a.return()}finally{if(h)throw s}}return r}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,c){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,c){n.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,c,t){var i=t(24);n.exports=function(a,l){if(a==null)return{};var s,r,p=i(a,l);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(a);for(r=0;r<h.length;r++)s=h[r],l.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(a,s)&&(p[s]=a[s])}return p},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,c){function t(){return n.exports=t=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s])}return i},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,c,t){"use strict";t.r(c),t.d(c,"Box",function(){return y});var i,a=t(3),l=t.n(a),s=t(0),r=t.n(s),p=t(2),h=t.n(p),g=t(7),O={color:!0},y=h.a.div.withConfig({shouldForwardProp:function(e,o){return!O[e]&&o(e)}})(i||(i=l()([`
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
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,u=e.background;return o.colors[u]},function(e){var o=e.theme,u=e.color;return o.colors[u]},function(e){var o=e.theme,u=e.padding;return Object(g.a)("padding",u,o)},function(e){var o=e.theme,u=e.paddingTop;return Object(g.a)("padding-top",u,o)},function(e){var o=e.theme,u=e.paddingRight;return Object(g.a)("padding-right",u,o)},function(e){var o=e.theme,u=e.paddingBottom;return Object(g.a)("padding-bottom",u,o)},function(e){var o=e.theme,u=e.paddingLeft;return Object(g.a)("padding-left",u,o)},function(e){var o=e.theme,u=e.marginLeft;return Object(g.a)("margin-left",u,o)},function(e){var o=e.theme,u=e.marginRight;return Object(g.a)("margin-right",u,o)},function(e){var o=e.theme,u=e.marginTop;return Object(g.a)("margin-top",u,o)},function(e){var o=e.theme,u=e.marginBottom;return Object(g.a)("margin-bottom",u,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,u=e.hasRadius,S=e.borderRadius;return u?o.borderRadius:S},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,u=e.borderColor,S=e.borderStyle,v=e.borderWidth;if(u&&!S&&!v)return"1px solid ".concat(o.colors[u])},function(e){var o=e.theme,u=e.shadow;return o.shadows[u]},function(e){return e.pointerEvents},function(e){var o=e._hover,u=e.theme;return o?o(u):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});y.displayName="Box",y.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},y.propTypes={_hover:r.a.func,background:r.a.string,basis:r.a.oneOfType([r.a.string,r.a.string]),borderColor:r.a.string,children:r.a.oneOfType([r.a.node,r.a.string]),color:r.a.string,flex:r.a.oneOfType([r.a.string,r.a.string]),grow:r.a.oneOfType([r.a.string,r.a.string]),hasRadius:r.a.bool,hiddenS:r.a.bool,hiddenXS:r.a.bool,padding:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingBottom:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingLeft:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingRight:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingTop:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),shadow:r.a.string,shrink:r.a.oneOfType([r.a.string,r.a.string])}},7:function(n,c,t){"use strict";var i=t(10),a=t.n(i),l=t(13),s=t.n(l);c.a=function(r,p,h){var g=p;if(Array.isArray(p)||s()(p)!=="object"||(g=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),g!==void 0){if(Array.isArray(g)){var O=g,y=a()(O,3),e=y[0],o=y[1],u=y[2],S="".concat(r,": ").concat(h.spaces[e],";");return o!==void 0&&(S+="".concat(h.mediaQueries.tablet,`{
          `).concat(r,": ").concat(h.spaces[o],`;
        }`)),u!==void 0&&(S+="".concat(h.mediaQueries.mobile,`{
          `).concat(r,": ").concat(h.spaces[u],`;
        }`)),S}var v=h.spaces[g]||g;return"".concat(r,": ").concat(v,";")}}}})})},56752:(j,k,d)=>{"use strict";d.r(k),d.d(k,{SettingsPage:()=>Z,default:()=>J});var f=d(67294),P=d(15482),n=d(97132),c=d(68547),t=d(84734),i=d.n(t),a=d(5493),l=d(67826),s=d(47857),r=d(49425),p=d(19408),h=d(62031),g=d(9008),O=d(34626),y=d(78862),e=d(9669),o=d.n(e),u=d(18446),S=d.n(u),v=d(50779);const I=m=>m;var w=d(8041),N=d(36968),R=d.n(N);const T={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},U=(m,M)=>(0,w.default)(m,b=>{switch(M.type){case"CANCEL_CHANGES":{b.modifiedData=m.initialData;break}case"GET_DATA_SUCCEEDED":{b.isLoading=!1,b.initialData=M.data,b.modifiedData=M.data;break}case"ON_CHANGE":{R()(b,["modifiedData",...M.keys.split(".")],M.value);break}case"ON_SUBMIT":{b.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{b.initialData=m.modifiedData,b.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{b.isSubmiting=!1;break}default:return m}});var H=d(24442),V=d(25108),Y=(m,M,b)=>new Promise((F,L)=>{var G=x=>{try{C(b.next(x))}catch(D){L(D)}},W=x=>{try{C(b.throw(x))}catch(D){L(D)}},C=x=>x.done?F(x.value):Promise.resolve(x.value).then(G,W);C((b=b.apply(m,M)).next())});const Z=()=>{const{formatMessage:m}=(0,n.useIntl)(),{lockApp:M,unlockApp:b}=(0,c.useOverlayBlocker)(),F=(0,c.useNotification)();(0,c.useFocusWhenNavigate)();const[{initialData:L,isLoading:G,isSubmiting:W,modifiedData:C},x]=(0,f.useReducer)(U,T,I),D=(0,f.useRef)(!0);(0,f.useEffect)(()=>{const B=o().CancelToken.source(),q=()=>Y(void 0,null,function*(){try{const{data:{data:X}}=yield v.be.get((0,v.IF)("settings"),{cancelToken:B.token});x({type:"GET_DATA_SUCCEEDED",data:X})}catch(X){V.error(X)}});return D.current&&q(),()=>{B.cancel("Operation canceled by the user."),D.current=!1}},[]);const $=S()(L,C),K=E=>Y(void 0,null,function*(){if(E.preventDefault(),!$){M(),x({type:"ON_SUBMIT"});try{yield v.be.put((0,v.IF)("settings"),C),x({type:"SUBMIT_SUCCEEDED"}),F({type:"success",message:{id:"notification.form.success.fields"}})}catch(B){V.error(B),x({type:"ON_SUBMIT_ERROR"})}b()}}),Q=({target:{name:E,value:B}})=>{x({type:"ON_CHANGE",keys:E,value:B})};return f.createElement(h.Main,{tabIndex:-1},f.createElement(P.Helmet,{title:m({id:(0,v.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),f.createElement("form",{onSubmit:K},f.createElement(y.HeaderLayout,{title:m({id:(0,v.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:f.createElement(p.Button,{disabled:$,"data-testid":"save-button",loading:W,type:"submit",startIcon:f.createElement(i(),null),size:"L"},m({id:"global.save",defaultMessage:"Save"})),subtitle:m({id:(0,v.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),f.createElement(y.ContentLayout,null,G?f.createElement(c.LoadingIndicatorPage,null):f.createElement(y.Layout,null,f.createElement(g.Stack,{spacing:12},f.createElement(a.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},f.createElement(g.Stack,{spacing:4},f.createElement(l.Flex,null,f.createElement(r.Typography,{variant:"delta",as:"h2"},m({id:(0,v.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),f.createElement(O.Grid,{gap:6},f.createElement(O.GridItem,{col:6,s:12},f.createElement(s.ToggleInput,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:C.responsiveDimensions,hint:m({id:(0,v.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:m({id:(0,v.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:m({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:m({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:E=>{Q({target:{name:"responsiveDimensions",value:E.target.checked}})}})),f.createElement(O.GridItem,{col:6,s:12},f.createElement(s.ToggleInput,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:C.sizeOptimization,hint:m({id:(0,v.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:m({id:(0,v.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:m({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:m({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:E=>{Q({target:{name:"sizeOptimization",value:E.target.checked}})}})),f.createElement(O.GridItem,{col:6,s:12},f.createElement(s.ToggleInput,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:C.autoOrientation,hint:m({id:(0,v.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:m({id:(0,v.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:m({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:m({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:E=>{Q({target:{name:"autoOrientation",value:E.target.checked}})}}))))))))))},J=()=>f.createElement(c.CheckPagePermissions,{permissions:H.Z.settings},f.createElement(Z,null))}}]);

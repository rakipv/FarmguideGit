(self.webpackChunkfarm_guide=self.webpackChunkfarm_guide||[]).push([[3650],{62031:(U,N,d)=>{"use strict";U.exports=d(59525)},59525:function(U,N,d){(function(i,Q){U.exports=Q(d(67294),d(78384))})(this,function(i,Q){return function(n){var u={};function t(s){if(u[s])return u[s].exports;var o=u[s]={i:s,l:!1,exports:{}};return n[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=u,t.d=function(s,o,f){t.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:f})},t.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},t.t=function(s,o){if(1&o&&(s=t(s)),8&o||4&o&&typeof s=="object"&&s&&s.__esModule)return s;var f=Object.create(null);if(t.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:s}),2&o&&typeof s!="string")for(var l in s)t.d(f,l,function(a){return s[a]}.bind(null,l));return f},t.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return t.d(o,"a",o),o},t.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},t.p="",t(t.s=110)}({0:function(n,u,t){n.exports=t(19)()},1:function(n,u){n.exports=i},10:function(n,u,t){var s=t(25),o=t(26),f=t(22),l=t(27);n.exports=function(a,v){return s(a)||o(a,v)||f(a,v)||l()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,u,t){"use strict";t.r(u),t.d(u,"Main",function(){return D}),t.d(u,"SkipToContent",function(){return W});var s,o=t(5),f=t.n(o),l=t(4),a=t.n(l),v=t(3),b=t.n(v),y=t(1),L=t.n(y),P=t(0),e=t.n(P),r=t(2),c=t.n(r),C=["labelledBy"],F=c.a.main(s||(s=b()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),D=function(B){var z=B.labelledBy,V=a()(B,C),R=z||"main-content-title";return L.a.createElement(F,f()({"aria-labelledby":R,id:"main-content",tabIndex:-1},V))};D.defaultProps={labelledBy:void 0},D.propTypes={labelledBy:e.a.string};var H,$=t(6),Z=c()($.Box)(H||(H=b()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(B){return B.theme.spaces[3]},function(B){return B.theme.spaces[3]}),W=function(B){var z=B.children;return L.a.createElement(Z,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},z)};W.propTypes={children:e.a.node.isRequired}},13:function(n,u){function t(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(o){return typeof o},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n.exports.default=n.exports,n.exports.__esModule=!0),t(s)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,u,t){"use strict";var s=t(20);function o(){}function f(){}f.resetWarningCache=o,n.exports=function(){function l(b,y,L,P,e,r){if(r!==s){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function a(){return l}l.isRequired=l;var v={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:a,element:l,elementType:l,instanceOf:a,node:l,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:f,resetWarningCache:o};return v.PropTypes=v,v}},2:function(n,u){n.exports=Q},20:function(n,u,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,u){n.exports=function(t,s){(s==null||s>t.length)&&(s=t.length);for(var o=0,f=new Array(s);o<s;o++)f[o]=t[o];return f},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,u,t){var s=t(21);n.exports=function(o,f){if(o){if(typeof o=="string")return s(o,f);var l=Object.prototype.toString.call(o).slice(8,-1);return l==="Object"&&o.constructor&&(l=o.constructor.name),l==="Map"||l==="Set"?Array.from(o):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?s(o,f):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,u){n.exports=function(t,s){if(t==null)return{};var o,f,l={},a=Object.keys(t);for(f=0;f<a.length;f++)o=a[f],s.indexOf(o)>=0||(l[o]=t[o]);return l},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,u){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,u){n.exports=function(t,s){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var f,l,a=[],v=!0,b=!1;try{for(o=o.call(t);!(v=(f=o.next()).done)&&(a.push(f.value),!s||a.length!==s);v=!0);}catch(y){b=!0,l=y}finally{try{v||o.return==null||o.return()}finally{if(b)throw l}}return a}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,u){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,u){n.exports=function(t,s){return s||(s=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(s)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,u,t){var s=t(24);n.exports=function(o,f){if(o==null)return{};var l,a,v=s(o,f);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(o);for(a=0;a<b.length;a++)l=b[a],f.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(o,l)&&(v[l]=o[l])}return v},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,u){function t(){return n.exports=t=Object.assign||function(s){for(var o=1;o<arguments.length;o++){var f=arguments[o];for(var l in f)Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}return s},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,u,t){"use strict";t.r(u),t.d(u,"Box",function(){return P});var s,o=t(3),f=t.n(o),l=t(0),a=t.n(l),v=t(2),b=t.n(v),y=t(7),L={color:!0},P=b.a.div.withConfig({shouldForwardProp:function(e,r){return!L[e]&&r(e)}})(s||(s=f()([`
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
`])),function(e){var r=e.fontSize;return e.theme.fontSizes[r]||r},function(e){var r=e.theme,c=e.background;return r.colors[c]},function(e){var r=e.theme,c=e.color;return r.colors[c]},function(e){var r=e.theme,c=e.padding;return Object(y.a)("padding",c,r)},function(e){var r=e.theme,c=e.paddingTop;return Object(y.a)("padding-top",c,r)},function(e){var r=e.theme,c=e.paddingRight;return Object(y.a)("padding-right",c,r)},function(e){var r=e.theme,c=e.paddingBottom;return Object(y.a)("padding-bottom",c,r)},function(e){var r=e.theme,c=e.paddingLeft;return Object(y.a)("padding-left",c,r)},function(e){var r=e.theme,c=e.marginLeft;return Object(y.a)("margin-left",c,r)},function(e){var r=e.theme,c=e.marginRight;return Object(y.a)("margin-right",c,r)},function(e){var r=e.theme,c=e.marginTop;return Object(y.a)("margin-top",c,r)},function(e){var r=e.theme,c=e.marginBottom;return Object(y.a)("margin-bottom",c,r)},function(e){var r=e.theme;return e.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(e){var r=e.theme;return e.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(e){var r=e.theme,c=e.hasRadius,C=e.borderRadius;return c?r.borderRadius:C},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var r=e.borderColor;return e.theme.colors[r]},function(e){var r=e.theme,c=e.borderColor,C=e.borderStyle,F=e.borderWidth;if(c&&!C&&!F)return"1px solid ".concat(r.colors[c])},function(e){var r=e.theme,c=e.shadow;return r.shadows[c]},function(e){return e.pointerEvents},function(e){var r=e._hover,c=e.theme;return r?r(c):void 0},function(e){return e.display},function(e){return e.position},function(e){var r=e.left;return e.theme.spaces[r]||r},function(e){var r=e.right;return e.theme.spaces[r]||r},function(e){var r=e.top;return e.theme.spaces[r]||r},function(e){var r=e.bottom;return e.theme.spaces[r]||r},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var r=e.width;return e.theme.spaces[r]||r},function(e){var r=e.maxWidth;return e.theme.spaces[r]||r},function(e){var r=e.minWidth;return e.theme.spaces[r]||r},function(e){var r=e.height;return e.theme.spaces[r]||r},function(e){var r=e.maxHeight;return e.theme.spaces[r]||r},function(e){var r=e.minHeight;return e.theme.spaces[r]||r},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});P.displayName="Box",P.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P.propTypes={_hover:a.a.func,background:a.a.string,basis:a.a.oneOfType([a.a.string,a.a.string]),borderColor:a.a.string,children:a.a.oneOfType([a.a.node,a.a.string]),color:a.a.string,flex:a.a.oneOfType([a.a.string,a.a.string]),grow:a.a.oneOfType([a.a.string,a.a.string]),hasRadius:a.a.bool,hiddenS:a.a.bool,hiddenXS:a.a.bool,padding:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingBottom:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingLeft:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingRight:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingTop:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),shadow:a.a.string,shrink:a.a.oneOfType([a.a.string,a.a.string])}},7:function(n,u,t){"use strict";var s=t(10),o=t.n(s),f=t(13),l=t.n(f);u.a=function(a,v,b){var y=v;if(Array.isArray(v)||l()(v)!=="object"||(y=[v==null?void 0:v.desktop,v==null?void 0:v.tablet,v==null?void 0:v.mobile]),y!==void 0){if(Array.isArray(y)){var L=y,P=o()(L,3),e=P[0],r=P[1],c=P[2],C="".concat(a,": ").concat(b.spaces[e],";");return r!==void 0&&(C+="".concat(b.mediaQueries.tablet,`{
          `).concat(a,": ").concat(b.spaces[r],`;
        }`)),c!==void 0&&(C+="".concat(b.mediaQueries.mobile,`{
          `).concat(a,": ").concat(b.spaces[c],`;
        }`)),C}var F=b.spaces[y]||y;return"".concat(a,": ").concat(F,";")}}}})})},58774:(U,N,d)=>{"use strict";d.r(N),d.d(N,{default:()=>Pe});var i=d(67294),Q=d(15482),n=d(97132),u=d(68547),t=d(50779),s=d(78384),o=d(78862),f=d(62031),l=d(19408),a=d(80768),v=d.n(a),b=d(5493),y=d(59522),L=d(19839),P=d(56219),e=d(71382),r=d(45687),c=d(23724),C=d(84686),F=(g,p,m)=>new Promise((E,O)=>{var M=h=>{try{S(m.next(h))}catch(x){O(x)}},A=h=>{try{S(m.throw(h))}catch(x){O(x)}},S=h=>h.done?E(h.value):Promise.resolve(h.value).then(M,A);S((m=m.apply(g,p)).next())});const D=({skipWhen:g})=>{const{formatMessage:p}=(0,n.useIntl)(),m=(0,u.useNotification)(),{notifyStatus:E}=(0,C.useNotifyAT)(),[{rawQuery:O}]=(0,u.useQueryParams)(),M=(0,t.IF)("files"),A=()=>F(void 0,null,function*(){const{data:j}=yield t.be.get(`${M}${O}`);return j}),{data:S,error:h,isLoading:x}=(0,c.useQuery)(["assets",O],A,{enabled:!g,staleTime:0,cacheTime:0});return(0,i.useEffect)(()=>{S&&E(p({id:"list.asset.at.finished",defaultMessage:"The assets have finished loading."}))},[S,E,p]),(0,i.useEffect)(()=>{h&&m({type:"warning",message:{id:"notification.error"}})},[h,m]),{data:S,error:h,isLoading:x}};var H=d(23980),$=d.n(H),Z=d(99398),W=d(32269),B=d(62082);const z=()=>{var g;const p=(0,i.useRef)(null),[m,E]=(0,i.useState)(!1),{formatMessage:O}=(0,n.useIntl)(),[{query:M},A]=(0,u.useQueryParams)(),S=((g=M==null?void 0:M.filters)==null?void 0:g.$and)||[],h=()=>E(w=>!w),x=w=>{A({filters:{$and:w},page:1})},j=w=>{A({filters:{$and:w},page:1})};return i.createElement(i.Fragment,null,i.createElement(l.Button,{variant:"tertiary",ref:p,startIcon:i.createElement($(),null),onClick:h,size:"S"},O({id:"app.utils.filters",defaultMessage:"Filters"})),m&&i.createElement(W.Z,{displayedFilters:B.Z,filters:S,onSubmit:j,onToggle:h,source:p}),i.createElement(Z.Z,{appliedFilters:S,filtersSchema:B.Z,onRemoveFilter:x}))};var V=d(45697),R=d.n(V),oe=d(67826);const X=({pagination:g})=>i.createElement(b.Box,{paddingTop:6},i.createElement(oe.Flex,{alignItems:"flex-end",justifyContent:"space-between"},i.createElement(u.PageSizeURLQuery,null),i.createElement(u.PaginationURLQuery,{pagination:g})));X.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},X.propTypes={pagination:R().shape({page:R().number,pageCount:R().number,pageSize:R().number,total:R().number})};var ae=d(60269),se=d(49425),ie=d(9008),le=d(18568),ue=d.n(le),ce=d(45454),de=Object.defineProperty,fe=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,J=(g,p,m)=>p in g?de(g,p,{enumerable:!0,configurable:!0,writable:!0,value:m}):g[p]=m,ve=(g,p)=>{for(var m in p||(p={}))me.call(p,m)&&J(g,m,p[m]);if(G)for(var m of G(p))ge.call(p,m)&&J(g,m,p[m]);return g},he=(g,p)=>fe(g,pe(p));const ye=g=>{const p=g.map(m=>(0,ce.H)(m));return Promise.all(p)},be=()=>{const g=(0,u.useNotification)(),p=(0,c.useQueryClient)(),m=(0,c.useMutation)(ye,{onSuccess:()=>{p.refetchQueries(["assets"],{active:!0}),p.refetchQueries(["asset-count"],{active:!0}),g({type:"success",message:{id:"modal.remove.success-label",defaultMessage:"The asset has been successfully removed."}})},onError:O=>{g({type:"warning",message:O.message})}}),E=O=>m.mutateAsync(O);return he(ve({},m),{removeAssets:E})};var xe=d(93593),Oe=(g,p,m)=>new Promise((E,O)=>{var M=h=>{try{S(m.next(h))}catch(x){O(x)}},A=h=>{try{S(m.throw(h))}catch(x){O(x)}},S=h=>h.done?E(h.value):Promise.resolve(h.value).then(M,A);S((m=m.apply(g,p)).next())});const K=({selectedAssets:g,onSuccess:p})=>{const{formatMessage:m}=(0,n.useIntl)(),[E,O]=(0,i.useState)(!1),{isLoading:M,removeAssets:A}=be(),S=()=>Oe(void 0,null,function*(){yield A(g.map(({id:h})=>h)),p()});return i.createElement(i.Fragment,null,i.createElement(ie.Stack,{horizontal:!0,spacing:2,paddingBottom:5},i.createElement(se.Typography,{variant:"epsilon",textColor:"neutral600"},m({id:(0,xe.Z)("list.assets.selected"),defaultMessage:"{number, plural, =0 {No asset} one {1 asset} other {# assets}} selected"},{number:g.length})),i.createElement(l.Button,{variant:"danger-light",size:"S",startIcon:i.createElement(ue(),null),onClick:()=>O(!0)},m({id:"global.delete",defaultMessage:"Delete"}))),i.createElement(u.ConfirmDialog,{isConfirmButtonLoading:M,isOpen:E,onToggleDialog:()=>O(!1),onConfirm:S}))};K.propTypes={selectedAssets:R().arrayOf(R().shape({})).isRequired,onSuccess:R().func.isRequired};var Se=d(54053);const Ee=(0,s.default)(b.Box)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,Te=()=>{var g;const{canRead:p,canCreate:m,canUpdate:E,canCopyLink:O,canDownload:M,isLoading:A}=(0,ae.y)(),[{query:S},h]=(0,u.useQueryParams)(),{formatMessage:x}=(0,n.useIntl)(),{data:j,isLoading:w,error:Me}=D({skipWhen:!p}),Ae=Y=>{h({sort:Y})},[Ce,Be]=(0,i.useState)(!1),[q,_]=(0,i.useState)(void 0),[I,{selectOne:je,selectAll:ee}]=(0,u.useSelectionState)("id",[]),k=()=>Be(Y=>!Y);(0,u.useFocusWhenNavigate)();const te=A||w,T=j==null?void 0:j.results,ne=((g=j==null?void 0:j.pagination)==null?void 0:g.total)||0,re=Boolean(S._q||S.filters);return i.createElement(o.Layout,null,i.createElement(f.Main,{"aria-busy":te},i.createElement(o.HeaderLayout,{title:x({id:(0,t.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:x({id:(0,t.OB)(ne>0?"header.content.assets-multiple":"header.content.assets.assets-single"),defaultMessage:"0 assets"},{number:ne}),primaryAction:m?i.createElement(l.Button,{startIcon:i.createElement(v(),null),onClick:k},x({id:(0,t.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})):void 0}),i.createElement(o.ActionLayout,{startActions:i.createElement(i.Fragment,null,E&&i.createElement(Ee,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},i.createElement(y.BaseCheckbox,{"aria-label":x({id:(0,t.OB)("bulk.select.label"),defaultMessage:"Select all assets"}),indeterminate:(T==null?void 0:T.length)>0&&I.length>0&&I.length!==(T==null?void 0:T.length),value:(T==null?void 0:T.length)>0&&I.length===(T==null?void 0:T.length),onChange:()=>ee(T)})),p&&i.createElement(r.Z,{onChangeSort:Ae}),p&&i.createElement(z,null)),endActions:i.createElement(u.SearchURLQuery,{label:x({id:(0,t.OB)("search.label"),defaultMessage:"Search for an asset"})})}),i.createElement(o.ContentLayout,null,I.length>0&&i.createElement(K,{selectedAssets:I,onSuccess:ee}),te&&i.createElement(u.LoadingIndicatorPage,null),Me&&i.createElement(u.AnErrorOccurred,null),!p&&i.createElement(u.NoPermissions,null),p&&T&&T.length===0&&i.createElement(Se.i,{action:m&&!re?i.createElement(l.Button,{variant:"secondary",startIcon:i.createElement(v(),null),onClick:k},x({id:(0,t.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})):void 0,content:x(re?{id:(0,t.OB)("list.assets-empty.title-withSearch"),defaultMessage:"There are no assets with the applied filters"}:m?{id:(0,t.OB)("list.assets.empty"),defaultMessage:"Upload your first assets..."}:{id:(0,t.OB)("list.assets.empty.no-permissions"),defaultMessage:"The asset list is empty"})}),p&&T&&T.length>0&&i.createElement(i.Fragment,null,i.createElement(e.l,{assets:T,onEditAsset:_,onSelectAsset:je,selectedAssets:I}),(j==null?void 0:j.pagination)&&i.createElement(X,{pagination:j.pagination})))),Ce&&i.createElement(L.x,{onClose:k,trackedLocation:"upload"}),q&&i.createElement(P.s,{onClose:()=>_(void 0),asset:q,canUpdate:E,canCopyLink:O,canDownload:M,trackedLocation:"upload"}))},Pe=()=>{const[{rawQuery:g},p]=(0,u.useQueryParams)(),{formatMessage:m}=(0,n.useIntl)(),E=m({id:(0,t.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,i.useEffect)(()=>{g||p({sort:"updatedAt:DESC",page:1,pageSize:10})},[g,p]),g?i.createElement(i.Fragment,null,i.createElement(Q.Helmet,{title:E}),i.createElement(Te,null)):null}}}]);

(self.webpackChunkfarm_guide=self.webpackChunkfarm_guide||[]).push([[2282],{68115:(F,k,v)=>{"use strict";F.exports=v(7446)},7446:function(F,k,v){(function(m,M){F.exports=M(v(67294),v(78384),v(66526))})(this,function(m,M,d){return function(l){var s={};function t(o){if(s[o])return s[o].exports;var u=s[o]={i:o,l:!1,exports:{}};return l[o].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=l,t.c=s,t.d=function(o,u,c){t.o(o,u)||Object.defineProperty(o,u,{enumerable:!0,get:c})},t.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,u){if(1&u&&(o=t(o)),8&u||4&u&&typeof o=="object"&&o&&o.__esModule)return o;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),2&u&&typeof o!="string")for(var i in o)t.d(c,i,function(a){return o[a]}.bind(null,i));return c},t.n=function(o){var u=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(u,"a",u),u},t.o=function(o,u){return Object.prototype.hasOwnProperty.call(o,u)},t.p="",t(t.s=112)}({0:function(l,s,t){l.exports=t(19)()},1:function(l,s){l.exports=m},10:function(l,s,t){var o=t(25),u=t(26),c=t(22),i=t(27);l.exports=function(a,p){return o(a)||u(a,p)||c(a,p)||i()},l.exports.default=l.exports,l.exports.__esModule=!0},112:function(l,s,t){"use strict";t.r(s),t.d(s,"Crumb",function(){return j}),t.d(s,"Breadcrumbs",function(){return Z});var o,u=t(4),c=t.n(u),i=t(3),a=t.n(i),p=t(1),h=t.n(p),x=t(0),O=t.n(x),r=t(2),e=t.n(r),n=t(50),f=t.n(n),P=t(8),z=t(6),D=t(9),N=t(18),q=["children","label"],_=e()(D.Flex)(o||(o=a()([`
  svg {
    height: 10px;
    width: 10px;
  }
  svg path {
    fill: `,`;
  }
  :last-of-type `,` {
    display: none;
  }
`])),function(U){return U.theme.colors.neutral300},z.Box),j=function(U){var V=U.children;return h.a.createElement(_,{inline:!0,as:"li"},h.a.createElement(P.Typography,{fontWeight:"bold",color:"neutral800"},V),h.a.createElement(z.Box,{paddingLeft:3,paddingRight:3},h.a.createElement(f.a,null)))};j.displayName="Crumb",j.propTypes={children:O.a.string.isRequired};var A=O.a.shape({type:O.a.oneOf([j])}),Z=function(U){var V=U.children,J=U.label,ee=c()(U,q);return h.a.createElement(D.Flex,ee,h.a.createElement(N.VisuallyHidden,null,J),h.a.createElement("ol",{"aria-hidden":!0},V))};Z.displayName="Breadcrumbs",Z.propTypes={children:O.a.oneOfType([O.a.arrayOf(A),A]).isRequired,label:O.a.string.isRequired}},13:function(l,s){function t(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(l.exports=t=function(u){return typeof u},l.exports.default=l.exports,l.exports.__esModule=!0):(l.exports=t=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},l.exports.default=l.exports,l.exports.__esModule=!0),t(o)}l.exports=t,l.exports.default=l.exports,l.exports.__esModule=!0},18:function(l,s,t){"use strict";t.r(s),t.d(s,"VisuallyHidden",function(){return a});var o,u=t(3),c=t.n(u),i=t(2),a=t.n(i).a.div(o||(o=c()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(l,s,t){"use strict";var o=t(20);function u(){}function c(){}c.resetWarningCache=u,l.exports=function(){function i(h,x,O,r,e,n){if(n!==o){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function a(){return i}i.isRequired=i;var p={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:a,element:i,elementType:i,instanceOf:a,node:i,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:c,resetWarningCache:u};return p.PropTypes=p,p}},2:function(l,s){l.exports=M},20:function(l,s,t){"use strict";l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(l,s){l.exports=function(t,o){(o==null||o>t.length)&&(o=t.length);for(var u=0,c=new Array(o);u<o;u++)c[u]=t[u];return c},l.exports.default=l.exports,l.exports.__esModule=!0},22:function(l,s,t){var o=t(21);l.exports=function(u,c){if(u){if(typeof u=="string")return o(u,c);var i=Object.prototype.toString.call(u).slice(8,-1);return i==="Object"&&u.constructor&&(i=u.constructor.name),i==="Map"||i==="Set"?Array.from(u):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(u,c):void 0}},l.exports.default=l.exports,l.exports.__esModule=!0},24:function(l,s){l.exports=function(t,o){if(t==null)return{};var u,c,i={},a=Object.keys(t);for(c=0;c<a.length;c++)u=a[c],o.indexOf(u)>=0||(i[u]=t[u]);return i},l.exports.default=l.exports,l.exports.__esModule=!0},25:function(l,s){l.exports=function(t){if(Array.isArray(t))return t},l.exports.default=l.exports,l.exports.__esModule=!0},26:function(l,s){l.exports=function(t,o){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var c,i,a=[],p=!0,h=!1;try{for(u=u.call(t);!(p=(c=u.next()).done)&&(a.push(c.value),!o||a.length!==o);p=!0);}catch(x){h=!0,i=x}finally{try{p||u.return==null||u.return()}finally{if(h)throw i}}return a}},l.exports.default=l.exports,l.exports.__esModule=!0},27:function(l,s){l.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},l.exports.default=l.exports,l.exports.__esModule=!0},3:function(l,s){l.exports=function(t,o){return o||(o=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(o)}}))},l.exports.default=l.exports,l.exports.__esModule=!0},4:function(l,s,t){var o=t(24);l.exports=function(u,c){if(u==null)return{};var i,a,p=o(u,c);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(u);for(a=0;a<h.length;a++)i=h[a],c.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(u,i)&&(p[i]=u[i])}return p},l.exports.default=l.exports,l.exports.__esModule=!0},50:function(l,s){l.exports=d},6:function(l,s,t){"use strict";t.r(s),t.d(s,"Box",function(){return r});var o,u=t(3),c=t.n(u),i=t(0),a=t.n(i),p=t(2),h=t.n(p),x=t(7),O={color:!0},r=h.a.div.withConfig({shouldForwardProp:function(e,n){return!O[e]&&n(e)}})(o||(o=c()([`
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
`])),function(e){var n=e.fontSize;return e.theme.fontSizes[n]||n},function(e){var n=e.theme,f=e.background;return n.colors[f]},function(e){var n=e.theme,f=e.color;return n.colors[f]},function(e){var n=e.theme,f=e.padding;return Object(x.a)("padding",f,n)},function(e){var n=e.theme,f=e.paddingTop;return Object(x.a)("padding-top",f,n)},function(e){var n=e.theme,f=e.paddingRight;return Object(x.a)("padding-right",f,n)},function(e){var n=e.theme,f=e.paddingBottom;return Object(x.a)("padding-bottom",f,n)},function(e){var n=e.theme,f=e.paddingLeft;return Object(x.a)("padding-left",f,n)},function(e){var n=e.theme,f=e.marginLeft;return Object(x.a)("margin-left",f,n)},function(e){var n=e.theme,f=e.marginRight;return Object(x.a)("margin-right",f,n)},function(e){var n=e.theme,f=e.marginTop;return Object(x.a)("margin-top",f,n)},function(e){var n=e.theme,f=e.marginBottom;return Object(x.a)("margin-bottom",f,n)},function(e){var n=e.theme;return e.hiddenS?"".concat(n.mediaQueries.tablet," { display: none; }"):void 0},function(e){var n=e.theme;return e.hiddenXS?"".concat(n.mediaQueries.mobile," { display: none; }"):void 0},function(e){var n=e.theme,f=e.hasRadius,P=e.borderRadius;return f?n.borderRadius:P},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var n=e.borderColor;return e.theme.colors[n]},function(e){var n=e.theme,f=e.borderColor,P=e.borderStyle,z=e.borderWidth;if(f&&!P&&!z)return"1px solid ".concat(n.colors[f])},function(e){var n=e.theme,f=e.shadow;return n.shadows[f]},function(e){return e.pointerEvents},function(e){var n=e._hover,f=e.theme;return n?n(f):void 0},function(e){return e.display},function(e){return e.position},function(e){var n=e.left;return e.theme.spaces[n]||n},function(e){var n=e.right;return e.theme.spaces[n]||n},function(e){var n=e.top;return e.theme.spaces[n]||n},function(e){var n=e.bottom;return e.theme.spaces[n]||n},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var n=e.width;return e.theme.spaces[n]||n},function(e){var n=e.maxWidth;return e.theme.spaces[n]||n},function(e){var n=e.minWidth;return e.theme.spaces[n]||n},function(e){var n=e.height;return e.theme.spaces[n]||n},function(e){var n=e.maxHeight;return e.theme.spaces[n]||n},function(e){var n=e.minHeight;return e.theme.spaces[n]||n},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});r.displayName="Box",r.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},r.propTypes={_hover:a.a.func,background:a.a.string,basis:a.a.oneOfType([a.a.string,a.a.string]),borderColor:a.a.string,children:a.a.oneOfType([a.a.node,a.a.string]),color:a.a.string,flex:a.a.oneOfType([a.a.string,a.a.string]),grow:a.a.oneOfType([a.a.string,a.a.string]),hasRadius:a.a.bool,hiddenS:a.a.bool,hiddenXS:a.a.bool,padding:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingBottom:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingLeft:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingRight:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingTop:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),shadow:a.a.string,shrink:a.a.oneOfType([a.a.string,a.a.string])}},7:function(l,s,t){"use strict";var o=t(10),u=t.n(o),c=t(13),i=t.n(c);s.a=function(a,p,h){var x=p;if(Array.isArray(p)||i()(p)!=="object"||(x=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),x!==void 0){if(Array.isArray(x)){var O=x,r=u()(O,3),e=r[0],n=r[1],f=r[2],P="".concat(a,": ").concat(h.spaces[e],";");return n!==void 0&&(P+="".concat(h.mediaQueries.tablet,`{
          `).concat(a,": ").concat(h.spaces[n],`;
        }`)),f!==void 0&&(P+="".concat(h.mediaQueries.mobile,`{
          `).concat(a,": ").concat(h.spaces[f],`;
        }`)),P}var z=h.spaces[x]||x;return"".concat(a,": ").concat(z,";")}}},8:function(l,s,t){"use strict";t.r(s),t.d(s,"Typography",function(){return O});var o,u=t(3),c=t.n(u),i=t(0),a=t.n(i),p=t(2),h=["alpha","beta","delta","epsilon","omega","pi","sigma"],x={fontSize:!0,fontWeight:!0},O=t.n(p).a.span.withConfig({shouldForwardProp:function(r,e){return!x[r]&&e(r)}})(o||(o=c()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(r){var e=r.theme,n=r.fontWeight;return e.fontWeights[n]},function(r){var e=r.theme,n=r.fontSize;return e.fontSizes[n]},function(r){var e=r.theme,n=r.lineHeight;return e.lineHeights[n]},function(r){var e=r.theme,n=r.textColor;return e.colors[n||"neutral800"]},function(r){return r.textTransform},function(r){return r.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(r){var e=r.variant,n=r.theme;switch(e){case"alpha":return`
        font-weight: `.concat(n.fontWeights.bold,`;
        font-size: `).concat(n.fontSizes[5],`;
        line-height: `).concat(n.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(n.fontWeights.bold,`;
        font-size: `).concat(n.fontSizes[4],`;
        line-height: `).concat(n.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(n.fontWeights.semiBold,`;
        font-size: `).concat(n.fontSizes[3],`;
        line-height: `).concat(n.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(n.fontSizes[3],`;
        line-height: `).concat(n.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(n.fontSizes[2],`;
        line-height: `).concat(n.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(n.fontSizes[1],`;
        line-height: `).concat(n.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(n.fontWeights.bold,`;
        font-size: `).concat(n.fontSizes[0],`;
        line-height: `).concat(n.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(n.fontSizes[2],`;
      `)}});O.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},O.propTypes={fontSize:a.a.oneOfType([a.a.number,a.a.string]),fontWeight:a.a.string,lineHeight:a.a.oneOfType([a.a.number,a.a.string]),textColor:a.a.string,textTransform:a.a.string,variant:a.a.oneOf(h)}},9:function(l,s,t){"use strict";t.r(s),t.d(s,"Flex",function(){return e});var o,u=t(3),c=t.n(u),i=t(0),a=t.n(i),p=t(2),h=t.n(p),x=t(6),O=t(7),r={direction:!0},e=h()(x.Box).withConfig({shouldForwardProp:function(n,f){return!r[n]&&f(n)}})(o||(o=c()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(n){return n.alignItems},function(n){return n.inline?"inline-flex":"flex"},function(n){return n.direction},function(n){return n.wrap},function(n){var f=n.gap,P=n.theme;return Object(O.a)("gap",f,P)},function(n){return n.justifyContent});e.defaultProps={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},e.propTypes={alignItems:a.a.string,basis:a.a.oneOfType([a.a.string,a.a.number]),direction:a.a.string,gap:a.a.oneOfType([a.a.shape({desktop:a.a.number,mobile:a.a.number,tablet:a.a.number}),a.a.number,a.a.arrayOf(a.a.number),a.a.string]),inline:a.a.bool,justifyContent:a.a.string,reverse:a.a.bool,wrap:a.a.string}}})})},62031:(F,k,v)=>{"use strict";F.exports=v(59525)},59525:function(F,k,v){(function(m,M){F.exports=M(v(67294),v(78384))})(this,function(m,M){return function(d){var l={};function s(t){if(l[t])return l[t].exports;var o=l[t]={i:t,l:!1,exports:{}};return d[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=d,s.c=l,s.d=function(t,o,u){s.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:u})},s.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,o){if(1&o&&(t=s(t)),8&o||4&o&&typeof t=="object"&&t&&t.__esModule)return t;var u=Object.create(null);if(s.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&o&&typeof t!="string")for(var c in t)s.d(u,c,function(i){return t[i]}.bind(null,c));return u},s.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(o,"a",o),o},s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},s.p="",s(s.s=110)}({0:function(d,l,s){d.exports=s(19)()},1:function(d,l){d.exports=m},10:function(d,l,s){var t=s(25),o=s(26),u=s(22),c=s(27);d.exports=function(i,a){return t(i)||o(i,a)||u(i,a)||c()},d.exports.default=d.exports,d.exports.__esModule=!0},110:function(d,l,s){"use strict";s.r(l),s.d(l,"Main",function(){return z}),s.d(l,"SkipToContent",function(){return _});var t,o=s(5),u=s.n(o),c=s(4),i=s.n(c),a=s(3),p=s.n(a),h=s(1),x=s.n(h),O=s(0),r=s.n(O),e=s(2),n=s.n(e),f=["labelledBy"],P=n.a.main(t||(t=p()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),z=function(j){var A=j.labelledBy,Z=i()(j,f),U=A||"main-content-title";return x.a.createElement(P,u()({"aria-labelledby":U,id:"main-content",tabIndex:-1},Z))};z.defaultProps={labelledBy:void 0},z.propTypes={labelledBy:r.a.string};var D,N=s(6),q=n()(N.Box)(D||(D=p()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(j){return j.theme.spaces[3]},function(j){return j.theme.spaces[3]}),_=function(j){var A=j.children;return x.a.createElement(q,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},A)};_.propTypes={children:r.a.node.isRequired}},13:function(d,l){function s(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(d.exports=s=function(o){return typeof o},d.exports.default=d.exports,d.exports.__esModule=!0):(d.exports=s=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d.exports.default=d.exports,d.exports.__esModule=!0),s(t)}d.exports=s,d.exports.default=d.exports,d.exports.__esModule=!0},19:function(d,l,s){"use strict";var t=s(20);function o(){}function u(){}u.resetWarningCache=o,d.exports=function(){function c(p,h,x,O,r,e){if(e!==t){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function i(){return c}c.isRequired=c;var a={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:i,element:c,elementType:c,instanceOf:i,node:c,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:u,resetWarningCache:o};return a.PropTypes=a,a}},2:function(d,l){d.exports=M},20:function(d,l,s){"use strict";d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(d,l){d.exports=function(s,t){(t==null||t>s.length)&&(t=s.length);for(var o=0,u=new Array(t);o<t;o++)u[o]=s[o];return u},d.exports.default=d.exports,d.exports.__esModule=!0},22:function(d,l,s){var t=s(21);d.exports=function(o,u){if(o){if(typeof o=="string")return t(o,u);var c=Object.prototype.toString.call(o).slice(8,-1);return c==="Object"&&o.constructor&&(c=o.constructor.name),c==="Map"||c==="Set"?Array.from(o):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?t(o,u):void 0}},d.exports.default=d.exports,d.exports.__esModule=!0},24:function(d,l){d.exports=function(s,t){if(s==null)return{};var o,u,c={},i=Object.keys(s);for(u=0;u<i.length;u++)o=i[u],t.indexOf(o)>=0||(c[o]=s[o]);return c},d.exports.default=d.exports,d.exports.__esModule=!0},25:function(d,l){d.exports=function(s){if(Array.isArray(s))return s},d.exports.default=d.exports,d.exports.__esModule=!0},26:function(d,l){d.exports=function(s,t){var o=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(o!=null){var u,c,i=[],a=!0,p=!1;try{for(o=o.call(s);!(a=(u=o.next()).done)&&(i.push(u.value),!t||i.length!==t);a=!0);}catch(h){p=!0,c=h}finally{try{a||o.return==null||o.return()}finally{if(p)throw c}}return i}},d.exports.default=d.exports,d.exports.__esModule=!0},27:function(d,l){d.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},d.exports.default=d.exports,d.exports.__esModule=!0},3:function(d,l){d.exports=function(s,t){return t||(t=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(t)}}))},d.exports.default=d.exports,d.exports.__esModule=!0},4:function(d,l,s){var t=s(24);d.exports=function(o,u){if(o==null)return{};var c,i,a=t(o,u);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(o);for(i=0;i<p.length;i++)c=p[i],u.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(o,c)&&(a[c]=o[c])}return a},d.exports.default=d.exports,d.exports.__esModule=!0},5:function(d,l){function s(){return d.exports=s=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var u=arguments[o];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c])}return t},d.exports.default=d.exports,d.exports.__esModule=!0,s.apply(this,arguments)}d.exports=s,d.exports.default=d.exports,d.exports.__esModule=!0},6:function(d,l,s){"use strict";s.r(l),s.d(l,"Box",function(){return O});var t,o=s(3),u=s.n(o),c=s(0),i=s.n(c),a=s(2),p=s.n(a),h=s(7),x={color:!0},O=p.a.div.withConfig({shouldForwardProp:function(r,e){return!x[r]&&e(r)}})(t||(t=u()([`
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
`])),function(r){var e=r.fontSize;return r.theme.fontSizes[e]||e},function(r){var e=r.theme,n=r.background;return e.colors[n]},function(r){var e=r.theme,n=r.color;return e.colors[n]},function(r){var e=r.theme,n=r.padding;return Object(h.a)("padding",n,e)},function(r){var e=r.theme,n=r.paddingTop;return Object(h.a)("padding-top",n,e)},function(r){var e=r.theme,n=r.paddingRight;return Object(h.a)("padding-right",n,e)},function(r){var e=r.theme,n=r.paddingBottom;return Object(h.a)("padding-bottom",n,e)},function(r){var e=r.theme,n=r.paddingLeft;return Object(h.a)("padding-left",n,e)},function(r){var e=r.theme,n=r.marginLeft;return Object(h.a)("margin-left",n,e)},function(r){var e=r.theme,n=r.marginRight;return Object(h.a)("margin-right",n,e)},function(r){var e=r.theme,n=r.marginTop;return Object(h.a)("margin-top",n,e)},function(r){var e=r.theme,n=r.marginBottom;return Object(h.a)("margin-bottom",n,e)},function(r){var e=r.theme;return r.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(r){var e=r.theme;return r.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(r){var e=r.theme,n=r.hasRadius,f=r.borderRadius;return n?e.borderRadius:f},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var e=r.borderColor;return r.theme.colors[e]},function(r){var e=r.theme,n=r.borderColor,f=r.borderStyle,P=r.borderWidth;if(n&&!f&&!P)return"1px solid ".concat(e.colors[n])},function(r){var e=r.theme,n=r.shadow;return e.shadows[n]},function(r){return r.pointerEvents},function(r){var e=r._hover,n=r.theme;return e?e(n):void 0},function(r){return r.display},function(r){return r.position},function(r){var e=r.left;return r.theme.spaces[e]||e},function(r){var e=r.right;return r.theme.spaces[e]||e},function(r){var e=r.top;return r.theme.spaces[e]||e},function(r){var e=r.bottom;return r.theme.spaces[e]||e},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var e=r.width;return r.theme.spaces[e]||e},function(r){var e=r.maxWidth;return r.theme.spaces[e]||e},function(r){var e=r.minWidth;return r.theme.spaces[e]||e},function(r){var e=r.height;return r.theme.spaces[e]||e},function(r){var e=r.maxHeight;return r.theme.spaces[e]||e},function(r){var e=r.minHeight;return r.theme.spaces[e]||e},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});O.displayName="Box",O.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},O.propTypes={_hover:i.a.func,background:i.a.string,basis:i.a.oneOfType([i.a.string,i.a.string]),borderColor:i.a.string,children:i.a.oneOfType([i.a.node,i.a.string]),color:i.a.string,flex:i.a.oneOfType([i.a.string,i.a.string]),grow:i.a.oneOfType([i.a.string,i.a.string]),hasRadius:i.a.bool,hiddenS:i.a.bool,hiddenXS:i.a.bool,padding:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingBottom:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingLeft:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingRight:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingTop:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),shadow:i.a.string,shrink:i.a.oneOfType([i.a.string,i.a.string])}},7:function(d,l,s){"use strict";var t=s(10),o=s.n(t),u=s(13),c=s.n(u);l.a=function(i,a,p){var h=a;if(Array.isArray(a)||c()(a)!=="object"||(h=[a==null?void 0:a.desktop,a==null?void 0:a.tablet,a==null?void 0:a.mobile]),h!==void 0){if(Array.isArray(h)){var x=h,O=o()(x,3),r=O[0],e=O[1],n=O[2],f="".concat(i,": ").concat(p.spaces[r],";");return e!==void 0&&(f+="".concat(p.mediaQueries.tablet,`{
          `).concat(i,": ").concat(p.spaces[e],`;
        }`)),n!==void 0&&(f+="".concat(p.mediaQueries.mobile,`{
          `).concat(i,": ").concat(p.spaces[n],`;
        }`)),f}var P=p.spaces[h]||h;return"".concat(i,": ").concat(P,";")}}}})})},8884:(F,k,v)=>{"use strict";v.r(k),v.d(k,{ProvidersPage:()=>xe,default:()=>$e});var m=v(67294),M=v(97132),d=v(68547),l=v(18721),s=v.n(l),t=v(11700),o=v.n(t),u=v(67814),c=v(78862),i=v(62031),a=v(84686),p=v(41798),h=v(49425),x=v(26851),O=v(30741),r=v(19352),e=v.n(r),n=v(23724),f=v(53209),P=v(42722);const z={id:(0,P.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},D={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},N={id:(0,P.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},q={id:(0,P.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},_={id:(0,P.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},j={id:(0,P.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},A={id:(0,P.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},Z={id:(0,P.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},V={email:{form:[[{intlLabel:q,name:"enabled",type:"bool",description:N,size:6}]],schema:f.Ry().shape({enabled:f.Xg().required(d.translatedErrors.required)})},providers:{form:[[{intlLabel:q,name:"enabled",type:"bool",description:N,size:6,validations:{required:!0}}],[{intlLabel:_,name:"key",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:Z,name:"secret",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:z,placeholder:D,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:j,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:f.Ry().shape({enabled:f.Xg().required(d.translatedErrors.required),key:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),secret:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),callback:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:q,name:"enabled",type:"bool",description:N,size:6,validations:{required:!0}}],[{intlLabel:_,name:"key",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:Z,name:"secret",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,P.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,P.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:z,placeholder:D,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:j,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:f.Ry().shape({enabled:f.Xg().required(d.translatedErrors.required),key:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),secret:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),subdomain:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),callback:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()})})}};var J=(g,b,y)=>new Promise((B,w)=>{var I=S=>{try{L(y.next(S))}catch(E){w(E)}},R=S=>{try{L(y.throw(S))}catch(E){w(E)}},L=S=>S.done?B(S.value):Promise.resolve(S.value).then(I,R);L((y=y.apply(g,b)).next())});const ee=g=>J(void 0,null,function*(){try{const{data:b}=yield P.be.get((0,P.Gc)("providers"));return b}catch(b){throw g({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),Te=g=>P.be.put((0,P.Gc)("providers"),g);var Ee=v(96486);const Se=g=>(0,Ee.sortBy)(Object.keys(g).reduce((b,y)=>{const{icon:B,enabled:w,subdomain:I}=g[y],R=B==="envelope"?["fas","envelope"]:["fab",B];return I!==void 0?b.push({name:y,icon:R,enabled:w,subdomain:I}):b.push({name:y,icon:R,enabled:w}),b},[]),"name");var le=v(51725),de=v(19408),we=v(9008),ce=v(68115),fe=v(34626),G=v(75146),Me=v(45697),T=v.n(Me),je=v(80831),Re=v(47857),Ce=v(55967),Be=Object.defineProperty,pe=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,me=(g,b,y)=>b in g?Be(g,b,{enumerable:!0,configurable:!0,writable:!0,value:y}):g[b]=y,te=(g,b)=>{for(var y in b||(b={}))Le.call(b,y)&&me(g,y,b[y]);if(pe)for(var y of pe(b))ze.call(b,y)&&me(g,y,b[y]);return g};const re=({description:g,disabled:b,intlLabel:y,error:B,name:w,onChange:I,placeholder:R,providerToEditName:L,type:S,value:E})=>{const{formatMessage:W}=(0,M.useIntl)(),X=w==="noName"?`${strapi.backendURL}/api/connect/${L}/callback`:E,Q=W({id:y.id,defaultMessage:y.defaultMessage},te({provider:L},y.values)),H=g?W({id:g.id,defaultMessage:g.defaultMessage},te({provider:L},g.values)):"";if(S==="bool")return m.createElement(Re.ToggleInput,{"aria-label":w,checked:E,disabled:b,hint:H,label:Q,name:w,offLabel:W({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:W({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:$=>{I({target:{name:w,value:$.target.checked}})}});const ae=R?W({id:R.id,defaultMessage:R.defaultMessage},te({},R.values)):"",ie=B?W({id:B,defaultMessage:B}):"";return m.createElement(Ce.TextInput,{"aria-label":w,disabled:b,error:ie,label:Q,name:w,onChange:I,placeholder:ae,type:S,value:X})};re.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},re.propTypes={description:T().shape({id:T().string.isRequired,defaultMessage:T().string.isRequired,values:T().object}),disabled:T().bool,error:T().string,intlLabel:T().shape({id:T().string.isRequired,defaultMessage:T().string.isRequired,values:T().object}).isRequired,name:T().string.isRequired,onChange:T().func.isRequired,placeholder:T().shape({id:T().string.isRequired,defaultMessage:T().string.isRequired,values:T().object}),providerToEditName:T().string.isRequired,type:T().string.isRequired,value:T().oneOfType([T().bool,T().string])};const Ie=re;var Ae=Object.defineProperty,Fe=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ve=(g,b,y)=>b in g?Ae(g,b,{enumerable:!0,configurable:!0,writable:!0,value:y}):g[b]=y,He=(g,b)=>{for(var y in b||(b={}))Ue.call(b,y)&&ve(g,y,b[y]);if(he)for(var y of he(b))We.call(b,y)&&ve(g,y,b[y]);return g},De=(g,b)=>Fe(g,ke(b));const ne=({headerBreadcrumbs:g,initialData:b,isSubmiting:y,layout:B,isOpen:w,onSubmit:I,onToggle:R,providerToEditName:L})=>{const{formatMessage:S}=(0,M.useIntl)();return w?m.createElement(G.ModalLayout,{onClose:R,labelledBy:"title"},m.createElement(G.ModalHeader,null,m.createElement(ce.Breadcrumbs,{label:g.join(", ")},g.map(E=>m.createElement(ce.Crumb,{key:E},E)))),m.createElement(je.Formik,{onSubmit:E=>I(E),initialValues:b,validationSchema:B.schema,validateOnChange:!1},({errors:E,handleChange:W,values:X})=>m.createElement(d.Form,null,m.createElement(G.ModalBody,null,m.createElement(we.Stack,{spacing:1},m.createElement(fe.Grid,{gap:5},B.form.map(Q=>Q.map(H=>m.createElement(fe.GridItem,{key:H.name,col:H.size,xs:12},m.createElement(Ie,De(He({},H),{error:E[H.name],onChange:W,value:X[H.name],providerToEditName:L})))))))),m.createElement(G.ModalFooter,{startActions:m.createElement(de.Button,{variant:"tertiary",onClick:R,type:"button"},S({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:m.createElement(m.Fragment,null,m.createElement(de.Button,{type:"submit",loading:y},S({id:"global.save",defaultMessage:"Save"})))})))):null};ne.defaultProps={initialData:null,providerToEditName:null},ne.propTypes={headerBreadcrumbs:T().arrayOf(T().string).isRequired,initialData:T().object,layout:T().shape({form:T().arrayOf(T().array),schema:T().object}).isRequired,isOpen:T().bool.isRequired,isSubmiting:T().bool.isRequired,onSubmit:T().func.isRequired,onToggle:T().func.isRequired,providerToEditName:T().string};const Ze=ne;var Ne=Object.defineProperty,qe=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,be=(g,b,y)=>b in g?Ne(g,b,{enumerable:!0,configurable:!0,writable:!0,value:y}):g[b]=y,oe=(g,b)=>{for(var y in b||(b={}))Ve.call(b,y)&&be(g,y,b[y]);if(ge)for(var y of ge(b))Xe.call(b,y)&&be(g,y,b[y]);return g},Qe=(g,b)=>qe(g,_e(b)),ye=(g,b,y)=>new Promise((B,w)=>{var I=S=>{try{L(y.next(S))}catch(E){w(E)}},R=S=>{try{L(y.throw(S))}catch(E){w(E)}},L=S=>S.done?B(S.value):Promise.resolve(S.value).then(I,R);L((y=y.apply(g,b)).next())});const xe=()=>{const{formatMessage:g}=(0,M.useIntl)();(0,d.useFocusWhenNavigate)();const{notifyStatus:b}=(0,a.useNotifyAT)(),y=(0,n.useQueryClient)(),{trackUsage:B}=(0,d.useTracking)(),w=(0,m.useRef)(B),[I,R]=(0,m.useState)(!1),[L,S]=(0,m.useState)(!1),[E,W]=(0,m.useState)(null),X=(0,d.useNotification)(),{lockApp:Q,unlockApp:H}=(0,d.useOverlayBlocker)(),ae=(0,m.useMemo)(()=>({update:le.Z.updateProviders}),[]),{isLoading:ie,allowedActions:{canUpdate:$}}=(0,d.useRBAC)(ae),{isLoading:Ge,data:K,isFetching:Ke}=(0,n.useQuery)("get-providers",()=>ee(X),{onSuccess:()=>{b(g({id:(0,P.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Ye=Ge||Ke,Je=(0,n.useMutation)(Te,{onSuccess:()=>ye(void 0,null,function*(){yield y.invalidateQueries("get-providers"),X({type:"info",message:{id:(0,P.OB)("notification.success.submit")}}),w.current("didEditAuthenticationProvider"),S(!1),se(),H()}),onError:()=>{X({type:"warning",message:{id:"notification.error"}}),H(),S(!1)},refetchActive:!1}),Y=(0,m.useMemo)(()=>Se(K),[K]),et=Y.length,Oe=(0,m.useMemo)(()=>{if(!E)return!1;const C=Y.find(ue=>ue.name===E);return s()(C,"subdomain")},[Y,E]),tt=g({id:(0,P.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),rt=(0,m.useMemo)(()=>E==="email"?V.email:Oe?V.providersWithSubdomain:V.providers,[E,Oe]),se=()=>{R(C=>!C)},Pe=C=>{$&&(W(C.name),se())},nt=C=>ye(void 0,null,function*(){S(!0),Q(),w.current("willEditAuthenticationProvider");const ue=Qe(oe({},K),{[E]:C});Je.mutate({providers:ue})});return m.createElement(c.Layout,null,m.createElement(d.SettingsPageTitle,{name:tt}),m.createElement(i.Main,null,m.createElement(c.HeaderLayout,{title:g({id:(0,P.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ye||ie?m.createElement(d.LoadingIndicatorPage,null):m.createElement(c.ContentLayout,null,m.createElement(p.Table,{colCount:4,rowCount:et+1},m.createElement(p.Thead,null,m.createElement(p.Tr,null,m.createElement(p.Th,null,m.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},m.createElement(x.VisuallyHidden,null,g({id:(0,P.OB)("Providers.image"),defaultMessage:"Image"})))),m.createElement(p.Th,null,m.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},g({id:"global.name",defaultMessage:"Name"}))),m.createElement(p.Th,null,m.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},g({id:(0,P.OB)("Providers.status"),defaultMessage:"Status"}))),m.createElement(p.Th,null,m.createElement(h.Typography,{variant:"sigma"},m.createElement(x.VisuallyHidden,null,g({id:"global.settings",defaultMessage:"Settings"})))))),m.createElement(p.Tbody,null,Y.map(C=>m.createElement(p.Tr,oe({key:C.name},(0,d.onRowClick)({fn:()=>Pe(C),condition:$})),m.createElement(p.Td,{width:""},m.createElement(u.G,{icon:C.icon})),m.createElement(p.Td,{width:"45%"},m.createElement(h.Typography,{fontWeight:"semiBold",textColor:"neutral800"},C.name)),m.createElement(p.Td,{width:"65%"},m.createElement(h.Typography,{textColor:C.enabled?"success600":"danger600","data-testid":`enable-${C.name}`},C.enabled?g({id:"global.enabled",defaultMessage:"Enabled"}):g({id:"global.disabled",defaultMessage:"Disabled"}))),m.createElement(p.Td,oe({},d.stopPropagation),$&&m.createElement(O.IconButton,{onClick:()=>Pe(C),noBorder:!0,icon:m.createElement(e(),null),label:"Edit"})))))))),m.createElement(Ze,{initialData:K[E],isOpen:I,isSubmiting:L,layout:rt,headerBreadcrumbs:[g({id:(0,P.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),o()(E)],onToggle:se,onSubmit:nt,providerToEditName:E}))},$e=()=>m.createElement(d.CheckPagePermissions,{permissions:le.Z.readProviders},m.createElement(xe,null))},65772:(F,k,v)=>{"use strict";v.d(k,{Z:()=>o});var m=v(9669),M=v.n(m),d=v(68547),l=v.n(d),s=(u,c,i)=>new Promise((a,p)=>{var h=r=>{try{O(i.next(r))}catch(e){p(e)}},x=r=>{try{O(i.throw(r))}catch(e){p(e)}},O=r=>r.done?a(r.value):Promise.resolve(r.value).then(h,x);O((i=i.apply(u,c)).next())});const t=M().create({baseURL:""});t.interceptors.request.use(u=>s(void 0,null,function*(){return u.headers={Authorization:`Bearer ${d.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},u}),u=>{Promise.reject(u)}),t.interceptors.response.use(u=>u,u=>{var c;throw((c=u.response)==null?void 0:c.status)===401&&(d.auth.clearAppStorage(),window.location.reload()),u});const o=t},42722:(F,k,v)=>{"use strict";v.d(k,{be:()=>m.Z,YX:()=>l,Gc:()=>o,OB:()=>u.Z});var m=v(65772),M=v(96486);const l=c=>Object.keys(c).reduce((i,a)=>{const p=c[a].controllers,h=Object.keys(p).reduce((x,O)=>((0,M.isEmpty)(p[O])||(x[O]=p[O]),x),{});return(0,M.isEmpty)(h)||(i[a]={controllers:h}),i},{});var s=v(83086);const o=c=>`/${s.Z}/${c}`;var u=v(97961)}}]);

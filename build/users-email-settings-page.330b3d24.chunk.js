(self.webpackChunkfarm_guide=self.webpackChunkfarm_guide||[]).push([[8418],{68115:(B,A,m)=>{"use strict";B.exports=m(7446)},7446:function(B,A,m){(function(p,E){B.exports=E(m(67294),m(78384),m(66526))})(this,function(p,E,d){return function(i){var r={};function t(o){if(r[o])return r[o].exports;var u=r[o]={i:o,l:!1,exports:{}};return i[o].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=i,t.c=r,t.d=function(o,u,c){t.o(o,u)||Object.defineProperty(o,u,{enumerable:!0,get:c})},t.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,u){if(1&u&&(o=t(o)),8&u||4&u&&typeof o=="object"&&o&&o.__esModule)return o;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),2&u&&typeof o!="string")for(var l in o)t.d(c,l,function(s){return o[s]}.bind(null,l));return c},t.n=function(o){var u=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(u,"a",u),u},t.o=function(o,u){return Object.prototype.hasOwnProperty.call(o,u)},t.p="",t(t.s=112)}({0:function(i,r,t){i.exports=t(19)()},1:function(i,r){i.exports=p},10:function(i,r,t){var o=t(25),u=t(26),c=t(22),l=t(27);i.exports=function(s,f){return o(s)||u(s,f)||c(s,f)||l()},i.exports.default=i.exports,i.exports.__esModule=!0},112:function(i,r,t){"use strict";t.r(r),t.d(r,"Crumb",function(){return w}),t.d(r,"Breadcrumbs",function(){return _});var o,u=t(4),c=t.n(u),l=t(3),s=t.n(l),f=t(1),h=t.n(f),v=t(0),y=t.n(v),n=t(2),e=t.n(n),a=t(50),g=t.n(a),P=t(8),j=t(6),W=t(9),V=t(18),Q=["children","label"],k=e()(W.Flex)(o||(o=s()([`
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
`])),function(z){return z.theme.colors.neutral300},j.Box),w=function(z){var D=z.children;return h.a.createElement(k,{inline:!0,as:"li"},h.a.createElement(P.Typography,{fontWeight:"bold",color:"neutral800"},D),h.a.createElement(j.Box,{paddingLeft:3,paddingRight:3},h.a.createElement(g.a,null)))};w.displayName="Crumb",w.propTypes={children:y.a.string.isRequired};var H=y.a.shape({type:y.a.oneOf([w])}),_=function(z){var D=z.children,N=z.label,$=c()(z,Q);return h.a.createElement(W.Flex,$,h.a.createElement(V.VisuallyHidden,null,N),h.a.createElement("ol",{"aria-hidden":!0},D))};_.displayName="Breadcrumbs",_.propTypes={children:y.a.oneOfType([y.a.arrayOf(H),H]).isRequired,label:y.a.string.isRequired}},13:function(i,r){function t(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(i.exports=t=function(u){return typeof u},i.exports.default=i.exports,i.exports.__esModule=!0):(i.exports=t=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i.exports.default=i.exports,i.exports.__esModule=!0),t(o)}i.exports=t,i.exports.default=i.exports,i.exports.__esModule=!0},18:function(i,r,t){"use strict";t.r(r),t.d(r,"VisuallyHidden",function(){return s});var o,u=t(3),c=t.n(u),l=t(2),s=t.n(l).a.div(o||(o=c()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(i,r,t){"use strict";var o=t(20);function u(){}function c(){}c.resetWarningCache=u,i.exports=function(){function l(h,v,y,n,e,a){if(a!==o){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}function s(){return l}l.isRequired=l;var f={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:s,element:l,elementType:l,instanceOf:s,node:l,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:c,resetWarningCache:u};return f.PropTypes=f,f}},2:function(i,r){i.exports=E},20:function(i,r,t){"use strict";i.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(i,r){i.exports=function(t,o){(o==null||o>t.length)&&(o=t.length);for(var u=0,c=new Array(o);u<o;u++)c[u]=t[u];return c},i.exports.default=i.exports,i.exports.__esModule=!0},22:function(i,r,t){var o=t(21);i.exports=function(u,c){if(u){if(typeof u=="string")return o(u,c);var l=Object.prototype.toString.call(u).slice(8,-1);return l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set"?Array.from(u):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?o(u,c):void 0}},i.exports.default=i.exports,i.exports.__esModule=!0},24:function(i,r){i.exports=function(t,o){if(t==null)return{};var u,c,l={},s=Object.keys(t);for(c=0;c<s.length;c++)u=s[c],o.indexOf(u)>=0||(l[u]=t[u]);return l},i.exports.default=i.exports,i.exports.__esModule=!0},25:function(i,r){i.exports=function(t){if(Array.isArray(t))return t},i.exports.default=i.exports,i.exports.__esModule=!0},26:function(i,r){i.exports=function(t,o){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var c,l,s=[],f=!0,h=!1;try{for(u=u.call(t);!(f=(c=u.next()).done)&&(s.push(c.value),!o||s.length!==o);f=!0);}catch(v){h=!0,l=v}finally{try{f||u.return==null||u.return()}finally{if(h)throw l}}return s}},i.exports.default=i.exports,i.exports.__esModule=!0},27:function(i,r){i.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},i.exports.default=i.exports,i.exports.__esModule=!0},3:function(i,r){i.exports=function(t,o){return o||(o=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(o)}}))},i.exports.default=i.exports,i.exports.__esModule=!0},4:function(i,r,t){var o=t(24);i.exports=function(u,c){if(u==null)return{};var l,s,f=o(u,c);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(u);for(s=0;s<h.length;s++)l=h[s],c.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(u,l)&&(f[l]=u[l])}return f},i.exports.default=i.exports,i.exports.__esModule=!0},50:function(i,r){i.exports=d},6:function(i,r,t){"use strict";t.r(r),t.d(r,"Box",function(){return n});var o,u=t(3),c=t.n(u),l=t(0),s=t.n(l),f=t(2),h=t.n(f),v=t(7),y={color:!0},n=h.a.div.withConfig({shouldForwardProp:function(e,a){return!y[e]&&a(e)}})(o||(o=c()([`
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
`])),function(e){var a=e.fontSize;return e.theme.fontSizes[a]||a},function(e){var a=e.theme,g=e.background;return a.colors[g]},function(e){var a=e.theme,g=e.color;return a.colors[g]},function(e){var a=e.theme,g=e.padding;return Object(v.a)("padding",g,a)},function(e){var a=e.theme,g=e.paddingTop;return Object(v.a)("padding-top",g,a)},function(e){var a=e.theme,g=e.paddingRight;return Object(v.a)("padding-right",g,a)},function(e){var a=e.theme,g=e.paddingBottom;return Object(v.a)("padding-bottom",g,a)},function(e){var a=e.theme,g=e.paddingLeft;return Object(v.a)("padding-left",g,a)},function(e){var a=e.theme,g=e.marginLeft;return Object(v.a)("margin-left",g,a)},function(e){var a=e.theme,g=e.marginRight;return Object(v.a)("margin-right",g,a)},function(e){var a=e.theme,g=e.marginTop;return Object(v.a)("margin-top",g,a)},function(e){var a=e.theme,g=e.marginBottom;return Object(v.a)("margin-bottom",g,a)},function(e){var a=e.theme;return e.hiddenS?"".concat(a.mediaQueries.tablet," { display: none; }"):void 0},function(e){var a=e.theme;return e.hiddenXS?"".concat(a.mediaQueries.mobile," { display: none; }"):void 0},function(e){var a=e.theme,g=e.hasRadius,P=e.borderRadius;return g?a.borderRadius:P},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var a=e.borderColor;return e.theme.colors[a]},function(e){var a=e.theme,g=e.borderColor,P=e.borderStyle,j=e.borderWidth;if(g&&!P&&!j)return"1px solid ".concat(a.colors[g])},function(e){var a=e.theme,g=e.shadow;return a.shadows[g]},function(e){return e.pointerEvents},function(e){var a=e._hover,g=e.theme;return a?a(g):void 0},function(e){return e.display},function(e){return e.position},function(e){var a=e.left;return e.theme.spaces[a]||a},function(e){var a=e.right;return e.theme.spaces[a]||a},function(e){var a=e.top;return e.theme.spaces[a]||a},function(e){var a=e.bottom;return e.theme.spaces[a]||a},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var a=e.width;return e.theme.spaces[a]||a},function(e){var a=e.maxWidth;return e.theme.spaces[a]||a},function(e){var a=e.minWidth;return e.theme.spaces[a]||a},function(e){var a=e.height;return e.theme.spaces[a]||a},function(e){var a=e.maxHeight;return e.theme.spaces[a]||a},function(e){var a=e.minHeight;return e.theme.spaces[a]||a},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});n.displayName="Box",n.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},n.propTypes={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])}},7:function(i,r,t){"use strict";var o=t(10),u=t.n(o),c=t(13),l=t.n(c);r.a=function(s,f,h){var v=f;if(Array.isArray(f)||l()(f)!=="object"||(v=[f==null?void 0:f.desktop,f==null?void 0:f.tablet,f==null?void 0:f.mobile]),v!==void 0){if(Array.isArray(v)){var y=v,n=u()(y,3),e=n[0],a=n[1],g=n[2],P="".concat(s,": ").concat(h.spaces[e],";");return a!==void 0&&(P+="".concat(h.mediaQueries.tablet,`{
          `).concat(s,": ").concat(h.spaces[a],`;
        }`)),g!==void 0&&(P+="".concat(h.mediaQueries.mobile,`{
          `).concat(s,": ").concat(h.spaces[g],`;
        }`)),P}var j=h.spaces[v]||v;return"".concat(s,": ").concat(j,";")}}},8:function(i,r,t){"use strict";t.r(r),t.d(r,"Typography",function(){return y});var o,u=t(3),c=t.n(u),l=t(0),s=t.n(l),f=t(2),h=["alpha","beta","delta","epsilon","omega","pi","sigma"],v={fontSize:!0,fontWeight:!0},y=t.n(f).a.span.withConfig({shouldForwardProp:function(n,e){return!v[n]&&e(n)}})(o||(o=c()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(n){var e=n.theme,a=n.fontWeight;return e.fontWeights[a]},function(n){var e=n.theme,a=n.fontSize;return e.fontSizes[a]},function(n){var e=n.theme,a=n.lineHeight;return e.lineHeights[a]},function(n){var e=n.theme,a=n.textColor;return e.colors[a||"neutral800"]},function(n){return n.textTransform},function(n){return n.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(n){var e=n.variant,a=n.theme;switch(e){case"alpha":return`
        font-weight: `.concat(a.fontWeights.bold,`;
        font-size: `).concat(a.fontSizes[5],`;
        line-height: `).concat(a.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(a.fontWeights.bold,`;
        font-size: `).concat(a.fontSizes[4],`;
        line-height: `).concat(a.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(a.fontWeights.semiBold,`;
        font-size: `).concat(a.fontSizes[3],`;
        line-height: `).concat(a.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(a.fontSizes[3],`;
        line-height: `).concat(a.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(a.fontSizes[2],`;
        line-height: `).concat(a.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(a.fontSizes[1],`;
        line-height: `).concat(a.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(a.fontWeights.bold,`;
        font-size: `).concat(a.fontSizes[0],`;
        line-height: `).concat(a.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(a.fontSizes[2],`;
      `)}});y.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},y.propTypes={fontSize:s.a.oneOfType([s.a.number,s.a.string]),fontWeight:s.a.string,lineHeight:s.a.oneOfType([s.a.number,s.a.string]),textColor:s.a.string,textTransform:s.a.string,variant:s.a.oneOf(h)}},9:function(i,r,t){"use strict";t.r(r),t.d(r,"Flex",function(){return e});var o,u=t(3),c=t.n(u),l=t(0),s=t.n(l),f=t(2),h=t.n(f),v=t(6),y=t(7),n={direction:!0},e=h()(v.Box).withConfig({shouldForwardProp:function(a,g){return!n[a]&&g(a)}})(o||(o=c()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(a){return a.alignItems},function(a){return a.inline?"inline-flex":"flex"},function(a){return a.direction},function(a){return a.wrap},function(a){var g=a.gap,P=a.theme;return Object(y.a)("gap",g,P)},function(a){return a.justifyContent});e.defaultProps={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},e.propTypes={alignItems:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.number]),direction:s.a.string,gap:s.a.oneOfType([s.a.shape({desktop:s.a.number,mobile:s.a.number,tablet:s.a.number}),s.a.number,s.a.arrayOf(s.a.number),s.a.string]),inline:s.a.bool,justifyContent:s.a.string,reverse:s.a.bool,wrap:s.a.string}}})})},62031:(B,A,m)=>{"use strict";B.exports=m(59525)},59525:function(B,A,m){(function(p,E){B.exports=E(m(67294),m(78384))})(this,function(p,E){return function(d){var i={};function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return d[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=d,r.c=i,r.d=function(t,o,u){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:u})},r.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o||4&o&&typeof t=="object"&&t&&t.__esModule)return t;var u=Object.create(null);if(r.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&o&&typeof t!="string")for(var c in t)r.d(u,c,function(l){return t[l]}.bind(null,c));return u},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r(r.s=110)}({0:function(d,i,r){d.exports=r(19)()},1:function(d,i){d.exports=p},10:function(d,i,r){var t=r(25),o=r(26),u=r(22),c=r(27);d.exports=function(l,s){return t(l)||o(l,s)||u(l,s)||c()},d.exports.default=d.exports,d.exports.__esModule=!0},110:function(d,i,r){"use strict";r.r(i),r.d(i,"Main",function(){return j}),r.d(i,"SkipToContent",function(){return k});var t,o=r(5),u=r.n(o),c=r(4),l=r.n(c),s=r(3),f=r.n(s),h=r(1),v=r.n(h),y=r(0),n=r.n(y),e=r(2),a=r.n(e),g=["labelledBy"],P=a.a.main(t||(t=f()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),j=function(w){var H=w.labelledBy,_=l()(w,g),z=H||"main-content-title";return v.a.createElement(P,u()({"aria-labelledby":z,id:"main-content",tabIndex:-1},_))};j.defaultProps={labelledBy:void 0},j.propTypes={labelledBy:n.a.string};var W,V=r(6),Q=a()(V.Box)(W||(W=f()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(w){return w.theme.spaces[3]},function(w){return w.theme.spaces[3]}),k=function(w){var H=w.children;return v.a.createElement(Q,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},H)};k.propTypes={children:n.a.node.isRequired}},13:function(d,i){function r(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(d.exports=r=function(o){return typeof o},d.exports.default=d.exports,d.exports.__esModule=!0):(d.exports=r=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d.exports.default=d.exports,d.exports.__esModule=!0),r(t)}d.exports=r,d.exports.default=d.exports,d.exports.__esModule=!0},19:function(d,i,r){"use strict";var t=r(20);function o(){}function u(){}u.resetWarningCache=o,d.exports=function(){function c(f,h,v,y,n,e){if(e!==t){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function l(){return c}c.isRequired=c;var s={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:l,element:c,elementType:c,instanceOf:l,node:c,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:u,resetWarningCache:o};return s.PropTypes=s,s}},2:function(d,i){d.exports=E},20:function(d,i,r){"use strict";d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(d,i){d.exports=function(r,t){(t==null||t>r.length)&&(t=r.length);for(var o=0,u=new Array(t);o<t;o++)u[o]=r[o];return u},d.exports.default=d.exports,d.exports.__esModule=!0},22:function(d,i,r){var t=r(21);d.exports=function(o,u){if(o){if(typeof o=="string")return t(o,u);var c=Object.prototype.toString.call(o).slice(8,-1);return c==="Object"&&o.constructor&&(c=o.constructor.name),c==="Map"||c==="Set"?Array.from(o):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?t(o,u):void 0}},d.exports.default=d.exports,d.exports.__esModule=!0},24:function(d,i){d.exports=function(r,t){if(r==null)return{};var o,u,c={},l=Object.keys(r);for(u=0;u<l.length;u++)o=l[u],t.indexOf(o)>=0||(c[o]=r[o]);return c},d.exports.default=d.exports,d.exports.__esModule=!0},25:function(d,i){d.exports=function(r){if(Array.isArray(r))return r},d.exports.default=d.exports,d.exports.__esModule=!0},26:function(d,i){d.exports=function(r,t){var o=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var u,c,l=[],s=!0,f=!1;try{for(o=o.call(r);!(s=(u=o.next()).done)&&(l.push(u.value),!t||l.length!==t);s=!0);}catch(h){f=!0,c=h}finally{try{s||o.return==null||o.return()}finally{if(f)throw c}}return l}},d.exports.default=d.exports,d.exports.__esModule=!0},27:function(d,i){d.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},d.exports.default=d.exports,d.exports.__esModule=!0},3:function(d,i){d.exports=function(r,t){return t||(t=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(t)}}))},d.exports.default=d.exports,d.exports.__esModule=!0},4:function(d,i,r){var t=r(24);d.exports=function(o,u){if(o==null)return{};var c,l,s=t(o,u);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);for(l=0;l<f.length;l++)c=f[l],u.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(o,c)&&(s[c]=o[c])}return s},d.exports.default=d.exports,d.exports.__esModule=!0},5:function(d,i){function r(){return d.exports=r=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var u=arguments[o];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c])}return t},d.exports.default=d.exports,d.exports.__esModule=!0,r.apply(this,arguments)}d.exports=r,d.exports.default=d.exports,d.exports.__esModule=!0},6:function(d,i,r){"use strict";r.r(i),r.d(i,"Box",function(){return y});var t,o=r(3),u=r.n(o),c=r(0),l=r.n(c),s=r(2),f=r.n(s),h=r(7),v={color:!0},y=f.a.div.withConfig({shouldForwardProp:function(n,e){return!v[n]&&e(n)}})(t||(t=u()([`
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
`])),function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e},function(n){var e=n.theme,a=n.background;return e.colors[a]},function(n){var e=n.theme,a=n.color;return e.colors[a]},function(n){var e=n.theme,a=n.padding;return Object(h.a)("padding",a,e)},function(n){var e=n.theme,a=n.paddingTop;return Object(h.a)("padding-top",a,e)},function(n){var e=n.theme,a=n.paddingRight;return Object(h.a)("padding-right",a,e)},function(n){var e=n.theme,a=n.paddingBottom;return Object(h.a)("padding-bottom",a,e)},function(n){var e=n.theme,a=n.paddingLeft;return Object(h.a)("padding-left",a,e)},function(n){var e=n.theme,a=n.marginLeft;return Object(h.a)("margin-left",a,e)},function(n){var e=n.theme,a=n.marginRight;return Object(h.a)("margin-right",a,e)},function(n){var e=n.theme,a=n.marginTop;return Object(h.a)("margin-top",a,e)},function(n){var e=n.theme,a=n.marginBottom;return Object(h.a)("margin-bottom",a,e)},function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(n){var e=n.theme,a=n.hasRadius,g=n.borderRadius;return a?e.borderRadius:g},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var e=n.borderColor;return n.theme.colors[e]},function(n){var e=n.theme,a=n.borderColor,g=n.borderStyle,P=n.borderWidth;if(a&&!g&&!P)return"1px solid ".concat(e.colors[a])},function(n){var e=n.theme,a=n.shadow;return e.shadows[a]},function(n){return n.pointerEvents},function(n){var e=n._hover,a=n.theme;return e?e(a):void 0},function(n){return n.display},function(n){return n.position},function(n){var e=n.left;return n.theme.spaces[e]||e},function(n){var e=n.right;return n.theme.spaces[e]||e},function(n){var e=n.top;return n.theme.spaces[e]||e},function(n){var e=n.bottom;return n.theme.spaces[e]||e},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var e=n.width;return n.theme.spaces[e]||e},function(n){var e=n.maxWidth;return n.theme.spaces[e]||e},function(n){var e=n.minWidth;return n.theme.spaces[e]||e},function(n){var e=n.height;return n.theme.spaces[e]||e},function(n){var e=n.maxHeight;return n.theme.spaces[e]||e},function(n){var e=n.minHeight;return n.theme.spaces[e]||e},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});y.displayName="Box",y.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},y.propTypes={_hover:l.a.func,background:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.string]),borderColor:l.a.string,children:l.a.oneOfType([l.a.node,l.a.string]),color:l.a.string,flex:l.a.oneOfType([l.a.string,l.a.string]),grow:l.a.oneOfType([l.a.string,l.a.string]),hasRadius:l.a.bool,hiddenS:l.a.bool,hiddenXS:l.a.bool,padding:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingBottom:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingLeft:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingRight:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingTop:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),shadow:l.a.string,shrink:l.a.oneOfType([l.a.string,l.a.string])}},7:function(d,i,r){"use strict";var t=r(10),o=r.n(t),u=r(13),c=r.n(u);i.a=function(l,s,f){var h=s;if(Array.isArray(s)||c()(s)!=="object"||(h=[s==null?void 0:s.desktop,s==null?void 0:s.tablet,s==null?void 0:s.mobile]),h!==void 0){if(Array.isArray(h)){var v=h,y=o()(v,3),n=y[0],e=y[1],a=y[2],g="".concat(l,": ").concat(f.spaces[n],";");return e!==void 0&&(g+="".concat(f.mediaQueries.tablet,`{
          `).concat(l,": ").concat(f.spaces[e],`;
        }`)),a!==void 0&&(g+="".concat(f.mediaQueries.mobile,`{
          `).concat(l,": ").concat(f.spaces[a],`;
        }`)),g}var P=f.spaces[h]||h;return"".concat(l,": ").concat(P,";")}}}})})},27590:function(B,A,m){(function(p,E){B.exports=E(m(67294))})(this,function(p){return function(E){var d={};function i(r){if(d[r])return d[r].exports;var t=d[r]={i:r,l:!1,exports:{}};return E[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=E,i.c=d,i.d=function(r,t,o){i.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:o})},i.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,t){if(1&t&&(r=i(r)),8&t||4&t&&typeof r=="object"&&r&&r.__esModule)return r;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&t&&typeof r!="string")for(var u in r)i.d(o,u,function(c){return r[c]}.bind(null,u));return o},i.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(t,"a",t),t},i.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},i.p="",i(i.s=154)}({0:function(E,d){E.exports=p},154:function(E,d,i){"use strict";i.r(d);var r=i(0);function t(){return(t=Object.assign||function(o){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(o[l]=c[l])}return o}).apply(this,arguments)}d.default=function(o){return r.createElement("svg",t({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})})},84210:(B,A,m)=>{"use strict";m.r(A),m.d(A,{default:()=>Te});var p=m(67294),E=m(23724),d=m(97132),i=m(68547),r=m(84686),t=m(62031),o=m(78862),u=m(51725),c=m(42722),l=(x,O,b)=>new Promise((M,T)=>{var R=S=>{try{L(b.next(S))}catch(I){T(I)}},C=S=>{try{L(b.throw(S))}catch(I){T(I)}},L=S=>S.done?M(S.value):Promise.resolve(S.value).then(R,C);L((b=b.apply(x,O)).next())});const s=()=>l(void 0,null,function*(){const{data:x}=yield c.be.get((0,c.Gc)("email-templates"));return x}),f=x=>c.be.put((0,c.Gc)("email-templates"),x);var h=m(45697),v=m.n(h),y=m(41798),n=m(26851),e=m(49425),a=m(30741),g=m(15804),P=m(19352),j=m.n(P),W=m(27590),V=m.n(W),Q=m(84734),k=m.n(Q),w=Object.defineProperty,H=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,D=(x,O,b)=>O in x?w(x,O,{enumerable:!0,configurable:!0,writable:!0,value:b}):x[O]=b,N=(x,O)=>{for(var b in O||(O={}))_.call(O,b)&&D(x,b,O[b]);if(H)for(var b of H(O))z.call(O,b)&&D(x,b,O[b]);return x};const $=({canUpdate:x,onEditClick:O})=>{const{formatMessage:b}=(0,d.useIntl)();return p.createElement(y.Table,{colCount:3,rowCount:3},p.createElement(y.Thead,null,p.createElement(y.Tr,null,p.createElement(y.Th,{width:"1%"},p.createElement(n.VisuallyHidden,null,b({id:(0,c.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),p.createElement(y.Th,null,p.createElement(e.Typography,{variant:"sigma",textColor:"neutral600"},b({id:(0,c.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),p.createElement(y.Th,{width:"1%"},p.createElement(n.VisuallyHidden,null,b({id:(0,c.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),p.createElement(y.Tbody,null,p.createElement(y.Tr,N({},(0,i.onRowClick)({fn:()=>O("reset_password")})),p.createElement(y.Td,null,p.createElement(g.Icon,null,p.createElement(V(),{"aria-label":b({id:"global.reset-password",defaultMessage:"Reset password"})}))),p.createElement(y.Td,null,p.createElement(e.Typography,null,b({id:"global.reset-password",defaultMessage:"Reset password"}))),p.createElement(y.Td,N({},i.stopPropagation),p.createElement(a.IconButton,{onClick:()=>O("reset_password"),label:b({id:(0,c.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:x&&p.createElement(j(),null)}))),p.createElement(y.Tr,N({},(0,i.onRowClick)({fn:()=>O("email_confirmation")})),p.createElement(y.Td,null,p.createElement(g.Icon,null,p.createElement(k(),{"aria-label":b({id:(0,c.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),p.createElement(y.Td,null,p.createElement(e.Typography,null,b({id:(0,c.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),p.createElement(y.Td,N({},i.stopPropagation),p.createElement(a.IconButton,{onClick:()=>O("email_confirmation"),label:b({id:(0,c.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:x&&p.createElement(j(),null)})))))};$.propTypes={canUpdate:v().bool.isRequired,onEditClick:v().func.isRequired};const le=$;var ue=m(80831),X=m(75146),G=m(34626),ne=m(19408),ee=m(68115),ce=m(59626),F=m(53209);const de=F.Ry().shape({options:F.Ry().shape({from:F.Ry().shape({name:F.Z_().required(i.translatedErrors.required),email:F.Z_().email(i.translatedErrors.email).required(i.translatedErrors.required)}).required(),response_email:F.Z_().email(i.translatedErrors.email),object:F.Z_().required(i.translatedErrors.required),message:F.Z_().required(i.translatedErrors.required)}).required(i.translatedErrors.required)}),re=({template:x,onToggle:O,onSubmit:b})=>{const{formatMessage:M}=(0,d.useIntl)();return p.createElement(X.ModalLayout,{onClose:O,labelledBy:`${M({id:(0,c.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,c.OB)(x.display),defaultMessage:x.display})}`},p.createElement(X.ModalHeader,null,p.createElement(ee.Breadcrumbs,{label:`${M({id:(0,c.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,c.OB)(x.display),defaultMessage:x.display})}`},p.createElement(ee.Crumb,null,M({id:(0,c.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),p.createElement(ee.Crumb,null,M({id:(0,c.OB)(x.display),defaultMessage:x.display})))),p.createElement(ue.Formik,{onSubmit:b,initialValues:x,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:T,values:R,handleChange:C,isSubmitting:L})=>{var S,I,Z,K,Y,J,q;return p.createElement(i.Form,null,p.createElement(X.ModalBody,null,p.createElement(G.Grid,{gap:5},p.createElement(G.GridItem,{col:6,s:12},p.createElement(i.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:C,value:R.options.from.name,error:(I=(S=T==null?void 0:T.options)==null?void 0:S.from)==null?void 0:I.name,type:"text"})),p.createElement(G.GridItem,{col:6,s:12},p.createElement(i.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:C,value:R.options.from.email,error:(K=(Z=T==null?void 0:T.options)==null?void 0:Z.from)==null?void 0:K.email,type:"text"})),p.createElement(G.GridItem,{col:6,s:12},p.createElement(i.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:C,value:R.options.response_email,error:(Y=T==null?void 0:T.options)==null?void 0:Y.response_email,type:"text"})),p.createElement(G.GridItem,{col:6,s:12},p.createElement(i.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:C,value:R.options.object,error:(J=T==null?void 0:T.options)==null?void 0:J.object,type:"text"})),p.createElement(G.GridItem,{col:12,s:12},p.createElement(ce.Textarea,{label:M({id:(0,c.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:C,value:R.options.message,error:((q=T==null?void 0:T.options)==null?void 0:q.message)&&M({id:T.options.message,defaultMessage:T.options.message})})))),p.createElement(X.ModalFooter,{startActions:p.createElement(ne.Button,{onClick:O,variant:"tertiary"},"Cancel"),endActions:p.createElement(ne.Button,{loading:L,type:"submit"},"Finish")}))}))};re.propTypes={template:v().shape({display:v().string,icon:v().string,options:v().shape({from:v().shape({name:v().string,email:v().string}),message:v().string,object:v().string,response_email:v().string})}).isRequired,onSubmit:v().func.isRequired,onToggle:v().func.isRequired};const pe=re;var fe=Object.defineProperty,me=Object.defineProperties,he=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(x,O,b)=>O in x?fe(x,O,{enumerable:!0,configurable:!0,writable:!0,value:b}):x[O]=b,ye=(x,O)=>{for(var b in O||(O={}))ge.call(O,b)&&ae(x,b,O[b]);if(oe)for(var b of oe(O))ve.call(O,b)&&ae(x,b,O[b]);return x},be=(x,O)=>me(x,he(O)),xe=(x,O,b)=>new Promise((M,T)=>{var R=S=>{try{L(b.next(S))}catch(I){T(I)}},C=S=>{try{L(b.throw(S))}catch(I){T(I)}},L=S=>S.done?M(S.value):Promise.resolve(S.value).then(R,C);L((b=b.apply(x,O)).next())});const Oe=()=>p.createElement(i.CheckPagePermissions,{permissions:u.Z.readEmailTemplates},p.createElement(Ee,null)),Ee=()=>{const{formatMessage:x}=(0,d.useIntl)(),{trackUsage:O}=(0,i.useTracking)(),{notifyStatus:b}=(0,r.useNotifyAT)(),M=(0,i.useNotification)(),{lockApp:T,unlockApp:R}=(0,i.useOverlayBlocker)(),C=(0,p.useRef)(O),L=(0,E.useQueryClient)();(0,i.useFocusWhenNavigate)();const[S,I]=(0,p.useState)(!1),[Z,K]=(0,p.useState)(null),Y=(0,p.useMemo)(()=>({update:u.Z.updateEmailTemplates}),[]),{isLoading:J,allowedActions:{canUpdate:q}}=(0,i.useRBAC)(Y),{status:Se,data:ie}=(0,E.useQuery)("email-templates",()=>s(),{onSuccess:()=>{b(x({id:(0,c.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError:()=>{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Pe=J||Se!=="success",te=()=>{I(U=>!U)},Me=U=>{K(U),te()},se=(0,E.useMutation)(U=>f({"email-templates":U}),{onSuccess:()=>xe(void 0,null,function*(){yield L.invalidateQueries("email-templates"),M({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),C.current("didEditEmailTemplates"),R(),te()}),onError:()=>{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),R()},refetchActive:!0}),{isLoading:we}=se,je=U=>{T(),C.current("willEditEmailTemplates");const Be=be(ye({},ie),{[Z]:U});se.mutate(Be)};return Pe?p.createElement(t.Main,{"aria-busy":"true"},p.createElement(i.SettingsPageTitle,{name:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(o.HeaderLayout,{title:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(o.ContentLayout,null,p.createElement(i.LoadingIndicatorPage,null))):p.createElement(t.Main,{"aria-busy":we},p.createElement(i.SettingsPageTitle,{name:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(o.HeaderLayout,{title:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(o.ContentLayout,null,p.createElement(le,{onEditClick:Me,canUpdate:q}),S&&p.createElement(pe,{template:ie[Z],onToggle:te,onSubmit:je})))},Te=Oe},65772:(B,A,m)=>{"use strict";m.d(A,{Z:()=>o});var p=m(9669),E=m.n(p),d=m(68547),i=m.n(d),r=(u,c,l)=>new Promise((s,f)=>{var h=n=>{try{y(l.next(n))}catch(e){f(e)}},v=n=>{try{y(l.throw(n))}catch(e){f(e)}},y=n=>n.done?s(n.value):Promise.resolve(n.value).then(h,v);y((l=l.apply(u,c)).next())});const t=E().create({baseURL:""});t.interceptors.request.use(u=>r(void 0,null,function*(){return u.headers={Authorization:`Bearer ${d.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},u}),u=>{Promise.reject(u)}),t.interceptors.response.use(u=>u,u=>{var c;throw((c=u.response)==null?void 0:c.status)===401&&(d.auth.clearAppStorage(),window.location.reload()),u});const o=t},42722:(B,A,m)=>{"use strict";m.d(A,{be:()=>p.Z,YX:()=>i,Gc:()=>o,OB:()=>u.Z});var p=m(65772),E=m(96486);const i=c=>Object.keys(c).reduce((l,s)=>{const f=c[s].controllers,h=Object.keys(f).reduce((v,y)=>((0,E.isEmpty)(f[y])||(v[y]=f[y]),v),{});return(0,E.isEmpty)(h)||(l[s]={controllers:h}),l},{});var r=m(83086);const o=c=>`/${r.Z}/${c}`;var u=m(97961)}}]);

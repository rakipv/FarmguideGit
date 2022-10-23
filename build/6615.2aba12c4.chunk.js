(self.webpackChunkfarm_guide=self.webpackChunkfarm_guide||[]).push([[6615],{85104:(F,Q,m)=>{"use strict";F.exports=m(74879)},74879:function(F,Q,m){(function(o,f){F.exports=f(m(67294),m(78384),m(39711),m(43257))})(this,function(o,f,O,p){return function(e){var a={};function n(u){if(a[u])return a[u].exports;var s=a[u]={i:u,l:!1,exports:{}};return e[u].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=a,n.d=function(u,s,h){n.o(u,s)||Object.defineProperty(u,s,{enumerable:!0,get:h})},n.r=function(u){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},n.t=function(u,s){if(1&s&&(u=n(u)),8&s||4&s&&typeof u=="object"&&u&&u.__esModule)return u;var h=Object.create(null);if(n.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:u}),2&s&&typeof u!="string")for(var g in u)n.d(h,g,function(d){return u[d]}.bind(null,g));return h},n.n=function(u){var s=u&&u.__esModule?function(){return u.default}:function(){return u};return n.d(s,"a",s),s},n.o=function(u,s){return Object.prototype.hasOwnProperty.call(u,s)},n.p="",n(n.s=115)}({0:function(e,a,n){e.exports=n(19)()},1:function(e,a){e.exports=o},10:function(e,a,n){var u=n(25),s=n(26),h=n(22),g=n(27);e.exports=function(d,v){return u(d)||s(d,v)||h(d,v)||g()},e.exports.default=e.exports,e.exports.__esModule=!0},115:function(e,a,n){"use strict";n.r(a),n.d(a,"Link",function(){return J});var u,s,h=n(5),g=n.n(h),d=n(4),v=n.n(d),w=n(3),E=n.n(w),Z=n(1),b=n.n(Z),t=n(0),l=n.n(t),x=n(2),N=n.n(x),X=n(83),me=n.n(X),le=n(37),Y=n(8),ae=n(6),ge=n(16),y=["href","to","children","disabled","startIcon","endIcon"],A=N.a.a(u||(u=E()([`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: `,`;
  svg path {
    fill: `,`;
  }
  svg {
    font-size: `,`rem;
  }
  &:hover,
  &:active {
    color: `,`;
  }
  `,`;
`])),function(P){return P.disabled?"none":void 0},function(P){var M=P.disabled,$=P.theme;return M?$.colors.neutral600:$.colors.primary600},.625,function(P){return P.theme.colors.primary800},ge.a),D=N()(ae.Box)(s||(s=E()([`
  display: flex;
`]))),J=function(P){var M=P.href,$=P.to,he=P.children,q=P.disabled,se=P.startIcon,ie=P.endIcon,ce=v()(P,y),ye=M?"_blank":void 0,ve=M?"noreferrer noopener":void 0;return b.a.createElement(A,g()({as:$&&!q?le.NavLink:"a",target:ye,rel:ve,to:q?void 0:$,href:q?"#":M,disabled:q},ce),se&&b.a.createElement(D,{as:"span","aria-hidden":!0,paddingRight:2},se),b.a.createElement(Y.Typography,{variant:"pi",textColor:q?"neutral600":"primary600"},he),ie&&!M&&b.a.createElement(D,{as:"span","aria-hidden":!0,paddingLeft:2},ie),M&&b.a.createElement(D,{as:"span","aria-hidden":!0,paddingLeft:2},b.a.createElement(me.a,null)))};J.displayName="Link",J.defaultProps={href:void 0,to:void 0,disabled:!1},J.propTypes={children:l.a.node.isRequired,disabled:l.a.bool,endIcon:l.a.element,href:function(P){if(!P.disabled&&!P.to&&!P.href)return new Error("href must be defined")},startIcon:l.a.element,to:function(P){if(!P.disabled&&!P.href&&!P.to)return new Error("to must be defined")}}},13:function(e,a){function n(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(e.exports=n=function(s){return typeof s},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},e.exports.default=e.exports,e.exports.__esModule=!0),n(u)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},16:function(e,a,n){"use strict";n.d(a,"b",function(){return u}),n.d(a,"c",function(){return s}),n.d(a,"a",function(){return h});var u=function(g){return function(d){var v=d.theme,w=d.size;return v.sizes[g][w]}},s=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(d){var v=d.theme,w=d.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(g,`:focus-within {
        border: 1px solid `).concat(w?v.colors.danger600:v.colors.primary600,`;
        box-shadow: `).concat(w?v.colors.danger600:v.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},h=function(g){var d=g.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(d.colors.primary600,`;
    }
  }
`)}},19:function(e,a,n){"use strict";var u=n(20);function s(){}function h(){}h.resetWarningCache=s,e.exports=function(){function g(w,E,Z,b,t,l){if(l!==u){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}function d(){return g}g.isRequired=g;var v={array:g,bool:g,func:g,number:g,object:g,string:g,symbol:g,any:g,arrayOf:d,element:g,elementType:g,instanceOf:d,node:g,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:h,resetWarningCache:s};return v.PropTypes=v,v}},2:function(e,a){e.exports=f},20:function(e,a,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(e,a){e.exports=function(n,u){(u==null||u>n.length)&&(u=n.length);for(var s=0,h=new Array(u);s<u;s++)h[s]=n[s];return h},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,a,n){var u=n(21);e.exports=function(s,h){if(s){if(typeof s=="string")return u(s,h);var g=Object.prototype.toString.call(s).slice(8,-1);return g==="Object"&&s.constructor&&(g=s.constructor.name),g==="Map"||g==="Set"?Array.from(s):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?u(s,h):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,a){e.exports=function(n,u){if(n==null)return{};var s,h,g={},d=Object.keys(n);for(h=0;h<d.length;h++)s=d[h],u.indexOf(s)>=0||(g[s]=n[s]);return g},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,a){e.exports=function(n){if(Array.isArray(n))return n},e.exports.default=e.exports,e.exports.__esModule=!0},26:function(e,a){e.exports=function(n,u){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var h,g,d=[],v=!0,w=!1;try{for(s=s.call(n);!(v=(h=s.next()).done)&&(d.push(h.value),!u||d.length!==u);v=!0);}catch(E){w=!0,g=E}finally{try{v||s.return==null||s.return()}finally{if(w)throw g}}return d}},e.exports.default=e.exports,e.exports.__esModule=!0},27:function(e,a){e.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,a){e.exports=function(n,u){return u||(u=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(u)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},37:function(e,a){e.exports=O},4:function(e,a,n){var u=n(24);e.exports=function(s,h){if(s==null)return{};var g,d,v=u(s,h);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(s);for(d=0;d<w.length;d++)g=w[d],h.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(s,g)&&(v[g]=s[g])}return v},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,a){function n(){return e.exports=n=Object.assign||function(u){for(var s=1;s<arguments.length;s++){var h=arguments[s];for(var g in h)Object.prototype.hasOwnProperty.call(h,g)&&(u[g]=h[g])}return u},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,a,n){"use strict";n.r(a),n.d(a,"Box",function(){return b});var u,s=n(3),h=n.n(s),g=n(0),d=n.n(g),v=n(2),w=n.n(v),E=n(7),Z={color:!0},b=w.a.div.withConfig({shouldForwardProp:function(t,l){return!Z[t]&&l(t)}})(u||(u=h()([`
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
`])),function(t){var l=t.fontSize;return t.theme.fontSizes[l]||l},function(t){var l=t.theme,x=t.background;return l.colors[x]},function(t){var l=t.theme,x=t.color;return l.colors[x]},function(t){var l=t.theme,x=t.padding;return Object(E.a)("padding",x,l)},function(t){var l=t.theme,x=t.paddingTop;return Object(E.a)("padding-top",x,l)},function(t){var l=t.theme,x=t.paddingRight;return Object(E.a)("padding-right",x,l)},function(t){var l=t.theme,x=t.paddingBottom;return Object(E.a)("padding-bottom",x,l)},function(t){var l=t.theme,x=t.paddingLeft;return Object(E.a)("padding-left",x,l)},function(t){var l=t.theme,x=t.marginLeft;return Object(E.a)("margin-left",x,l)},function(t){var l=t.theme,x=t.marginRight;return Object(E.a)("margin-right",x,l)},function(t){var l=t.theme,x=t.marginTop;return Object(E.a)("margin-top",x,l)},function(t){var l=t.theme,x=t.marginBottom;return Object(E.a)("margin-bottom",x,l)},function(t){var l=t.theme;return t.hiddenS?"".concat(l.mediaQueries.tablet," { display: none; }"):void 0},function(t){var l=t.theme;return t.hiddenXS?"".concat(l.mediaQueries.mobile," { display: none; }"):void 0},function(t){var l=t.theme,x=t.hasRadius,N=t.borderRadius;return x?l.borderRadius:N},function(t){return t.borderStyle},function(t){return t.borderWidth},function(t){var l=t.borderColor;return t.theme.colors[l]},function(t){var l=t.theme,x=t.borderColor,N=t.borderStyle,X=t.borderWidth;if(x&&!N&&!X)return"1px solid ".concat(l.colors[x])},function(t){var l=t.theme,x=t.shadow;return l.shadows[x]},function(t){return t.pointerEvents},function(t){var l=t._hover,x=t.theme;return l?l(x):void 0},function(t){return t.display},function(t){return t.position},function(t){var l=t.left;return t.theme.spaces[l]||l},function(t){var l=t.right;return t.theme.spaces[l]||l},function(t){var l=t.top;return t.theme.spaces[l]||l},function(t){var l=t.bottom;return t.theme.spaces[l]||l},function(t){return t.zIndex},function(t){return t.overflow},function(t){return t.cursor},function(t){var l=t.width;return t.theme.spaces[l]||l},function(t){var l=t.maxWidth;return t.theme.spaces[l]||l},function(t){var l=t.minWidth;return t.theme.spaces[l]||l},function(t){var l=t.height;return t.theme.spaces[l]||l},function(t){var l=t.maxHeight;return t.theme.spaces[l]||l},function(t){var l=t.minHeight;return t.theme.spaces[l]||l},function(t){return t.transition},function(t){return t.transform},function(t){return t.animation},function(t){return t.shrink},function(t){return t.grow},function(t){return t.basis},function(t){return t.flex},function(t){return t.textAlign},function(t){return t.textTransform},function(t){return t.lineHeight},function(t){return t.cursor});b.displayName="Box",b.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},b.propTypes={_hover:d.a.func,background:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.string]),borderColor:d.a.string,children:d.a.oneOfType([d.a.node,d.a.string]),color:d.a.string,flex:d.a.oneOfType([d.a.string,d.a.string]),grow:d.a.oneOfType([d.a.string,d.a.string]),hasRadius:d.a.bool,hiddenS:d.a.bool,hiddenXS:d.a.bool,padding:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingBottom:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingLeft:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingRight:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingTop:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),shadow:d.a.string,shrink:d.a.oneOfType([d.a.string,d.a.string])}},7:function(e,a,n){"use strict";var u=n(10),s=n.n(u),h=n(13),g=n.n(h);a.a=function(d,v,w){var E=v;if(Array.isArray(v)||g()(v)!=="object"||(E=[v==null?void 0:v.desktop,v==null?void 0:v.tablet,v==null?void 0:v.mobile]),E!==void 0){if(Array.isArray(E)){var Z=E,b=s()(Z,3),t=b[0],l=b[1],x=b[2],N="".concat(d,": ").concat(w.spaces[t],";");return l!==void 0&&(N+="".concat(w.mediaQueries.tablet,`{
          `).concat(d,": ").concat(w.spaces[l],`;
        }`)),x!==void 0&&(N+="".concat(w.mediaQueries.mobile,`{
          `).concat(d,": ").concat(w.spaces[x],`;
        }`)),N}var X=w.spaces[E]||E;return"".concat(d,": ").concat(X,";")}}},8:function(e,a,n){"use strict";n.r(a),n.d(a,"Typography",function(){return Z});var u,s=n(3),h=n.n(s),g=n(0),d=n.n(g),v=n(2),w=["alpha","beta","delta","epsilon","omega","pi","sigma"],E={fontSize:!0,fontWeight:!0},Z=n.n(v).a.span.withConfig({shouldForwardProp:function(b,t){return!E[b]&&t(b)}})(u||(u=h()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(b){var t=b.theme,l=b.fontWeight;return t.fontWeights[l]},function(b){var t=b.theme,l=b.fontSize;return t.fontSizes[l]},function(b){var t=b.theme,l=b.lineHeight;return t.lineHeights[l]},function(b){var t=b.theme,l=b.textColor;return t.colors[l||"neutral800"]},function(b){return b.textTransform},function(b){return b.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(b){var t=b.variant,l=b.theme;switch(t){case"alpha":return`
        font-weight: `.concat(l.fontWeights.bold,`;
        font-size: `).concat(l.fontSizes[5],`;
        line-height: `).concat(l.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(l.fontWeights.bold,`;
        font-size: `).concat(l.fontSizes[4],`;
        line-height: `).concat(l.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(l.fontWeights.semiBold,`;
        font-size: `).concat(l.fontSizes[3],`;
        line-height: `).concat(l.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(l.fontSizes[3],`;
        line-height: `).concat(l.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(l.fontSizes[2],`;
        line-height: `).concat(l.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(l.fontSizes[1],`;
        line-height: `).concat(l.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(l.fontWeights.bold,`;
        font-size: `).concat(l.fontSizes[0],`;
        line-height: `).concat(l.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(l.fontSizes[2],`;
      `)}});Z.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},Z.propTypes={fontSize:d.a.oneOfType([d.a.number,d.a.string]),fontWeight:d.a.string,lineHeight:d.a.oneOfType([d.a.number,d.a.string]),textColor:d.a.string,textTransform:d.a.string,variant:d.a.oneOf(w)}},83:function(e,a){e.exports=p}})})},68717:function(F,Q,m){(function(o,f){F.exports=f(m(67294))})(this,function(o){return function(f){var O={};function p(e){if(O[e])return O[e].exports;var a=O[e]={i:e,l:!1,exports:{}};return f[e].call(a.exports,a,a.exports,p),a.l=!0,a.exports}return p.m=f,p.c=O,p.d=function(e,a,n){p.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},p.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,a){if(1&a&&(e=p(e)),8&a||4&a&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&typeof e!="string")for(var u in e)p.d(n,u,function(s){return e[s]}.bind(null,u));return n},p.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(a,"a",a),a},p.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},p.p="",p(p.s=5)}({0:function(f,O){f.exports=o},5:function(f,O,p){"use strict";p.r(O);var e=p(0);function a(){return(a=Object.assign||function(n){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(n[h]=s[h])}return n}).apply(this,arguments)}O.default=function(n){return e.createElement("svg",a({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})})},43257:function(F,Q,m){(function(o,f){F.exports=f(m(67294))})(this,function(o){return function(f){var O={};function p(e){if(O[e])return O[e].exports;var a=O[e]={i:e,l:!1,exports:{}};return f[e].call(a.exports,a,a.exports,p),a.l=!0,a.exports}return p.m=f,p.c=O,p.d=function(e,a,n){p.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},p.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,a){if(1&a&&(e=p(e)),8&a||4&a&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&typeof e!="string")for(var u in e)p.d(n,u,function(s){return e[s]}.bind(null,u));return n},p.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(a,"a",a),a},p.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},p.p="",p(p.s=72)}({0:function(f,O){f.exports=o},72:function(f,O,p){"use strict";p.r(O);var e=p(0);function a(){return(a=Object.assign||function(n){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(n[h]=s[h])}return n}).apply(this,arguments)}O.default=function(n){return e.createElement("svg",a({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e.createElement("path",{d:"M16.235 2.824a1.412 1.412 0 010-2.824h6.353C23.368 0 24 .633 24 1.412v6.353a1.412 1.412 0 01-2.823 0V4.82l-8.179 8.178a1.412 1.412 0 01-1.996-1.996l8.178-8.178h-2.945zm4.942 10.588a1.412 1.412 0 012.823 0v9.176c0 .78-.632 1.412-1.412 1.412H1.412C.632 24 0 23.368 0 22.588V1.412C0 .632.632 0 1.412 0h9.176a1.412 1.412 0 010 2.824H2.824v18.353h18.353v-7.765z",fill:"#32324D"}))}}})})},85557:function(F,Q,m){(function(o,f){F.exports=f(m(67294))})(this,function(o){return function(f){var O={};function p(e){if(O[e])return O[e].exports;var a=O[e]={i:e,l:!1,exports:{}};return f[e].call(a.exports,a,a.exports,p),a.l=!0,a.exports}return p.m=f,p.c=O,p.d=function(e,a,n){p.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},p.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,a){if(1&a&&(e=p(e)),8&a||4&a&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&typeof e!="string")for(var u in e)p.d(n,u,function(s){return e[s]}.bind(null,u));return n},p.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(a,"a",a),a},p.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},p.p="",p(p.s=103)}({0:function(f,O){f.exports=o},103:function(f,O,p){"use strict";p.r(O);var e=p(0);function a(){return(a=Object.assign||function(n){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(n[h]=s[h])}return n}).apply(this,arguments)}O.default=function(n){return e.createElement("svg",a({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e.createElement("path",{d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H5a.2.2 0 01-.2-.2V.2zM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H.2a.2.2 0 01-.2-.2V9.8zM5 19.2a.2.2 0 00-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 00.2-.2v-4.4a.2.2 0 00-.2-.2H5z",fill:"#212134"}))}}})})},51347:function(F,Q,m){(function(o,f){F.exports=f(m(67294))})(this,function(o){return function(f){var O={};function p(e){if(O[e])return O[e].exports;var a=O[e]={i:e,l:!1,exports:{}};return f[e].call(a.exports,a,a.exports,p),a.l=!0,a.exports}return p.m=f,p.c=O,p.d=function(e,a,n){p.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},p.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,a){if(1&a&&(e=p(e)),8&a||4&a&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&typeof e!="string")for(var u in e)p.d(n,u,function(s){return e[s]}.bind(null,u));return n},p.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(a,"a",a),a},p.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},p.p="",p(p.s=109)}({0:function(f,O){f.exports=o},109:function(f,O,p){"use strict";p.r(O);var e=p(0);function a(){return(a=Object.assign||function(n){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(n[h]=s[h])}return n}).apply(this,arguments)}O.default=function(n){return e.createElement("svg",a({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e.createElement("path",{d:"M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0114 0v1zm-2 0V9A5 5 0 007 9v1h10zm-6 4v4h2v-4h-2z",fill:"#8E8EA9"}))}}})})},29102:(F,Q,m)=>{"use strict";m.r(Q),m.d(Q,{default:()=>Jt});var o=m(67294),f=m(68547),O=m(80768),p=m.n(O),e=m(68717),a=m.n(e),n=m(84734),u=m.n(n),s=m(19352),h=m.n(s),g=m(19408),d=m(85104),v=m(67826),w=m(9008),E=m(5493),Z=m(78862),b=m(27361),t=m.n(b),l=m(18721),x=m.n(l),N=m(18446),X=m.n(N),me=m(11700),le=m.n(me),Y=m(97132),ae=m(49656),ge=m(45697),y=m.n(ge),A=m(49425),D=m(41798),J=m(47558),P=m(27523),M=m(78384),$=m(90635),he=m(84040),q=m.n(he),se=m(67814);const ie=(0,M.default)(se.G)`
  width: ${(0,f.pxToRem)(32)} !important;
  height: ${(0,f.pxToRem)(32)} !important;
  padding: ${(0,f.pxToRem)(9)};
  border-radius: ${(0,f.pxToRem)(64)};
  background: ${({theme:r})=>r.colors.neutral150};
  path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,ce=M.default.div`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,f.pxToRem)(8)};

  svg {
    width: ${(0,f.pxToRem)(10)};
    height: ${(0,f.pxToRem)(10)};
    path {
      fill: ${({theme:r})=>r.colors.primary600};
    }
  }
`,ye=(0,M.default)(E.Box)`
  flex-shrink: 0;
  width: ${(0,f.pxToRem)(140)};
  height: ${(0,f.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:r})=>r.colors.neutral200};
  background: ${({theme:r})=>r.colors.neutral100};
  border-radius: ${({theme:r})=>r.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &.active,
  &:hover {
    border: 1px solid ${({theme:r})=>r.colors.primary200};
    background: ${({theme:r})=>r.colors.primary100};

    ${ce} {
      display: block;
    }

    ${ie} {
      background: ${({theme:r})=>r.colors.primary200};
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }

    ${A.Typography} {
      color: ${({theme:r})=>r.colors.primary600};
    }
  }
`,ve=(0,M.default)(w.Stack)`
  align-items: center;
`;function be({component:r,dzName:i,index:c,isActive:C,isInDevelopmentMode:S,onClick:j}){const{modifiedData:B,removeComponentFromDynamicZone:k}=(0,P.Z)(),{schema:{icon:R,displayName:I}}=t()(B,["components",r],{schema:{icon:null}}),z=T=>{T.stopPropagation(),k(i,c)};return o.createElement("button",{type:"button",onClick:j},o.createElement(ye,{className:C?"active":"",borderRadius:"borderRadius",paddingLeft:4,paddingRight:4},o.createElement(ve,{spacing:1},o.createElement(ie,{icon:R}),o.createElement(E.Box,{maxWidth:`calc(${(0,f.pxToRem)(140)} - 32px)`},o.createElement(A.Typography,{variant:"pi",fontWeight:"bold",ellipsis:!0},I))),S&&o.createElement(ce,{role:"button",tabIndex:0,onKeyDown:T=>(T.key==="Enter"||T.key===" ")&&z(T),onClick:z},o.createElement(q(),null))))}be.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick:()=>{}},be.propTypes={component:y().string,dzName:y().string.isRequired,index:y().number.isRequired,isActive:y().bool,isInDevelopmentMode:y().bool,onClick:y().func};const Xe=be,Se=M.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,f.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,f.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:r,isChildOfDynamicZone:i,theme:c})=>i?`background-color: ${c.colors.primary200};`:r?`background-color: ${c.colors.primary200};`:`background: ${c.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function xe({customRowComponent:r,component:i,isFromDynamicZone:c,isNestedInDZComponent:C,firstLoopComponentUid:S}){const{modifiedData:j}=(0,P.Z)(),{schema:{attributes:B}}=t()(j,["components",i],{schema:{attributes:[]}});return o.createElement(Se,{isChildOfDynamicZone:c,className:"component-row"},o.createElement("td",{colSpan:12},o.createElement(Ae,{customRowComponent:r,items:B,targetUid:i,firstLoopComponentUid:S||i,editTarget:"components",isFromDynamicZone:c,isNestedInDZComponent:C,isSub:!0,secondLoopComponentUid:S?i:null})))}xe.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},xe.propTypes={component:y().string,customRowComponent:y().func,firstLoopComponentUid:y().string,isFromDynamicZone:y().bool,isNestedInDZComponent:y().bool};const je=xe;var Ge=Object.defineProperty,Ye=Object.defineProperties,Je=Object.getOwnPropertyDescriptors,Me=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,Le=(r,i,c)=>i in r?Ge(r,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[i]=c,et=(r,i)=>{for(var c in i||(i={}))qe.call(i,c)&&Le(r,c,i[c]);if(Me)for(var c of Me(i))_e.call(i,c)&&Le(r,c,i[c]);return r},tt=(r,i)=>Ye(r,Je(i));const nt=(0,M.default)(p())`
  width: ${(0,f.pxToRem)(32)};
  height: ${(0,f.pxToRem)(32)};
  padding: ${(0,f.pxToRem)(9)};
  border-radius: ${(0,f.pxToRem)(64)};
  background: ${({theme:r})=>r.colors.primary100};
  path {
    fill: ${({theme:r})=>r.colors.primary600};
  }
`,rt=(0,M.default)(E.Box)`
  height: ${(0,f.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,ot=(0,M.default)(w.Stack)`
  width: 100%;
  overflow-x: auto;
`,at=(0,M.default)(E.Box)`
  padding-top: ${(0,f.pxToRem)(90)};
`,it=(0,M.default)(w.Stack)`
  flex-shrink: 0;
  width: ${(0,f.pxToRem)(140)};
  height: ${(0,f.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function Te({customRowComponent:r,components:i,addComponent:c,name:C,targetUid:S}){const{isInDevelopmentMode:j}=(0,P.Z)(),[B,k]=(0,o.useState)(0),{formatMessage:R}=(0,Y.useIntl)(),I=T=>{B!==T&&k(T)},z=()=>{c(C)};return o.createElement(Se,{className:"dynamiczone-row",isFromDynamicZone:!0},o.createElement("td",{colSpan:12},o.createElement(rt,{paddingLeft:8},o.createElement(ot,{horizontal:!0,spacing:2},j&&o.createElement("button",{type:"button",onClick:z},o.createElement(it,{spacing:1},o.createElement(nt,null),o.createElement(A.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600"},R({id:(0,$.Z)("button.component.add"),formatMessage:"Add a component"})))),i.map((T,L)=>o.createElement(Xe,{key:T,dzName:C,index:L,component:T,isActive:B===L,isInDevelopmentMode:j,onClick:()=>I(L)})))),o.createElement(at,null,i.map((T,L)=>{const U={customRowComponent:r,component:T};return o.createElement(E.Box,{tabId:`${L}`,key:T,style:{display:B===L?"block":"none"}},o.createElement("table",null,o.createElement("tbody",null,o.createElement(je,tt(et({},U),{isFromDynamicZone:!0,targetUid:S,key:T})))))}))))}Te.defaultProps={addComponent:()=>{},components:[],customRowComponent:null,name:null},Te.propTypes={addComponent:y().func,components:y().instanceOf(Array),customRowComponent:y().func,name:y().string,targetUid:y().string.isRequired};const lt=Te,st=(0,M.default)(E.Box)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:r})=>r.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:r})=>r.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:r})=>r.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:r})=>r.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:r})=>r.colors.neutral600};
    outline-offset: -4px;
  }
`;var ct=Object.defineProperty,ue=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Be=(r,i,c)=>i in r?ct(r,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[i]=c,ut=(r,i)=>{for(var c in i||(i={}))Re.call(i,c)&&Be(r,c,i[c]);if(ue)for(var c of ue(i))$e.call(i,c)&&Be(r,c,i[c]);return r},dt=(r,i)=>{var c={};for(var C in r)Re.call(r,C)&&i.indexOf(C)<0&&(c[C]=r[C]);if(r!=null&&ue)for(var C of ue(r))i.indexOf(C)<0&&$e.call(r,C)&&(c[C]=r[C]);return c};const pt=(0,M.default)(E.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:r,color:i})=>r.colors[`${i}600`]};
  }
`,ft=(0,M.default)(E.Box)`
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Ie=r=>{var i=r,{children:c,icon:C,color:S}=i,j=dt(i,["children","icon","color"]);return o.createElement(ft,ut({paddingBottom:4,paddingTop:4,as:"button",type:"button"},j),o.createElement(v.Flex,null,o.createElement(pt,{color:S,"aria-hidden":!0,background:`${S}200`},C),o.createElement(E.Box,{paddingLeft:3},o.createElement(A.Typography,{variant:"pi",fontWeight:"bold",textColor:`${S}600`},c))))};Ie.propTypes={color:y().string.isRequired,children:y().string.isRequired,icon:y().node.isRequired};const mt=Ie;var gt=Object.defineProperty,ht=Object.defineProperties,yt=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,vt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,ze=(r,i,c)=>i in r?gt(r,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[i]=c,de=(r,i)=>{for(var c in i||(i={}))vt.call(i,c)&&ze(r,c,i[c]);if(ke)for(var c of ke(i))bt.call(i,c)&&ze(r,c,i[c]);return r},Oe=(r,i)=>ht(r,yt(i));function Ee({addComponentToDZ:r,customRowComponent:i,editTarget:c,firstLoopComponentUid:C,isFromDynamicZone:S,isMain:j,isNestedInDZComponent:B,isSub:k,items:R,secondLoopComponentUid:I,targetUid:z}){const{formatMessage:T}=(0,Y.useIntl)(),{trackUsage:L}=(0,f.useTracking)(),{isInDevelopmentMode:U,modifiedData:W,isInContentTypeView:H}=(0,P.Z)(),{onOpenModalAddField:G}=(0,J.Z)(),_=()=>{L("hasClickedCTBAddFieldBanner"),G({forTarget:c,targetUid:z})};return z?R.length===0&&j?o.createElement(D.Table,{colCount:2,rowCount:2},o.createElement(D.Thead,null,o.createElement(D.Tr,null,o.createElement(D.Th,null,o.createElement(A.Typography,{variant:"sigma",textColor:"neutral600"},T({id:"global.name",defaultMessage:"Name"}))),o.createElement(D.Th,null,o.createElement(A.Typography,{variant:"sigma",textColor:"neutral600"},T({id:"global.type",defaultMessage:"Type"}))))),o.createElement(f.EmptyBodyTable,{action:o.createElement(g.Button,{onClick:_,size:"L",startIcon:o.createElement(p(),null),variant:"secondary"},T({id:(0,$.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:H?{id:(0,$.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,$.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):o.createElement(o.Fragment,null,o.createElement(st,null,o.createElement(E.Box,de({paddingLeft:6,paddingRight:j?6:0},j&&{style:{overflowX:"auto"}}),o.createElement("table",null,j&&o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,o.createElement(A.Typography,{variant:"sigma",textColor:"neutral600"},T({id:"global.name",defaultMessage:"Name"}))),o.createElement("th",{colSpan:"2"},o.createElement(A.Typography,{variant:"sigma",textColor:"neutral600"},T({id:"global.type",defaultMessage:"Type"}))))),o.createElement("tbody",null,R.map(V=>{const{type:ee}=V,ne=i;return o.createElement(o.Fragment,{key:V.name},o.createElement(ne,Oe(de({},V),{isNestedInDZComponent:B,targetUid:z,editTarget:c,firstLoopComponentUid:C,isFromDynamicZone:S,secondLoopComponentUid:I})),ee==="component"&&o.createElement(je,Oe(de({},V),{customRowComponent:i,targetUid:z,isNestedInDZComponent:S,editTarget:c,firstLoopComponentUid:C})),ee==="dynamiczone"&&o.createElement(lt,Oe(de({},V),{customRowComponent:i,addComponent:r,targetUid:z})))})))),j&&U&&o.createElement(D.TFooter,{icon:o.createElement(p(),null),onClick:_},T({id:(0,$.Z)(`form.button.add.field.to.${W.contentType?W.contentType.schema.kind:c||"collectionType"}`),defaultMessage:"Add another field"})),k&&U&&o.createElement(mt,{icon:o.createElement(p(),null),onClick:_,color:S?"primary":"neutral"},T({id:(0,$.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"})))):o.createElement(D.Table,{colCount:2,rowCount:2},o.createElement(D.Thead,null,o.createElement(D.Tr,null,o.createElement(D.Th,null,o.createElement(A.Typography,{variant:"sigma",textColor:"neutral600"},T({id:"global.name",defaultMessage:"Name"}))),o.createElement(D.Th,null,o.createElement(A.Typography,{variant:"sigma",textColor:"neutral600"},T({id:"global.type",defaultMessage:"Type"}))))),o.createElement(f.EmptyBodyTable,{colSpan:2,content:{id:(0,$.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}Ee.defaultProps={addComponentToDZ:()=>{},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},Ee.propTypes={addComponentToDZ:y().func,customRowComponent:y().func,editTarget:y().string.isRequired,firstLoopComponentUid:y().string,isFromDynamicZone:y().bool,isNestedInDZComponent:y().bool,isMain:y().bool,items:y().instanceOf(Array),secondLoopComponentUid:y().string,targetUid:y().string,isSub:y().bool};const Ae=Ee;var De=m(30741),xt=m(51347),Tt=m.n(xt),Ot=m(18568),Et=m.n(Ot),wt=Object.defineProperty,Ze=Object.getOwnPropertySymbols,Ct=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable,Fe=(r,i,c)=>i in r?wt(r,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[i]=c,St=(r,i)=>{for(var c in i||(i={}))Ct.call(i,c)&&Fe(r,c,i[c]);if(Ze)for(var c of Ze(i))Pt.call(i,c)&&Fe(r,c,i[c]);return r};const jt=(0,M.default)(E.Box)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:r,color:i})=>r.colors[i]};
    display: block;
  }
`,Mt=M.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:r,color:i})=>r.colors[i]};
  }
`,Ne=r=>o.createElement(jt,null,o.createElement(Mt,St({width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ne.propTypes={color:y().string.isRequired};const Lt=Ne,we=({content:r})=>le()(r);we.defaultProps={content:null},we.propTypes={content:y().string};const Rt=we,$t=(0,M.default)(E.Box)`
  position: relative;
`;var Bt=m(71243),It=Object.defineProperty,Ve=Object.getOwnPropertySymbols,kt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable,We=(r,i,c)=>i in r?It(r,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[i]=c,He=(r,i)=>{for(var c in i||(i={}))kt.call(i,c)&&We(r,c,i[c]);if(Ve)for(var c of Ve(i))zt.call(i,c)&&We(r,c,i[c]);return r};function Ce({configurable:r,editTarget:i,firstLoopComponentUid:c,isFromDynamicZone:C,name:S,onClick:j,relation:B,repeatable:k,secondLoopComponentUid:R,target:I,targetUid:z,type:T}){const{contentTypes:L,isInDevelopmentMode:U,removeAttribute:W}=(0,P.Z)(),{formatMessage:H}=(0,Y.useIntl)(),G=T==="relation"&&B.includes("morph"),_=["integer","biginteger","float","decimal"].includes(T)?"number":T;let V=T;["integer","biginteger","float","decimal"].includes(T)?V="number":["string"].includes(T)&&(V="text");const ee=t()(L,[I],{}),ne=t()(ee,["schema","displayName"],""),pe=t()(ee,"plugin"),fe=I?"relation":_,re=()=>{G||r!==!1&&j(i,R||c||z,S,T)};let oe;return R&&c?oe=2:c?oe=1:oe=0,o.createElement($t,He({as:"tr"},(0,f.onRowClick)({fn:re,condition:U&&r&&!G})),o.createElement("td",{style:{position:"relative"}},oe!==0&&o.createElement(Lt,{color:C?"primary200":"neutral150"}),o.createElement(w.Stack,{paddingLeft:2,spacing:4,horizontal:!0},o.createElement(Bt.Z,{key:fe,type:fe}),o.createElement(A.Typography,{fontWeight:"bold"},S))),o.createElement("td",null,I?o.createElement(A.Typography,null,H({id:(0,$.Z)(`modelPage.attribute.${G?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",o.createElement("span",{style:{fontStyle:"italic"}},o.createElement(Rt,{content:ne}),"\xA0",pe&&`(${H({id:(0,$.Z)("from"),defaultMessage:"from"})}: ${pe})`)):o.createElement(A.Typography,null,H({id:(0,$.Z)(`attribute.${V}`),defaultMessage:T}),"\xA0",k&&H({id:(0,$.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))),o.createElement("td",null,U?o.createElement(v.Flex,He({justifyContent:"flex-end"},f.stopPropagation),r?o.createElement(w.Stack,{horizontal:!0,spacing:1},!G&&o.createElement(De.IconButton,{onClick:re,label:`${H({id:"app.utils.edit",defaultMessage:"Edit"})} ${S}`,noBorder:!0,icon:o.createElement(h(),null)}),o.createElement(De.IconButton,{onClick:te=>{te.stopPropagation(),W(i,S,R||c||"")},label:`${H({id:"global.delete",defaultMessage:"Delete"})} ${S}`,noBorder:!0,icon:o.createElement(Et(),null)})):o.createElement(Tt(),null)):o.createElement(E.Box,{height:(0,f.pxToRem)(32)})))}Ce.defaultProps={configurable:!0,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick:()=>{},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},Ce.propTypes={configurable:y().bool,editTarget:y().string.isRequired,firstLoopComponentUid:y().string,isFromDynamicZone:y().bool,name:y().string.isRequired,onClick:y().func,relation:y().string,repeatable:y().bool,secondLoopComponentUid:y().string,target:y().string,targetUid:y().string,type:y().string};const At=(0,o.memo)(Ce),Dt=r=>{let i;switch(r){case"date":case"datetime":case"time":case"timestamp":i="date";break;case"integer":case"biginteger":case"decimal":case"float":i="number";break;case"string":case"text":i="text";break;case"":i="relation";break;default:i=r}return i};var Zt=m(85557),Ft=m.n(Zt);const Nt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Pe=({disabled:r,isTemporary:i,isInContentTypeView:c,contentTypeKind:C,targetUid:S})=>{const{formatMessage:j}=(0,Y.useIntl)(),{push:B}=(0,ae.useHistory)(),{collectionTypesConfigurations:k,componentsConfigurations:R,singleTypesConfigurations:I}=Nt,z=j({id:"content-type-builder.form.button.configure-view"});let T=k;const L=()=>(i||B(c?`/content-manager/collectionType/${S}/configurations/edit`:`/content-manager/components/${S}/configurations/edit`),!1);return c&&C==="singleType"&&(T=I),c||(T=R),o.createElement(f.CheckPermissions,{permissions:T},o.createElement(g.Button,{startIcon:o.createElement(Ft(),null),variant:"tertiary",onClick:L,disabled:i||r},z))};Pe.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},Pe.propTypes={disabled:y().bool.isRequired,contentTypeKind:y().string,isInContentTypeView:y().bool,isTemporary:y().bool,targetUid:y().string};const Vt=(0,o.memo)(Pe);var Wt=Object.defineProperty,Ht=Object.defineProperties,Ut=Object.getOwnPropertyDescriptors,Ue=Object.getOwnPropertySymbols,Kt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable,Ke=(r,i,c)=>i in r?Wt(r,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[i]=c,Xt=(r,i)=>{for(var c in i||(i={}))Kt.call(i,c)&&Ke(r,c,i[c]);if(Ue)for(var c of Ue(i))Qt.call(i,c)&&Ke(r,c,i[c]);return r},Gt=(r,i)=>Ht(r,Ut(i)),Yt=(r,i,c)=>new Promise((C,S)=>{var j=R=>{try{k(c.next(R))}catch(I){S(I)}},B=R=>{try{k(c.throw(R))}catch(I){S(I)}},k=R=>R.done?C(R.value):Promise.resolve(R.value).then(j,B);k((c=c.apply(r,i)).next())});const Jt=()=>{const{initialData:r,modifiedData:i,isInDevelopmentMode:c,isInContentTypeView:C,submitData:S}=(0,P.Z)(),{formatMessage:j}=(0,Y.useIntl)(),{trackUsage:B}=(0,f.useTracking)(),k=(0,ae.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:R,onOpenModalAddField:I,onOpenModalEditField:z,onOpenModalEditSchema:T}=(0,J.Z)(),L=C?"contentType":"component",U=[L,"schema","attributes"],W=t()(i,[L,"uid"]),H=t()(i,[L,"isTemporary"],!1),G=t()(i,[L,"schema","kind"],null),_=t()(i,U,[]),V=x()(r,[L,"plugin"]),ee=!X()(i,r),ne=C?"contentType":"component",pe=K=>{R({dynamicZoneTarget:K,targetUid:W})},fe=(K,_t,en,Qe)=>Yt(void 0,null,function*(){const tn=Dt(Qe);z({forTarget:K,targetUid:_t,attributeName:en,attributeType:tn,step:Qe==="component"?"2":null})});let re=t()(i,[L,"schema","displayName"],"");const oe=t()(i,[L,"schema","kind"],""),te=(k==null?void 0:k.params.currentUID)==="create-content-type";!re&&te&&(re=j({id:(0,$.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const qt=()=>{const K=oe||L;K==="collectionType"&&B("willEditNameOfContentType"),K==="singleType"&&B("willEditNameOfSingleType"),T({modalType:L,forTarget:L,targetUid:W,kind:K})};return o.createElement(o.Fragment,null,o.createElement(ae.Prompt,{message:j({id:(0,$.Z)("prompt.unsaved")}),when:ee}),o.createElement(Z.HeaderLayout,{id:"title",primaryAction:c&&o.createElement(w.Stack,{horizontal:!0,spacing:2},!te&&o.createElement(g.Button,{startIcon:o.createElement(p(),null),variant:"secondary",onClick:()=>{I({forTarget:ne,targetUid:W})}},j({id:(0,$.Z)("button.attributes.add.another")})),o.createElement(g.Button,{startIcon:o.createElement(u(),null),onClick:()=>S(),type:"submit",disabled:X()(i,r)},j({id:"global.save",defaultMessage:"Save"}))),secondaryAction:c&&!V&&!te&&o.createElement(g.Button,{startIcon:o.createElement(h(),null),variant:"tertiary",onClick:qt},j({id:"app.utils.edit",defaultMessage:"Edit"})),title:le()(re),subtitle:j({id:(0,$.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:o.createElement(d.Link,{startIcon:o.createElement(a(),null),to:"/plugins/content-type-builder/"},j({id:"global.back",defaultMessage:"Back"}))}),o.createElement(Z.ContentLayout,null,o.createElement(w.Stack,{spacing:4},o.createElement(v.Flex,{justifyContent:"flex-end"},o.createElement(w.Stack,{horizontal:!0,spacing:2},o.createElement(Vt,{key:"link-to-cm-settings-view",targetUid:W,isTemporary:H,isInContentTypeView:C,contentTypeKind:G,disabled:te}))),o.createElement(E.Box,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},o.createElement(Ae,{items:_,customRowComponent:K=>o.createElement(At,Gt(Xt({},K),{onClick:fe})),addComponentToDZ:pe,targetUid:W,editTarget:ne,isMain:!0})))))}}}]);

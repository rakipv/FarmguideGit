"use strict";(self.webpackChunkfarm_guide=self.webpackChunkfarm_guide||[]).push([[3981],{87512:(L,T,n)=>{n.r(T),n.d(T,{default:()=>We});var e=n(67294),f=n(97132),d=n(78384),O=n(15482),F=n(49656),i=n(68547),W=n(78862),V=n(62031),c=n(5493),g=n(34626),$=n(42462),A=n(32104);const z=t=>Object.entries(t).every(([,a])=>Object.entries(a).every(([,o])=>o));var v=n(9008),E=n(67826),h=n(49425),H=n(60985),P=n(19408),K=n(77602),b=n.n(K),Z=n(45697),r=n.n(Z),N=n(71289),J=n(66952),m=n(16289);const B=({type:t,title:a,number:o,content:l,hasLine:u})=>{const{formatMessage:y}=(0,f.useIntl)();return e.createElement(c.Box,null,e.createElement(E.Flex,null,e.createElement(c.Box,{minWidth:(0,i.pxToRem)(30),marginRight:5},e.createElement(N.Z,{type:t,number:o})),e.createElement(h.Typography,{variant:"delta",as:"h3"},y(a))),e.createElement(E.Flex,{alignItems:"flex-start"},e.createElement(E.Flex,{justifyContent:"center",minWidth:(0,i.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},u&&e.createElement(J.Z,{type:t,minHeight:t===m.lW?(0,i.pxToRem)(85):(0,i.pxToRem)(65)})),e.createElement(c.Box,{marginTop:2},t===m.lW&&l)))};B.defaultProps={content:void 0,number:void 0,type:m.VM,hasLine:!0},B.propTypes={content:r().node,number:r().number,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,type:r().oneOf([m.lW,m.hx,m.VM]),hasLine:r().bool};const U=B,Y=(t,a)=>t===-1||a<t?m.hx:a>t?m.VM:m.lW,C=({sections:t,currentSectionKey:a})=>{const o=t.findIndex(l=>l.key===a);return e.createElement(c.Box,null,t.map((l,u)=>e.createElement(U,{key:l.key,title:l.title,content:l.content,number:u+1,type:Y(o,u),hasLine:u!==t.length-1})))};C.defaultProps={currentSectionKey:void 0},C.propTypes={sections:r().arrayOf(r().shape({key:r().string.isRequired,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,content:r().node})).isRequired,currentSectionKey:r().string};const Q=C;var X=n(76910),w=Object.defineProperty,G=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,R=(t,a,o)=>a in t?w(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,ee=(t,a)=>{for(var o in a||(a={}))q.call(a,o)&&R(t,o,a[o]);if(G)for(var o of G(a))_.call(a,o)&&R(t,o,a[o]);return t};const te=()=>{var t;const{guidedTourState:a,setSkipped:o}=(0,i.useGuidedTour)(),{formatMessage:l}=(0,f.useIntl)(),{trackUsage:u}=(0,i.useTracking)(),y=Object.entries(X.Z).map(([p,s])=>({key:p,title:s.home.title,content:e.createElement(H.LinkButton,{onClick:()=>u(s.home.trackingEvent),to:s.home.cta.target,endIcon:e.createElement(b(),null)},l(s.home.cta.title))})),x=(t=y.map(p=>ee({isDone:Object.entries(a[p.key]).every(([,s])=>s)},p)).find(p=>!p.isDone))==null?void 0:t.key,M=()=>{o(!0),u("didSkipGuidedtour")};return e.createElement(c.Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(v.Stack,{spacing:6},e.createElement(h.Typography,{variant:"beta",as:"h2"},l({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(Q,{sections:y,currentSectionKey:x})),e.createElement(E.Flex,{justifyContent:"flex-end"},e.createElement(P.Button,{variant:"tertiary",onClick:M},l({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};var I=n(85104),ne=n(43257),ae=n.n(ne),oe=n(77108),re=n.n(oe),le=n(2807),se=n.n(le),ie=n(27962),de=n.n(ie),ce=n(70555),me=n.n(ce),ue=n(4250),pe=n.n(ue),ge=n(30153),fe=n.n(ge);const he=(0,d.default)(se())`
  path {
    fill: #7289da !important;
  }
`,ye=(0,d.default)(de())`
  > path:first-child {
    fill: #ff4500;
  }
`,D=(0,d.default)(me())`
  > path:first-child {
    fill: #8e75ff;
  }
  > path:nth-child(2) {
    fill: #8e75ff;
  }
  > path:nth-child(3) {
    fill: #8e75ff;
  }
`,ve=(0,d.default)(pe())`
  path {
    fill: #1da1f2 !important;
  }
`,Ee=(0,d.default)(fe())`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Se=[{name:"Github",link:"https://github.com/strapi/strapi/",icon:e.createElement(re(),{fill:"#7289DA"}),alt:"github"},{name:"Discord",link:"https://slack.strapi.io/",icon:e.createElement(he,null),alt:"discord"},{name:"Reddit",link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(ye,null),alt:"reddit"},{name:"Twitter",link:"https://twitter.com/strapijs",icon:e.createElement(ve,null),alt:"twitter"},{name:"Forum",link:"https://forum.strapi.io",icon:e.createElement(Ee,null),alt:"forum"},{name:"Blog",link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(D,null),alt:"blog"},{name:"We are hiring!",link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(D,null),alt:"career"}],Te=(0,d.default)(H.LinkButton)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Be=(0,d.default)(g.Grid)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Ce=()=>{const{formatMessage:t}=(0,f.useIntl)();return e.createElement(c.Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(c.Box,{paddingBottom:7},e.createElement(v.Stack,{spacing:5},e.createElement(v.Stack,{spacing:3},e.createElement(h.Typography,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(h.Typography,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(I.Link,{href:"https://feedback.strapi.io/",endIcon:e.createElement(ae(),null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Be,null,Se.map(a=>e.createElement(g.GridItem,{col:6,s:12,key:a.name},e.createElement(Te,{size:"L",startIcon:a.icon,variant:"tertiary",href:a.link},a.name)))))},ke=(0,d.default)(h.Typography)`
  word-break: break-word;
`,xe=(0,d.default)(v.Stack)`
  align-items: flex-start;
`,k=({hasCreatedContentType:t,onCreateCT:a})=>{const{formatMessage:o}=(0,f.useIntl)();return e.createElement("div",null,e.createElement(c.Box,{paddingLeft:6,paddingBottom:10},e.createElement(xe,{spacing:5},e.createElement(h.Typography,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(ke,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(I.Link,{href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(P.Button,{size:"L",onClick:a,endIcon:e.createElement(b(),null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};k.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},k.propTypes={hasCreatedContentType:r().bool,onCreateCT:r().func};const Me=k;var Le=n(26163),He=n.n(Le),Pe=n(71533),be=n.n(Pe),Ge=n(63137),Re=n.n(Ge),Ie=n(85340),De=n.n(Ie);const S=d.default.a`
  text-decoration: none;
`,je=()=>{const{formatMessage:t}=(0,f.useIntl)();return e.createElement(v.Stack,{spacing:5},e.createElement(S,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(i.ContentBox,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(He(),null),iconBackground:"primary100"})),e.createElement(S,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(i.ContentBox,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(be(),null),iconBackground:"warning100"})),e.createElement(S,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(i.ContentBox,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(Re(),null),iconBackground:"secondary100"})),e.createElement(S,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(i.ContentBox,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(De(),null),iconBackground:"alternative100"})))},Oe=(0,d.default)(c.Box)`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: ${150/16}rem;
  }
`,Fe=()=>{const{collectionTypes:t,singleTypes:a,isLoading:o}=(0,A.bP)(),{guidedTourState:l,isGuidedTourVisible:u,isSkipped:y}=(0,i.useGuidedTour)(),j=!z(l)&&u&&!y,{push:x}=(0,F.useHistory)(),M=s=>{s.preventDefault(),x("/plugins/content-type-builder/content-types/create-content-type")},p=(0,e.useMemo)(()=>{const s=Ve=>Ve.filter($e=>$e.isDisplayed);return s(t).length>1||s(a).length>0},[t,a]);return o?e.createElement(i.LoadingIndicatorPage,null):e.createElement(W.Layout,null,e.createElement(f.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},s=>e.createElement(O.Helmet,{title:s[0]})),e.createElement(V.Main,null,e.createElement(Oe,null,e.createElement("img",{alt:"","aria-hidden":!0,src:$})),e.createElement(c.Box,{padding:10},e.createElement(g.Grid,null,e.createElement(g.GridItem,{col:8,s:12},e.createElement(Me,{onCreateCT:M,hasCreatedContentType:p}))),e.createElement(g.Grid,{gap:6},e.createElement(g.GridItem,{col:8,s:12},j?e.createElement(te,null):e.createElement(je,null)),e.createElement(g.GridItem,{col:4,s:12},e.createElement(Ce,null))))))},We=(0,e.memo)(Fe)},42462:(L,T,n)=>{L.exports=n.p+"2a9e9ef5c4c775bb7c7b.png"}}]);

(self.webpackChunkfarm_guide=self.webpackChunkfarm_guide||[]).push([[5509],{64020:(C,x,y)=>{(function(l){l(y(4631))})(function(l){"use strict";l.defineOption("styleSelectedText",!1,function(e,t,r){var n=r&&r!=l.Init;t&&!n?(e.state.markedSelection=[],e.state.markedSelectionStyle=typeof t=="string"?t:"CodeMirror-selectedtext",v(e),e.on("cursorActivity",p),e.on("change",S)):!t&&n&&(e.off("cursorActivity",p),e.off("change",S),u(e),e.state.markedSelection=e.state.markedSelectionStyle=null)});function p(e){e.state.markedSelection&&e.operation(function(){_(e)})}function S(e){e.state.markedSelection&&e.state.markedSelection.length&&e.operation(function(){u(e)})}var s=8,d=l.Pos,o=l.cmpPos;function f(e,t,r,n){if(o(t,r)!=0)for(var a=e.state.markedSelection,i=e.state.markedSelectionStyle,c=t.line;;){var w=c==t.line?t:d(c,0),h=c+s,g=h>=r.line,b=g?r:d(h,0),k=e.markText(w,b,{className:i});if(n==null?a.push(k):a.splice(n++,0,k),g)break;c=h}}function u(e){for(var t=e.state.markedSelection,r=0;r<t.length;++r)t[r].clear();t.length=0}function v(e){u(e);for(var t=e.listSelections(),r=0;r<t.length;r++)f(e,t[r].from(),t[r].to())}function _(e){if(!e.somethingSelected())return u(e);if(e.listSelections().length>1)return v(e);var t=e.getCursor("start"),r=e.getCursor("end"),n=e.state.markedSelection;if(!n.length)return f(e,t,r);var a=n[0].find(),i=n[n.length-1].find();if(!a||!i||r.line-t.line<=s||o(t,i.to)>=0||o(r,a.from)<=0)return v(e);for(;o(t,a.from)>0;)n.shift().clear(),a=n[0].find();for(o(t,a.from)<0&&(a.to.line-t.line<s?(n.shift().clear(),f(e,t,a.to,0)):f(e,t,a.from,0));o(r,i.to)<0;)n.pop().clear(),i=n[n.length-1].find();o(r,i.to)>0&&(r.line-i.from.line<s?(n.pop().clear(),f(e,i.from,r)):f(e,i.to,r))}})}}]);

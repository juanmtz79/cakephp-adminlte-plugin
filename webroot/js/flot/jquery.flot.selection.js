(function(m){m.plot.plugins.push({init:function(c){function r(b){a.active&&(s(b),c.getPlaceholder().trigger("plotselecting",[q()]))}function t(b){1==b.which&&(document.body.focus(),void 0!==document.onselectstart&&null==h.onselectstart&&(h.onselectstart=document.onselectstart,document.onselectstart=function(){return!1}),void 0!==document.ondrag&&null==h.ondrag&&(h.ondrag=document.ondrag,document.ondrag=function(){return!1}),u(a.first,b),a.active=!0,n=function(b){n=null;void 0!==document.onselectstart&&
(document.onselectstart=h.onselectstart);void 0!==document.ondrag&&(document.ondrag=h.ondrag);a.active=!1;s(b);p()?v():(c.getPlaceholder().trigger("plotunselected",[]),c.getPlaceholder().trigger("plotselecting",[null]))},m(document).one("mouseup",n))}function q(){if(!p()||!a.show)return null;var b={},l=a.first,d=a.second;m.each(c.getAxes(),function(a,c){if(c.used){var f=c.c2p(l[c.direction]),k=c.c2p(d[c.direction]);b[a]={from:Math.min(f,k),to:Math.max(f,k)}}});return b}function v(){var b=q();c.getPlaceholder().trigger("plotselected",
[b]);b.xaxis&&b.yaxis&&c.getPlaceholder().trigger("selected",[{x1:b.xaxis.from,y1:b.yaxis.from,x2:b.xaxis.to,y2:b.yaxis.to}])}function u(b,l){var d=c.getOptions(),e=c.getPlaceholder().offset(),g=c.getPlotOffset(),f=l.pageX-e.left-g.left,k=c.width();b.x=0>f?0:f>k?k:f;e=l.pageY-e.top-g.top;g=c.height();b.y=0>e?0:e>g?g:e;"y"==d.selection.mode&&(b.x=b==a.first?0:c.width());"x"==d.selection.mode&&(b.y=b==a.first?0:c.height())}function s(b){null!=b.pageX&&(u(a.second,b),p()?(a.show=!0,c.triggerRedrawOverlay()):
w(!0))}function w(b){a.show&&(a.show=!1,c.triggerRedrawOverlay(),b||c.getPlaceholder().trigger("plotunselected",[]))}function x(b,a){var d,e,g,f,k=c.getAxes(),h;for(h in k)if(d=k[h],d.direction==a&&(f=a+d.n+"axis",b[f]||1!=d.n||(f=a+"axis"),b[f])){e=b[f].from;g=b[f].to;break}b[f]||(d="x"==a?c.getXAxes()[0]:c.getYAxes()[0],e=b[a+"1"],g=b[a+"2"]);null!=e&&null!=g&&e>g&&(f=e,e=g,g=f);return{from:e,to:g,axis:d}}function p(){var b=c.getOptions().selection.minSize;return Math.abs(a.second.x-a.first.x)>=
b&&Math.abs(a.second.y-a.first.y)>=b}var a={first:{x:-1,y:-1},second:{x:-1,y:-1},show:!1,active:!1},h={},n=null;c.clearSelection=w;c.setSelection=function(b,l){var d,e=c.getOptions();"y"==e.selection.mode?(a.first.x=0,a.second.x=c.width()):(d=x(b,"x"),a.first.x=d.axis.p2c(d.from),a.second.x=d.axis.p2c(d.to));"x"==e.selection.mode?(a.first.y=0,a.second.y=c.height()):(d=x(b,"y"),a.first.y=d.axis.p2c(d.from),a.second.y=d.axis.p2c(d.to));a.show=!0;c.triggerRedrawOverlay();!l&&p()&&v()};c.getSelection=
q;c.hooks.bindEvents.push(function(b,a){null!=b.getOptions().selection.mode&&(a.mousemove(r),a.mousedown(t))});c.hooks.drawOverlay.push(function(b,c){if(a.show&&p()){var d=b.getPlotOffset(),e=b.getOptions();c.save();c.translate(d.left,d.top);d=m.color.parse(e.selection.color);c.strokeStyle=d.scale("a",0.8).toString();c.lineWidth=1;c.lineJoin=e.selection.shape;c.fillStyle=d.scale("a",0.4).toString();var e=Math.min(a.first.x,a.second.x)+0.5,d=Math.min(a.first.y,a.second.y)+0.5,g=Math.abs(a.second.x-
a.first.x)-1,f=Math.abs(a.second.y-a.first.y)-1;c.fillRect(e,d,g,f);c.strokeRect(e,d,g,f);c.restore()}});c.hooks.shutdown.push(function(b,a){a.unbind("mousemove",r);a.unbind("mousedown",t);n&&m(document).unbind("mouseup",n)})},options:{selection:{mode:null,color:"#e8cfac",shape:"round",minSize:5}},name:"selection",version:"1.1"})})(jQuery);
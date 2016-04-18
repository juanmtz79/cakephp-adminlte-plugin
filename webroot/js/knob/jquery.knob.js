(function(d){"object"===typeof exports?module.exports=d(require("jquery")):"function"===typeof define&&define.amd?define(["jquery"],d):d(jQuery)})(function(d){var e,k,p,h=Math.max,l=Math.min;e={};e.d=d(document);e.t=function(a){return a.originalEvent.touches.length-1};k=function(){var a=this;this.cv=this.v=this.g=this.i=this.$=this.o=null;this.h=this.w=this.y=this.x=0;this.c=this.$c=null;this.t=0;this.isInit=!1;this.rH=this.eH=this.cH=this.dH=this.pColor=this.fgColor=null;this.scale=1;this.relativeHeight=
this.relativeWidth=this.relative=!1;this.$div=null;this.run=function(){var b=function(b,f){for(var d in f)a.o[d]=f[d];a._carve().init();a._configure()._draw()};if(!this.$.data("kontroled")){this.$.data("kontroled",!0);this.extend();this.o=d.extend({min:void 0!==this.$.data("min")?this.$.data("min"):0,max:void 0!==this.$.data("max")?this.$.data("max"):100,stopper:!0,readOnly:this.$.data("readonly")||"readonly"===this.$.attr("readonly"),cursor:!0===this.$.data("cursor")&&30||this.$.data("cursor")||
0,thickness:this.$.data("thickness")&&Math.max(Math.min(this.$.data("thickness"),1),0.01)||0.35,lineCap:this.$.data("linecap")||"butt",width:this.$.data("width")||200,height:this.$.data("height")||200,displayInput:null==this.$.data("displayinput")||this.$.data("displayinput"),displayPrevious:this.$.data("displayprevious"),fgColor:this.$.data("fgcolor")||"#87CEEB",inputColor:this.$.data("inputcolor"),font:this.$.data("font")||"Arial",fontWeight:this.$.data("font-weight")||"bold",inline:!1,step:this.$.data("step")||
1,rotation:this.$.data("rotation"),draw:null,change:null,cancel:null,release:null,format:function(a){return a},parse:function(a){return parseFloat(a)}},this.o);this.o.flip="anticlockwise"===this.o.rotation||"acw"===this.o.rotation;this.o.inputColor||(this.o.inputColor=this.o.fgColor);this.$.is("fieldset")?(this.v={},this.i=this.$.find("input"),this.i.each(function(b){var f=d(this);a.i[b]=f;a.v[b]=a.o.parse(f.val());f.bind("change blur",function(){var d={};d[b]=f.val();a.val(a._validate(d))})}),this.$.find("legend").remove()):
(this.i=this.$,this.v=this.o.parse(this.$.val()),""===this.v&&(this.v=this.o.min),this.$.bind("change blur",function(){a.val(a._validate(a.o.parse(a.$.val())))}));!this.o.displayInput&&this.$.hide();this.$c=d(document.createElement("canvas")).attr({width:this.o.width,height:this.o.height});this.$div=d('<div style="'+(this.o.inline?"display:inline;":"")+"width:"+this.o.width+"px;height:"+this.o.height+'px;"></div>');this.$.wrap(this.$div).before(this.$c);this.$div=this.$.parent();"undefined"!==typeof G_vmlCanvasManager&&
G_vmlCanvasManager.initElement(this.$c[0]);this.c=this.$c[0].getContext?this.$c[0].getContext("2d"):null;if(!this.c)throw{name:"CanvasNotSupportedException",message:"Canvas not supported. Please use excanvas on IE8.0.",toString:function(){return this.name+": "+this.message}};this.scale=(window.devicePixelRatio||1)/(this.c.webkitBackingStorePixelRatio||this.c.mozBackingStorePixelRatio||this.c.msBackingStorePixelRatio||this.c.oBackingStorePixelRatio||this.c.backingStorePixelRatio||1);this.relativeWidth=
0!==this.o.width%1&&this.o.width.indexOf("%");this.relativeHeight=0!==this.o.height%1&&this.o.height.indexOf("%");this.relative=this.relativeWidth||this.relativeHeight;this._carve();this.v instanceof Object?(this.cv={},this.copy(this.v,this.cv)):this.cv=this.v;this.$.bind("configure",b).parent().bind("configure",b);this._listen()._configure()._xy().init();this.isInit=!0;this.$.val(this.o.format(this.v));this._draw();return this}};this._carve=function(){if(this.relative){var a=this.relativeWidth?this.$div.parent().width()*
parseInt(this.o.width)/100:this.$div.parent().width(),c=this.relativeHeight?this.$div.parent().height()*parseInt(this.o.height)/100:this.$div.parent().height();this.w=this.h=Math.min(a,c)}else this.w=this.o.width,this.h=this.o.height;this.$div.css({width:this.w+"px",height:this.h+"px"});this.$c.attr({width:this.w,height:this.h});1!==this.scale&&(this.$c[0].width*=this.scale,this.$c[0].height*=this.scale,this.$c.width(this.w),this.$c.height(this.h));return this};this._draw=function(){var b=!0;a.g=
a.c;a.clear();a.dH&&(b=a.dH());!1!==b&&a.draw()};this._touch=function(b){var c=function(b){b=a.xy2val(b.originalEvent.touches[a.t].pageX,b.originalEvent.touches[a.t].pageY);b==a.cv||a.cH&&!1===a.cH(b)||(a.change(a._validate(b)),a._draw())};this.t=e.t(b);c(b);e.d.bind("touchmove.k",c).bind("touchend.k",function(){e.d.unbind("touchmove.k touchend.k");a.val(a.cv)});return this};this._mouse=function(b){var c=function(b){b=a.xy2val(b.pageX,b.pageY);b==a.cv||a.cH&&!1===a.cH(b)||(a.change(a._validate(b)),
a._draw())};c(b);e.d.bind("mousemove.k",c).bind("keyup.k",function(b){27===b.keyCode&&(e.d.unbind("mouseup.k mousemove.k keyup.k"),a.eH&&!1===a.eH()||a.cancel())}).bind("mouseup.k",function(b){e.d.unbind("mousemove.k mouseup.k keyup.k");a.val(a.cv)});return this};this._xy=function(){var a=this.$c.offset();this.x=a.left;this.y=a.top;return this};this._listen=function(){this.o.readOnly?this.$.attr("readonly","readonly"):(this.$c.bind("mousedown",function(b){b.preventDefault();a._xy()._mouse(b)}).bind("touchstart",
function(b){b.preventDefault();a._xy()._touch(b)}),this.listen());this.relative&&d(window).resize(function(){a._carve().init();a._draw()});return this};this._configure=function(){this.o.draw&&(this.dH=this.o.draw);this.o.change&&(this.cH=this.o.change);this.o.cancel&&(this.eH=this.o.cancel);this.o.release&&(this.rH=this.o.release);this.o.displayPrevious?(this.pColor=this.h2rgba(this.o.fgColor,"0.4"),this.fgColor=this.h2rgba(this.o.fgColor,"0.6")):this.fgColor=this.o.fgColor;return this};this._clear=
function(){this.$c[0].width=this.$c[0].width};this._validate=function(a){return Math.round(~~((0>a?-0.5:0.5)+a/this.o.step)*this.o.step*100)/100};this.listen=function(){};this.extend=function(){};this.init=function(){};this.change=function(a){};this.val=function(a){};this.xy2val=function(a,c){};this.draw=function(){};this.clear=function(){this._clear()};this.h2rgba=function(a,c){var d;a=a.substring(1,7);d=[parseInt(a.substring(0,2),16),parseInt(a.substring(2,4),16),parseInt(a.substring(4,6),16)];
return"rgba("+d[0]+","+d[1]+","+d[2]+","+c+")"};this.copy=function(a,c){for(var d in a)c[d]=a[d]}};p=function(){k.call(this);this.w2=this.cursorExt=this.lineWidth=this.radius=this.xy=this.startAngle=null;this.PI2=2*Math.PI;this.extend=function(){this.o=d.extend({bgColor:this.$.data("bgcolor")||"#EEEEEE",angleOffset:this.$.data("angleoffset")||0,angleArc:this.$.data("anglearc")||360,inline:!0},this.o)};this.val=function(a,b){if(null!=a)a=this.o.parse(a),!1!==b&&a!=this.v&&this.rH&&!1===this.rH(a)||
(this.v=this.cv=this.o.stopper?h(l(a,this.o.max),this.o.min):a,this.$.val(this.o.format(this.v)),this._draw());else return this.v};this.xy2val=function(a,b){var c;c=Math.atan2(a-(this.x+this.w2),-(b-this.y-this.w2))-this.angleOffset;this.o.flip&&(c=this.angleArc-c-this.PI2);this.angleArc!=this.PI2&&0>c&&-0.5<c?c=0:0>c&&(c+=this.PI2);c=c*(this.o.max-this.o.min)/this.angleArc+this.o.min;this.o.stopper&&(c=h(l(c,this.o.max),this.o.min));return c};this.listen=function(){var a=this,b,c,f=function(d){d.preventDefault();
var g=d.originalEvent;d=g.detail||g.wheelDeltaX;var g=g.detail||g.wheelDeltaY,e=a._validate(a.o.parse(a.$.val()))+(0<d||0<g?a.o.step:0>d||0>g?-a.o.step:0),e=h(l(e,a.o.max),a.o.min);a.val(e,!1);a.rH&&(clearTimeout(b),b=setTimeout(function(){a.rH(e);b=null},100),c||(c=setTimeout(function(){b&&a.rH(e);c=null},200)))},e,m,n=1,k={37:-a.o.step,38:a.o.step,39:a.o.step,40:-a.o.step};this.$.bind("keydown",function(b){var c=b.keyCode;96<=c&&105>=c&&(c=b.keyCode=c-48);e=parseInt(String.fromCharCode(c));isNaN(e)&&
(13!==c&&8!==c&&9!==c&&189!==c&&(190!==c||a.$.val().match(/\./))&&b.preventDefault(),-1<d.inArray(c,[37,38,39,40])&&(b.preventDefault(),b=a.o.parse(a.$.val())+k[c]*n,a.o.stopper&&(b=h(l(b,a.o.max),a.o.min)),a.change(a._validate(b)),a._draw(),m=window.setTimeout(function(){n*=2},30)))}).bind("keyup",function(b){isNaN(e)?m&&(window.clearTimeout(m),m=null,n=1,a.val(a.$.val())):a.$.val()>a.o.max&&a.$.val(a.o.max)||a.$.val()<a.o.min&&a.$.val(a.o.min)});this.$c.bind("mousewheel DOMMouseScroll",f);this.$.bind("mousewheel DOMMouseScroll",
f)};this.init=function(){if(this.v<this.o.min||this.v>this.o.max)this.v=this.o.min;this.$.val(this.v);this.w2=this.w/2;this.cursorExt=this.o.cursor/100;this.xy=this.w2*this.scale;this.lineWidth=this.xy*this.o.thickness;this.lineCap=this.o.lineCap;this.radius=this.xy-this.lineWidth/2;this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset);this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc);this.angleOffset=this.o.angleOffset*Math.PI/180;
this.angleArc=this.o.angleArc*Math.PI/180;this.startAngle=1.5*Math.PI+this.angleOffset;this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var a=h(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({width:(this.w/2+4>>0)+"px",height:(this.w/3>>0)+"px",position:"absolute","vertical-align":"middle","margin-top":(this.w/3>>0)+"px","margin-left":"-"+(3*this.w/4+2>>0)+"px",border:0,background:"none",font:this.o.fontWeight+" "+(this.w/a>>0)+
"px "+this.o.font,"text-align":"center",color:this.o.inputColor||this.o.fgColor,padding:"0px","-webkit-appearance":"none"})||this.i.css({width:"0px",visibility:"hidden"})};this.change=function(a){this.cv=a;this.$.val(this.o.format(a))};this.angle=function(a){return(a-this.o.min)*this.angleArc/(this.o.max-this.o.min)};this.arc=function(a){var b;a=this.angle(a);this.o.flip?(b=this.endAngle+1E-5,a=b-a-1E-5):(b=this.startAngle-1E-5,a=b+a+1E-5);this.o.cursor&&(b=a-this.cursorExt)&&(a+=this.cursorExt);
return{s:b,e:a,d:this.o.flip&&!this.o.cursor}};this.draw=function(){var a=this.g,b=this.arc(this.cv),c;c=1;a.lineWidth=this.lineWidth;a.lineCap=this.lineCap;"none"!==this.o.bgColor&&(a.beginPath(),a.strokeStyle=this.o.bgColor,a.arc(this.xy,this.xy,this.radius,this.endAngle-1E-5,this.startAngle+1E-5,!0),a.stroke());this.o.displayPrevious&&(c=this.arc(this.v),a.beginPath(),a.strokeStyle=this.pColor,a.arc(this.xy,this.xy,this.radius,c.s,c.e,c.d),a.stroke(),c=this.cv==this.v);a.beginPath();a.strokeStyle=
c?this.o.fgColor:this.fgColor;a.arc(this.xy,this.xy,this.radius,b.s,b.e,b.d);a.stroke()};this.cancel=function(){this.val(this.v)}};d.fn.dial=d.fn.knob=function(a){return this.each(function(){var b=new p;b.o=a;b.$=d(this);b.run()}).parent()}});

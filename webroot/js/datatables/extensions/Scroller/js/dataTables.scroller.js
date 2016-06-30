/*
   Copyright 2011-2014 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
*/
(function(p,q,n){var m=function(e,m){var g=function(a,b){!this instanceof g?alert("Scroller warning: Scroller must be initialised with the 'new' keyword."):("undefined"==typeof b&&(b={}),this.s={dt:a,tableTop:0,tableBottom:0,redrawTop:0,redrawBottom:0,autoHeight:!0,viewportRows:0,stateTO:null,drawTO:null,heights:{jump:null,page:null,virtual:null,scroll:null,row:null,viewport:null},topRowFloat:0,scrollDrawDiff:null,loaderVisible:!1},this.s=e.extend(this.s,g.oDefaults,b),this.s.heights.row=this.s.rowHeight,
this.dom={force:q.createElement("div"),scroller:null,table:null,loader:null},this.s.dt.oScroller=this,this._fnConstruct())};g.prototype={fnRowToPixels:function(a,b,c){a=c?this._domain("virtualToPhysical",a*this.s.heights.row):this.s.baseScrollTop+(a-this.s.baseRowTop)*this.s.heights.row;return b||b===n?parseInt(a,10):a},fnPixelsToRow:function(a,b,c){var d=a-this.s.baseScrollTop;a=c?this._domain("physicalToVirtual",a)/this.s.heights.row:d/this.s.heights.row+this.s.baseRowTop;return b||b===n?parseInt(a,
10):a},fnScrollToRow:function(a,b){var c=this,d=!1,f=this.fnRowToPixels(a),h=a-(this.s.displayBuffer-1)/2*this.s.viewportRows;0>h&&(h=0);(f>this.s.redrawBottom||f<this.s.redrawTop)&&this.s.dt._iDisplayStart!==h&&(d=!0,f=this.fnRowToPixels(a,!1,!0));"undefined"==typeof b||b?(this.s.ani=d,e(this.dom.scroller).animate({scrollTop:f},function(){setTimeout(function(){c.s.ani=!1},25)})):e(this.dom.scroller).scrollTop(f)},fnMeasure:function(a){this.s.autoHeight&&this._fnCalcRowHeight();var b=this.s.heights;
b.viewport=e(this.dom.scroller).height();this.s.viewportRows=parseInt(b.viewport/b.row,10)+1;this.s.dt._iDisplayLength=this.s.viewportRows*this.s.displayBuffer;(a===n||a)&&this.s.dt.oInstance.fnDraw()},_fnConstruct:function(){var a=this;if(this.s.dt.oFeatures.bPaginate){this.dom.force.style.position="absolute";this.dom.force.style.top="0px";this.dom.force.style.left="0px";this.dom.force.style.width="1px";this.dom.scroller=e("div."+this.s.dt.oClasses.sScrollBody,this.s.dt.nTableWrapper)[0];this.dom.scroller.appendChild(this.dom.force);
this.dom.scroller.style.position="relative";this.dom.table=e(">table",this.dom.scroller)[0];this.dom.table.style.position="absolute";this.dom.table.style.top="0px";this.dom.table.style.left="0px";e(this.s.dt.nTableWrapper).addClass("DTS");this.s.loadingIndicator&&(this.dom.loader=e('<div class="DTS_Loading">'+this.s.dt.oLanguage.sLoadingRecords+"</div>").css("display","none"),e(this.dom.scroller.parentNode).css("position","relative").append(this.dom.loader));this.s.heights.row&&"auto"!=this.s.heights.row&&
(this.s.autoHeight=!1);this.fnMeasure(!1);this.s.ingnoreScroll=!0;this.s.stateSaveThrottle=this.s.dt.oApi._fnThrottle(function(){a.s.dt.oApi._fnSaveState(a.s.dt)},500);e(this.dom.scroller).on("scroll.DTS",function(b){a._fnScroll.call(a)});e(this.dom.scroller).on("touchstart.DTS",function(){a._fnScroll.call(a)});this.s.dt.aoDrawCallback.push({fn:function(){a.s.dt.bInitialised&&a._fnDrawCallback.call(a)},sName:"Scroller"});e(p).on("resize.DTS",function(){a.fnMeasure(!1);a._fnInfo()});var b=!0;this.s.dt.oApi._fnCallbackReg(this.s.dt,
"aoStateSaveParams",function(c,d){b&&a.s.dt.oLoadedState?(d.iScroller=a.s.dt.oLoadedState.iScroller,d.iScrollerTopRow=a.s.dt.oLoadedState.iScrollerTopRow,b=!1):(d.iScroller=a.dom.scroller.scrollTop,d.iScrollerTopRow=a.s.topRowFloat)},"Scroller_State");this.s.dt.oLoadedState&&(this.s.topRowFloat=this.s.dt.oLoadedState.iScrollerTopRow||0);this.s.dt.aoDestroyCallback.push({sName:"Scroller",fn:function(){e(p).off("resize.DTS");e(a.dom.scroller).off("touchstart.DTS scroll.DTS");e(a.s.dt.nTableWrapper).removeClass("DTS");
e("div.DTS_Loading",a.dom.scroller.parentNode).remove();a.dom.table.style.position="";a.dom.table.style.top="";a.dom.table.style.left=""}})}else this.s.dt.oApi._fnLog(this.s.dt,0,"Pagination must be enabled for Scroller")},_fnScroll:function(){var a=this,b=this.s.heights,c=this.dom.scroller.scrollTop,d;if(!this.s.skip&&!this.s.ingnoreScroll)if(this.s.dt.bFiltered||this.s.dt.bSorted)this.s.lastScrollTop=0;else{this._fnInfo();clearTimeout(this.s.stateTO);this.s.stateTO=setTimeout(function(){a.s.dt.oApi._fnSaveState(a.s.dt)},
250);if(c<this.s.redrawTop||c>this.s.redrawBottom){var f=Math.ceil((this.s.displayBuffer-1)/2*this.s.viewportRows);Math.abs(c-this.s.lastScrollTop)>b.viewport||this.s.ani?(d=parseInt(this._domain("physicalToVirtual",c)/b.row,10)-f,this.s.topRowFloat=this._domain("physicalToVirtual",c)/b.row):(d=this.fnPixelsToRow(c)-f,this.s.topRowFloat=this.fnPixelsToRow(c,!1));0>=d?d=0:d+this.s.dt._iDisplayLength>this.s.dt.fnRecordsDisplay()?(d=this.s.dt.fnRecordsDisplay()-this.s.dt._iDisplayLength,0>d&&(d=0)):
0!==d%2&&d++;d!=this.s.dt._iDisplayStart&&(this.s.tableTop=e(this.s.dt.nTable).offset().top,this.s.tableBottom=e(this.s.dt.nTable).height()+this.s.tableTop,b=function(){null===a.s.scrollDrawReq&&(a.s.scrollDrawReq=c);a.s.dt._iDisplayStart=d;a.s.dt.oApi._fnCalculateEnd&&a.s.dt.oApi._fnCalculateEnd(a.s.dt);a.s.dt.oApi._fnDraw(a.s.dt)},this.s.dt.oFeatures.bServerSide?(clearTimeout(this.s.drawTO),this.s.drawTO=setTimeout(b,this.s.serverWait)):b(),this.dom.loader&&!this.s.loaderVisible&&(this.dom.loader.css("display",
"block"),this.s.loaderVisible=!0))}this.s.lastScrollTop=c;this.s.stateSaveThrottle()}},_domain:function(a,b){var c=this.s.heights,d;if(c.virtual===c.scroll){d=(c.virtual-c.viewport)/(c.scroll-c.viewport);if("virtualToPhysical"===a)return b/d;if("physicalToVirtual"===a)return b*d}var e=(c.scroll-c.viewport)/2,h=(c.virtual-c.viewport)/2;d=h/(e*e);if("virtualToPhysical"===a){if(b<h)return Math.pow(b/d,0.5);b=2*h-b;return 0>b?c.scroll:2*e-Math.pow(b/d,0.5)}if("physicalToVirtual"===a){if(b<e)return b*
b*d;b=2*e-b;return 0>b?c.virtual:2*h-b*b*d}},_fnDrawCallback:function(){var a=this,b=this.s.heights,c=this.dom.scroller.scrollTop,d=e(this.s.dt.nTable).height(),f=this.s.dt._iDisplayStart,h=this.s.dt._iDisplayLength,g=this.s.dt.fnRecordsDisplay();this.s.skip=!0;this._fnScrollForce();c=0===f?this.s.topRowFloat*b.row:f+h>=g?b.scroll-(g-this.s.topRowFloat)*b.row:this._domain("virtualToPhysical",this.s.topRowFloat*b.row);this.dom.scroller.scrollTop=c;this.s.baseScrollTop=c;this.s.baseRowTop=this.s.topRowFloat;
var l=c-(this.s.topRowFloat-f)*b.row;0===f?l=0:f+h>=g&&(l=b.scroll-d);this.dom.table.style.top=l+"px";this.s.tableTop=l;this.s.tableBottom=d+this.s.tableTop;d=(c-this.s.tableTop)*this.s.boundaryScale;this.s.redrawTop=c-d;this.s.redrawBottom=c+d;this.s.skip=!1;this.s.dt.oFeatures.bStateSave&&null!==this.s.dt.oLoadedState&&"undefined"!=typeof this.s.dt.oLoadedState.iScroller?((c=!this.s.dt.sAjaxSource&&!a.s.dt.ajax||this.s.dt.oFeatures.bServerSide?!1:!0)&&2==this.s.dt.iDraw||!c&&1==this.s.dt.iDraw)&&
setTimeout(function(){e(a.dom.scroller).scrollTop(a.s.dt.oLoadedState.iScroller);a.s.redrawTop=a.s.dt.oLoadedState.iScroller-b.viewport/2;setTimeout(function(){a.s.ingnoreScroll=!1},0)},0):a.s.ingnoreScroll=!1;setTimeout(function(){a._fnInfo.call(a)},0);this.dom.loader&&this.s.loaderVisible&&(this.dom.loader.css("display","none"),this.s.loaderVisible=!1)},_fnScrollForce:function(){var a=this.s.heights;a.virtual=a.row*this.s.dt.fnRecordsDisplay();a.scroll=a.virtual;1E6<a.scroll&&(a.scroll=1E6);this.dom.force.style.height=
a.scroll+"px"},_fnCalcRowHeight:function(){var a=this.s.dt,b=a.nTable,c=b.cloneNode(!1),d=e("<tbody/>").appendTo(c),f=e('<div class="'+a.oClasses.sWrapper+' DTS"><div class="'+a.oClasses.sScrollWrapper+'"><div class="'+a.oClasses.sScrollBody+'"></div></div></div>');for(e("tbody tr:lt(4)",b).clone().appendTo(d);3>e("tr",d).length;)d.append("<tr><td>&nbsp;</td></tr>");e("div."+a.oClasses.sScrollBody,f).append(c);a._bInitComplete?a=b.parentNode:(this.s.dt.nHolding||(this.s.dt.nHolding=e("<div></div>").insertBefore(this.s.dt.nTable)),
a=this.s.dt.nHolding);f.appendTo(a);this.s.heights.row=e("tr",d).eq(1).outerHeight();f.remove()},_fnInfo:function(){if(this.s.dt.oFeatures.bInfo){var a=this.s.dt,b=a.oLanguage,c=this.dom.scroller.scrollTop,d=Math.floor(this.fnPixelsToRow(c,!1,this.s.ani)+1),f=a.fnRecordsTotal(),h=a.fnRecordsDisplay(),c=Math.ceil(this.fnPixelsToRow(c+this.s.heights.viewport,!1,this.s.ani)),c=h<c?h:c,g=a.fnFormatNumber(d),l=a.fnFormatNumber(c),k=a.fnFormatNumber(f),m=a.fnFormatNumber(h),g=0===a.fnRecordsDisplay()&&
a.fnRecordsDisplay()==a.fnRecordsTotal()?b.sInfoEmpty+b.sInfoPostFix:0===a.fnRecordsDisplay()?b.sInfoEmpty+" "+b.sInfoFiltered.replace("_MAX_",k)+b.sInfoPostFix:a.fnRecordsDisplay()==a.fnRecordsTotal()?b.sInfo.replace("_START_",g).replace("_END_",l).replace("_MAX_",k).replace("_TOTAL_",m)+b.sInfoPostFix:b.sInfo.replace("_START_",g).replace("_END_",l).replace("_MAX_",k).replace("_TOTAL_",m)+" "+b.sInfoFiltered.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()))+b.sInfoPostFix;(b=b.fnInfoCallback)&&
(g=b.call(a.oInstance,a,d,c,f,h,g));a=a.aanFeatures.i;if("undefined"!=typeof a)for(d=0,f=a.length;d<f;d++)e(a[d]).html(g)}}};g.defaults={trace:!1,rowHeight:"auto",serverWait:200,displayBuffer:9,boundaryScale:0.5,loadingIndicator:!1};g.oDefaults=g.defaults;g.version="1.2.2";"function"==typeof e.fn.dataTable&&"function"==typeof e.fn.dataTableExt.fnVersionCheck&&e.fn.dataTableExt.fnVersionCheck("1.9.0")?e.fn.dataTableExt.aoFeatures.push({fnInit:function(a){var b=a.oInit;return(new g(a,b.scroller||b.oScroller||
{})).dom.wrapper},cFeature:"S",sFeature:"Scroller"}):alert("Warning: Scroller requires DataTables 1.9.0 or greater - www.datatables.net/download");e.fn.dataTable.Scroller=g;e.fn.DataTable.Scroller=g;if(e.fn.dataTable.Api){var k=e.fn.dataTable.Api;k.register("scroller()",function(){return this});k.register("scroller().rowToPixels()",function(a,b,c){var d=this.context;if(d.length&&d[0].oScroller)return d[0].oScroller.fnRowToPixels(a,b,c)});k.register("scroller().pixelsToRow()",function(a,b,c){var d=
this.context;if(d.length&&d[0].oScroller)return d[0].oScroller.fnPixelsToRow(a,b,c)});k.register("scroller().scrollToRow()",function(a,b){this.iterator("table",function(c){c.oScroller&&c.oScroller.fnScrollToRow(a,b)});return this});k.register("scroller().measure()",function(a){this.iterator("table",function(b){b.oScroller&&b.oScroller.fnMeasure(a)});return this})}return g};"function"===typeof define&&define.amd?define(["jquery","datatables"],m):"object"===typeof exports?m(require("jquery"),require("datatables")):
jQuery&&!jQuery.fn.dataTable.Scroller&&m(jQuery,jQuery.fn.dataTable)})(window,document);

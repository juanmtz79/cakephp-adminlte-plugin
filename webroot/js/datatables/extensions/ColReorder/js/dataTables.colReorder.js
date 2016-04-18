/*
   Copyright 2010-2014 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
*/
(function(r,u,v){function s(d){for(var h=[],f=0,a=d.length;f<a;f++)h[d[f]]=f;return h}function p(d,h,f){h=d.splice(h,1)[0];d.splice(f,0,h)}function t(d,h,f){for(var a=[],b=0,e=d.childNodes.length;b<e;b++)1==d.childNodes[b].nodeType&&a.push(d.childNodes[b]);h=a[h];null!==f?d.insertBefore(h,a[f]):d.appendChild(h)}r=function(d,h){d.fn.dataTableExt.oApi.fnColReorder=function(a,b,e){var k=d.fn.dataTable.Api?!0:!1,c,g,f,h,q=a.aoColumns.length,l,m;l=function(a,b,c){if(a[b]){var e=a[b].split("."),d=e.shift();
isNaN(1*d)||(a[b]=c[1*d]+"."+e.join("."))}};if(b!=e)if(0>b||b>=q)this.oApi._fnLog(a,1,"ColReorder 'from' index is out of bounds: "+b);else if(0>e||e>=q)this.oApi._fnLog(a,1,"ColReorder 'to' index is out of bounds: "+e);else{f=[];c=0;for(g=q;c<g;c++)f[c]=c;p(f,b,e);var n=s(f);c=0;for(g=a.aaSorting.length;c<g;c++)a.aaSorting[c][0]=n[a.aaSorting[c][0]];if(null!==a.aaSortingFixed)for(c=0,g=a.aaSortingFixed.length;c<g;c++)a.aaSortingFixed[c][0]=n[a.aaSortingFixed[c][0]];c=0;for(g=q;c<g;c++){m=a.aoColumns[c];
f=0;for(h=m.aDataSort.length;f<h;f++)m.aDataSort[f]=n[m.aDataSort[f]];k&&(m.idx=n[m.idx])}k&&d.each(a.aLastSort,function(b,c){a.aLastSort[b].src=n[c.src]});c=0;for(g=q;c<g;c++)m=a.aoColumns[c],"number"==typeof m.mData?(m.mData=n[m.mData],a.oApi._fnColumnOptions(a,c,{})):d.isPlainObject(m.mData)&&(l(m.mData,"_",n),l(m.mData,"filter",n),l(m.mData,"sort",n),l(m.mData,"type",n),a.oApi._fnColumnOptions(a,c,{}));if(a.aoColumns[b].bVisible){f=this.oApi._fnColumnIndexToVisible(a,b);h=null;for(c=e<b?e:e+1;null===
h&&c<q;)h=this.oApi._fnColumnIndexToVisible(a,c),c++;l=a.nTHead.getElementsByTagName("tr");c=0;for(g=l.length;c<g;c++)t(l[c],f,h);if(null!==a.nTFoot)for(l=a.nTFoot.getElementsByTagName("tr"),c=0,g=l.length;c<g;c++)t(l[c],f,h);c=0;for(g=a.aoData.length;c<g;c++)null!==a.aoData[c].nTr&&t(a.aoData[c].nTr,f,h)}p(a.aoColumns,b,e);p(a.aoPreSearchCols,b,e);c=0;for(g=a.aoData.length;c<g;c++)l=a.aoData[c],k?(l.anCells&&p(l.anCells,b,e),"dom"!==l.src&&d.isArray(l._aData)&&p(l._aData,b,e)):(d.isArray(l._aData)&&
p(l._aData,b,e),p(l._anHidden,b,e));c=0;for(g=a.aoHeader.length;c<g;c++)p(a.aoHeader[c],b,e);if(null!==a.aoFooter)for(c=0,g=a.aoFooter.length;c<g;c++)p(a.aoFooter[c],b,e);k&&(new d.fn.dataTable.Api(a)).rows().invalidate();c=0;for(g=q;c<g;c++)d(a.aoColumns[c].nTh).off("click.DT"),this.oApi._fnSortAttachListener(a,a.aoColumns[c].nTh,c);d(a.oInstance).trigger("column-reorder",[a,{iFrom:b,iTo:e,aiInvertMapping:n}])}};var f=function(a,b){var e;d.fn.dataTable.Api?e=(new d.fn.dataTable.Api(a)).settings()[0]:
a.fnSettings?e=a.fnSettings():"string"===typeof a?d.fn.dataTable.fnIsDataTable(d(a)[0])&&(e=d(a).eq(0).dataTable().fnSettings()):a.nodeName&&"table"===a.nodeName.toLowerCase()?d.fn.dataTable.fnIsDataTable(a.nodeName)&&(e=d(a.nodeName).dataTable().fnSettings()):a instanceof jQuery?d.fn.dataTable.fnIsDataTable(a[0])&&(e=a.eq(0).dataTable().fnSettings()):e=a;if(e._colReorder)throw"ColReorder already initialised on table #"+e.nTable.id;var k=d.fn.dataTable.camelToHungarian;k&&(k(f.defaults,f.defaults,
!0),k(f.defaults,b||{}));this.s={dt:null,init:d.extend(!0,{},f.defaults,b),fixed:0,fixedRight:0,reorderCallback:null,mouse:{startX:-1,startY:-1,offsetX:-1,offsetY:-1,target:-1,targetIndex:-1,fromIndex:-1},aoTargets:[]};this.dom={drag:null,pointer:null};this.s.dt=e;this.s.dt._colReorder=this;this._fnConstruct();e.oApi._fnCallbackReg(e,"aoDestroyCallback",d.proxy(this._fnDestroy,this),"ColReorder");return this};f.prototype={fnReset:function(){for(var a=[],b=0,e=this.s.dt.aoColumns.length;b<e;b++)a.push(this.s.dt.aoColumns[b]._ColReorder_iOrigCol);
this._fnOrderColumns(a);return this},fnGetCurrentOrder:function(){return this.fnOrder()},fnOrder:function(a){if(a===v){a=[];for(var b=0,e=this.s.dt.aoColumns.length;b<e;b++)a.push(this.s.dt.aoColumns[b]._ColReorder_iOrigCol);return a}this._fnOrderColumns(s(a));return this},_fnConstruct:function(){var a=this,b=this.s.dt.aoColumns.length,e;this.s.init.iFixedColumns&&(this.s.fixed=this.s.init.iFixedColumns);this.s.fixedRight=this.s.init.iFixedColumnsRight?this.s.init.iFixedColumnsRight:0;this.s.init.fnReorderCallback&&
(this.s.reorderCallback=this.s.init.fnReorderCallback);for(e=0;e<b;e++)e>this.s.fixed-1&&e<b-this.s.fixedRight&&this._fnMouseListener(e,this.s.dt.aoColumns[e].nTh),this.s.dt.aoColumns[e]._ColReorder_iOrigCol=e;this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(b,c){a._fnStateSave.call(a,c)},"ColReorder_State");var d=null;this.s.init.aiOrder&&(d=this.s.init.aiOrder.slice());this.s.dt.oLoadedState&&"undefined"!=typeof this.s.dt.oLoadedState.ColReorder&&this.s.dt.oLoadedState.ColReorder.length==
this.s.dt.aoColumns.length&&(d=this.s.dt.oLoadedState.ColReorder);if(d)if(a.s.dt._bInitComplete)b=s(d),a._fnOrderColumns.call(a,b);else{var c=!1;this.s.dt.aoDrawCallback.push({fn:function(){if(!a.s.dt._bInitComplete&&!c){c=!0;var b=s(d);a._fnOrderColumns.call(a,b)}},sName:"ColReorder_Pre"})}else this._fnSetColumnIndexes()},_fnOrderColumns:function(a){if(a.length!=this.s.dt.aoColumns.length)this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"ColReorder - array reorder does not match known number of columns. Skipping.");
else{for(var b=0,e=a.length;b<e;b++){var k=d.inArray(b,a);b!=k&&(p(a,k,b),this.s.dt.oInstance.fnColReorder(k,b))}""===this.s.dt.oScroll.sX&&""===this.s.dt.oScroll.sY||this.s.dt.oInstance.fnAdjustColumnSizing(!1);this.s.dt.oInstance.oApi._fnSaveState(this.s.dt);this._fnSetColumnIndexes();null!==this.s.reorderCallback&&this.s.reorderCallback.call(this)}},_fnStateSave:function(a){var b,e,k,c=this.s.dt.aoColumns;a.ColReorder=[];if(a.aaSorting){for(b=0;b<a.aaSorting.length;b++)a.aaSorting[b][0]=c[a.aaSorting[b][0]]._ColReorder_iOrigCol;
var f=d.extend(!0,[],a.aoSearchCols);b=0;for(e=c.length;b<e;b++)k=c[b]._ColReorder_iOrigCol,a.aoSearchCols[k]=f[b],a.abVisCols[k]=c[b].bVisible,a.ColReorder.push(k)}else if(a.order){for(b=0;b<a.order.length;b++)a.order[b][0]=c[a.order[b][0]]._ColReorder_iOrigCol;f=d.extend(!0,[],a.columns);b=0;for(e=c.length;b<e;b++)k=c[b]._ColReorder_iOrigCol,a.columns[k]=f[b],a.ColReorder.push(k)}},_fnMouseListener:function(a,b){var e=this;d(b).on("mousedown.ColReorder",function(a){a.preventDefault();e._fnMouseDown.call(e,
a,b)})},_fnMouseDown:function(a,b){var e=this,f=d(a.target).closest("th, td").offset(),c=parseInt(d(b).attr("data-column-index"),10);c!==v&&(this.s.mouse.startX=a.pageX,this.s.mouse.startY=a.pageY,this.s.mouse.offsetX=a.pageX-f.left,this.s.mouse.offsetY=a.pageY-f.top,this.s.mouse.target=this.s.dt.aoColumns[c].nTh,this.s.mouse.targetIndex=c,this.s.mouse.fromIndex=c,this._fnRegions(),d(u).on("mousemove.ColReorder",function(a){e._fnMouseMove.call(e,a)}).on("mouseup.ColReorder",function(a){e._fnMouseUp.call(e,
a)}))},_fnMouseMove:function(a){if(null===this.dom.drag){if(5>Math.pow(Math.pow(a.pageX-this.s.mouse.startX,2)+Math.pow(a.pageY-this.s.mouse.startY,2),0.5))return;this._fnCreateDragNode()}this.dom.drag.css({left:a.pageX-this.s.mouse.offsetX,top:a.pageY-this.s.mouse.offsetY});for(var b=!1,d=this.s.mouse.toIndex,f=1,c=this.s.aoTargets.length;f<c;f++)if(a.pageX<this.s.aoTargets[f-1].x+(this.s.aoTargets[f].x-this.s.aoTargets[f-1].x)/2){this.dom.pointer.css("left",this.s.aoTargets[f-1].x);this.s.mouse.toIndex=
this.s.aoTargets[f-1].to;b=!0;break}b||(this.dom.pointer.css("left",this.s.aoTargets[this.s.aoTargets.length-1].x),this.s.mouse.toIndex=this.s.aoTargets[this.s.aoTargets.length-1].to);this.s.init.bRealtime&&d!==this.s.mouse.toIndex&&(this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this.s.mouse.fromIndex=this.s.mouse.toIndex,this._fnRegions())},_fnMouseUp:function(a){d(u).off("mousemove.ColReorder mouseup.ColReorder");null!==this.dom.drag&&(this.dom.drag.remove(),this.dom.pointer.remove(),
this.dom.drag=null,this.dom.pointer=null,this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this._fnSetColumnIndexes(),""===this.s.dt.oScroll.sX&&""===this.s.dt.oScroll.sY||this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this))},_fnRegions:function(){var a=this.s.dt.aoColumns;this.s.aoTargets.splice(0,this.s.aoTargets.length);this.s.aoTargets.push({x:d(this.s.dt.nTable).offset().left,
to:0});for(var b=0,e=0,f=a.length;e<f;e++)e!=this.s.mouse.fromIndex&&b++,a[e].bVisible&&this.s.aoTargets.push({x:d(a[e].nTh).offset().left+d(a[e].nTh).outerWidth(),to:b});0!==this.s.fixedRight&&this.s.aoTargets.splice(this.s.aoTargets.length-this.s.fixedRight);0!==this.s.fixed&&this.s.aoTargets.splice(0,this.s.fixed)},_fnCreateDragNode:function(){var a=""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY,b=this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,e=b.parentNode,f=e.parentNode,c=f.parentNode,
g=d(b).clone();this.dom.drag=d(c.cloneNode(!1)).addClass("DTCR_clonedTable").append(d(f.cloneNode(!1)).append(d(e.cloneNode(!1)).append(g[0]))).css({position:"absolute",top:0,left:0,width:d(b).outerWidth(),height:d(b).outerHeight()}).appendTo("body");this.dom.pointer=d("<div></div>").addClass("DTCR_pointer").css({position:"absolute",top:a?d("div.dataTables_scroll",this.s.dt.nTableWrapper).offset().top:d(this.s.dt.nTable).offset().top,height:a?d("div.dataTables_scroll",this.s.dt.nTableWrapper).height():
d(this.s.dt.nTable).height()}).appendTo("body")},_fnDestroy:function(){var a,b;a=0;for(b=this.s.dt.aoDrawCallback.length;a<b;a++)if("ColReorder_Pre"===this.s.dt.aoDrawCallback[a].sName){this.s.dt.aoDrawCallback.splice(a,1);break}d(this.s.dt.nTHead).find("*").off(".ColReorder");d.each(this.s.dt.aoColumns,function(a,b){d(b.nTh).removeAttr("data-column-index")});this.s=this.s.dt._colReorder=null},_fnSetColumnIndexes:function(){d.each(this.s.dt.aoColumns,function(a,b){d(b.nTh).attr("data-column-index",
a)})}};f.defaults={aiOrder:null,bRealtime:!1,iFixedColumns:0,iFixedColumnsRight:0,fnReorderCallback:null};f.version="1.1.3";d.fn.dataTable.ColReorder=f;d.fn.DataTable.ColReorder=f;"function"==typeof d.fn.dataTable&&"function"==typeof d.fn.dataTableExt.fnVersionCheck&&d.fn.dataTableExt.fnVersionCheck("1.9.3")?d.fn.dataTableExt.aoFeatures.push({fnInit:function(a){var b=a.oInstance;a._colReorder?b.oApi._fnLog(a,1,"ColReorder attempted to initialise twice. Ignoring second"):(b=a.oInit,new f(a,b.colReorder||
b.oColReorder||{}));return null},cFeature:"R",sFeature:"ColReorder"}):alert("Warning: ColReorder requires DataTables 1.9.3 or greater - www.datatables.net/download");d.fn.dataTable.Api&&(d.fn.dataTable.Api.register("colReorder.reset()",function(){return this.iterator("table",function(a){a._colReorder.fnReset()})}),d.fn.dataTable.Api.register("colReorder.order()",function(a){return a?this.iterator("table",function(b){b._colReorder.fnOrder(a)}):this.context.length?this.context[0]._colReorder.fnOrder():
null}));return f};"function"===typeof define&&define.amd?define(["jquery","datatables"],r):"object"===typeof exports?r(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.ColReorder&&r(jQuery,jQuery.fn.dataTable)})(window,document);

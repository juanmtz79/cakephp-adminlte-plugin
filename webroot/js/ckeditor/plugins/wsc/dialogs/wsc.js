(function(){function y(a){if(!a)throw"Languages-by-groups list are required for construct selectbox";var c=[],d="",f;for(f in a)for(var h in a[f]){var e=a[f][h];"en_US"==e?d=e:c.push(e)}c.sort();d&&c.unshift(d);return{getCurrentLangGroup:function(c){a:{for(var d in a)for(var f in a[d])if(f.toUpperCase()===c.toUpperCase()){c=d;break a}c=""}return c},setLangList:function(){var c={},d;for(d in a)for(var f in a[d])c[a[d][f]]=f;return c}()}}var g=function(){var a=function(a,b,f){f=f||{};var h=f.expires;
if("number"==typeof h&&h){var e=new Date;e.setTime(e.getTime()+1E3*h);h=f.expires=e}h&&h.toUTCString&&(f.expires=h.toUTCString());b=encodeURIComponent(b);a=a+"="+b;for(var g in f)b=f[g],a+="; "+g,!0!==b&&(a+="="+b);document.cookie=a};return{postMessage:{init:function(a){document.addEventListener?window.addEventListener("message",a,!1):window.attachEvent("onmessage",a)},send:function(a){var b=a.fn||null,f=a.id||"",h=a.target||window,e=a.message||{id:f};"[object Object]"==Object.prototype.toString.call(a.message)&&
(a.message.id||(a.message.id=f),e=a.message);a=window.JSON.stringify(e,b);h.postMessage(a,"*")}},hash:{create:function(){},parse:function(){}},cookie:{set:a,get:function(a){return(a=document.cookie.match(RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(a[1]):void 0},remove:function(c){a(c,"",{expires:-1})}}}}(),a=a||{};a.TextAreaNumber=null;a.load=!0;a.cmd={SpellTab:"spell",Thesaurus:"thes",GrammTab:"grammar"};a.dialog=null;a.optionNode=null;a.selectNode=
null;a.grammerSuggest=null;a.textNode={};a.iframeMain=null;a.dataTemp="";a.div_overlay=null;a.textNodeInfo={};a.selectNode={};a.selectNodeResponce={};a.langList=null;a.langSelectbox=null;a.banner="";a.show_grammar=null;a.div_overlay_no_check=null;a.targetFromFrame={};a.onLoadOverlay=null;a.LocalizationComing={};a.OverlayPlace=null;a.LocalizationButton={ChangeTo:{instance:null,text:"Change to"},ChangeAll:{instance:null,text:"Change All"},IgnoreWord:{instance:null,text:"Ignore word"},IgnoreAllWords:{instance:null,
text:"Ignore all words"},Options:{instance:null,text:"Options",optionsDialog:{instance:null}},AddWord:{instance:null,text:"Add word"},FinishChecking:{instance:null,text:"Finish Checking"}};a.LocalizationLabel={ChangeTo:{instance:null,text:"Change to"},Suggestions:{instance:null,text:"Suggestions"}};var z=function(b){for(var c in b)b[c].instance.getElement().setText(a.LocalizationComing[c])},A=function(b){for(var c in b){if(!b[c].instance.setLabel)break;b[c].instance.setLabel(a.LocalizationComing[c])}},
n,r;a.framesetHtml=function(b){return'<iframe src="'+a.templatePath+'" id='+a.iframeNumber+"_"+b+' frameborder="0" allowtransparency="1" style="width:100%;border: 1px solid #AEB3B9;overflow: auto;background:#fff; border-radius: 3px;"></iframe>'};a.setIframe=function(b,c){var d=a.framesetHtml(c);return b.getElement().setHtml(d)};a.setCurrentIframe=function(b){a.setIframe(a.dialog._.contents[b].Content,b)};a.setHeightBannerFrame=function(){var b=a.dialog.getContentElement("SpellTab","banner").getElement(),
c=a.dialog.getContentElement("GrammTab","banner").getElement(),d=a.dialog.getContentElement("Thesaurus","banner").getElement();b.setStyle("height","90px");c.setStyle("height","90px");d.setStyle("height","90px")};a.setHeightFrame=function(){document.getElementById(a.iframeNumber+"_"+a.dialog._.currentTabId).style.height="240px"};a.sendData=function(b){var c=b._.currentTabId,d=b._.contents[c].Content,f,h;a.setIframe(d,c);b.parts.tabs.removeAllListeners();b.parts.tabs.on("click",function(e){e=e||window.event;
e.data.getTarget().is("a")&&c!=b._.currentTabId&&(c=b._.currentTabId,d=b._.contents[c].Content,f=a.iframeNumber+"_"+c,a.div_overlay.setEnable(),d.getElement().getChildCount()?v(a.targetFromFrame[f],a.cmd[c]):(a.setIframe(d,c),h=document.getElementById(f),a.targetFromFrame[f]=h.contentWindow))})};a.buildSelectLang=function(a){var c=new CKEDITOR.dom.element("div"),d=new CKEDITOR.dom.element("select");a="wscLang"+a;c.addClass("cke_dialog_ui_input_select");c.setAttribute("role","presentation");c.setStyles({height:"auto",
position:"absolute",right:"0",top:"-1px",width:"160px","white-space":"normal"});d.setAttribute("id",a);d.addClass("cke_dialog_ui_input_select");d.setStyles({width:"160px"});c.append(d);return c};a.buildOptionLang=function(b,c){var d=document.getElementById("wscLang"+c),f=document.createDocumentFragment(),h,e,g=[];if(0===d.options.length){for(h in b)g.push([h,b[h]]);g.sort();for(var l=0;l<g.length;l++)h=document.createElement("option"),h.setAttribute("value",g[l][1]),e=document.createTextNode(g[l][0]),
h.appendChild(e),g[l][1]==a.selectingLang&&h.setAttribute("selected","selected"),f.appendChild(h);d.appendChild(f)}};a.buildOptionSynonyms=function(b){b=a.selectNodeResponce[b];a.selectNode.synonyms.clear();for(var c=0;c<b.length;c++)a.selectNode.synonyms.add(b[c],b[c]);a.selectNode.synonyms.getInputElement().$.firstChild.selected=!0;a.textNode.Thesaurus.setValue(a.selectNode.synonyms.getInputElement().getValue())};var s=function(a){var c=document,d=a.target||c.body,f=a.id||"overlayBlock",h=a.opacity||
"0.9";a=a.background||"#f1f1f1";var e=c.getElementById(f),g=e||c.createElement("div");g.style.cssText="position: absolute;top:30px;bottom:41px;left:1px;right:1px;z-index: 10020;padding:0;margin:0;background:"+a+";opacity: "+h+";filter: alpha(opacity="+100*h+");display: none;";g.id=f;e||d.appendChild(g);return{setDisable:function(){g.style.display="none"},setEnable:function(){g.style.display="block"}}},B=function(b,c,d){var f=new CKEDITOR.dom.element("div"),h=new CKEDITOR.dom.element("input"),e=new CKEDITOR.dom.element("label"),
g="wscGrammerSuggest"+b+"_"+c;f.addClass("cke_dialog_ui_input_radio");f.setAttribute("role","presentation");f.setStyles({width:"97%",padding:"5px","white-space":"normal"});h.setAttributes({type:"radio",value:c,name:"wscGrammerSuggest",id:g});h.setStyles({"float":"left"});h.on("click",function(b){a.textNode.GrammTab.setValue(b.sender.getValue())});d&&h.setAttribute("checked",!0);h.addClass("cke_dialog_ui_radio_input");e.appendText(b);e.setAttribute("for",g);e.setStyles({display:"block","line-height":"16px",
"margin-left":"18px","white-space":"normal"});f.append(h);f.append(e);return f},w=function(a){a=a||"true";null!==a&&"false"==a&&m()},p=function(b){var c=new y(b);b="wscLang"+a.dialog.getParentEditor().name;b=document.getElementById(b);var d=a.iframeNumber+"_"+a.dialog._.currentTabId;a.buildOptionLang(c.setLangList,a.dialog.getParentEditor().name);x[c.getCurrentLangGroup(a.selectingLang)]();w(a.show_grammar);b.onchange=function(){x[c.getCurrentLangGroup(this.value)]();w(a.show_grammar);a.div_overlay.setEnable();
a.selectingLang=this.value;g.postMessage.send({message:{changeLang:a.selectingLang,text:a.dataTemp},target:a.targetFromFrame[d],id:"selectionLang_outer__page"})}},C=function(b){if("no_any_suggestions"==b){b="No suggestions";a.LocalizationButton.ChangeTo.instance.disable();a.LocalizationButton.ChangeAll.instance.disable();var c=function(b){b=a.LocalizationButton[b].instance;b.getElement().hasClass("cke_disabled")?b.getElement().setStyle("color","#a0a0a0"):b.disable()};c("ChangeTo");c("ChangeAll")}else a.LocalizationButton.ChangeTo.instance.enable(),
a.LocalizationButton.ChangeAll.instance.enable(),a.LocalizationButton.ChangeTo.instance.getElement().setStyle("color","#333"),a.LocalizationButton.ChangeAll.instance.getElement().setStyle("color","#333");return b},D={iframeOnload:function(){a.div_overlay.setEnable();var b=a.dialog._.currentTabId;v(a.targetFromFrame[a.iframeNumber+"_"+b],a.cmd[b])},suggestlist:function(b){delete b.id;a.div_overlay_no_check.setDisable();t();p(a.langList);var c=C(b.word),d="";c instanceof Array&&(c=b.word[0]);d=c.split(",");
r.clear();a.textNode.SpellTab.setValue(d[0]);for(b=0;b<d.length;b++)r.add(d[b],d[b]);k();a.div_overlay.setDisable()},grammerSuggest:function(b){delete b.id;delete b.mocklangs;t();p(a.langList);var c=b.grammSuggest[0];a.grammerSuggest.getElement().setHtml("");a.textNode.GrammTab.reset();a.textNode.GrammTab.setValue(c);a.textNodeInfo.GrammTab.getElement().setHtml("");a.textNodeInfo.GrammTab.getElement().setText(b.info);b=b.grammSuggest;for(var c=b.length,d=!0,f=0;f<c;f++)a.grammerSuggest.getElement().append(B(b[f],
b[f],d)),d=!1;k();a.div_overlay.setDisable()},thesaurusSuggest:function(b){delete b.id;delete b.mocklangs;t();p(a.langList);a.selectNodeResponce=b;a.textNode.Thesaurus.reset();a.selectNode.categories.clear();for(var c in b)a.selectNode.categories.add(c,c);b=a.selectNode.categories.getInputElement().getChildren().$[0].value;a.selectNode.categories.getInputElement().getChildren().$[0].selected=!0;a.buildOptionSynonyms(b);k();a.div_overlay.setDisable()},finish:function(b){delete b.id;a.dialog.getContentElement(a.dialog._.currentTabId,
"bottomGroup").getElement().hide();a.dialog.getContentElement(a.dialog._.currentTabId,"BlockFinishChecking").getElement().show();a.div_overlay.setDisable()},settext:function(b){delete b.id;a.dialog.getParentEditor().getCommand("checkspell");var c=a.dialog.getParentEditor();c.focus();c.setData(b.text,function(){a.dataTemp="";c.unlockSelection();c.fire("saveSnapshot");a.dialog.hide()})},ReplaceText:function(b){delete b.id;a.div_overlay.setEnable();a.dataTemp=b.text;a.selectingLang=b.currentLang;window.setTimeout(function(){a.div_overlay.setDisable()},
500);z(a.LocalizationButton);A(a.LocalizationLabel)},options_checkbox_send:function(b){delete b.id;b={osp:g.cookie.get("osp"),udn:g.cookie.get("udn"),cust_dic_ids:a.cust_dic_ids};g.postMessage.send({message:b,target:a.targetFromFrame[a.iframeNumber+"_"+a.dialog._.currentTabId],id:"options_outer__page"})},getOptions:function(b){var c=b.DefOptions.udn;a.LocalizationComing=b.DefOptions.localizationButtonsAndText;a.show_grammar=b.show_grammar;a.langList=b.lang;if(a.bnr=b.bannerId){a.setHeightBannerFrame();
var d=b.banner;a.dialog.getContentElement(a.dialog._.currentTabId,"banner").getElement().setHtml(d)}else a.setHeightFrame();"undefined"==c&&(a.userDictionaryName?(c=a.userDictionaryName,d={osp:g.cookie.get("osp"),udn:a.userDictionaryName,cust_dic_ids:a.cust_dic_ids,id:"options_dic_send",udnCmd:"create"},g.postMessage.send({message:d,target:a.targetFromFrame[void 0]})):c="");g.cookie.set("osp",b.DefOptions.osp);g.cookie.set("udn",c);g.cookie.set("cust_dic_ids",b.DefOptions.cust_dic_ids);g.postMessage.send({id:"giveOptions"})},
options_dic_send:function(){var b={osp:g.cookie.get("osp"),udn:g.cookie.get("udn"),cust_dic_ids:a.cust_dic_ids,id:"options_dic_send",udnCmd:g.cookie.get("udnCmd")};g.postMessage.send({message:b,target:a.targetFromFrame[a.iframeNumber+"_"+a.dialog._.currentTabId]})},data:function(a){delete a.id},giveOptions:function(){},setOptionsConfirmF:function(){},setOptionsConfirmT:function(){n.setValue("")},clickBusy:function(){a.div_overlay.setEnable()},suggestAllCame:function(){a.div_overlay.setDisable();a.div_overlay_no_check.setDisable()},
TextCorrect:function(){p(a.langList)}},E=function(a){a=a||window.event;if((a=window.JSON.parse(a.data))&&a.id)D[a.id](a)},v=function(b,c,d,f){c=c||CKEDITOR.config.wsc_cmd;d=d||a.dataTemp;g.postMessage.send({message:{customerId:a.wsc_customerId,text:d,txt_ctrl:a.TextAreaNumber,cmd:c,cust_dic_ids:a.cust_dic_ids,udn:a.userDictionaryName,slang:a.selectingLang,reset_suggest:f||!1},target:b,id:"data_outer__page"});a.div_overlay.setEnable()},x={superset:function(){a.dialog.showPage("Thesaurus");a.dialog.showPage("GrammTab");
q()},usual:function(){u();m();q()},rtl:function(){u();m();q()}},F=function(b){var c=new function(a){var b={};return{getCmdByTab:function(c){for(var e in a)b[a[e]]=e;return b[c]}}}(a.cmd);b.selectPage(c.getCmdByTab(CKEDITOR.config.wsc_cmd));a.sendData(b)},u=function(){a.dialog.hidePage("Thesaurus")},m=function(){a.dialog.hidePage("GrammTab")},q=function(){a.dialog.showPage("SpellTab")},k=function(){a.dialog.getContentElement(a.dialog._.currentTabId,"bottomGroup").getElement().show()},t=function(){a.dialog.getContentElement(a.dialog._.currentTabId,
"BlockFinishChecking").getElement().hide()};CKEDITOR.dialog.add("checkspell",function(b){var c=function(){a.div_overlay.setEnable();var c=a.dialog._.currentTabId,f=a.iframeNumber+"_"+c,h=a.textNode[c].getValue(),e=this.getElement().getAttribute("title-cmd");g.postMessage.send({message:{cmd:e,tabId:c,new_word:h},target:a.targetFromFrame[f],id:"cmd_outer__page"});"ChangeTo"!=e&&"ChangeAll"!=e||b.fire("saveSnapshot");"FinishChecking"==e&&b.config.wsc_onFinish.call(CKEDITOR.document.getWindow().getFrame())};
return{title:b.config.wsc_dialogTitle||b.lang.wsc.title,minWidth:560,minHeight:444,buttons:[CKEDITOR.dialog.cancelButton],onLoad:function(){a.dialog=this;u();m();q()},onShow:function(){b.lockSelection(b.getSelection());a.TextAreaNumber="cke_textarea_"+CKEDITOR.currentInstance.name;g.postMessage.init(E);a.dataTemp=CKEDITOR.currentInstance.getData();a.OverlayPlace=a.dialog.parts.tabs.getParent().$;if(CKEDITOR&&CKEDITOR.config){a.wsc_customerId=b.config.wsc_customerId;a.cust_dic_ids=b.config.wsc_customDictionaryIds;
a.userDictionaryName=b.config.wsc_userDictionaryName;a.defaultLanguage=CKEDITOR.config.defaultLanguage;var c="file:"==document.location.protocol?"http:":document.location.protocol;CKEDITOR.scriptLoader.load(b.config.wsc_customLoaderScript||c+"//loader.webspellchecker.net/sproxy_fck/sproxy.php?plugin=fck2&customerid="+a.wsc_customerId+"&cmd=script&doc=wsc&schema=22",function(c){CKEDITOR.config&&CKEDITOR.config.wsc&&CKEDITOR.config.wsc.DefaultParams?(a.serverLocationHash=CKEDITOR.config.wsc.DefaultParams.serviceHost,
a.logotype=CKEDITOR.config.wsc.DefaultParams.logoPath,a.loadIcon=CKEDITOR.config.wsc.DefaultParams.iconPath,a.loadIconEmptyEditor=CKEDITOR.config.wsc.DefaultParams.iconPathEmptyEditor,a.LangComparer=new CKEDITOR.config.wsc.DefaultParams._SP_FCK_LangCompare):(a.serverLocationHash=DefaultParams.serviceHost,a.logotype=DefaultParams.logoPath,a.loadIcon=DefaultParams.iconPath,a.loadIconEmptyEditor=DefaultParams.iconPathEmptyEditor,a.LangComparer=new _SP_FCK_LangCompare);a.pluginPath=CKEDITOR.getUrl(b.plugins.wsc.path);
a.iframeNumber=a.TextAreaNumber;a.templatePath=a.pluginPath+"dialogs/tmp.html";a.LangComparer.setDefaulLangCode(a.defaultLanguage);a.currentLang=b.config.wsc_lang||a.LangComparer.getSPLangCode(b.langCode);a.selectingLang=a.currentLang;a.div_overlay=new s({opacity:"1",background:"#fff url("+a.loadIcon+") no-repeat 50% 50%",target:a.OverlayPlace});var d=a.dialog.parts.tabs.getId(),d=CKEDITOR.document.getById(d);d.setStyle("width","97%");d.getElementsByTag("DIV").count()||d.append(a.buildSelectLang(a.dialog.getParentEditor().name));
a.div_overlay_no_check=new s({opacity:"1",id:"no_check_over",background:"#fff url("+a.loadIconEmptyEditor+") no-repeat 50% 50%",target:a.OverlayPlace});c&&(F(a.dialog),a.dialog.setupContent(a.dialog))})}else a.dialog.hide()},onHide:function(){a.dataTemp=""},contents:[{id:"SpellTab",label:"SpellChecker",accessKey:"S",elements:[{type:"html",id:"banner",label:"banner",style:"",html:"<div></div>"},{type:"html",id:"Content",label:"spellContent",html:"",setup:function(b){b=a.iframeNumber+"_"+b._.currentTabId;
var c=document.getElementById(b);a.targetFromFrame[b]=c.contentWindow}},{type:"hbox",id:"bottomGroup",style:"width:560px; margin: 0 auto;",widths:["50%","50%"],children:[{type:"hbox",id:"leftCol",align:"left",width:"50%",children:[{type:"vbox",id:"rightCol1",widths:["50%","50%"],children:[{type:"text",id:"text",label:a.LocalizationLabel.ChangeTo.text+":",labelLayout:"horizontal",labelStyle:"font: 12px/25px arial, sans-serif;",width:"140px","default":"",onShow:function(){a.textNode.SpellTab=this;a.LocalizationLabel.ChangeTo.instance=
this},onHide:function(){this.reset()}},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"text",id:"labelSuggestions",label:a.LocalizationLabel.Suggestions.text+":",onShow:function(){a.LocalizationLabel.Suggestions.instance=this;this.getInputElement().hide()}},{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=
a.logotype;this.getElement().getParent().setStyles({"text-align":"left"})}}]},{type:"select",id:"list_of_suggestions",labelStyle:"font: 12px/25px arial, sans-serif;",size:"6",inputStyle:"width: 140px; height: auto;",items:[["loading..."]],onShow:function(){r=this},onHide:function(){this.clear()},onChange:function(){a.textNode.SpellTab.setValue(this.getValue())}}]}]}]},{type:"hbox",id:"rightCol",align:"right",width:"50%",children:[{type:"vbox",id:"rightCol_col__left",widths:["50%","50%","50%","50%"],
children:[{type:"button",id:"ChangeTo",label:a.LocalizationButton.ChangeTo.text,title:"Change to",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id);a.LocalizationButton.ChangeTo.instance=this},onClick:c},{type:"button",id:"ChangeAll",label:a.LocalizationButton.ChangeAll.text,title:"Change All",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id);a.LocalizationButton.ChangeAll.instance=this},onClick:c},{type:"button",id:"AddWord",
label:a.LocalizationButton.AddWord.text,title:"Add word",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id);a.LocalizationButton.AddWord.instance=this},onClick:c},{type:"button",id:"FinishChecking",label:a.LocalizationButton.FinishChecking.text,title:"Finish Checking",style:"width: 100%;margin-top: 9px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id);a.LocalizationButton.FinishChecking.instance=this},onClick:c}]},{type:"vbox",id:"rightCol_col__right",
widths:["50%","50%","50%"],children:[{type:"button",id:"IgnoreWord",label:a.LocalizationButton.IgnoreWord.text,title:"Ignore word",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id);a.LocalizationButton.IgnoreWord.instance=this},onClick:c},{type:"button",id:"IgnoreAllWords",label:a.LocalizationButton.IgnoreAllWords.text,title:"Ignore all words",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id);a.LocalizationButton.IgnoreAllWords.instance=
this},onClick:c},{type:"button",id:"option",label:a.LocalizationButton.Options.text,title:"Option",style:"width: 100%;",onLoad:function(){a.LocalizationButton.Options.instance=this;"file:"==document.location.protocol&&this.disable()},onClick:function(){"file:"==document.location.protocol?alert("WSC: Options functionality is disabled when runing from file system"):b.openDialog("options")}}]}]}]},{type:"hbox",id:"BlockFinishChecking",style:"width:560px; margin: 0 auto;",widths:["70%","30%"],onShow:function(){this.getElement().hide()},
onHide:k,children:[{type:"hbox",id:"leftCol",align:"left",width:"70%",children:[{type:"vbox",id:"rightCol1",setup:function(){this.getChild()[0].getElement().$.src=a.logotype;this.getChild()[0].getElement().getParent().setStyles({"text-align":"center"})},children:[{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">'}]}]},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",
id:"rightCol_col__left",children:[{type:"button",id:"Option_button",label:a.LocalizationButton.Options.text,title:"Option",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id);"file:"==document.location.protocol&&this.disable()},onClick:function(){"file:"==document.location.protocol?alert("WSC: Options functionality is disabled when runing from file system"):b.openDialog("options")}},{type:"button",id:"FinishChecking",label:a.LocalizationButton.FinishChecking.text,
title:"Finish Checking",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:c}]}]}]}]},{id:"GrammTab",label:"Grammar",accessKey:"G",elements:[{type:"html",id:"banner",label:"banner",style:"",html:"<div></div>"},{type:"html",id:"Content",label:"GrammarContent",html:"",setup:function(){var b=a.iframeNumber+"_"+a.dialog._.currentTabId,c=document.getElementById(b);a.targetFromFrame[b]=c.contentWindow}},{type:"vbox",id:"bottomGroup",style:"width:560px; margin: 0 auto;",
children:[{type:"hbox",id:"leftCol",widths:["66%","34%"],children:[{type:"vbox",children:[{type:"text",id:"text",label:"Change to:",labelLayout:"horizontal",labelStyle:"font: 12px/25px arial, sans-serif;",inputStyle:"float: right; width: 200px;","default":"",onShow:function(){a.textNode.GrammTab=this},onHide:function(){this.reset()}},{type:"html",id:"html_text",html:"<div style='min-height: 17px; line-height: 17px; padding: 5px; text-align: left;background: #F1F1F1;color: #595959; white-space: normal!important;'></div>",
onShow:function(){a.textNodeInfo.GrammTab=this}},{type:"html",id:"radio",html:"",onShow:function(){a.grammerSuggest=this}}]},{type:"vbox",children:[{type:"button",id:"ChangeTo",label:"Change to",title:"Change to",style:"width: 133px; float: right;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:c},{type:"button",id:"IgnoreWord",label:"Ignore word",title:"Ignore word",style:"width: 133px; float: right;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},
onClick:c},{type:"button",id:"IgnoreAllWords",label:"Ignore Problem",title:"Ignore Problem",style:"width: 133px; float: right;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:c},{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 133px; float: right; margin-top: 9px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:c}]}]}]},{type:"hbox",id:"BlockFinishChecking",style:"width:560px; margin: 0 auto;",
widths:["70%","30%"],onShow:function(){this.getElement().hide()},onHide:k,children:[{type:"hbox",id:"leftCol",align:"left",width:"70%",children:[{type:"vbox",id:"rightCol1",children:[{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=a.logotype;this.getElement().getParent().setStyles({"text-align":"center"})}}]}]},{type:"hbox",id:"rightCol",align:"right",
width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:c}]}]}]}]},{id:"Thesaurus",label:"Thesaurus",accessKey:"T",elements:[{type:"html",id:"banner",label:"banner",style:"",html:"<div></div>"},{type:"html",id:"Content",label:"spellContent",html:"",setup:function(){var b=a.iframeNumber+"_"+a.dialog._.currentTabId,
c=document.getElementById(b);a.targetFromFrame[b]=c.contentWindow}},{type:"vbox",id:"bottomGroup",style:"width:560px; margin: -10px auto; overflow: hidden;",children:[{type:"hbox",widths:["75%","25%"],children:[{type:"vbox",children:[{type:"hbox",widths:["65%","35%"],children:[{type:"text",id:"ChangeTo",label:"Change to:",labelLayout:"horizontal",inputStyle:"width: 160px;",labelStyle:"font: 12px/25px arial, sans-serif;","default":"",onShow:function(){a.textNode.Thesaurus=this},onHide:function(){this.reset()}},
{type:"button",id:"ChangeTo",label:"Change to",title:"Change to",style:"width: 121px; margin-top: 1px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:c}]},{type:"hbox",children:[{type:"select",id:"categories",label:"Categories:",labelStyle:"font: 12px/25px arial, sans-serif;",size:"5",inputStyle:"width: 180px; height: auto;",items:[],onShow:function(){a.selectNode.categories=this},onHide:function(){this.clear()},onChange:function(){a.buildOptionSynonyms(this.getValue())}},
{type:"select",id:"synonyms",label:"Synonyms:",labelStyle:"font: 12px/25px arial, sans-serif;",size:"5",inputStyle:"width: 180px; height: auto;",items:[],onShow:function(){a.selectNode.synonyms=this;a.textNode.Thesaurus.setValue(this.getValue())},onHide:function(){this.clear()},onChange:function(){a.textNode.Thesaurus.setValue(this.getValue())}}]}]},{type:"vbox",width:"120px",style:"margin-top:46px;",children:[{type:"html",id:"logotype",label:"WebSpellChecker.net",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',
setup:function(){this.getElement().$.src=a.logotype;this.getElement().getParent().setStyles({"text-align":"center"})}},{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 121px; float: right; margin-top: 9px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:c}]}]}]},{type:"hbox",id:"BlockFinishChecking",style:"width:560px; margin: 0 auto;",widths:["70%","30%"],onShow:function(){this.getElement().hide()},children:[{type:"hbox",
id:"leftCol",align:"left",width:"70%",children:[{type:"vbox",id:"rightCol1",children:[{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=a.logotype;this.getElement().getParent().setStyles({"text-align":"center"})}}]}]},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"button",id:"FinishChecking",
label:"Finish Checking",title:"Finish Checking",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:c}]}]}]}]}]}});CKEDITOR.dialog.add("options",function(){var b=null,c,d,f,h,e={},k=null,l=null;g.cookie.get("udn");g.cookie.get("osp");var m=function(){l=this.getElement().getAttribute("title-cmd");var a=[];a[0]=e.IgnoreAllCapsWords;a[1]=e.IgnoreWordsNumbers;a[2]=e.IgnoreMixedCaseWords;a[3]=e.IgnoreDomainNames;a=a.toString().replace(/,/g,"");g.cookie.set("osp",
a);g.cookie.set("udnCmd",l?l:"ignore");"delete"!=l&&(a="",""!==n.getValue()&&(a=n.getValue()),g.cookie.set("udn",a));g.postMessage.send({id:"options_dic_send"})},p=function(){k.getElement().setHtml(a.LocalizationComing.error);k.getElement().show()};return{title:a.LocalizationComing.Options,minWidth:430,minHeight:130,resizable:CKEDITOR.DIALOG_RESIZE_NONE,contents:[{id:"OptionsTab",label:"Options",accessKey:"O",elements:[{type:"hbox",id:"options_error",children:[{type:"html",style:"display: block;text-align: center;white-space: normal!important; font-size: 12px;color:red",
html:"<div></div>",onShow:function(){k=this}}]},{type:"vbox",id:"Options_content",children:[{type:"hbox",id:"Options_manager",widths:["52%","48%"],children:[{type:"fieldset",label:"Spell Checking Options",style:"border: none;margin-top: 13px;padding: 10px 0 10px 10px",onShow:function(){this.getInputElement().$.children[0].innerHTML=a.LocalizationComing.SpellCheckingOptions},children:[{type:"vbox",id:"Options_checkbox",children:[{type:"checkbox",id:"IgnoreAllCapsWords",label:"Ignore All-Caps Words",
labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){e[this.id]=this.getValue()?1:0}},{type:"checkbox",id:"IgnoreWordsNumbers",label:"Ignore Words with Numbers",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){e[this.id]=this.getValue()?1:0}},{type:"checkbox",
id:"IgnoreMixedCaseWords",label:"Ignore Mixed-Case Words",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){e[this.id]=this.getValue()?1:0}},{type:"checkbox",id:"IgnoreDomainNames",label:"Ignore Domain Names",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){e[this.id]=
this.getValue()?1:0}}]}]},{type:"vbox",id:"Options_DictionaryName",children:[{type:"text",id:"DictionaryName",style:"margin-bottom: 10px",label:"Dictionary Name:",labelLayout:"vertical",labelStyle:"font: 12px/25px arial, sans-serif;","default":"",onLoad:function(){n=this;this.setValue(a.userDictionaryName?a.userDictionaryName:(g.cookie.get("udn"),this.getValue()))},onShow:function(){n=this;this.setValue(g.cookie.get("udn")?g.cookie.get("udn"):this.getValue());this.setLabel(a.LocalizationComing.DictionaryName)},
onHide:function(){this.reset()}},{type:"hbox",id:"Options_buttons",children:[{type:"vbox",id:"Options_leftCol_col",widths:["50%","50%"],children:[{type:"button",id:"create",label:"Create",title:"Create",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){this.getElement().setText(a.LocalizationComing.Create)},onClick:m},{type:"button",id:"restore",label:"Restore",title:"Restore",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",
this.id)},onShow:function(){this.getElement().setText(a.LocalizationComing.Restore)},onClick:m}]},{type:"vbox",id:"Options_rightCol_col",widths:["50%","50%"],children:[{type:"button",id:"rename",label:"Rename",title:"Rename",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){this.getElement().setText(a.LocalizationComing.Rename)},onClick:m},{type:"button",id:"delete",label:"Remove",title:"Remove",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",
this.id)},onShow:function(){this.getElement().setText(a.LocalizationComing.Remove)},onClick:m}]}]}]}]},{type:"hbox",id:"Options_text",children:[{type:"html",style:"text-align: justify;margin-top: 15px;white-space: normal!important; font-size: 12px;color:#777;",html:"<div>"+a.LocalizationComing.OptionsTextIntro+"</div>",onShow:function(){this.getElement().setText(a.LocalizationComing.OptionsTextIntro)}}]}]}]}],buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton],onOk:function(){var a=[];
a[0]=e.IgnoreAllCapsWords;a[1]=e.IgnoreWordsNumbers;a[2]=e.IgnoreMixedCaseWords;a[3]=e.IgnoreDomainNames;a=a.toString().replace(/,/g,"");g.cookie.set("osp",a);g.cookie.set("udn",n.getValue());g.postMessage.send({id:"options_checkbox_send"});k.getElement().hide();k.getElement().setHtml(" ")},onLoad:function(){b=this;g.postMessage.init(p);c=b.getContentElement("OptionsTab","IgnoreAllCapsWords");d=b.getContentElement("OptionsTab","IgnoreWordsNumbers");f=b.getContentElement("OptionsTab","IgnoreMixedCaseWords");
h=b.getContentElement("OptionsTab","IgnoreDomainNames")},onShow:function(){var b=g.cookie.get("osp").split("");e.IgnoreAllCapsWords=b[0];e.IgnoreWordsNumbers=b[1];e.IgnoreMixedCaseWords=b[2];e.IgnoreDomainNames=b[3];parseInt(e.IgnoreAllCapsWords,10)?c.setValue("checked",!1):c.setValue("",!1);parseInt(e.IgnoreWordsNumbers,10)?d.setValue("checked",!1):d.setValue("",!1);parseInt(e.IgnoreMixedCaseWords,10)?f.setValue("checked",!1):f.setValue("",!1);parseInt(e.IgnoreDomainNames,10)?h.setValue("checked",
!1):h.setValue("",!1);e.IgnoreAllCapsWords=c.getValue()?1:0;e.IgnoreWordsNumbers=d.getValue()?1:0;e.IgnoreMixedCaseWords=f.getValue()?1:0;e.IgnoreDomainNames=h.getValue()?1:0;c.getElement().$.lastChild.innerHTML=a.LocalizationComing.IgnoreAllCapsWords;d.getElement().$.lastChild.innerHTML=a.LocalizationComing.IgnoreWordsWithNumbers;f.getElement().$.lastChild.innerHTML=a.LocalizationComing.IgnoreMixedCaseWords;h.getElement().$.lastChild.innerHTML=a.LocalizationComing.IgnoreDomainNames}}});CKEDITOR.dialog.on("resize",
function(b){b=b.data;var c=b.dialog,d=CKEDITOR.document.getById(a.iframeNumber+"_"+c._.currentTabId);"checkspell"==c._.name&&(a.bnr?d&&d.setSize("height",b.height-310):d&&d.setSize("height",b.height-220))});CKEDITOR.on("dialogDefinition",function(b){var c=b.data.definition;a.onLoadOverlay=new s({opacity:"1",background:"#fff",target:c.dialog.parts.tabs.getParent().$});a.onLoadOverlay.setEnable();c.dialog.on("show",function(){});c.dialog.on("cancel",function(){c.dialog.getParentEditor().config.wsc_onClose.call(this.document.getWindow().getFrame());
a.div_overlay.setDisable();return!1},this,null,-1)})})();

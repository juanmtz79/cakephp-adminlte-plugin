(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var b=jQuery.fn.select2.amd;return b.define("select2/i18n/cs",[],function(){function b(a,c){switch(a){case 2:return c?"dva":"dv\u011b";case 3:return"t\u0159i";case 4:return"\u010dty\u0159i"}return""}return{errorLoading:function(){return"V\u00fdsledky nemohly b\u00fdt na\u010dteny."},inputTooLong:function(a){a=a.input.length-a.maximum;return 1==a?"Pros\u00edm zadejte o jeden znak m\u00e9n\u011b":4>=a?"Pros\u00edm zadejte o "+
b(a,!0)+" znaky m\u00e9n\u011b":"Pros\u00edm zadejte o "+a+" znak\u016f m\u00e9n\u011b"},inputTooShort:function(a){a=a.minimum-a.input.length;return 1==a?"Pros\u00edm zadejte je\u0161t\u011b jeden znak":4>=a?"Pros\u00edm zadejte je\u0161t\u011b dal\u0161\u00ed "+b(a,!0)+" znaky":"Pros\u00edm zadejte je\u0161t\u011b dal\u0161\u00edch "+a+" znak\u016f"},loadingMore:function(){return"Na\u010d\u00edtaj\u00ed se dal\u0161\u00ed v\u00fdsledky\u2026"},maximumSelected:function(a){a=a.maximum;return 1==a?
"M\u016f\u017eete zvolit jen jednu polo\u017eku":4>=a?"M\u016f\u017eete zvolit maxim\u00e1ln\u011b "+b(a,!1)+" polo\u017eky":"M\u016f\u017eete zvolit maxim\u00e1ln\u011b "+a+" polo\u017eek"},noResults:function(){return"Nenalezeny \u017e\u00e1dn\u00e9 polo\u017eky"},searching:function(){return"Vyhled\u00e1v\u00e1n\u00ed\u2026"}}}),{define:b.define,require:b.require}})();
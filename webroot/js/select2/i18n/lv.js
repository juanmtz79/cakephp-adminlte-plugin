(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var c=jQuery.fn.select2.amd;return c.define("select2/i18n/lv",[],function(){return{inputTooLong:function(a){a=a.input.length-a.maximum;var b="L\u016bdzu ievadiet par  "+a;return b+=" simbol"+(11===a?"iem":1===a%10?"u":"iem"),b+" maz\u0101k"},inputTooShort:function(a){a=a.minimum-a.input.length;var b="L\u016bdzu ievadiet v\u0113l "+a;return b+=" simbol"+(11===a?"us":1===a%10?"u":"us"),b},loadingMore:function(){return"Datu iel\u0101de\u2026"},
maximumSelected:function(a){var b="J\u016bs varat izv\u0113l\u0113ties ne vair\u0101k k\u0101 "+a.maximum;a=a.maximum;return b+=" element"+(11===a?"us":1===a%10?"u":"us"),b},noResults:function(){return"Sakrit\u012bbu nav"},searching:function(){return"Mekl\u0113\u0161ana\u2026"}}}),{define:c.define,require:c.require}})();
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var c=jQuery.fn.select2.amd;return c.define("select2/i18n/bg",[],function(){return{inputTooLong:function(a){a=a.input.length-a.maximum;var b="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0441 "+a+" \u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u0441\u0438\u043c\u0432\u043e\u043b";return 1<a&&(b+="a"),b},inputTooShort:function(a){a=a.minimum-a.input.length;var b="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u043e\u0449\u0435 "+
a+" \u0441\u0438\u043c\u0432\u043e\u043b";return 1<a&&(b+="a"),b},loadingMore:function(){return"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u0442 \u0441\u0435 \u043e\u0449\u0435\u2026"},maximumSelected:function(a){var b="\u041c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0442\u0435 \u0434\u043e "+a.maximum+" ";return 1<a.maximum?b+="\u0438\u0437\u0431\u043e\u0440\u0430":b+="\u0438\u0437\u0431\u043e\u0440",b},noResults:function(){return"\u041d\u044f\u043c\u0430 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438 \u0441\u044a\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f"},
searching:function(){return"\u0422\u044a\u0440\u0441\u0435\u043d\u0435\u2026"}}}),{define:c.define,require:c.require}})();
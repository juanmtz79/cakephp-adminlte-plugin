(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var c=jQuery.fn.select2.amd;return c.define("select2/i18n/lt",[],function(){function c(a,b,d,e){return 9<a%100&&21>a%100||0===a%10?1<a%10?d:e:b}return{inputTooLong:function(a){a=a.input.length-a.maximum;var b="Pa\u0161alinkite "+a+" simbol";return b+=c(a,"i\u0173","ius","\u012f"),b},inputTooShort:function(a){a=a.minimum-a.input.length;var b="\u012era\u0161ykite dar "+a+" simbol";return b+=c(a,"i\u0173","ius","\u012f"),b},loadingMore:function(){return"Kraunama daugiau rezultat\u0173\u2026"},
maximumSelected:function(a){var b="J\u016bs galite pasirinkti tik "+a.maximum+" element";return b+=c(a.maximum,"\u0173","us","\u0105"),b},noResults:function(){return"Atitikmen\u0173 nerasta"},searching:function(){return"Ie\u0161koma\u2026"}}}),{define:c.define,require:c.require}})();

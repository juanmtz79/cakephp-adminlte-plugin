(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var c=jQuery.fn.select2.amd;return c.define("select2/i18n/sr",[],function(){function c(a,b,d,e){return 1==a%10&&11!=a%100?b:2<=a%10&&4>=a%10&&(12>a%100||14<a%100)?d:e}return{inputTooLong:function(a){a=a.input.length-a.maximum;var b="Obri\u0161ite "+a+" simbol";return b+=c(a,"","a","a"),b},inputTooShort:function(a){a=a.minimum-a.input.length;var b="Ukucajte bar jo\u0161 "+a+" simbol";return b+=c(a,"","a","a"),b},loadingMore:function(){return"Preuzimanje jo\u0161 rezultata\u2026"},
maximumSelected:function(a){var b="Mo\u017eete izabrati samo "+a.maximum+" stavk";return b+=c(a.maximum,"u","e","i"),b},noResults:function(){return"Ni\u0161ta nije prona\u0111eno"},searching:function(){return"Pretraga\u2026"}}}),{define:c.define,require:c.require}})();

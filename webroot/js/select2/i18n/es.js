(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var c=jQuery.fn.select2.amd;return c.define("select2/i18n/es",[],function(){return{errorLoading:function(){return"La carga fall\u00f3"},inputTooLong:function(b){b=b.input.length-b.maximum;var a="Por favor, elimine "+b+" car";return 1==b?a+="\u00e1cter":a+="acteres",a},inputTooShort:function(b){b=b.minimum-b.input.length;var a="Por favor, introduzca "+b+" car";return 1==b?a+="\u00e1cter":a+="acteres",a},loadingMore:function(){return"Cargando m\u00e1s resultados\u2026"},
maximumSelected:function(b){var a="S\u00f3lo puede seleccionar "+b.maximum+" elemento";return 1!=b.maximum&&(a+="s"),a},noResults:function(){return"No se encontraron resultados"},searching:function(){return"Buscando\u2026"}}}),{define:c.define,require:c.require}})();
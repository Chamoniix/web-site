/**
 * Ajout du numéro de figure
 */
;(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", function() {
        
        /** FIGURES ***********************************************************/
        var figcaptionNumberElements = document.getElementsByTagName('figcaption');
        var tmpInnerHTML = "";
        var figNumber = 0;
        if(figcaptionNumberElements) {
            for(var i = 0; i < figcaptionNumberElements.length; i++){
                tmpInnerHTML = figcaptionNumberElements[i].innerHTML;
                figNumber = i + 1;
                figcaptionNumberElements[i].innerHTML = '<span class="figcaptionNumber">'+ figNumber +'</span>'+tmpInnerHTML;
            }
        }
    }, false);
})();
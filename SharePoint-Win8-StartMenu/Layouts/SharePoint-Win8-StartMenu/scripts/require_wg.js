/**
 * Created by IMELNIKOV on 15.12.2014.
 */
require.config({
    baseUrl: 'scripts/lib/',
    paths: {
        jquery: 'jquery/jquery-1.11.1'
    }
});

require(['jquery'], function( $ ) {
     if ($("#ui").length > 0){
         loadUi();
     }
});

function loadUi (){
    require(['lib/jqueryui/jquery-ui'], function() {
        if (jQuery.ui) {
            console.log("jquery ui loaded");
        }
    });
}
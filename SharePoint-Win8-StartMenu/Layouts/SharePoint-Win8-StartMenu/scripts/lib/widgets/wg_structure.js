/**
 * Created by IMELNIKOV on 15.12.2014.
 */
function WgStructureCreate(element){
    require(['jquery', 'jqueryui'], function() {
        //init
        $.widget ("custom.structure", {
            _create: function() {
                var name = this.options.name;
                this.element
                    .addClass("widget")
                    .append("<a href=''>" + name + "</a>")
                    .append("<div class='content' style='position: absolute; left: 90px'><a href=''>Структура компании, сотрудники, отделы и руководители</a><br><a href=''>Офисы в городах России и мира</a></div>")
                    .click (function(){
                        alert  ("Calm down. Nothing to see here.");
                });
            }
        });

        //create
        element.structure({ name: "Структура компании"});
    });
}

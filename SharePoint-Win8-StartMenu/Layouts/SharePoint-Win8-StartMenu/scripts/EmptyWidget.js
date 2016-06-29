/**
 * Created by IMELNIKOV on 08.12.2014.
 */
//var a = $("");
$(function(){
    $.widget ("custom.structure", {
       _create: function() {
           var name = this.options.name;
           this.element
               .addClass("widget")
               .append("<a href='/'>" + name + "</a>");
       }
    });

    $.widget ("custom.blogs", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.hooray", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.myprofile", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.interview", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>")
                .append("<br><p>Вы уже ответили на данный опрос</p>");
        }
    });

    $.widget ("custom.officemap", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.photos", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.events", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.newemployees", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.birthdays", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a style='' href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.ideas", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.note", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.facebook", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.job", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.neighbors", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.portal", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    $.widget ("custom.services", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });
});


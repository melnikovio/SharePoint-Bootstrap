var Widgets = function () {
    
};

Widgets.prototype.Initialization = function () {
    $.widget("custom.structure", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div class='content' style='position: absolute; left: 90px'><a href=''>Структура компании, сотрудники, отделы и руководители</a><br><a href=''>Офисы в городах России и мира</a></div>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.blogs", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_1.png' alt=''></a><a href='' style='font-size: 14pt;'>Маленькие праздники без повода</a><br/><a href='' style='font-size: 10pt;'>Пост для того, чтобы не забыть то, что мы тут только что обсуждали...</a></div>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_2.png' alt=''></a><a href='' style='font-size: 14pt;'>Нас ломанули?</a><br/><a href='' style='font-size: 10pt;'>'Если Вас съели - есть два выхода'</a></div>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.listitems", {
        _create: function () {
            var name = this.options.name;
            var currentElement = this.element;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_1.png' alt=''></a><a href='' style='font-size: 14pt;'>Маленькие праздники без повода</a><br/><a href='' style='font-size: 10pt;'>Пост для того, чтобы не забыть то, что мы тут только что обсуждали...</a></div>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_2.png' alt=''></a><a href='' style='font-size: 14pt;'>Нас ломанули?</a><br/><a href='' style='font-size: 10pt;'>'Если Вас съели - есть два выхода'</a></div>")
                .click(function () {
                   
                });
            CreateListItemsForm(currentElement);
        }
    });

    $.widget("custom.exchangelist", {
        _create: function () {
            var name = this.options.name;
            var currentElement = this.element;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_1.png' alt=''></a><a href='' style='font-size: 14pt;'>Маленькие праздники без повода</a><br/><a href='' style='font-size: 10pt;'>Пост для того, чтобы не забыть то, что мы тут только что обсуждали...</a></div>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_2.png' alt=''></a><a href='' style='font-size: 14pt;'>Нас ломанули?</a><br/><a href='' style='font-size: 10pt;'>'Если Вас съели - есть два выхода'</a></div>")
                .click(function () {

                });
            CreateExchangeList(currentElement);
        }
    });

    $.widget("custom.hooray", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left;  top: 40px;' src='/_Layouts/15/SPMainApp/images/hooray.png' alt=''></a><a href='' style='position: absolute; left: 90px; top: 40px; font-size: 10pt;'>Спасибо за замечательные дайджествы новостей компании. Наконец-то в доступной форме мы узнаем, что творится в позитиве и за его пределеами.</a></div>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.myprofile", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<div style='padding: 0px 0px 5px 10px !important; background-color:#92a840; position: absolute; bottom: 0px; width: 100%'><a style='left: 35px' href=''>" + name + "</a></div>")
                .click(function (e) {
                    var value = _spPageContextInfo.userId;;
                    window.open("/_layouts/15/userdisp.aspx?ID=" + value, "_self");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.interview", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<br><p>Вы уже ответили на данный опрос</p>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });

        }
    });

    $.widget("custom.officemap", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.exchangebutton", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    var options = {
                        title: 'Принятие смены диспетчером',
                        width: 650, height: 460, url: '/Lists/JSListInstance/NewForm.aspx',
                        dialogReturnValueCallback: function (dialogResult) { SP.UI.ModalDialog.RefreshPage(dialogResult); }
                    };
                    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.reportslist", {
        _create: function () {
            var name = this.options.name;
            var currentElement = this.element;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_1.png' alt=''></a><a href='' style='font-size: 14pt;'>Маленькие праздники без повода</a><br/><a href='' style='font-size: 10pt;'>Пост для того, чтобы не забыть то, что мы тут только что обсуждали...</a></div>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_2.png' alt=''></a><a href='' style='font-size: 14pt;'>Нас ломанули?</a><br/><a href='' style='font-size: 10pt;'>'Если Вас съели - есть два выхода'</a></div>")
                .click(function () {

                });
            CreateReportsForm(currentElement);
        }
    });

    $.widget("custom.photos", {
        _create: function () {
            var name = this.options.name;
            var currentElement = this.element;
            currentElement
                .addClass("widget")
                .append("<a href=''>" + name + "</a>");

            require(['widgets/wg_photos'], function () {
                CreatePhotosSlider(currentElement);
            });
        }
    });

    $.widget("custom.events", {
        _create: function () {
            var name = this.options.name;
            var date = new Date();
            var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентябра', 'октябра', 'ноября', 'декабря'];
            var day = date.getDay();
            var month = date.getMonth();
            this.element
                .addClass("widget")
                .append("<a style='padding: 0px 0px 0px 100px !important;' href=''>" + name + "</a> <br>")
                .append("<div style='height: 40px'><a style='padding: 0px 0px 0px 100px !important;' href=''>" + date.getDate() + " " + months[month] + ", " + days[day] + "</a></div>")

                .append("<div style='height: 60px'><a style='padding: 0px 0px 0px 100px !important; ' href=''>06:00 - 08:00    Grammar Club</a></div>")
                .append("<div style='height: 60px'><a style='padding: 0px 0px 0px 100px !important;  href=''>07:00 - 10:00    Волейбол</a></div>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });
     
    $.widget("custom.chat", {
        
        _create: function () {
            this.element
                .addClass("widget")
                .append("<div id='listitems'></div><br/><br/><input type='button' id='update' value='Add message'/><input id='text' style='color: black' />");
        }
    });


    $.widget("custom.newemployees", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.birthdays", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a style='' href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.ideas", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.note", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.facebook", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.job", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.neighbors", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.portal", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });

    $.widget("custom.services", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function (e) {
                    alert("Calm down. Nothing to see here.");
                    e.preventDefault();
                });
        }
    });
}
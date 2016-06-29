function WgBlogsCreate (element){
    $.widget ("custom.blogs", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_1.png' alt=''></a><a href='' style='font-size: 14pt;'>Маленькие праздники без повода</a><br/><a href='' style='font-size: 10pt;'>Пост для того, чтобы не забыть то, что мы тут только что обсуждали...</a></div>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPMainApp/images/blogs_2.png' alt=''></a><a href='' style='font-size: 14pt;'>Нас ломанули?</a><br/><a href='' style='font-size: 10pt;'>'Если Вас съели - есть два выхода'</a></div>")
                .click (function(){
                     alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.blogs({ name: "Блоги"});
}

function WgHoorayCreate (element){
    $.widget ("custom.hooray", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left;  top: 40px;' src='/_Layouts/15/SPMainApp/images/hooray.png' alt=''></a><a href='' style='position: absolute; left: 90px; top: 40px; font-size: 10pt;'>Спасибо за замечательные дайджествы новостей компании. Наконец-то в доступной форме мы узнаем, что творится в позитиве и за его пределеами.</a></div>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.hooray({ name: "Ура и спасибо"});
}

function WgMyprofileCreate (element){
    $.widget ("custom.myprofile", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<div style='padding: 20px 0px 0px 30px !important; background-color:#92a840; position: absolute; bottom: 0px; width: 100%'><a style='left: 35px' href=''>" + name + "</a></div>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.myprofile({ name: "Мой профиль"});
}

function WgInterviewCreate (element){
    $.widget ("custom.interview", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<br><p>Вы уже ответили на данный опрос</p>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });

        }
    });

    element.interview({ name: "Опросы"});
}

function WgOfficemapCreate (element){
    $.widget ("custom.officemap", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.officemap({ name: "Карта офиса"});
}

function WgEventsCreate (element){
    $.widget ("custom.events", {
        _create: function() {
            var name = this.options.name;
            var date = new Date();
            var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            var months = ['января', 'февраля', 'марта', 'апреля', 'мая',  'июня', 'июля', 'августа', 'сентябра', 'октябра', 'ноября', 'декабря'];
            var day = date.getDay();
            var month = date.getMonth();
            this.element
                .addClass("widget")
                .append("<a style='padding: 0px 0px 0px 100px !important;' href=''>" + name + "</a> <br>")
                .append("<div style='height: 40px'><a style='padding: 0px 0px 0px 100px !important;' href=''>" + date.getDate() + " " + months[month] + ", " + days[day]  + "</a></div>")

                .append("<div style='height: 60px'><a style='padding: 0px 0px 0px 100px !important; ' href=''>06:00 - 08:00    Grammar Club</a></div>")
                .append("<div style='height: 60px'><a style='padding: 0px 0px 0px 100px !important;  href=''>07:00 - 10:00    Волейбол</a></div>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.events({ name: "События"});
}

function WgChatCreate(element) {
    $.widget("custom.chat", {
        _create: function() {
        }
    });

    element.chat({ name: "Чат" });
}

function WgNewemployeesCreate (element) {
    $.widget ("custom.newemployees", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.newemployees({ name: "Новые сотрудники"});
}

function WgBirthdaysCreate (element) {
    $.widget ("custom.birthdays", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a style='' href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.birthdays({ name: "Дни рождения"});
}

function WgIdeasCreate(element) {
    $.widget ("custom.ideas", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.ideas({ name: "Идеи"});
}

function WgNoteCreate (element) {
    $.widget ("custom.note", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.note({ name: "Памятка"});
}

function WgFacebookCreate (element) {
    $.widget ("custom.facebook", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.facebook({ name: "Соцсети"});
}

function WgJobCreate (element) {
    $.widget ("custom.job", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.job({ name: "Вакансии"});
}

function WgNeighborsCreate (element) {
    $.widget ("custom.neighbors", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.neighbors({ name: "Соседи"});
}

function WgPortalCreate (element) {
    $.widget ("custom.portal", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.portal({ name: "Портал"});
}

function WgServicesCreate (element) {
    $.widget ("custom.services", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click (function(){
                    alert  ("Calm down. Nothing to see here.");
                });
        }
    });

    element.services({ name: "Сервисы"});
}

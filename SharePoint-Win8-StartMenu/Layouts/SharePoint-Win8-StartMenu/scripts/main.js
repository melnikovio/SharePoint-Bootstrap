_spBodyOnLoadFunctionNames.push("LoadScripts");

function LoadScripts() {
    SP.SOD.executeFunc('SP.js', 'SP.ClientContext', LoadStartMenu);
}

function LoadStartMenu() {
    $("div#suiteBarLeft").prepend("<a class='windows_button' href=''/'><img style='float:left; height:25px; padding-left: 20px; padding-top: 5px' src='/_Layouts/15/SharePoint-Win8-StartMenu/images/windows_logo_-_2012.svg.png' alt=''></a>");

    $("a.windows_button").click(function (e) {
        if ($(".main").is(":visible")) {
            $("#contentRow").show();
            $(".main").hide();
        } else {
            $(".main").show();
            $("#contentRow").hide();
        }
        e.preventDefault();
    });

    $(".main").hide();
    LoadWidgets();
}

function LoadWidgets() {
    var wgHelper = new Widgets();
    wgHelper.Initialization();

    //
    $(".structure").each(function () { $(this).structure({ name: "Структура компании" }); });

    //
    $(".blogs").each(function () { $(this).blogs({ name: "Блоги" }); });

    //
    $(".listitems").each(function () { $(this).listitems({ name: "listitems" }); });

    //
    $(".exchangelist").each(function () { $(this).exchangelist({ name: "exchangelist" }); });

    //
    $(".hooray").each(function () { $(this).hooray({ name: "Текущие смены" }); });

    //
    $(".myprofile").each(function () { $(this).myprofile({ name: "Мой профиль" }); });

    //
    $(".interview").each(function () { $(this).interview({ name: "Опросы" }); });

    //
    $(".officemap").each(function () { $(this).officemap({ name: "Карта офиса" }); });

    //
    $(".exchangebutton").each(function () { $(this).exchangebutton({ name: "Принять смену" }); });

    //
    $(".reportslist").each(function () { $(this).reportslist({ name: "Список отчетов" }); });

    //
    $(".photos").each(function () { $(this).photos({ name: "Фотографии" }); });

    //
    $(".events").each(function () { $(this).events({ name: "События" }); });

    //
    $(".chat").each(function () { $(this).chat({ name: "Чат" }); });

    //
    $(".newemployees").each(function () { $(this).newemployees({ name: "Новые сотрудники" }); });

    //
    $(".birthdays").each(function () { $(this).birthdays({ name: "Дни рождения" }); });

    //
    $(".ideas").each(function () { $(this).ideas({ name: "Идеи" }); });

    //
    $(".note").each(function () { $(this).note({ name: "Памятка" }); });

    //
    $(".facebook").each(function () { $(this).facebook({ name: "Соцсети" }); });

    //
    $(".job").each(function () { $(this).job({ name: "Вакансии" }); });

    //
    $(".neighbors").each(function () { $(this).neighbors({ name: "Соседи" }); });

    //
    $(".portal").each(function () { $(this).portal({ name: "Портал" }); });

    //
    $(".services").each(function () { $(this).services({ name: "Сервисы" }); });
}
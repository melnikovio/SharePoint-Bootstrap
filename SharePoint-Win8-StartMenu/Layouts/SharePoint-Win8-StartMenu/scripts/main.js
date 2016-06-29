
$(document).ready(function () {
    _spBodyOnLoadFunctionNames.push("LoadTests");
});

function LoadTests() {
    SP.SOD.executeFunc('SP.js', 'SP.ClientContext', LoadTest);
}



function LoadTest() {
    LoadTestShow();
    //init
    var wgHelper = new Widgets();
    wgHelper.Initialization();

    //
    $(".structure").each(function () {
        $(this).structure({ name: "Структура компании" });
    });

    //
    $(".blogs").each(function () {
        $(this).blogs({ name: "Блоги" });
    });

    //
    $(".listitems").each(function () {
        $(this).listitems({ name: "listitems" });
    });

    //
    $(".exchangelist").each(function () {
        $(this).exchangelist({ name: "exchangelist" });
    });

    //
    $(".hooray").each(function () {
        $(this).hooray({ name: "Текущие смены" });
    });

    //
    $(".myprofile").each(function () {
        $(this).myprofile({ name: "Мой профиль" });
    });

    //
    $(".interview").each(function () {
        $(this).interview({ name: "Опросы" });
    });

    //
    $(".officemap").each(function () {
        $(this).officemap({ name: "Карта офиса" });
    });

    //
    $(".exchangebutton").each(function () {
        $(this).exchangebutton({ name: "Принять смену" });
    });

    //
    $(".reportslist").each(function () {
        $(this).reportslist({ name: "Список отчетов" });
    });

    //
    $(".photos").each(function () {
        $(this).photos({ name: "Фотографии" });
    });

    //
    $(".events").each(function () {
        $(this).events({ name: "События" });
    });

    //
    $(".chat").each(function () {
        $(this).chat({ name: "Чат" });
    });

    //
    $(".newemployees").each(function () {
        $(this).newemployees({ name: "Новые сотрудники" });
    });

    //
    $(".birthdays").each(function () {
        $(this).birthdays({ name: "Дни рождения" });
    });

    //
    $(".ideas").each(function () {
        $(this).ideas({ name: "Идеи" });
    });

    //
    $(".note").each(function () {
        $(this).note({ name: "Памятка" });
    });

    //
    $(".facebook").each(function () {
        $(this).facebook({ name: "Соцсети" });
    });

    //
    $(".job").each(function () {
        $(this).job({ name: "Вакансии" });
    });

    //
    $(".neighbors").each(function () {
        $(this).neighbors({ name: "Соседи" });
    });

    //
    $(".portal").each(function () {
        $(this).portal({ name: "Портал" });
    });

    //
    $(".services").each(function () {
        $(this).services({ name: "Сервисы" });
    });
}

function LoadTestShow() {
    createPage();
    //$("div#suiteBarLeft").prepend("<button id='button' class='ui-state-default ui-corner-all'>Show pane</button>");
    $("div#suiteBarLeft").prepend("<a class='windows_button' href=''/'><img style='float:left; height:25px; padding-left: 20px; padding-top: 5px' src='/_Layouts/15/SPMainApp/images/windows_logo_-_2012.svg.png' alt=''></a>");

    $(document).keypress(function (e) {
        if (e.which === 91) {
            alert("test");
        }
    });

    //
    $("a.windows_button").click(function (e) {
        //runEffect();
        if ($(".main").is(":visible")) {
            $("#contentRow").show();
            $(".main").hide();
        } else {
            $(".main").show();
            $("#contentRow").hide();
        }
        e.preventDefault();
    });

    // set effect from select menu value
    //$("#button").click(function(e) {
    //    //runEffect();
    //    if ($(".main").is(":visible")) {
    //        $(".main").hide();
    //    } else {
    //        $(".main").show();
    //    }
    //    e.preventDefault();
    //});

    $(".main").hide();
}

function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
        options = { percent: 100 };
    } else if (selectedEffect === "size") {
        options = { to: { width: 280, height: 185 } };
    }

    // run the effect
    $(".main").show(selectedEffect, options, 500, callback);
};

//callback function to bring a hidden box back
function callback() {
    setTimeout(function () {
        $(".main:visible").removeAttr("style").fadeOut();
    }, 1000);
};


function createPage() {
    var container = $(".main");
    //if (container.children().length > 0) {
    //    return;
    //} else {
    //    alert("filling");
    //}

}
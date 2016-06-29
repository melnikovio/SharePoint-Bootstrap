function CreateListItemsForm(currentElement) {
    console.log("initialized" + currentElement.attr("class"));

    var spHelper = new SpLittleHelper(this);
    var getItems = spHelper.LoadListItems("ВЖД", "<View><RowLimit>5</RowLimit><Query><Where>" +
                    "</Where>" +
                    "<OrderBy><FieldRef Name='Created' Ascending='False' /></OrderBy>" +
                    "</Query></View>");

    //отрисовка таблицы
    getItems.done(function (listItems) {
        currentElement.empty();
        currentElement.append("<div class='description'><a href=''>Последние записи ВЖД</a></div>");
        var table = $("<table class='items'/>");
        table.append("<tr><th class=''>Время события</th><th>Филиал</th><th>Сообщение</th><th>Диспетчер</th></tr>");

        listItems.reset();

        while (listItems.moveNext()) {
            var currentItem = listItems.get_current();

            if (currentItem != null) {
                var date = new Date(currentItem.get_item('EventTime'));
                var thisSite = window.location.protocol + '//' + window.location.host;
                var url = thisSite + "/Lists/VJDListInstance/DispForm.aspx?ContentTypeId=" + currentItem.get_item("ContentTypeId") + "&ID=" + currentItem.get_item("ID");
                var message = currentItem.get_item("Title");
                if (message.length > 80) {
                    message = message.substring(0, 90) + "...";
                }
                var tr = $("<tr/>");
                tr.append("<td>" + date.format("HH:MM dd.mm.yyyy") + "</td>" +
                    "<td>" + currentItem.get_item('Object') + "</td>" +
                    "<td class='message'><a href='" + url + "' target='_blank'>" + message + "</a></td>" +
                    "<td>" + currentItem.get_item('Dispatcher') + "</td>");
                table.append(tr);
            }
        }
        currentElement.append(table);
    });
}
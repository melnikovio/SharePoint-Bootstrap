function CreateExchangeList(currentElement) {
    console.log("initialized" + currentElement.attr("class"));

    var spHelper = new SpLittleHelper(this);
    var getItems = spHelper.LoadListItems("Журнал смен", "<View><Query><Where>" +
                            //"<And>" +
                            "<Eq><FieldRef Name='ActiveShift'/><Value Type='Boolean'>1</Value></Eq>" +
                            //"<Geq><FieldRef Name='Created' Type='DateTime'/><Value Type='DateTime'><Today OffsetDays='-1' /></Value></Geq>" +
                            //"</And>" +
                            "</Where>" +
                            "<OrderBy><FieldRef Name='Created' Ascending='False' /></OrderBy>" +
                            "</Query></View>");

    //отрисовка таблицы
    getItems.done(function (listItems) {
        currentElement.empty();
        currentElement.append("<div class='description'><a href=''>Текущие смены</a></div>");
        var table = $("<table class='items'/>");
        table.append("<tr><th class=''>Филиал</th><th>Диспетчер</th><th>Персонал</th><th>Номер</th></tr>");

        listItems.reset();

        while (listItems.moveNext()) {
            var currentItem = listItems.get_current();

            if (currentItem != null) {
                var currentObject = {
                    Name: currentItem.get_item('Object'),
                    Dispatcher: currentItem.get_item('DispIn'),
                    Staff: currentItem.get_item('NumberOfAllStaff'),
                    Number: currentItem.get_item('SmenaNumber')
                };

                if (currentObject.Staff === null) {
                    currentObject.Staff = "";
                }

                var tr = $("<tr/>");
                tr.append("<td>" + currentObject.Name + "</td>" +
                    "<td class='message'>" + currentObject.Dispatcher + "</td>" +
                    "<td>" + currentObject.Staff + "</td>" +
                    "<td>" + currentObject.Number + "</td>");
                table.append(tr);
            }
        }
        currentElement.append(table);
    });
}
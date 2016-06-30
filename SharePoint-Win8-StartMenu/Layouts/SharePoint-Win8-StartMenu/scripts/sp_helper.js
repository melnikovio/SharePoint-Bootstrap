var SpLittleHelper = function (window) {
    this.window = window;
};

//Вернет splistitemcollection всех элементов
SpLittleHelper.prototype.LoadListItems = function (listName, userQuery) {
    //jquery promise
    var d = $.Deferred();

    //Контекст
    var clientContext = new SP.ClientContext.get_current();

    //Получение данных из списка
    var currentList = clientContext.get_web().get_lists().getByTitle(listName);
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(userQuery);
    var thisListItems = currentList.getItems(camlQuery);
    clientContext.load(thisListItems);
    var o = { d: d, listItems: thisListItems };

    //Вызов SP
    clientContext.executeQueryAsync(Function.createDelegate(o, this.onQuerySucceededLoadListItems), Function.createDelegate(o, this.onQueryFailed));

    //Возврат результата вызова SP
    return d.promise();
};

//Вернет splistitemcollection всех элементов
SpLittleHelper.prototype.onQuerySucceededLoadListItems = function () {
    var listItems = this.listItems.getEnumerator();
    this.d.resolve(listItems);
}

//отработка ошибки загрузки
SpLittleHelper.prototype.onQueryFailed = function (sender, args) {
    console.log('Error loading data from list. ' + args.get_message() + '\n' + args.get_stackTrace());
}
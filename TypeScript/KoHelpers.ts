/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../Scripts/typings/jquery.d.ts" />
/// <reference path="../Scripts/typings/winjs.d.ts" />


ko.bindingHandlers["datasource"] =
    <KnockoutBindingHandler>{
        update: (element, valueAccessor) => {
            var list = valueAccessor() || {};
            var dataList = new WinJS.Binding.List(list());
            if (element.winControl) {
                element.winControl.itemDataSource = dataList.dataSource;
            }
        }
    };

ko.bindingHandlers["template"] = <KnockoutBindingHandler>{
    update: (element, valueAccessor) => {
        var itemTemplateFunction = function(itemPromise: WinJS.Promise<WinJS.UI.Item>, recycled: HTMLElement) {
            return itemPromise.then(function(item) {
                var templateElement = recycled;
                var template = <HTMLElement>valueAccessor();
                if (!templateElement) {
                    var result = $(template.innerHTML).clone();
                    templateElement = result[0];
                } else {
                }

                WinJS.UI.processAll(templateElement).then(function() {
                    ko.applyBindings(item.data, templateElement);
                });
                return templateElement;
            });
        };

        if (element.winControl) {
            element.winControl.itemTemplate = itemTemplateFunction;
        }
    }
};
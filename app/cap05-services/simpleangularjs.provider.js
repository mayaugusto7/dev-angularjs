/**
 * Created by mayco on 29/04/2017.
 */
(function () {

    'use strict';

    app.provider('ItemService', ItemService);

    ItemService.$inject = [];

    function ItemService(opt_items) {

        var items = opt_items || [];


        this.list = function() {
            return items;
        };

        this.add = function(item) {
            items.push(item);
        };
    }


})();
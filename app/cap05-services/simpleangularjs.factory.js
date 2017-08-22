/**
 * Created by mayco on 29/04/2017.
 */
(function () {

    'use strict';

    app.factory('ItemService', ItemService);

    ItemService.$inject = [];

    function ItemService() {

        var items = [
            {id: 1, label: 'Item 0'},
            {id: 2, label: 'Item 1'}
        ];

        function list() {
            return items;
        }

        function add(item) {
            items.push(item);
        }

        return {
            list: list,
            add: add
        };

    }

})();
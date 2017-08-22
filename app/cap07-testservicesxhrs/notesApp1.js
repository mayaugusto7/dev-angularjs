/**
 * Created by mayco on 02/05/2017.
 */
var app = angular.module('notesApp1', []);

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

    app.controller('ItemCtrl', ItemCtrl);

    ItemCtrl.$inject = ['ItemService'];

    function ItemCtrl(ItemService) {

        var vm = this;

        vm.items = ItemService.list();
    }

})();
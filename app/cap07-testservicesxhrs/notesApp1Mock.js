/**
 * Created by mayco on 02/05/2017.
 */
var app = angular.module('notesApp1Mocks', []);

(function () {

    'use strict';

    app.factory('ItemService', ItemService);

    ItemService.$inject = [];

    function ItemService() {

        function list() {
            return [{id: 1, label: 'Mock'}];
        }

        return {
            list: list
        };
    }

})();


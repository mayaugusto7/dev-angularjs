/**
 * Created by mayco on 03/05/2017.
 */
var app = angular.module('serverApp2', []);

(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['NoteService'];

    function MainCtrl(NoteService) {

        var vm = this;
        vm.items = [];
        vm.errorMessage = '';

        NoteService.query().then(function (response) {
            vm.items = response.data;
        }, function (errResponse) {
            vm.errorMessage = errResponse.data.msg;
        });
    }

    app.factory('NoteService', NoteService);

    NoteService.$inject = ['$http'];

    function NoteService($http) {

        function query() {
            return $http.get('http://localhost:8000/api/note');
        }

        return {
            query: query
        }

    }

})();
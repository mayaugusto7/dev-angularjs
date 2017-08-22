/**
 * Created by mayco on 02/05/2017.
 */
var app = angular.module('serverApp', []);

(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$http'];

    function MainCtrl($http) {

        var vm = this;

        vm.items = [];

        vm.errorMessage = '';

        $http.get('http://localhost:8000/api/note').then(function (response) {
            vm.items = response.data;
        }, function (errResponse) {
            vm.errorMessage = errResponse.data.msg;
        });

    }
})();
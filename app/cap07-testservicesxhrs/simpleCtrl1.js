/**
 * Created by mayco on 30/04/2017.
 */
var app = angular.module('notesApp', []);

(function () {

    'use strict';

   app.controller('SimpleCtrl', SimpleCtrl);

   SimpleCtrl.$inject = ['$location'];

    function SimpleCtrl($location) {

        var vm = this;

        vm.navigate = function () {
            $location.path('/some/where/else');
        };

    }
})();

/**
 * Created by mayco on 01/05/2017.
 */
var app = angular.module('simpleCtrl2App', []);

(function () {

    'use strict';

    app.controller('SimpleCtrl2', SimpleCtrl2);

    SimpleCtrl2.$inject = ['$location', '$window'];

    function SimpleCtrl2($location, $window) {

        var vm = this;

        vm.navigate1 = function () {
            $location.path('/some/where');
        };

        vm.navigate2 = function () {
            $location.path('/some/where/else');
        };
    }

})();
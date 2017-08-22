/**
 * Created by mayco on 27/04/2017.
 */
(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$log'];

    function MainCtrl($log) {

        var vm = this;

        vm.logStuff = function () {
            $log.log('The button was pressed');
        }
    }
})();
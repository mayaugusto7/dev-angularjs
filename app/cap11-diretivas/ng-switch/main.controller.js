/**
 * Created by mayco on 24/06/2017.
 */
(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {

        var vm = this;

        vm.currentTab = 'tab1';
    }

})();
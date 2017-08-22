/**
 * Created by mayco on 27/04/2017.
 */
(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {

        var vm = this;

        vm.tab = 'first';

        vm.open = function (tab) {
            vm.tab = tab;
        };
    }

    app.controller('SubCtrl', SubCtrl);

    SubCtrl.$inject = [];

    function SubCtrl() {

        var vm = this;

        vm.list = [
            {id: 1, label: 'Item 0'},
            {id: 2, label: 'Item 1'}
        ];

        vm.add = function () {
            vm.list.push({
                id: vm.list.length + 1,
                label: 'Item ' + vm.list.length
            })
        }
    }
})();
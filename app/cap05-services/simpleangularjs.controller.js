/**
 * Created by mayco on 29/04/2017.
 */
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

    SubCtrl.$inject = ['ItemService'];

    function SubCtrl(ItemService) {

        var vm = this;

        vm.list = function () {
            return ItemService.list();
        };

        vm.add = function () {

            ItemService.add({
                id: vm.list().length + 1,
                label: 'Item ' + vm.list().length
            });
        }
    }
})();
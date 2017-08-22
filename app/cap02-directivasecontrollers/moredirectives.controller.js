/**
 * Created by mayco on 22/04/2017.
 */
(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {

        var vm = this;

        vm.notes = [
            {label: 'First Note', done: 'false', assingnee: 'Shyam'},
            {label: 'Second Note', done: 'true'},
            {label: 'Done Note', done: 'true'},
            {label: 'Last Note', done: 'false', assingnee: 'Brad'}
        ];

        vm.getNoteClass = function (status) {
            return {
                done: status,
                pending: !status
            };
        };
    }

})();
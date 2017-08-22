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
            {
                id: 1,
                nome: 'First Note',
                done: false
            },
            {
                id: 2,
                nome: 'Second Note',
                done: false
            },
            {
                id: 3,
                nome: 'Finished Third Note',
                done: true
            }
        ];

    }

})();
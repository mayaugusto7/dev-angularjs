/**
 * Created by mayco on 22/04/2017.
 */
(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {

        var vm = this;

        vm.notes = {
            shayam: {
                id: 1,
                label: 'First Note',
                done: false
            },
            Misko: {
                id: 3,
                label: 'Finished Third Note',
                done: true
            },
            brad: {
                id: 2,
                label: 'Second Note',
                done: false
            }

        };

    }

})();
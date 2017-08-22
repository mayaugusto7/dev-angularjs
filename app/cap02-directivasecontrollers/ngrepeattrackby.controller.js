/**
 * Created by mayco on 22/04/2017.
 */
(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {

        var vm = this;

        var notes = [
            {
                id: 1,
                nome: 'First Note',
                done: false,
                someRandom: 31431},
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

        vm.notes1 = angular.copy(notes);
        vm.notes2 = angular.copy(notes);

        vm.changeNotes = function () {

            notes = [
                {
                    id: 1,
                    nome: 'Changed Note',
                    done: false,
                    someRandom: 4242},
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

            vm.notes1 = angular.copy(notes);
            vm.notes2 = angular.copy(notes);
        };
    }

})();
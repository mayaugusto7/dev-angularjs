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
            {id: 1, label: 'First Note', done: false},
            {id: 2, label: 'Second Note', done: false},
            {id: 3, label: 'Done Note', done: true},
            {id: 4, label: 'Last Note', done: false}
        ];

    }

})();
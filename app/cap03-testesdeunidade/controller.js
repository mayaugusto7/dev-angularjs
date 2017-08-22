/**
 * Created by mayco on 22/04/2017.
 */
angular.module('notesApp', [])
.controller('ListCtrl', [ function () {

    var vm = this;

    vm.items = [
        {id: 1, label: 'First', done: true},
        {id: 2, label: 'Second', done: false}
    ];

    vm.getDoneClass = function (item) {
        return {
            finished: item.done,
            unifinished: !item.done
        }
    }

}]);
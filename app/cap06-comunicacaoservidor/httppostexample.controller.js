/**
 * Created by mayco on 29/04/2017.
 */
(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$http', '$log'];

    function MainCtrl($http, $log) {

        var vm = this;

        vm.items = [];
        vm.newTodo = {};

        var fetchTodos = function () {
            return  $http.get('http://localhost:8000/api/note').then(function (response) {
                vm.items = response.data;
            }, function (errResponse) {
                $log.error('Error while fetching notes');
            });
        };

       fetchTodos();

       vm.add = function () {
           $http.post('http://localhost:8000/api/note', vm.newTodo)
               .then(fetchTodos)
               .then(function (response) {
                   vm.newTodo = {};
               });
       };

    }

})();
(function() {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];
    
    function MainCtrl() {

        var vm = this;

        vm.change = function () {
            vm.username = 'changed';
            vm.password = 'password';
        };

        vm.submit = function () {
            console.log('User clicked submit with', vm.username, vm.password);
        };

    }

})();
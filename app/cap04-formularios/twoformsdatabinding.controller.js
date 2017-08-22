(function() {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];
    
    function MainCtrl() {

        var vm = this;

       vm.submit1 = function () {
           var user = {username: vm.username, password: vm.password};
           console.log('First form submit with ', user);
       };

       vm.submit2 = function () {
           console.log('Second form submit with ', vm.user);
       };
    }

})();
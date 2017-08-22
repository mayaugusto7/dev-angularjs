(function() {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];
    
    function MainCtrl() {

        var vm = this;

       vm.submit = function () {
         console.log('User clicked submit with ', vm.user);
       };
    }

})();
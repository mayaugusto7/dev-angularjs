(function() {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];
    
    function MainCtrl() {

      var vm = this;

      vm.sports = [
          {label: 'Basketball', selected: 'YES'},
          {label: 'Cricket', selected: 'NO'},
          {label: 'Soccer', selected: 'NO'},
          {label: 'Swimming', selected: 'YES'}
      ]
    }

})();
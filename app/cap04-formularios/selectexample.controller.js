(function() {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];
    
    function MainCtrl() {

      var vm = this;

      vm.countries = [
          {label: 'USA', id: 1},
          {label: 'India', id: 2},
          {label: 'Other', id: 3}
      ];

      vm.selectedCountryId = 2;
      vm.selectedCountry = vm.countries[1];
    }

})();
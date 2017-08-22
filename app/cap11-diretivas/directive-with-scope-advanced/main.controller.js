/**
 * Created by mayco on 24/06/2017.
 */
(function () {

    'use strict';

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {

        var vm = this;

        vm.stocks = [
            {name: 'First Stock', price: 100, previous: 220},
            {name: 'Second Stock', price: 140, previous: 120},
            {name: 'Third Stock', price: 110, previous: 110},
            {name: 'Fourth Stock', price: 400, previous: 420}
        ];

        vm.onStockSelect = function (price, name, previous) {
            console.log('Selected Price ', price, 'Name ', name, 'Previous', previous);
        }

        //vm.stockTemplate = 'stock.html';

        //transferido para diretiva stock.widget.directive.js
        // vm.getChange = function (stock) {
        //     return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
        // }
    }

})();
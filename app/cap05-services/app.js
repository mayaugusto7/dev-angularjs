/**
 * Created by mayco on 27/04/2017.
 */

function ItemService(opt_items) {

    var items = opt_items || [];

    this.list = function() {
        return items;
    };

    this.add = function(item) {
        items.push(item);
    };
}

var app = angular.module('notesApp', [])
    .provider('ItemService', function () {

        var haveDefaultItems = true;

        this.disableDefaultItems = function () {
            haveDefaultItems = false;
        };

        //Esta funcao obtem nossas dependecias, e nao o provedor anterior

        this.$get = [function () {

            var optItems = [];

            if (haveDefaultItems) {
                optItems = [
                    {id: 1, label: 'Item 0'},
                    {id: 2, label: 'Item 1'}
                ];
            }

            return new ItemService(optItems);
        }];
    }).config(['ItemServiceProvider'], function (ItemServiceProvider) {

        //Para ver como o provedor pode alterar a configuração, altere o valor de shouldHaveDefaults para true e tente executar o exemplo
        var shouldHaveDefaults = true;

        //Obetem a configuracao do servidor
        // Define shouldHaveDefaults
        // Mudanca de modo magico teste
        if (shouldHaveDefaults) {
            ItemServiceProvider.disableDefaultItems();
        }
    });
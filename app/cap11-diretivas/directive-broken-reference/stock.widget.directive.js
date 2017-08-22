/**
 * Created by mayco on 24/06/2017.
 *
 * Nao posso o templateUrl e template properties juntos ao criar a diretiva
 *
 * template: usado para criar um html inline
 * templateUrl: usado para acessar um html externo
 *
 * restrict: 
 *
 * 'A' permite que a diretiva seja declarada como Atributo  <div stock-widget>
 *  Preferiveis em mudancas de comporto exemplo: ng-show
 *
 * 'E' permite que a diretiva seja declarada como um novo Elemento html  <stock-widget></stock-widget>
 * Usada para criarmos conteudos html novos
 *
 * 'C' permite que a diretiva seja declarada como uma class css exemplo <div class="stock-widget"
 * Usado na renderizacao do DOM exemplo: ng-cloack
 *
 * 'M' permite que a diretiva seja declarada como comentario exemplo <!-- directive: stock-widget -->
 *     
 * link:  chamada funcao link
 * usada como um controlador da diretiva possui
 * tres atributos padroes $scope, $element, $attrs
 *
 * scope:
 *
 * podem ser false, true ou object
 *
 * false valor default a diretiva herda o escopo do pai
 * true a diretiva herda o escopo do pai e a diretiva tera seu proprio escopo, qualquer modificacao nao estara
 * disponivel para o pai
 *
 * object, chamado de escopo isolado, mais utilizado para criacao de componentes reutilizaveis
 * ele nao herda nada do pai e qualquer dado que deve ser compártilhado do escopo-pai devera
 * ser passado por meio de atributos html
 *
 * tipos de atributos serão especificados no html
 *
 * '=' O Atributo sera tratado como objeto json
 * '@' O Atributo sera tratado como uma string que pode ter sim ou nao expressoes de binding do angular
 * '&' O Atributo devera ser tratado como uma função , e a diretiva pode disparar essa funcao a qualquer momento
 *
 *    scope: {
              stockData: '='
     }

 <div stock-widget stock-data="stock">
 * */

(function () {

    'use strict';

    app.directive('stockWidget', StockWidget);

    StockWidget.$inject = [];

    function StockWidget() {
        return {
            templateUrl: 'stock.html',
            restrict: 'AE',
            scope: {
              stockData: '='
            },
            link: function ($scope, $element, $attrs) {

                $scope.getChange = function (stock) {
                    return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
                };

                $scope.changeStock = function () {
                    $scope.stockData = {
                        name: 'Directive Stock',
                        price: 500,
                        previous: 200
                    }

                }
            }
        };
    }

    // TEMPLATE
    // function StockWidget() {
    //     return {
    //         template: '<div class="stock-dash">' +
    //             'Name: ' +
    //             '<span class="stock-name" ng-bind="stock.name"></span>' +
    //             'Price: ' +
    //             '<span class="stock-price" ng-bind="stock.price | currency"></span>' +
    //             'Percent Change: ' +
    //             '<span class="stock-change" ng-bind="mainCtrl.getChange(stock)">' +
    //             '%' +
    //             '</span>' +
    //             '</div>'
    //     };
    // }

})();
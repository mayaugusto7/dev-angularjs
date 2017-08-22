/**
 * Created by mayco on 29/04/2017.
 */
angular.module('notesApp', [])
    .controller('LoginCtrl', ['$http', function ($http) {
        var vm = this;
        vm.user = {};

        vm.message = 'Please login';

        vm.login = function () {

            $http.post('/api/login', vm.user).then(function (resp) {
               vm.message = resp.data.msg;
            });
        };
    }])
    .config(['$httpProvider', function ($httpProvider) {
        //Todo dado de POST passa a ter estilo JQuery
        $httpProvider.defaults.tranformRequest.push(function (data) {
            var requestStr;

            if (data) {
                data = JSON.parse(data);

                for (var key in data) {
                    if (requestStr) {
                        requestStr += '&' + key + '=' + data[key];
                    } else {
                        requestStr + key + '=' + data[key];
                    }
                }
            }

            return requestStr;
        });

        // Define o conteudo como FORM para todas as solicitacoes POST
        // Isso nao vale para solicitacoes GET
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);
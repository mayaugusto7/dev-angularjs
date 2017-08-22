/**
 * Created by mayco on 29/04/2017.
 */
(function () {

    'use strict';

    interceptor.factory('MyLoggingInterceptor', MyLoggingInterceptor);

    MyLoggingInterceptor.$inject = ['$q', '$log'];

    function MyLoggingInterceptor($q, $log) {

        /**
         * Se houver um erro, nao houver permissao ou ocorrer uma condicao personalizada
         * return $q.reject('Not allowed')
         * @param config
         * @returns {*}
         */
        function request(config) {
            console.log('Request made with ', config);
            return config;
        }

        /**
         * Continua para garantir que a proxima cadeia de promisse veja um erro
         *
         * Ou tratado com sucesso?
         *
         * return someValue
         *
         * @param rejection
         */
        function requestError(rejection) {
            console.info('Request error due to ', rejection);
            return $q.reject(rejection);
        }

        /**
         * Retorna uma promise
         * @param response
         */
        function response(response) {
            console.info('Response from server', response);
            return response || $q.when(response);
        }

        /**
         * Continua para garantir que a proxima cadeia de promise veja um erro
         * Pode verificar o codigo de status de auth aqui se for necessario
         *
         * if (rejection.status === 403) {
         *  Mostra um dialogo de login
         *  Retorna um valor para dizer aos controladores que foi tratado
         * }
         *
         * Ou retorna uma rejeição para continuar a cadeia de falhas da promise
         *
         * @param rejection
         */
        function responseError(rejection) {
            console.info('Error in response', rejection);
            return $q.reject(rejection);
        }

        return {
            request: request,
            onRequestError: requestError,
            response: response,
            responseError: responseError
        };
    }

})();
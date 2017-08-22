/**
 * Created by mayco on 29/04/2017.
 */
(function () {

    'use strict';

    interceptor.factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['AuthInfoService', '$q'];

    function AuthInterceptor(AuthInfoService, $q) {

        function request(config) {

            if (AuthInfoService.hasAuthHeader()) {
                config.headers['Authorization'] = AuthInfoService.getAuthHeader();
            }

            return config;
        }

        function responseError(responseRejection) {

            if (responseError.status === 403) {
                //Problema de autorizacao, acesso proibido
                AuthInfoService.redirectToLogin();
            }

            return $q.reject(responseRejection);
        }

        return {
            request: request,
            responseError: responseError
        };
    }

})();
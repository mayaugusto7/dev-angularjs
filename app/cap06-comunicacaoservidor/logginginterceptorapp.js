/**
 * Created by mayco on 29/04/2017.
 */
var interceptor = angular.module('notesApp', [])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('MyLoggingInterceptor');
        $httpProvider.interceptors.push('AuthInterceptor');
    }]);
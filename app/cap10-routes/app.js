/**
 * Created by mayco on 21/05/2017.
 */
var app = angular.module('routingApp', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            template: '<h5>This is the default route</h5>'
        })
        .when('/second',{
            template: '<h5>This is the second route</h5>'
        })
        .otherwise({redirectTo: '/'});
}]);
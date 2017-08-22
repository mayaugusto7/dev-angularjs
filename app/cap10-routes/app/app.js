/**
 * Created by mayco on 21/05/2017.
 */
var app = angular.module('fifaApp', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'scripts/views/teamlist.view.html',
            controller: 'TeamListCtrl as teamListCtrl'
        })
        .when('/login',{
            templateUrl: 'scripts/views/login.view.html'
        })
        .when('/team/:code', {
            templateUrl: 'scripts/views/teamdetails.view.html',
            controller: 'TeamDetailsCtrl as teamDetailsCtrl',
            resolve: {
                auth: ['$q', '$location', 'UserService', function ($q, $location, UserService) {
                    return UserService.session().then(function (success) {

                    }, function (err) {
                        $location.path('/login');
                        $location.replace();
                        return $q.reject(err);
                    });
                }]
            }
        });

       $routeProvider.otherwise({redirectTo: '/'});
}]);
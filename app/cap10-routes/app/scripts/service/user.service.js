/**
 * Created by mayco on 27/05/2017.
 */
(function () {

    app.factory('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http) {

        var service =  {
            isLoggedIn: false,
            session: function() {
                return $http.get('http://localhost:8000/api/session')
                    .then(function (response) {
                        service.isLoggedIn = true;
                        return response;
                    });
            },
            login: function (user) {
                return $http.post('http://localhost:8000/api/login', user)
                    .then(function (response) {
                        service.isLoggedIn = true;
                        return response;
                    });
            }
        };

        return service;
    }
})();
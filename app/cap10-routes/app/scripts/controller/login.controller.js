/**
 * Created by mayco on 27/05/2017.
 */
(function () {

    app.controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['UserService', '$location'];

    function LoginCtrl(UserService, $location) {

        var vm = this;

        vm.user = {username: '', password: ''};
        vm.login = function () {
            UserService.login(vm.user).then(function (response) {
                $location.path('/team');
            }, function (error) {
                vm.errorMessage = error.data.msg;
            });
        };

    }
})();
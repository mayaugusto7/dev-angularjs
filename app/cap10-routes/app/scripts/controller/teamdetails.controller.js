/**
 * Created by mayco on 27/05/2017.
 */
(function () {

    app.controller('TeamDetailsCtrl', TeamDetailsCtrl);

    TeamDetailsCtrl.$inject = ['$location', '$routeParams', 'FifaService'];

    function TeamDetailsCtrl($location, $routeParams, FifaService) {

        var vm = this;

        vm.team = {};

        FifaService.getTeamDetails($routeParams.code).then(function (resp) {
            vm.team = resp.data;
        }, function (error) {
            $location.path('/login');
        })
    }

})();
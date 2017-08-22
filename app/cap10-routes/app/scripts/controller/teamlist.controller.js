/**
 * Created by mayco on 27/05/2017.
 */
(function () {

    app.controller('TeamListCtrl', TeamListCtrl);

    TeamListCtrl.$inject = ['FifaService'];

    function TeamListCtrl(FifaService) {

        var vm = this;

        vm.teams = [];

        FifaService.getTeams().then(function (resp) {
            vm.teams = resp.data;
        });
    }

})();
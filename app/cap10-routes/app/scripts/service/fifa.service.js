/**
 * Created by mayco on 27/05/2017.
 */
(function () {

    app.factory('FifaService', FifaService);

    FifaService.$inject = ['$http'];

    function FifaService($http) {

        function getTeams() {
            return $http.get('http://localhost:8000/api/team');
        }

        function getTeamDetails(code) {
            return $http.get('http://localhost:8000/api/team/' + code);
        }

        return {
            getTeams: getTeams,
            getTeamDetails: getTeamDetails
        }
    }

})();
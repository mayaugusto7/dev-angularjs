/**
 * Created by mayco on 27/05/2017.
 */
(function () {

    app.controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['UserService'];

    function MainCtrl(UserService) {

        var vm = this;

        vm.userService = UserService;

        /**
         * Verifica se o usuario esta logado quando a aplicação for carregada
         * UserService ira atualizar isLoggedIn Automaticamente depois que esta chamada for concluida.
         */

        UserService.session();
    }
})();
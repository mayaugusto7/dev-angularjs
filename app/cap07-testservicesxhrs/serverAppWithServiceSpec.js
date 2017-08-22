/**
 * Created by mayco on 17/05/2017.
 */
describe('Server App Integration', function () {

    beforeEach(module('serverApp2'));

    var ctrl, mockBackend;

    beforeEach(inject(function ($controller, $httpBackend) {

        mockBackend = $httpBackend;
        mockBackend.expectGET('http://localhost/api/note')
            .response(404, {msg: 'Not Found'});

        ctrl = $controller('MainCtrl');
    }));

    it('should handle error while loading items', function () {
       expect(ctrl.items).toEqual([]);

       /// simula resposta do servidor
        mockBackend.flush();

        // Não ha items provenientes do servidor, somente um erro
        // Portanto items deverá continuar vazio
        expect(ctrl.items).toEqual([]);

        //verifica a mensagem de erro
        expect(ctrl.errorMessage).toEqual('Not Found');
    });


    afterEach(function () {

        //Garante que todas os expects definidos em $httpBackend
        //Foram realmente chamados

        mockBackend.verifyNoOutstandingExpectation();

        //Garante que todas as solicitacoes ao servidor
        // foram realmente respondidas (usando flush())
        mockBackend.verifyNoOutstandingRequest();

    });




});
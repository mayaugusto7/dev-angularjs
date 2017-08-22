/**
 * Created by mayco on 02/05/2017.
 */

describe('MainCtrl Server Calls', function () {

    beforeEach(module('serverApp'));

    var ctrl, mockBackend;

    beforeEach(inject(function($controller, $httpBackend) {
        mockBackend = $httpBackend;
        mockBackend.expectGET('http://localhost:8000/api/note').respond([{id: 1, label: 'Mock'}]);
        ctrl = $controller('MainCtrl');
    }));

    it('should load items from server', function () {

        /**
         * Inicialmente antes do servidor responder
         * items devera estar vazio
         */
        expect(ctrl.items).toEqual([]);

        /**
         * Simula a resposta do servidor
         */
        mockBackend.flush();

        expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
    });

    afterEach(function () {
        /**
         * Garante que todas os expets definidos em $httpBackend realmente foram chamados
         */
        mockBackend.verifyNoOutstandingExpectation();

        /**
         * Garante que todas as solicitacoes ao servidor foram realmente respondidas (usando flush)
         */
        mockBackend.verifyNoOutstandingRequest();
    })

});
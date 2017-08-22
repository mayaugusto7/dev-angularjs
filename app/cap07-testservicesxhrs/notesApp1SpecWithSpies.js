/**
 * Created by mayco on 02/05/2017.
 */
/**
 * Hook Spie, ou seja o teste fica espionando  quantas chamadas foram feitas em determinado metodo
 *
 * Definir mocks e spies antes de instanciar os controllers
 *
 */
describe('ItemCtrl with spies', function () {

    beforeEach(module('notesApp1'));

    var ctrl, itemService;

    beforeEach(inject(function ($controller, ItemService) {

        spyOn(ItemService, 'list').and.callThrough();
        itemService = ItemService;
        ctrl = $controller('ItemCtrl');
    }));

    it('should load mocked out items', function () {
        expect(itemService.list).toHaveBeenCalled();
        expect(itemService.list.calls.count()).toEqual(1);
        expect(ctrl.items).toEqual([
            {id: 1, label: 'Item 0'},
            {id: 2, label: 'Item 1'}
        ]);
    });
});
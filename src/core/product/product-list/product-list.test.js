define(['angular','angularMocks','demoApp','./product-list.ctrl'], function() {
    describe("Product List Test", function(){

        it("should be true", function(){
            expect(true).toBe(true);

        });
    });

    describe("Product Controller ", function () {
        var $controllerConstructor;
        var scope;



        beforeEach(module('demoApp'));
        beforeEach(module('demoApp.core.productList'));



        beforeEach(inject(function ($controller,$rootScope) {
            $controllerConstructor = $controller;
            scope = $rootScope.$new();

        }));

        it("should have products", function () {
           var vm = $controllerConstructor('demoApp.core.productList.productListCtrl', {$scope:scope});
            expect(vm.products).toEqual("bla.bla.bla");

        });

    });
});
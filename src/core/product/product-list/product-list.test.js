define(['angular','angularMocks','demoApp','./product-list.ctrl'], function() {
    'use strict';
    describe("Product List Test", function(){

        it("should be true", function(){
            expect(true).toBe(true);

        });
    });

    describe("Product Controller ", function () {
        var $controllerConstructor;
        var scope;



        beforeEach(module('demoApp'));
        beforeEach(module('demoApp.core.product'));



        beforeEach(inject(function ($controller,$rootScope) {
            $controllerConstructor = $controller;
            scope = $rootScope.$new();

        }));

        it("should have products", function () {
           var vm = $controllerConstructor('demoApp.core.product.productListCtrl', {$scope:scope});
            expect(vm.products).toEqual("bla.bla.bla");

        });

    });
});
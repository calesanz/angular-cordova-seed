define(['angular','angularMocks','demoApp','./main.ctrl'], function() {
    describe("demo test", function(){

        it("should be true", function(){
            expect(true).toBe(true);

        });
    });

    describe("Main", function () {
        var $controllerConstructor;
        var scope;

        beforeEach(module('demoApp'));
        beforeEach(module('demoApp.core.main'));

        beforeEach(inject(function ($controller,$rootScope) {
            $controllerConstructor = $controller;
            scope = $rootScope.$new();

        }));

        it("should have a title", function () {
            var vm = $controllerConstructor('demoApp.core.mainCtrl', {$scope:scope});
            expect(vm.title).toEqual("Wow it Works!");

        });

    });
});
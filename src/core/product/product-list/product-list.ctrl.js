/**
 * Created by elias on 05.03.2015.
 */

define(['angular','../product.mdl'], function (ng) {
    'use strict';
    var mdl = ng.module('demoApp.core.product');


    mdl.controller('demoApp.core.product.productListCtrl', ['$scope', function ($scope) {
        var vm = $scope.vm = this;
        vm.products = "bla.bla.bla";

    }]);
    return mdl;

});

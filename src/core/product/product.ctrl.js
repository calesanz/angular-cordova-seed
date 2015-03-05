/**
 * Created by elias on 05.03.2015.
 */
define(['angular','./product.mdl'], function (ng) {
    'use strict';
    var mdl = ng.module('demoApp.core.product');


    mdl.controller('demoApp.core.product.productCtrl', ['$scope', function ($scope) {
        var vm = $scope.vm = this;
        vm.title = "Products";

    }]);
    return mdl;

});

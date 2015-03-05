/**
 * Created by elias on 05.03.2015.
 */

define(['angular'], function (ng) {
    'use strict';
    var mdl = ng.module('demoApp.core.productList',[]);


    mdl.controller('demoApp.core.productList.productListCtrl', ['$scope', function ($scope) {
        var vm = $scope.vm = this;
        vm.products = "bla.bla.bla";

    }]);
    return mdl;

});

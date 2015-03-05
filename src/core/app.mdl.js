
define([
    'angular',
    'angularUiRouter',
    'core/product/product.ctrl',
    'core/product/product-list/product-list.ctrl',
], function (angular) {
    'use strict';
    var app = angular.module('demoApp', ['ui.router','demoApp.core.product']);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise( "/");



        $stateProvider
            .state('product', {
                abstract: true,

                templateUrl: "core/product/product.tpl.html",
                controller:"demoApp.core.product.productCtrl"
            })
            .state('product.list', {
                templateUrl: "core/product/product-list/product-list.tpl.html",
                controller: "demoApp.core.product.productListCtrl"
        });


    }]);
    app.run(['$state', function ($state) {
        $state.go('product.list');
    }]);
    return app;
});

define([
    'angular',
    'angularUiRouter',
    'core/product/product-list/product-list.ctrl'
], function (angular) {
    'use strict';
    var app = angular.module('demoApp', ['ui.router','demoApp.core.productList']);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise( "/main");


        $stateProvider.state('main', {
            templateUrl: "core/product/product-list/product-list.tpl.html",
            controller: "demoApp.core.productList.productListCtrl"
        }
        );


    }]);
    app.run(['$state', function ($state) {
        $state.go('main');
    }]);
    return app;
});
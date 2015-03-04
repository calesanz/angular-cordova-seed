
'use strict';
define([
    'angular',
    'angularUiRouter'
], function(angular) {

    return angular.module('demoApp', ['ui.router']
    ).config(['$stateProvider',"$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/main");


            $stateProvider.state('main', {
                templateProvider: function ($stateParams) {
                    throw new Error("tüüp");
                    return $stateParams.type + ".tpl.html";
                },
                controllerProvider: function($stateParams) {
                    throw new Error("tüüp");
                    return $stateParams.type + ".ctrl.js";

                }
            });

    }]);
});

'use strict';
define(['angular'], function (ng) {

    var ctrl = ng.module('demoApp.core.main', []);

    ctrl.controller('demoApp.core.mainCtrl', ['$scope', function ($scope){
        $scope.vm = this;
        this.title = "Wow it Works!";

    }]);
    return ctrl;

});

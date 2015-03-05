/**
 * Created by elias on 05.03.2015.
 */
({
    paths: {
        demoApp:'core/app.mdl',
            angular: '../bower_components/angular/angular',
            angularUiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
            angularMocks: '../bower_components/angular-mocks/angular-mocks',
            text: '../bower_components/requirejs-text/text'

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularUiRouter': ['angular'],
            'demoApp' :{'deps': ['angular','angularUiRouter']},
        'angularMocks': {
            deps:['angular'],
                'exports':'angular.mock'
        }
    },
    priority: [
        "angular"
    ]
});
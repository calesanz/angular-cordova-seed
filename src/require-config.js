

if(window.__karma__) {

    var allTestFiles = [];
    var TEST_REGEXP = /.*\.test\.js$/;

    var pathToModule = function(path) {

        return path.replace(/^\/base\/src\//, '').replace(/\.js$/, '');
    };

    Object.keys(window.__karma__.files).forEach(function(file) {

        if (TEST_REGEXP.test(file)) {
            // Normalize paths to RequireJS module names.
            allTestFiles.push(pathToModule(file));
        }
    });
}

require.config({
    paths: {
        demoApp:'core/app.mdl',
        angular: '../bower_components/angular/angular',
        angularUiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
        text: '../bower_components/requirejs-text/text',

        mobileAngularUi:'../bower_components/mobile-angular-ui/dist/js/mobile-angular-ui'


    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularUiRouter': ['angular'],
        'mobileAngularUi': {
            deps:['angular'],
            'exports':'mobileAngularUi'
        },
        'demoApp' :{'deps': ['angular','angularUiRouter','mobileAngularUi']},
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    priority: [
        "angular"
    ],
    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/src' : ''
});

require([
        'angular',
        'demoApp'
    ], function(angular) {

        angular.bootstrap(document, ['demoApp']);

    }
);
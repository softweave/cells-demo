'use strict';

/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'ngcTableDirective',
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/cells', {
                templateUrl: 'partials/cells.html',
                controller: 'CellsCtrl'
            }).
            otherwise({
                redirectTo: '/cells'
            });
    }]);

// 'use strict';

// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules
        // 'ngAnimate',        // animations
        'ngRoute'              // routing
        // 'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)

    ]);

    // Handle routing errors and success events
    app.run(['$route',  function ($route) {
            // Include $route to kick start the router.
        }]);
})();
'use strict';

app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'itemIndex',
                templateUrl: 'views/item/index.html'
            })
            .when('/items/', {
                controller: 'itemList',
                templateUrl: 'views/item/list.html'
            })
            .when('/items/new', {
                controller: 'itemCreate',
                templateUrl: 'views/item/create.html'
            })
    }
);
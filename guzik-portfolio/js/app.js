angular.module('portfolio', ['ui.bootstrap'])
    .controller('CarouselCtrl', function ($scope) {
        $scope.myInterval = 5000;
        $scope.slides = [
            {image: 'resources/realization/www/realization_www_1.png'},
            {image: 'resources/realization/www/realization_www_2.png'},
            {image: 'resources/realization/www/realization_www_3.png'},
            {image: 'resources/realization/www/realization_www_4.png'},
            {image: 'resources/realization/www/realization_www_5.png'},
            {image: 'resources/realization/www/realization_www_6.png'},
            {image: 'resources/realization/www/realization_www_7.png'},
            {image: 'resources/realization/www/realization_www_8.png'},
            {image: 'resources/realization/www/realization_www_9.png'}
        ];
    });
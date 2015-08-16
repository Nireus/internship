angular.module('esperanto',[])

.controller('GalleryCtrl', function($scope){
    $scope.imageSource = '';
    $scope.imageShown = "none";
    $scope.showImage = function (imageID){
        $scope.imageSource = this.photos[imageID];
        $scope.imageShown = "block";
    }
    $scope.closeGallery = function(){
        $scope.imageShown = false;
        $scope.imageShown = "none";
    }
    $scope.photos = [
        './resources/picture_1_galeria.png',
        './resources/picture_2_galeria.png',
        './resources/picture_3_galeria.png',
        './resources/picture_4_galeria.png',
        './resources/picture_1_galeria.png',
        './resources/picture_2_galeria.png',
        './resources/picture_3_galeria.png',
        './resources/picture_4_galeria.png',
        './resources/picture_1_galeria.png',
        './resources/picture_2_galeria.png',
        './resources/picture_3_galeria.png',
        './resources/picture_4_galeria.png',
        './resources/picture_1_galeria.png',
        './resources/picture_2_galeria.png',
        './resources/picture_3_galeria.png',
        './resources/picture_4_galeria.png',
        './resources/picture_1_galeria.png',
        './resources/picture_2_galeria.png',
        './resources/picture_3_galeria.png',
        './resources/picture_4_galeria.png',
        './resources/picture_1_galeria.png',
        './resources/picture_2_galeria.png',
        './resources/picture_3_galeria.png',
        './resources/picture_4_galeria.png'
    ];
});
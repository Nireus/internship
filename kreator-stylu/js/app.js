angular.module('kreatorStylu',[])
.controller('OfferPanelCtrl', function(){
    this.offers = [
        {
            image: './resources/images/oferta_image_1.png',
            title: 'Strzyżenie',
            description: 'strzyżenie damskie od 40 PLN\nstrzyżenie męskie od 30 PLN\nstrzyżenie dzecięce od 30 PLN'
        },
        {
            image: './resources/images/oferta_image_2.png',
            title: 'Koloryzacja',
            description: 'koloryzacja od 100 PLN'
        },
        {
            image: './resources/images/oferta_image_3.png',
            title: 'Stylizacja',
            description: 'Cennik standardowy:\nupięcie ślubne od 90 PLN\nupięcie okolicznościowe od 80 PLN'
        },
        {
            image: './resources/images/oferta_image_4.png',
            title: 'Zabiegi',
            description: 'PRO-KERATIN REFIL 60 PLN\n POWER REPAIR Lipidum 60 PLN\n PRIMER REPAIR Lipidum 90 PLN\n LISSCEUTIC 90 PLN'
        },
        {
            image: './resources/images/oferta_image_3.png',
            title: 'Stylizacja',
            description: 'Cennik standardowy:\nupięcie ślubne od 90 PLN\nupięcie okolicznościowe od 80 PLN'
        }
    ]
}).controller('GalleryControl', function($scope){
        path1 = './resources/images/kontakt_map.png';
        $scope.imageSource = '';
        $scope.imageShown = false;
        $scope.showImage = function(){
            $scope.imageSource = path1;
            $scope.imageShown = true;
        };
        $scope.closeGallery = function(){
            $scope.imageShown = false;
        }
    });
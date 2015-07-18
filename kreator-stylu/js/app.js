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
    ];
})
.controller('PartnershipCtrl', function(){
    this.partnershipLogos = [
        './resources/images/wspolpraca_logo_1.png',
        './resources/images/wspolpraca_logo_2.png',
        './resources/images/wspolpraca_logo_3.png',
        './resources/images/wspolpraca_logo_4.png',
        './resources/images/wspolpraca_logo_5.png',
        './resources/images/wspolpraca_logo_6.png',
        './resources/images/wspolpraca_logo_7.png',
        './resources/images/wspolpraca_logo_8.png'
    ];
    this.linesArray = function(){
        return new Array(this.partnershipLogos.length);
    };
})
.controller('GalleryCtrl', function($scope){
    $scope.path = 'resources/images/galeria_image_';
    $scope.imageSource = '';
    $scope.imageShown = false;
    $scope.zIndexStyle = {"z-index" : "0"}
    $scope.showImage = function (imageID){
        $scope.imageSource = $scope.path + imageID + ".png";
        $scope.imageShown = true;
        $scope.zIndexStyle = {"z-index" : "2"}
    }
    $scope.closeGallery = function(){
        $scope.imageShown = false;
        $scope.zIndexStyle = {"z-index" : "0"}
    }
    this.photos = [
        {
            image: './resources/images/galeria_image_1.png',
            date: '12 maja 2015'
        },
        {
            image: './resources/images/galeria_image_2.png',
            date: '5 lutego 2015'
        },
        {
            image: './resources/images/galeria_image_3.png',
            date: '9 grudnia 2015'
        },
        {
            image: './resources/images/galeria_image_2.png',
            date: '5 lutego 2015'
        },
    ];
})
.controller('IndividualPopupCtrl', function($scope){
    $scope.imageSource = '';
    $scope.imageShown = false;
    $scope.zIndexStyle = {"z-index" : "0"}
    $scope.showImage = function(imageID){
        if(imageID === 0){
            $scope.imageSource = './resources/images/kontakt_map_big.png';
        }else{
            $scope.imageSource = './resources/images/zespol_icon_' + imageID + '_big.png';
        }
        $scope.imageShown = true;
        $scope.zIndexStyle = {"z-index" : "2"}
    };
    $scope.closeGallery = function(){
        $scope.imageShown = false;
        $scope.zIndexStyle = {"z-index" : "0"}
    }
});
angular.module('pabian', ['ui.bootstrap'])
.controller('ReferenceCaruzel', function($scope){
        $scope.myInterval = 5000;
        $scope.references = [
            {
                body:'"Niezwykle sumienny oraz oddany pracownik. Kwestią, która odróznia go od innych jest zmysł do samodoskonalenia oraz rozwijania swoich umiejętności."',
                signature: 'Bogusław Gajda, ARP Agencja Reklamowa'
            },
            {
                body:'"Postać Pawła postawiła mój stary FanPage na nogi. Dzięki niemu promocja mojej witryny ruszyła pełną parą. Prowadzi Social Media Branding swoich klientów w bardzo dobry sposób."',
                signature: 'Paweł Pabian, Perfect Progress'
            },
            {
                body:'"Dzięki niemu udało mi się rozpocząć działanie promocyjne dotyczące mojej oferty . W sposób profesjonalny podszedł do zagadnienia, rozwikłał problem sieciowego niezadowolenia i braku odbioru przez internautów. Polecam współpracę. Wsparcie graficzne, copywriterskie, marketingowe na wysokim poziomie."',
                signature: 'Karol Pabian, Perfect Progress'
            },
            {
                body:'"Jest osobą energiczną, komunikatywną, szybko odnajduje się w nowym otoczeniu i łatwo nawiązuję kontakty interpersonalne. Potrafi pracować zarówno samodzielnie, jak i w grupie. Jest osobą sumienną i zaangażowaną w pracę, powierzone zadania wykonuje dokładnie i systematycznie."',
                signature: 'Marek Sitek, SayTech'
            },
            {
                body:'"Paweł jest osobą ambitną, ciągle podnoszącą swoje kwalifikacje. W czasie praktyki zagranicznej wykorzystał wszelkie możliwe szanse na zdobycie dodatkowych kwalifikacji - ukończył kurs języka włoskiego na poziomie A2, wziął udział w cyklu szkoleń z zakresu IT .Znakomicie sprawdzał się zarówno w sytuacjach wymagających indywidualnego wysiłku, jak i w pracy zespołowej. Ma wysokie umiejętności interpersonalne - łatwo nawiązuje kontakty a w swoim zespole wytworzył atmosferę wzajemnej pomocy i zrozumienia."',
                signature: 'Stanisław Augustyn, koordynator projektu "Leonardo da Vinci"'
            },
            {
                body:'"Wykonywał swoje zadania systematycznie i obowiązkowo. Nie boi się nowych wyzwań i chętnie stosuje prawidłowe tematycznie rozwiązania. Jestem w pełni zadowolony ze współpracy z Pawłem."',
                signature: 'Paweł Ciesielski, Agencja Brandingowa InVitro'
            }

        ];
    }).controller('GalleryControl', function($scope){
        path1 = './resources/images/photo_';
        path2 = '_original.jpg';
        $scope.imageSource = '';
        $scope.imageShown = false;
        $scope.showImage = function (imageID){
            $scope.imageSource = path1 + imageID + path2;
            $scope.imageShown = true;
        }
        $scope.closeGallery = function(){
            $scope.imageShown = false;
        }
    });



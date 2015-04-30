angular.module('portfolio', ['ui.bootstrap'])
    .controller('CarouselCtrl', function ($scope) {
        $scope.myInterval = 5000;
        $scope.currentCategory = 0;

        $scope.slides = [
            [
                {image: 'resources/realization/rastrowa/rastrowa_1.png'},
                {image: 'resources/realization/rastrowa/rastrowa_2.png'},
                {image: 'resources/realization/rastrowa/rastrowa_3.png'},
                {image: 'resources/realization/rastrowa/rastrowa_4.png'},
                {image: 'resources/realization/rastrowa/rastrowa_5.png'},
                {image: 'resources/realization/rastrowa/rastrowa_6.png'},
                {image: 'resources/realization/rastrowa/rastrowa_7.png'},
                {image: 'resources/realization/rastrowa/rastrowa_8.png'},
                {image: 'resources/realization/rastrowa/rastrowa_9.png'},
                {image: 'resources/realization/rastrowa/rastrowa_10.png'},
                {image: 'resources/realization/rastrowa/rastrowa_11.png'},
                {image: 'resources/realization/rastrowa/rastrowa_12.png'},
                {image: 'resources/realization/rastrowa/rastrowa_13.png'},
                {image: 'resources/realization/rastrowa/rastrowa_14.png'},
                {image: 'resources/realization/rastrowa/rastrowa_15.png'},
                {image: 'resources/realization/rastrowa/rastrowa_16.png'},
                {image: 'resources/realization/rastrowa/rastrowa_17.png'},
                {image: 'resources/realization/rastrowa/rastrowa_18.png'},
                {image: 'resources/realization/rastrowa/rastrowa_19.png'},
                {image: 'resources/realization/rastrowa/rastrowa_20.png'},
                {image: 'resources/realization/rastrowa/rastrowa_21.png'},
                {image: 'resources/realization/rastrowa/rastrowa_23.png'},
                {image: 'resources/realization/rastrowa/rastrowa_24.png'},
                {image: 'resources/realization/rastrowa/rastrowa_25.png'},
                {image: 'resources/realization/rastrowa/rastrowa_26.png'},
                {image: 'resources/realization/rastrowa/rastrowa_27.png'},
                {image: 'resources/realization/rastrowa/rastrowa_28.png'},
                {image: 'resources/realization/rastrowa/rastrowa_29.png'},
                {image: 'resources/realization/rastrowa/rastrowa_30.png'},
                {image: 'resources/realization/rastrowa/rastrowa_31.png'},
                {image: 'resources/realization/rastrowa/rastrowa_32.png'},
                {image: 'resources/realization/rastrowa/rastrowa_33.png'},
                {image: 'resources/realization/rastrowa/rastrowa_34.png'},
                {image: 'resources/realization/rastrowa/rastrowa_35.png'},
                {image: 'resources/realization/rastrowa/rastrowa_36.png'},
                {image: 'resources/realization/rastrowa/rastrowa_37.png'},
                {image: 'resources/realization/rastrowa/rastrowa_38.png'},
                {image: 'resources/realization/rastrowa/rastrowa_39.png'},
                {image: 'resources/realization/rastrowa/rastrowa_40.png'},
                {image: 'resources/realization/rastrowa/rastrowa_41.png'},
                {image: 'resources/realization/rastrowa/rastrowa_42.png'},
                {image: 'resources/realization/rastrowa/rastrowa_43.png'},
                {image: 'resources/realization/rastrowa/rastrowa_44.png'},
                {image: 'resources/realization/rastrowa/rastrowa_45.png'},
                {image: 'resources/realization/rastrowa/rastrowa_46.png'},
                {image: 'resources/realization/rastrowa/rastrowa_47.png'},
                {image: 'resources/realization/rastrowa/rastrowa_48.png'},
                {image: 'resources/realization/rastrowa/rastrowa_49.png'},
                {image: 'resources/realization/rastrowa/rastrowa_50.png'},
                {image: 'resources/realization/rastrowa/rastrowa_51.png'},
                {image: 'resources/realization/rastrowa/rastrowa_52.png'},
                {image: 'resources/realization/rastrowa/rastrowa_53.png'},
                {image: 'resources/realization/rastrowa/rastrowa_54.png'},
                {image: 'resources/realization/rastrowa/rastrowa_55.png'},
                {image: 'resources/realization/rastrowa/rastrowa_56.png'},
                {image: 'resources/realization/rastrowa/rastrowa_57.png'},
                {image: 'resources/realization/rastrowa/rastrowa_58.png'},
                {image: 'resources/realization/rastrowa/rastrowa_59.png'},
                {image: 'resources/realization/rastrowa/rastrowa_60.png'},
                {image: 'resources/realization/rastrowa/rastrowa_61.png'},
                {image: 'resources/realization/rastrowa/rastrowa_62.png'},
                {image: 'resources/realization/rastrowa/rastrowa_63.png'},
                {image: 'resources/realization/rastrowa/rastrowa_64.png'},
                {image: 'resources/realization/rastrowa/rastrowa_65.png'},
                {image: 'resources/realization/rastrowa/rastrowa_66.png'},
                {image: 'resources/realization/rastrowa/rastrowa_67.png'},
                {image: 'resources/realization/rastrowa/rastrowa_68.png'},
                {image: 'resources/realization/rastrowa/rastrowa_69.png'},
                {image: 'resources/realization/rastrowa/rastrowa_70.png'},
                {image: 'resources/realization/rastrowa/rastrowa_71.png'},
                {image: 'resources/realization/rastrowa/rastrowa_72.png'},
                {image: 'resources/realization/rastrowa/rastrowa_73.png'},
                {image: 'resources/realization/rastrowa/rastrowa_74.png'},
                {image: 'resources/realization/rastrowa/rastrowa_75.png'},
                {image: 'resources/realization/rastrowa/rastrowa_76.png'},
                {image: 'resources/realization/rastrowa/rastrowa_77.png'},
                {image: 'resources/realization/rastrowa/rastrowa_78.png'},
                {image: 'resources/realization/rastrowa/rastrowa_79.png'}
            ],
            [
                {image: 'resources/realization/wektory/wektory_1.png'},
                {image: 'resources/realization/wektory/wektory_2.png'},
                {image: 'resources/realization/wektory/wektory_3.png'},
                {image: 'resources/realization/wektory/wektory_4.png'},
                {image: 'resources/realization/wektory/wektory_5.png'},
                {image: 'resources/realization/wektory/wektory_6.png'},
                {image: 'resources/realization/wektory/wektory_7.png'},
                {image: 'resources/realization/wektory/wektory_8.png'},
                {image: 'resources/realization/wektory/wektory_9.png'},
                {image: 'resources/realization/wektory/wektory_10.png'},
                {image: 'resources/realization/wektory/wektory_11.png'},
                {image: 'resources/realization/wektory/wektory_12.png'},
                {image: 'resources/realization/wektory/wektory_13.png'},
                {image: 'resources/realization/wektory/wektory_14.png'},
                {image: 'resources/realization/wektory/wektory_15.png'},
                {image: 'resources/realization/wektory/wektory_16.png'},
                {image: 'resources/realization/wektory/wektory_17.png'},
                {image: 'resources/realization/wektory/wektory_18.png'},
                {image: 'resources/realization/wektory/wektory_19.png'},
                {image: 'resources/realization/wektory/wektory_20.png'},
                {image: 'resources/realization/wektory/wektory_21.png'},
                {image: 'resources/realization/wektory/wektory_23.png'},
                {image: 'resources/realization/wektory/wektory_24.png'},
                {image: 'resources/realization/wektory/wektory_25.png'},
                {image: 'resources/realization/wektory/wektory_26.png'},
                {image: 'resources/realization/wektory/wektory_27.png'}
            ],
            [
                {image: 'resources/realization/www/www_1.png'},
                {image: 'resources/realization/www/www_2.png'},
                {image: 'resources/realization/www/www_3.png'},
                {image: 'resources/realization/www/www_4.png'},
                {image: 'resources/realization/www/www_5.png'},
                {image: 'resources/realization/www/www_6.png'},
                {image: 'resources/realization/www/www_7.png'},
                {image: 'resources/realization/www/www_8.png'}
            ],
            [
                {image: 'resources/realization/branding/branding_1.png'},
                {image: 'resources/realization/branding/branding_2.png'},
                {image: 'resources/realization/branding/branding_3.png'},
                {image: 'resources/realization/branding/branding_4.png'},
                {image: 'resources/realization/branding/branding_5.png'},
                {image: 'resources/realization/branding/branding_6.png'},
                {image: 'resources/realization/branding/branding_7.png'},
                {image: 'resources/realization/branding/branding_8.png'},
                {image: 'resources/realization/branding/branding_9.png'},
                {image: 'resources/realization/branding/branding_10.png'},
                {image: 'resources/realization/branding/branding_11.png'},
                {image: 'resources/realization/branding/branding_12.png'},
                {image: 'resources/realization/branding/branding_13.png'},
                {image: 'resources/realization/branding/branding_14.png'},
                {image: 'resources/realization/branding/branding_15.png'},
                {image: 'resources/realization/branding/branding_16.png'},
                {image: 'resources/realization/branding/branding_17.png'},
                {image: 'resources/realization/branding/branding_18.png'},
                {image: 'resources/realization/branding/branding_19.png'},
                {image: 'resources/realization/branding/branding_20.png'},
                {image: 'resources/realization/branding/branding_22.png'},
                {image: 'resources/realization/branding/branding_23.png'},
                {image: 'resources/realization/branding/branding_24.png'},
                {image: 'resources/realization/branding/branding_25.png'},
                {image: 'resources/realization/branding/branding_26.png'},
                {image: 'resources/realization/branding/branding_27.png'},
                {image: 'resources/realization/branding/branding_28.png'},
                {image: 'resources/realization/branding/branding_29.png'},
                {image: 'resources/realization/branding/branding_30.png'},
                {image: 'resources/realization/branding/branding_31.png'},
                {image: 'resources/realization/branding/branding_32.png'},
                {image: 'resources/realization/branding/branding_33.png'},
                {image: 'resources/realization/branding/branding_34.png'},
                {image: 'resources/realization/branding/branding_35.png'},
                {image: 'resources/realization/branding/branding_36.png'},
                {image: 'resources/realization/branding/branding_37.png'},
                {image: 'resources/realization/branding/branding_38.png'},
                {image: 'resources/realization/branding/branding_39.png'},
                {image: 'resources/realization/branding/branding_40.png'},
                {image: 'resources/realization/branding/branding_41.png'},
                {image: 'resources/realization/branding/branding_42.png'},
                {image: 'resources/realization/branding/branding_43.png'},
                {image: 'resources/realization/branding/branding_44.png'},
                {image: 'resources/realization/branding/branding_45.png'},
                {image: 'resources/realization/branding/branding_46.png'}
            ]
        ];

        $scope.setCategory = function (categoryId) {
            if (categoryId != $scope.currentCategory) {
                var currentSlide = $scope.slides[$scope.currentCategory];
                for (var i = 0; i < currentSlide.length; i++) {
                    currentSlide[i].active = false;
                }
                $scope.currentCategory = categoryId;
            }
        }

    }).controller('SkillController', function ($scope) {
        $scope.skillCategory = 0;

        $scope.setSkillCategory = function (skillCategoryId) {
            $scope.skillCategory = skillCategoryId;
        }
    }).controller('ReferenceCtrl', function($scope){
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
    });
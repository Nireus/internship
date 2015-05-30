angular.module('portfolio', ['ui.bootstrap'])
    .controller('CarouselCtrl', function ($scope) {
        $scope.myInterval = 5000;
        $scope.currentCategory = 0;

        $scope.slides = [
            [
                {image: 'resources/realization/rastrowa/rastrowa_1.jpg',description:'plakat koncertowy WPJ'},
                {image: 'resources/realization/rastrowa/rastrowa_2.jpg',description:'bilet, banner WPJ'},
                {image: 'resources/realization/rastrowa/rastrowa_3.jpg',description:'reklama, banner AUTOKLUCZ'},
                {image: 'resources/realization/rastrowa/rastrowa_4.jpg',description:'plakat teatralny sporządzony dla Filharmonii Podkarpackiej '},
                {image: 'resources/realization/rastrowa/rastrowa_5.jpg',description:'plakat teatralny sporządzony dla Filharmonii Podkarpackiej '},
                {image: 'resources/realization/rastrowa/rastrowa_6.jpg',description:'plakat teatralny sporządzony dla Filharmonii Podkarpackiej '},
                {image: 'resources/realization/rastrowa/rastrowa_7.jpg',description:'plakat filmowy dla filmu "Nieistnienia"'},
                {image: 'resources/realization/rastrowa/rastrowa_8.jpg',description:'plakat filmowy dla filmu "Przychodzisz we śnie proszona"'},
                {image: 'resources/realization/rastrowa/rastrowa_9.jpg',description:'plakat reklamowy eventu dla WSiIZ'},
                {image: 'resources/realization/rastrowa/rastrowa_10.jpg',description:'broszura reklamowa dla Dawkowanie.pl'},
                {image: 'resources/realization/rastrowa/rastrowa_11.jpg',description:'plakat urodzinowy'},
                {image: 'resources/realization/rastrowa/rastrowa_12.jpg',description:'plakat urodzinowy'},
                {image: 'resources/realization/rastrowa/rastrowa_13.jpg',description:'plakat urodzinowy'},
                {image: 'resources/realization/rastrowa/rastrowa_14.jpg',description:'plakat reklamowy eventu Tyczyn Rock Festival'},
                {image: 'resources/realization/rastrowa/rastrowa_15.jpg',description:'plakat reklamowy Targów Edukacyjnych'},
                {image: 'resources/realization/rastrowa/rastrowa_16.jpg',description:'papeteria reklamowa sporządzona dla Księgarni Globus'},
                {image: 'resources/realization/rastrowa/rastrowa_17.jpg',description:'papeteria reklamowa sporządzona dla Księgarni Globus'},
                {image: 'resources/realization/rastrowa/rastrowa_18.jpg',description:'papeteria reklamowa sporządzona dla Księgarni Globus'},
                {image: 'resources/realization/rastrowa/rastrowa_19.jpg',description:'papeteria reklamowa sporządzona dla Księgarni Globus'},
                {image: 'resources/realization/rastrowa/rastrowa_20.jpg',description:'plakat eventu Sylwester sporządzony dla Baru u Wiktora'},
                {image: 'resources/realization/rastrowa/rastrowa_21.jpg',description:'plakat konkursu programistycznego ZSE PROGRAMMER'},
                {image: 'resources/realization/rastrowa/rastrowa_23.jpg',description:'plakat teatralny sporządzony dla Teatru ODELA na spektakl "Oka Mgnienie"'},
                {image: 'resources/realization/rastrowa/rastrowa_24.jpg',description:'plakat teatralny sporządzony dla Teatru ODELA na spektakl "Oka Mgnienie"'},
                {image: 'resources/realization/rastrowa/rastrowa_25.jpg',description:'broszura prezentowa '},
                {image: 'resources/realization/rastrowa/rastrowa_26.jpg',description:'ulotka reklamowa sporządzona dla BIO SALON'},
                {image: 'resources/realization/rastrowa/rastrowa_27.jpg',description:'plakat promocyjny sporządzony dla Animusz'},
                {image: 'resources/realization/rastrowa/rastrowa_28.jpg',description:'grafika zaliczeniowa'},
                {image: 'resources/realization/rastrowa/rastrowa_29.jpg',description:'grafika zaliczeniowa'},
                {image: 'resources/realization/rastrowa/rastrowa_30.jpg',description:'plakat reklamowy sporządzony dla SayTech'},
                {image: 'resources/realization/rastrowa/rastrowa_31.jpg',description:'plakat teatralny sporządzony dla Teatru ODELA na spektakl "Edyp"'},
                {image: 'resources/realization/rastrowa/rastrowa_32.jpg',description:'plakat teatralny sporządzony dla Teatru ODELA na spektakl "Edyp"'},
                {image: 'resources/realization/rastrowa/rastrowa_33.jpg',description:'plakat teatralny sporządzony dla Teatru ODELA na spektakl "Edyp"'},
                {image: 'resources/realization/rastrowa/rastrowa_34.jpg',description:'plakat teatralny sporządzony dla Teatru ODELA na spektakl "Edyp"'},
                {image: 'resources/realization/rastrowa/rastrowa_35.jpg',description:'broszura reklamowa sporządzona dla HR Wizard'},
                {image: 'resources/realization/rastrowa/rastrowa_36.jpg',description:'broszura reklamowa sporządzona dla HR Wizard'},
                {image: 'resources/realization/rastrowa/rastrowa_37.jpg',description:'broszura reklamowa sporządzona dla Wirtualne-Sklepy.pl'},
                {image: 'resources/realization/rastrowa/rastrowa_38.jpg',description:'broszura reklamowa sporządzona dla Wirtualne-Sklepy.pl'},
                {image: 'resources/realization/rastrowa/rastrowa_39.jpg',description:'broszura reklamowa sporządzona dla Flair of Masters'},
                {image: 'resources/realization/rastrowa/rastrowa_40.jpg',description:'broszura reklamowa sporządzona dla Flair of Masters'},
                {image: 'resources/realization/rastrowa/rastrowa_41.jpg',description:'grafika dla aplikacji mobilnej sporządzona dla SayTech'},
                {image: 'resources/realization/rastrowa/rastrowa_42.jpg',description:'plakat reklamowy dla oferty stażu'},
                {image: 'resources/realization/rastrowa/rastrowa_43.jpg',description:'grafika prezentowa'},
                {image: 'resources/realization/rastrowa/rastrowa_44.jpg',description:'plakat reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_45.jpg',description:'plakat reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_46.jpg',description:'plakat reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_47.jpg',description:'plakat reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_48.jpg',description:'plakat reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_49.jpg',description:'plakat reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_50.jpg',description:'web cover reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_51.jpg',description:'web cover reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_52.jpg',description:'plakat reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_53.jpg',description:'plakat reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_54.jpg',description:'plakat reklamowy sporządzony dla MelanGo'},
                {image: 'resources/realization/rastrowa/rastrowa_55.jpg',description:'web banner sporządzony dla Kolegium Sędziów Rzeszów'},
                {image: 'resources/realization/rastrowa/rastrowa_56.jpg',description:'plakat reklamowy dla eventu "Biegnij z nami dla Antosia"'},
                {image: 'resources/realization/rastrowa/rastrowa_57.jpg',description:'plakat filmowy dla filmu "Przychodzisz we śnie proszona"'},
                {image: 'resources/realization/rastrowa/rastrowa_58.jpg',description:'plakat filmowy dla filmu "Przychodzisz we śnie proszona"'},
                {image: 'resources/realization/rastrowa/rastrowa_59.jpg',description:'plakat filmowy dla filmu "Przychodzisz we śnie proszona"'},
                {image: 'resources/realization/rastrowa/rastrowa_60.jpg',description:'plakat filmowy dla filmu "Przychodzisz we śnie proszona"'},
                {image: 'resources/realization/rastrowa/rastrowa_61.jpg',description:'plakat filmowy dla filmu "Przychodzisz we śnie proszona"'},
                {image: 'resources/realization/rastrowa/rastrowa_62.jpg',description:'plakat reklamowy sporządzony dla Finisz'},
                {image: 'resources/realization/rastrowa/rastrowa_63.jpg',description:'grafika na Roll-up sporządzona dla Koła Naukowego FLOW'},
                {image: 'resources/realization/rastrowa/rastrowa_64.jpg',description:'web banner sporządzony dla Estera-Sklep'},
                {image: 'resources/realization/rastrowa/rastrowa_65.jpg',description:'web banner sporządzony dla Estera-Sklep'},
                {image: 'resources/realization/rastrowa/rastrowa_66.jpg',description:'web banner sporządzony dla Estera-Sklep'},
                {image: 'resources/realization/rastrowa/rastrowa_67.jpg',description:'web banner sporządzony dla Estera-Sklep'},
                {image: 'resources/realization/rastrowa/rastrowa_68.jpg',description:'web banner sporządzony dla Estera-Sklep'},
                {image: 'resources/realization/rastrowa/rastrowa_69.jpg',description:'grafika prezentowa'},
                {image: 'resources/realization/rastrowa/rastrowa_70.jpg',description:'grafika prezentowa'},
                {image: 'resources/realization/rastrowa/rastrowa_71.jpg',description:'broszura reklamowa sporządzona dla SayTech'},
                {image: 'resources/realization/rastrowa/rastrowa_72.jpg',description:'broszura reklamowa sporządzona dla SayTech'},
                {image: 'resources/realization/rastrowa/rastrowa_73.jpg',description:'broszura reklamowa sporządzona dla SayTech'},
                {image: 'resources/realization/rastrowa/rastrowa_74.jpg',description:'broszura reklamowa sporządzona dla SayTech'},
                {image: 'resources/realization/rastrowa/rastrowa_75.jpg',description:'broszura reklamowa sporządzona dla SayTech'},
                {image: 'resources/realization/rastrowa/rastrowa_76.jpg',description:'broszura reklamowa sporządzona dla SayTech'},
                {image: 'resources/realization/rastrowa/rastrowa_77.jpg',description:'broszura reklamowa sporządzona dla SayTech'},
                {image: 'resources/realization/rastrowa/rastrowa_78.jpg',description:'broszura reklamowa sporządzona dla Technical English'},
                {image: 'resources/realization/rastrowa/rastrowa_79.jpg',description:'broszura reklamowa sporządzona dla Technical English'}
            ],
            [
                {image: 'resources/realization/wektory/wektory_1.jpg',description:'wizytówki sporządzone dla Michała Kustry'},
                {image: 'resources/realization/wektory/wektory_2.jpg',description:'wizytówki sporządzone dla Michała Kustry'},
                {image: 'resources/realization/wektory/wektory_3.jpg',description:'wizytówki sporządzone dla SpecBud'},
                {image: 'resources/realization/wektory/wektory_4.jpg',description:'wizytówki sporządzone dla SpecBud'},
                {image: 'resources/realization/wektory/wektory_5.jpg',description:'wizytówki sporządzone dla Brokers Communication'},
                {image: 'resources/realization/wektory/wektory_6.jpg',description:'wizytówki sporządzone dla MelanGo'},
                {image: 'resources/realization/wektory/wektory_7.jpg',description:'wizytówki sporządzone dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/wektory/wektory_8.jpg',description:'zestaw logotypów'},
                {image: 'resources/realization/wektory/wektory_9.jpg',description:'teczka firmowa sporządzona dla SayTech'},
                {image: 'resources/realization/wektory/wektory_10.jpg',description:'certyfikat sporządzony dla SayTech'},
                {image: 'resources/realization/wektory/wektory_11.jpg',description:'zestaw ikon sporządzony dla SayTech'},
                {image: 'resources/realization/wektory/wektory_12.jpg',description:'tablice informacyjne A0 sporządzone dla SayTech'},
                {image: 'resources/realization/wektory/wektory_13.jpg',description:'tablice informacyjne A0 sporządzone dla SayTech'},
                {image: 'resources/realization/wektory/wektory_14.jpg',description:'tablice informacyjne A0 sporządzone dla SayTech'},
                {image: 'resources/realization/wektory/wektory_15.jpg',description:'tablice informacyjne A0 sporządzone dla SayTech'},
                {image: 'resources/realization/wektory/wektory_16.jpg',description:'tablice informacyjne A0 sporządzone dla SayTech'},
                {image: 'resources/realization/wektory/wektory_17.jpg',description:'tablice informacyjne A0 sporządzone dla SayTech'},
                {image: 'resources/realization/wektory/wektory_18.jpg',description:'tablice informacyjne A0 sporządzone dla SayTech'},
                {image: 'resources/realization/wektory/wektory_19.jpg',description:'tablice informacyjne A0 sporządzone dla SayTech'},
                {image: 'resources/realization/wektory/wektory_20.jpg',description:'grafika zaliczeniowa '},
                {image: 'resources/realization/wektory/wektory_21.jpg',description:'grafika zaliczeniowa '},
                {image: 'resources/realization/wektory/wektory_23.jpg',description:'nadruk na koszulke sporządzony dla MelanGo'},
                {image: 'resources/realization/wektory/wektory_24.jpg',description:'nadruk na koszulke sporządzony dla MelanGo'},
                {image: 'resources/realization/wektory/wektory_25.jpg',description:'nadruk na koszulke sporządzony dla MelanGo'},
                {image: 'resources/realization/wektory/wektory_26.jpg',description:'nadruk na koszulke sporządzony dla MelanGo'},
                {image: 'resources/realization/wektory/wektory_27.jpg',description:'nadruk na koszulke sporządzony dla MelanGo'}
            ],
            [
                {image: 'resources/realization/www/www_1.jpg',description:'Landing Page sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/www/www_2.jpg',description:'Landing Page sporządzony dla Brokers Communication'},
                {image: 'resources/realization/www/www_3.jpg',description:'Landing Page sporządzony dla Ortis'},
                {image: 'resources/realization/www/www_4.jpg',description:'strona WWW praktyk zagranicznych "Leonardo da Vinci"'},
                {image: 'resources/realization/www/www_5.jpg',description:'strona WWW sporządzony dla EM Studio'},
                {image: 'resources/realization/www/www_6.jpg',description:'strona WWW sporządzony dla PLUS Meble'},
                {image: 'resources/realization/www/www_7.jpg',description:'strona WWW sporządzony dla Workout.pl'},
                {image: 'resources/realization/www/www_8.jpg',description:'strona WWW sporządzony dla Workout.pl'}
            ],
            [
                {image: 'resources/realization/branding/branding_1.jpg',description:'facebook cover sporządzony dla Perfect Progress'},
                {image: 'resources/realization/branding/branding_2.jpg',description:'facebook cover sporządzony dla Perfect Progress'},
                {image: 'resources/realization/branding/branding_3.jpg',description:'facebook cover sporządzony dla Perfect Progress'},
                {image: 'resources/realization/branding/branding_4.jpg',description:'facebook cover sporządzony dla Perfect Progress'},
                {image: 'resources/realization/branding/branding_5.jpg',description:'facebook cover sporządzony dla Perfect Progress'},
                {image: 'resources/realization/branding/branding_6.jpg',description:'facebook cover sporządzony dla Perfect Progress'},
                {image: 'resources/realization/branding/branding_7.jpg',description:'facebook cover sporządzony dla Perfect Progress'},
                {image: 'resources/realization/branding/branding_8.jpg',description:'facebook cover sporządzony dla Anety Michno'},
                {image: 'resources/realization/branding/branding_9.jpg',description:'facebook cover sporządzony dla Anety Michno'},
                {image: 'resources/realization/branding/branding_10.jpg',description:'facebook cover sporządzony dla Anety Michno'},
                {image: 'resources/realization/branding/branding_11.jpg',description:'facebook cover sporządzony dla Anety Michno'},
                {image: 'resources/realization/branding/branding_12.jpg',description:'facebook cover sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_13.jpg',description:'facebook cover sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_14.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_15.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_16.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_17.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_18.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_19.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_20.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_22.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_23.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_24.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_25.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_26.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_27.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_28.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_29.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_30.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_31.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_32.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_33.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_34.jpg',description:'facebook post sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_35.jpg',description:'facebook cover sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_36.jpg',description:'facebook cover sporządzony dla Ludmiły Zielińskiej'},
                {image: 'resources/realization/branding/branding_37.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_38.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_39.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_40.jpg',description:'facebook post sporządzony dla Karola Pabiana'},
                {image: 'resources/realization/branding/branding_41.jpg',description:'facebook post sporządzony dla MelanGo'},
                {image: 'resources/realization/branding/branding_42.jpg',description:'facebook post sporządzony dla MelanGo'},
                {image: 'resources/realization/branding/branding_43.jpg',description:'facebook post sporządzony dla MelanGo'},
                {image: 'resources/realization/branding/branding_44.jpg',description:'facebook post sporządzony dla MelanGo'},
                {image: 'resources/realization/branding/branding_45.jpg',description:'facebook post sporządzony dla MelanGo'},
                {image: 'resources/realization/branding/branding_46.jpg',description:'facebook post sporządzony dla MelanGo'}
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
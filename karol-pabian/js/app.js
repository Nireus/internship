angular.module('pabian', ['ui.bootstrap'])
.controller('ReferenceCaruzel', function($scope){
        $scope.myInterval = 5000;
        $scope.references = [
            {
                body:'Karol to człowiek o niezwykłym potencjale mimo młodego wieku. Podziwiam go za niezłomność w dążeniu do wyznaczonych i jasno określonych przez niego celów. Nie przestaje się szkolić, a zdobytą wiedzę wdraża od razu do swojej pracy, by jak najlepiej pomóc innym. Tym charakteryzuje się każdy mistrz w swojej dziedzinie, a Karol bez wątpienia dietetycznym nakurwiaczem!',
                signature: 'PAWEŁ PABIAN "Perfect Progress"'
            },
            {
                body:'W pewnym momencie swojego życia zaczęłam mieć problemy trawienne, było to następstwo choroby. Jednak na mojej drodze pojawił się Karol który wyciągnął do mnie pomocną dłoń. W precyzyjny sposób przeanalizował mój przypadek, podała mi kilka rad i wskazał kilka wad które towarzyszyły mojej dotychczasowemu żywieniu. Jestem bardzo zadowolona z wyników rzeczowych rad, bardzo konkretnej i wnikliwej analizy. Karol ma w sobie żywy ogień, energię i pasję, aktualną wiedzę które czynią go ekspertem dziedziny żywienia.',
                signature: 'BARBARA RĄCZKA - sprzedawca'
            },
            {
                body:'Na pewno profesjonalizm z zakresu dietetyki I ćwiczeń. pomysłowość w ćwiczeniach , że nie np. macham tylko kettelkami czy robie wykroki , ale ćwiczeń jest masa. Na pewno atmosfera jest spoko, bo jak widze innych trenerów na silownito tylko wydają polecenia I tyle.',
                signature: 'KAMILA WRÓBEL - podopieczna'
            },
            {
                body:'No to tak. Współpraca z Karolem to sama przyjemność, mogę liczyć na ogromną motywację i wsparcie z jego strony oraz dostępność w razie jakichkolwiek pytań. Mimo, że to jeszcze nie koniec naszej cięzkiej pracy, jestem bardzo zadowolona z efektów jakie dzięki niemu uzyskałam i nie żałuję, że to właśnie z nim postanowiłam zacząć współpracę.',
                signature: 'ANDŻELIKA BOBER - podopieczna'
            },
            {
                body:'Witam , jestem Cezary Draus od miesiaca wspolpracuje z Karolem Pabianem, bardzo sympatyczny motywujacy bezproblemowy kontakt aby sie poradzic , dieta dostosowana do Ciebie , trening rowniez. Od miesiaca trenuje wedlug jego rad , czuje sie super i cialo zaczyna sie zmieniac na lepsze jednym slowem jesli chcecie zmienic swoj wyglad instyl zycia to lepiej nie nie mogliscie trafic. Pozdrawiam',
                signature: 'CEZARY DRAUS - podopieczny'
            },
            {
                body:'Karol to profesjonalista, którego mogę polecić 100 %. Od ułożenia właściwej diety po trening, zwłaszcza w kwestii jego poprawnego wykonywania od strony technicznej. Każde ćwiczenie ma swój cel, każda ilość serii i powtórzeń jest dokładnie taka, jakiej potrzebuję. Wszystko doprawione ogromną wiedzą oraz poczuciem humoru. Zajęcia prowadzone są zawsze z największym zaangażowaniem, cała uwaga trenera skupia się na mnie. Na treningu panuje miła atmosfera, zawsze można podyskutować o różnych sprawach, jednak na końcu to ćwiczenia są zawsze najważniejsze, co trener skrupulatnie egzekwuje.',
                signature: 'PAULINA HŁAWKO - podopieczna'
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
    }).controller('CertyficateCtrl' , function($scope){
        $scope.certificates = [
            [
                {title: 'INSTRUKTOR KULTURYSTYKI (15.10-25.11.2014r. Rzeszów, "Europejskie Centrum Sportu")',
                text: 'Kurs, który dał mi pierwsze uprawnienia do trenowania i pokazywania tajników techniki w wykonywaniu ćwiczeń. Świetni ludzie, z którymi na pewno jeszcze nie raz będzie dane mi się uczyć. Wszystko pod okiem wielkiej sławy polskiej kulturystyki Prezesa ECS Piotra Głuchowskiego. NIEZAPOMNIANE PRZEŻYCIA i wiedza godna intensywnej nauki!',
                image: './resources/images/certificates/Legitymacja_instruktora_kulturystyki.jpg'},

                {title: 'DIETETYKA - ODCHUDZANIE (10-29.04.2014r. Rzeszów, "AP- Edukacja")',
                text: 'Kurs, na którym poznałem od podstaw tajniki dietetyki. Nauka, którą wyciągnąłem podczas wykładów na co dzień przydaje mi się w doradzaniu ludziom, którzy borykają się z nadmierną masą ciała. Praktyczne przykłady, teoretyczne wyjaśnienia, które analizowaliśmy na kursie - to wszystko skutkuje tym, że dzisiaj jestem o wiele mądrzejszy i bardziej doświadczony w tym co robię.',
                image: './resources/images/certificates/Certyfikat_Dietetyka.jpg'},

                {title: 'DIETETYKA KLINICZNA (10.02-06.03.2014r. Warszawa, "Dietetycznie Poprawni")',
                text: 'Dietetyka to także pomaganie osobom, które borykają się z różnorakimi chorobami i problemami ze zdrowiem. Ten kurs pozwolił mi wgłębić się w trudne przypadki, z którymi medycyna konwencjonalna nie potrafi sobie poradzić. Jak powiedział Sokrates, każda choroba zaczyna się od brzucha, po tym pełnym wiedzy kursie mogę stwierdzić, że miał rację!',
                image: './resources/images/certificates/Certyfikat_z_kursu_Dietetyka_Kliniczna.jpg'},

                {title: 'PSYCHODIETETYKA (11.06-22.07.2014r. Warszawa, "Dietetycznie Poprawni")' ,
                text: 'Przed odbyciem tego kursu nie spodziewałem się, że tak dużo problemów związanych z niezdrowym odżywianiem jest spowodowanych przez naszą psychikę. Wgłębienie się w ludzki umysł, umiejętne zrozumienie jego problemów od podstaw oraz rozwiązanie go stosując poznane techniki - każdy dietetyk powinien przeszkolić się w tym zakresie, aby móc podejść do człowieka w sposób holistyczny.',
                image: './resources/images/certificates/Certyfikat_z_kursu_Psychodietetyka.jpg'},

                {title: 'TRENER KULTURYSTYKI (02-24.03.2014r. Warszawa, "Dietetycznie Poprawni")' ,
                text: 'Kolejny kurs, który pozwolił mi zdać sobie sprawę z tego jak ważne jest poprawne wykonywanie ćwiczeń w pięknym i estetycznym sporcie jakim jest kulturystyka. Poznane techniki treningowe oraz m.in. podziały na cykle pozwoliły mi zrozumieć od podstaw ten rodzaj aktywności.',
                image: './resources/images/certificates/Certyfikat_z_kursu_Trener_kulturystyki.jpg'},

                {title: 'ŻYWIENIE I ODCHUDZANIE DZIECI I MŁODZIEŻY (16.06-21.07.2014r. Warszawa, "Olimpiakos")' ,
                 text: 'Przed odbyciem tego kursu nie zdawałem sobie sprawy jak ważne jest odpowiednie podejście do żywienia młodszego pokolenia. Wiele godzin intensywnych ćwiczeń, nauki oraz praktycznego wykorzystywania wiedzy dało mi narzędzie do pracy z ludźmi, którzy jeszcze mogą od początku nauczyć się prawidłowego odżywiania.',
                 image: './resources/images/certificates/Certyfikat_z_kursu_Zywienie_i_odchudzanie_Dzieci_i_Mlodziezy.jpg'}
            ],
            [
                {title: 'CZŁONEK POLSKIEJ AKADEMII ZDROWIA (30.12.2014r. - 30.12.2015r.)',
                    text: 'Polskie podejście do spraw odżywiania, niestety cały czas jest daleko po za realiami niosiącymi nas do pełnego zdrowia. Razem z "Polską Akademią Zdrowia" i Jerzym Ziębą, niesiemy pozytywne przesłania i UŚWIADAMIAMY Polaków jak jeść i dlaczego warto zmienić dotychczasowe przyzwyczajenia. Również wspominamy jak można pozbyć się wielu chorób takich jak cukrzyca, choroby autoimmunologiczne czy nawet NOWOTWORY za pomocą naturalnych lekarstw.',
                    image: './resources/images/certificates/czlonek_polskiej_akademi_zdrowia.jpg'},

                {title: 'PROFESJONALNY DORADCA SUPLEMENTACYJNY (22.10.2014r. Rzeszów, "Europejskie Centrum Sportu")',
                    text: 'Dzisiejszy rynek jest dosłownie "zalewany" przez różnorakie firmy suplementacyjne, oferujące także takie produkty. Ważne, aby wiedzieć co warto kupić, co może pomóc, a co jest po prostu wyrzuceniem pieniędzy do kosza. Piotr Głuchowski przybliżył ten temat, i nie pozostawił suchej nitki na niektórych "działających" suplementach. Z drugiej strony po 2 dniach intensywnego przyswajania wiedzy wiem, co może pomóc i przyspieszyć efekty trenowania moich klientów.',
                    image: './resources/images/certificates/Profesjonalny_doradca_suplementacyjny.jpg'},

                {title: 'INSTRUKTOR KULTURYSTYKI (15.10-25.11.2014r. Rzeszów, "Europejskie Centrum Sportu")',
                    text: 'Kurs, który dał mi pierwsze uprawnienia do trenowania i pokazywania tajników techniki w wykonywaniu ćwiczeń. Świetni ludzie, z którymi na pewno jeszcze nie raz będzie dane mi się uczyć. Wszystko pod okiem wielkiej sławy polskiej kulturystyki Prezesa ECS Piotra Głuchowskiego. NIEZAPOMNIANE PRZEŻYCIA i wiedza godna intensywnej nauki!',
                    image: './resources/images/certificates/Legitymacja_instruktora_kulturystyki.jpg'}
            ],
            [
                {title: 'WARSZTATY TRX (10.01.2015r. Katowice, "Rockfit")',
                    text: 'Treningi w podwieszeniu TRX dają ogromne pole do popisu. Szereg ćwiczeń, dużo praktycznych i męczących godzin, które było mi dane przeżyć z niezwykle przyjazną ekipą nauczyły mnie techniki oraz zalet, które niesie TRX. Wierzcie lub nie ale na takim sprzęcie może równie dobrze zmęczyć się otyły 150kg chłop jak i 80kg wyrzeźbiony kulturysta. Grunt to robić ćwiczenia stawiając na JAKOŚĆ, a nie jakoś.',
                    image: './resources/images/certificates/Certyfikat_z_warsztatów_w_podwieszeniu_TRX.jpg'},

                {title: 'DIETETYKA I SUPLEMENTACJA W SPORCIE (03.01.2015r. Kraków, "Wyższa Szkoła Trenerska")',
                    text: 'Ludzie, którzy uprawiają sport muszą wiedzieć jak przyjąć prawidłowy i zbilansowany plan żywienia. To gwarantuje efekty a przez to większą motywację do ćwiczeń. Po odbyciu tego szkolenia, prowadzonego przez Krzysztofa Stolarczyka, temat ten jest mi znany w 100% i wiem, że każdy kto będzie chciał ze mną współpracować w tym zakresie będzie zadowolony ze swoich treningowych osiągów.',
                    image: './resources/images/certificates/Certyfikat_ze_szkolenia_Dietetyka_i_suplementacja_w_sporcie.jpg'},

                {title: 'INTERMITTENT FASTING I LOW CARB (05-06.08.2014r. Rzeszów, "Europejskie Centrum Sportu")',
                    text: 'Dietetyk, doradca i trener aby w 100% móc zadowolić swojego klienta musi orientować się we wszystkich stylach żywieniowych. Dlatego czerpię wiedzę ze wszystkim źródeł i szkolę się aby poznać nowe, innowacyjne dietetyczne rozwiązania. Nowy temat jakim jest "Intermittent Fasting i Low Carb" już nie jest mi obcy i na pewno znam zalety i wady, jakie niesie za sobą ten styl żywienia. Szkolenie było niezwykle ciekawe, a prowadzący Mistrz Polski Maciej Jaśkiewicz przybliżył i wyczerpał temat w 100%.',
                    image: './resources/images/certificates/Szkolenie_Intermittent_fasting_low_carb.jpg'}
            ]
        ];
        certificateNumber = 0 ;
        $scope.currentCertificate = $scope.certificates[0][0];
        certificateCategory = 0;
        $scope.setCertificateCategory = function (certificateCategoryID) {
                certificateCategory = certificateCategoryID;
                $scope.currentCertificate = $scope.certificates[certificateCategory][0];
                certificateNumber = 0;
            }
        $scope.goRight = function(){
            certificateNumber++;
            certificateNumber = certificateNumber%$scope.certificates[certificateCategory].length;
            $scope.currentCertificate = $scope.certificates[certificateCategory][certificateNumber];

        }
        $scope.goLeft = function(){
            certificateNumber--;
            certificateNumber+=$scope.certificates[certificateCategory].length;
            certificateNumber = certificateNumber%$scope.certificates[certificateCategory].length;
            $scope.currentCertificate = $scope.certificates[certificateCategory][certificateNumber];
        }
    })




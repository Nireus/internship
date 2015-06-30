angular.module('brookers', [])
    .controller('ProductsSliderCtrl', function () {
        this.products = [
            {
                image: './resources/images/Produkty/produkty_product_1.png',
                name: 'Galaxy Note 4',
                price: '2125'
            },
            {
                image: './resources/images/Produkty/produkty_product_2.png',
                name: 'Galaxy S 6',
                price: '2279'
            },
            {
                image: './resources/images/Produkty/produkty_product_3.png',
                name: 'Galaxy S5',
                price: '1490'
            },
            {
                image: './resources/images/Produkty/produkty_product_2.png',
                name: 'Galaxy S6',
                price: '2279'
            }
        ];
    }).controller('ProductsPanelCtrl', function () {

        this.tab=0;

        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.offers = [
            [
                {
                    image: './resources/images/Produkty/produkty_product_1_small.png',
                    name: 'Galaxy A5',
                    price: '1190'
                },
                {
                    image: './resources/images/Produkty/produkty_product_2_small.png',
                    name: 'Galaxy Grand Prime',
                    price: '1490'
                },
                {
                    image: './resources/images/Produkty/produkty_product_3_small.png',
                    name: 'Galaxy S6',
                    price: '2279'
                },
                {
                    image: './resources/images/Produkty/produkty_product_4_small.png',
                    name: 'Galaxy S5',
                    price: '1190'
                },
                {
                    image: './resources/images/Produkty/produkty_product_5_small.png',
                    name: 'Galaxy S4',
                    price: '1490'
                },
                {
                    image: './resources/images/Produkty/produkty_product_6_small.png',
                    name: 'Galaxy S6',
                    price: '2279'
                }
            ],
            [
                {
                    image: './resources/images/Produkty/produkty_product_1_small.png',
                    name: 'Galaxy A5',
                    price: '1190'
                },
                {
                    image: './resources/images/Produkty/produkty_product_1_small.png',
                    name: 'Galaxy A5',
                    price: '1190'
                }
            ],
            [
                {
                    image: './resources/images/Produkty/produkty_product_2_small.png',
                    name: 'Galaxy A5',
                    price: '1190'
                },
                {
                    image: './resources/images/Produkty/produkty_product_2_small.png',
                    name: 'Galaxy A5',
                    price: '1190'
                }
            ],
            [
                {
                    image: './resources/images/Produkty/produkty_product_1_small.png',
                    name: 'Galaxy A5',
                    price: '1190'
                },
                {
                    image: './resources/images/Produkty/produkty_product_1_small.png',
                    name: 'Galaxy A5',
                    price: '1190'
                }
            ]
        ];
    }).controller('ReferencesSliderCtrl', function () {
        this.references = [
            {
                text: 'Bardzo dobry kontakt i wysoka kultura partnera. Brokers Communication jest rzetelnym kontrahentem. Wszystko jak należy. '
            },
            {
                text: '100% profesjonalizmu. Brokers Communication jest poważnym przedsięwzięciem. Taka współpraca to przyjemność - szybko i sprawnie. To ogromne szczęście współpracować z takimi ludźmi.'
            },
            {
                text: 'Ogromny pozytyw - nie może być inaczej!!!! Brokers Communication jest godna polecenia firmą. Zakupiony towar jest dobrym produktem. To ogromna przyjemność współpracować z takimi ludźmi . '
            },
            {
                text: 'Z przyjemnością wystawiam pozytywną opinie. Solidny, uczciwy i słowny partner w interesach godny zaufania. Miły kontrahent. Realizacja przebiegła pomyślnie. Zero problemów.  '
            },
            {
                text: 'Same plusy. Poważny,  godny rekomendacji.  '
            },
            {
                text: 'Bardzo dziękuję za udaną transakcję! Znakomity partner godny rekomendacji. Zamówiony towar jak najbardziej oryginalny. Nic dodać, nic ująć.  '
            },
            {
                text: 'Wzorowy przykład relacji sprzedający-kupujący. Brokers Communication jest słowną i konkretną inicjatywą . Poważny partner godny polecenia. Błyskawiczna przesyłka, miły kontakt! Towar jak najbardziej oryginalny. W skrócie - wszystko OK. '
            },
            {
                text: 'Kontrahent z profesjonalnym podejściem do aukcji. Taka wysyłka to przyjemność - szybko i sprawnie. Towar jak na zdjęciach. Dzięki takim sprzedającym miło cokolwiek kupować.   '
            }
        ];
    });

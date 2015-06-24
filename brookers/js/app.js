angular.module('brookers',[])
.controller('ProductsPanelCtrl', function(){
    this.offers = [
        {
            image: '../resources/images/Produkty/produkty_product_1_small.png',
            name: 'Galaxy A5',
            price: '1190'
        },
        {
            image: '../resources/images/Produkty/produkty_product_2_small.png',
            name: 'Galaxy Grand Prime',
            price: '1490'
        },
        {
            image: '../resources/images/Produkty/produkty_product_3_small.png',
            name: 'Galaxy S6',
            price: '2279'
        },
        {
            image: '../resources/images/Produkty/produkty_product_4_small.png',
            name: 'Galaxy S5',
            price: '1190'
        },
        {
            image: '../resources/images/Produkty/produkty_product_5_small.png',
            name: 'Galaxy S4',
            price: '1490'
        },
        {
            image: '../resources/images/Produkty/produkty_product_6_small.png',
            name: 'Galaxy S6',
            price: '2279'
        }
    ]
});
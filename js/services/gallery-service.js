'use strict'


var gProjs = [{
        id: 'MineSweeper.png',
        name: 'MineSweeper',
        title: 'Try to pass the mine area',
        desc: 'Lorem ipsum Lorem ipsum Lorem ipsum',
        url: 'projs/minesweeper',
        publishedAt: 575979717600000,
        labels: ["Matrixes", "contextmenu manipulation"]
    },
    {
        id: 'BookShop.png',
        name: 'BookShop',
        title: 'Be organized with your books',
        desc: 'Lorem ipsum Lorem ipsum Lorem ipsum',
        url: 'projs/book-shop',
        publishedAt: 575980322400000,
        labels: ["Tables", "Sorting"]
    },
    {
        id: 'GuessMe.png',
        name: 'GuessMe',
        title: 'I will read your mind',
        desc: 'Lorem ipsum Lorem ipsum Lorem ipsum',
        url: 'projs/guess-me',
        publishedAt: 575980581600000,
        labels: ["BootStrap", "Object tree"]
    },
]



function getProjById(id) {
    return gProjs.find(proj => proj.id === id);
}

function getProjs() {
    return gProjs;
}
'use strict'


var gProjs = [{
        id: 'MineSweeper.png',
        name: 'MineSweeper',
        title: 'Try to pass the mine area',
        desc: 'MineSweeper is a game which the goal is to click on all the boxes that have no mines underneath them, you make your way by calculating the mine locations with the number of neighbor mines, in this specific project you can choose your difficulty, have clues, and safe clicks, enjoy!',
        publishedAt: 575979717600000,
        labels: ["Matrixes", "contextmenu manipulation"]
    },
    {
        id: 'BookShop.png',
        name: 'BookShop',
        title: 'Organize your books',
        desc: 'BookShop is actually a simple way to keep track of all the books you are selling, update pricing, update new books etc.',
        publishedAt: 575980322400000,
        labels: ["Tables", "Sorting"]
    },
    {
        id: 'GuessMe.png',
        name: 'GuessMe',
        title: 'I will read your mind',
        desc: 'GuessMe is a game that tries to guess which personallity you are thinking of, at the start it will be a little difficult for him to know, but with your help he would be able to target better his questions and know who the person is.',
        publishedAt: 575980581600000,
        labels: ["BootStrap", "Object tree"]
    },
    {
        id: 'TouchNums.png',
        name: 'TouchNums',
        title: 'Count your way to the top',
        desc: 'TouchNums is a simple game that you need to start by pressing the number 1 and then start pressing every following number untill you win the game',
        publishedAt: 1642802400000,
        labels: ["2dArray", "Timer"]
    },
]



function sendMail(userMail, subject, message) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=benisayev@gmail.com&su=${subject}&body=${message},+sincerely,+${userMail}`)
}



function getProjById(id) {
    return gProjs.find(proj => proj.id === id);
}

function getProjs() {
    return gProjs;
}
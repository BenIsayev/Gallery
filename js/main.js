'use strict'



$(initPage)

function initPage() {
    console.log('Starting up');
    renderProjs();
    $('.submit-mail-btn').click(function() {
        onSendMail()
    })
}


// $("p").click(function() {
//     $(this).slideUp();
// })
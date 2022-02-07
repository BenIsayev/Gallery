'use strict'


function renderProjs() {
    const projs = getProjs()
    var strHTML = projs.map(proj => {
        return `<div class="col-md-3 col-sm-5 portfolio-item">
                    <a class="portfolio-link" onclick="renderModal('${proj.id}')" data-toggle="modal" href="#portfolioModal1">
                         <div class="portfolio-hover">
                             <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                         </div>
                    <img class="img-fluid" src="img/proj-img/${proj.id}" alt="">
                    </a>
                    <div class="portfolio-caption">
                         <h4>${proj.name}</h4>
                        <p class="text-muted">${proj.title}</p>
                    </div>
                </div>`

    })

    $('.projs-container').html(strHTML)
}


function renderModal(id) {
    var proj = getProjById(id)
    console.log(proj.publishedAt)
    $('.proj-name').text(proj.name)
    $('.proj-title').text(proj.title)
    $('.proj-img').attr('src', `img/proj-img/${proj.id}`)
    $('.proj-desc').text(proj.desc)
    $('.proj-publish-date').text(new Date(575980581600000).toDateString())
    $('.open-project-btn').attr('href', `projs/${proj.name}/index.html`)

}


function onSendMail() {
    // debugger
    var userMail = $('.contact-user-mail').val()
    var subject = $('.contact-subject').val()
    var message = $('.contact-message').val()

    console.log(userMail)
    console.log(subject)
    console.log(message)
    sendMail(userMail, subject, message);
}
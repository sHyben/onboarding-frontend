const $lgContainer = document.getElementById("inline-gallery-container");

const inlineGallery = lightGallery($lgContainer, {
    container: $lgContainer,
    dynamic: true,
    hash: false,
    closable: false,
    showMaximizeIcon: true,
    appendSubHtmlTo: ".lg-item",
    slideDelay: 10,
    plugins: [lgZoom, lgThumbnail],
    dynamicEl: [
        {
            src:
                "public/images/hackathon/gallery/galleryImg1.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg1.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg1.jpg"
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg2.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg2.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg2.jpg"
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg3.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg3.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg3.jpg"
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg4.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg4.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg4.jpg"
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg5.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg5.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg5.jpg"
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg6.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg6.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg6.jpg"
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg7.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg7.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg7.jpg"
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg8.png",
            responsive:
                "public/images/hackathon/gallery/galleryImg8.png",
            thumb:
                "public/images/hackathon/gallery/galleryImg8.png"
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg9.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg9.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg9.jpg"
        }
    ],

    thumbWidth: 60,
    thumbHeight: "40px",
    thumbMargin: 4
});

const $lgContainer2 = document.getElementById("inline-gallery-container2");
let inlineGallery2
const galleryData = []
window.onload = () => {
    for(let i = 1; i < 60; i++) {
        galleryData.push({
            src:
                "public/images/hackathon/hackathon2022/"+i+".jpg",
            responsive:
                "public/images/hackathon/hackathon2022/"+i+".jpg",
            thumb:
                "public/images/hackathon/hackathon2022/"+i+".jpg"
        })
    }
    inlineGallery2 = lightGallery($lgContainer2, {
        container: $lgContainer2,
        dynamic: true,
        hash: false,
        closable: false,
        showMaximizeIcon: true,
        appendSubHtmlTo: ".lg-item",
        slideDelay: 10,
        plugins: [lgZoom, lgThumbnail],
        dynamicEl: galleryData,

        thumbWidth: 60,
        thumbHeight: "40px",
        thumbMargin: 4
    });
    setTimeout(() => {
        inlineGallery.openGallery();
        inlineGallery2.openGallery();
    }, 200);
}

var homeWaypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "down") {
            let cur = $('#homeNav')
            cur.css('color', '#ff7900');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var whyWaypoint = new Waypoint({
    element: document.getElementById('why'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev = $('#homeNav')
            prev.css('color', '#ff7900');
            prev.css('text-decoration', 'underline');
        } else {
            let cur = $('#whyNav')
            cur.css('color', '#ff7900');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var teamWaypoint = new Waypoint({
    element: document.getElementById('team'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev = $('#whyNav')
            prev.css('color', '#ff7900');
            prev.css('text-decoration', 'underline');
        } else {
            let cur = $('#teamNav')
            cur.css('color', '#ff7900');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var requirementsWaypoint = new Waypoint({
    element: document.getElementById('requirements'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#teamNav')
            prev.css('color', '#ff7900');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#requirementsNav')
            cur.css('color', '#ff7900');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var programWaypoint = new Waypoint({
    element: document.getElementById('program'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#requirementsNav')
            prev.css('color', '#ff7900');
            prev.css('text-decoration', 'underline');
        } else {
            let cur = $('#programNav')
            cur.css('color', '#ff7900');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var evaluationWaypoint = new Waypoint({
    element: document.getElementById('evaluation'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#programNav')
            prev.css('color', '#ff7900');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#evaluationNav')
            cur.css('color', '#ff7900');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var topicWaypoint = new Waypoint({
    element: document.getElementById('topic'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#evaluationNav')
            prev.css('color', '#ff7900');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#topicNav')
            cur.css('color', '#ff7900');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var aboutWaypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#topicNav')
            prev.css('color', '#ff7900');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#aboutNav')
            cur.css('color', '#ff7900');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var faqWaypoint = new Waypoint({
    element: document.getElementById('faqAnchor'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev = $('#aboutNav')
            prev.css('color', '#ff7900');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#faqNav')
            cur.css('color', '#ff7900');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

document.querySelector('#teamCheck').addEventListener('change', () => {
    if($('#teamCheck').is(':checked')) {
        $('#teamNameInputWrapper').show()
    } else {
        $('#teamNameInputWrapper').hide()
    }
})

$("#registerForm").submit(function(e) {
    e.preventDefault()

    let name = $("#nameInput").val()
    let email = $("#emailInput").val()
    let phone = $("#phoneNumberInput").val()
    let team = $("#teamNameInput").val()

    console.log(name,email,phone,team)

    $.post('https://newcomerjourney.com:8443/api/mail', {
        name:name,
        email:email,
        phone:phone,
        team:team
    }).done(function() {
        console.log('Success')
        $("#alertWrapperSucc").css('display', 'flex')
    }).fail(function() {
        $("#alertWrapperFail").css('display', 'flex')
        console.log('Failed')
    });
})

$('.closeAlert').click(function() {
    $(".alertWrapper").css('display', 'none')
})


$('.menu__item').click(function() {
    $('#menu__toggle').prop( "checked", false );
})
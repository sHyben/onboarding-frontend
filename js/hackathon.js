const $lgContainer = document.getElementById("inline-gallery-container");

const inlineGallery = lightGallery($lgContainer, {
    container: $lgContainer,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: ".lg-item",
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 10,
    plugins: [lgZoom, lgThumbnail],
    dynamicEl: [
        {
            src:
                "public/images/hackathon/gallery/galleryImg1.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg1.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg1.jpg",
            subHtml:
                `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg2.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg2.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg2.jpg",
            subHtml:
                `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg3.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg3.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg3.jpg",
            subHtml:
                `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg4.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg4.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg4.jpg",
            subHtml:
                `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg5.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg5.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg5.jpg",
            subHtml:
                `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg6.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg6.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg6.jpg",
            subHtml:
                `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg7.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg7.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg7.jpg",
            subHtml:
                `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg8.png",
            responsive:
                "public/images/hackathon/gallery/galleryImg8.png",
            thumb:
                "public/images/hackathon/gallery/galleryImg8.png",
            subHtml:
                `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
        },
        {
            src:
                "public/images/hackathon/gallery/galleryImg9.jpg",
            responsive:
                "public/images/hackathon/gallery/galleryImg9.jpg",
            thumb:
                "public/images/hackathon/gallery/galleryImg9.jpg",
            subHtml:
                `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
        }
    ],

    // Completely optional
    // Adding as the codepen preview is usually smaller
    thumbWidth: 60,
    thumbHeight: "40px",
    thumbMargin: 4
});

setTimeout(() => {
    inlineGallery.openGallery();
}, 200);

var homeWaypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', '#00497B');
        all.css('text-decoration', 'none');
        if(direction === "down") {
            let cur = $('#homeNav')
            cur.css('color', '#00497B');
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

$("#registerForm").submit(function() {
    $("#alertWrapper").css('display', 'flex')
})

$('#closeAlert').click(function() {
    $("#alertWrapper").css('display', 'none')
})


$('.menu__item').click(function(event) {
    $('.menu__box').css('display', 'none')
    $('#menu__toggle').prop( "checked", false );
})

$('.menu__btn').click(function(event) {
    $('.menu__box').css('display', 'block')
})
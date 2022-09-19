jQuery("#animated-thumbnails-gallery")
    .justifiedGallery({
        captions: false,
        lastRow: "hide",
        rowHeight: 180,
        margins: 5
    })
    .on("jg.complete", function () {
        window.lightGallery(
            document.getElementById("animated-thumbnails-gallery"),
            {
                autoplayFirstVideo: false,
                pager: false,
                galleryId: "nature",
                mousewheel: true,
                plugins: [lgZoom, lgThumbnail],
                mobileSettings: {
                    controls: false,
                    showCloseIcon: false,
                    download: false,
                    rotate: false
                }
            }
        );
    });

var homeWaypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', 'black');
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
        all.css('color', 'black');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev = $('#homeNav')
            prev.css('color', '#00497B');
            prev.css('text-decoration', 'underline');
        } else {
            let cur = $('#whyNav')
            cur.css('color', '#00497B');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var teamWaypoint = new Waypoint({
    element: document.getElementById('team'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', 'black');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev = $('#whyNav')
            prev.css('color', '#00497B');
            prev.css('text-decoration', 'underline');
        } else {
            let cur = $('#teamNav')
            cur.css('color', '#00497B');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var requirementsWaypoint = new Waypoint({
    element: document.getElementById('requirements'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', 'black');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#teamNav')
            prev.css('color', '#00497B');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#requirementsNav')
            cur.css('color', '#00497B');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var programWaypoint = new Waypoint({
    element: document.getElementById('program'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', 'black');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#requirementsNav')
            prev.css('color', '#00497B');
            prev.css('text-decoration', 'underline');
        } else {
            let cur = $('#programNav')
            cur.css('color', '#00497B');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var evaluationWaypoint = new Waypoint({
    element: document.getElementById('evaluation'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', 'black');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#programNav')
            prev.css('color', '#00497B');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#evaluationNav')
            cur.css('color', '#00497B');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var topicWaypoint = new Waypoint({
    element: document.getElementById('topic'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', 'black');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#evaluationNav')
            prev.css('color', '#00497B');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#topicNav')
            cur.css('color', '#00497B');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var aboutWaypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', 'black');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev =$('#topicNav')
            prev.css('color', '#00497B');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#aboutNav')
            cur.css('color', '#00497B');
            cur.css('text-decoration', 'underline');
        }
    },
    offset: window.innerHeight*0.17
})

var faqWaypoint = new Waypoint({
    element: document.getElementById('faqAnchor'),
    handler: function(direction) {
        let all = $('.navbar-brand')
        all.css('color', 'black');
        all.css('text-decoration', 'none');
        if(direction === "up") {
            let prev = $('#aboutNav')
            prev.css('color', '#00497B');
            prev.css('text-decoration', 'underline');
        } else {
            let cur =$('#faqNav')
            cur.css('color', '#00497B');
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


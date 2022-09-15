/*var anchor_offset = $('#why').offset().top;

$(window).on('scroll', function() {
    if ( $(window).scrollTop() > anchor_offset )
        $('#whyNav').css('color', '#ff7900');
    if ( $(window).scrollTop() < anchor_offset )
        $('#whyNav').css('color', 'black');
});*/



var whyWaypoint = new Waypoint({
    element: document.getElementById('why'),
    handler: function(direction) {
        $('.navbar-brand').css('color', 'black');
        if(direction === "up") {
            $('#whyNav').css('color', 'black');
        } else {
            $('#whyNav').css('color', '#00497B');
        }
    },
    offset: window.innerHeight*0.17
})

var teamWaypoint = new Waypoint({
    element: document.getElementById('team'),
    handler: function(direction) {
        $('.navbar-brand').css('color', 'black');
        if(direction === "up") {
            $('#whyNav').css('color', '#00497B');
        } else {
            $('#teamNav').css('color', '#00497B');
        }
    },
    offset: window.innerHeight*0.17
})

var requirementsWaypoint = new Waypoint({
    element: document.getElementById('requirements'),
    handler: function(direction) {
        $('.navbar-brand').css('color', 'black');
        if(direction === "up") {
            $('#teamNav').css('color', '#00497B');
        } else {
            $('#requirementsNav').css('color', '#00497B');
        }
    },
    offset: window.innerHeight*0.17
})

var programWaypoint = new Waypoint({
    element: document.getElementById('program'),
    handler: function(direction) {
        $('.navbar-brand').css('color', 'black');
        if(direction === "up") {
            $('#requirementsNav').css('color', '#00497B');
        } else {
            $('#programNav').css('color', '#00497B');
        }
    },
    offset: window.innerHeight*0.17
})

var evaluationWaypoint = new Waypoint({
    element: document.getElementById('evaluation'),
    handler: function(direction) {
        $('.navbar-brand').css('color', 'black');
        if(direction === "up") {
            $('#programNav').css('color', '#00497B');
        } else {
            $('#evaluationNav').css('color', '#00497B');
        }
    },
    offset: window.innerHeight*0.17
})

var topicWaypoint = new Waypoint({
    element: document.getElementById('topic'),
    handler: function(direction) {
        $('.navbar-brand').css('color', 'black');
        if(direction === "up") {
            $('#evaluationNav').css('color', '#00497B');
        } else {
            $('#topicNav').css('color', '#00497B');
        }
    },
    offset: window.innerHeight*0.17
})

var aboutWaypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        $('.navbar-brand').css('color', 'black');
        if(direction === "up") {
            $('#topicNav').css('color', '#00497B');
        } else {
            $('#aboutNav').css('color', '#00497B');
        }
    },
    offset: window.innerHeight*0.17
})

var faqWaypoint = new Waypoint({
    element: document.getElementById('faqAnchor'),
    handler: function(direction) {
        $('.navbar-brand').css('color', 'black');
        if(direction === "up") {
            $('#aboutNav').css('color', '#00497B');
        } else {
            $('#faqNav').css('color', '#00497B');
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


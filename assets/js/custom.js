$(window).on('load', function () {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
    });
    var btn = $('#button');
    
   // Get the button
var backButton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
$('#service-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        }
    }
})
$(document).ready(function() {

    var sync1 = $("#big");
    var sync2 = $("#thumbs");
    var slidesPerPage = 5; //globaly define number of elements per page
    var syncedSecondary = true;
    
    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: false,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoHeight:true,
        responsiveRefreshRate: 200,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    }).on('changed.owl.carousel', syncPosition);
    
    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 2000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
    
    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;
    
        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
    
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
    
        //end block
    
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();
    
        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    
    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});
$('#blog-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        }
    }
})

$('#testimonials').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        }
    }
})


$('#home3-pricing-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$('#testimonials2').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:2
        }
    }
})
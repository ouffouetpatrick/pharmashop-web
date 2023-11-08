/*----------------------------
    preloader
----------------------------*/
$(window).on('load', function () {
    $('.preloader').delay(500).fadeOut(500);
});
/*----------------------------
    dropdown click event
----------------------------*/
$(window).on('load resize', function () {
    if (window.matchMedia('(max-width: 991.98px)').matches) {
        $('.select_dropdown .dropdown_toggle').on('click', function (event) {
            event.preventDefault();
            $(this).next().toggleClass("menu-list-active");
        });
        $('.home_dropdown .home_dropdown_toggle, .page_dropdown .page_dropdown_toggle').on('click', function (event) {
            event.preventDefault();
            $(this).next().slideToggle(200);
        });
    }
});

/*----------------------------
    form validation
----------------------------*/
window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);
$(document).ready(function () {
    /*----------------------------
        sticky header
    ----------------------------*/
    $(window).scroll(function () {
        $('header').toggleClass('nav-active', $(this).scrollTop() > 10);
        $('.back-to-top').toggleClass('top-btn-active', $(this).scrollTop() > 400);
    })

    /*----------------------------
        Hamburger menu
    ----------------------------*/
    $('.hamburger-menu').on('click', function () {
        $('.line-top, .line-center, .line-bottom').toggleClass('current');
        $('.menu').toggleClass('show-menu');
    })
    /*----------------------------
        sidebar-filter
    ----------------------------*/
    $('.filter-text').on('click', function () {
        $('.category-box-wrapper').addClass('show-filter');
    })
    $('.close-filter').on('click', function () {
        $('.category-box-wrapper').removeClass('show-filter');
    })
    /*----------------------------
        mobile search
    ----------------------------*/
    $('.mobile-search-area').on('click', function () {
        $('.search-form-wrapper').addClass('show-search');
    })
    $('.close-search').on('click', function () {
        $('.search-form-wrapper').removeClass('show-search');
    })
   /*----------------------------
        hero slider carousel
    ----------------------------*/
    $('.owl-carousel.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        autoplay:true,
        animateIn:"fadeIn",
        animateOut:"fadeOut",
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
        smartSpeed:1200,
        autoHeight: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        responsive: {
            0: {
                items: 1,
                dots:true
            },
            575: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    }); 
    /*----------------------------
        testimonial carousel
    ----------------------------*/
    $('.owl-carousel.testimonial-carousel').owlCarousel({
        dots: false,
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<div class='fal fa-angle-left'></div>", "<div class='fal fa-angle-right'></div>"],
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            375: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    /*----------------------------
        smilar product carousel
    ----------------------------*/
    $('.owl-carousel.smiliar-product').owlCarousel({
        dots: false,
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                stagePadding: 15,
                items: 1
            },
            375: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    /*----------------------------
        item slider carousel
    ----------------------------*/
    $('.owl-carousel.item-slider').owlCarousel({
        dots: false,
        loop: true,
        margin: 30,
        navText: ["<div class='fal fa-angle-left'></div>", "<div class='fal fa-angle-right'></div>"],
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            375: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    /*----------------------------
        lazy load initialize
    ----------------------------*/
    // $('.lazy-load').lazyload({
    //     effect: "fadeIn"
    // });
    /*----------------------------
        range-slider
    ----------------------------*/
    $(".rangeSlider").ionRangeSlider({
        type: "double",
        from: 200,
        to: 500,
        grid: false,
        skin: "round",
        min:200,
        max:50000,
        from:20,
        to:800,
        values_separator: "-",
        // prefix: "$"
    });
    /*----------------------------
        nice number
    ----------------------------*/
    $('input[type="number"]').niceNumber();
    /*----------------------------
        nice select
    ----------------------------*/
    $(document).ready(function () {
        $('select').niceSelect();
    }); 
    /*----------------------------
        image popup
    ----------------------------*/
    $(document).ready(function () {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    });
    /*----------------------------
        Animate the scroll to top
    ----------------------------*/
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 600);
    });
    /*----------------------------
        wishlist animation
    ----------------------------*/
    $(".wishlist-animate").click(function () {
        $(".wishlist-animate .b-tn").toggleClass("animate");
        $(".wishlist-animate .b-tn").toggleClass("active");
    });

});


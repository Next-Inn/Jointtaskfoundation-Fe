var one = $("#one")
var two = $("#two")

// for testimony
one.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

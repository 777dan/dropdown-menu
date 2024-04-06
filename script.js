$(document).ready(() => {
    $('.dropdown-toggle').click(() => {
        $('.dropdown-menu').slideToggle(() => {
            $('.arrow').text($('.dropdown-menu').css("display") === 'block' ? '-' : '+');
        });
    });

    const dropdown = $(".dropdown");
    let dropdownOffset = dropdown.offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() >= dropdownOffset + parseInt(dropdown.css("height"))) {
            dropdown.addClass("dropdown-fixed");
        } else {
            dropdown.removeClass("dropdown-fixed");
        }
    });
});


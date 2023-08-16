const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
$('.feature-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    customPaging: true
});
const prevArrow2 = document.getElementById('prevArrow2');
const nextArrow2 = document.getElementById('nextArrow2');
$('.feature-items-2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prevArrow2,
    nextArrow: nextArrow2,
    customPaging: true
});
$(document).ready(function() {
    // Полная загрузка страницы
    console.log("it's ready :0");
    //Инициализация библиотеки
    new WOW().init();
    //Аккардион
    $('.wrapper-accard .accard-item > article').not(':first').hide();
    $('.wrapper-accard .item-header').on('click', function() {
        var thisArticle = $(this).next('article'),
            findWrapper = $(this).closest('.wrapper-accard');

        if (thisArticle.is(':visible')) {
            thisArticle.slideUp(400);
        } else {
            findWrapper.find('article').slideUp();
            thisArticle.slideDown(400);
        }
    });
});

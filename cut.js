/*
    Autors: Alexey Efimov
*/

$(document).ready(function() {
    $('.b-cut').css('display', 'none');
    $('.b-cut').parent().append('<a href="#" class="b-cut__link-show" >Показать полностью</a>');
    $('.b-cut').siblings('.b-cut__link-show').click(function() {
        $('.b-cut').slideToggle('slow');
        if ($(this).text()=='Показать полностью'){
            $(this).text('Скрыть');
        }else{
            $(this).text('Показать полностью');
        }
    });
});
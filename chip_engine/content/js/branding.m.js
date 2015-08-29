$(function () {
    $('link[rel=icon]').attr('href', '/ajenti:static/custom_branding_demo/logo.png');
    $('.page.auth img.logo').attr('src', '/ajenti:static/custom_branding_demo/logo.png');
    $('.page.auth img.logo').addClass('visible');
    $('#uid--2 div:first-child').append(' <span href="#toogle-system" id="toggle-system">(show/hide)</span>');
    $('#uid--2 .content').toggle();
    $('#toggle-system').click(function(){
        $('#uid--2 .content').toggle();
    });
});



$(function () {
    $('body').prepend("Admin UI");
    var iPage = $('#page');
    iPage.load(function () {
        var page = iPage.contents();
        iPage.height(page.height());
        alert(page.height());
    });
});
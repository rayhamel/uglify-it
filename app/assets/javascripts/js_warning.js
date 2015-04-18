$(document).ready(function () {
    $("#js-warning-link").click(function () {
        $(this).hide();
        $("#js-warning-text").show();
        return false;
    });
    $("#js-warning-text").click(function () {
        $(this).hide();
        $("#js-warning-link").show();
        return false;
    });
});

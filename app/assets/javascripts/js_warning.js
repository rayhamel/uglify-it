$(document).ready(function () {
    $("#js-warning-link").on("click.showJSWarning", function () {
        $(this).hide();
        $("#js-warning-text").show();
        return false;
    });
    $("#js-warning-text").on("click.hideJSWarning", function () {
        $(this).hide();
        $("#js-warning-link").show();
        return false;
    });
});

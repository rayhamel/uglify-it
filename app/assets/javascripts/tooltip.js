$(document).click(function (e) {
    $(".tooltip").remove();
    $("body").append('<span class="tooltip">Test!<span/>');
    $(".tooltip").css("left", e.pageX + 8);
    $(".tooltip").css("top", e.pageY - 11);
    return false;
});

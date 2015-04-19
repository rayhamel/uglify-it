$("body").on("click.placeTooltip", function (e) {
    $(".uglifytooltip").css("display", "inline-block");
    $(".uglifytooltip").css("left", e.pageX + 8);
    $(".uglifytooltip").css("top", e.pageY - 11);
    return false;
});

$(".uglifyminbutton.setmin").on("click.minTooltip", function (e) {
    e.stopImmediatePropagation();
    $(".uglifyoverlay").show();
    $(this).hide();
    $(".uglifyminbutton.setmax").show();
    $(".uglifytooltip").css("opacity", "0.46");
    $(".uglifytooltip").css("filter", "alpha(opacity=46)");
    return false;
});

$(".uglifyminbutton.setmax").on("click.maxTooltip", function (e) {
    e.stopImmediatePropagation();
    showTooltip();
    return false;
});

$(".uglifyclosebutton").on("click.closeTooltip", function (e) {
    e.stopImmediatePropagation();
    $(".uglifytooltip").hide();
    showTooltip();
    return false;
});

$(".uglifytooltip").on("click.clickTooltip", function (e) {
    e.stopImmediatePropagation();
    showTooltip();
    return false;
});

$(".uglifyoverlay").on("click.placeTooltip", function (e) {
    e.stopImmediatePropagation();
    return false;
});

function showTooltip () {
    $(".uglifyoverlay").hide();
    $(".uglifyminbutton.setmax").hide();
    $(".uglifyminbutton.setmin").show();
    $(".uglifytooltip").css("opacity", "0.92");
    $(".uglifytooltip").css("filter", "alpha(opacity=92)");
}

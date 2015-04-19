var uglifySelectEvent = null;

$("body").on("click.placeTooltip", function (e) {
    $(".uglifytooltip").css("display", "inline-block");
    $(".uglifytooltip").css("left", e.pageX + 8);
    $(".uglifytooltip").css("top", e.pageY - 11);
    uglifySelectEvent = e;
    return false;
});

$(".uglifycomicsans").on("click.comicSans", function () {
    $(uglifySelectEvent.target).css(
        "font-family", '"Comic Sans MS", "Comic Sans", Chalkboard, cursive'
    );
    return false;
});

$(".uglifycouriernew").on("click.courierNew", function () {
    $(uglifySelectEvent.target).css(
        "font-family", '"Courier New", Courier, "Liberation Mono", monospace'
    );
    return false;
});

$(".uglifyimpact").on("click.impact", function () {
    $(uglifySelectEvent.target).css(
        "font-family", 'Impact, Haettenschweiler, Compacta, "Arial Black", ' +
        'sans-serif'
    );
    return false;
});

$(".uglifymonotypecorsiva").on("click.monotypeCorsiva", function () {
    $(uglifySelectEvent.target).css(
        "font-family", '"Monotype Corsiva", "Apple Chancery", ' +
        '"Zapf Chancery", Zapf-Chancery, "URW Chancery L", cursive'
    );
    return false;
});

$(".uglifypapyrus").on("click.papyrus", function () {
    $(uglifySelectEvent.target).css(
        "font-family", 'Papyrus, Herculanum, Lithos, Skia, fantasy'
    );
    return false;
});

$(".uglifyfontcolorselect.uglifyred").on("click.fontRed", function() {
  $(uglifySelectEvent.target).css("color", "red")
});

$(".uglifyfontcolorselect.uglifyorange").on("click.fontOrange", function() {
  $(uglifySelectEvent.target).css("color", "#ff6600")
});

$(".uglifyfontcolorselect.uglifyyellow").on("click.fontYellow", function() {
  $(uglifySelectEvent.target).css("color", "yellow")
});

$(".uglifyfontcolorselect.uglifygreen").on("click.fontGreen", function() {
  $(uglifySelectEvent.target).css("color", "green")
});

$(".uglifyfontcolorselect.uglifyblue").on("click.fontBlue", function() {
  $(uglifySelectEvent.target).css("color", "blue")
});

$(".uglifyfontcolorselect.uglifypurple").on("click.fontPurple", function() {
  $(uglifySelectEvent.target).css("color", "purple")
});

$(".uglifyfontcolorselect.uglifywhite").on("click.fontWhite", function() {
  $(uglifySelectEvent.target).css("color", "white")
});

$(".uglifyfontcolorselect.uglifyaqua").on("click.fontAqua", function() {
  $(uglifySelectEvent.target).css("color", "aqua")
});

$(".uglifyfontcolorselect.uglifyfuchsia").on("click.fontFuchsia", function() {
  $(uglifySelectEvent.target).css("color", "fuchsia")
});

$(".uglifyfontcolorselect.uglifylime").on("click.fontLime", function() {
  $(uglifySelectEvent.target).css("color", "lime")
});

$(".uglifyminbutton.setmin").on("click.minTooltip", function (e) {
    $(".uglifyoverlay").show();
    $(this).hide();
    $(".uglifyminbutton.setmax").show();
    $(".uglifytooltip").css("opacity", "0.32");
    $(".uglifytooltip").css("filter", "alpha(opacity=32)");
    return false;
});

$(".uglifyminbutton.setmax").on("click.maxTooltip", function (e) {
    showTooltip();
    return false;
});

$(".uglifyclosebutton").on("click.closeTooltip", function (e) {
    $(".uglifytooltip").hide();
    showTooltip();
    return false;
});

$(".uglifytooltip").on("click.clickTooltip", function (e) {
    e.stopImmediatePropagation();
    showTooltip();
    return false;
});

$(".uglifyoverlay").on("click.tooltipMinified", function (e) {
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

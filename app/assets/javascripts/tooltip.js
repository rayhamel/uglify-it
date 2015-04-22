var uglifySelectEvent = null;

$("body").on("click.placeTooltip", function (e) {
    $(".uglifytooltip").css("display", "inline-block");
    $(".uglifytooltip").css("left", e.pageX + 8);
    $(".uglifytooltip").css("top", e.pageY - 11);
    uglifySelectEvent = e;
    return false;
});

$(".uglifyfontselect").on("click.fontSelect", function () {
    $(uglifySelectEvent.target).css(
        "font-family", $(this).css("font-family")
    );
    return false;
});

$(".uglifyfontcolor").on("click.fontColor", function () {
    $(uglifySelectEvent.target).css(
        "color", $(this).css("background-color")
    );
    return false;
});

$(".uglifybgselect").on("click.bgSelect", function () {
    $(uglifySelectEvent.target).css(
        "background-image", $(this).css("background-image")
    );
    return false;
});

$(".uglifybgcolor").on("click.bgColor", function () {
    $(uglifySelectEvent.target).css(
        "background", $(this).css("background-color")
    );
    return false;
});

$(".uglifyblinkselect").on("click.blink", function () {
    $(uglifySelectEvent.target).css("-webkit-animation", "blink 500ms steps(2, start) infinite");
    $(uglifySelectEvent.target).css("-ms-animation", "blink 500ms steps(2, start) infinite");
    $(uglifySelectEvent.target).css("animation", "blink 500ms steps(2, start) infinite");
});

$(".uglifybounceselect").on("click.bounce", function () {
    $(uglifySelectEvent.target).css("-webkit-animation", "bounce 1s infinite");
    $(uglifySelectEvent.target).css("-ms-animation", "bounce 1s infinite");
    $(uglifySelectEvent.target).css("animation", "bounce 1s infinite");
    return false;
});

$(".uglifymarquee").on("click.marquee", function () {
    $(uglifySelectEvent.target).wrap("<marquee></marquee>");
    return false;
});

$(".uglifyscroll").on("click.scroll", function () {
    $(uglifySelectEvent.target).wrap('<marquee direction="up"></marquee>');
    return false;
});

$("div.uglifycarousel img").on("click.placeGif", function () {
    var gif = $(this).clone();
    gif.toggleClass("uglifyplacedgif");
    gif.css("left", uglifySelectEvent.pageX - $(this).width());
    gif.css("top", uglifySelectEvent.pageY - $(this).height());
    $("body").append(gif);
    return false;
});

$(".uglifyforward").on("click.carouselForward", function () {
    var image = $("div.uglifycarousel img:visible");
    image.hide();
    if (image.is(".windows")) {
        $(".activex").show();
    } else {
        image.next().show();
    }
    return false;
});

$(".uglifyback").on("click.carouselBack", function () {
    var image = $("div.uglifycarousel img:visible");
    image.hide();
    if (image.is(".activex")) {
        $(".windows").show();
    } else {
        image.prev().show();
    }
    return false;
});

$(".uglifyclosecarousel").on("click.closeCarousel", function () {
    $(".uglifycarousel").hide();
    return false;
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

$(".uglifybackgrounds").on("click.clickBackgrounds", function (e) {
    hideTools();
    $(".uglifybgs").css("display", "inline-block");
    return false;
});

$(".uglifygifs").on("click.clickGifs", function (e) {
    $(".uglifytool").hide();
    $(".uglifycarousel").show();
    $(".uglifytooltip").animate({height: "40px"}, 'fast');
    return false;
});

$(".uglifyanimations").on("click.clickAnimations", function (e) {
    hideTools();
    $(".uglifyanimationscontainer").show();
    return false;
});

$(".uglifyfonts").on("click.clickFonts", function (e) {
    hideTools();
    $(".uglifyfontscontainer").css("display", "inline-block");
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

function hideTools () {
    $(".uglifytool").hide();
    $(".uglifytooltip").animate({height: "200px"}, 'fast');
}

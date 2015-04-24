(function ($) {
    var uglifySelectEvent = null;

    $("body").on("click.placeTooltip", function (e) {
        $(".uglifytooltip").css("display", "inline-block");
        $(".uglifytooltip").css("left", e.pageX + 8);
        $(".uglifytooltip").css("top", e.pageY - 11);
        uglifySelectEvent = e;
        return false;
    });

    $(".uglifyfontselect").on("click.fontSelect", function () {
        var node = uglifySelectEvent.target;
        var id = "//*[@data-uglifier='" + $(node).data("uglifier") + "'] ";
        var path = window.location.pathname + "/styles";
        var style = $(this).css("font-family");
        $(node).css("font-family", style);
        $.post(path, { entry: id + "font-family", value: style });
        return false;
    });

    $(".uglifyfontcolor").on("click.fontColor", function () {
        var node = uglifySelectEvent.target;
        var id = "//*[@data-uglifier='" + $(node).data("uglifier") + "'] ";
        var path = window.location.pathname + "/styles";
        var style = $(this).css("background-color");
        $(node).css("color", style);
        $.post(path, { entry: id + "color", value: style });
        return false;
    });

    $(".uglifybgselect").on("click.bgSelect", function () {
        var node = uglifySelectEvent.target;
        var id = "//*[@data-uglifier='" + $(node).data("uglifier") + "'] ";
        var path = window.location.pathname + "/styles";
        var style = $(this).css("background-image");
        $(node).css("background-image", style);
        $.post(path, { entry: id + "background", value: style });
        return false;
    });

    $(".uglifybgcolor").on("click.bgColor", function () {
        var node = uglifySelectEvent.target;
        var id = "//*[@data-uglifier='" + $(node).data("uglifier") + "'] ";
        var path = window.location.pathname + "/styles";
        var style = $(this).css("background-color");
        $(node).css("background", style);
        $.post(path, { entry: id + "background", value: style });
        return false;
    });

    $(".uglifyblinkselect").on("click.blink", function () {
        var node = uglifySelectEvent.target;
        var id = "//*[@data-uglifier='" + $(node).data("uglifier") + "'] ";
        var path = window.location.pathname + "/styles";
        var style = "blink 500ms steps(2, start) infinite"
        $(node).css("-webkit-animation", style);
        $(node).css("-ms-animation", style);
        $(node).css("animation", style);
        $.post(path, { entry: id + "-webkit-animation", value: style });
        $.post(path, { entry: id + "-ms-animation", value: style });
        $.post(path, { entry: id + "animation", value: style });
        return false;
    });

    $(".uglifybounceselect").on("click.bounce", function () {
        var node = uglifySelectEvent.target;
        var id = "//*[@data-uglifier='" + $(node).data("uglifier") + "'] ";
        var path = window.location.pathname + "/styles";
        var style = "bounce 1s infinite"
        $(node).css("-webkit-animation", style);
        $(node).css("-ms-animation", style);
        $(node).css("animation", style);
        $.post(path, { entry: id + "-webkit-animation", value: style });
        $.post(path, { entry: id + "-ms-animation", value: style });
        $.post(path, { entry: id + "animation", value: style });
        return false;
    });

    $(".uglifymarquee").on("click.marquee", function () {
        var node = uglifySelectEvent.target;
        var id = "//*[@data-uglifier='" + $(node).data("uglifier") + "'] ";
        var path = window.location.pathname + "/marquees";
        var tags = "<marquee></marquee>";
        $(node).wrap(tags);
        $.post(path, { entry: id, value: tags });
        return false;
    });

    $(".uglifyscroll").on("click.scroll", function () {
        var node = uglifySelectEvent.target;
        var id = "//*[@data-uglifier='" + $(node).data("uglifier") + "'] ";
        var path = window.location.pathname + "/marquees";
        var tags = '<marquee direction="up"></marquee>';
        $(node).wrap(tags);
        $.post(path, { entry: id, value: tags });
        return false;
    });

    $("div.uglifycarousel img").on("click.placeGif", function () {
        var gif = $(this).clone();
        var path = window.location.pathname + "/gifs";
        gif.toggleClass("uglifyplacedgif");
        gif.css("left", uglifySelectEvent.pageX - $(this).width());
        gif.css("top", uglifySelectEvent.pageY - $(this).height());
        $("body").append(gif);
        $.post(path, { entry: gif[0].outerHTML });
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
}})(jQuery);

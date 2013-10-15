/* Steve's magic code to make map height auto */

$(document).ready(function(){
    var selector = $('#headerTop, #legend, #tools, #headerBottom');
    var mapHeight = $(document).height();

    selector.each(function(i, elt){
        var $elt = $(elt);
        if ($elt.is(":visible"))
        {
            mapHeight -= $elt.outerHeight(true);
        }

    });
    $('#map').height(mapHeight);

});

/* Toggle JS */

$(document).ready(function(){

        $('body').on('click', '.closeButton', function(){
            $('.toolsFlyouts').hide();
            $('.toolsOn').removeClass('toolsOn');
            $('#flyouts').hide();
        });
        
	$("#toggle").click(function(){
	    $("#mobileFlyout").toggle();
		$('#toggle').toggleClass('toggleOn');
	});
	$("#mobileEmbed").click(function(){
	    $("#embedDrawer").toggle();
            $('#mobileEmbed .iconRight').toggleClass('icon-minus-sign-alt');
	});
	$("#mobileData").click(function(){
	    $("#dataDrawer").toggle();
            $('#mobileData .iconRight').toggleClass('icon-minus-sign-alt');
	});
	$("#mobileCredits").click(function(){
	    $("#creditsDrawer").toggle();
            $('#mobileCredits .iconRight').toggleClass('icon-minus-sign-alt');
	});
	$("#toolsEmbed").click(function(){
            $('.toolsFlyouts[id!=embedFlyout]').hide();
	    $("#embedFlyout").toggle();
            $('#tools li[id!=toolsEmbed]').removeClass('toolsOn');
            $('#toolsEmbed').toggleClass('toolsOn');
	});
	$("#toolsData").click(function(){
            $('.toolsFlyouts[id!=dataFlyout]').hide();
	    $("#dataFlyout").toggle();
            $('#tools li[id!=toolsData]').removeClass('toolsOn');
            $('#toolsData').toggleClass('toolsOn');
	});
	$("#toolsCredits").click(function(){
            $('.toolsFlyouts[id!=creditsFlyout]').hide();
	    $("#creditsFlyout").toggle();
            $('#tools li[id!=toolsCredits]').removeClass('toolsOn');
            $('#toolsCredits').toggleClass('toolsOn');
	});
	$("#legendToggle").click(function(){
        $("#legendDrawer").toggle();
        $('#legendToggle .iconRight').toggleClass('icon-caret-up');
    });
});

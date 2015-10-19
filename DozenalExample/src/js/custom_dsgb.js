function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

var today=new Date(), day_fraction=0, angle=0;
var digits=8; //how many digits to display in new_text box
var base=12; //choose 12 for dozenal, 10 for decimal etc.

$(document).ready(function () {


	$('.disable').click(function (){
		return false;
	});

$("#four,#three,#two,#one").rotate(angle);

var count = 1;


setInterval(function () {

    var local = new Date();
    var localdatetime = local.getHours() + ":" + local.getMinutes() + ":" + local.getSeconds();
    var day_fraction = local.getHours()/24 + local.getMinutes()/(24*60) + local.getSeconds()/(24*60*60) + local.getMilliseconds()/(24*60*60*1000);
    var pathArray = window.location.pathname.split( '/' );

    if ($.inArray('dsgb', pathArray) !== -1 ||
    		$.inArray('dsgb_small', pathArray) !== -1 ||
    		$.inArray('top_start_traditional', pathArray) !== -1 ||
    		$.inArray('semidiurnal', pathArray) !== -1
    ) {
		day_fraction=day_fraction*2;
	}
    var angle = 360 * day_fraction

 	$("#four").rotate(angle*base*base*base);
 	$("#three").rotate(angle*base*base);
    $("#two").rotate(angle*base);
    $("#one").rotate(angle);

	var original = (base*base*base*day_fraction).toString(base);

	//console.log($.inArray('dsgb_small', pathArray) !== -1);

	if ($.inArray('dsgb_small', pathArray) !== -1) {
		bef = original.toString().split(".")[0];
		aft = original.toString().split(".")[1];
		beforeLen = bef.length;
		before_new = bef.substring(0, bef.length - 2);
		bef_last_char = bef.substring( bef.length - 2, bef.length );
		after_new = bef_last_char + aft;
		if (after_new == undefined) { after = '000'; }
		originalNew = pad(before_new, 2) + '.' + after_new.substring(0,3);
	}
	else {
		original2 = original.substring(0, digits);
		before = original2.toString().split(".")[0];
		after = original2.toString().split(".")[1];
		if (after == undefined) { after = '00'; }
		originalNew = pad(before, 4) + '.' + after.substring(0,1);
	}

	$("#new_time").val( originalNew.replace(/a/g, '\u00AE').replace(/b/g, '\u2020') );
 	$("#regular_time").val( local.format("H:MM:ss") );

}, 25);


	$('#show_min').click(function(){
		if ($(this).is(':checked')) {
			$('#two').show();
		} else {
			$('#two').hide();
		}
	});

	$('#show_sec').click(function(){
		if ($(this).is(':checked')) {
			$('#three').show();
		} else {
			$('#three').hide();
		}
	});

	$('#show_fastest').click(function(){
		if ($(this).is(':checked')) {
			$('#four').show();
		} else {
			$('#four').hide();
		}
	});

	$('.external').attr('target', '_blank');

	/* toggle marks */

	var marks_visible = 1;

	$('#toggle_marks').click(function () {
		var o_src = $('#numerals').attr('src');
		if (marks_visible) {
			n_src = o_src.replace('.png', '-sans.png');
			$('#numerals').attr('src', n_src);
			marks_visible = 0;
		} else {
			n_src = o_src.replace('-sans.png', '.png');
			$('#numerals').attr('src', n_src);
			marks_visible = 1;
		}
	});

});

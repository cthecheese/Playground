var digits=6; //how many digits to display in new_text box
var base=12; //choose 12 for dozenal, 10 for decimal etc.

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

$(document).ready(function () {
	$('.disable').click(function (){
		return false;
	});


$("#four,#three,#two,#one").rotate(0);

 setInterval(function () {

    var local = new Date();
    var localdatetime = local.getHours() + ":" + local.getMinutes() + ":" + local.getSeconds();
    var day_fraction = local.getHours()/24 + local.getMinutes()/(24*60) + local.getSeconds()/(24*60*60) + local.getMilliseconds()/(24*60*60*1000)
    var angle = 360 * day_fraction;
    var pathArray = window.location.pathname.split( '/' );

 	$("#four").rotate(angle*base*base*base);
 	$("#three").rotate(angle*base*base);
    $("#two").rotate(angle*base);
    $("#one").rotate(angle);

	var original = (base*base*base*day_fraction).toString(base),
	original2 = original.substring(0, digits),
	before = original2.toString().split(".")[0],
	after = original2.toString().split(".")[1];
	if (after == undefined) { after = '00'; }

	//console.log($.inArray('semidiurnal', pathArray));

	if ( $.inArray('semidiurnal', pathArray) === -1 ) {
		originalNew = pad(before, 3) + '.' + after.substring(0,2);
	}
	else {
		originalNew = pad(before, 4) + '.' + after.substring(0,1);
	}

	//console.log(originalNew);

 	// $("#new_time").val( originalNew.replace(/b/g, 'E').replace(/a/g, 'X') );
 	// $("#new_time").val( originalNew.replace(/b/g, '&#x2020;').replace(/a/g, '&#x00AE') );


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

	$('#toggle_boxes').click(function () {
		$('#time_display').toggle();
		return false;
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

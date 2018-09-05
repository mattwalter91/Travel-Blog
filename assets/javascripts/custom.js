$(function(){
	setTime();
});

function setTime(){
	let location = "San Francisco, USA";
	let tz = "America/Los_Angeles";
	var time = moment().tz(tz).format('h:mm a');
	$('#location').html('Current Location: '+location+' - '+time);
}
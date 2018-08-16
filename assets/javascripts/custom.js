$(function(){
	setTime();
});

function setTime(){
	let location = "Brooklyn, New York";
	let tz = "America/New_York";
	var time = moment().tz(tz).format('h:mm a');
	$('#location').html('Current Location: '+location+' - '+time);
}
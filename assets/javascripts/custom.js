$(function(){
	setTime();
});

function setTime(){
	let location = "Playa Del Carmen, Mexico";
	let tz = "America/Cancun";
	var time = moment().tz(tz).format('h:mm a');
	$('#location').html('Current Location: '+location+' - '+time);
}
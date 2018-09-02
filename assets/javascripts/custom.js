$(function(){
	setTime();
});

function setTime(){
	let location = "Mexico City, Mexico";
	let tz = "America/Mexico_City";
	var time = moment().tz(tz).format('h:mm a');
	$('#location').html('Current Location: '+location+' - '+time);
}
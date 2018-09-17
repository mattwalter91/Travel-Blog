$(function(){
	setTime();
});

function setTime(){
	let location = "Auckland, New Zealand";
	let tz = "Pacific/Auckland";
	var time = moment().tz(tz).format('h:mm a');
	$('#location').html('Current Location: '+location+' - '+time);
}
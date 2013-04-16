jQuery(function($) {
	var res = {};
	res['meters'] = 0;
	res['calories'] = 0;
	res['speed'] = 0;
	function cal_on_meters(meters)
	{
		if (meters!=''&&!isNaN(meters))
		{
			res['calories'] = Math.floor(meters*1.8);
			res['speed'] = Math.floor(res['calories'] / meters * 3);
		}
	}
	function cal_on_calories(calories)
	{
		if (calories!=''&&!isNaN(calories))
		{
			res['meters'] = Math.floor(calories/1.8);
			res['speed'] = Math.floor(calories / res['meters'] * 3);
		}
	}
	function cal_on_speed(speed)
	{
		if (speed!=''&&!isNaN(speed))
		{
			res['calories'] = Math.floor(speed/3*100);
			res['meters'] = Math.floor(res['calories']/1.8);
		}
	}
	$('#btnMeters').click(function() {
		cal_on_meters($('#meters').val());
		$('#res-meters').text('Calories: '+res['calories']+' Kcals - Speed: '+res['speed']+'km/h');
	});
	$('#btnCalories').click(function() {
		cal_on_calories($('#calories').val());
		$('#res-calories').text('Your meters: '+res['meters']+' m - Speed: '+res['speed']+'km/h');
	});
	$('#btnSpeed').click(function() {
		cal_on_speed($('#speed').val());
		$('#res-speed').text('Calories: '+res['calories']+' Kcals - Your meters: '+res['meters']+' m');
	});
	$('#btnPick').click(function() {
		$.initialize();
		$.mobile.changePage($("#page4"), "none");
	});
});
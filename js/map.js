jQuery(function($) {
	var map;

      $.initialize = function() {
        var mapOptions = {
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        // Try HTML5 geolocation
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({
              map: map,
              position: pos
            });
			
			var marker = new google.maps.Marker({
			  position: pos,
			  map: map,
			  title:"Current location"
		  });
			var circle = new google.maps.Circle({
			  map: map,
			  radius: 200,    // 10 miles in metres
			  strokeColor: "#4195FF",
			  strokeWeight: 2,
			  fillColor: '#B9D8FF'
			});
			circle.bindTo('center', marker, 'position');
			
			var image = 'beachflag.png';
			var myLatLng = new google.maps.LatLng(-33.890542, 151.274856);
			var beachMarker = new google.maps.Marker({
				  position: myLatLng,
				  map: map,
				  icon: image
			  });

            map.setCenter(pos);
          }, function() {
            handleNoGeolocation(true);
          });
        } else {
          // Browser doesn't support Geolocation
          handleNoGeolocation(false);
        }
      }

      function handleNoGeolocation(errorFlag) {
        if (errorFlag) {
          var content = 'Error: The Geolocation service failed.';
        } else {
          var content = 'Error: Your browser doesn\'t support geolocation.';
        }

        var options = {
          map: map,
          position: new google.maps.LatLng(60, 105),
          content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);
      }

      
});
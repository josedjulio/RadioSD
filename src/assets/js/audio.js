		


		
          $(document).ready(function(){

	  			var audio = $('#reproductor')[0]

	  			audio.addEventListener('waiting', function () {
					$('#con-play').html('<img src="assets/imgs/loading.gif" width="100">');
			    }, false);
			    audio.addEventListener('playing', function () {
					$('#con-play').html('<img src="assets/imgs/stop.png" width="100">');
			    }, false);

	  			$('#player').click(function(){
	  				if (audio.paused){
	  				audio.play();
	  				$('#con-play').html('<img src="assets/imgs/stop.png" width="100">');
	  				
	  				}else {
						audio.pause();	  				
	  				$('#con-play').html('<img src="assets/imgs/play.png" width="100">');
	  				}
	  			});
	  	});
		 
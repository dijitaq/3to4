$(document).foundation();

$(document).ready(function(){
	$('#team-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
	});
	
	/* our partners scene
	var our_partners_controller = new ScrollMagic.Controller();
		
	var our_partners_scene = new ScrollMagic.Scene({
		triggerElement: "#our-partners",
		//triggerHook: "onEnter",
		duration: "100%"
		
	})
	//.addIndicators()
	.on("enter", function(){
		$('#our-partners').addClass('is-in-view');
	})
	.addTo(our_partners_controller);*/
	
	if ($('.logos').length > 0) {
		$('.logos').each(function(){
			var element = $(this).attr('id');
		
			var controller = new ScrollMagic.Controller()
			
			var scene = new ScrollMagic.Scene({
				triggerElement: '#' + element,
				//triggerHook: "onEnter",
				duration: "100%"
			})
			//.addIndicators()
			.on("enter", function(){
				$('#' + element).addClass('is-in-view');
			})
			.addTo(controller);
		});
	}
});

$('form').submit(function(ev) {
	ev.preventDefault();
	
}).on('invalid.zf.abide', function(ev, elm){
	console.log(ev);
		
}).on('formvalid.zf.abide', function(ev, elm){
	var thisForm = $(ev.target);
	var name = $('input[name=name]').val();
	var email = $('input[name=email]').val();
	
    thisForm.addClass('sending');
	thisForm.find('input').attr('disabled', true);
	thisForm.find('textarea').attr('disabled', true);
	thisForm.find('button').attr('disabled', true);
	thisForm.find('button').find('span').text("sending");
	
	/*$.ajax({
        type: 'POST',
        url: 'subscribe.php', //
        data: { nname: nname, email: email },
        success: function(response){
	        console.log(response);
        	response=JSON.parse(response);
        	
        	if (response) {
	        	thisForm.find('.callout').addClass('show');
	        	thisForm.removeClass('sending');
		        thisForm.find('input').attr('disabled', false).val('').prop('checked', false);
		        thisForm.find('button').attr('disabled', false);
		        	
	        	if (response.success == 1) {
		        	thisForm.find('.callout').find('p').text(response.message);
		        	
				} else {
					thisForm.find('.callout').find('p').text(response.message);
				}
			}
        }
	});*/
});

$('.btn-goto').on('click', function(e){
	e.preventDefault();
	var slide = Number($(this).attr('data-goto'));
	
	$('#team-slider').slick('slickGoTo', slide);
});
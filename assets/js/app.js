$(document).foundation();

$(document).ready(function(){
	$('#team-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
	})
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
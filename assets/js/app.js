$(document).foundation();

$(document).ready(function(){
    // what we do section
    var scene_0_controller = new ScrollMagic.Controller();
    var scene_0 = new ScrollMagic.Scene({
        triggerElement: '#hero-image',
        triggerHook: "onLeave",
        duration: "100%"
    })
    .addTo(scene_0_controller);

    // what we do section
    var scene_1_controller = new ScrollMagic.Controller();
    var scene_1 = new ScrollMagic.Scene({
        triggerElement: '#what-we-do',
        //triggerHook: "onEnter",
        duration: "100%"
    })
    //.addIndicators()
    .on("enter", function(){
        $('#what-we-do').addClass('is-in-view');
    })
    .addTo(scene_1_controller);

    // customer section
    var scene_2_controller = new ScrollMagic.Controller();
    var scene_2 = new ScrollMagic.Scene({
        triggerElement: '#customer',
        //triggerHook: "onEnter",
        duration: 2000
    })
    //.addIndicators()
    .on("enter", function(){
        $('#customer').addClass('is-in-view');
    })
    .addTo(scene_2_controller);
    
    if (Foundation.MediaQuery.atLeast('large')) {
        var tween_2 = new TimelineMax()
        .add([
            TweenMax.to('#customer', 1, { backgroundPosition: "100% -300px", force3D:true, ease: Linear.easeNone })
        ]);
        
        scene_2.setTween(tween_2);
    }

    var scene_3_controller = new ScrollMagic.Controller();
    var scene_3 = new ScrollMagic.Scene({
        triggerElement: '#our-story',
        //triggerHook: "onLeave",
        duration: 2000
    })
    //.addIndicators()
    .on("enter", function(){
        $('#our-story').addClass('is-in-view');
    })
    .addTo(scene_3_controller);
    
    if (Foundation.MediaQuery.atLeast('large')) {
        // our story section
        var tween_3 = new TimelineMax()
        .add([
            TweenMax.to('#our-story', 1, { backgroundPosition: "0 -150px", force3D:true, ease: Linear.easeNone })
        ]);
        
        scene_3.setTween(tween_3);
    }

    // our team section
    var scene_4_controller = new ScrollMagic.Controller();
    var scene_4 = new ScrollMagic.Scene({
        triggerElement: '#our-team',
        //triggerHook: "onEnter",
        duration: "100%"
    })
    //.addIndicators()
    .on("enter", function(){
        $('#our-team').addClass('is-in-view');
    })
    .addTo(scene_4_controller);

    // brand experience section
    var scene_5_controller = new ScrollMagic.Controller();
    var scene_5 = new ScrollMagic.Scene({
        triggerElement: '#brand-experience',
        //triggerHook: "onEnter",
        duration: "100%"
    })
    //.addIndicators()
    .on("enter", function(){
        $('#brand-experience').addClass('is-in-view');
    })
    .addTo(scene_5_controller);

    // contact us section
    var scene_6_controller = new ScrollMagic.Controller();
    var scene_6 = new ScrollMagic.Scene({
        triggerElement: '#contact-us',
        //triggerHook: "onEnter",
        duration: "100%"
    })
    //.addIndicators()
    .on("enter", function(){
        $('#contact-us').addClass('is-in-view');
    })
    .addTo(scene_6_controller);
    
	// partners section
	if ($('.logos').length > 0) {
		$('.logos').each(function(){
			var element = $(this).attr('id');
		
			var controller = new ScrollMagic.Controller();
			
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

//
$('form').submit(function(ev) {
	ev.preventDefault();
	
}).on('invalid.zf.abide', function(ev, elm){
	console.log(ev);
		
}).on('formvalid.zf.abide', function(ev, elm){
	var thisForm = $(ev.target);
	var name = $('input[name=name]').val();
	var email = $('input[name=email]').val();
    var message = $('textarea[name=message]').val();
	
    thisForm.addClass('sending');
	thisForm.find('input').attr('disabled', true);
	thisForm.find('textarea').attr('disabled', true);
	thisForm.find('button').attr('disabled', true);
	thisForm.find('button').find('span').text("sending");
	
	$.ajax({
        type: 'POST',
        url: 'submit-email.php', //
        data: { name: name, email: email, message:message },
        success: function(response){
	        console.log(response);
        	response=JSON.parse(response);
        	
        	if (response) {
	        	thisForm.parent().find('.callout').removeClass('hide');
	        	thisForm.removeClass('sending');
		        thisForm.find('input').attr('disabled', false).val('').prop('checked', false);
                thisForm.find('textarea').attr('disabled', false).val('').prop('checked', false);
		        thisForm.find('button').attr('disabled', false);
		      
                console.log(response.message);
                
	        	if (response.success == "1") {
		        	thisForm.parent().find('.callout').addClass('success').find('p').text(response.message);
		        	
				} else {
					thisForm.parent().find('.callout').addClass('alert').find('p').text(response.message);
				}
			}
        }
	});
});


//
$(document).on('click touchstart', function(e) {
    $('#trigger-navigation').removeClass('is-open');
    
    $('#main-navigation').removeClass('is-open');
});


//
$('#trigger-navigation').on('click touchstart', function(e){
    e.preventDefault();
    e.stopPropagation();
    
    $(this).toggleClass('is-open');
    
    $('#main-navigation').toggleClass('is-open');
});

$('#main-navigation').find('a').on('click touchstart', function(e) {
    e.preventDefault();
    
    var id = $(this).attr('href');
    
    $('#trigger-navigation').toggleClass('is-open');
    
    $('#main-navigation').toggleClass('is-open');
    
    $('#main-navigation').foundation('scrollToLoc', $(id));
});
jQuery(document).ready(function () {
	jQuery('#submit').on('click',document,function(){
			if(jQuery('#captcha_val').val()!=jQuery('#captcha_text').val()){
				$('#captcha_text').parent('div').append('<span class="error">Captch is not match</span>');
			}
			else{
				jQuery("#contactpage").validate({
					submitHandler : function (e) {
						submitSignupFormNow(jQuery("#contactpage"))
					},
					rules : {
						fname : {
							required : true
						},
						phone : {
							required : true,
							number : true
						},
						email : {
							required : true,
							email : true
						}
					},
					errorElement : "span",
					errorPlacement : function (e, t) {
						e.appendTo(t.parent())
					}
				});
				submitSignupFormNow = function (e) {
					var t = e.serialize();
					var n = "contact-form.php"; // Anpassen!
				  
					jQuery.ajax({
					  url: n,
					  type: "POST",
					  data: t,
					  success: function (e) {
						var t = jQuery.parseJSON(e);
						if (t.status == "Success") {
						  jQuery("#form_result").html('<div class="alert alert-success">' + t.msg + "</div>");
						  e[0].reset();
						} else {
						  jQuery("#form_result").html('<div class="alert alert-danger">' + t.msg + "</div>");
						}
						jQuery("#form_result").show();
				  
						setTimeout(function () {
						  jQuery("#form_result").fadeOut();
						}, 6000);
				  
						jQuery('html, body').animate({
						  scrollTop: jQuery("#form_result").offset().top - 100
						}, 600);
					  }
					});
				  
					return false;
				  }
				  
		}
	});
	
})

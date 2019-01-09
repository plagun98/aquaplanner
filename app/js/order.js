$("#headerload").load('header.html');
$("#footerload").load('footer.html');
$(document).ready(function($){
	if( $('.floating-labels').length > 0 ) floatLabels();

    $('.email').keyup(()=>{
        var user__email = $('.email').value;
        console.log(user__email);
    });

	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields 
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);	
			});
		});
	}

	function checkVal(inputField) {
		( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
	}
});
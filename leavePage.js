$(document).ready(function()	{
	$(function() {
      $("#datepicker").datepicker();
      $("#dialog").dialog();
      $("#tabs").tabs();
    });




	function promptUser() {
	var popup = document.querySelector("div#popup");
	var hidden = true;

	if(hidden) {
		setTimeout(promptUser, 10000);
		popup.classList.remove("hidden");
		hidden = true;

		var stay = document.querySelector("button#stay");
		var exit = document.querySelector("button#exit");

		stay.addEventListener('click', function (evt) {
			console.log('clicked');
			popup.classList.add("hidden");
			hidden = true;
			setTimeout(promptUser, 10000);
		})

		exit.addEventListener('click', function (evt) {
			console.log('clicked');
			window.location.href="http://www.google.com";
		})
	}
}

setTimeout(promptUser, 10000);
});	

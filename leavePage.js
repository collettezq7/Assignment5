$(document).ready(function()	{
	$(function() {
      $("#datepicker").datepicker();
      $("#dialog").dialog();
      $("#tabs").tabs();
    });




	function promptUser(){
		var answer = confirm("Your session is expiring soon. Do you want to stay on this page, buddy?");
	if (answer == true){
		setTimeout(promptUser, 10000);
		}
	else{
		window.location.href="http://www.google.com";}
		}
		setTimeout(promptUser, 10000);
});	

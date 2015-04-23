$(document).ready(function() {
	var increment = 0;
	$("#adicionar").click(function() {
		increment++;
		
		$("#aprender").append("<li id='item-" + increment + "'>" + $("#texto").val() 
			+ "<button id='mover-" + increment + "' class='btn btn-small btn-info'> Mover </button>"
			+ "<button id='remover' name='remover-" + increment + "' class='btn btn-small btn-danger'> Remover </button>"
			+ "</li>");	
	});

	$("#remover").click(function() {

		alert($this);

	});
});
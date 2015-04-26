$(document).ready(function() {
	var increment = 0;
	var buttonAprendi = "<td> <button name='aprendi' class='btn btn-small btn-info'> Aprendi <span class='glyphicon glyphicon-book'> </span> </button> </td>";
	var buttonRemover = "<td> <button name='remover' class='btn btn-small btn-danger'> Remover <span class='glyphicon glyphicon-remove' aria-hidden='true'> </span> </button> </td>";

	$("#adicionar").click(function() {
    
    if ($("#texto").val().trim() != ""){
        $("#aprender").append("<tr>" + "<td class='texto'>" + "<tema>" + $("#texto").val() + "</tema>" + "</td>"
  		  + buttonAprendi + buttonRemover	
			  + "</tr>");	
    } else {
        alert("Preencha os campos!");
    }

	});

	$("#aprender").on("click", "button[name='remover']", function() {
		var td = $(this).parent();
		var linha = td.parent();
		linha.remove();
	});

	$("#aprender").on("click", "button[name='aprendi']", function() {
		var td = $(this).parent();
		var linha = td.parent();

		$("#aprendi").append("<tr>" 
			+ "<td>" + linha.find("tema").text() + "</td>" 
			+ "<td>" + buttonRemover + "</td>" 
			+ "</tr>");

		linha.remove();	
	});

	$("#aprendi").on("click", "button[name='remover']", function() {
		var td = $(this).parent();
		var linha = td.parent();

		linha.remove();
	});

});
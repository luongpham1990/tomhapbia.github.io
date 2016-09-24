$( function() {
	$( ".move" ).sortable({
		connectWith: ".move"
	}).disableSelection();


	$('.collapsible').collapsible({
		accordion : false
	});


	var idAddToDo = 5;
	$(".waves-effect").on('click', function(){
		var nameToDo = $("#nameToDo").val();
		var descriptionToDo = $("#description").val();
		var temp = '<li class="collection-item" data-id-li="' + idAddToDo +'"><div class="collapsible-header">'+ nameToDo +'<i class="small material-icons" data-id-i="'+ idAddToDo +'">delete</i></div><div class="collapsible-body"><p>'+ descriptionToDo +'</p></div></li>';
		// console.log(nameToDo);
		// console.log(descriptionToDo);
		$("#toDo").append(temp);
		$(".collection-item .collapsible-header i").on('click', function(){
			var idToDo = $(this).attr('data-id-i');
			$('li[data-id-li=' + idToDo + ']').css('display', 'none');;
		})
		idAddToDo++;
	})

	$(".collection-item .collapsible-header i").on('click', function(){
		var idToDo = $(this).attr('data-id-i');
		$('li[data-id-li=' + idToDo + ']').css('display', 'none');;
	})
});


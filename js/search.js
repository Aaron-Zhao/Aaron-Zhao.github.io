$(document).ready(function() {
  //class .in for departments, class .itemin for department items
  //initialize number of departments listed based on <h2> tag
  $('.list-count').text($('#list h2').length + ' items');
  //initialize number of items listed based on <a> tag
  $('.item-count').text($('#list a').length + ' tags');
  
  //called when something get typed in
  $("#search-text").keyup(function () {
  
    var searchTerm = $("#search-text").val();
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
      //extends :contains to be case insensitive
    $.extend($.expr[':'], {
	  'containsi': function(elem, i, match, array)
	  {
		return (elem.textContent || elem.innerText || '').toLowerCase()
		.indexOf((match[3] || "").toLowerCase()) >= 0;
	  }
	});
    
	
    $("#list h2").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).parent().addClass('hiding out').removeClass('in');  //remove <li> tag based on <h2>
      setTimeout(function() {	//transition
          $('.out').addClass('hidden');
        }, 300);
    });
	
	//$("#list a").not(":containsi('" + searchSplit + "')").each(function(e)   {
	//  $(this).addClass('hidden').removeClass('itemin');  //hide <a> tag based on <a>
	//  $(this).next().addClass('hidden'); //hide <br> tag that is after this <a>
    //});
	  
    $("#list h2:containsi('" + searchSplit + "')").each(function(e) {
      $(this).parent().removeClass('hidden out').addClass('in');		//show <li> tag based on <h2>
	  $(this).parent().children("a").removeClass('hidden').addClass('itemin'); //show all <a> child tags based on <h2>
	  $(this).parent().children("br").removeClass('hidden'); //show all <br> child tags
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
    });
    
	$("#list a:containsi('" + searchSplit + "')").each(function(e) {
      $(this).parent().removeClass('hidden out').addClass('in');//show <li> tag based on <a>
	  $(this).removeClass('hidden').addClass('itemin');//show this <a> tag based on <a>
	  $(this).next().removeClass('hidden'); //show <br> tag that is after this <a>
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
	
    });
    
	//update department count based on .in class
    $('.list-count').text($('#list .in').length + ' items');
	//update department count based on .itemin class
    $('.item-count').text($('#list .itemin').length + ' tags');
	
    //shows empty state text when no department found
    if($('#list .in').length == '0') {
      $('#list').addClass('empty');
    }
    else {
      $('#list').removeClass('empty');
    }
    
  }); //keyup() end
                    
});
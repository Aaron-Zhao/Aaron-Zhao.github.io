$(document).ready(function() {

  var jobCount = $('#list .in').length;
  $('.list-count').text(jobCount + ' items');
    
  
  $("#search-text").keyup(function () {
     //$(this).addClass('hidden');
  
    var searchTerm = $("#search-text").val();
    //var listItem = $('#list').children('li');
  
    
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
    
    // search for h2 tag (dish title)
    $("#list h2").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).parent().addClass('hiding out').removeClass('in');  //remove li tag regarding h2
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });
    
    $("#list h2:containsi('" + searchSplit + "')").each(function(e) {
      $(this).parent().removeClass('hidden out').addClass('in');
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
    });
    
  
      var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' items');
    
    //shows empty state text when no jobs found
    if(jobCount == '0') {
      $('#list').addClass('empty');
    }
    else {
      $('#list').removeClass('empty');
    }
    
  });

  
                  
     /*  
     An extra! This function implements
     jQuery autocomplete in the searchbox.
     Uncomment to use :)
     
     
 function searchList() {                
    //array of list items
    var listArray = [];
  
     $("#list li").each(function() {
    var listText = $(this).text().trim();
      listArray.push(listText);
    });
    
    $('#search-text').autocomplete({
        source: listArray
    });
    
    
  }
                                   
  searchList();
*/
  
                    
});
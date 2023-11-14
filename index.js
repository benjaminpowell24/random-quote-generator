const category = 'life';
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

var author, quote = '';


function getQuote(){
  $.ajax({
    headers: {'X-Api-Key': 'Xyqu0qw+PsAZR6DgIp4Rvw==fcq4ZbkrxYRhYH2l'},
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    type: "GET",
    success: function(data){
      author = data[0]["author"];
      quote = data[0]["quote"];
      
      $('#text').text(quote);
      $('#author').text(author);

      $(".quote-text").animate({
        opacity: 0
      }, 500,
      function() {
        $(this).animate({
          opacity: 1
        }, 500);
        $('#text').text(quote);
      });

    $(".quote-author").animate({
        opacity: 0
      }, 500,
      function() {
        $(this).animate({
          opacity: 1
        }, 500);
        $('#author').text(author);
      });

      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);

  },
    error: function(err){
      console.log(err)
    }
  });
}

$(document).ready(function(){
  getQuote();
  $('#new-quote').on('click', getQuote); 
  $('#tweet-quote').on('click', function() {
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=programming&text=' + encodeURIComponent('"' + quote + '" ' + author));
  });
});
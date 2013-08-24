$(function(){

  $('#box-search').keypress(function(){
    $('#box-search').attr({ placeholder: ""});
  })

  var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
  var input = $('#box-search').val();

     $('#btn-submit').click(function(){
        $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: $('#box-search').val(),
                apiKey: 'k5kwysez43kzpd3dx5jk7p2w',
                page: '1'
            },
            success: showMovies
        });

    });

    function showMovies(response) {
      console.log('response', response);
      var movies = response.movies;
      var input = $('#box-search').val();
      $('.searchresultbox').html('');
      $('.main').height('auto');
      $('<div/>').attr({class: 'searchresultbox'}).appendTo('.main').height('auto');
      $('.searchresultbox').append('<h2>' + 'Found: ' + movies.length + ' items' +' | Results for' + ' "' + input + '"' + '</h1>');
      $('.searchresultbox').append('<h1>' + 'Movies' + '</h1>')
      $('<div/>').attr({class: 'search-result'}).appendTo('.searchresultbox').height('absolute');
      //$('<div/>').attr({class: 'search-result'}).appendTo('.searchresultbox');
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
                  $('.search-result').append('<h1>' + movie.title + '</h1>');
                  $('.search-result').append('<h2>' + movie.year + '</h2>');
                  $('.search-result').append('<img src="' + movie.posters.thumbnail + '" />');
                  $('.search-result').append('<h4>' + 'Audience Score' + '</h4>');
                  $('.search-result').append('<h3>' + movie.ratings.audience_score + '</h3>');
                  $('.search-result').append('<hr>'+'</hr>');
        }
    }
 });
         
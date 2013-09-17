$(function(){

  $('#box-search').keypress(function(){
    $('#box-search').attr({ placeholder: ""});
  });
  
  var app = {};
  var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
  var server_boxoffice = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';
  var server_intheater = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
  var server_upcomingmovies = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json';
  var server_openingmovies = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json';
  var input = $('#box-search').val();

       
     $('#btn-submit').click(function(){
        $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: $('#box-search').val(),
                apiKey: 'k5kwysez43kzpd3dx5jk7p2w',
            },
            success: showMovies
        });

    });


     $('#box-office').click(function(){
      $.ajax({
            url: server_boxoffice,
            dataType: 'jsonp',
            data: {
                apiKey: 'k5kwysez43kzpd3dx5jk7p2w',
            },
            success: showBoxoffice
        });
      
    });    
    
    $('#in_theater').click(function(){
      $.ajax({
            url: server_intheater,
            dataType: 'jsonp',
            data: {
                apiKey: 'k5kwysez43kzpd3dx5jk7p2w',
            },
            success: showIntheater
        });

    });    

    $('#upcoming_movies').click(function(){
      $.ajax({
            url: server_upcomingmovies,
            dataType: 'jsonp',
            data: {
                apiKey: 'k5kwysez43kzpd3dx5jk7p2w',
            },
            success: showUpcoming
        });

    });

    $('#opening_movies').click(function(){
      $.ajax({
            url: server_openingmovies,
            dataType: 'jsonp',
            data: {
                apiKey: 'k5kwysez43kzpd3dx5jk7p2w',
            },
            success: showOpening
        });

    });    

      $('#home').click(function(){
        $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: $('#box-search').val(),
                apiKey: 'k5kwysez43kzpd3dx5jk7p2w',
            },
            success: showMovies
        });

    });

    
     
     function getTemplate(template_name, data) {
        var markup = "";
        var template = $('#' + template_name).html();
        var $template = Handlebars.compile(template);
        markup = $template(data);
        return markup;
    }
    
     function getsearchResult(template_name, data) {
        var markup = "";
        var template = $('#' + template_name).html();
        var $template = Handlebars.compile(template);
        markup = $template(data);
        return markup;
    }

   
   
     function showMovies(response) {
      console.log('response', response);
      var movies = response.movies;
      var input = $('#box-search').val();
      $('.middiv').html('');
      $('.middiv').append(getsearchResult('tpl-searchresult', movie));
      $('.result').html('');
      $('.result').height('absolute');
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
               $('.result').append(getTemplate('tpl-movie', movie));
        }
    }

     function getBoxoffice(template_name, data) {
        var markup = "";
        var template = $('#' + template_name).html();
        var $template = Handlebars.compile(template);
        markup = $template(data);
        return markup;
    }

   
   
     function showBoxoffice(response) {
      console.log('response', response);
      var movies = response.movies;
      var input = $('#box-search').val();
      $('.middiv').html('');
      $('.middiv').append(getsearchResult('tpl-boxoffice', movie));
      $('.result').html('');
      $('.result').height('absolute');
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
               $('.result').append(getTemplate('tpl-movie', movie));
        }
    }

     function getIntheater(template_name, data) {
        var markup = "";
        var template = $('#' + template_name).html();
        var $template = Handlebars.compile(template);
        markup = $template(data);
        return markup;
    }

   
   
     function showIntheater(response) {
      console.log('response', response);
      var movies = response.movies;
      var input = $('#box-search').val();
      $('.middiv').html('');
      $('.middiv').append(getIntheater('tpl-intheater', movie));
      $('.result').html('');
      $('.result').height('absolute');
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
               $('.result').append(getTemplate('tpl-movie', movie));
        }
    }

     function getUpcoming(template_name, data) {
        var markup = "";
        var template = $('#' + template_name).html();
        var $template = Handlebars.compile(template);
        markup = $template(data);
        return markup;
    }

   
   
     function showUpcoming(response) {
      console.log('response', response);
      var movies = response.movies;
      var input = $('#box-search').val();
      $('.middiv').html('');
      $('.middiv').append(getUpcoming('tpl-upcoming', movie));
      $('.result').html('');
      $('.result').height('absolute');
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
               $('.result').append(getTemplate('tpl-movie', movie));
        }
    }

     function getOpening(template_name, data) {
        var markup = "";
        var template = $('#' + template_name).html();
        var $template = Handlebars.compile(template);
        markup = $template(data);
        return markup;
    }

   
   
     function showOpening(response) {
      console.log('response', response);
      var movies = response.movies;
      var input = $('#box-search').val();
      $('.middiv').html('');
      $('.middiv').append(getOpening('tpl-opening', movie));
      $('.result').html('');
      $('.result').height('absolute');
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
               $('.result').append(getTemplate('tpl-movie', movie));
        }
    }




 });



         
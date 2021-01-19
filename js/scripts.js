$(document).ready(function() {
  $("form.favorite-things").submit(function(event) {
    const favoriteThings = [$("input#movie").val(), $("input#food").val(), $("input#flower").val(), $("input#name").val()];
    const newFavorites = [favoriteThings[2], favoriteThings[0], favoriteThings[1]];    
    $("#fav-movie").text(newFavorites[0]);
    $("#fav-food").text(newFavorites[1]);
    $("#fav-flower").text(newFavorites[2]);
    
    
    event.preventDefault();
  });
});
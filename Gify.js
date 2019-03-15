$(document).ready(function() {
  var gifs = ["LeBron James", "Kobe Bryant", "Kevin Durant"];

  function displayGifInfo() {
    var gif = $(this).attr("data-name");
    var queryURL =
      "http://api.giphy.com/v1/gifs/search?q=nbaplayers&limit=10" +
      gif +
      "apikey=Z0BaAAzFc6U5BVk4Z7ezrBt6Jw2tfjW3";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#results").text(JSON.stringify(response));
    });
  }

  function renderButtons() {
    // Deleting the buttons prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#appends").empty();

    // Looping through the array of movies
    for (var i = 0; i < gifs.length; i++) {
      // Then dynamically generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie to our button
      a.addClass("gif");
      // Adding a data-attribute
      a.attr("data-name", gifs[i]);
      // Providing the initial button text
      a.text(gifs[i]);
      // Adding the button to the buttons-view div
      $("#appends").append(a);
    }
  }

  $("#submit").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var gifss = $("#textbox")
      .val()
      .trim();

    // Adding the movie from the textbox to our array
    gifs.push(gifss);
    console.log(gifs);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Function for displaying the movie info
  // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
  $(document).on("click", ".movie", displayGifInfo);

  // Calling the renderButtons function to display the initial buttons
  renderButtons();
});

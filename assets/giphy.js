 var animals = ["cat", "dog", "rabbit", "turtle"];

      function renderButtons() {

    
        $("#giphys-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < animals.length; i++) {

          var a = $("<button>");
          // Adding a class
          a.addClass("animal");
          a.attr("data-name", animals[i]);
          a.text(animals[i]);
         $("#giphys-view").append(a);
        }
    }

     $("#add-animal").on("click", function(event) {
        event.preventDefault();

        var animal = $("#animal-input").val().trim();
       animals.push(animal);

        renderButtons();
      });

        var animal = $(this).attr("data-animal");

      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(queryURL);


     });

     renderButtons();

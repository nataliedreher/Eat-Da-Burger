// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
  
      var devouredState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("the burger was devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = {
        burger_name: $("#burger-input").val().trim(),
        devoured: false
      };
      console.log("burgerform", newBurger.burger_name)
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  
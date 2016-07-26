//
$(document).ready(function(){
    $("form").submit(function(){
        $("input.send").replaceWith("<h4 class=text-center>Message Sent!</h4>");
    });
});

// Validate form input fields are not empty(uses jQuery validate plugin)
$("#commentForm").validate();
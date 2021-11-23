// Create event listener to enter items below
$("#enter").on("click", function () {
    var task = $("todoItem").val();
    $("#todoList").append("<div class='task'>" + task + "<div class='x fas fa-times'>")

});
// Create event listener to delete items below

// Create event listener to toggle 

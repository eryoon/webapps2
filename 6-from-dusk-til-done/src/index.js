import $ from "jquery";
import todoListItem from "./TodoListItem";

function getTodos(callback) {
    return $.ajax(
            "/todos", {
                method: "GET"
            }
        )
        .done((data) => {
            // This is bad and I should feel bad for writing it. Why?
            console.log("SUCCESS!! YAY!");
            console.log(data);
            callback(data);
        })
        .fail(() => {
            console.error("Something bad happened");
        });
}


$(document).ready(() => {

    getTodos((todos) => {
      $("#root").empty();
        todos.forEach((todo) => {
            todoListItem(todo, (newli) => {

                $("#root").append(newli);
                $("#todoDisp" + todo.id).hover(function() {
                    $("#textDisp" + todo.id).css("display", "none");
                    $("#editDisp" + todo.id).css("display", "inline");
                    //  console.log("'tis working, enter");
                }, function() {
                    $("#textDisp" + todo.id).css("display", "inline");
                    $("#editDisp" + todo.id).css("display", "none");
                    //  console.log("we exited")
                });
                /*      document.getElementById("todoDisp" + todo.id).addEventListener("focus", changeToEditable(todo.id, true));
                      document.getElementById("todoDisp" + todo.id).addEventListener("blur", changeToEditable(todo.id, false));*/

            });
        });
    });
    $("#submitbtn").click(() => {
        console.log("U PRES BUTON");
        var formData = {};
        formData.text = $("#newtodoform").val();
        console.log(JSON.stringify(formData));
        console.log($("#newtodoform").val());
        $.ajax({
            type: "POST",
            url: "todos/",
            data: JSON.stringify(formData),
            success: function() {
                console.log("Oh yeah! we did it");
            },
            dataType: "json",
            contentType: "application/json"
        });
    });

});



//addEventListener("mouseover",changeToEditable(todo.id))
/*function changeToEditable(id, changeTo){
console.log("changeToEditable called with id = " + id + " and changeto = " + changeTo);
  if(changeTo){
      console.log("changing to editable, id = " + id);

  }else{
      console.log("changing to non-edit, id = " + id);

  }
  return;
}*/

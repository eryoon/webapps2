import $ from "jquery";
import todoListItem from "./TodoListItem";

function getTodos(callback) {
    return $.ajax(
            "/todos", {
                method: "GET"
            }
        )
        .done((data) => {
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
      todos.sort((a, b) => { //basically, if it is - then a will go "up" (closer to 0), if + then a will go down,
        if(a.completed == b.completed)
        return 0;
        //we dont need else after this, return makes it act like that

        if(a.completed && !b.completed)
        return 1;

        if(!a.completed && b.completed)
        return -1; //fallback case, we really dont need to check but lets do it N-E-ways

        //im very proud of this sorting!! :)  I start to appreciate how easy javascript is. I have also overcome my initial loathing and phobia for anonymous funcs. Sorting is so easy, you dont have to deal with Interfaces (like c#)
      });

      $("#root").empty();
        todos.forEach((todo) => {
            todoListItem(todo, (newli) => {

                $("#root").append(newli);
                $("#todoDisp" + todo.id).hover(function() {
                    $("#textDisp" + todo.id).css("display", "none");
                    $("#editDisp" + todo.id).css("display", "inline");
                    $("#delDisp" + todo.id).css("display", "inline");
                    //  console.log("'tis working, enter");
                }, function() {
                    $("#textDisp" + todo.id).css("display", "inline");
                    $("#editDisp" + todo.id).css("display", "none");
                    $("#delDisp" + todo.id).css("display", "none");
                    //  console.log("we exited")
                });
                /*      document.getElementById("todoDisp" + todo.id).addEventListener("focus", changeToEditable(todo.id, true));
                      document.getElementById("todoDisp" + todo.id).addEventListener("blur", changeToEditable(todo.id, false));*/

                      $("#delDisp" + todo.id).click(() => {
                        console.log("we will delete, just hang tight bro!");
                        $.ajax({
                            type: "DELETE",
                            url: "todos/" + todo.id,
                            success: function() {
                                console.log("AAND... TOUCHDOWN!!! WE SUCCESS SEND AJAX!");
                                alert("AAND... TOUCHDOWN!!! WE SUCCESS SEND AJAX! But you'll have to reload to see the changes!");
                            }
                        });
                      });


            }); //end of todoListItem



        }); //end of todos foreach
    }); //end of gettodos
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
        alert("AJAX sent successfully, idk how to read error codes so no clue on if it worked... the todo list doesnt update automagically, plz reload");
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

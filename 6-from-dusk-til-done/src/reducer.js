import $ from "jquery";
import {
    getTodos, deleteTodo
} from "./actions";
import todoListItem from "./TodoListItem";

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var user = getUrlParameter("user");



function UpdateTodoDisplay(todos) {
    console.log("UUPDATTE TODOOO DISSSPLAY");
    console.log(todos);
    todos.sort((a, b) => { //basically, if it is - then a will go "up" (closer to 0), if + then a will go down,

        if (a.completed == b.completed)
            return 0;
        //we dont need else after this, return makes it act like that

        if (a.completed && !b.completed)
            return 1;

        if (!a.completed && b.completed)
            return -1; //fallback case, we really dont need to check but lets do it N-E-ways

    });
    console.log("about to empty root");
    $("#root").empty();
    console.log("just emptied root");
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
            });

            $("#delDisp" + todo.id).click(() => {
                if (true || confirm("Are you absolutely, positively, undoubtedly sure you want to send this todo to the pit of death??\n\nThis action is 100% irreversible, irrevocable, irrefundable... you get the point.\n\nSo you SURE you want to do this?!")) {
                    console.log("we will delete, just hang tight bro!");

                    deleteTodo([], todo.id, user);

                }
            });

            $("#doneDisp" + todo.id).change(() => {
                console.log("we got change event");
                var formData = {};
                formData.text = $("#editDisp" + todo.id).val();
                formData.completed = $("#doneDisp" + todo.id).prop("checked");
                console.log(JSON.stringify(formData));
                console.log($("#doneDisp" + todo.id).prop("checked"));



            });



            $("#editDisp" + todo.id).change(() => {
                console.log("we got change event");
                var formData = {};
                formData.text = $("#editDisp" + todo.id).val();
                formData.completed = $("#doneDisp" + todo.id).prop("checked");
                console.log(JSON.stringify(formData));
                console.log($("#doneDisp" + todo.id).prop("checked"));



                //  alert("AJAX sent successfully, the todo list doesnt update automagically, plz reload");

            });
        }); //end of todoListItem
    }); //end of todos foreach
}



export default function reducer(state, action) {
    console.log("in reducer");
    switch (action.type) {
        case "RETRIEVE_TODOS":
            return $.ajax(
                    "/todos/" + action.user + "/", {
                        method: "GET"
                    }
                )
                .done((data) => {
                    console.log("SUCCESS!! YAY!");
                    UpdateTodoDisplay(data);
                    return data;
                })
                .fail(() => {
                    console.error("Something bad happened");
                    return state;
                });
            return state;
        case "DELETE_TODO":
            return $.ajax({
                    type: "DELETE",
                    url: "/todos/" + action.user + "/" + action.id,
                    success: function() {
                        console.log("AAND... TOUCHDOWN!!! WE SUCCESS SEND AJAX!");
                        //  alert("AAND... TOUCHDOWN!!! WE SUCCESS SEND AJAX! But you'll have to reload to see the changes!");

                    }
                })
                .done((res) => {
                    //pdateTodoDisplay(res);
                    return res;
                });
        case "ADD_TODO":
            return $.ajax({
                    type: "POST",
                    url: "/todos/" + action.user + "/",
                    data: JSON.stringify(action.newTodo),
                    success: function() {
                        console.log("Oh yeah! we did it");

                    },
                    dataType: "json",
                    contentType: "application/json"
                })
                .done((res) => {
                    UpdateTodoDisplay(res);
                    return res;
                });
        default:
            console.log("WARNING: Our case hit default in reducerjs, that means we 'errored' out. ");
            return state;
    }
}

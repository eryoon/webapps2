import $ from "jquery";
import {addTodo, getTodos} from "./actions";

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

/*
function getTodos(callback) {
    return $.ajax(
            "/todos/" + user + "/", {
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
}*/


$(document).ready(() => {
  if(user === null || user === "" || user === undefined){ //=== not == because null checks are... weird
    var newURL = window.location.href + "?redirect=nouser&user=" + prompt("What's your name?");
    window.location.replace(newURL);
  }else{
    console.log("user: " + user);
getTodos([], user);
}
    $("#submitbtn").click(() => {
        console.log("U CLIK BTN");
        const newTodo = {
          text: $("#newtodoform").val()
        };
        addTodo([],newTodo,user);

      //alert("AJAX sent successfully, idk how to read error codes so no clue on if it worked... the todo list doesnt update automagically, plz reload");

    });

});

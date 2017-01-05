import $ from "jquery";
var todos;

function getTodos() {
  return $.ajax(
    "/todos",
    {
      method: "GET"
    }
  )
  .done( (data) => {
    // This is bad and I should feel bad for writing it. Why?
    todos = data;
    console.log(data);
  })
  .fail( () => {
    console.error("Something bad happened");
  });
}


$(document).ready( () => {
  getTodos();
})

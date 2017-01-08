import $ from "jquery";

export default function todoListItem(todo, callback){
  let newli = $(document.createElement("li"));
  newli.append($(document.createElement("input"))
  .attr("type","checkbox")
  .attr("checked",todo.completed)
  );
  newli.append($(document.createElement("p"))
  .html(todo.text)
  .css("display", "inline")
  .attr("id","textDisp" + todo.id)
  );

  newli.append($(document.createElement("input"))
  .attr("type","text")
  .attr("value",todo.text)
  .attr("class","todoDisplay")
  .attr("placeholder","todo name...")
  .attr("id","editDisp" + todo.id)
  );

  newli.attr("id","todoDisp" + todo.id);

  callback(newli);

}

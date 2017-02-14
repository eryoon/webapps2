import $ from "jquery";

export default function todoListItem(todo, callback) {
    let newli = $(document.createElement("li"));
    newli.append($(document.createElement("input"))
        .attr("type", "checkbox")
        .attr("checked", todo.completed)
        .attr("id", "doneDisp" + todo.id)
        /*.change(() => {
          alert("Whoa there, mate. You can't just do dat and expect it t' work, ya know bro? The poor developah' behind dis program, he doesn't have dat much time. He says it's comin' soon, tho, so keep yo' eyes open!");
        })*/
    );
    newli.append($(document.createElement("p"))
        .html(todo.text)
        .css("display", "inline")
        .attr("id", "textDisp" + todo.id)
        .attr("class", (todo.completed ? "lowpacity" : "")) //aah, i love ternary operators... even tho they are soo ugly
    );

    newli.append($(document.createElement("input"))
        .attr("type", "text")
        .attr("value", todo.text)
        .attr("class", "todoDisplay wfull")
        .attr("placeholder", "todo name...")
        .attr("id", "editDisp" + todo.id)
      /*  .change(() => {
          alert("Whoa there, mate. You can't just do dat and expect it t' work, ya know bro? The poor developah' behind dis program, he doesn't have dat much time. He says it's comin' soon, tho, so keep yo' eyes open!");
        })*/
    );

    newli.append($(document.createElement("button"))
        .attr("id", "delDisp" + todo.id)
        //.html("Delete")
        .append($(document.createElement("img"))
          .attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Octagon_delete.svg/2000px-Octagon_delete.svg.png")
          .attr("width", "18px")
          .attr("height", "18px")
          //OMG this nesting has gone cray cray!
        )
        .css("display", "none")
      /*  .click(() => {
          alert("Deleting doesnt work yet, im gonna implement that soon sorry for the inconvienence. wait, no, im not sorry");
        }) ummm... now it works*/
    );


    newli.attr("id", "todoDisp" + todo.id);

    callback(newli);

}

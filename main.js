// selecting add button element.
var addbtn = document.querySelector(".add-button");
// adding event click to add button.
addbtn.addEventListener("click", addfun);

// keeping count variable to keep track of tasks left.
var count = 0;

//to delete selected todo item from the list.
function deletefun(event) {
  event.parentElement.remove();
}

// to check item in the list.
function checkfun(event) {
  var tar = event.parentElement;
  tar.classList.toggle("item-completed");
}

//function to add list item in the list container
function addfun(e) {
  // to avoid form submission/reload.
  e.preventDefault();

  // to avoid null entry in the list.
  var inputitem = document.querySelector(".input_todo");
  if (inputitem.value == "") {
    alert("add TODO");
  } else {
    var newdiv = document.createElement("div");
    newdiv.classList.add("item");

    // to include check button in list item.
    var checkbtn = document.createElement("button");

    checkbtn.classList.add("item-check");
    checkbtn.innerHTML = "<i class='fas fa-check-circle'>";
    checkbtn.addEventListener("click", function (event) {
      checkfun(this);
    });

    // to include delete button in the list item.
    var delbtn = document.createElement("button");

    delbtn.classList.add("item-delete");
    delbtn.innerHTML = "<i class='fas fa-trash'>";

    // to update tasks left and delete item.
    delbtn.addEventListener("click", function (event) {
      if (count > 0) {
        count--;
        var todocontainer = document.querySelector(".total");
        todocontainer.innerHTML = "Tasks Left : " + count;
      }
      if (count == 0) {
        var todocontainer = document.querySelector(".total");
        todocontainer.innerText = "";
      }

      deletefun(this);
    });

    // to create li element.
    var newitem = document.createElement("li");

    newitem.innerText = inputitem.value;
    // append delete,check button and li in the div.
    newdiv.appendChild(checkbtn);
    newdiv.appendChild(newitem);
    newdiv.appendChild(delbtn);
    var list = document.querySelector(".todo-list");

    // append div in the ul list.
    list.appendChild(newdiv);
    // update count for items added.
    count++;
    inputitem.value = "";
    var todocontainer = document.querySelector(".total");
    todocontainer.innerHTML = "Tasks Left : " + count;
  }
}

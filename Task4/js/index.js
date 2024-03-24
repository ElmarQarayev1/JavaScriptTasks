let add=document.querySelector("#todoAddButton");

let addInput = document.querySelector("#todoName");

let toDoList=document.querySelector(".list-group");

let secondCardBody = document.querySelectorAll(".card-body")[1];

let clearButton=document.querySelector("#clearButton");

Run();

function Run(){

    add.addEventListener("click",addTodo);

    secondCardBody.addEventListener("click",removeTodoToUI);

    clearButton.addEventListener("click",clearButtonFunc);
}
function addTodo(e){
    const inputText=addInput.value.trim();
    if(inputText==null || inputText==""){
        alert('hec bir sey daxil olunmayib');
    }
    else{
        addTodoUi(inputText);
    }
}
function addTodoUi(inputText){
    const li =document.createElement("li");
    li.className="list-group-item d-flex justify-content-between"
    li.textContent=inputText;
    const a= document.createElement("a");
    a.href="#";
    a.className="delete-item";

    const i= document.createElement("i");
    i.className="fa fa-remove";

      a.appendChild(i);
      li.appendChild(a);
      toDoList.appendChild(li);
    
      addInput.value= "";
}
function removeTodoToUI(e){

    if(e.target.className==="fa fa-remove"){
       const todo = e.target.parentElement.parentElement;
       todo.remove();
    }
}
function clearButtonFunc(){
    const todoListRemove =document.querySelectorAll(".list-group-item");
    for (let i = 0; i < todoListRemove.length; i++) {
        todoListRemove[i].remove();   
    }
}



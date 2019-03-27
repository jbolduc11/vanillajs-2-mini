function addTodo(event){
    var li = document.createElement('li')
    li.innerText = document.getElementById("li").value;

    const list = document.querySelector("ul");
    list.appendChild(li);
}
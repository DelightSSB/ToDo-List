const input = document.getElementById("input")
const list = document.getElementById("List")

function addTask(){
    if (input.value === ''){
        alert("You need to enter a task")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span)
        list.appendChild(li);
    }
    input.value = '';
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML)
}

function showTaskList(){
    list.innerHTML = localStorage.getItem("data");
}
showTaskList();

let task =document.getElementById('input');
let list = document.getElementById('task_list')

function save(){
    if (task.value.trim() ===""){
        alert("enter a entry");
        return;
    }
    let now = new Date()
    let formattedDate = now.toLocaleString('en-IN')
    list.innerHTML += `
    <div>
        <input class = "tasks" type="checkbox" id="task-${Date.now()}">
        <label for="task-${Date.now()}">${task.value} <small>(${formattedDate})</small></label>
        <button onclick="deletetask(this)" class='delete-btn'> 🗑️</button>
    </div>`;
    task.value = '';
}
function saaf() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        list.innerHTML = '';
    }
}
function deletetask(button){
    
    button.parentElement.remove();


}


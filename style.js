const todo_input_field = document.getElementById("todo_input_field");
const task_container = document.getElementById("task_container");
function addTask(){
    if(todo_input_field.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todo_input_field.value;
        task_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    todo_input_field.value = '';
    saveTasks();
}
task_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);
function saveTasks(){
    localStorage.setItem("data",task_container.innerHTML);
}
function showTasks(){
    task_container.innerHTML = localStorage.getItem("data");
}
showTasks();
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//Achievements

const Achievements_input_field = document.getElementById("add_achievement_input_field");
const Achievements_container = document.getElementById("add-achievement container");
function addAchievement(){
    if(achievements_input-field.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todo_input_field.value;
        task_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    todo_input_field.value = '';
    saveAchievement();
}
task_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);
function saveAchievement(){
    localStorage.setItem("data",task_container.innerHTML);
}
function showAchievement(){
    task_container.innerHTML = localStorage.getItem("data");
}
showAchievement();
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
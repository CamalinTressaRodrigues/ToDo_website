var output = [];
var userCount = 0; 
// var uncheckedcount = 0;

// fetching todos and storing in output

var bttn = document.getElementById("btn");
var data = document.getElementById("todoList");

function getdata() {
    bttn.innerHTML ="Your ToDo List";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            output = JSON.parse(this.responseText);
            // console.log(output);
            var dat = "";
            for (let i = 0; i < output.length; i++){
                // dat+= "<li>"+ output[i].title + output[i].completed+ "</li>"
                var checked = output[i].completed ? "checked" : "";
                dat += `<li class="todo-item">${output[i].id} .  ${output[i].title}<input type="checkbox" ${checked} data-index="${i}" onchange="checkboxChange(event)"></li>`;
                }
            data.innerHTML = dat;
        }
        
    }
    xhttp.open('GET', "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

// function for aletring user if 5 todos are completed
function checkboxChange(event) {
    const checkbox = event.target;
    const index = checkbox.getAttribute('data-index'); // gets the index value
    const isChecked = checkbox.checked;
    if (!isChecked) {
        output[index].completed = isChecked;  // updating the value 
        return;
    }

    // to count the tasks entered by user 
    if (isChecked && !output[index].completed) {
        userCount++;
    }
    output[index].completed = isChecked;  // updating the value 
    //if 5 tasks are checked true shows aleert
    //  count and userCount is same.
    checkCompletedTasks().then((count) => {
        if (count === 5) {
            userCount = 0;
            alert(`Congrats!!! You have completed 5 tasks!`);
            
        }
        
    });
}


//using promise concept
function checkCompletedTasks() {
    return new Promise((resolve) => {
        resolve(userCount)
    });
}

// for logout alert
function popup() {
    alert("You are being Logged Out ");
}


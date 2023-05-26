function createStatusSwitch(status) {
    var container = document.createElement("label");
    container.classList.add("status-switch");

    var input = document.createElement("input");
    input.type = "checkbox";
    input.checked = (status == "Active");
    input.disabled = true;

    var slider = document.createElement("span");
    slider.classList.add("status-slider");

    container.appendChild(input);
    container.appendChild(slider);

    return container;
}

function displayStudentsInTable() {
    var table = document.getElementById("tb");
    var storedStudents = JSON.parse(localStorage.getItem("students")) || [];

    for (var i = 0; i < storedStudents.length; i++) {
        var student = storedStudents[i];
        var row = table.insertRow(i + 1);
        console.log(storedStudents.length);
        row.insertCell(0).innerHTML = student.name;
        row.insertCell(1).innerHTML = student.ID;
        row.insertCell(2).innerHTML = student.GPA;
        row.insertCell(3).innerHTML = student.birthDate;
        row.insertCell(4).innerHTML = student.gender;
        row.insertCell(5).innerHTML = student.level;
        row.insertCell(6).innerHTML = student.mobilePhone;
        row.insertCell(7).innerHTML = student.department;
        row.insertCell(8).innerHTML = student.email;

        (function(student) { // create closure
            var statusCell = row.insertCell(9);
            var statusSwitch = document.createElement("label");
            statusSwitch.className = "status-switch";
            var statusInput = document.createElement("input");
            statusInput.type = "checkbox";
            statusInput.checked = student.status == "Active";
            statusInput.addEventListener("click", function () {
                student.status = this.checked ? "Active" : "Inactive";
                localStorage.setItem("students", JSON.stringify(storedStudents));
            });
            var statusSlider = document.createElement("span");
            statusSlider.className = "status-slider";
            var statusSliderBefore = document.createElement("span");
            statusSliderBefore.className = "status-slider-before";
            statusSlider.appendChild(statusSliderBefore);
            statusSwitch.appendChild(statusInput);
            statusSwitch.appendChild(statusSlider);
            statusCell.appendChild(statusSwitch);
        })(student); // pass in student to closure
    }
}


// function displayStudentsInTable() {
//     var table = document.getElementById("tb");
//     var storedStudents = JSON.parse(localStorage.getItem("students")) || [];

//     for (var i = 0; i < storedStudents.length; i++) {
//         var student = storedStudents[i];
//         var row = table.insertRow(i + 1);
//         console.log(storedStudents.length);
//         row.insertCell(0).innerHTML = student.name;
//         row.insertCell(1).innerHTML = student.ID;
//         row.insertCell(2).innerHTML = student.GPA;
//         row.insertCell(3).innerHTML = student.birthDate;
//         row.insertCell(4).innerHTML = student.gender;
//         row.insertCell(5).innerHTML = student.level;
//         row.insertCell(6).innerHTML = student.mobilePhone;
//         row.insertCell(7).innerHTML = student.department;
//         row.insertCell(8).innerHTML = student.email;

//         var statusCell = row.insertCell(9);
//         var statusSwitch = document.createElement("label");
//         statusSwitch.className = "status-switch";
//         var statusInput = document.createElement("input");
//         statusInput.type = "checkbox";
//         statusInput.checked = student.status.toLowerCase() === "active";
//         statusInput.addEventListener("click", function () {
//             student.status = this.checked ? "Active" : "Inactive";
//             localStorage.setItem("students", JSON.stringify(storedStudents));
//         });
//         var statusSlider = document.createElement("span");
//         statusSlider.className = "status-slider";
//         var statusSliderBefore = document.createElement("span");
//         statusSliderBefore.className = "status-slider-before";
//         statusSlider.appendChild(statusSliderBefore);
//         statusSwitch.appendChild(statusInput);
//         statusSwitch.appendChild(statusSlider);
//         statusCell.appendChild(statusSwitch);
//     }
// }

//   function displayStudentsInTable() {
//     var table = document.getElementById("tb");
//     var storedStudents = JSON.parse(localStorage.getItem("students")) || [];

//     for (var i = 0; i < storedStudents.length; i++) {
//         var student = storedStudents[i];
//         var row = table.insertRow(i+1);
//         row.insertCell(0).innerHTML = student.name;
//         row.insertCell(1).innerHTML = student.ID;
//         row.insertCell(2).innerHTML = student.GPA;
//         row.insertCell(3).innerHTML = student.birthDate;
//         row.insertCell(4).innerHTML = student.gender;
//         row.insertCell(5).innerHTML = student.level;
//         row.insertCell(6).innerHTML = student.mobilePhone;
//         row.insertCell(7).innerHTML = student.department;
//         row.insertCell(8).innerHTML = student.email;

//         var statusLabel = document.createElement("label");
//         statusLabel.className = "status-switch";
//         var statusInput = document.createElement("input");
//         statusInput.type = "checkbox";
//         statusInput.checked = student.status === "Active";
//         var statusSlider = document.createElement("span");
//         statusSlider.className = "status-slider";
//         statusLabel.appendChild(statusInput);
//         statusLabel.appendChild(statusSlider);
//         row.insertCell(9).appendChild(statusLabel);
//     }
// }
class Student {
    constructor(name, id, gpa, birthDate, gender, level, status, department, email, mobilePhone) {
      this.name = name;
      this.ID = id;
      this.GPA = gpa;
      this.birthDate = birthDate;
      this.gender = gender;
      this.level = level;
      this.status = status;
      this.department = department;
      this.email = email;
      this.mobilePhone = mobilePhone;
    }
  }

function initializeStudentArray() {
    // Check if "students" array is already present in local storage
    if (localStorage.getItem("students") !== null) {
      return;
    }
    else
    {
        var students = [];
        localStorage.setItem("students", JSON.stringify(students));
    }
}

function showMessage(messageText)
{
    var message = document.getElementById("message");
    message.innerHTML = messageText;
    setTimeout(function() {
    message.style.opacity = 0;
    }, 3000);
}

function getStatus()
{
    var status = document.getElementById("c1").checked;
    if (status == true) {
        return "active";
    }
    else
    {
        return "not active";
    }
}

function setStudentValues() {
    var id = document.getElementById("fname2").value;
    var name = document.getElementById("fname9").value;
    var gpa = document.getElementById("fname3").value;
    var dob = document.getElementById("fname").value;
    var gender = document.getElementById("gender").value;
    var level = document.getElementById("fname6").value;
    var status = getStatus();
    var department = document.getElementById("fname7").value;
    var email = document.getElementById("fname8").value;
    var mobile = document.getElementById("fname10").value;
    var newStudent = new Student(name, id, gpa, dob, gender, level, status, department, email, mobile);
    addStudentToLocalStorage(newStudent);
    showMessage("Registeration was a Success!");
}

// Function to add a student to local storage
function addStudentToLocalStorage(student) {
    var storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    storedStudents.push(student);
    localStorage.setItem("students", JSON.stringify(storedStudents));
}
  
// Function to retrieve students from local storage by name
function retrieveStudentFromLocalStorageByName(name) {
    var storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    var matchingStudents = storedStudents.filter(function(student) {
      return student.name === name;
    });
    
    return Array.isArray(matchingStudents) ? matchingStudents : Array.from(matchingStudents);
  }
  
// Function to edit a student in local storage by ID
function editStudentInLocalStorage(id, newStudent) {
    var storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    var index = storedStudents.findIndex(function(student) {
        return student.ID === id;
    });
    if (index !== -1) {
        storedStudents[index] = newStudent;
        localStorage.setItem("students", JSON.stringify(storedStudents));
    }
}

function searchAndShowStudent() {
    var inputName = document.getElementById("SEARCH_NAME").value;
    var students = retrieveStudentFromLocalStorageByName(inputName);
    
    if (students.length === 0) {
        alert("There is no student with that name.");
        return false;
    }

    var activeStudents = students.filter(function(student) {
        return student.status === "active";
    });

    showStudent(activeStudents);
}

function clearTable(table)
{
    for(var i = 1;i<table.rows.length;){
        table.deleteRow(i);
    }
}

function showStudent(activeStudents)
{
    const table = document.getElementById("StudentTableinSearch");
    clearTable(table);

    activeStudents.forEach(function(student) {

        const row = table.insertRow();
        // Create a new cell for each property of the object you want to display
        const nameCell = row.insertCell();
        const IDCell = row.insertCell();
        const lvlCell = row.insertCell();
        const departCell = row.insertCell();
      
        // Insert the value of each property into the corresponding cell
        IDCell.textContent = student.ID;
        nameCell.textContent = student.name;
        lvlCell.textContent = student.level;

        if (student.level >= 3) {
            const anchor = document.createElement("a");
            if (student.department == ""){
                anchor.textContent = "Click Here to Assign Your Department";
            }
            else
            {
                anchor.textContent = student.department;
            }
            anchor.href = "DepartmentAssignment.htm";
            anchor.target = "_blank"; // Opens the link in a new tab or window
            anchor.onclick = function() {
              window.open("DepartmentAssignment.htm", "myWindow", "width=500,height=500");
              return false;
            };
            departCell.appendChild(anchor);
          } else {
            departCell.textContent = student.department;
          }
          
    });
}

function assignDepartment()
{
    
}
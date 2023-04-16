function editStudent(id) {
    // Retrieve student data from local storage
    var students = JSON.parse(localStorage.getItem("students"));

    // id = Number(id);

    // Find the student with the given id
    var student = students.find(function (student) {
        return student.id === id; // Use strict equality operator
    });


    if (student) {
        // Populate the update form with the student data
        document.getElementById("studentName").value = student.name;
        document.getElementById("studentId").value = student.ID;
        document.getElementById("gpa").value = student.GPA;
        document.getElementById("dob").value = student.birthDate;
        document.getElementById("gender").value = student.gender;
        document.getElementById("level").value = student.level;
        document.getElementById("status").value = student.status;
        document.getElementById("department").value = student.department;
        document.getElementById("email").value = student.email;
        document.getElementById("mobile").value = student.mobilePhone;
        document.getElementById("update-form").style.display = "block";
    }
}


function updateStudent(event) {
    event.preventDefault(); // Prevent form submission
    var id = document.getElementById("studentId").value;
    var name = document.getElementById("studentName").value;
    var gpa = document.getElementById("gpa").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var level = document.getElementById("level").value;
    var status = document.getElementById("status").value;
    var department = document.getElementById("department").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Create a new student object with the updated data
    var updatedStudent = {
        name: name,
        ID: id,
        GPA: gpa,
        birthDate: dob,
        gender: gender,
        level: level,
        status: status,
        department: department,
        email: email,
        mobilePhone: mobile
    };

    // Update student in local storage
    updateStudentInLocalStorage(id, updatedStudent);

    // Populate table with updated data
    showStudentInTable();

    // Reset the form
    document.getElementById("update-form").reset();
    document.getElementById("update-form").style.display = "none";

}
function deleteStudent(id) {
    // Retrieve student data from local storage
    var students = JSON.parse(localStorage.getItem("students"));
    // Find the index of the student with the given id
    var index = students.findIndex(function (student) {
        return student.id === id;
    });
    if (index !== -1) {
        // Display an alert message to ask for confirmation
        var confirmDelete = confirm("Are you sure you want to delete student with ID " + id + "?");
        // If the user confirms, proceed with deletion
        if (confirmDelete) {
            // Remove the student from the students array
            students.splice(index, 1);
            // Update the local storage with the modified students array
            localStorage.setItem("students", JSON.stringify(students));
            // Populate table with updated data
            showStudentInTable();
            // Display an alert message to confirm deletion
            alert("Student with ID " + id + " deleted successfully.");
        }
    } else {
        // Display an alert message to indicate error
        alert("Student with ID " + id + " not found.");
    }
}

document.getElementById("update-form").addEventListener("submit", updateStudent);
// document.getElementById("table-body").addEventListener("click", function (event) {
//     if (event.target && event.target.nodeName === "BUTTON") {
//         var id = event.target.dataset.ID; // Use target instead of currentTarget
//         var action = event.target.dataset.action;
//         if (action === "edit") {

//             // Call editStudent function to populate update form
//             editStudent(id);
//         } else if (action === "delete") {
//             // Call deleteStudent function to delete student
//             deleteStudent(id);
//         }
//     }

// });

// Function to show students in table
function showStudentInTable() {
    initializeStudentArray();
    var students = JSON.parse(localStorage.getItem("students"));
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    for (var i = 0; i < students.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + students[i].name + "</td>" +
            "<td>" + students[i].ID + "</td>" +
            "<td>" + students[i].GPA + "</td>" +
            "<td>" + students[i].birthDate + "</td>" +
            "<td>" + students[i].gender + "</td>" +
            "<td>" + students[i].level + "</td>" +
            "<td>" + students[i].status + "</td>" +
            "<td>" + students[i].department + "</td>" +
            "<td>" + students[i].email + "</td>" +
            "<td>" + students[i].mobilePhone + "</td>" +
            "<td><button data-id='" + students[i].ID + "' data-action='edit' onclick='editStudent(" + students[i].id + ")'><img alt='Edit' src='edit-button.png'></button></td>" +
            "<td><button data-id='" + students[i].ID + "' data-action='delete' onclick='deleteStudent(" + students[i].id + ")'><img alt='Delete' src='garbage.png'></button></button></td>";
        tableBody.appendChild(row);
    }
}

function searchStudentById() {
    var searchId = document.getElementById("search-id").value; // Get the ID input value
    var table = document.getElementById("table-body"); // Get the table body element
    var found = false; // A flag to indicate if the student is found or not

    // Loop through each row in the table
    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        var studentId = row.cells[1].innerText; // Get the student ID from the second cell of the row

        // Compare the student ID with the search ID
        if (studentId === searchId) {
            row.style.display = "table-row"; // Show the row with a table-row display style
            found = true; // Set the flag to true
        } else {
            row.style.display = "none"; // Hide the row with a none display style
        }
    }

    // If no match is found, display an alert
    if (!found) {
        alert("Student with ID " + searchId + " not found.");
    }
}
function handleEditButtonClick(id) {
    editStudent(id);
}

function handleDeleteButtonClick(id) {
    deleteStudent(id);
}

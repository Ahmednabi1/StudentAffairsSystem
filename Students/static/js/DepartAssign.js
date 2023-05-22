/*function assignDepartment(ID) {
    const student = retrieveStudentFromLocalStorageByID(ID);

    // Fill in the Student ID and Name in the first and second cells of the row
    const studentRow = document.getElementById('StudentRowinAssignDepartment');
    studentRow.cells[0].innerHTML = student.ID;
    studentRow.cells[1].innerHTML = student.name;
    selectElement('Departments', student.department);

    // Set up event listener for Save button
    const saveButton = document.getElementById('saveDepartmentButton');
    saveButton.addEventListener('click', function() {
        // Get the value of the selected department
        const selectedDepartment = document.getElementById('Departments').value;
            
        // Update the student's department only if a different department was selected
        if (selectedDepartment !== student.department) {
            student.department = selectedDepartment;
            updateStudentInLocalStorage(student);
        }

        // Close the window
        window.close();
    });
}*/


function assignDepartment()
{
    const student = getStudentByID();

    fillStudentValues(student);

    saveAssignedDepartment(student);
}

function getStudentByID()
{
    const studentID = new URLSearchParams(window.location.search).get('studentID');
    const student = retrieveStudentFromLocalStorageByID(studentID)[0];
    return student;
}

function fillStudentValues(student)
{
    // Fill in the Student ID and Name in the first and second cells of the row
    const studentIdCell = document.getElementById("StdIDAssignDepart");
    const studentNameCell = document.getElementById("StdNameAssignDepart");
    studentNameCell.textContent = student.name;
    studentIdCell.querySelector('b').textContent = student.ID;

    // Fill in the Department select with the current Department
    selectElement('Departments', student.department);
}

function selectElement(id, newValue)
{
    let element = document.getElementById(id);
    element.value = newValue;
}

function saveAssignedDepartment(student) {
    const saveButton = document.getElementById('saveDepartmentButton');
    saveButton.addEventListener('click', function() {
        const selectedDepartment = document.getElementById('Departments').value;

        if (selectedDepartment !== student.department) {
        student.department = selectedDepartment;
        updateStudentInLocalStorage(student.ID, student);
        updateDepartmentInSearchPage(student.ID, selectedDepartment);
        }

        window.close();
    });
}
  
function updateDepartmentInSearchPage(studentID, department) {
    const searchTable = window.opener.document.getElementById('Search-table');
    const tbody = searchTable.getElementsByTagName('tbody')[0];

    const rows = tbody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const idCell = row.cells[0];
        const departCell = row.cells[3];

        if (idCell.innerHTML === studentID) {
        departCell.textContent = department;
        break;
        }
    }
}

function updateStudentInLocalStorage(studentID, student) {
    // Update the student in localStorage
    localStorage.setItem('student_' + studentID, JSON.stringify(student));
  
    // Trigger the storage event to notify other tabs
    localStorage.setItem('studentUpdated', studentID);
    localStorage.removeItem('studentUpdated');
    localStorage.setItem('department_' + studentID, student.department);
  }
  

window.onload = assignDepartment;
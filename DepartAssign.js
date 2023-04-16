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

function saveAssignedDepartment(student)
{
    // Set up event listener for Save button
    const saveButton = document.getElementById('saveDepartmentButton');
    saveButton.addEventListener('click', function() {
        // Get the value of the selected department
        const selectedDepartment = document.getElementById('Departments').value;
        
        // Update the student's department only if a different department was selected
        if (selectedDepartment !== student.department) {
            student.department = selectedDepartment;
            updateStudentInLocalStorage(student.ID, student);
        }

        // Close the window
        window.close();
    });
}

window.onload = assignDepartment;
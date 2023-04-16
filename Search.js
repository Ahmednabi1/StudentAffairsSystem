function searchForStudentsByName() {
    var inputName = document.getElementById("SEARCH_NAME").value;
    var students = retrieveStudentFromLocalStorageByName(inputName);
    
    if (students.length === 0) {
        alert("There is no student with that name.");
        return false;
    }

    var activeStudents = students.filter(function(student) {
        return student.status === "active";
    });

    return activeStudents;

    /*showStudent(activeStudents);*/
}
/*

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
            anchor.href = "DepartmentAssignment.html";
            anchor.target = "_blank"; // Opens the link in a new tab or window
            anchor.onclick = function() {
               openDepartmentAssignmentPage(student.ID);
            };
            departCell.appendChild(anchor);
          } else {
            departCell.textContent = student.department;
          }
          
    });
} */

function displaySearchResults() {

    let searchResults = searchForStudentsByName();

    const searchTable = document.getElementById("SearchResultsTable");
    const tbody = searchTable.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
  
    for (let i = 0; i < searchResults.length; i++) {
      const student = searchResults[i];
      const row = tbody.insertRow();
  
      // Add cells to the row
      const idCell = row.insertCell();
      const nameCell = row.insertCell();
      const levelCell = row.insertCell();
      const departCell = row.insertCell();
  
      // Fill in the cells
      idCell.innerHTML = student.ID;
      nameCell.innerHTML = student.name;
      levelCell.innerHTML = student.level;
  
      if(student.level == 3)
      {
        const link = document.createElement('a');
        link.textContent = student.department ? student.department : 'Click Here to Assign your Department';
        link.href = `DepartmentAssignment.html?studentID=${student.ID}`;
        link.target = '_blank';
        departCell.appendChild(link);
        
      }
      else {
        departCell.textContent = student.department;
      }      
    }
}
  
//refresh Search Table after assignment
function searchForStudentsByName() {
    var inputName = document.getElementById("SEARCH_NAME").value;
    var students = retrieveStudentFromLocalStorageByName(inputName);
    
    if (students.length === 0) {
        showNoResultMessage();
        return false;
    }
    
    var activeStudents = students.filter(function(student) {
        return student.status === "active";
    });

    return activeStudents;
}

function displaySearchResults() {

    let searchResults = searchForStudentsByName();

    const searchTable = document.getElementById("Search-table");
    console.log(searchTable + ' type of table -> ' + typeof(searchTable));
    //const tbody = searchTable.getElementsByTagName("tbody")[0];
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

function showNoResultMessage()
{
    var message = document.getElementById("noResults");
    message.textContent = "There is no student with that name!";
    message.style.opacity = "1";

        // Fade out the message after 3 seconds
        setTimeout(function() {
            message.style.opacity = "0";
        }, 1500);
}

let employeeData = [];

async function loadEmployee() {
    const message = document.getElementById("message");

    try {
        message.innerHTML = "Loading employees...";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch employee data");
        }

        employeeData = await response.json();

        message.innerHTML = "";

        // Display all employees initially
        displayEmployees(employeeData);

    } catch (error) {
        console.error(error);
        message.innerHTML = "Unable to load employees.";
    }
}

function search_filter() {
    let searchBox = document.getElementById("serach-box").value.toLowerCase();
    let chooseSearch = document.getElementById("Selection-filed").value;

    // Computed-key object
    let chooseObj = { [chooseSearch]: searchBox };

    // Filter employees
    const filterEmployee = employeeData.filter((employee) => {
        return (employee[chooseSearch] || "")
            .toLowerCase()
            .includes(chooseObj[chooseSearch]);
    });

    // Display only matching employees
    displayEmployees(filterEmployee);
}

function displayEmployees(data) {
    const employeeShow = document.getElementById("employeeData");
    const totalEmployee = document.getElementById("totalEmployee");

    // Clear old rows before displaying new results
    employeeShow.innerHTML = "";

    for (let iTmp = 0; iTmp < data.length; iTmp++) {
        const {
            id, name, username, email, phone, website,
            address, company, department
        } = data[iTmp];

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${id ?? "-"}</td>
            <td>${name}</td>
            <td>${username ?? "-"}</td>
            <td>${email ?? "-"}</td>
            <td>${address?.city ?? "-"}</td>
            <td>${phone ?? "-"}</td>
            <td>${website ?? "-"}</td>
            <td>${company?.name ?? company ?? "-"}</td>
            <td>${department ?? "-"}</td>
            <td><button type="button" onclick="removeEmployee(this)">Remove</button></td>
        `;

        employeeShow.appendChild(tr);
    }

    totalEmployee.innerHTML = `Total Employees: ${data.length}`;
}

// Load data when the page opens
loadEmployee();

function addEmployee() {
    let name = document.getElementById("addempname").value.trim();
    let department = document.getElementById("addempcompany").value.trim();

    if (name === "" || department === "") {
        alert("Please enter name and department.");
        return;
    }

    // Create object using shorthand properties
    let newEmployee = { name, department };

    // Extend a loaded record using the spread operator
    // while keeping the new employee's own name and department.
    employeeData.push({
        ...newEmployee,
        id: employeeData.length + 1
    });

    // Clear form fields
    document.getElementById("addempname").value = "";
    document.getElementById("addempcompany").value = "";

    // Refresh results using the current search
    search_filter();
}

function removeEmployee(button) {
    const tr = button.closest("tr");
    const idCell = tr.cells[0].textContent;
    const nameCell = tr.cells[1].textContent;

    // Find the employee represented by this row
    const employee = employeeData.find(
        (emp) => String(emp.id ?? "-") === idCell &&
                 emp.name === nameCell
    );

    // Remove from array and table
    if (employee) {
        employeeData = employeeData.filter((emp) => emp !== employee);
    }

    // Remove the HTML row using remove()
    tr.remove();

    document.getElementById("totalEmployee").innerHTML =
        `Total Employees: ${employeeData.length}`;
}

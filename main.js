let employees = [];

function showEmployeeList() {
    document.getElementById("employee-list").style.display = "block";
    document.getElementById("add-employee-form").style.display = "none";
    displayEmployees();
}

function showAddEmployeeForm() {
    document.getElementById("employee-list").style.display = "none";
    document.getElementById("add-employee-form").style.display = "block";
}

function addEmployee(event) {
    event.preventDefault();

    const nationalId = document.getElementById("national-id").value;
    const employeeName = document.getElementById("employee-name").value;
    const department = document.getElementById("department").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const hireDate = document.getElementById("hire-date").value;

    const newEmployee = {
        nationalId,
        employeeName,
        department,
        phone,
        address,
        hireDate
    };

    employees.push(newEmployee);
    showEmployeeList();
}

function displayEmployees() {
    const tbody = document.getElementById("employee-table-body");
    tbody.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.nationalId}</td>
            <td>${employee.employeeName}</td>
            <td>${employee.department}</td>
            <td>${employee.phone}</td>
            <td>${employee.address}</td>
            <td>${employee.hireDate}</td>
            <td>
                <button onclick="editEmployee(${index})">Edit</button>
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function editEmployee(index) {
    const employee = employees[index];
    document.getElementById("national-id").value = employee.nationalId;
    document.getElementById("employee-name").value = employee.employeeName;
    document.getElementById("department").value = employee.department;
    document.getElementById("phone").value = employee.phone;
    document.getElementById("address").value = employee.address;
    document.getElementById("hire-date").value = employee.hireDate;
    showAddEmployeeForm();
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}

function printEmployeeList() {
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>طباعة قائمة الموظفين</title>');
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; direction: rtl; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(document.getElementById("employee-list").innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

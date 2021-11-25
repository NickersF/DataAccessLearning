$(document).ready(function () {
    $("#CreateNewEmployee_SubmitBtn").on("click", function () {
        let firstName = $("#FirstNameInput").val();
        let lastName = $("#LastNameInput").val();
        let emailAddress = $("#EmailAddressInput").val();

        CreateEmployee(firstName, lastName, emailAddress);
    });

    let employeeRecord = {
        employeeId: "",
        firstName: "",
        lastName: "",
        emailAddress: ""
    }

    GetEmployeeRow(employeeRecord);
    console.log(employeeRecord);

    ReadEmployees();

    $("#UpdateEmployee_SubmitBtn").on("click", function () {
        let firstName = $("#FirstNameInput").val();
        let lastName = $("#LastNameInput").val();
        let emailAddress = $("#EmailAddressInput").val();

        UpdateEmployee(firstName, lastName, emailAddress);
    });

    
});

function CreateEmployee(firstName, lastName, emailAddress) {
    $.ajax({
        type: "POST",
        url: "CreateEmployee/",
        data: {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
        }
    });
}

function GetEmployeeRow(employeeRecordObj) {
    $("#EmployeeTable_Body").on("click", "tr", function () {
        let rowData = $(this).children();
        let rowDataValues = [];

        console.log(rowData);

        for (let i = 0; i < rowData.length; i++) {
            rowDataValues.push(rowData[i].innerText);
        }

        console.log(rowDataValues);
        employeeRecordObj.employeeId = rowDataValues[0];
        employeeRecordObj.firstName = rowDataValues[1];
        employeeRecordObj.lastName = rowDataValues[2];
        employeeRecordObj.emailAddress = rowDataValues[3];

    });
}

function ReadEmployees() {
    $.ajax({
        type: "GET",
        url: "/Home/ReadEmployees/",
        context: window
    }).done(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let newEmployeeRow = "<tr><td>" + data[i].Employee_Id + "</td><td>" + data[i].FirstName + "</td><td>" + data[i].LastName + "</td><td>" + data[i].EmailAddress + "</td></tr>";
            $("#EmployeeTable_Body").append(newEmployeeRow);
        }

        //$("table tbody tr").on("click", function () {
        //    console.log($(this).text());
        //    console.log($(this).children());
        //});
    });
}

function UpdateEmployee(firstName, lastName, emailAddress) {
    $.ajax({
        type: "POST",
        url: "UpdateEmployee/",
        data: {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
        }
    });
}
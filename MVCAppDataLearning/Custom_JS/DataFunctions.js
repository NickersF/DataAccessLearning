$(document).ready(function () {
    let employeeRecord = {
        employeeId: "",
        firstName: "",
        lastName: "",
        emailAddress: ""
    }

    ReadEmployees();

    $("#AddEmployeeSubmit_Btn").on("click", function () {
        let firstName = $("#AddFirstName_Input").val();
        let lastName = $("#AddLastName_Input").val();
        let emailAddress = $("#AddEmailAddress_Input").val();

        CreateEmployee(firstName, lastName, emailAddress);
        ReadEmployees();
    });

    $("#UpdateEmployeeSubmit_Btn").on("click", function () {
        let employeeId = $("#UpdateEmployeeId_Input").val();
        let firstName = $("#UpdateFirstName_Input").val();
        let lastName = $("#UpdateLastName_Input").val();
        let emailAddress = $("#UpdateEmailAddress_Input").val();

        UpdateEmployee(employeeId, firstName, lastName, emailAddress);
        ReadEmployees();
    });

    $("#DeleteEmployeeSubmit_Btn").on("click", function () {
        let employeeId = $("#DeleteEmployeeId_Input").val();

        DeleteEmployee(employeeId);
        ReadEmployees();
    });

    $("#EmployeeTable_Body").on("click", "tr", function () {
        let rowData = $(this).children();
        let rowDataValues = [];

        for (let i = 0; i < rowData.length; i++) {
            rowDataValues.push(rowData[i].innerText);
        }

        employeeRecord.employeeId = rowDataValues[0];
        employeeRecord.firstName = rowDataValues[1];
        employeeRecord.lastName = rowDataValues[2];
        employeeRecord.emailAddress = rowDataValues[3];

        $("#UpdateEmployeeId_Input").val(employeeRecord.employeeId);
        $("#UpdateFirstName_Input").val(employeeRecord.firstName);
        $("#UpdateLastName_Input").val(employeeRecord.lastName);
        $("#UpdateEmailAddress_Input").val(employeeRecord.emailAddress);

        $("#DeleteEmployeeId_Input").val(employeeRecord.employeeId);
        $("#DeleteFirstName_Input").val(employeeRecord.firstName);
        $("#DeleteLastName_Input").val(employeeRecord.lastName);
        $("#DeleteEmailAddress_Input").val(employeeRecord.emailAddress);
    });

});

function CreateEmployee(firstName, lastName, emailAddress) {
    $.ajax({
        type: "POST",
        url: "/Home/CreateEmployee/",
        data: {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
        }
    });
}

function ReadEmployees() {
    $.ajax({
        type: "GET",
        url: "/Home/ReadEmployees/",
        context: window
    }).done(function (data) {
        for (let i = 0; i < data.length; i++) {
            let newEmployeeRow = "<tr><td>" + data[i].Employee_Id + "</td><td>" + data[i].FirstName + "</td><td>" + data[i].LastName + "</td><td>" + data[i].EmailAddress + "</td></tr>";
            $("#EmployeeTable_Body").append(newEmployeeRow);
        }
    });
}

function UpdateEmployee(employeeId, firstName, lastName, emailAddress) {
    $.ajax({
        type: "POST",
        url: "/Home/UpdateEmployee/",
        data: {
            employeeId: employeeId,
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
        }
    });
}

function DeleteEmployee(employeeId) {
    $.ajax({
        type: "POST",
        url: "/Home/DeleteEmployee/",
        data: {
            employeeId: employeeId
        }
    });
}

function GetEmployeeRow(employeeRecordObj) {
    $("#EmployeeTable_Body").on("click", "tr", function () {
        let rowData = $(this).children();
        let rowDataValues = [];

        for (let i = 0; i < rowData.length; i++) {
            rowDataValues.push(rowData[i].innerText);
        }

        employeeRecordObj.employeeId = rowDataValues[0];
        employeeRecordObj.firstName = rowDataValues[1];
        employeeRecordObj.lastName = rowDataValues[2];
        employeeRecordObj.emailAddress = rowDataValues[3];

        console.log(employeeRecordObj);
    });
}
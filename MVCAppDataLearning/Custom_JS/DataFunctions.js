$(document).ready(function () {
    $("#CreateNewEmployee_SubmitBtn").on("click", function () {
        let firstName = $("#FirstNameInput").val();
        let lastName = $("#LastNameInput").val();
        let emailAddress = $("#EmailAddressInput").val();

        CreateEmployee(firstName, lastName, emailAddress);
    });

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

function ReadEmployees() {
    $.ajax({
        type: "GET",
        url: "/Home/ReadEmployees/",
        success: function (data) {
            console.log(data);
        }
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
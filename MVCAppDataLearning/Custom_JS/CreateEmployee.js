$(document).ready(function () {
    $("#CreateNewEmployee_SubmitBtn").on("click", function () {
        let firstName = $("#FirstNameInput").val();
        let lastName = $("#LastNameInput").val();
        let emailAddress = $("#EmailAddressInput").val();

        CreateEmployee(firstName, lastName, emailAddress);
    });
});

function CreateEmployee(firstName, lastName, emailAddress) {
    $.ajax({
        url: "CreateNewEmployee/",
        data: {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
        },
        success: console.log("Record added sucessfully"),
        error: console.log("Failed to insert new record")
    });
}
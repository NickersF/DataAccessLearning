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
        type: "POST",
        url: "CreateEmployee/",
        data: {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
        }
    });
}
$(document).ready(function () {
    $("#UpdateEmployee_SubmitBtn").on("click", function () {
        let firstName = $("#FirstNameInput").val();
        let lastName = $("#LastNameInput").val();
        let emailAddress = $("#EmailAddressInput").val();

        UpdateEmployee(firstName, lastName, emailAddress);
    });
});

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
document.addEventListener("DOMContentLoaded", function () {
 document.querySelector("#submit").addEventListener("click", function () {
   // Retrieve form values
   var firstName = document.querySelector("#first-name").value;
   var bloodGroup = document.querySelector("#bloodGroup").value;
   var date = document.querySelector("#date").value;
   var gender = document.querySelector("#gender").value;
   var description = document.querySelector("#description").value;
   var city = document.querySelector("#city").value;
   var state = document.querySelector("#state").value;
   var district = document.querySelector("#district").value;
   var pinCode = document.querySelector("#pin-code").value;
   var country = document.querySelector("#country").value;
   var occupation = document.querySelector("#occupation").value;
   var mobileNumber = document.querySelector("#mobile").value;
   var email = document.querySelector("#email").value;
   var address = document.querySelector("#text").value;
   
   var messageDiv = document.querySelector("#message");

   // Check if all fields are filled
   if (
     !firstName ||
     !bloodGroup ||
     !date ||
     !gender ||
     !address ||
     !description ||
     !city ||
     !state ||
     !district ||
     !pinCode ||
     !country ||
     !occupation ||
     !mobileNumber ||
     !email
   ) {
     // Show error message in red
     messageDiv.textContent = "Please fill out all required fields.";
     messageDiv.className = "message-box error"; // Apply error style
     messageDiv.style.display = "block";
   } else {
     // Store values in local storage
     localStorage.setItem("firstName", firstName);
     localStorage.setItem("bloodGroup", bloodGroup);
     localStorage.setItem("date", date);
     localStorage.setItem("gender", gender);
     localStorage.setItem("address", address);
     localStorage.setItem("description", description);
     localStorage.setItem("city", city);
     localStorage.setItem("state", state);
     localStorage.setItem("district", district);
     localStorage.setItem("pinCode", pinCode);
     localStorage.setItem("country", country);
     localStorage.setItem("occupation", occupation);
     localStorage.setItem("mobileNumber", mobileNumber);
     localStorage.setItem("email", email);

     // Show success message in green
     messageDiv.textContent = "Form data saved successfully!";
     messageDiv.className = "message-box success"; // Apply success style
     messageDiv.style.display = "block";

     // Clear all input fields
     document.querySelector("#first-name").value = "";
     document.querySelector("#bloodGroup").value = "";
     document.querySelector("#date").value = "";
     document.querySelector("#gender").value = "";
     document.querySelector("#address").value = "";
     document.querySelector("#description").value = "";
     document.querySelector("#city").value = "";
     document.querySelector("#state").value = "";
     document.querySelector("#district").value = "";
     document.querySelector("#pin-code").value = "";
     document.querySelector("#country").value = "";
     document.querySelector("#occupation").value = "";
     document.querySelector("#mobile").value = "";
     document.querySelector("#email").value = "";
   }
 });
});

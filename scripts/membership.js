document.addEventListener("DOMContentLoaded", function () {
 document.querySelector("#Submit").addEventListener("click", function () {
   // Retrieve form values
   var firstName = document.querySelector("#first-name").value;
   var lastName = document.querySelector("#last-name").value;
   var bloodGroup = document.querySelector("#bloodGroup").value;
   var dob = document.querySelector("#date").value;
   var gender = document.querySelector("#gender").value;
   var address = document.querySelector("#text").value;
   var city = document.querySelector("#city").value;
   var state = document.querySelector("#State").value;
   var district = document.querySelector("#district").value;
   var pinCode = document.querySelector("#pin-code").value;
   var country = document.querySelector("#country").value;
   var occupation = document.querySelector("#occupation").value;
   var mobileNumber = document.querySelector("#mobile").value;
   var email = document.querySelector("#email").value;
   var bloodDonor = document.querySelector('input[name="value"]:checked') ? document.querySelector('input[name="value"]:checked').value : null;
   var messageDiv = document.querySelector("#message");

   // Validation
   if (
     !firstName ||
     !lastName ||
     !bloodGroup ||
     !dob ||
     !gender ||
     !address ||
     !city ||
     !state ||
     !district ||
     !pinCode ||
     !country ||
     !occupation ||
     !mobileNumber ||
     !email ||
     !bloodDonor
   ) {
     messageDiv.textContent = "Please fill out all required fields.";
     messageDiv.className = "message-box error";
     messageDiv.style.display = "block";
   } else {
     // Simple validation for phone and email
     var phoneRegex = /^[0-9]{10}$/;
     var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

     if (!phoneRegex.test(mobileNumber)) {
       messageDiv.textContent = "Please enter a valid 10-digit phone number.";
       messageDiv.className = "message-box error";
       messageDiv.style.display = "block";
     } else if (!emailRegex.test(email)) {
       messageDiv.textContent = "Please enter a valid email address.";
       messageDiv.className = "message-box error";
       messageDiv.style.display = "block";
     } else {
       // Store values in local storage
       localStorage.setItem("firstName", firstName);
       localStorage.setItem("lastName", lastName);
       localStorage.setItem("bloodGroup", bloodGroup);
       localStorage.setItem("dob", dob);
       localStorage.setItem("gender", gender);
       localStorage.setItem("address", address);
       localStorage.setItem("city", city);
       localStorage.setItem("state", state);
       localStorage.setItem("district", district);
       localStorage.setItem("pinCode", pinCode);
       localStorage.setItem("country", country);
       localStorage.setItem("occupation", occupation);
       localStorage.setItem("mobileNumber", mobileNumber);
       localStorage.setItem("email", email);
       localStorage.setItem("bloodDonor", bloodDonor);

       // Show success message
       messageDiv.textContent = "Registration successful!";
       messageDiv.className = "message-box success";
       messageDiv.style.display = "block";
     }
   } 
   
 });
});

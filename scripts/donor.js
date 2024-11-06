document.addEventListener("DOMContentLoaded", function () {
 document
   .querySelector("#Submit")
   .addEventListener("click", function () {
     var FirstName = document.querySelector("#first-name").value;
     var LastName = document.querySelector("#last-name").value;
     var BloodGroup = document.querySelector("#bloodGroup").value;
     var DOB = document.querySelector("#date").value;
     var Gender = document.querySelector("#gender").value;
     var Address = document.querySelector("#text").value;
     var City = document.querySelector("#city").value;
     var State = document.querySelector("#State").value;
     var District = document.querySelector("#district").value;
     var PinCode = document.querySelector("#pin-code").value;
     var Country = document.querySelector("#country").value;
     var Occupation = document.querySelector("#Occupation").value;
     var MobileNum = document.querySelector("#mobile").value;
     var Email = document.querySelector("#email").value;
     var messageDiv = document.querySelector("#message");

     if (
       !FirstName ||
       !LastName ||
       !BloodGroup ||
       !DOB ||
       !Gender ||
       !Address ||
       !City ||
       !State ||
       !District ||
       !PinCode ||
       !Country ||
       !Occupation ||
       !MobileNum ||
       !Email
     ) {
       messageDiv.textContent = "Please fill out all required fields.";
       messageDiv.className = "message-box error";
       messageDiv.style.display = "block";
     } else {
       // Simple validation for phone and email
       var phoneRegex = /^[0-9]{10}$/;
       var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

       if (!phoneRegex.test(MobileNum)) {
         messageDiv.textContent = "Please enter a valid 10-digit phone number.";
         messageDiv.className = "message-box error";
         messageDiv.style.display = "block";
       } else if (!emailRegex.test(Email)) {
         messageDiv.textContent = "Please enter a valid email address.";
         messageDiv.className = "message-box error";
         messageDiv.style.display = "block";
       } else {
         // Store values in local storage
         localStorage.setItem("FirstName", FirstName);
         localStorage.setItem("LastName", LastName);
         localStorage.setItem("BloodGroup", BloodGroup);
         localStorage.setItem("DOB", DOB);
         localStorage.setItem("Gender", Gender);
         localStorage.setItem("Address", Address);
         localStorage.setItem("City", City);
         localStorage.setItem("State", State);
         localStorage.setItem("District", District);
         localStorage.setItem("PinCode", PinCode);
         localStorage.setItem("Country", Country);
         localStorage.setItem("Occupation", Occupation);
         localStorage.setItem("MobileNum", MobileNum);
         localStorage.setItem("Email", Email);

         // Show success message
         messageDiv.textContent = "Registration successful!";
         messageDiv.className = "message-box success";
         messageDiv.style.display = "block";
       }
     }
   });
});

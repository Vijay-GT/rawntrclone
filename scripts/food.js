document.addEventListener("DOMContentLoaded", function () { 
 document.querySelector("#submit").addEventListener("click", function () { 
   var FirstName = document.querySelector("#first-name").value;
   var Gender = document.querySelector("#gender").value;
   var Address = document.querySelector("#text").value;
   var City = document.querySelector("#city").value;
   var State = document.querySelector("#State").value;
   var District = document.querySelector("#District").value;
   var Country = document.querySelector("#country").value;
   var MobileNum = document.querySelector("#mobile").value;
   var messageDiv = document.querySelector("#message"); // Added declaration

   if (
     !FirstName ||
     !Gender ||
     !Address ||
     !City ||
     !State ||
     !District ||
     !Country ||
     !MobileNum
   ) {
     messageDiv.textContent = "Please fill out all required fields.";
     messageDiv.className = "message-box error";
     messageDiv.style.display = "block";
   } else { 
     // Simple validation for phone number
     var phoneRegex = /^[0-9]{10}$/;
     
     if (!phoneRegex.test(MobileNum)) {
       messageDiv.textContent = "Please enter a valid 10-digit phone number.";
       messageDiv.className = "message-box error";
       messageDiv.style.display = "block";
     } else {
       // Store values in local storage
       localStorage.setItem("FirstName", FirstName);
       localStorage.setItem("Gender", Gender);
       localStorage.setItem("Address", Address);
       localStorage.setItem("City", City);
       localStorage.setItem("State", State);
       localStorage.setItem("District", District);
       localStorage.setItem("Country", Country);
       localStorage.setItem("MobileNum", MobileNum);

       // Show success message
       messageDiv.textContent = "Registration successful!";
       messageDiv.className = "message-box success";
       messageDiv.style.display = "block";
     }
   }
 });
});

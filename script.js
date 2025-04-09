// Initialize EmailJS with your public key (User ID).
// Replace "YOUR_PUBLIC_KEY" with your actual EmailJS public key.
// Add event listener to the waitlist form.
  

document.getElementById("waitlistForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Retrieve the user's email input.
    const userEmail = document.getElementById("userEmail").value;
    
    // Parameters for sending a notification email to you (the owner).
    const ownerEmailParams = {
      to_email: "washmy.info@gmail.com", // Your email address
      from_email: userEmail,
      subject_line: "New Waitlist Subscription",
      message: `A new user has subscribed to the Wash Me waitlist!\n\nUser's Email: ${userEmail}`
    };
    
    // Send the owner's email using EmailJS.
    emailjs.send("service_ki25w7j", "template_6jawkkn", ownerEmailParams)
      .then(function(response) {
        console.log("Owner notification sent successfully:", response.status, response.text);
      }, function(error) {
        console.error("Failed to send owner notification:", error);
      });
      
    // Parameters for sending a thank-you email to the subscriber.
    const userEmailParams = {
      to_email: userEmail,
      from_email:"washmy.info@gmail.com",
      subject_line: "Thank you for your interest in Washmy!",
      message: `Thank you for joining the Washmy waitlist. We appreciate your interest and will keep you updated as soon as the app is available for download on IOS and Android!`
    };
    
    // Send the confirmation email to the user using EmailJS.
    emailjs.send("service_ki25w7j", "template_6jawkkn", userEmailParams)
      .then(function(response) {
        console.log("User confirmation sent successfully:", response.status, response.text);
        alert("Thank you! You've been added to our waitlist.");
        document.getElementById("waitlistForm").reset();
      }, function(error) {
        console.error("Failed to send user confirmation:", error);
        alert("Sorry, there was an issue. Please try again later.");
      });
  });
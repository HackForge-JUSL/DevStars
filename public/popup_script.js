document.addEventListener("DOMContentLoaded", function() {
    const studentNameElement = document.getElementById("studentName");
    const joinClassBtn = document.getElementById("joinClassBtn");
    const popupOverlay = document.getElementById("popupOverlay");
    const closePopupBtn = document.getElementById("closePopup");
    const joinClassForm = document.getElementById("joinClassForm");
  
    // Replace student name with actual name (You can get this from the server-side)
    
  
    // Show the popup when "Join a New Class" button is clicked
    joinClassBtn.addEventListener("click", function() {
      popupOverlay.style.display = "flex";
    });
  
    // Close the popup when "Close" button is clicked
    closePopupBtn.addEventListener("click", function() {
      popupOverlay.style.display = "none";
    });
  
    // Handle form submission for joining a new class
    
  });
  
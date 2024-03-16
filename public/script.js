function toggleLogin() {
    const loginType = document.getElementById('loginType');
    const toggle = document.getElementById('toggleType');
    if (toggle.checked) {
      loginType.innerText = 'Teacher'; 
      document.getElementById("id").placeholder="Enter your Teacher ID";
      document.getElementById("invind").value="Teacher";
    } else {
      loginType.innerText = 'Student';
      document.getElementById("id").placeholder="Enter your Student ID";
      document.getElementById("invind").value="Student";
    }
  }
  
  
  toggleLogin();
  
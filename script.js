//your JS code here. If required.
const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");
    const submitBtn = document.getElementById("submit");

    // ---------------------------
    // SHOW EXISTING USER BUTTON IF DATA EXISTS
    // ---------------------------
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      existingBtn.style.display = "block";
    }

    // ---------------------------
    // SUBMIT BUTTON CLICK EVENT
    // ---------------------------
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault(); // form submit ko rokna hai

      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      if (checkbox.checked) {
        // Save to localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block";
      } else {
        // Remove saved data
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
      }
    });

    // ---------------------------
    // LOGIN AS EXISTING USER
    // ---------------------------
    existingBtn.addEventListener("click", function () {
      const saved = localStorage.getItem("username");
      alert(`Logged in as ${saved}`);
    });
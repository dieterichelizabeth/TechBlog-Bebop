async function loginFormHandler(event) {
  event.preventDefault();

  // Define username and password
  const username = document.querySelector("#loginUsername").value.trim();
  const userPassword = document
    .querySelector("#loginUserPassword")
    .value.trim();

  // Post request: Login/create a new session for the user
  if (username && userPassword) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        userPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // If response okay, return to homepage
    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

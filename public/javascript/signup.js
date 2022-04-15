async function signupFormHandler(event) {
  event.preventDefault();

  // Define the username and password
  const username = document.querySelector("#signupUsername").value.trim();
  const userPassword = document
    .querySelector("#signupUserPassword")
    .value.trim();

  // Post request: create new user
  if (username && userPassword) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        userPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // If okay, return to the homepage
    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);

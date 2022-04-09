async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#loginUsername").value.trim();
  const userPassword = document
    .querySelector("#loginUserPassword")
    .value.trim();

  if (username && userPassword) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        userPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });

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

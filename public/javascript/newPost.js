console.log("now listeneing");
async function loginFormHandler(event) {
  event.preventDefault();

  const user_id = session.user_id;
  const title = document.querySelector("#email-login").value.trim();
  const body = document.querySelector("#password-login").value.trim();

  if (title && body) {
    const response = await fetch("/api/posts", {
      method: "post",
      body: JSON.stringify({
        title,
        body,
        user_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector("#newPostForm")
  .addEventListener("submit", loginFormHandler);

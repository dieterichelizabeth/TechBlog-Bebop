async function postFormHandler(event) {
  event.preventDefault();

  var idEl = document.querySelector(".post_ref");
  const user_id = idEl.innerHTML;
  const title = document.querySelector("#postTitle").value.trim();
  const body = document.querySelector("#postBody").value.trim();

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
  .addEventListener("submit", postFormHandler);

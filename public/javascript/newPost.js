async function postFormHandler(event) {
  event.preventDefault();

  // Define the post title and body
  const title = document.querySelector("#postTitle").value.trim();
  const body = document.querySelector("#postBody").value.trim();

  // Post request: create a new post
  if (title && body) {
    const response = await fetch("/api/posts", {
      method: "post",
      body: JSON.stringify({
        title,
        body,
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

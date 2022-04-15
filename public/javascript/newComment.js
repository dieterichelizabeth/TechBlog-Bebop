async function commentFormHandler(event) {
  event.preventDefault();

  // Define the comment body and post id
  const comment_body = document.querySelector("#commentInput").value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // Post request: create a new comment
  if (comment_body && post_id) {
    const response = await fetch("/api/comments", {
      method: "post",
      body: JSON.stringify({
        comment_body,
        post_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // If okay, return to the single post
    if (response.ok) {
      document.location.replace("/post/" + post_id);
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#newcommentForm")
  .addEventListener("submit", commentFormHandler);

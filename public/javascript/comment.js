async function commentFormHandler(event) {
  event.preventDefault();

  const comment_body = document.querySelector("#commentInput").value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_body && post_id) {
    const response = await fetch("/api/comments", {
      method: "post",
      body: JSON.stringify({
        comment_body,
        post_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/post/" + post_id);
    } else {
      alert(response.statusText);
    }
  }
}

async function editPostHandler(event) {
  console.log("editing post");
}

async function deletePostHandler(event) {
  console.log("deleting post");
}

document
  .querySelector("#newcommentForm")
  .addEventListener("submit", commentFormHandler);

document.querySelector("#editPost").addEventListener("click", editPostHandler);

document
  .querySelector("#deletePost")
  .addEventListener("click", deletePostHandler);

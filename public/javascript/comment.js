async function commentFormHandler(event) {
  event.preventDefault();

  const body = document.querySelector("#commentBody").value.trim();
  console.log(body);
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (body && post_id) {
    const response = await fetch("/api/comments", {
      method: "post",
      body: JSON.stringify({
        body,
        post_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/post:" + post_id);
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector("#newcommentForm")
  .addEventListener("submit", commentFormHandler);

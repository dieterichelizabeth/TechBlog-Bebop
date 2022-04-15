async function editCommentHandler(event) {
  const buttonDiv = event.target.parentNode;

  // get the previous comment
  const commentEditor =
    event.target.parentNode.parentNode.parentNode.childNodes[1];
  const previousComment = commentEditor.innerHTML;

  // create the text area
  const textarea = document.createElement("textarea");
  textarea.setAttribute("id", "updatedComment");
  textarea.classList.add("w100");
  textarea.innerHTML = previousComment;
  commentEditor.replaceWith(textarea);

  // disable the edit button
  document.getElementById("editComment").disabled = true;

  // create the save button
  const saveButton = document.createElement("button");
  saveButton.setAttribute("id", "saveComment");
  saveButton.classList.add("editbutton");
  saveButton.innerHTML = "Save";
  buttonDiv.appendChild(saveButton);

  saveCommentButtonHandler();
}

// Handle new "coment" button
function saveCommentButtonHandler() {
  const saveButton = document.getElementById("saveComment");
  saveButton.addEventListener("click", saveCommentHandler);
}

// Save the new Comment
async function saveCommentHandler(event) {
  // get the text area value with updated comment
  const body = document.querySelector("#updatedComment").value.trim();
  const id = event.target.parentNode.id;
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // Put request: Update a comment
  if (id && body) {
    const response = await fetch("/api/comments/" + id, {
      method: "put",
      body: JSON.stringify({
        body,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // If okay, return to single post page
    if (response.ok) {
      document.location.replace("/post/" + post_id);
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelectorAll("#editComment").forEach((item) => {
  item.addEventListener("click", editCommentHandler);
});

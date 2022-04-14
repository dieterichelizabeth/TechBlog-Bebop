async function editPostHandler(event) {
  console.log("editing post");

  const buttonDiv = event.target.parentNode;

  // get the previous post content
  const postEditor = event.target.parentNode.parentNode.childNodes[1];
  const previouspost = postEditor.innerHTML;

  // create the text area
  const textarea = document.createElement("textarea");
  textarea.setAttribute("id", "updatedPost");
  textarea.classList.add("w100");
  textarea.innerHTML = previouspost;
  postEditor.replaceWith(textarea);

  // disable the edit button
  document.getElementById("editPost").disabled = true;

  // create the save button
  const saveButton = document.createElement("button");
  saveButton.setAttribute("id", "savePost");
  saveButton.classList.add("editbutton");
  saveButton.innerHTML = "Save";
  buttonDiv.appendChild(saveButton);

  saveButtonHandler();
}

function saveButtonHandler() {
  const saveButton = document.getElementById("savePost");
  saveButton.addEventListener("click", savePostHandler);
}

// Save the new Comment
async function savePostHandler(event) {
  // get the text area value with updated post body
  const body = document.querySelector("#updatedPost").value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // post put route
  if (body) {
    const response = await fetch("/api/posts/" + post_id, {
      method: "put",
      body: JSON.stringify({
        body,
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

document.querySelector("#editPost").addEventListener("click", editPostHandler);
